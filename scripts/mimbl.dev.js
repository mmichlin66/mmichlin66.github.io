(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mimbl"] = factory();
	else
		root["mimbl"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mimblTypes.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/ClassVN.ts":
/*!*****************************!*\
  !*** ./src/core/ClassVN.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ./mim */ "./src/core/mim.ts");
const CompBaseVN_1 = __webpack_require__(/*! ./CompBaseVN */ "./src/core/CompBaseVN.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ./Stats */ "./src/core/Stats.ts");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Represents a component implementing the IComponent<> interface.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ClassVN extends CompBaseVN_1.CompBaseVN {
    constructor(compClass, props, children) {
        super(2 /* ClassComp */);
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
        // default node name is the component's class name plus key if specified
        this.name = this.compClass.name;
        if (this.key !== undefined && this.key !== null)
            this.name += " @" + this.key;
    }
    ;
    // IClassVN implementation
    get CompClass() { return this.compClass; }
    get Comp() { return this.comp; }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        // create component instance
        this.comp = new this.compClass(this.props);
        this.comp.setSite(this);
        if (this.comp.componentWillMount)
            this.comp.componentWillMount();
        // set the reference value if specified
        if (this.ref !== undefined)
            mim.setRef(this.ref, this.comp);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
        ////////////
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the Commit phase.
    willUnmount() {
        // unset the reference value if specified. We check whether the reference still points
        // to our component before setting it to undefined. If the same Ref object is used for
        // more than one components (and/or elements) it can happen that the reference is changed
        // before our component is unmounted.
        if (this.ref !== undefined)
            mim.setRef(this.ref, undefined, this.comp);
        if (this.comp.componentWillUnmount)
            this.comp.componentWillUnmount();
        this.comp.setSite(null);
        this.comp = undefined;
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
        ////////////
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
        if (this.comp.shouldComponentUpdate !== undefined)
            shouldRender = this.comp.shouldComponentUpdate(newClassVN.props);
        // if reference specification changed then set or unset it as necessary
        if (newClassVN.ref !== this.ref) {
            // remember the new reference object
            this.ref = newClassVN.ref;
            // if reference is now specified, set it now; note that we already determined that
            // the reference object is different.
            if (this.ref !== undefined)
                mim.setRef(this.ref, this.comp);
        }
        else if (newClassVN.ref === undefined) {
            // we know that our reference is defined, so unset it
            mim.setRef(this.ref, undefined, this.comp);
        }
        // remeber the new value of the key property (even if it is the same)
        this.key = newClassVN.key;
        // shallow copy the new properties from the other node to our object. This is needed
        // because the component got our props object in the constructor and will keep
        // working with it - especially if it doesn't implement the shouldComponentUpdate method.
        Object.keys(this.props).forEach(key => delete this.props[key]);
        Object.assign(this.props, newClassVN.props);
        // since the rendering produced by a function may depend on factors beyond properties,
        // we always indicate that it is necessary to update the sub-nodes. The commitUpdate
        // method should NOT be called.
        return { shouldCommit: false, shouldRender };
    }
}
exports.ClassVN = ClassVN;


/***/ }),

/***/ "./src/core/CompBaseVN.ts":
/*!********************************!*\
  !*** ./src/core/CompBaseVN.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ./Stats */ "./src/core/Stats.ts");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The class CompBaseVN is a base class for InstanceVN and ClassVN. It provides common functionality
// in terms of update requests and lifecycle management.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class CompBaseVN extends VN_1.VN {
    constructor(type) {
        super(type);
    }
    ;
    /////////////////
    getStatsCategory() { return Stats_1.StatsCategory.Comp; }
    //////////
    // Generates list of sub-nodes according to the current state
    render() {
        ///////////////
        if (this.comp === undefined) {
            console.error("render() was called on unmounted component.");
            return null;
        }
        ////////////
        //////////////////////
        /////////////////////////////////////////////////////////////////////////
        ////////////
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Rendered);
        ////////////
        return this.comp.render();
    }
    // Determines whether the node supports handling of errors; that is, exception thrown during
    // rendering of the node itself and/or its sub-nodes.
    supportsErrorHandling() {
        return this.comp.handleError !== undefined;
    }
    // This method is called after an exception was thrown during rendering of the node itself
    // and/or its sub-nodes.
    handleError(err, path) {
        this.comp.handleError(err, path);
    }
    // This method is called after the content of node and all its sub-nodes has been inserted
    // into the DOM tree.
    didMount() {
        if (this.comp.componentDidMount)
            this.comp.componentDidMount();
    }
    // This method is called after the content of node and all its sub-nodes has been updated
    // in the DOM tree.
    didUpdate() {
        if (this.comp.componentDidUpdate)
            this.comp.componentDidUpdate();
    }
    // Returns DOM node corresponding to the virtual node itself and not to any of its sub-nodes.
    getOwnDN() {
        // components don't have their own DOM node
        return null;
    }
}
exports.CompBaseVN = CompBaseVN;


/***/ }),

/***/ "./src/core/ElmAttr.ts":
/*!*****************************!*\
  !*** ./src/core/ElmAttr.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/////////////////
const Stats_1 = __webpack_require__(/*! ./Stats */ "./src/core/Stats.ts");
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
            elm.setAttribute(propName, typeof propVal === "string" ? propVal : propVal.toString());
        else {
            // get actual attribute name to use
            let attrName = info.attrName;
            if (attrName === undefined)
                attrName = propName;
            if (info.set !== undefined)
                info.set(elm, attrName, propVal);
            else
                elm.setAttribute(attrName, typeof propVal === "string" ? propVal : propVal.toString());
        }
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Added);
        ////////////
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
                elm.setAttribute(propName, typeof newPropVal === "string" ? newPropVal : newPropVal.toString());
                /////////////////////
                Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Updated);
                //////////////
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
                elm.setAttribute(attrName, typeof updateVal === "string" ? updateVal : updateVal.toString());
        }
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Updated);
        ////////////
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
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Deleted);
        ////////////
    }
}
// Object that maps property names to PropInfo-derived objects.
ElmAttr.propInfos = {
    // attributes - only those attributes are listed that have non-trivial treatment
    "style": { type: 1 /* Attr */, set: setStyleProp, diff: diffStyleProp, update: updateStyleProp },
    "value": { type: 1 /* Attr */, set: setValueProp, diff: diffValueProp, remove: removeValueProp },
    "defaultValue": { type: 1 /* Attr */, set: setValueProp, diff: diffDefaultValueProp, remove: removeDefaultValueProp },
    "checked": { type: 1 /* Attr */, set: setCheckedProp, diff: diffCheckedProp, remove: removeCheckedProp },
    "defaultChecked": { type: 1 /* Attr */, set: setCheckedProp, diff: diffDefaultValueProp, remove: removeDefaultValueProp },
    // event listeners - only those event are listed that are non-bubbling
    "mouseenter": { type: 2 /* Event */, isBubbling: false },
    "mouseleave": { type: 2 /* Event */, isBubbling: false },
};
exports.ElmAttr = ElmAttr;
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
// CSSStyleDeclaration object. If the old and new style property values are of different types
// the diff function returns the new style value. If both are of the string type, then the new
// string value is returned. If both are of the CSSStyleDeclaration type, then an object is
// returned whose keys correspond to style items that should be changed. For updated items, the
// key value is from the new style value; for removed items, the key value is undefined.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function setStyleProp(elm, attrName, propVal) {
    if (propVal === undefined || propVal === null)
        elm.removeAttribute("style");
    else {
        const elmStyle = elm.style;
        for (let key in propVal) {
            const keyVal = propVal[key];
            if (elmStyle[key] !== keyVal)
                elmStyle[key] = keyVal;
        }
    }
}
function diffStyleProp(attrName, oldPropVal, newPropVal) {
    const oldPropType = typeof oldPropVal;
    const newPropType = typeof newPropVal;
    if (oldPropType !== newPropType)
        return newPropVal;
    else {
        const oldStyle = oldPropVal;
        const newStyle = newPropVal;
        const updateVal = {};
        let changesExist = false;
        // loop over keys in the old style object and find those that are not in the new one. These
        // will be removed.
        for (let key in oldStyle) {
            const oldVal = oldStyle[key];
            const newVal = newStyle[key];
            if (newVal === undefined) {
                changesExist = true;
                updateVal[key] = undefined;
            }
            else if (newVal !== oldVal) {
                changesExist = true;
                updateVal[key] = newVal;
            }
        }
        // loop over keys in the new style object and find those that are not in the old one. These
        // will be added.
        for (let key in newStyle) {
            const oldVal = oldStyle[key];
            if (oldVal === undefined) {
                changesExist = true;
                updateVal[key] = newStyle[key];
            }
        }
        return changesExist ? updateVal : undefined;
    }
}
function updateStyleProp(elm, attrName, updateVal) {
    const elmStyle = elm.style;
    for (let key in updateVal) {
        const keyVal = updateVal[key];
        if (keyVal === undefined)
            elmStyle[key] = null;
        //elmStyle[key] = "initial";
        else
            elmStyle[key] = keyVal;
    }
}
//// Determines whether the first style is a complete subset of the second one; that is keys
//// in the first style are all found and have the same values in the second style.
//function isStyle1SubsetOfStyle2( style1: Object, style2: Object): boolean
//{
//	for( let key1 in style1)
//	{
//		if (style1[key1] !== style2[key1])
//			return false;
//	}
//	return true;
//}
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

/***/ "./src/core/ElmVN.ts":
/*!***************************!*\
  !*** ./src/core/ElmVN.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ./mim */ "./src/core/mim.ts");
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const ElmAttr_1 = __webpack_require__(/*! ./ElmAttr */ "./src/core/ElmAttr.ts");
const SvgElms_1 = __webpack_require__(/*! ./SvgElms */ "./src/core/SvgElms.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ./Stats */ "./src/core/Stats.ts");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Represents a DOM element created using JSX.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ElmVN extends VN_1.VN {
    constructor(tagName, props, children) {
        super(4 /* Elm */);
        // Instance of an Element. The instance is created when the node is rendered for the first
        // time.
        this.elm = null;
        // Object that serves as a map between attribute names and their current values.
        this.attrs = {};
        // Object that serves as a map between names of event listeners and their respective
        // parameters.
        this.events = {};
        // Object that serves as a map between names of custom element properties and their respective
        // handler objects and values.
        this.customAttrs = {};
        // determine whether this is an SVG or HTML element
        let svgInfo = SvgElms_1.SvgElms.getSvgElmInfo(tagName);
        if (svgInfo !== undefined) {
            // the isSvg flag may remain undefined for the dual-purpose tags. In this case it will
            // be determined upon mounting.
            this.isSvg = SvgElms_1.SvgElms.isDualPurpose(svgInfo) ? undefined : true;
            this.elmName = SvgElms_1.SvgElms.getElmName(svgInfo, tagName);
        }
        else {
            this.isSvg = false;
            this.elmName = tagName;
        }
        // remember children
        this.children = children;
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
            // if key property was not specified, use id; if id was not specified key wil remain
            // undefined.
            if (this.key === undefined)
                this.key = props.id;
        }
        // node name is the element's name plus key (or id) if specified.
        this.name = this.elmName;
        if (this.key !== undefined && this.key !== null)
            this.name += "@" + this.key;
    }
    // IElmVN implementation
    get ElmName() { return this.elmName; }
    get Elm() { return this.elm; }
    get IsSvg() { return this.isSvg; }
    /////////////////
    getStatsCategory() { return Stats_1.StatsCategory.Elm; }
    //////////
    // Generates list of sub-nodes according to the current state
    render() {
        return this.children;
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        // if we don't know yet whether this is an SVG element or not (whch can happen for
        // dual-purpose elements), determine it now by walking up the chain of parents and
        // checking whether thee is an <svg> element there
        if (this.isSvg === undefined) {
            for (let parent = this.parent; parent != null; parent = parent.parent) {
                if (parent.type === 4 /* Elm */ && parent.elmName === "svg") {
                    this.isSvg = true;
                    break;
                }
            }
            // if the flag is still not determined after the parent loop, set it to false.
            if (this.isSvg === undefined)
                this.isSvg = false;
        }
        this.parseProps();
    }
    // Inserts the virtual node's content into DOM.
    // This method is part of the Commit phase.
    mount() {
        // create the element
        this.elm = this.isSvg
            ? document.createElementNS(SvgElms_1.SvgElms.namespace, this.elmName)
            : document.createElement(this.elmName);
        this.addAttrs();
        this.addEvents();
        this.addCustomAttrs();
        // set the value of the reference (if specified)
        if (this.ref !== undefined)
            mim.setRef(this.ref, this.elm);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Elm, Stats_1.StatsAction.Added);
        ////////////
    }
    // Removes content from the DOM tree.
    // This method is part of the Commit phase.
    unmount() {
        // unset the reference value if specified. We check whether the reference still points
        // to our element before setting it to undefined. If the same Ref object is used for
        // more than one element (and/or components) it can happen that the reference is changed
        // before our element is unmounted.
        if (this.ref !== undefined)
            mim.setRef(this.ref, undefined, this.elm);
        ////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////
        ///////////////////////////////
        ////////////
        // terminate custom property handlers
        this.removeCustomAttrs();
        // clean up
        this.elm = null;
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Elm, Stats_1.StatsAction.Deleted);
        ////////////
    }
    // Determines whether the update of this node from the given node is possible. The newVN
    // parameter is guaranteed to point to a VN of the same type as this node.
    isUpdatePossible(newVN) {
        // update is possible if this is the same type of element; that is, it has the same
        // name.
        const newElmNode = newVN;
        return this.elmName === newElmNode.elmName;
        // update is possible if this is the same type of element; that is, it has the same
        // name and the same isSvg flag
        // const newElmNode: ElmVN = newVN as ElmVN;
        // return this.isSvg === newElmNode.isSvg && this.elmName === newElmNode.elmName;
    }
    // Prepares this node to be updated from the given node. This method is invoked only if update
    // happens as a result of rendering the parent nodes. The newVN parameter is guaranteed to
    // point to a VN of the same type as this node. The returned object indicates whether children
    // should be updated and whether the commitUpdate method should be called.
    // This method is part of the Render phase.
    prepareUpdate(newVN) {
        const newElmVN = newVN;
        // remember the new props and children
        this.props = newElmVN.props;
        this.children = newElmVN.children;
        // commitUpdate method should be called and children will have to be updated via render
        return { shouldCommit: true, shouldRender: true };
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
                mim.setRef(this.ref, this.elm);
        }
        // remeber the new value of the key property (even if it is the same)
        this.key = newElmVN.key;
        this.updateAttrs(newElmVN.attrs);
        this.updateEvents(newElmVN.events);
        this.updateCustomAttrs(newElmVN.customAttrs);
    }
    // Returns DOM node corresponding to the virtual node itself and not to any of its sub-nodes.
    getOwnDN() {
        return this.elm;
    }
    // Goes over the original properties and puts them into the buckets of attributes, event
    // listeners and custom attributes.
    parseProps() {
        if (!this.props)
            return;
        for (let propName in this.props) {
            let propVal = this.props[propName];
            // get information about the property and determine its type (regular attribute, event
            // or custom attribute). Note that getPropertyInfo may return null for most regular
            // attributes and events; in this case we will check the property value.
            let propInfo = ElmAttr_1.ElmAttr.getPropertyInfo(propName);
            let propType = propInfo ? propInfo.type : 0 /* Unknown */;
            if (!propInfo)
                propType = this.IsEventValue(propVal) ? 2 /* Event */ : 1 /* Attr */;
            if (propType === 1 /* Attr */)
                this.attrs[propName] = { info: propInfo, val: propVal };
            else if (propType === 2 /* Event */) {
                let eventInfo = this.GetPropAsEventRunTimeData(propInfo, propVal);
                if (eventInfo)
                    this.events[propName] = eventInfo;
            }
            else // if (propType === PropType.CustomAttr)
             {
                // remember custome attributes value. Handler will be created later.
                this.customAttrs[propName] = { info: propInfo, val: propVal,
                    handler: undefined };
            }
        }
    }
    // Determines whether the given property value is of the type that is used for event handlers.
    // If yes, then returns EventRunTimeData object; otherwise, returns undefined.
    IsEventValue(propVal) {
        return typeof propVal === "function" ||
            Array.isArray(propVal) && propVal.length > 0 && typeof propVal[0] === "function";
    }
    // Determines whether the given property value is of the type that is used for event handlers.
    // If yes, then returns EventRunTimeData object; otherwise, returns undefined.
    GetPropAsEventRunTimeData(info, propVal) {
        if (typeof propVal === "function") {
            let orgFunc = propVal;
            return { info, orgFunc, useCapture: false };
        }
        else if (Array.isArray(propVal) && propVal.length === 2 &&
            typeof propVal[0] === "function" && typeof propVal[1] === "boolean") {
            let orgFunc = propVal[0];
            let wrapper = EventHandlerWrapper.bind(this, orgFunc);
            return { info, orgFunc, useCapture: propVal[1] };
        }
        // for all other type combinations consider it to be a regular attribute
        return undefined;
    }
    // Adds DOM attributes to the Element.
    addAttrs() {
        let elm = this.elm;
        for (let name in this.attrs) {
            let rtd = this.attrs[name];
            ElmAttr_1.ElmAttr.setAttr(elm, name, rtd.info, rtd.val);
        }
    }
    // Updates DOM attributes of this Element.
    updateAttrs(newAttrs) {
        // "cache" several memebers for faster access
        let elm = this.elm;
        let oldAttrs = this.attrs;
        // loop over existing attributes, remove those that are not found among the new ones and
        // update those whose value has changed
        for (let name in oldAttrs) {
            let oldRTD = oldAttrs[name];
            let newRTD = newAttrs[name];
            if (newRTD === undefined || newRTD.val === undefined) {
                // if there is no new property with the given name, remove the old property and
                // remove the attribute from the element
                ElmAttr_1.ElmAttr.removeAttr(elm, name, oldRTD.info);
            }
            else {
                // if the new property with the given name has a different value, remmeber this
                // value and set it to the attribute in the element
                ElmAttr_1.ElmAttr.updateAttr(elm, name, oldRTD.info, oldRTD.val, newRTD.val);
            }
        }
        // loop over new attributes; add those that are not found among the old ones
        for (let name in newAttrs) {
            if (name in oldAttrs)
                continue;
            let newRTD = newAttrs[name];
            ElmAttr_1.ElmAttr.setAttr(elm, name, newRTD.info, newRTD.val);
        }
        this.attrs = newAttrs;
    }
    // Adds information about events to the Element.
    addEvents() {
        for (let name in this.events)
            this.addEvent(name, this.events[name]);
    }
    // Using the given property name and its value set the appropriate attribute(s) on the
    // element. This method handles special cases of properties with non-trivial values.
    addEvent(name, info) {
        info.wrapper = EventHandlerWrapper.bind(this, info.orgFunc);
        this.elm.addEventListener(name, info.wrapper, info.useCapture);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Added);
        ////////////
    }
    // Removes event listeners from the Element.
    removeEventListeners() {
        for (let name in this.events)
            this.removeEvent(name, this.events[name]);
    }
    // Removes the given event listener from the Element.
    removeEvent(name, info) {
        this.elm.removeEventListener(name, info.wrapper, info.useCapture);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Deleted);
        ////////////
    }
    // Adds event listeners to the Element.
    updateEvents(newInfos) {
        let oldInfos = this.events;
        // loop over existing event listeners, remove those that are not found among the new
        // ones and update those whose value has changed
        for (let name in oldInfos) {
            let oldInfo = oldInfos[name];
            let newInfo = newInfos[name];
            if (!newInfo)
                this.removeEvent(name, oldInfo);
            else
                this.updateEvent(name, oldInfo, newInfo);
        }
        // loop over new event listeners and add those that are not found among the old ones
        for (let name in newInfos) {
            if (name in oldInfos)
                continue;
            let newInfo = newInfos[name];
            this.addEvent(name, newInfo);
        }
        this.events = newInfos;
    }
    // Determines whether the old and the new values of the event listener are different and sets
    // the updated value. Returns true if update has been performed and false if no change has
    // been detected.
    updateEvent(name, oldInfo, newInfo) {
        if (oldInfo.orgFunc === newInfo.orgFunc && oldInfo.useCapture === newInfo.useCapture) {
            newInfo.wrapper = oldInfo.wrapper;
            return false;
        }
        this.elm.removeEventListener(name, oldInfo.wrapper, oldInfo.useCapture);
        newInfo.wrapper = EventHandlerWrapper.bind(this, newInfo.orgFunc);
        this.elm.addEventListener(name, newInfo.wrapper, newInfo.useCapture);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Updated);
        ////////////
        // indicate that there was change in attribute value.
        return true;
    }
    // Creates custom attributes.
    addCustomAttrs() {
        // create and initialize custom property handlers
        for (let name in this.customAttrs) {
            let data = this.customAttrs[name];
            // create custom property handler. If we cannot create the handler, remove the property
            // from our object.
            let handler = data.info.factory.createHandler(name);
            if (!handler) {
                delete this.customAttrs[name];
                continue;
            }
            // initialize the handler and remember it in our object
            handler.initialize(this, name, data.val);
            data.handler = handler;
        }
    }
    // Destroys custom attributes of this element.
    removeCustomAttrs() {
        for (let name in this.customAttrs) {
            let info = this.customAttrs[name];
            info.handler.terminate();
        }
    }
    // Updates custom attributes of this node.
    updateCustomAttrs(newCustomProps) {
        let oldCustomProps = this.customAttrs;
        // loop over existing custom properties, remove those that are not found among the new
        // ones and update those whose value has changed
        for (let name in oldCustomProps) {
            const oldInfo = oldCustomProps[name];
            const newInfo = newCustomProps[name];
            if (newInfo === undefined || newInfo === null) {
                // if there is no new property with the given name, remove the old property and
                // terminate its handler
                oldInfo.handler.terminate();
            }
            else {
                // update the custom property and remember the new value
                oldInfo.handler.update(oldInfo.val, newInfo.val);
                newInfo.handler = oldInfo.handler;
            }
        }
        // loop over new custom properties and add those that are not found among the old ones
        for (let name in newCustomProps) {
            if (name in oldCustomProps)
                continue;
            let newInfo = newCustomProps[name];
            // create custom property handler. If we cannot create the handler, remove the property
            // from our object.
            let handler = newInfo.info.factory.createHandler(name);
            if (!handler)
                continue;
            // initialize the handler and remember it in our object
            handler.initialize(this, name, newInfo.val);
            newInfo.handler = handler;
        }
        this.customAttrs = newCustomProps;
    }
}
exports.ElmVN = ElmVN;
// The EventHandlerWrapper function is used to wrap an event handler function assigned to an event
// of the Element. This function catches exceptions from the original event handler and uses the
// "StdErrorHandling" service to report the exception to the nearest node that can handle it.
function EventHandlerWrapper() {
    try {
        let [orgEventHandler, ...rest] = arguments;
        return orgEventHandler(...rest);
    }
    catch (err) {
        let errorService = this.findService("StdErrorHandling");
        if (errorService)
            errorService.reportError(err, this.path);
    }
}
;
;
;


/***/ }),

/***/ "./src/core/EventSlot.ts":
/*!*******************************!*\
  !*** ./src/core/EventSlot.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The EventSlot class defines an event with custom parameters as members of classes without the
// need for the classes to derive from EventTarget and use string names for events. Multiple
// listeners can be added/removed to/from an event.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class EventSlot {
    constructor() {
        // Method that raises the event and calls all the listeners (if any). It has the signature
        // of the template function so only proper-types parameters can be passed to it.
        this.fire = this.realFire;
        // Set of listener functions. When there are no listeners, this field is set to null to
        // preserve space.
        this.listeners = null;
    }
    // Adds the given function as a listener to the event. Note that this should not be a lambda
    // function because there will be no way to remove a lambda function listener later.
    add(listener) {
        if (this.listeners === null)
            this.listeners = new Set();
        this.listeners.add(listener);
    }
    // Removes the given function as a listener to the event.
    remove(listener) {
        if (this.listeners !== null) {
            this.listeners.delete(listener);
            if (this.listeners.size === 0)
                this.listeners = null;
        }
    }
    // Removes all listener to the event.
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
exports.EventSlot = EventSlot;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The EventMultiSlot class allows registering listeners for multiple events. Events are identified
// using the specified template type, which is usually (but not necessarily) a number- or
// string-based enumeration or union type.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class EventMultiSlot {
    // Adds a new listener to the given event
    addListener(event, eventFunc) {
        if (this.slots === undefined)
            this.slots = new Map();
        let slot = this.slots.get(event);
        if (slot === undefined) {
            slot = new EventSlot();
            this.slots.set(event, slot);
        }
        slot.add(eventFunc);
    }
    // Removes the given listener from the given event
    removeListener(event, eventFunc) {
        if (this.slots !== undefined) {
            let slot = this.slots.get(event);
            if (slot !== undefined)
                slot.remove(eventFunc);
        }
    }
}
exports.EventMultiSlot = EventMultiSlot;
class SimpleEventSlot extends EventSlot {
}
exports.SimpleEventSlot = SimpleEventSlot;


/***/ }),

/***/ "./src/core/FuncVN.ts":
/*!****************************!*\
  !*** ./src/core/FuncVN.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ./mim */ "./src/core/mim.ts");
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ./Stats */ "./src/core/Stats.ts");
//////////
/**
 * Represents a rendering function a.k.a. stateless component.
 */
class FuncVN extends VN_1.VN {
    /** Determines whether this node corresponds to a fragment placeholder. */
    static isVNaFragment(vn) {
        return vn.func === mim.Fragment;
    }
    constructor(func, props, children) {
        super(3 /* FuncComp */);
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
            // if key property was not specified, use id; if id was not specified key wil remain
            // undefined.
            if (this.key === undefined)
                this.key = props.id;
        }
        // remember children as part of props
        this.props.children = children;
        // node name is the function's name plus key if specified
        this.name = this.func.name;
        if (this.key !== undefined && this.key !== null)
            this.name += " @" + this.key;
    }
    ;
    /////////////////
    getStatsCategory() { return Stats_1.StatsCategory.Comp; }
    //////////
    // Generates list of sub-nodes according to the current state
    render() {
        //////////////////////
        ////////////////////////////////////////////////////////////////////////
        ////////////
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Rendered);
        ////////////
        return this.func(this.props);
    }
    //////////////////
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the Commit phase.
    willUnmount() {
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
    }
    ///////////
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
        this.props = newFuncVN.props;
        // since the rendering produced by a function may depend on factors beyond properties,
        // we always indicate that it is necessary to update the sub-nodes. The commitUpdate
        // method should NOT be called.
        return { shouldCommit: false, shouldRender: true };
    }
    // Returns DOM node corresponding to the virtual node itself and not to any of its sub-nodes.
    getOwnDN() {
        // components don't have their own DOM node
        return null;
    }
}
exports.FuncVN = FuncVN;


/***/ }),

/***/ "./src/core/InstanceVN.ts":
/*!********************************!*\
  !*** ./src/core/InstanceVN.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const CompBaseVN_1 = __webpack_require__(/*! ./CompBaseVN */ "./src/core/CompBaseVN.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ./Stats */ "./src/core/Stats.ts");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The class InstanceVN is a node that holds an instance of an IComponent-implementing object.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class InstanceVN extends CompBaseVN_1.CompBaseVN {
    constructor(comp) {
        super(1 /* InstanceComp */);
        this.comp = comp;
        // the component object is a key for the node
        this.key = comp;
        // default node name is the component's constructor name
        this.name = this.comp.constructor.name;
    }
    ;
    // IInstanceVN implementation
    get Comp() { return this.comp; }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.willMountInstance(this.comp);
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the Commit phase.
    willUnmount() {
        this.willUnmountInstance(this.comp);
    }
    // Determines whether the update of this node from the given node is possible. The newVN
    // parameter is guaranteed to point to a VN of the same type as this node.
    isUpdatePossible(newVN) {
        // update is possible if the components are from the same class
        return this.comp === newVN.comp ||
            this.comp.constructor === newVN.comp.constructor;
    }
    // Prepares this node to be updated from the given node. This method is invoked only if update
    // happens as a result of rendering the parent nodes. The newVN parameter is guaranteed to
    // point to a VN of the same type as this node. The returned object indicates whether children
    // should be updated and whether the commitUpdate method should be called.
    // This method is part of the Render phase.
    prepareUpdate(newVN) {
        // if it is the same component instance, we don't need to do anything
        let newComp = newVN.comp;
        let needsUpdating = this.comp !== newComp;
        // if the coponent instance are different, then we need to prepare the new instance for
        // mounting.
        if (needsUpdating)
            this.willMountInstance(newComp);
        return { shouldCommit: needsUpdating, shouldRender: needsUpdating };
    }
    // Commits updates made to this node to DOM.
    // This method is part of the Commit phase.
    commitUpdate(newVN) {
        // we are here only if the component instances are different. In this case we should
        // replace the old component with the new one and also replace its characteristics.
        // First indicate that our old component will be unmounted
        this.willUnmountInstance(this.comp);
        let newInstanceVN = newVN;
        this.comp = this.key = newInstanceVN.comp;
        this.name = newInstanceVN.name;
    }
    // Notifies the given component that ir will be mounted.
    willMountInstance(comp) {
        comp.setSite(this);
        if (comp.componentWillMount)
            comp.componentWillMount();
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
        ////////////
    }
    // Notifies the given component that it will be unmounted.
    willUnmountInstance(comp) {
        if (comp.componentWillUnmount)
            comp.componentWillUnmount();
        comp.setSite(null);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
        ////////////
    }
}
exports.InstanceVN = InstanceVN;


/***/ }),

/***/ "./src/core/LocalStyles.ts":
/*!*********************************!*\
  !*** ./src/core/LocalStyles.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ./mim */ "./src/core/mim.ts");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ComponentWithLocalStyles class is a base class for components that define local CSS styles.
// When this component is mounted it creates a new <style> element (within the <head> element).
// All class names and variable names defined within this style will have a unique ID added to
// them in order to avoid duplication of names among other components (of the same or of different
// type. This class also publishes a service implementing the ILocalStyleService
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ComponentWithLocalStyles extends mim.Component {
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
    componentDidMount() {
        this.site.publishService("LocalStyles", this);
    }
    componentWillUnmount() {
        this.site.unpublishService("LocalStyles");
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
exports.ComponentWithLocalStyles = ComponentWithLocalStyles;
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
        for (let propName in props)
            this.cssomRule.style[this.replace(propName)] = this.replace(props[propName]);
    }
    // Sets value for a style property. Property name can use the (*) marker, which will be
    // substituted with the unique ID.
    removeProperty(propName) {
        this.cssomRule.style.removeProperty(this.replace(propName));
    }
}


/***/ }),

/***/ "./src/core/RootUI.tsx":
/*!*****************************!*\
  !*** ./src/core/RootUI.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ./mim */ "./src/core/mim.ts");
class RootErrorUI extends mim.Component {
    constructor(rootVN, err, path) {
        super();
        this.onRestart = () => {
            this.rootVN.restart();
        };
        this.rootVN = rootVN;
        this.err = err;
        this.pathString = path ? path.join(" \u2192 ") : "";
    }
    render() {
        return mim.jsx("div", { id: "rootError", style: { display: "flex", flexDirection: "column", alignItems: "start" } },
            mim.jsx("div", null, this.err.Message),
            mim.jsx("div", null, this.pathString),
            mim.jsx("hr", { style: { width: "100%" } }),
            mim.jsx("button", { key: "btnRestart", click: this.onRestart }, "Restart"));
    }
}
exports.RootErrorUI = RootErrorUI;
class RootWaitingUI extends mim.Component {
    render() {
        return "Loading ...";
    }
}
exports.RootWaitingUI = RootWaitingUI;


/***/ }),

/***/ "./src/core/RootVN.ts":
/*!****************************!*\
  !*** ./src/core/RootVN.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const VNChainFuncs_1 = __webpack_require__(/*! ./VNChainFuncs */ "./src/core/VNChainFuncs.ts");
const VNDisp_1 = __webpack_require__(/*! ./VNDisp */ "./src/core/VNDisp.ts");
const RootUI_1 = __webpack_require__(/*! ./RootUI */ "./src/core/RootUI.tsx");
/////////////////
const Stats_1 = __webpack_require__(/*! ./Stats */ "./src/core/Stats.ts");
//////////
// let g_requestIdleCallback: (func: ()=>void) => number = (window as any).requestIdleCallback
// 				? (window as any).requestIdleCallback
// 				: (func: ()=>void) => setTimeout( func);
// let g_cancelIdleCallback: (handle) => void = (window as any).cancelIdleCallback
// 				? (window as any).cancelCallback
// 				: (handle) => clearTimeout( handle);
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The RootVN class is used as a top-level virtual node for all rendered trees. RootVN serves
// as an error boundary of last resort. When it catches an error that wasn't caught by any
// descendand node, it displays a simple UI that shows the error and allows the user to restart.
// RootVN also manages service publishers and subscribers.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class RootVN extends VN_1.VN {
    constructor(anchorDN) {
        super(0 /* Root */);
        // Callback that is called on a new UI cycle when there is a need to update UI components
        this.onScheduledFrame = () => {
            // clear the scheduled frame handle so that new update or replacement requests will
            // schedule a new frame.
            this.scheduledFrameHandle = 0;
            // increment tick number.
            this.currentTick++;
            // call functions scheduled to be invoked before updating components. If this function
            // calls the requestUpdate method or schedules a function to be invoked after updates,
            // they will be executed in this cycle. However, if it schedules a function to be invoked
            // after updates, it will be executed in the next cycle.
            if (this.callsScheduledBeforeUpdate.size > 0) {
                this.schedulerState = SchedulerState.BeforeUpdate;
                const callsScheduledBeforeUpdate = this.callsScheduledBeforeUpdate;
                this.callsScheduledBeforeUpdate = new Set();
                this.callScheduledFunctions(callsScheduledBeforeUpdate, "before");
            }
            if (this.vnsScheduledForUpdate.size > 0) {
                ////////////////////
                Stats_1.DetailedStats.stats = new Stats_1.DetailedStats(`Mimbl update cycle ${this.currentTick}: `);
                Stats_1.DetailedStats.stats.start();
                /////////////
                // remember the internal set of nodes and re-create it so that it is ready for new
                // update requests. Arrange scheduled nodes by their nesting depths and perform updates.
                this.schedulerState = SchedulerState.Update;
                let vnsScheduledForUpdate = this.vnsScheduledForUpdate;
                this.vnsScheduledForUpdate = new Set();
                this.performCommitPhase(this.performRenderPhase(this.arrangeNodesByDepth(vnsScheduledForUpdate)));
                ////////////////////
                Stats_1.DetailedStats.stats.stop(true);
                Stats_1.DetailedStats.stats = null;
                /////////////
            }
            // call functions scheduled to be invoked after updating components
            if (this.callsScheduledAfterUpdate.size > 0) {
                this.schedulerState = SchedulerState.AfterUpdate;
                const callsScheduledAfterUpdate = this.callsScheduledAfterUpdate;
                this.callsScheduledAfterUpdate = new Set();
                this.callScheduledFunctions(callsScheduledAfterUpdate, "after");
            }
            this.schedulerState = SchedulerState.Idle;
        };
        // Component instance that is rendered when an exception was caught from descendand nodes.
        this.errorUI = null;
        // Component instance that is rendered when an exception was caught from descendand nodes.
        this.waitingUI = null;
        // Set of promises thrown by descendant nodes and not yet fulfilled.
        this.thrownPromises = new Set();
        // Map of service IDs to sets of virtual nodes that subscribed to this service.
        this.serviceInfos = new Map();
        // Map of nodes that should be updated on the next UI cycle. We use Map in order to not include
        // the same node more than once - which can happen if the node's requestUpdate method is called
        // more than once during a single run (e.g. during event processing). The value mapped to the
        // node determines the operation to be performed:
        //	- undefined - the node will be updated
        //	- null - the node will be deleted from its parent
        //	- anything else - the node will be replaced with this new content
        this.vnsScheduledForUpdate = new Set();
        // Set of functions that have been scheduled to be called upon a new animation frame before
        // components scheduled for update are updated.
        this.callsScheduledBeforeUpdate = new Set();
        // Set of functions that have been scheduled to be called upon a new animation frame after
        // components scheduled for update are updated.
        this.callsScheduledAfterUpdate = new Set();
        // Handle of the animation frame request (in case it should be canceled).
        this.scheduledFrameHandle = 0;
        // State of the scheduler.
        this.schedulerState = SchedulerState.Idle;
        // Number that serves as a unique ID of an update cycle. Each update cycle the root node
        // increments this number. Each node being updated in this cycle is assigned this number.
        // This helps prevent double-rendering of when both a component and its parent are
        // updated in the same cycle.
        this.currentTick = 0;
        // Node currently being processed. During creation and updating process, this value is set
        // every time we recurse into sub-nodes and restored when we return back to the node. If
        // during creation or updating process an exception is thrown and is caught by some upper
        // level node, this value will still point at the node that caused the exception.
        this.currentVN = null;
        this.anchorDN = anchorDN;
        this.name = "Root";
        this.initialize(null);
        this.content = null;
        this.willMount();
    }
    ;
    //////////////////
    getStatsCategory() { return Stats_1.StatsCategory.Comp; }
    ///////////
    // Sets the content to be rendered under this root node and triggers update.
    setContent(content, sync) {
        this.content = content;
        if (sync) {
            this.vnsScheduledForUpdate.add(this);
            this.onScheduledFrame();
            // let set = new Set<VN>();
            // set.add( this);
            // this.performUpdateCycle( set);
        }
        else
            this.requestNodeUpdate(this);
    }
    // Renders the given content (usually a result of JSX expression or a component instance)
    // under the given HTML element in a synchronous way.
    static mountRootSync(content, anchorDN) {
        let realAnchorDN = anchorDN ? anchorDN : document.body;
        // check whether we already have root node remembered in the anchor element's well-known
        // property
        let rootVN = realAnchorDN[RootVN.mimblAnchorPropName];
        if (!rootVN) {
            // create root node and remember it in the anchor element's well-known property
            rootVN = new RootVN(realAnchorDN);
            realAnchorDN[RootVN.mimblAnchorPropName] = rootVN;
        }
        // set content to the root node and trigger synchronous update
        rootVN.setContent(content, true);
    }
    // Unmounts a root node that was created using mountRootSync.
    static unmountRootSync(anchorDN) {
        let realAnchorDN = anchorDN ? anchorDN : document.body;
        if (!realAnchorDN)
            return;
        // get our root node from the anchor element's well-known property.
        let rootVN = realAnchorDN[RootVN.mimblAnchorPropName];
        if (!rootVN)
            return;
        // remove our root node from the anchor element's well-known property
        delete realAnchorDN[RootVN.mimblAnchorPropName];
        rootVN.setContent(null, true);
        rootVN.willUnmount();
    }
    // Renders the given content (usually a result of JSX expression or a component instance)
    // under the given HTML element.
    static mountRoot(content, anchorDN) {
        let realAnchorDN = anchorDN ? anchorDN : document.body;
        // check whether we already have root node remembered in the anchor element's well-known
        // property
        let rootVN = realAnchorDN[RootVN.mimblAnchorPropName];
        if (!rootVN) {
            // create root node and remember it in the anchor element's well-known property
            rootVN = new RootVN(realAnchorDN);
            realAnchorDN[RootVN.mimblAnchorPropName] = rootVN;
        }
        // set content to the root node, which will trigger update
        rootVN.setContent(content, false);
    }
    // Unmounts a root node that was created using s_MountRoot.
    static unmountRoot(anchorDN) {
        let realAnchorDN = anchorDN ? anchorDN : document.body;
        if (!realAnchorDN)
            return;
        // get our root node from the anchor element's well-known property.
        let rootVN = realAnchorDN[RootVN.mimblAnchorPropName];
        if (!rootVN)
            return;
        // remove our root node from the anchor element's well-known property
        delete realAnchorDN[RootVN.mimblAnchorPropName];
        // destruct the root node (asynchronously)
        rootVN.setContent(null, false);
        rootVN.scheduleCall(() => rootVN.willUnmount());
    }
    // Generates a chain of sub-nodes according to the current state. If the node doesn't have
    // sub-nodes, null should be returned.
    render() {
        if (this.errorUI)
            return this.errorUI;
        else if (this.waitingUI)
            return this.waitingUI;
        else
            return this.content;
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.publishService("StdErrorHandling", this);
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the Commit phase.
    willUnmount() {
        this.unpublishService("StdErrorHandling");
    }
    // Determines whether the update of this node from the given node is possible. The newVN
    // parameter is guaranteed to point to a VN of the same type as this node.
    isUpdatePossible(newVN) {
        return true;
    }
    // Determines whether the node supports handling of errors; that is, exception thrown during
    // rendering of the node itself and/or its sub-nodes.
    supportsErrorHandling() {
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
            if (!this.waitingUI)
                this.waitingUI = new RootUI_1.RootWaitingUI();
        }
        else {
            this.errorUI = new RootUI_1.RootErrorUI(this, err, path);
        }
    }
    // Returns DOM node corresponding to the virtual node itself and not to any of its sub-nodes.
    getOwnDN() { return null; }
    // Displays the content originally passed in the constructor.
    restart() {
        // clear the error and request to be updated
        this.errorUI = null;
        this.requestUpdate();
    }
    // Informs that a service with the given ID was published by the given node.
    notifyServicePublished(id, sourceVN) {
        let info = this.serviceInfos.get(id);
        if (info === undefined) {
            info = new ServiceInfo();
            this.serviceInfos.set(id, info);
        }
        info.publishingVNs.add(sourceVN);
        // notify all subscribed nodes that information about the service has changed
        for (let vn of info.subscribedVNs)
            vn.notifyServiceChanged(id);
    }
    // Informs that a service with the given ID was unpublished by the given node.
    notifyServiceUnpublished(id, sourceVN) {
        let info = this.serviceInfos.get(id);
        if (info === undefined)
            return;
        info.publishingVNs.delete(sourceVN);
        if (info.publishingVNs.size === 0 && info.subscribedVNs.size === 0)
            this.serviceInfos.delete(id);
        else {
            // notify all subscribed nodes that information about the service has changed
            for (let vn of info.subscribedVNs)
                vn.notifyServiceChanged(id);
        }
    }
    // Informs that the given node has subscribed to a service with the given ID.
    notifyServiceSubscribed(id, sourceVN) {
        let info = this.serviceInfos.get(id);
        if (info === undefined) {
            info = new ServiceInfo();
            this.serviceInfos.set(id, info);
        }
        info.subscribedVNs.add(sourceVN);
    }
    // Informs that the given node has unsubscribed from a service with the given ID.
    notifyServiceUnsubscribed(id, sourceVN) {
        let info = this.serviceInfos.get(id);
        if (info === undefined)
            return;
        info.subscribedVNs.delete(sourceVN);
        if (info.publishingVNs.size === 0 && info.subscribedVNs.size === 0)
            this.serviceInfos.delete(id);
    }
    // Schedules an update for the given node.
    requestNodeUpdate(vn) {
        if (!vn.anchorDN) {
            console.error(`Update requested for virtual node '${vn.path.join("/")}' that doesn't have anchor DOM node`);
            return;
        }
        // add this node to the map of nodes for which either update or replacement or
        // deletion is scheduled. Note that a node will only be present once in the map no
        // matter how many times it calls requestUpdate().
        this.vnsScheduledForUpdate.add(vn);
        // the update is scheduled in the next cycle unless the request is made during a
        // "before update" function execution.
        if (this.schedulerState !== SchedulerState.BeforeUpdate)
            this.requestFrameIfNeeded();
    }
    // Cancels a previously requested update for the given node.
    cancelNodeUpdate(vn) {
        // try to remove this node from the set of nodes for which update or replacement or
        // deletion is scheduled.
        if (!this.vnsScheduledForUpdate.delete(vn))
            return;
        // if this was the last node in the set, cancel the request to schedule update processing.
        if (this.schedulerState !== SchedulerState.BeforeUpdate)
            this.cancelFrameRequestIfNeeded();
    }
    // Schedules to call the given function either before or after all the scheduled components
    // have been updated.
    scheduleFuncCall(func, beforeUpdate = false) {
        if (!func)
            return;
        if (beforeUpdate) {
            this.callsScheduledBeforeUpdate.add(func);
            // a "before update" function is always scheduled in the next frame even if the
            // call is made from another "before update" function.
            this.requestFrameIfNeeded();
        }
        else {
            this.callsScheduledAfterUpdate.add(func);
            // an "after update" function is scheduled in the next cycle unless the request is made
            // either from a "before update" function execution or during a node update.
            if (this.schedulerState !== SchedulerState.BeforeUpdate && this.schedulerState !== SchedulerState.Update)
                this.requestFrameIfNeeded();
        }
    }
    // Cancels a call that has been scheduled to be made either before or after all the scheduled
    // components have been updated.
    cancelScheduledFuncCall(func, beforeUpdate = false) {
        if (!func)
            return;
        if (beforeUpdate) {
            this.callsScheduledBeforeUpdate.delete(func);
            this.cancelFrameRequestIfNeeded();
        }
        else {
            this.callsScheduledAfterUpdate.delete(func);
            if (this.schedulerState !== SchedulerState.BeforeUpdate && this.schedulerState !== SchedulerState.Update)
                this.requestFrameIfNeeded();
        }
    }
    // Informs that the given node has unsubscribed from a service with the given ID.
    reportError(err, path) {
        this.handleError(err, path);
        this.requestUpdate();
    }
    // Removes the fulfilled promise from our internal list and if the list is empty asks to
    // re-render
    onPromiseFulfilled(promise) {
        this.thrownPromises.delete(promise);
        if (this.thrownPromises.size === 0) {
            this.waitingUI = null;
            this.requestUpdate();
        }
    }
    // Determines whether the call to requestAnimationFrame should be made after an update or a
    // call has been scheduled.
    requestFrameIfNeeded() {
        if (this.scheduledFrameHandle === 0)
            this.scheduledFrameHandle = requestAnimationFrame(this.onScheduledFrame);
    }
    // Determines whether the call to cancelAnimationFrame should be made after a scheduled update
    // or call has been canceled.
    cancelFrameRequestIfNeeded() {
        if (this.vnsScheduledForUpdate.size === 0 &&
            this.callsScheduledBeforeUpdate.size === 0 &&
            this.callsScheduledAfterUpdate.size === 0) {
            cancelAnimationFrame(this.scheduledFrameHandle);
            this.scheduledFrameHandle = 0;
        }
    }
    // Arranges the scheduled nodes by their nesting depths so that we update "upper" nodes before
    // the lower ones. This can help avoid two conditions:
    //	- rendering a child component twice: first because it called updateMe, and second
    //		because its parent was also updated.
    //	- unnecessary rendering a child component before it is removed by the parent
    // We allocate contiguous array where indices correspond to depth. Each element in this
    // array will either be undefined or contain an array of nodes at this depth.
    arrangeNodesByDepth(vnsScheduledForUpdate) {
        //////////////////////
        ////////////////////////////////////////////////////////////////////////
        ////////////////////////
        ////////////
        // create a sparse array of certain reasonable size. If we have depths greater than this,
        // the array will grow automatically (although it is less performant it is still acceptable).
        let vnsByDepth = new Array(100);
        vnsScheduledForUpdate.forEach((vn) => {
            let arr = vnsByDepth[vn.depth];
            if (!arr) {
                arr = [];
                vnsByDepth[vn.depth] = arr;
            }
            arr.push(vn);
        });
        //////////////////////
        ///////////////////////////
        ////////////
        return vnsByDepth;
    }
    // Performs rendering phase for all components scheduled for update and recursively for their
    // sub-nodes where necessary. Returns array of VNDisp structures for each updated node.
    performRenderPhase(vnsByDepth) {
        let updatedNodeDisps = [];
        // iteration over the sparse array skips the holes.
        vnsByDepth.forEach((vns) => {
            vns.forEach((vn) => {
                try {
                    // if the component was already updated in this cycle, don't update it again
                    if (vn.lastUpdateTick === this.currentTick)
                        return;
                    updatedNodeDisps.push(this.updateStemVirtual(vn));
                }
                catch (err) {
                    // find the nearest error handling service. If nobody else, it is implemented
                    // by the RootVN object.
                    let errorService = vn.findService("StdErrorHandling", false);
                    errorService.reportError(err, this.currentVN ? this.currentVN.path : null);
                }
                this.currentVN = null;
            });
        });
        return updatedNodeDisps;
    }
    // Performs the commit phase for all components scheduled for update and recursively for their
    // sub-nodes where necessary. The Commit phase consists of updating DOM and calling life-cycle
    // methods didMount, didUpdate and willUnmount.
    performCommitPhase(updatedNodeDisps) {
        updatedNodeDisps.forEach((disp) => {
            this.preUpdatePhysical(disp);
        });
        updatedNodeDisps.forEach((disp) => {
            this.updatePhysical(disp);
        });
        updatedNodeDisps.forEach((disp) => {
            this.postUpdate(disp);
        });
    }
    // Call functions scheduled before or after update cycle.
    callScheduledFunctions(funcs, beforeOrAfter) {
        funcs.forEach((func) => {
            try {
                func();
            }
            catch (err) {
                console.error(`Exception while invoking function ${beforeOrAfter} updating components\n`, err);
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
    createVirtual(vn, parent) {
        // set essential node parameters.
        vn.initialize(parent);
        // keep track of the node that is being currently processed.
        let currentVN = vn;
        this.currentVN = currentVN;
        //////////////////////
        /////////////////////////////////////////////////////////////////////
        ////////////
        vn.willMount();
        // if the node doesn't handle errors we don't need to waste time to use try/catch
        if (!vn.supportsErrorHandling())
            this.createSubNodesVirtual(vn);
        else {
            try {
                this.createSubNodesVirtual(vn);
            }
            catch (err) {
                ////////////////////////
                /////////////////////////////////////////////////////////////////////////
                //////////////
                // let the node handle its own error and re-render
                vn.handleError(err, this.currentVN.path);
                this.createSubNodesVirtual(vn);
            }
        }
        // restore pointer to the currently being processed node after processing its subnodes
        this.currentVN = currentVN;
    }
    // Performs creation and initial rendering on the sub-nodes of our node.
    createSubNodesVirtual(vn) {
        let subNodes = VNChainFuncs_1.createVNChainFromContent(vn.render());
        for (let svn = subNodes.first; svn !== null; svn = svn.next)
            this.createVirtual(svn, vn);
        vn.subNodes = subNodes;
    }
    // Recursively creates DOM nodes for this VN and its sub-nodes.
    createPhysical(vn, anchorDN, beforeDN) {
        // remember the anchor node
        vn.anchorDN = anchorDN;
        //////////////////////
        /////////////////////////////////////////////////////////////////
        ////////////
        vn.mount();
        // If the virtual node has its own DOM node, add it to the DOM tree and use it as an
        // anchor for the sub-nodes.
        let ownDN = vn.getOwnDN();
        // if we have our own DOM node, add it under the anchor node
        if (ownDN !== null)
            vn.anchorDN.insertBefore(ownDN, beforeDN);
        // if the node has sub-nodes, add DOM nodes for them
        if (vn.subNodes.count > 0) {
            // determine what nodes to use as anchor and "before" for the sub-nodes
            let newAnchorDN = ownDN === null ? anchorDN : ownDN;
            let newBeforeDN = ownDN === null ? beforeDN : null;
            // mount all sub-nodes
            for (let svn = vn.subNodes.first; svn !== null; svn = svn.next)
                this.createPhysical(svn, newAnchorDN, newBeforeDN);
        }
    }
    // Recursively calls didMount on this VN and its sub-nodes.
    postCreate(vn) {
        //////////////////////
        ////////////////////////////////////////////////////////////////////
        ////////////
        try {
            vn.didMount();
        }
        catch (err) {
            console.error(`Node ${vn.name} threw exception '${err.message}' in didMount`);
        }
        for (let svn = vn.subNodes.first; svn !== null; svn = svn.next)
            this.postCreate(svn);
    }
    // Recursively calls willUnmount on this VN and its sub-nodes.
    preDestroy(vn) {
        for (let svn = vn.subNodes.first; svn !== null; svn = svn.next)
            this.preDestroy(svn);
        //////////////////////
        ///////////////////////////////////////////////////////////////////////
        ////////////
        try {
            vn.willUnmount();
        }
        catch (err) {
            console.error(`Node ${vn.name} threw exception '${err.message}' in willUnmount`);
        }
    }
    // Recursively removes DOM nodes corresponding to this VN and its sub-nodes.
    destroyPhysical(vn) {
        // get the DOM node before we call unmount, because unmount will clear it.
        let ownDN = vn.getOwnDN();
        //////////////////////
        ///////////////////////////////////////////////////////////////////
        ////////////
        vn.unmount();
        // If the virtual node has its own DOM node, we remove it from the DOM tree. In this case,
        // we don't need to recurse into sub-nodes, because they are removed with the parent.
        if (ownDN) {
            // our DOM nodes can only be either Element or Text - both derive from ChildNode
            ownDN.remove();
        }
        else {
            // loop over sub-nodes from last to first because this way the DOM element removal is
            // easier.
            for (let svn = vn.subNodes.last; svn !== null; svn = svn.prev)
                this.destroyPhysical(svn);
        }
        vn.terminate();
    }
    // Recursively renders the children if this node. This method is only invoked if a node is
    // being updated as a result of updateMe invocation.
    updateStemVirtual(vn) {
        let disp = new VNDisp_1.VNDisp();
        disp.action = 0 /* Unknown */;
        disp.oldVN = disp.newVN = vn;
        this.updateVirtual(disp);
        return disp;
    }
    // Recursively renders this node and updates its sub-nodes if necessary. This method is
    // invoked when a node is being updated either as a result of updateMe invocation or because
    // the parent node was updated. If an exception is thrown during the execution of this method
    // (which can be only from components' shouldUpdate or render methods), the component is asked
    // to handle the error. If the component handles the error, the content returned from the
    // error handling method is rendered; otherwise, the exception is re-thrown. Thus, the
    // exception is propagated up until it is handled by a node that handles it or up to the root
    // node.
    updateVirtual(disp) {
        // keep track of the node that is being currently processed.
        let currentVN = disp.oldVN;
        this.currentVN = currentVN;
        // if the node doesn't handle errors we don't need to waste time to use try/catch
        if (!disp.oldVN.supportsErrorHandling())
            this.updateSubNodesVirtual(disp);
        else {
            try {
                this.updateSubNodesVirtual(disp);
            }
            catch (err) {
                disp.oldVN.handleError(err, this.currentVN.path);
                this.updateSubNodesVirtual(disp);
            }
        }
        // indicate that the node was updated in this cycle - this will prevent it from 
        // rendering again in this cycle.
        disp.oldVN.lastUpdateTick = this.currentTick;
        // restore pointer to the currently being processed node after processing its subnodes
        this.currentVN = currentVN;
    }
    // Performs rendering phase of the update on the sub-nodes of the node, which is passed as
    // the oldVN member of the VNDisp structure.
    updateSubNodesVirtual(disp) {
        // render the new content and build array of dispositions objects for the sub-nodes.
        disp.buildSubNodeDispositions();
        // perform rendering for sub-nodes that should be inserted, replaced or updated
        for (let subNodeDisp of disp.subNodeDisps) {
            if (subNodeDisp.action === 2 /* Update */) {
                ////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////
                //////////////
                subNodeDisp.updateDisp = subNodeDisp.oldVN.prepareUpdate(subNodeDisp.newVN);
                if (subNodeDisp.updateDisp.shouldRender)
                    this.updateVirtual(subNodeDisp);
            }
            else
                this.createVirtual(subNodeDisp.newVN, disp.oldVN);
        }
    }
    // Recursively calls willUnmount on sub-nodes marked for deletion.
    preUpdatePhysical(disp) {
        // first, sub-nodes marked for deletion
        for (let svn of disp.subNodesToRemove)
            this.preDestroy(svn);
        // second, sub-nodes marked for update or insert
        for (let subNodeDisp of disp.subNodeDisps)
            this.preUpdatePhysical(subNodeDisp);
    }
    // Recursively performs DOM updates corresponding to this VN and its sub-nodes.
    updatePhysical(disp) {
        // get the node whose children are being updated. This is always the oldVN member of
        // the disp structure.
        let vn = disp.oldVN;
        // it might happen that the node being updated was already deleted by its parent. Check
        // for this situation and exit if this is the case
        if (!vn.anchorDN)
            return;
        // remove from DOM the old nodes designated to be removed (that is, those for which there
        // is no counterpart new node that will either update or replace it) and then those
        // designated to be replaced. We need to remove old nodes first before we start inserting
        // new - one reason is to properly maintain references.
        for (let svn of disp.subNodesToRemove)
            this.destroyPhysical(svn);
        // clear our current list of sub-nodes - we will populate it while updating them
        vn.subNodes.clear();
        // determine the anchor node to use when inserting new or moving existing sub-nodes. If
        // our node has its own DN, it will be the anchor for the sub-nodes; otherwise, our node's
        // anchor will be the anchor for the sub-nodes too.
        let ownDN = vn.getOwnDN();
        let anchorDN = ownDN !== null ? ownDN : vn.anchorDN;
        // if this virtual node doesn't define its own DOM node (true for components), we will
        // need to find a DOM node before which to start inserting new nodes. Null means
        // append to the end of the anchor node's children.
        let beforeDN = ownDN !== null ? null : vn.getNextDNUnderSameAnchorDN(anchorDN);
        // perform updates and inserts by either groups or individual nodes.
        if (disp.subNodeGroups && disp.subNodeGroups.length > 0) {
            this.updatePhysicalByGroups(vn, disp.subNodeDisps, disp.subNodeGroups, anchorDN, beforeDN);
            this.arrangeGroups(vn, disp.subNodeDisps, disp.subNodeGroups, anchorDN, beforeDN);
        }
        else if (disp.subNodeDisps && disp.subNodeDisps.length > 0) {
            this.updatePhysicalByNodes(vn, disp.subNodeDisps, anchorDN, beforeDN);
        }
    }
    // Performs updates and inserts by groups. We go from the end of the list of update groups
    // and on each iteration we decide the value of the "beforeDN".
    updatePhysicalByGroups(parentVN, disps, groups, anchorDN, beforeDN) {
        for (let i = groups.length - 1; i >= 0; i--) {
            let group = groups[i];
            // first update every sub-node in the group and its sub-sub-nodes
            for (let j = group.last; j >= group.first; j--) {
                let disp = disps[j];
                let newVN = disp.newVN;
                if (group.action === 2 /* Update */) {
                    let oldVN = disp.oldVN;
                    if (disp.updateDisp.shouldCommit) {
                        //////////////////////////
                        ///////////////////////////////////////////////////////////////////////////////
                        ////////////////
                        oldVN.commitUpdate(newVN);
                    }
                    // update the sub-nodes if necessary
                    if (disp.updateDisp.shouldRender)
                        this.updatePhysical(disp);
                    let firstDN = oldVN.getFirstDN();
                    if (firstDN !== null)
                        beforeDN = firstDN;
                    // the old node remains as a sub-node
                    parentVN.subNodes.insertVN(oldVN);
                }
                else {
                    // since we are going from the first node in the group to the last we always use
                    // the same beforeDN for insertion
                    this.createPhysical(newVN, anchorDN, beforeDN);
                    // if the new node defines a DOM node, it becomes the DOM node before which
                    // next components should be inserted/moved
                    let firstDN = newVN.getFirstDN();
                    if (firstDN !== null)
                        beforeDN = firstDN;
                    // the new node becomes a sub-node
                    parentVN.subNodes.insertVN(newVN);
                }
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
    arrangeGroups(parentVN, disps, groups, anchorDN, beforeDN) {
        // We go from the last group to the second group in the list because as soon as we moved all
        // groups except the first one into their right places, the first group will be automatically
        // in the right place. We always have two groups (i and i-1), which allows us to understand
        // whether we need to swap them. If we do we move the shorter group.
        for (let i = groups.length - 1; i > 0; i--) {
            let group = groups[i];
            let prevGroup = groups[i - 1];
            // determine whether the group should move. We take the last node from the group
            // and compare its DN's next sibling to the current "beforeDN".
            if (group.lastDN !== null) {
                if (group.lastDN.nextSibling !== beforeDN) {
                    // if the current group now resides before the previous group, then that means
                    // that we are swapping two groups. In this case we want to move the shorter one.
                    if (group.lastDN.nextSibling === prevGroup.firstDN && group.count > prevGroup.count)
                        this.moveGroup(parentVN, disps, prevGroup, anchorDN, group.firstDN);
                    else
                        this.moveGroup(parentVN, disps, group, anchorDN, beforeDN);
                }
                // the group's first DN becomes the new beforeDN. Note that firstDN cannot be null
                // because lastDN is not null
                beforeDN = group.firstDN;
            }
        }
    }
    // Moves all the nodes in the given group before the given DOM node.
    moveGroup(parentVN, disps, group, anchorDN, beforeDN) {
        for (let j = group.first; j <= group.last; j++) {
            let subNodeVN = group.action === 2 /* Update */ ? disps[j].oldVN : disps[j].newVN;
            // let subNodeFirstDN = subNodeVN.getFirstDN();
            // if (subNodeFirstDN)
            // {
            // 	anchorDN.insertBefore( subNodeFirstDN, beforeDN);
            // 	/// #if USE_STATS
            // 		DetailedStats.stats.log( parentVN.getStatsCategory(), StatsAction.Moved);
            // 	/// #endif
            // }
            // determine whether all the nodes under this VN should be moved.
            let subNodeDNs = subNodeVN.getImmediateDNs();
            for (let subNodeDN of subNodeDNs)
                anchorDN.insertBefore(subNodeDN, beforeDN);
            ////////////////////
            Stats_1.DetailedStats.stats.log(parentVN.getStatsCategory(), Stats_1.StatsAction.Moved);
            /////////////
        }
    }
    // Performs updates and inserts by individual nodes.
    updatePhysicalByNodes(parentVN, disps, anchorDN, beforeDN) {
        // perform DOM operations according to sub-node disposition. We need to decide for each
        // node what node to use to insert or move it before. We go from the end of the list of
        // new nodes and on each iteration we decide the value of the "beforeDN".
        for (let i = disps.length - 1; i >= 0; i--) {
            let disp = disps[i];
            let action = disp.action;
            let newVN = disp.newVN;
            if (action === 2 /* Update */) {
                let oldVN = disp.oldVN;
                if (disp.updateDisp.shouldCommit) {
                    /////////////////////////
                    //////////////////////////////////////////////////////////////////////////////
                    ///////////////
                    oldVN.commitUpdate(newVN);
                }
                // update the sub-nodes if necessary
                if (disp.updateDisp.shouldRender)
                    this.updatePhysical(disp);
                // determine whether all the nodes under this VN should be moved.
                let subNodeDNs = oldVN.getImmediateDNs();
                if (subNodeDNs.length > 0) {
                    // check whether the last of the DOM nodes already resides right before the needed node
                    if (subNodeDNs[subNodeDNs.length - 1].nextSibling !== beforeDN) {
                        for (let subNodeDN of subNodeDNs)
                            anchorDN.insertBefore(subNodeDN, beforeDN);
                        ///////////////////////
                        Stats_1.DetailedStats.stats.log(parentVN.getStatsCategory(), Stats_1.StatsAction.Moved);
                        ////////////////
                    }
                    // the first of DOM nodes become the next beforeDN
                    beforeDN = subNodeDNs[0];
                }
                // the old node remains as a sub-node
                parentVN.subNodes.insertVN(oldVN);
            }
            else {
                // since we already destroyed old nodes designated to be replaced, the code is
                // identical for Replace and Insert actions
                this.createPhysical(newVN, anchorDN, beforeDN);
                // if the new node defines a DOM node, it becomes the DOM node before which
                // next components should be inserted/moved
                let firstDN = newVN.getFirstDN();
                if (firstDN !== null)
                    beforeDN = firstDN;
                // the new node becomes a sub-node
                parentVN.subNodes.insertVN(newVN);
            }
        }
    }
    // // Recursively performs DOM updates corresponding to this VN and its sub-nodes.
    // private updatePhysical( disp: VNDisp)
    // {
    // 	// get the node whose children are being updated. This is always the oldVN member of
    // 	// the disp structure.
    // 	let vn = disp.oldVN;
    // 	// it might happen that the node being updated was already deleted by its parent. Check
    // 	// for this situation and exit if this is the case
    // 	if (!vn.anchorDN)
    // 		return;
    // 	// remove from DOM the old nodes designated to be removed (that is, those for which there
    // 	// is no counterpart new node that will either update or replace it) and then those
    // 	// designated to be replaced. We need to remove old nodes first before we start inserting
    // 	// new - one reason is to properly maintain references.
    // 	for( let svn of disp.subNodesToRemove)
    // 		this.destroyPhysical( svn);
    // 	// clear our current list of sub-nodes we will populate it while updating them
    // 	vn.subNodes.clear();
    // 	// determine the anchor node to use when inserting or moving new nodes
    // 	let ownDN = vn.getOwnDN();
    // 	let anchorDN = ownDN !== null ? ownDN : vn.anchorDN;
    // 	// if this virtual node doesn't define its own DOM node (true for components), we will
    // 	// need to find a DOM node before which to start inserting or moving nodes. Null means
    // 	// append to the end of the anchor node's children.
    // 	let beforeDN: DN = ownDN !== null ? null : vn.getNextDNUnderSameAnchorDN( anchorDN);
    // 	// perform DOM operations according to sub-node disposition. We need to decide for each
    // 	// node what node to use to insert or move it before. We go from the end of the list of
    // 	// new nodes and on each iteration we decide the value of the "beforeDN".
    // 	for( let i = disp.subNodeDisps.length - 1; i >= 0; i--)
    // 	{
    // 		let subNodeDisp = disp.subNodeDisps[i];
    // 		let action = subNodeDisp.action;
    // 		if (action === VNDispAction.Update)
    // 		{
    // 			let oldVN = subNodeDisp.oldVN;
    // 			let newVN = subNodeDisp.newVN;
    // 			if (subNodeDisp.updateDisp.shouldCommit)
    // 			{
    // 				/// #if VERBOSE_NODE
    // 					console.debug( `VERBOSE: Calling commitUpdate() on node ${oldVN.name}`);
    // 				/// #endif
    // 				oldVN.commitUpdate( newVN);
    // 			}
    // 			// update the sub-nodes if necessary
    // 			if (subNodeDisp.updateDisp.shouldRender)
    // 				this.updatePhysical( subNodeDisp);
    // 			// if our sub-node defines its own DN, we need to determine whether it should be moved.
    // 			let subNodeFirstDN = oldVN.getFirstDN();
    // 			if (subNodeFirstDN !== null)
    // 			{
    // 				let nextSubNodeVNDisp = i === disp.subNodeDisps.length - 1 ? null : disp.subNodeDisps[i+1];
    // 				let newNextVN = nextSubNodeVNDisp === null
    // 									? null
    // 									: nextSubNodeVNDisp.action === VNDispAction.Update
    // 										? nextSubNodeVNDisp.oldVN
    // 										: nextSubNodeVNDisp.newVN;
    // 				if (oldVN.next !== newNextVN || subNodeFirstDN.nextSibling !== beforeDN)
    // 				{
    // 					anchorDN.insertBefore( subNodeFirstDN, beforeDN);
    // 					/// #if USE_STATS
    // 						DetailedStats.stats.log( vn.getStatsCategory(), StatsAction.Moved);
    // 					/// #endif
    // 				}
    // 				beforeDN = subNodeFirstDN;
    // 			}
    // 			// // if the updated old VN (or one of its sub-nodes) defines a DOM node and it
    // 			// // is not positioned before the current "beforeDN", move it there. It also
    // 			// // becomes the new DOM node before which next components should be inserted.
    // 			// let firstDN = oldVN.getFirstDN();
    // 			// if (firstDN !== null)
    // 			// {
    // 			// 	// determine whether we need to move our node
    // 			// 	let nextSubNodeVNDisp: VNDisp = i === disp.subNodeDisps.length - 1
    // 			// 					? undefined : disp.subNodeDisps[i+1];
    // 			// 	if (this.shouldMoveVN( subNodeDisp, nextSubNodeVNDisp) || firstDN.nextSibling !== beforeDN)
    // 			// 	{
    // 			// 		anchorDN.insertBefore( firstDN, beforeDN);
    // 			// 		/// #if USE_STATS
    // 			// 			DetailedStats.stats.log( vn.getStatsCategory(), StatsAction.Moved);
    // 			// 		/// #endif
    // 			// 	}
    // 			// 	beforeDN = firstDN;
    // 			// }
    // 			// the old node remains as a sub-node
    // 			vn.subNodes.insertVN( oldVN);
    // 		}
    // 		else
    // 		{
    // 			let newVN = subNodeDisp.newVN;
    // 			// since we already destroyed old nodes designated to be replaced, the code is
    // 			// identical for Replace and Insert actions
    // 			this.createPhysical( newVN, anchorDN, beforeDN);
    // 			// if the new node defines a DOM node, it becomes the DOM node before which
    // 			// next components should be inserted/moved
    // 			let firstDN: DN = newVN.getFirstDN();
    // 			if (firstDN !== null)
    // 				beforeDN = firstDN;
    // 			// the new node becomes a sub-node
    // 			vn.subNodes.insertVN( newVN);
    // 		}
    // 	}
    // }
    // private shouldMoveVN( vnDisp: VNDisp, nextVNDisp: VNDisp): boolean
    // {
    // 	if (nextVNDisp === undefined)
    // 		return vnDisp.oldVN.next !== null;
    // 	else if (nextVNDisp.action === VNDispAction.Update)
    // 		return vnDisp.oldVN.next !== nextVNDisp.oldVN;
    // 	else
    // 		return true;
    // }
    // Recursively calls appropriate life-cycle methods on this VN and its sub-nodes.
    postUpdate(disp) {
        for (let subNodeDisp of disp.subNodeDisps) {
            if (subNodeDisp.action === 2 /* Update */) {
                // if we updated sub-nodes, notify them too
                if (subNodeDisp.updateDisp.shouldRender)
                    this.postUpdate(subNodeDisp);
            }
            else if (subNodeDisp.action === 1 /* Insert */)
                this.postCreate(subNodeDisp.newVN);
        }
        //////////////////////
        /////////////////////////////////////////////////////////////////////////////
        ////////////
        try {
            disp.oldVN.didUpdate();
        }
        catch (err) {
            console.error(`Node ${disp.oldVN.name} threw exception '${err.message}' in didUpdate`);
        }
    }
}
RootVN.mimblAnchorPropName = "__mimblAnchorPropName__";
exports.RootVN = RootVN;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// State of the scheduler indicating in what phase of the update cycle we currently reside.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
var SchedulerState;
(function (SchedulerState) {
    // The scheduler is not within the update cycle
    SchedulerState[SchedulerState["Idle"] = 0] = "Idle";
    // The scheduler is executing functions before updating nodes
    SchedulerState[SchedulerState["BeforeUpdate"] = 1] = "BeforeUpdate";
    // The scheduler is updating nodes
    SchedulerState[SchedulerState["Update"] = 2] = "Update";
    // The scheduler is executing functions after updating nodes
    SchedulerState[SchedulerState["AfterUpdate"] = 3] = "AfterUpdate";
})(SchedulerState || (SchedulerState = {}));
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Information kept by Root virtual node about service publications and subscriptions. The same
// service can be published and subscribed to by multiple nodes.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ServiceInfo {
    constructor() {
        this.publishingVNs = new Set();
        this.subscribedVNs = new Set();
    }
}


/***/ }),

/***/ "./src/core/Stats.ts":
/*!***************************!*\
  !*** ./src/core/Stats.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

///////////////////////////////////////////////////////////////////////////////////////////////////
// Gathering update statistics
///////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
// Categories of changed entities to gather statistics about.
var StatsCategory;
(function (StatsCategory) {
    StatsCategory[StatsCategory["Comp"] = 0] = "Comp";
    StatsCategory[StatsCategory["Elm"] = 1] = "Elm";
    StatsCategory[StatsCategory["Text"] = 2] = "Text";
    StatsCategory[StatsCategory["Attr"] = 3] = "Attr";
    StatsCategory[StatsCategory["Event"] = 4] = "Event";
})(StatsCategory = exports.StatsCategory || (exports.StatsCategory = {}));
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
})(StatsAction = exports.StatsAction || (exports.StatsAction = {}));
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
exports.CategoryStats = CategoryStats;
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
exports.DetailedStats = DetailedStats;


/***/ }),

/***/ "./src/core/SvgElms.ts":
/*!*****************************!*\
  !*** ./src/core/SvgElms.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.SvgElms = SvgElms;


/***/ }),

/***/ "./src/core/TextVN.ts":
/*!****************************!*\
  !*** ./src/core/TextVN.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ./Stats */ "./src/core/Stats.ts");
//////////
/**
 * Represents a text node.
 */
class TextVN extends VN_1.VN {
    constructor(text) {
        super(5 /* Text */);
        this.text = text;
        // node name is #text
        this.name = "#text";
    }
    ;
    get Text() { return this.text; }
    get TextNode() { return this.dn; }
    /////////////////
    getStatsCategory() { return Stats_1.StatsCategory.Text; }
    //////////
    // Inserts the virtual node's content into DOM.
    // This method is part of the Commit phase.
    mount() {
        this.dn = document.createTextNode(this.text);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Text, Stats_1.StatsAction.Added);
        ////////////
    }
    // Removes content from the DOM tree.
    // This method is part of the Commit phase.
    unmount() {
        this.dn = undefined;
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Text, Stats_1.StatsAction.Deleted);
        ////////////
    }
    // Determines whether the update of this node from the given node is possible. The newVN
    // parameter is guaranteed to point to a VN of the same type as this node.
    isUpdatePossible(newVN) {
        // one text node can always update another text node
        return true;
    }
    // Prepares this node to be updated from the given node. This method is invoked only if update
    // happens as a result of rendering the parent nodes. The newVN parameter is guaranteed to
    // point to a VN of the same type as this node. The returned object indicates whether children
    // should be updated and whether the commitUpdate method should be called.
    // This method is part of the Render phase.
    prepareUpdate(newVN) {
        // text nodes don't have sub-nodes
        return { shouldCommit: this.text !== newVN.text, shouldRender: false };
    }
    // Commits updates made to this node to DOM.
    commitUpdate(newVN) {
        this.dn.nodeValue = this.text = newVN.text;
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Text, Stats_1.StatsAction.Updated);
        ////////////
    }
    getOwnDN() {
        return this.dn;
    }
}
exports.TextVN = TextVN;


/***/ }),

/***/ "./src/core/Utils.ts":
/*!***************************!*\
  !*** ./src/core/Utils.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The Classes abstract class provides useful static functions for working with class properties.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Classes {
    // Combines arbitrary number of class properties merging later into the earlier ones. This method
    // returns a string or undefined - if all classNames were undefined.
    static MergeClasses(...classNames) {
        let resClassName;
        for (let className of classNames) {
            if (!className)
                continue;
            // parse the class if it is specified as a string
            let classNameAsString = typeof className === "string"
                ? className
                : Classes.ArrayToString(className);
            if (resClassName === undefined)
                resClassName = "";
            else
                resClassName += " ";
            resClassName += classNameAsString;
        }
        return resClassName;
    }
    // Combines arbitrary number of class objects merging later into the earlier ones.
    static ArrayToString(classNames) {
        return classNames.join(" ");
    }
}
exports.Classes = Classes;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The Styles abstract class provides useful static functions for working with style properties.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Styles {
    // Combines arbitrary number of style objects merging later into the earlier ones. This method
    // always returns an object - even if empty
    static MergeStyles(...styles) {
        // create an empty object for accumulating style properties
        let resStyle = {};
        Styles.MergeStylesTo(resStyle, ...styles);
        return resStyle;
    }
    // Combines arbitrary number of style objects merging later into the first one.
    static MergeStylesTo(resStyle, ...styles) {
        for (let style of styles) {
            if (!style)
                continue;
            // parse the style if it is specified as a string
            let styleObj = typeof style === "object"
                ? style
                : Styles.ParseStyleString(style);
            // copy all properties defined in teh current style object to our resultant object			
            for (let propName in styleObj)
                resStyle[propName] = styleObj[propName];
        }
    }
    // Combines arbitrary number of style objects merging later into the earlier ones.
    static ParseStyleString(s) {
        if (!s)
            return {};
        let retStyle = {};
        let elms = s.split(";");
        for (let elm of elms) {
            let pair = elm.split(":");
            if (!pair || pair.length === 0 || pair.length > 2)
                continue;
            retStyle[Styles.DashToCamel(pair[0].trim())] = pair[1].trim();
        }
        return retStyle;
    }
    // Converts names with dashes into names in camelCase, where every character after a dash is
    // capitalized and dashes are removed.
    static DashToCamel(dash) {
        if (!dash)
            return dash;
        let camel;
        let index = -1;
        let nextIndexToCopyFrom = 0;
        while ((index = dash.indexOf("-", index + 1)) >= 0) {
            if (camel === undefined)
                camel = "";
            camel += dash.substr(nextIndexToCopyFrom, index - nextIndexToCopyFrom);
            if (index != dash.length - 1)
                camel += dash[index + 1].toUpperCase();
            nextIndexToCopyFrom = index + 2;
        }
        if (camel === undefined)
            return dash;
        else {
            if (nextIndexToCopyFrom < dash.length)
                camel += dash.substr(nextIndexToCopyFrom);
            return camel;
        }
    }
}
exports.Styles = Styles;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The Slices abstract class provides useful static functions for working with Slices.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Slices {
    // Combines arbitrary number of Slice objects merging classes, styles, properties and content
    static MergeSlices(...slices) {
        let resSlice = {};
        Slices.MergeSlicesTo(resSlice, ...slices);
        return resSlice;
    }
    // Combines arbitrary number of Slice objects merging classes, styles, properties and content
    // into the given resultant slice.
    static MergeSlicesTo(resSlice, ...slices) {
        if (resSlice === undefined || resSlice === null)
            return;
        for (let slice of slices) {
            if (!slice)
                continue;
            if (slice.style) {
                if (resSlice.style === undefined)
                    resSlice.style = {};
                Styles.MergeStylesTo(resSlice.style, slice.style);
            }
            if (slice.className) {
                if (resSlice.className === undefined)
                    resSlice.className = "";
                resSlice.className = Classes.MergeClasses(resSlice.className, slice.className);
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
}
exports.Slices = Slices;


/***/ }),

/***/ "./src/core/VN.ts":
/*!************************!*\
  !*** ./src/core/VN.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ./mim */ "./src/core/mim.ts");
const VNChain_1 = __webpack_require__(/*! ./VNChain */ "./src/core/VNChain.ts");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The IVNLifeCycle interface defines life-cycle and notifications methofs that are called during
// mounting, unmounting and updates. The IVNLifeCycle interface is implemented by all types of
// virtual nodes. All methods in this interface are optional because they might not be neeeded
// for all types of nodes.
//
// Mounting sequence:
//	- constructor
//	- willMount
//	- render
//	- mount
//	- didMount
//
// Unmounting sequence:
//	- willUnmount
//	- unmount
//	- didUnmount
//
// Updating sequence when update was caused by the node itself:
//	- render
//	- didUpdate
//
// Updating sequence when update was caused by parent:
//	- updateFrom
//	- render (only if updateFrom indicated that children should be updated)
//	- commitUpdate (only if updateFrom indicated that commit is necessary)
//	- move (only if necessary)
//	- didUpdate
//
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The VN class is a base class for all types of virtual nodes. Virtual nodes are kept in a
// doublly-linked list and each node points to a parent node as well as first and last sub-nodes.
//
// Mounting sequence:
//	- constructor
//	- willMount
//	- render
//	- mount
//	- didMount
//
// Unmounting sequence:
//	- willUnmount
//	- unmount
//	- //didUnmount
//
// Updating sequence when update was caused by the node itself:
//	- render
//	- didUpdate
//
// Updating sequence when update was caused by parent:
//	- updateFrom
//	- render (only if updateFrom indicated that children should be updated)
//	- commitUpdate (only if updateFrom indicated that commit is necessary)
//	- move (only if necessary)
//	- didUpdate
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class VN {
    constructor(type) {
        // Next node in the chain of sibling nodes or null if this is the last one.
        this.next = null;
        // Previous node in the chain of sibling nodes or null if this is the first one.
        this.prev = null;
        // Chain of sub-nodes.
        this.subNodes = new VNChain_1.VNChain();
        // DOM node under which all content of this virtual node is rendered.
        this.anchorDN = null;
        this.type = type;
    }
    // IVNode implementation
    get Type() { return this.type; }
    get Parent() { return this.parent; }
    get Next() { return this.next; }
    get Prev() { return this.prev; }
    get SubNodes() { return this.subNodes; }
    get DisplayName() { return this.name; }
    // Initializes the node by passing the parent node to it. After this, the node knows its
    // place in the hierarchy and gets access to the root of it - the RootVN object.
    initialize(parent) {
        this.parent = parent;
        if (parent === null) {
            this.root = this;
            this.depth = 0;
        }
        else {
            this.root = parent.root;
            this.depth = parent.depth + 1;
        }
    }
    // Cleans up the node object before it is released.
    terminate() {
        // remove information about any published and subscribed services
        if (this.publishedServices !== undefined) {
            this.publishedServices.forEach((service, id) => this.root.notifyServiceUnpublished(id, this));
            this.publishedServices.clear();
        }
        if (this.subscribedServices !== undefined) {
            this.subscribedServices.forEach((info, id) => { this.root.notifyServiceUnsubscribed(id, this); });
            this.subscribedServices.clear();
        }
        this.anchorDN = null;
        this.subNodes.clear();
        this.root = null;
        this.parent = null;
        this.depth = 0;
    }
    //////////
    // Returns content that comprizes the children of the node. If the node doesn't have
    // sub-nodes, null should be returned. If this method is not implemented it is as though
    // null is returned.
    // This method is part of the Render phase.
    render() { }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() { }
    // Inserts the virtual node's content into DOM.
    // This method is part of the Commit phase.
    mount() { }
    // This method is called after the content of node and all its sub-nodes has been inserted
    // into the DOM tree.
    // This method is part of the Commit phase.
    didMount() { }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the Commit phase.
    willUnmount() { }
    // Removes content from the DOM tree.
    // This method is part of the Commit phase.
    unmount() { }
    //// Clears internal structures after the DOM content has been removed from the DOM tree.
    //// This method is part of the Commit phase.
    //didUnmount?(): void {}
    // Determines whether the update of this node from the given node is possible. The newVN
    // parameter is guaranteed to point to a VN of the same type as this node. This method is
    // NOT marked as optional and thus must be implemented by all types of virtual nodes.
    // This method is part of the Render phase.
    isUpdatePossible(newVN) { return false; }
    // Prepares this node to be updated from the given node. This method is invoked only if update
    // happens as a result of rendering the parent nodes. The newVN parameter is guaranteed to
    // point to a VN of the same type as this node. The returned object indicates whether children
    // should be updated and whether the commitUpdate method should be called.
    // This method is part of the Render phase.
    prepareUpdate(newVN) { return { shouldCommit: false, shouldRender: false }; }
    // Commits updates made to this node to DOM.
    // This method is part of the Commit phase.
    commitUpdate(newVN) { }
    // This method is called after the content of node and all its sub-nodes has been updated
    // in the DOM tree.
    // This method is part of the Commit phase.
    didUpdate() { }
    // Determines whether the node supports handling of errors; that is, exception thrown during
    // rendering of the node itself and/or its sub-nodes.
    // This method is part of the Render phase.
    supportsErrorHandling() { return false; }
    // This method is called after an exception was thrown during rendering of the node itself
    // and/or its sub-nodes. It returns content comprising the children of the node.
    // This method is part of the Render phase.
    handleError(vnErr, path) { }
    // Returns DOM node corresponding to the virtual node itself (if any) and not to any of its
    // sub-nodes.
    getOwnDN() { return null; }
    // Returns the first DOM node defined by either this virtual node or one of its sub-nodes.
    // This method is only called on the mounted nodes.
    getFirstDN() {
        let dn = this.getOwnDN();
        if (dn !== null)
            return dn;
        // recursively call this method on the sub-nodes from first to last until a valid node
        // is returned
        for (let svn = this.subNodes.first; svn !== null; svn = svn.next) {
            dn = svn.getFirstDN();
            if (dn !== null)
                return dn;
        }
        return null;
    }
    // Returns the last DOM node defined by either this virtual node or one of its sub-nodes.
    // This method is only called on the mounted nodes.
    getLastDN() {
        let dn = this.getOwnDN();
        if (dn !== null)
            return dn;
        // recursively call this method on the sub-nodes from last to first until a valid node
        // is returned
        for (let svn = this.subNodes.last; svn !== null; svn = svn.prev) {
            dn = svn.getLastDN();
            if (dn !== null)
                return dn;
        }
        return null;
    }
    // Returns the list of DOM nodes that are immediate children of this virtual node; that is,
    // are NOT children of sub-nodes that have their own DOM node. Never returns null.
    getImmediateDNs() {
        let arr = [];
        this.collectImmediateDNs(arr);
        return arr;
    }
    // Collects all DOM nodes that are immediate children of this virtual node (that is,
    // are NOT children of sub-nodes that have their own DOM node) into the given array.
    collectImmediateDNs(arr) {
        let dn = this.getOwnDN();
        if (dn !== null)
            arr.push(dn);
        else {
            // recursively call this method on the sub-nodes from first to last
            for (let svn = this.subNodes.first; svn !== null; svn = svn.next)
                svn.collectImmediateDNs(arr);
        }
    }
    // This method is called to set a distinguishing display name identifying the object
    // represented by the node (e.g. component instance).
    setDisplayName(name) {
        this.name = name;
    }
    // Schedules an update for this node.
    requestUpdate() {
        if (this.root)
            this.root.requestNodeUpdate(this);
    }
    // Cancels a previously requested update for this node.
    cancelUpdate() {
        if (this.root)
            this.root.cancelNodeUpdate(this);
    }
    // Schedules to call the given function either before or after all the scheduled components
    // have been updated.
    scheduleCall(func, beforeUpdate = false) {
        if (this.root)
            this.root.scheduleFuncCall(func, beforeUpdate);
    }
    // Cancels a call that has been scheduled to be made either before or after all the scheduled
    // components have been updated.
    cancelScheduledCall(func, beforeUpdate = false) {
        if (this.root)
            this.root.cancelScheduledFuncCall(func, beforeUpdate);
    }
    // Registers an object of any type as a service with the given ID that will be available for
    // consumption by descendant nodes.
    publishService(id, service) {
        if (this.publishedServices === undefined)
            this.publishedServices = new Map();
        let existinService = this.publishedServices.get(id);
        if (existinService !== service) {
            this.publishedServices.set(id, service);
            this.root.notifyServicePublished(id, this);
        }
    }
    // Unregisters a service with the given ID.
    unpublishService(id) {
        if (this.publishedServices === undefined)
            return;
        this.publishedServices.delete(id);
        this.root.notifyServiceUnpublished(id, this);
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
        this.root.notifyServiceSubscribed(id, this);
        mim.setRef(ref, this.getService(id, defaultService));
    }
    // Unsubscribes from a service with the given ID. The Ref object that was used to subscribe,
    // will be set to undefined.
    unsubscribeService(id) {
        if (this.subscribedServices === undefined)
            return;
        let info = this.subscribedServices.get(id);
        if (info === undefined)
            return;
        mim.setRef(info.ref, undefined);
        this.subscribedServices.delete(id);
        this.root.notifyServiceUnsubscribed(id, this);
        if (this.subscribedServices.size === 0)
            this.subscribedServices = undefined;
    }
    // Notifies the node that publication information about the given service (to which the node
    // has previously subscribed) has changed.
    notifyServiceChanged(id) {
        if (this.subscribedServices === undefined)
            return;
        let info = this.subscribedServices.get(id);
        if (info === undefined)
            return;
        mim.setRef(info.ref, this.getService(id, info.defaultService));
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
        return this.parent !== null ? this.parent.findService(id, true) : undefined;
    }
    // Finds the first DOM node in the tree of virtual nodes that comes after our node that is a
    // child of our own anchor element. We use it as a node before which to insert/move nodes of
    // our sub-nodes during the reconciliation process. The algorithm first goes to the next
    // siblings of our node and then to the next siblings of our parent node recursively. It stops
    // when we either find a DOM node (then it is returned) or find a differen anchor element
    // (then null is returned). This method is called before the reconciliation process for our
    // sub-nodes starts and, therefore, it only traverses mounted nodes.
    getNextDNUnderSameAnchorDN(anchorDN) {
        // check if we have sibling DOM nodes after our last sub-node - that might be elements
        // not controlled by our component.
        if (this.subNodes.last !== null) {
            const dn = this.subNodes.last.getFirstDN();
            if (dn !== null) {
                const nextSibling = dn.nextSibling;
                if (nextSibling !== null)
                    return nextSibling;
            }
        }
        // loop over our next siblings
        for (let vn = this.next; vn !== null; vn = vn.next) {
            if (vn.anchorDN !== anchorDN)
                return null;
            // note that getFirstDN call traverses the hierarchy of nodes. Note also that
            // it cannot find a node under a different anchor element because the first different
            // anchor element will be returned as a wanted node.
            const dn = vn.getFirstDN();
            if (dn !== null)
                return dn;
        }
        // recurse to our parent if exists
        return this.parent !== null && this.parent.anchorDN === anchorDN
            ? this.parent.getNextDNUnderSameAnchorDN(anchorDN) : null;
    }
    // Returns array of node names starting with this node and up until the top-level node.
    get path() {
        let depth = this.depth;
        let path = Array(depth);
        for (let i = 0, vn = this; i < depth; i++, vn = vn.parent) {
            path[i] = vn.name;
        }
        return path;
    }
    // Determines whether the node is mounted.
    get IsMounted() { return this.anchorDN !== null; }
    // Returns string representation of the node.
    toString() { return this.name; }
}
exports.VN = VN;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The VNSubscribedServiceInfo class keeps information about a subscription of a node to a service.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class VNSubscribedServiceInfo {
}


/***/ }),

/***/ "./src/core/VNChain.ts":
/*!*****************************!*\
  !*** ./src/core/VNChain.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The VNChain class represents a doublly-linked list of virtual nodes. It references the first
// and last sub-nodes and provides some convenience methods.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class VNChain {
    constructor(vn) {
        // First node in the chain of sub-nodes. Null for empty chains.
        this.first = null;
        // Last node in the chain of sub-nodes. Null for empty chains.
        this.last = null;
        // Number of nodes in the chain.
        this.count = 0;
        if (vn !== undefined && vn != null)
            this.appendVN(vn);
    }
    // IVNChain implementation
    get First() { return this.first; }
    get Last() { return this.last; }
    get Count() { return this.count; }
    // Removes all nodes from the chain.
    clear() {
        this.first = this.last = null;
        this.count = 0;
    }
    // Adds a new node to the end of the chain.
    appendVN(vn) {
        if (vn === null)
            return;
        vn.prev = this.last;
        if (this.first === null)
            this.first = this.last = vn;
        else {
            this.last.next = vn;
            this.last = vn;
        }
        vn.next = null;
        this.count++;
    }
    // Adds all nodes from the given chain to the end of our chain.
    appendChain(chain) {
        if (chain === null || chain.first === null)
            return;
        chain.first.prev = this.last;
        if (this.first === null) {
            this.first = chain.first;
            this.last = chain.last;
        }
        else {
            this.last.next = chain.first;
            this.last = chain.last;
        }
        chain.last.next = null;
        this.count += chain.count;
    }
    // Adds a new node to the start of the chain.
    insertVN(vn) {
        if (vn === null)
            return;
        vn.next = this.first;
        if (this.first === null)
            this.first = this.last = vn;
        else {
            this.first.prev = vn;
            this.first = vn;
        }
        vn.prev = null;
        this.count++;
    }
    // Replaces the given node with the nodes from the given chain.
    replaceVNWithChain(vn, chain) {
        if (vn === null || chain === null)
            return;
        let prev = vn.prev;
        let next = vn.next;
        if (this.first === vn)
            this.first = chain.first;
        if (this.last === vn)
            this.last = chain.last;
        if (prev !== null)
            prev.next = chain.first;
        if (next != null)
            next.prev = chain.last;
        this.count += chain.count - 1;
    }
    // Deletes the given node from the chain.
    deleteVN(vn) {
        if (vn === null)
            return;
        let prev = vn.prev;
        let next = vn.next;
        if (this.first === vn)
            this.first = next;
        if (this.last === vn)
            this.last = prev;
        if (prev !== null)
            prev.next = next;
        if (next != null)
            next.prev = prev;
        this.count--;
    }
}
exports.VNChain = VNChain;


/***/ }),

/***/ "./src/core/VNChainFuncs.ts":
/*!**********************************!*\
  !*** ./src/core/VNChainFuncs.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ./mim */ "./src/core/mim.ts");
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const VNChain_1 = __webpack_require__(/*! ./VNChain */ "./src/core/VNChain.ts");
const InstanceVN_1 = __webpack_require__(/*! ./InstanceVN */ "./src/core/InstanceVN.ts");
const ClassVN_1 = __webpack_require__(/*! ./ClassVN */ "./src/core/ClassVN.ts");
const FuncVN_1 = __webpack_require__(/*! ./FuncVN */ "./src/core/FuncVN.ts");
const ElmVN_1 = __webpack_require__(/*! ./ElmVN */ "./src/core/ElmVN.ts");
const TextVN_1 = __webpack_require__(/*! ./TextVN */ "./src/core/TextVN.ts");
// Creates a chain of virtual nodes from the given content. For all types of contents other than an
// array, the returned chain contains a single VN. If the input content is an array, then
// a VN is created for each of the array elements. Since array elements might also be arrays,
// the process is recursive.
function createVNChainFromContent(content) {
    const chain = new VNChain_1.VNChain();
    let contentType = typeof content;
    if (content === null || content === undefined || contentType === "boolean" || contentType === "function")
        return chain;
    if (content instanceof VN_1.VN)
        chain.appendVN(content);
    else if (content instanceof VNChain_1.VNChain)
        chain.appendChain(content);
    else if (content instanceof mim.Component)
        chain.appendVN(new InstanceVN_1.InstanceVN(content));
    else if (Array.isArray(content)) {
        for (let arrItem of content)
            chain.appendChain(createVNChainFromContent(arrItem));
    }
    else if (contentType === "string")
        chain.appendVN(new TextVN_1.TextVN(content));
    else if (content instanceof Promise)
        throw content;
    else
        chain.appendVN(new TextVN_1.TextVN(content.toString()));
    return chain;
}
exports.createVNChainFromContent = createVNChainFromContent;
// Creates a chain of virtual nodes from the data provided by the TypeScript's JSX parser.
function createVNChainFromJSX(tag, props, children) {
    const chain = new VNChain_1.VNChain();
    if (tag === mim.Fragment || tag === "m")
        chain.appendChain(createVNChainFromContent(children));
    else if (mim.Component.isPrototypeOf(tag))
        chain.appendVN(new ClassVN_1.ClassVN(tag, props, children));
    else {
        let tagType = typeof tag;
        if (tagType === "function")
            chain.appendVN(new FuncVN_1.FuncVN(tag, props, children));
        else if (tagType === "string")
            chain.appendVN(new ElmVN_1.ElmVN(tag, props, children));
        ///////////////
        else
            throw new Error("Invalid tag in jsx processing function: " + tag);
        ////////////
    }
    return chain;
}
exports.createVNChainFromJSX = createVNChainFromJSX;


/***/ }),

/***/ "./src/core/VNDisp.ts":
/*!****************************!*\
  !*** ./src/core/VNDisp.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VNChainFuncs_1 = __webpack_require__(/*! ./VNChainFuncs */ "./src/core/VNChainFuncs.ts");
/**
 * The VNDispGroup class describes a group of consecutive VNDisp objects correspponding to the
 * sequence of sub-nodes. The group is described using indices of VNDisp objects in the
 * subNodeDisp field of the parent VNDisp object.
 */
class VNDispGroup {
    /** Number of nodes in the group. */
    get count() { return this.last - this.first + 1; }
    ;
    constructor(parentDisp, action) {
        this.parentDisp = parentDisp;
        this.action = action;
    }
    /**
     * Determines first and last DOM nodes for the group. This method is invoked only after the
     * nodes were phisically updated/inserted and we can obtain their DOM nodes.
     */
    determineDNs() {
        for (let i = this.first; i <= this.last; i++) {
            let disp = this.parentDisp.subNodeDisps[i];
            let vn = this.action === 1 /* Insert */ ? disp.newVN : disp.oldVN;
            this.firstDN = vn.getFirstDN();
            if (this.firstDN)
                break;
        }
        for (let i = this.last; i >= this.first; i--) {
            let disp = this.parentDisp.subNodeDisps[i];
            let vn = this.action === 1 /* Insert */ ? disp.newVN : disp.oldVN;
            this.lastDN = vn.getLastDN();
            if (this.lastDN)
                break;
        }
    }
}
exports.VNDispGroup = VNDispGroup;
/**
 * The VNDisp class is a recursive structure that describes a disposition for a node and its
 * sub-nodes during the reconciliation process.
 */
class VNDisp {
    constructor() {
        /** Array of sub-nodes that should be removed during update of the sub-nodes. */
        this.subNodesToRemove = [];
        /**
         * Array of disposition objects for sub-nodes. This includes nodes to be updated
         * and to be inserted.
         */
        this.subNodeDisps = [];
    }
    /**
     * Compares old and new chains of sub-nodes and determines what nodes should be created, deleted
     * or updated. The result is remembered as an array of VNDisp objects for each sub-node and as
     * array of old sub-nodes that should be deleted. In addition, the new sub-nodes are divided
     * into groups of consecutive nodes that should be updated and of nodes that should be inserted.
     * The groups are built in a way so that if a node should be moved, its entire group is moved.
     */
    buildSubNodeDispositions() {
        // render the new content. Whether we use the old or the new node for rendering depends on
        // several factors
        //  - if it is an Insert action, then use the new node (old node isn't even available).
        //  - if it is an Update operation, then for all types of nodes except InstanceVN, use
        //    the old node. For InstanceVN use the new node because the old node is still pointing
        //    to the old component instance. We also rely on the fact that for the stem nodes, we
        //    have both old and new nodes pointing to the same node.
        let newChain = VNChainFuncs_1.createVNChainFromContent(this.action === 1 /* Insert */ || this.oldVN.type === 1 /* InstanceComp */
            ? this.newVN.render() : this.oldVN.render());
        // loop over new nodes and fill an array of VNDisp objects in the parent disp. At the same
        // time, build a map that includes all new nodes that have keys. The values are VNDisp objects.
        let newKeyedNodeMap = new Map();
        for (let newVN = newChain.first; newVN !== null; newVN = newVN.next) {
            let subNodeDisp = new VNDisp();
            subNodeDisp.newVN = newVN;
            this.subNodeDisps.push(subNodeDisp);
            if (newVN.key !== undefined)
                newKeyedNodeMap.set(newVN.key, subNodeDisp);
        }
        // loop over old nodes and put those that have keys matching new nodes into the new nodes' VNDisp
        // objects. Put those that don't have keys or that have keys that don't match any new node to
        // an array of non-matching old nodes
        let oldNonMatchingNodeList = [];
        let oldChain = this.oldVN.subNodes;
        for (let oldVN = oldChain.first; oldVN !== null; oldVN = oldVN.next) {
            if (oldVN.key === undefined)
                oldNonMatchingNodeList.push(oldVN);
            else {
                let subNodeDisp = newKeyedNodeMap.get(oldVN.key);
                if (subNodeDisp) {
                    subNodeDisp.oldVN = oldVN;
                    subNodeDisp.action = 2 /* Update */;
                }
                else
                    oldNonMatchingNodeList.push(oldVN);
            }
        }
        // by now we have all old and new nodes with the same keys matched to one another. Now loop
        // over new node dispositions and match the not-yet-matched ones (those with Unknown action)
        // to old nodes sequentially from the list of non-matched old nodes.
        let oldNonMatchingNodeListLength = oldNonMatchingNodeList.length;
        let oldNonMatchingNodeListIndex = 0;
        for (let subNodeDisp of this.subNodeDisps) {
            if (subNodeDisp.action)
                continue;
            let oldVN;
            if (oldNonMatchingNodeListIndex < oldNonMatchingNodeListLength) {
                let oldVN = oldNonMatchingNodeList[oldNonMatchingNodeListIndex];
                let newVN = subNodeDisp.newVN;
                if (oldVN.type === newVN.type && oldVN.isUpdatePossible(newVN)) {
                    // we are here if the new node can update the old one
                    subNodeDisp.oldVN = oldVN;
                    subNodeDisp.action = 2 /* Update */;
                }
                else {
                    // we are here if the new node cannot update the old one and shold completely
                    // replace it. We add the old node to the list of those to be removed and indicate
                    // that the new node should be mounted.
                    this.subNodesToRemove.push(oldVN);
                    subNodeDisp.action = 1 /* Insert */;
                }
                oldNonMatchingNodeListIndex++;
            }
            else {
                // we are here if there are no non-matched old nodes left. Indicate that the new node
                // should be mounted.
                subNodeDisp.action = 1 /* Insert */;
            }
        }
        // old non-matched nodes from the current index to the end of the list will be unmounted
        for (let i = oldNonMatchingNodeListIndex; i < oldNonMatchingNodeListLength; i++)
            this.subNodesToRemove.push(oldNonMatchingNodeList[i]);
        if (this.subNodeDisps.length > VNDisp.NO_GROUP_THRESHOLD)
            this.buildSubNodeGroups();
    }
    /**
     * From a flat list of new sub-nodes builds groups of consecutive nodes that should be either
     * updated or inserted.
     */
    buildSubNodeGroups() {
        let count = this.subNodeDisps.length;
        ///////////////
        // this method is not supposed to be called if the number of sub-nodes is less then
        // the pre-determined threshold
        if (count === VNDisp.NO_GROUP_THRESHOLD)
            return;
        ////////////
        this.subNodeGroups = [];
        // loop over sub-nodes and on each iteration decide whether we need to open a new group
        // or put the current node into the existing group or close the existing group and open
        // a new one.
        let group;
        let lastDispIndex = count - 1;
        for (let i = 0; i < count; i++) {
            let disp = this.subNodeDisps[i];
            if (!group) {
                // open a new group
                group = new VNDispGroup(this, disp.action);
                group.first = i;
                this.subNodeGroups.push(group);
            }
            if (disp.action !== group.action) {
                // close the group with the previous index. Decrement the iterating index so that
                // the nex iteration will open a new group. Note that we cannot be here for a node
                // that starts a new group because for such node disp.action === groupAction.
                group.last = --i;
                group = undefined;
            }
            else if (group.action === 2 /* Update */) {
                // an "update" node is out-of-order and should close the current group if its next
                // sibling in the new list is different from the next sibling in the old list. The
                // last node will close the last group after the loop.
                if (i !== lastDispIndex && this.subNodeDisps[i + 1].oldVN !== disp.oldVN.next) {
                    // close the group with the current index.
                    group.last = i;
                    group = undefined;
                }
            }
            // all consecutive "insert" nodes belong to the same group so we just wait for the
            // next node
        }
        // close the last group
        group.last = count - 1;
    }
}
/**
 * If the node has more than this number of sub-nodes, then we build groups. The idea is that
 * otherwise, the overhead of building groups is not worth it.
 */
VNDisp.NO_GROUP_THRESHOLD = 2;
exports.VNDisp = VNDisp;


/***/ }),

/***/ "./src/core/mim.ts":
/*!*************************!*\
  !*** ./src/core/mim.ts ***!
  \*************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
const EventSlot_1 = __webpack_require__(/*! ./EventSlot */ "./src/core/EventSlot.ts");
/**
 * Base class for components. Components that derive from this class must implement the render
 * method.
 */
class Component {
    constructor(props) {
        /** Site object through which component can request services. */
        this.site = undefined;
        this.props = props;
    }
    /** Sets or clears the site object through which component can request services. */
    setSite(site) {
        this.site = site;
        // if the site has just be set (that is the component is being mounted) and the displayName
        // property is defined,pass it on to the site
        if (site !== undefined && this.dispalyName !== undefined)
            this.site.setDisplayName(this.dispalyName);
    }
    /** Sets the component's display name */
    setDisplayName(dispalyName) {
        this.dispalyName = dispalyName;
        if (this.site !== undefined)
            this.site.setDisplayName(dispalyName);
    }
    /** This method is called by the component to request to be updated. */
    updateMe() {
        if (this.site !== undefined)
            this.site.requestUpdate();
    }
    // This method is called by the component to ignore any update/delete/replace requests
    // that have been made by the component during the current JavaScript event loop.
    ignoreMe() {
        if (this.site !== null)
            this.site.cancelUpdate();
    }
    /** This method is called by the component to schedule a function to be invoked on the next
     * update cycle either before or after the scheduled components are updated.
     * @param func Function to be called
     * @param beforeUpdate Flag indicating whether the function should be called before (true)
     * or after (false) the update cycle.
     */
    callMe(func, beforeUpdate = false) {
        if (this.site !== null)
            this.site.scheduleCall(func, beforeUpdate);
    }
    /** This method is called by the component to cancel a scheduled function. */
    dontCallMe(func, beforeUpdate = false) {
        if (this.site !== null)
            this.site.cancelScheduledCall(func, beforeUpdate);
    }
}
exports.Component = Component;
/**
 * Reference class to use whenever a reference to an object is needed - for example, with JSX `ref`
 * attributes and services.
 */
class Ref {
    constructor(listener, initialReferene) {
        /** Event that is fired when the referenced value changes */
        this.changedEvent = new EventSlot_1.EventSlot();
        if (listener !== undefined)
            this.changedEvent.add(listener);
        this._r = initialReferene;
    }
    /** Adds a callback that will be invoked when the vaue of the refernce changes. */
    addListener(listener) {
        this.changedEvent.add(listener);
    }
    /** Removes a callback that was added with addListener. */
    removeListener(listener) {
        this.changedEvent.remove(listener);
    }
    /** Get accessors to the reference value */
    get r() { return this._r; }
    /** Set accessors to the reference value */
    set r(newRef) {
        if (this._r !== newRef) {
            this._r = newRef;
            this.changedEvent.fire(newRef);
        }
    }
    /** Clears the reference value and also clears all all registered listeners */
    clear() {
        this._r = undefined;
        this.changedEvent.clear();
    }
}
exports.Ref = Ref;
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
        let refObj = ref;
        if (onlyIf === undefined || refObj.r === onlyIf)
            refObj.r = val;
    }
    else if (typeof ref === "function")
        ref(val);
}
exports.setRef = setRef;
/**
 * Decorator function for defining properties with a set method that calls the updateMe method
 * whenever the property value changes.
 *
 *	```tsx
 *	class Child extends Component
 *	{
 *		@mim.prop text: string = "Hello!";
 *		render()
 *		{
 *	 		return <div>{text}</div>
 *		}
  *	}
*
 *	class Parent extends Component
 *	{
 *		child = new Child();
 *		render()
 *		{
 *			return <div click={() => this.child.text += " again"}>{this.child}</div>
 *		}
 *	}
 *	```
 *
 * In the above example, the Child component will be re-rendered when its `text` property changes.
 * The Parent component appends the word "again" to the Child component's text whenever the user
 * clicks on it.
 * @param target
 * @param name
 */
function prop(target, name) {
    let attrName = "_m_" + name;
    Object.defineProperty(target, name, {
        set(val) {
            if (this[attrName] !== val) {
                this[attrName] = val;
                this.updateMe();
            }
        },
        get() { return this[attrName]; }
    });
}
exports.prop = prop;
/**
 * An artificial "fragment" component that is only used as a temporary collection of other items
 * in places where JSX only allows a single item. Our JSX factory function creates a virtual node
 * for its children, but later this node is thrown away and only children are used. This component
 * is only needed because currently TypeScript doesn't alow the <> fragment notation if a custom
 * JSX factory function is used.
 *
 * Use it as following:
 *
 *	import * as mim from "mimbl"
 *	.....
 *	render()
 *	{
 *		return <mim.Fragment>
 *			<div1/>
 *			<div2/>
 *			<div3/>
 *		</mim.Fragment>
 *	}
 * @param props
 */
function Fragment(props) { }
exports.Fragment = Fragment;
/**
 * Registers custom attribute functory for the given property name.
 * @param propName name of the custom attribute
 * @param factory custom property factory
 */
function registerCustomAttribute(propName, factory) {
    s_registerCustomAttribute(propName, factory);
}
exports.registerCustomAttribute = registerCustomAttribute;
/**
 * The FuncProxy component wraps a function that produces content. Proxies can wrap instance
 * methods of classes that have access to "this" thus allowing a single class to "host" multiple
 * components that can be updated separately. This is especially useful when there is a hierarchy
 * of derived classes and (virtual) methods that deliver several pieces of content. FuncProxies
 * can wrap these virtual methods (or other methods that call them) so that the content pieces
 * can be updated separately. FuncProxy has a public Update method that should be called to cause
 * the rendering mechanism to invoke the function wrapped by the FuncProxy.
 */
class FuncProxy extends Component {
    constructor(func) {
        super();
        this.update = () => {
            if (this.site)
                this.site.requestUpdate();
        };
        this.func = func;
    }
    render() {
        return this.func();
    }
}
exports.FuncProxy = FuncProxy;
/**
 * The Waiting component wraps a Promise and replaces its content when the promise is settled.
 * Before the promise is settled, the component displays an optional "in-progress" content
 * specified in the constructor. If the promise is rejected, the component will either display
 * the "error" content obtained by calling a functions specified in the constructor or if such
 * function is not specified show empty content.
 */
class Waiting extends Component {
    /**
     * Constructs the object
     * @param promise Promise object to wait for
     * @param progressContent Content to display while waiting for the promise
     * @param errorContentFunc Content to display if the promise is rejected
     */
    constructor(promise, progressContent, errorContentFunc) {
        super();
        this.content = progressContent;
        this.watchPromise(promise, errorContentFunc);
    }
    render() {
        return this.content;
    }
    watchPromise(promise, errorContentFunc) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.content = yield promise;
            }
            catch (err) {
                this.content = null;
                if (errorContentFunc !== undefined) {
                    try {
                        this.content = errorContentFunc(err);
                    }
                    catch (anotherErr) {
                    }
                }
            }
        });
    }
}
exports.Waiting = Waiting;
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
    return "ownerSVGElement" in elm;
}
exports.isSvg = isSvg;
/**
 * Determines whether the given element is the <svg> element.
 * @param elm  Element to test
 */
function isSvgSvg(elm) {
    return elm.ownerSVGElement === null;
}
exports.isSvgSvg = isSvgSvg;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Definitions of functions that depend on VN-derived classes
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const RootVN_1 = __webpack_require__(/*! ./RootVN */ "./src/core/RootVN.ts");
const VNChainFuncs_1 = __webpack_require__(/*! ./VNChainFuncs */ "./src/core/VNChainFuncs.ts");
/**
 * JSX Factory function. In order for this function to be invoked by the TypeScript compiler, the
 * tsconfig.json must have the following option:
 *
 * "compilerOptions":
 * {
 *     "jsx": "react",
 *     "jsxFactory": "mim.jsx"
 * }
 *
 * The .tsx files must import the mimbl module as mim: import * as mim from "mimbl"
 * @param tag
 * @param props
 * @param children
 */
function jsx(tag, props, ...children) {
    // children parameter is always an array. A component can specify that its children are an array
    // of a certain type, e.g. class A extends mim.Component<{},T[]>. In this case there are two
    // ways to specify children in JSX:
    //	1) <A>{t1}{t2}</A>. In this case, children will be [t1, t2].
    //	2) <A>{[t1, t2]}</A>. In this case, children will be [[t1,t2]].
    // The realChildren variable accommodates both cases.
    let realChildren = children.length === 1 && Array.isArray(children[0]) ? children[0] : children;
    return VNChainFuncs_1.createVNChainFromJSX(tag, props, realChildren);
}
exports.jsx = jsx;
/**
 * Renders the given content (usually result of JSX expression) under the given HTML element in a
 * synchronus manner.
 * @param content Content to render.
 * @param anchorDN DOM element under which to render the content. If null or undefined, then
 * render under the document.body tag.
 */
function mountSync(content, anchorDN = null) {
    RootVN_1.RootVN.mountRootSync(content, anchorDN);
}
exports.mountSync = mountSync;
// 
/**
 * Removes the content that was originally generated by the mountSync function.
 * @param anchorDN DOM element under which the content was previously rendered.
 */
function unmountSync(anchorDN = null) {
    RootVN_1.RootVN.unmountRootSync(anchorDN);
}
exports.unmountSync = unmountSync;
/**
 * Renders the given content (usually result of JSX expression) under the given HTML element
// asynchronously.
 * @param content Content to render.
 * @param anchorDN DOM element under which to render the content. If null or undefined,then
 *				render under the document.body tag.
 */
function mount(content, anchorDN = null) {
    RootVN_1.RootVN.mountRoot(content, anchorDN);
}
exports.mount = mount;
/**
 * Removes the content that was originally generated by the mount function.
 * @param anchorDN DOM element under which the content was previously rendered.
 */
function unmount(anchorDN = null) {
    RootVN_1.RootVN.unmountRoot(anchorDN);
}
exports.unmount = unmount;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Provide implementation for the registerCustomAttribute exported function.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const ElmAttr_1 = __webpack_require__(/*! ../core/ElmAttr */ "./src/core/ElmAttr.ts");
function s_registerCustomAttribute(propName, factory) {
    ElmAttr_1.ElmAttr.registerProperty(propName, { type: 3 /* CustomAttr */, factory });
}


/***/ }),

/***/ "./src/mimblTypes.ts":
/*!***************************!*\
  !*** ./src/mimblTypes.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Type definitions for mimbl
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./core/mim */ "./src/core/mim.ts"));
__export(__webpack_require__(/*! ./core/ElmAttr */ "./src/core/ElmAttr.ts"));
__export(__webpack_require__(/*! ./core/Utils */ "./src/core/Utils.ts"));
__export(__webpack_require__(/*! ./core/EventSlot */ "./src/core/EventSlot.ts"));
__export(__webpack_require__(/*! ./core/LocalStyles */ "./src/core/LocalStyles.ts"));


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvQ29tcEJhc2VWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbUF0dHIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9FbG1WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0V2ZW50U2xvdC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0Z1bmNWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0luc3RhbmNlVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Mb2NhbFN0eWxlcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1Jvb3RVSS50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TdGF0cy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1N2Z0VsbXMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9UZXh0Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9VdGlscy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVk5DaGFpbi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQ2hhaW5GdW5jcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZORGlzcC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL21pbS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9taW1ibFR5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QixLQUFLLENBQUUsT0FBWSxFQUFFLFdBQWlCLElBQUk7SUFFekQsZUFBTSxDQUFDLFNBQVMsQ0FBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUhELHNCQUdDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLFdBQWlCLElBQUk7SUFFN0MsZUFBTSxDQUFDLFdBQVcsQ0FBRSxRQUFRLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBSEQsMEJBR0M7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLHNGQUFrRDtBQUVsRCxTQUFTLHlCQUF5QixDQUFLLFFBQWdCLEVBQUUsT0FBbUM7SUFFM0YsaUJBQU8sQ0FBQyxnQkFBZ0IsQ0FBRSxRQUFRLEVBQUUsRUFBRSxJQUFJLG9CQUFxQixFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDN0UsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM1NENELDZCQUE2Qjs7Ozs7QUFFN0IscUVBQTJCO0FBRzNCLDZFQUErQjtBQUMvQix5RUFBNkI7QUFDN0IsaUZBQWlDO0FBQ2pDLHFGQUFtQyIsImZpbGUiOiJtaW1ibC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1ibFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1ibFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbWJsVHlwZXMudHNcIik7XG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Q29tcEJhc2VWTn0gZnJvbSBcIi4vQ29tcEJhc2VWTlwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIGNvbXBvbmVudCBpbXBsZW1lbnRpbmcgdGhlIElDb21wb25lbnQ8PiBpbnRlcmZhY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NWTiBleHRlbmRzIENvbXBCYXNlVk48bWltLklDb21wb25lbnQ+IGltcGxlbWVudHMgbWltLklDbGFzc1ZOXHJcbntcclxuXHRjb25zdHJ1Y3RvciggY29tcENsYXNzOiBtaW0uSUNvbXBvbmVudENsYXNzLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoIG1pbS5WTlR5cGUuQ2xhc3NDb21wKVxyXG5cclxuXHRcdHRoaXMuY29tcENsYXNzID0gY29tcENsYXNzO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5IGFuZCByZWZcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgY2hpbGRyZW4gYXMgcGFydCBvZiBwcm9wc1xyXG5cdFx0dGhpcy5wcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdC8vIGRlZmF1bHQgbm9kZSBuYW1lIGlzIHRoZSBjb21wb25lbnQncyBjbGFzcyBuYW1lIHBsdXMga2V5IGlmIHNwZWNpZmllZFxyXG5cdFx0dGhpcy5uYW1lID0gdGhpcy5jb21wQ2xhc3MubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPT0gdW5kZWZpbmVkICYmIHRoaXMua2V5ICE9PSBudWxsKVxyXG5cdFx0XHR0aGlzLm5hbWUgKz0gXCIgQFwiICsgdGhpcy5rZXk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJQ2xhc3NWTiBpbXBsZW1lbnRhdGlvblxyXG5cdHB1YmxpYyBnZXQgQ29tcENsYXNzKCk6IG1pbS5JQ29tcG9uZW50Q2xhc3MgeyByZXR1cm4gdGhpcy5jb21wQ2xhc3M7IH1cclxuXHRwdWJsaWMgZ2V0IENvbXAoKTogbWltLklDb21wb25lbnQgeyByZXR1cm4gdGhpcy5jb21wIGFzIG1pbS5JQ29tcG9uZW50OyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHR0aGlzLmNvbXAgPSBuZXcgdGhpcy5jb21wQ2xhc3MoIHRoaXMucHJvcHMpO1xyXG5cdFx0dGhpcy5jb21wLnNldFNpdGUoIHRoaXMpO1xyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnRXaWxsTW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC5jb21wb25lbnRXaWxsTW91bnQoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWRcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5jb21wKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBjb21wb25lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGNvbXBvbmVudHMgKGFuZC9vciBlbGVtZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuY29tcCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnRXaWxsVW5tb3VudClcclxuXHRcdFx0dGhpcy5jb21wLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XHJcblxyXG5cdFx0dGhpcy5jb21wLnNldFNpdGUoIG51bGwpO1xyXG5cdFx0dGhpcy5jb21wID0gdW5kZWZpbmVkO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoZSBjb21wb25lbnQgY2xhc3MgbmFtZSBpcyB0aGUgc2FtZVxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcENsYXNzID09PSAobmV3Vk4gYXMgQ2xhc3NWTikuY29tcENsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYVxyXG5cdC8vIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRpbmcgc3ViLW5vZGVzIGlzIG5lY2Vzc2FyeSBhbmRcclxuXHQvLyBmYWxzZSBvdGhlcndpc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdDbGFzc1ZOID0gbmV3Vk4gYXMgQ2xhc3NWTjtcclxuXHJcblx0XHQvLyBsZXQgdGhlIGNvbXBvbmVudCBrbm93IGFib3V0IHRoZSBuZXcgcHJvcGVydGllcyAoaWYgaXQgaXMgaW50ZXJlc3RlZCBpbiB0aGVtKVxyXG5cdFx0bGV0IHNob3VsZFJlbmRlcjogYm9vbGVhbiA9IHRydWU7XHJcblx0XHRpZiAodGhpcy5jb21wLnNob3VsZENvbXBvbmVudFVwZGF0ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzaG91bGRSZW5kZXIgPSB0aGlzLmNvbXAuc2hvdWxkQ29tcG9uZW50VXBkYXRlKCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0NsYXNzVk4ucmVmICE9PSB0aGlzLnJlZilcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByZWZlcmVuY2Ugb2JqZWN0XHJcblx0XHRcdHRoaXMucmVmID0gbmV3Q2xhc3NWTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdDbGFzc1ZOLnJlZiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB3ZSBrbm93IHRoYXQgb3VyIHJlZmVyZW5jZSBpcyBkZWZpbmVkLCBzbyB1bnNldCBpdFxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdDbGFzc1ZOLmtleTtcclxuXHJcblx0XHQvLyBzaGFsbG93IGNvcHkgdGhlIG5ldyBwcm9wZXJ0aWVzIGZyb20gdGhlIG90aGVyIG5vZGUgdG8gb3VyIG9iamVjdC4gVGhpcyBpcyBuZWVkZWRcclxuXHRcdC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBnb3Qgb3VyIHByb3BzIG9iamVjdCBpbiB0aGUgY29uc3RydWN0b3IgYW5kIHdpbGwga2VlcFxyXG5cdFx0Ly8gd29ya2luZyB3aXRoIGl0IC0gZXNwZWNpYWxseSBpZiBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlIG1ldGhvZC5cclxuXHRcdE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goIGtleSA9PiBkZWxldGUgdGhpcy5wcm9wc1trZXldKTtcclxuXHRcdE9iamVjdC5hc3NpZ24oIHRoaXMucHJvcHMsIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiB7IHNob3VsZENvbW1pdDogZmFsc2UsIHNob3VsZFJlbmRlciB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUeXBlIG9mIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBjb21wQ2xhc3M6IG1pbS5JQ29tcG9uZW50Q2xhc3M7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC5cclxuXHRwcml2YXRlIHJlZjogbWltLlJlZjxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTn0gZnJvbSBcIi4vVk5cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBDb21wQmFzZVZOIGlzIGEgYmFzZSBjbGFzcyBmb3IgSW5zdGFuY2VWTiBhbmQgQ2xhc3NWTi4gSXQgcHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHlcclxuLy8gaW4gdGVybXMgb2YgdXBkYXRlIHJlcXVlc3RzIGFuZCBsaWZlY3ljbGUgbWFuYWdlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wQmFzZVZOPFRDb21wIGV4dGVuZHMgbWltLklDb21wb25lbnQ+IGV4dGVuZHMgVk4gaW1wbGVtZW50cyBtaW0uSUNvbXBvbmVudFNpdGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB0eXBlOiBtaW0uVk5UeXBlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCB0eXBlKVxyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0cHVibGljIGdldFN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICh0aGlzLmNvbXAgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwicmVuZGVyKCkgd2FzIGNhbGxlZCBvbiB1bm1vdW50ZWQgY29tcG9uZW50LlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG4vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLnJlbmRlcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5oYW5kbGVFcnJvciAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBoYXMgYmVlbiBpbnNlcnRlZFxyXG5cdC8vIGludG8gdGhlIERPTSB0cmVlLlxyXG5cdHB1YmxpYyBkaWRNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnREaWRNb3VudClcclxuXHRcdFx0dGhpcy5jb21wLmNvbXBvbmVudERpZE1vdW50KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBoYXMgYmVlbiB1cGRhdGVkXHJcblx0Ly8gaW4gdGhlIERPTSB0cmVlLlxyXG5cdHB1YmxpYyBkaWRVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbXAuY29tcG9uZW50RGlkVXBkYXRlKVxyXG5cdFx0XHR0aGlzLmNvbXAuY29tcG9uZW50RGlkVXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETlxyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgZG9uJ3QgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIGNvbXA6IFRDb21wO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFR5cGUgb2YgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBQcm9wVHlwZVxyXG57XHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvLyBSZWd1bGFyIGF0dHJpYnV0ZXMgc2V0IHVzaW5nIEVsZW1lbnQuc2V0QXR0cmlidXRlKCk7XHJcblx0QXR0ciA9IDEsXHJcblxyXG5cdC8vIEV2ZW50IGxpc3RlbmVycyBzZXQgdXNpbmcgRWxlbWVudC5hZGRFdmVudExpc3RlbmVyXHJcblx0RXZlbnQgPSAyLFxyXG5cclxuXHQvLyBDdXN0b20gYXR0cmlidXRlcyBmb3Igd2hpY2ggaGFuZGxlciBmYWN0b3JpZXMgYXJlIHJlZ2lzdGVyZWRcclxuXHRDdXN0b21BdHRyID0gMyxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzZSBpbnRlcmZhY2UgZGVzY3JpYmluZyBpbmZvcm1hdGlvbiBrZXB0IGFib3V0IHByb3BlcnR5IHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBUeXBlIG9mIHRoZSBwcm9wZXJ0eS5cclxuXHR0eXBlOiBQcm9wVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgYXR0cmlidXRlcyB0aGF0IGNvbnRhaW5zIGZ1bmN0aW9ucyBmb3Igc2V0dGluZywgZGlmZmluZywgdXBkYXRpbmcgYW5kXHJcbi8vIHJlbW92aW5nIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXR0clByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGdW5jdGlvbiB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIERPTVxyXG5cdC8vIGVsbS5zZXRBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXMgYXR0cmlidXRlIG5hbWUgYW5kIHByb3BWYWwgY29udmVydGVkIHRvIHN0cmluZy5cclxuXHRzZXQ/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGFuZCByZXR1cm5zIGFuIG9iamVjdFxyXG5cdC8vIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHVwZGF0ZUZ1bmMgZnVuY3Rpb24uIElmIHVuZGVmaW5lZCBpcyByZXR1cm5lZCwgdGhlIHZhbHVlIG9mIHRoZVxyXG5cdC8vIGF0dHJpYnV0ZSB3aWxsIG5vdCBjaGFuZ2UgKHRoYXQgbWVhbnMgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgYXJlIGVxdWFsKS4gSWYgdGhpc1xyXG5cdC8vIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCBwcm9wZXJ0eSB2YWx1ZXMgYXJlIGNvbnZlcnRlZCB0byBzdHJpbmcgYW5kIGNvbXBhcmVkIGFzIHN0cmluZ3MuXHJcblx0Ly8gSWYgdGhlc2Ugc3RyaW5ncyBhcmUgZGlmZmVyZW50LCB0aGUgc3RyaW5nIGNvcnJlc3BvbmRpbmcgdG8gdGhlICBuZXcgdmFsdWUgaXMgcmV0dXJuZWQuXHJcblx0ZGlmZj86IChhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSkgPT4gYW55O1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHVwZGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYmFzZWQgb24gdGhlIG9iamVjdCB0aGF0IHdhcyByZXR1cm5lZFxyXG5cdC8vIGZyb20gdGhlIGRpZmYgZnVuY3Rpb24uIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIHNldCBmdW5jdGlvbiBpcyB1c2VkLiBJZlxyXG5cdC8vIHRoZSBzZXQgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQgZWl0aGVyLCB0aGUgRE9NIGVsbS5zZXRBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXNcclxuXHQvLyBhdHRyaWJ1dGUgbmFtZSBhbmQgdXBkYXRlVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0dXBkYXRlPzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgdXBkYXRlVmFsOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0ucmVtb3ZlQXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lLlxyXG5cdHJlbW92ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5cdC8vIFRoZSBhY3R1YWwgbmFtZSBvZiB0aGUgYXR0cmlidXRlLiBUaGlzIGlzIHNvbWV0aW1lcyBuZWVkZWQgaWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNhbm5vdCBiZVxyXG5cdC8vIHVzZWQgYXMgcHJvcGVydHkgbmFtZSAtIGZvciBleGFtcGxlLCBpZiBhdHRyaWJ1dGUgbmFtZSBjb250YWlucyBjaGFyYWN0ZXJzIG5vdCBhbGxvd2VkIGluXHJcblx0Ly8gVHlwZVNjcmlwdCBpZGVudGlmaWVyIChlLmcuIGRhc2gpLlxyXG5cdGF0dHJOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBldmVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudCBidWJibGVzLiBJZiB0aGUgZXZlbnQgZG9lc24ndCBidWJibGUsIHRoZSBldmVudCBoYW5kbGVyXHJcblx0Ly8gbXVzdCBiZSBzZXQgb24gdGhlIGVsZW1lbnQgaXRzZWxmOyBvdGhlcndpc2UsIHRoZSBldmVudCBoYW5kbGVyIGNhbiBiZSBzZXQgb24gdGhlIHJvb3RcclxuXHQvLyBhbmNob3IgZWxlbWVudCwgd2hpY2ggYWxsb3dzIGhhdmluZyBhIHNpbmdsZSBldmVudCBoYW5kbGVyIHJlZ2lzdGVyZWQgZm9yIG1hbnkgZWxlbWVudHMsXHJcblx0Ly8gd2hpY2ggaXMgbW9yZSBwZXJmb3JtYW50LlxyXG5cdGlzQnViYmxpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBjdXN0b20gYXR0cmlidXRlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQXR0clByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGYWN0b3J5IG9iamVjdCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy5cclxuXHRmYWN0b3J5OiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUZhY3Rvcnk8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHlwZSBjb21iaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgcmVndWxhciBhdHRyaWJ1dGVzIG9yIGV2ZW50cyBvciBjdXN0b20gYXR0cmlidXRlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFByb3BJbmZvID0gQXR0clByb3BJbmZvIHwgRXZlbnRQcm9wSW5mbyB8IEN1c3RvbUF0dHJQcm9wSW5mbztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEV4cG9ydGVkIGNsYXNzIHRoYXQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIHNldHRpbmcsIHVwZGF0aW5nIGFuZCByZW1vdmluZyBFbGVtZW50XHJcbi8vIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byBwcm9wZXJ0eSBuYW1lcy5cclxuLy9cclxuLy8gRWxlbWVudCBhdHRyaWJ1dGVzIGFyZSBkZXRlcm1pbmVkIHVzaW5nIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBFbG1WTiBtZXRob2RzLiBTb21lXHJcbi8vIHByb3BlcnRpZXMgYWxsb3cgdXNpbmcgbm9uLXRyaXZpYWwgdHlwZXMsIGUuZy4gYXJyYXlzIG9yIG9iamVjdHMsIGFuZCB0aHVzIGNhbm5vdCBiZSBzaW1wbHlcclxuLy8gaGFuZGxlZCB1c2luZyB0aGUgRWxlbWVudC5zZXRBdHRyaWJ1dGUgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbUF0dHJcclxue1xyXG5cdC8vIE9iamVjdCB0aGF0IG1hcHMgcHJvcGVydHkgbmFtZXMgdG8gUHJvcEluZm8tZGVyaXZlZCBvYmplY3RzLlxyXG5cdHByaXZhdGUgc3RhdGljIHByb3BJbmZvczoge1tQOnN0cmluZ106IFByb3BJbmZvfSA9XHJcblx0e1xyXG5cdFx0Ly8gYXR0cmlidXRlcyAtIG9ubHkgdGhvc2UgYXR0cmlidXRlcyBhcmUgbGlzdGVkIHRoYXQgaGF2ZSBub24tdHJpdmlhbCB0cmVhdG1lbnRcclxuXHRcdFwic3R5bGVcIjogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFN0eWxlUHJvcCwgZGlmZjogZGlmZlN0eWxlUHJvcCwgdXBkYXRlOiB1cGRhdGVTdHlsZVByb3AgfSxcclxuXHRcdFwidmFsdWVcIjogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZlZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVWYWx1ZVByb3AgfSxcclxuXHRcdFwiZGVmYXVsdFZhbHVlXCI6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRWYWx1ZVByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHRcdFwiY2hlY2tlZFwiOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZDaGVja2VkUHJvcCwgcmVtb3ZlOiByZW1vdmVDaGVja2VkUHJvcCB9LFxyXG5cdFx0XCJkZWZhdWx0Q2hlY2tlZFwiOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHJcblx0XHQvLyBldmVudCBsaXN0ZW5lcnMgLSBvbmx5IHRob3NlIGV2ZW50IGFyZSBsaXN0ZWQgdGhhdCBhcmUgbm9uLWJ1YmJsaW5nXHJcblx0XHRcIm1vdXNlZW50ZXJcIjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCwgaXNCdWJibGluZzogZmFsc2UgfSxcclxuXHRcdFwibW91c2VsZWF2ZVwiOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50LCBpc0J1YmJsaW5nOiBmYWxzZSB9LFxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0RWxtQXR0ci5wcm9wSW5mb3NbcHJvcE5hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFByb3BlcnR5SW5mbyggcHJvcE5hbWU6IHN0cmluZyk6IFByb3BJbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwdWJsaWMgc3RhdGljIHNldEF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHR5cGVvZiBwcm9wVmFsID09PSBcInN0cmluZ1wiID8gcHJvcFZhbCA6IHByb3BWYWwudG9TdHJpbmcoKSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCBhY3R1YWwgYXR0cmlidXRlIG5hbWUgdG8gdXNlXHJcblx0XHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YXR0ck5hbWUgPSBwcm9wTmFtZTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCBwcm9wVmFsKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIGF0dHJOYW1lLCB0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIiA/IHByb3BWYWwgOiBwcm9wVmFsLnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIHByb3BlcnR5IGFyZSBkaWZmZXJlbnQgYW5kIHNldHMgdGhlXHJcblx0Ly8gdXBkYXRlZCB2YWx1ZSB0byB0aGUgZWxlbWVudCdzIGF0dHJpYnV0ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kXHJcblx0Ly8gZmFsc2UgaWYgbm8gY2hhbmdlIGluIHByb3BlcnR5IHZhbHVlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoaXMgaXMgbm90IGEgc3BlY2lhbCBjYXNlIChwcm9wZXJ0eSBpcyBub3QgaW4gb3VyIGxpc3QpIGp1c3QgY29tcGFyZSB0aGVtIGFuZFxyXG5cdFx0XHQvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgc2V0IHRoZSBhdHRyaWJ1dGUgdG8gdGhlIG5ldyB2YWx1ZS5cclxuXHRcdFx0aWYgKG9sZFByb3BWYWwgPT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBwcm9wTmFtZSwgdHlwZW9mIG5ld1Byb3BWYWwgPT09IFwic3RyaW5nXCIgPyBuZXdQcm9wVmFsIDogbmV3UHJvcFZhbC50b1N0cmluZygpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29tcGFyZSBvbGQgYW5kIG5ldyB2YWx1ZSB1c2luZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGlmIGRlZmluZWQ7IGlmIG5vdCwganVzdCBjb21wYXJlXHJcblx0XHQvLyB0aGUgdHdvIHZhbHVlcyBhbmQgaWYgdGhleSBhcmUgZGlmZmVyZW50IHVzZSB0aGUgbmV3IG9uZSBhcyBhIHZhbHVlIHRvIHVwZGF0ZSB3aXRoLlxyXG5cdFx0Ly8gTm90ZSB0aGF0IHRoZSBuZWl0aGVyIG9sZCBub3IgbmV3IHZhbHVlcyBjYW4gYmUgdW5kZWZpbmVkIG9yIG51bGwuXHJcblx0XHRsZXQgdXBkYXRlVmFsOiBhbnk7XHJcblx0XHRpZiAoaW5mby5kaWZmICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IGluZm8uZGlmZiggcHJvcE5hbWUsIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdXBkYXRlVmFsdWUgaXMgdW5kZWZpbmVkIHRoZW4gbm8gY2hhbmdlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdFx0XHRpZiAodXBkYXRlVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob2xkUHJvcFZhbCAhPT0gbmV3UHJvcFZhbClcclxuXHRcdFx0dXBkYXRlVmFsID0gbmV3UHJvcFZhbDtcclxuXHJcblx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0Ly8gaWYgdXBkYXRlIG1ldGhvZCBpcyBkZWZpbmVkIHVzZSBpdDsgb3RoZXJ3aXNlLCByZW1vdmUgdGhlIG9sZCB2YWx1ZSBhbmQgc2V0IHRoZSBuZXcgb25lXHJcblx0XHRpZiAoaW5mby51cGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aW5mby51cGRhdGUoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHJlbW92ZSBtZXRob2QgaXMgZGVmaW5lZCwgdXNlIGl0LiBOb3RlIHRoYXQgaWYgcmVtb3ZlIG1ldGhvZCBpcyBub3QgZGVmaW5lZFxyXG5cdFx0XHQvLyB3ZSBkb24ndCB1c2UgZWxtLnJlbW92ZUF0dHJpYnV0ZSB0byBzYXZlIHRpbWUgKGFzIHRoZSBmb2xsb3dpbmcgaW5mby5zZXQgb3JcclxuXHRcdFx0Ly8gZWxtLnNldEF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIGl0IGFueXdheS5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5yZW1vdmUoIGVsbSwgYXR0ck5hbWUpO1xyXG5cclxuXHRcdFx0aWYgKGluZm8uc2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5zZXQoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdHlwZW9mIHVwZGF0ZVZhbCA9PT0gXCJzdHJpbmdcIiA/IHVwZGF0ZVZhbCA6IHVwZGF0ZVZhbC50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlcmUgd2FzIGNoYW5nZSBpbiBhdHRyaWJ1dGUgdmFsdWUuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxyXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggcHJvcE5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5yZW1vdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggYXR0ck5hbWUpO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8gUmVnaXN0ZXIgZXZlbnRzIHdpdGggc3BlY2lhbCBuYW1lc1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZEluc2VydFwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lclByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRJbnNlcnRDYXB0dXJlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJDYXB0dXJlUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lckNhcHR1cmVQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkUmVtb3ZlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZFJlbW92ZUNhcHR1cmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lckNhcHR1cmVQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyQ2FwdHVyZVByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1yZW1vdmVcIiB9KTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIHN0eWxlIHByb3BlcnR5LiBTdHlsZSBwcm9wZXJ0eSBjYW4gYmUgc3BlY2lmaWVkIGVpdGhlciBhcyBhIHN0cmluZyBvciBhcyB0aGVcclxuLy8gQ1NTU3R5bGVEZWNsYXJhdGlvbiBvYmplY3QuIElmIHRoZSBvbGQgYW5kIG5ldyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgYXJlIG9mIGRpZmZlcmVudCB0eXBlc1xyXG4vLyB0aGUgZGlmZiBmdW5jdGlvbiByZXR1cm5zIHRoZSBuZXcgc3R5bGUgdmFsdWUuIElmIGJvdGggYXJlIG9mIHRoZSBzdHJpbmcgdHlwZSwgdGhlbiB0aGUgbmV3XHJcbi8vIHN0cmluZyB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgYm90aCBhcmUgb2YgdGhlIENTU1N0eWxlRGVjbGFyYXRpb24gdHlwZSwgdGhlbiBhbiBvYmplY3QgaXNcclxuLy8gcmV0dXJuZWQgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHN0eWxlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIGNoYW5nZWQuIEZvciB1cGRhdGVkIGl0ZW1zLCB0aGVcclxuLy8ga2V5IHZhbHVlIGlzIGZyb20gdGhlIG5ldyBzdHlsZSB2YWx1ZTsgZm9yIHJlbW92ZWQgaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIFwic3R5bGVcIik7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGNvbnN0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKGVsbSBhcyBIVE1MRWxlbWVudCkuc3R5bGU7XHJcblx0XHRmb3IoIGxldCBrZXkgaW4gcHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qga2V5VmFsOiBhbnkgPSBwcm9wVmFsW2tleV07XHJcblx0XHRcdGlmIChlbG1TdHlsZVtrZXldICE9PSBrZXlWYWwpXHJcblx0XHRcdFx0ZWxtU3R5bGVba2V5XSA9IGtleVZhbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZTdHlsZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYW55XHJcbntcclxuXHRjb25zdCBvbGRQcm9wVHlwZTogc3RyaW5nID0gdHlwZW9mIG9sZFByb3BWYWw7XHJcblx0Y29uc3QgbmV3UHJvcFR5cGU6IHN0cmluZyA9IHR5cGVvZiBuZXdQcm9wVmFsO1xyXG5cdGlmIChvbGRQcm9wVHlwZSAhPT0gbmV3UHJvcFR5cGUpXHJcblx0XHRyZXR1cm4gbmV3UHJvcFZhbDtcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Y29uc3Qgb2xkU3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlID0gb2xkUHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZTtcclxuXHRcdGNvbnN0IG5ld1N0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IG5ld1Byb3BWYWwgYXMgbWltLlN0eWxlUHJvcFR5cGU7XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlVmFsOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHt9O1xyXG5cdFx0bGV0IGNoYW5nZXNFeGlzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBrZXlzIGluIHRoZSBvbGQgc3R5bGUgb2JqZWN0IGFuZCBmaW5kIHRob3NlIHRoYXQgYXJlIG5vdCBpbiB0aGUgbmV3IG9uZS4gVGhlc2VcclxuXHRcdC8vIHdpbGwgYmUgcmVtb3ZlZC5cclxuXHRcdGZvciggbGV0IGtleSBpbiBvbGRTdHlsZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qgb2xkVmFsOiBhbnkgPSBvbGRTdHlsZVtrZXldO1xyXG5cdFx0XHRjb25zdCBuZXdWYWw6IGFueSA9IG5ld1N0eWxlW2tleV07XHJcblx0XHRcdGlmIChuZXdWYWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAobmV3VmFsICE9PSBvbGRWYWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGFuZ2VzRXhpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3VmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG5ldyBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBvbGQgb25lLiBUaGVzZVxyXG5cdFx0Ly8gd2lsbCBiZSBhZGRlZC5cclxuXHRcdGZvciggbGV0IGtleSBpbiBuZXdTdHlsZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qgb2xkVmFsOiBhbnkgPSBvbGRTdHlsZVtrZXldO1xyXG5cdFx0XHRpZiAob2xkVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGFuZ2VzRXhpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3R5bGVba2V5XTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjaGFuZ2VzRXhpc3QgPyB1cGRhdGVWYWwgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCB1cGRhdGVWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdGNvbnN0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKGVsbSBhcyBIVE1MRWxlbWVudCkuc3R5bGU7XHJcblx0Zm9yKCBsZXQga2V5IGluIHVwZGF0ZVZhbCBhcyBPYmplY3QpXHJcblx0e1xyXG5cdFx0Y29uc3Qga2V5VmFsOiBhbnkgPSB1cGRhdGVWYWxba2V5XTtcclxuXHRcdGlmIChrZXlWYWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtU3R5bGVba2V5XSA9IG51bGw7XHJcblx0XHRcdC8vZWxtU3R5bGVba2V5XSA9IFwiaW5pdGlhbFwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRlbG1TdHlsZVtrZXldID0ga2V5VmFsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGZpcnN0IHN0eWxlIGlzIGEgY29tcGxldGUgc3Vic2V0IG9mIHRoZSBzZWNvbmQgb25lOyB0aGF0IGlzIGtleXNcclxuLy8vLyBpbiB0aGUgZmlyc3Qgc3R5bGUgYXJlIGFsbCBmb3VuZCBhbmQgaGF2ZSB0aGUgc2FtZSB2YWx1ZXMgaW4gdGhlIHNlY29uZCBzdHlsZS5cclxuLy9mdW5jdGlvbiBpc1N0eWxlMVN1YnNldE9mU3R5bGUyKCBzdHlsZTE6IE9iamVjdCwgc3R5bGUyOiBPYmplY3QpOiBib29sZWFuXHJcbi8ve1xyXG4vL1x0Zm9yKCBsZXQga2V5MSBpbiBzdHlsZTEpXHJcbi8vXHR7XHJcbi8vXHRcdGlmIChzdHlsZTFba2V5MV0gIT09IHN0eWxlMltrZXkxXSlcclxuLy9cdFx0XHRyZXR1cm4gZmFsc2U7XHJcbi8vXHR9XHJcblxyXG4vL1x0cmV0dXJuIHRydWU7XHJcbi8vfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgdmFsdWUgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyB2YWx1ZSBwcm9wZXJ0eSBhcyBhbiBhdHRyaWJ1dGUgd2Ugc2V0IHRoZSB2YWx1ZVxyXG4vLyBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlIG1ldGhvZFxyXG4vLyBieSBzZXR0aW5nIHRoZSBlbG0udmFsdWUgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS4gV2Ugd2FudCBhbHdheXMgdG8gc2V0IHRoaXMgdmFsdWUgdG8gdGhlIGVsZW1lbnQgYmVjYXVzZSB0aGVcclxuXHQvLyBlbGVtZW50J3MgdmFsdWUgbWF5IGhhdmUgY2huZ2VkIChieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5KS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBkZWZhdWx0VmFsdWUgcHJvcGVydHkuIFRoZSBkZWZhdWx0VmFsdWUgcHJvcGVydHkgd29ya3MgYXMgYSB2YWx1ZSBwcm9wZXJ0eSB3aGVuIHRoZVxyXG4vLyBlbGVtZW50IGlzIGZpcnN0IG1vdW50ZWQgYW5kIGlzIGlnbm9yZWQgdXBvbiB1cGRhdGVzIGFuZCByZW1vdmFscy4gVGhpcyBhbGxvd3MgdXNpbmdcclxuLy8gZGVmYXVsdFZhbHVlIHRvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgdmFsdWUgb25jZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGRpZmZEZWZhdWx0VmFsdWVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGJ5IHJldHVybmluZyB1bmRlZmluZWQgd2UgaW5kaWNhdGUgdGhhdCBubyBjaGFuZ2VzIHdlcmUgbWFkZSB0byB0aGUgcHJvcGVydHkgYW5kIHRodXMgdGhlXHJcblx0Ly8gdXBkYXRlIHdpbGwgbm90IGJlIGNhbGxlZFxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURlZmF1bHRWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIGRvIG5vdGhpbmdcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGNoZWNrZWQgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyBjaGVja2VkIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlXHJcbi8vIGNoZWNrZWQgZmllbGQgb24gdGhlIGVsZW1lbnQuIFRoZSBzZXQgYW5kIHVwZGF0ZSBtZXRob2RzIHdvcmsgdGhlIHNhbWUgd2F5LiBXZSBkZWZpbmUgdGhlIHJlbW92ZVxyXG4vLyBtZXRob2QgYnkgc2V0dGluZyB0aGUgZWxtLmNoZWNrZWQgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldENoZWNrZWRQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBwcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmQ2hlY2tlZFByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtFbG1BdHRyLCBBdHRyUHJvcEluZm8sIEV2ZW50UHJvcEluZm8sIEN1c3RvbUF0dHJQcm9wSW5mbywgUHJvcFR5cGV9IGZyb20gXCIuL0VsbUF0dHJcIlxyXG5pbXBvcnQge1N2Z0VsbXN9IGZyb20gXCIuL1N2Z0VsbXNcIjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXByZXNlbnRzIGEgRE9NIGVsZW1lbnQgY3JlYXRlZCB1c2luZyBKU1guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRWxtVk4gZXh0ZW5kcyBWTiBpbXBsZW1lbnRzIG1pbS5JRWxtVk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCB0YWdOYW1lOiBzdHJpbmcsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlciggbWltLlZOVHlwZS5FbG0pXHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3IgSFRNTCBlbGVtZW50XHJcblx0XHRsZXQgc3ZnSW5mbyA9IFN2Z0VsbXMuZ2V0U3ZnRWxtSW5mbyggdGFnTmFtZSk7XHJcblx0XHRpZiAoc3ZnSW5mbyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB0aGUgaXNTdmcgZmxhZyBtYXkgcmVtYWluIHVuZGVmaW5lZCBmb3IgdGhlIGR1YWwtcHVycG9zZSB0YWdzLiBJbiB0aGlzIGNhc2UgaXQgd2lsbFxyXG5cdFx0XHQvLyBiZSBkZXRlcm1pbmVkIHVwb24gbW91bnRpbmcuXHJcblx0XHRcdHRoaXMuaXNTdmcgPSBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIHN2Z0luZm8pID8gdW5kZWZpbmVkIDogdHJ1ZTtcclxuXHRcdFx0dGhpcy5lbG1OYW1lID0gU3ZnRWxtcy5nZXRFbG1OYW1lKCBzdmdJbmZvLCB0YWdOYW1lKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pc1N2ZyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmVsbU5hbWUgPSB0YWdOYW1lO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGNoaWxkcmVuXHJcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXkgYW5kIHJlZlxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbCByZW1haW5cclxuXHRcdFx0Ly8gdW5kZWZpbmVkLlxyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZWxlbWVudCdzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHR0aGlzLm5hbWUgPSB0aGlzLmVsbU5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmtleSAhPT0gbnVsbClcclxuXHRcdFx0dGhpcy5uYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElFbG1WTiBpbXBsZW1lbnRhdGlvblxyXG5cdHB1YmxpYyBnZXQgRWxtTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5lbG1OYW1lOyB9XHJcblx0cHVibGljIGdldCBFbG0oKTogRWxlbWVudCB7IHJldHVybiB0aGlzLmVsbTsgfVxyXG5cdHB1YmxpYyBnZXQgSXNTdmcoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzU3ZnOyB9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0cHVibGljIGdldFN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkVsbTsgfVxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRyZW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgd2UgZG9uJ3Qga25vdyB5ZXQgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBlbGVtZW50IG9yIG5vdCAod2hjaCBjYW4gaGFwcGVuIGZvclxyXG5cdFx0Ly8gZHVhbC1wdXJwb3NlIGVsZW1lbnRzKSwgZGV0ZXJtaW5lIGl0IG5vdyBieSB3YWxraW5nIHVwIHRoZSBjaGFpbiBvZiBwYXJlbnRzIGFuZFxyXG5cdFx0Ly8gY2hlY2tpbmcgd2hldGhlciB0aGVlIGlzIGFuIDxzdmc+IGVsZW1lbnQgdGhlcmVcclxuXHRcdGlmICh0aGlzLmlzU3ZnID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHBhcmVudCA9IHRoaXMucGFyZW50OyBwYXJlbnQgIT0gbnVsbDsgcGFyZW50ID0gcGFyZW50LnBhcmVudClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChwYXJlbnQudHlwZSA9PT0gbWltLlZOVHlwZS5FbG0gJiYgKHBhcmVudCBhcyBFbG1WTikuZWxtTmFtZSA9PT0gXCJzdmdcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmlzU3ZnID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIGZsYWcgaXMgc3RpbGwgbm90IGRldGVybWluZWQgYWZ0ZXIgdGhlIHBhcmVudCBsb29wLCBzZXQgaXQgdG8gZmFsc2UuXHJcblx0XHRcdGlmICh0aGlzLmlzU3ZnID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5pc1N2ZyA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFyc2VQcm9wcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSB2aXJ0dWFsIG5vZGUncyBjb250ZW50IGludG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSB0aGUgZWxlbWVudFxyXG5cdFx0dGhpcy5lbG0gPSB0aGlzLmlzU3ZnXHJcblx0XHRcdFx0XHQ/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggU3ZnRWxtcy5uYW1lc3BhY2UsIHRoaXMuZWxtTmFtZSlcclxuXHRcdFx0XHRcdDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggdGhpcy5lbG1OYW1lKTtcclxuXHJcblx0XHR0aGlzLmFkZEF0dHJzKCk7XHJcblx0XHR0aGlzLmFkZEV2ZW50cygpO1xyXG5cdFx0dGhpcy5hZGRDdXN0b21BdHRycygpO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZSAoaWYgc3BlY2lmaWVkKVxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmVsbSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBjb250ZW50IGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBlbGVtZW50IGJlZm9yZSBzZXR0aW5nIGl0IHRvIHVuZGVmaW5lZC4gSWYgdGhlIHNhbWUgUmVmIG9iamVjdCBpcyB1c2VkIGZvclxyXG5cdFx0Ly8gbW9yZSB0aGFuIG9uZSBlbGVtZW50IChhbmQvb3IgY29tcG9uZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmVsbSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyB0ZXJtaW5hdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHR0aGlzLnJlbW92ZUN1c3RvbUF0dHJzKCk7XHJcblxyXG5cdFx0Ly8gY2xlYW4gdXBcclxuXHRcdHRoaXMuZWxtID0gbnVsbDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoaXMgaXMgdGhlIHNhbWUgdHlwZSBvZiBlbGVtZW50OyB0aGF0IGlzLCBpdCBoYXMgdGhlIHNhbWVcclxuXHRcdC8vIG5hbWUuXHJcblx0XHRjb25zdCBuZXdFbG1Ob2RlOiBFbG1WTiA9IG5ld1ZOIGFzIEVsbVZOO1xyXG5cdFx0cmV0dXJuIHRoaXMuZWxtTmFtZSA9PT0gbmV3RWxtTm9kZS5lbG1OYW1lO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGlzIGlzIHRoZSBzYW1lIHR5cGUgb2YgZWxlbWVudDsgdGhhdCBpcywgaXQgaGFzIHRoZSBzYW1lXHJcblx0XHQvLyBuYW1lIGFuZCB0aGUgc2FtZSBpc1N2ZyBmbGFnXHJcblx0XHQvLyBjb25zdCBuZXdFbG1Ob2RlOiBFbG1WTiA9IG5ld1ZOIGFzIEVsbVZOO1xyXG5cdFx0Ly8gcmV0dXJuIHRoaXMuaXNTdmcgPT09IG5ld0VsbU5vZGUuaXNTdmcgJiYgdGhpcy5lbG1OYW1lID09PSBuZXdFbG1Ob2RlLmVsbU5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGNvbnN0IG5ld0VsbVZOOiBFbG1WTiA9IG5ld1ZOIGFzIEVsbVZOO1xyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcHJvcHMgYW5kIGNoaWxkcmVuXHJcblx0XHR0aGlzLnByb3BzID0gbmV3RWxtVk4ucHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gbmV3RWxtVk4uY2hpbGRyZW47XHJcblxyXG5cdFx0Ly8gY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGFuZCBjaGlsZHJlbiB3aWxsIGhhdmUgdG8gYmUgdXBkYXRlZCB2aWEgcmVuZGVyXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQ6IHRydWUsIHNob3VsZFJlbmRlcjogdHJ1ZSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRjb25zdCBuZXdFbG1WTjogRWxtVk4gPSBuZXdWTiBhcyBFbG1WTjtcclxuXHRcdG5ld0VsbVZOLnBhcnNlUHJvcHMoKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0VsbVZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIHNwZWNpZmljYXRpb25cclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdFbG1WTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RWxtVk4ua2V5O1xyXG5cclxuXHRcdHRoaXMudXBkYXRlQXR0cnMoIG5ld0VsbVZOLmF0dHJzKTtcclxuXHRcdHRoaXMudXBkYXRlRXZlbnRzKCBuZXdFbG1WTi5ldmVudHMpO1xyXG5cdFx0dGhpcy51cGRhdGVDdXN0b21BdHRycyggbmV3RWxtVk4uY3VzdG9tQXR0cnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0T3duRE4oKTogRE5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lbG07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgb3ZlciB0aGUgb3JpZ2luYWwgcHJvcGVydGllcyBhbmQgcHV0cyB0aGVtIGludG8gdGhlIGJ1Y2tldHMgb2YgYXR0cmlidXRlcywgZXZlbnRcclxuXHQvLyBsaXN0ZW5lcnMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgcGFyc2VQcm9wcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5wcm9wcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWw6IGFueSA9IHRoaXMucHJvcHNbcHJvcE5hbWVdO1xyXG5cclxuXHRcdFx0Ly8gZ2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBwcm9wZXJ0eSBhbmQgZGV0ZXJtaW5lIGl0cyB0eXBlIChyZWd1bGFyIGF0dHJpYnV0ZSwgZXZlbnRcclxuXHRcdFx0Ly8gb3IgY3VzdG9tIGF0dHJpYnV0ZSkuIE5vdGUgdGhhdCBnZXRQcm9wZXJ0eUluZm8gbWF5IHJldHVybiBudWxsIGZvciBtb3N0IHJlZ3VsYXJcclxuXHRcdFx0Ly8gYXR0cmlidXRlcyBhbmQgZXZlbnRzOyBpbiB0aGlzIGNhc2Ugd2Ugd2lsbCBjaGVjayB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0XHRcdGxldCBwcm9wSW5mbyA9IEVsbUF0dHIuZ2V0UHJvcGVydHlJbmZvKCBwcm9wTmFtZSk7XHJcblx0XHRcdGxldCBwcm9wVHlwZSA9IHByb3BJbmZvID8gcHJvcEluZm8udHlwZSA6IFByb3BUeXBlLlVua25vd247XHJcblx0XHRcdGlmICghcHJvcEluZm8pXHJcblx0XHRcdFx0cHJvcFR5cGUgPSB0aGlzLklzRXZlbnRWYWx1ZSggcHJvcFZhbCkgPyBQcm9wVHlwZS5FdmVudCA6IFByb3BUeXBlLkF0dHI7XHJcblxyXG5cdFx0XHRpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkF0dHIpXHJcblx0XHRcdFx0dGhpcy5hdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvLCB2YWw6IHByb3BWYWwgfTtcclxuXHRcdFx0ZWxzZSBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkV2ZW50KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGV2ZW50SW5mbyA9IHRoaXMuR2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggcHJvcEluZm8sIHByb3BWYWwpO1xyXG5cdFx0XHRcdGlmIChldmVudEluZm8pXHJcblx0XHRcdFx0XHR0aGlzLmV2ZW50c1twcm9wTmFtZV0gPSBldmVudEluZm87XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSAvLyBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkN1c3RvbUF0dHIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyByZW1lbWJlciBjdXN0b21lIGF0dHJpYnV0ZXMgdmFsdWUuIEhhbmRsZXIgd2lsbCBiZSBjcmVhdGVkIGxhdGVyLlxyXG5cdFx0XHRcdHRoaXMuY3VzdG9tQXR0cnNbcHJvcE5hbWVdID0geyBpbmZvOiBwcm9wSW5mbyBhcyBDdXN0b21BdHRyUHJvcEluZm8sIHZhbDogcHJvcFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI6IHVuZGVmaW5lZH07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0eSB2YWx1ZSBpcyBvZiB0aGUgdHlwZSB0aGF0IGlzIHVzZWQgZm9yIGV2ZW50IGhhbmRsZXJzLlxyXG5cdC8vIElmIHllcywgdGhlbiByZXR1cm5zIEV2ZW50UnVuVGltZURhdGEgb2JqZWN0OyBvdGhlcndpc2UsIHJldHVybnMgdW5kZWZpbmVkLlxyXG5cdHByaXZhdGUgSXNFdmVudFZhbHVlKCBwcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHR5cGVvZiBwcm9wVmFsID09PSBcImZ1bmN0aW9uXCIgfHxcclxuXHRcdFx0QXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDAgJiYgdHlwZW9mIHByb3BWYWxbMF0gPT09IFwiZnVuY3Rpb25cIjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0eSB2YWx1ZSBpcyBvZiB0aGUgdHlwZSB0aGF0IGlzIHVzZWQgZm9yIGV2ZW50IGhhbmRsZXJzLlxyXG5cdC8vIElmIHllcywgdGhlbiByZXR1cm5zIEV2ZW50UnVuVGltZURhdGEgb2JqZWN0OyBvdGhlcndpc2UsIHJldHVybnMgdW5kZWZpbmVkLlxyXG5cdHByaXZhdGUgR2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggaW5mbzogRXZlbnRQcm9wSW5mbywgcHJvcFZhbDogYW55KTogRXZlbnRSdW5UaW1lRGF0YVxyXG5cdHtcclxuXHRcdGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgb3JnRnVuYyA9IHByb3BWYWwgYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PjtcclxuXHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYywgdXNlQ2FwdHVyZTogZmFsc2UgfTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPT09IDIgJiZcclxuXHRcdFx0XHR0eXBlb2YgcHJvcFZhbFswXSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBwcm9wVmFsWzFdID09PSBcImJvb2xlYW5cIilcclxuXHRcdHtcclxuXHRcdFx0bGV0IG9yZ0Z1bmMgPSBwcm9wVmFsWzBdIGFzIG1pbS5FdmVudEZ1bmNUeXBlPGFueT47XHJcblx0XHRcdGxldCB3cmFwcGVyID0gRXZlbnRIYW5kbGVyV3JhcHBlci5iaW5kKCB0aGlzLCBvcmdGdW5jKTtcclxuXHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYywgdXNlQ2FwdHVyZTogcHJvcFZhbFsxXSBhcyBib29sZWFuIH07XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZm9yIGFsbCBvdGhlciB0eXBlIGNvbWJpbmF0aW9ucyBjb25zaWRlciBpdCB0byBiZSBhIHJlZ3VsYXIgYXR0cmlidXRlXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIERPTSBhdHRyaWJ1dGVzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgYWRkQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbTtcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuYXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBydGQgPSB0aGlzLmF0dHJzW25hbWVdO1xyXG5cdFx0XHRFbG1BdHRyLnNldEF0dHIoIGVsbSwgbmFtZSwgcnRkLmluZm8sIHJ0ZC52YWwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIERPTSBhdHRyaWJ1dGVzIG9mIHRoaXMgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUF0dHJzKCBuZXdBdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gXCJjYWNoZVwiIHNldmVyYWwgbWVtZWJlcnMgZm9yIGZhc3RlciBhY2Nlc3NcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbTtcclxuXHRcdGxldCBvbGRBdHRycyA9IHRoaXMuYXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGF0dHJpYnV0ZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ldyBvbmVzIGFuZFxyXG5cdFx0Ly8gdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgb2xkUlREID0gb2xkQXR0cnNbbmFtZV07XHJcblx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRyc1tuYW1lXTtcclxuXHRcdFx0aWYgKG5ld1JURCA9PT0gdW5kZWZpbmVkIHx8IG5ld1JURC52YWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHQvLyByZW1vdmUgdGhlIGF0dHJpYnV0ZSBmcm9tIHRoZSBlbGVtZW50XHJcblx0XHRcdFx0RWxtQXR0ci5yZW1vdmVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaGFzIGEgZGlmZmVyZW50IHZhbHVlLCByZW1tZWJlciB0aGlzXHJcblx0XHRcdFx0Ly8gdmFsdWUgYW5kIHNldCBpdCB0byB0aGUgYXR0cmlidXRlIGluIHRoZSBlbGVtZW50XHJcblx0XHRcdFx0RWxtQXR0ci51cGRhdGVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvLCBvbGRSVEQudmFsLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgYXR0cmlidXRlczsgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gbmV3QXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChuYW1lIGluIG9sZEF0dHJzKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IG5ld1JURCA9IG5ld0F0dHJzW25hbWVdO1xyXG5cdFx0XHRFbG1BdHRyLnNldEF0dHIoIGVsbSwgbmFtZSwgbmV3UlRELmluZm8sIG5ld1JURC52YWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXR0cnMgPSBuZXdBdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBpbmZvcm1hdGlvbiBhYm91dCBldmVudHMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRFdmVudHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwcml2YXRlIGFkZEV2ZW50KCBuYW1lOiBzdHJpbmcsIGluZm86IEV2ZW50UnVuVGltZURhdGEpOiB2b2lkXHJcblx0e1xyXG5cdFx0aW5mby53cmFwcGVyID0gRXZlbnRIYW5kbGVyV3JhcHBlci5iaW5kKCB0aGlzLCBpbmZvLm9yZ0Z1bmMpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgaW5mby53cmFwcGVyLCBpbmZvLnVzZUNhcHR1cmUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuZXZlbnRzKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCB0aGlzLmV2ZW50c1tuYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVFdmVudCggbmFtZTogc3RyaW5nLCBpbmZvOiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIGluZm8ud3JhcHBlciwgaW5mby51c2VDYXB0dXJlKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudHMoIG5ld0luZm9zOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEluZm9zID0gdGhpcy5ldmVudHM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVycywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3XHJcblx0XHQvLyBvbmVzIGFuZCB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gb2xkSW5mb3MpXHJcblx0XHR7XHJcblx0XHRcdGxldCBvbGRJbmZvID0gb2xkSW5mb3NbbmFtZV07XHJcblx0XHRcdGxldCBuZXdJbmZvID0gbmV3SW5mb3NbbmFtZV07XHJcblx0XHRcdGlmICghbmV3SW5mbylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCBvbGRJbmZvKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlRXZlbnQoIG5hbWUsIG9sZEluZm8sIG5ld0luZm8pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgZXZlbnQgbGlzdGVuZXJzIGFuZCBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdJbmZvcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5hbWUgaW4gb2xkSW5mb3MpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRsZXQgbmV3SW5mbyA9IG5ld0luZm9zW25hbWVdO1xyXG5cdFx0XHR0aGlzLmFkZEV2ZW50KCBuYW1lLCBuZXdJbmZvKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmV2ZW50cyA9IG5ld0luZm9zO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIGV2ZW50IGxpc3RlbmVyIGFyZSBkaWZmZXJlbnQgYW5kIHNldHNcclxuXHQvLyB0aGUgdXBkYXRlZCB2YWx1ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kIGZhbHNlIGlmIG5vIGNoYW5nZSBoYXNcclxuXHQvLyBiZWVuIGRldGVjdGVkLlxyXG5cdHByaXZhdGUgdXBkYXRlRXZlbnQoIG5hbWU6IHN0cmluZywgb2xkSW5mbzogRXZlbnRSdW5UaW1lRGF0YSwgbmV3SW5mbzogRXZlbnRSdW5UaW1lRGF0YSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAob2xkSW5mby5vcmdGdW5jID09PSBuZXdJbmZvLm9yZ0Z1bmMgJiYgb2xkSW5mby51c2VDYXB0dXJlID09PSBuZXdJbmZvLnVzZUNhcHR1cmUpXHJcblx0XHR7XHJcblx0XHRcdG5ld0luZm8ud3JhcHBlciA9IG9sZEluZm8ud3JhcHBlcjtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIG9sZEluZm8ud3JhcHBlciwgb2xkSW5mby51c2VDYXB0dXJlKTtcclxuXHJcblx0XHRuZXdJbmZvLndyYXBwZXIgPSBFdmVudEhhbmRsZXJXcmFwcGVyLmJpbmQoIHRoaXMsIG5ld0luZm8ub3JnRnVuYyk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBuZXdJbmZvLndyYXBwZXIsIG5ld0luZm8udXNlQ2FwdHVyZSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCB0aGVyZSB3YXMgY2hhbmdlIGluIGF0dHJpYnV0ZSB2YWx1ZS5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgYWRkQ3VzdG9tQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRhdGEgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0bGV0IGhhbmRsZXIgPSBkYXRhLmluZm8uZmFjdG9yeS5jcmVhdGVIYW5kbGVyKCBuYW1lKTtcclxuXHRcdFx0aWYgKCFoYW5kbGVyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGluaXRpYWxpemUgdGhlIGhhbmRsZXIgYW5kIHJlbWVtYmVyIGl0IGluIG91ciBvYmplY3RcclxuXHRcdFx0aGFuZGxlci5pbml0aWFsaXplKCB0aGlzLCBuYW1lLCBkYXRhLnZhbCk7XHJcblx0XHRcdGRhdGEuaGFuZGxlciA9IGhhbmRsZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERlc3Ryb3lzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgZWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUN1c3RvbUF0dHJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBpbmZvID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0aW5mby5oYW5kbGVyLnRlcm1pbmF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdDdXN0b21Qcm9wczogeyBbbmFtZTogc3RyaW5nXTogQ3lzdG9tQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEN1c3RvbVByb3BzID0gdGhpcy5jdXN0b21BdHRycztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgY3VzdG9tIHByb3BlcnRpZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEN1c3RvbVByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zdCBvbGRJbmZvID0gb2xkQ3VzdG9tUHJvcHNbbmFtZV07XHJcblx0XHRcdGNvbnN0IG5ld0luZm8gPSBuZXdDdXN0b21Qcm9wc1tuYW1lXTtcclxuXHRcdFx0aWYgKG5ld0luZm8gPT09IHVuZGVmaW5lZCB8fCBuZXdJbmZvID09PSBudWxsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUsIHJlbW92ZSB0aGUgb2xkIHByb3BlcnR5IGFuZFxyXG5cdFx0XHRcdC8vIHRlcm1pbmF0ZSBpdHMgaGFuZGxlclxyXG5cdFx0XHRcdG9sZEluZm8uaGFuZGxlci50ZXJtaW5hdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB1cGRhdGUgdGhlIGN1c3RvbSBwcm9wZXJ0eSBhbmQgcmVtZW1iZXIgdGhlIG5ldyB2YWx1ZVxyXG5cdFx0XHRcdG9sZEluZm8uaGFuZGxlci51cGRhdGUoIG9sZEluZm8udmFsLCBuZXdJbmZvLnZhbCk7XHJcblx0XHRcdFx0bmV3SW5mby5oYW5kbGVyID0gb2xkSW5mby5oYW5kbGVyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBjdXN0b20gcHJvcGVydGllcyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gbmV3Q3VzdG9tUHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChuYW1lIGluIG9sZEN1c3RvbVByb3BzKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IG5ld0luZm8gPSBuZXdDdXN0b21Qcm9wc1tuYW1lXTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlci4gSWYgd2UgY2Fubm90IGNyZWF0ZSB0aGUgaGFuZGxlciwgcmVtb3ZlIHRoZSBwcm9wZXJ0eVxyXG5cdFx0XHQvLyBmcm9tIG91ciBvYmplY3QuXHJcblx0XHRcdGxldCBoYW5kbGVyID0gbmV3SW5mby5pbmZvLmZhY3RvcnkuY3JlYXRlSGFuZGxlciggbmFtZSk7XHJcblx0XHRcdGlmICghaGFuZGxlcilcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdC8vIGluaXRpYWxpemUgdGhlIGhhbmRsZXIgYW5kIHJlbWVtYmVyIGl0IGluIG91ciBvYmplY3RcclxuXHRcdFx0aGFuZGxlci5pbml0aWFsaXplKCB0aGlzLCBuYW1lLCBuZXdJbmZvLnZhbCk7XHJcblx0XHRcdG5ld0luZm8uaGFuZGxlciA9IGhhbmRsZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXN0b21BdHRycyA9IG5ld0N1c3RvbVByb3BzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUYWcgbmFtZSBvZiBhbiBFbGVtZW50LlxyXG5cdHByaXZhdGUgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBBcnJheSBvZiBjaGlsZHJlbiBvYmplY3RzLlxyXG5cdHByaXZhdGUgY2hpbGRyZW46IGFueVtdO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LiBUaGUgaW5zdGFuY2UgaXMgY3JlYXRlZCB3aGVuIHRoZSBub2RlIGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3RcclxuXHQvLyB0aW1lLlxyXG5cdHByaXZhdGUgZWxtOiBFbGVtZW50ID0gbnVsbDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEVsZW1lbnQgaXMgU1ZHIChhcyBvcHBvc2VkIHRvIEhUTE0pLiBUaGVyZSBhcmUgc29tZSBTVkdcclxuXHQvLyBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHNhbWUgbmFtZSBhcyByZWd1bGFyIGVsZW1lbnRzIChlLmcuIDxhPikuIFRoZXJlZm9yZSwgaW4gb3JkZXIgdG9cclxuXHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBvbmUgd2UgbmVlZCB0byBnbyB1cCB0aGUgZWxlbWVudCBjaGFpbiBhbmQgc2VlIHdoZXRoZXJcclxuXHQvLyB0aGVyZSBpcyBhbiA8c3ZnPiBlbGVtZW50IGFzIGFuIGFuY2VzdG9yLiBTaW5jZSB3ZSBvbmx5IGhhdmUgYWNjZXNzIHRvIHRoZSBwYXJlbnQgbm9kZVxyXG5cdC8vIHVwb24gbW91bnRpbmcsIGZvciBzdWNoIGVsZW1lbnRzIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGZsYWcncyB2YWx1ZSBpbiB0aGUgY29uc3R1Y3Rvci5cclxuXHQvLyBJbiB0aGlzIGNhc2Ugd2Ugd2lsbCBoYXZlIHRoaXMgZmxhZyB1bmRlZmluZWQgYW5kIHdpbGwgZGV0ZXJtaW5lIGl0IHRvIGJlIHRydWUgb3IgZmFsc2VcclxuXHQvLyB3aGVuIHRoZSBtb3VudCBtZXRob2QgaXMgY2FsbGVkLlxyXG5cdHByaXZhdGUgaXNTdmc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc3BlY2lmaWVkIGFzIGEgXCJyZWZcIiBwcm9wZXJ0eS4gUmVmZXJlbmNlIG9iamVjdCBpc1xyXG5cdC8vIHNldCB3aGVuIGFuYWx5emluZyBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgZHVyaW5nIHVwZGF0ZS4gUmVmZXJlbmNlIHZhbHVlIGlzXHJcblx0Ly8gc2V0IGR1cmluZyBtb3VudCBhbmQgdW5zZXQgZHVyaW5nIHVubW91bnQuIFRoZSByZWYgcHJvcGVydHkgY2FuIGJlIGNoYW5nZWQgb24gdXBkYXRlLlxyXG5cdHByaXZhdGUgcmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PjtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gYXR0cmlidXRlIG5hbWVzIGFuZCB0aGVpciBjdXJyZW50IHZhbHVlcy5cclxuXHRwcml2YXRlIGF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBBdHRyUnVuVGltZURhdGEgfSA9IHt9O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBuYW1lcyBvZiBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBwYXJhbWV0ZXJzLlxyXG5cdHByaXZhdGUgZXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH0gPSB7fTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gbmFtZXMgb2YgY3VzdG9tIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIGhhbmRsZXIgb2JqZWN0cyBhbmQgdmFsdWVzLlxyXG5cdHByaXZhdGUgY3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9ID0ge307XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVGhlIEV2ZW50SGFuZGxlcldyYXBwZXIgZnVuY3Rpb24gaXMgdXNlZCB0byB3cmFwIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gYXNzaWduZWQgdG8gYW4gZXZlbnRcclxuLy8gb2YgdGhlIEVsZW1lbnQuIFRoaXMgZnVuY3Rpb24gY2F0Y2hlcyBleGNlcHRpb25zIGZyb20gdGhlIG9yaWdpbmFsIGV2ZW50IGhhbmRsZXIgYW5kIHVzZXMgdGhlXHJcbi8vIFwiU3RkRXJyb3JIYW5kbGluZ1wiIHNlcnZpY2UgdG8gcmVwb3J0IHRoZSBleGNlcHRpb24gdG8gdGhlIG5lYXJlc3Qgbm9kZSB0aGF0IGNhbiBoYW5kbGUgaXQuXHJcbmZ1bmN0aW9uIEV2ZW50SGFuZGxlcldyYXBwZXIoKTogdm9pZFxyXG57XHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0bGV0IFtvcmdFdmVudEhhbmRsZXIsIC4uLnJlc3RdID0gYXJndW1lbnRzO1xyXG5cdFx0cmV0dXJuIG9yZ0V2ZW50SGFuZGxlciggLi4ucmVzdCk7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0bGV0IGVycm9yU2VydmljZSA9IHRoaXMuZmluZFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKSBhcyBtaW0uSUVycm9ySGFuZGxpbmdTZXJ2aWNlO1xyXG5cdFx0aWYgKGVycm9yU2VydmljZSlcclxuXHRcdFx0ZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIHRoaXMucGF0aCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCByZWd1bGFyIGF0dHJpYnV0ZVxyXG5pbnRlcmZhY2UgQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGF0dHJpYnV0ZSAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogQXR0clByb3BJbmZvIHwgbnVsbDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBldmVudCBzaG91bGQgYmUgdXNlZCBhcyBDYXB0dXJpbmcgKHRydWUpIG9yIEJ1YmJsaW5nIChmYWxzZSlcclxuXHR2YWw6IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGV2ZW50IGxpc3RlbmVyXHJcbmludGVyZmFjZSBFdmVudFJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGV2ZW50IC0gY2FuIGJlIG51bGxcclxuXHRpbmZvOiBFdmVudFByb3BJbmZvIHwgbnVsbDtcclxuXHJcblx0Ly8gT3JpZ2luYWwgZXZlbnQgY2FsbGJhY2sgcGFzc2VkIGFzIHRoZSB2YWx1ZSBvZiB0aGUgZXZlbnQgcHJvcGVydHkgaW4gSlNYXHJcblx0b3JnRnVuYzogbWltLkV2ZW50RnVuY1R5cGU8YW55PjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBldmVudCBzaG91bGQgYmUgdXNlZCBhcyBDYXB0dXJpbmcgKHRydWUpIG9yIEJ1YmJsaW5nIChmYWxzZSlcclxuXHR1c2VDYXB0dXJlOiBib29sZWFuO1xyXG5cclxuXHQvLyBXcmFwcGVyIGZ1bmN0aW9uIHRoYXQgd2UgY3JlYXRlIGFuZCBiaW5kIHRvIG91ciBub2RlIGFuZCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uIFdlIG5lZWRcclxuXHQvLyB0aGlzIHdyYXBwZXIgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9uIGluIHRoZSBjYWxsYmFjayBhbmQgcGFzcyB0aGVtIG9uIHRvIGFuIGVycm9yXHJcblx0Ly8gaGFuZGxpbmcgc2VydmljZS4gVGhlIHdyYXBwZXIgaXMgbWFya2VkIG9wdGlvbmFsIGJlY2F1c2UgaXQgaXMgY3JlYXRlZCBvbmx5IGlmIGEgbmV3XHJcblx0Ly8gZXZlbnQgbGlzdGVuZXIgaXMgYWRkZWQ7IHRoYXQgaXMsIGlmIGR1cmluZyB1cGRhdGUsIHRoZSBldmVudCBsaXN0ZW5lciBmdW5jdGlvbiBpcyB0aGVcclxuXHQvLyBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIGNyZWF0ZSBuZXcgd3JhcHBlciBiZWNhdXNlIHRoZSBvbGQgb25lIHdpbGwgYmUgdXNlZC5cclxuXHR3cmFwcGVyPzogICgpID0+IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGN1c3RvbSBwcm9wZXJ0eS5cclxuaW50ZXJmYWNlIEN5c3RvbUF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBjdXN0b20gYXR0cmlidXRlIC0gY2Fubm90IGJlIG51bGxcclxuXHRpbmZvOiBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cdC8vIEN1cnJlbnQgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcblx0dmFsOiBhbnk7XHJcblxyXG5cdC8vIEhhbmRsZXIgb2JqZWN0IHRoYXQga25vd3MgdG8gZGVhbCB3aXRoIHRoZSBwcm9wZXJ0eSB2YWx1ZXNcclxuXHRoYW5kbGVyOiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8YW55PjtcclxufTtcclxuXHJcblxyXG5cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRXZlbnRTbG90IGludGVyZmFjZSByZXByZXNlbnRzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMuIE11bHRpcGxlXHJcbi8vIGxpc3RlbmVycyBjYW4gYmUgYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+XHJcbntcclxuXHQvLyBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQvLyBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdGZpcmU6IFRGdW5jO1xyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0Ly8gZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0YWRkKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC5cclxuXHRyZW1vdmUoIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0byB0aGUgZXZlbnQuXHJcblx0Y2xlYXIoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIEV2ZW50U2xvdCBjbGFzcyBkZWZpbmVzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMgYXMgbWVtYmVycyBvZiBjbGFzc2VzIHdpdGhvdXQgdGhlXHJcbi8vIG5lZWQgZm9yIHRoZSBjbGFzc2VzIHRvIGRlcml2ZSBmcm9tIEV2ZW50VGFyZ2V0IGFuZCB1c2Ugc3RyaW5nIG5hbWVzIGZvciBldmVudHMuIE11bHRpcGxlXHJcbi8vIGxpc3RlbmVycyBjYW4gYmUgYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEV2ZW50U2xvdDxURnVuYyBleHRlbmRzIEZ1bmN0aW9uPiBpbXBsZW1lbnRzIElFdmVudFNsb3Q8VEZ1bmM+XHJcbntcclxuXHQvLyBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQvLyBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdHB1YmxpYyBmaXJlOiBURnVuYyA9IHRoaXMucmVhbEZpcmUgYXMgYW55IGFzIFRGdW5jO1xyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBzaG91bGQgbm90IGJlIGEgbGFtYmRhXHJcblx0Ly8gZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0cHVibGljIGFkZCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyA9PT0gbnVsbClcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBuZXcgU2V0PFRGdW5jPigpO1xyXG5cclxuXHRcdHRoaXMubGlzdGVuZXJzLmFkZCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC5cclxuXHRwdWJsaWMgcmVtb3ZlKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzICE9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxpc3RlbmVycy5kZWxldGUoIGxpc3RlbmVyKTtcclxuXHRcdFx0aWYgKHRoaXMubGlzdGVuZXJzLnNpemUgPT09IDApXHJcblx0XHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBsaXN0ZW5lciB0byB0aGUgZXZlbnQuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldCBvZiBsaXN0ZW5lciBmdW5jdGlvbnMuIFdoZW4gdGhlcmUgYXJlIG5vIGxpc3RlbmVycywgdGhpcyBmaWVsZCBpcyBzZXQgdG8gbnVsbCB0b1xyXG5cdC8vIHByZXNlcnZlIHNwYWNlLlxyXG5cdHByaXZhdGUgbGlzdGVuZXJzOiBTZXQ8VEZ1bmM+ID0gbnVsbDtcclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCByZWFsbHkgY2FsbHMgdGhlIGxpc3RlbmVycyBpbiBhIGxvb3AuIEl0IGRlY29uc3R1Y3RzIHRoZSBcImFyZ3VtZW50c1wiIHZhbHVlXHJcblx0Ly8gaW4gb3JkZXIgdG8gcGFzcyB0aGUgcHJvcGVyIHBhcmFtZXRlcnMgdG8gdGhlIGxpc3RlbmVycy5cclxuXHRwcml2YXRlIHJlYWxGaXJlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKVxyXG5cdFx0XHRcdGxpc3RlbmVyKCAuLi5hcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIEV2ZW50TXVsdGlTbG90IGNsYXNzIGFsbG93cyByZWdpc3RlcmluZyBsaXN0ZW5lcnMgZm9yIG11bHRpcGxlIGV2ZW50cy4gRXZlbnRzIGFyZSBpZGVudGlmaWVkXHJcbi8vIHVzaW5nIHRoZSBzcGVjaWZpZWQgdGVtcGxhdGUgdHlwZSwgd2hpY2ggaXMgdXN1YWxseSAoYnV0IG5vdCBuZWNlc3NhcmlseSkgYSBudW1iZXItIG9yXHJcbi8vIHN0cmluZy1iYXNlZCBlbnVtZXJhdGlvbiBvciB1bmlvbiB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEV2ZW50TXVsdGlTbG90PFQ+XHJcbntcclxuXHQvLyBBZGRzIGEgbmV3IGxpc3RlbmVyIHRvIHRoZSBnaXZlbiBldmVudFxyXG5cdHB1YmxpYyBhZGRMaXN0ZW5lciggZXZlbnQ6IFQsIGV2ZW50RnVuYzogRnVuY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2xvdHMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zbG90cyA9IG5ldyBNYXA8VCxFdmVudFNsb3Q8RnVuY3Rpb24+PigpO1xyXG5cclxuXHRcdGxldCBzbG90ID0gdGhpcy5zbG90cy5nZXQoIGV2ZW50KTtcclxuXHRcdGlmIChzbG90ID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHNsb3QgPSBuZXcgRXZlbnRTbG90PEZ1bmN0aW9uPigpO1xyXG5cdFx0XHR0aGlzLnNsb3RzLnNldCggZXZlbnQsIHNsb3QpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNsb3QuYWRkKCBldmVudEZ1bmMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiBsaXN0ZW5lciBmcm9tIHRoZSBnaXZlbiBldmVudFxyXG5cdHB1YmxpYyByZW1vdmVMaXN0ZW5lciggZXZlbnQ6IFQsIGV2ZW50RnVuYzogRnVuY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2xvdHMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNsb3QgPSB0aGlzLnNsb3RzLmdldCggZXZlbnQpO1xyXG5cdFx0XHRpZiAoc2xvdCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHNsb3QucmVtb3ZlKCBldmVudEZ1bmMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzbG90czogTWFwPFQsRXZlbnRTbG90PEZ1bmN0aW9uPj47XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW50ZXJmYWNlIGFuZCBjbGFzcyBmb3Igc2ltcGxlIGV2ZW50cyBhY2NlcHRpbmcgbm8gcGFyYW1ldGVycy5cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlRXZlbnRTbG90IGV4dGVuZHMgSUV2ZW50U2xvdDwoKT0+dm9pZD4ge31cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50U2xvdCBleHRlbmRzIEV2ZW50U2xvdDwoKT0+dm9pZD4ge31cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSByZW5kZXJpbmcgZnVuY3Rpb24gYS5rLmEuIHN0YXRlbGVzcyBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1ZOIGV4dGVuZHMgVk5cclxue1xyXG5cdC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBub2RlIGNvcnJlc3BvbmRzIHRvIGEgZnJhZ21lbnQgcGxhY2Vob2xkZXIuICovXHJcblx0cHVibGljIHN0YXRpYyBpc1ZOYUZyYWdtZW50KCB2bjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuICh2biBhcyBGdW5jVk4pLmZ1bmMgPT09IG1pbS5GcmFnbWVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIGZ1bmM6IG1pbS5GdW5jQ29tcFR5cGUsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlciggbWltLlZOVHlwZS5GdW5jQ29tcClcclxuXHJcblx0XHR0aGlzLmZ1bmMgPSBmdW5jO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5XHJcblx0XHR0aGlzLnByb3BzID0ge307XHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHByb3BWYWw6IGFueSA9IHByb3BzW3Byb3BOYW1lXTtcclxuXHRcdFx0XHRpZiAocHJvcFZhbCA9PT0gdW5kZWZpbmVkIHx8IHByb3BWYWwgPT09IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkIGFuZCBudWxsXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIga2V5IHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLmtleSA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblxyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBmdW5jdGlvbidzIG5hbWUgcGx1cyBrZXkgaWYgc3BlY2lmaWVkXHJcblx0XHR0aGlzLm5hbWUgPSB0aGlzLmZ1bmMubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPT0gdW5kZWZpbmVkICYmIHRoaXMua2V5ICE9PSBudWxsKVxyXG5cdFx0XHR0aGlzLm5hbWUgKz0gXCIgQFwiICsgdGhpcy5rZXk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRwdWJsaWMgZ2V0U3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jKCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0XHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdFx0Ly8gRE9NIHRyZWUuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0XHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdH1cclxuLy8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3RcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IChuZXdWTiBhcyBGdW5jVk4pLmZ1bmM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jVk4gPSBuZXdWTiBhcyBGdW5jVk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNWTi5rZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBwcm9wZXJ0aWVzIGZyb20gdGhlIG5ldyBub2RlXHJcblx0XHR0aGlzLnByb3BzID0gbmV3RnVuY1ZOLnByb3BzO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiB7IHNob3VsZENvbW1pdDogZmFsc2UsIHNob3VsZFJlbmRlcjogdHJ1ZSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0T3duRE4oKTogRE5cclxuXHR7XHJcblx0XHQvLyBjb21wb25lbnRzIGRvbid0IGhhdmUgdGhlaXIgb3duIERPTSBub2RlXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gZm9yIGEgc3RhdGVsZXNzIGNvbXBvbmVudC4gVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgZHVyaW5nIHRoZSByZW5kZXJpbmcgcHJvY2Vzcy5cclxuXHRmdW5jOiBtaW0uRnVuY0NvbXBUeXBlO1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCwgZnVuY3Rpb24gb3IgZWxlbWVudC5cclxuXHRwcm9wczogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtDb21wQmFzZVZOfSBmcm9tIFwiLi9Db21wQmFzZVZOXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgSW5zdGFuY2VWTiBpcyBhIG5vZGUgdGhhdCBob2xkcyBhbiBpbnN0YW5jZSBvZiBhbiBJQ29tcG9uZW50LWltcGxlbWVudGluZyBvYmplY3QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VWTiBleHRlbmRzIENvbXBCYXNlVk48bWltLklDb21wb25lbnQ+IGltcGxlbWVudHMgbWltLklJbnN0YW5jZVZOXHJcbntcclxuXHRjb25zdHJ1Y3RvciggY29tcDogbWltLkNvbXBvbmVudClcclxuXHR7XHJcblx0XHRzdXBlciggbWltLlZOVHlwZS5JbnN0YW5jZUNvbXApXHJcblx0XHR0aGlzLmNvbXAgPSBjb21wO1xyXG5cclxuXHRcdC8vIHRoZSBjb21wb25lbnQgb2JqZWN0IGlzIGEga2V5IGZvciB0aGUgbm9kZVxyXG5cdFx0dGhpcy5rZXkgPSBjb21wO1xyXG5cclxuXHRcdC8vIGRlZmF1bHQgbm9kZSBuYW1lIGlzIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBuYW1lXHJcblx0XHR0aGlzLm5hbWUgPSB0aGlzLmNvbXAuY29uc3RydWN0b3IubmFtZTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIElJbnN0YW5jZVZOIGltcGxlbWVudGF0aW9uXHJcblx0cHVibGljIGdldCBDb21wKCk6IG1pbS5JQ29tcG9uZW50IHsgcmV0dXJuIHRoaXMuY29tcDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53aWxsTW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53aWxsVW5tb3VudEluc3RhbmNlKCB0aGlzLmNvbXApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGUgY29tcG9uZW50cyBhcmUgZnJvbSB0aGUgc2FtZSBjbGFzc1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcCA9PT0gKG5ld1ZOIGFzIEluc3RhbmNlVk4pLmNvbXAgfHxcclxuXHRcdFx0XHR0aGlzLmNvbXAuY29uc3RydWN0b3IgPT09IChuZXdWTiBhcyBJbnN0YW5jZVZOKS5jb21wLmNvbnN0cnVjdG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlPyggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gaWYgaXQgaXMgdGhlIHNhbWUgY29tcG9uZW50IGluc3RhbmNlLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXHJcblx0XHRsZXQgbmV3Q29tcCA9IChuZXdWTiBhcyBJbnN0YW5jZVZOKS5jb21wO1xyXG5cdFx0bGV0IG5lZWRzVXBkYXRpbmcgPSB0aGlzLmNvbXAgIT09IG5ld0NvbXA7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGNvcG9uZW50IGluc3RhbmNlIGFyZSBkaWZmZXJlbnQsIHRoZW4gd2UgbmVlZCB0byBwcmVwYXJlIHRoZSBuZXcgaW5zdGFuY2UgZm9yXHJcblx0XHQvLyBtb3VudGluZy5cclxuXHRcdGlmIChuZWVkc1VwZGF0aW5nKVxyXG5cdFx0XHR0aGlzLndpbGxNb3VudEluc3RhbmNlKCBuZXdDb21wKTtcclxuXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQ6IG5lZWRzVXBkYXRpbmcsIHNob3VsZFJlbmRlcjogbmVlZHNVcGRhdGluZyB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlPyggbmV3Vk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHdlIGFyZSBoZXJlIG9ubHkgaWYgdGhlIGNvbXBvbmVudCBpbnN0YW5jZXMgYXJlIGRpZmZlcmVudC4gSW4gdGhpcyBjYXNlIHdlIHNob3VsZFxyXG5cdFx0Ly8gcmVwbGFjZSB0aGUgb2xkIGNvbXBvbmVudCB3aXRoIHRoZSBuZXcgb25lIGFuZCBhbHNvIHJlcGxhY2UgaXRzIGNoYXJhY3RlcmlzdGljcy5cclxuXHRcdC8vIEZpcnN0IGluZGljYXRlIHRoYXQgb3VyIG9sZCBjb21wb25lbnQgd2lsbCBiZSB1bm1vdW50ZWRcclxuXHRcdHRoaXMud2lsbFVubW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuXHJcblx0XHRsZXQgbmV3SW5zdGFuY2VWTiA9IG5ld1ZOIGFzIEluc3RhbmNlVk47XHJcblx0XHR0aGlzLmNvbXAgPSB0aGlzLmtleSA9IG5ld0luc3RhbmNlVk4uY29tcDtcclxuXHRcdHRoaXMubmFtZSA9IG5ld0luc3RhbmNlVk4ubmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBnaXZlbiBjb21wb25lbnQgdGhhdCBpciB3aWxsIGJlIG1vdW50ZWQuXHJcblx0cHJpdmF0ZSB3aWxsTW91bnRJbnN0YW5jZSggY29tcDogbWltLklDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Y29tcC5zZXRTaXRlKCB0aGlzKTtcclxuXHRcdGlmIChjb21wLmNvbXBvbmVudFdpbGxNb3VudClcclxuXHRcdFx0Y29tcC5jb21wb25lbnRXaWxsTW91bnQoKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm90aWZpZXMgdGhlIGdpdmVuIGNvbXBvbmVudCB0aGF0IGl0IHdpbGwgYmUgdW5tb3VudGVkLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudEluc3RhbmNlKCBjb21wOiBtaW0uSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoY29tcC5jb21wb25lbnRXaWxsVW5tb3VudClcclxuXHRcdFx0Y29tcC5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xyXG5cclxuXHRcdGNvbXAuc2V0U2l0ZSggbnVsbCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7SUV2ZW50U2xvdCwgRXZlbnRTbG90fSBmcm9tXCIuL0V2ZW50U2xvdFwiXHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi9taW1cIlxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxuXHR7XHJcbiAgICAgICAgTG9jYWxTdHlsZXM6IElMb2NhbFN0eWxlU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElMb2NhbFN0eWxlU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBpcyBwdWJsaXNoZWQgYnkgY29tcG9uZW50cyB0aGF0XHJcbi8vIGRlZmluZSB0aGVpciBsb2NhbCBDU1Mgc3R5bGVzOyB0aGF0IGlzLCBjb21wb25lbnRzIGRlcml2aW5nIGZyb20gdGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlc1xyXG4vLyBjbGFzcy4gVGhlIGludGVyZmFjZSBhbGxvd3MgcmV0cmlldmluZyBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIGRlY29yYXRlZCB3aXRoIHRoZSB1bmlxdWVcclxuLy8gSUQsIHdoaWNoIGF2b2lkcyBkdXBsaWNhdGlvbiBvZiBuYW1lcyBiZXR3ZWVuIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgb3IgZGlmZmVyZW50IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxTdHlsZVNlcnZpY2Vcclxue1xyXG5cdC8vIFJldHVybnMgdGhlIHVuaXF1ZSBJRCB1c2VkIHRvIGRlY29yYXRlIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgdG8gbWFrZSB0aGVtIHVuaXF1ZS5cclxuXHRyZWFkb25seSB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRkZWNvcmF0ZU5hbWUoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMgdGhhdCBkZWZpbmUgbG9jYWwgQ1NTIHN0eWxlcy5cclxuLy8gV2hlbiB0aGlzIGNvbXBvbmVudCBpcyBtb3VudGVkIGl0IGNyZWF0ZXMgYSBuZXcgPHN0eWxlPiBlbGVtZW50ICh3aXRoaW4gdGhlIDxoZWFkPiBlbGVtZW50KS5cclxuLy8gQWxsIGNsYXNzIG5hbWVzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIHdpdGhpbiB0aGlzIHN0eWxlIHdpbGwgaGF2ZSBhIHVuaXF1ZSBJRCBhZGRlZCB0b1xyXG4vLyB0aGVtIGluIG9yZGVyIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIG5hbWVzIGFtb25nIG90aGVyIGNvbXBvbmVudHMgKG9mIHRoZSBzYW1lIG9yIG9mIGRpZmZlcmVudFxyXG4vLyB0eXBlLiBUaGlzIGNsYXNzIGFsc28gcHVibGlzaGVzIGEgc2VydmljZSBpbXBsZW1lbnRpbmcgdGhlIElMb2NhbFN0eWxlU2VydmljZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG5cdFx0XHRcdGV4dGVuZHMgbWltLkNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPlxyXG5cdFx0XHRcdGltcGxlbWVudHMgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IFRQcm9wcyA9IG51bGwpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHJcblx0XHR0aGlzLm1fdW5pcXVlSUQgPSAoTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApKS50b1N0cmluZygpO1xyXG5cdFx0dGhpcy5ydWxlcyA9IG5ldyBNYXA8c3RyaW5nLFJ1bGVJbmZvPigpO1xyXG5cdFx0dGhpcy5ydWxlTmFtZXMgPSBbXTtcclxuXHJcblx0XHQvLyBjcmVhdGUgPHN0eWxlPiBlbGVtZW50IGluIHRoZSA8aGVhZD5cclxuXHRcdHRoaXMuc3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0dGhpcy5zdHlsZUVsbS5pZCA9IHRoaXMubV91bmlxdWVJRDtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuc3R5bGVFbG0pO1xyXG5cclxuXHRcdC8vLy8gV2ViS2l0IGhhY2sgOihcclxuXHRcdC8vdGhpcy5zdHlsZUVsbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIElMb2NhbFN0eWxlU2VydmljZSBpbXBsZW1lbnRhdGlvbi5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgdW5pcXVlIElEIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZW0gdW5pcXVlLlxyXG5cdHB1YmxpYyBnZXQgdW5pcXVlSUQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV91bmlxdWVJRDsgfVxyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgZGVjb3JhdGVOYW1lKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZSArIHRoaXMubV91bmlxdWVJRDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0Ly8gUHVibGljIGludGVyZmFjZS5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBjcmVhdGVTdHlsZVJ1bGUoIG5hbWU6IHN0cmluZywgc2VsZWN0b3I/OiBzdHJpbmcsIHByb3BzPzogbWltLlN0eWxlUHJvcFR5cGUpOiBJTUNzc1N0eWxlUnVsZVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBkdW1teSBzdHlsZSBydWxlXHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLmNyZWF0ZUR1bW15UnVsZSggbmFtZSwgXCJkdW1teSB7fVwiKTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1N0eWxlUnVsZSA9IGluZm8uY3Nzb21SdWxlIGFzIENTU1N0eWxlUnVsZTtcclxuXHJcblx0XHQvLyBjcmVhdGUgc3R5bGUgcnVsZSBvYmplY3RcclxuXHRcdGxldCBtY3NzU3R5bGVSdWxlOiBNQ3NzU3R5bGVSdWxlID0gbmV3IE1Dc3NTdHlsZVJ1bGUoIHRoaXMudW5pcXVlSUQsIGNzc29tUnVsZSk7XHJcblx0XHRpZiAoc2VsZWN0b3IpXHJcblx0XHRcdG1jc3NTdHlsZVJ1bGUuc2V0U2VsZWN0b3IoIHNlbGVjdG9yKTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0bWNzc1N0eWxlUnVsZS5zZXRQcm9wZXJ0aWVzKCBwcm9wcyk7XHJcblxyXG5cdFx0aW5mby5tY3NzUnVsZSA9IG1jc3NTdHlsZVJ1bGU7XHJcblx0XHRyZXR1cm4gbWNzc1N0eWxlUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHJ1bGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgZ2V0UnVsZSggbmFtZTogc3RyaW5nKTogSU1Dc3NSdWxlXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5ydWxlcy5nZXQoIG5hbWUpO1xyXG5cdFx0cmV0dXJuIGluZm8gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGluZm8ubWNzc1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYSBydWxlIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIHJlbW92ZVJ1bGUoIG5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy5zaXRlLnB1Ymxpc2hTZXJ2aWNlKCBcIkxvY2FsU3R5bGVzXCIsIHRoaXMpO1xyXG5cdH1cdFxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy5zaXRlLnVucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIik7XHJcblxyXG5cdFx0dGhpcy5zdHlsZUVsbS5yZW1vdmUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHByaXZhdGUgY3JlYXRlRHVtbXlSdWxlKCBuYW1lOiBzdHJpbmcsIHJ1bGVUZXh0OiBzdHJpbmcpOiBSdWxlSW5mb1xyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHJ1bGUgd2l0aCB0aGlzIG5hbWVcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMucnVsZXMuZ2V0KCBuYW1lKTtcclxuXHRcdGlmIChpbmZvICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucmVtb3ZlUnVsZSggbmFtZSk7XHJcblxyXG5cdFx0Ly8gdGhlIG5ldyBydWxlIHdpbGwgYmVjb21lcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXkgb2YgcnVsZXNcclxuXHRcdGxldCBpbmRleCA9IHRoaXMucnVsZU5hbWVzLmxlbmd0aDtcclxuXHJcblx0XHQvLyBjcmVhdGUgZHVtbXkgc3R5bGUgcnVsZVxyXG5cdFx0bGV0IHNoZWV0OiBDU1NTdHlsZVNoZWV0ID0gdGhpcy5zdHlsZUVsbS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0O1xyXG5cdFx0c2hlZXQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIGluZGV4KTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1J1bGUgPSBzaGVldC5ydWxlc1tpbmRleF07XHJcblxyXG5cdFx0Ly8gYWRkIHRoZSBydWxlIHRvIG91ciBpbnRlcm5hbCBzdHJ1Y3R1cmVzXHJcblx0XHR0aGlzLnJ1bGVOYW1lcy5wdXNoKCBuYW1lKTtcclxuXHRcdGluZm8gPSB7IG1jc3NSdWxlOiBudWxsLCBjc3NvbVJ1bGUsIGluZGV4IH07XHJcblx0XHR0aGlzLnJ1bGVzLnNldCggbmFtZSwgaW5mbyk7XHJcblxyXG5cdFx0cmV0dXJuIGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuaXF1ZSBJRCB0aGF0IGlzIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIGJ5IHRoZSBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBtX3VuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIFN0eWxlIGVsZW1lbnQgRE9NIG9iamVjdC4gSXMgZGVmaW5lZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG5cdHByaXZhdGUgc3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblxyXG5cdC8vIE1hcCBvZiBydWxlcyBieSB0aGVpciBuYW1lcy5cclxuXHRwcml2YXRlIHJ1bGVzOiBNYXA8c3RyaW5nLFJ1bGVJbmZvPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgcnVsZSBuYW1lcy4gVGhpcyBpcyBuZWVkZWQgdG8gYWRqdXN0IGluZGV4ZXMgb2YgcnVsZXMgYWZ0ZXIgYSBydWxlIGlzIHJlbW92ZWQuXHJcblx0cHJpdmF0ZSBydWxlTmFtZXM6IHN0cmluZ1tdO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGVscGVyIHR5cGUgdGhhdCBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIENTUyBydWxlIGFkZGVkIHRvIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbnR5cGUgUnVsZUluZm8gPSB7IG1jc3NSdWxlOiBJTUNzc1J1bGUsIGNzc29tUnVsZTogQ1NTUnVsZSwgaW5kZXg6IG51bWJlciB9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElNQ3NzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBydWxlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTUNzc1J1bGVcclxue1xyXG5cdC8vIFVuaXF1ZSBJRCB1c2VkIGluIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lc1xyXG5cdHJlYWRvbmx5IHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIENTU09NIHJ1bGVcclxuXHRyZWFkb25seSBjc3NvbVJ1bGU6IENTU1J1bGU7XHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdGRlY29yYXRlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJlcGxhY2VzIHRoZSBtYXJrZXIgXCIoKilcIiBpbiB0aGUgZ2l2ZW4gbmFtZSB3aXRoIHRoZSB1bmlxdWUgSURcclxuXHRyZXBsYWNlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNQ3NzUnVsZSBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIG9iamVjdHMgcmVwcmVzZW50ZWQgZGlmZmVyZW50IHR5cGVzIG9mIENTUyBydWxlcyB0aGF0XHJcbi8vIGFyZSBjcmVhdGVkIGJ5IHRoZSBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXMgY29tcG9uZW50LiBUaGlzIG9iamVjdCBzaW1wbHkga2VlcHMgdGhlIHVuaXF1ZVxyXG4vLyBJRCB0aGF0IHNob3VsZCBiZSB1c2VkIGJ5IGRlcml2ZWQgY2xhc3NlcyB3aGVuIGNyZWF0aW5nIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBzbyB0aGF0IHRoZXlcclxuLy8gYXJlIGdsb2JhbGx5IHVuaXF1ZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NSdWxlQmFzZTxUIGV4dGVuZHMgQ1NTUnVsZT4gaW1wbGVtZW50cyBJTUNzc1J1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB1bmlxdWVJRDogc3RyaW5nLCBjc3NvbVJ1bGU6IFQpXHJcblx0e1xyXG5cdFx0dGhpcy51bmlxdWVJRCA9IHVuaXF1ZUlEO1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUgPSBjc3NvbVJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBkZWNvcmF0ZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUgKyB0aGlzLnVuaXF1ZUlEO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXBsYWNlcyB0aGUgbWFya2VyIFwiKCopXCIgaW4gdGhlIGdpdmVuIG5hbWUgd2l0aCB0aGUgdW5pcXVlIElEXHJcblx0cHVibGljIHJlcGxhY2UoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lLnJlcGxhY2UoIFwiKCopXCIsIHRoaXMudW5pcXVlSUQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbmlxdWUgSUQgdXNlZCBpbiBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXNcclxuXHRwdWJsaWMgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gQ1NTT00gcnVsZVxyXG5cdHB1YmxpYyBjc3NvbVJ1bGU6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJTUNzc1N0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFNlbGVjdG9yKCBzZWxlY3Rvcjogc3RyaW5nKTtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvLyBTZXRzIHNldmVyYWwgc3R5bGUgcHJvcGVydGllcy4gQm90aCBwcm9wZXJ0eSBuYW1lcyBhbmQgcHJvcGVydHkgdmFsdWVzIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0UHJvcGVydGllcyggcHJvcHM6IG1pbS5TdHlsZVByb3BUeXBlKTogdm9pZDtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gUHJvcGVydHkgbmFtZSBjYW4gdXNlIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlXHJcblx0Ly8gc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHJlbW92ZVByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1Dc3NTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHRoYXQgY29udGFpbnMgYSBzZWxlY3RvciBhbmQgYSBzZXQgb2ZcclxuLy8gc3R5bGUgcHJvcGVydHkgbmFtZS12YWx1ZSBwYWlycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NTdHlsZVJ1bGUgZXh0ZW5kcyBNQ3NzUnVsZUJhc2U8Q1NTU3R5bGVSdWxlPiBpbXBsZW1lbnRzIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdW5pcXVlSUQ6IHN0cmluZywgY3Nzb21SdWxlOiBDU1NTdHlsZVJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVuaXF1ZUlELCBjc3NvbVJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRTZWxlY3Rvciggc2VsZWN0b3I6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmNzc29tUnVsZS5zZWxlY3RvclRleHQgPSB0aGlzLnJlcGxhY2UoIHNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogc3RyaW5nLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlLnNldFByb3BlcnR5KCB0aGlzLnJlcGxhY2UoIHByb3BOYW1lKSwgdGhpcy5yZXBsYWNlKCBwcm9wVmFsKSxcclxuXHRcdFx0XHRcdFx0aW1wb3J0YW50PyBcImltcG9ydGFudFwiIDogdW5kZWZpbmVkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyBzZXZlcmFsIHN0eWxlIHByb3BlcnRpZXMuIEJvdGggcHJvcGVydHkgbmFtZXMgYW5kIHByb3BlcnR5IHZhbHVlcyBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0aWVzKCBwcm9wczogbWltLlN0eWxlUHJvcFR5cGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR0aGlzLmNzc29tUnVsZS5zdHlsZVt0aGlzLnJlcGxhY2UoIHByb3BOYW1lKV0gPSB0aGlzLnJlcGxhY2UoIHByb3BzW3Byb3BOYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIFByb3BlcnR5IG5hbWUgY2FuIHVzZSB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZVxyXG5cdC8vIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgcmVtb3ZlUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoIHRoaXMucmVwbGFjZSggcHJvcE5hbWUpKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7Um9vdFZOfSBmcm9tIFwiLi9Sb290Vk5cIlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSb290RXJyb3JVSSBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdHByaXZhdGUgcm9vdFZOOiBSb290Vk47XHJcblx0cHJpdmF0ZSBlcnI6IGFueTtcclxuXHRwcml2YXRlIHBhdGhTdHJpbmc6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoIHJvb3RWTjogUm9vdFZOLCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnJvb3RWTiA9IHJvb3RWTjtcclxuXHRcdHRoaXMuZXJyID0gZXJyO1xyXG5cdFx0dGhpcy5wYXRoU3RyaW5nID0gcGF0aCA/IHBhdGguam9pbiggXCIgXFx1MjE5MiBcIikgOiBcIlwiO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBpZD1cInJvb3RFcnJvclwiIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLCBhbGlnbkl0ZW1zOiBcInN0YXJ0XCJ9fT5cclxuXHRcdFx0PGRpdj57dGhpcy5lcnIuTWVzc2FnZX08L2Rpdj5cclxuXHRcdFx0PGRpdj57dGhpcy5wYXRoU3RyaW5nfTwvZGl2PlxyXG5cdFx0XHQ8aHIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19Lz5cclxuXHRcdFx0PGJ1dHRvbiBrZXk9XCJidG5SZXN0YXJ0XCIgY2xpY2s9e3RoaXMub25SZXN0YXJ0fT5SZXN0YXJ0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25SZXN0YXJ0ID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnJvb3RWTi5yZXN0YXJ0KCk7XHJcblx0fTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RXYWl0aW5nVUkgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiBcIkxvYWRpbmcgLi4uXCI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgSVJvb3RWTn0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge2NyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudH0gZnJvbSBcIi4vVk5DaGFpbkZ1bmNzXCJcclxuaW1wb3J0IHtWTkRpc3BBY3Rpb24sIFZORGlzcCwgVk5EaXNwR3JvdXB9IGZyb20gXCIuL1ZORGlzcFwiXHJcbmltcG9ydCB7Um9vdEVycm9yVUksIFJvb3RXYWl0aW5nVUl9IGZyb20gXCIuL1Jvb3RVSVwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLyBsZXQgZ19yZXF1ZXN0SWRsZUNhbGxiYWNrOiAoZnVuYzogKCk9PnZvaWQpID0+IG51bWJlciA9ICh3aW5kb3cgYXMgYW55KS5yZXF1ZXN0SWRsZUNhbGxiYWNrXHJcbi8vIFx0XHRcdFx0PyAod2luZG93IGFzIGFueSkucmVxdWVzdElkbGVDYWxsYmFja1xyXG4vLyBcdFx0XHRcdDogKGZ1bmM6ICgpPT52b2lkKSA9PiBzZXRUaW1lb3V0KCBmdW5jKTtcclxuXHJcbi8vIGxldCBnX2NhbmNlbElkbGVDYWxsYmFjazogKGhhbmRsZSkgPT4gdm9pZCA9ICh3aW5kb3cgYXMgYW55KS5jYW5jZWxJZGxlQ2FsbGJhY2tcclxuLy8gXHRcdFx0XHQ/ICh3aW5kb3cgYXMgYW55KS5jYW5jZWxDYWxsYmFja1xyXG4vLyBcdFx0XHRcdDogKGhhbmRsZSkgPT4gY2xlYXJUaW1lb3V0KCBoYW5kbGUpO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFJvb3RWTiBjbGFzcyBpcyB1c2VkIGFzIGEgdG9wLWxldmVsIHZpcnR1YWwgbm9kZSBmb3IgYWxsIHJlbmRlcmVkIHRyZWVzLiBSb290Vk4gc2VydmVzXHJcbi8vIGFzIGFuIGVycm9yIGJvdW5kYXJ5IG9mIGxhc3QgcmVzb3J0LiBXaGVuIGl0IGNhdGNoZXMgYW4gZXJyb3IgdGhhdCB3YXNuJ3QgY2F1Z2h0IGJ5IGFueVxyXG4vLyBkZXNjZW5kYW5kIG5vZGUsIGl0IGRpc3BsYXlzIGEgc2ltcGxlIFVJIHRoYXQgc2hvd3MgdGhlIGVycm9yIGFuZCBhbGxvd3MgdGhlIHVzZXIgdG8gcmVzdGFydC5cclxuLy8gUm9vdFZOIGFsc28gbWFuYWdlcyBzZXJ2aWNlIHB1Ymxpc2hlcnMgYW5kIHN1YnNjcmliZXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFJvb3RWTiBleHRlbmRzIFZOIGltcGxlbWVudHMgSVJvb3RWTiwgbWltLklFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cHJpdmF0ZSBjb25zdHJ1Y3RvciggYW5jaG9yRE46IEROKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBtaW0uVk5UeXBlLlJvb3QpXHJcblxyXG5cdFx0dGhpcy5hbmNob3JETiA9IGFuY2hvckROO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJSb290XCI7XHJcblx0XHR0aGlzLmluaXRpYWxpemUoIG51bGwpO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gbnVsbDtcclxuXHRcdHRoaXMud2lsbE1vdW50KCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRwdWJsaWMgZ2V0U3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIGNvbnRlbnQgdG8gYmUgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUgYW5kIHRyaWdnZXJzIHVwZGF0ZS5cclxuXHRwcml2YXRlIHNldENvbnRlbnQoIGNvbnRlbnQ6IGFueSwgc3luYzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuXHRcdGlmIChzeW5jKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnZuc1NjaGVkdWxlZEZvclVwZGF0ZS5hZGQoIHRoaXMpO1xyXG5cdFx0XHR0aGlzLm9uU2NoZWR1bGVkRnJhbWUoKTtcclxuXHJcblx0XHRcdC8vIGxldCBzZXQgPSBuZXcgU2V0PFZOPigpO1xyXG5cdFx0XHQvLyBzZXQuYWRkKCB0aGlzKTtcclxuXHRcdFx0Ly8gdGhpcy5wZXJmb3JtVXBkYXRlQ3ljbGUoIHNldCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMucmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IGEgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uIG9yIGEgY29tcG9uZW50IGluc3RhbmNlKVxyXG5cdC8vIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQgaW4gYSBzeW5jaHJvbm91cyB3YXkuXHJcblx0cHVibGljIHN0YXRpYyBtb3VudFJvb3RTeW5jKCBjb250ZW50OiBhbnksIGFuY2hvckROOiBETik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHRcdC8vIGNoZWNrIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIHJvb3Qgbm9kZSByZW1lbWJlcmVkIGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd25cclxuXHRcdC8vIHByb3BlcnR5XHJcblx0XHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cdFx0aWYgKCFyb290Vk4pXHJcblx0XHR7XHJcblx0XHRcdC8vIGNyZWF0ZSByb290IG5vZGUgYW5kIHJlbWVtYmVyIGl0IGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdFx0cm9vdFZOID0gbmV3IFJvb3RWTiggcmVhbEFuY2hvckROKTtcclxuXHRcdFx0KHJlYWxBbmNob3JETiBhcyBhbnkpW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXSA9IHJvb3RWTjtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0Ly8gc2V0IGNvbnRlbnQgdG8gdGhlIHJvb3Qgbm9kZSBhbmQgdHJpZ2dlciBzeW5jaHJvbm91cyB1cGRhdGVcclxuXHRcdHJvb3RWTi5zZXRDb250ZW50KCBjb250ZW50LCB0cnVlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5tb3VudHMgYSByb290IG5vZGUgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyBtb3VudFJvb3RTeW5jLlxyXG5cdHB1YmxpYyBzdGF0aWMgdW5tb3VudFJvb3RTeW5jKCBhbmNob3JETjogRE4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHRcdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gZ2V0IG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5LlxyXG5cdFx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRcdGlmICghcm9vdFZOKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gcmVtb3ZlIG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRkZWxldGUgcmVhbEFuY2hvckROW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHJcblx0XHRyb290Vk4uc2V0Q29udGVudCggbnVsbCwgdHJ1ZSk7XHJcblx0XHRyb290Vk4ud2lsbFVubW91bnQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuXHQvLyB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG5cdHB1YmxpYyBzdGF0aWMgbW91bnRSb290KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBETik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHRcdC8vIGNoZWNrIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIHJvb3Qgbm9kZSByZW1lbWJlcmVkIGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd25cclxuXHRcdC8vIHByb3BlcnR5XHJcblx0XHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cdFx0aWYgKCFyb290Vk4pXHJcblx0XHR7XHJcblx0XHRcdC8vIGNyZWF0ZSByb290IG5vZGUgYW5kIHJlbWVtYmVyIGl0IGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdFx0cm9vdFZOID0gbmV3IFJvb3RWTiggcmVhbEFuY2hvckROKTtcclxuXHRcdFx0KHJlYWxBbmNob3JETiBhcyBhbnkpW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXSA9IHJvb3RWTjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZXQgY29udGVudCB0byB0aGUgcm9vdCBub2RlLCB3aGljaCB3aWxsIHRyaWdnZXIgdXBkYXRlXHJcblx0XHRyb290Vk4uc2V0Q29udGVudCggY29udGVudCwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbm1vdW50cyBhIHJvb3Qgbm9kZSB0aGF0IHdhcyBjcmVhdGVkIHVzaW5nIHNfTW91bnRSb290LlxyXG5cdHB1YmxpYyBzdGF0aWMgdW5tb3VudFJvb3QoIGFuY2hvckROOiBETik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdFx0aWYgKCFyZWFsQW5jaG9yRE4pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0XHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cdFx0aWYgKCFyb290Vk4pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyByZW1vdmUgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdGRlbGV0ZSByZWFsQW5jaG9yRE5bUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cclxuXHRcdC8vIGRlc3RydWN0IHRoZSByb290IG5vZGUgKGFzeW5jaHJvbm91c2x5KVxyXG5cdFx0cm9vdFZOLnNldENvbnRlbnQoIG51bGwsIGZhbHNlKTtcclxuXHRcdHJvb3RWTi5zY2hlZHVsZUNhbGwoICgpID0+IHJvb3RWTi53aWxsVW5tb3VudCgpICk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBhIGNoYWluIG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZVxyXG5cdC8vIHN1Yi1ub2RlcywgbnVsbCBzaG91bGQgYmUgcmV0dXJuZWQuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodGhpcy5lcnJvclVJKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvclVJO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy53YWl0aW5nVUkpXHJcblx0XHRcdHJldHVybiB0aGlzLndhaXRpbmdVSTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMuY29udGVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudW5wdWJsaXNoU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIG9yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKGVyciBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9taXNlID0gZXJyIGFzIFByb21pc2U8YW55PjtcclxuXHRcdFx0dGhpcy50aHJvd25Qcm9taXNlcy5hZGQoIHByb21pc2UpO1xyXG5cdFx0XHRwcm9taXNlLnRoZW4oICgpID0+IHsgdGhpcy5vblByb21pc2VGdWxmaWxsZWQoIHByb21pc2UpOyB9KTtcclxuXHRcdFx0cHJvbWlzZS5jYXRjaCggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHRpZiAoIXRoaXMud2FpdGluZ1VJKVxyXG5cdFx0XHRcdHRoaXMud2FpdGluZ1VJID0gbmV3IFJvb3RXYWl0aW5nVUkoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5lcnJvclVJID0gbmV3IFJvb3RFcnJvclVJKCB0aGlzLCBlcnIsIHBhdGgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0T3duRE4oKTogRE4geyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBtaW1ibEFuY2hvclByb3BOYW1lID0gXCJfX21pbWJsQW5jaG9yUHJvcE5hbWVfX1wiO1xyXG5cclxuXHJcblxyXG5cdC8vIERpc3BsYXlzIHRoZSBjb250ZW50IG9yaWdpbmFsbHkgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwdWJsaWMgcmVzdGFydCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY2xlYXIgdGhlIGVycm9yIGFuZCByZXF1ZXN0IHRvIGJlIHVwZGF0ZWRcclxuXHRcdHRoaXMuZXJyb3JVSSA9IG51bGw7XHJcblx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgcHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5cdHB1YmxpYyBub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gdGhpcy5zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRpbmZvID0gbmV3IFNlcnZpY2VJbmZvKCk7XHJcblx0XHRcdHRoaXMuc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGluZm8ucHVibGlzaGluZ1ZOcy5hZGQoIHNvdXJjZVZOKTtcclxuXHJcblx0XHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdFx0Zm9yKCBsZXQgdm4gb2YgaW5mby5zdWJzY3JpYmVkVk5zKVxyXG5cdFx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyB1bnB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwdWJsaWMgbm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gdGhpcy5zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aW5mby5wdWJsaXNoaW5nVk5zLmRlbGV0ZSggc291cmNlVk4pO1xyXG5cclxuXHRcdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5zZXJ2aWNlSW5mb3MuZGVsZXRlKCBpZCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIG5vdGlmeSBhbGwgc3Vic2NyaWJlZCBub2RlcyB0aGF0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBzZXJ2aWNlIGhhcyBjaGFuZ2VkXHJcblx0XHRcdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdFx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHN1YnNjcmliZWQgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyBub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHRoaXMuc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0aW5mbyA9IG5ldyBTZXJ2aWNlSW5mbygpO1xyXG5cdFx0XHR0aGlzLnNlcnZpY2VJbmZvcy5zZXQoIGlkLCBpbmZvKTtcclxuXHRcdH1cclxuXHJcblx0XHRpbmZvLnN1YnNjcmliZWRWTnMuYWRkKCBzb3VyY2VWTik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyBub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gdGhpcy5zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aW5mby5zdWJzY3JpYmVkVk5zLmRlbGV0ZSggc291cmNlVk4pO1xyXG5cclxuXHRcdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5zZXJ2aWNlSW5mb3MuZGVsZXRlKCBpZCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNjaGVkdWxlcyBhbiB1cGRhdGUgZm9yIHRoZSBnaXZlbiBub2RlLlxyXG5cdHB1YmxpYyByZXF1ZXN0Tm9kZVVwZGF0ZSggdm46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdm4uYW5jaG9yRE4pXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBVcGRhdGUgcmVxdWVzdGVkIGZvciB2aXJ0dWFsIG5vZGUgJyR7dm4ucGF0aC5qb2luKFwiL1wiKX0nIHRoYXQgZG9lc24ndCBoYXZlIGFuY2hvciBET00gbm9kZWApXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBhZGQgdGhpcyBub2RlIHRvIHRoZSBtYXAgb2Ygbm9kZXMgZm9yIHdoaWNoIGVpdGhlciB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgb3JcclxuXHRcdC8vIGRlbGV0aW9uIGlzIHNjaGVkdWxlZC4gTm90ZSB0aGF0IGEgbm9kZSB3aWxsIG9ubHkgYmUgcHJlc2VudCBvbmNlIGluIHRoZSBtYXAgbm9cclxuXHRcdC8vIG1hdHRlciBob3cgbWFueSB0aW1lcyBpdCBjYWxscyByZXF1ZXN0VXBkYXRlKCkuXHJcblx0XHR0aGlzLnZuc1NjaGVkdWxlZEZvclVwZGF0ZS5hZGQoIHZuKTtcclxuXHJcblx0XHQvLyB0aGUgdXBkYXRlIGlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBjeWNsZSB1bmxlc3MgdGhlIHJlcXVlc3QgaXMgbWFkZSBkdXJpbmcgYVxyXG5cdFx0Ly8gXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gZXhlY3V0aW9uLlxyXG5cdFx0aWYgKHRoaXMuc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSlcclxuXHRcdFx0dGhpcy5yZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWxzIGEgcHJldmlvdXNseSByZXF1ZXN0ZWQgdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwdWJsaWMgY2FuY2VsTm9kZVVwZGF0ZSggdm46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHRyeSB0byByZW1vdmUgdGhpcyBub2RlIGZyb20gdGhlIHNldCBvZiBub2RlcyBmb3Igd2hpY2ggdXBkYXRlIG9yIHJlcGxhY2VtZW50IG9yXHJcblx0XHQvLyBkZWxldGlvbiBpcyBzY2hlZHVsZWQuXHJcblx0XHRpZiAoIXRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlLmRlbGV0ZSggdm4pKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gaWYgdGhpcyB3YXMgdGhlIGxhc3Qgbm9kZSBpbiB0aGUgc2V0LCBjYW5jZWwgdGhlIHJlcXVlc3QgdG8gc2NoZWR1bGUgdXBkYXRlIHByb2Nlc3NpbmcuXHJcblx0XHRpZiAodGhpcy5zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlKVxyXG5cdFx0XHR0aGlzLmNhbmNlbEZyYW1lUmVxdWVzdElmTmVlZGVkKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHNcclxuXHQvLyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHRwdWJsaWMgc2NoZWR1bGVGdW5jQ2FsbCggZnVuYzogbWltLlNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIWZ1bmMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAoYmVmb3JlVXBkYXRlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLmFkZCggZnVuYyk7XHJcblxyXG5cdFx0XHQvLyBhIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uIGlzIGFsd2F5cyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgZnJhbWUgZXZlbiBpZiB0aGVcclxuXHRcdFx0Ly8gY2FsbCBpcyBtYWRlIGZyb20gYW5vdGhlciBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbi5cclxuXHRcdFx0dGhpcy5yZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuYWRkKCBmdW5jKTtcclxuXHJcblx0XHRcdC8vIGFuIFwiYWZ0ZXIgdXBkYXRlXCIgZnVuY3Rpb24gaXMgc2NoZWR1bGVkIGluIHRoZSBuZXh0IGN5Y2xlIHVubGVzcyB0aGUgcmVxdWVzdCBpcyBtYWRlXHJcblx0XHRcdC8vIGVpdGhlciBmcm9tIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gZXhlY3V0aW9uIG9yIGR1cmluZyBhIG5vZGUgdXBkYXRlLlxyXG5cdFx0XHRpZiAodGhpcy5zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlICYmIHRoaXMuc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLlVwZGF0ZSlcclxuXHRcdFx0XHR0aGlzLnJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbmNlbHMgYSBjYWxsIHRoYXQgaGFzIGJlZW4gc2NoZWR1bGVkIHRvIGJlIG1hZGUgZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZFxyXG5cdC8vIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0cHVibGljIGNhbmNlbFNjaGVkdWxlZEZ1bmNDYWxsKCBmdW5jOiBtaW0uU2NoZWR1bGVkRnVuY1R5cGUsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghZnVuYylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmIChiZWZvcmVVcGRhdGUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuZGVsZXRlKCBmdW5jKTtcclxuXHRcdFx0dGhpcy5jYW5jZWxGcmFtZVJlcXVlc3RJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuZGVsZXRlKCBmdW5jKTtcclxuXHRcdFx0aWYgKHRoaXMuc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSAmJiB0aGlzLnNjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5VcGRhdGUpXHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgcmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGZ1bGZpbGxlZCBwcm9taXNlIGZyb20gb3VyIGludGVybmFsIGxpc3QgYW5kIGlmIHRoZSBsaXN0IGlzIGVtcHR5IGFza3MgdG9cclxuXHQvLyByZS1yZW5kZXJcclxuXHRwcml2YXRlIG9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZTogUHJvbWlzZTxhbnk+KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGhyb3duUHJvbWlzZXMuZGVsZXRlKCBwcm9taXNlKTtcclxuXHRcdGlmICh0aGlzLnRocm93blByb21pc2VzLnNpemUgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2FpdGluZ1VJID0gbnVsbDtcclxuXHRcdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgY2FsbCB0byByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc2hvdWxkIGJlIG1hZGUgYWZ0ZXIgYW4gdXBkYXRlIG9yIGFcclxuXHQvLyBjYWxsIGhhcyBiZWVuIHNjaGVkdWxlZC5cclxuXHRwcml2YXRlIHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zY2hlZHVsZWRGcmFtZUhhbmRsZSA9PT0gMClcclxuXHRcdFx0dGhpcy5zY2hlZHVsZWRGcmFtZUhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5vblNjaGVkdWxlZEZyYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjYWxsIHRvIGNhbmNlbEFuaW1hdGlvbkZyYW1lIHNob3VsZCBiZSBtYWRlIGFmdGVyIGEgc2NoZWR1bGVkIHVwZGF0ZVxyXG5cdC8vIG9yIGNhbGwgaGFzIGJlZW4gY2FuY2VsZWQuXHJcblx0cHJpdmF0ZSBjYW5jZWxGcmFtZVJlcXVlc3RJZk5lZWRlZCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlLnNpemUgPT09IDAgJiZcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zaXplID09PSAwICYmXHJcblx0XHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zaXplID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5zY2hlZHVsZWRGcmFtZUhhbmRsZSk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBhIG5ldyBVSSBjeWNsZSB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byB1cGRhdGUgVUkgY29tcG9uZW50c1xyXG5cdHByaXZhdGUgb25TY2hlZHVsZWRGcmFtZSA9ICgpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0Ly8gY2xlYXIgdGhlIHNjaGVkdWxlZCBmcmFtZSBoYW5kbGUgc28gdGhhdCBuZXcgdXBkYXRlIG9yIHJlcGxhY2VtZW50IHJlcXVlc3RzIHdpbGxcclxuXHRcdC8vIHNjaGVkdWxlIGEgbmV3IGZyYW1lLlxyXG5cdFx0dGhpcy5zY2hlZHVsZWRGcmFtZUhhbmRsZSA9IDA7XHJcblxyXG5cdFx0Ly8gaW5jcmVtZW50IHRpY2sgbnVtYmVyLlxyXG5cdFx0dGhpcy5jdXJyZW50VGljaysrO1xyXG5cclxuXHRcdC8vIGNhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBpbnZva2VkIGJlZm9yZSB1cGRhdGluZyBjb21wb25lbnRzLiBJZiB0aGlzIGZ1bmN0aW9uXHJcblx0XHQvLyBjYWxscyB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2Qgb3Igc2NoZWR1bGVzIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB1cGRhdGVzLFxyXG5cdFx0Ly8gdGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoaXMgY3ljbGUuIEhvd2V2ZXIsIGlmIGl0IHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWRcclxuXHRcdC8vIGFmdGVyIHVwZGF0ZXMsIGl0IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIG5leHQgY3ljbGUuXHJcblx0XHRpZiAodGhpcy5jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zaXplID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZTtcclxuXHRcdFx0Y29uc3QgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSB0aGlzLmNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlO1xyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gbmV3IFNldDxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblx0XHRcdHRoaXMuY2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUsIFwiYmVmb3JlXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnZuc1NjaGVkdWxlZEZvclVwZGF0ZS5zaXplID4gMClcclxuXHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzID0gbmV3IERldGFpbGVkU3RhdHMoIGBNaW1ibCB1cGRhdGUgY3ljbGUgJHt0aGlzLmN1cnJlbnRUaWNrfTogYCk7XHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdGFydCgpO1xyXG4vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgaW50ZXJuYWwgc2V0IG9mIG5vZGVzIGFuZCByZS1jcmVhdGUgaXQgc28gdGhhdCBpdCBpcyByZWFkeSBmb3IgbmV3XHJcblx0XHRcdC8vIHVwZGF0ZSByZXF1ZXN0cy4gQXJyYW5nZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgYW5kIHBlcmZvcm0gdXBkYXRlcy5cclxuXHRcdFx0dGhpcy5zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLlVwZGF0ZTtcclxuXHRcdFx0bGV0IHZuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IHRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlO1xyXG5cdFx0XHR0aGlzLnZuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IG5ldyBTZXQ8Vk4+KCk7XHJcblx0XHRcdHRoaXMucGVyZm9ybUNvbW1pdFBoYXNlKCB0aGlzLnBlcmZvcm1SZW5kZXJQaGFzZSggdGhpcy5hcnJhbmdlTm9kZXNCeURlcHRoKCB2bnNTY2hlZHVsZWRGb3JVcGRhdGUpKSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMuc3RvcCggdHJ1ZSk7XHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG51bGw7XHJcbi8vLy8vLy8vLy8vLy9cclxuXHRcdH1cclxuXHJcblx0XHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBhZnRlciB1cGRhdGluZyBjb21wb25lbnRzXHJcblx0XHRpZiAodGhpcy5jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNpemUgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuQWZ0ZXJVcGRhdGU7XHJcblx0XHRcdGNvbnN0IGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSB0aGlzLmNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGU7XHJcblx0XHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBTZXQ8bWltLlNjaGVkdWxlZEZ1bmNUeXBlPigpO1xyXG5cdFx0XHR0aGlzLmNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUsIFwiYWZ0ZXJcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLklkbGU7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBBcnJhbmdlcyB0aGUgc2NoZWR1bGVkIG5vZGVzIGJ5IHRoZWlyIG5lc3RpbmcgZGVwdGhzIHNvIHRoYXQgd2UgdXBkYXRlIFwidXBwZXJcIiBub2RlcyBiZWZvcmVcclxuXHQvLyB0aGUgbG93ZXIgb25lcy4gVGhpcyBjYW4gaGVscCBhdm9pZCB0d28gY29uZGl0aW9uczpcclxuXHQvL1x0LSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgdHdpY2U6IGZpcnN0IGJlY2F1c2UgaXQgY2FsbGVkIHVwZGF0ZU1lLCBhbmQgc2Vjb25kXHJcblx0Ly9cdFx0YmVjYXVzZSBpdHMgcGFyZW50IHdhcyBhbHNvIHVwZGF0ZWQuXHJcblx0Ly9cdC0gdW5uZWNlc3NhcnkgcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IGJlZm9yZSBpdCBpcyByZW1vdmVkIGJ5IHRoZSBwYXJlbnRcclxuXHQvLyBXZSBhbGxvY2F0ZSBjb250aWd1b3VzIGFycmF5IHdoZXJlIGluZGljZXMgY29ycmVzcG9uZCB0byBkZXB0aC4gRWFjaCBlbGVtZW50IGluIHRoaXNcclxuXHQvLyBhcnJheSB3aWxsIGVpdGhlciBiZSB1bmRlZmluZWQgb3IgY29udGFpbiBhbiBhcnJheSBvZiBub2RlcyBhdCB0aGlzIGRlcHRoLlxyXG5cdHByaXZhdGUgYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlOiBTZXQ8Vk4+KTogVk5bXVtdXHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0Ly8gY3JlYXRlIGEgc3BhcnNlIGFycmF5IG9mIGNlcnRhaW4gcmVhc29uYWJsZSBzaXplLiBJZiB3ZSBoYXZlIGRlcHRocyBncmVhdGVyIHRoYW4gdGhpcyxcclxuXHRcdC8vIHRoZSBhcnJheSB3aWxsIGdyb3cgYXV0b21hdGljYWxseSAoYWx0aG91Z2ggaXQgaXMgbGVzcyBwZXJmb3JtYW50IGl0IGlzIHN0aWxsIGFjY2VwdGFibGUpLlxyXG5cdFx0bGV0IHZuc0J5RGVwdGg6IFZOW11bXSA9IG5ldyBBcnJheTxWTltdPigxMDApO1xyXG5cdFx0dm5zU2NoZWR1bGVkRm9yVXBkYXRlLmZvckVhY2goICh2bjogVk4pID0+XHJcblx0XHR7XHJcblx0XHRcdGxldCBhcnIgPSB2bnNCeURlcHRoW3ZuLmRlcHRoXTtcclxuXHRcdFx0aWYgKCFhcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhcnIgPSBbXTtcclxuXHRcdFx0XHR2bnNCeURlcHRoW3ZuLmRlcHRoXSA9IGFycjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXJyLnB1c2godm4pO1xyXG5cdFx0fSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gdm5zQnlEZXB0aDtcclxuXHR9XHJcblxyXG5cdC8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBmb3IgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYW5kIHJlY3Vyc2l2ZWx5IGZvciB0aGVpclxyXG5cdC8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFJldHVybnMgYXJyYXkgb2YgVk5EaXNwIHN0cnVjdHVyZXMgZm9yIGVhY2ggdXBkYXRlZCBub2RlLlxyXG5cdHByaXZhdGUgcGVyZm9ybVJlbmRlclBoYXNlKCB2bnNCeURlcHRoOiBWTltdW10pOiBWTkRpc3BbXVxyXG5cdHtcclxuXHRcdGxldCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSA9IFtdO1xyXG5cclxuXHRcdC8vIGl0ZXJhdGlvbiBvdmVyIHRoZSBzcGFyc2UgYXJyYXkgc2tpcHMgdGhlIGhvbGVzLlxyXG5cdFx0dm5zQnlEZXB0aC5mb3JFYWNoKCAodm5zOiBWTltdKSA9PiB7IHZucy5mb3JFYWNoKCAodm46IFZOKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlLCBkb24ndCB1cGRhdGUgaXQgYWdhaW5cclxuXHRcdFx0XHRpZiAodm4ubGFzdFVwZGF0ZVRpY2sgPT09IHRoaXMuY3VycmVudFRpY2spXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdHVwZGF0ZWROb2RlRGlzcHMucHVzaCggdGhpcy51cGRhdGVTdGVtVmlydHVhbCggdm4pKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gZmluZCB0aGUgbmVhcmVzdCBlcnJvciBoYW5kbGluZyBzZXJ2aWNlLiBJZiBub2JvZHkgZWxzZSwgaXQgaXMgaW1wbGVtZW50ZWRcclxuXHRcdFx0XHQvLyBieSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRcdFx0XHRsZXQgZXJyb3JTZXJ2aWNlOiBtaW0uSUVycm9ySGFuZGxpbmdTZXJ2aWNlID0gdm4uZmluZFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCBmYWxzZSk7XHJcblx0XHRcdFx0ZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIHRoaXMuY3VycmVudFZOID8gdGhpcy5jdXJyZW50Vk4ucGF0aCA6IG51bGwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmN1cnJlbnRWTiA9IG51bGw7XHJcblx0XHR9KX0pO1xyXG5cclxuXHRcdHJldHVybiB1cGRhdGVkTm9kZURpc3BzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQZXJmb3JtcyB0aGUgY29tbWl0IHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcblx0Ly8gc3ViLW5vZGVzIHdoZXJlIG5lY2Vzc2FyeS4gVGhlIENvbW1pdCBwaGFzZSBjb25zaXN0cyBvZiB1cGRhdGluZyBET00gYW5kIGNhbGxpbmcgbGlmZS1jeWNsZVxyXG5cdC8vIG1ldGhvZHMgZGlkTW91bnQsIGRpZFVwZGF0ZSBhbmQgd2lsbFVubW91bnQuXHJcblx0cHJpdmF0ZSBwZXJmb3JtQ29tbWl0UGhhc2UoIHVwZGF0ZWROb2RlRGlzcHM6IFZORGlzcFtdKTogdm9pZFxyXG5cdHtcclxuXHRcdHVwZGF0ZWROb2RlRGlzcHMuZm9yRWFjaCggKGRpc3A6IFZORGlzcCkgPT5cclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wcmVVcGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR1cGRhdGVkTm9kZURpc3BzLmZvckVhY2goIChkaXNwOiBWTkRpc3ApID0+XHJcblx0XHR7XHJcblx0XHRcdHRoaXMudXBkYXRlUGh5c2ljYWwoIGRpc3ApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dXBkYXRlZE5vZGVEaXNwcy5mb3JFYWNoKCAoZGlzcDogVk5EaXNwKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnBvc3RVcGRhdGUoIGRpc3ApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCBiZWZvcmUgb3IgYWZ0ZXIgdXBkYXRlIGN5Y2xlLlxyXG5cdHByaXZhdGUgY2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggZnVuY3M6IFNldDwoKT0+dm9pZD4sIGJlZm9yZU9yQWZ0ZXI6IHN0cmluZylcclxuXHR7XHJcblx0XHRmdW5jcy5mb3JFYWNoKCAoZnVuYykgPT5cclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRmdW5jKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFeGNlcHRpb24gd2hpbGUgaW52b2tpbmcgZnVuY3Rpb24gJHtiZWZvcmVPckFmdGVyfSB1cGRhdGluZyBjb21wb25lbnRzXFxuYCwgZXJyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgYW5kIHJlbmRlcnMgdGhpcyBub2RlIGFuZCBpdHMgc3ViLW5vZGVzLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkXHJcblx0Ly8gd2hlbiBhIG5vZGUgaXMgZmlyc3QgbW91bnRlZC4gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBkdXJpbmcgdGhlIGV4ZWN1dGlvbiBvZiB0aGlzXHJcblx0Ly8gbWV0aG9kICh3aGljaCBjYW4gYmUgb25seSBmcm9tIGNvbXBvbmVudHMnIHNldFNpdGUgb3IgcmVuZGVyIG1ldGhvZHMpLFxyXG5cdC8vIHRoZSBjb21wb25lbnQgaXMgYXNrZWQgdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlXHJcblx0Ly8gY29udGVudCByZXR1cm5lZCBmcm9tIHRoZSBlcnJvciBoYW5kbGluZyBtZXRob2QgaXMgcmVuZGVyZWQ7IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvblxyXG5cdC8vIGlzIHJlLXRocm93bi4gVGh1cywgdGhlIGV4Y2VwdGlvbiBpcyBwcm9wYWdhdGVkIHVwIHVudGlsIGl0IGlzIGhhbmRsZWQgYnkgYSBub2RlIHRoYXRcclxuXHQvLyBoYW5kbGVzIGl0IG9yIHVwIHRvIHRoZSByb290IG5vZGUuXHJcblx0cHJpdmF0ZSBjcmVhdGVWaXJ0dWFsKCB2bjogVk4sIHBhcmVudDogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gc2V0IGVzc2VudGlhbCBub2RlIHBhcmFtZXRlcnMuXHJcblx0XHR2bi5pbml0aWFsaXplKCBwYXJlbnQpO1xyXG5cclxuXHRcdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdFx0bGV0IGN1cnJlbnRWTiA9IHZuO1xyXG5cdFx0dGhpcy5jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHRcdHZuLndpbGxNb3VudCgpO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBub2RlIGRvZXNuJ3QgaGFuZGxlIGVycm9ycyB3ZSBkb24ndCBuZWVkIHRvIHdhc3RlIHRpbWUgdG8gdXNlIHRyeS9jYXRjaFxyXG5cdFx0aWYgKCF2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcoKSlcclxuXHRcdFx0dGhpcy5jcmVhdGVTdWJOb2Rlc1ZpcnR1YWwoIHZuKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm4pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRcdFx0Ly8gbGV0IHRoZSBub2RlIGhhbmRsZSBpdHMgb3duIGVycm9yIGFuZCByZS1yZW5kZXJcclxuXHRcdFx0XHR2bi5oYW5kbGVFcnJvciggZXJyLCB0aGlzLmN1cnJlbnRWTi5wYXRoKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm4pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkIG5vZGUgYWZ0ZXIgcHJvY2Vzc2luZyBpdHMgc3Vibm9kZXNcclxuXHRcdHRoaXMuY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQZXJmb3JtcyBjcmVhdGlvbiBhbmQgaW5pdGlhbCByZW5kZXJpbmcgb24gdGhlIHN1Yi1ub2RlcyBvZiBvdXIgbm9kZS5cclxuXHRwcml2YXRlIGNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlcyA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggdm4ucmVuZGVyKCkpO1xyXG5cdFx0Zm9yKCBsZXQgc3ZuID0gc3ViTm9kZXMuZmlyc3Q7IHN2biAhPT0gbnVsbDsgc3ZuID0gc3ZuLm5leHQpXHJcblx0XHRcdHRoaXMuY3JlYXRlVmlydHVhbCggc3ZuLCB2bik7XHJcblxyXG5cdFx0dm4uc3ViTm9kZXMgPSBzdWJOb2RlcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgY3JlYXRlcyBET00gbm9kZXMgZm9yIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSBjcmVhdGVQaHlzaWNhbCggdm46IFZOLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETilcclxuXHR7XHJcblx0XHQvLyByZW1lbWJlciB0aGUgYW5jaG9yIG5vZGVcclxuXHRcdHZuLmFuY2hvckROID0gYW5jaG9yRE47XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cdFx0dm4ubW91bnQoKTtcclxuXHJcblx0XHQvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCBhZGQgaXQgdG8gdGhlIERPTSB0cmVlIGFuZCB1c2UgaXQgYXMgYW5cclxuXHRcdC8vIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlcy5cclxuXHRcdGxldCBvd25ETjogRE4gPSB2bi5nZXRPd25ETigpO1xyXG5cclxuXHRcdC8vIGlmIHdlIGhhdmUgb3VyIG93biBET00gbm9kZSwgYWRkIGl0IHVuZGVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdFx0aWYgKG93bkROICE9PSBudWxsKVxyXG5cdFx0XHR2bi5hbmNob3JETi5pbnNlcnRCZWZvcmUoIG93bkROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIG5vZGUgaGFzIHN1Yi1ub2RlcywgYWRkIERPTSBub2RlcyBmb3IgdGhlbVxyXG5cdFx0aWYgKHZuLnN1Yk5vZGVzLmNvdW50ID4gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gZGV0ZXJtaW5lIHdoYXQgbm9kZXMgdG8gdXNlIGFzIGFuY2hvciBhbmQgXCJiZWZvcmVcIiBmb3IgdGhlIHN1Yi1ub2Rlc1xyXG5cdFx0XHRsZXQgbmV3QW5jaG9yRE46IEROID0gb3duRE4gPT09IG51bGwgPyBhbmNob3JETiA6IG93bkROO1xyXG5cdFx0XHRsZXQgbmV3QmVmb3JlRE46IEROID0gb3duRE4gPT09IG51bGwgPyBiZWZvcmVETiA6IG51bGw7XHJcblxyXG5cdFx0XHQvLyBtb3VudCBhbGwgc3ViLW5vZGVzXHJcblx0XHRcdGZvciggbGV0IHN2biA9IHZuLnN1Yk5vZGVzLmZpcnN0OyBzdm4gIT09IG51bGw7IHN2biA9IHN2bi5uZXh0KVxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlUGh5c2ljYWwoIHN2biwgbmV3QW5jaG9yRE4sIG5ld0JlZm9yZUROKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgY2FsbHMgZGlkTW91bnQgb24gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwcml2YXRlIHBvc3RDcmVhdGUoIHZuOiBWTilcclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHZuLmRpZE1vdW50KCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgTm9kZSAke3ZuLm5hbWV9IHRocmV3IGV4Y2VwdGlvbiAnJHtlcnIubWVzc2FnZX0nIGluIGRpZE1vdW50YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKCBsZXQgc3ZuID0gdm4uc3ViTm9kZXMuZmlyc3Q7IHN2biAhPT0gbnVsbDsgc3ZuID0gc3ZuLm5leHQpXHJcblx0XHRcdHRoaXMucG9zdENyZWF0ZSggc3ZuKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgY2FsbHMgd2lsbFVubW91bnQgb24gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwcml2YXRlIHByZURlc3Ryb3koIHZuOiBWTilcclxuXHR7XHJcblx0XHRmb3IoIGxldCBzdm4gPSB2bi5zdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdFx0dGhpcy5wcmVEZXN0cm95KCBzdm4pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dm4ud2lsbFVubW91bnQoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBOb2RlICR7dm4ubmFtZX0gdGhyZXcgZXhjZXB0aW9uICcke2Vyci5tZXNzYWdlfScgaW4gd2lsbFVubW91bnRgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgcmVtb3ZlcyBET00gbm9kZXMgY29ycmVzcG9uZGluZyB0byB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5cdHByaXZhdGUgZGVzdHJveVBoeXNpY2FsKCB2bjogVk4pXHJcblx0e1xyXG5cdFx0Ly8gZ2V0IHRoZSBET00gbm9kZSBiZWZvcmUgd2UgY2FsbCB1bm1vdW50LCBiZWNhdXNlIHVubW91bnQgd2lsbCBjbGVhciBpdC5cclxuXHRcdGxldCBvd25ETjogRE4gPSB2bi5nZXRPd25ETigpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cdFx0dm4udW5tb3VudCgpO1xyXG5cclxuXHRcdC8vIElmIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGl0cyBvd24gRE9NIG5vZGUsIHdlIHJlbW92ZSBpdCBmcm9tIHRoZSBET00gdHJlZS4gSW4gdGhpcyBjYXNlLFxyXG5cdFx0Ly8gd2UgZG9uJ3QgbmVlZCB0byByZWN1cnNlIGludG8gc3ViLW5vZGVzLCBiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgd2l0aCB0aGUgcGFyZW50LlxyXG5cdFx0aWYgKG93bkROKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBvdXIgRE9NIG5vZGVzIGNhbiBvbmx5IGJlIGVpdGhlciBFbGVtZW50IG9yIFRleHQgLSBib3RoIGRlcml2ZSBmcm9tIENoaWxkTm9kZVxyXG5cdFx0XHQob3duRE4gYXMgYW55IGFzIENoaWxkTm9kZSkucmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IGJlY2F1c2UgdGhpcyB3YXkgdGhlIERPTSBlbGVtZW50IHJlbW92YWwgaXNcclxuXHRcdFx0Ly8gZWFzaWVyLlxyXG5cdFx0XHRmb3IoIGxldCBzdm4gPSB2bi5zdWJOb2Rlcy5sYXN0OyBzdm4gIT09IG51bGw7IHN2biA9IHN2bi5wcmV2KVxyXG5cdFx0XHRcdHRoaXMuZGVzdHJveVBoeXNpY2FsKCBzdm4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZuLnRlcm1pbmF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSByZW5kZXJzIHRoZSBjaGlsZHJlbiBpZiB0aGlzIG5vZGUuIFRoaXMgbWV0aG9kIGlzIG9ubHkgaW52b2tlZCBpZiBhIG5vZGUgaXNcclxuXHQvLyBiZWluZyB1cGRhdGVkIGFzIGEgcmVzdWx0IG9mIHVwZGF0ZU1lIGludm9jYXRpb24uXHJcblx0cHJpdmF0ZSB1cGRhdGVTdGVtVmlydHVhbCggdm46IFZOKTogVk5EaXNwXHJcblx0e1xyXG5cdFx0bGV0IGRpc3AgPSBuZXcgVk5EaXNwKCk7XHJcblx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5Vbmtub3duO1xyXG5cdFx0ZGlzcC5vbGRWTiA9IGRpc3AubmV3Vk4gPSB2bjtcclxuXHRcdHRoaXMudXBkYXRlVmlydHVhbCggZGlzcCk7XHJcblx0XHRyZXR1cm4gZGlzcDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgcmVuZGVycyB0aGlzIG5vZGUgYW5kIHVwZGF0ZXMgaXRzIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnkuIFRoaXMgbWV0aG9kIGlzXHJcblx0Ly8gaW52b2tlZCB3aGVuIGEgbm9kZSBpcyBiZWluZyB1cGRhdGVkIGVpdGhlciBhcyBhIHJlc3VsdCBvZiB1cGRhdGVNZSBpbnZvY2F0aW9uIG9yIGJlY2F1c2VcclxuXHQvLyB0aGUgcGFyZW50IG5vZGUgd2FzIHVwZGF0ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpcyBtZXRob2RcclxuXHQvLyAod2hpY2ggY2FuIGJlIG9ubHkgZnJvbSBjb21wb25lbnRzJyBzaG91bGRVcGRhdGUgb3IgcmVuZGVyIG1ldGhvZHMpLCB0aGUgY29tcG9uZW50IGlzIGFza2VkXHJcblx0Ly8gdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGVcclxuXHQvLyBlcnJvciBoYW5kbGluZyBtZXRob2QgaXMgcmVuZGVyZWQ7IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvbiBpcyByZS10aHJvd24uIFRodXMsIHRoZVxyXG5cdC8vIGV4Y2VwdGlvbiBpcyBwcm9wYWdhdGVkIHVwIHVudGlsIGl0IGlzIGhhbmRsZWQgYnkgYSBub2RlIHRoYXQgaGFuZGxlcyBpdCBvciB1cCB0byB0aGUgcm9vdFxyXG5cdC8vIG5vZGUuXHJcblx0cHJpdmF0ZSB1cGRhdGVWaXJ0dWFsKCBkaXNwOiBWTkRpc3ApOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0XHRsZXQgY3VycmVudFZOID0gZGlzcC5vbGRWTjtcclxuXHRcdHRoaXMuY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBub2RlIGRvZXNuJ3QgaGFuZGxlIGVycm9ycyB3ZSBkb24ndCBuZWVkIHRvIHdhc3RlIHRpbWUgdG8gdXNlIHRyeS9jYXRjaFxyXG5cdFx0aWYgKCFkaXNwLm9sZFZOLnN1cHBvcnRzRXJyb3JIYW5kbGluZygpKVxyXG5cdFx0XHR0aGlzLnVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3ApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLm9sZFZOLmhhbmRsZUVycm9yKCBlcnIsIHRoaXMuY3VycmVudFZOLnBhdGgpO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3ViTm9kZXNWaXJ0dWFsKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlIG5vZGUgd2FzIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSAtIHRoaXMgd2lsbCBwcmV2ZW50IGl0IGZyb20gXHJcblx0XHQvLyByZW5kZXJpbmcgYWdhaW4gaW4gdGhpcyBjeWNsZS5cclxuXHRcdGRpc3Aub2xkVk4ubGFzdFVwZGF0ZVRpY2sgPSB0aGlzLmN1cnJlbnRUaWNrO1xyXG5cclxuXHRcdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Ym5vZGVzXHJcblx0XHR0aGlzLmN1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIG9mIHRoZSB1cGRhdGUgb24gdGhlIHN1Yi1ub2RlcyBvZiB0aGUgbm9kZSwgd2hpY2ggaXMgcGFzc2VkIGFzXHJcblx0Ly8gdGhlIG9sZFZOIG1lbWJlciBvZiB0aGUgVk5EaXNwIHN0cnVjdHVyZS5cclxuXHRwcml2YXRlIHVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHJlbmRlciB0aGUgbmV3IGNvbnRlbnQgYW5kIGJ1aWxkIGFycmF5IG9mIGRpc3Bvc2l0aW9ucyBvYmplY3RzIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdFx0ZGlzcC5idWlsZFN1Yk5vZGVEaXNwb3NpdGlvbnMoKTtcclxuXHJcblx0XHQvLyBwZXJmb3JtIHJlbmRlcmluZyBmb3Igc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIGluc2VydGVkLCByZXBsYWNlZCBvciB1cGRhdGVkXHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRGlzcCBvZiBkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHN1Yk5vZGVEaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3AgPSBzdWJOb2RlRGlzcC5vbGRWTi5wcmVwYXJlVXBkYXRlKCBzdWJOb2RlRGlzcC5uZXdWTik7XHJcblx0XHRcdFx0aWYgKHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVWaXJ0dWFsKCBzdWJOb2RlRGlzcCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlVmlydHVhbCggc3ViTm9kZURpc3AubmV3Vk4sIGRpc3Aub2xkVk4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSBjYWxscyB3aWxsVW5tb3VudCBvbiBzdWItbm9kZXMgbWFya2VkIGZvciBkZWxldGlvbi5cclxuXHRwcml2YXRlIHByZVVwZGF0ZVBoeXNpY2FsKCBkaXNwOiBWTkRpc3ApXHJcblx0e1xyXG5cdFx0Ly8gZmlyc3QsIHN1Yi1ub2RlcyBtYXJrZWQgZm9yIGRlbGV0aW9uXHJcblx0XHRmb3IoIGxldCBzdm4gb2YgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHR0aGlzLnByZURlc3Ryb3koIHN2bik7XHJcblxyXG5cdFx0Ly8gc2Vjb25kLCBzdWItbm9kZXMgbWFya2VkIGZvciB1cGRhdGUgb3IgaW5zZXJ0XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRGlzcCBvZiBkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHRcdFx0dGhpcy5wcmVVcGRhdGVQaHlzaWNhbCggc3ViTm9kZURpc3ApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSBwZXJmb3JtcyBET00gdXBkYXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSB1cGRhdGVQaHlzaWNhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCB0aGUgbm9kZSB3aG9zZSBjaGlsZHJlbiBhcmUgYmVpbmcgdXBkYXRlZC4gVGhpcyBpcyBhbHdheXMgdGhlIG9sZFZOIG1lbWJlciBvZlxyXG5cdFx0Ly8gdGhlIGRpc3Agc3RydWN0dXJlLlxyXG5cdFx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHQvLyBpdCBtaWdodCBoYXBwZW4gdGhhdCB0aGUgbm9kZSBiZWluZyB1cGRhdGVkIHdhcyBhbHJlYWR5IGRlbGV0ZWQgYnkgaXRzIHBhcmVudC4gQ2hlY2tcclxuXHRcdC8vIGZvciB0aGlzIHNpdHVhdGlvbiBhbmQgZXhpdCBpZiB0aGlzIGlzIHRoZSBjYXNlXHJcblx0XHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gcmVtb3ZlIGZyb20gRE9NIHRoZSBvbGQgbm9kZXMgZGVzaWduYXRlZCB0byBiZSByZW1vdmVkICh0aGF0IGlzLCB0aG9zZSBmb3Igd2hpY2ggdGhlcmVcclxuXHRcdC8vIGlzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd2lsbCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2UgaXQpIGFuZCB0aGVuIHRob3NlXHJcblx0XHQvLyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLiBXZSBuZWVkIHRvIHJlbW92ZSBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZ1xyXG5cdFx0Ly8gbmV3IC0gb25lIHJlYXNvbiBpcyB0byBwcm9wZXJseSBtYWludGFpbiByZWZlcmVuY2VzLlxyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHRcdFx0dGhpcy5kZXN0cm95UGh5c2ljYWwoIHN2bik7XHJcblxyXG5cdFx0Ly8gY2xlYXIgb3VyIGN1cnJlbnQgbGlzdCBvZiBzdWItbm9kZXMgLSB3ZSB3aWxsIHBvcHVsYXRlIGl0IHdoaWxlIHVwZGF0aW5nIHRoZW1cclxuXHRcdHZuLnN1Yk5vZGVzLmNsZWFyKCk7XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHRoZSBhbmNob3Igbm9kZSB0byB1c2Ugd2hlbiBpbnNlcnRpbmcgbmV3IG9yIG1vdmluZyBleGlzdGluZyBzdWItbm9kZXMuIElmXHJcblx0XHQvLyBvdXIgbm9kZSBoYXMgaXRzIG93biBETiwgaXQgd2lsbCBiZSB0aGUgYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzOyBvdGhlcndpc2UsIG91ciBub2RlJ3NcclxuXHRcdC8vIGFuY2hvciB3aWxsIGJlIHRoZSBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMgdG9vLlxyXG5cdFx0bGV0IG93bkROID0gdm4uZ2V0T3duRE4oKTtcclxuXHRcdGxldCBhbmNob3JETiA9IG93bkROICE9PSBudWxsID8gb3duRE4gOiB2bi5hbmNob3JETjtcclxuXHJcblx0XHQvLyBpZiB0aGlzIHZpcnR1YWwgbm9kZSBkb2Vzbid0IGRlZmluZSBpdHMgb3duIERPTSBub2RlICh0cnVlIGZvciBjb21wb25lbnRzKSwgd2Ugd2lsbFxyXG5cdFx0Ly8gbmVlZCB0byBmaW5kIGEgRE9NIG5vZGUgYmVmb3JlIHdoaWNoIHRvIHN0YXJ0IGluc2VydGluZyBuZXcgbm9kZXMuIE51bGwgbWVhbnNcclxuXHRcdC8vIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSBhbmNob3Igbm9kZSdzIGNoaWxkcmVuLlxyXG5cdFx0bGV0IGJlZm9yZUROID0gb3duRE4gIT09IG51bGwgPyBudWxsIDogdm4uZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIGFuY2hvckROKTtcclxuXHJcblx0XHQvLyBwZXJmb3JtIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZWl0aGVyIGdyb3VwcyBvciBpbmRpdmlkdWFsIG5vZGVzLlxyXG5cdFx0aWYgKGRpc3Auc3ViTm9kZUdyb3VwcyAmJiBkaXNwLnN1Yk5vZGVHcm91cHMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy51cGRhdGVQaHlzaWNhbEJ5R3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdFx0dGhpcy5hcnJhbmdlR3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGRpc3Auc3ViTm9kZURpc3BzICYmIGRpc3Auc3ViTm9kZURpc3BzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudXBkYXRlUGh5c2ljYWxCeU5vZGVzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBlcmZvcm1zIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZ3JvdXBzLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2YgdXBkYXRlIGdyb3Vwc1xyXG5cdC8vIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiB3ZSBkZWNpZGUgdGhlIHZhbHVlIG9mIHRoZSBcImJlZm9yZUROXCIuXHJcblx0cHJpdmF0ZSB1cGRhdGVQaHlzaWNhbEJ5R3JvdXBzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgZ3JvdXBzOiBWTkRpc3BHcm91cFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZ3JvdXAgPSBncm91cHNbaV07XHJcblxyXG5cdFx0XHQvLyBmaXJzdCB1cGRhdGUgZXZlcnkgc3ViLW5vZGUgaW4gdGhlIGdyb3VwIGFuZCBpdHMgc3ViLXN1Yi1ub2Rlc1xyXG5cdFx0XHRmb3IoIGxldCBqID0gZ3JvdXAubGFzdDsgaiA+PSBncm91cC5maXJzdDsgai0tKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGRpc3AgPSBkaXNwc1tqXTtcclxuXHRcdFx0XHRsZXQgbmV3Vk4gPSBkaXNwLm5ld1ZOO1xyXG5cdFx0XHRcdGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdFx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlUGh5c2ljYWwoIGRpc3ApO1xyXG5cclxuXHRcdFx0XHRcdGxldCBmaXJzdEROID0gb2xkVk4uZ2V0Rmlyc3RETigpO1xyXG5cdFx0XHRcdFx0aWYgKGZpcnN0RE4gIT09IG51bGwpXHJcblx0XHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHJcblx0XHRcdFx0XHQvLyB0aGUgb2xkIG5vZGUgcmVtYWlucyBhcyBhIHN1Yi1ub2RlXHJcblx0XHRcdFx0XHRwYXJlbnRWTi5zdWJOb2Rlcy5pbnNlcnRWTiggb2xkVk4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gc2luY2Ugd2UgYXJlIGdvaW5nIGZyb20gdGhlIGZpcnN0IG5vZGUgaW4gdGhlIGdyb3VwIHRvIHRoZSBsYXN0IHdlIGFsd2F5cyB1c2VcclxuXHRcdFx0XHRcdC8vIHRoZSBzYW1lIGJlZm9yZUROIGZvciBpbnNlcnRpb25cclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlUGh5c2ljYWwoIG5ld1ZOLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdFx0Ly8gbmV4dCBjb21wb25lbnRzIHNob3VsZCBiZSBpbnNlcnRlZC9tb3ZlZFxyXG5cdFx0XHRcdFx0bGV0IGZpcnN0RE4gPSBuZXdWTi5nZXRGaXJzdEROKCk7XHJcblx0XHRcdFx0XHRpZiAoZmlyc3RETiAhPT0gbnVsbClcclxuXHRcdFx0XHRcdFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cclxuXHRcdFx0XHRcdC8vIHRoZSBuZXcgbm9kZSBiZWNvbWVzIGEgc3ViLW5vZGVcclxuXHRcdFx0XHRcdHBhcmVudFZOLnN1Yk5vZGVzLmluc2VydFZOKCBuZXdWTik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBub3cgdGhhdCBhbGwgbm9kZXMgaW4gdGhlIGdyb3VwIGhhdmUgYmVlbiB1cGRhdGVkIG9yIGluc2VydGVkLCB3ZSBjYW4gZGV0ZXJtaW5lXHJcblx0XHRcdC8vIGZpcnN0IGFuZCBsYXN0IEROcyBmb3IgdGhlIGdyb3VwXHJcblx0XHRcdGdyb3VwLmRldGVybWluZUROcygpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIGdyb3VwIGhhcyBhdCBsZWFzdCBvbmUgRE4sIGl0cyBmaXJzdCBETiBiZWNvbWVzIHRoZSBub2RlIGJlZm9yZSB3aGljaCB0aGUgbmV4dFxyXG5cdFx0XHQvLyBncm91cCBvZiBuZXcgbm9kZXMgKGlmIGFueSkgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdFx0XHRpZiAoZ3JvdXAuZmlyc3RETilcclxuXHRcdFx0XHRiZWZvcmVETiA9IGdyb3VwLmZpcnN0RE47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFycmFuZ2UgdGhlIGdyb3VwcyBpbiBvcmRlciBhcyBpbiB0aGUgbmV3IHN1Yi1ub2RlIGxpc3QsIG1vdmluZyB0aGVtIGlmIG5lY2Vzc2FyeS5cclxuXHRwcml2YXRlIGFycmFuZ2VHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIFdlIGdvIGZyb20gdGhlIGxhc3QgZ3JvdXAgdG8gdGhlIHNlY29uZCBncm91cCBpbiB0aGUgbGlzdCBiZWNhdXNlIGFzIHNvb24gYXMgd2UgbW92ZWQgYWxsXHJcblx0XHQvLyBncm91cHMgZXhjZXB0IHRoZSBmaXJzdCBvbmUgaW50byB0aGVpciByaWdodCBwbGFjZXMsIHRoZSBmaXJzdCBncm91cCB3aWxsIGJlIGF1dG9tYXRpY2FsbHlcclxuXHRcdC8vIGluIHRoZSByaWdodCBwbGFjZS4gV2UgYWx3YXlzIGhhdmUgdHdvIGdyb3VwcyAoaSBhbmQgaS0xKSwgd2hpY2ggYWxsb3dzIHVzIHRvIHVuZGVyc3RhbmRcclxuXHRcdC8vIHdoZXRoZXIgd2UgbmVlZCB0byBzd2FwIHRoZW0uIElmIHdlIGRvIHdlIG1vdmUgdGhlIHNob3J0ZXIgZ3JvdXAuXHJcblx0XHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pXHJcblx0XHR7XHJcblx0XHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHRcdFx0bGV0IHByZXZHcm91cCA9IGdyb3Vwc1tpLTFdO1xyXG5cclxuXHRcdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdyb3VwIHNob3VsZCBtb3ZlLiBXZSB0YWtlIHRoZSBsYXN0IG5vZGUgZnJvbSB0aGUgZ3JvdXBcclxuXHRcdFx0Ly8gYW5kIGNvbXBhcmUgaXRzIEROJ3MgbmV4dCBzaWJsaW5nIHRvIHRoZSBjdXJyZW50IFwiYmVmb3JlRE5cIi5cclxuXHRcdFx0aWYgKGdyb3VwLmxhc3RETiAhPT0gbnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChncm91cC5sYXN0RE4ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZSBjdXJyZW50IGdyb3VwIG5vdyByZXNpZGVzIGJlZm9yZSB0aGUgcHJldmlvdXMgZ3JvdXAsIHRoZW4gdGhhdCBtZWFuc1xyXG5cdFx0XHRcdFx0Ly8gdGhhdCB3ZSBhcmUgc3dhcHBpbmcgdHdvIGdyb3Vwcy4gSW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbW92ZSB0aGUgc2hvcnRlciBvbmUuXHJcblx0XHRcdFx0XHRpZiAoZ3JvdXAubGFzdEROLm5leHRTaWJsaW5nID09PSBwcmV2R3JvdXAuZmlyc3RETiAmJiBncm91cC5jb3VudCA+IHByZXZHcm91cC5jb3VudClcclxuXHRcdFx0XHRcdFx0dGhpcy5tb3ZlR3JvdXAoIHBhcmVudFZOLCBkaXNwcywgcHJldkdyb3VwLCBhbmNob3JETiwgZ3JvdXAuZmlyc3RETik7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHRoaXMubW92ZUdyb3VwKCBwYXJlbnRWTiwgZGlzcHMsIGdyb3VwLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gdGhlIGdyb3VwJ3MgZmlyc3QgRE4gYmVjb21lcyB0aGUgbmV3IGJlZm9yZUROLiBOb3RlIHRoYXQgZmlyc3RETiBjYW5ub3QgYmUgbnVsbFxyXG5cdFx0XHRcdC8vIGJlY2F1c2UgbGFzdEROIGlzIG5vdCBudWxsXHJcblx0XHRcdFx0YmVmb3JlRE4gPSBncm91cC5maXJzdEROO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1vdmVzIGFsbCB0aGUgbm9kZXMgaW4gdGhlIGdpdmVuIGdyb3VwIGJlZm9yZSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXHJcblx0cHJpdmF0ZSBtb3ZlR3JvdXAoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cDogVk5EaXNwR3JvdXAsIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IGogPSBncm91cC5maXJzdDsgaiA8PSBncm91cC5sYXN0OyBqKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdWJOb2RlVk4gPSBncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwc1tqXS5vbGRWTiA6IGRpc3BzW2pdLm5ld1ZOO1xyXG5cclxuXHRcdFx0Ly8gbGV0IHN1Yk5vZGVGaXJzdEROID0gc3ViTm9kZVZOLmdldEZpcnN0RE4oKTtcclxuXHRcdFx0Ly8gaWYgKHN1Yk5vZGVGaXJzdEROKVxyXG5cdFx0XHQvLyB7XHJcblx0XHRcdC8vIFx0YW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBzdWJOb2RlRmlyc3RETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0Ly8gXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHQvLyBcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHBhcmVudFZOLmdldFN0YXRzQ2F0ZWdvcnkoKSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0XHQvLyBcdC8vLyAjZW5kaWZcclxuXHRcdFx0Ly8gfVxyXG5cclxuXHRcdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgYWxsIHRoZSBub2RlcyB1bmRlciB0aGlzIFZOIHNob3VsZCBiZSBtb3ZlZC5cclxuXHRcdFx0bGV0IHN1Yk5vZGVETnMgPSBzdWJOb2RlVk4uZ2V0SW1tZWRpYXRlRE5zKCk7XHJcblx0XHRcdGZvciggbGV0IHN1Yk5vZGVETiBvZiBzdWJOb2RlRE5zKVxyXG5cdFx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBwYXJlbnRWTi5nZXRTdGF0c0NhdGVnb3J5KCksIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGVyZm9ybXMgdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBpbmRpdmlkdWFsIG5vZGVzLlxyXG5cdHByaXZhdGUgdXBkYXRlUGh5c2ljYWxCeU5vZGVzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcGVyZm9ybSBET00gb3BlcmF0aW9ucyBhY2NvcmRpbmcgdG8gc3ViLW5vZGUgZGlzcG9zaXRpb24uIFdlIG5lZWQgdG8gZGVjaWRlIGZvciBlYWNoXHJcblx0XHQvLyBub2RlIHdoYXQgbm9kZSB0byB1c2UgdG8gaW5zZXJ0IG9yIG1vdmUgaXQgYmVmb3JlLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2ZcclxuXHRcdC8vIG5ldyBub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5cdFx0Zm9yKCBsZXQgaSA9IGRpc3BzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZGlzcCA9IGRpc3BzW2ldO1xyXG5cdFx0XHRsZXQgYWN0aW9uID0gZGlzcC5hY3Rpb247XHJcblx0XHRcdGxldCBuZXdWTiA9IGRpc3AubmV3Vk47XHJcblx0XHRcdGlmIChhY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkVk4gPSBkaXNwLm9sZFZOO1xyXG5cdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdFx0b2xkVk4uY29tbWl0VXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlUGh5c2ljYWwoIGRpc3ApO1xyXG5cclxuXHRcdFx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciBhbGwgdGhlIG5vZGVzIHVuZGVyIHRoaXMgVk4gc2hvdWxkIGJlIG1vdmVkLlxyXG5cdFx0XHRcdGxldCBzdWJOb2RlRE5zID0gb2xkVk4uZ2V0SW1tZWRpYXRlRE5zKCk7XHJcblx0XHRcdFx0aWYgKHN1Yk5vZGVETnMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBjaGVjayB3aGV0aGVyIHRoZSBsYXN0IG9mIHRoZSBET00gbm9kZXMgYWxyZWFkeSByZXNpZGVzIHJpZ2h0IGJlZm9yZSB0aGUgbmVlZGVkIG5vZGVcclxuXHRcdFx0XHRcdGlmIChzdWJOb2RlRE5zW3N1Yk5vZGVETnMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRmb3IoIGxldCBzdWJOb2RlRE4gb2Ygc3ViTm9kZUROcylcclxuXHRcdFx0XHRcdFx0XHRhbmNob3JETi5pbnNlcnRCZWZvcmUoIHN1Yk5vZGVETiwgYmVmb3JlRE4pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggcGFyZW50Vk4uZ2V0U3RhdHNDYXRlZ29yeSgpLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyB0aGUgZmlyc3Qgb2YgRE9NIG5vZGVzIGJlY29tZSB0aGUgbmV4dCBiZWZvcmVETlxyXG5cdFx0XHRcdFx0YmVmb3JlRE4gPSBzdWJOb2RlRE5zWzBdO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gdGhlIG9sZCBub2RlIHJlbWFpbnMgYXMgYSBzdWItbm9kZVxyXG5cdFx0XHRcdHBhcmVudFZOLnN1Yk5vZGVzLmluc2VydFZOKCBvbGRWTik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gc2luY2Ugd2UgYWxyZWFkeSBkZXN0cm95ZWQgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVwbGFjZWQsIHRoZSBjb2RlIGlzXHJcblx0XHRcdFx0Ly8gaWRlbnRpY2FsIGZvciBSZXBsYWNlIGFuZCBJbnNlcnQgYWN0aW9uc1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlUGh5c2ljYWwoIG5ld1ZOLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0XHQvLyBpZiB0aGUgbmV3IG5vZGUgZGVmaW5lcyBhIERPTSBub2RlLCBpdCBiZWNvbWVzIHRoZSBET00gbm9kZSBiZWZvcmUgd2hpY2hcclxuXHRcdFx0XHQvLyBuZXh0IGNvbXBvbmVudHMgc2hvdWxkIGJlIGluc2VydGVkL21vdmVkXHJcblx0XHRcdFx0bGV0IGZpcnN0RE46IEROID0gbmV3Vk4uZ2V0Rmlyc3RETigpO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9PSBudWxsKVxyXG5cdFx0XHRcdFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cclxuXHRcdFx0XHQvLyB0aGUgbmV3IG5vZGUgYmVjb21lcyBhIHN1Yi1ub2RlXHJcblx0XHRcdFx0cGFyZW50Vk4uc3ViTm9kZXMuaW5zZXJ0Vk4oIG5ld1ZOKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyAvLyBSZWN1cnNpdmVseSBwZXJmb3JtcyBET00gdXBkYXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0Ly8gcHJpdmF0ZSB1cGRhdGVQaHlzaWNhbCggZGlzcDogVk5EaXNwKVxyXG5cdC8vIHtcclxuXHQvLyBcdC8vIGdldCB0aGUgbm9kZSB3aG9zZSBjaGlsZHJlbiBhcmUgYmVpbmcgdXBkYXRlZC4gVGhpcyBpcyBhbHdheXMgdGhlIG9sZFZOIG1lbWJlciBvZlxyXG5cdC8vIFx0Ly8gdGhlIGRpc3Agc3RydWN0dXJlLlxyXG5cdC8vIFx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0Ly8gXHQvLyBpdCBtaWdodCBoYXBwZW4gdGhhdCB0aGUgbm9kZSBiZWluZyB1cGRhdGVkIHdhcyBhbHJlYWR5IGRlbGV0ZWQgYnkgaXRzIHBhcmVudC4gQ2hlY2tcclxuXHQvLyBcdC8vIGZvciB0aGlzIHNpdHVhdGlvbiBhbmQgZXhpdCBpZiB0aGlzIGlzIHRoZSBjYXNlXHJcblx0Ly8gXHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdC8vIFx0XHRyZXR1cm47XHJcblxyXG5cdC8vIFx0Ly8gcmVtb3ZlIGZyb20gRE9NIHRoZSBvbGQgbm9kZXMgZGVzaWduYXRlZCB0byBiZSByZW1vdmVkICh0aGF0IGlzLCB0aG9zZSBmb3Igd2hpY2ggdGhlcmVcclxuXHQvLyBcdC8vIGlzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd2lsbCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2UgaXQpIGFuZCB0aGVuIHRob3NlXHJcblx0Ly8gXHQvLyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLiBXZSBuZWVkIHRvIHJlbW92ZSBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZ1xyXG5cdC8vIFx0Ly8gbmV3IC0gb25lIHJlYXNvbiBpcyB0byBwcm9wZXJseSBtYWludGFpbiByZWZlcmVuY2VzLlxyXG5cdC8vIFx0Zm9yKCBsZXQgc3ZuIG9mIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHQvLyBcdFx0dGhpcy5kZXN0cm95UGh5c2ljYWwoIHN2bik7XHJcblxyXG5cdC8vIFx0Ly8gY2xlYXIgb3VyIGN1cnJlbnQgbGlzdCBvZiBzdWItbm9kZXMgd2Ugd2lsbCBwb3B1bGF0ZSBpdCB3aGlsZSB1cGRhdGluZyB0aGVtXHJcblx0Ly8gXHR2bi5zdWJOb2Rlcy5jbGVhcigpO1xyXG5cclxuXHQvLyBcdC8vIGRldGVybWluZSB0aGUgYW5jaG9yIG5vZGUgdG8gdXNlIHdoZW4gaW5zZXJ0aW5nIG9yIG1vdmluZyBuZXcgbm9kZXNcclxuXHQvLyBcdGxldCBvd25ETiA9IHZuLmdldE93bkROKCk7XHJcblx0Ly8gXHRsZXQgYW5jaG9yRE4gPSBvd25ETiAhPT0gbnVsbCA/IG93bkROIDogdm4uYW5jaG9yRE47XHJcblxyXG5cdC8vIFx0Ly8gaWYgdGhpcyB2aXJ0dWFsIG5vZGUgZG9lc24ndCBkZWZpbmUgaXRzIG93biBET00gbm9kZSAodHJ1ZSBmb3IgY29tcG9uZW50cyksIHdlIHdpbGxcclxuXHQvLyBcdC8vIG5lZWQgdG8gZmluZCBhIERPTSBub2RlIGJlZm9yZSB3aGljaCB0byBzdGFydCBpbnNlcnRpbmcgb3IgbW92aW5nIG5vZGVzLiBOdWxsIG1lYW5zXHJcblx0Ly8gXHQvLyBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgYW5jaG9yIG5vZGUncyBjaGlsZHJlbi5cclxuXHQvLyBcdGxldCBiZWZvcmVETjogRE4gPSBvd25ETiAhPT0gbnVsbCA/IG51bGwgOiB2bi5nZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggYW5jaG9yRE4pO1xyXG5cclxuXHQvLyBcdC8vIHBlcmZvcm0gRE9NIG9wZXJhdGlvbnMgYWNjb3JkaW5nIHRvIHN1Yi1ub2RlIGRpc3Bvc2l0aW9uLiBXZSBuZWVkIHRvIGRlY2lkZSBmb3IgZWFjaFxyXG5cdC8vIFx0Ly8gbm9kZSB3aGF0IG5vZGUgdG8gdXNlIHRvIGluc2VydCBvciBtb3ZlIGl0IGJlZm9yZS4gV2UgZ28gZnJvbSB0aGUgZW5kIG9mIHRoZSBsaXN0IG9mXHJcblx0Ly8gXHQvLyBuZXcgbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIHdlIGRlY2lkZSB0aGUgdmFsdWUgb2YgdGhlIFwiYmVmb3JlRE5cIi5cclxuXHQvLyBcdGZvciggbGV0IGkgPSBkaXNwLnN1Yk5vZGVEaXNwcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuXHQvLyBcdHtcclxuXHQvLyBcdFx0bGV0IHN1Yk5vZGVEaXNwID0gZGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0Ly8gXHRcdGxldCBhY3Rpb24gPSBzdWJOb2RlRGlzcC5hY3Rpb247XHJcblx0Ly8gXHRcdGlmIChhY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0Ly8gXHRcdHtcclxuXHQvLyBcdFx0XHRsZXQgb2xkVk4gPSBzdWJOb2RlRGlzcC5vbGRWTjtcclxuXHQvLyBcdFx0XHRsZXQgbmV3Vk4gPSBzdWJOb2RlRGlzcC5uZXdWTjtcclxuXHQvLyBcdFx0XHRpZiAoc3ViTm9kZURpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0Ly8gXHRcdFx0e1xyXG5cdC8vIFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHQvLyBcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgY29tbWl0VXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0Ly8gXHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdC8vIFx0XHRcdFx0b2xkVk4uY29tbWl0VXBkYXRlKCBuZXdWTik7XHJcblx0Ly8gXHRcdFx0fVxyXG5cclxuXHQvLyBcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHQvLyBcdFx0XHRpZiAoc3ViTm9kZURpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0Ly8gXHRcdFx0XHR0aGlzLnVwZGF0ZVBoeXNpY2FsKCBzdWJOb2RlRGlzcCk7XHJcblxyXG5cdC8vIFx0XHRcdC8vIGlmIG91ciBzdWItbm9kZSBkZWZpbmVzIGl0cyBvd24gRE4sIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgaXQgc2hvdWxkIGJlIG1vdmVkLlxyXG5cdC8vIFx0XHRcdGxldCBzdWJOb2RlRmlyc3RETiA9IG9sZFZOLmdldEZpcnN0RE4oKTtcclxuXHQvLyBcdFx0XHRpZiAoc3ViTm9kZUZpcnN0RE4gIT09IG51bGwpXHJcblx0Ly8gXHRcdFx0e1xyXG5cdC8vIFx0XHRcdFx0bGV0IG5leHRTdWJOb2RlVk5EaXNwID0gaSA9PT0gZGlzcC5zdWJOb2RlRGlzcHMubGVuZ3RoIC0gMSA/IG51bGwgOiBkaXNwLnN1Yk5vZGVEaXNwc1tpKzFdO1xyXG5cdC8vIFx0XHRcdFx0bGV0IG5ld05leHRWTiA9IG5leHRTdWJOb2RlVk5EaXNwID09PSBudWxsXHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0PyBudWxsXHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0OiBuZXh0U3ViTm9kZVZORGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGVcclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdD8gbmV4dFN1Yk5vZGVWTkRpc3Aub2xkVk5cclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdDogbmV4dFN1Yk5vZGVWTkRpc3AubmV3Vk47XHJcblx0Ly8gXHRcdFx0XHRpZiAob2xkVk4ubmV4dCAhPT0gbmV3TmV4dFZOIHx8IHN1Yk5vZGVGaXJzdEROLm5leHRTaWJsaW5nICE9PSBiZWZvcmVETilcclxuXHQvLyBcdFx0XHRcdHtcclxuXHQvLyBcdFx0XHRcdFx0YW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBzdWJOb2RlRmlyc3RETiwgYmVmb3JlRE4pO1xyXG5cclxuXHQvLyBcdFx0XHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHQvLyBcdFx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggdm4uZ2V0U3RhdHNDYXRlZ29yeSgpLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0Ly8gXHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHQvLyBcdFx0XHRcdH1cclxuXHJcblx0Ly8gXHRcdFx0XHRiZWZvcmVETiA9IHN1Yk5vZGVGaXJzdEROO1xyXG5cdC8vIFx0XHRcdH1cclxuXHJcblx0Ly8gXHRcdFx0Ly8gLy8gaWYgdGhlIHVwZGF0ZWQgb2xkIFZOIChvciBvbmUgb2YgaXRzIHN1Yi1ub2RlcykgZGVmaW5lcyBhIERPTSBub2RlIGFuZCBpdFxyXG5cdC8vIFx0XHRcdC8vIC8vIGlzIG5vdCBwb3NpdGlvbmVkIGJlZm9yZSB0aGUgY3VycmVudCBcImJlZm9yZUROXCIsIG1vdmUgaXQgdGhlcmUuIEl0IGFsc29cclxuXHQvLyBcdFx0XHQvLyAvLyBiZWNvbWVzIHRoZSBuZXcgRE9NIG5vZGUgYmVmb3JlIHdoaWNoIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcblx0Ly8gXHRcdFx0Ly8gbGV0IGZpcnN0RE4gPSBvbGRWTi5nZXRGaXJzdEROKCk7XHJcblx0Ly8gXHRcdFx0Ly8gaWYgKGZpcnN0RE4gIT09IG51bGwpXHJcblx0Ly8gXHRcdFx0Ly8ge1xyXG5cdC8vIFx0XHRcdC8vIFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgd2UgbmVlZCB0byBtb3ZlIG91ciBub2RlXHJcblx0Ly8gXHRcdFx0Ly8gXHRsZXQgbmV4dFN1Yk5vZGVWTkRpc3A6IFZORGlzcCA9IGkgPT09IGRpc3Auc3ViTm9kZURpc3BzLmxlbmd0aCAtIDFcclxuXHQvLyBcdFx0XHQvLyBcdFx0XHRcdFx0PyB1bmRlZmluZWQgOiBkaXNwLnN1Yk5vZGVEaXNwc1tpKzFdO1xyXG5cdC8vIFx0XHRcdC8vIFx0aWYgKHRoaXMuc2hvdWxkTW92ZVZOKCBzdWJOb2RlRGlzcCwgbmV4dFN1Yk5vZGVWTkRpc3ApIHx8IGZpcnN0RE4ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdC8vIFx0XHRcdC8vIFx0e1xyXG5cdC8vIFx0XHRcdC8vIFx0XHRhbmNob3JETi5pbnNlcnRCZWZvcmUoIGZpcnN0RE4sIGJlZm9yZUROKTtcclxuXHJcblx0Ly8gXHRcdFx0Ly8gXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0Ly8gXHRcdFx0Ly8gXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHZuLmdldFN0YXRzQ2F0ZWdvcnkoKSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdC8vIFx0XHRcdC8vIFx0XHQvLy8gI2VuZGlmXHJcblx0Ly8gXHRcdFx0Ly8gXHR9XHJcblxyXG5cdC8vIFx0XHRcdC8vIFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cdC8vIFx0XHRcdC8vIH1cclxuXHJcblx0Ly8gXHRcdFx0Ly8gdGhlIG9sZCBub2RlIHJlbWFpbnMgYXMgYSBzdWItbm9kZVxyXG5cdC8vIFx0XHRcdHZuLnN1Yk5vZGVzLmluc2VydFZOKCBvbGRWTik7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdFx0ZWxzZVxyXG5cdC8vIFx0XHR7XHJcblx0Ly8gXHRcdFx0bGV0IG5ld1ZOID0gc3ViTm9kZURpc3AubmV3Vk47XHJcblxyXG5cdC8vIFx0XHRcdC8vIHNpbmNlIHdlIGFscmVhZHkgZGVzdHJveWVkIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLCB0aGUgY29kZSBpc1xyXG5cdC8vIFx0XHRcdC8vIGlkZW50aWNhbCBmb3IgUmVwbGFjZSBhbmQgSW5zZXJ0IGFjdGlvbnNcclxuXHQvLyBcdFx0XHR0aGlzLmNyZWF0ZVBoeXNpY2FsKCBuZXdWTiwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHJcblx0Ly8gXHRcdFx0Ly8gaWYgdGhlIG5ldyBub2RlIGRlZmluZXMgYSBET00gbm9kZSwgaXQgYmVjb21lcyB0aGUgRE9NIG5vZGUgYmVmb3JlIHdoaWNoXHJcblx0Ly8gXHRcdFx0Ly8gbmV4dCBjb21wb25lbnRzIHNob3VsZCBiZSBpbnNlcnRlZC9tb3ZlZFxyXG5cdC8vIFx0XHRcdGxldCBmaXJzdEROOiBETiA9IG5ld1ZOLmdldEZpcnN0RE4oKTtcclxuXHQvLyBcdFx0XHRpZiAoZmlyc3RETiAhPT0gbnVsbClcclxuXHQvLyBcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHJcblx0Ly8gXHRcdFx0Ly8gdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZVxyXG5cdC8vIFx0XHRcdHZuLnN1Yk5vZGVzLmluc2VydFZOKCBuZXdWTik7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH1cclxuXHQvLyB9XHJcblxyXG5cclxuXHJcblx0Ly8gcHJpdmF0ZSBzaG91bGRNb3ZlVk4oIHZuRGlzcDogVk5EaXNwLCBuZXh0Vk5EaXNwOiBWTkRpc3ApOiBib29sZWFuXHJcblx0Ly8ge1xyXG5cdC8vIFx0aWYgKG5leHRWTkRpc3AgPT09IHVuZGVmaW5lZClcclxuXHQvLyBcdFx0cmV0dXJuIHZuRGlzcC5vbGRWTi5uZXh0ICE9PSBudWxsO1xyXG5cdC8vIFx0ZWxzZSBpZiAobmV4dFZORGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0Ly8gXHRcdHJldHVybiB2bkRpc3Aub2xkVk4ubmV4dCAhPT0gbmV4dFZORGlzcC5vbGRWTjtcclxuXHQvLyBcdGVsc2VcclxuXHQvLyBcdFx0cmV0dXJuIHRydWU7XHJcblx0Ly8gfVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IGNhbGxzIGFwcHJvcHJpYXRlIGxpZmUtY3ljbGUgbWV0aG9kcyBvbiB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5cdHByaXZhdGUgcG9zdFVwZGF0ZSggZGlzcDogVk5EaXNwKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN1Yk5vZGVEaXNwIG9mIGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgd2UgdXBkYXRlZCBzdWItbm9kZXMsIG5vdGlmeSB0aGVtIHRvb1xyXG5cdFx0XHRcdGlmIChzdWJOb2RlRGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdHRoaXMucG9zdFVwZGF0ZSggc3ViTm9kZURpc3ApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHN1Yk5vZGVEaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydClcclxuXHRcdFx0XHR0aGlzLnBvc3RDcmVhdGUoIHN1Yk5vZGVEaXNwLm5ld1ZOKTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdGRpc3Aub2xkVk4uZGlkVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgTm9kZSAke2Rpc3Aub2xkVk4ubmFtZX0gdGhyZXcgZXhjZXB0aW9uICcke2Vyci5tZXNzYWdlfScgaW4gZGlkVXBkYXRlYCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzaG91bGQgYmUgbW92ZWQgYmFzZWQgb24gaXRzIGRpc3Bvc2l0aW9uLlxyXG5cdC8vIC8vIENvbXBhcmVzIHR3byBjaGFpbnMgb2Ygbm9kZXMgKG9sZCBhbmQgbmV3KSBhbmQgZmlsbHMgdHdvIGFycmF5cyBmb3Igc3ViLW5vZGVzOlxyXG5cdC8vIC8vXHQtIGFycmF5IG9mIG5vZGUgZGlzcG9zaXRpb24gb2JqZWN0cyBjb3JyZXNwb25kaW5nIHRvIG5ldyBzdWItbm9kZXMuIEVhY2ggZGlzcG9zaXRpb25cclxuXHQvLyAvL1x0XHRpbmRpY2F0ZXMgd2hldGhlciB0aGUgbmV3IHN1Yi1ub2RlIHNob3VsZCBiZSBqdXN0IGluc2VydGVkIG9yIHdoZXRoZXIgaXQgc2hvdWxkIHVwZGF0ZVxyXG5cdC8vIC8vXHRcdHRoZSBvbGQgc3ViLW5vZGUuXHJcblx0Ly8gLy9cdC0gYXJyYXkgb2Ygb2xkIHN1Yi1ub2RlcyB3aGljaCBzaG91bGQgYmUgcmVtb3ZlZC5cclxuXHQvLyAvLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGludm9rZWQgd2l0aCB0aGUgZGlzcCBvYmplY3Qgd2hvc2Ugb2xkVk4gZmllbGQgaXMgbm9uLW51bGwuXHJcblx0Ly8gcHJpdmF0ZSBidWlsZFN1Yk5vZGVEaXNwb3NpdGlvbnMoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxuXHQvLyB7XHJcblx0Ly8gXHQvLyByZW5kZXIgdGhlIG5ldyBjb250ZW50O1xyXG5cdC8vIFx0bGV0IG5ld0NoYWluID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCBkaXNwLm9sZFZOLnJlbmRlcigpKTtcclxuXHJcblx0Ly8gXHQvLyBidWlsZCBtYXAgb2Ygb2xkIGtleWVkIG5vZGVzIGFuZCBhbiBhcnJheSBvZiBvbGQgbm9uLWtleWVkIG5vZGVzXHJcblx0Ly8gXHRsZXQga2V5ZWRNYXA6IE1hcDxhbnksVk4+ID0gbmV3IE1hcDxhbnksVk4+KCk7XHJcblx0Ly8gXHRsZXQgbm9uS2V5ZWRMaXN0OiBWTltdID0gW107XHJcblx0Ly8gXHRsZXQgb2xkQ2hhaW4gPSBkaXNwLm9sZFZOLnN1Yk5vZGVzO1xyXG5cdC8vIFx0Zm9yKCBsZXQgb2xkVk4gPSBvbGRDaGFpbi5maXJzdDsgb2xkVk4gIT09IG51bGw7IG9sZFZOID0gb2xkVk4ubmV4dClcclxuXHQvLyBcdHtcclxuXHQvLyBcdFx0aWYgKG9sZFZOLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdC8vIFx0XHRcdG5vbktleWVkTGlzdC5wdXNoKCBvbGRWTik7XHJcblx0Ly8gXHRcdGVsc2VcclxuXHQvLyBcdFx0XHRrZXllZE1hcC5zZXQoIG9sZFZOLmtleSwgb2xkVk4pO1xyXG5cdC8vIFx0fVxyXG5cclxuXHQvLyBcdC8vIGxvb3Agb3ZlciBuZXcgbm9kZXNcclxuXHQvLyBcdGxldCBub25LZXllZExpc3RMZW5ndGg6IG51bWJlciA9IG5vbktleWVkTGlzdC5sZW5ndGg7XHJcblx0Ly8gXHRsZXQgbm9uS2V5ZWRJbmRleDogbnVtYmVyID0gMDtcclxuXHQvLyBcdGZvciggbGV0IG5ld1ZOID0gbmV3Q2hhaW4uZmlyc3Q7IG5ld1ZOICE9PSBudWxsOyBuZXdWTiA9IG5ld1ZOLm5leHQpXHJcblx0Ly8gXHR7XHJcblx0Ly8gXHRcdGxldCBvbGRWTjogVk47XHJcblx0Ly8gXHRcdGlmIChuZXdWTi5rZXkgIT09IHVuZGVmaW5lZClcclxuXHQvLyBcdFx0e1xyXG5cdC8vIFx0XHRcdG9sZFZOID0ga2V5ZWRNYXAuZ2V0KCBuZXdWTi5rZXkpO1xyXG5cclxuXHQvLyBcdFx0XHQvLyBpZiB3ZSBmb3VuZCBvbGQgbm9kZSB0aGVuIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgbWFwIC0gdGhpcyB3YXkgYXRcclxuXHQvLyBcdFx0XHQvLyB0aGUgZW5kIG9mIHRoZSBsb29wIGFsbCBvbGQgbm9kZXMgcmVtYWluaW5nIGluIHRoZSBtYXAgc2hvdWxkIGJlIGRlbGV0ZWRcclxuXHQvLyBcdFx0XHRpZiAob2xkVk4gIT09IHVuZGVmaW5lZClcclxuXHQvLyBcdFx0XHRcdGtleWVkTWFwLmRlbGV0ZSggbmV3Vk4ua2V5KTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0XHRlbHNlIGlmIChub25LZXllZEluZGV4IDwgbm9uS2V5ZWRMaXN0TGVuZ3RoKVxyXG5cdC8vIFx0XHR7XHJcblx0Ly8gXHRcdFx0b2xkVk4gPSBub25LZXllZExpc3Rbbm9uS2V5ZWRJbmRleF07XHJcblx0Ly8gXHRcdFx0bm9uS2V5ZWRJbmRleCsrO1xyXG5cdC8vIFx0XHR9XHJcblxyXG5cdC8vIFx0XHRsZXQgc3ViTm9kZURpc3AgPSBuZXcgVk5EaXNwKCk7XHJcblx0Ly8gXHRcdHN1Yk5vZGVEaXNwLm5ld1ZOID0gbmV3Vk47XHJcblxyXG5cdC8vIFx0XHQvLyBieSBub3csIGlmIHdlIGRpZG4ndCBmaW5kIGFuIG9sZCBub2RlLCB0aGVuIHRoZSBuZXcgbm9kZSBzaG91bGQgYmUgaW5zZXJ0ZWQ7XHJcblx0Ly8gXHRcdC8vIG90aGVyd2lzZSwgd2UgZGVjaWRlIG9uIHdoZXRoZXIgdGhlIG5ldyBub2RlIHNob3VsZCBiZSB1c2VkIHRvIHVwZGF0ZSBvclxyXG5cdC8vIFx0XHQvLyByZXBsYWNlIHRoZSBvbGQgbm9kZVxyXG5cdC8vIFx0XHRpZiAob2xkVk4gPT09IHVuZGVmaW5lZClcclxuXHQvLyBcdFx0XHRzdWJOb2RlRGlzcC5hY3Rpb24gPSBWTkFjdGlvbi5JbnNlcnQ7XHJcblx0Ly8gXHRcdGVsc2UgaWYgKG9sZFZOLnR5cGUgPT09IG5ld1ZOLnR5cGUgJiYgb2xkVk4uaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk4pKVxyXG5cdC8vIFx0XHR7XHJcblx0Ly8gXHRcdFx0c3ViTm9kZURpc3AuYWN0aW9uID0gVk5BY3Rpb24uVXBkYXRlO1xyXG5cdC8vIFx0XHRcdHN1Yk5vZGVEaXNwLm9sZFZOID0gb2xkVk47XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdFx0ZWxzZVxyXG5cdC8vIFx0XHR7XHJcblx0Ly8gXHRcdFx0Ly8gd2UgYXJlIGhlcmUgaWYgdGhlIG5ldyBub2RlIHNob3VsZCByZXBsYWNlIHRoZSBvbGQgb25lLiBXZSBhZGQgdGhlIG9sZCBub2RlIHRvXHJcblx0Ly8gXHRcdFx0Ly8gdGhlIGxpc3Qgb2YgdGhvc2UgdG8gYmUgcmVtb3ZlZCBhbmQgaW5kaWNhdGVcclxuXHQvLyBcdFx0XHRkaXNwLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pO1xyXG5cdC8vIFx0XHRcdHN1Yk5vZGVEaXNwLmFjdGlvbiA9IFZOQWN0aW9uLkluc2VydDtcclxuXHQvLyBcdFx0fVxyXG5cclxuXHQvLyBcdFx0ZGlzcC5zdWJOb2RlRGlzcHMucHVzaCggc3ViTm9kZURpc3ApO1xyXG5cdC8vIFx0fVxyXG5cclxuXHQvLyBcdC8vIG9sZCBrZXllZCBub2RlcyByZW1haW5pbmcgaW4gdGhlIG1hcCB3aWxsIGJlIHVubW91bnRlZCBiZWNhdXNlIHRoZXNlIGFyZSB0aGUgb2xkIG5vZGVzXHJcblx0Ly8gXHQvLyBmb3Igd2hpY2ggdGhlcmUgd2VyZSBubyBuZXcgbm9kZXMgd2l0aCB0aGUgc2FtZSBrZXkuXHJcblx0Ly8gXHRmb3IoIGxldCBvbGRWTiBvZiBrZXllZE1hcC52YWx1ZXMoKSlcclxuXHQvLyBcdFx0ZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKTtcclxuXHJcblx0Ly8gXHQvLyBvbGQgbm9uLWtleWVkIG5vZGVzIGZyb20gdGhlIGN1cnJlbnQgaW5kZXggdG8gdGhlIGVuZCBvZiB0aGUgbGlzdCB3aWxsIGJlIHVubW91bnRlZFxyXG5cdC8vIFx0Zm9yKCBsZXQgaSA9IG5vbktleWVkSW5kZXg7IGkgPCBub25LZXllZExpc3RMZW5ndGg7IGkrKylcclxuXHQvLyBcdFx0ZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG5vbktleWVkTGlzdFtpXSk7XHJcblx0Ly8gfVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnRlbnQgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUuXHJcblx0cHJpdmF0ZSBjb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gYW4gZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgZXJyb3JVSTogUm9vdEVycm9yVUkgPSBudWxsO1xyXG5cclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGFuIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGZyb20gZGVzY2VuZGFuZCBub2Rlcy5cclxuXHRwcml2YXRlIHdhaXRpbmdVSTogUm9vdFdhaXRpbmdVSSA9IG51bGw7XHJcblxyXG5cdC8vIFNldCBvZiBwcm9taXNlcyB0aHJvd24gYnkgZGVzY2VuZGFudCBub2RlcyBhbmQgbm90IHlldCBmdWxmaWxsZWQuXHJcblx0cHJpdmF0ZSB0aHJvd25Qcm9taXNlcyA9IG5ldyBTZXQ8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2V0cyBvZiB2aXJ0dWFsIG5vZGVzIHRoYXQgc3Vic2NyaWJlZCB0byB0aGlzIHNlcnZpY2UuXHJcblx0cHJpdmF0ZSBzZXJ2aWNlSW5mb3MgPSBuZXcgTWFwPHN0cmluZyxTZXJ2aWNlSW5mbz4oKTtcclxuXHJcblx0Ly8gTWFwIG9mIG5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb24gdGhlIG5leHQgVUkgY3ljbGUuIFdlIHVzZSBNYXAgaW4gb3JkZXIgdG8gbm90IGluY2x1ZGVcclxuXHQvLyB0aGUgc2FtZSBub2RlIG1vcmUgdGhhbiBvbmNlIC0gd2hpY2ggY2FuIGhhcHBlbiBpZiB0aGUgbm9kZSdzIHJlcXVlc3RVcGRhdGUgbWV0aG9kIGlzIGNhbGxlZFxyXG5cdC8vIG1vcmUgdGhhbiBvbmNlIGR1cmluZyBhIHNpbmdsZSBydW4gKGUuZy4gZHVyaW5nIGV2ZW50IHByb2Nlc3NpbmcpLiBUaGUgdmFsdWUgbWFwcGVkIHRvIHRoZVxyXG5cdC8vIG5vZGUgZGV0ZXJtaW5lcyB0aGUgb3BlcmF0aW9uIHRvIGJlIHBlcmZvcm1lZDpcclxuXHQvL1x0LSB1bmRlZmluZWQgLSB0aGUgbm9kZSB3aWxsIGJlIHVwZGF0ZWRcclxuXHQvL1x0LSBudWxsIC0gdGhlIG5vZGUgd2lsbCBiZSBkZWxldGVkIGZyb20gaXRzIHBhcmVudFxyXG5cdC8vXHQtIGFueXRoaW5nIGVsc2UgLSB0aGUgbm9kZSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhpcyBuZXcgY29udGVudFxyXG5cdHByaXZhdGUgdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHJcblx0Ly8gU2V0IG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGJlZm9yZVxyXG5cdC8vIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYXJlIHVwZGF0ZWQuXHJcblx0cHJpdmF0ZSBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBTZXQ8bWltLlNjaGVkdWxlZEZ1bmNUeXBlPigpO1xyXG5cclxuXHQvLyBTZXQgb2YgZnVuY3Rpb25zIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgdXBvbiBhIG5ldyBhbmltYXRpb24gZnJhbWUgYWZ0ZXJcclxuXHQvLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLlxyXG5cdHByaXZhdGUgY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBTZXQ8bWltLlNjaGVkdWxlZEZ1bmNUeXBlPigpO1xyXG5cclxuXHQvLyBIYW5kbGUgb2YgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IChpbiBjYXNlIGl0IHNob3VsZCBiZSBjYW5jZWxlZCkuXHJcblx0cHJpdmF0ZSBzY2hlZHVsZWRGcmFtZUhhbmRsZTogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlci5cclxuXHRwcml2YXRlIHNjaGVkdWxlclN0YXRlOiBTY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLklkbGU7XHJcblxyXG5cdC8vIE51bWJlciB0aGF0IHNlcnZlcyBhcyBhIHVuaXF1ZSBJRCBvZiBhbiB1cGRhdGUgY3ljbGUuIEVhY2ggdXBkYXRlIGN5Y2xlIHRoZSByb290IG5vZGVcclxuXHQvLyBpbmNyZW1lbnRzIHRoaXMgbnVtYmVyLiBFYWNoIG5vZGUgYmVpbmcgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlIGlzIGFzc2lnbmVkIHRoaXMgbnVtYmVyLlxyXG5cdC8vIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIHdoZW4gYm90aCBhIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmVcclxuXHQvLyB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5cdHByaXZhdGUgY3VycmVudFRpY2s6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE5vZGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC4gRHVyaW5nIGNyZWF0aW9uIGFuZCB1cGRhdGluZyBwcm9jZXNzLCB0aGlzIHZhbHVlIGlzIHNldFxyXG5cdC8vIGV2ZXJ5IHRpbWUgd2UgcmVjdXJzZSBpbnRvIHN1Yi1ub2RlcyBhbmQgcmVzdG9yZWQgd2hlbiB3ZSByZXR1cm4gYmFjayB0byB0aGUgbm9kZS4gSWZcclxuXHQvLyBkdXJpbmcgY3JlYXRpb24gb3IgdXBkYXRpbmcgcHJvY2VzcyBhbiBleGNlcHRpb24gaXMgdGhyb3duIGFuZCBpcyBjYXVnaHQgYnkgc29tZSB1cHBlclxyXG5cdC8vIGxldmVsIG5vZGUsIHRoaXMgdmFsdWUgd2lsbCBzdGlsbCBwb2ludCBhdCB0aGUgbm9kZSB0aGF0IGNhdXNlZCB0aGUgZXhjZXB0aW9uLlxyXG5cdHByaXZhdGUgY3VycmVudFZOOiBWTiA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN0YXRlIG9mIHRoZSBzY2hlZHVsZXIgaW5kaWNhdGluZyBpbiB3aGF0IHBoYXNlIG9mIHRoZSB1cGRhdGUgY3ljbGUgd2UgY3VycmVudGx5IHJlc2lkZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmVudW0gU2NoZWR1bGVyU3RhdGVcclxue1xyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgbm90IHdpdGhpbiB0aGUgdXBkYXRlIGN5Y2xlXHJcblx0SWRsZSA9IDAsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBiZWZvcmUgdXBkYXRpbmcgbm9kZXNcclxuXHRCZWZvcmVVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgdXBkYXRpbmcgbm9kZXNcclxuXHRVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBhZnRlciB1cGRhdGluZyBub2Rlc1xyXG5cdEFmdGVyVXBkYXRlLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBrZXB0IGJ5IFJvb3QgdmlydHVhbCBub2RlIGFib3V0IHNlcnZpY2UgcHVibGljYXRpb25zIGFuZCBzdWJzY3JpcHRpb25zLiBUaGUgc2FtZVxyXG4vLyBzZXJ2aWNlIGNhbiBiZSBwdWJsaXNoZWQgYW5kIHN1YnNjcmliZWQgdG8gYnkgbXVsdGlwbGUgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBTZXJ2aWNlSW5mb1xyXG57XHJcblx0cHVibGlzaGluZ1ZOczogU2V0PFZOPiA9IG5ldyBTZXQ8Vk4+KCk7XHJcblx0c3Vic2NyaWJlZFZOczogU2V0PFZOPiA9IG5ldyBTZXQ8Vk4+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdhdGhlcmluZyB1cGRhdGUgc3RhdGlzdGljc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIENhdGVnb3JpZXMgb2YgY2hhbmdlZCBlbnRpdGllcyB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC5cclxuZXhwb3J0IGVudW0gU3RhdHNDYXRlZ29yeVxyXG57XHJcblx0Q29tcCxcclxuXHRFbG0sXHJcblx0VGV4dCxcclxuXHRBdHRyLFxyXG5cdEV2ZW50LFxyXG59XHJcblxyXG5cclxuXHJcbi8vIEFjdGlvbnMgb24gYW4gZW50aXR5IHRvIGdhdGhlciBzdGF0aXN0aWNzIGFib3V0LiBOb3QgYWxsIGFjdGlvbnMgYXJlIHJlbGV2YW50IGZvciBhbGxcclxuLy8gY2F0ZWdvcmllczpcclxuLy9cdC0gVXBkYXRlZCBkb2Vzbid0IGV4aXN0IGZvciBjb21wb25lbnRzIGFuZCBmb3IgZWxlbWVudHNcclxuLy9cdC0gTW92ZWQgZG9lc24ndCBleGlzdCBmb3IgYXR0cmlidXRlc1xyXG4vL1x0LSBSZW5kZXJlZCBvbmx5IGV4aXN0cyBmb3IgY29tcG9uZW50c1xyXG5leHBvcnQgZW51bSBTdGF0c0FjdGlvblxyXG57XHJcblx0QWRkZWQ9IDEsXHJcblx0RGVsZXRlZCA9IDIsXHJcblx0VXBkYXRlZCA9IDMsXHJcblx0TW92ZWQgPSA0LFxyXG5cdFJlbmRlcmVkID0gNSxcclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9yYWdlIGZvciBhIG51bWJlciBvZiBlYWNoIGFjdGlvbiB1bmRlciBhIGNhdGVnb3J5LlxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlTdGF0c1xyXG57XHJcblx0YWRkZWQ6IG51bWJlciA9IDA7XHJcblx0ZGVsZXRlZDogbnVtYmVyID0gMDtcclxuXHR1cGRhdGVkOiBudW1iZXIgPSAwO1xyXG5cdG1vdmVkOiBudW1iZXIgPSAwO1xyXG5cdHJlbmRlcmVkOiBudW1iZXIgPSAwO1xyXG5cclxuXHRwdWJsaWMgaGFzU29tZURhdGEoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmFkZGVkIHx8IHRoaXMuZGVsZXRlZCB8fCB0aGlzLnVwZGF0ZWQgfHwgdGhpcy5tb3ZlZCB8fCB0aGlzLnJlbmRlcmVkO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGV0YWlsZWRTdGF0c1xyXG57XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHN0YXJ0VGltZTogbnVtYmVyO1xyXG5cdGR1cmF0aW9uOiBudW1iZXI7XHJcblx0Y29tcDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0ZWxtOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHR0ZXh0OiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRhdHRyOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRldmVudDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIG5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhcnQoKVxyXG5cdHtcclxuXHRcdHRoaXMuZHVyYXRpb24gPSAwLjA7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RvcCggcHJpbnRTdW1tYXJ5OiBib29sZWFuID0gdHJ1ZSlcclxuXHR7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcclxuXHJcblx0XHRpZiAocHJpbnRTdW1tYXJ5KVxyXG5cdFx0XHRjb25zb2xlLmxvZyggdGhpcy50b1N0cmluZygpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gaW5jcmVtZW50cyB0aGVudW1iZXIgb2YgdGltZXMgdGhlIGdpdmVuIGFjdGlvbiB3YXMgcGVyZm9ybWVkIG9uIGFuIGVudGl0eSBvZiBhIGdpdmVuXHJcblx0Ly8gY2F0ZWdvcnkuIElmIHRoZSBlbnRpdHkgaXMgYSBET00gZW50aXR5IChhcyBvcHBvc2VkIHRvIGEgY29tcG9uZW50KSwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gdG90YWwgbnVtYmVyIGlzIGFsc28gaW5jcmVtZW50ZWQuXHJcblx0cHVibGljIGxvZyggY2F0ZWdvcnk6IFN0YXRzQ2F0ZWdvcnksIGFjdGlvbjogU3RhdHNBY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGNhdGVnb3J5U3RhdHM6IENhdGVnb3J5U3RhdHM7XHJcblx0XHRzd2l0Y2goIGNhdGVnb3J5KVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuQ29tcDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuY29tcDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5FbG06IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmVsbTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5UZXh0OiBjYXRlZ29yeVN0YXRzID0gdGhpcy50ZXh0OyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkF0dHI6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmF0dHI7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuRXZlbnQ6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmV2ZW50OyBicmVhaztcclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaCggYWN0aW9uKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLkFkZGVkOiBjYXRlZ29yeVN0YXRzLmFkZGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLkRlbGV0ZWQ6IGNhdGVnb3J5U3RhdHMuZGVsZXRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5VcGRhdGVkOiBjYXRlZ29yeVN0YXRzLnVwZGF0ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uTW92ZWQ6IGNhdGVnb3J5U3RhdHMubW92ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uUmVuZGVyZWQ6IGNhdGVnb3J5U3RhdHMucmVuZGVyZWQrKzsgYnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGAke3RoaXMubmFtZX0gJHt0aGlzLmR1cmF0aW9uLnRvRml4ZWQoMil9bXMgYCArXHJcblx0XHRcdFx0dGhpcy5nZXRDb21wU3RyaW5nKCkgKyB0aGlzLmdldEVsbVN0cmluZygpICsgdGhpcy5nZXRUZXh0U3RyaW5nKCkgK1xyXG5cdFx0XHRcdHRoaXMuZ2V0QXR0clN0cmluZygpICsgdGhpcy5nZXRFdmVudFN0cmluZygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNvbXBvbmVudCBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRDb21wU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5jb21wLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmNvbXAuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuY29tcC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjcwRVwiLCB0aGlzLmNvbXAucmVuZGVyZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMuY29tcC5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBjb21wKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZWxlbWVudCBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRFbG1TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmVsbS5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5lbG0uYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuZWxtLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMuZWxtLm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGVsbSgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRleHQgbm9kZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRUZXh0U3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy50ZXh0Lmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLnRleHQuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMudGV4dC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLnRleHQudXBkYXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy50ZXh0Lm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYHRleHQoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhdHRyaWJ1dGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0QXR0clN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuYXR0ci5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5hdHRyLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmF0dHIuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy5hdHRyLnVwZGF0ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgYXR0cigke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGF0dHJpYnV0ZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRFdmVudFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZXZlbnQuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuZXZlbnQuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuZXZlbnQuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy5ldmVudC51cGRhdGVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGV2ZW50KCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIHNpZ24gYW5kIHZhbHVlIHRvIHRoZSBnaXZlbiBzdHJpbmcgYnV0IG9ubHkgaWYgdGhlIHZhbHVlIGlzIG5vbi16ZXJvLlxyXG5cdHByaXZhdGUgZ2V0VmFsU3RyaW5nKCBzOiBzdHJpbmcsIHNpZ246IHN0cmluZywgdmFsOiBudW1iZXIpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodmFsID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIChzLmxlbmd0aCA+IDAgPyBcIiBcIiA6IFwiXCIpICsgc2lnbiArIHZhbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBzdGF0czogRGV0YWlsZWRTdGF0cztcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN2Z0VsbUluZm8gdHlwZSBkZWZpbmVzIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gU1ZHIGVsZW1lbnQuIFRoaXNcclxuLy8gaW5mb3JtYXRpb24gY2FuIGJlIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbi8vXHQtIHN0cmluZyAtIGFjdHVhbCBuYW1lIHRvIHVzZSBmb3IgdGhlIGVsZW1lbnQuIFNvbWUgU1ZHIGVsZW1lbnRzIGhhdmUgbmFtZXMgdGhhdCBjYW5ub3QgYmUgdXNlZFxyXG4vL1x0XHRpbiBKWCBkaXJlY3RseSAoZS5nLiBiZWNhdXNlIG9mIGh5cGhlbiBsaWtlIGluIFwiY29sb3ItcHJvZmlsZVwiKS4gSW4gdGhpcyBjYXNlIHRoZSBzdHJpbmdcclxuLy9cdFx0dmFsdWUgd2lsbCBiZSB0aGUgYWN0dWFsIGVsZW1lbnQgbmFtZSB0byBwdXQgaW50byBIVE1MIGRvY3VtZW50LCB3aGlsZSBKU1ggd2lsbCBiZSB1c2luZ1xyXG4vL1x0XHRhIGNhbWVsLWZvcm1hdHRlZCBuYW1lIChlLmcuIFwiY29sb3JQcm9maWxlXCIpLlxyXG4vL1x0LSBib29sZWFuIC0gZmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhlIGVsZW1lbnQgaXMgXCJkdWFsLXB1cnBvc2VcIjsgdGhhdCBpcywgZWxlbWVudCB3aXRoIHRoaXNcclxuLy9cdFx0bmFtZSBjYW4gYmUgdXNlZCBhcyBlaXRoZXIgSFRNTCBvciBTVkcgZWxlbWVudC5cclxuLy9cdC0gdHVwbGUgb2YgdHdvIGVsZW1lbnRzIC0gc3RyaW5nIGFuZCBib29sZWFuIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFib3ZlIGl0ZW1zLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgU3ZnRWxtSW5mbyA9IGJvb2xlYW4gfCBzdHJpbmcgfCBbc3RyaW5nLCBib29sZWFuXTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1zIGNsYXNzIGNvbnRhaW5zIHByb3BlcnRpZXMgd2l0aCBuYW1lcyB1c2VkIHRvIGRlZmluZSBTVkcgZWxlbWVudHMgaW4gSlNYLiBXaGVuXHJcbi8vIHdlIG5lZWQgdG8gY3JlYXRlIGFuIGVsZW1lbnQsIHdlIGxvb2t1cCB0aGUgcHJvdmlkZWQgdGFnIG5hbWUgYW5kIGlmIHdlIGZpbmQgaXQgaW4gdGhpcyBjbGFzc1xyXG4vLyB3ZSB1c2UgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIHdpdGggdGhlIHByb3BlciBTVkcgbmFtZXNwYWNlIHN0cmluZy4gVmFsdWVzIG9mIHRoZXNlIHByb3BlcnRpZXNcclxuLy8gYXJlIFN2Z0VsbUluZm8gdmFsdWVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFN2Z0VsbXNcclxue1xyXG5cdC8vIE5hbWVzcGFjZSB1c2VkIHRvIGNyZWF0ZSBTVkcgZWxlbWVudHMuXHJcblx0cHVibGljIHN0YXRpYyBuYW1lc3BhY2U6IHN0cmluZyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuXHJcblxyXG5cclxuXHQvLyBSZWdpc3RlcnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIFNWRyB0YWdcclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyKCB0YWdOYW1lOiBzdHJpbmcsIGluZm86IFN2Z0VsbUluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0U3ZnRWxtcy5pbmZvc1t0YWdOYW1lXSA9IGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gdGFnIG5hbWUgY2FuIGJlIHVzZWQgYXMgYW4gU1ZHIGVsZW1lbnQgbmFtZS5cclxuXHRwdWJsaWMgc3RhdGljIGlzU3ZnRWxtKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRhZ05hbWUgaW4gU3ZnRWxtcy5pbmZvcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBpbmZvcm1hdGlvbiBvYmplY3QgZm9yIHRoZSBnaXZlbiB0YWcgbmFtZS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFN2Z0VsbUluZm8oIHRhZ05hbWU6IHN0cmluZyk6IFN2Z0VsbUluZm8gfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRyZXR1cm4gU3ZnRWxtcy5pbmZvc1t0YWdOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBpbmZvcm1hdGlvbiBvYmplY3QgaGFzIHRoZSBcImR1YWwtcHVycG9zZVwiIGZsYWcgc2V0LlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNEdWFsUHVycG9zZSggaW5mbzogU3ZnRWxtSW5mbyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAxID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzFdIDogZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIiA/IGZhbHNlIDogaW5mbyBhcyBib29sZWFuO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGlzIGEgXCJkdWFsLXB1cnBvc2VcIiBlbGVtZW50OyB0aGF0IGlzIGNhbiBiZSBlaXRoZXJcclxuXHQvLyBIVE1MIGFuZCBTVkcgZWxlbWVudC5cclxuXHRwdWJsaWMgc3RhdGljIGlzVGFnRHVhbFB1cnBvc2UoIHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU3ZnRWxtSW5mbyA9IFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0XHRyZXR1cm4gaW5mbyA/IFN2Z0VsbXMuaXNEdWFsUHVycG9zZSggaW5mbykgOiBmYWxzZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWN0dWFsIG5hbWUgdG8gYmUgdXNlZCBiYXNlZCBvbiB0aGUgaW5mb3JtYXRpb24gb2JqZWN0IGFuZCB0aGUgdGFnIG5hbWVcclxuXHRwdWJsaWMgc3RhdGljIGdldEVsbU5hbWUoIGluZm86IFN2Z0VsbUluZm8sIHRhZ05hbWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KCBpbmZvKSlcclxuXHRcdFx0cmV0dXJuIChpbmZvIGFzIEFycmF5PGFueT4pLmxlbmd0aCA+IDAgPyAoaW5mbyBhcyBbc3RyaW5nLCBib29sZWFuXSlbMF0gOiB0YWdOYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBpbmZvIGFzIHN0cmluZyA6IHRhZ05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgdGhlIGdpdmVuIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lRm9yVGFnKCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU3ZnRWxtSW5mbyA9IFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0XHRyZXR1cm4gaW5mbyA/IFN2Z0VsbXMuZ2V0RWxtTmFtZSggaW5mbywgdGFnTmFtZSkgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBtYXBzIFNWRyBlbGVtZW50IG5hbWVzIHRvIFN2Z0VsbUluZm8uXHJcblx0cHJpdmF0ZSBzdGF0aWMgaW5mb3M6IHtbZWxtTmFtZTpzdHJpbmddOiBTdmdFbG1JbmZvfSA9XHJcblx0e1xyXG5cdFx0c3ZnOiBmYWxzZSxcclxuXHJcblx0XHRhOiB0cnVlLFxyXG5cdFx0YW5pbWF0ZTogZmFsc2UsXHJcblx0XHRhbmltYXRlTW90aW9uOiBmYWxzZSxcclxuXHRcdGFuaW1hdGVUcmFuc2Zvcm06IGZhbHNlLFxyXG5cclxuXHRcdGNpcmNsZTogZmFsc2UsXHJcblx0XHRjbGlwUGF0aDogZmFsc2UsXHJcblx0XHRjb2xvclByb2ZpbGU6IFwiY29sb3ItcHJvZmlsZVwiLFxyXG5cclxuXHRcdGRlZnM6IGZhbHNlLFxyXG5cdFx0ZGVzYzogZmFsc2UsXHJcblx0XHRkaXNjYXJkOiBmYWxzZSxcclxuXHJcblx0XHRlbGxpcHNlOiBmYWxzZSxcclxuXHJcblx0XHRmZUJsZW5kOiBmYWxzZSxcclxuXHRcdGZlQ29sb3JNYXRyaXg6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb25lbnRUcmFuc2ZlcjogZmFsc2UsXHJcblx0XHRmZUNvbXBvc2l0ZTogZmFsc2UsXHJcblx0XHRmZUNvbnZvbHZlTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlRGlmZnVzZUxpZ2h0aW5nOiBmYWxzZSxcclxuXHRcdGZlRGlzcGxhY2VtZW50TWFwOiBmYWxzZSxcclxuXHRcdGZlRGlzdGFudExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlRHJvcFNoYWRvdzogZmFsc2UsXHJcblx0XHRmZUZsb29kOiBmYWxzZSxcclxuXHRcdGZlRnVuY0E6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jQjogZmFsc2UsXHJcblx0XHRmZUZ1bmNHOiBmYWxzZSxcclxuXHRcdGZlRnVuY1I6IGZhbHNlLFxyXG5cdFx0ZmVHYXVzc2lhbkJsdXI6IGZhbHNlLFxyXG5cdFx0ZmVJbWFnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlOiBmYWxzZSxcclxuXHRcdGZlTWVyZ2VOb2RlOiBmYWxzZSxcclxuXHRcdGZlTW9ycGhvbG9neTogZmFsc2UsXHJcblx0XHRmZU9mZnNldDogZmFsc2UsXHJcblx0XHRmZVBvaW50TGlnaHQ6IGZhbHNlLFxyXG5cdFx0ZmVTcGVjdWxhckxpZ2h0aW5nOiBmYWxzZSxcclxuXHRcdGZlU3BvdExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlVGlsZTogZmFsc2UsXHJcblx0XHRmZVR1cmJ1bGVuY2U6IGZhbHNlLFxyXG5cdFx0ZmlsdGVyOiBmYWxzZSxcclxuXHRcdGZvcmVpZ25PYmplY3Q6IGZhbHNlLFxyXG5cclxuXHRcdGc6IGZhbHNlLFxyXG5cclxuXHRcdGhhdGNoOiBmYWxzZSxcclxuXHRcdGhhdGNocGF0aDogZmFsc2UsXHJcblxyXG5cdFx0aW1hZ2U6IGZhbHNlLFxyXG5cclxuXHRcdGxpbmU6IGZhbHNlLFxyXG5cdFx0bGluZWFyR3JhZGllbnQ6IGZhbHNlLFxyXG5cclxuXHRcdG1hcmtlcjogZmFsc2UsXHJcblx0XHRtYXNrOiBmYWxzZSxcclxuXHRcdG1ldGFkYXRhOiBmYWxzZSxcclxuXHRcdG1wYXRoOiBmYWxzZSxcclxuXHJcblx0XHRwYXRoOiBmYWxzZSxcclxuXHRcdHBhdHRlcm46IGZhbHNlLFxyXG5cdFx0cG9seWdvbjogZmFsc2UsXHJcblx0XHRwb2x5bGluZTogZmFsc2UsXHJcblxyXG5cdFx0cmFkaWFsR3JhZGllbnQ6IGZhbHNlLFxyXG5cdFx0cmVjdDogZmFsc2UsXHJcblxyXG5cdFx0c2NyaXB0OiB0cnVlLFxyXG5cdFx0c2V0OiBmYWxzZSxcclxuXHRcdHNvbGlkY29sb3I6IGZhbHNlLFxyXG5cdFx0c3RvcDogZmFsc2UsXHJcblx0XHRzdHlsZTogdHJ1ZSxcclxuXHRcdHN3aXRjaDogZmFsc2UsXHJcblx0XHRzeW1ib2w6IGZhbHNlLFxyXG5cclxuXHRcdHRleHQ6IGZhbHNlLFxyXG5cdFx0dGV4dFBhdGg6IGZhbHNlLFxyXG5cdFx0dGl0bGU6IHRydWUsXHJcblx0XHR0ZXh0U3BhbjogZmFsc2UsXHJcblxyXG5cdFx0dXNlOiBmYWxzZSxcclxuXHJcblx0XHR2aWV3OiBmYWxzZSxcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgdGV4dCBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHRWTiBleHRlbmRzIFZOIGltcGxlbWVudHMgbWltLklUZXh0Vk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCB0ZXh0OiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIoIG1pbS5WTlR5cGUuVGV4dClcclxuXHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cclxuXHRcdC8vIG5vZGUgbmFtZSBpcyAjdGV4dFxyXG5cdFx0dGhpcy5uYW1lID0gXCIjdGV4dFwiO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHVibGljIGdldCBUZXh0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnRleHQ7IH1cclxuXHRwdWJsaWMgZ2V0IFRleHROb2RlKCk6IFRleHQgeyByZXR1cm4gdGhpcy5kbjsgfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5UZXh0OyB9XHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSB2aXJ0dWFsIG5vZGUncyBjb250ZW50IGludG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZG4gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdGhpcy50ZXh0KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBjb250ZW50IGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5kbiA9IHVuZGVmaW5lZDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIG9uZSB0ZXh0IG5vZGUgY2FuIGFsd2F5cyB1cGRhdGUgYW5vdGhlciB0ZXh0IG5vZGVcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyB0ZXh0IG5vZGVzIGRvbid0IGhhdmUgc3ViLW5vZGVzXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQ6IHRoaXMudGV4dCAhPT0gKG5ld1ZOIGFzIFRleHRWTikudGV4dCwgc2hvdWxkUmVuZGVyOiBmYWxzZSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmRuLm5vZGVWYWx1ZSA9IHRoaXMudGV4dCA9IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQ7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGdldE93bkROKCk6IEROXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZG47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRleHQgZm9yIGEgc2ltcGxlIHRleHQgbm9kZS5cclxuXHR0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8vIFRleHQgRE9NIG5vZGVcclxuXHRkbjogVGV4dDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtJRXZlbnRTbG90LCBFdmVudFNsb3R9IGZyb21cIi4vRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBDbGFzc2VzIGFic3RyYWN0IGNsYXNzIHByb3ZpZGVzIHVzZWZ1bCBzdGF0aWMgZnVuY3Rpb25zIGZvciB3b3JraW5nIHdpdGggY2xhc3MgcHJvcGVydGllcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbGFzc2VzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIGNsYXNzIHByb3BlcnRpZXMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcblx0Ly8gcmV0dXJucyBhIHN0cmluZyBvciB1bmRlZmluZWQgLSBpZiBhbGwgY2xhc3NOYW1lcyB3ZXJlIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgc3RhdGljIE1lcmdlQ2xhc3NlcyggLi4uY2xhc3NOYW1lczogKHN0cmluZyB8IHN0cmluZ1tdKVtdKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHJlc0NsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuXHRcdGZvciggbGV0IGNsYXNzTmFtZSBvZiBjbGFzc05hbWVzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIWNsYXNzTmFtZSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdC8vIHBhcnNlIHRoZSBjbGFzcyBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmdcclxuXHRcdFx0bGV0IGNsYXNzTmFtZUFzU3RyaW5nOiBzdHJpbmcgPSB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiXHJcblx0XHRcdFx0XHQ/IGNsYXNzTmFtZSBhcyBzdHJpbmdcclxuXHRcdFx0XHRcdDogQ2xhc3Nlcy5BcnJheVRvU3RyaW5nKCBjbGFzc05hbWUgYXMgc3RyaW5nW10pO1xyXG5cclxuXHRcdFx0aWYgKHJlc0NsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc0NsYXNzTmFtZSA9IFwiXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXNDbGFzc05hbWUgKz0gXCIgXCI7XHJcblxyXG5cdFx0XHRyZXNDbGFzc05hbWUgKz0gY2xhc3NOYW1lQXNTdHJpbmc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc0NsYXNzTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBjbGFzcyBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLlxyXG5cdHB1YmxpYyBzdGF0aWMgQXJyYXlUb1N0cmluZyggY2xhc3NOYW1lczogc3RyaW5nW10pOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gY2xhc3NOYW1lcy5qb2luKCBcIiBcIik7XHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN0eWxlcyBhYnN0cmFjdCBjbGFzcyBwcm92aWRlcyB1c2VmdWwgc3RhdGljIGZ1bmN0aW9ucyBmb3Igd29ya2luZyB3aXRoIHN0eWxlIHByb3BlcnRpZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcblx0Ly8gYWx3YXlzIHJldHVybnMgYW4gb2JqZWN0IC0gZXZlbiBpZiBlbXB0eVxyXG5cdHB1YmxpYyBzdGF0aWMgTWVyZ2VTdHlsZXMoIC4uLnN0eWxlczogbWltLlN0eWxlUHJvcFR5cGVbXSk6IG1pbS5TdHlsZVByb3BUeXBlXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGFuIGVtcHR5IG9iamVjdCBmb3IgYWNjdW11bGF0aW5nIHN0eWxlIHByb3BlcnRpZXNcclxuXHRcdGxldCByZXNTdHlsZTogbWltLlN0eWxlUHJvcFR5cGUgPSB7fTtcclxuXHRcdFN0eWxlcy5NZXJnZVN0eWxlc1RvKCByZXNTdHlsZSwgLi4uc3R5bGVzKTtcclxuXHRcdHJldHVybiByZXNTdHlsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZmlyc3Qgb25lLlxyXG5cdHB1YmxpYyBzdGF0aWMgTWVyZ2VTdHlsZXNUbyggcmVzU3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlLCAuLi5zdHlsZXM6IChtaW0uU3R5bGVQcm9wVHlwZSB8IHN0cmluZylbXSApOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3R5bGUgb2Ygc3R5bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXN0eWxlKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0Ly8gcGFyc2UgdGhlIHN0eWxlIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZ1xyXG5cdFx0XHRsZXQgc3R5bGVPYmo6IG1pbS5TdHlsZVByb3BUeXBlID0gdHlwZW9mIHN0eWxlID09PSBcIm9iamVjdFwiXHJcblx0XHRcdFx0XHQ/IHN0eWxlIGFzIG1pbS5TdHlsZVByb3BUeXBlXHJcblx0XHRcdFx0XHQ6IFN0eWxlcy5QYXJzZVN0eWxlU3RyaW5nKCBzdHlsZSBhcyBzdHJpbmcpO1xyXG5cclxuXHRcdFx0Ly8gY29weSBhbGwgcHJvcGVydGllcyBkZWZpbmVkIGluIHRlaCBjdXJyZW50IHN0eWxlIG9iamVjdCB0byBvdXIgcmVzdWx0YW50IG9iamVjdFx0XHRcdFxyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZU9iailcclxuXHRcdFx0XHRyZXNTdHlsZVtwcm9wTmFtZV0gPSBzdHlsZU9ialtwcm9wTmFtZV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy5cclxuXHRwdWJsaWMgc3RhdGljIFBhcnNlU3R5bGVTdHJpbmcoIHM6IHN0cmluZyk6IG1pbS5TdHlsZVByb3BUeXBlXHJcblx0e1xyXG5cdFx0aWYgKCFzKVxyXG5cdFx0XHRyZXR1cm4ge307XHJcblxyXG5cdFx0bGV0IHJldFN0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHt9O1xyXG5cclxuXHRcdGxldCBlbG1zOiBzdHJpbmdbXSA9IHMuc3BsaXQoXCI7XCIpO1xyXG5cdFx0Zm9yKCBsZXQgZWxtIG9mIGVsbXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwYWlyOiBzdHJpbmdbXSA9IGVsbS5zcGxpdCggXCI6XCIpO1xyXG5cdFx0XHRpZiAoIXBhaXIgfHwgcGFpci5sZW5ndGggPT09IDAgfHwgcGFpci5sZW5ndGggPiAyKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0cmV0U3R5bGVbU3R5bGVzLkRhc2hUb0NhbWVsKCBwYWlyWzBdLnRyaW0oKSldID0gcGFpclsxXS50cmltKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJldFN0eWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyBuYW1lcyB3aXRoIGRhc2hlcyBpbnRvIG5hbWVzIGluIGNhbWVsQ2FzZSwgd2hlcmUgZXZlcnkgY2hhcmFjdGVyIGFmdGVyIGEgZGFzaCBpc1xyXG5cdC8vIGNhcGl0YWxpemVkIGFuZCBkYXNoZXMgYXJlIHJlbW92ZWQuXHJcblx0cHVibGljIHN0YXRpYyBEYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCFkYXNoKVxyXG5cdFx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0XHRsZXQgY2FtZWw6IHN0cmluZztcclxuXHRcdGxldCBpbmRleDogbnVtYmVyID0gLTE7XHJcblx0XHRsZXQgbmV4dEluZGV4VG9Db3B5RnJvbTogbnVtYmVyID0gMDtcclxuXHRcdHdoaWxlKCAoaW5kZXggPSBkYXNoLmluZGV4T2YoIFwiLVwiLCBpbmRleCArIDEpKSA+PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoY2FtZWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRjYW1lbCA9IFwiXCI7XHJcblxyXG5cdFx0XHRjYW1lbCArPSBkYXNoLnN1YnN0ciggbmV4dEluZGV4VG9Db3B5RnJvbSwgaW5kZXggLSBuZXh0SW5kZXhUb0NvcHlGcm9tKTtcclxuXHRcdFx0aWYgKGluZGV4ICE9IGRhc2gubGVuZ3RoIC0gMSlcclxuXHRcdFx0XHRjYW1lbCArPSBkYXNoW2luZGV4ICsgMV0udG9VcHBlckNhc2UoKTtcclxuXHJcblx0XHRcdG5leHRJbmRleFRvQ29weUZyb20gPSBpbmRleCArIDI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNhbWVsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBkYXNoO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAobmV4dEluZGV4VG9Db3B5RnJvbSA8IGRhc2gubGVuZ3RoKVxyXG5cdFx0XHRcdGNhbWVsICs9IGRhc2guc3Vic3RyKCBuZXh0SW5kZXhUb0NvcHlGcm9tKTtcclxuXHJcblx0XHRcdHJldHVybiBjYW1lbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTbGljZSB0eXBlIGRlZmluZXMgYW4gb2JqZWN0IHN0cnVjdHVyZSBkZXNjcmliaW5nXHJcbi8vIHBhcmFtZXRlcnMgZm9yIHJlbmRlcmluZyBhbiBlbGVtZW50LiBUaGV5IGluY2x1ZGU6IENsYXNzLCBTdHlsZSwgUHJvcGVydGllcywgQ29udGVudC4gVGhpc1xyXG4vLyBzdHJ1Y3R1cmUgaXMgaW50ZW5kZWQgdG8gYmUgcGFzc2VkIGVpdGhlciBpbiB0aGUgY29uc3RydWN0b3Igb3IgdmlhIHRoZSBwcm90ZWN0ZWQgbWV0aG9kcyBvZlxyXG4vLyBkZXJpdmVkIGNsYXNzZXMsIHNvIHRoYXQgdGhleSBjYW4gY29udHJvbCBwYXJhbWV0ZXJzIG9mIGVsZW1lbnRzIHJlbmRlcmVkIGJ5IHRoZSB1cHBlciBjbGFzc2VzLlxyXG4vLyBUaGUgbWFpbiBwdXJwb3NlIG9mIHRoaXMgc3RydWN0dXJlIGlzIHRvIGNvbWJpbmUgcGFyYW1ldGVycyBkZWZpbmluZyBhbiBlbGVtZW50IGludG8gYSBzaW5nbGVcclxuLy8gb2JqZWN0IHRvIG1pbmltaXplIHRoZSBudW1iZXIgb2YgcHJvcGVydGllcyBjYWxsZXJzIG9mIGNsYXNzZXMgc2hvdWxkIGRlYWwgd2l0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFNsaWNlID1cclxue1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxuXHRzdHlsZT86IG1pbS5TdHlsZVByb3BUeXBlO1xyXG5cdHByb3BzPzogT2JqZWN0XHJcblx0Y29udGVudD86IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTbGljZXMgYWJzdHJhY3QgY2xhc3MgcHJvdmlkZXMgdXNlZnVsIHN0YXRpYyBmdW5jdGlvbnMgZm9yIHdvcmtpbmcgd2l0aCBTbGljZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2xpY2VzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuXHRwdWJsaWMgc3RhdGljIE1lcmdlU2xpY2VzKCAuLi5zbGljZXM6IFNsaWNlW10pOiBTbGljZVxyXG5cdHtcclxuXHRcdGxldCByZXNTbGljZTogU2xpY2UgPSB7fTtcclxuXHRcdFNsaWNlcy5NZXJnZVNsaWNlc1RvKCByZXNTbGljZSwgLi4uc2xpY2VzKTtcclxuXHRcdHJldHVybiByZXNTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuXHQvLyBpbnRvIHRoZSBnaXZlbiByZXN1bHRhbnQgc2xpY2UuXHJcblx0cHVibGljIHN0YXRpYyBNZXJnZVNsaWNlc1RvKCByZXNTbGljZTogU2xpY2UsIC4uLnNsaWNlczogU2xpY2VbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocmVzU2xpY2UgPT09IHVuZGVmaW5lZCB8fCByZXNTbGljZSA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGZvciggbGV0IHNsaWNlIG9mIHNsaWNlcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKCFzbGljZSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGlmIChzbGljZS5zdHlsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChyZXNTbGljZS5zdHlsZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmVzU2xpY2Uuc3R5bGUgPSB7fTtcclxuXHJcblx0XHRcdFx0U3R5bGVzLk1lcmdlU3R5bGVzVG8oIHJlc1NsaWNlLnN0eWxlLCBzbGljZS5zdHlsZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzbGljZS5jbGFzc05hbWUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAocmVzU2xpY2UuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBcIlwiO1xyXG5cclxuXHRcdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBDbGFzc2VzLk1lcmdlQ2xhc3NlcyggcmVzU2xpY2UuY2xhc3NOYW1lIGFzIHN0cmluZywgc2xpY2UuY2xhc3NOYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNsaWNlLnByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHJlc1NsaWNlLnByb3BzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXNTbGljZS5wcm9wcyA9IHt9O1xyXG5cclxuXHRcdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzbGljZS5wcm9wcylcclxuXHRcdFx0XHRcdHJlc1NsaWNlW3Byb3BOYW1lXSA9IHNsaWNlW3Byb3BOYW1lXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNsaWNlLmNvbnRlbnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAocmVzU2xpY2UuY29udGVudCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudCA9IHNsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSggcmVzU2xpY2UuY29udGVudCkpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxldCBvbGRDb250ZW50OiBhbnkgPSByZXNTbGljZS5jb250ZW50O1xyXG5cdFx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50ID0gW107XHJcblx0XHRcdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQucHVzaCggb2xkQ29udGVudCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudC5wdXNoKCBzbGljZS5jb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge1ZOQ2hhaW59IGZyb20gXCIuL1ZOQ2hhaW5cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8gVXNlIHR5cGUgRE4gdG8gcmVmZXIgdG8gRE9NJ3MgTm9kZSBjbGFzcy4gVGhlIERPTSBub2RlcyB0aGF0IHdlIGFyZSBkZWFsaW5nIHdpdGggYXJlXHJcbi8vIGVpdGhlciBvZiB0eXBlIEVsZW1lbnQgb3IgVGV4dC5cclxuZXhwb3J0IHR5cGUgRE4gPSBOb2RlO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElWTkxpZmVDeWNsZSBpbnRlcmZhY2UgZGVmaW5lcyBsaWZlLWN5Y2xlIGFuZCBub3RpZmljYXRpb25zIG1ldGhvZnMgdGhhdCBhcmUgY2FsbGVkIGR1cmluZ1xyXG4vLyBtb3VudGluZywgdW5tb3VudGluZyBhbmQgdXBkYXRlcy4gVGhlIElWTkxpZmVDeWNsZSBpbnRlcmZhY2UgaXMgaW1wbGVtZW50ZWQgYnkgYWxsIHR5cGVzIG9mXHJcbi8vIHZpcnR1YWwgbm9kZXMuIEFsbCBtZXRob2RzIGluIHRoaXMgaW50ZXJmYWNlIGFyZSBvcHRpb25hbCBiZWNhdXNlIHRoZXkgbWlnaHQgbm90IGJlIG5lZWVkZWRcclxuLy8gZm9yIGFsbCB0eXBlcyBvZiBub2Rlcy5cclxuLy9cclxuLy8gTW91bnRpbmcgc2VxdWVuY2U6XHJcbi8vXHQtIGNvbnN0cnVjdG9yXHJcbi8vXHQtIHdpbGxNb3VudFxyXG4vL1x0LSByZW5kZXJcclxuLy9cdC0gbW91bnRcclxuLy9cdC0gZGlkTW91bnRcclxuLy9cclxuLy8gVW5tb3VudGluZyBzZXF1ZW5jZTpcclxuLy9cdC0gd2lsbFVubW91bnRcclxuLy9cdC0gdW5tb3VudFxyXG4vL1x0LSBkaWRVbm1vdW50XHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgdGhlIG5vZGUgaXRzZWxmOlxyXG4vL1x0LSByZW5kZXJcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgcGFyZW50OlxyXG4vL1x0LSB1cGRhdGVGcm9tXHJcbi8vXHQtIHJlbmRlciAob25seSBpZiB1cGRhdGVGcm9tIGluZGljYXRlZCB0aGF0IGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkKVxyXG4vL1x0LSBjb21taXRVcGRhdGUgKG9ubHkgaWYgdXBkYXRlRnJvbSBpbmRpY2F0ZWQgdGhhdCBjb21taXQgaXMgbmVjZXNzYXJ5KVxyXG4vL1x0LSBtb3ZlIChvbmx5IGlmIG5lY2Vzc2FyeSlcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuIFZpcnR1YWwgbm9kZXMgYXJlIGtlcHQgaW4gYVxyXG4vLyBkb3VibGx5LWxpbmtlZCBsaXN0IGFuZCBlYWNoIG5vZGUgcG9pbnRzIHRvIGEgcGFyZW50IG5vZGUgYXMgd2VsbCBhcyBmaXJzdCBhbmQgbGFzdCBzdWItbm9kZXMuXHJcbi8vXHJcbi8vIE1vdW50aW5nIHNlcXVlbmNlOlxyXG4vL1x0LSBjb25zdHJ1Y3RvclxyXG4vL1x0LSB3aWxsTW91bnRcclxuLy9cdC0gcmVuZGVyXHJcbi8vXHQtIG1vdW50XHJcbi8vXHQtIGRpZE1vdW50XHJcbi8vXHJcbi8vIFVubW91bnRpbmcgc2VxdWVuY2U6XHJcbi8vXHQtIHdpbGxVbm1vdW50XHJcbi8vXHQtIHVubW91bnRcclxuLy9cdC0gLy9kaWRVbm1vdW50XHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgdGhlIG5vZGUgaXRzZWxmOlxyXG4vL1x0LSByZW5kZXJcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgcGFyZW50OlxyXG4vL1x0LSB1cGRhdGVGcm9tXHJcbi8vXHQtIHJlbmRlciAob25seSBpZiB1cGRhdGVGcm9tIGluZGljYXRlZCB0aGF0IGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkKVxyXG4vL1x0LSBjb21taXRVcGRhdGUgKG9ubHkgaWYgdXBkYXRlRnJvbSBpbmRpY2F0ZWQgdGhhdCBjb21taXQgaXMgbmVjZXNzYXJ5KVxyXG4vL1x0LSBtb3ZlIChvbmx5IGlmIG5lY2Vzc2FyeSlcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVk4gaW1wbGVtZW50cyBtaW0uSVZOb2RlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdHlwZTogbWltLlZOVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJVk5vZGUgaW1wbGVtZW50YXRpb25cclxuXHRwdWJsaWMgZ2V0IFR5cGUoKTogbWltLlZOVHlwZSB7IHJldHVybiB0aGlzLnR5cGU7IH1cclxuXHRwdWJsaWMgZ2V0IFBhcmVudCgpOiBtaW0uSVZOb2RlIHsgcmV0dXJuIHRoaXMucGFyZW50OyB9XHJcblx0cHVibGljIGdldCBOZXh0KCk6IG1pbS5JVk5vZGUgeyByZXR1cm4gdGhpcy5uZXh0OyB9XHJcblx0cHVibGljIGdldCBQcmV2KCk6IG1pbS5JVk5vZGUgeyByZXR1cm4gdGhpcy5wcmV2OyB9XHJcblx0cHVibGljIGdldCBTdWJOb2RlcygpOiBtaW0uSVZOQ2hhaW4geyByZXR1cm4gdGhpcy5zdWJOb2RlczsgfVxyXG5cdHB1YmxpYyBnZXQgRGlzcGxheU5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxyXG5cclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdGlhbGl6ZSggcGFyZW50OiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdGlmIChwYXJlbnQgPT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucm9vdCA9IHRoaXMgYXMgYW55IGFzIElSb290Vk47XHJcblx0XHRcdHRoaXMuZGVwdGggPSAwO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnJvb3QgPSBwYXJlbnQucm9vdDtcclxuXHRcdFx0dGhpcy5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDE7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHB1YmxpYyB0ZXJtaW5hdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHJlbW92ZSBpbmZvcm1hdGlvbiBhYm91dCBhbnkgcHVibGlzaGVkIGFuZCBzdWJzY3JpYmVkIHNlcnZpY2VzXHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmZvckVhY2goIChzZXJ2aWNlLCBpZCkgPT4gdGhpcy5yb290Lm5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpKTtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5mb3JFYWNoKCAoaW5mbywgaWQpID0+IHsgdGhpcy5yb290Lm5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKTsgfSk7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmNsZWFyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hbmNob3JETiA9IG51bGw7XHJcblx0XHR0aGlzLnN1Yk5vZGVzLmNsZWFyKCk7XHJcblx0XHR0aGlzLnJvb3QgPSBudWxsO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cdFx0dGhpcy5kZXB0aCA9IDA7XHJcblx0fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnk7XHJcbi8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyBjb250ZW50IHRoYXQgY29tcHJpemVzIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIGl0IGlzIGFzIHRob3VnaFxyXG5cdC8vIG51bGwgaXMgcmV0dXJuZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyByZW5kZXI/KCk6IGFueSB7fVxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQ/KCk6IHZvaWQge31cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGUgdmlydHVhbCBub2RlJ3MgY29udGVudCBpbnRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50PygpOiB2b2lkIHt9XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBoYXMgYmVlbiBpbnNlcnRlZFxyXG5cdC8vIGludG8gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgZGlkTW91bnQ/KCk6IHZvaWQge31cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudD8oKTogdm9pZCB7fVxyXG5cclxuXHQvLyBSZW1vdmVzIGNvbnRlbnQgZnJvbSB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50PygpOiB2b2lkIHt9XHJcblxyXG5cdC8vLy8gQ2xlYXJzIGludGVybmFsIHN0cnVjdHVyZXMgYWZ0ZXIgdGhlIERPTSBjb250ZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHRyZWUuXHJcblx0Ly8vLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0Ly9kaWRVbm1vdW50PygpOiB2b2lkIHt9XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGlzIG1ldGhvZCBpc1xyXG5cdC8vIE5PVCBtYXJrZWQgYXMgb3B0aW9uYWwgYW5kIHRodXMgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhbGwgdHlwZXMgb2YgdmlydHVhbCBub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZT8oIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcCB7IHJldHVybiB7IHNob3VsZENvbW1pdDogZmFsc2UsIHNob3VsZFJlbmRlcjogZmFsc2UgfTsgfVxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlPyggbmV3Vk46IFZOKTogdm9pZCB7fVxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaGFzIGJlZW4gdXBkYXRlZFxyXG5cdC8vIGluIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIGRpZFVwZGF0ZT8oKTogdm9pZCB7fVxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBzdXBwb3J0c0Vycm9ySGFuZGxpbmc/KCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuIEl0IHJldHVybnMgY29udGVudCBjb21wcmlzaW5nIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIGhhbmRsZUVycm9yPyggdm5FcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkIHt9XHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiAoaWYgYW55KSBhbmQgbm90IHRvIGFueSBvZiBpdHNcclxuXHQvLyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldE93bkROKCk6IEROIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBmaXJzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGNhbGxlZCBvbiB0aGUgbW91bnRlZCBub2Rlcy5cclxuXHRwdWJsaWMgZ2V0Rmlyc3RETigpOiBETlxyXG5cdHtcclxuXHRcdGxldCBkbiA9IHRoaXMuZ2V0T3duRE4oKTtcclxuXHRcdGlmIChkbiAhPT0gbnVsbClcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGZpcnN0IHRvIGxhc3QgdW50aWwgYSB2YWxpZCBub2RlXHJcblx0XHQvLyBpcyByZXR1cm5lZFxyXG5cdFx0Zm9yKCBsZXQgc3ZuID0gdGhpcy5zdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdHtcclxuXHRcdFx0ZG4gPSBzdm4uZ2V0Rmlyc3RETigpO1xyXG5cdFx0XHRpZiAoZG4gIT09IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuIGRuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBsYXN0IERPTSBub2RlIGRlZmluZWQgYnkgZWl0aGVyIHRoaXMgdmlydHVhbCBub2RlIG9yIG9uZSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIG9ubHkgY2FsbGVkIG9uIHRoZSBtb3VudGVkIG5vZGVzLlxyXG5cdHB1YmxpYyBnZXRMYXN0RE4oKTogRE5cclxuXHR7XHJcblx0XHRsZXQgZG4gPSB0aGlzLmdldE93bkROKCk7XHJcblx0XHRpZiAoZG4gIT09IG51bGwpXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHJcblx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IHVudGlsIGEgdmFsaWQgbm9kZVxyXG5cdFx0Ly8gaXMgcmV0dXJuZWRcclxuXHRcdGZvciggbGV0IHN2biA9IHRoaXMuc3ViTm9kZXMubGFzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ucHJldilcclxuXHRcdHtcclxuXHRcdFx0ZG4gPSBzdm4uZ2V0TGFzdEROKCk7XHJcblx0XHRcdGlmIChkbiAhPT0gbnVsbClcclxuXHRcdFx0XHRyZXR1cm4gZG47XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGxpc3Qgb2YgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZTsgdGhhdCBpcyxcclxuXHQvLyBhcmUgTk9UIGNoaWxkcmVuIG9mIHN1Yi1ub2RlcyB0aGF0IGhhdmUgdGhlaXIgb3duIERPTSBub2RlLiBOZXZlciByZXR1cm5zIG51bGwuXHJcblx0cHVibGljIGdldEltbWVkaWF0ZUROcygpOiBETltdXHJcblx0e1xyXG5cdFx0bGV0IGFycjogRE5bXSA9IFtdO1xyXG5cdFx0dGhpcy5jb2xsZWN0SW1tZWRpYXRlRE5zKCBhcnIpO1xyXG5cdFx0cmV0dXJuIGFycjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29sbGVjdHMgYWxsIERPTSBub2RlcyB0aGF0IGFyZSBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhpcyB2aXJ0dWFsIG5vZGUgKHRoYXQgaXMsXHJcblx0Ly8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZSkgaW50byB0aGUgZ2l2ZW4gYXJyYXkuXHJcblx0cHVibGljIGNvbGxlY3RJbW1lZGlhdGVETnMoIGFycjogRE5bXSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgZG4gPSB0aGlzLmdldE93bkROKCk7XHJcblx0XHRpZiAoZG4gIT09IG51bGwpXHJcblx0XHRcdGFyci5wdXNoKCBkbik7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGZpcnN0IHRvIGxhc3RcclxuXHRcdFx0Zm9yKCBsZXQgc3ZuID0gdGhpcy5zdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdFx0XHRzdm4uY29sbGVjdEltbWVkaWF0ZUROcyggYXJyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHRvIHNldCBhIGRpc3Rpbmd1aXNoaW5nIGRpc3BsYXkgbmFtZSBpZGVudGlmeWluZyB0aGUgb2JqZWN0XHJcblx0Ly8gcmVwcmVzZW50ZWQgYnkgdGhlIG5vZGUgKGUuZy4gY29tcG9uZW50IGluc3RhbmNlKS5cclxuXHRwdWJsaWMgc2V0RGlzcGxheU5hbWUoIG5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGlzIG5vZGUuXHJcblx0cHVibGljIHJlcXVlc3RVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnJvb3QpXHJcblx0XHRcdHRoaXMucm9vdC5yZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbmNlbHMgYSBwcmV2aW91c2x5IHJlcXVlc3RlZCB1cGRhdGUgZm9yIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgY2FuY2VsVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5yb290KVxyXG5cdFx0XHR0aGlzLnJvb3QuY2FuY2VsTm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHNcclxuXHQvLyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsKCBmdW5jOiAoKSA9PiB2b2lkLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5yb290KVxyXG5cdFx0XHR0aGlzLnJvb3Quc2NoZWR1bGVGdW5jQ2FsbCggZnVuYywgYmVmb3JlVXBkYXRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VscyBhIGNhbGwgdGhhdCBoYXMgYmVlbiBzY2hlZHVsZWQgdG8gYmUgbWFkZSBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkXHJcblx0Ly8gY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHRwdWJsaWMgY2FuY2VsU2NoZWR1bGVkQ2FsbCggZnVuYzogKCkgPT4gdm9pZCwgYmVmb3JlVXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucm9vdClcclxuXHRcdFx0dGhpcy5yb290LmNhbmNlbFNjaGVkdWxlZEZ1bmNDYWxsKCBmdW5jLCBiZWZvcmVVcGRhdGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWdpc3RlcnMgYW4gb2JqZWN0IG9mIGFueSB0eXBlIGFzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGZvclxyXG5cdC8vIGNvbnN1bXB0aW9uIGJ5IGRlc2NlbmRhbnQgbm9kZXMuXHJcblx0cHVibGljIHB1Ymxpc2hTZXJ2aWNlKCBpZDogc3RyaW5nLCBzZXJ2aWNlOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLGFueT4oKTtcclxuXHJcblx0XHRsZXQgZXhpc3RpblNlcnZpY2U6IGFueSA9IHRoaXMucHVibGlzaGVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoZXhpc3RpblNlcnZpY2UgIT09IHNlcnZpY2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuc2V0KCBpZCwgc2VydmljZSk7XHJcblx0XHRcdHRoaXMucm9vdC5ub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZCwgdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVucmVnaXN0ZXJzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgdW5wdWJsaXNoU2VydmljZSggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5kZWxldGUoIGlkKTtcclxuXHRcdHRoaXMucm9vdC5ub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdWJzY3JpYmVzIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIElmIHRoZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIGlzIHJlZ2lzdGVyZWRcclxuXHQvLyBieSBvbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7IG90aGVyd2lzZSxcclxuXHQvLyB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluIHVuZGVmaW5lZC5cclxuXHQvLyBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvciBub2RlIGlzXHJcblx0Ly8gY2hhbmdlZCwgdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0cHVibGljIHN1YnNjcmliZVNlcnZpY2UoIGlkOiBzdHJpbmcsIHJlZjogbWltLlJlZlByb3BUeXBlPGFueT4sIGRlZmF1bHRTZXJ2aWNlPzogYW55LCB1c2VTZWxmPzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPSBuZXcgTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz4oKTtcclxuXHJcblx0XHRsZXQgaW5mbyA9IG5ldyBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbygpO1xyXG5cdFx0aW5mby5yZWYgPSByZWY7XHJcblx0XHRpbmZvLmRlZmF1bHRTZXJ2aWNlID0gZGVmYXVsdFNlcnZpY2U7XHJcblx0XHRpbmZvLnVzZVNlbGYgPSB1c2VTZWxmID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLnNldCggaWQsIGluZm8pO1xyXG5cdFx0dGhpcy5yb290Lm5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZCwgdGhpcyk7XHJcblx0XHRtaW0uc2V0UmVmKCByZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGRlZmF1bHRTZXJ2aWNlKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvLyBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlLFxyXG5cdC8vIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgdW5zdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0dGhpcy5yb290Lm5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBub2RlIHRoYXQgcHVibGljYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIHNlcnZpY2UgKHRvIHdoaWNoIHRoZSBub2RlXHJcblx0Ly8gaGFzIHByZXZpb3VzbHkgc3Vic2NyaWJlZCkgaGFzIGNoYW5nZWQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdGhpcy5nZXRTZXJ2aWNlKCBpZCwgaW5mby5kZWZhdWx0U2VydmljZSkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQvLyBub2RlIG9yIHRoZSBkZWZhdWx0IHZhbHVlIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzIHJlZ2lzdGVyZWQgYSBzZXJ2aWNlIHdpdGhcclxuXHQvLyB0aGlzIElELiBUaGlzIG1ldGhvZCBkb2Vzbid0IGVzdGFibGlzaCBhIHN1YnNjcmlwdGlvbiBhbmQgb25seSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZS5cclxuXHRwdWJsaWMgZ2V0U2VydmljZSggaWQ6IHN0cmluZywgZGVmYXVsdFNlcnZpY2U/OiBhbnksIHVzZVNlbGY/OiBib29sZWFuKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IHNlcnZpY2UgPSB0aGlzLmZpbmRTZXJ2aWNlKCBpZCwgdXNlU2VsZik7XHJcblx0XHRyZXR1cm4gc2VydmljZSAhPT0gdW5kZWZpbmVkID8gc2VydmljZSA6IGRlZmF1bHRTZXJ2aWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHb2VzIHVwIHRoZSBjaGFpbiBvZiBub2RlcyBsb29raW5nIGZvciBhIHB1Ymxpc2hlZCBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBSZXR1cm5zXHJcblx0Ly8gdW5kZWZpbmVkIGlmIHRoZSBzZXJ2aWNlIGlzIG5vdCBmb3VuZC4gTm90ZSB0aGF0IG51bGwgbWlnaHQgYmUgYSB2YWxpZCB2YWx1ZS5cclxuXHRwdWJsaWMgZmluZFNlcnZpY2UoIGlkOiBzdHJpbmcsIHVzZVNlbGY/OiBib29sZWFuKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHVzZVNlbGYpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgc2VydmljZSA9IHRoaXMucHVibGlzaGVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRcdFx0aWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdHJldHVybiBzZXJ2aWNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZ28gdXAgdGhlIGNoYWluOyBub3RlIHRoYXQgd2UgZG9uJ3QgcGFzcyB0aGUgdXNlU2VsZiBwYXJhbWV0ZXIgb24uXHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgIT09IG51bGwgPyB0aGlzLnBhcmVudC5maW5kU2VydmljZSggaWQsIHRydWUpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIEZpbmRzIHRoZSBmaXJzdCBET00gbm9kZSBpbiB0aGUgdHJlZSBvZiB2aXJ0dWFsIG5vZGVzIHRoYXQgY29tZXMgYWZ0ZXIgb3VyIG5vZGUgdGhhdCBpcyBhXHJcblx0Ly8gY2hpbGQgb2Ygb3VyIG93biBhbmNob3IgZWxlbWVudC4gV2UgdXNlIGl0IGFzIGEgbm9kZSBiZWZvcmUgd2hpY2ggdG8gaW5zZXJ0L21vdmUgbm9kZXMgb2ZcclxuXHQvLyBvdXIgc3ViLW5vZGVzIGR1cmluZyB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2Vzcy4gVGhlIGFsZ29yaXRobSBmaXJzdCBnb2VzIHRvIHRoZSBuZXh0XHJcblx0Ly8gc2libGluZ3Mgb2Ygb3VyIG5vZGUgYW5kIHRoZW4gdG8gdGhlIG5leHQgc2libGluZ3Mgb2Ygb3VyIHBhcmVudCBub2RlIHJlY3Vyc2l2ZWx5LiBJdCBzdG9wc1xyXG5cdC8vIHdoZW4gd2UgZWl0aGVyIGZpbmQgYSBET00gbm9kZSAodGhlbiBpdCBpcyByZXR1cm5lZCkgb3IgZmluZCBhIGRpZmZlcmVuIGFuY2hvciBlbGVtZW50XHJcblx0Ly8gKHRoZW4gbnVsbCBpcyByZXR1cm5lZCkuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MgZm9yIG91clxyXG5cdC8vIHN1Yi1ub2RlcyBzdGFydHMgYW5kLCB0aGVyZWZvcmUsIGl0IG9ubHkgdHJhdmVyc2VzIG1vdW50ZWQgbm9kZXMuXHJcblx0cHVibGljIGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCBhbmNob3JETjogRE4pOiBETlxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHdlIGhhdmUgc2libGluZyBET00gbm9kZXMgYWZ0ZXIgb3VyIGxhc3Qgc3ViLW5vZGUgLSB0aGF0IG1pZ2h0IGJlIGVsZW1lbnRzXHJcblx0XHQvLyBub3QgY29udHJvbGxlZCBieSBvdXIgY29tcG9uZW50LlxyXG5cdFx0aWYgKHRoaXMuc3ViTm9kZXMubGFzdCAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Y29uc3QgZG46IEROID0gdGhpcy5zdWJOb2Rlcy5sYXN0LmdldEZpcnN0RE4oKTtcclxuXHRcdFx0aWYgKGRuICE9PSBudWxsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc3QgbmV4dFNpYmxpbmc6IEROID0gZG4ubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0aWYgKG5leHRTaWJsaW5nICE9PSBudWxsKVxyXG5cdFx0XHRcdFx0cmV0dXJuIG5leHRTaWJsaW5nO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG91ciBuZXh0IHNpYmxpbmdzXHJcblx0XHRmb3IoIGxldCB2bjogVk4gPSB0aGlzLm5leHQ7IHZuICE9PSBudWxsOyB2biA9IHZuLm5leHQpXHJcblx0XHR7XHJcblx0XHRcdGlmICh2bi5hbmNob3JETiAhPT0gYW5jaG9yRE4pXHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHQvLyBub3RlIHRoYXQgZ2V0Rmlyc3RETiBjYWxsIHRyYXZlcnNlcyB0aGUgaGllcmFyY2h5IG9mIG5vZGVzLiBOb3RlIGFsc28gdGhhdFxyXG5cdFx0XHQvLyBpdCBjYW5ub3QgZmluZCBhIG5vZGUgdW5kZXIgYSBkaWZmZXJlbnQgYW5jaG9yIGVsZW1lbnQgYmVjYXVzZSB0aGUgZmlyc3QgZGlmZmVyZW50XHJcblx0XHRcdC8vIGFuY2hvciBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQgYXMgYSB3YW50ZWQgbm9kZS5cclxuXHRcdFx0Y29uc3QgZG46IEROID0gdm4uZ2V0Rmlyc3RETigpO1xyXG5cdFx0XHRpZiAoZG4gIT09IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuIGRuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlY3Vyc2UgdG8gb3VyIHBhcmVudCBpZiBleGlzdHNcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCAhPT0gbnVsbCAmJiB0aGlzLnBhcmVudC5hbmNob3JETiA9PT0gYW5jaG9yRE5cclxuXHRcdFx0XHRcdFx0PyB0aGlzLnBhcmVudC5nZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggYW5jaG9yRE4pIDogbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBub2RlIG5hbWVzIHN0YXJ0aW5nIHdpdGggdGhpcyBub2RlIGFuZCB1cCB1bnRpbCB0aGUgdG9wLWxldmVsIG5vZGUuXHJcblx0cHVibGljIGdldCBwYXRoKCk6IHN0cmluZ1tdXHJcblx0e1xyXG5cdFx0bGV0IGRlcHRoID0gdGhpcy5kZXB0aDtcclxuXHRcdGxldCBwYXRoID0gQXJyYXk8c3RyaW5nPiggZGVwdGgpO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDAsIHZuOiBWTiA9IHRoaXM7IGkgPCBkZXB0aDsgaSsrLCB2biA9IHZuLnBhcmVudClcclxuXHRcdHtcclxuXHRcdFx0cGF0aFtpXSA9IHZuLm5hbWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhdGg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBpcyBtb3VudGVkLlxyXG5cdHB1YmxpYyBnZXQgSXNNb3VudGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5hbmNob3JETiAhPT0gbnVsbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBub2RlLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5uYW1lOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIHR5cGUuXHJcblx0cHVibGljIHR5cGU6IG1pbS5WTlR5cGU7XHJcblxyXG5cdC8vIFBhcmVudCBub2RlLiBUaGlzIGlzIG51bGwgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLlxyXG5cdHB1YmxpYyBwYXJlbnQ6IFZOO1xyXG5cclxuXHQvLyBSb290IG5vZGUuXHJcblx0cHVibGljIHJvb3Q6IElSb290Vk47XHJcblxyXG5cdC8vIExldmVsIG9mIG5lc3RpbmcgYXQgd2hpY2ggdGhlIG5vZGUgcmVzaWRlcyByZWxhdGl2ZSB0byB0aGUgcm9vdCBub2RlLlxyXG5cdHB1YmxpYyBkZXB0aDogbnVtYmVyO1xyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kXHJcblx0Ly8gZXJyb3IgcmVwb3J0aW5nLiBUaGUgbmFtZSBtdXN0IGJlIGF2YWlsYWJsZSByaWdodCBhZnRlciB0aGUgbm9kZSBpcyBjb25zdHJ1Y3RlZCAtIHdoaWNoXHJcblx0Ly8gbWVhbnMgYmVmb3JlIHRoZSBjcmVhdGUgbWV0aG9kIGlzIGNhbGxlZC4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZVxyXG5cdC8vIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5leHQgbm9kZSBpbiB0aGUgY2hhaW4gb2Ygc2libGluZyBub2RlcyBvciBudWxsIGlmIHRoaXMgaXMgdGhlIGxhc3Qgb25lLlxyXG5cdHB1YmxpYyBuZXh0OiBWTiA9IG51bGw7XHJcblxyXG5cdC8vIFByZXZpb3VzIG5vZGUgaW4gdGhlIGNoYWluIG9mIHNpYmxpbmcgbm9kZXMgb3IgbnVsbCBpZiB0aGlzIGlzIHRoZSBmaXJzdCBvbmUuXHJcblx0cHVibGljIHByZXY6IFZOID0gbnVsbDtcclxuXHJcblx0Ly8gQ2hhaW4gb2Ygc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdWJOb2RlcyA9IG5ldyBWTkNoYWluKCk7XHJcblxyXG5cdC8vIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLlxyXG5cdHB1YmxpYyBhbmNob3JETjogRE4gPSBudWxsO1xyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2VydmljZSBvYmplY3RzIHB1Ymxpc2hlZCBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBwdWJsaXNoZWRTZXJ2aWNlczogTWFwPHN0cmluZyxhbnk+O1xyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gb2JqZWN0cyBjb25zdGl0dXRpbmcgc3Vic2NyaXB0aW9ucyBtYWRlIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHN1YnNjcmliZWRTZXJ2aWNlczogTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz47XHJcblxyXG5cdC8vIFwiVGljayBudW1iZXJcIiBkdXJpbmcgd2hpY2ggdGhlIG5vZGUgd2FzIGxhc3QgdXBkYXRlZC4gSWYgdGhpcyBub2RlJ3MgdGljayBudW1iZXIgZXF1YWxzXHJcblx0Ly8gdGhlIGN1cnJlbnQgdGljayBudW1iZXIgbWFpbnRhaW5lZCBieSB0aGUgcm9vdCBub2RlLCB0aGlzIGluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSB3YXNcclxuXHQvLyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyB1cGRhdGUgY3ljbGUuIFRoaXMgaGVscHMgcHJldmVudCB0aGUgZG91YmxlLXJlbmRlcmluZyBvZiBhXHJcblx0Ly8gY29tcG9uZW50IGlmIGJvdGggdGhlIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmUgdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRwdWJsaWMgbGFzdFVwZGF0ZVRpY2s6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOVXBkYXRlRGlzcCB0eXBlIGRlc2NyaWJlcyB3aGV0aGVyIGNlcnRhaW4gYWN0aW9ucyBzaG91bGQgYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlXHJcbi8vIGR1cmluZyB1cGRhdGUuIFRoaXMgb2JqZWN0IGlzIHJldHVybmVkIGZyb20gdGhlIG5vZGUncyB1cGRhdGVGcm9tIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFZOVXBkYXRlRGlzcCA9XHJcbntcclxuXHQvLyBGYWxnIGluZGljYXRuZyB3aGV0aGVyIHRoZSBub2RlIGhhcyBjaGFuZ2VzIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIERPTSB0cmVlLiBJZiB0aGlzXHJcblx0Ly8gZmxhZyBpcyB0cnVlLCB0aGVuIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHdpbGwgYmUgY2xsZWQgb24gdGhlIG5vZGUgZHVyaW5nIHRoZSBDb21taXRcclxuXHQvLyBwaGFzZS5cclxuXHRzaG91bGRDb21taXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIHN1Yi1ub2RlcyBzaG91bGQgYmUgdXBkYXRlZC4gSWYgdGhpcyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlXHJcblx0Ly8gbm9kZSdzIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBpbW1lZGlhdGVseSBjYWxsZWQuXHJcblx0c2hvdWxkUmVuZGVyOiBib29sZWFuO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvIGNsYXNzIGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgc3Vic2NyaXB0aW9uIG9mIGEgbm9kZSB0byBhIHNlcnZpY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mb1xyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBmaWxsZWQgaW4gd2l0aCB0aGUgc2VydmljZSB2YWx1ZVxyXG5cdHJlZjogbWltLlJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIERlZmF1bHQgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyB1c2VkIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzIHB1Ymxpc2hlcyB0aGVcclxuXHQvLyBzZXJ2aWNlXHJcblx0ZGVmYXVsdFNlcnZpY2U6IGFueTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgYSBub2RlIGNhbiBzdWJzY3JpYmUgdG8gYSBzZXJ2aWNlIHRoYXQgaXQgaW1wbGVtZW50cyBpdHNlbGYuIFRoaXNcclxuXHQvLyBpcyB1c2VmdWwgaW4gY2FzZSB3aGVyZSBhIHNlcnZpY2UgdGhhdCBpcyBpbXBsZW1lbnRlZCBieSBhIGNvbXBvbmVudCBjYW4gY2hhaW4gdG8gYSBzZXJ2aWNlXHJcblx0Ly8gaW1wbGVtZW50ZWQgYnkgYW4gYW5jZXN0b3IgY29tcG9uZW50LlxyXG5cdHVzZVNlbGY6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJUm9vdFZOIGludGVyZmFjZSByZXByZXNlbnQgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIFJvb3QgdmlydHVhbCBub2RlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJUm9vdFZOXHJcbntcclxuXHQvLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyBwdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcblx0bm90aWZ5U2VydmljZVB1Ymxpc2hlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgdW5wdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcblx0bm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHN1YnNjcmliZWQgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdm46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gQ2FuY2VscyBhIHByZXZpb3VzbHkgcmVxdWVzdGVkIHVwZGF0ZSBmb3IgdGhlIGdpdmVuIG5vZGUuXHJcblx0Y2FuY2VsTm9kZVVwZGF0ZSggdm46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50c1xyXG5cdC8vIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmM6ICgpID0+IHZvaWQsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8vIENhbmNlbHMgYSBjYWxsIHRoYXQgaGFzIGJlZW4gc2NoZWR1bGVkIHRvIGJlIG1hZGUgZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZFxyXG5cdC8vIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0Y2FuY2VsU2NoZWR1bGVkRnVuY0NhbGwoIGZ1bmM6ICgpID0+IHZvaWQsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7Vk59IGZyb20gXCIuL1ZOXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTkNoYWluIGNsYXNzIHJlcHJlc2VudHMgYSBkb3VibGx5LWxpbmtlZCBsaXN0IG9mIHZpcnR1YWwgbm9kZXMuIEl0IHJlZmVyZW5jZXMgdGhlIGZpcnN0XHJcbi8vIGFuZCBsYXN0IHN1Yi1ub2RlcyBhbmQgcHJvdmlkZXMgc29tZSBjb252ZW5pZW5jZSBtZXRob2RzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFZOQ2hhaW4gaW1wbGVtZW50cyBtaW0uSVZOQ2hhaW5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCB2bj86IFZOKVxyXG5cdHtcclxuXHRcdGlmICh2biAhPT0gdW5kZWZpbmVkICYmIHZuICE9IG51bGwpXHJcblx0XHRcdHRoaXMuYXBwZW5kVk4oIHZuKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSVZOQ2hhaW4gaW1wbGVtZW50YXRpb25cclxuXHRwdWJsaWMgZ2V0IEZpcnN0KCk6IG1pbS5JVk5vZGUgeyByZXR1cm4gdGhpcy5maXJzdDsgfVxyXG5cdHB1YmxpYyBnZXQgTGFzdCgpOiBtaW0uSVZOb2RlIHsgcmV0dXJuIHRoaXMubGFzdDsgfVxyXG5cdHB1YmxpYyBnZXQgQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuY291bnQ7IH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBub2RlcyBmcm9tIHRoZSBjaGFpbi5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZmlyc3QgPSB0aGlzLmxhc3QgPSBudWxsO1xyXG5cdFx0dGhpcy5jb3VudCA9IDA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYSBuZXcgbm9kZSB0byB0aGUgZW5kIG9mIHRoZSBjaGFpbi5cclxuXHRwdWJsaWMgYXBwZW5kVk4oIHZuOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodm4gPT09IG51bGwpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR2bi5wcmV2ID0gdGhpcy5sYXN0O1xyXG5cdFx0aWYgKHRoaXMuZmlyc3QgPT09IG51bGwpXHJcblx0XHRcdHRoaXMuZmlyc3QgPSB0aGlzLmxhc3QgPSB2bjtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5sYXN0Lm5leHQgPSB2bjtcclxuXHRcdFx0dGhpcy5sYXN0ID0gdm47XHJcblx0XHR9XHJcblx0XHR2bi5uZXh0ID0gbnVsbFxyXG5cdFx0dGhpcy5jb3VudCsrO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGFsbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBjaGFpbiB0byB0aGUgZW5kIG9mIG91ciBjaGFpbi5cclxuXHRwdWJsaWMgYXBwZW5kQ2hhaW4oIGNoYWluOiBWTkNoYWluKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChjaGFpbiA9PT0gbnVsbCB8fCBjaGFpbi5maXJzdCA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGNoYWluLmZpcnN0LnByZXYgPSB0aGlzLmxhc3Q7XHJcblx0XHRpZiAodGhpcy5maXJzdCA9PT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5maXJzdCA9IGNoYWluLmZpcnN0O1xyXG5cdFx0XHR0aGlzLmxhc3QgPSBjaGFpbi5sYXN0O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxhc3QubmV4dCA9IGNoYWluLmZpcnN0O1xyXG5cdFx0XHR0aGlzLmxhc3QgPSBjaGFpbi5sYXN0O1xyXG5cdFx0fVxyXG5cdFx0Y2hhaW4ubGFzdC5uZXh0ID0gbnVsbDtcclxuXHRcdHRoaXMuY291bnQgKz0gY2hhaW4uY291bnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYSBuZXcgbm9kZSB0byB0aGUgc3RhcnQgb2YgdGhlIGNoYWluLlxyXG5cdHB1YmxpYyBpbnNlcnRWTiggdm46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh2biA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHZuLm5leHQgPSB0aGlzLmZpcnN0O1xyXG5cdFx0aWYgKHRoaXMuZmlyc3QgPT09IG51bGwpXHJcblx0XHRcdHRoaXMuZmlyc3QgPSB0aGlzLmxhc3QgPSB2bjtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5maXJzdC5wcmV2ID0gdm47XHJcblx0XHRcdHRoaXMuZmlyc3QgPSB2bjtcclxuXHRcdH1cclxuXHRcdHZuLnByZXYgPSBudWxsXHJcblx0XHR0aGlzLmNvdW50Kys7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcGxhY2VzIHRoZSBnaXZlbiBub2RlIHdpdGggdGhlIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNoYWluLlxyXG5cdHB1YmxpYyByZXBsYWNlVk5XaXRoQ2hhaW4oIHZuOiBWTiwgY2hhaW46IFZOQ2hhaW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHZuID09PSBudWxsIHx8IGNoYWluID09PSBudWxsKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHByZXY6IFZOID0gdm4ucHJldjtcclxuXHRcdGxldCBuZXh0OiBWTiA9IHZuLm5leHQ7XHJcblx0XHRpZiAodGhpcy5maXJzdCA9PT0gdm4pXHJcblx0XHRcdHRoaXMuZmlyc3QgPSBjaGFpbi5maXJzdDtcclxuXHRcdGlmICh0aGlzLmxhc3QgPT09IHZuKVxyXG5cdFx0XHR0aGlzLmxhc3QgPSBjaGFpbi5sYXN0O1xyXG5cdFx0aWYgKHByZXYgIT09IG51bGwpXHJcblx0XHRcdHByZXYubmV4dCA9IGNoYWluLmZpcnN0O1xyXG5cdFx0aWYgKG5leHQgIT0gbnVsbClcclxuXHRcdFx0bmV4dC5wcmV2ID0gY2hhaW4ubGFzdDtcclxuXHJcblx0XHR0aGlzLmNvdW50ICs9IGNoYWluLmNvdW50IC0gMTtcclxufVxyXG5cclxuXHJcblxyXG5cdC8vIERlbGV0ZXMgdGhlIGdpdmVuIG5vZGUgZnJvbSB0aGUgY2hhaW4uXHJcblx0cHVibGljIGRlbGV0ZVZOKCB2bjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHZuID09PSBudWxsKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHByZXY6IFZOID0gdm4ucHJldjtcclxuXHRcdGxldCBuZXh0OiBWTiA9IHZuLm5leHQ7XHJcblx0XHRpZiAodGhpcy5maXJzdCA9PT0gdm4pXHJcblx0XHRcdHRoaXMuZmlyc3QgPSBuZXh0O1xyXG5cdFx0aWYgKHRoaXMubGFzdCA9PT0gdm4pXHJcblx0XHRcdHRoaXMubGFzdCA9IHByZXY7XHJcblx0XHRpZiAocHJldiAhPT0gbnVsbClcclxuXHRcdFx0cHJldi5uZXh0ID0gbmV4dDtcclxuXHRcdGlmIChuZXh0ICE9IG51bGwpXHJcblx0XHRcdG5leHQucHJldiA9IHByZXY7XHJcblxyXG5cdFx0dGhpcy5jb3VudC0tO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaXJzdCBub2RlIGluIHRoZSBjaGFpbiBvZiBzdWItbm9kZXMuIE51bGwgZm9yIGVtcHR5IGNoYWlucy5cclxuXHRwdWJsaWMgZmlyc3Q6IFZOID0gbnVsbDtcclxuXHJcblx0Ly8gTGFzdCBub2RlIGluIHRoZSBjaGFpbiBvZiBzdWItbm9kZXMuIE51bGwgZm9yIGVtcHR5IGNoYWlucy5cclxuXHRwdWJsaWMgbGFzdDogVk4gPSBudWxsO1xyXG5cclxuXHQvLyBOdW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGNoYWluLlxyXG5cdHB1YmxpYyBjb3VudDogbnVtYmVyID0gMDtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtWTn0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQ2hhaW59IGZyb20gXCIuL1ZOQ2hhaW5cIlxyXG5pbXBvcnQge0luc3RhbmNlVk59IGZyb20gXCIuL0luc3RhbmNlVk5cIlxyXG5pbXBvcnQge0NsYXNzVk59IGZyb20gXCIuL0NsYXNzVk5cIlxyXG5pbXBvcnQge0Z1bmNWTn0gZnJvbSBcIi4vRnVuY1ZOXCJcclxuaW1wb3J0IHtFbG1WTn0gZnJvbSBcIi4vRWxtVk5cIlxyXG5pbXBvcnQge1RleHRWTn0gZnJvbSBcIi4vVGV4dFZOXCJcclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGNoYWluIG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gY29udGVudC4gRm9yIGFsbCB0eXBlcyBvZiBjb250ZW50cyBvdGhlciB0aGFuIGFuXHJcbi8vIGFycmF5LCB0aGUgcmV0dXJuZWQgY2hhaW4gY29udGFpbnMgYSBzaW5nbGUgVk4uIElmIHRoZSBpbnB1dCBjb250ZW50IGlzIGFuIGFycmF5LCB0aGVuXHJcbi8vIGEgVk4gaXMgY3JlYXRlZCBmb3IgZWFjaCBvZiB0aGUgYXJyYXkgZWxlbWVudHMuIFNpbmNlIGFycmF5IGVsZW1lbnRzIG1pZ2h0IGFsc28gYmUgYXJyYXlzLFxyXG4vLyB0aGUgcHJvY2VzcyBpcyByZWN1cnNpdmUuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGNvbnRlbnQ6IGFueSk6IFZOQ2hhaW5cclxue1xyXG5cdGNvbnN0IGNoYWluID0gbmV3IFZOQ2hhaW4oKTtcclxuXHRsZXQgY29udGVudFR5cGU6IHN0cmluZyA9IHR5cGVvZiBjb250ZW50O1xyXG5cdGlmIChjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCBjb250ZW50VHlwZSA9PT0gXCJib29sZWFuXCIgfHwgY29udGVudFR5cGUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHJldHVybiBjaGFpbjtcclxuXHJcblx0aWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBWTilcclxuXHRcdGNoYWluLmFwcGVuZFZOKCBjb250ZW50IGFzIFZOKTtcclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVk5DaGFpbilcclxuXHRcdGNoYWluLmFwcGVuZENoYWluKCBjb250ZW50IGFzIFZOQ2hhaW4pO1xyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBtaW0uQ29tcG9uZW50KVxyXG5cdFx0Y2hhaW4uYXBwZW5kVk4oIG5ldyBJbnN0YW5jZVZOKCBjb250ZW50IGFzIG1pbS5Db21wb25lbnQpKTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBjb250ZW50KSlcclxuXHR7XHJcblx0XHRmb3IoIGxldCBhcnJJdGVtIG9mIGNvbnRlbnQgYXMgQXJyYXk8YW55PilcclxuXHRcdFx0Y2hhaW4uYXBwZW5kQ2hhaW4oIGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggYXJySXRlbSkpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChjb250ZW50VHlwZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdGNoYWluLmFwcGVuZFZOKCBuZXcgVGV4dFZOKCBjb250ZW50IGFzIHN0cmluZykpO1xyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0dGhyb3cgY29udGVudDtcclxuXHRlbHNlXHJcblx0XHRjaGFpbi5hcHBlbmRWTiggbmV3IFRleHRWTiggY29udGVudC50b1N0cmluZygpKSk7XHJcblxyXG5cdHJldHVybiBjaGFpbjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGEgY2hhaW4gb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBUeXBlU2NyaXB0J3MgSlNYIHBhcnNlci5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOQ2hhaW5Gcm9tSlNYKCB0YWc6IGFueSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKTogVk5DaGFpblxyXG57XHJcblx0Y29uc3QgY2hhaW46IFZOQ2hhaW4gPSBuZXcgVk5DaGFpbigpO1xyXG5cclxuXHRpZiAodGFnID09PSBtaW0uRnJhZ21lbnQgfHwgdGFnID09PSBcIm1cIilcclxuXHRcdGNoYWluLmFwcGVuZENoYWluKCBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGNoaWxkcmVuKSk7XHJcblx0ZWxzZSBpZiAobWltLkNvbXBvbmVudC5pc1Byb3RvdHlwZU9mKCB0YWcpKVxyXG5cdFx0Y2hhaW4uYXBwZW5kVk4oIG5ldyBDbGFzc1ZOKCB0YWcgYXMgbWltLklDb21wb25lbnRDbGFzcywgcHJvcHMsIGNoaWxkcmVuKSk7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGxldCB0YWdUeXBlOiBzdHJpbmcgPSB0eXBlb2YgdGFnO1xyXG5cdFx0aWYgKHRhZ1R5cGUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0Y2hhaW4uYXBwZW5kVk4oIG5ldyBGdW5jVk4oIHRhZyBhcyBtaW0uRnVuY0NvbXBUeXBlLCBwcm9wcywgY2hpbGRyZW4pKTtcclxuXHRcdGVsc2UgaWYgKHRhZ1R5cGUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdGNoYWluLmFwcGVuZFZOKCBuZXcgRWxtVk4oIHRhZyBhcyBzdHJpbmcsIHByb3BzLCBjaGlsZHJlbikpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJJbnZhbGlkIHRhZyBpbiBqc3ggcHJvY2Vzc2luZyBmdW5jdGlvbjogXCIgKyB0YWcpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cdHJldHVybiBjaGFpbjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21Db250ZW50fSBmcm9tIFwiLi9WTkNoYWluRnVuY3NcIlxyXG5pbXBvcnQgeyBWTlR5cGUgfSBmcm9tIFwiLi9taW1cIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkFjdGlvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgcG9zc2libGUgYWN0aW9ucyB0byBwZXJmb3JtIGZvciBuZXcgbm9kZXMgZHVyaW5nXHJcbiAqIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBWTkRpc3BBY3Rpb25cclxue1xyXG5cdC8qKlxyXG5cdCAqIEVpdGhlciBpdCBpcyBub3QgeWV0IGtub3duIHdoYXQgdG8gZG8gd2l0aCB0aGUgbm9kZSBpdHNlbGYgb3IgdGhpcyBpcyBhIGNvbXBvbmVudCBub2RlLFxyXG5cdCAqIGZvciB3aGljaCBhbiB1cGRhdGUgd2FzIHJlcXVlc3RlZDsgdGhhdCBpcywgb25seSB0aGUgbm9kZSdzIGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIGluc2VydGVkLiBUaGlzIG1lYW5zIHRoYXQgZWl0aGVyIHRoZXJlIHdhcyBubyBjb3VudGVycGFydCBvbGQgbm9kZVxyXG5cdCAqIGZvdW5kIG9yIHRoZSBmb3VuZCBub2RlIGNhbm5vdCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG9uZSBub3IgY2FuIHRoZSBvbGQgbm9kZSBiZSByZXVzZWRcclxuXHQgKiBieSB0aGUgbmV3IG9uZSAoZS5nLiBvZiBkaWZmZXJlbnQgdHlwZSkuXHJcblx0ICovXHJcblx0SW5zZXJ0ID0gMSxcclxuXHJcblx0LyoqIFRoZSBuZXcgbm9kZSBzaG91bGQgYmUgdXNlZCB0byB1cGRhdGUgdGhlIG9sZCBub2RlLiAqL1xyXG5cdFVwZGF0ZSA9IDIsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3BHcm91cCBjbGFzcyBkZXNjcmliZXMgYSBncm91cCBvZiBjb25zZWN1dGl2ZSBWTkRpc3Agb2JqZWN0cyBjb3JyZXNwcG9uZGluZyB0byB0aGVcclxuICogc2VxdWVuY2Ugb2Ygc3ViLW5vZGVzLiBUaGUgZ3JvdXAgaXMgZGVzY3JpYmVkIHVzaW5nIGluZGljZXMgb2YgVk5EaXNwIG9iamVjdHMgaW4gdGhlXHJcbiAqIHN1Yk5vZGVEaXNwIGZpZWxkIG9mIHRoZSBwYXJlbnQgVk5EaXNwIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWTkRpc3BHcm91cFxyXG57XHJcblx0LyoqIHBhcmVudCBWTkRpc3AgdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzICovXHJcblx0cHVibGljIHBhcmVudERpc3A6IFZORGlzcDtcclxuXHRcclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZXMgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGZpcnN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgZmlyc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBsYXN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgbGFzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBncm91cC4gKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3QgLSB0aGlzLmZpcnN0ICsgMSB9O1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBmaXJzdEROOiBETjtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgbGFzdEROOiBETjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyZW50RGlzcDogVk5EaXNwLCBhY3Rpb246IFZORGlzcEFjdGlvbilcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudERpc3AgPSBwYXJlbnREaXNwO1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERldGVybWluZXMgZmlyc3QgYW5kIGxhc3QgRE9NIG5vZGVzIGZvciB0aGUgZ3JvdXAuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBhZnRlciB0aGVcclxuXHQgKiBub2RlcyB3ZXJlIHBoaXNpY2FsbHkgdXBkYXRlZC9pbnNlcnRlZCBhbmQgd2UgY2FuIG9idGFpbiB0aGVpciBET00gbm9kZXMuXHJcblx0ICovXHJcblx0cHVibGljIGRldGVybWluZUROcygpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3Q7IGkgPD0gdGhpcy5sYXN0OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCBkaXNwID0gdGhpcy5wYXJlbnREaXNwLnN1Yk5vZGVEaXNwc1tpXTtcclxuXHRcdFx0bGV0IHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQgPyBkaXNwLm5ld1ZOIDogZGlzcC5vbGRWTjtcclxuXHRcdFx0dGhpcy5maXJzdEROID0gdm4uZ2V0Rmlyc3RETigpO1xyXG5cdFx0XHRpZiAodGhpcy5maXJzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciggbGV0IGkgPSB0aGlzLmxhc3Q7IGkgPj0gdGhpcy5maXJzdDsgaS0tKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdGxldCB2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0ID8gZGlzcC5uZXdWTiA6IGRpc3Aub2xkVk47XHJcblx0XHRcdHRoaXMubGFzdEROID0gdm4uZ2V0TGFzdEROKCk7XHJcblx0XHRcdGlmICh0aGlzLmxhc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3AgY2xhc3MgaXMgYSByZWN1cnNpdmUgc3RydWN0dXJlIHRoYXQgZGVzY3JpYmVzIGEgZGlzcG9zaXRpb24gZm9yIGEgbm9kZSBhbmQgaXRzXHJcbiAqIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVk5EaXNwXHJcbntcclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZSAqL1xyXG5cdHB1YmxpYyBhY3Rpb246IFZORGlzcEFjdGlvbjtcclxuXHJcblx0LyoqIE5ldyB2aXJ0dWFsIG5vZGUgdG8gaW5zZXJ0IG9yIHRvIHVwZGF0ZSBhbiBvbGQgbm9kZSAqL1xyXG5cdHB1YmxpYyBuZXdWTjogVk47XHJcblxyXG5cdC8qKiBPbGQgdmlydHVhbCBub2RlIHRvIGJlIHVwZGF0ZWQuIFRoaXMgaXMgbm90IHVzZWQgZm9yIHRoZSBJbnNlcnQgYWN0aW9uLiAqL1xyXG5cdHB1YmxpYyBvbGRWTjogVk47XHJcblxyXG5cdC8qKiBEaXNwb3NpdGlvbiBmbGFncyBmb3IgdGhlIFVwZGF0ZSBhY3Rpb24uIFRoaXMgaXMgbm90IHVzZWQgZm9yIHRoZSBJbnNlcnQgYWN0aW9ucy4gKi9cclxuXHRwdWJsaWMgdXBkYXRlRGlzcDogVk5VcGRhdGVEaXNwO1xyXG5cclxuXHQvKiogQXJyYXkgb2Ygc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQgZHVyaW5nIHVwZGF0ZSBvZiB0aGUgc3ViLW5vZGVzLiAqL1xyXG5cdHB1YmxpYyBzdWJOb2Rlc1RvUmVtb3ZlOiBWTltdID0gW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFycmF5IG9mIGRpc3Bvc2l0aW9uIG9iamVjdHMgZm9yIHN1Yi1ub2Rlcy4gVGhpcyBpbmNsdWRlcyBub2RlcyB0byBiZSB1cGRhdGVkXHJcblx0ICogYW5kIHRvIGJlIGluc2VydGVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdWJOb2RlRGlzcHM6IFZORGlzcFtdID0gW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBncm91cHMgb2Ygc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuICovXHJcblx0cHVibGljIHN1Yk5vZGVHcm91cHM6IFZORGlzcEdyb3VwW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIElmIHRoZSBub2RlIGhhcyBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2Ygc3ViLW5vZGVzLCB0aGVuIHdlIGJ1aWxkIGdyb3Vwcy4gVGhlIGlkZWEgaXMgdGhhdFxyXG5cdCAqIG90aGVyd2lzZSwgdGhlIG92ZXJoZWFkIG9mIGJ1aWxkaW5nIGdyb3VwcyBpcyBub3Qgd29ydGggaXQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTk9fR1JPVVBfVEhSRVNIT0xEID0gMjtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDb21wYXJlcyBvbGQgYW5kIG5ldyBjaGFpbnMgb2Ygc3ViLW5vZGVzIGFuZCBkZXRlcm1pbmVzIHdoYXQgbm9kZXMgc2hvdWxkIGJlIGNyZWF0ZWQsIGRlbGV0ZWRcclxuXHQgKiBvciB1cGRhdGVkLiBUaGUgcmVzdWx0IGlzIHJlbWVtYmVyZWQgYXMgYW4gYXJyYXkgb2YgVk5EaXNwIG9iamVjdHMgZm9yIGVhY2ggc3ViLW5vZGUgYW5kIGFzXHJcblx0ICogYXJyYXkgb2Ygb2xkIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBkZWxldGVkLiBJbiBhZGRpdGlvbiwgdGhlIG5ldyBzdWItbm9kZXMgYXJlIGRpdmlkZWRcclxuXHQgKiBpbnRvIGdyb3VwcyBvZiBjb25zZWN1dGl2ZSBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIGFuZCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZC5cclxuXHQgKiBUaGUgZ3JvdXBzIGFyZSBidWlsdCBpbiBhIHdheSBzbyB0aGF0IGlmIGEgbm9kZSBzaG91bGQgYmUgbW92ZWQsIGl0cyBlbnRpcmUgZ3JvdXAgaXMgbW92ZWQuXHJcblx0ICovXHJcblx0cHVibGljIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcmVuZGVyIHRoZSBuZXcgY29udGVudC4gV2hldGhlciB3ZSB1c2UgdGhlIG9sZCBvciB0aGUgbmV3IG5vZGUgZm9yIHJlbmRlcmluZyBkZXBlbmRzIG9uXHJcblx0XHQvLyBzZXZlcmFsIGZhY3RvcnNcclxuXHRcdC8vICAtIGlmIGl0IGlzIGFuIEluc2VydCBhY3Rpb24sIHRoZW4gdXNlIHRoZSBuZXcgbm9kZSAob2xkIG5vZGUgaXNuJ3QgZXZlbiBhdmFpbGFibGUpLlxyXG5cdFx0Ly8gIC0gaWYgaXQgaXMgYW4gVXBkYXRlIG9wZXJhdGlvbiwgdGhlbiBmb3IgYWxsIHR5cGVzIG9mIG5vZGVzIGV4Y2VwdCBJbnN0YW5jZVZOLCB1c2VcclxuXHRcdC8vICAgIHRoZSBvbGQgbm9kZS4gRm9yIEluc3RhbmNlVk4gdXNlIHRoZSBuZXcgbm9kZSBiZWNhdXNlIHRoZSBvbGQgbm9kZSBpcyBzdGlsbCBwb2ludGluZ1xyXG5cdFx0Ly8gICAgdG8gdGhlIG9sZCBjb21wb25lbnQgaW5zdGFuY2UuIFdlIGFsc28gcmVseSBvbiB0aGUgZmFjdCB0aGF0IGZvciB0aGUgc3RlbSBub2Rlcywgd2VcclxuXHRcdC8vICAgIGhhdmUgYm90aCBvbGQgYW5kIG5ldyBub2RlcyBwb2ludGluZyB0byB0aGUgc2FtZSBub2RlLlxyXG5cdFx0bGV0IG5ld0NoYWluID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KFxyXG5cdFx0XHRcdHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0IHx8IHRoaXMub2xkVk4udHlwZSA9PT0gVk5UeXBlLkluc3RhbmNlQ29tcFxyXG5cdFx0XHRcdFx0PyB0aGlzLm5ld1ZOLnJlbmRlcigpIDogdGhpcy5vbGRWTi5yZW5kZXIoKSk7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBub2RlcyBhbmQgZmlsbCBhbiBhcnJheSBvZiBWTkRpc3Agb2JqZWN0cyBpbiB0aGUgcGFyZW50IGRpc3AuIEF0IHRoZSBzYW1lXHJcblx0XHQvLyB0aW1lLCBidWlsZCBhIG1hcCB0aGF0IGluY2x1ZGVzIGFsbCBuZXcgbm9kZXMgdGhhdCBoYXZlIGtleXMuIFRoZSB2YWx1ZXMgYXJlIFZORGlzcCBvYmplY3RzLlxyXG5cdFx0bGV0IG5ld0tleWVkTm9kZU1hcCA9IG5ldyBNYXA8YW55LFZORGlzcD4oKTtcclxuXHRcdGZvciggbGV0IG5ld1ZOID0gbmV3Q2hhaW4uZmlyc3Q7IG5ld1ZOICE9PSBudWxsOyBuZXdWTiA9IG5ld1ZOLm5leHQpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdWJOb2RlRGlzcCA9IG5ldyBWTkRpc3AoKTtcclxuXHRcdFx0c3ViTm9kZURpc3AubmV3Vk4gPSBuZXdWTjtcclxuXHRcdFx0dGhpcy5zdWJOb2RlRGlzcHMucHVzaCggc3ViTm9kZURpc3ApO1xyXG5cdFx0XHRpZiAobmV3Vk4ua2V5ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bmV3S2V5ZWROb2RlTWFwLnNldCggbmV3Vk4ua2V5LCBzdWJOb2RlRGlzcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG9sZCBub2RlcyBhbmQgcHV0IHRob3NlIHRoYXQgaGF2ZSBrZXlzIG1hdGNoaW5nIG5ldyBub2RlcyBpbnRvIHRoZSBuZXcgbm9kZXMnIFZORGlzcFxyXG5cdFx0Ly8gb2JqZWN0cy4gUHV0IHRob3NlIHRoYXQgZG9uJ3QgaGF2ZSBrZXlzIG9yIHRoYXQgaGF2ZSBrZXlzIHRoYXQgZG9uJ3QgbWF0Y2ggYW55IG5ldyBub2RlIHRvXHJcblx0XHQvLyBhbiBhcnJheSBvZiBub24tbWF0Y2hpbmcgb2xkIG5vZGVzXHJcblx0XHRsZXQgb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdDogVk5bXSA9IFtdO1xyXG5cdFx0bGV0IG9sZENoYWluID0gdGhpcy5vbGRWTi5zdWJOb2RlcztcclxuXHRcdGZvciggbGV0IG9sZFZOID0gb2xkQ2hhaW4uZmlyc3Q7IG9sZFZOICE9PSBudWxsOyBvbGRWTiA9IG9sZFZOLm5leHQpXHJcblx0XHR7XHJcblx0XHRcdGlmIChvbGRWTi5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRvbGROb25NYXRjaGluZ05vZGVMaXN0LnB1c2goIG9sZFZOKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHN1Yk5vZGVEaXNwID0gbmV3S2V5ZWROb2RlTWFwLmdldCggb2xkVk4ua2V5KTtcclxuXHRcdFx0XHRpZiAoc3ViTm9kZURpc3ApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0XHRcdHN1Yk5vZGVEaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG9sZE5vbk1hdGNoaW5nTm9kZUxpc3QucHVzaCggb2xkVk4pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYnkgbm93IHdlIGhhdmUgYWxsIG9sZCBhbmQgbmV3IG5vZGVzIHdpdGggdGhlIHNhbWUga2V5cyBtYXRjaGVkIHRvIG9uZSBhbm90aGVyLiBOb3cgbG9vcFxyXG5cdFx0Ly8gb3ZlciBuZXcgbm9kZSBkaXNwb3NpdGlvbnMgYW5kIG1hdGNoIHRoZSBub3QteWV0LW1hdGNoZWQgb25lcyAodGhvc2Ugd2l0aCBVbmtub3duIGFjdGlvbilcclxuXHRcdC8vIHRvIG9sZCBub2RlcyBzZXF1ZW50aWFsbHkgZnJvbSB0aGUgbGlzdCBvZiBub24tbWF0Y2hlZCBvbGQgbm9kZXMuXHJcblx0XHRsZXQgb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdExlbmd0aDogbnVtYmVyID0gb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdC5sZW5ndGg7XHJcblx0XHRsZXQgb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdEluZGV4OiBudW1iZXIgPSAwO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgdGhpcy5zdWJOb2RlRGlzcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChzdWJOb2RlRGlzcC5hY3Rpb24pXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRsZXQgb2xkVk46IFZOO1xyXG5cdFx0XHRpZiAob2xkTm9uTWF0Y2hpbmdOb2RlTGlzdEluZGV4IDwgb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdExlbmd0aClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRWTiA9IG9sZE5vbk1hdGNoaW5nTm9kZUxpc3Rbb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdEluZGV4XTtcclxuXHRcdFx0XHRsZXQgbmV3Vk4gPSBzdWJOb2RlRGlzcC5uZXdWTjtcclxuXHRcdFx0XHRpZiAob2xkVk4udHlwZSA9PT0gbmV3Vk4udHlwZSAmJiBvbGRWTi5pc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTikpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gd2UgYXJlIGhlcmUgaWYgdGhlIG5ldyBub2RlIGNhbiB1cGRhdGUgdGhlIG9sZCBvbmVcclxuXHRcdFx0XHRcdHN1Yk5vZGVEaXNwLm9sZFZOID0gb2xkVk47XHJcblx0XHRcdFx0XHRzdWJOb2RlRGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uVXBkYXRlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gd2UgYXJlIGhlcmUgaWYgdGhlIG5ldyBub2RlIGNhbm5vdCB1cGRhdGUgdGhlIG9sZCBvbmUgYW5kIHNob2xkIGNvbXBsZXRlbHlcclxuXHRcdFx0XHRcdC8vIHJlcGxhY2UgaXQuIFdlIGFkZCB0aGUgb2xkIG5vZGUgdG8gdGhlIGxpc3Qgb2YgdGhvc2UgdG8gYmUgcmVtb3ZlZCBhbmQgaW5kaWNhdGVcclxuXHRcdFx0XHRcdC8vIHRoYXQgdGhlIG5ldyBub2RlIHNob3VsZCBiZSBtb3VudGVkLlxyXG5cdFx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKTtcclxuXHRcdFx0XHRcdHN1Yk5vZGVEaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRvbGROb25NYXRjaGluZ05vZGVMaXN0SW5kZXgrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB3ZSBhcmUgaGVyZSBpZiB0aGVyZSBhcmUgbm8gbm9uLW1hdGNoZWQgb2xkIG5vZGVzIGxlZnQuIEluZGljYXRlIHRoYXQgdGhlIG5ldyBub2RlXHJcblx0XHRcdFx0Ly8gc2hvdWxkIGJlIG1vdW50ZWQuXHJcblx0XHRcdFx0c3ViTm9kZURpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG9sZCBub24tbWF0Y2hlZCBub2RlcyBmcm9tIHRoZSBjdXJyZW50IGluZGV4IHRvIHRoZSBlbmQgb2YgdGhlIGxpc3Qgd2lsbCBiZSB1bm1vdW50ZWRcclxuXHRcdGZvciggbGV0IGkgPSBvbGROb25NYXRjaGluZ05vZGVMaXN0SW5kZXg7IGkgPCBvbGROb25NYXRjaGluZ05vZGVMaXN0TGVuZ3RoOyBpKyspXHJcblx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGROb25NYXRjaGluZ05vZGVMaXN0W2ldKTtcclxuXHJcblx0XHRpZiAodGhpcy5zdWJOb2RlRGlzcHMubGVuZ3RoID4gVk5EaXNwLk5PX0dST1VQX1RIUkVTSE9MRClcclxuXHRcdFx0dGhpcy5idWlsZFN1Yk5vZGVHcm91cHMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnJvbSBhIGZsYXQgbGlzdCBvZiBuZXcgc3ViLW5vZGVzIGJ1aWxkcyBncm91cHMgb2YgY29uc2VjdXRpdmUgbm9kZXMgdGhhdCBzaG91bGQgYmUgZWl0aGVyXHJcblx0ICogdXBkYXRlZCBvciBpbnNlcnRlZC5cclxuXHQgKi9cclxuXHRwcml2YXRlIGJ1aWxkU3ViTm9kZUdyb3VwcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGNvdW50ID0gdGhpcy5zdWJOb2RlRGlzcHMubGVuZ3RoO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdC8vIHRoaXMgbWV0aG9kIGlzIG5vdCBzdXBwb3NlZCB0byBiZSBjYWxsZWQgaWYgdGhlIG51bWJlciBvZiBzdWItbm9kZXMgaXMgbGVzcyB0aGVuXHJcblx0XHRcdC8vIHRoZSBwcmUtZGV0ZXJtaW5lZCB0aHJlc2hvbGRcclxuXHRcdFx0aWYgKGNvdW50ID09PSBWTkRpc3AuTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG5cdFx0XHRcdHJldHVybjtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0dGhpcy5zdWJOb2RlR3JvdXBzID0gW107XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHN1Yi1ub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gZGVjaWRlIHdoZXRoZXIgd2UgbmVlZCB0byBvcGVuIGEgbmV3IGdyb3VwXHJcblx0XHQvLyBvciBwdXQgdGhlIGN1cnJlbnQgbm9kZSBpbnRvIHRoZSBleGlzdGluZyBncm91cCBvciBjbG9zZSB0aGUgZXhpc3RpbmcgZ3JvdXAgYW5kIG9wZW5cclxuXHRcdC8vIGEgbmV3IG9uZS5cclxuXHRcdGxldCBncm91cDogVk5EaXNwR3JvdXA7XHJcblx0XHRsZXQgbGFzdERpc3BJbmRleCA9IGNvdW50IC0gMTtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRpc3AgPSB0aGlzLnN1Yk5vZGVEaXNwc1tpXTtcclxuXHRcdFx0aWYgKCFncm91cClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIG9wZW4gYSBuZXcgZ3JvdXBcclxuXHRcdFx0XHRncm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgZGlzcC5hY3Rpb24pO1xyXG5cdFx0XHRcdGdyb3VwLmZpcnN0ID0gaTtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZGlzcC5hY3Rpb24gIT09IGdyb3VwLmFjdGlvbilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBwcmV2aW91cyBpbmRleC4gRGVjcmVtZW50IHRoZSBpdGVyYXRpbmcgaW5kZXggc28gdGhhdFxyXG5cdFx0XHRcdC8vIHRoZSBuZXggaXRlcmF0aW9uIHdpbGwgb3BlbiBhIG5ldyBncm91cC4gTm90ZSB0aGF0IHdlIGNhbm5vdCBiZSBoZXJlIGZvciBhIG5vZGVcclxuXHRcdFx0XHQvLyB0aGF0IHN0YXJ0cyBhIG5ldyBncm91cCBiZWNhdXNlIGZvciBzdWNoIG5vZGUgZGlzcC5hY3Rpb24gPT09IGdyb3VwQWN0aW9uLlxyXG5cdFx0XHRcdGdyb3VwLmxhc3QgPSAtLWk7XHJcblx0XHRcdFx0Z3JvdXAgPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gYW4gXCJ1cGRhdGVcIiBub2RlIGlzIG91dC1vZi1vcmRlciBhbmQgc2hvdWxkIGNsb3NlIHRoZSBjdXJyZW50IGdyb3VwIGlmIGl0cyBuZXh0XHJcblx0XHRcdFx0Ly8gc2libGluZyBpbiB0aGUgbmV3IGxpc3QgaXMgZGlmZmVyZW50IGZyb20gdGhlIG5leHQgc2libGluZyBpbiB0aGUgb2xkIGxpc3QuIFRoZVxyXG5cdFx0XHRcdC8vIGxhc3Qgbm9kZSB3aWxsIGNsb3NlIHRoZSBsYXN0IGdyb3VwIGFmdGVyIHRoZSBsb29wLlxyXG5cdFx0XHRcdGlmIChpICE9PSBsYXN0RGlzcEluZGV4ICYmIHRoaXMuc3ViTm9kZURpc3BzW2krMV0ub2xkVk4gIT09IGRpc3Aub2xkVk4ubmV4dClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgY3VycmVudCBpbmRleC5cclxuXHRcdFx0XHRcdGdyb3VwLmxhc3QgPSBpO1xyXG5cdFx0XHRcdFx0Z3JvdXAgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhbGwgY29uc2VjdXRpdmUgXCJpbnNlcnRcIiBub2RlcyBiZWxvbmcgdG8gdGhlIHNhbWUgZ3JvdXAgc28gd2UganVzdCB3YWl0IGZvciB0aGVcclxuXHRcdFx0Ly8gbmV4dCBub2RlXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY2xvc2UgdGhlIGxhc3QgZ3JvdXBcclxuXHRcdGdyb3VwLmxhc3QgPSBjb3VudCAtIDE7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUV2ZW50U2xvdCwgRXZlbnRTbG90fSBmcm9tIFwiLi9FdmVudFNsb3RcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIHRvIGRlZmluZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIGZ1bmN0aW9uYWwgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBmdW5jdGlvbmFsIGNvbXBvbmVudCB3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGdW5jUHJvcHM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSBSZWFkb25seTxUUHJvcHM+ICZcclxuXHR7XHJcblx0XHRyZWFkb25seSBjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBmdW5jdGlvbnMgcmVwcmVzZW50aW5nIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICpcdFx0RGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY0NvbXBUeXBlPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gKHByb3BzOiBGdW5jUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pID0+IGFueTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tcFByb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IGRlZmluZXMgY29uc3R1Y3RvciBzaWduYXR1cmUgZm9yIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0b2YgdGhpcyB0eXBlLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgb2YgdGhpcyB0eXBlLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50Q2xhc3M8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdG5ldyggcHJvcHM6IFRQcm9wcyk6IElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYWxsIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG4gKlx0XHREZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoaXMgY2xhc3MtYmFzZWQgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50PFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcbntcclxuXHQvKiogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciAqL1xyXG5cdHByb3BzOiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgb3IgY2xlYXJzIHRoZSBzaXRlIG9iamVjdCB0byB0aGUgY29tcG9uZW50LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgdHdpY2U6XHJcblx0ICpcdDEpIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3QgdGltZTogdGhlIGNvbXBvbmVudCBtdXN0IHJlbWVtYmVyIHRoZVxyXG5cdCAqXHRcdHBhc3NlZCBvYmplY3QuXHJcblx0ICpcdDIpIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZDogbnVsbCBpcyBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgYW5kIHRoZSBjb21wb25lbnQgbXVzdFxyXG5cdCAqXHRcdHJlbGVhc2UgdGhlIHJlbWVtYmVyZWQgb2JqZWN0LlxyXG5cdCAqIEBwYXJhbSBzaXRlIFRoZSBzaXRlIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIElDb21wb25lbnRTaXRlIGludGVyZmFjZS4gVGhlIGNvbXBvbmVudCB1c2VzXHJcblx0ICogdGhpcyBvYmplY3QgdG8gaW52b2tlIGRpZmZlcmVudCBzZXJ2aWNlcyBwcm92aWRlZCBieSB0aGUgTWltYmwgaW5mcmFzdHJ1Y3R1cmU7IGZvciBleGFtcGxlXHJcblx0ICogdG8gcmVxdWVzdCBhIHJlLXJlbmRlcmluZy5cclxuXHQgKi9cclxuXHRzZXRTaXRlKCBzaXRlOiBJQ29tcG9uZW50U2l0ZSk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBpcyBhYm91dCB0byByZW5kZXIgaXRzIGNvbnRlbnQgZm9yIHRoZSBmaXJzdCB0aW1lLiBUaGlzIG1ldGhvZFxyXG5cdCAqIGlzIGNhbGxlZCB3aGVuIHRoZSBzaXRlIGhhcyBhbHJlYWR5IGJlZW4gc2V0IHNvIHRoZSBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXMgZnJvbSBpdC5cclxuXHQgKi9cclxuXHRjb21wb25lbnRXaWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQncyBjb250ZW50IHRoYXQgd2lsbCBiZSB1bHRpbWF0ZWx5IHBsYWNlZCBpbnRvIHRoZSBET00gdHJlZS4gKi9cclxuXHRyZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQncyBjb250ZW50IGhhcyBiZWVuIGluc2VydGVkIGludG8gdGhlIERPTSB0cmVlLiBUaGlzIG1ldGhvZCBpc1xyXG5cdCAqIGNhbGxlZCBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGluc3RhbnRpYXRlZCBhbmQgdGhlIGluaXRpYWwgcmVuZGVyaW5nIGhhcyBiZWVuIGRvbmUuXHJcblx0ICovXHJcblx0Y29tcG9uZW50RGlkTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluZm9ybXMgdGhlIGNvbXBvbmVudCB0aGF0IG5ldyBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBzcGVjaWZpZWQuIEF0IHRoZSB0aW1lIG9mIHRoZSBjYWxsXHJcblx0ICogdGhpcy5wcm9wcyByZWZlcnMgdG8gdGhlIFwib2xkXCIgcHJvcGVydGllcy4gSWYgdGhlIGNvbXBvbmVudCByZXR1cm5zIHRydWUsdGhlbiBpdHMgcmVuZGVyXHJcblx0ICogbWV0aG9kIHdpbGwgYmUgY2FsbGVkLiBBdCB0aGF0IHRpbWUsdGhlIG9yaWdpbmFsIHByb3BzIG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgaW50byB0aGVcclxuXHQgKiBjb21wb25lbnQncyBjb25zdHJ1Y3RvciB3aWxsIGhhdmUgdGhlc2UgbmV3IHByb3BlcnRpZXMuIElmIHRoZSBjb21wb25lbnQgZG9lc24ndCBpbXBsZW1lbnRcclxuXHQgKiB0aGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlIG1ldGhvZCBpdCBpcyBhcyB0aG91Z2ggdHJ1ZSBpcyByZXR1cm5lZC4gSWYgdGhlIGNvbXBvbmVudCByZXR1cm5zXHJcblx0ICogZmFsc2UsIHRoZSByZW5kZXIgbWV0aG9kIGlzIG5vdCBjYWxsZWQgYW5kIHRoZSBET00gdHJlZSBvZiB0aGUgY29tcG9uZW50IHJlbWFpbnMgdW5jaGFuZ2VkLlxyXG5cdCAqIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjb21wb25lbnQsIGhvd2V2ZXIsIHN0aWxsIGNoYW5nZS5cclxuXHQgKiBAcGFyYW0gbmV3UHJvcHMgVGhlIG5ldyBwcm9wZXJ0aWVzIHRoYXQgdGhlIHBhcmVudCBjb21wb25lbnQgcHJvdmlkZXMgdG8gdGhpcyBjb21wb25lbnQuXHJcblx0ICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBoYXZlIGl0cyByZW5kZXIgbWV0aG9kIGNhbGxlZCBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdHNob3VsZENvbXBvbmVudFVwZGF0ZT8oIG5ld1Byb3BzOiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pOiBib29sZWFuO1xyXG5cclxuXHQvKiogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50J3MgY29udGVudCBoYXMgYmVlbiB1cGRhdGVkIGluIHRoZSBET00gdHJlZS4gKi9cclxuXHRjb21wb25lbnREaWRVcGRhdGU/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00gdHJlZS4gQWZ0ZXJcclxuXHQgKiB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxyXG5cdCAqL1xyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIGFuIGV4Y2VwdGlvbiB0aGF0IG9jY3VycmVkIGR1cmluZyB0aGUgY29tcG9uZW50J3Mgb3duIHJlbmRlcmluZyBvciByZW5kZXJpbmcgb2ZcclxuXHQgKiBvbmUgb2YgaXRzIGRlc2NlbmRhbnRzLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgb3IgaWYgaXQgdGhyb3dzIGFuIGVycm9yLCB0aGVcclxuXHQgKiBlcnJvciB3aWxsIGJlIHByb3BhZ2F0ZWQgdXAgdGhlIGNoYWluIG9mIGNvbXBvbmVudHMgdW50aWwgaXQgcmVhY2hlcyBhIGNvbXBvbmVudCB0aGF0XHJcblx0ICogaGFuZGxlcyBpdC4gSWYgbm9uZSBvZiB0aGUgY29tcG9uZW50cyBjYW4gaGFuZGxlIHRoZSBlcnJvciwgdGhlIGVudGlyZSB0cmVlIHdpbGwgYmVcclxuXHQgKiB1bm1vdW50ZWQuXHJcblx0ICogQHBhcmFtIGVyciBBbiBleGNlcHRpb24gdGhhdCB3YXMgdGhyb3duIGR1cmluZyB0aGUgY29tcG9uZW50J3Mgb3duIHJlbmRlcmluZyBvciByZW5kZXJpbmdcclxuXHQgKiBvZiBvbmUgb2YgaXRzIGRlc2NlbmRhbnRzLlxyXG5cdCAqIEBwYXJhbSBwYXRoIEFuIGFycmF5IG9mIG5hbWVzIG9mIGNvbXBvbmVudHMgYW5kIGVsZW1lbnRzIGZyb20gdGhlIG1vdW50ZWQgcm9vdCB0byB0aGVcclxuXHQgKiBjb21wb25lbnQgdGhhdCB0aHJldyB0aGUgZXhjZXB0aW9uLiBUaGlzIHBhdGggaXMgcHJvdmlkZWQgbW9zdGx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRyYWNpbmdcclxuXHQgKiBwdXJwb3Nlcy5cclxuXHQgKi9cclxuXHRoYW5kbGVFcnJvcj8oIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgdXBkYXRlIGN5Y2xlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2NoZWR1bGVkRnVuY1R5cGUgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDb21wb25lbnRTaXRlIGludGVyZmFjZSByZXByZXNlbnRzIGEgY29ubmVjdGlvbiBvZiBhIGNvbXBvbmVudCB0byB0aGUgcmVuZGVyaW5nIG1lY2hhbmlzbS5cclxuICogVGhpcyBpbnRlcmZhY2UgaXMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgdXBvbiBpbml0aWFsaXphdGlvbiBhbmQgdGhlIGNvbXBvbmVudCBjYWxscyBpdHNcclxuICogbWV0aG9kcyB0byBnZXQgc2VydmljZXMsIGUuZy4gdG8gcmVxdWVzdCBiZWluZyB1cGRhdGVkIG9yIHRvIHN1YnNjcmliZSB0byBhIHNlcnZpY2UuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRTaXRlXHJcbntcclxuXHQvKiogVGhlIGNvbXBvbmVudCBjYW4gY2FsbCB0aGlzIG1ldGhvZCB0byBzZXQgYSBkaXN0aW5ndWlzaGluZyBkaXNwbGF5IG5hbWUgaWRlbnRpZnlpbmcgdGhlXHJcblx0ICogY29tcG9uZW50IGluc3RhbmNlLiBCeSBkZWZhdWx0LCBkaXNwbGF5IG5hbWUgaXMgc2V0IHVzaW5nIHRoZSBjb21wb25lbnQncyBjbGFzcyBuYW1lIGFuZFxyXG5cdCAqIGtleSAoaWYgc3BlY2lmaWVkKS4gVXBvbiBKYXZhU2NyaXB0IG1pbmlmaWNhdGlvbiwgY2xhc3MgbmFtZXMgY2FuIGJlY29tZSBtZWFuaW5nbGVzcyBhbmRcclxuXHQgKiBjb21wb25lbnRzIGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gc2V0IGEgbmFtZSB3aXRoIHNvbWUgbWVhbmluZy4gRGlzcGxheSBuYW1lIGlzIHVzZWQgZm9yXHJcblx0ICogdHJhY2luZyBhbmQgZGVidWdnaW5nIG9ubHkuXHJcblx0ICogQHBhcmFtIG5hbWUgRGlzcGxheSBuYW1lIHRvIHVzZSBmb3IgdGhpcyBjb21wb25lbnQuXHJcblx0ICovXHJcblx0c2V0RGlzcGxheU5hbWUoIG5hbWU6IHN0cmluZyk6IHZvaWQ7XHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB3aGVuIGl0IG5lZWRzIHRvIGJlIHVwZGF0ZWQuICovXHJcblx0cmVxdWVzdFVwZGF0ZSgpOiB2b2lkO1xyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgd2hlbiBpdCBkZWNpZGVzIHRvIGNhbmNlbCBhIHByZXZpb3VzbHkgcmVxdWVzdGVkXHJcblx0ICogdXBkYXRlIHJlcXVlc3QuXHJcblx0ICovXHJcblx0Y2FuY2VsVXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcblx0ICogaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlIHVwZGF0ZSBjeWNsZS5cclxuXHQgKiBAcGFyYW0gYmVmb3JlVXBkYXRlIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSAodHJ1ZSlcclxuXHQgKiBvciBhZnRlciAoZmFsc2UpIHRoZSB1cGRhdGUgY3ljbGUuXHJcblx0ICovXHJcblx0c2NoZWR1bGVDYWxsKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqIENhbmNlbHMgYSBjYWxsIHRoYXQgaGFzIGJlZW4gc2NoZWR1bGVkIHRvIGJlIG1hZGUgZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZFxyXG5cdCAqIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdGhhdCB3YXMgcHJldmlvdXNseSBwYXNzZWQgdG8gdGhlIHNjaGVkdWxlQ2FsbCBtZXRob2QuXHJcblx0ICogQHBhcmFtIGJlZm9yZVVwZGF0ZSBGbGFnIHRoYXQgd2FzIHBhc3NlZCB0byB0aGUgc2NoZWR1bGVDYWxsIG1ldGhvZC5cclxuXHQgKi9cclxuXHRjYW5jZWxTY2hlZHVsZWRDYWxsKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0ICogY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNlcnZpY2U6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10pOiB2b2lkO1xyXG5cclxuXHQvKiogVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiAqL1xyXG5cdHVucHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKiBTdWJzY3JpYmVzIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gSWYgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgcmVnaXN0ZXJlZFxyXG5cdCAqIGJ5IHRoaXMgb3Igb25lIG9mIHRoZSBhbmNlc3RvciBjb21wb25lbnRzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7XHJcblx0ICogb3RoZXJ3aXNlLCB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluXHJcblx0ICogdW5kZWZpbmVkLiBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IHRoaXMgb3IgYSBjbG9zZXN0XHJcblx0ICogYW5jZXN0b3IgY29tcG9uZW50IGlzIGNoYW5nZWQsdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0ICogVGhlIHVzZVNlbGYgb3B0aW9uYWwgcGFyYW1ldGVyIGRldGVybWluZXMgd2hldGhlciB0aGUgY29tcG9uZW50IGNhbiBzdWJzY3JpYmUgdG8gdGhlXHJcblx0ICogc2VydmljZSBwdWJsaXNoZWQgYnkgaXRzZWxmLiBUaGUgZGVmYXVsdCBpcyBmYWxzZS5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICogQHBhcmFtIHJlZiBcclxuXHQgKiBAcGFyYW0gZGVmYXVsdFNlcnZpY2UgXHJcblx0ICogQHBhcmFtIHVzZVNlbGYgXHJcblx0ICovXHJcblx0c3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCByZWY6IFJlZlByb3BUeXBlPElTZXJ2aWNlRGVmaW5pdGlvbnNbS10+LFxyXG5cdFx0XHRcdFx0ZGVmYXVsdFNlcnZpY2U/OiBJU2VydmljZURlZmluaXRpb25zW0tdLCB1c2VTZWxmPzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8qKiBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlXHJcblx0ICogd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKi9cclxuXHR1bnN1YnNjcmliZVNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQgKiBjb21wb25lbnQgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0ICogdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRnZXRTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSxcclxuXHRcdFx0XHRcdHVzZVNlbGY/OiBib29sZWFuKTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZXJ2aWNlRGVmaW5pdGlvbnMgaW50ZXJmYWNlIHNlcnZlcyBhcyBhIG1hcHBpbmcgYmV0d2VlbiBzZXJ2aWNlIG5hbWVzIGFuZCBzZXJ2aWNlIHR5cGVzLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBpbnRlbmRlZCB0byBiZSBhdWdtZW50ZWQgYnkgbW9kdWxlcyB0aGF0IGRlZmluZSBhbmQvb3IgdXNlIHNwZWNpZmljIHNlcnZpY2VzLlxyXG4gKiBUaGlzIGFsbG93cyBwZXJmb3JtaW5nIHNlcnZpY2UgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcgaW4gdHlwZS1zYWZlIG1hbm5lci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG57XHJcblx0LyoqIEJ1aWx0LWluIGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuICovXHJcblx0XCJTdGRFcnJvckhhbmRsaW5nXCI6IElFcnJvckhhbmRsaW5nU2VydmljZTtcclxuXHJcblx0LyoqXHJcblx0ICogQnVpbHQtaW4gc2VydmljZSBmb3IgbGF6eSBwZW9wbGUgLSBjYW4gYmUgdXNlZCBmb3IgcXVpY2sgcHJvdG90eXBlcyB3aXRob3V0IHRoZSBuZWVkIHRvXHJcblx0ICogYXVnbWVudCB0aGUgaW50ZXJmYWNlLlxyXG5cdCAqL1xyXG5cdFwiYW55XCI6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBjYW4gYmUgaW52b2tlZCB3aGVuIGFuIGVycm9yIC1cclxuICogdXN1YWxseSBhbiBleGNlcHRpb24gLSBpcyBlbmNvdW50ZXJlZCBidXQgY2Fubm90IGJlIGhhbmRsZWQgbG9jYWxseS4gQSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzXHJcbiAqIHRoaXMgc2VydmljZSB3b3VsZCBub3JtYWxseSByZW1lbWJlciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gdXBkYXRlIGl0c2VsZixzbyB0aGF0IGluIGl0c1xyXG4gKiByZW5kZXIgbWV0aG9kIGl0IHdpbGwgcHJlc2VudCB0aGUgZXJyb3IgdG8gdGhlIHVzZXIuXHJcbiAqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaXMgaW1wbGVtZW50ZWQgYnkgdGhlIFJvb3QgVmlydHVhbCBOb2RlIGFzIGEgbGFzdCByZXNvcnQgZm9yIGVycm9yXHJcbiAqIGhhbmRsaW5nLiBUaGUgUm9vdCBWTiB3aWxsIGRpc3BsYXkgYSBzaW1wbGUgVUkgc2hvd2luZyB0aGUgZXJyb3IgYW5kIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG9cclxuICogcmVzdGFydCAtIGluIHRoZSBob3BlIHRoYXQgdGhlIGVycm9yIHdpbGwgbm90IHJlcGVhdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cmVwb3J0RXJyb3IoIGVycjogYW55LHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgY29tcG9uZW50cy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoaXMgY2xhc3MgbXVzdCBpbXBsZW1lbnQgdGhlIHJlbmRlclxyXG4gKiBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPlxyXG57XHJcblx0LyoqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IgKi9cclxuXHRwdWJsaWMgcHJvcHM6IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KVxyXG5cdHtcclxuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHR9XHJcblxyXG5cdC8qKiBTaXRlIG9iamVjdCB0aHJvdWdoIHdoaWNoIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlcy4gKi9cclxuXHRwcm90ZWN0ZWQgc2l0ZTogSUNvbXBvbmVudFNpdGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdC8qKiBEaXNwbGF5IG5hbWUgc3BlY2lmaWVkIGJ5IHRoZSBjb21wb25lbnQuICovXHJcblx0cHJvdGVjdGVkIGRpc3BhbHlOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBTZXRzIG9yIGNsZWFycyB0aGUgc2l0ZSBvYmplY3QgdGhyb3VnaCB3aGljaCBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXMuICovXHJcblx0cHVibGljIHNldFNpdGUoIHNpdGU6IElDb21wb25lbnRTaXRlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuc2l0ZSA9IHNpdGU7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIHNpdGUgaGFzIGp1c3QgYmUgc2V0ICh0aGF0IGlzIHRoZSBjb21wb25lbnQgaXMgYmVpbmcgbW91bnRlZCkgYW5kIHRoZSBkaXNwbGF5TmFtZVxyXG5cdFx0Ly8gcHJvcGVydHkgaXMgZGVmaW5lZCxwYXNzIGl0IG9uIHRvIHRoZSBzaXRlXHJcblx0XHRpZiAoc2l0ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZGlzcGFseU5hbWUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zaXRlLnNldERpc3BsYXlOYW1lKCB0aGlzLmRpc3BhbHlOYW1lKTtcclxuXHR9XHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQncyBjb250ZW50IHRoYXQgd2lsbCBiZSB1bHRpbWF0ZWx5IHBsYWNlZCBpbnRvIHRoZSBET00gdHJlZS4gKi9cclxuXHRwdWJsaWMgYWJzdHJhY3QgcmVuZGVyKCk6IGFueTtcclxuXHJcblx0LyoqIFNldHMgdGhlIGNvbXBvbmVudCdzIGRpc3BsYXkgbmFtZSAqL1xyXG5cdHByb3RlY3RlZCBzZXREaXNwbGF5TmFtZSggZGlzcGFseU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmRpc3BhbHlOYW1lID0gZGlzcGFseU5hbWU7XHJcblx0XHRpZiAodGhpcy5zaXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc2l0ZS5zZXREaXNwbGF5TmFtZSggZGlzcGFseU5hbWUpO1xyXG5cdH1cclxuXHJcblx0LyoqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHRvIHJlcXVlc3QgdG8gYmUgdXBkYXRlZC4gKi9cclxuXHRwcm90ZWN0ZWQgdXBkYXRlTWUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNpdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zaXRlLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHRvIGlnbm9yZSBhbnkgdXBkYXRlL2RlbGV0ZS9yZXBsYWNlIHJlcXVlc3RzXHJcblx0Ly8gdGhhdCBoYXZlIGJlZW4gbWFkZSBieSB0aGUgY29tcG9uZW50IGR1cmluZyB0aGUgY3VycmVudCBKYXZhU2NyaXB0IGV2ZW50IGxvb3AuXHJcblx0cHJvdGVjdGVkIGlnbm9yZU1lKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zaXRlICE9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnNpdGUuY2FuY2VsVXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgdG8gc2NoZWR1bGUgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uIHRoZSBuZXh0XHJcblx0ICogdXBkYXRlIGN5Y2xlIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGFyZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSBiZWZvcmVVcGRhdGUgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlICh0cnVlKVxyXG5cdCAqIG9yIGFmdGVyIChmYWxzZSkgdGhlIHVwZGF0ZSBjeWNsZS5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY2FsbE1lKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2l0ZSAhPT0gbnVsbClcclxuXHRcdFx0dGhpcy5zaXRlLnNjaGVkdWxlQ2FsbCggZnVuYywgYmVmb3JlVXBkYXRlKTtcclxuXHR9XHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byBjYW5jZWwgYSBzY2hlZHVsZWQgZnVuY3Rpb24uICovXHJcblx0cHJvdGVjdGVkIGRvbnRDYWxsTWUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zaXRlICE9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnNpdGUuY2FuY2VsU2NoZWR1bGVkQ2FsbCggZnVuYywgYmVmb3JlVXBkYXRlKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgZXZlbnQgaGFuZGxlciB0aGF0IGlzIGludm9rZWQgd2hlbiByZWZlcmVuY2UgdmFsdWUgY2hhbmdlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlZkZ1bmM8VD4gPSAobmV3UmVmOiBUKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVmZXJlbmNlIGNsYXNzIHRvIHVzZSB3aGVuZXZlciBhIHJlZmVyZW5jZSB0byBhbiBvYmplY3QgaXMgbmVlZGVkIC0gZm9yIGV4YW1wbGUsIHdpdGggSlNYIGByZWZgXHJcbiAqIGF0dHJpYnV0ZXMgYW5kIHNlcnZpY2VzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlZjxUPlxyXG57XHJcblx0cHJpdmF0ZSBfcjogVDtcclxuXHJcblx0LyoqIEV2ZW50IHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgcmVmZXJlbmNlZCB2YWx1ZSBjaGFuZ2VzICovXHJcblx0cHVibGljIGNoYW5nZWRFdmVudDogSUV2ZW50U2xvdDxSZWZGdW5jPFQ+PiA9IG5ldyBFdmVudFNsb3Q8UmVmRnVuYzxUPj4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IoIGxpc3RlbmVyPzogUmVmRnVuYzxUPiwgaW5pdGlhbFJlZmVyZW5lPzogVClcclxuXHR7XHJcblx0XHRpZiAobGlzdGVuZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuYWRkKCBsaXN0ZW5lcik7XHJcblxyXG5cdFx0dGhpcy5fciA9IGluaXRpYWxSZWZlcmVuZTtcclxuXHR9XHJcblxyXG5cdC8qKiBBZGRzIGEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgdmF1ZSBvZiB0aGUgcmVmZXJuY2UgY2hhbmdlcy4gKi9cclxuXHRwdWJsaWMgYWRkTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmFkZCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJlbW92ZXMgYSBjYWxsYmFjayB0aGF0IHdhcyBhZGRlZCB3aXRoIGFkZExpc3RlbmVyLiAqL1xyXG5cdHB1YmxpYyByZW1vdmVMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQucmVtb3ZlKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogR2V0IGFjY2Vzc29ycyB0byB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIGdldCByKCk6IFQgeyByZXR1cm4gdGhpcy5fcjsgfVxyXG5cclxuXHQvKiogU2V0IGFjY2Vzc29ycyB0byB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIHNldCByKCBuZXdSZWY6IFQpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuX3IgIT09IG5ld1JlZilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fciA9IG5ld1JlZjtcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZmlyZSggbmV3UmVmKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKiBDbGVhcnMgdGhlIHJlZmVyZW5jZSB2YWx1ZSBhbmQgYWxzbyBjbGVhcnMgYWxsIGFsbCByZWdpc3RlcmVkIGxpc3RlbmVycyAqL1xyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5fciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmNsZWFyKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAvL1xyXG4vLyAvLyBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHJlZmVyZW5jZSBwcm9wZXJ0aWVzIHdpdGhvdXQgdGhlIG5lZWQgdG8gbWFudWFsbHkgY3JlYXRlXHJcbi8vIC8vIFJlZjw+IGluc3RhbmNlcy4gVGhpcyBhbGxvd3MgZm9yIHRoZSBmb2xsb3dpbmcgY29kZSBwYXR0ZXJuOlxyXG4vLyAvL1xyXG4vLyAvL1x0Y2xhc3MgQSBleHRlbmRzIENvbXBvbmVudFxyXG4vLyAvL1x0e1xyXG4vLyAvL1x0XHRAcmVmIG15RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuLy8gLy9cdFx0cmVuZGVyKCkgeyByZXR1cm4gPGRpdiByZWY9e215RGl2fT5IZWxsbzwvZGl2PjsgfVxyXG4vLyAvL1x0fVxyXG4vLyAvL1xyXG4vLyAvLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIG15RGl2IHByb3BlcnR5IHdpbGwgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkIHdoZW4gZmlyc3QgYWNjZXNzZWQuIFRoZVxyXG4vLyAvLyBhY3R1YWwgb2JqZWN0IHdpbGwgYmUgYSBQcm94eSB0byBSZWY8PiBvZiB0aGUgZ2l2ZW4gdHlwZSAoSFRNTERpdkVsZW1lbnQgaW4gdGhpcyBjYXNlKS5cclxuLy8gLy9cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiByZWYoIHRhcmdldCwgbmFtZSlcclxuLy8ge1xyXG4vLyBcdGZ1bmN0aW9uIHJlZkdldCggb2JqLCBrZXkpXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWYgKGtleSA9PT0gXCJyXCIpXHJcbi8vIFx0XHRcdHJldHVybiBvYmoucjtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0cmV0dXJuIG9iai5yW2tleV07XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRmdW5jdGlvbiByZWZTZXQoIG9iaiwga2V5LCB2YWwsIHJlY2VpdmVyKTogYm9vbGVhblxyXG4vLyBcdHtcclxuLy8gXHRcdGlmIChrZXkgPT09IFwiclwiKVxyXG4vLyBcdFx0XHRvYmouciA9IHZhbDtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0b2JqLnJba2V5XSA9IHZhbDtcclxuXHJcbi8vIFx0XHRyZXR1cm4gdHJ1ZTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGZ1bmN0aW9uIGVuc3VyZVByb3h5KCB0aGlzT2JqOiBhbnksIGF0dHJOYW1lOiBzdHJpbmcpOiBhbnlcclxuLy8gXHR7XHJcbi8vIFx0XHRsZXQgcHJveHkgPSB0aGlzT2JqW2F0dHJOYW1lXTtcclxuLy8gXHRcdGlmICghcHJveHkpXHJcbi8vIFx0XHR7XHJcbi8vIFx0XHRcdHByb3h5ID0gbmV3IFByb3h5KCBuZXcgUmVmPGFueT4oKSwgeyBnZXQ6IHJlZkdldCwgc2V0OiByZWZTZXQgfSk7XHJcbi8vIFx0XHRcdHRoaXNPYmpbYXR0ck5hbWVdID0gcHJveHk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRyZXR1cm4gcHJveHk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRsZXQgYXR0ck5hbWUgPSBcIl9yZWZfXCIgKyBuYW1lO1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLFxyXG4vLyBcdFx0e1xyXG4vLyBcdFx0XHRzZXQoIHZhbCkgeyBlbnN1cmVQcm94eSggdGhpcywgYXR0ck5hbWUpLnIgPSB2YWw7IH0sXHJcbi8vIFx0XHRcdGdldCgpIHsgcmV0dXJuIGVuc3VyZVByb3h5KCB0aGlzLCBhdHRyTmFtZSk7IH1cclxuLy8gXHRcdH1cclxuLy8gXHQpO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIHJlZiBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gSlNYIGVsZW1lbnRzIGFuZCBjb21wb25lbnRzLiBUaGlzIGNhbiBiZSBlaXRoZXIgdGhlXHJcbiAqIFtbUmVmXV0gY2xhc3Mgb3IgW1tSZWZGdW5jXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZQcm9wVHlwZTxUPiA9IFJlZjxUPiB8IFJlZkZ1bmM8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIHRoYXQgdGFrZXMgY2FyZSBvZiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mXHJcbiAqIHJlZmVyZW5jZXMuIFRoZSBvcHRpb25hbCBgb25seUlmYCBwYXJhbWV0ZXIgbWF5IHNwZWNpZnkgYSB2YWx1ZSBzbyB0aGF0IG9ubHkgaWYgdGhlIHJlZmVyZW5jZVxyXG4gKiBjdXJyZW50bHkgaGFzIHRoZSBzYW1lIHZhbHVlIGl0IHdpbGwgYmUgcmVwbGFjZWQuIFRoaXMgbWlnaHQgYmUgbmVlZGVkIHRvIG5vdCBjbGVhciBhXHJcbiAqIHJlZmVyZW5jZSBpZiBpdCBhbHJlYWR5IHBvaW50cyB0byBhIGRpZmZlcmVudCBvYmplY3QuXHJcbiAqIEBwYXJhbSByZWYgW1tSZWZdXSBvYmplY3QgdG8gd2hpY2ggdGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldFxyXG4gKiBAcGFyYW0gdmFsIFJlZmVyZW5jZSB2YWx1ZSB0byBzZXQgdG8gdGhlIFJlZiBvYmplY3RcclxuICogQHBhcmFtIG9ubHlJZiBBbiBvcHRpb25hbCB2YWx1ZSB0byB3aGljaCB0byBjb21wYXJlIHRoZSBjdXJyZW50IChvbGQpIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UuXHJcbiAqIFRoZSBuZXcgdmFsdWUgd2lsbCBiZSBzZXQgb25seSBpZiB0aGUgb2xkIHZhbHVlIGVxdWFscyB0aGUgYG9ubHlJZmAgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmPFQ+KCByZWY6IFJlZlByb3BUeXBlPFQ+LCB2YWw6IFQsIG9ubHlJZj86IFQpOiB2b2lkXHJcbntcclxuXHRpZiAodHlwZW9mIHJlZiA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRsZXQgcmVmT2JqID0gcmVmIGFzIFJlZjxUPjtcclxuXHRcdGlmIChvbmx5SWYgPT09IHVuZGVmaW5lZCB8fCByZWZPYmouciA9PT0gb25seUlmKVxyXG5cdFx0XHRyZWZPYmouciA9IHZhbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0KHJlZiBhcyBSZWZGdW5jPFQ+KSh2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIHByb3BlcnRpZXMgd2l0aCBhIHNldCBtZXRob2QgdGhhdCBjYWxscyB0aGUgdXBkYXRlTWUgbWV0aG9kXHJcbiAqIHdoZW5ldmVyIHRoZSBwcm9wZXJ0eSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKlxyXG4gKlx0YGBgdHN4XHJcbiAqXHRjbGFzcyBDaGlsZCBleHRlbmRzIENvbXBvbmVudFxyXG4gKlx0e1xyXG4gKlx0XHRAbWltLnByb3AgdGV4dDogc3RyaW5nID0gXCJIZWxsbyFcIjtcclxuICpcdFx0cmVuZGVyKClcclxuICpcdFx0e1xyXG4gKlx0IFx0XHRyZXR1cm4gPGRpdj57dGV4dH08L2Rpdj5cclxuICpcdFx0fVxyXG4gICpcdH1cclxuKlxyXG4gKlx0Y2xhc3MgUGFyZW50IGV4dGVuZHMgQ29tcG9uZW50XHJcbiAqXHR7XHJcbiAqXHRcdGNoaWxkID0gbmV3IENoaWxkKCk7XHJcbiAqXHRcdHJlbmRlcigpXHJcbiAqXHRcdHtcclxuICpcdFx0XHRyZXR1cm4gPGRpdiBjbGljaz17KCkgPT4gdGhpcy5jaGlsZC50ZXh0ICs9IFwiIGFnYWluXCJ9Pnt0aGlzLmNoaWxkfTwvZGl2PlxyXG4gKlx0XHR9XHJcbiAqXHR9XHJcbiAqXHRgYGBcclxuICpcclxuICogSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSBDaGlsZCBjb21wb25lbnQgd2lsbCBiZSByZS1yZW5kZXJlZCB3aGVuIGl0cyBgdGV4dGAgcHJvcGVydHkgY2hhbmdlcy5cclxuICogVGhlIFBhcmVudCBjb21wb25lbnQgYXBwZW5kcyB0aGUgd29yZCBcImFnYWluXCIgdG8gdGhlIENoaWxkIGNvbXBvbmVudCdzIHRleHQgd2hlbmV2ZXIgdGhlIHVzZXJcclxuICogY2xpY2tzIG9uIGl0LlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0gbmFtZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9wKCB0YXJnZXQsIG5hbWU6IHN0cmluZylcclxue1xyXG5cdGxldCBhdHRyTmFtZSA9IFwiX21fXCIgKyBuYW1lO1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLFxyXG5cdFx0e1xyXG5cdFx0XHRzZXQoIHZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdmFsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXNbYXR0ck5hbWVdID0gdmFsO1xyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0KCkgeyByZXR1cm4gdGhpc1thdHRyTmFtZV07IH1cclxuXHRcdH1cclxuXHQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBbiBhcnRpZmljaWFsIFwiZnJhZ21lbnRcIiBjb21wb25lbnQgdGhhdCBpcyBvbmx5IHVzZWQgYXMgYSB0ZW1wb3JhcnkgY29sbGVjdGlvbiBvZiBvdGhlciBpdGVtc1xyXG4gKiBpbiBwbGFjZXMgd2hlcmUgSlNYIG9ubHkgYWxsb3dzIGEgc2luZ2xlIGl0ZW0uIE91ciBKU1ggZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVzIGEgdmlydHVhbCBub2RlXHJcbiAqIGZvciBpdHMgY2hpbGRyZW4sIGJ1dCBsYXRlciB0aGlzIG5vZGUgaXMgdGhyb3duIGF3YXkgYW5kIG9ubHkgY2hpbGRyZW4gYXJlIHVzZWQuIFRoaXMgY29tcG9uZW50XHJcbiAqIGlzIG9ubHkgbmVlZGVkIGJlY2F1c2UgY3VycmVudGx5IFR5cGVTY3JpcHQgZG9lc24ndCBhbG93IHRoZSA8PiBmcmFnbWVudCBub3RhdGlvbiBpZiBhIGN1c3RvbVxyXG4gKiBKU1ggZmFjdG9yeSBmdW5jdGlvbiBpcyB1c2VkLlxyXG4gKlxyXG4gKiBVc2UgaXQgYXMgZm9sbG93aW5nOlxyXG4gKlxyXG4gKlx0aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbiAqXHQuLi4uLlxyXG4gKlx0cmVuZGVyKClcclxuICpcdHtcclxuICpcdFx0cmV0dXJuIDxtaW0uRnJhZ21lbnQ+XHJcbiAqXHRcdFx0PGRpdjEvPlxyXG4gKlx0XHRcdDxkaXYyLz5cclxuICpcdFx0XHQ8ZGl2My8+XHJcbiAqXHRcdDwvbWltLkZyYWdtZW50PlxyXG4gKlx0fVxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRnJhZ21lbnQoIHByb3BzOiBDb21wUHJvcHM8e30+KTogYW55IHt9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gYWJpbGl0eSB0byBoYW5kbGUgY3VzdG9tIHByb3BlcnRpZXMgdGhhdCBjYW5cclxuICogYmUgYXBwbGllZCB0byBpbnRyaW5zaWMgKEhUTUwgb3IgU1ZHKSBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8VD5cclxue1xyXG5cdGluaXRpYWxpemUoIGVsbVZOOiBJRWxtVk4sIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IFQpOiB2b2lkO1xyXG5cdHRlcm1pbmF0ZSgpOiB2b2lkO1xyXG5cdHVwZGF0ZSggb2xkUHJvcFZhbDogVCwgbmV3UHJvcFZhbDogVCk6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFxyXG4gKiBUaGUgSUN1c3RvbUF0dHJpYnV0ZUZhY3RvcnkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gYWJpbGl0eSB0byBjcmVhdGUgb2JqZWN0cyBmb3IgaGFuZGxpbmdcclxuICogY3VzdG9tIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBpbnRyaW5zaWMgKEhUTUwgb3IgU1ZHKSBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUF0dHJpYnV0ZUZhY3Rvcnk8VD5cclxue1xyXG5cdGNyZWF0ZUhhbmRsZXIoIHByb3BOYW1lOiBzdHJpbmcpOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGN1c3RvbSBhdHRyaWJ1dGUgZnVuY3RvcnkgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgbmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG4gKiBAcGFyYW0gZmFjdG9yeSBjdXN0b20gcHJvcGVydHkgZmFjdG9yeVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlPFQ+KCBwcm9wTmFtZTogc3RyaW5nLCBmYWN0b3J5OiBJQ3VzdG9tQXR0cmlidXRlRmFjdG9yeTxUPik6IHZvaWRcclxue1xyXG5cdHNfcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUoIHByb3BOYW1lLCBmYWN0b3J5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZ1bmNQcm94eSBjb21wb25lbnQgd3JhcHMgYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGNvbnRlbnQuIFByb3hpZXMgY2FuIHdyYXAgaW5zdGFuY2VcclxuICogbWV0aG9kcyBvZiBjbGFzc2VzIHRoYXQgaGF2ZSBhY2Nlc3MgdG8gXCJ0aGlzXCIgdGh1cyBhbGxvd2luZyBhIHNpbmdsZSBjbGFzcyB0byBcImhvc3RcIiBtdWx0aXBsZVxyXG4gKiBjb21wb25lbnRzIHRoYXQgY2FuIGJlIHVwZGF0ZWQgc2VwYXJhdGVseS4gVGhpcyBpcyBlc3BlY2lhbGx5IHVzZWZ1bCB3aGVuIHRoZXJlIGlzIGEgaGllcmFyY2h5XHJcbiAqIG9mIGRlcml2ZWQgY2xhc3NlcyBhbmQgKHZpcnR1YWwpIG1ldGhvZHMgdGhhdCBkZWxpdmVyIHNldmVyYWwgcGllY2VzIG9mIGNvbnRlbnQuIEZ1bmNQcm94aWVzXHJcbiAqIGNhbiB3cmFwIHRoZXNlIHZpcnR1YWwgbWV0aG9kcyAob3Igb3RoZXIgbWV0aG9kcyB0aGF0IGNhbGwgdGhlbSkgc28gdGhhdCB0aGUgY29udGVudCBwaWVjZXNcclxuICogY2FuIGJlIHVwZGF0ZWQgc2VwYXJhdGVseS4gRnVuY1Byb3h5IGhhcyBhIHB1YmxpYyBVcGRhdGUgbWV0aG9kIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byBjYXVzZVxyXG4gKiB0aGUgcmVuZGVyaW5nIG1lY2hhbmlzbSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdyYXBwZWQgYnkgdGhlIEZ1bmNQcm94eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHkgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBmdW5jOiAoKSA9PiBhbnkpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmZ1bmMgPSBmdW5jO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZSA9ICgpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2l0ZSlcclxuXHRcdFx0dGhpcy5zaXRlLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZnVuYzogKCkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgV2FpdGluZyBjb21wb25lbnQgd3JhcHMgYSBQcm9taXNlIGFuZCByZXBsYWNlcyBpdHMgY29udGVudCB3aGVuIHRoZSBwcm9taXNlIGlzIHNldHRsZWQuXHJcbiAqIEJlZm9yZSB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkLCB0aGUgY29tcG9uZW50IGRpc3BsYXlzIGFuIG9wdGlvbmFsIFwiaW4tcHJvZ3Jlc3NcIiBjb250ZW50XHJcbiAqIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuIElmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLCB0aGUgY29tcG9uZW50IHdpbGwgZWl0aGVyIGRpc3BsYXlcclxuICogdGhlIFwiZXJyb3JcIiBjb250ZW50IG9idGFpbmVkIGJ5IGNhbGxpbmcgYSBmdW5jdGlvbnMgc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3RvciBvciBpZiBzdWNoXHJcbiAqIGZ1bmN0aW9uIGlzIG5vdCBzcGVjaWZpZWQgc2hvdyBlbXB0eSBjb250ZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFdhaXRpbmcgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgdGhlIG9iamVjdFxyXG5cdCAqIEBwYXJhbSBwcm9taXNlIFByb21pc2Ugb2JqZWN0IHRvIHdhaXQgZm9yXHJcblx0ICogQHBhcmFtIHByb2dyZXNzQ29udGVudCBDb250ZW50IHRvIGRpc3BsYXkgd2hpbGUgd2FpdGluZyBmb3IgdGhlIHByb21pc2VcclxuXHQgKiBAcGFyYW0gZXJyb3JDb250ZW50RnVuYyBDb250ZW50IHRvIGRpc3BsYXkgaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWRcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvciggcHJvbWlzZTogUHJvbWlzZTxhbnk+LCBwcm9ncmVzc0NvbnRlbnQ/OiBhbnksIGVycm9yQ29udGVudEZ1bmM/OiAoZXJyOiBhbnkpID0+IGFueSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuY29udGVudCA9IHByb2dyZXNzQ29udGVudDtcclxuXHJcblx0XHR0aGlzLndhdGNoUHJvbWlzZSggcHJvbWlzZSwgZXJyb3JDb250ZW50RnVuYyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIHdhdGNoUHJvbWlzZShwcm9taXNlOiBQcm9taXNlPGFueT4sZXJyb3JDb250ZW50RnVuYz86IChlcnI6IGFueSkgPT4gYW55KTogUHJvbWlzZTxhbnk+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IGF3YWl0IHByb21pc2U7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cdFx0XHRpZiAoZXJyb3JDb250ZW50RnVuYyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50ID0gZXJyb3JDb250ZW50RnVuYyggZXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2goYW5vdGhlckVycilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNvbnRlbnQ6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogRGVmaW5lcyB0eXBlcyBvZiB2aXJ0dWFsIERPTSBub2RlcyAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBWTlR5cGVcclxue1xyXG5cdC8vIFRvcC1sZXZlbCBub2RlXHJcblx0Um9vdCxcclxuXHJcblx0Ly8gQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIGNvbXBvbmVudCBjcmVhdGVkIHZpYSBuZXdcclxuXHRJbnN0YW5jZUNvbXAsXHJcblxyXG5cdC8vIENsYXNzLWJhc2VkIChzdGF0ZS1mdWxsKSBKU1gtYmFzZWQgY29tcG9uZW50IGxhaWQgb3V0IHVzaW5nIEpTWFxyXG5cdENsYXNzQ29tcCxcclxuXHJcblx0Ly8gU3RhdGVsZXNzIGNvbXBvbmVudCAoc2ltcGxlIHJlbmRlcmluZyBmdW5jdGlvbiBhY2NlcHRpbmcgcHJvcHMpXHJcblx0RnVuY0NvbXAsXHJcblxyXG5cdC8vIERPTSBlbGVtZW50IChIVE1MIG9yIFNWRykgbGFpZCBvdXQgdXNpbmcgSlNYLlxyXG5cdEVsbSxcclxuXHJcblx0Ly8gVGV4dCBub2RlXHJcblx0VGV4dCxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWTkNoYWluIGludGVyZmFjZSByZXByZXNlbnQgYSBkb3VibHktbGlua2VkIGxpc3Qgb2YgdmlydHVhbCBub2Rlcy4gVGhpcyBpcyB0aGUgb2JqZWN0XHJcbiAqIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSB0aGUgSlNYIHByb2Nlc3NpbmcgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWTkNoYWluXHJcbntcclxuXHQvKiogRmlyc3Qgbm9kZSBpbiB0aGUgY2hhaW4uICovXHJcblx0cmVhZG9ubHkgRmlyc3Q6IElWTm9kZTtcclxuXHJcblx0LyoqIExhc3Qgbm9kZSBpbiB0aGUgY2hhaW4uICovXHJcblx0cmVhZG9ubHkgTGFzdDogSVZOb2RlO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBjaGFpbi4gKi9cclxuXHRyZWFkb25seSBDb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZOb2RlIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlLiBUaHJvdWdoIHRoaXMgaW50ZXJmYWNlLCBjYWxsZXJzIGNhbiBwZXJmb3JtXHJcbiAqIG1vc3QgY29tbW9uIGFjdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIG9uIGV2ZXJ5IHR5cGUgb2YgdmlydHVhbCBub2RlLiBFYWNoIHR5cGUgb2YgdmlydHVhbCBub2RlXHJcbiAqIGFsc28gaW1wbGVtZW50cyBhIG1vcmUgc3BlY2lmaWMgaW50ZXJmYWNlIHRocm91Z2ggd2hpY2ggdGhlIHNwZWNpZmljIGNhcGFiaWxpdGllcyBvZiB0aGUgbm9kZVxyXG4gKiB0eXBlIGFyZSBhdmFpbGJhbGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgbm9kZSB0eXBlLiAqL1xyXG5cdHJlYWRvbmx5IFR5cGU6IFZOVHlwZTtcclxuXHJcblx0LyoqIEdldHMgbm9kZSdzIHBhcmVudC4gKi9cclxuXHRyZWFkb25seSBQYXJlbnQ6IElWTm9kZTtcclxuXHJcblx0LyoqIEdldHMgbm9kZSdzIG5leHQgc2libGluZy4gKi9cclxuXHRyZWFkb25seSBOZXh0OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwcmV2aW91cyBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IFByZXY6IElWTm9kZTtcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3ViLW5vZGVzLiAqL1xyXG5cdHJlYWRvbmx5IFN1Yk5vZGVzOiBJVk5DaGFpbjtcclxuXHJcblx0LyoqIEdldHMgbm9kZSdzIGRpc3BsYXkgbmFtZS4gKi9cclxuXHRyZWFkb25seSBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUluc3RhbmNlVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgY29tcG9uZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJSW5zdGFuY2VWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBpbnN0YW5jZS4gKi9cclxuXHRyZWFkb25seSBDb21wOiBJQ29tcG9uZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNsYXNzVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgSlNYLWJhc2VkIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgY2xhc3MuICovXHJcblx0cmVhZG9ubHkgQ29tcENsYXNzOiBJQ29tcG9uZW50Q2xhc3M7XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgaW5zdGFuY2UuICovXHJcblx0cmVhZG9ubHkgQ29tcDogSUNvbXBvbmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogIFRoZSBJRWxtVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgRE9NIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbG1WTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGVsZW1lbnQgbmFtZS4gKi9cclxuXHRyZWFkb25seSBFbG1OYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGVsZW1lbnQgaXMgYW4gU1ZHIChhcyBvcHBvc2VkIHRvIEhUTUwpLiAqL1xyXG5cdHJlYWRvbmx5IElzU3ZnOiBib29sZWFuO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgZWxlbWVudCBpbnN0YW5jZS4gKi9cclxuXHRyZWFkb25seSBFbG06IEVsZW1lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVGV4dFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIHRleHQgRE9NIG5vZGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0Vk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBUZXh0IG9mIHRoZSBub2RlLiAqL1xyXG5cdFRleHQ6IHN0cmluZztcclxuXHJcblx0LyoqIFRleHQgRE9NIG5vZGUuICovXHJcblx0VGV4dE5vZGU6IFRleHQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBTdHlsZXNcclxuICovXHJcbmV4cG9ydCB0eXBlIFN0eWxlUHJvcFR5cGUgPSBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3IgRE9NIGV2ZW50cyBvZiB0eXBlIFQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSAoZTogVCkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50XHJcbiAqIGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRGbGFnVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFVuaW9uIHR5cGUgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFuIEVsZW1lbnQncyBldmVudC4gSXQgaXMgZWl0aGVyIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25cclxuICogb3IgYSB0dXBsZSBjb25zaXN0aW5nIG9mIHRoZSBoYW5kbGVyIGZ1bmN0aW9uIGFuZCB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50XHJcbiAqIGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudFByb3BUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBFdmVudEZ1bmNUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kRmxhZ1R5cGU8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbW1vblByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSlNYIGVsZW1lbnRzIC1cclxuICogaW50cmluc2ljIChIVE1MIGFuZCBTVkcpIGFzIHdlbGwgYXMgZnVuY3Rpb25hbCBhbmQgY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogVW5pcXVlIGtleSB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhpcyBKU1ggZWxlbWVudCBmcm9tIGl0cyBzaWJsaW5ncy4gVGhlIGtleSBjYW4gYmUgb2YgYW55IHR5cGUuICovXHJcblx0a2V5PzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBwcm9wZXJ0eSB0eXBlcyB1c2VkIGJ5IEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgdHlwZSBDb2xvclByb3BUeXBlID0gc3RyaW5nO1xyXG5leHBvcnQgdHlwZSBDcm9zc29yaWdpblByb3BUeXBlID0gXCJhbm9ueW1vdXNcIiB8IFwidXNlLWNyZWRlbnRpYWxzXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1lbmN0eXBlUHJvcFR5cGUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIHwgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfCBcInRleHQvcGxhaW5cIjtcclxuZXhwb3J0IHR5cGUgRm9ybW1ldGhvZFByb3BUeXBlID0gXCJnZXRcIiB8IFwicG9zdFwiIHwgXCJkaWFsb2dcIjtcclxuZXhwb3J0IHR5cGUgRm9ybXRhcmdldFByb3BUeXBlID0gc3RyaW5nIHwgXCJfc2VsZlwiIHwgXCJfYmxhbmtcIiB8IFwiX3BhcmVudFwifCBcIl90b3BcIjtcclxuZXhwb3J0IHR5cGUgUmVmZXJyZXJQb2xpY3lQcm9wVHlwZSA9IFwibm8tcmVmZXJyZXJcIiB8IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIiB8IFwib3JpZ2luXCIgfFxyXG5cdFx0XCJvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiB8IFwidW5zYWZlLXVybFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRWxlbWVudFByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgKGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycylcclxuICogdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudFByb3BzPFRSZWYsVENoaWxkcmVuID0gYW55PiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0Ly9cclxuXHQvKiogUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBlbGVtZW50IGFmdGVyIGl0IGlzIGNyZWF0ZWQgKG1vdW50ZWQpLiBUaGVcclxuXHQgKiByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHQgKi9cclxuXHRyZWY/OiBSZWZQcm9wVHlwZTxUUmVmPjtcclxuXHJcblx0LyoqIENoaWxkcmVuIHRoYXQgY2FuIGJlIHN1cHBsaWVkIHRvIHRoZSBlbGVtZW50ICovXHJcblx0Y2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblxyXG5cdGNsYXNzPzogc3RyaW5nXHJcblx0ZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuXHRkcm9wem9uZSA/OiBcImNvcHlcIiB8IFwibW92ZVwiIHwgXCJsaW5rXCI7XHJcblx0aWQ/OiBzdHJpbmcgfCBudW1iZXI7XHJcblx0bGFuZz86IHN0cmluZztcclxuXHRyb2xlPzogc3RyaW5nO1xyXG5cdHN0eWxlPzogU3R5bGVQcm9wVHlwZTtcclxuXHR0YWJpbmRleD86IG51bWJlcjtcclxuXHJcblx0Ly8gZ2xvYmFsIGV2ZW50c1xyXG5cdGFib3J0PzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRhbmltYXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25pdGVyYXRpb24/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGF1eGNsaWNrPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Ymx1cj86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Y2FuY2VsPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2FucGxheT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXl0aHJvdWdoPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2xpY2s/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGNsb3NlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y29udGV4dG1lbnU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGN1ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGRibGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRkdXJhdGlvbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVtcHRpZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbmRlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVycm9yPzogRXZlbnRQcm9wVHlwZTxFcnJvckV2ZW50PjtcclxuXHRmb2N1cz86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Z290cG9pbnRlcmNhcHR1cmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0aW5wdXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRpbnZhbGlkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0a2V5ZG93bj86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0a2V5cHJlc3M/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXVwPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRsb2FkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVkZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZG1ldGFkYXRhPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVuZD86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0bG9hZHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9zdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdG1vdXNlZG93bj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VlbnRlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VsZWF2ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2Vtb3ZlPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW91dD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdmVyPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZXVwPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRwYXVzZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cG9pbnRlcmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZG93bj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZW50ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmxlYXZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJtb3ZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdXQ/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm92ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcnVwPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHByb2dyZXNzPzogRXZlbnRQcm9wVHlwZTxQcm9ncmVzc0V2ZW50PjtcclxuXHRyYXRlY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzZXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRyZXNpemU/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHNjcm9sbD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbj86IEV2ZW50UHJvcFR5cGU8U2VjdXJpdHlQb2xpY3lWaW9sYXRpb25FdmVudD47XHJcblx0c2Vla2VkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c2Vla2luZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlbGVjdD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0c3RhbGxlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1Ym1pdD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1c3BlbmQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0aW1ldXBkYXRlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG9nZ2xlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG91Y2hjYW5jZWw/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoZW5kPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVudGVyPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGxlYXZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaG1vdmU/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbmVuZD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9ucnVuPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR2b2x1bWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR3YWl0aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2hlZWw/OiBFdmVudFByb3BUeXBlPFdoZWVsRXZlbnQ+O1xyXG5cclxuXHQvLyBFbGVtZW50J3MgZXZlbnRzXHJcblx0ZnVsbHNjcmVlbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGZ1bGxzY3JlZW5lcnJvcj86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cclxuXHQvLyBEb2N1bWVudCdzIGFuZCBFbGVtZW50J3MgZXZlbnRzXHJcblx0Y29weT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdGN1dD86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdHBhc3RlPzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgb25lIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBTVkcgc3BlYzsgdGhhdCBpcywgPHN2Zz5cclxuICogb3IgYW55IG90aGVyIGZyb20gU1ZHLlxyXG4gKiBAcGFyYW0gZWxtIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCJvd25lclNWR0VsZW1lbnRcIiBpbiAoZWxtIGFzIGFueSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB0aGUgPHN2Zz4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSAgRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmdTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAoZWxtIGFzIGFueSkub3duZXJTVkdFbGVtZW50ID09PSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBKU1ggbmFtZXNwYWNlIGRlZmluaW5nIGhvdyBUeXBlU2NyaXB0IHBlcmZvcm1zIHR5cGUgY2hlY2tzIG9uIEpTWCBlbGVtZW50cyxjb21wb25lbnRzXHJcbi8vIHByb3BlcnRpZXMgYW5kIGNoaWxkcmVuLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi9IdG1sVHlwZXNcIjtcclxuaW1wb3J0ICogYXMgc3ZnIGZyb20gXCIuL1N2Z1R5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBOYW1lc3BhY2UgZGVmaW5pbmcgaW50ZXJmYWNlcyB1c2VkIGJ5IFR5cGVTY3JpcHQgdG8gdHlwZS1jaGVjayBKU1ggZXhwcmVzc2lvbnMuXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIEpTWFxyXG57XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudCBleHRlbmRzIElWTkNoYWluIHt9XHJcblxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDbGFzcyBleHRlbmRzIElDb21wb25lbnQge31cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50QXR0cmlidXRlc1Byb3BlcnR5IHsgcHJvcHM6IHt9IH1cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q2hpbGRyZW5BdHRyaWJ1dGUgeyBjaGlsZHJlbjogYW55IH1cclxuXHRcclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0VsZW1lbnRzXHJcblx0e1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTcGVjaWFsIG5hbWUgdG8gc2VydmUgYXMgYSBwbGFjZWhvbGRlciwgd2hpY2ggY29udGFpbnMgc2V2ZXJhbCBlbGVtZW50cy4gVGhpcyBpc1xyXG5cdFx0ICogbmVlZGVkIHdoZXJlIG9ubHkgYSBzaW5nbGUgSlNYIGVsZW1lbnQgaXMgYWNjZXB0ZWQgKGUuZy4gcmV0dXJuIGZyb20gcmVuZGVyKSBidXQgd2VcclxuXHRcdCAqIHdhbnQgdG8gcmV0dXJuIG1vcmUgdGhhbiBvbmUuXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoaXMgaXMgb25seSBuZWNlc3NhcnkgYmVjYXVzZSBUeXBlU2NyaXB0IGRvZXNuJ3QgYWxsb3cgXCJKU1ggZnJhZ21lbnRcIiAoPD4pIGlmIGFcclxuXHRcdCAqIGN1c3RvbSBKU1ggZmFjdG9yeSBmdW5jdGlvbiBpcyB1c2VkLlxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGlzIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzLlxyXG5cdFx0ICovXHJcblx0XHRtOiB7fTtcclxuXHJcblx0XHQvLyBIVE1MIGVsZW1lbnRzXHJcblx0XHRhOiBodG1sLklIdG1sQUVsZW1lbnRQcm9wcztcclxuXHRcdGFiYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhY3JvbnltOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YWRkcmVzczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFwcGxldDogaHRtbC5JSHRtbEFwcGxldEVsZW1lbnRQcm9wcztcclxuXHRcdGFyZWE6IGh0bWwuSUh0bWxBcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0YXJ0aWNsZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFzaWRlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXVkaW86IGh0bWwuSUh0bWxBdWRpb0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmFzZTogaHRtbC5JSHRtbEJhc2VFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlZm9udDogaHRtbC5JSHRtbEJhc2Vmb250RWxlbWVudFByb3BzO1xyXG5cdFx0YmRpOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmRvOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmlnOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmxvY2txdW90ZTogaHRtbC5JSHRtbEJsb2NrcXVvdGVFbGVtZW50UHJvcHM7XHJcblx0XHRib2R5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YnI6IGh0bWwuSUh0bWxCckVsZW1lbnRQcm9wcztcclxuXHRcdGJ1dHRvbjogaHRtbC5JSHRtbEJ1dHRvbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRjYW52YXM6IGh0bWwuSUh0bWxDYW52YXNFbGVtZW50UHJvcHM7XHJcblx0XHRjYXB0aW9uOiBodG1sLklIdG1sQ2FwdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdGNlbnRlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNpdGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2RlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sOiBodG1sLklIdG1sQ29sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sZ3JvdXA6IGh0bWwuSUh0bWxDb2xncm91cEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkYXRhOiBodG1sLklIdG1sRGF0YUVsZW1lbnRQcm9wcztcclxuXHRcdGRhdGFsaXN0OiBodG1sLklIdG1sRGF0YUxpc3RFbGVtZW50UHJvcHM7XHJcblx0XHRkZDogaHRtbC5JSHRtbERkRWxlbWVudFByb3BzO1xyXG5cdFx0ZGVsOiBodG1sLklIdG1sRGVsRWxlbWVudFByb3BzO1xyXG5cdFx0ZGV0YWlsczogaHRtbC5JSHRtbERldGFpbHNFbGVtZW50UHJvcHM7XHJcblx0XHRkZm46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRkaWFsb2c6IGh0bWwuSUh0bWxEaWFsb2dFbGVtZW50UHJvcHM7XHJcblx0XHRkaXI6IGh0bWwuSUh0bWxEaXJFbGVtZW50UHJvcHM7XHJcblx0XHRkaXY6IGh0bWwuSUh0bWxEaXZFbGVtZW50UHJvcHM7XHJcblx0XHRkbDogaHRtbC5JSHRtbERsRWxlbWVudFByb3BzO1xyXG5cdFx0ZHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRlbWJlZDogaHRtbC5JSHRtbEVtYmVkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGZpZWxkc2V0OiBodG1sLklIdG1sRmllbGRzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmaWdjYXB0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlndXJlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9udDogaHRtbC5JSHRtbEZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRmb290ZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb3JtOiBodG1sLklIdG1sRm9ybUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lOiBodG1sLklIdG1sRnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRmcmFtZXNldDogaHRtbC5JSHRtbEZyYW1lc2V0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGgxOiBodG1sLklIdG1sSDFFbGVtZW50UHJvcHM7XHJcblx0XHRoMjogaHRtbC5JSHRtbEgyRWxlbWVudFByb3BzO1xyXG5cdFx0aDM6IGh0bWwuSUh0bWxIM0VsZW1lbnRQcm9wcztcclxuXHRcdGg0OiBodG1sLklIdG1sSDRFbGVtZW50UHJvcHM7XHJcblx0XHRoNTogaHRtbC5JSHRtbEg1RWxlbWVudFByb3BzO1xyXG5cdFx0aDY6IGh0bWwuSUh0bWxINkVsZW1lbnRQcm9wcztcclxuXHRcdGhlYWQ6IGh0bWwuSUh0bWxIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aGdyb3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aHI6IGh0bWwuSUh0bWxIckVsZW1lbnRQcm9wcztcclxuXHRcdGh0bWw6IGh0bWwuSUh0bWxIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRpZnJhbWU6IGh0bWwuSUh0bWxJZnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRpbWc6IGh0bWwuSUh0bWxJbWdFbGVtZW50UHJvcHM7XHJcblx0XHRpbnB1dDogaHRtbC5JSHRtbElucHV0RWxlbWVudFByb3BzO1xyXG5cdFx0aW5zOiBodG1sLklIdG1sSW5zRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGtiZDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGtleWdlbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsYWJlbDogaHRtbC5JSHRtbExhYmVsRWxlbWVudFByb3BzO1xyXG5cdFx0bGVnZW5kOiBodG1sLklIdG1sTGVnZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0bGk6IGh0bWwuSUh0bWxMaUVsZW1lbnRQcm9wcztcclxuXHRcdGxpbms6IGh0bWwuSUh0bWxMaW5rRWxlbWVudFByb3BzO1xyXG5cdFx0bGlzdGluZzogaHRtbC5JSHRtbExpc3RpbmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFpbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcDogaHRtbC5JSHRtbE1hcEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcms6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZW51OiBodG1sLklIdG1sTWVudUVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnVpdGVtOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YTogaHRtbC5JSHRtbE1ldGFFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRlcjogaHRtbC5JSHRtbE1ldGVyRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG5hdjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub2ZyYW1lczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vc2NyaXB0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG9iamVjdDogaHRtbC5JSHRtbE9iamVjdEVsZW1lbnRQcm9wcztcclxuXHRcdG9sOiBodG1sLklIdG1sT2xFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRncm91cDogaHRtbC5JSHRtbE9wdGdyb3VwRWxlbWVudFByb3BzO1xyXG5cdFx0b3B0aW9uOiBodG1sLklIdG1sT3B0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0b3V0cHV0OiBodG1sLklIdG1sT3V0cHV0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHA6IGh0bWwuSUh0bWxQRWxlbWVudFByb3BzO1xyXG5cdFx0cGFyYW06IGh0bWwuSUh0bWxQYXJhbUVsZW1lbnRQcm9wcztcclxuXHRcdHBpY3R1cmU6IGh0bWwuSUh0bWxQaWN0dXJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJlOiBodG1sLklIdG1sUHJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJvZ3Jlc3M6IGh0bWwuSUh0bWxQcm9ncmVzc0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRxOiBodG1sLklIdG1sUUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRyYjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydGM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydWJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzYW1wOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2NyaXB0OiBodG1sLklIdG1sU2NyaXB0RWxlbWVudFByb3BzO1xyXG5cdFx0c2VjdGlvbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNlbGVjdDogaHRtbC5JSHRtbFNlbGVjdEVsZW1lbnRQcm9wcztcclxuXHRcdHNsb3Q6IGh0bWwuSUh0bWxTbG90RWxlbWVudFByb3BzO1xyXG5cdFx0c21hbGw6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzb3VyY2U6IGh0bWwuSUh0bWxTb3VyY2VFbGVtZW50UHJvcHM7XHJcblx0XHRzcGFuOiBodG1sLklIdG1sU3BhbkVsZW1lbnRQcm9wcztcclxuXHRcdHN0cmlrZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0cm9uZzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0eWxlOiBodG1sLklIdG1sU3R5bGVFbGVtZW50UHJvcHM7XHJcblx0XHRzdWI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdW1tYXJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRhYmxlOiBodG1sLklIdG1sVGFibGVFbGVtZW50UHJvcHM7XHJcblx0XHR0Ym9keTogaHRtbC5JSHRtbFRib2R5RWxlbWVudFByb3BzO1xyXG5cdFx0dGQ6IGh0bWwuSUh0bWxUZEVsZW1lbnRQcm9wcztcclxuXHRcdHRlbXBsYXRlOiBodG1sLklIdG1sVGVtcGxhdGVFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0YXJlYTogaHRtbC5JSHRtbFRleHRhcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0dGZvb3Q6IGh0bWwuSUh0bWxUZm9vdEVsZW1lbnRQcm9wcztcclxuXHRcdHRoOiBodG1sLklIdG1sVGhFbGVtZW50UHJvcHM7XHJcblx0XHR0aGVhZDogaHRtbC5JSHRtbFRIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0dGltZTogaHRtbC5JSHRtbFRpbWVFbGVtZW50UHJvcHM7XHJcblx0XHR0aXRsZTogaHRtbC5JSHRtbFRpdGxlRWxlbWVudFByb3BzO1xyXG5cdFx0dHI6IGh0bWwuSUh0bWxUckVsZW1lbnRQcm9wcztcclxuXHRcdHRyYWNrOiBodG1sLklIdG1sVHJhY2tFbGVtZW50UHJvcHM7XHJcblx0XHR0dDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0dWw6IGh0bWwuSUh0bWxVbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2YXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR2aWRlbzogaHRtbC5JSHRtbFZpZGVvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHdicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR4bXA6IGh0bWwuSUh0bWxYbXBFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly8gU1ZHIGVsZW1lbnRzXHJcblx0XHRzdmc6IHN2Zy5JU3ZnU3ZnRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z0E6IHN2Zy5JU3ZnQUVsZW1lbnRQcm9wcztcclxuXHRcdGFuaW1hdGU6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z0FuaW1hdGlvblByb3BzO1xyXG5cdFx0YW5pbWF0ZU1vdGlvbjogc3ZnLklTdmdBbmltYXRlTW90aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZVRhcm5zZm9ybTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblxyXG5cdFx0Y2lyY2xlOiBzdmcuSVN2Z0NpcmNsZUVsZW1lbnRQcm9wcztcclxuXHRcdGNsaXBQYXRoOiBzdmcuSVN2Z0NsaXBQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sb3JQcm9maWxlOiBzdmcuSVN2Z0NvbG9yUHJvZmlsZVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZGVmczogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRkZXNjOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRpc2NhcmQ6IHN2Zy5JU3ZnRGlzY2FyZEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbGxpcHNlOiBzdmcuSVN2Z0VsbGlwc2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmVCbGVuZDogc3ZnLklTdmdGZUJsZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb2xvck1hdHJpeDogc3ZnLklTdmdGZUNvbG9yTWF0cml4RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb25lbnRUcmFuc2Zlcjogc3ZnLklTdmdGZUNvbXBvbmVudFRyYW5zZmVyRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb3NpdGU6IHN2Zy5JU3ZnRmVDb21wb3NpdGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbnZvbHZlTWF0cml4OiBzdmcuSVN2Z0ZlQ29udm9sdmVNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogc3ZnLklTdmdGZURpZmZ1c2VMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlzcGxhY2VtZW50TWFwOiBzdmcuSVN2Z0ZlRGlzcGxhY2VtZW50TWFwRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXN0YW50TGlnaHQ6IHN2Zy5JU3ZnRmVEaXN0YW50TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZURyb3BTaGFkb3c6IHN2Zy5JU3ZnRmVEcm9wU2hhZG93RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGbG9vZDogc3ZnLklTdmdGZUZsb29kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGdW5jQTogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jQjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jRzogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jUjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVHYXVzc2lhbkJsdXI6IHN2Zy5JU3ZnRmVHYXVzc2lhbkJsdXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUltYWdlOiBzdmcuSVN2Z0ZlSW1hZ2VFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1lcmdlOiBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzIHwgc3ZnLklTdmdGaWx0ZXJQcmltaXRpdmVQcm9wcztcclxuXHRcdGZlTWVyZ2VOb2RlOiBzdmcuSVN2Z0ZlTWVyZ2VOb2RlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVNb3JwaG9sb2d5OiBzdmcuSVN2Z0ZlTW9ycGhvbG9neUVsZW1lbnRQcm9wcztcclxuXHRcdGZlT2Zmc2V0OiBzdmcuSVN2Z0ZlT2Zmc2V0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVQb2ludExpZ2h0OiBzdmcuSVN2Z0ZlUG9pbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogc3ZnLklTdmdGZVNwZWN1bGFyTGlnaHRpbmdFbGVtZW50UHJvcHM7XHJcblx0XHRmZVNwb3RMaWdodDogc3ZnLklTdmdGZVNwb3RMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlVGlsZTogc3ZnLklTdmdGZVRpbGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZVR1cmJ1bGVuY2U6IHN2Zy5JU3ZnRmVUdXJidWxlbmNlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlsdGVyOiBzdmcuSVN2Z0ZpbHRlckVsZW1lbnRQcm9wcztcclxuXHRcdGZvcmVpZ25PYmplY3Q6IHN2Zy5JU3ZnRm9yZWlnbk9iamVjdEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRnOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHJcblx0XHRoYXRjaDogc3ZnLklTdmdIYXRjaEVsZW1lbnRQcm9wcztcclxuXHRcdGhhdGNocGF0aDogc3ZnLklTdmdIYXRjaHBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aW1hZ2U6IHN2Zy5JU3ZnSW1hZ2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bGluZTogc3ZnLklTdmdMaW5lRWxlbWVudFByb3BzO1xyXG5cdFx0bGluZWFyR3JhZGllbnQ6IHN2Zy5JU3ZnTGluZWFyR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFya2VyOiBzdmcuSVN2Z01hcmtlckVsZW1lbnRQcm9wcztcclxuXHRcdG1hc2s6IHN2Zy5JU3ZnTWFza0VsZW1lbnRQcm9wcztcclxuXHRcdG1ldGFkYXRhOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdG1wYXRoOiBzdmcuSVN2Z01QYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHBhdGg6IHN2Zy5JU3ZnUGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdHBhdHRlcm46IHN2Zy5JU3ZnUGF0dGVybkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlnb246IHN2Zy5JU3ZnUG9seWdvbkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlsaW5lOiBzdmcuSVN2Z1BvbHlsaW5lRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBzdmcuSVN2Z1JhZGlhbEdyYWRpZW50RWxlbWVudFByb3BzO1xyXG5cdFx0cmVjdDogc3ZnLklTdmdSZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z1NjcmlwdDogc3ZnLklTdmdTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZXQ6IHN2Zy5JU3ZnU2V0RWxlbWVudFByb3BzO1xyXG5cdFx0c29saWRjb2xvcjogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRzdG9wOiBzdmcuSVN2Z1N0b3BFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdTdHlsZTogc3ZnLklTdmdTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN3aXRjaDogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHM7XHJcblx0XHRzeW1ib2w6IHN2Zy5JU3ZnU3ltYm9sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRleHQ6IHN2Zy5JU3ZnVGV4dEVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRQYXRoOiBzdmcuSVN2Z1RleHRQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0c3ZnVGl0bGU6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFNwYW46IHN2Zy5JU3ZnVGV4dFNwYW5FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dXNlOiBzdmcuSVN2Z1VzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2aWV3OiBzdmcuSVN2Z1ZpZXdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly9bZWxlbU5hbWU6IHN0cmluZ106IGFueVxyXG5cdH1cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gaW50cmluc2ljIGVsZW1lbnRzIGFuZCB0byBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNBdHRyaWJ1dGVzIGV4dGVuZHMgSUNvbW1vblByb3BzIHt9XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0NsYXNzQXR0cmlidXRlczxUPiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG5cdHtcclxuXHRcdC8vIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGlzIG1vdW50ZWQuIFRoZVxyXG5cdFx0Ly8gcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuXHRcdHJlZj86IFJlZlByb3BUeXBlPFQ+O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgZnVuY3Rpb25zIHRoYXQgZGVwZW5kIG9uIFZOLWRlcml2ZWQgY2xhc3Nlc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtSb290Vk59IGZyb20gXCIuL1Jvb3RWTlwiXHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21KU1h9IGZyb20gXCIuL1ZOQ2hhaW5GdW5jc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBKU1ggRmFjdG9yeSBmdW5jdGlvbi4gSW4gb3JkZXIgZm9yIHRoaXMgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBieSB0aGUgVHlwZVNjcmlwdCBjb21waWxlciwgdGhlXHJcbiAqIHRzY29uZmlnLmpzb24gbXVzdCBoYXZlIHRoZSBmb2xsb3dpbmcgb3B0aW9uOlxyXG4gKlxyXG4gKiBcImNvbXBpbGVyT3B0aW9uc1wiOlxyXG4gKiB7XHJcbiAqICAgICBcImpzeFwiOiBcInJlYWN0XCIsXHJcbiAqICAgICBcImpzeEZhY3RvcnlcIjogXCJtaW0uanN4XCJcclxuICogfVxyXG4gKlxyXG4gKiBUaGUgLnRzeCBmaWxlcyBtdXN0IGltcG9ydCB0aGUgbWltYmwgbW9kdWxlIGFzIG1pbTogaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbiAqIEBwYXJhbSB0YWcgXHJcbiAqIEBwYXJhbSBwcm9wcyBcclxuICogQHBhcmFtIGNoaWxkcmVuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGpzeCggdGFnOiBhbnksIHByb3BzOiBhbnksIC4uLmNoaWxkcmVuOiBhbnlbXSk6IGFueVxyXG57XHJcblx0Ly8gY2hpbGRyZW4gcGFyYW1ldGVyIGlzIGFsd2F5cyBhbiBhcnJheS4gQSBjb21wb25lbnQgY2FuIHNwZWNpZnkgdGhhdCBpdHMgY2hpbGRyZW4gYXJlIGFuIGFycmF5XHJcblx0Ly8gb2YgYSBjZXJ0YWluIHR5cGUsIGUuZy4gY2xhc3MgQSBleHRlbmRzIG1pbS5Db21wb25lbnQ8e30sVFtdPi4gSW4gdGhpcyBjYXNlIHRoZXJlIGFyZSB0d29cclxuXHQvLyB3YXlzIHRvIHNwZWNpZnkgY2hpbGRyZW4gaW4gSlNYOlxyXG5cdC8vXHQxKSA8QT57dDF9e3QyfTwvQT4uIEluIHRoaXMgY2FzZSwgY2hpbGRyZW4gd2lsbCBiZSBbdDEsIHQyXS5cclxuXHQvL1x0MikgPEE+e1t0MSwgdDJdfTwvQT4uIEluIHRoaXMgY2FzZSwgY2hpbGRyZW4gd2lsbCBiZSBbW3QxLHQyXV0uXHJcblx0Ly8gVGhlIHJlYWxDaGlsZHJlbiB2YXJpYWJsZSBhY2NvbW1vZGF0ZXMgYm90aCBjYXNlcy5cclxuXHRsZXQgcmVhbENoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoIGNoaWxkcmVuWzBdKSA/IGNoaWxkcmVuWzBdIDogY2hpbGRyZW47XHJcblx0cmV0dXJuIGNyZWF0ZVZOQ2hhaW5Gcm9tSlNYKCB0YWcsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbikgdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBpbiBhXHJcbiAqIHN5bmNocm9udXMgbWFubmVyLlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHJlbmRlci5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRvIHJlbmRlciB0aGUgY29udGVudC4gSWYgbnVsbCBvciB1bmRlZmluZWQsIHRoZW5cclxuICogcmVuZGVyIHVuZGVyIHRoZSBkb2N1bWVudC5ib2R5IHRhZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudFN5bmMoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0Um9vdFZOLm1vdW50Um9vdFN5bmMoIGNvbnRlbnQsIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBcclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50U3luYyBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRTeW5jKCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRSb290Vk4udW5tb3VudFJvb3RTeW5jKCBhbmNob3JETik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uKSB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50XHJcbi8vIGFzeW5jaHJvbm91c2x5LlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHJlbmRlci5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRvIHJlbmRlciB0aGUgY29udGVudC4gSWYgbnVsbCBvciB1bmRlZmluZWQsdGhlblxyXG4gKlx0XHRcdFx0cmVuZGVyIHVuZGVyIHRoZSBkb2N1bWVudC5ib2R5IHRhZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudCggY29udGVudDogYW55LCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRSb290Vk4ubW91bnRSb290KCBjb250ZW50LCBhbmNob3JETik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50IGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGNvbnRlbnQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCggYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0Um9vdFZOLnVubW91bnRSb290KCBhbmNob3JETik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb3ZpZGUgaW1wbGVtZW50YXRpb24gZm9yIHRoZSByZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSBleHBvcnRlZCBmdW5jdGlvbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7RWxtQXR0ciwgUHJvcFR5cGV9IGZyb20gXCIuLi9jb3JlL0VsbUF0dHJcIjtcclxuXHJcbmZ1bmN0aW9uIHNfcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGU8VD4oIHByb3BOYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IElDdXN0b21BdHRyaWJ1dGVGYWN0b3J5PFQ+KTogdm9pZFxyXG57XHJcblx0RWxtQXR0ci5yZWdpc3RlclByb3BlcnR5KCBwcm9wTmFtZSwgeyB0eXBlOiBQcm9wVHlwZS5DdXN0b21BdHRyLCBmYWN0b3J5IH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWJsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL21pbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0h0bWxUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1N2Z1R5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvRWxtQXR0clwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1V0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvRXZlbnRTbG90XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvTG9jYWxTdHlsZXNcIjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==