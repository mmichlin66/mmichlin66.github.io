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
        super();
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
    // IClassVN implementation
    get CompClass() { return this.compClass; }
    get Comp() { return this.comp; }
    // Node's type.
    get type() { return 2 /* ClassComp */; }
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() {
        // components can define the getDisplayName method; if they don't then the default name
        // is the component's constructor name plus key if defined. Note that component instance
        // might not be created yet when this method is called
        if (this.comp && this.comp.getDisplayName)
            return this.comp.getDisplayName();
        else {
            let name = this.compClass.name;
            if (this.key != null)
                name += "@" + this.key;
            return name;
        }
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        // create component instance
        this.comp = new this.compClass(this.props);
        // it is OK for the component to not implement setSite method; however, it will not be
        // able to use any of the Mimbl services including requests for updates.
        if (this.comp.setSite)
            this.comp.setSite(this);
        if (this.comp.componentWillMount)
            this.comp.componentWillMount();
        // set the reference value if specified
        if (this.ref !== undefined)
            mim.setRef(this.ref, this.comp);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
        ////////////
        return true;
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
        if (this.comp.setSite)
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
    //////////////////
    getStatsCategory() { return Stats_1.StatsCategory.Comp; }
    ///////////
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
// Object that maps property names to PropInfo-derived objects. Information about custom
// attributes is added to this object when the registerProperty method is called.
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
    if (typeof oldPropVal !== typeof newPropVal)
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
        super();
        // Instance of an Element. The instance is created when the node is rendered for the first
        // time.
        this.elm = null;
        // remember tag name and children
        this.elmName = tagName;
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
            // if key property was not specified, use id; if id was not specified key will remain
            // undefined.
            if (this.key === undefined)
                this.key = props.id;
        }
    }
    // IElmVN implementation
    get ElmName() { return this.elmName; }
    get Elm() { return this.elm; }
    get IsSvg() { return this.isSvg; }
    //////////////////
    getStatsCategory() { return Stats_1.StatsCategory.Elm; }
    ///////////
    // Node's type.
    get type() { return 4 /* Elm */; }
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
    // Generates list of sub-nodes according to the current state
    render() {
        return this.children;
    }
    // Inserts the virtual node's content into DOM.
    // This method is part of the Commit phase.
    mount() {
        // determine whether this is an SVG or HTML element and create the element
        let svgInfo = SvgElms_1.SvgElms.getSvgElmInfo(this.elmName);
        this.isSvg = svgInfo !== undefined && (svgInfo !== true || this.anchorDN.namespaceURI.endsWith("svg"));
        this.elm = this.isSvg
            ? this.elm = document.createElementNS(SvgElms_1.SvgElms.namespace, SvgElms_1.SvgElms.getElmName(svgInfo, this.elmName))
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
        ///////////////////
        ////////////////////////
        ////////////
        // terminate custom property handlers
        if (this.customAttrs)
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
        return this.elmName === newVN.elmName;
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
        for (let propName in this.props) {
            let propVal = this.props[propName];
            // get information about the property and determine its type (regular attribute, event
            // or custom attribute). Note that getPropertyInfo may return null for most regular
            // attributes and events; in this case we will check the property value.
            let propInfo = ElmAttr_1.ElmAttr.getPropertyInfo(propName);
            let propType = propInfo ? propInfo.type : this.IsEventValue(propVal) ? 2 /* Event */ : 1 /* Attr */;
            if (propType === 1 /* Attr */) {
                if (!this.attrs)
                    this.attrs = {};
                this.attrs[propName] = { info: propInfo, val: propVal };
            }
            else if (propType === 2 /* Event */) {
                let eventInfo = this.GetPropAsEventRunTimeData(propInfo, propVal);
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
            return { info, orgFunc, useCapture: propVal[1] };
        }
        // for all other type combinations consider it to be a regular attribute
        return undefined;
    }
    // Adds DOM attributes to the Element.
    addAttrs() {
        ///////////////
        if (!this.attrs)
            throw new Error("ElmVN.addAttrs called with this.attrs = null");
        ////////////
        for (let name in this.attrs) {
            let rtd = this.attrs[name];
            ElmAttr_1.ElmAttr.setAttr(this.elm, name, rtd.info, rtd.val);
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
                    ElmAttr_1.ElmAttr.removeAttr(elm, name, oldRTD.info);
                }
                else {
                    // if the new property with the given name has a different value, remmeber this
                    // value and set it to the attribute in the element
                    ElmAttr_1.ElmAttr.updateAttr(elm, name, oldRTD.info, oldRTD.val, newRTD.val);
                }
            }
        }
        // loop over new attributes; add those that are not found among the old ones
        if (newAttrs) {
            for (let name in newAttrs) {
                if (oldAttrs && (name in oldAttrs))
                    continue;
                let newRTD = newAttrs[name];
                ElmAttr_1.ElmAttr.setAttr(elm, name, newRTD.info, newRTD.val);
            }
        }
        this.attrs = newAttrs;
    }
    // Adds information about events to the Element.
    addEvents() {
        ///////////////
        if (!this.events)
            throw new Error("ElmVN.addEvents called with this.events = null");
        ////////////
        for (let name in this.events)
            this.addEvent(name, this.events[name]);
    }
    // Using the given property name and its value set the appropriate attribute(s) on the
    // element. This method handles special cases of properties with non-trivial values.
    addEvent(name, event) {
        event.wrapper = this.wrapCallback(event.orgFunc);
        this.elm.addEventListener(name, event.wrapper, event.useCapture);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Added);
        ////////////
    }
    ///////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////
    //////////////////////////////
    ///
    ////////////////
    /////////////////////
    ///////////////////////////////////////////////////////////////////////////
    /////////////
    ////////////////////////////////
    ///////////////////////////////////////////////
    ///
    ///////////
    // Removes the given event listener from the Element.
    removeEvent(name, event) {
        this.elm.removeEventListener(name, event.wrapper, event.useCapture);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Deleted);
        ////////////
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
        for (let name in newEvents) {
            if (oldEvents && (name in oldEvents))
                continue;
            let newEvent = newEvents[name];
            this.addEvent(name, newEvent);
        }
        this.events = newEvents;
    }
    // Determines whether the old and the new values of the event listener are different and sets
    // the updated value. Returns true if update has been performed and false if no change has
    // been detected.
    updateEvent(name, oldEvent, newEvent) {
        if (oldEvent.orgFunc === newEvent.orgFunc && oldEvent.useCapture === newEvent.useCapture) {
            newEvent.wrapper = oldEvent.wrapper;
            return false;
        }
        this.elm.removeEventListener(name, oldEvent.wrapper, oldEvent.useCapture);
        newEvent.wrapper = this.wrapCallback(newEvent.orgFunc);
        this.elm.addEventListener(name, newEvent.wrapper, newEvent.useCapture);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Updated);
        ////////////
        // indicate that there was change in event listener value.
        return true;
    }
    // Creates custom attributes.
    addCustomAttrs() {
        ///////////////
        if (!this.customAttrs)
            throw new Error("ElmVN.addCustomAttrs called with this.customAttrs = null");
        ////////////
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
        ///////////////
        if (!this.customAttrs)
            throw new Error("ElmVN.removeCustomAttrs called with this.customAttrs = null");
        ////////////
        for (let name in this.customAttrs) {
            let info = this.customAttrs[name];
            info.handler.terminate();
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
                    oldCustomAttr.handler.terminate();
                }
                else {
                    // update the custom property and remember the new value
                    oldCustomAttr.handler.update(oldCustomAttr.val, newCustomAttr.val);
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
                let handler = newCustomAttr.info.factory.createHandler(name);
                if (!handler)
                    continue;
                // initialize the handler and remember it in our object
                handler.initialize(this, name, newCustomAttr.val);
                newCustomAttr.handler = handler;
            }
        }
        this.customAttrs = newCustomAttrs;
    }
}
exports.ElmVN = ElmVN;
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
        super();
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
    ;
    /////////////////
    getStatsCategory() { return Stats_1.StatsCategory.Comp; }
    //////////
    // Node's type.
    get type() { return 3 /* FuncComp */; }
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
        return true;
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
        super();
        this.comp = comp;
        // the component object is a key for the node
        this.key = comp;
    }
    ;
    // IInstanceVN implementation
    get Comp() { return this.comp; }
    // Node's type.
    get type() { return 1 /* InstanceComp */; }
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() {
        // components can define the getDisplayName method; if they don't then the default name
        // is the component's constructor name
        if (this.comp.getDisplayName)
            return this.comp.getDisplayName();
        else
            return this.comp.constructor.name;
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.willMountInstance(this.comp);
        return true;
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
    }
    // Notifies the given component that ir will be mounted.
    willMountInstance(comp) {
        // it is OK for the component to not implement setSite method; however, it will not be
        // able to use any of the Mimbl services including requests for updates.
        if (this.comp.setSite)
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
        if (this.comp.setSite)
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
const VNChain_1 = __webpack_require__(/*! ./VNChain */ "./src/core/VNChain.ts");
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
        super();
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
    // Node's type.
    get type() { return 0 /* Root */; }
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() { return "Root"; }
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
        return true;
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
        // if willMount returns false, the node doesn't hve any sub-nodes
        if (vn.willMount()) {
            // if the node doesn't handle errors we don't need to waste time to use try/catch
            if (!vn.supportsErrorHandling())
                this.createSubNodesVirtual(vn);
            else {
                try {
                    this.createSubNodesVirtual(vn);
                }
                catch (err) {
                    /////////////////////////
                    //////////////////////////////////////////////////////////////////////////
                    ///////////////
                    // let the node handle its own error and re-render
                    vn.handleError(err, this.currentVN.path);
                    this.createSubNodesVirtual(vn);
                }
            }
        }
        // restore pointer to the currently being processed node after processing its subnodes
        this.currentVN = currentVN;
    }
    // Performs creation and initial rendering on the sub-nodes of our node.
    createSubNodesVirtual(vn) {
        let subNodes = VNChainFuncs_1.createVNChainFromContent(vn.render());
        if (subNodes) {
            for (let svn = subNodes.first; svn !== null; svn = svn.next)
                this.createVirtual(svn, vn);
        }
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
        if (vn.subNodes) {
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
        if (vn.subNodes) {
            for (let svn = vn.subNodes.first; svn !== null; svn = svn.next)
                this.postCreate(svn);
        }
    }
    // Recursively calls willUnmount on this VN and its sub-nodes.
    preDestroy(vn) {
        if (vn.subNodes) {
            for (let svn = vn.subNodes.first; svn !== null; svn = svn.next)
                this.preDestroy(svn);
        }
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
        else if (vn.subNodes) {
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
        let disp = new VNDisp_1.VNDisp(vn, 0 /* Unknown */, vn);
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
        if (!disp.subNodeDisps)
            return;
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
        if (disp.subNodesToRemove) {
            for (let svn of disp.subNodesToRemove)
                this.preDestroy(svn);
        }
        // second, sub-nodes marked for update or insert
        if (disp.subNodeDisps) {
            for (let subNodeDisp of disp.subNodeDisps)
                this.preUpdatePhysical(subNodeDisp);
        }
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
        // determine the anchor node to use when inserting new or moving existing sub-nodes. If
        // our node has its own DN, it will be the anchor for the sub-nodes; otherwise, our node's
        // anchor will be the anchor for the sub-nodes too.
        let ownDN = vn.getOwnDN();
        let anchorDN = ownDN !== null ? ownDN : vn.anchorDN;
        // if this virtual node doesn't define its own DOM node (true for components), we will
        // need to find a DOM node before which to start inserting new nodes. Null means
        // append to the end of the anchor node's children.
        let beforeDN = ownDN !== null ? null : vn.getNextDNUnderSameAnchorDN(anchorDN);
        // clear our current list of sub-nodes - we will populate it while updating them
        vn.subNodes = new VNChain_1.VNChain();
        // remove from DOM the old nodes designated to be removed (that is, those for which there
        // is no counterpart new node that will either update or replace it) and then those
        // designated to be replaced. We need to remove old nodes first before we start inserting
        // new - one reason is to properly maintain references.
        if (disp.subNodesToRemove) {
            for (let svn of disp.subNodesToRemove)
                this.destroyPhysical(svn);
        }
        // perform updates and inserts by either groups or individual nodes.
        if (disp.subNodeGroups) {
            this.updatePhysicalByGroups(vn, disp.subNodeDisps, disp.subNodeGroups, anchorDN, beforeDN);
            this.arrangeGroups(vn, disp.subNodeDisps, disp.subNodeGroups, anchorDN, beforeDN);
        }
        else if (disp.subNodeDisps) {
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
    // Recursively calls appropriate life-cycle methods on this VN and its sub-nodes.
    postUpdate(disp) {
        if (disp.subNodeDisps) {
            for (let subNodeDisp of disp.subNodeDisps) {
                if (subNodeDisp.action === 2 /* Update */) {
                    // if we updated sub-nodes, notify them too
                    if (subNodeDisp.updateDisp.shouldRender)
                        this.postUpdate(subNodeDisp);
                }
                else if (subNodeDisp.action === 1 /* Insert */)
                    this.postCreate(subNodeDisp.newVN);
            }
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
        super();
        this.text = text;
    }
    ;
    get Text() { return this.text; }
    get TextNode() { return this.dn; }
    /////////////////
    getStatsCategory() { return Stats_1.StatsCategory.Text; }
    //////////
    // Node's type.
    get type() { return 5 /* Text */; }
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() { return "#text"; }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // If the node never has any children (like text nodes), it should return false.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        // text nodes don't have children
        return false;
    }
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
    constructor() {
        // DOM node under which all content of this virtual node is rendered.
        this.anchorDN = null;
        // Next node in the chain of sibling nodes or null if this is the last one.
        this.next = null;
        // Previous node in the chain of sibling nodes or null if this is the first one.
        this.prev = null;
    }
    // IVNode implementation
    get Type() { return this.type; }
    get Parent() { return this.parent; }
    get Next() { return this.next; }
    get Prev() { return this.prev; }
    get SubNodes() { return this.subNodes; }
    get Name() { return this.name; }
    // Root node.
    get root() {
        // when this property is read for the first time, it is retrieved from the parent and
        // then we change the property from the gettter to a regular.
        delete this.root;
        return this.root = this.parent ? this.parent.root : this;
    }
    set root(val) { }
    // Level of nesting at which the node resides relative to the root node.
    get depth() {
        // when this property is read for the first time, it is retrieved from the parent and
        // then we change the property from the gettter to a regular.
        delete this.depth;
        return this.depth = this.parent ? this.parent.depth + 1 : 0;
    }
    set depth(val) { }
    // Initializes the node by passing the parent node to it. After this, the node knows its
    // place in the hierarchy and gets access to the root of it - the RootVN object.
    initialize(parent) {
        this.parent = parent;
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
        this.subNodes = undefined;
        this.parent = undefined;
    }
    ///////////
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // If the node never has any children (like text nodes), it should return false.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() { return true; }
    // Returns content that comprises the children of the node. If the node doesn't have
    // sub-nodes, null should be returned. If this method is not implemented it is as though
    // null is returned.
    // This method is part of the Render phase.
    render() { }
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
    // Retrieves the value for a service with the given ID registered by a closest ancestor
    // node or the default value if none of the ancestor nodes registered a service with
    // this ID. This method doesn't establish a subscription and only reflects the current state.
    getService(id, defaultService, useSelf) {
        let service = this.findService(id, useSelf);
        return service !== undefined ? service : defaultService;
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
    /**
     * Creates a wrapper function with the same signature as the given callback so that if the original
     * callback throws an exception, it is processed by the Mimble error handling mechanism so that the
     * exception bubles from this virtual node up the hierarchy until a node/component that knows
     * to handle errors is found.
     *
     * This function should be called by the code that is not part of any component but still has access
     * to the IVNode object; for example, custom attribute handlers. Components that derive from the
     * mim.Component class should use the wrapCallback method of the mim.Component class.
     *
     * @param callback
     */
    wrapCallback(callback) {
        return CallbackWrapper.bind(this, callback);
    }
    // Returns the first DOM node defined by either this virtual node or one of its sub-nodes.
    // This method is only called on the mounted nodes.
    getFirstDN() {
        let dn = this.getOwnDN();
        if (dn !== null)
            return dn;
        else if (!this.subNodes)
            return null;
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
        else if (!this.subNodes)
            return null;
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
        else if (this.subNodes) {
            // recursively call this method on the sub-nodes from first to last
            for (let svn = this.subNodes.first; svn !== null; svn = svn.next)
                svn.collectImmediateDNs(arr);
        }
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
        if (this.subNodes && this.subNodes.last !== null) {
            const dn = this.subNodes.last.getLastDN();
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
            // note that getLastDN call traverses the hierarchy of nodes. Note also that it
            // it cannot find a node under a different anchor element because the first different
            // anchor element will be returned as a wanted node.
            const dn = vn.getLastDN();
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
// 
/**
 * The CallbackWrapper function is used to wrap a callback in order to catch exceptions from the
 * callback and pass it to the "StdErrorHandling" service. The function is bound to two parameters:
 * a virtual node (accessed as `this`) and the original callback (accessed as the first element
 * from the `arguments` array). The rest of parameters in the `arguments` array are passed to the
 * original callback and the value returned by the callback is returned from the wrapper.
 */
function CallbackWrapper() {
    try {
        let [orgCallback, ...rest] = arguments;
        return orgCallback(...rest);
    }
    catch (err) {
        let errorService = this.findService("StdErrorHandling");
        if (errorService)
            errorService.reportError(err, this.path);
        else
            throw err;
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
    if (content === undefined || content === null || content === false || typeof content === "function")
        return null;
    const chain = new VNChain_1.VNChain();
    if (typeof content === "string")
        chain.appendVN(new TextVN_1.TextVN(content));
    else if (typeof content.render === "function")
        chain.appendVN(new InstanceVN_1.InstanceVN(content));
    else if (Array.isArray(content)) {
        for (let arrItem of content)
            chain.appendChain(createVNChainFromContent(arrItem));
    }
    else if (content instanceof VN_1.VN)
        chain.appendVN(content);
    else if (content instanceof VNChain_1.VNChain)
        chain.appendChain(content);
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
    if (typeof tag === "string")
        chain.appendVN(new ElmVN_1.ElmVN(tag, props, children));
    else if (tag === mim.Fragment)
        chain.appendChain(createVNChainFromContent(children));
    else if (tag.prototype && typeof tag.prototype.render === "function")
        chain.appendVN(new ClassVN_1.ClassVN(tag, props, children));
    // else if (mim.Component.isPrototypeOf( tag))
    // 	chain.appendVN( new ClassVN( tag as mim.IComponentClass, props, children));
    else if (typeof tag === "function")
        chain.appendVN(new FuncVN_1.FuncVN(tag, props, children));
    //////////////
    else
        throw new Error("Invalid tag in jsx processing function: " + tag);
    ///////////
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
    constructor(newVN, action = 0 /* Unknown */, oldVN) {
        this.action = action;
        this.newVN = newVN;
        this.oldVN = oldVN;
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
        let oldChain = this.oldVN.subNodes;
        if ((!newChain || newChain.count === 0) && (!oldChain || oldChain.count === 0))
            return;
        else if (!newChain || newChain.count === 0) {
            // we just need to delete all old nodes
            this.subNodesToRemove = [];
            for (let oldVN = oldChain.first; oldVN !== null; oldVN = oldVN.next)
                this.subNodesToRemove.push(oldVN);
            return;
        }
        else if (!oldChain || oldChain.count === 0) {
            // we just need to insert all new nodes
            this.subNodeDisps = [];
            for (let newVN = newChain.first; newVN !== null; newVN = newVN.next)
                this.subNodeDisps.push(new VNDisp(newVN, 1 /* Insert */));
            return;
        }
        // we are here if both old and new chains contain some nodes.
        // loop over new nodes and fill an array of VNDisp objects in the parent disp. At the same
        // time, build a map that includes all new nodes that have keys. The values are VNDisp objects.
        this.subNodeDisps = [];
        let newKeyedNodeMap = new Map();
        for (let newVN = newChain.first; newVN !== null; newVN = newVN.next) {
            let subNodeDisp = new VNDisp(newVN);
            this.subNodeDisps.push(subNodeDisp);
            if (newVN.key !== undefined)
                newKeyedNodeMap.set(newVN.key, subNodeDisp);
        }
        // loop over old nodes and put those that have keys matching new nodes into the new nodes' VNDisp
        // objects. Put those that don't have keys or that have keys that don't match any new node to
        // an array of non-matching old nodes
        let oldNonMatchingNodeList = [];
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
                    // we are here if the new node cannot update the old one and should completely
                    // replace it. We add the old node to the list of those to be removed and indicate
                    // that the new node should be inserted.
                    if (!this.subNodesToRemove)
                        this.subNodesToRemove = [];
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
        if (oldNonMatchingNodeListIndex < oldNonMatchingNodeListLength) {
            if (!this.subNodesToRemove)
                this.subNodesToRemove = [];
            for (let i = oldNonMatchingNodeListIndex; i < oldNonMatchingNodeListLength; i++)
                this.subNodesToRemove.push(oldNonMatchingNodeList[i]);
        }
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
        if (count <= VNDisp.NO_GROUP_THRESHOLD)
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
                // the next iteration will open a new group. Note that we cannot be here for a node
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
        if (props)
            this.props = props;
    }
    /** Sets or clears the site object through which component can request services. */
    setSite(site) {
        this.site = site;
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
    /** Adds a callback that will be invoked when the value of the reference changes. */
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
 * An artificial "Fragment" component that is only used as a temporary collection of other items
 * in places where JSX only allows a single item. Our JSX factory function creates a virtual node
 * for each of its children the function is never actually called. This component is only needed
 * because currently TypeScript doesn't allow the <> fragment notation if a custom JSX factory
 * function is used.
 *
 * Use it as follows:
 * ```tsx
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
  ```

 * @param props
 */
function Fragment(props) { }
exports.Fragment = Fragment;
/**
 * Registers custom attribute factory for the given property name.
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
 * synchronous manner.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvQ29tcEJhc2VWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbUF0dHIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9FbG1WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0V2ZW50U2xvdC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0Z1bmNWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0luc3RhbmNlVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Mb2NhbFN0eWxlcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1Jvb3RVSS50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TdGF0cy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1N2Z0VsbXMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9UZXh0Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9VdGlscy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVk5DaGFpbi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQ2hhaW5GdW5jcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZORGlzcC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL21pbS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9taW1ibFR5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YWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWJsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWJsXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWltYmxUeXBlcy50c1wiKTtcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtDb21wQmFzZVZOfSBmcm9tIFwiLi9Db21wQmFzZVZOXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXByZXNlbnRzIGEgY29tcG9uZW50IGltcGxlbWVudGluZyB0aGUgSUNvbXBvbmVudDw+IGludGVyZmFjZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1ZOIGV4dGVuZHMgQ29tcEJhc2VWTjxtaW0uSUNvbXBvbmVudD4gaW1wbGVtZW50cyBtaW0uSUNsYXNzVk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBjb21wQ2xhc3M6IG1pbS5JQ29tcG9uZW50Q2xhc3MsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuY29tcENsYXNzID0gY29tcENsYXNzO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5IGFuZCByZWZcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgY2hpbGRyZW4gYXMgcGFydCBvZiBwcm9wc1xyXG5cdFx0dGhpcy5wcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSUNsYXNzVk4gaW1wbGVtZW50YXRpb25cclxuXHRwdWJsaWMgZ2V0IENvbXBDbGFzcygpOiBtaW0uSUNvbXBvbmVudENsYXNzIHsgcmV0dXJuIHRoaXMuY29tcENsYXNzOyB9XHJcblx0cHVibGljIGdldCBDb21wKCk6IG1pbS5JQ29tcG9uZW50IHsgcmV0dXJuIHRoaXMuY29tcCBhcyBtaW0uSUNvbXBvbmVudDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyB0eXBlLlxyXG5cdHB1YmxpYyBnZXQgdHlwZSgpOiBtaW0uVk5UeXBlIHsgcmV0dXJuIG1pbS5WTlR5cGUuQ2xhc3NDb21wOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZ2V0RGlzcGxheU5hbWUgbWV0aG9kOyBpZiB0aGV5IGRvbid0IHRoZW4gdGhlIGRlZmF1bHQgbmFtZVxyXG5cdFx0Ly8gaXMgdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIG5hbWUgcGx1cyBrZXkgaWYgZGVmaW5lZC4gTm90ZSB0aGF0IGNvbXBvbmVudCBpbnN0YW5jZVxyXG5cdFx0Ly8gbWlnaHQgbm90IGJlIGNyZWF0ZWQgeWV0IHdoZW4gdGhpcyBtZXRob2QgaXMgY2FsbGVkXHJcblx0XHRpZiAodGhpcy5jb21wICYmIHRoaXMuY29tcC5nZXREaXNwbGF5TmFtZSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuY29tcC5nZXREaXNwbGF5TmFtZSgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuY29tcENsYXNzLm5hbWU7XHJcblx0XHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRcdHJldHVybiBuYW1lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBjb21wb25lbnQgaW5zdGFuY2VcclxuXHRcdHRoaXMuY29tcCA9IG5ldyB0aGlzLmNvbXBDbGFzcyggdGhpcy5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gaXQgaXMgT0sgZm9yIHRoZSBjb21wb25lbnQgdG8gbm90IGltcGxlbWVudCBzZXRTaXRlIG1ldGhvZDsgaG93ZXZlciwgaXQgd2lsbCBub3QgYmVcclxuXHRcdC8vIGFibGUgdG8gdXNlIGFueSBvZiB0aGUgTWltYmwgc2VydmljZXMgaW5jbHVkaW5nIHJlcXVlc3RzIGZvciB1cGRhdGVzLlxyXG5cdFx0aWYgKHRoaXMuY29tcC5zZXRTaXRlKVxyXG5cdFx0XHR0aGlzLmNvbXAuc2V0U2l0ZSggdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnRXaWxsTW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC5jb21wb25lbnRXaWxsTW91bnQoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWRcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5jb21wKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBjb21wb25lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGNvbXBvbmVudHMgKGFuZC9vciBlbGVtZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuY29tcCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnRXaWxsVW5tb3VudClcclxuXHRcdFx0dGhpcy5jb21wLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29tcC5zZXRTaXRlKVxyXG5cdFx0XHR0aGlzLmNvbXAuc2V0U2l0ZSggbnVsbCk7XHJcblxyXG5cdFx0dGhpcy5jb21wID0gdW5kZWZpbmVkO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoZSBjb21wb25lbnQgY2xhc3MgbmFtZSBpcyB0aGUgc2FtZVxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcENsYXNzID09PSAobmV3Vk4gYXMgQ2xhc3NWTikuY29tcENsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYVxyXG5cdC8vIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRpbmcgc3ViLW5vZGVzIGlzIG5lY2Vzc2FyeSBhbmRcclxuXHQvLyBmYWxzZSBvdGhlcndpc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdDbGFzc1ZOID0gbmV3Vk4gYXMgQ2xhc3NWTjtcclxuXHJcblx0XHQvLyBsZXQgdGhlIGNvbXBvbmVudCBrbm93IGFib3V0IHRoZSBuZXcgcHJvcGVydGllcyAoaWYgaXQgaXMgaW50ZXJlc3RlZCBpbiB0aGVtKVxyXG5cdFx0bGV0IHNob3VsZFJlbmRlcjogYm9vbGVhbiA9IHRydWU7XHJcblx0XHRpZiAodGhpcy5jb21wLnNob3VsZENvbXBvbmVudFVwZGF0ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzaG91bGRSZW5kZXIgPSB0aGlzLmNvbXAuc2hvdWxkQ29tcG9uZW50VXBkYXRlKCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0NsYXNzVk4ucmVmICE9PSB0aGlzLnJlZilcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByZWZlcmVuY2Ugb2JqZWN0XHJcblx0XHRcdHRoaXMucmVmID0gbmV3Q2xhc3NWTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdDbGFzc1ZOLnJlZiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB3ZSBrbm93IHRoYXQgb3VyIHJlZmVyZW5jZSBpcyBkZWZpbmVkLCBzbyB1bnNldCBpdFxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdDbGFzc1ZOLmtleTtcclxuXHJcblx0XHQvLyBzaGFsbG93IGNvcHkgdGhlIG5ldyBwcm9wZXJ0aWVzIGZyb20gdGhlIG90aGVyIG5vZGUgdG8gb3VyIG9iamVjdC4gVGhpcyBpcyBuZWVkZWRcclxuXHRcdC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBnb3Qgb3VyIHByb3BzIG9iamVjdCBpbiB0aGUgY29uc3RydWN0b3IgYW5kIHdpbGwga2VlcFxyXG5cdFx0Ly8gd29ya2luZyB3aXRoIGl0IC0gZXNwZWNpYWxseSBpZiBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlIG1ldGhvZC5cclxuXHRcdE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goIGtleSA9PiBkZWxldGUgdGhpcy5wcm9wc1trZXldKTtcclxuXHRcdE9iamVjdC5hc3NpZ24oIHRoaXMucHJvcHMsIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiB7IHNob3VsZENvbW1pdDogZmFsc2UsIHNob3VsZFJlbmRlciB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUeXBlIG9mIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBjb21wQ2xhc3M6IG1pbS5JQ29tcG9uZW50Q2xhc3M7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC5cclxuXHRwcml2YXRlIHJlZjogbWltLlJlZjxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTn0gZnJvbSBcIi4vVk5cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBDb21wQmFzZVZOIGlzIGEgYmFzZSBjbGFzcyBmb3IgSW5zdGFuY2VWTiBhbmQgQ2xhc3NWTi4gSXQgcHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHlcclxuLy8gaW4gdGVybXMgb2YgdXBkYXRlIHJlcXVlc3RzIGFuZCBsaWZlY3ljbGUgbWFuYWdlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wQmFzZVZOPFRDb21wIGV4dGVuZHMgbWltLklDb21wb25lbnQ+IGV4dGVuZHMgVk5cclxue1xyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdHB1YmxpYyBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0aWYgKHRoaXMuY29tcCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggXCJyZW5kZXIoKSB3YXMgY2FsbGVkIG9uIHVubW91bnRlZCBjb21wb25lbnQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNvbXAucmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3VwcG9ydHNFcnJvckhhbmRsaW5nKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmhhbmRsZUVycm9yICE9PSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29tcC5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGhhcyBiZWVuIGluc2VydGVkXHJcblx0Ly8gaW50byB0aGUgRE9NIHRyZWUuXHJcblx0cHVibGljIGRpZE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jb21wLmNvbXBvbmVudERpZE1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAuY29tcG9uZW50RGlkTW91bnQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGhhcyBiZWVuIHVwZGF0ZWRcclxuXHQvLyBpbiB0aGUgRE9NIHRyZWUuXHJcblx0cHVibGljIGRpZFVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnREaWRVcGRhdGUpXHJcblx0XHRcdHRoaXMuY29tcC5jb21wb25lbnREaWRVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIGFuZCBub3QgdG8gYW55IG9mIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldE93bkROKCk6IEROXHJcblx0e1xyXG5cdFx0Ly8gY29tcG9uZW50cyBkb24ndCBoYXZlIHRoZWlyIG93biBET00gbm9kZVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZS5cclxuXHRwcm90ZWN0ZWQgY29tcDogVENvbXA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHlwZSBvZiBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIFByb3BUeXBlXHJcbntcclxuXHQvLyBSZWd1bGFyIGF0dHJpYnV0ZXMgc2V0IHVzaW5nIEVsZW1lbnQuc2V0QXR0cmlidXRlKCk7XHJcblx0VW5rbm93biA9IDAsXHJcblxyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRBdHRyID0gMSxcclxuXHJcblx0Ly8gRXZlbnQgbGlzdGVuZXJzIHNldCB1c2luZyBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXJcclxuXHRFdmVudCA9IDIsXHJcblxyXG5cdC8vIEN1c3RvbSBhdHRyaWJ1dGVzIGZvciB3aGljaCBoYW5kbGVyIGZhY3RvcmllcyBhcmUgcmVnaXN0ZXJlZFxyXG5cdEN1c3RvbUF0dHIgPSAzLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNlIGludGVyZmFjZSBkZXNjcmliaW5nIGluZm9ybWF0aW9uIGtlcHQgYWJvdXQgcHJvcGVydHkgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIFR5cGUgb2YgdGhlIHByb3BlcnR5LlxyXG5cdHR5cGU6IFByb3BUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBhdHRyaWJ1dGVzIHRoYXQgY29udGFpbnMgZnVuY3Rpb25zIGZvciBzZXR0aW5nLCBkaWZmaW5nLCB1cGRhdGluZyBhbmRcclxuLy8gcmVtb3ZpbmcgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3BlcnR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBBdHRyUHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnNldEF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZSBhbmQgcHJvcFZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHNldD86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBjb21wYXJlcyB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYW5kIHJldHVybnMgYW4gb2JqZWN0XHJcblx0Ly8gdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgdXBkYXRlRnVuYyBmdW5jdGlvbi4gSWYgdW5kZWZpbmVkIGlzIHJldHVybmVkLCB0aGUgdmFsdWUgb2YgdGhlXHJcblx0Ly8gYXR0cmlidXRlIHdpbGwgbm90IGNoYW5nZSAodGhhdCBtZWFucyB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBhcmUgZXF1YWwpLiBJZiB0aGlzXHJcblx0Ly8gZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHByb3BlcnR5IHZhbHVlcyBhcmUgY29udmVydGVkIHRvIHN0cmluZyBhbmQgY29tcGFyZWQgYXMgc3RyaW5ncy5cclxuXHQvLyBJZiB0aGVzZSBzdHJpbmdzIGFyZSBkaWZmZXJlbnQsIHRoZSBzdHJpbmcgY29ycmVzcG9uZGluZyB0byB0aGUgIG5ldyB2YWx1ZSBpcyByZXR1cm5lZC5cclxuXHRkaWZmPzogKGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KSA9PiBhbnk7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgdXBkYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBiYXNlZCBvbiB0aGUgb2JqZWN0IHRoYXQgd2FzIHJldHVybmVkXHJcblx0Ly8gZnJvbSB0aGUgZGlmZiBmdW5jdGlvbi4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgc2V0IGZ1bmN0aW9uIGlzIHVzZWQuIElmXHJcblx0Ly8gdGhlIHNldCBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCBlaXRoZXIsIHRoZSBET00gZWxtLnNldEF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhc1xyXG5cdC8vIGF0dHJpYnV0ZSBuYW1lIGFuZCB1cGRhdGVWYWwgY29udmVydGVkIHRvIHN0cmluZy5cclxuXHR1cGRhdGU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCB1cGRhdGVWYWw6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBhdHRyaWJ1dGUuIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIERPTVxyXG5cdC8vIGVsbS5yZW1vdmVBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXMgYXR0cmlidXRlIG5hbWUuXHJcblx0cmVtb3ZlPzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcblx0Ly8gVGhlIGFjdHVhbCBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUuIFRoaXMgaXMgc29tZXRpbWVzIG5lZWRlZCBpZiB0aGUgYXR0cmlidXRlIG5hbWUgY2Fubm90IGJlXHJcblx0Ly8gdXNlZCBhcyBwcm9wZXJ0eSBuYW1lIC0gZm9yIGV4YW1wbGUsIGlmIGF0dHJpYnV0ZSBuYW1lIGNvbnRhaW5zIGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgaW5cclxuXHQvLyBUeXBlU2NyaXB0IGlkZW50aWZpZXIgKGUuZy4gZGFzaCkuXHJcblx0YXR0ck5hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGV2ZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50IGJ1YmJsZXMuIElmIHRoZSBldmVudCBkb2Vzbid0IGJ1YmJsZSwgdGhlIGV2ZW50IGhhbmRsZXJcclxuXHQvLyBtdXN0IGJlIHNldCBvbiB0aGUgZWxlbWVudCBpdHNlbGY7IG90aGVyd2lzZSwgdGhlIGV2ZW50IGhhbmRsZXIgY2FuIGJlIHNldCBvbiB0aGUgcm9vdFxyXG5cdC8vIGFuY2hvciBlbGVtZW50LCB3aGljaCBhbGxvd3MgaGF2aW5nIGEgc2luZ2xlIGV2ZW50IGhhbmRsZXIgcmVnaXN0ZXJlZCBmb3IgbWFueSBlbGVtZW50cyxcclxuXHQvLyB3aGljaCBpcyBtb3JlIHBlcmZvcm1hbnQuXHJcblx0aXNCdWJibGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21BdHRyUHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIEZhY3Rvcnkgb2JqZWN0IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLlxyXG5cdGZhY3Rvcnk6IG1pbS5JQ3VzdG9tQXR0cmlidXRlRmFjdG9yeTxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUeXBlIGNvbWJpbmluZyBpbmZvcm1hdGlvbiBhYm91dCByZWd1bGFyIGF0dHJpYnV0ZXMgb3IgZXZlbnRzIG9yIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgUHJvcEluZm8gPSBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gRXhwb3J0ZWQgY2xhc3MgdGhhdCBwcm92aWRlcyBzdGF0aWMgbWV0aG9kcyBmb3Igc2V0dGluZywgdXBkYXRpbmcgYW5kIHJlbW92aW5nIEVsZW1lbnRcclxuLy8gYXR0cmlidXRlcyBjb3JyZXNwb25kaW5nIHRvIHByb3BlcnR5IG5hbWVzLlxyXG4vL1xyXG4vLyBFbGVtZW50IGF0dHJpYnV0ZXMgYXJlIGRldGVybWluZWQgdXNpbmcgcHJvcGVydGllcyBwYXNzZWQgdG8gdGhlIEVsbVZOIG1ldGhvZHMuIFNvbWVcclxuLy8gcHJvcGVydGllcyBhbGxvdyB1c2luZyBub24tdHJpdmlhbCB0eXBlcywgZS5nLiBhcnJheXMgb3Igb2JqZWN0cywgYW5kIHRodXMgY2Fubm90IGJlIHNpbXBseVxyXG4vLyBoYW5kbGVkIHVzaW5nIHRoZSBFbGVtZW50LnNldEF0dHJpYnV0ZSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRWxtQXR0clxyXG57XHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBwcm9wZXJ0eSBuYW1lcyB0byBQcm9wSW5mby1kZXJpdmVkIG9iamVjdHMuIEluZm9ybWF0aW9uIGFib3V0IGN1c3RvbVxyXG5cdC8vIGF0dHJpYnV0ZXMgaXMgYWRkZWQgdG8gdGhpcyBvYmplY3Qgd2hlbiB0aGUgcmVnaXN0ZXJQcm9wZXJ0eSBtZXRob2QgaXMgY2FsbGVkLlxyXG5cdHByaXZhdGUgc3RhdGljIHByb3BJbmZvczoge1tQOnN0cmluZ106IFByb3BJbmZvfSA9XHJcblx0e1xyXG5cdFx0Ly8gYXR0cmlidXRlcyAtIG9ubHkgdGhvc2UgYXR0cmlidXRlcyBhcmUgbGlzdGVkIHRoYXQgaGF2ZSBub24tdHJpdmlhbCB0cmVhdG1lbnRcclxuXHRcdFwic3R5bGVcIjogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFN0eWxlUHJvcCwgZGlmZjogZGlmZlN0eWxlUHJvcCwgdXBkYXRlOiB1cGRhdGVTdHlsZVByb3AgfSxcclxuXHRcdFwidmFsdWVcIjogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZlZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVWYWx1ZVByb3AgfSxcclxuXHRcdFwiZGVmYXVsdFZhbHVlXCI6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRWYWx1ZVByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHRcdFwiY2hlY2tlZFwiOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZDaGVja2VkUHJvcCwgcmVtb3ZlOiByZW1vdmVDaGVja2VkUHJvcCB9LFxyXG5cdFx0XCJkZWZhdWx0Q2hlY2tlZFwiOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHJcblx0XHQvLyBldmVudCBsaXN0ZW5lcnMgLSBvbmx5IHRob3NlIGV2ZW50IGFyZSBsaXN0ZWQgdGhhdCBhcmUgbm9uLWJ1YmJsaW5nXHJcblx0XHRcIm1vdXNlZW50ZXJcIjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCwgaXNCdWJibGluZzogZmFsc2UgfSxcclxuXHRcdFwibW91c2VsZWF2ZVwiOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50LCBpc0J1YmJsaW5nOiBmYWxzZSB9LFxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0RWxtQXR0ci5wcm9wSW5mb3NbcHJvcE5hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFByb3BlcnR5SW5mbyggcHJvcE5hbWU6IHN0cmluZyk6IFByb3BJbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwdWJsaWMgc3RhdGljIHNldEF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHR5cGVvZiBwcm9wVmFsID09PSBcInN0cmluZ1wiID8gcHJvcFZhbCA6IHByb3BWYWwudG9TdHJpbmcoKSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCBhY3R1YWwgYXR0cmlidXRlIG5hbWUgdG8gdXNlXHJcblx0XHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YXR0ck5hbWUgPSBwcm9wTmFtZTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCBwcm9wVmFsKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIGF0dHJOYW1lLCB0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIiA/IHByb3BWYWwgOiBwcm9wVmFsLnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIHByb3BlcnR5IGFyZSBkaWZmZXJlbnQgYW5kIHNldHMgdGhlXHJcblx0Ly8gdXBkYXRlZCB2YWx1ZSB0byB0aGUgZWxlbWVudCdzIGF0dHJpYnV0ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kXHJcblx0Ly8gZmFsc2UgaWYgbm8gY2hhbmdlIGluIHByb3BlcnR5IHZhbHVlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoaXMgaXMgbm90IGEgc3BlY2lhbCBjYXNlIChwcm9wZXJ0eSBpcyBub3QgaW4gb3VyIGxpc3QpIGp1c3QgY29tcGFyZSB0aGVtIGFuZFxyXG5cdFx0XHQvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgc2V0IHRoZSBhdHRyaWJ1dGUgdG8gdGhlIG5ldyB2YWx1ZS5cclxuXHRcdFx0aWYgKG9sZFByb3BWYWwgPT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBwcm9wTmFtZSwgdHlwZW9mIG5ld1Byb3BWYWwgPT09IFwic3RyaW5nXCIgPyBuZXdQcm9wVmFsIDogbmV3UHJvcFZhbC50b1N0cmluZygpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29tcGFyZSBvbGQgYW5kIG5ldyB2YWx1ZSB1c2luZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGlmIGRlZmluZWQ7IGlmIG5vdCwganVzdCBjb21wYXJlXHJcblx0XHQvLyB0aGUgdHdvIHZhbHVlcyBhbmQgaWYgdGhleSBhcmUgZGlmZmVyZW50IHVzZSB0aGUgbmV3IG9uZSBhcyBhIHZhbHVlIHRvIHVwZGF0ZSB3aXRoLlxyXG5cdFx0Ly8gTm90ZSB0aGF0IHRoZSBuZWl0aGVyIG9sZCBub3IgbmV3IHZhbHVlcyBjYW4gYmUgdW5kZWZpbmVkIG9yIG51bGwuXHJcblx0XHRsZXQgdXBkYXRlVmFsOiBhbnk7XHJcblx0XHRpZiAoaW5mby5kaWZmICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IGluZm8uZGlmZiggcHJvcE5hbWUsIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdXBkYXRlVmFsdWUgaXMgdW5kZWZpbmVkIHRoZW4gbm8gY2hhbmdlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdFx0XHRpZiAodXBkYXRlVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob2xkUHJvcFZhbCAhPT0gbmV3UHJvcFZhbClcclxuXHRcdFx0dXBkYXRlVmFsID0gbmV3UHJvcFZhbDtcclxuXHJcblx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0Ly8gaWYgdXBkYXRlIG1ldGhvZCBpcyBkZWZpbmVkIHVzZSBpdDsgb3RoZXJ3aXNlLCByZW1vdmUgdGhlIG9sZCB2YWx1ZSBhbmQgc2V0IHRoZSBuZXcgb25lXHJcblx0XHRpZiAoaW5mby51cGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aW5mby51cGRhdGUoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHJlbW92ZSBtZXRob2QgaXMgZGVmaW5lZCwgdXNlIGl0LiBOb3RlIHRoYXQgaWYgcmVtb3ZlIG1ldGhvZCBpcyBub3QgZGVmaW5lZFxyXG5cdFx0XHQvLyB3ZSBkb24ndCB1c2UgZWxtLnJlbW92ZUF0dHJpYnV0ZSB0byBzYXZlIHRpbWUgKGFzIHRoZSBmb2xsb3dpbmcgaW5mby5zZXQgb3JcclxuXHRcdFx0Ly8gZWxtLnNldEF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIGl0IGFueXdheS5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5yZW1vdmUoIGVsbSwgYXR0ck5hbWUpO1xyXG5cclxuXHRcdFx0aWYgKGluZm8uc2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5zZXQoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdHlwZW9mIHVwZGF0ZVZhbCA9PT0gXCJzdHJpbmdcIiA/IHVwZGF0ZVZhbCA6IHVwZGF0ZVZhbC50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlcmUgd2FzIGNoYW5nZSBpbiBhdHRyaWJ1dGUgdmFsdWUuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxyXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggcHJvcE5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5yZW1vdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggYXR0ck5hbWUpO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8gUmVnaXN0ZXIgZXZlbnRzIHdpdGggc3BlY2lhbCBuYW1lc1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZEluc2VydFwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lclByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRJbnNlcnRDYXB0dXJlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJDYXB0dXJlUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lckNhcHR1cmVQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkUmVtb3ZlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZFJlbW92ZUNhcHR1cmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lckNhcHR1cmVQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyQ2FwdHVyZVByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1yZW1vdmVcIiB9KTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIHN0eWxlIHByb3BlcnR5LiBTdHlsZSBwcm9wZXJ0eSBjYW4gYmUgc3BlY2lmaWVkIGVpdGhlciBhcyBhIHN0cmluZyBvciBhcyB0aGVcclxuLy8gQ1NTU3R5bGVEZWNsYXJhdGlvbiBvYmplY3QuIElmIHRoZSBvbGQgYW5kIG5ldyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgYXJlIG9mIGRpZmZlcmVudCB0eXBlc1xyXG4vLyB0aGUgZGlmZiBmdW5jdGlvbiByZXR1cm5zIHRoZSBuZXcgc3R5bGUgdmFsdWUuIElmIGJvdGggYXJlIG9mIHRoZSBzdHJpbmcgdHlwZSwgdGhlbiB0aGUgbmV3XHJcbi8vIHN0cmluZyB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgYm90aCBhcmUgb2YgdGhlIENTU1N0eWxlRGVjbGFyYXRpb24gdHlwZSwgdGhlbiBhbiBvYmplY3QgaXNcclxuLy8gcmV0dXJuZWQgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHN0eWxlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIGNoYW5nZWQuIEZvciB1cGRhdGVkIGl0ZW1zLCB0aGVcclxuLy8ga2V5IHZhbHVlIGlzIGZyb20gdGhlIG5ldyBzdHlsZSB2YWx1ZTsgZm9yIHJlbW92ZWQgaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIFwic3R5bGVcIik7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGNvbnN0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKGVsbSBhcyBIVE1MRWxlbWVudCkuc3R5bGU7XHJcblx0XHRmb3IoIGxldCBrZXkgaW4gcHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qga2V5VmFsOiBhbnkgPSBwcm9wVmFsW2tleV07XHJcblx0XHRcdGlmIChlbG1TdHlsZVtrZXldICE9PSBrZXlWYWwpXHJcblx0XHRcdFx0ZWxtU3R5bGVba2V5XSA9IGtleVZhbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZTdHlsZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYW55XHJcbntcclxuXHRpZiAodHlwZW9mIG9sZFByb3BWYWwgIT09IHR5cGVvZiBuZXdQcm9wVmFsKVxyXG5cdFx0cmV0dXJuIG5ld1Byb3BWYWw7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGNvbnN0IG9sZFN0eWxlID0gb2xkUHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZTtcclxuXHRcdGNvbnN0IG5ld1N0eWxlID0gbmV3UHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZTtcclxuXHJcblx0XHRjb25zdCB1cGRhdGVWYWw6IG1pbS5TdHlsZVByb3BUeXBlID0ge307XHJcblx0XHRsZXQgY2hhbmdlc0V4aXN0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG9sZCBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBuZXcgb25lLiBUaGVzZVxyXG5cdFx0Ly8gd2lsbCBiZSByZW1vdmVkLlxyXG5cdFx0Zm9yKCBsZXQga2V5IGluIG9sZFN0eWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zdCBvbGRWYWw6IGFueSA9IG9sZFN0eWxlW2tleV07XHJcblx0XHRcdGNvbnN0IG5ld1ZhbDogYW55ID0gbmV3U3R5bGVba2V5XTtcclxuXHRcdFx0aWYgKG5ld1ZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2hhbmdlc0V4aXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHR1cGRhdGVWYWxba2V5XSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChuZXdWYWwgIT09IG9sZFZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdWYWw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgbmV3IHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG9sZCBvbmUuIFRoZXNlXHJcblx0XHQvLyB3aWxsIGJlIGFkZGVkLlxyXG5cdFx0Zm9yKCBsZXQga2V5IGluIG5ld1N0eWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zdCBvbGRWYWw6IGFueSA9IG9sZFN0eWxlW2tleV07XHJcblx0XHRcdGlmIChvbGRWYWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdTdHlsZVtrZXldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNoYW5nZXNFeGlzdCA/IHVwZGF0ZVZhbCA6IHVuZGVmaW5lZDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogYW55KTogdm9pZFxyXG57XHJcblx0Y29uc3QgZWxtU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSAoZWxtIGFzIEhUTUxFbGVtZW50KS5zdHlsZTtcclxuXHRmb3IoIGxldCBrZXkgaW4gdXBkYXRlVmFsIGFzIE9iamVjdClcclxuXHR7XHJcblx0XHRjb25zdCBrZXlWYWw6IGFueSA9IHVwZGF0ZVZhbFtrZXldO1xyXG5cdFx0aWYgKGtleVZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRlbG1TdHlsZVtrZXldID0gbnVsbDtcclxuXHRcdFx0Ly9lbG1TdHlsZVtrZXldID0gXCJpbml0aWFsXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdGVsbVN0eWxlW2tleV0gPSBrZXlWYWw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vIERldGVybWluZXMgd2hldGhlciB0aGUgZmlyc3Qgc3R5bGUgaXMgYSBjb21wbGV0ZSBzdWJzZXQgb2YgdGhlIHNlY29uZCBvbmU7IHRoYXQgaXMga2V5c1xyXG4vLy8vIGluIHRoZSBmaXJzdCBzdHlsZSBhcmUgYWxsIGZvdW5kIGFuZCBoYXZlIHRoZSBzYW1lIHZhbHVlcyBpbiB0aGUgc2Vjb25kIHN0eWxlLlxyXG4vL2Z1bmN0aW9uIGlzU3R5bGUxU3Vic2V0T2ZTdHlsZTIoIHN0eWxlMTogT2JqZWN0LCBzdHlsZTI6IE9iamVjdCk6IGJvb2xlYW5cclxuLy97XHJcbi8vXHRmb3IoIGxldCBrZXkxIGluIHN0eWxlMSlcclxuLy9cdHtcclxuLy9cdFx0aWYgKHN0eWxlMVtrZXkxXSAhPT0gc3R5bGUyW2tleTFdKVxyXG4vL1x0XHRcdHJldHVybiBmYWxzZTtcclxuLy9cdH1cclxuXHJcbi8vXHRyZXR1cm4gdHJ1ZTtcclxuLy99XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiB2YWx1ZSBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIHZhbHVlIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlIHZhbHVlXHJcbi8vIGZpZWxkIG9uIHRoZSBlbGVtZW50LiBUaGUgc2V0IGFuZCB1cGRhdGUgbWV0aG9kcyB3b3JrIHRoZSBzYW1lIHdheS4gV2UgZGVmaW5lIHRoZSByZW1vdmUgbWV0aG9kXHJcbi8vIGJ5IHNldHRpbmcgdGhlIGVsbS52YWx1ZSBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0VmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gcHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZlZhbHVlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LiBXZSB3YW50IGFsd2F5cyB0byBzZXQgdGhpcyB2YWx1ZSB0byB0aGUgZWxlbWVudCBiZWNhdXNlIHRoZVxyXG5cdC8vIGVsZW1lbnQncyB2YWx1ZSBtYXkgaGF2ZSBjaG5nZWQgKGJ5IHRoZSB1c2VyIG9yIHByb2dyYW1tYXRpY2FsbHkpLlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eS4gVGhlIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSB3b3JrcyBhcyBhIHZhbHVlIHByb3BlcnR5IHdoZW4gdGhlXHJcbi8vIGVsZW1lbnQgaXMgZmlyc3QgbW91bnRlZCBhbmQgaXMgaWdub3JlZCB1cG9uIHVwZGF0ZXMgYW5kIHJlbW92YWxzLiBUaGlzIGFsbG93cyB1c2luZ1xyXG4vLyBkZWZhdWx0VmFsdWUgdG8gaW5pdGlhbGl6ZSB0aGUgY29udHJvbCB2YWx1ZSBvbmNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gZGlmZkRlZmF1bHRWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgcmV0dXJuaW5nIHVuZGVmaW5lZCB3ZSBpbmRpY2F0ZSB0aGF0IG5vIGNoYW5nZXMgd2VyZSBtYWRlIHRvIHRoZSBwcm9wZXJ0eSBhbmQgdGh1cyB0aGVcclxuXHQvLyB1cGRhdGUgd2lsbCBub3QgYmUgY2FsbGVkXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gZG8gbm90aGluZ1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgY2hlY2tlZCBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIGNoZWNrZWQgcHJvcGVydHkgYXMgYW4gYXR0cmlidXRlIHdlIHNldCB0aGVcclxuLy8gY2hlY2tlZCBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlXHJcbi8vIG1ldGhvZCBieSBzZXR0aW5nIHRoZSBlbG0uY2hlY2tlZCBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0Q2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZDaGVja2VkUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGVja2VkUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge0VsbUF0dHIsIEF0dHJQcm9wSW5mbywgRXZlbnRQcm9wSW5mbywgQ3VzdG9tQXR0clByb3BJbmZvLCBQcm9wVHlwZX0gZnJvbSBcIi4vRWxtQXR0clwiXHJcbmltcG9ydCB7U3ZnRWxtc30gZnJvbSBcIi4vU3ZnRWxtc1wiO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBET00gZWxlbWVudCBjcmVhdGVkIHVzaW5nIEpTWC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1WTiBleHRlbmRzIFZOIGltcGxlbWVudHMgbWltLklFbG1WTlxyXG57XHJcblx0Y29uc3RydWN0b3IoIHRhZ05hbWU6IHN0cmluZywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGFnIG5hbWUgYW5kIGNoaWxkcmVuXHJcblx0XHR0aGlzLmVsbU5hbWUgPSB0YWdOYW1lO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5IGFuZCByZWZcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElFbG1WTiBpbXBsZW1lbnRhdGlvblxyXG5cdHB1YmxpYyBnZXQgRWxtTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5lbG1OYW1lOyB9XHJcblx0cHVibGljIGdldCBFbG0oKTogRWxlbWVudCB7IHJldHVybiB0aGlzLmVsbTsgfVxyXG5cdHB1YmxpYyBnZXQgSXNTdmcoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzU3ZnOyB9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0cHVibGljIGdldFN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkVsbTsgfVxyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyB0eXBlLlxyXG5cdHB1YmxpYyBnZXQgdHlwZSgpOiBtaW0uVk5UeXBlIHsgcmV0dXJuIG1pbS5WTlR5cGUuRWxtOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZWxlbWVudCdzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZWxtTmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkcmVuO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSB2aXJ0dWFsIG5vZGUncyBjb250ZW50IGludG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYW4gU1ZHIG9yIEhUTUwgZWxlbWVudCBhbmQgY3JlYXRlIHRoZSBlbGVtZW50XHJcblx0XHRsZXQgc3ZnSW5mbyA9IFN2Z0VsbXMuZ2V0U3ZnRWxtSW5mbyggdGhpcy5lbG1OYW1lKTtcclxuXHRcdHRoaXMuaXNTdmcgPSBzdmdJbmZvICE9PSB1bmRlZmluZWQgJiYgKHN2Z0luZm8gIT09IHRydWUgfHwgdGhpcy5hbmNob3JETi5uYW1lc3BhY2VVUkkuZW5kc1dpdGgoIFwic3ZnXCIpKTtcclxuXHRcdHRoaXMuZWxtID0gdGhpcy5pc1N2Z1xyXG5cdFx0XHQ/IHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBTdmdFbG1zLm5hbWVzcGFjZSwgU3ZnRWxtcy5nZXRFbG1OYW1lKCBzdmdJbmZvLCB0aGlzLmVsbU5hbWUpKVxyXG5cdFx0XHQ6IHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggdGhpcy5lbG1OYW1lKTtcclxuXHJcblx0XHQvLyB0cmFuc2xhdGUgcHJvcGVydGllcyBpbnRvIGF0dHJpYnV0ZXMsIGV2ZW50cyBhbmQgY3VzdG9tIGF0dHJpYnV0ZXNcclxuXHRcdHRoaXMucGFyc2VQcm9wcygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmF0dHJzKVxyXG5cdFx0XHR0aGlzLmFkZEF0dHJzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZXZlbnRzKVxyXG5cdFx0XHR0aGlzLmFkZEV2ZW50cygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHR0aGlzLmFkZEN1c3RvbUF0dHJzKCk7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIChpZiBzcGVjaWZpZWQpXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGNvbnRlbnQgZnJvbSB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGVsZW1lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgKGFuZC9vciBjb21wb25lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGVsZW1lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuZWxtKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyB0ZXJtaW5hdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHRpZiAodGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0dGhpcy5yZW1vdmVDdXN0b21BdHRycygpO1xyXG5cclxuXHRcdC8vIGNsZWFuIHVwXHJcblx0XHR0aGlzLmVsbSA9IG51bGw7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGlzIGlzIHRoZSBzYW1lIHR5cGUgb2YgZWxlbWVudDsgdGhhdCBpcywgaXQgaGFzIHRoZSBzYW1lXHJcblx0XHQvLyBuYW1lLlxyXG5cdFx0cmV0dXJuIHRoaXMuZWxtTmFtZSA9PT0gKG5ld1ZOIGFzIEVsbVZOKS5lbG1OYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRjb25zdCBuZXdFbG1WTjogRWxtVk4gPSBuZXdWTiBhcyBFbG1WTjtcclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHByb3BzIGFuZCBjaGlsZHJlblxyXG5cdFx0dGhpcy5wcm9wcyA9IG5ld0VsbVZOLnByb3BzO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IG5ld0VsbVZOLmNoaWxkcmVuO1xyXG5cclxuXHRcdC8vIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBhbmQgY2hpbGRyZW4gd2lsbCBoYXZlIHRvIGJlIHVwZGF0ZWQgdmlhIHJlbmRlclxyXG5cdFx0cmV0dXJuIHsgc2hvdWxkQ29tbWl0OiB0cnVlLCBzaG91bGRSZW5kZXI6IHRydWUgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Y29uc3QgbmV3RWxtVk46IEVsbVZOID0gbmV3Vk4gYXMgRWxtVk47XHJcblx0XHRuZXdFbG1WTi5wYXJzZVByb3BzKCk7XHJcblxyXG5cdFx0Ly8gaWYgcmVmZXJlbmNlIHNwZWNpZmljYXRpb24gY2hhbmdlZCB0aGVuIHNldCBvciB1bnNldCBpdCBhcyBuZWNlc3NhcnlcclxuXHRcdGlmIChuZXdFbG1WTi5yZWYgIT09IHRoaXMucmVmKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uXHJcblx0XHRcdHRoaXMucmVmID0gbmV3RWxtVk4ucmVmO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVmZXJlbmNlIGlzIG5vdyBzcGVjaWZpZWQsIHNldCBpdCBub3c7IG5vdGUgdGhhdCB3ZSBhbHJlYWR5IGRldGVybWluZWQgdGhhdFxyXG5cdFx0XHQvLyB0aGUgcmVmZXJlbmNlIG9iamVjdCBpcyBkaWZmZXJlbnQuXHJcblx0XHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmVsbSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0VsbVZOLmtleTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZUF0dHJzKCBuZXdFbG1WTi5hdHRycyk7XHJcblx0XHR0aGlzLnVwZGF0ZUV2ZW50cyggbmV3RWxtVk4uZXZlbnRzKTtcclxuXHRcdHRoaXMudXBkYXRlQ3VzdG9tQXR0cnMoIG5ld0VsbVZOLmN1c3RvbUF0dHJzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIGFuZCBub3QgdG8gYW55IG9mIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldE93bkROKCk6IEROXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZWxtO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHb2VzIG92ZXIgdGhlIG9yaWdpbmFsIHByb3BlcnRpZXMgYW5kIHB1dHMgdGhlbSBpbnRvIHRoZSBidWNrZXRzIG9mIGF0dHJpYnV0ZXMsIGV2ZW50XHJcblx0Ly8gbGlzdGVuZXJzIGFuZCBjdXN0b20gYXR0cmlidXRlcy5cclxuXHRwcml2YXRlIHBhcnNlUHJvcHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMucHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSB0aGlzLnByb3BzW3Byb3BOYW1lXTtcclxuXHJcblx0XHRcdC8vIGdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJvcGVydHkgYW5kIGRldGVybWluZSBpdHMgdHlwZSAocmVndWxhciBhdHRyaWJ1dGUsIGV2ZW50XHJcblx0XHRcdC8vIG9yIGN1c3RvbSBhdHRyaWJ1dGUpLiBOb3RlIHRoYXQgZ2V0UHJvcGVydHlJbmZvIG1heSByZXR1cm4gbnVsbCBmb3IgbW9zdCByZWd1bGFyXHJcblx0XHRcdC8vIGF0dHJpYnV0ZXMgYW5kIGV2ZW50czsgaW4gdGhpcyBjYXNlIHdlIHdpbGwgY2hlY2sgdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdFx0XHRsZXQgcHJvcEluZm8gPSBFbG1BdHRyLmdldFByb3BlcnR5SW5mbyggcHJvcE5hbWUpO1xyXG5cdFx0XHRsZXQgcHJvcFR5cGUgPSBwcm9wSW5mbyA/IHByb3BJbmZvLnR5cGUgOiB0aGlzLklzRXZlbnRWYWx1ZSggcHJvcFZhbCkgPyBQcm9wVHlwZS5FdmVudCA6IFByb3BUeXBlLkF0dHI7XHJcblxyXG5cdFx0XHRpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkF0dHIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuYXR0cnMpXHJcblx0XHRcdFx0XHR0aGlzLmF0dHJzID0ge307XHJcblxyXG5cdFx0XHRcdHRoaXMuYXR0cnNbcHJvcE5hbWVdID0geyBpbmZvOiBwcm9wSW5mbywgdmFsOiBwcm9wVmFsIH07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkV2ZW50KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGV2ZW50SW5mbyA9IHRoaXMuR2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggcHJvcEluZm8sIHByb3BWYWwpO1xyXG5cdFx0XHRcdGlmIChldmVudEluZm8pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHRcdFx0dGhpcy5ldmVudHMgPSB7fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuZXZlbnRzW3Byb3BOYW1lXSA9IGV2ZW50SW5mbztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSAvLyBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkN1c3RvbUF0dHIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0XHR0aGlzLmN1c3RvbUF0dHJzID0ge307XHJcblxyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIGN1c3RvbWUgYXR0cmlidXRlcyB2YWx1ZS4gSGFuZGxlciB3aWxsIGJlIGNyZWF0ZWQgbGF0ZXIuXHJcblx0XHRcdFx0dGhpcy5jdXN0b21BdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvIGFzIEN1c3RvbUF0dHJQcm9wSW5mbywgdmFsOiBwcm9wVmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0aGFuZGxlcjogdW5kZWZpbmVkfTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnR5IHZhbHVlIGlzIG9mIHRoZSB0eXBlIHRoYXQgaXMgdXNlZCBmb3IgZXZlbnQgaGFuZGxlcnMuXHJcblx0Ly8gSWYgeWVzLCB0aGVuIHJldHVybnMgRXZlbnRSdW5UaW1lRGF0YSBvYmplY3Q7IG90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcblx0cHJpdmF0ZSBJc0V2ZW50VmFsdWUoIHByb3BWYWw6IGFueSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdHlwZW9mIHByb3BWYWwgPT09IFwiZnVuY3Rpb25cIiB8fFxyXG5cdFx0XHRBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMCAmJiB0eXBlb2YgcHJvcFZhbFswXSA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnR5IHZhbHVlIGlzIG9mIHRoZSB0eXBlIHRoYXQgaXMgdXNlZCBmb3IgZXZlbnQgaGFuZGxlcnMuXHJcblx0Ly8gSWYgeWVzLCB0aGVuIHJldHVybnMgRXZlbnRSdW5UaW1lRGF0YSBvYmplY3Q7IG90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcblx0cHJpdmF0ZSBHZXRQcm9wQXNFdmVudFJ1blRpbWVEYXRhKCBpbmZvOiBFdmVudFByb3BJbmZvLCBwcm9wVmFsOiBhbnkpOiBFdmVudFJ1blRpbWVEYXRhXHJcblx0e1xyXG5cdFx0aWYgKHR5cGVvZiBwcm9wVmFsID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHR7XHJcblx0XHRcdGxldCBvcmdGdW5jID0gcHJvcFZhbCBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+O1xyXG5cdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jLCB1c2VDYXB0dXJlOiBmYWxzZSB9O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA9PT0gMiAmJlxyXG5cdFx0XHRcdHR5cGVvZiBwcm9wVmFsWzBdID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHByb3BWYWxbMV0gPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgb3JnRnVuYyA9IHByb3BWYWxbMF0gYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PjtcclxuXHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYywgdXNlQ2FwdHVyZTogcHJvcFZhbFsxXSBhcyBib29sZWFuIH07XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZm9yIGFsbCBvdGhlciB0eXBlIGNvbWJpbmF0aW9ucyBjb25zaWRlciBpdCB0byBiZSBhIHJlZ3VsYXIgYXR0cmlidXRlXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIERPTSBhdHRyaWJ1dGVzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgYWRkQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5hdHRycyA9IG51bGxcIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5hdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJ0ZCA9IHRoaXMuYXR0cnNbbmFtZV07XHJcblx0XHRcdEVsbUF0dHIuc2V0QXR0ciggdGhpcy5lbG0sIG5hbWUsIHJ0ZC5pbmZvLCBydGQudmFsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBET00gYXR0cmlidXRlcyBvZiB0aGlzIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVBdHRycyggbmV3QXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIFwiY2FjaGVcIiBzZXZlcmFsIG1lbWViZXJzIGZvciBmYXN0ZXIgYWNjZXNzXHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG07XHJcblx0XHRsZXQgb2xkQXR0cnMgPSB0aGlzLmF0dHJzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBhdHRyaWJ1dGVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXcgb25lcyBhbmRcclxuXHRcdC8vIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZFJURCA9IG9sZEF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRycyA/IG5ld0F0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3UlREIHx8ICFuZXdSVEQudmFsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgYXR0cmlidXRlIGZyb20gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIucmVtb3ZlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGUgbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaGFzIGEgZGlmZmVyZW50IHZhbHVlLCByZW1tZWJlciB0aGlzXHJcblx0XHRcdFx0XHQvLyB2YWx1ZSBhbmQgc2V0IGl0IHRvIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIudXBkYXRlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbywgb2xkUlRELnZhbCwgbmV3UlRELnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBhdHRyaWJ1dGVzOyBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0F0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0F0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEF0dHJzICYmIChuYW1lIGluIG9sZEF0dHJzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgbmV3UlREID0gbmV3QXR0cnNbbmFtZV07XHJcblx0XHRcdFx0RWxtQXR0ci5zZXRBdHRyKCBlbG0sIG5hbWUsIG5ld1JURC5pbmZvLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXR0cnMgPSBuZXdBdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBpbmZvcm1hdGlvbiBhYm91dCBldmVudHMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRFdmVudHMoKTogdm9pZFxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEV2ZW50cyBjYWxsZWQgd2l0aCB0aGlzLmV2ZW50cyA9IG51bGxcIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwcml2YXRlIGFkZEV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdGV2ZW50LndyYXBwZXIgPSB0aGlzLndyYXBDYWxsYmFjayggZXZlbnQub3JnRnVuYyk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBldmVudC53cmFwcGVyLCBldmVudC51c2VDYXB0dXJlKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy9cclxuLy8vLy8vLy8vLy9cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVFdmVudCggbmFtZTogc3RyaW5nLCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBuYW1lLCBldmVudC53cmFwcGVyLCBldmVudC51c2VDYXB0dXJlKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudHMoIG5ld0V2ZW50czogeyBbbmFtZTogc3RyaW5nXTogRXZlbnRSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRFdmVudHMgPSB0aGlzLmV2ZW50cztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgZXZlbnQgbGlzdGVuZXJzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEV2ZW50cylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBvbGRFdmVudHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkRXZlbnQgPSBvbGRFdmVudHNbbmFtZV07XHJcblx0XHRcdFx0bGV0IG5ld0V2ZW50ID0gbmV3RXZlbnRzID8gbmV3RXZlbnRzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3RXZlbnQpXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCBvbGRFdmVudCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVFdmVudCggbmFtZSwgb2xkRXZlbnQsIG5ld0V2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgZXZlbnQgbGlzdGVuZXJzIGFuZCBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdFdmVudHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChvbGRFdmVudHMgJiYgKG5hbWUgaW4gb2xkRXZlbnRzKSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBuZXdFdmVudCA9IG5ld0V2ZW50c1tuYW1lXTtcclxuXHRcdFx0dGhpcy5hZGRFdmVudCggbmFtZSwgbmV3RXZlbnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZXZlbnRzID0gbmV3RXZlbnRzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIGV2ZW50IGxpc3RlbmVyIGFyZSBkaWZmZXJlbnQgYW5kIHNldHNcclxuXHQvLyB0aGUgdXBkYXRlZCB2YWx1ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kIGZhbHNlIGlmIG5vIGNoYW5nZSBoYXNcclxuXHQvLyBiZWVuIGRldGVjdGVkLlxyXG5cdHByaXZhdGUgdXBkYXRlRXZlbnQoIG5hbWU6IHN0cmluZywgb2xkRXZlbnQ6IEV2ZW50UnVuVGltZURhdGEsIG5ld0V2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmIChvbGRFdmVudC5vcmdGdW5jID09PSBuZXdFdmVudC5vcmdGdW5jICYmIG9sZEV2ZW50LnVzZUNhcHR1cmUgPT09IG5ld0V2ZW50LnVzZUNhcHR1cmUpXHJcblx0XHR7XHJcblx0XHRcdG5ld0V2ZW50LndyYXBwZXIgPSBvbGRFdmVudC53cmFwcGVyO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggbmFtZSwgb2xkRXZlbnQud3JhcHBlciwgb2xkRXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0bmV3RXZlbnQud3JhcHBlciA9IHRoaXMud3JhcENhbGxiYWNrKCBuZXdFdmVudC5vcmdGdW5jKTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIG5ld0V2ZW50LndyYXBwZXIsIG5ld0V2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlcmUgd2FzIGNoYW5nZSBpbiBldmVudCBsaXN0ZW5lciB2YWx1ZS5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgYWRkQ3VzdG9tQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQ3VzdG9tQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5jdXN0b21BdHRycyA9IG51bGxcIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRhdGEgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0bGV0IGhhbmRsZXIgPSBkYXRhLmluZm8uZmFjdG9yeS5jcmVhdGVIYW5kbGVyKCBuYW1lKTtcclxuXHRcdFx0aWYgKCFoYW5kbGVyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGluaXRpYWxpemUgdGhlIGhhbmRsZXIgYW5kIHJlbWVtYmVyIGl0IGluIG91ciBvYmplY3RcclxuXHRcdFx0aGFuZGxlci5pbml0aWFsaXplKCB0aGlzLCBuYW1lLCBkYXRhLnZhbCk7XHJcblx0XHRcdGRhdGEuaGFuZGxlciA9IGhhbmRsZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERlc3Ryb3lzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgZWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUN1c3RvbUF0dHJzKCk6IHZvaWRcclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLnJlbW92ZUN1c3RvbUF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuY3VzdG9tQXR0cnMgPSBudWxsXCIpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBpbmZvID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0aW5mby5oYW5kbGVyLnRlcm1pbmF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdDdXN0b21BdHRyczogeyBbbmFtZTogc3RyaW5nXTogQ3lzdG9tQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEN1c3RvbUF0dHJzID0gdGhpcy5jdXN0b21BdHRycztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgY3VzdG9tIHByb3BlcnRpZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkQ3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQ3VzdG9tQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zdCBvbGRDdXN0b21BdHRyID0gb2xkQ3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29uc3QgbmV3Q3VzdG9tQXR0ciA9IG5ld0N1c3RvbUF0dHJzID8gbmV3Q3VzdG9tQXR0cnNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdDdXN0b21BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHRlcm1pbmF0ZSBpdHMgaGFuZGxlclxyXG5cdFx0XHRcdFx0b2xkQ3VzdG9tQXR0ci5oYW5kbGVyLnRlcm1pbmF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBjdXN0b20gcHJvcGVydHkgYW5kIHJlbWVtYmVyIHRoZSBuZXcgdmFsdWVcclxuXHRcdFx0XHRcdG9sZEN1c3RvbUF0dHIuaGFuZGxlci51cGRhdGUoIG9sZEN1c3RvbUF0dHIudmFsLCBuZXdDdXN0b21BdHRyLnZhbCk7XHJcblx0XHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBvbGRDdXN0b21BdHRyLmhhbmRsZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBjdXN0b20gcHJvcGVydGllcyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdDdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdDdXN0b21BdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRDdXN0b21BdHRycyAmJiAobmFtZSBpbiBvbGRDdXN0b21BdHRycykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRyc1tuYW1lXTtcclxuXHJcblx0XHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHRcdGxldCBoYW5kbGVyID0gbmV3Q3VzdG9tQXR0ci5pbmZvLmZhY3RvcnkuY3JlYXRlSGFuZGxlciggbmFtZSk7XHJcblx0XHRcdFx0aWYgKCFoYW5kbGVyKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdC8vIGluaXRpYWxpemUgdGhlIGhhbmRsZXIgYW5kIHJlbWVtYmVyIGl0IGluIG91ciBvYmplY3RcclxuXHRcdFx0XHRoYW5kbGVyLmluaXRpYWxpemUoIHRoaXMsIG5hbWUsIG5ld0N1c3RvbUF0dHIudmFsKTtcclxuXHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXN0b21BdHRycyA9IG5ld0N1c3RvbUF0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUYWcgbmFtZSBvZiBhbiBFbGVtZW50LlxyXG5cdHByaXZhdGUgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBBcnJheSBvZiBjaGlsZHJlbiBvYmplY3RzLlxyXG5cdHByaXZhdGUgY2hpbGRyZW46IGFueVtdO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LiBUaGUgaW5zdGFuY2UgaXMgY3JlYXRlZCB3aGVuIHRoZSBub2RlIGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3RcclxuXHQvLyB0aW1lLlxyXG5cdHByaXZhdGUgZWxtOiBFbGVtZW50ID0gbnVsbDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEVsZW1lbnQgaXMgU1ZHIChhcyBvcHBvc2VkIHRvIEhUTE0pLiBUaGVyZSBhcmUgc29tZSBTVkdcclxuXHQvLyBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHNhbWUgbmFtZSBhcyByZWd1bGFyIGVsZW1lbnRzIChlLmcuIDxhPikuIFRoZXJlZm9yZSwgaW4gb3JkZXIgdG9cclxuXHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBvciBub3Qgd2UgbmVlZCB0byBjaGVjayB0aGUgbmFtZXNwYWNlVVJJIG9mIHRoZSBwYXJlbnRcclxuXHQvLyAoYW5jaG9yZSkgRE9NIG5vZGUuXHJcblx0cHJpdmF0ZSBpc1N2ZzogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC4gVGhlIHJlZiBwcm9wZXJ0eSBjYW4gYmUgY2hhbmdlZCBvbiB1cGRhdGUuXHJcblx0cHJpdmF0ZSByZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBhdHRyaWJ1dGUgbmFtZXMgYW5kIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxyXG5cdHByaXZhdGUgYXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBuYW1lcyBvZiBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBwYXJhbWV0ZXJzLlxyXG5cdHByaXZhdGUgZXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGN1c3RvbSBlbGVtZW50IHByb3BlcnRpZXMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBoYW5kbGVyIG9iamVjdHMgYW5kIHZhbHVlcy5cclxuXHRwcml2YXRlIGN1c3RvbUF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBDeXN0b21BdHRyUnVuVGltZURhdGEgfTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggcmVndWxhciBhdHRyaWJ1dGVcclxuaW50ZXJmYWNlIEF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBhdHRyaWJ1dGUgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGw7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZXZlbnQgc2hvdWxkIGJlIHVzZWQgYXMgQ2FwdHVyaW5nICh0cnVlKSBvciBCdWJibGluZyAoZmFsc2UpXHJcblx0dmFsOiBhbnk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCBldmVudCBsaXN0ZW5lclxyXG5pbnRlcmZhY2UgRXZlbnRSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBldmVudCAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogRXZlbnRQcm9wSW5mbyB8IG51bGw7XHJcblxyXG5cdC8vIE9yaWdpbmFsIGV2ZW50IGNhbGxiYWNrIHBhc3NlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGV2ZW50IHByb3BlcnR5IGluIEpTWFxyXG5cdG9yZ0Z1bmM6IG1pbS5FdmVudEZ1bmNUeXBlPGFueT47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZXZlbnQgc2hvdWxkIGJlIHVzZWQgYXMgQ2FwdHVyaW5nICh0cnVlKSBvciBCdWJibGluZyAoZmFsc2UpXHJcblx0dXNlQ2FwdHVyZTogYm9vbGVhbjtcclxuXHJcblx0Ly8gV3JhcHBlciBmdW5jdGlvbiB0aGF0IHdlIGNyZWF0ZSBhbmQgYmluZCB0byBvdXIgbm9kZSBhbmQgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLiBXZSBuZWVkXHJcblx0Ly8gdGhpcyB3cmFwcGVyIGluIG9yZGVyIHRvIGNhdGNoIGV4Y2VwdGlvbiBpbiB0aGUgY2FsbGJhY2sgYW5kIHBhc3MgdGhlbSBvbiB0byBhbiBlcnJvclxyXG5cdC8vIGhhbmRsaW5nIHNlcnZpY2UuIFRoZSB3cmFwcGVyIGlzIG1hcmtlZCBvcHRpb25hbCBiZWNhdXNlIGl0IGlzIGNyZWF0ZWQgb25seSBpZiBhIG5ld1xyXG5cdC8vIGV2ZW50IGxpc3RlbmVyIGlzIGFkZGVkOyB0aGF0IGlzLCBpZiBkdXJpbmcgdXBkYXRlLCB0aGUgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24gaXMgdGhlXHJcblx0Ly8gc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byBjcmVhdGUgbmV3IHdyYXBwZXIgYmVjYXVzZSB0aGUgb2xkIG9uZSB3aWxsIGJlIHVzZWQuXHJcblx0d3JhcHBlcj86ICBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggY3VzdG9tIHByb3BlcnR5LlxyXG5pbnRlcmZhY2UgQ3lzdG9tQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGN1c3RvbSBhdHRyaWJ1dGUgLSBjYW5ub3QgYmUgbnVsbFxyXG5cdGluZm86IEN1c3RvbUF0dHJQcm9wSW5mbztcclxuXHJcblx0Ly8gQ3VycmVudCB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuXHR2YWw6IGFueTtcclxuXHJcblx0Ly8gSGFuZGxlciBvYmplY3QgdGhhdCBrbm93cyB0byBkZWFsIHdpdGggdGhlIHByb3BlcnR5IHZhbHVlc1xyXG5cdGhhbmRsZXI6IG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxhbnk+O1xyXG59O1xyXG5cclxuXHJcblxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElFdmVudFNsb3QgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycy4gTXVsdGlwbGVcclxuLy8gbGlzdGVuZXJzIGNhbiBiZSBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbj5cclxue1xyXG5cdC8vIE1ldGhvZCB0aGF0IHJhaXNlcyB0aGUgZXZlbnQgYW5kIGNhbGxzIGFsbCB0aGUgbGlzdGVuZXJzIChpZiBhbnkpLiBJdCBoYXMgdGhlIHNpZ25hdHVyZVxyXG5cdC8vIG9mIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBzbyBvbmx5IHByb3Blci10eXBlcyBwYXJhbWV0ZXJzIGNhbiBiZSBwYXNzZWQgdG8gaXQuXHJcblx0ZmlyZTogVEZ1bmM7XHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQvLyBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHRhZGQoIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LlxyXG5cdHJlbW92ZSggbGlzdGVuZXI6IFRGdW5jKTogdm9pZDtcclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC5cclxuXHRjbGVhcigpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRXZlbnRTbG90IGNsYXNzIGRlZmluZXMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycyBhcyBtZW1iZXJzIG9mIGNsYXNzZXMgd2l0aG91dCB0aGVcclxuLy8gbmVlZCBmb3IgdGhlIGNsYXNzZXMgdG8gZGVyaXZlIGZyb20gRXZlbnRUYXJnZXQgYW5kIHVzZSBzdHJpbmcgbmFtZXMgZm9yIGV2ZW50cy4gTXVsdGlwbGVcclxuLy8gbGlzdGVuZXJzIGNhbiBiZSBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+IGltcGxlbWVudHMgSUV2ZW50U2xvdDxURnVuYz5cclxue1xyXG5cdC8vIE1ldGhvZCB0aGF0IHJhaXNlcyB0aGUgZXZlbnQgYW5kIGNhbGxzIGFsbCB0aGUgbGlzdGVuZXJzIChpZiBhbnkpLiBJdCBoYXMgdGhlIHNpZ25hdHVyZVxyXG5cdC8vIG9mIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBzbyBvbmx5IHByb3Blci10eXBlcyBwYXJhbWV0ZXJzIGNhbiBiZSBwYXNzZWQgdG8gaXQuXHJcblx0cHVibGljIGZpcmU6IFRGdW5jID0gdGhpcy5yZWFsRmlyZSBhcyBhbnkgYXMgVEZ1bmM7XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuIE5vdGUgdGhhdCB0aGlzIHNob3VsZCBub3QgYmUgYSBsYW1iZGFcclxuXHQvLyBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHRwdWJsaWMgYWRkKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzID09PSBudWxsKVxyXG5cdFx0XHR0aGlzLmxpc3RlbmVycyA9IG5ldyBTZXQ8VEZ1bmM+KCk7XHJcblxyXG5cdFx0dGhpcy5saXN0ZW5lcnMuYWRkKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LlxyXG5cdHB1YmxpYyByZW1vdmUoIGxpc3RlbmVyOiBURnVuYyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGlzdGVuZXJzLmRlbGV0ZSggbGlzdGVuZXIpO1xyXG5cdFx0XHRpZiAodGhpcy5saXN0ZW5lcnMuc2l6ZSA9PT0gMClcclxuXHRcdFx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIGxpc3RlbmVyIHRvIHRoZSBldmVudC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucy4gV2hlbiB0aGVyZSBhcmUgbm8gbGlzdGVuZXJzLCB0aGlzIGZpZWxkIGlzIHNldCB0byBudWxsIHRvXHJcblx0Ly8gcHJlc2VydmUgc3BhY2UuXHJcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IFNldDxURnVuYz4gPSBudWxsO1xyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIHJlYWxseSBjYWxscyB0aGUgbGlzdGVuZXJzIGluIGEgbG9vcC4gSXQgZGVjb25zdHVjdHMgdGhlIFwiYXJndW1lbnRzXCIgdmFsdWVcclxuXHQvLyBpbiBvcmRlciB0byBwYXNzIHRoZSBwcm9wZXIgcGFyYW1ldGVycyB0byB0aGUgbGlzdGVuZXJzLlxyXG5cdHByaXZhdGUgcmVhbEZpcmUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpXHJcblx0XHRcdFx0bGlzdGVuZXIoIC4uLmFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRXZlbnRNdWx0aVNsb3QgY2xhc3MgYWxsb3dzIHJlZ2lzdGVyaW5nIGxpc3RlbmVycyBmb3IgbXVsdGlwbGUgZXZlbnRzLiBFdmVudHMgYXJlIGlkZW50aWZpZWRcclxuLy8gdXNpbmcgdGhlIHNwZWNpZmllZCB0ZW1wbGF0ZSB0eXBlLCB3aGljaCBpcyB1c3VhbGx5IChidXQgbm90IG5lY2Vzc2FyaWx5KSBhIG51bWJlci0gb3JcclxuLy8gc3RyaW5nLWJhc2VkIGVudW1lcmF0aW9uIG9yIHVuaW9uIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRXZlbnRNdWx0aVNsb3Q8VD5cclxue1xyXG5cdC8vIEFkZHMgYSBuZXcgbGlzdGVuZXIgdG8gdGhlIGdpdmVuIGV2ZW50XHJcblx0cHVibGljIGFkZExpc3RlbmVyKCBldmVudDogVCwgZXZlbnRGdW5jOiBGdW5jdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zbG90cyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnNsb3RzID0gbmV3IE1hcDxULEV2ZW50U2xvdDxGdW5jdGlvbj4+KCk7XHJcblxyXG5cdFx0bGV0IHNsb3QgPSB0aGlzLnNsb3RzLmdldCggZXZlbnQpO1xyXG5cdFx0aWYgKHNsb3QgPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0c2xvdCA9IG5ldyBFdmVudFNsb3Q8RnVuY3Rpb24+KCk7XHJcblx0XHRcdHRoaXMuc2xvdHMuc2V0KCBldmVudCwgc2xvdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2xvdC5hZGQoIGV2ZW50RnVuYyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGxpc3RlbmVyIGZyb20gdGhlIGdpdmVuIGV2ZW50XHJcblx0cHVibGljIHJlbW92ZUxpc3RlbmVyKCBldmVudDogVCwgZXZlbnRGdW5jOiBGdW5jdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zbG90cyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2xvdCA9IHRoaXMuc2xvdHMuZ2V0KCBldmVudCk7XHJcblx0XHRcdGlmIChzbG90ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0c2xvdC5yZW1vdmUoIGV2ZW50RnVuYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNsb3RzOiBNYXA8VCxFdmVudFNsb3Q8RnVuY3Rpb24+PjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBJbnRlcmZhY2UgYW5kIGNsYXNzIGZvciBzaW1wbGUgZXZlbnRzIGFjY2VwdGluZyBubyBwYXJhbWV0ZXJzLlxyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVFdmVudFNsb3QgZXh0ZW5kcyBJRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlRXZlbnRTbG90IGV4dGVuZHMgRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHJlbmRlcmluZyBmdW5jdGlvbiBhLmsuYS4gc3RhdGVsZXNzIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jVk4gZXh0ZW5kcyBWTlxyXG57XHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGlzIG5vZGUgY29ycmVzcG9uZHMgdG8gYSBmcmFnbWVudCBwbGFjZWhvbGRlci4gKi9cclxuXHRwdWJsaWMgc3RhdGljIGlzVk5hRnJhZ21lbnQoIHZuOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKHZuIGFzIEZ1bmNWTikuZnVuYyA9PT0gbWltLkZyYWdtZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggZnVuYzogbWltLkZ1bmNDb21wVHlwZSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5mdW5jID0gZnVuYztcclxuXHJcblx0XHQvLyBjb3B5IHByb3BlcnRpZXMgdG8gb3VyIG93biBvYmplY3QgZXhjbHVkaW5nIGZyYW1ld29yay1oYW5kbGVkIGtleVxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnByb3BzW3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90IHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW5cclxuXHRcdFx0Ly8gdW5kZWZpbmVkLlxyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGNoaWxkcmVuIGFzIHBhcnQgb2YgcHJvcHNcclxuXHRcdHRoaXMucHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3MgdHlwZS5cclxuXHRwdWJsaWMgZ2V0IHR5cGUoKTogbWltLlZOVHlwZSB7IHJldHVybiBtaW0uVk5UeXBlLkZ1bmNDb21wOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZnVuY3Rpb24ncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmZ1bmMubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyggdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdFx0cHVibGljIHdpbGxNb3VudCgpOiBib29sZWFuXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0XHQvLyBET00gdHJlZS5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0fVxyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIGl0IGlzIHRoZSBzYW1lIGZ1bmN0aW9uIG9iamVjdFxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyA9PT0gKG5ld1ZOIGFzIEZ1bmNWTikuZnVuYztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNWTiA9IG5ld1ZOIGFzIEZ1bmNWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RnVuY1ZOLmtleTtcclxuXHJcblx0XHQvLyB0YWtlIHByb3BlcnRpZXMgZnJvbSB0aGUgbmV3IG5vZGVcclxuXHRcdHRoaXMucHJvcHMgPSBuZXdGdW5jVk4ucHJvcHM7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIHsgc2hvdWxkQ29tbWl0OiBmYWxzZSwgc2hvdWxkUmVuZGVyOiB0cnVlIH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETlxyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgZG9uJ3QgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiBmb3IgYSBzdGF0ZWxlc3MgY29tcG9uZW50LiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZyBwcm9jZXNzLlxyXG5cdGZ1bmM6IG1pbS5GdW5jQ29tcFR5cGU7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LCBmdW5jdGlvbiBvciBlbGVtZW50LlxyXG5cdHByb3BzOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7Vk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge0NvbXBCYXNlVk59IGZyb20gXCIuL0NvbXBCYXNlVk5cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBJbnN0YW5jZVZOIGlzIGEgbm9kZSB0aGF0IGhvbGRzIGFuIGluc3RhbmNlIG9mIGFuIElDb21wb25lbnQtaW1wbGVtZW50aW5nIG9iamVjdC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBJbnN0YW5jZVZOIGV4dGVuZHMgQ29tcEJhc2VWTjxtaW0uSUNvbXBvbmVudD4gaW1wbGVtZW50cyBtaW0uSUluc3RhbmNlVk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBjb21wOiBtaW0uSUNvbXBvbmVudClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5jb21wID0gY29tcDtcclxuXHJcblx0XHQvLyB0aGUgY29tcG9uZW50IG9iamVjdCBpcyBhIGtleSBmb3IgdGhlIG5vZGVcclxuXHRcdHRoaXMua2V5ID0gY29tcDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIElJbnN0YW5jZVZOIGltcGxlbWVudGF0aW9uXHJcblx0cHVibGljIGdldCBDb21wKCk6IG1pbS5JQ29tcG9uZW50IHsgcmV0dXJuIHRoaXMuY29tcDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyB0eXBlLlxyXG5cdHB1YmxpYyBnZXQgdHlwZSgpOiBtaW0uVk5UeXBlIHsgcmV0dXJuIG1pbS5WTlR5cGUuSW5zdGFuY2VDb21wOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZ2V0RGlzcGxheU5hbWUgbWV0aG9kOyBpZiB0aGV5IGRvbid0IHRoZW4gdGhlIGRlZmF1bHQgbmFtZVxyXG5cdFx0Ly8gaXMgdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIG5hbWVcclxuXHRcdGlmICh0aGlzLmNvbXAuZ2V0RGlzcGxheU5hbWUpXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbXAuZ2V0RGlzcGxheU5hbWUoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMuY29tcC5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHRoaXMud2lsbE1vdW50SW5zdGFuY2UoIHRoaXMuY29tcCk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53aWxsVW5tb3VudEluc3RhbmNlKCB0aGlzLmNvbXApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGUgY29tcG9uZW50cyBhcmUgZnJvbSB0aGUgc2FtZSBjbGFzc1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcCA9PT0gKG5ld1ZOIGFzIEluc3RhbmNlVk4pLmNvbXAgfHxcclxuXHRcdFx0XHR0aGlzLmNvbXAuY29uc3RydWN0b3IgPT09IChuZXdWTiBhcyBJbnN0YW5jZVZOKS5jb21wLmNvbnN0cnVjdG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlPyggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gaWYgaXQgaXMgdGhlIHNhbWUgY29tcG9uZW50IGluc3RhbmNlLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXHJcblx0XHRsZXQgbmV3Q29tcCA9IChuZXdWTiBhcyBJbnN0YW5jZVZOKS5jb21wO1xyXG5cdFx0bGV0IG5lZWRzVXBkYXRpbmcgPSB0aGlzLmNvbXAgIT09IG5ld0NvbXA7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGNvcG9uZW50IGluc3RhbmNlIGFyZSBkaWZmZXJlbnQsIHRoZW4gd2UgbmVlZCB0byBwcmVwYXJlIHRoZSBuZXcgaW5zdGFuY2UgZm9yXHJcblx0XHQvLyBtb3VudGluZy5cclxuXHRcdGlmIChuZWVkc1VwZGF0aW5nKVxyXG5cdFx0XHR0aGlzLndpbGxNb3VudEluc3RhbmNlKCBuZXdDb21wKTtcclxuXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQ6IG5lZWRzVXBkYXRpbmcsIHNob3VsZFJlbmRlcjogbmVlZHNVcGRhdGluZyB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlPyggbmV3Vk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHdlIGFyZSBoZXJlIG9ubHkgaWYgdGhlIGNvbXBvbmVudCBpbnN0YW5jZXMgYXJlIGRpZmZlcmVudC4gSW4gdGhpcyBjYXNlIHdlIHNob3VsZFxyXG5cdFx0Ly8gcmVwbGFjZSB0aGUgb2xkIGNvbXBvbmVudCB3aXRoIHRoZSBuZXcgb25lIGFuZCBhbHNvIHJlcGxhY2UgaXRzIGNoYXJhY3RlcmlzdGljcy5cclxuXHRcdC8vIEZpcnN0IGluZGljYXRlIHRoYXQgb3VyIG9sZCBjb21wb25lbnQgd2lsbCBiZSB1bm1vdW50ZWRcclxuXHRcdHRoaXMud2lsbFVubW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuXHJcblx0XHRsZXQgbmV3SW5zdGFuY2VWTiA9IG5ld1ZOIGFzIEluc3RhbmNlVk47XHJcblx0XHR0aGlzLmNvbXAgPSB0aGlzLmtleSA9IG5ld0luc3RhbmNlVk4uY29tcDtcclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBnaXZlbiBjb21wb25lbnQgdGhhdCBpciB3aWxsIGJlIG1vdW50ZWQuXHJcblx0cHJpdmF0ZSB3aWxsTW91bnRJbnN0YW5jZSggY29tcDogbWltLklDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaXQgaXMgT0sgZm9yIHRoZSBjb21wb25lbnQgdG8gbm90IGltcGxlbWVudCBzZXRTaXRlIG1ldGhvZDsgaG93ZXZlciwgaXQgd2lsbCBub3QgYmVcclxuXHRcdC8vIGFibGUgdG8gdXNlIGFueSBvZiB0aGUgTWltYmwgc2VydmljZXMgaW5jbHVkaW5nIHJlcXVlc3RzIGZvciB1cGRhdGVzLlxyXG5cdFx0aWYgKHRoaXMuY29tcC5zZXRTaXRlKVxyXG5cdFx0XHRjb21wLnNldFNpdGUoIHRoaXMpO1xyXG5cclxuXHRcdGlmIChjb21wLmNvbXBvbmVudFdpbGxNb3VudClcclxuXHRcdFx0Y29tcC5jb21wb25lbnRXaWxsTW91bnQoKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm90aWZpZXMgdGhlIGdpdmVuIGNvbXBvbmVudCB0aGF0IGl0IHdpbGwgYmUgdW5tb3VudGVkLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudEluc3RhbmNlKCBjb21wOiBtaW0uSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoY29tcC5jb21wb25lbnRXaWxsVW5tb3VudClcclxuXHRcdFx0Y29tcC5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbXAuc2V0U2l0ZSlcclxuXHRcdFx0Y29tcC5zZXRTaXRlKCBudWxsKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtJRXZlbnRTbG90LCBFdmVudFNsb3R9IGZyb21cIi4vRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuL21pbVwiXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG5cdHtcclxuICAgICAgICBMb2NhbFN0eWxlczogSUxvY2FsU3R5bGVTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUxvY2FsU3R5bGVTZXJ2aWNlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2VydmljZSB0aGF0IGlzIHB1Ymxpc2hlZCBieSBjb21wb25lbnRzIHRoYXRcclxuLy8gZGVmaW5lIHRoZWlyIGxvY2FsIENTUyBzdHlsZXM7IHRoYXQgaXMsIGNvbXBvbmVudHMgZGVyaXZpbmcgZnJvbSB0aGUgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzXHJcbi8vIGNsYXNzLiBUaGUgaW50ZXJmYWNlIGFsbG93cyByZXRyaWV2aW5nIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgZGVjb3JhdGVkIHdpdGggdGhlIHVuaXF1ZVxyXG4vLyBJRCwgd2hpY2ggYXZvaWRzIGR1cGxpY2F0aW9uIG9mIG5hbWVzIGJldHdlZW4gY29tcG9uZW50cyBvZiB0aGUgc2FtZSBvciBkaWZmZXJlbnQgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbFN0eWxlU2VydmljZVxyXG57XHJcblx0Ly8gUmV0dXJucyB0aGUgdW5pcXVlIElEIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZW0gdW5pcXVlLlxyXG5cdHJlYWRvbmx5IHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJldHJ1cm5zIENTUyBjbGFzcyBvciB2YXJpYWJsZSBuYW1lIGRlY29yYXRlZCB3aXRoIGEgdW5pcXVlIElELlxyXG5cdGRlY29yYXRlTmFtZSggbmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgY29tcG9uZW50cyB0aGF0IGRlZmluZSBsb2NhbCBDU1Mgc3R5bGVzLlxyXG4vLyBXaGVuIHRoaXMgY29tcG9uZW50IGlzIG1vdW50ZWQgaXQgY3JlYXRlcyBhIG5ldyA8c3R5bGU+IGVsZW1lbnQgKHdpdGhpbiB0aGUgPGhlYWQ+IGVsZW1lbnQpLlxyXG4vLyBBbGwgY2xhc3MgbmFtZXMgYW5kIHZhcmlhYmxlIG5hbWVzIGRlZmluZWQgd2l0aGluIHRoaXMgc3R5bGUgd2lsbCBoYXZlIGEgdW5pcXVlIElEIGFkZGVkIHRvXHJcbi8vIHRoZW0gaW4gb3JkZXIgdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgbmFtZXMgYW1vbmcgb3RoZXIgY29tcG9uZW50cyAob2YgdGhlIHNhbWUgb3Igb2YgZGlmZmVyZW50XHJcbi8vIHR5cGUuIFRoaXMgY2xhc3MgYWxzbyBwdWJsaXNoZXMgYSBzZXJ2aWNlIGltcGxlbWVudGluZyB0aGUgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcblx0XHRcdFx0ZXh0ZW5kcyBtaW0uQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+XHJcblx0XHRcdFx0aW1wbGVtZW50cyBJTG9jYWxTdHlsZVNlcnZpY2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogVFByb3BzID0gbnVsbClcclxuXHR7XHJcblx0XHRzdXBlciggcHJvcHMpO1xyXG5cclxuXHRcdHRoaXMubV91bmlxdWVJRCA9IChNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCkpLnRvU3RyaW5nKCk7XHJcblx0XHR0aGlzLnJ1bGVzID0gbmV3IE1hcDxzdHJpbmcsUnVsZUluZm8+KCk7XHJcblx0XHR0aGlzLnJ1bGVOYW1lcyA9IFtdO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSA8c3R5bGU+IGVsZW1lbnQgaW4gdGhlIDxoZWFkPlxyXG5cdFx0dGhpcy5zdHlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIik7XHJcblx0XHR0aGlzLnN0eWxlRWxtLmlkID0gdGhpcy5tX3VuaXF1ZUlEO1xyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggdGhpcy5zdHlsZUVsbSk7XHJcblxyXG5cdFx0Ly8vLyBXZWJLaXQgaGFjayA6KFxyXG5cdFx0Ly90aGlzLnN0eWxlRWxtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0Ly8gSUxvY2FsU3R5bGVTZXJ2aWNlIGltcGxlbWVudGF0aW9uLlxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSB1bmlxdWUgSUQgdXNlZCB0byBkZWNvcmF0ZSBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIHRvIG1ha2UgdGhlbSB1bmlxdWUuXHJcblx0cHVibGljIGdldCB1bmlxdWVJRCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tX3VuaXF1ZUlEOyB9XHJcblxyXG5cdC8vIFJldHJ1cm5zIENTUyBjbGFzcyBvciB2YXJpYWJsZSBuYW1lIGRlY29yYXRlZCB3aXRoIGEgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBkZWNvcmF0ZU5hbWUoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lICsgdGhpcy5tX3VuaXF1ZUlEO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvLyBQdWJsaWMgaW50ZXJmYWNlLlxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBDcmVhdGVzIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGNyZWF0ZVN0eWxlUnVsZSggbmFtZTogc3RyaW5nLCBzZWxlY3Rvcj86IHN0cmluZywgcHJvcHM/OiBtaW0uU3R5bGVQcm9wVHlwZSk6IElNQ3NzU3R5bGVSdWxlXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGR1bW15IHN0eWxlIHJ1bGVcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMuY3JlYXRlRHVtbXlSdWxlKCBuYW1lLCBcImR1bW15IHt9XCIpO1xyXG5cdFx0bGV0IGNzc29tUnVsZTogQ1NTU3R5bGVSdWxlID0gaW5mby5jc3NvbVJ1bGUgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBzdHlsZSBydWxlIG9iamVjdFxyXG5cdFx0bGV0IG1jc3NTdHlsZVJ1bGU6IE1Dc3NTdHlsZVJ1bGUgPSBuZXcgTUNzc1N0eWxlUnVsZSggdGhpcy51bmlxdWVJRCwgY3Nzb21SdWxlKTtcclxuXHRcdGlmIChzZWxlY3RvcilcclxuXHRcdFx0bWNzc1N0eWxlUnVsZS5zZXRTZWxlY3Rvciggc2VsZWN0b3IpO1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0XHRtY3NzU3R5bGVSdWxlLnNldFByb3BlcnRpZXMoIHByb3BzKTtcclxuXHJcblx0XHRpbmZvLm1jc3NSdWxlID0gbWNzc1N0eWxlUnVsZTtcclxuXHRcdHJldHVybiBtY3NzU3R5bGVSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGEgcnVsZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBnZXRSdWxlKCBuYW1lOiBzdHJpbmcpOiBJTUNzc1J1bGVcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLnJ1bGVzLmdldCggbmFtZSk7XHJcblx0XHRyZXR1cm4gaW5mbyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogaW5mby5tY3NzUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhIHJ1bGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgcmVtb3ZlUnVsZSggbmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGNvbXBvbmVudERpZE1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnNpdGUucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIiwgdGhpcyk7XHJcblx0fVx0XHJcblxyXG5cclxuXHJcblx0cHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnNpdGUudW5wdWJsaXNoU2VydmljZSggXCJMb2NhbFN0eWxlc1wiKTtcclxuXHJcblx0XHR0aGlzLnN0eWxlRWxtLnJlbW92ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHN0eWxlIHJ1bGUuXHJcblx0cHJpdmF0ZSBjcmVhdGVEdW1teVJ1bGUoIG5hbWU6IHN0cmluZywgcnVsZVRleHQ6IHN0cmluZyk6IFJ1bGVJbmZvXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgcnVsZSB3aXRoIHRoaXMgbmFtZVxyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5ydWxlcy5nZXQoIG5hbWUpO1xyXG5cdFx0aWYgKGluZm8gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5yZW1vdmVSdWxlKCBuYW1lKTtcclxuXHJcblx0XHQvLyB0aGUgbmV3IHJ1bGUgd2lsbCBiZWNvbWVzIHRoZSBsYXN0IGluIHRoZSBhcnJheSBvZiBydWxlc1xyXG5cdFx0bGV0IGluZGV4ID0gdGhpcy5ydWxlTmFtZXMubGVuZ3RoO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBkdW1teSBzdHlsZSBydWxlXHJcblx0XHRsZXQgc2hlZXQ6IENTU1N0eWxlU2hlZXQgPSB0aGlzLnN0eWxlRWxtLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQ7XHJcblx0XHRzaGVldC5pbnNlcnRSdWxlKCBydWxlVGV4dCwgaW5kZXgpO1xyXG5cdFx0bGV0IGNzc29tUnVsZTogQ1NTUnVsZSA9IHNoZWV0LnJ1bGVzW2luZGV4XTtcclxuXHJcblx0XHQvLyBhZGQgdGhlIHJ1bGUgdG8gb3VyIGludGVybmFsIHN0cnVjdHVyZXNcclxuXHRcdHRoaXMucnVsZU5hbWVzLnB1c2goIG5hbWUpO1xyXG5cdFx0aW5mbyA9IHsgbWNzc1J1bGU6IG51bGwsIGNzc29tUnVsZSwgaW5kZXggfTtcclxuXHRcdHRoaXMucnVsZXMuc2V0KCBuYW1lLCBpbmZvKTtcclxuXHJcblx0XHRyZXR1cm4gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5pcXVlIElEIHRoYXQgaXMgdXNlZCB0byBkZWNvcmF0ZSBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIGRlZmluZWQgYnkgdGhlIGNvbXBvbmVudC5cclxuXHRwcml2YXRlIG1fdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gU3R5bGUgZWxlbWVudCBET00gb2JqZWN0LiBJcyBkZWZpbmVkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcblx0cHJpdmF0ZSBzdHlsZUVsbTogSFRNTFN0eWxlRWxlbWVudDtcclxuXHJcblx0Ly8gTWFwIG9mIHJ1bGVzIGJ5IHRoZWlyIG5hbWVzLlxyXG5cdHByaXZhdGUgcnVsZXM6IE1hcDxzdHJpbmcsUnVsZUluZm8+O1xyXG5cclxuXHQvLyBBcnJheSBvZiBydWxlIG5hbWVzLiBUaGlzIGlzIG5lZWRlZCB0byBhZGp1c3QgaW5kZXhlcyBvZiBydWxlcyBhZnRlciBhIHJ1bGUgaXMgcmVtb3ZlZC5cclxuXHRwcml2YXRlIHJ1bGVOYW1lczogc3RyaW5nW107XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIZWxwZXIgdHlwZSB0aGF0IGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgQ1NTIHJ1bGUgYWRkZWQgdG8gQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxudHlwZSBSdWxlSW5mbyA9IHsgbWNzc1J1bGU6IElNQ3NzUnVsZSwgY3Nzb21SdWxlOiBDU1NSdWxlLCBpbmRleDogbnVtYmVyIH07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSU1Dc3NSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIHJ1bGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNQ3NzUnVsZVxyXG57XHJcblx0Ly8gVW5pcXVlIElEIHVzZWQgaW4gY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzXHJcblx0cmVhZG9ubHkgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gQ1NTT00gcnVsZVxyXG5cdHJlYWRvbmx5IGNzc29tUnVsZTogQ1NTUnVsZTtcclxuXHJcblx0Ly8gQXBwZW5kcyB1bmlxdWUgSUQgdG8gdGhlIGdpdmVuIG5hbWUuXHJcblx0ZGVjb3JhdGUoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxuXHJcblx0Ly8gUmVwbGFjZXMgdGhlIG1hcmtlciBcIigqKVwiIGluIHRoZSBnaXZlbiBuYW1lIHdpdGggdGhlIHVuaXF1ZSBJRFxyXG5cdHJlcGxhY2UoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1Dc3NSdWxlIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3Igb2JqZWN0cyByZXByZXNlbnRlZCBkaWZmZXJlbnQgdHlwZXMgb2YgQ1NTIHJ1bGVzIHRoYXRcclxuLy8gYXJlIGNyZWF0ZWQgYnkgdGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBjb21wb25lbnQuIFRoaXMgb2JqZWN0IHNpbXBseSBrZWVwcyB0aGUgdW5pcXVlXHJcbi8vIElEIHRoYXQgc2hvdWxkIGJlIHVzZWQgYnkgZGVyaXZlZCBjbGFzc2VzIHdoZW4gY3JlYXRpbmcgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIHNvIHRoYXQgdGhleVxyXG4vLyBhcmUgZ2xvYmFsbHkgdW5pcXVlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgTUNzc1J1bGVCYXNlPFQgZXh0ZW5kcyBDU1NSdWxlPiBpbXBsZW1lbnRzIElNQ3NzUnVsZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHVuaXF1ZUlEOiBzdHJpbmcsIGNzc29tUnVsZTogVClcclxuXHR7XHJcblx0XHR0aGlzLnVuaXF1ZUlEID0gdW5pcXVlSUQ7XHJcblx0XHR0aGlzLmNzc29tUnVsZSA9IGNzc29tUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQXBwZW5kcyB1bmlxdWUgSUQgdG8gdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIGRlY29yYXRlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZSArIHRoaXMudW5pcXVlSUQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcGxhY2VzIHRoZSBtYXJrZXIgXCIoKilcIiBpbiB0aGUgZ2l2ZW4gbmFtZSB3aXRoIHRoZSB1bmlxdWUgSURcclxuXHRwdWJsaWMgcmVwbGFjZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUucmVwbGFjZSggXCIoKilcIiwgdGhpcy51bmlxdWVJRCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuaXF1ZSBJRCB1c2VkIGluIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lc1xyXG5cdHB1YmxpYyB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBDU1NPTSBydWxlXHJcblx0cHVibGljIGNzc29tUnVsZTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElNQ3NzU3R5bGVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1Dc3NTdHlsZVJ1bGVcclxue1xyXG5cdC8vIFNldHMgdGhlIHJ1bGUgc2VsZWN0b3IuIFRoZSBzdHJpbmcgY2FuIGNvbnRhaW4gdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWRcclxuXHQvLyB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0U2VsZWN0b3IoIHNlbGVjdG9yOiBzdHJpbmcpO1xyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBCb3RoIHByb3BlcnR5IG5hbWUgYW5kIHByb3BlcnR5IHZhbHVlIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0UHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8vIFNldHMgc2V2ZXJhbCBzdHlsZSBwcm9wZXJ0aWVzLiBCb3RoIHByb3BlcnR5IG5hbWVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXMgY2FuIHVzZSB0aGVcclxuXHQvLyAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRzZXRQcm9wZXJ0aWVzKCBwcm9wczogbWltLlN0eWxlUHJvcFR5cGUpOiB2b2lkO1xyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBQcm9wZXJ0eSBuYW1lIGNhbiB1c2UgdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmVcclxuXHQvLyBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cmVtb3ZlUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTUNzc1N0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgdGhhdCBjb250YWlucyBhIHNlbGVjdG9yIGFuZCBhIHNldCBvZlxyXG4vLyBzdHlsZSBwcm9wZXJ0eSBuYW1lLXZhbHVlIHBhaXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgTUNzc1N0eWxlUnVsZSBleHRlbmRzIE1Dc3NSdWxlQmFzZTxDU1NTdHlsZVJ1bGU+IGltcGxlbWVudHMgSU1Dc3NTdHlsZVJ1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB1bmlxdWVJRDogc3RyaW5nLCBjc3NvbVJ1bGU6IENTU1N0eWxlUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggdW5pcXVlSUQsIGNzc29tUnVsZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIHJ1bGUgc2VsZWN0b3IuIFRoZSBzdHJpbmcgY2FuIGNvbnRhaW4gdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWRcclxuXHQvLyB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFNlbGVjdG9yKCBzZWxlY3Rvcjogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnNlbGVjdG9yVGV4dCA9IHRoaXMucmVwbGFjZSggc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBCb3RoIHByb3BlcnR5IG5hbWUgYW5kIHByb3BlcnR5IHZhbHVlIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGUuc2V0UHJvcGVydHkoIHRoaXMucmVwbGFjZSggcHJvcE5hbWUpLCB0aGlzLnJlcGxhY2UoIHByb3BWYWwpLFxyXG5cdFx0XHRcdFx0XHRpbXBvcnRhbnQ/IFwiaW1wb3J0YW50XCIgOiB1bmRlZmluZWQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHNldmVyYWwgc3R5bGUgcHJvcGVydGllcy4gQm90aCBwcm9wZXJ0eSBuYW1lcyBhbmQgcHJvcGVydHkgdmFsdWVzIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFByb3BlcnRpZXMoIHByb3BzOiBtaW0uU3R5bGVQcm9wVHlwZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlW3RoaXMucmVwbGFjZSggcHJvcE5hbWUpXSA9IHRoaXMucmVwbGFjZSggcHJvcHNbcHJvcE5hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gUHJvcGVydHkgbmFtZSBjYW4gdXNlIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlXHJcblx0Ly8gc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyByZW1vdmVQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNzc29tUnVsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSggdGhpcy5yZXBsYWNlKCBwcm9wTmFtZSkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtSb290Vk59IGZyb20gXCIuL1Jvb3RWTlwiXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RFcnJvclVJIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cHJpdmF0ZSByb290Vk46IFJvb3RWTjtcclxuXHRwcml2YXRlIGVycjogYW55O1xyXG5cdHByaXZhdGUgcGF0aFN0cmluZzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvciggcm9vdFZOOiBSb290Vk4sIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucm9vdFZOID0gcm9vdFZOO1xyXG5cdFx0dGhpcy5lcnIgPSBlcnI7XHJcblx0XHR0aGlzLnBhdGhTdHJpbmcgPSBwYXRoID8gcGF0aC5qb2luKCBcIiBcXHUyMTkyIFwiKSA6IFwiXCI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IGlkPVwicm9vdEVycm9yXCIgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwic3RhcnRcIn19PlxyXG5cdFx0XHQ8ZGl2Pnt0aGlzLmVyci5NZXNzYWdlfTwvZGl2PlxyXG5cdFx0XHQ8ZGl2Pnt0aGlzLnBhdGhTdHJpbmd9PC9kaXY+XHJcblx0XHRcdDxociBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0vPlxyXG5cdFx0XHQ8YnV0dG9uIGtleT1cImJ0blJlc3RhcnRcIiBjbGljaz17dGhpcy5vblJlc3RhcnR9PlJlc3RhcnQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblJlc3RhcnQgPSAoKTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMucm9vdFZOLnJlc3RhcnQoKTtcclxuXHR9O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vdFdhaXRpbmdVSSBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiTG9hZGluZyAuLi5cIjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBJUm9vdFZOfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7IFZOQ2hhaW4gfSBmcm9tIFwiLi9WTkNoYWluXCI7XHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21Db250ZW50fSBmcm9tIFwiLi9WTkNoYWluRnVuY3NcIlxyXG5pbXBvcnQge1ZORGlzcEFjdGlvbiwgVk5EaXNwLCBWTkRpc3BHcm91cH0gZnJvbSBcIi4vVk5EaXNwXCJcclxuaW1wb3J0IHtSb290RXJyb3JVSSwgUm9vdFdhaXRpbmdVSX0gZnJvbSBcIi4vUm9vdFVJXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vIGxldCBnX3JlcXVlc3RJZGxlQ2FsbGJhY2s6IChmdW5jOiAoKT0+dm9pZCkgPT4gbnVtYmVyID0gKHdpbmRvdyBhcyBhbnkpLnJlcXVlc3RJZGxlQ2FsbGJhY2tcclxuLy8gXHRcdFx0XHQ/ICh3aW5kb3cgYXMgYW55KS5yZXF1ZXN0SWRsZUNhbGxiYWNrXHJcbi8vIFx0XHRcdFx0OiAoZnVuYzogKCk9PnZvaWQpID0+IHNldFRpbWVvdXQoIGZ1bmMpO1xyXG5cclxuLy8gbGV0IGdfY2FuY2VsSWRsZUNhbGxiYWNrOiAoaGFuZGxlKSA9PiB2b2lkID0gKHdpbmRvdyBhcyBhbnkpLmNhbmNlbElkbGVDYWxsYmFja1xyXG4vLyBcdFx0XHRcdD8gKHdpbmRvdyBhcyBhbnkpLmNhbmNlbENhbGxiYWNrXHJcbi8vIFx0XHRcdFx0OiAoaGFuZGxlKSA9PiBjbGVhclRpbWVvdXQoIGhhbmRsZSk7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUm9vdFZOIGNsYXNzIGlzIHVzZWQgYXMgYSB0b3AtbGV2ZWwgdmlydHVhbCBub2RlIGZvciBhbGwgcmVuZGVyZWQgdHJlZXMuIFJvb3RWTiBzZXJ2ZXNcclxuLy8gYXMgYW4gZXJyb3IgYm91bmRhcnkgb2YgbGFzdCByZXNvcnQuIFdoZW4gaXQgY2F0Y2hlcyBhbiBlcnJvciB0aGF0IHdhc24ndCBjYXVnaHQgYnkgYW55XHJcbi8vIGRlc2NlbmRhbmQgbm9kZSwgaXQgZGlzcGxheXMgYSBzaW1wbGUgVUkgdGhhdCBzaG93cyB0aGUgZXJyb3IgYW5kIGFsbG93cyB0aGUgdXNlciB0byByZXN0YXJ0LlxyXG4vLyBSb290Vk4gYWxzbyBtYW5hZ2VzIHNlcnZpY2UgcHVibGlzaGVycyBhbmQgc3Vic2NyaWJlcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgUm9vdFZOIGV4dGVuZHMgVk4gaW1wbGVtZW50cyBJUm9vdFZOLCBtaW0uSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCBhbmNob3JETjogRE4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKVxyXG5cclxuXHRcdHRoaXMuYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHRcdHRoaXMuaW5pdGlhbGl6ZSggbnVsbCk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cdFx0dGhpcy53aWxsTW91bnQoKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdHB1YmxpYyBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgY29udGVudCB0byBiZSByZW5kZXJlZCB1bmRlciB0aGlzIHJvb3Qgbm9kZSBhbmQgdHJpZ2dlcnMgdXBkYXRlLlxyXG5cdHByaXZhdGUgc2V0Q29udGVudCggY29udGVudDogYW55LCBzeW5jOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0aWYgKHN5bmMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlLmFkZCggdGhpcyk7XHJcblx0XHRcdHRoaXMub25TY2hlZHVsZWRGcmFtZSgpO1xyXG5cclxuXHRcdFx0Ly8gbGV0IHNldCA9IG5ldyBTZXQ8Vk4+KCk7XHJcblx0XHRcdC8vIHNldC5hZGQoIHRoaXMpO1xyXG5cdFx0XHQvLyB0aGlzLnBlcmZvcm1VcGRhdGVDeWNsZSggc2V0KTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5yZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgYSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24gb3IgYSBjb21wb25lbnQgaW5zdGFuY2UpXHJcblx0Ly8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBpbiBhIHN5bmNocm9ub3VzIHdheS5cclxuXHRwdWJsaWMgc3RhdGljIG1vdW50Um9vdFN5bmMoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgcm9vdCBub2RlIHJlbWVtYmVyZWQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93blxyXG5cdFx0Ly8gcHJvcGVydHlcclxuXHRcdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0XHRpZiAoIXJvb3RWTilcclxuXHRcdHtcclxuXHRcdFx0Ly8gY3JlYXRlIHJvb3Qgbm9kZSBhbmQgcmVtZW1iZXIgaXQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdFx0XHRyb290Vk4gPSBuZXcgUm9vdFZOKCByZWFsQW5jaG9yRE4pO1xyXG5cdFx0XHQocmVhbEFuY2hvckROIGFzIGFueSlbUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdID0gcm9vdFZOO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHQvLyBzZXQgY29udGVudCB0byB0aGUgcm9vdCBub2RlIGFuZCB0cmlnZ2VyIHN5bmNocm9ub3VzIHVwZGF0ZVxyXG5cdFx0cm9vdFZOLnNldENvbnRlbnQoIGNvbnRlbnQsIHRydWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbm1vdW50cyBhIHJvb3Qgbm9kZSB0aGF0IHdhcyBjcmVhdGVkIHVzaW5nIG1vdW50Um9vdFN5bmMuXHJcblx0cHVibGljIHN0YXRpYyB1bm1vdW50Um9vdFN5bmMoIGFuY2hvckROOiBETik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdFx0aWYgKCFyZWFsQW5jaG9yRE4pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0XHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cdFx0aWYgKCFyb290Vk4pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyByZW1vdmUgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdGRlbGV0ZSByZWFsQW5jaG9yRE5bUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cclxuXHRcdHJvb3RWTi5zZXRDb250ZW50KCBudWxsLCB0cnVlKTtcclxuXHRcdHJvb3RWTi53aWxsVW5tb3VudCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IGEgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uIG9yIGEgY29tcG9uZW50IGluc3RhbmNlKVxyXG5cdC8vIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBtb3VudFJvb3QoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgcm9vdCBub2RlIHJlbWVtYmVyZWQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93blxyXG5cdFx0Ly8gcHJvcGVydHlcclxuXHRcdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0XHRpZiAoIXJvb3RWTilcclxuXHRcdHtcclxuXHRcdFx0Ly8gY3JlYXRlIHJvb3Qgbm9kZSBhbmQgcmVtZW1iZXIgaXQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdFx0XHRyb290Vk4gPSBuZXcgUm9vdFZOKCByZWFsQW5jaG9yRE4pO1xyXG5cdFx0XHQocmVhbEFuY2hvckROIGFzIGFueSlbUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdID0gcm9vdFZOO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHNldCBjb250ZW50IHRvIHRoZSByb290IG5vZGUsIHdoaWNoIHdpbGwgdHJpZ2dlciB1cGRhdGVcclxuXHRcdHJvb3RWTi5zZXRDb250ZW50KCBjb250ZW50LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVubW91bnRzIGEgcm9vdCBub2RlIHRoYXQgd2FzIGNyZWF0ZWQgdXNpbmcgc19Nb3VudFJvb3QuXHJcblx0cHVibGljIHN0YXRpYyB1bm1vdW50Um9vdCggYW5jaG9yRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblx0XHRpZiAoIXJlYWxBbmNob3JETilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGdldCBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eS5cclxuXHRcdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0XHRpZiAoIXJvb3RWTilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdFx0ZGVsZXRlIHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblxyXG5cdFx0Ly8gZGVzdHJ1Y3QgdGhlIHJvb3Qgbm9kZSAoYXN5bmNocm9ub3VzbHkpXHJcblx0XHRyb290Vk4uc2V0Q29udGVudCggbnVsbCwgZmFsc2UpO1xyXG5cdFx0cm9vdFZOLnNjaGVkdWxlQ2FsbCggKCkgPT4gcm9vdFZOLndpbGxVbm1vdW50KCkgKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIHR5cGUuXHJcblx0cHVibGljIGdldCB0eXBlKCk6IG1pbS5WTlR5cGUgeyByZXR1cm4gbWltLlZOVHlwZS5Sb290OyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIlJvb3RcIjsgfVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBhIGNoYWluIG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZVxyXG5cdC8vIHN1Yi1ub2RlcywgbnVsbCBzaG91bGQgYmUgcmV0dXJuZWQuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodGhpcy5lcnJvclVJKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvclVJO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy53YWl0aW5nVUkpXHJcblx0XHRcdHJldHVybiB0aGlzLndhaXRpbmdVSTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMuY29udGVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHR0aGlzLnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgdGhpcyk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3VwcG9ydHNFcnJvckhhbmRsaW5nKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoZXJyIGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb21pc2UgPSBlcnIgYXMgUHJvbWlzZTxhbnk+O1xyXG5cdFx0XHR0aGlzLnRocm93blByb21pc2VzLmFkZCggcHJvbWlzZSk7XHJcblx0XHRcdHByb21pc2UudGhlbiggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHRwcm9taXNlLmNhdGNoKCAoKSA9PiB7IHRoaXMub25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlKTsgfSk7XHJcblx0XHRcdGlmICghdGhpcy53YWl0aW5nVUkpXHJcblx0XHRcdFx0dGhpcy53YWl0aW5nVUkgPSBuZXcgUm9vdFdhaXRpbmdVSSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmVycm9yVUkgPSBuZXcgUm9vdEVycm9yVUkoIHRoaXMsIGVyciwgcGF0aCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETiB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgc3RhdGljIG1pbWJsQW5jaG9yUHJvcE5hbWUgPSBcIl9fbWltYmxBbmNob3JQcm9wTmFtZV9fXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gRGlzcGxheXMgdGhlIGNvbnRlbnQgb3JpZ2luYWxseSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG5cdHB1YmxpYyByZXN0YXJ0KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjbGVhciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gYmUgdXBkYXRlZFxyXG5cdFx0dGhpcy5lcnJvclVJID0gbnVsbDtcclxuXHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyBwdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQ8SyBleHRlbmRzIGtleW9mIG1pbS5JU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNvdXJjZVZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU2VydmljZUluZm8gPSB0aGlzLnNlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdFx0dGhpcy5zZXJ2aWNlSW5mb3Muc2V0KCBpZCwgaW5mbyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5mby5wdWJsaXNoaW5nVk5zLmFkZCggc291cmNlVk4pO1xyXG5cclxuXHRcdC8vIG5vdGlmeSBhbGwgc3Vic2NyaWJlZCBub2RlcyB0aGF0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBzZXJ2aWNlIGhhcyBjaGFuZ2VkXHJcblx0XHRmb3IoIGxldCB2biBvZiBpbmZvLnN1YnNjcmliZWRWTnMpXHJcblx0XHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHVucHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5cdHB1YmxpYyBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQ8SyBleHRlbmRzIGtleW9mIG1pbS5JU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNvdXJjZVZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU2VydmljZUluZm8gPSB0aGlzLnNlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpbmZvLnB1Ymxpc2hpbmdWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdFx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnNlcnZpY2VJbmZvcy5kZWxldGUoIGlkKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRcdFx0Zm9yKCBsZXQgdm4gb2YgaW5mby5zdWJzY3JpYmVkVk5zKVxyXG5cdFx0XHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgc3Vic2NyaWJlZCB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkPEsgZXh0ZW5kcyBrZXlvZiBtaW0uSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCBzb3VyY2VWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gdGhpcy5zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRpbmZvID0gbmV3IFNlcnZpY2VJbmZvKCk7XHJcblx0XHRcdHRoaXMuc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGluZm8uc3Vic2NyaWJlZFZOcy5hZGQoIHNvdXJjZVZOKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyB1bnN1YnNjcmliZWQgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQ8SyBleHRlbmRzIGtleW9mIG1pbS5JU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNvdXJjZVZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU2VydmljZUluZm8gPSB0aGlzLnNlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpbmZvLnN1YnNjcmliZWRWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdFx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnNlcnZpY2VJbmZvcy5kZWxldGUoIGlkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHVibGljIHJlcXVlc3ROb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF2bi5hbmNob3JETilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYFVwZGF0ZSByZXF1ZXN0ZWQgZm9yIHZpcnR1YWwgbm9kZSAnJHt2bi5wYXRoLmpvaW4oXCIvXCIpfScgdGhhdCBkb2Vzbid0IGhhdmUgYW5jaG9yIERPTSBub2RlYClcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFkZCB0aGlzIG5vZGUgdG8gdGhlIG1hcCBvZiBub2RlcyBmb3Igd2hpY2ggZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlbWVudCBvclxyXG5cdFx0Ly8gZGVsZXRpb24gaXMgc2NoZWR1bGVkLiBOb3RlIHRoYXQgYSBub2RlIHdpbGwgb25seSBiZSBwcmVzZW50IG9uY2UgaW4gdGhlIG1hcCBub1xyXG5cdFx0Ly8gbWF0dGVyIGhvdyBtYW55IHRpbWVzIGl0IGNhbGxzIHJlcXVlc3RVcGRhdGUoKS5cclxuXHRcdHRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlLmFkZCggdm4pO1xyXG5cclxuXHRcdC8vIHRoZSB1cGRhdGUgaXMgc2NoZWR1bGVkIGluIHRoZSBuZXh0IGN5Y2xlIHVubGVzcyB0aGUgcmVxdWVzdCBpcyBtYWRlIGR1cmluZyBhXHJcblx0XHQvLyBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24uXHJcblx0XHRpZiAodGhpcy5zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlKVxyXG5cdFx0XHR0aGlzLnJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbmNlbHMgYSBwcmV2aW91c2x5IHJlcXVlc3RlZCB1cGRhdGUgZm9yIHRoZSBnaXZlbiBub2RlLlxyXG5cdHB1YmxpYyBjYW5jZWxOb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdHJ5IHRvIHJlbW92ZSB0aGlzIG5vZGUgZnJvbSB0aGUgc2V0IG9mIG5vZGVzIGZvciB3aGljaCB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgb3JcclxuXHRcdC8vIGRlbGV0aW9uIGlzIHNjaGVkdWxlZC5cclxuXHRcdGlmICghdGhpcy52bnNTY2hlZHVsZWRGb3JVcGRhdGUuZGVsZXRlKCB2bikpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBpZiB0aGlzIHdhcyB0aGUgbGFzdCBub2RlIGluIHRoZSBzZXQsIGNhbmNlbCB0aGUgcmVxdWVzdCB0byBzY2hlZHVsZSB1cGRhdGUgcHJvY2Vzc2luZy5cclxuXHRcdGlmICh0aGlzLnNjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUpXHJcblx0XHRcdHRoaXMuY2FuY2VsRnJhbWVSZXF1ZXN0SWZOZWVkZWQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50c1xyXG5cdC8vIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdHB1YmxpYyBzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jOiBtaW0uU2NoZWR1bGVkRnVuY1R5cGUsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghZnVuYylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmIChiZWZvcmVVcGRhdGUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuYWRkKCBmdW5jKTtcclxuXHJcblx0XHRcdC8vIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gaXMgYWx3YXlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBmcmFtZSBldmVuIGlmIHRoZVxyXG5cdFx0XHQvLyBjYWxsIGlzIG1hZGUgZnJvbSBhbm90aGVyIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uLlxyXG5cdFx0XHR0aGlzLnJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5hZGQoIGZ1bmMpO1xyXG5cclxuXHRcdFx0Ly8gYW4gXCJhZnRlciB1cGRhdGVcIiBmdW5jdGlvbiBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGVcclxuXHRcdFx0Ly8gZWl0aGVyIGZyb20gYSBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24gb3IgZHVyaW5nIGEgbm9kZSB1cGRhdGUuXHJcblx0XHRcdGlmICh0aGlzLnNjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUgJiYgdGhpcy5zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlKVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VscyBhIGNhbGwgdGhhdCBoYXMgYmVlbiBzY2hlZHVsZWQgdG8gYmUgbWFkZSBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkXHJcblx0Ly8gY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHRwdWJsaWMgY2FuY2VsU2NoZWR1bGVkRnVuY0NhbGwoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFmdW5jKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5kZWxldGUoIGZ1bmMpO1xyXG5cdFx0XHR0aGlzLmNhbmNlbEZyYW1lUmVxdWVzdElmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5kZWxldGUoIGZ1bmMpO1xyXG5cdFx0XHRpZiAodGhpcy5zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlICYmIHRoaXMuc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLlVwZGF0ZSlcclxuXHRcdFx0XHR0aGlzLnJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyByZXBvcnRFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZnVsZmlsbGVkIHByb21pc2UgZnJvbSBvdXIgaW50ZXJuYWwgbGlzdCBhbmQgaWYgdGhlIGxpc3QgaXMgZW1wdHkgYXNrcyB0b1xyXG5cdC8vIHJlLXJlbmRlclxyXG5cdHByaXZhdGUgb25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlOiBQcm9taXNlPGFueT4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50aHJvd25Qcm9taXNlcy5kZWxldGUoIHByb21pc2UpO1xyXG5cdFx0aWYgKHRoaXMudGhyb3duUHJvbWlzZXMuc2l6ZSA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy53YWl0aW5nVUkgPSBudWxsO1xyXG5cdFx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjYWxsIHRvIHJlcXVlc3RBbmltYXRpb25GcmFtZSBzaG91bGQgYmUgbWFkZSBhZnRlciBhbiB1cGRhdGUgb3IgYVxyXG5cdC8vIGNhbGwgaGFzIGJlZW4gc2NoZWR1bGVkLlxyXG5cdHByaXZhdGUgcmVxdWVzdEZyYW1lSWZOZWVkZWQoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNjaGVkdWxlZEZyYW1lSGFuZGxlID09PSAwKVxyXG5cdFx0XHR0aGlzLnNjaGVkdWxlZEZyYW1lSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLm9uU2NoZWR1bGVkRnJhbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNhbGwgdG8gY2FuY2VsQW5pbWF0aW9uRnJhbWUgc2hvdWxkIGJlIG1hZGUgYWZ0ZXIgYSBzY2hlZHVsZWQgdXBkYXRlXHJcblx0Ly8gb3IgY2FsbCBoYXMgYmVlbiBjYW5jZWxlZC5cclxuXHRwcml2YXRlIGNhbmNlbEZyYW1lUmVxdWVzdElmTmVlZGVkKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy52bnNTY2hlZHVsZWRGb3JVcGRhdGUuc2l6ZSA9PT0gMCAmJlxyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNpemUgPT09IDAgJiZcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNpemUgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnNjaGVkdWxlZEZyYW1lSGFuZGxlKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZWRGcmFtZUhhbmRsZSA9IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIGEgbmV3IFVJIGN5Y2xlIHdoZW4gdGhlcmUgaXMgYSBuZWVkIHRvIHVwZGF0ZSBVSSBjb21wb25lbnRzXHJcblx0cHJpdmF0ZSBvblNjaGVkdWxlZEZyYW1lID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHQvLyBjbGVhciB0aGUgc2NoZWR1bGVkIGZyYW1lIGhhbmRsZSBzbyB0aGF0IG5ldyB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgcmVxdWVzdHMgd2lsbFxyXG5cdFx0Ly8gc2NoZWR1bGUgYSBuZXcgZnJhbWUuXHJcblx0XHR0aGlzLnNjaGVkdWxlZEZyYW1lSGFuZGxlID0gMDtcclxuXHJcblx0XHQvLyBpbmNyZW1lbnQgdGljayBudW1iZXIuXHJcblx0XHR0aGlzLmN1cnJlbnRUaWNrKys7XHJcblxyXG5cdFx0Ly8gY2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGludm9rZWQgYmVmb3JlIHVwZGF0aW5nIGNvbXBvbmVudHMuIElmIHRoaXMgZnVuY3Rpb25cclxuXHRcdC8vIGNhbGxzIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZCBvciBzY2hlZHVsZXMgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHVwZGF0ZXMsXHJcblx0XHQvLyB0aGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhpcyBjeWNsZS4gSG93ZXZlciwgaWYgaXQgc2NoZWR1bGVzIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZFxyXG5cdFx0Ly8gYWZ0ZXIgdXBkYXRlcywgaXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgbmV4dCBjeWNsZS5cclxuXHRcdGlmICh0aGlzLmNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNpemUgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlO1xyXG5cdFx0XHRjb25zdCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IHRoaXMuY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGU7XHJcblx0XHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBuZXcgU2V0PG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHRcdFx0dGhpcy5jYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSwgXCJiZWZvcmVcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlLnNpemUgPiAwKVxyXG5cdFx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBuZXcgRGV0YWlsZWRTdGF0cyggYE1pbWJsIHVwZGF0ZSBjeWNsZSAke3RoaXMuY3VycmVudFRpY2t9OiBgKTtcclxuXHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLnN0YXJ0KCk7XHJcbi8vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBpbnRlcm5hbCBzZXQgb2Ygbm9kZXMgYW5kIHJlLWNyZWF0ZSBpdCBzbyB0aGF0IGl0IGlzIHJlYWR5IGZvciBuZXdcclxuXHRcdFx0Ly8gdXBkYXRlIHJlcXVlc3RzLiBBcnJhbmdlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBhbmQgcGVyZm9ybSB1cGRhdGVzLlxyXG5cdFx0XHR0aGlzLnNjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlO1xyXG5cdFx0XHRsZXQgdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gdGhpcy52bnNTY2hlZHVsZWRGb3JVcGRhdGU7XHJcblx0XHRcdHRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHRcdFx0dGhpcy5wZXJmb3JtQ29tbWl0UGhhc2UoIHRoaXMucGVyZm9ybVJlbmRlclBoYXNlKCB0aGlzLmFycmFuZ2VOb2Rlc0J5RGVwdGgoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZSkpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdG9wKCB0cnVlKTtcclxuXHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzID0gbnVsbDtcclxuLy8vLy8vLy8vLy8vL1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBpbnZva2VkIGFmdGVyIHVwZGF0aW5nIGNvbXBvbmVudHNcclxuXHRcdGlmICh0aGlzLmNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2l6ZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5BZnRlclVwZGF0ZTtcclxuXHRcdFx0Y29uc3QgY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IHRoaXMuY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZTtcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlID0gbmV3IFNldDxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblx0XHRcdHRoaXMuY2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSwgXCJhZnRlclwiKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEFycmFuZ2VzIHRoZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgc28gdGhhdCB3ZSB1cGRhdGUgXCJ1cHBlclwiIG5vZGVzIGJlZm9yZVxyXG5cdC8vIHRoZSBsb3dlciBvbmVzLiBUaGlzIGNhbiBoZWxwIGF2b2lkIHR3byBjb25kaXRpb25zOlxyXG5cdC8vXHQtIHJlbmRlcmluZyBhIGNoaWxkIGNvbXBvbmVudCB0d2ljZTogZmlyc3QgYmVjYXVzZSBpdCBjYWxsZWQgdXBkYXRlTWUsIGFuZCBzZWNvbmRcclxuXHQvL1x0XHRiZWNhdXNlIGl0cyBwYXJlbnQgd2FzIGFsc28gdXBkYXRlZC5cclxuXHQvL1x0LSB1bm5lY2Vzc2FyeSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgYmVmb3JlIGl0IGlzIHJlbW92ZWQgYnkgdGhlIHBhcmVudFxyXG5cdC8vIFdlIGFsbG9jYXRlIGNvbnRpZ3VvdXMgYXJyYXkgd2hlcmUgaW5kaWNlcyBjb3JyZXNwb25kIHRvIGRlcHRoLiBFYWNoIGVsZW1lbnQgaW4gdGhpc1xyXG5cdC8vIGFycmF5IHdpbGwgZWl0aGVyIGJlIHVuZGVmaW5lZCBvciBjb250YWluIGFuIGFycmF5IG9mIG5vZGVzIGF0IHRoaXMgZGVwdGguXHJcblx0cHJpdmF0ZSBhcnJhbmdlTm9kZXNCeURlcHRoKCB2bnNTY2hlZHVsZWRGb3JVcGRhdGU6IFNldDxWTj4pOiBWTltdW11cclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyBjcmVhdGUgYSBzcGFyc2UgYXJyYXkgb2YgY2VydGFpbiByZWFzb25hYmxlIHNpemUuIElmIHdlIGhhdmUgZGVwdGhzIGdyZWF0ZXIgdGhhbiB0aGlzLFxyXG5cdFx0Ly8gdGhlIGFycmF5IHdpbGwgZ3JvdyBhdXRvbWF0aWNhbGx5IChhbHRob3VnaCBpdCBpcyBsZXNzIHBlcmZvcm1hbnQgaXQgaXMgc3RpbGwgYWNjZXB0YWJsZSkuXHJcblx0XHRsZXQgdm5zQnlEZXB0aDogVk5bXVtdID0gbmV3IEFycmF5PFZOW10+KDEwMCk7XHJcblx0XHR2bnNTY2hlZHVsZWRGb3JVcGRhdGUuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHRcdHtcclxuXHRcdFx0bGV0IGFyciA9IHZuc0J5RGVwdGhbdm4uZGVwdGhdO1xyXG5cdFx0XHRpZiAoIWFycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFyciA9IFtdO1xyXG5cdFx0XHRcdHZuc0J5RGVwdGhbdm4uZGVwdGhdID0gYXJyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhcnIucHVzaCh2bik7XHJcblx0XHR9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHJldHVybiB2bnNCeURlcHRoO1xyXG5cdH1cclxuXHJcblx0Ly8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcblx0Ly8gc3ViLW5vZGVzIHdoZXJlIG5lY2Vzc2FyeS4gUmV0dXJucyBhcnJheSBvZiBWTkRpc3Agc3RydWN0dXJlcyBmb3IgZWFjaCB1cGRhdGVkIG5vZGUuXHJcblx0cHJpdmF0ZSBwZXJmb3JtUmVuZGVyUGhhc2UoIHZuc0J5RGVwdGg6IFZOW11bXSk6IFZORGlzcFtdXHJcblx0e1xyXG5cdFx0bGV0IHVwZGF0ZWROb2RlRGlzcHM6IFZORGlzcFtdID0gW107XHJcblxyXG5cdFx0Ly8gaXRlcmF0aW9uIG92ZXIgdGhlIHNwYXJzZSBhcnJheSBza2lwcyB0aGUgaG9sZXMuXHJcblx0XHR2bnNCeURlcHRoLmZvckVhY2goICh2bnM6IFZOW10pID0+IHsgdm5zLmZvckVhY2goICh2bjogVk4pID0+XHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGNvbXBvbmVudCB3YXMgYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgY3ljbGUsIGRvbid0IHVwZGF0ZSBpdCBhZ2FpblxyXG5cdFx0XHRcdGlmICh2bi5sYXN0VXBkYXRlVGljayA9PT0gdGhpcy5jdXJyZW50VGljaylcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0dXBkYXRlZE5vZGVEaXNwcy5wdXNoKCB0aGlzLnVwZGF0ZVN0ZW1WaXJ0dWFsKCB2bikpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBmaW5kIHRoZSBuZWFyZXN0IGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuIElmIG5vYm9keSBlbHNlLCBpdCBpcyBpbXBsZW1lbnRlZFxyXG5cdFx0XHRcdC8vIGJ5IHRoZSBSb290Vk4gb2JqZWN0LlxyXG5cdFx0XHRcdGxldCBlcnJvclNlcnZpY2U6IG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2UgPSB2bi5maW5kU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIsIGZhbHNlKTtcclxuXHRcdFx0XHRlcnJvclNlcnZpY2UucmVwb3J0RXJyb3IoIGVyciwgdGhpcy5jdXJyZW50Vk4gPyB0aGlzLmN1cnJlbnRWTi5wYXRoIDogbnVsbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuY3VycmVudFZOID0gbnVsbDtcclxuXHRcdH0pfSk7XHJcblxyXG5cdFx0cmV0dXJuIHVwZGF0ZWROb2RlRGlzcHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBlcmZvcm1zIHRoZSBjb21taXQgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuXHQvLyBzdWItbm9kZXMgd2hlcmUgbmVjZXNzYXJ5LiBUaGUgQ29tbWl0IHBoYXNlIGNvbnNpc3RzIG9mIHVwZGF0aW5nIERPTSBhbmQgY2FsbGluZyBsaWZlLWN5Y2xlXHJcblx0Ly8gbWV0aG9kcyBkaWRNb3VudCwgZGlkVXBkYXRlIGFuZCB3aWxsVW5tb3VudC5cclxuXHRwcml2YXRlIHBlcmZvcm1Db21taXRQaGFzZSggdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dXBkYXRlZE5vZGVEaXNwcy5mb3JFYWNoKCAoZGlzcDogVk5EaXNwKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnByZVVwZGF0ZVBoeXNpY2FsKCBkaXNwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHVwZGF0ZWROb2RlRGlzcHMuZm9yRWFjaCggKGRpc3A6IFZORGlzcCkgPT5cclxuXHRcdHtcclxuXHRcdFx0dGhpcy51cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR1cGRhdGVkTm9kZURpc3BzLmZvckVhY2goIChkaXNwOiBWTkRpc3ApID0+XHJcblx0XHR7XHJcblx0XHRcdHRoaXMucG9zdFVwZGF0ZSggZGlzcCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIGJlZm9yZSBvciBhZnRlciB1cGRhdGUgY3ljbGUuXHJcblx0cHJpdmF0ZSBjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBmdW5jczogU2V0PCgpPT52b2lkPiwgYmVmb3JlT3JBZnRlcjogc3RyaW5nKVxyXG5cdHtcclxuXHRcdGZ1bmNzLmZvckVhY2goIChmdW5jKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZ1bmMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBmdW5jdGlvbiAke2JlZm9yZU9yQWZ0ZXJ9IHVwZGF0aW5nIGNvbXBvbmVudHNcXG5gLCBlcnIpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgY3JlYXRlcyBhbmQgcmVuZGVycyB0aGlzIG5vZGUgYW5kIGl0cyBzdWItbm9kZXMuIFRoaXMgbWV0aG9kIGlzIGludm9rZWRcclxuXHQvLyB3aGVuIGEgbm9kZSBpcyBmaXJzdCBtb3VudGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXNcclxuXHQvLyBtZXRob2QgKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2V0U2l0ZSBvciByZW5kZXIgbWV0aG9kcyksXHJcblx0Ly8gdGhlIGNvbXBvbmVudCBpcyBhc2tlZCB0byBoYW5kbGUgdGhlIGVycm9yLiBJZiB0aGUgY29tcG9uZW50IGhhbmRsZXMgdGhlIGVycm9yLCB0aGVcclxuXHQvLyBjb250ZW50IHJldHVybmVkIGZyb20gdGhlIGVycm9yIGhhbmRsaW5nIG1ldGhvZCBpcyByZW5kZXJlZDsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9uXHJcblx0Ly8gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXQgaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdFxyXG5cdC8vIGhhbmRsZXMgaXQgb3IgdXAgdG8gdGhlIHJvb3Qgbm9kZS5cclxuXHRwcml2YXRlIGNyZWF0ZVZpcnR1YWwoIHZuOiBWTiwgcGFyZW50OiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBzZXQgZXNzZW50aWFsIG5vZGUgcGFyYW1ldGVycy5cclxuXHRcdHZuLmluaXRpYWxpemUoIHBhcmVudCk7XHJcblxyXG5cdFx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0XHRsZXQgY3VycmVudFZOID0gdm47XHJcblx0XHR0aGlzLmN1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGlmIHdpbGxNb3VudCByZXR1cm5zIGZhbHNlLCB0aGUgbm9kZSBkb2Vzbid0IGh2ZSBhbnkgc3ViLW5vZGVzXHJcblx0XHRpZiAodm4ud2lsbE1vdW50KCkpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSBub2RlIGRvZXNuJ3QgaGFuZGxlIGVycm9ycyB3ZSBkb24ndCBuZWVkIHRvIHdhc3RlIHRpbWUgdG8gdXNlIHRyeS9jYXRjaFxyXG5cdFx0XHRpZiAoIXZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZygpKVxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bik7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRyeVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHRcdC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyXHJcblx0XHRcdFx0XHR2bi5oYW5kbGVFcnJvciggZXJyLCB0aGlzLmN1cnJlbnRWTi5wYXRoKTtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkIG5vZGUgYWZ0ZXIgcHJvY2Vzc2luZyBpdHMgc3Vibm9kZXNcclxuXHRcdHRoaXMuY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQZXJmb3JtcyBjcmVhdGlvbiBhbmQgaW5pdGlhbCByZW5kZXJpbmcgb24gdGhlIHN1Yi1ub2RlcyBvZiBvdXIgbm9kZS5cclxuXHRwcml2YXRlIGNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlcyA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggdm4ucmVuZGVyKCkpO1xyXG5cdFx0aWYgKHN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBzdm4gPSBzdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZVZpcnR1YWwoIHN2biwgdm4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZuLnN1Yk5vZGVzID0gc3ViTm9kZXM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgRE9NIG5vZGVzIGZvciB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5cdHByaXZhdGUgY3JlYXRlUGh5c2ljYWwoIHZuOiBWTiwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pXHJcblx0e1xyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIGFuY2hvciBub2RlXHJcblx0XHR2bi5hbmNob3JETiA9IGFuY2hvckROO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHRcdHZuLm1vdW50KCk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93biBET00gbm9kZSwgYWRkIGl0IHRvIHRoZSBET00gdHJlZSBhbmQgdXNlIGl0IGFzIGFuXHJcblx0XHQvLyBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMuXHJcblx0XHRsZXQgb3duRE46IEROID0gdm4uZ2V0T3duRE4oKTtcclxuXHJcblx0XHQvLyBpZiB3ZSBoYXZlIG91ciBvd24gRE9NIG5vZGUsIGFkZCBpdCB1bmRlciB0aGUgYW5jaG9yIG5vZGVcclxuXHRcdGlmIChvd25ETiAhPT0gbnVsbClcclxuXHRcdFx0dm4uYW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBvd25ETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBub2RlIGhhcyBzdWItbm9kZXMsIGFkZCBET00gbm9kZXMgZm9yIHRoZW1cclxuXHRcdGlmICh2bi5zdWJOb2RlcylcclxuXHRcdHtcclxuXHRcdFx0Ly8gZGV0ZXJtaW5lIHdoYXQgbm9kZXMgdG8gdXNlIGFzIGFuY2hvciBhbmQgXCJiZWZvcmVcIiBmb3IgdGhlIHN1Yi1ub2Rlc1xyXG5cdFx0XHRsZXQgbmV3QW5jaG9yRE46IEROID0gb3duRE4gPT09IG51bGwgPyBhbmNob3JETiA6IG93bkROO1xyXG5cdFx0XHRsZXQgbmV3QmVmb3JlRE46IEROID0gb3duRE4gPT09IG51bGwgPyBiZWZvcmVETiA6IG51bGw7XHJcblxyXG5cdFx0XHQvLyBtb3VudCBhbGwgc3ViLW5vZGVzXHJcblx0XHRcdGZvciggbGV0IHN2biA9IHZuLnN1Yk5vZGVzLmZpcnN0OyBzdm4gIT09IG51bGw7IHN2biA9IHN2bi5uZXh0KVxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlUGh5c2ljYWwoIHN2biwgbmV3QW5jaG9yRE4sIG5ld0JlZm9yZUROKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgY2FsbHMgZGlkTW91bnQgb24gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwcml2YXRlIHBvc3RDcmVhdGUoIHZuOiBWTilcclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHZuLmRpZE1vdW50KCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgTm9kZSAke3ZuLm5hbWV9IHRocmV3IGV4Y2VwdGlvbiAnJHtlcnIubWVzc2FnZX0nIGluIGRpZE1vdW50YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHZuLnN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBzdm4gPSB2bi5zdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdFx0XHR0aGlzLnBvc3RDcmVhdGUoIHN2bik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IGNhbGxzIHdpbGxVbm1vdW50IG9uIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSBwcmVEZXN0cm95KCB2bjogVk4pXHJcblx0e1xyXG5cdFx0aWYgKHZuLnN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBzdm4gPSB2bi5zdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdFx0XHR0aGlzLnByZURlc3Ryb3koIHN2bik7XHJcblx0XHR9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR2bi53aWxsVW5tb3VudCgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYE5vZGUgJHt2bi5uYW1lfSB0aHJldyBleGNlcHRpb24gJyR7ZXJyLm1lc3NhZ2V9JyBpbiB3aWxsVW5tb3VudGApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSByZW1vdmVzIERPTSBub2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSBkZXN0cm95UGh5c2ljYWwoIHZuOiBWTilcclxuXHR7XHJcblx0XHQvLyBnZXQgdGhlIERPTSBub2RlIGJlZm9yZSB3ZSBjYWxsIHVubW91bnQsIGJlY2F1c2UgdW5tb3VudCB3aWxsIGNsZWFyIGl0LlxyXG5cdFx0bGV0IG93bkROOiBETiA9IHZuLmdldE93bkROKCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblx0XHR2bi51bm1vdW50KCk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93biBET00gbm9kZSwgd2UgcmVtb3ZlIGl0IGZyb20gdGhlIERPTSB0cmVlLiBJbiB0aGlzIGNhc2UsXHJcblx0XHQvLyB3ZSBkb24ndCBuZWVkIHRvIHJlY3Vyc2UgaW50byBzdWItbm9kZXMsIGJlY2F1c2UgdGhleSBhcmUgcmVtb3ZlZCB3aXRoIHRoZSBwYXJlbnQuXHJcblx0XHRpZiAob3duRE4pXHJcblx0XHR7XHJcblx0XHRcdC8vIG91ciBET00gbm9kZXMgY2FuIG9ubHkgYmUgZWl0aGVyIEVsZW1lbnQgb3IgVGV4dCAtIGJvdGggZGVyaXZlIGZyb20gQ2hpbGROb2RlXHJcblx0XHRcdChvd25ETiBhcyBhbnkgYXMgQ2hpbGROb2RlKS5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHZuLnN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBsb29wIG92ZXIgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCBiZWNhdXNlIHRoaXMgd2F5IHRoZSBET00gZWxlbWVudCByZW1vdmFsIGlzXHJcblx0XHRcdC8vIGVhc2llci5cclxuXHRcdFx0Zm9yKCBsZXQgc3ZuID0gdm4uc3ViTm9kZXMubGFzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ucHJldilcclxuXHRcdFx0XHR0aGlzLmRlc3Ryb3lQaHlzaWNhbCggc3ZuKTtcclxuXHRcdH1cclxuXHJcblx0XHR2bi50ZXJtaW5hdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgcmVuZGVycyB0aGUgY2hpbGRyZW4gaWYgdGhpcyBub2RlLiBUaGlzIG1ldGhvZCBpcyBvbmx5IGludm9rZWQgaWYgYSBub2RlIGlzXHJcblx0Ly8gYmVpbmcgdXBkYXRlZCBhcyBhIHJlc3VsdCBvZiB1cGRhdGVNZSBpbnZvY2F0aW9uLlxyXG5cdHByaXZhdGUgdXBkYXRlU3RlbVZpcnR1YWwoIHZuOiBWTik6IFZORGlzcFxyXG5cdHtcclxuXHRcdGxldCBkaXNwID0gbmV3IFZORGlzcCggdm4sIFZORGlzcEFjdGlvbi5Vbmtub3duLCB2bik7XHJcblx0XHR0aGlzLnVwZGF0ZVZpcnR1YWwoIGRpc3ApO1xyXG5cdFx0cmV0dXJuIGRpc3A7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IHJlbmRlcnMgdGhpcyBub2RlIGFuZCB1cGRhdGVzIGl0cyBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5LiBUaGlzIG1ldGhvZCBpc1xyXG5cdC8vIGludm9rZWQgd2hlbiBhIG5vZGUgaXMgYmVpbmcgdXBkYXRlZCBlaXRoZXIgYXMgYSByZXN1bHQgb2YgdXBkYXRlTWUgaW52b2NhdGlvbiBvciBiZWNhdXNlXHJcblx0Ly8gdGhlIHBhcmVudCBub2RlIHdhcyB1cGRhdGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXMgbWV0aG9kXHJcblx0Ly8gKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2hvdWxkVXBkYXRlIG9yIHJlbmRlciBtZXRob2RzKSwgdGhlIGNvbXBvbmVudCBpcyBhc2tlZFxyXG5cdC8vIHRvIGhhbmRsZSB0aGUgZXJyb3IuIElmIHRoZSBjb21wb25lbnQgaGFuZGxlcyB0aGUgZXJyb3IsIHRoZSBjb250ZW50IHJldHVybmVkIGZyb20gdGhlXHJcblx0Ly8gZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb24gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGVcclxuXHQvLyBleGNlcHRpb24gaXMgcHJvcGFnYXRlZCB1cCB1bnRpbCBpdCBpcyBoYW5kbGVkIGJ5IGEgbm9kZSB0aGF0IGhhbmRsZXMgaXQgb3IgdXAgdG8gdGhlIHJvb3RcclxuXHQvLyBub2RlLlxyXG5cdHByaXZhdGUgdXBkYXRlVmlydHVhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdFx0bGV0IGN1cnJlbnRWTiA9IGRpc3Aub2xkVk47XHJcblx0XHR0aGlzLmN1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHJcblx0XHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGhhbmRsZSBlcnJvcnMgd2UgZG9uJ3QgbmVlZCB0byB3YXN0ZSB0aW1lIHRvIHVzZSB0cnkvY2F0Y2hcclxuXHRcdGlmICghZGlzcC5vbGRWTi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcoKSlcclxuXHRcdFx0dGhpcy51cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3ApO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3ViTm9kZXNWaXJ0dWFsKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5vbGRWTi5oYW5kbGVFcnJvciggZXJyLCB0aGlzLmN1cnJlbnRWTi5wYXRoKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZSBub2RlIHdhcyB1cGRhdGVkIGluIHRoaXMgY3ljbGUgLSB0aGlzIHdpbGwgcHJldmVudCBpdCBmcm9tIFxyXG5cdFx0Ly8gcmVuZGVyaW5nIGFnYWluIGluIHRoaXMgY3ljbGUuXHJcblx0XHRkaXNwLm9sZFZOLmxhc3RVcGRhdGVUaWNrID0gdGhpcy5jdXJyZW50VGljaztcclxuXHJcblx0XHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWJub2Rlc1xyXG5cdFx0dGhpcy5jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBvZiB0aGUgdXBkYXRlIG9uIHRoZSBzdWItbm9kZXMgb2YgdGhlIG5vZGUsIHdoaWNoIGlzIHBhc3NlZCBhc1xyXG5cdC8vIHRoZSBvbGRWTiBtZW1iZXIgb2YgdGhlIFZORGlzcCBzdHJ1Y3R1cmUuXHJcblx0cHJpdmF0ZSB1cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW5kZXIgdGhlIG5ldyBjb250ZW50IGFuZCBidWlsZCBhcnJheSBvZiBkaXNwb3NpdGlvbnMgb2JqZWN0cyBmb3IgdGhlIHN1Yi1ub2Rlcy5cclxuXHRcdGRpc3AuYnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCk7XHJcblx0XHRpZiAoIWRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gcGVyZm9ybSByZW5kZXJpbmcgZm9yIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZCwgcmVwbGFjZWQgb3IgdXBkYXRlZFxyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHRzdWJOb2RlRGlzcC51cGRhdGVEaXNwID0gc3ViTm9kZURpc3Aub2xkVk4ucHJlcGFyZVVwZGF0ZSggc3ViTm9kZURpc3AubmV3Vk4pO1xyXG5cdFx0XHRcdGlmIChzdWJOb2RlRGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVmlydHVhbCggc3ViTm9kZURpc3ApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZVZpcnR1YWwoIHN1Yk5vZGVEaXNwLm5ld1ZOLCBkaXNwLm9sZFZOKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgY2FsbHMgd2lsbFVubW91bnQgb24gc3ViLW5vZGVzIG1hcmtlZCBmb3IgZGVsZXRpb24uXHJcblx0cHJpdmF0ZSBwcmVVcGRhdGVQaHlzaWNhbCggZGlzcDogVk5EaXNwKVxyXG5cdHtcclxuXHRcdC8vIGZpcnN0LCBzdWItbm9kZXMgbWFya2VkIGZvciBkZWxldGlvblxyXG5cdFx0aWYgKGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ZuIG9mIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHRcdFx0XHR0aGlzLnByZURlc3Ryb3koIHN2bik7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2Vjb25kLCBzdWItbm9kZXMgbWFya2VkIGZvciB1cGRhdGUgb3IgaW5zZXJ0XHJcblx0XHRpZiAoZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHN1Yk5vZGVEaXNwIG9mIGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdFx0XHRcdHRoaXMucHJlVXBkYXRlUGh5c2ljYWwoIHN1Yk5vZGVEaXNwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgcGVyZm9ybXMgRE9NIHVwZGF0ZXMgY29ycmVzcG9uZGluZyB0byB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5cdHByaXZhdGUgdXBkYXRlUGh5c2ljYWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgdGhlIG5vZGUgd2hvc2UgY2hpbGRyZW4gYXJlIGJlaW5nIHVwZGF0ZWQuIFRoaXMgaXMgYWx3YXlzIHRoZSBvbGRWTiBtZW1iZXIgb2ZcclxuXHRcdC8vIHRoZSBkaXNwIHN0cnVjdHVyZS5cclxuXHRcdGxldCB2biA9IGRpc3Aub2xkVk47XHJcblxyXG5cdFx0Ly8gaXQgbWlnaHQgaGFwcGVuIHRoYXQgdGhlIG5vZGUgYmVpbmcgdXBkYXRlZCB3YXMgYWxyZWFkeSBkZWxldGVkIGJ5IGl0cyBwYXJlbnQuIENoZWNrXHJcblx0XHQvLyBmb3IgdGhpcyBzaXR1YXRpb24gYW5kIGV4aXQgaWYgdGhpcyBpcyB0aGUgY2FzZVxyXG5cdFx0aWYgKCF2bi5hbmNob3JETilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGRldGVybWluZSB0aGUgYW5jaG9yIG5vZGUgdG8gdXNlIHdoZW4gaW5zZXJ0aW5nIG5ldyBvciBtb3ZpbmcgZXhpc3Rpbmcgc3ViLW5vZGVzLiBJZlxyXG5cdFx0Ly8gb3VyIG5vZGUgaGFzIGl0cyBvd24gRE4sIGl0IHdpbGwgYmUgdGhlIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlczsgb3RoZXJ3aXNlLCBvdXIgbm9kZSdzXHJcblx0XHQvLyBhbmNob3Igd2lsbCBiZSB0aGUgYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzIHRvby5cclxuXHRcdGxldCBvd25ETiA9IHZuLmdldE93bkROKCk7XHJcblx0XHRsZXQgYW5jaG9yRE4gPSBvd25ETiAhPT0gbnVsbCA/IG93bkROIDogdm4uYW5jaG9yRE47XHJcblxyXG5cdFx0Ly8gaWYgdGhpcyB2aXJ0dWFsIG5vZGUgZG9lc24ndCBkZWZpbmUgaXRzIG93biBET00gbm9kZSAodHJ1ZSBmb3IgY29tcG9uZW50cyksIHdlIHdpbGxcclxuXHRcdC8vIG5lZWQgdG8gZmluZCBhIERPTSBub2RlIGJlZm9yZSB3aGljaCB0byBzdGFydCBpbnNlcnRpbmcgbmV3IG5vZGVzLiBOdWxsIG1lYW5zXHJcblx0XHQvLyBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgYW5jaG9yIG5vZGUncyBjaGlsZHJlbi5cclxuXHRcdGxldCBiZWZvcmVETiA9IG93bkROICE9PSBudWxsID8gbnVsbCA6IHZuLmdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCBhbmNob3JETik7XHJcblxyXG5cdFx0Ly8gY2xlYXIgb3VyIGN1cnJlbnQgbGlzdCBvZiBzdWItbm9kZXMgLSB3ZSB3aWxsIHBvcHVsYXRlIGl0IHdoaWxlIHVwZGF0aW5nIHRoZW1cclxuXHRcdHZuLnN1Yk5vZGVzID0gbmV3IFZOQ2hhaW4oKTtcclxuXHJcblx0XHQvLyByZW1vdmUgZnJvbSBET00gdGhlIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlbW92ZWQgKHRoYXQgaXMsIHRob3NlIGZvciB3aGljaCB0aGVyZVxyXG5cdFx0Ly8gaXMgbm8gY291bnRlcnBhcnQgbmV3IG5vZGUgdGhhdCB3aWxsIGVpdGhlciB1cGRhdGUgb3IgcmVwbGFjZSBpdCkgYW5kIHRoZW4gdGhvc2VcclxuXHRcdC8vIGRlc2lnbmF0ZWQgdG8gYmUgcmVwbGFjZWQuIFdlIG5lZWQgdG8gcmVtb3ZlIG9sZCBub2RlcyBmaXJzdCBiZWZvcmUgd2Ugc3RhcnQgaW5zZXJ0aW5nXHJcblx0XHQvLyBuZXcgLSBvbmUgcmVhc29uIGlzIHRvIHByb3Blcmx5IG1haW50YWluIHJlZmVyZW5jZXMuXHJcblx0XHRpZiAoZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBzdm4gb2YgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHRcdHRoaXMuZGVzdHJveVBoeXNpY2FsKCBzdm4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBlcmZvcm0gdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBlaXRoZXIgZ3JvdXBzIG9yIGluZGl2aWR1YWwgbm9kZXMuXHJcblx0XHRpZiAoZGlzcC5zdWJOb2RlR3JvdXBzKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVBoeXNpY2FsQnlHcm91cHMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgZGlzcC5zdWJOb2RlR3JvdXBzLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0XHR0aGlzLmFycmFuZ2VHcm91cHMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgZGlzcC5zdWJOb2RlR3JvdXBzLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudXBkYXRlUGh5c2ljYWxCeU5vZGVzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBlcmZvcm1zIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZ3JvdXBzLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2YgdXBkYXRlIGdyb3Vwc1xyXG5cdC8vIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiB3ZSBkZWNpZGUgdGhlIHZhbHVlIG9mIHRoZSBcImJlZm9yZUROXCIuXHJcblx0cHJpdmF0ZSB1cGRhdGVQaHlzaWNhbEJ5R3JvdXBzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgZ3JvdXBzOiBWTkRpc3BHcm91cFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZ3JvdXAgPSBncm91cHNbaV07XHJcblxyXG5cdFx0XHQvLyBmaXJzdCB1cGRhdGUgZXZlcnkgc3ViLW5vZGUgaW4gdGhlIGdyb3VwIGFuZCBpdHMgc3ViLXN1Yi1ub2Rlc1xyXG5cdFx0XHRmb3IoIGxldCBqID0gZ3JvdXAubGFzdDsgaiA+PSBncm91cC5maXJzdDsgai0tKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGRpc3AgPSBkaXNwc1tqXTtcclxuXHRcdFx0XHRsZXQgbmV3Vk4gPSBkaXNwLm5ld1ZOO1xyXG5cdFx0XHRcdGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdFx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlUGh5c2ljYWwoIGRpc3ApO1xyXG5cclxuXHRcdFx0XHRcdGxldCBmaXJzdEROID0gb2xkVk4uZ2V0Rmlyc3RETigpO1xyXG5cdFx0XHRcdFx0aWYgKGZpcnN0RE4gIT09IG51bGwpXHJcblx0XHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHJcblx0XHRcdFx0XHQvLyB0aGUgb2xkIG5vZGUgcmVtYWlucyBhcyBhIHN1Yi1ub2RlXHJcblx0XHRcdFx0XHRwYXJlbnRWTi5zdWJOb2Rlcy5pbnNlcnRWTiggb2xkVk4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gc2luY2Ugd2UgYXJlIGdvaW5nIGZyb20gdGhlIGZpcnN0IG5vZGUgaW4gdGhlIGdyb3VwIHRvIHRoZSBsYXN0IHdlIGFsd2F5cyB1c2VcclxuXHRcdFx0XHRcdC8vIHRoZSBzYW1lIGJlZm9yZUROIGZvciBpbnNlcnRpb25cclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlUGh5c2ljYWwoIG5ld1ZOLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdFx0Ly8gbmV4dCBjb21wb25lbnRzIHNob3VsZCBiZSBpbnNlcnRlZC9tb3ZlZFxyXG5cdFx0XHRcdFx0bGV0IGZpcnN0RE4gPSBuZXdWTi5nZXRGaXJzdEROKCk7XHJcblx0XHRcdFx0XHRpZiAoZmlyc3RETiAhPT0gbnVsbClcclxuXHRcdFx0XHRcdFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cclxuXHRcdFx0XHRcdC8vIHRoZSBuZXcgbm9kZSBiZWNvbWVzIGEgc3ViLW5vZGVcclxuXHRcdFx0XHRcdHBhcmVudFZOLnN1Yk5vZGVzLmluc2VydFZOKCBuZXdWTik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBub3cgdGhhdCBhbGwgbm9kZXMgaW4gdGhlIGdyb3VwIGhhdmUgYmVlbiB1cGRhdGVkIG9yIGluc2VydGVkLCB3ZSBjYW4gZGV0ZXJtaW5lXHJcblx0XHRcdC8vIGZpcnN0IGFuZCBsYXN0IEROcyBmb3IgdGhlIGdyb3VwXHJcblx0XHRcdGdyb3VwLmRldGVybWluZUROcygpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIGdyb3VwIGhhcyBhdCBsZWFzdCBvbmUgRE4sIGl0cyBmaXJzdCBETiBiZWNvbWVzIHRoZSBub2RlIGJlZm9yZSB3aGljaCB0aGUgbmV4dFxyXG5cdFx0XHQvLyBncm91cCBvZiBuZXcgbm9kZXMgKGlmIGFueSkgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdFx0XHRpZiAoZ3JvdXAuZmlyc3RETilcclxuXHRcdFx0XHRiZWZvcmVETiA9IGdyb3VwLmZpcnN0RE47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFycmFuZ2UgdGhlIGdyb3VwcyBpbiBvcmRlciBhcyBpbiB0aGUgbmV3IHN1Yi1ub2RlIGxpc3QsIG1vdmluZyB0aGVtIGlmIG5lY2Vzc2FyeS5cclxuXHRwcml2YXRlIGFycmFuZ2VHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIFdlIGdvIGZyb20gdGhlIGxhc3QgZ3JvdXAgdG8gdGhlIHNlY29uZCBncm91cCBpbiB0aGUgbGlzdCBiZWNhdXNlIGFzIHNvb24gYXMgd2UgbW92ZWQgYWxsXHJcblx0XHQvLyBncm91cHMgZXhjZXB0IHRoZSBmaXJzdCBvbmUgaW50byB0aGVpciByaWdodCBwbGFjZXMsIHRoZSBmaXJzdCBncm91cCB3aWxsIGJlIGF1dG9tYXRpY2FsbHlcclxuXHRcdC8vIGluIHRoZSByaWdodCBwbGFjZS4gV2UgYWx3YXlzIGhhdmUgdHdvIGdyb3VwcyAoaSBhbmQgaS0xKSwgd2hpY2ggYWxsb3dzIHVzIHRvIHVuZGVyc3RhbmRcclxuXHRcdC8vIHdoZXRoZXIgd2UgbmVlZCB0byBzd2FwIHRoZW0uIElmIHdlIGRvIHdlIG1vdmUgdGhlIHNob3J0ZXIgZ3JvdXAuXHJcblx0XHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pXHJcblx0XHR7XHJcblx0XHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHRcdFx0bGV0IHByZXZHcm91cCA9IGdyb3Vwc1tpLTFdO1xyXG5cclxuXHRcdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdyb3VwIHNob3VsZCBtb3ZlLiBXZSB0YWtlIHRoZSBsYXN0IG5vZGUgZnJvbSB0aGUgZ3JvdXBcclxuXHRcdFx0Ly8gYW5kIGNvbXBhcmUgaXRzIEROJ3MgbmV4dCBzaWJsaW5nIHRvIHRoZSBjdXJyZW50IFwiYmVmb3JlRE5cIi5cclxuXHRcdFx0aWYgKGdyb3VwLmxhc3RETiAhPT0gbnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChncm91cC5sYXN0RE4ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZSBjdXJyZW50IGdyb3VwIG5vdyByZXNpZGVzIGJlZm9yZSB0aGUgcHJldmlvdXMgZ3JvdXAsIHRoZW4gdGhhdCBtZWFuc1xyXG5cdFx0XHRcdFx0Ly8gdGhhdCB3ZSBhcmUgc3dhcHBpbmcgdHdvIGdyb3Vwcy4gSW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbW92ZSB0aGUgc2hvcnRlciBvbmUuXHJcblx0XHRcdFx0XHRpZiAoZ3JvdXAubGFzdEROLm5leHRTaWJsaW5nID09PSBwcmV2R3JvdXAuZmlyc3RETiAmJiBncm91cC5jb3VudCA+IHByZXZHcm91cC5jb3VudClcclxuXHRcdFx0XHRcdFx0dGhpcy5tb3ZlR3JvdXAoIHBhcmVudFZOLCBkaXNwcywgcHJldkdyb3VwLCBhbmNob3JETiwgZ3JvdXAuZmlyc3RETik7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHRoaXMubW92ZUdyb3VwKCBwYXJlbnRWTiwgZGlzcHMsIGdyb3VwLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gdGhlIGdyb3VwJ3MgZmlyc3QgRE4gYmVjb21lcyB0aGUgbmV3IGJlZm9yZUROLiBOb3RlIHRoYXQgZmlyc3RETiBjYW5ub3QgYmUgbnVsbFxyXG5cdFx0XHRcdC8vIGJlY2F1c2UgbGFzdEROIGlzIG5vdCBudWxsXHJcblx0XHRcdFx0YmVmb3JlRE4gPSBncm91cC5maXJzdEROO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1vdmVzIGFsbCB0aGUgbm9kZXMgaW4gdGhlIGdpdmVuIGdyb3VwIGJlZm9yZSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXHJcblx0cHJpdmF0ZSBtb3ZlR3JvdXAoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cDogVk5EaXNwR3JvdXAsIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IGogPSBncm91cC5maXJzdDsgaiA8PSBncm91cC5sYXN0OyBqKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdWJOb2RlVk4gPSBncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwc1tqXS5vbGRWTiA6IGRpc3BzW2pdLm5ld1ZOO1xyXG5cdFx0XHRsZXQgc3ViTm9kZUROcyA9IHN1Yk5vZGVWTi5nZXRJbW1lZGlhdGVETnMoKTtcclxuXHRcdFx0Zm9yKCBsZXQgc3ViTm9kZUROIG9mIHN1Yk5vZGVETnMpXHJcblx0XHRcdFx0YW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBzdWJOb2RlRE4sIGJlZm9yZUROKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHBhcmVudFZOLmdldFN0YXRzQ2F0ZWdvcnkoKSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG4vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQZXJmb3JtcyB1cGRhdGVzIGFuZCBpbnNlcnRzIGJ5IGluZGl2aWR1YWwgbm9kZXMuXHJcblx0cHJpdmF0ZSB1cGRhdGVQaHlzaWNhbEJ5Tm9kZXMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBwZXJmb3JtIERPTSBvcGVyYXRpb25zIGFjY29yZGluZyB0byBzdWItbm9kZSBkaXNwb3NpdGlvbi4gV2UgbmVlZCB0byBkZWNpZGUgZm9yIGVhY2hcclxuXHRcdC8vIG5vZGUgd2hhdCBub2RlIHRvIHVzZSB0byBpbnNlcnQgb3IgbW92ZSBpdCBiZWZvcmUuIFdlIGdvIGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZlxyXG5cdFx0Ly8gbmV3IG5vZGVzIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiB3ZSBkZWNpZGUgdGhlIHZhbHVlIG9mIHRoZSBcImJlZm9yZUROXCIuXHJcblx0XHRmb3IoIGxldCBpID0gZGlzcHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0XHR7XHJcblx0XHRcdGxldCBkaXNwID0gZGlzcHNbaV07XHJcblx0XHRcdGxldCBhY3Rpb24gPSBkaXNwLmFjdGlvbjtcclxuXHRcdFx0bGV0IG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdFx0aWYgKGFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRWTiA9IGRpc3Aub2xkVk47XHJcblx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0XHRcdFx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRcdFx0XHRvbGRWTi5jb21taXRVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblxyXG5cdFx0XHRcdC8vIGRldGVybWluZSB3aGV0aGVyIGFsbCB0aGUgbm9kZXMgdW5kZXIgdGhpcyBWTiBzaG91bGQgYmUgbW92ZWQuXHJcblx0XHRcdFx0bGV0IHN1Yk5vZGVETnMgPSBvbGRWTi5nZXRJbW1lZGlhdGVETnMoKTtcclxuXHRcdFx0XHRpZiAoc3ViTm9kZUROcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGNoZWNrIHdoZXRoZXIgdGhlIGxhc3Qgb2YgdGhlIERPTSBub2RlcyBhbHJlYWR5IHJlc2lkZXMgcmlnaHQgYmVmb3JlIHRoZSBuZWVkZWQgbm9kZVxyXG5cdFx0XHRcdFx0aWYgKHN1Yk5vZGVETnNbc3ViTm9kZUROcy5sZW5ndGggLSAxXS5uZXh0U2libGluZyAhPT0gYmVmb3JlRE4pXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGZvciggbGV0IHN1Yk5vZGVETiBvZiBzdWJOb2RlRE5zKVxyXG5cdFx0XHRcdFx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBwYXJlbnRWTi5nZXRTdGF0c0NhdGVnb3J5KCksIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHRoZSBmaXJzdCBvZiBET00gbm9kZXMgYmVjb21lIHRoZSBuZXh0IGJlZm9yZUROXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IHN1Yk5vZGVETnNbMF07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB0aGUgb2xkIG5vZGUgcmVtYWlucyBhcyBhIHN1Yi1ub2RlXHJcblx0XHRcdFx0cGFyZW50Vk4uc3ViTm9kZXMuaW5zZXJ0Vk4oIG9sZFZOKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBzaW5jZSB3ZSBhbHJlYWR5IGRlc3Ryb3llZCBvbGQgbm9kZXMgZGVzaWduYXRlZCB0byBiZSByZXBsYWNlZCwgdGhlIGNvZGUgaXNcclxuXHRcdFx0XHQvLyBpZGVudGljYWwgZm9yIFJlcGxhY2UgYW5kIEluc2VydCBhY3Rpb25zXHJcblx0XHRcdFx0dGhpcy5jcmVhdGVQaHlzaWNhbCggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0XHRsZXQgZmlyc3RETjogRE4gPSBuZXdWTi5nZXRGaXJzdEROKCk7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT09IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblxyXG5cdFx0XHRcdC8vIHRoZSBuZXcgbm9kZSBiZWNvbWVzIGEgc3ViLW5vZGVcclxuXHRcdFx0XHRwYXJlbnRWTi5zdWJOb2Rlcy5pbnNlcnRWTiggbmV3Vk4pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IGNhbGxzIGFwcHJvcHJpYXRlIGxpZmUtY3ljbGUgbWV0aG9kcyBvbiB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5cdHByaXZhdGUgcG9zdFVwZGF0ZSggZGlzcDogVk5EaXNwKVxyXG5cdHtcclxuXHRcdGlmIChkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHdlIHVwZGF0ZWQgc3ViLW5vZGVzLCBub3RpZnkgdGhlbSB0b29cclxuXHRcdFx0XHRcdGlmIChzdWJOb2RlRGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdFx0dGhpcy5wb3N0VXBkYXRlKCBzdWJOb2RlRGlzcCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHN1Yk5vZGVEaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydClcclxuXHRcdFx0XHRcdHRoaXMucG9zdENyZWF0ZSggc3ViTm9kZURpc3AubmV3Vk4pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNwLm9sZFZOLmRpZFVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYE5vZGUgJHtkaXNwLm9sZFZOLm5hbWV9IHRocmV3IGV4Y2VwdGlvbiAnJHtlcnIubWVzc2FnZX0nIGluIGRpZFVwZGF0ZWApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb250ZW50IHJlbmRlcmVkIHVuZGVyIHRoaXMgcm9vdCBub2RlLlxyXG5cdHByaXZhdGUgY29udGVudDogYW55O1xyXG5cclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGFuIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGZyb20gZGVzY2VuZGFuZCBub2Rlcy5cclxuXHRwcml2YXRlIGVycm9yVUk6IFJvb3RFcnJvclVJID0gbnVsbDtcclxuXHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBhbiBleGNlcHRpb24gd2FzIGNhdWdodCBmcm9tIGRlc2NlbmRhbmQgbm9kZXMuXHJcblx0cHJpdmF0ZSB3YWl0aW5nVUk6IFJvb3RXYWl0aW5nVUkgPSBudWxsO1xyXG5cclxuXHQvLyBTZXQgb2YgcHJvbWlzZXMgdGhyb3duIGJ5IGRlc2NlbmRhbnQgbm9kZXMgYW5kIG5vdCB5ZXQgZnVsZmlsbGVkLlxyXG5cdHByaXZhdGUgdGhyb3duUHJvbWlzZXMgPSBuZXcgU2V0PFByb21pc2U8YW55Pj4oKTtcclxuXHJcblx0Ly8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIHNldHMgb2YgdmlydHVhbCBub2RlcyB0aGF0IHN1YnNjcmliZWQgdG8gdGhpcyBzZXJ2aWNlLlxyXG5cdHByaXZhdGUgc2VydmljZUluZm9zID0gbmV3IE1hcDxzdHJpbmcsU2VydmljZUluZm8+KCk7XHJcblxyXG5cdC8vIE1hcCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9uIHRoZSBuZXh0IFVJIGN5Y2xlLiBXZSB1c2UgTWFwIGluIG9yZGVyIHRvIG5vdCBpbmNsdWRlXHJcblx0Ly8gdGhlIHNhbWUgbm9kZSBtb3JlIHRoYW4gb25jZSAtIHdoaWNoIGNhbiBoYXBwZW4gaWYgdGhlIG5vZGUncyByZXF1ZXN0VXBkYXRlIG1ldGhvZCBpcyBjYWxsZWRcclxuXHQvLyBtb3JlIHRoYW4gb25jZSBkdXJpbmcgYSBzaW5nbGUgcnVuIChlLmcuIGR1cmluZyBldmVudCBwcm9jZXNzaW5nKS4gVGhlIHZhbHVlIG1hcHBlZCB0byB0aGVcclxuXHQvLyBub2RlIGRldGVybWluZXMgdGhlIG9wZXJhdGlvbiB0byBiZSBwZXJmb3JtZWQ6XHJcblx0Ly9cdC0gdW5kZWZpbmVkIC0gdGhlIG5vZGUgd2lsbCBiZSB1cGRhdGVkXHJcblx0Ly9cdC0gbnVsbCAtIHRoZSBub2RlIHdpbGwgYmUgZGVsZXRlZCBmcm9tIGl0cyBwYXJlbnRcclxuXHQvL1x0LSBhbnl0aGluZyBlbHNlIC0gdGhlIG5vZGUgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoaXMgbmV3IGNvbnRlbnRcclxuXHRwcml2YXRlIHZuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IG5ldyBTZXQ8Vk4+KCk7XHJcblxyXG5cdC8vIFNldCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBiZWZvcmVcclxuXHQvLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLlxyXG5cdHByaXZhdGUgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBuZXcgU2V0PG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHJcblx0Ly8gU2V0IG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGFmdGVyXHJcblx0Ly8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC5cclxuXHRwcml2YXRlIGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgU2V0PG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHJcblx0Ly8gSGFuZGxlIG9mIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCAoaW4gY2FzZSBpdCBzaG91bGQgYmUgY2FuY2VsZWQpLlxyXG5cdHByaXZhdGUgc2NoZWR1bGVkRnJhbWVIYW5kbGU6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIFN0YXRlIG9mIHRoZSBzY2hlZHVsZXIuXHJcblx0cHJpdmF0ZSBzY2hlZHVsZXJTdGF0ZTogU2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5JZGxlO1xyXG5cclxuXHQvLyBOdW1iZXIgdGhhdCBzZXJ2ZXMgYXMgYSB1bmlxdWUgSUQgb2YgYW4gdXBkYXRlIGN5Y2xlLiBFYWNoIHVwZGF0ZSBjeWNsZSB0aGUgcm9vdCBub2RlXHJcblx0Ly8gaW5jcmVtZW50cyB0aGlzIG51bWJlci4gRWFjaCBub2RlIGJlaW5nIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSBpcyBhc3NpZ25lZCB0aGlzIG51bWJlci5cclxuXHQvLyBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiB3aGVuIGJvdGggYSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlXHJcblx0Ly8gdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRwcml2YXRlIGN1cnJlbnRUaWNrOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOb2RlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuIER1cmluZyBjcmVhdGlvbiBhbmQgdXBkYXRpbmcgcHJvY2VzcywgdGhpcyB2YWx1ZSBpcyBzZXRcclxuXHQvLyBldmVyeSB0aW1lIHdlIHJlY3Vyc2UgaW50byBzdWItbm9kZXMgYW5kIHJlc3RvcmVkIHdoZW4gd2UgcmV0dXJuIGJhY2sgdG8gdGhlIG5vZGUuIElmXHJcblx0Ly8gZHVyaW5nIGNyZWF0aW9uIG9yIHVwZGF0aW5nIHByb2Nlc3MgYW4gZXhjZXB0aW9uIGlzIHRocm93biBhbmQgaXMgY2F1Z2h0IGJ5IHNvbWUgdXBwZXJcclxuXHQvLyBsZXZlbCBub2RlLCB0aGlzIHZhbHVlIHdpbGwgc3RpbGwgcG9pbnQgYXQgdGhlIG5vZGUgdGhhdCBjYXVzZWQgdGhlIGV4Y2VwdGlvbi5cclxuXHRwcml2YXRlIGN1cnJlbnRWTjogVk4gPSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIGluZGljYXRpbmcgaW4gd2hhdCBwaGFzZSBvZiB0aGUgdXBkYXRlIGN5Y2xlIHdlIGN1cnJlbnRseSByZXNpZGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5lbnVtIFNjaGVkdWxlclN0YXRlXHJcbntcclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIG5vdCB3aXRoaW4gdGhlIHVwZGF0ZSBjeWNsZVxyXG5cdElkbGUgPSAwLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIGV4ZWN1dGluZyBmdW5jdGlvbnMgYmVmb3JlIHVwZGF0aW5nIG5vZGVzXHJcblx0QmVmb3JlVXBkYXRlLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIHVwZGF0aW5nIG5vZGVzXHJcblx0VXBkYXRlLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIGV4ZWN1dGluZyBmdW5jdGlvbnMgYWZ0ZXIgdXBkYXRpbmcgbm9kZXNcclxuXHRBZnRlclVwZGF0ZSxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24ga2VwdCBieSBSb290IHZpcnR1YWwgbm9kZSBhYm91dCBzZXJ2aWNlIHB1YmxpY2F0aW9ucyBhbmQgc3Vic2NyaXB0aW9ucy4gVGhlIHNhbWVcclxuLy8gc2VydmljZSBjYW4gYmUgcHVibGlzaGVkIGFuZCBzdWJzY3JpYmVkIHRvIGJ5IG11bHRpcGxlIG5vZGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgU2VydmljZUluZm9cclxue1xyXG5cdHB1Ymxpc2hpbmdWTnM6IFNldDxWTj4gPSBuZXcgU2V0PFZOPigpO1xyXG5cdHN1YnNjcmliZWRWTnM6IFNldDxWTj4gPSBuZXcgU2V0PFZOPigpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHYXRoZXJpbmcgdXBkYXRlIHN0YXRpc3RpY3NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBDYXRlZ29yaWVzIG9mIGNoYW5nZWQgZW50aXRpZXMgdG8gZ2F0aGVyIHN0YXRpc3RpY3MgYWJvdXQuXHJcbmV4cG9ydCBlbnVtIFN0YXRzQ2F0ZWdvcnlcclxue1xyXG5cdENvbXAsXHJcblx0RWxtLFxyXG5cdFRleHQsXHJcblx0QXR0cixcclxuXHRFdmVudCxcclxufVxyXG5cclxuXHJcblxyXG4vLyBBY3Rpb25zIG9uIGFuIGVudGl0eSB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC4gTm90IGFsbCBhY3Rpb25zIGFyZSByZWxldmFudCBmb3IgYWxsXHJcbi8vIGNhdGVnb3JpZXM6XHJcbi8vXHQtIFVwZGF0ZWQgZG9lc24ndCBleGlzdCBmb3IgY29tcG9uZW50cyBhbmQgZm9yIGVsZW1lbnRzXHJcbi8vXHQtIE1vdmVkIGRvZXNuJ3QgZXhpc3QgZm9yIGF0dHJpYnV0ZXNcclxuLy9cdC0gUmVuZGVyZWQgb25seSBleGlzdHMgZm9yIGNvbXBvbmVudHNcclxuZXhwb3J0IGVudW0gU3RhdHNBY3Rpb25cclxue1xyXG5cdEFkZGVkPSAxLFxyXG5cdERlbGV0ZWQgPSAyLFxyXG5cdFVwZGF0ZWQgPSAzLFxyXG5cdE1vdmVkID0gNCxcclxuXHRSZW5kZXJlZCA9IDUsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvcmFnZSBmb3IgYSBudW1iZXIgb2YgZWFjaCBhY3Rpb24gdW5kZXIgYSBjYXRlZ29yeS5cclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U3RhdHNcclxue1xyXG5cdGFkZGVkOiBudW1iZXIgPSAwO1xyXG5cdGRlbGV0ZWQ6IG51bWJlciA9IDA7XHJcblx0dXBkYXRlZDogbnVtYmVyID0gMDtcclxuXHRtb3ZlZDogbnVtYmVyID0gMDtcclxuXHRyZW5kZXJlZDogbnVtYmVyID0gMDtcclxuXHJcblx0cHVibGljIGhhc1NvbWVEYXRhKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5hZGRlZCB8fCB0aGlzLmRlbGV0ZWQgfHwgdGhpcy51cGRhdGVkIHx8IHRoaXMubW92ZWQgfHwgdGhpcy5yZW5kZXJlZDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERldGFpbGVkU3RhdHNcclxue1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdGFydFRpbWU6IG51bWJlcjtcclxuXHRkdXJhdGlvbjogbnVtYmVyO1xyXG5cdGNvbXA6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGVsbTogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0dGV4dDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0YXR0cjogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0ZXZlbnQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXJ0KClcclxuXHR7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gMC4wO1xyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0b3AoIHByaW50U3VtbWFyeTogYm9vbGVhbiA9IHRydWUpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWU7XHJcblxyXG5cdFx0aWYgKHByaW50U3VtbWFyeSlcclxuXHRcdFx0Y29uc29sZS5sb2coIHRoaXMudG9TdHJpbmcoKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIGluY3JlbWVudHMgdGhlbnVtYmVyIG9mIHRpbWVzIHRoZSBnaXZlbiBhY3Rpb24gd2FzIHBlcmZvcm1lZCBvbiBhbiBlbnRpdHkgb2YgYSBnaXZlblxyXG5cdC8vIGNhdGVnb3J5LiBJZiB0aGUgZW50aXR5IGlzIGEgRE9NIGVudGl0eSAoYXMgb3Bwb3NlZCB0byBhIGNvbXBvbmVudCksIHRoZW4gdGhlIERPTVxyXG5cdC8vIHRvdGFsIG51bWJlciBpcyBhbHNvIGluY3JlbWVudGVkLlxyXG5cdHB1YmxpYyBsb2coIGNhdGVnb3J5OiBTdGF0c0NhdGVnb3J5LCBhY3Rpb246IFN0YXRzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjYXRlZ29yeVN0YXRzOiBDYXRlZ29yeVN0YXRzO1xyXG5cdFx0c3dpdGNoKCBjYXRlZ29yeSlcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkNvbXA6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmNvbXA7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuRWxtOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5lbG07IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuVGV4dDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMudGV4dDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5BdHRyOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5hdHRyOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkV2ZW50OiBjYXRlZ29yeVN0YXRzID0gdGhpcy5ldmVudDsgYnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2goIGFjdGlvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5BZGRlZDogY2F0ZWdvcnlTdGF0cy5hZGRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5EZWxldGVkOiBjYXRlZ29yeVN0YXRzLmRlbGV0ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uVXBkYXRlZDogY2F0ZWdvcnlTdGF0cy51cGRhdGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLk1vdmVkOiBjYXRlZ29yeVN0YXRzLm1vdmVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlJlbmRlcmVkOiBjYXRlZ29yeVN0YXRzLnJlbmRlcmVkKys7IGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgJHt0aGlzLm5hbWV9ICR7dGhpcy5kdXJhdGlvbi50b0ZpeGVkKDIpfW1zIGAgK1xyXG5cdFx0XHRcdHRoaXMuZ2V0Q29tcFN0cmluZygpICsgdGhpcy5nZXRFbG1TdHJpbmcoKSArIHRoaXMuZ2V0VGV4dFN0cmluZygpICtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJTdHJpbmcoKSArIHRoaXMuZ2V0RXZlbnRTdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb21wb25lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0Q29tcFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY29tcC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5jb21wLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmNvbXAuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTI3MEVcIiwgdGhpcy5jb21wLnJlbmRlcmVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmNvbXAubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgY29tcCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVsZW1lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RWxtU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5lbG0uaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuZWxtLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmVsbS5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmVsbS5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBlbG0oJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0ZXh0IG5vZGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0VGV4dFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudGV4dC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy50ZXh0LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLnRleHQuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy50ZXh0LnVwZGF0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMudGV4dC5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGB0ZXh0KCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEF0dHJTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmF0dHIuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuYXR0ci5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5hdHRyLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuYXR0ci51cGRhdGVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGF0dHIoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhdHRyaWJ1dGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RXZlbnRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50Lmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmV2ZW50LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmV2ZW50LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuZXZlbnQudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBldmVudCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiBzaWduIGFuZCB2YWx1ZSB0byB0aGUgZ2l2ZW4gc3RyaW5nIGJ1dCBvbmx5IGlmIHRoZSB2YWx1ZSBpcyBub24temVyby5cclxuXHRwcml2YXRlIGdldFZhbFN0cmluZyggczogc3RyaW5nLCBzaWduOiBzdHJpbmcsIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHZhbCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAocy5sZW5ndGggPiAwID8gXCIgXCIgOiBcIlwiKSArIHNpZ24gKyB2YWw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc3RhdHM6IERldGFpbGVkU3RhdHM7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1JbmZvIHR5cGUgZGVmaW5lcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIFNWRyBlbGVtZW50LiBUaGlzXHJcbi8vIGluZm9ybWF0aW9uIGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4vL1x0LSBzdHJpbmcgLSBhY3R1YWwgbmFtZSB0byB1c2UgZm9yIHRoZSBlbGVtZW50LiBTb21lIFNWRyBlbGVtZW50cyBoYXZlIG5hbWVzIHRoYXQgY2Fubm90IGJlIHVzZWRcclxuLy9cdFx0aW4gSlggZGlyZWN0bHkgKGUuZy4gYmVjYXVzZSBvZiBoeXBoZW4gbGlrZSBpbiBcImNvbG9yLXByb2ZpbGVcIikuIEluIHRoaXMgY2FzZSB0aGUgc3RyaW5nXHJcbi8vXHRcdHZhbHVlIHdpbGwgYmUgdGhlIGFjdHVhbCBlbGVtZW50IG5hbWUgdG8gcHV0IGludG8gSFRNTCBkb2N1bWVudCwgd2hpbGUgSlNYIHdpbGwgYmUgdXNpbmdcclxuLy9cdFx0YSBjYW1lbC1mb3JtYXR0ZWQgbmFtZSAoZS5nLiBcImNvbG9yUHJvZmlsZVwiKS5cclxuLy9cdC0gYm9vbGVhbiAtIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoZSBlbGVtZW50IGlzIFwiZHVhbC1wdXJwb3NlXCI7IHRoYXQgaXMsIGVsZW1lbnQgd2l0aCB0aGlzXHJcbi8vXHRcdG5hbWUgY2FuIGJlIHVzZWQgYXMgZWl0aGVyIEhUTUwgb3IgU1ZHIGVsZW1lbnQuXHJcbi8vXHQtIHR1cGxlIG9mIHR3byBlbGVtZW50cyAtIHN0cmluZyBhbmQgYm9vbGVhbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBhYm92ZSBpdGVtcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFN2Z0VsbUluZm8gPSBib29sZWFuIHwgc3RyaW5nIHwgW3N0cmluZywgYm9vbGVhbl07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtcyBjbGFzcyBjb250YWlucyBwcm9wZXJ0aWVzIHdpdGggbmFtZXMgdXNlZCB0byBkZWZpbmUgU1ZHIGVsZW1lbnRzIGluIEpTWC4gV2hlblxyXG4vLyB3ZSBuZWVkIHRvIGNyZWF0ZSBhbiBlbGVtZW50LCB3ZSBsb29rdXAgdGhlIHByb3ZpZGVkIHRhZyBuYW1lIGFuZCBpZiB3ZSBmaW5kIGl0IGluIHRoaXMgY2xhc3NcclxuLy8gd2UgdXNlIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyB3aXRoIHRoZSBwcm9wZXIgU1ZHIG5hbWVzcGFjZSBzdHJpbmcuIFZhbHVlcyBvZiB0aGVzZSBwcm9wZXJ0aWVzXHJcbi8vIGFyZSBTdmdFbG1JbmZvIHZhbHVlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBTdmdFbG1zXHJcbntcclxuXHQvLyBOYW1lc3BhY2UgdXNlZCB0byBjcmVhdGUgU1ZHIGVsZW1lbnRzLlxyXG5cdHB1YmxpYyBzdGF0aWMgbmFtZXNwYWNlOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBTVkcgdGFnXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlciggdGFnTmFtZTogc3RyaW5nLCBpbmZvOiBTdmdFbG1JbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV0gPSBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGNhbiBiZSB1c2VkIGFzIGFuIFNWRyBlbGVtZW50IG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBpc1N2Z0VsbSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0YWdOYW1lIGluIFN2Z0VsbXMuaW5mb3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgZ2l2ZW4gdGFnIG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdmdFbG1JbmZvKCB0YWdOYW1lOiBzdHJpbmcpOiBTdmdFbG1JbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gaW5mb3JtYXRpb24gb2JqZWN0IGhhcyB0aGUgXCJkdWFsLXB1cnBvc2VcIiBmbGFnIHNldC5cclxuXHRwdWJsaWMgc3RhdGljIGlzRHVhbFB1cnBvc2UoIGluZm86IFN2Z0VsbUluZm8pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMSA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVsxXSA6IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBmYWxzZSA6IGluZm8gYXMgYm9vbGVhbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBpcyBhIFwiZHVhbC1wdXJwb3NlXCIgZWxlbWVudDsgdGhhdCBpcyBjYW4gYmUgZWl0aGVyXHJcblx0Ly8gSFRNTCBhbmQgU1ZHIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBpc1RhZ0R1YWxQdXJwb3NlKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIGluZm8pIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgdGhlIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lKCBpbmZvOiBTdmdFbG1JbmZvLCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAwID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzBdIDogdGFnTmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gaW5mbyBhcyBzdHJpbmcgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIHRoZSBnaXZlbiB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZUZvclRhZyggdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmdldEVsbU5hbWUoIGluZm8sIHRhZ05hbWUpIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBTVkcgZWxlbWVudCBuYW1lcyB0byBTdmdFbG1JbmZvLlxyXG5cdHByaXZhdGUgc3RhdGljIGluZm9zOiB7W2VsbU5hbWU6c3RyaW5nXTogU3ZnRWxtSW5mb30gPVxyXG5cdHtcclxuXHRcdHN2ZzogZmFsc2UsXHJcblxyXG5cdFx0YTogdHJ1ZSxcclxuXHRcdGFuaW1hdGU6IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZU1vdGlvbjogZmFsc2UsXHJcblx0XHRhbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcclxuXHJcblx0XHRjaXJjbGU6IGZhbHNlLFxyXG5cdFx0Y2xpcFBhdGg6IGZhbHNlLFxyXG5cdFx0Y29sb3JQcm9maWxlOiBcImNvbG9yLXByb2ZpbGVcIixcclxuXHJcblx0XHRkZWZzOiBmYWxzZSxcclxuXHRcdGRlc2M6IGZhbHNlLFxyXG5cdFx0ZGlzY2FyZDogZmFsc2UsXHJcblxyXG5cdFx0ZWxsaXBzZTogZmFsc2UsXHJcblxyXG5cdFx0ZmVCbGVuZDogZmFsc2UsXHJcblx0XHRmZUNvbG9yTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb3NpdGU6IGZhbHNlLFxyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogZmFsc2UsXHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogZmFsc2UsXHJcblx0XHRmZURpc3RhbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZURyb3BTaGFkb3c6IGZhbHNlLFxyXG5cdFx0ZmVGbG9vZDogZmFsc2UsXHJcblx0XHRmZUZ1bmNBOiBmYWxzZSxcclxuXHRcdGZlRnVuY0I6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jRzogZmFsc2UsXHJcblx0XHRmZUZ1bmNSOiBmYWxzZSxcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBmYWxzZSxcclxuXHRcdGZlSW1hZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlTm9kZTogZmFsc2UsXHJcblx0XHRmZU1vcnBob2xvZ3k6IGZhbHNlLFxyXG5cdFx0ZmVPZmZzZXQ6IGZhbHNlLFxyXG5cdFx0ZmVQb2ludExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZVNwb3RMaWdodDogZmFsc2UsXHJcblx0XHRmZVRpbGU6IGZhbHNlLFxyXG5cdFx0ZmVUdXJidWxlbmNlOiBmYWxzZSxcclxuXHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRmb3JlaWduT2JqZWN0OiBmYWxzZSxcclxuXHJcblx0XHRnOiBmYWxzZSxcclxuXHJcblx0XHRoYXRjaDogZmFsc2UsXHJcblx0XHRoYXRjaHBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdGltYWdlOiBmYWxzZSxcclxuXHJcblx0XHRsaW5lOiBmYWxzZSxcclxuXHRcdGxpbmVhckdyYWRpZW50OiBmYWxzZSxcclxuXHJcblx0XHRtYXJrZXI6IGZhbHNlLFxyXG5cdFx0bWFzazogZmFsc2UsXHJcblx0XHRtZXRhZGF0YTogZmFsc2UsXHJcblx0XHRtcGF0aDogZmFsc2UsXHJcblxyXG5cdFx0cGF0aDogZmFsc2UsXHJcblx0XHRwYXR0ZXJuOiBmYWxzZSxcclxuXHRcdHBvbHlnb246IGZhbHNlLFxyXG5cdFx0cG9seWxpbmU6IGZhbHNlLFxyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBmYWxzZSxcclxuXHRcdHJlY3Q6IGZhbHNlLFxyXG5cclxuXHRcdHNjcmlwdDogdHJ1ZSxcclxuXHRcdHNldDogZmFsc2UsXHJcblx0XHRzb2xpZGNvbG9yOiBmYWxzZSxcclxuXHRcdHN0b3A6IGZhbHNlLFxyXG5cdFx0c3R5bGU6IHRydWUsXHJcblx0XHRzd2l0Y2g6IGZhbHNlLFxyXG5cdFx0c3ltYm9sOiBmYWxzZSxcclxuXHJcblx0XHR0ZXh0OiBmYWxzZSxcclxuXHRcdHRleHRQYXRoOiBmYWxzZSxcclxuXHRcdHRpdGxlOiB0cnVlLFxyXG5cdFx0dGV4dFNwYW46IGZhbHNlLFxyXG5cclxuXHRcdHVzZTogZmFsc2UsXHJcblxyXG5cdFx0dmlldzogZmFsc2UsXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHRleHQgbm9kZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0Vk4gZXh0ZW5kcyBWTiBpbXBsZW1lbnRzIG1pbS5JVGV4dFZOXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdGV4dDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBnZXQgVGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50ZXh0OyB9XHJcblx0cHVibGljIGdldCBUZXh0Tm9kZSgpOiBUZXh0IHsgcmV0dXJuIHRoaXMuZG47IH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRwdWJsaWMgZ2V0U3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuVGV4dDsgfVxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIHR5cGUuXHJcblx0cHVibGljIGdldCB0eXBlKCk6IG1pbS5WTlR5cGUgeyByZXR1cm4gbWltLlZOVHlwZS5UZXh0OyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIiN0ZXh0XCI7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBJZiB0aGUgbm9kZSBuZXZlciBoYXMgYW55IGNoaWxkcmVuIChsaWtlIHRleHQgbm9kZXMpLCBpdCBzaG91bGQgcmV0dXJuIGZhbHNlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdGV4dCBub2RlcyBkb24ndCBoYXZlIGNoaWxkcmVuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSB2aXJ0dWFsIG5vZGUncyBjb250ZW50IGludG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZG4gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdGhpcy50ZXh0KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBjb250ZW50IGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5kbiA9IHVuZGVmaW5lZDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIG9uZSB0ZXh0IG5vZGUgY2FuIGFsd2F5cyB1cGRhdGUgYW5vdGhlciB0ZXh0IG5vZGVcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyB0ZXh0IG5vZGVzIGRvbid0IGhhdmUgc3ViLW5vZGVzXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQ6IHRoaXMudGV4dCAhPT0gKG5ld1ZOIGFzIFRleHRWTikudGV4dCwgc2hvdWxkUmVuZGVyOiBmYWxzZSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmRuLm5vZGVWYWx1ZSA9IHRoaXMudGV4dCA9IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQ7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGdldE93bkROKCk6IEROXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZG47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRleHQgZm9yIGEgc2ltcGxlIHRleHQgbm9kZS5cclxuXHR0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8vIFRleHQgRE9NIG5vZGVcclxuXHRkbjogVGV4dDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtJRXZlbnRTbG90LCBFdmVudFNsb3R9IGZyb21cIi4vRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBDbGFzc2VzIGFic3RyYWN0IGNsYXNzIHByb3ZpZGVzIHVzZWZ1bCBzdGF0aWMgZnVuY3Rpb25zIGZvciB3b3JraW5nIHdpdGggY2xhc3MgcHJvcGVydGllcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbGFzc2VzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIGNsYXNzIHByb3BlcnRpZXMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcblx0Ly8gcmV0dXJucyBhIHN0cmluZyBvciB1bmRlZmluZWQgLSBpZiBhbGwgY2xhc3NOYW1lcyB3ZXJlIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgc3RhdGljIE1lcmdlQ2xhc3NlcyggLi4uY2xhc3NOYW1lczogKHN0cmluZyB8IHN0cmluZ1tdKVtdKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHJlc0NsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuXHRcdGZvciggbGV0IGNsYXNzTmFtZSBvZiBjbGFzc05hbWVzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIWNsYXNzTmFtZSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdC8vIHBhcnNlIHRoZSBjbGFzcyBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmdcclxuXHRcdFx0bGV0IGNsYXNzTmFtZUFzU3RyaW5nOiBzdHJpbmcgPSB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiXHJcblx0XHRcdFx0XHQ/IGNsYXNzTmFtZSBhcyBzdHJpbmdcclxuXHRcdFx0XHRcdDogQ2xhc3Nlcy5BcnJheVRvU3RyaW5nKCBjbGFzc05hbWUgYXMgc3RyaW5nW10pO1xyXG5cclxuXHRcdFx0aWYgKHJlc0NsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc0NsYXNzTmFtZSA9IFwiXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXNDbGFzc05hbWUgKz0gXCIgXCI7XHJcblxyXG5cdFx0XHRyZXNDbGFzc05hbWUgKz0gY2xhc3NOYW1lQXNTdHJpbmc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc0NsYXNzTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBjbGFzcyBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLlxyXG5cdHB1YmxpYyBzdGF0aWMgQXJyYXlUb1N0cmluZyggY2xhc3NOYW1lczogc3RyaW5nW10pOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gY2xhc3NOYW1lcy5qb2luKCBcIiBcIik7XHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN0eWxlcyBhYnN0cmFjdCBjbGFzcyBwcm92aWRlcyB1c2VmdWwgc3RhdGljIGZ1bmN0aW9ucyBmb3Igd29ya2luZyB3aXRoIHN0eWxlIHByb3BlcnRpZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcblx0Ly8gYWx3YXlzIHJldHVybnMgYW4gb2JqZWN0IC0gZXZlbiBpZiBlbXB0eVxyXG5cdHB1YmxpYyBzdGF0aWMgTWVyZ2VTdHlsZXMoIC4uLnN0eWxlczogbWltLlN0eWxlUHJvcFR5cGVbXSk6IG1pbS5TdHlsZVByb3BUeXBlXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGFuIGVtcHR5IG9iamVjdCBmb3IgYWNjdW11bGF0aW5nIHN0eWxlIHByb3BlcnRpZXNcclxuXHRcdGxldCByZXNTdHlsZTogbWltLlN0eWxlUHJvcFR5cGUgPSB7fTtcclxuXHRcdFN0eWxlcy5NZXJnZVN0eWxlc1RvKCByZXNTdHlsZSwgLi4uc3R5bGVzKTtcclxuXHRcdHJldHVybiByZXNTdHlsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZmlyc3Qgb25lLlxyXG5cdHB1YmxpYyBzdGF0aWMgTWVyZ2VTdHlsZXNUbyggcmVzU3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlLCAuLi5zdHlsZXM6IChtaW0uU3R5bGVQcm9wVHlwZSB8IHN0cmluZylbXSApOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3R5bGUgb2Ygc3R5bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXN0eWxlKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0Ly8gcGFyc2UgdGhlIHN0eWxlIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZ1xyXG5cdFx0XHRsZXQgc3R5bGVPYmo6IG1pbS5TdHlsZVByb3BUeXBlID0gdHlwZW9mIHN0eWxlID09PSBcIm9iamVjdFwiXHJcblx0XHRcdFx0XHQ/IHN0eWxlIGFzIG1pbS5TdHlsZVByb3BUeXBlXHJcblx0XHRcdFx0XHQ6IFN0eWxlcy5QYXJzZVN0eWxlU3RyaW5nKCBzdHlsZSBhcyBzdHJpbmcpO1xyXG5cclxuXHRcdFx0Ly8gY29weSBhbGwgcHJvcGVydGllcyBkZWZpbmVkIGluIHRlaCBjdXJyZW50IHN0eWxlIG9iamVjdCB0byBvdXIgcmVzdWx0YW50IG9iamVjdFx0XHRcdFxyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZU9iailcclxuXHRcdFx0XHRyZXNTdHlsZVtwcm9wTmFtZV0gPSBzdHlsZU9ialtwcm9wTmFtZV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy5cclxuXHRwdWJsaWMgc3RhdGljIFBhcnNlU3R5bGVTdHJpbmcoIHM6IHN0cmluZyk6IG1pbS5TdHlsZVByb3BUeXBlXHJcblx0e1xyXG5cdFx0aWYgKCFzKVxyXG5cdFx0XHRyZXR1cm4ge307XHJcblxyXG5cdFx0bGV0IHJldFN0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHt9O1xyXG5cclxuXHRcdGxldCBlbG1zOiBzdHJpbmdbXSA9IHMuc3BsaXQoXCI7XCIpO1xyXG5cdFx0Zm9yKCBsZXQgZWxtIG9mIGVsbXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwYWlyOiBzdHJpbmdbXSA9IGVsbS5zcGxpdCggXCI6XCIpO1xyXG5cdFx0XHRpZiAoIXBhaXIgfHwgcGFpci5sZW5ndGggPT09IDAgfHwgcGFpci5sZW5ndGggPiAyKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0cmV0U3R5bGVbU3R5bGVzLkRhc2hUb0NhbWVsKCBwYWlyWzBdLnRyaW0oKSldID0gcGFpclsxXS50cmltKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJldFN0eWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyBuYW1lcyB3aXRoIGRhc2hlcyBpbnRvIG5hbWVzIGluIGNhbWVsQ2FzZSwgd2hlcmUgZXZlcnkgY2hhcmFjdGVyIGFmdGVyIGEgZGFzaCBpc1xyXG5cdC8vIGNhcGl0YWxpemVkIGFuZCBkYXNoZXMgYXJlIHJlbW92ZWQuXHJcblx0cHVibGljIHN0YXRpYyBEYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCFkYXNoKVxyXG5cdFx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0XHRsZXQgY2FtZWw6IHN0cmluZztcclxuXHRcdGxldCBpbmRleDogbnVtYmVyID0gLTE7XHJcblx0XHRsZXQgbmV4dEluZGV4VG9Db3B5RnJvbTogbnVtYmVyID0gMDtcclxuXHRcdHdoaWxlKCAoaW5kZXggPSBkYXNoLmluZGV4T2YoIFwiLVwiLCBpbmRleCArIDEpKSA+PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoY2FtZWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRjYW1lbCA9IFwiXCI7XHJcblxyXG5cdFx0XHRjYW1lbCArPSBkYXNoLnN1YnN0ciggbmV4dEluZGV4VG9Db3B5RnJvbSwgaW5kZXggLSBuZXh0SW5kZXhUb0NvcHlGcm9tKTtcclxuXHRcdFx0aWYgKGluZGV4ICE9IGRhc2gubGVuZ3RoIC0gMSlcclxuXHRcdFx0XHRjYW1lbCArPSBkYXNoW2luZGV4ICsgMV0udG9VcHBlckNhc2UoKTtcclxuXHJcblx0XHRcdG5leHRJbmRleFRvQ29weUZyb20gPSBpbmRleCArIDI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNhbWVsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBkYXNoO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAobmV4dEluZGV4VG9Db3B5RnJvbSA8IGRhc2gubGVuZ3RoKVxyXG5cdFx0XHRcdGNhbWVsICs9IGRhc2guc3Vic3RyKCBuZXh0SW5kZXhUb0NvcHlGcm9tKTtcclxuXHJcblx0XHRcdHJldHVybiBjYW1lbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTbGljZSB0eXBlIGRlZmluZXMgYW4gb2JqZWN0IHN0cnVjdHVyZSBkZXNjcmliaW5nXHJcbi8vIHBhcmFtZXRlcnMgZm9yIHJlbmRlcmluZyBhbiBlbGVtZW50LiBUaGV5IGluY2x1ZGU6IENsYXNzLCBTdHlsZSwgUHJvcGVydGllcywgQ29udGVudC4gVGhpc1xyXG4vLyBzdHJ1Y3R1cmUgaXMgaW50ZW5kZWQgdG8gYmUgcGFzc2VkIGVpdGhlciBpbiB0aGUgY29uc3RydWN0b3Igb3IgdmlhIHRoZSBwcm90ZWN0ZWQgbWV0aG9kcyBvZlxyXG4vLyBkZXJpdmVkIGNsYXNzZXMsIHNvIHRoYXQgdGhleSBjYW4gY29udHJvbCBwYXJhbWV0ZXJzIG9mIGVsZW1lbnRzIHJlbmRlcmVkIGJ5IHRoZSB1cHBlciBjbGFzc2VzLlxyXG4vLyBUaGUgbWFpbiBwdXJwb3NlIG9mIHRoaXMgc3RydWN0dXJlIGlzIHRvIGNvbWJpbmUgcGFyYW1ldGVycyBkZWZpbmluZyBhbiBlbGVtZW50IGludG8gYSBzaW5nbGVcclxuLy8gb2JqZWN0IHRvIG1pbmltaXplIHRoZSBudW1iZXIgb2YgcHJvcGVydGllcyBjYWxsZXJzIG9mIGNsYXNzZXMgc2hvdWxkIGRlYWwgd2l0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFNsaWNlID1cclxue1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxuXHRzdHlsZT86IG1pbS5TdHlsZVByb3BUeXBlO1xyXG5cdHByb3BzPzogT2JqZWN0XHJcblx0Y29udGVudD86IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTbGljZXMgYWJzdHJhY3QgY2xhc3MgcHJvdmlkZXMgdXNlZnVsIHN0YXRpYyBmdW5jdGlvbnMgZm9yIHdvcmtpbmcgd2l0aCBTbGljZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2xpY2VzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuXHRwdWJsaWMgc3RhdGljIE1lcmdlU2xpY2VzKCAuLi5zbGljZXM6IFNsaWNlW10pOiBTbGljZVxyXG5cdHtcclxuXHRcdGxldCByZXNTbGljZTogU2xpY2UgPSB7fTtcclxuXHRcdFNsaWNlcy5NZXJnZVNsaWNlc1RvKCByZXNTbGljZSwgLi4uc2xpY2VzKTtcclxuXHRcdHJldHVybiByZXNTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuXHQvLyBpbnRvIHRoZSBnaXZlbiByZXN1bHRhbnQgc2xpY2UuXHJcblx0cHVibGljIHN0YXRpYyBNZXJnZVNsaWNlc1RvKCByZXNTbGljZTogU2xpY2UsIC4uLnNsaWNlczogU2xpY2VbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocmVzU2xpY2UgPT09IHVuZGVmaW5lZCB8fCByZXNTbGljZSA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGZvciggbGV0IHNsaWNlIG9mIHNsaWNlcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKCFzbGljZSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGlmIChzbGljZS5zdHlsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChyZXNTbGljZS5zdHlsZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmVzU2xpY2Uuc3R5bGUgPSB7fTtcclxuXHJcblx0XHRcdFx0U3R5bGVzLk1lcmdlU3R5bGVzVG8oIHJlc1NsaWNlLnN0eWxlLCBzbGljZS5zdHlsZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzbGljZS5jbGFzc05hbWUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAocmVzU2xpY2UuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBcIlwiO1xyXG5cclxuXHRcdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBDbGFzc2VzLk1lcmdlQ2xhc3NlcyggcmVzU2xpY2UuY2xhc3NOYW1lIGFzIHN0cmluZywgc2xpY2UuY2xhc3NOYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNsaWNlLnByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHJlc1NsaWNlLnByb3BzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXNTbGljZS5wcm9wcyA9IHt9O1xyXG5cclxuXHRcdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzbGljZS5wcm9wcylcclxuXHRcdFx0XHRcdHJlc1NsaWNlW3Byb3BOYW1lXSA9IHNsaWNlW3Byb3BOYW1lXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNsaWNlLmNvbnRlbnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAocmVzU2xpY2UuY29udGVudCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudCA9IHNsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSggcmVzU2xpY2UuY29udGVudCkpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxldCBvbGRDb250ZW50OiBhbnkgPSByZXNTbGljZS5jb250ZW50O1xyXG5cdFx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50ID0gW107XHJcblx0XHRcdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQucHVzaCggb2xkQ29udGVudCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudC5wdXNoKCBzbGljZS5jb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8gVXNlIHR5cGUgRE4gdG8gcmVmZXIgdG8gRE9NJ3MgTm9kZSBjbGFzcy4gVGhlIERPTSBub2RlcyB0aGF0IHdlIGFyZSBkZWFsaW5nIHdpdGggYXJlXHJcbi8vIGVpdGhlciBvZiB0eXBlIEVsZW1lbnQgb3IgVGV4dC5cclxuZXhwb3J0IHR5cGUgRE4gPSBOb2RlO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuIFZpcnR1YWwgbm9kZXMgYXJlIGtlcHQgaW4gYVxyXG4vLyBkb3VibGx5LWxpbmtlZCBsaXN0IGFuZCBlYWNoIG5vZGUgcG9pbnRzIHRvIGEgcGFyZW50IG5vZGUgYXMgd2VsbCBhcyBmaXJzdCBhbmQgbGFzdCBzdWItbm9kZXMuXHJcbi8vXHJcbi8vIE1vdW50aW5nIHNlcXVlbmNlOlxyXG4vL1x0LSBjb25zdHJ1Y3RvclxyXG4vL1x0LSB3aWxsTW91bnRcclxuLy9cdC0gcmVuZGVyXHJcbi8vXHQtIG1vdW50XHJcbi8vXHQtIGRpZE1vdW50XHJcbi8vXHJcbi8vIFVubW91bnRpbmcgc2VxdWVuY2U6XHJcbi8vXHQtIHdpbGxVbm1vdW50XHJcbi8vXHQtIHVubW91bnRcclxuLy9cdC0gLy9kaWRVbm1vdW50XHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgdGhlIG5vZGUgaXRzZWxmOlxyXG4vL1x0LSByZW5kZXJcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgcGFyZW50OlxyXG4vL1x0LSB1cGRhdGVGcm9tXHJcbi8vXHQtIHJlbmRlciAob25seSBpZiB1cGRhdGVGcm9tIGluZGljYXRlZCB0aGF0IGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkKVxyXG4vL1x0LSBjb21taXRVcGRhdGUgKG9ubHkgaWYgdXBkYXRlRnJvbSBpbmRpY2F0ZWQgdGhhdCBjb21taXQgaXMgbmVjZXNzYXJ5KVxyXG4vL1x0LSBtb3ZlIChvbmx5IGlmIG5lY2Vzc2FyeSlcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVk4gaW1wbGVtZW50cyBtaW0uSVZOb2RlXHJcbntcclxuXHQvLyBJVk5vZGUgaW1wbGVtZW50YXRpb25cclxuXHRwdWJsaWMgZ2V0IFR5cGUoKTogbWltLlZOVHlwZSB7IHJldHVybiB0aGlzLnR5cGU7IH1cclxuXHRwdWJsaWMgZ2V0IFBhcmVudCgpOiBtaW0uSVZOb2RlIHsgcmV0dXJuIHRoaXMucGFyZW50OyB9XHJcblx0cHVibGljIGdldCBOZXh0KCk6IG1pbS5JVk5vZGUgeyByZXR1cm4gdGhpcy5uZXh0OyB9XHJcblx0cHVibGljIGdldCBQcmV2KCk6IG1pbS5JVk5vZGUgeyByZXR1cm4gdGhpcy5wcmV2OyB9XHJcblx0cHVibGljIGdldCBTdWJOb2RlcygpOiBtaW0uSVZOQ2hhaW4geyByZXR1cm4gdGhpcy5zdWJOb2RlczsgfVxyXG5cdHB1YmxpYyBnZXQgTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5uYW1lOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIHR5cGUuXHJcblx0cHVibGljIGFic3RyYWN0IGdldCB0eXBlKCk6IG1pbS5WTlR5cGU7XHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXQgbmFtZSgpOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJvb3Qgbm9kZS5cclxuXHRwdWJsaWMgZ2V0IHJvb3QoKTogSVJvb3RWTlxyXG5cdHtcclxuXHRcdC8vIHdoZW4gdGhpcyBwcm9wZXJ0eSBpcyByZWFkIGZvciB0aGUgZmlyc3QgdGltZSwgaXQgaXMgcmV0cmlldmVkIGZyb20gdGhlIHBhcmVudCBhbmRcclxuXHRcdC8vIHRoZW4gd2UgY2hhbmdlIHRoZSBwcm9wZXJ0eSBmcm9tIHRoZSBnZXR0dGVyIHRvIGEgcmVndWxhci5cclxuXHRcdGRlbGV0ZSB0aGlzLnJvb3Q7XHJcblx0XHRyZXR1cm4gdGhpcy5yb290ID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5yb290IDogdGhpcyBhcyBhbnkgYXMgSVJvb3RWTjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgcm9vdCggdmFsOiBJUm9vdFZOKSB7fVxyXG5cclxuXHQvLyBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS5cclxuXHRwdWJsaWMgZ2V0IGRlcHRoKCk6IG51bWJlclxyXG5cdHtcclxuXHRcdC8vIHdoZW4gdGhpcyBwcm9wZXJ0eSBpcyByZWFkIGZvciB0aGUgZmlyc3QgdGltZSwgaXQgaXMgcmV0cmlldmVkIGZyb20gdGhlIHBhcmVudCBhbmRcclxuXHRcdC8vIHRoZW4gd2UgY2hhbmdlIHRoZSBwcm9wZXJ0eSBmcm9tIHRoZSBnZXR0dGVyIHRvIGEgcmVndWxhci5cclxuXHRcdGRlbGV0ZSB0aGlzLmRlcHRoO1xyXG5cdFx0cmV0dXJuIHRoaXMuZGVwdGggPSB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmRlcHRoICsgMSA6IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGRlcHRoKCB2YWw6IG51bWJlcikge31cclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdGlhbGl6ZSggcGFyZW50OiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlYW5zIHVwIHRoZSBub2RlIG9iamVjdCBiZWZvcmUgaXQgaXMgcmVsZWFzZWQuXHJcblx0cHVibGljIHRlcm1pbmF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcmVtb3ZlIGluZm9ybWF0aW9uIGFib3V0IGFueSBwdWJsaXNoZWQgYW5kIHN1YnNjcmliZWQgc2VydmljZXNcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZm9yRWFjaCggKHNlcnZpY2UsIGlkKSA9PiB0aGlzLnJvb3Qubm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZCwgdGhpcykpO1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmNsZWFyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmZvckVhY2goIChpbmZvLCBpZCkgPT4geyB0aGlzLnJvb3Qubm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpOyB9KTtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmFuY2hvckROID0gbnVsbDtcclxuXHRcdHRoaXMuc3ViTm9kZXMgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0cHVibGljIGFic3RyYWN0IGdldFN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeTtcclxuLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gSWYgdGhlIG5vZGUgbmV2ZXIgaGFzIGFueSBjaGlsZHJlbiAobGlrZSB0ZXh0IG5vZGVzKSwgaXQgc2hvdWxkIHJldHVybiBmYWxzZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQ/KCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIGNvbnRlbnQgdGhhdCBjb21wcmlzZXMgdGhlIGNoaWxkcmVuIG9mIHRoZSBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmVcclxuXHQvLyBzdWItbm9kZXMsIG51bGwgc2hvdWxkIGJlIHJldHVybmVkLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgaXQgaXMgYXMgdGhvdWdoXHJcblx0Ly8gbnVsbCBpcyByZXR1cm5lZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHJlbmRlcj8oKTogYW55IHt9XHJcblxyXG5cdC8vIEluc2VydHMgdGhlIHZpcnR1YWwgbm9kZSdzIGNvbnRlbnQgaW50byBET00uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBtb3VudD8oKTogdm9pZCB7fVxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaGFzIGJlZW4gaW5zZXJ0ZWRcclxuXHQvLyBpbnRvIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIGRpZE1vdW50PygpOiB2b2lkIHt9XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQ/KCk6IHZvaWQge31cclxuXHJcblx0Ly8gUmVtb3ZlcyBjb250ZW50IGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudD8oKTogdm9pZCB7fVxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhpcyBtZXRob2QgaXNcclxuXHQvLyBOT1QgbWFya2VkIGFzIG9wdGlvbmFsIGFuZCB0aHVzIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGU/KCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3AgeyByZXR1cm4geyBzaG91bGRDb21taXQ6IGZhbHNlLCBzaG91bGRSZW5kZXI6IGZhbHNlIH07IH1cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIGNvbW1pdFVwZGF0ZT8oIG5ld1ZOOiBWTik6IHZvaWQge31cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGhhcyBiZWVuIHVwZGF0ZWRcclxuXHQvLyBpbiB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBkaWRVcGRhdGU/KCk6IHZvaWQge31cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgc3VwcG9ydHNFcnJvckhhbmRsaW5nPygpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIGFuZC9vciBpdHMgc3ViLW5vZGVzLiBJdCByZXR1cm5zIGNvbnRlbnQgY29tcHJpc2luZyB0aGUgY2hpbGRyZW4gb2YgdGhlIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvcj8oIHZuRXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZCB7fVxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETiB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyByZXF1ZXN0VXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5yb290KVxyXG5cdFx0XHR0aGlzLnJvb3QucmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWxzIGEgcHJldmlvdXNseSByZXF1ZXN0ZWQgdXBkYXRlIGZvciB0aGlzIG5vZGUuXHJcblx0cHVibGljIGNhbmNlbFVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucm9vdClcclxuXHRcdFx0dGhpcy5yb290LmNhbmNlbE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcblx0Ly8gaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0cHVibGljIHNjaGVkdWxlQ2FsbCggZnVuYzogKCkgPT4gdm9pZCwgYmVmb3JlVXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucm9vdClcclxuXHRcdFx0dGhpcy5yb290LnNjaGVkdWxlRnVuY0NhbGwoIGZ1bmMsIGJlZm9yZVVwZGF0ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbmNlbHMgYSBjYWxsIHRoYXQgaGFzIGJlZW4gc2NoZWR1bGVkIHRvIGJlIG1hZGUgZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZFxyXG5cdC8vIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0cHVibGljIGNhbmNlbFNjaGVkdWxlZENhbGwoIGZ1bmM6ICgpID0+IHZvaWQsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnJvb3QpXHJcblx0XHRcdHRoaXMucm9vdC5jYW5jZWxTY2hlZHVsZWRGdW5jQ2FsbCggZnVuYywgYmVmb3JlVXBkYXRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGFuIG9iamVjdCBvZiBhbnkgdHlwZSBhcyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3JcclxuXHQvLyBjb25zdW1wdGlvbiBieSBkZXNjZW5kYW50IG5vZGVzLlxyXG5cdHB1YmxpYyBwdWJsaXNoU2VydmljZTxLIGV4dGVuZHMga2V5b2YgbWltLklTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgc2VydmljZTogbWltLklTZXJ2aWNlRGVmaW5pdGlvbnNbS10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLGFueT4oKTtcclxuXHJcblx0XHRsZXQgZXhpc3RpblNlcnZpY2U6IGFueSA9IHRoaXMucHVibGlzaGVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoZXhpc3RpblNlcnZpY2UgIT09IHNlcnZpY2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuc2V0KCBpZCwgc2VydmljZSk7XHJcblx0XHRcdHRoaXMucm9vdC5ub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZCwgdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVucmVnaXN0ZXJzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgdW5wdWJsaXNoU2VydmljZTxLIGV4dGVuZHMga2V5b2YgbWltLklTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5kZWxldGUoIGlkKTtcclxuXHRcdHRoaXMucm9vdC5ub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdWJzY3JpYmVzIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIElmIHRoZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIGlzIHJlZ2lzdGVyZWRcclxuXHQvLyBieSBvbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7IG90aGVyd2lzZSxcclxuXHQvLyB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluIHVuZGVmaW5lZC5cclxuXHQvLyBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvciBub2RlIGlzXHJcblx0Ly8gY2hhbmdlZCwgdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0cHVibGljIHN1YnNjcmliZVNlcnZpY2U8SyBleHRlbmRzIGtleW9mIG1pbS5JU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssXHJcblx0XHRcdFx0XHRyZWY6IG1pbS5SZWZQcm9wVHlwZTxtaW0uSVNlcnZpY2VEZWZpbml0aW9uc1tLXT4sXHJcblx0XHRcdFx0XHRkZWZhdWx0U2VydmljZT86IG1pbS5JU2VydmljZURlZmluaXRpb25zW0tdLCB1c2VTZWxmPzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPSBuZXcgTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz4oKTtcclxuXHJcblx0XHRsZXQgaW5mbyA9IG5ldyBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbygpO1xyXG5cdFx0aW5mby5yZWYgPSByZWY7XHJcblx0XHRpbmZvLmRlZmF1bHRTZXJ2aWNlID0gZGVmYXVsdFNlcnZpY2U7XHJcblx0XHRpbmZvLnVzZVNlbGYgPSB1c2VTZWxmID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLnNldCggaWQsIGluZm8pO1xyXG5cdFx0dGhpcy5yb290Lm5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZCwgdGhpcyk7XHJcblx0XHRtaW0uc2V0UmVmKCByZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGRlZmF1bHRTZXJ2aWNlKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvLyBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlLFxyXG5cdC8vIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgdW5zdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBtaW0uSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0dGhpcy5yb290Lm5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvclxyXG5cdC8vIG5vZGUgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcmVnaXN0ZXJlZCBhIHNlcnZpY2Ugd2l0aFxyXG5cdC8vIHRoaXMgSUQuIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXN0YWJsaXNoIGEgc3Vic2NyaXB0aW9uIGFuZCBvbmx5IHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdHB1YmxpYyBnZXRTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBtaW0uSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLFxyXG5cdFx0XHRcdFx0ZGVmYXVsdFNlcnZpY2U/OiBtaW0uSVNlcnZpY2VEZWZpbml0aW9uc1tLXSwgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgc2VydmljZSA9IHRoaXMuZmluZFNlcnZpY2UoIGlkLCB1c2VTZWxmKTtcclxuXHRcdHJldHVybiBzZXJ2aWNlICE9PSB1bmRlZmluZWQgPyBzZXJ2aWNlIDogZGVmYXVsdFNlcnZpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBub2RlIHRoYXQgcHVibGljYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIHNlcnZpY2UgKHRvIHdoaWNoIHRoZSBub2RlXHJcblx0Ly8gaGFzIHByZXZpb3VzbHkgc3Vic2NyaWJlZCkgaGFzIGNoYW5nZWQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VDaGFuZ2VkPEsgZXh0ZW5kcyBrZXlvZiBtaW0uSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdGhpcy5nZXRTZXJ2aWNlKCBpZCwgaW5mby5kZWZhdWx0U2VydmljZSkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHb2VzIHVwIHRoZSBjaGFpbiBvZiBub2RlcyBsb29raW5nIGZvciBhIHB1Ymxpc2hlZCBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBSZXR1cm5zXHJcblx0Ly8gdW5kZWZpbmVkIGlmIHRoZSBzZXJ2aWNlIGlzIG5vdCBmb3VuZC4gTm90ZSB0aGF0IG51bGwgbWlnaHQgYmUgYSB2YWxpZCB2YWx1ZS5cclxuXHRwdWJsaWMgZmluZFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIG1pbS5JU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHVzZVNlbGY/OiBib29sZWFuKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHVzZVNlbGYpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgc2VydmljZSA9IHRoaXMucHVibGlzaGVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRcdFx0aWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdHJldHVybiBzZXJ2aWNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZ28gdXAgdGhlIGNoYWluOyBub3RlIHRoYXQgd2UgZG9uJ3QgcGFzcyB0aGUgdXNlU2VsZiBwYXJhbWV0ZXIgb24uXHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgIT09IG51bGwgPyB0aGlzLnBhcmVudC5maW5kU2VydmljZSggaWQsIHRydWUpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibGUgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzXHJcblx0ICogdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYnkgdGhlIGNvZGUgdGhhdCBpcyBub3QgcGFydCBvZiBhbnkgY29tcG9uZW50IGJ1dCBzdGlsbCBoYXMgYWNjZXNzXHJcblx0ICogdG8gdGhlIElWTm9kZSBvYmplY3Q7IGZvciBleGFtcGxlLCBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhlXHJcblx0ICogbWltLkNvbXBvbmVudCBjbGFzcyBzaG91bGQgdXNlIHRoZSB3cmFwQ2FsbGJhY2sgbWV0aG9kIG9mIHRoZSBtaW0uQ29tcG9uZW50IGNsYXNzLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayBcclxuXHQgKi9cclxuXHRwdWJsaWMgd3JhcENhbGxiYWNrPFQ+KCBjYWxsYmFjazogVCk6IFRcclxuXHR7XHJcblx0XHRyZXR1cm4gQ2FsbGJhY2tXcmFwcGVyLmJpbmQoIHRoaXMsIGNhbGxiYWNrKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgZmlyc3QgRE9NIG5vZGUgZGVmaW5lZCBieSBlaXRoZXIgdGhpcyB2aXJ0dWFsIG5vZGUgb3Igb25lIG9mIGl0cyBzdWItbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcblx0cHVibGljIGdldEZpcnN0RE4oKTogRE5cclxuXHR7XHJcblx0XHRsZXQgZG4gPSB0aGlzLmdldE93bkROKCk7XHJcblx0XHRpZiAoZG4gIT09IG51bGwpXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHRcdGVsc2UgaWYgKCF0aGlzLnN1Yk5vZGVzKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBmaXJzdCB0byBsYXN0IHVudGlsIGEgdmFsaWQgbm9kZVxyXG5cdFx0Ly8gaXMgcmV0dXJuZWRcclxuXHRcdGZvciggbGV0IHN2biA9IHRoaXMuc3ViTm9kZXMuZmlyc3Q7IHN2biAhPT0gbnVsbDsgc3ZuID0gc3ZuLm5leHQpXHJcblx0XHR7XHJcblx0XHRcdGRuID0gc3ZuLmdldEZpcnN0RE4oKTtcclxuXHRcdFx0aWYgKGRuICE9PSBudWxsKVxyXG5cdFx0XHRcdHJldHVybiBkbjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgbGFzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGNhbGxlZCBvbiB0aGUgbW91bnRlZCBub2Rlcy5cclxuXHRwdWJsaWMgZ2V0TGFzdEROKCk6IEROXHJcblx0e1xyXG5cdFx0bGV0IGRuID0gdGhpcy5nZXRPd25ETigpO1xyXG5cdFx0aWYgKGRuICE9PSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0XHRlbHNlIGlmICghdGhpcy5zdWJOb2RlcylcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHRcdC8vIGlzIHJldHVybmVkXHJcblx0XHRmb3IoIGxldCBzdm4gPSB0aGlzLnN1Yk5vZGVzLmxhc3Q7IHN2biAhPT0gbnVsbDsgc3ZuID0gc3ZuLnByZXYpXHJcblx0XHR7XHJcblx0XHRcdGRuID0gc3ZuLmdldExhc3RETigpO1xyXG5cdFx0XHRpZiAoZG4gIT09IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuIGRuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBsaXN0IG9mIERPTSBub2RlcyB0aGF0IGFyZSBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhpcyB2aXJ0dWFsIG5vZGU7IHRoYXQgaXMsXHJcblx0Ly8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZS4gTmV2ZXIgcmV0dXJucyBudWxsLlxyXG5cdHB1YmxpYyBnZXRJbW1lZGlhdGVETnMoKTogRE5bXVxyXG5cdHtcclxuXHRcdGxldCBhcnI6IEROW10gPSBbXTtcclxuXHRcdHRoaXMuY29sbGVjdEltbWVkaWF0ZUROcyggYXJyKTtcclxuXHRcdHJldHVybiBhcnI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbGxlY3RzIGFsbCBET00gbm9kZXMgdGhhdCBhcmUgaW1tZWRpYXRlIGNoaWxkcmVuIG9mIHRoaXMgdmlydHVhbCBub2RlICh0aGF0IGlzLFxyXG5cdC8vIGFyZSBOT1QgY2hpbGRyZW4gb2Ygc3ViLW5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUpIGludG8gdGhlIGdpdmVuIGFycmF5LlxyXG5cdHB1YmxpYyBjb2xsZWN0SW1tZWRpYXRlRE5zKCBhcnI6IEROW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGRuID0gdGhpcy5nZXRPd25ETigpO1xyXG5cdFx0aWYgKGRuICE9PSBudWxsKVxyXG5cdFx0XHRhcnIucHVzaCggZG4pO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5zdWJOb2RlcylcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gZmlyc3QgdG8gbGFzdFxyXG5cdFx0XHRmb3IoIGxldCBzdm4gPSB0aGlzLnN1Yk5vZGVzLmZpcnN0OyBzdm4gIT09IG51bGw7IHN2biA9IHN2bi5uZXh0KVxyXG5cdFx0XHRcdHN2bi5jb2xsZWN0SW1tZWRpYXRlRE5zKCBhcnIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaW5kcyB0aGUgZmlyc3QgRE9NIG5vZGUgaW4gdGhlIHRyZWUgb2YgdmlydHVhbCBub2RlcyB0aGF0IGNvbWVzIGFmdGVyIG91ciBub2RlIHRoYXQgaXMgYVxyXG5cdC8vIGNoaWxkIG9mIG91ciBvd24gYW5jaG9yIGVsZW1lbnQuIFdlIHVzZSBpdCBhcyBhIG5vZGUgYmVmb3JlIHdoaWNoIHRvIGluc2VydC9tb3ZlIG5vZGVzIG9mXHJcblx0Ly8gb3VyIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuIFRoZSBhbGdvcml0aG0gZmlyc3QgZ29lcyB0byB0aGUgbmV4dFxyXG5cdC8vIHNpYmxpbmdzIG9mIG91ciBub2RlIGFuZCB0aGVuIHRvIHRoZSBuZXh0IHNpYmxpbmdzIG9mIG91ciBwYXJlbnQgbm9kZSByZWN1cnNpdmVseS4gSXQgc3RvcHNcclxuXHQvLyB3aGVuIHdlIGVpdGhlciBmaW5kIGEgRE9NIG5vZGUgKHRoZW4gaXQgaXMgcmV0dXJuZWQpIG9yIGZpbmQgYSBkaWZmZXJlbiBhbmNob3IgZWxlbWVudFxyXG5cdC8vICh0aGVuIG51bGwgaXMgcmV0dXJuZWQpLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSByZWNvbmNpbGlhdGlvbiBwcm9jZXNzIGZvciBvdXJcclxuXHQvLyBzdWItbm9kZXMgc3RhcnRzIGFuZCwgdGhlcmVmb3JlLCBpdCBvbmx5IHRyYXZlcnNlcyBtb3VudGVkIG5vZGVzLlxyXG5cdHB1YmxpYyBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggYW5jaG9yRE46IEROKTogRE5cclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB3ZSBoYXZlIHNpYmxpbmcgRE9NIG5vZGVzIGFmdGVyIG91ciBsYXN0IHN1Yi1ub2RlIC0gdGhhdCBtaWdodCBiZSBlbGVtZW50c1xyXG5cdFx0Ly8gbm90IGNvbnRyb2xsZWQgYnkgb3VyIGNvbXBvbmVudC5cclxuXHRcdGlmICh0aGlzLnN1Yk5vZGVzICYmIHRoaXMuc3ViTm9kZXMubGFzdCAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Y29uc3QgZG46IEROID0gdGhpcy5zdWJOb2Rlcy5sYXN0LmdldExhc3RETigpO1xyXG5cdFx0XHRpZiAoZG4gIT09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zdCBuZXh0U2libGluZzogRE4gPSBkbi5uZXh0U2libGluZztcclxuXHRcdFx0XHRpZiAobmV4dFNpYmxpbmcgIT09IG51bGwpXHJcblx0XHRcdFx0XHRyZXR1cm4gbmV4dFNpYmxpbmc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgb3VyIG5leHQgc2libGluZ3NcclxuXHRcdGZvciggbGV0IHZuOiBWTiA9IHRoaXMubmV4dDsgdm4gIT09IG51bGw7IHZuID0gdm4ubmV4dClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHZuLmFuY2hvckROICE9PSBhbmNob3JETilcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdC8vIG5vdGUgdGhhdCBnZXRMYXN0RE4gY2FsbCB0cmF2ZXJzZXMgdGhlIGhpZXJhcmNoeSBvZiBub2Rlcy4gTm90ZSBhbHNvIHRoYXQgaXRcclxuXHRcdFx0Ly8gaXQgY2Fubm90IGZpbmQgYSBub2RlIHVuZGVyIGEgZGlmZmVyZW50IGFuY2hvciBlbGVtZW50IGJlY2F1c2UgdGhlIGZpcnN0IGRpZmZlcmVudFxyXG5cdFx0XHQvLyBhbmNob3IgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkIGFzIGEgd2FudGVkIG5vZGUuXHJcblx0XHRcdGNvbnN0IGRuOiBETiA9IHZuLmdldExhc3RETigpO1xyXG5cdFx0XHRpZiAoZG4gIT09IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuIGRuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlY3Vyc2UgdG8gb3VyIHBhcmVudCBpZiBleGlzdHNcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCAhPT0gbnVsbCAmJiB0aGlzLnBhcmVudC5hbmNob3JETiA9PT0gYW5jaG9yRE5cclxuXHRcdFx0XHRcdFx0PyB0aGlzLnBhcmVudC5nZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggYW5jaG9yRE4pIDogbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhcnJheSBvZiBub2RlIG5hbWVzIHN0YXJ0aW5nIHdpdGggdGhpcyBub2RlIGFuZCB1cCB1bnRpbCB0aGUgdG9wLWxldmVsIG5vZGUuXHJcblx0cHVibGljIGdldCBwYXRoKCk6IHN0cmluZ1tdXHJcblx0e1xyXG5cdFx0bGV0IGRlcHRoID0gdGhpcy5kZXB0aDtcclxuXHRcdGxldCBwYXRoID0gQXJyYXk8c3RyaW5nPiggZGVwdGgpO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDAsIHZuOiBWTiA9IHRoaXM7IGkgPCBkZXB0aDsgaSsrLCB2biA9IHZuLnBhcmVudClcclxuXHRcdHtcclxuXHRcdFx0cGF0aFtpXSA9IHZuLm5hbWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhdGg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBpcyBtb3VudGVkLlxyXG5cdHB1YmxpYyBnZXQgSXNNb3VudGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5hbmNob3JETiAhPT0gbnVsbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBub2RlLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5uYW1lOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyZW50IG5vZGUuIFRoaXMgaXMgbnVsbCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cHVibGljIHBhcmVudDogVk47XHJcblxyXG5cdC8vIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLlxyXG5cdHB1YmxpYyBhbmNob3JETjogRE4gPSBudWxsO1xyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblx0Ly8gTmV4dCBub2RlIGluIHRoZSBjaGFpbiBvZiBzaWJsaW5nIG5vZGVzIG9yIG51bGwgaWYgdGhpcyBpcyB0aGUgbGFzdCBvbmUuXHJcblx0cHVibGljIG5leHQ6IFZOID0gbnVsbDtcclxuXHJcblx0Ly8gUHJldmlvdXMgbm9kZSBpbiB0aGUgY2hhaW4gb2Ygc2libGluZyBub2RlcyBvciBudWxsIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG9uZS5cclxuXHRwdWJsaWMgcHJldjogVk4gPSBudWxsO1xyXG5cclxuXHQvLyBDaGFpbiBvZiBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1Yk5vZGVzO1xyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2VydmljZSBvYmplY3RzIHB1Ymxpc2hlZCBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBwdWJsaXNoZWRTZXJ2aWNlczogTWFwPHN0cmluZyxhbnk+O1xyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gb2JqZWN0cyBjb25zdGl0dXRpbmcgc3Vic2NyaXB0aW9ucyBtYWRlIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHN1YnNjcmliZWRTZXJ2aWNlczogTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz47XHJcblxyXG5cdC8vIFwiVGljayBudW1iZXJcIiBkdXJpbmcgd2hpY2ggdGhlIG5vZGUgd2FzIGxhc3QgdXBkYXRlZC4gSWYgdGhpcyBub2RlJ3MgdGljayBudW1iZXIgZXF1YWxzXHJcblx0Ly8gdGhlIGN1cnJlbnQgdGljayBudW1iZXIgbWFpbnRhaW5lZCBieSB0aGUgcm9vdCBub2RlLCB0aGlzIGluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSB3YXNcclxuXHQvLyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyB1cGRhdGUgY3ljbGUuIFRoaXMgaGVscHMgcHJldmVudCB0aGUgZG91YmxlLXJlbmRlcmluZyBvZiBhXHJcblx0Ly8gY29tcG9uZW50IGlmIGJvdGggdGhlIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmUgdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRwdWJsaWMgbGFzdFVwZGF0ZVRpY2s6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBcclxuLyoqXHJcbiAqIFRoZSBDYWxsYmFja1dyYXBwZXIgZnVuY3Rpb24gaXMgdXNlZCB0byB3cmFwIGEgY2FsbGJhY2sgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9ucyBmcm9tIHRoZVxyXG4gKiBjYWxsYmFjayBhbmQgcGFzcyBpdCB0byB0aGUgXCJTdGRFcnJvckhhbmRsaW5nXCIgc2VydmljZS4gVGhlIGZ1bmN0aW9uIGlzIGJvdW5kIHRvIHR3byBwYXJhbWV0ZXJzOlxyXG4gKiBhIHZpcnR1YWwgbm9kZSAoYWNjZXNzZWQgYXMgYHRoaXNgKSBhbmQgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIChhY2Nlc3NlZCBhcyB0aGUgZmlyc3QgZWxlbWVudFxyXG4gKiBmcm9tIHRoZSBgYXJndW1lbnRzYCBhcnJheSkuIFRoZSByZXN0IG9mIHBhcmFtZXRlcnMgaW4gdGhlIGBhcmd1bWVudHNgIGFycmF5IGFyZSBwYXNzZWQgdG8gdGhlXHJcbiAqIG9yaWdpbmFsIGNhbGxiYWNrIGFuZCB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGlzIHJldHVybmVkIGZyb20gdGhlIHdyYXBwZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBDYWxsYmFja1dyYXBwZXIoKTogYW55XHJcbntcclxuXHR0cnlcclxuXHR7XHJcblx0XHRsZXQgW29yZ0NhbGxiYWNrLCAuLi5yZXN0XSA9IGFyZ3VtZW50cztcclxuXHRcdHJldHVybiBvcmdDYWxsYmFjayggLi4ucmVzdCk7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0bGV0IGVycm9yU2VydmljZSA9IHRoaXMuZmluZFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKSBhcyBtaW0uSUVycm9ySGFuZGxpbmdTZXJ2aWNlO1xyXG5cdFx0aWYgKGVycm9yU2VydmljZSlcclxuXHRcdFx0ZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIHRoaXMucGF0aCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IGVycjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTlVwZGF0ZURpc3AgdHlwZSBkZXNjcmliZXMgd2hldGhlciBjZXJ0YWluIGFjdGlvbnMgc2hvdWxkIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZVxyXG4vLyBkdXJpbmcgdXBkYXRlLiBUaGlzIG9iamVjdCBpcyByZXR1cm5lZCBmcm9tIHRoZSBub2RlJ3MgdXBkYXRlRnJvbSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBWTlVwZGF0ZURpc3AgPVxyXG57XHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgbm9kZSBoYXMgY2hhbmdlcyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBET00gdHJlZS4gSWYgdGhpc1xyXG5cdC8vIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCB3aWxsIGJlIGNsbGVkIG9uIHRoZSBub2RlIGR1cmluZyB0aGUgQ29tbWl0XHJcblx0Ly8gcGhhc2UuXHJcblx0c2hvdWxkQ29tbWl0OiBib29sZWFuO1xyXG5cclxuXHQvLyBGYWxnIGluZGljYXRuZyB3aGV0aGVyIHRoZSBzdWItbm9kZXMgc2hvdWxkIGJlIHVwZGF0ZWQuIElmIHRoaXMgZmxhZyBpcyB0cnVlLCB0aGVuIHRoZVxyXG5cdC8vIG5vZGUncyByZW5kZXIgbWV0aG9kIHdpbGwgYmUgaW1tZWRpYXRlbHkgY2FsbGVkLlxyXG5cdHNob3VsZFJlbmRlcjogYm9vbGVhbjtcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbyBjbGFzcyBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIHN1YnNjcmlwdGlvbiBvZiBhIG5vZGUgdG8gYSBzZXJ2aWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgVk5TdWJzY3JpYmVkU2VydmljZUluZm9cclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgZmlsbGVkIGluIHdpdGggdGhlIHNlcnZpY2UgdmFsdWVcclxuXHRyZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBEZWZhdWx0IHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgdXNlZCBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyBwdWJsaXNoZXMgdGhlXHJcblx0Ly8gc2VydmljZVxyXG5cdGRlZmF1bHRTZXJ2aWNlOiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGEgbm9kZSBjYW4gc3Vic2NyaWJlIHRvIGEgc2VydmljZSB0aGF0IGl0IGltcGxlbWVudHMgaXRzZWxmLiBUaGlzXHJcblx0Ly8gaXMgdXNlZnVsIGluIGNhc2Ugd2hlcmUgYSBzZXJ2aWNlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgYSBjb21wb25lbnQgY2FuIGNoYWluIHRvIGEgc2VydmljZVxyXG5cdC8vIGltcGxlbWVudGVkIGJ5IGFuIGFuY2VzdG9yIGNvbXBvbmVudC5cclxuXHR1c2VTZWxmOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVJvb3RWTiBpbnRlcmZhY2UgcmVwcmVzZW50IHRoZSBmdW5jdGlvbmFsaXR5IG9mIHRoZSBSb290IHZpcnR1YWwgbm9kZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvb3RWTlxyXG57XHJcblx0Ly8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgcHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5cdG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHVucHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5cdG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyBzdWJzY3JpYmVkIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyB1bnN1YnNjcmliZWQgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0bm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhlIGdpdmVuIG5vZGUuXHJcblx0cmVxdWVzdE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIENhbmNlbHMgYSBwcmV2aW91c2x5IHJlcXVlc3RlZCB1cGRhdGUgZm9yIHRoZSBnaXZlbiBub2RlLlxyXG5cdGNhbmNlbE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHNcclxuXHQvLyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jOiAoKSA9PiB2b2lkLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvLyBDYW5jZWxzIGEgY2FsbCB0aGF0IGhhcyBiZWVuIHNjaGVkdWxlZCB0byBiZSBtYWRlIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWRcclxuXHQvLyBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdGNhbmNlbFNjaGVkdWxlZEZ1bmNDYWxsKCBmdW5jOiAoKSA9PiB2b2lkLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge1ZOfSBmcm9tIFwiLi9WTlwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5DaGFpbiBjbGFzcyByZXByZXNlbnRzIGEgZG91YmxseS1saW5rZWQgbGlzdCBvZiB2aXJ0dWFsIG5vZGVzLiBJdCByZWZlcmVuY2VzIHRoZSBmaXJzdFxyXG4vLyBhbmQgbGFzdCBzdWItbm9kZXMgYW5kIHByb3ZpZGVzIHNvbWUgY29udmVuaWVuY2UgbWV0aG9kcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBWTkNoYWluIGltcGxlbWVudHMgbWltLklWTkNoYWluXHJcbntcclxuXHRjb25zdHJ1Y3Rvciggdm4/OiBWTilcclxuXHR7XHJcblx0XHRpZiAodm4gIT09IHVuZGVmaW5lZCAmJiB2biAhPSBudWxsKVxyXG5cdFx0XHR0aGlzLmFwcGVuZFZOKCB2bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElWTkNoYWluIGltcGxlbWVudGF0aW9uXHJcblx0cHVibGljIGdldCBGaXJzdCgpOiBtaW0uSVZOb2RlIHsgcmV0dXJuIHRoaXMuZmlyc3Q7IH1cclxuXHRwdWJsaWMgZ2V0IExhc3QoKTogbWltLklWTm9kZSB7IHJldHVybiB0aGlzLmxhc3Q7IH1cclxuXHRwdWJsaWMgZ2V0IENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmNvdW50OyB9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbm9kZXMgZnJvbSB0aGUgY2hhaW4uXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmZpcnN0ID0gdGhpcy5sYXN0ID0gbnVsbDtcclxuXHRcdHRoaXMuY291bnQgPSAwO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGEgbmV3IG5vZGUgdG8gdGhlIGVuZCBvZiB0aGUgY2hhaW4uXHJcblx0cHVibGljIGFwcGVuZFZOKCB2bjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHZuID09PSBudWxsKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dm4ucHJldiA9IHRoaXMubGFzdDtcclxuXHRcdGlmICh0aGlzLmZpcnN0ID09PSBudWxsKVxyXG5cdFx0XHR0aGlzLmZpcnN0ID0gdGhpcy5sYXN0ID0gdm47XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGFzdC5uZXh0ID0gdm47XHJcblx0XHRcdHRoaXMubGFzdCA9IHZuO1xyXG5cdFx0fVxyXG5cdFx0dm4ubmV4dCA9IG51bGxcclxuXHRcdHRoaXMuY291bnQrKztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBhbGwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gY2hhaW4gdG8gdGhlIGVuZCBvZiBvdXIgY2hhaW4uXHJcblx0cHVibGljIGFwcGVuZENoYWluKCBjaGFpbjogVk5DaGFpbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoY2hhaW4gPT09IG51bGwgfHwgY2hhaW4uZmlyc3QgPT09IG51bGwpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRjaGFpbi5maXJzdC5wcmV2ID0gdGhpcy5sYXN0O1xyXG5cdFx0aWYgKHRoaXMuZmlyc3QgPT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZmlyc3QgPSBjaGFpbi5maXJzdDtcclxuXHRcdFx0dGhpcy5sYXN0ID0gY2hhaW4ubGFzdDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5sYXN0Lm5leHQgPSBjaGFpbi5maXJzdDtcclxuXHRcdFx0dGhpcy5sYXN0ID0gY2hhaW4ubGFzdDtcclxuXHRcdH1cclxuXHRcdGNoYWluLmxhc3QubmV4dCA9IG51bGw7XHJcblx0XHR0aGlzLmNvdW50ICs9IGNoYWluLmNvdW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGEgbmV3IG5vZGUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBjaGFpbi5cclxuXHRwdWJsaWMgaW5zZXJ0Vk4oIHZuOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodm4gPT09IG51bGwpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR2bi5uZXh0ID0gdGhpcy5maXJzdDtcclxuXHRcdGlmICh0aGlzLmZpcnN0ID09PSBudWxsKVxyXG5cdFx0XHR0aGlzLmZpcnN0ID0gdGhpcy5sYXN0ID0gdm47XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZmlyc3QucHJldiA9IHZuO1xyXG5cdFx0XHR0aGlzLmZpcnN0ID0gdm47XHJcblx0XHR9XHJcblx0XHR2bi5wcmV2ID0gbnVsbFxyXG5cdFx0dGhpcy5jb3VudCsrO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXBsYWNlcyB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoZSBub2RlcyBmcm9tIHRoZSBnaXZlbiBjaGFpbi5cclxuXHRwdWJsaWMgcmVwbGFjZVZOV2l0aENoYWluKCB2bjogVk4sIGNoYWluOiBWTkNoYWluKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh2biA9PT0gbnVsbCB8fCBjaGFpbiA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBwcmV2OiBWTiA9IHZuLnByZXY7XHJcblx0XHRsZXQgbmV4dDogVk4gPSB2bi5uZXh0O1xyXG5cdFx0aWYgKHRoaXMuZmlyc3QgPT09IHZuKVxyXG5cdFx0XHR0aGlzLmZpcnN0ID0gY2hhaW4uZmlyc3Q7XHJcblx0XHRpZiAodGhpcy5sYXN0ID09PSB2bilcclxuXHRcdFx0dGhpcy5sYXN0ID0gY2hhaW4ubGFzdDtcclxuXHRcdGlmIChwcmV2ICE9PSBudWxsKVxyXG5cdFx0XHRwcmV2Lm5leHQgPSBjaGFpbi5maXJzdDtcclxuXHRcdGlmIChuZXh0ICE9IG51bGwpXHJcblx0XHRcdG5leHQucHJldiA9IGNoYWluLmxhc3Q7XHJcblxyXG5cdFx0dGhpcy5jb3VudCArPSBjaGFpbi5jb3VudCAtIDE7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvLyBEZWxldGVzIHRoZSBnaXZlbiBub2RlIGZyb20gdGhlIGNoYWluLlxyXG5cdHB1YmxpYyBkZWxldGVWTiggdm46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh2biA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBwcmV2OiBWTiA9IHZuLnByZXY7XHJcblx0XHRsZXQgbmV4dDogVk4gPSB2bi5uZXh0O1xyXG5cdFx0aWYgKHRoaXMuZmlyc3QgPT09IHZuKVxyXG5cdFx0XHR0aGlzLmZpcnN0ID0gbmV4dDtcclxuXHRcdGlmICh0aGlzLmxhc3QgPT09IHZuKVxyXG5cdFx0XHR0aGlzLmxhc3QgPSBwcmV2O1xyXG5cdFx0aWYgKHByZXYgIT09IG51bGwpXHJcblx0XHRcdHByZXYubmV4dCA9IG5leHQ7XHJcblx0XHRpZiAobmV4dCAhPSBudWxsKVxyXG5cdFx0XHRuZXh0LnByZXYgPSBwcmV2O1xyXG5cclxuXHRcdHRoaXMuY291bnQtLTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmlyc3Qgbm9kZSBpbiB0aGUgY2hhaW4gb2Ygc3ViLW5vZGVzLiBOdWxsIGZvciBlbXB0eSBjaGFpbnMuXHJcblx0cHVibGljIGZpcnN0OiBWTiA9IG51bGw7XHJcblxyXG5cdC8vIExhc3Qgbm9kZSBpbiB0aGUgY2hhaW4gb2Ygc3ViLW5vZGVzLiBOdWxsIGZvciBlbXB0eSBjaGFpbnMuXHJcblx0cHVibGljIGxhc3Q6IFZOID0gbnVsbDtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBjaGFpbi5cclxuXHRwdWJsaWMgY291bnQ6IG51bWJlciA9IDA7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7Vk59IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkNoYWlufSBmcm9tIFwiLi9WTkNoYWluXCJcclxuaW1wb3J0IHtJbnN0YW5jZVZOfSBmcm9tIFwiLi9JbnN0YW5jZVZOXCJcclxuaW1wb3J0IHtDbGFzc1ZOfSBmcm9tIFwiLi9DbGFzc1ZOXCJcclxuaW1wb3J0IHtGdW5jVk59IGZyb20gXCIuL0Z1bmNWTlwiXHJcbmltcG9ydCB7RWxtVk59IGZyb20gXCIuL0VsbVZOXCJcclxuaW1wb3J0IHtUZXh0Vk59IGZyb20gXCIuL1RleHRWTlwiXHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBjaGFpbiBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuIEZvciBhbGwgdHlwZXMgb2YgY29udGVudHMgb3RoZXIgdGhhbiBhblxyXG4vLyBhcnJheSwgdGhlIHJldHVybmVkIGNoYWluIGNvbnRhaW5zIGEgc2luZ2xlIFZOLiBJZiB0aGUgaW5wdXQgY29udGVudCBpcyBhbiBhcnJheSwgdGhlblxyXG4vLyBhIFZOIGlzIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGFycmF5IGVsZW1lbnRzLiBTaW5jZSBhcnJheSBlbGVtZW50cyBtaWdodCBhbHNvIGJlIGFycmF5cyxcclxuLy8gdGhlIHByb2Nlc3MgaXMgcmVjdXJzaXZlLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCBjb250ZW50OiBhbnkpOiBWTkNoYWluXHJcbntcclxuXHRpZiAoIGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCBjb250ZW50ID09PSBudWxsIHx8Y29udGVudCA9PT0gZmFsc2UgfHwgdHlwZW9mIGNvbnRlbnQgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRjb25zdCBjaGFpbiA9IG5ldyBWTkNoYWluKCk7XHJcblx0aWYgKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdFx0Y2hhaW4uYXBwZW5kVk4oIG5ldyBUZXh0Vk4oIGNvbnRlbnQgYXMgc3RyaW5nKSk7XHJcblx0ZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRjaGFpbi5hcHBlbmRWTiggbmV3IEluc3RhbmNlVk4oIGNvbnRlbnQgYXMgbWltLklDb21wb25lbnQpKTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBjb250ZW50KSlcclxuXHR7XHJcblx0XHRmb3IoIGxldCBhcnJJdGVtIG9mIGNvbnRlbnQgYXMgQXJyYXk8YW55PilcclxuXHRcdFx0Y2hhaW4uYXBwZW5kQ2hhaW4oIGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggYXJySXRlbSkpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVk4pXHJcblx0XHRjaGFpbi5hcHBlbmRWTiggY29udGVudCBhcyBWTik7XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFZOQ2hhaW4pXHJcblx0XHRjaGFpbi5hcHBlbmRDaGFpbiggY29udGVudCBhcyBWTkNoYWluKTtcclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHRocm93IGNvbnRlbnQ7XHJcblx0ZWxzZVxyXG5cdFx0Y2hhaW4uYXBwZW5kVk4oIG5ldyBUZXh0Vk4oIGNvbnRlbnQudG9TdHJpbmcoKSkpO1xyXG5cclxuXHRyZXR1cm4gY2hhaW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGNoYWluIG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgVHlwZVNjcmlwdCdzIEpTWCBwYXJzZXIuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTkNoYWluRnJvbUpTWCggdGFnOiBhbnksIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSk6IFZOQ2hhaW5cclxue1xyXG5cdGNvbnN0IGNoYWluOiBWTkNoYWluID0gbmV3IFZOQ2hhaW4oKTtcclxuXHJcblx0aWYgKHR5cGVvZiB0YWcgPT09IFwic3RyaW5nXCIpXHJcblx0XHRjaGFpbi5hcHBlbmRWTiggbmV3IEVsbVZOKCB0YWcgYXMgc3RyaW5nLCBwcm9wcywgY2hpbGRyZW4pKTtcclxuXHRlbHNlIGlmICh0YWcgPT09IG1pbS5GcmFnbWVudClcclxuXHRcdGNoYWluLmFwcGVuZENoYWluKCBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGNoaWxkcmVuKSk7XHJcblx0ZWxzZSBpZiAodGFnLnByb3RvdHlwZSAmJiB0eXBlb2YgdGFnLnByb3RvdHlwZS5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdGNoYWluLmFwcGVuZFZOKCBuZXcgQ2xhc3NWTiggdGFnIGFzIG1pbS5JQ29tcG9uZW50Q2xhc3MsIHByb3BzLCBjaGlsZHJlbikpO1xyXG5cdC8vIGVsc2UgaWYgKG1pbS5Db21wb25lbnQuaXNQcm90b3R5cGVPZiggdGFnKSlcclxuXHQvLyBcdGNoYWluLmFwcGVuZFZOKCBuZXcgQ2xhc3NWTiggdGFnIGFzIG1pbS5JQ29tcG9uZW50Q2xhc3MsIHByb3BzLCBjaGlsZHJlbikpO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdGNoYWluLmFwcGVuZFZOKCBuZXcgRnVuY1ZOKCB0YWcgYXMgbWltLkZ1bmNDb21wVHlwZSwgcHJvcHMsIGNoaWxkcmVuKSk7XHJcbi8vLy8vLy8vLy8vLy8vXHJcblx0ZWxzZVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIkludmFsaWQgdGFnIGluIGpzeCBwcm9jZXNzaW5nIGZ1bmN0aW9uOiBcIiArIHRhZyk7XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cdHJldHVybiBjaGFpbjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21Db250ZW50fSBmcm9tIFwiLi9WTkNoYWluRnVuY3NcIlxyXG5pbXBvcnQgeyBWTlR5cGUgfSBmcm9tIFwiLi9taW1cIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkFjdGlvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgcG9zc2libGUgYWN0aW9ucyB0byBwZXJmb3JtIGZvciBuZXcgbm9kZXMgZHVyaW5nXHJcbiAqIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBWTkRpc3BBY3Rpb25cclxue1xyXG5cdC8qKlxyXG5cdCAqIEVpdGhlciBpdCBpcyBub3QgeWV0IGtub3duIHdoYXQgdG8gZG8gd2l0aCB0aGUgbm9kZSBpdHNlbGYgb3IgdGhpcyBpcyBhIGNvbXBvbmVudCBub2RlLFxyXG5cdCAqIGZvciB3aGljaCBhbiB1cGRhdGUgd2FzIHJlcXVlc3RlZDsgdGhhdCBpcywgb25seSB0aGUgbm9kZSdzIGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIGluc2VydGVkLiBUaGlzIG1lYW5zIHRoYXQgZWl0aGVyIHRoZXJlIHdhcyBubyBjb3VudGVycGFydCBvbGQgbm9kZVxyXG5cdCAqIGZvdW5kIG9yIHRoZSBmb3VuZCBub2RlIGNhbm5vdCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG9uZSBub3IgY2FuIHRoZSBvbGQgbm9kZSBiZSByZXVzZWRcclxuXHQgKiBieSB0aGUgbmV3IG9uZSAoZS5nLiBvZiBkaWZmZXJlbnQgdHlwZSkuXHJcblx0ICovXHJcblx0SW5zZXJ0ID0gMSxcclxuXHJcblx0LyoqIFRoZSBuZXcgbm9kZSBzaG91bGQgYmUgdXNlZCB0byB1cGRhdGUgdGhlIG9sZCBub2RlLiAqL1xyXG5cdFVwZGF0ZSA9IDIsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3BHcm91cCBjbGFzcyBkZXNjcmliZXMgYSBncm91cCBvZiBjb25zZWN1dGl2ZSBWTkRpc3Agb2JqZWN0cyBjb3JyZXNwcG9uZGluZyB0byB0aGVcclxuICogc2VxdWVuY2Ugb2Ygc3ViLW5vZGVzLiBUaGUgZ3JvdXAgaXMgZGVzY3JpYmVkIHVzaW5nIGluZGljZXMgb2YgVk5EaXNwIG9iamVjdHMgaW4gdGhlXHJcbiAqIHN1Yk5vZGVEaXNwIGZpZWxkIG9mIHRoZSBwYXJlbnQgVk5EaXNwIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWTkRpc3BHcm91cFxyXG57XHJcblx0LyoqIHBhcmVudCBWTkRpc3AgdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzICovXHJcblx0cHVibGljIHBhcmVudERpc3A6IFZORGlzcDtcclxuXHRcclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZXMgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGZpcnN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgZmlyc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBsYXN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgbGFzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBncm91cC4gKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3QgLSB0aGlzLmZpcnN0ICsgMSB9O1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBmaXJzdEROOiBETjtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgbGFzdEROOiBETjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyZW50RGlzcDogVk5EaXNwLCBhY3Rpb246IFZORGlzcEFjdGlvbilcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudERpc3AgPSBwYXJlbnREaXNwO1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERldGVybWluZXMgZmlyc3QgYW5kIGxhc3QgRE9NIG5vZGVzIGZvciB0aGUgZ3JvdXAuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBhZnRlciB0aGVcclxuXHQgKiBub2RlcyB3ZXJlIHBoaXNpY2FsbHkgdXBkYXRlZC9pbnNlcnRlZCBhbmQgd2UgY2FuIG9idGFpbiB0aGVpciBET00gbm9kZXMuXHJcblx0ICovXHJcblx0cHVibGljIGRldGVybWluZUROcygpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3Q7IGkgPD0gdGhpcy5sYXN0OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCBkaXNwID0gdGhpcy5wYXJlbnREaXNwLnN1Yk5vZGVEaXNwc1tpXTtcclxuXHRcdFx0bGV0IHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQgPyBkaXNwLm5ld1ZOIDogZGlzcC5vbGRWTjtcclxuXHRcdFx0dGhpcy5maXJzdEROID0gdm4uZ2V0Rmlyc3RETigpO1xyXG5cdFx0XHRpZiAodGhpcy5maXJzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciggbGV0IGkgPSB0aGlzLmxhc3Q7IGkgPj0gdGhpcy5maXJzdDsgaS0tKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdGxldCB2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0ID8gZGlzcC5uZXdWTiA6IGRpc3Aub2xkVk47XHJcblx0XHRcdHRoaXMubGFzdEROID0gdm4uZ2V0TGFzdEROKCk7XHJcblx0XHRcdGlmICh0aGlzLmxhc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3AgY2xhc3MgaXMgYSByZWN1cnNpdmUgc3RydWN0dXJlIHRoYXQgZGVzY3JpYmVzIGEgZGlzcG9zaXRpb24gZm9yIGEgbm9kZSBhbmQgaXRzXHJcbiAqIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVk5EaXNwXHJcbntcclxuXHRjb25zdHJ1Y3RvciggbmV3Vk46IFZOLCBhY3Rpb24gPSBWTkRpc3BBY3Rpb24uVW5rbm93biwgb2xkVk4/OiBWTilcclxuXHR7XHJcblx0XHR0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuXHRcdHRoaXMubmV3Vk4gPSBuZXdWTjtcclxuXHRcdHRoaXMub2xkVk4gPSBvbGRWTjtcclxuXHR9XHJcblxyXG5cdC8qKiBBY3Rpb24gdG8gYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogTmV3IHZpcnR1YWwgbm9kZSB0byBpbnNlcnQgb3IgdG8gdXBkYXRlIGFuIG9sZCBub2RlICovXHJcblx0cHVibGljIG5ld1ZOOiBWTjtcclxuXHJcblx0LyoqIE9sZCB2aXJ0dWFsIG5vZGUgdG8gYmUgdXBkYXRlZC4gVGhpcyBpcyBub3QgdXNlZCBmb3IgdGhlIEluc2VydCBhY3Rpb24uICovXHJcblx0cHVibGljIG9sZFZOOiBWTjtcclxuXHJcblx0LyoqIERpc3Bvc2l0aW9uIGZsYWdzIGZvciB0aGUgVXBkYXRlIGFjdGlvbi4gVGhpcyBpcyBub3QgdXNlZCBmb3IgdGhlIEluc2VydCBhY3Rpb25zLiAqL1xyXG5cdHB1YmxpYyB1cGRhdGVEaXNwOiBWTlVwZGF0ZURpc3A7XHJcblxyXG5cdC8qKiBBcnJheSBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBkdXJpbmcgdXBkYXRlIG9mIHRoZSBzdWItbm9kZXMuICovXHJcblx0cHVibGljIHN1Yk5vZGVzVG9SZW1vdmU6IFZOW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFycmF5IG9mIGRpc3Bvc2l0aW9uIG9iamVjdHMgZm9yIHN1Yi1ub2Rlcy4gVGhpcyBpbmNsdWRlcyBub2RlcyB0byBiZSB1cGRhdGVkXHJcblx0ICogYW5kIHRvIGJlIGluc2VydGVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdWJOb2RlRGlzcHM6IFZORGlzcFtdO1xyXG5cclxuXHQvKiogQXJyYXkgb2YgZ3JvdXBzIG9mIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9yIGluc2VydGVkLiAqL1xyXG5cdHB1YmxpYyBzdWJOb2RlR3JvdXBzOiBWTkRpc3BHcm91cFtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBJZiB0aGUgbm9kZSBoYXMgbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIHN1Yi1ub2RlcywgdGhlbiB3ZSBidWlsZCBncm91cHMuIFRoZSBpZGVhIGlzIHRoYXRcclxuXHQgKiBvdGhlcndpc2UsIHRoZSBvdmVyaGVhZCBvZiBidWlsZGluZyBncm91cHMgaXMgbm90IHdvcnRoIGl0LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PX0dST1VQX1RIUkVTSE9MRCA9IDI7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ29tcGFyZXMgb2xkIGFuZCBuZXcgY2hhaW5zIG9mIHN1Yi1ub2RlcyBhbmQgZGV0ZXJtaW5lcyB3aGF0IG5vZGVzIHNob3VsZCBiZSBjcmVhdGVkLCBkZWxldGVkXHJcblx0ICogb3IgdXBkYXRlZC4gVGhlIHJlc3VsdCBpcyByZW1lbWJlcmVkIGFzIGFuIGFycmF5IG9mIFZORGlzcCBvYmplY3RzIGZvciBlYWNoIHN1Yi1ub2RlIGFuZCBhc1xyXG5cdCAqIGFycmF5IG9mIG9sZCBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgZGVsZXRlZC4gSW4gYWRkaXRpb24sIHRoZSBuZXcgc3ViLW5vZGVzIGFyZSBkaXZpZGVkXHJcblx0ICogaW50byBncm91cHMgb2YgY29uc2VjdXRpdmUgbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBhbmQgb2Ygbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcblx0ICogVGhlIGdyb3VwcyBhcmUgYnVpbHQgaW4gYSB3YXkgc28gdGhhdCBpZiBhIG5vZGUgc2hvdWxkIGJlIG1vdmVkLCBpdHMgZW50aXJlIGdyb3VwIGlzIG1vdmVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBidWlsZFN1Yk5vZGVEaXNwb3NpdGlvbnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHJlbmRlciB0aGUgbmV3IGNvbnRlbnQuIFdoZXRoZXIgd2UgdXNlIHRoZSBvbGQgb3IgdGhlIG5ldyBub2RlIGZvciByZW5kZXJpbmcgZGVwZW5kcyBvblxyXG5cdFx0Ly8gc2V2ZXJhbCBmYWN0b3JzXHJcblx0XHQvLyAgLSBpZiBpdCBpcyBhbiBJbnNlcnQgYWN0aW9uLCB0aGVuIHVzZSB0aGUgbmV3IG5vZGUgKG9sZCBub2RlIGlzbid0IGV2ZW4gYXZhaWxhYmxlKS5cclxuXHRcdC8vICAtIGlmIGl0IGlzIGFuIFVwZGF0ZSBvcGVyYXRpb24sIHRoZW4gZm9yIGFsbCB0eXBlcyBvZiBub2RlcyBleGNlcHQgSW5zdGFuY2VWTiwgdXNlXHJcblx0XHQvLyAgICB0aGUgb2xkIG5vZGUuIEZvciBJbnN0YW5jZVZOIHVzZSB0aGUgbmV3IG5vZGUgYmVjYXVzZSB0aGUgb2xkIG5vZGUgaXMgc3RpbGwgcG9pbnRpbmdcclxuXHRcdC8vICAgIHRvIHRoZSBvbGQgY29tcG9uZW50IGluc3RhbmNlLiBXZSBhbHNvIHJlbHkgb24gdGhlIGZhY3QgdGhhdCBmb3IgdGhlIHN0ZW0gbm9kZXMsIHdlXHJcblx0XHQvLyAgICBoYXZlIGJvdGggb2xkIGFuZCBuZXcgbm9kZXMgcG9pbnRpbmcgdG8gdGhlIHNhbWUgbm9kZS5cclxuXHRcdGxldCBuZXdDaGFpbiA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudChcclxuXHRcdFx0XHR0aGlzLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydCB8fCB0aGlzLm9sZFZOLnR5cGUgPT09IFZOVHlwZS5JbnN0YW5jZUNvbXBcclxuXHRcdFx0XHRcdD8gdGhpcy5uZXdWTi5yZW5kZXIoKSA6IHRoaXMub2xkVk4ucmVuZGVyKCkpO1xyXG5cdFx0bGV0IG9sZENoYWluID0gdGhpcy5vbGRWTi5zdWJOb2RlcztcclxuXHRcdGlmICgoIW5ld0NoYWluIHx8IG5ld0NoYWluLmNvdW50ID09PSAwKSAmJiAoIW9sZENoYWluIHx8IG9sZENoYWluLmNvdW50ID09PSAwKSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0ZWxzZSBpZiAoIW5ld0NoYWluIHx8IG5ld0NoYWluLmNvdW50ID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB3ZSBqdXN0IG5lZWQgdG8gZGVsZXRlIGFsbCBvbGQgbm9kZXNcclxuXHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlID0gW107XHJcblx0XHRcdGZvciggbGV0IG9sZFZOID0gb2xkQ2hhaW4uZmlyc3Q7IG9sZFZOICE9PSBudWxsOyBvbGRWTiA9IG9sZFZOLm5leHQpXHJcblx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCFvbGRDaGFpbiB8fCBvbGRDaGFpbi5jb3VudCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gd2UganVzdCBuZWVkIHRvIGluc2VydCBhbGwgbmV3IG5vZGVzXHJcblx0XHRcdHRoaXMuc3ViTm9kZURpc3BzID0gW107XHJcblx0XHRcdGZvciggbGV0IG5ld1ZOID0gbmV3Q2hhaW4uZmlyc3Q7IG5ld1ZOICE9PSBudWxsOyBuZXdWTiA9IG5ld1ZOLm5leHQpXHJcblx0XHRcdFx0dGhpcy5zdWJOb2RlRGlzcHMucHVzaCggbmV3IFZORGlzcCggbmV3Vk4sIFZORGlzcEFjdGlvbi5JbnNlcnQpKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyB3ZSBhcmUgaGVyZSBpZiBib3RoIG9sZCBhbmQgbmV3IGNoYWlucyBjb250YWluIHNvbWUgbm9kZXMuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IG5vZGVzIGFuZCBmaWxsIGFuIGFycmF5IG9mIFZORGlzcCBvYmplY3RzIGluIHRoZSBwYXJlbnQgZGlzcC4gQXQgdGhlIHNhbWVcclxuXHRcdC8vIHRpbWUsIGJ1aWxkIGEgbWFwIHRoYXQgaW5jbHVkZXMgYWxsIG5ldyBub2RlcyB0aGF0IGhhdmUga2V5cy4gVGhlIHZhbHVlcyBhcmUgVk5EaXNwIG9iamVjdHMuXHJcblx0XHR0aGlzLnN1Yk5vZGVEaXNwcyA9IFtdO1xyXG5cdFx0bGV0IG5ld0tleWVkTm9kZU1hcCA9IG5ldyBNYXA8YW55LFZORGlzcD4oKTtcclxuXHRcdGZvciggbGV0IG5ld1ZOID0gbmV3Q2hhaW4uZmlyc3Q7IG5ld1ZOICE9PSBudWxsOyBuZXdWTiA9IG5ld1ZOLm5leHQpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdWJOb2RlRGlzcCA9IG5ldyBWTkRpc3AoIG5ld1ZOKTtcclxuXHRcdFx0dGhpcy5zdWJOb2RlRGlzcHMucHVzaCggc3ViTm9kZURpc3ApO1xyXG5cdFx0XHRpZiAobmV3Vk4ua2V5ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bmV3S2V5ZWROb2RlTWFwLnNldCggbmV3Vk4ua2V5LCBzdWJOb2RlRGlzcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG9sZCBub2RlcyBhbmQgcHV0IHRob3NlIHRoYXQgaGF2ZSBrZXlzIG1hdGNoaW5nIG5ldyBub2RlcyBpbnRvIHRoZSBuZXcgbm9kZXMnIFZORGlzcFxyXG5cdFx0Ly8gb2JqZWN0cy4gUHV0IHRob3NlIHRoYXQgZG9uJ3QgaGF2ZSBrZXlzIG9yIHRoYXQgaGF2ZSBrZXlzIHRoYXQgZG9uJ3QgbWF0Y2ggYW55IG5ldyBub2RlIHRvXHJcblx0XHQvLyBhbiBhcnJheSBvZiBub24tbWF0Y2hpbmcgb2xkIG5vZGVzXHJcblx0XHRsZXQgb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdDogVk5bXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgb2xkVk4gPSBvbGRDaGFpbi5maXJzdDsgb2xkVk4gIT09IG51bGw7IG9sZFZOID0gb2xkVk4ubmV4dClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG9sZFZOLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdG9sZE5vbk1hdGNoaW5nTm9kZUxpc3QucHVzaCggb2xkVk4pO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgc3ViTm9kZURpc3AgPSBuZXdLZXllZE5vZGVNYXAuZ2V0KCBvbGRWTi5rZXkpO1xyXG5cdFx0XHRcdGlmIChzdWJOb2RlRGlzcClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzdWJOb2RlRGlzcC5vbGRWTiA9IG9sZFZOO1xyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVwZGF0ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0b2xkTm9uTWF0Y2hpbmdOb2RlTGlzdC5wdXNoKCBvbGRWTik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBieSBub3cgd2UgaGF2ZSBhbGwgb2xkIGFuZCBuZXcgbm9kZXMgd2l0aCB0aGUgc2FtZSBrZXlzIG1hdGNoZWQgdG8gb25lIGFub3RoZXIuIE5vdyBsb29wXHJcblx0XHQvLyBvdmVyIG5ldyBub2RlIGRpc3Bvc2l0aW9ucyBhbmQgbWF0Y2ggdGhlIG5vdC15ZXQtbWF0Y2hlZCBvbmVzICh0aG9zZSB3aXRoIFVua25vd24gYWN0aW9uKVxyXG5cdFx0Ly8gdG8gb2xkIG5vZGVzIHNlcXVlbnRpYWxseSBmcm9tIHRoZSBsaXN0IG9mIG5vbi1tYXRjaGVkIG9sZCBub2Rlcy5cclxuXHRcdGxldCBvbGROb25NYXRjaGluZ05vZGVMaXN0TGVuZ3RoOiBudW1iZXIgPSBvbGROb25NYXRjaGluZ05vZGVMaXN0Lmxlbmd0aDtcclxuXHRcdGxldCBvbGROb25NYXRjaGluZ05vZGVMaXN0SW5kZXg6IG51bWJlciA9IDA7XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRGlzcCBvZiB0aGlzLnN1Yk5vZGVEaXNwcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHN1Yk5vZGVEaXNwLmFjdGlvbilcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBvbGRWTjogVk47XHJcblx0XHRcdGlmIChvbGROb25NYXRjaGluZ05vZGVMaXN0SW5kZXggPCBvbGROb25NYXRjaGluZ05vZGVMaXN0TGVuZ3RoKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZFZOID0gb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdFtvbGROb25NYXRjaGluZ05vZGVMaXN0SW5kZXhdO1xyXG5cdFx0XHRcdGxldCBuZXdWTiA9IHN1Yk5vZGVEaXNwLm5ld1ZOO1xyXG5cdFx0XHRcdGlmIChvbGRWTi50eXBlID09PSBuZXdWTi50eXBlICYmIG9sZFZOLmlzVXBkYXRlUG9zc2libGUoIG5ld1ZOKSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyB3ZSBhcmUgaGVyZSBpZiB0aGUgbmV3IG5vZGUgY2FuIHVwZGF0ZSB0aGUgb2xkIG9uZVxyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0XHRcdHN1Yk5vZGVEaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyB3ZSBhcmUgaGVyZSBpZiB0aGUgbmV3IG5vZGUgY2Fubm90IHVwZGF0ZSB0aGUgb2xkIG9uZSBhbmQgc2hvdWxkIGNvbXBsZXRlbHlcclxuXHRcdFx0XHRcdC8vIHJlcGxhY2UgaXQuIFdlIGFkZCB0aGUgb2xkIG5vZGUgdG8gdGhlIGxpc3Qgb2YgdGhvc2UgdG8gYmUgcmVtb3ZlZCBhbmQgaW5kaWNhdGVcclxuXHRcdFx0XHRcdC8vIHRoYXQgdGhlIG5ldyBub2RlIHNob3VsZCBiZSBpbnNlcnRlZC5cclxuXHRcdFx0XHRcdGlmICghdGhpcy5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pO1xyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG9sZE5vbk1hdGNoaW5nTm9kZUxpc3RJbmRleCsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHdlIGFyZSBoZXJlIGlmIHRoZXJlIGFyZSBubyBub24tbWF0Y2hlZCBvbGQgbm9kZXMgbGVmdC4gSW5kaWNhdGUgdGhhdCB0aGUgbmV3IG5vZGVcclxuXHRcdFx0XHQvLyBzaG91bGQgYmUgbW91bnRlZC5cclxuXHRcdFx0XHRzdWJOb2RlRGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gb2xkIG5vbi1tYXRjaGVkIG5vZGVzIGZyb20gdGhlIGN1cnJlbnQgaW5kZXggdG8gdGhlIGVuZCBvZiB0aGUgbGlzdCB3aWxsIGJlIHVubW91bnRlZFxyXG5cdFx0aWYgKG9sZE5vbk1hdGNoaW5nTm9kZUxpc3RJbmRleCA8IG9sZE5vbk1hdGNoaW5nTm9kZUxpc3RMZW5ndGgpXHJcblx0XHR7XHJcblx0XHRcdGlmICghdGhpcy5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZSA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yKCBsZXQgaSA9IG9sZE5vbk1hdGNoaW5nTm9kZUxpc3RJbmRleDsgaSA8IG9sZE5vbk1hdGNoaW5nTm9kZUxpc3RMZW5ndGg7IGkrKylcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdFtpXSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc3ViTm9kZURpc3BzLmxlbmd0aCA+IFZORGlzcC5OT19HUk9VUF9USFJFU0hPTEQpXHJcblx0XHRcdHRoaXMuYnVpbGRTdWJOb2RlR3JvdXBzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZyb20gYSBmbGF0IGxpc3Qgb2YgbmV3IHN1Yi1ub2RlcyBidWlsZHMgZ3JvdXBzIG9mIGNvbnNlY3V0aXZlIG5vZGVzIHRoYXQgc2hvdWxkIGJlIGVpdGhlclxyXG5cdCAqIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBidWlsZFN1Yk5vZGVHcm91cHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjb3VudCA9IHRoaXMuc3ViTm9kZURpc3BzLmxlbmd0aDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBpcyBub3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkIGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGxlc3MgdGhlblxyXG5cdFx0XHQvLyB0aGUgcHJlLWRldGVybWluZWQgdGhyZXNob2xkXHJcblx0XHRcdGlmIChjb3VudCA8PSBWTkRpc3AuTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG5cdFx0XHRcdHJldHVybjtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0dGhpcy5zdWJOb2RlR3JvdXBzID0gW107XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHN1Yi1ub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gZGVjaWRlIHdoZXRoZXIgd2UgbmVlZCB0byBvcGVuIGEgbmV3IGdyb3VwXHJcblx0XHQvLyBvciBwdXQgdGhlIGN1cnJlbnQgbm9kZSBpbnRvIHRoZSBleGlzdGluZyBncm91cCBvciBjbG9zZSB0aGUgZXhpc3RpbmcgZ3JvdXAgYW5kIG9wZW5cclxuXHRcdC8vIGEgbmV3IG9uZS5cclxuXHRcdGxldCBncm91cDogVk5EaXNwR3JvdXA7XHJcblx0XHRsZXQgbGFzdERpc3BJbmRleCA9IGNvdW50IC0gMTtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRpc3AgPSB0aGlzLnN1Yk5vZGVEaXNwc1tpXTtcclxuXHRcdFx0aWYgKCFncm91cClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIG9wZW4gYSBuZXcgZ3JvdXBcclxuXHRcdFx0XHRncm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgZGlzcC5hY3Rpb24pO1xyXG5cdFx0XHRcdGdyb3VwLmZpcnN0ID0gaTtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZGlzcC5hY3Rpb24gIT09IGdyb3VwLmFjdGlvbilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBwcmV2aW91cyBpbmRleC4gRGVjcmVtZW50IHRoZSBpdGVyYXRpbmcgaW5kZXggc28gdGhhdFxyXG5cdFx0XHRcdC8vIHRoZSBuZXh0IGl0ZXJhdGlvbiB3aWxsIG9wZW4gYSBuZXcgZ3JvdXAuIE5vdGUgdGhhdCB3ZSBjYW5ub3QgYmUgaGVyZSBmb3IgYSBub2RlXHJcblx0XHRcdFx0Ly8gdGhhdCBzdGFydHMgYSBuZXcgZ3JvdXAgYmVjYXVzZSBmb3Igc3VjaCBub2RlIGRpc3AuYWN0aW9uID09PSBncm91cEFjdGlvbi5cclxuXHRcdFx0XHRncm91cC5sYXN0ID0gLS1pO1xyXG5cdFx0XHRcdGdyb3VwID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGdyb3VwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGFuIFwidXBkYXRlXCIgbm9kZSBpcyBvdXQtb2Ytb3JkZXIgYW5kIHNob3VsZCBjbG9zZSB0aGUgY3VycmVudCBncm91cCBpZiBpdHMgbmV4dFxyXG5cdFx0XHRcdC8vIHNpYmxpbmcgaW4gdGhlIG5ldyBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXh0IHNpYmxpbmcgaW4gdGhlIG9sZCBsaXN0LiBUaGVcclxuXHRcdFx0XHQvLyBsYXN0IG5vZGUgd2lsbCBjbG9zZSB0aGUgbGFzdCBncm91cCBhZnRlciB0aGUgbG9vcC5cclxuXHRcdFx0XHRpZiAoaSAhPT0gbGFzdERpc3BJbmRleCAmJiB0aGlzLnN1Yk5vZGVEaXNwc1tpKzFdLm9sZFZOICE9PSBkaXNwLm9sZFZOLm5leHQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIGN1cnJlbnQgaW5kZXguXHJcblx0XHRcdFx0XHRncm91cC5sYXN0ID0gaTtcclxuXHRcdFx0XHRcdGdyb3VwID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWxsIGNvbnNlY3V0aXZlIFwiaW5zZXJ0XCIgbm9kZXMgYmVsb25nIHRvIHRoZSBzYW1lIGdyb3VwIHNvIHdlIGp1c3Qgd2FpdCBmb3IgdGhlXHJcblx0XHRcdC8vIG5leHQgbm9kZVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNsb3NlIHRoZSBsYXN0IGdyb3VwXHJcblx0XHRncm91cC5sYXN0ID0gY291bnQgLSAxO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lFdmVudFNsb3QsIEV2ZW50U2xvdH0gZnJvbSBcIi4vRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uYWwgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY1Byb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHJlcHJlc2VudGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZ1bmNDb21wVHlwZTxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IChwcm9wczogRnVuY1Byb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KSA9PiBhbnk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHVzZWQgdG8gZGVmaW5lIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbXBQcm9wczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IFJlYWRvbmx5PFRQcm9wcz4gJlxyXG5cdHtcclxuXHRcdHJlYWRvbmx5IGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBkZWZpbmVzIGNvbnN0cnVjdG9yIHNpZ25hdHVyZSBmb3IgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxyXG4gKlx0XHRvZiB0aGlzIHR5cGUuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCBvZiB0aGlzIHR5cGUuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDbGFzczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG57XHJcblx0bmV3KCBwcm9wcz86IFRQcm9wcyk6IElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj47XHJcblx0cmVuZGVyKCk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhbGwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdC8qKiBDb21wb25lbnQgcHJvcGVydGllcyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yICovXHJcblx0cHJvcHM6IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50cyBjYW4gZGVmaW5lIGRpc3BsYXkgbmFtZSBmb3IgdHJhY2luZyBwdXJwb3NlczsgaWYgdGhleSBkb24ndCB0aGUgZGVmYXVsdCBuYW1lXHJcblx0ICogaXMgdGhlIGNvbXBvbmVudCdzIGNsYXNzIGNvbnN0cnVjdG9yIG5hbWUuIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIGJlZm9yZVxyXG5cdCAqIHRoZSB2aXJ0dWFsIG5vZGUgaXMgYXR0YWNoZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRnZXREaXNwbGF5TmFtZT8oKTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIG9yIGNsZWFycyB0aGUgc2l0ZSBvYmplY3QgdG8gdGhlIGNvbXBvbmVudC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHR3aWNlOlxyXG5cdCAqICAxLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWU6IHRoZSBjb21wb25lbnQgbXVzdCByZW1lbWJlciB0aGVcclxuXHQgKiAgICBwYXNzZWQgb2JqZWN0LlxyXG5cdCAqICAyLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQ6IG51bGwgaXMgcGFzc2VkIGFzIGEgcGFyYW1ldGVyIGFuZCB0aGUgY29tcG9uZW50IG11c3RcclxuXHQgKiAgICByZWxlYXNlIHRoZSByZW1lbWJlcmVkIG9iamVjdC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBvcHRpb25hbDsgaG93ZXZlciwgd2l0aG91dCBpbXBsZW1lbnRpbmcgaXQgY29tcG9uZW50cyBjYW5ub3QgdXNlIE1pbWJsXHJcblx0ICogc2VydmljZXMuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHNpdGUgVGhlIHNpdGUgb2JqZWN0IGltcGxlbWVudGluZyB0aGUgSVZub2RlIGludGVyZmFjZS4gVGhlIGNvbXBvbmVudCB1c2VzXHJcblx0ICogdGhpcyBvYmplY3QgdG8gaW52b2tlIGRpZmZlcmVudCBzZXJ2aWNlcyBwcm92aWRlZCBieSB0aGUgTWltYmwgaW5mcmFzdHJ1Y3R1cmU7IGZvciBleGFtcGxlXHJcblx0ICogdG8gcmVxdWVzdCBhIHJlLXJlbmRlcmluZy5cclxuXHQgKi9cclxuXHRzZXRTaXRlPyggc2l0ZTogSVZOb2RlKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHJlbmRlciBpdHMgY29udGVudCBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMgbWV0aG9kXHJcblx0ICogaXMgY2FsbGVkIHdoZW4gdGhlIHNpdGUgaGFzIGFscmVhZHkgYmVlbiBzZXQgc28gdGhlIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlcyBmcm9tIGl0LlxyXG5cdCAqL1xyXG5cdGNvbXBvbmVudFdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgaGFzIGJlZW4gaW5zZXJ0ZWQgaW50byB0aGUgRE9NIHRyZWUuIFRoaXMgbWV0aG9kIGlzXHJcblx0ICogY2FsbGVkIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gaW5zdGFudGlhdGVkIGFuZCB0aGUgaW5pdGlhbCByZW5kZXJpbmcgaGFzIGJlZW4gZG9uZS5cclxuXHQgKi9cclxuXHRjb21wb25lbnREaWRNb3VudD8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogSW5mb3JtcyB0aGUgY29tcG9uZW50IHRoYXQgbmV3IHByb3BlcnRpZXMgaGF2ZSBiZWVuIHNwZWNpZmllZC4gQXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcclxuXHQgKiB0aGlzLnByb3BzIHJlZmVycyB0byB0aGUgXCJvbGRcIiBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnMgdHJ1ZSx0aGVuIGl0cyByZW5kZXJcclxuXHQgKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQuIEF0IHRoYXQgdGltZSx0aGUgb3JpZ2luYWwgcHJvcHMgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBpbnRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIHdpbGwgaGF2ZSB0aGVzZSBuZXcgcHJvcGVydGllcy4gSWYgdGhlIGNvbXBvbmVudCBkb2Vzbid0IGltcGxlbWVudFxyXG5cdCAqIHRoZSBzaG91bGRDb21wb25lbnRVcGRhdGUgbWV0aG9kIGl0IGlzIGFzIHRob3VnaCB0cnVlIGlzIHJldHVybmVkLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnNcclxuXHQgKiBmYWxzZSwgdGhlIHJlbmRlciBtZXRob2QgaXMgbm90IGNhbGxlZCBhbmQgdGhlIERPTSB0cmVlIG9mIHRoZSBjb21wb25lbnQgcmVtYWlucyB1bmNoYW5nZWQuXHJcblx0ICogVGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudCwgaG93ZXZlciwgc3RpbGwgY2hhbmdlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wcyBUaGUgbmV3IHByb3BlcnRpZXMgdGhhdCB0aGUgcGFyZW50IGNvbXBvbmVudCBwcm92aWRlcyB0byB0aGlzIGNvbXBvbmVudC5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIGhhdmUgaXRzIHJlbmRlciBtZXRob2QgY2FsbGVkIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0c2hvdWxkQ29tcG9uZW50VXBkYXRlPyggbmV3UHJvcHM6IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPik6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQncyBjb250ZW50IGhhcyBiZWVuIHVwZGF0ZWQgaW4gdGhlIERPTSB0cmVlLiAqL1xyXG5cdGNvbXBvbmVudERpZFVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50J3MgY29udGVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLiBBZnRlclxyXG5cdCAqIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXHJcblx0ICovXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgYW4gZXhjZXB0aW9uIHRoYXQgb2NjdXJyZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZyBvZlxyXG5cdCAqIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvciBpZiBpdCB0aHJvd3MgYW4gZXJyb3IsIHRoZVxyXG5cdCAqIGVycm9yIHdpbGwgYmUgcHJvcGFnYXRlZCB1cCB0aGUgY2hhaW4gb2YgY29tcG9uZW50cyB1bnRpbCBpdCByZWFjaGVzIGEgY29tcG9uZW50IHRoYXRcclxuXHQgKiBoYW5kbGVzIGl0LiBJZiBub25lIG9mIHRoZSBjb21wb25lbnRzIGNhbiBoYW5kbGUgdGhlIGVycm9yLCB0aGUgZW50aXJlIHRyZWUgd2lsbCBiZVxyXG5cdCAqIHVubW91bnRlZC5cclxuXHQgKiBAcGFyYW0gZXJyIEFuIGV4Y2VwdGlvbiB0aGF0IHdhcyB0aHJvd24gZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZ1xyXG5cdCAqIG9mIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuXHJcblx0ICogQHBhcmFtIHBhdGggQW4gYXJyYXkgb2YgbmFtZXMgb2YgY29tcG9uZW50cyBhbmQgZWxlbWVudHMgZnJvbSB0aGUgbW91bnRlZCByb290IHRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCB0aGF0IHRocmV3IHRoZSBleGNlcHRpb24uIFRoaXMgcGF0aCBpcyBwcm92aWRlZCBtb3N0bHkgZm9yIGRlYnVnZ2luZyBhbmQgdHJhY2luZ1xyXG5cdCAqIHB1cnBvc2VzLlxyXG5cdCAqL1xyXG5cdGhhbmRsZUVycm9yPyggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSB1cGRhdGUgY3ljbGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTY2hlZHVsZWRGdW5jVHlwZSA9ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNlcnZpY2VEZWZpbml0aW9ucyBpbnRlcmZhY2Ugc2VydmVzIGFzIGEgbWFwcGluZyBiZXR3ZWVuIHNlcnZpY2UgbmFtZXMgYW5kIHNlcnZpY2UgdHlwZXMuXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIGludGVuZGVkIHRvIGJlIGF1Z21lbnRlZCBieSBtb2R1bGVzIHRoYXQgZGVmaW5lIGFuZC9vciB1c2Ugc3BlY2lmaWMgc2VydmljZXMuXHJcbiAqIFRoaXMgYWxsb3dzIHBlcmZvcm1pbmcgc2VydmljZSBwdWJsaXNoaW5nIGFuZCBzdWJzY3JpYmluZyBpbiB0eXBlLXNhZmUgbWFubmVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcbntcclxuXHQvKiogQnVpbHQtaW4gZXJyb3IgaGFuZGxpbmcgc2VydmljZS4gKi9cclxuXHRcIlN0ZEVycm9ySGFuZGxpbmdcIjogSUVycm9ySGFuZGxpbmdTZXJ2aWNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBCdWlsdC1pbiBzZXJ2aWNlIGZvciBsYXp5IHBlb3BsZSAtIGNhbiBiZSB1c2VkIGZvciBxdWljayBwcm90b3R5cGVzIHdpdGhvdXQgdGhlIG5lZWQgdG9cclxuXHQgKiBhdWdtZW50IHRoZSBpbnRlcmZhY2UuXHJcblx0ICovXHJcblx0XCJhbnlcIjogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUVycm9ySGFuZGxpbmdTZXJ2aWNlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2VydmljZSB0aGF0IGNhbiBiZSBpbnZva2VkIHdoZW4gYW4gZXJyb3IgLVxyXG4gKiB1c3VhbGx5IGFuIGV4Y2VwdGlvbiAtIGlzIGVuY291bnRlcmVkIGJ1dCBjYW5ub3QgYmUgaGFuZGxlZCBsb2NhbGx5LiBBIGNvbXBvbmVudCB0aGF0IGltcGxlbWVudHNcclxuICogdGhpcyBzZXJ2aWNlIHdvdWxkIG5vcm1hbGx5IHJlbWVtYmVyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byB1cGRhdGUgaXRzZWxmLHNvIHRoYXQgaW4gaXRzXHJcbiAqIHJlbmRlciBtZXRob2QgaXQgd2lsbCBwcmVzZW50IHRoZSBlcnJvciB0byB0aGUgdXNlci5cclxuICpcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpcyBpbXBsZW1lbnRlZCBieSB0aGUgUm9vdCBWaXJ0dWFsIE5vZGUgYXMgYSBsYXN0IHJlc29ydCBmb3IgZXJyb3JcclxuICogaGFuZGxpbmcuIFRoZSBSb290IFZOIHdpbGwgZGlzcGxheSBhIHNpbXBsZSBVSSBzaG93aW5nIHRoZSBlcnJvciBhbmQgd2lsbCBhbGxvdyB0aGUgdXNlciB0b1xyXG4gKiByZXN0YXJ0IC0gaW4gdGhlIGhvcGUgdGhhdCB0aGUgZXJyb3Igd2lsbCBub3QgcmVwZWF0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRyZXBvcnRFcnJvciggZXJyOiBhbnkscGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnRzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhpcyBjbGFzcyBtdXN0IGltcGxlbWVudCB0aGUgcmVuZGVyXHJcbiAqIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+XHJcbntcclxuXHQvKiogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHM/OiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pXHJcblx0e1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblx0fVxyXG5cclxuXHQvKiogU2l0ZSBvYmplY3QgdGhyb3VnaCB3aGljaCBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXMuICovXHJcblx0cHJvdGVjdGVkIHNpdGU6IElWTm9kZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIFNldHMgb3IgY2xlYXJzIHRoZSBzaXRlIG9iamVjdCB0aHJvdWdoIHdoaWNoIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlcy4gKi9cclxuXHRwdWJsaWMgc2V0U2l0ZSggc2l0ZTogSVZOb2RlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuc2l0ZSA9IHNpdGU7XHJcblx0fVxyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0aGF0IHdpbGwgYmUgdWx0aW1hdGVseSBwbGFjZWQgaW50byB0aGUgRE9NIHRyZWUuICovXHJcblx0cHVibGljIGFic3RyYWN0IHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQuICovXHJcblx0cHJvdGVjdGVkIHVwZGF0ZU1lKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zaXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc2l0ZS5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byBpZ25vcmUgYW55IHVwZGF0ZS9kZWxldGUvcmVwbGFjZSByZXF1ZXN0c1xyXG5cdC8vIHRoYXQgaGF2ZSBiZWVuIG1hZGUgYnkgdGhlIGNvbXBvbmVudCBkdXJpbmcgdGhlIGN1cnJlbnQgSmF2YVNjcmlwdCBldmVudCBsb29wLlxyXG5cdHByb3RlY3RlZCBpZ25vcmVNZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2l0ZSAhPT0gbnVsbClcclxuXHRcdFx0dGhpcy5zaXRlLmNhbmNlbFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0LyoqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHRvIHNjaGVkdWxlIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbiB0aGUgbmV4dFxyXG5cdCAqIHVwZGF0ZSBjeWNsZSBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBhcmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWRcclxuXHQgKiBAcGFyYW0gYmVmb3JlVXBkYXRlIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSAodHJ1ZSlcclxuXHQgKiBvciBhZnRlciAoZmFsc2UpIHRoZSB1cGRhdGUgY3ljbGUuXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNpdGUgIT09IG51bGwpXHJcblx0XHRcdHRoaXMuc2l0ZS5zY2hlZHVsZUNhbGwoIGZ1bmMsIGJlZm9yZVVwZGF0ZSk7XHJcblx0fVxyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgdG8gY2FuY2VsIGEgc2NoZWR1bGVkIGZ1bmN0aW9uLiAqL1xyXG5cdHByb3RlY3RlZCBkb250Q2FsbE1lKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2l0ZSAhPT0gbnVsbClcclxuXHRcdFx0dGhpcy5zaXRlLmNhbmNlbFNjaGVkdWxlZENhbGwoIGZ1bmMsIGJlZm9yZVVwZGF0ZSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGV2ZW50IGhhbmRsZXIgdGhhdCBpcyBpbnZva2VkIHdoZW4gcmVmZXJlbmNlIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZGdW5jPFQ+ID0gKG5ld1JlZjogVCkgPT4gdm9pZDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSBjbGFzcyB0byB1c2Ugd2hlbmV2ZXIgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IGlzIG5lZWRlZCAtIGZvciBleGFtcGxlLCB3aXRoIEpTWCBgcmVmYFxyXG4gKiBhdHRyaWJ1dGVzIGFuZCBzZXJ2aWNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWY8VD5cclxue1xyXG5cdHByaXZhdGUgX3I6IFQ7XHJcblxyXG5cdC8qKiBFdmVudCB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHJlZmVyZW5jZWQgdmFsdWUgY2hhbmdlcyAqL1xyXG5cdHB1YmxpYyBjaGFuZ2VkRXZlbnQ6IElFdmVudFNsb3Q8UmVmRnVuYzxUPj4gPSBuZXcgRXZlbnRTbG90PFJlZkZ1bmM8VD4+KCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBsaXN0ZW5lcj86IFJlZkZ1bmM8VD4sIGluaXRpYWxSZWZlcmVuZT86IFQpXHJcblx0e1xyXG5cdFx0aWYgKGxpc3RlbmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuY2hhbmdlZEV2ZW50LmFkZCggbGlzdGVuZXIpO1xyXG5cclxuXHRcdHRoaXMuX3IgPSBpbml0aWFsUmVmZXJlbmU7XHJcblx0fVxyXG5cclxuXHQvKiogQWRkcyBhIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgY2hhbmdlcy4gKi9cclxuXHRwdWJsaWMgYWRkTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmFkZCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJlbW92ZXMgYSBjYWxsYmFjayB0aGF0IHdhcyBhZGRlZCB3aXRoIGFkZExpc3RlbmVyLiAqL1xyXG5cdHB1YmxpYyByZW1vdmVMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQucmVtb3ZlKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogR2V0IGFjY2Vzc29ycyB0byB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIGdldCByKCk6IFQgeyByZXR1cm4gdGhpcy5fcjsgfVxyXG5cclxuXHQvKiogU2V0IGFjY2Vzc29ycyB0byB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIHNldCByKCBuZXdSZWY6IFQpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuX3IgIT09IG5ld1JlZilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fciA9IG5ld1JlZjtcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZmlyZSggbmV3UmVmKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKiBDbGVhcnMgdGhlIHJlZmVyZW5jZSB2YWx1ZSBhbmQgYWxzbyBjbGVhcnMgYWxsIGFsbCByZWdpc3RlcmVkIGxpc3RlbmVycyAqL1xyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5fciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmNsZWFyKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAvL1xyXG4vLyAvLyBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHJlZmVyZW5jZSBwcm9wZXJ0aWVzIHdpdGhvdXQgdGhlIG5lZWQgdG8gbWFudWFsbHkgY3JlYXRlXHJcbi8vIC8vIFJlZjw+IGluc3RhbmNlcy4gVGhpcyBhbGxvd3MgZm9yIHRoZSBmb2xsb3dpbmcgY29kZSBwYXR0ZXJuOlxyXG4vLyAvL1xyXG4vLyAvL1x0Y2xhc3MgQSBleHRlbmRzIENvbXBvbmVudFxyXG4vLyAvL1x0e1xyXG4vLyAvL1x0XHRAcmVmIG15RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuLy8gLy9cdFx0cmVuZGVyKCkgeyByZXR1cm4gPGRpdiByZWY9e215RGl2fT5IZWxsbzwvZGl2PjsgfVxyXG4vLyAvL1x0fVxyXG4vLyAvL1xyXG4vLyAvLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIG15RGl2IHByb3BlcnR5IHdpbGwgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkIHdoZW4gZmlyc3QgYWNjZXNzZWQuIFRoZVxyXG4vLyAvLyBhY3R1YWwgb2JqZWN0IHdpbGwgYmUgYSBQcm94eSB0byBSZWY8PiBvZiB0aGUgZ2l2ZW4gdHlwZSAoSFRNTERpdkVsZW1lbnQgaW4gdGhpcyBjYXNlKS5cclxuLy8gLy9cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiByZWYoIHRhcmdldCwgbmFtZSlcclxuLy8ge1xyXG4vLyBcdGZ1bmN0aW9uIHJlZkdldCggb2JqLCBrZXkpXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWYgKGtleSA9PT0gXCJyXCIpXHJcbi8vIFx0XHRcdHJldHVybiBvYmoucjtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0cmV0dXJuIG9iai5yW2tleV07XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRmdW5jdGlvbiByZWZTZXQoIG9iaiwga2V5LCB2YWwsIHJlY2VpdmVyKTogYm9vbGVhblxyXG4vLyBcdHtcclxuLy8gXHRcdGlmIChrZXkgPT09IFwiclwiKVxyXG4vLyBcdFx0XHRvYmouciA9IHZhbDtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0b2JqLnJba2V5XSA9IHZhbDtcclxuXHJcbi8vIFx0XHRyZXR1cm4gdHJ1ZTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGZ1bmN0aW9uIGVuc3VyZVByb3h5KCB0aGlzT2JqOiBhbnksIGF0dHJOYW1lOiBzdHJpbmcpOiBhbnlcclxuLy8gXHR7XHJcbi8vIFx0XHRsZXQgcHJveHkgPSB0aGlzT2JqW2F0dHJOYW1lXTtcclxuLy8gXHRcdGlmICghcHJveHkpXHJcbi8vIFx0XHR7XHJcbi8vIFx0XHRcdHByb3h5ID0gbmV3IFByb3h5KCBuZXcgUmVmPGFueT4oKSwgeyBnZXQ6IHJlZkdldCwgc2V0OiByZWZTZXQgfSk7XHJcbi8vIFx0XHRcdHRoaXNPYmpbYXR0ck5hbWVdID0gcHJveHk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRyZXR1cm4gcHJveHk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRsZXQgYXR0ck5hbWUgPSBcIl9yZWZfXCIgKyBuYW1lO1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLFxyXG4vLyBcdFx0e1xyXG4vLyBcdFx0XHRzZXQoIHZhbCkgeyBlbnN1cmVQcm94eSggdGhpcywgYXR0ck5hbWUpLnIgPSB2YWw7IH0sXHJcbi8vIFx0XHRcdGdldCgpIHsgcmV0dXJuIGVuc3VyZVByb3h5KCB0aGlzLCBhdHRyTmFtZSk7IH1cclxuLy8gXHRcdH1cclxuLy8gXHQpO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIHJlZiBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gSlNYIGVsZW1lbnRzIGFuZCBjb21wb25lbnRzLiBUaGlzIGNhbiBiZSBlaXRoZXIgdGhlXHJcbiAqIFtbUmVmXV0gY2xhc3Mgb3IgW1tSZWZGdW5jXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZQcm9wVHlwZTxUPiA9IFJlZjxUPiB8IFJlZkZ1bmM8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIHRoYXQgdGFrZXMgY2FyZSBvZiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mXHJcbiAqIHJlZmVyZW5jZXMuIFRoZSBvcHRpb25hbCBgb25seUlmYCBwYXJhbWV0ZXIgbWF5IHNwZWNpZnkgYSB2YWx1ZSBzbyB0aGF0IG9ubHkgaWYgdGhlIHJlZmVyZW5jZVxyXG4gKiBjdXJyZW50bHkgaGFzIHRoZSBzYW1lIHZhbHVlIGl0IHdpbGwgYmUgcmVwbGFjZWQuIFRoaXMgbWlnaHQgYmUgbmVlZGVkIHRvIG5vdCBjbGVhciBhXHJcbiAqIHJlZmVyZW5jZSBpZiBpdCBhbHJlYWR5IHBvaW50cyB0byBhIGRpZmZlcmVudCBvYmplY3QuXHJcbiAqIEBwYXJhbSByZWYgW1tSZWZdXSBvYmplY3QgdG8gd2hpY2ggdGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldFxyXG4gKiBAcGFyYW0gdmFsIFJlZmVyZW5jZSB2YWx1ZSB0byBzZXQgdG8gdGhlIFJlZiBvYmplY3RcclxuICogQHBhcmFtIG9ubHlJZiBBbiBvcHRpb25hbCB2YWx1ZSB0byB3aGljaCB0byBjb21wYXJlIHRoZSBjdXJyZW50IChvbGQpIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UuXHJcbiAqIFRoZSBuZXcgdmFsdWUgd2lsbCBiZSBzZXQgb25seSBpZiB0aGUgb2xkIHZhbHVlIGVxdWFscyB0aGUgYG9ubHlJZmAgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmPFQ+KCByZWY6IFJlZlByb3BUeXBlPFQ+LCB2YWw6IFQsIG9ubHlJZj86IFQpOiB2b2lkXHJcbntcclxuXHRpZiAodHlwZW9mIHJlZiA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRsZXQgcmVmT2JqID0gcmVmIGFzIFJlZjxUPjtcclxuXHRcdGlmIChvbmx5SWYgPT09IHVuZGVmaW5lZCB8fCByZWZPYmouciA9PT0gb25seUlmKVxyXG5cdFx0XHRyZWZPYmouciA9IHZhbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0KHJlZiBhcyBSZWZGdW5jPFQ+KSh2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIHByb3BlcnRpZXMgd2l0aCBhIHNldCBtZXRob2QgdGhhdCBjYWxscyB0aGUgdXBkYXRlTWUgbWV0aG9kXHJcbiAqIHdoZW5ldmVyIHRoZSBwcm9wZXJ0eSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKlxyXG4gKlx0YGBgdHN4XHJcbiAqXHRjbGFzcyBDaGlsZCBleHRlbmRzIENvbXBvbmVudFxyXG4gKlx0e1xyXG4gKlx0XHRAbWltLnByb3AgdGV4dDogc3RyaW5nID0gXCJIZWxsbyFcIjtcclxuICpcdFx0cmVuZGVyKClcclxuICpcdFx0e1xyXG4gKlx0IFx0XHRyZXR1cm4gPGRpdj57dGV4dH08L2Rpdj5cclxuICpcdFx0fVxyXG4gICpcdH1cclxuKlxyXG4gKlx0Y2xhc3MgUGFyZW50IGV4dGVuZHMgQ29tcG9uZW50XHJcbiAqXHR7XHJcbiAqXHRcdGNoaWxkID0gbmV3IENoaWxkKCk7XHJcbiAqXHRcdHJlbmRlcigpXHJcbiAqXHRcdHtcclxuICpcdFx0XHRyZXR1cm4gPGRpdiBjbGljaz17KCkgPT4gdGhpcy5jaGlsZC50ZXh0ICs9IFwiIGFnYWluXCJ9Pnt0aGlzLmNoaWxkfTwvZGl2PlxyXG4gKlx0XHR9XHJcbiAqXHR9XHJcbiAqXHRgYGBcclxuICpcclxuICogSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSBDaGlsZCBjb21wb25lbnQgd2lsbCBiZSByZS1yZW5kZXJlZCB3aGVuIGl0cyBgdGV4dGAgcHJvcGVydHkgY2hhbmdlcy5cclxuICogVGhlIFBhcmVudCBjb21wb25lbnQgYXBwZW5kcyB0aGUgd29yZCBcImFnYWluXCIgdG8gdGhlIENoaWxkIGNvbXBvbmVudCdzIHRleHQgd2hlbmV2ZXIgdGhlIHVzZXJcclxuICogY2xpY2tzIG9uIGl0LlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0gbmFtZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9wKCB0YXJnZXQsIG5hbWU6IHN0cmluZylcclxue1xyXG5cdGxldCBhdHRyTmFtZSA9IFwiX21fXCIgKyBuYW1lO1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLFxyXG5cdFx0e1xyXG5cdFx0XHRzZXQoIHZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdmFsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXNbYXR0ck5hbWVdID0gdmFsO1xyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0KCkgeyByZXR1cm4gdGhpc1thdHRyTmFtZV07IH1cclxuXHRcdH1cclxuXHQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBbiBhcnRpZmljaWFsIFwiRnJhZ21lbnRcIiBjb21wb25lbnQgdGhhdCBpcyBvbmx5IHVzZWQgYXMgYSB0ZW1wb3JhcnkgY29sbGVjdGlvbiBvZiBvdGhlciBpdGVtc1xyXG4gKiBpbiBwbGFjZXMgd2hlcmUgSlNYIG9ubHkgYWxsb3dzIGEgc2luZ2xlIGl0ZW0uIE91ciBKU1ggZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVzIGEgdmlydHVhbCBub2RlXHJcbiAqIGZvciBlYWNoIG9mIGl0cyBjaGlsZHJlbiB0aGUgZnVuY3Rpb24gaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkLiBUaGlzIGNvbXBvbmVudCBpcyBvbmx5IG5lZWRlZFxyXG4gKiBiZWNhdXNlIGN1cnJlbnRseSBUeXBlU2NyaXB0IGRvZXNuJ3QgYWxsb3cgdGhlIDw+IGZyYWdtZW50IG5vdGF0aW9uIGlmIGEgY3VzdG9tIEpTWCBmYWN0b3J5XHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQuXHJcbiAqXHJcbiAqIFVzZSBpdCBhcyBmb2xsb3dzOlxyXG4gKiBgYGB0c3hcclxuICpcdGltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG4gKlx0Li4uLi5cclxuICpcdHJlbmRlcigpXHJcbiAqXHR7XHJcbiAqXHRcdHJldHVybiA8bWltLkZyYWdtZW50PlxyXG4gKlx0XHRcdDxkaXYxLz5cclxuICpcdFx0XHQ8ZGl2Mi8+XHJcbiAqXHRcdFx0PGRpdjMvPlxyXG4gKlx0XHQ8L21pbS5GcmFnbWVudD5cclxuICpcdH1cclxuICBgYGBcclxuXHJcbiAqIEBwYXJhbSBwcm9wcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudCggcHJvcHM6IENvbXBQcm9wczx7fT4pOiBhbnkge31cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBhYmlsaXR5IHRvIGhhbmRsZSBjdXN0b20gcHJvcGVydGllcyB0aGF0IGNhblxyXG4gKiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPlxyXG57XHJcblx0aW5pdGlhbGl6ZSggZWxtVk46IElFbG1WTiwgcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogVCk6IHZvaWQ7XHJcblx0dGVybWluYXRlKCk6IHZvaWQ7XHJcblx0dXBkYXRlKCBvbGRQcm9wVmFsOiBULCBuZXdQcm9wVmFsOiBUKTogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlRmFjdG9yeSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBhYmlsaXR5IHRvIGNyZWF0ZSBvYmplY3RzIGZvciBoYW5kbGluZ1xyXG4gKiBjdXN0b20gcHJvcGVydGllcyB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlRmFjdG9yeTxUPlxyXG57XHJcblx0Y3JlYXRlSGFuZGxlciggcHJvcE5hbWU6IHN0cmluZyk6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgY3VzdG9tIGF0dHJpYnV0ZSBmYWN0b3J5IGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cclxuICogQHBhcmFtIHByb3BOYW1lIG5hbWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuICogQHBhcmFtIGZhY3RvcnkgY3VzdG9tIHByb3BlcnR5IGZhY3RvcnlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckN1c3RvbUF0dHJpYnV0ZTxUPiggcHJvcE5hbWU6IHN0cmluZywgZmFjdG9yeTogSUN1c3RvbUF0dHJpYnV0ZUZhY3Rvcnk8VD4pOiB2b2lkXHJcbntcclxuXHRzX3JlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlKCBwcm9wTmFtZSwgZmFjdG9yeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IHdyYXBzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBjb250ZW50LiBQcm94aWVzIGNhbiB3cmFwIGluc3RhbmNlXHJcbiAqIG1ldGhvZHMgb2YgY2xhc3NlcyB0aGF0IGhhdmUgYWNjZXNzIHRvIFwidGhpc1wiIHRodXMgYWxsb3dpbmcgYSBzaW5nbGUgY2xhc3MgdG8gXCJob3N0XCIgbXVsdGlwbGVcclxuICogY29tcG9uZW50cyB0aGF0IGNhbiBiZSB1cGRhdGVkIHNlcGFyYXRlbHkuIFRoaXMgaXMgZXNwZWNpYWxseSB1c2VmdWwgd2hlbiB0aGVyZSBpcyBhIGhpZXJhcmNoeVxyXG4gKiBvZiBkZXJpdmVkIGNsYXNzZXMgYW5kICh2aXJ0dWFsKSBtZXRob2RzIHRoYXQgZGVsaXZlciBzZXZlcmFsIHBpZWNlcyBvZiBjb250ZW50LiBGdW5jUHJveGllc1xyXG4gKiBjYW4gd3JhcCB0aGVzZSB2aXJ0dWFsIG1ldGhvZHMgKG9yIG90aGVyIG1ldGhvZHMgdGhhdCBjYWxsIHRoZW0pIHNvIHRoYXQgdGhlIGNvbnRlbnQgcGllY2VzXHJcbiAqIGNhbiBiZSB1cGRhdGVkIHNlcGFyYXRlbHkuIEZ1bmNQcm94eSBoYXMgYSBwdWJsaWMgVXBkYXRlIG1ldGhvZCB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gY2F1c2VcclxuICogdGhlIHJlbmRlcmluZyBtZWNoYW5pc20gdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3cmFwcGVkIGJ5IHRoZSBGdW5jUHJveHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1Byb3h5IGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuXHRjb25zdHJ1Y3RvciggZnVuYzogKCkgPT4gYW55KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5mdW5jID0gZnVuYztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGUgPSAoKTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNpdGUpXHJcblx0XHRcdHRoaXMuc2l0ZS5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGZ1bmM6ICgpID0+IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFdhaXRpbmcgY29tcG9uZW50IHdyYXBzIGEgUHJvbWlzZSBhbmQgcmVwbGFjZXMgaXRzIGNvbnRlbnQgd2hlbiB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkLlxyXG4gKiBCZWZvcmUgdGhlIHByb21pc2UgaXMgc2V0dGxlZCwgdGhlIGNvbXBvbmVudCBkaXNwbGF5cyBhbiBvcHRpb25hbCBcImluLXByb2dyZXNzXCIgY29udGVudFxyXG4gKiBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLiBJZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCwgdGhlIGNvbXBvbmVudCB3aWxsIGVpdGhlciBkaXNwbGF5XHJcbiAqIHRoZSBcImVycm9yXCIgY29udGVudCBvYnRhaW5lZCBieSBjYWxsaW5nIGEgZnVuY3Rpb25zIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3Igb3IgaWYgc3VjaFxyXG4gKiBmdW5jdGlvbiBpcyBub3Qgc3BlY2lmaWVkIHNob3cgZW1wdHkgY29udGVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBXYWl0aW5nIGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIHRoZSBvYmplY3RcclxuXHQgKiBAcGFyYW0gcHJvbWlzZSBQcm9taXNlIG9iamVjdCB0byB3YWl0IGZvclxyXG5cdCAqIEBwYXJhbSBwcm9ncmVzc0NvbnRlbnQgQ29udGVudCB0byBkaXNwbGF5IHdoaWxlIHdhaXRpbmcgZm9yIHRoZSBwcm9taXNlXHJcblx0ICogQHBhcmFtIGVycm9yQ29udGVudEZ1bmMgQ29udGVudCB0byBkaXNwbGF5IGlmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoIHByb21pc2U6IFByb21pc2U8YW55PiwgcHJvZ3Jlc3NDb250ZW50PzogYW55LCBlcnJvckNvbnRlbnRGdW5jPzogKGVycjogYW55KSA9PiBhbnkpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmNvbnRlbnQgPSBwcm9ncmVzc0NvbnRlbnQ7XHJcblxyXG5cdFx0dGhpcy53YXRjaFByb21pc2UoIHByb21pc2UsIGVycm9yQ29udGVudEZ1bmMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhc3luYyB3YXRjaFByb21pc2UocHJvbWlzZTogUHJvbWlzZTxhbnk+LGVycm9yQ29udGVudEZ1bmM/OiAoZXJyOiBhbnkpID0+IGFueSk6IFByb21pc2U8YW55PlxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBhd2FpdCBwcm9taXNlO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gbnVsbDtcclxuXHRcdFx0aWYgKGVycm9yQ29udGVudEZ1bmMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRyeVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuY29udGVudCA9IGVycm9yQ29udGVudEZ1bmMoIGVycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKGFub3RoZXJFcnIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjb250ZW50OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIERlZmluZXMgdHlwZXMgb2YgdmlydHVhbCBET00gbm9kZXMgKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gVk5UeXBlXHJcbntcclxuXHQvLyBUb3AtbGV2ZWwgbm9kZVxyXG5cdFJvb3QsXHJcblxyXG5cdC8vIENsYXNzLWJhc2VkIChzdGF0ZS1mdWxsKSBjb21wb25lbnQgY3JlYXRlZCB2aWEgbmV3XHJcblx0SW5zdGFuY2VDb21wLFxyXG5cclxuXHQvLyBDbGFzcy1iYXNlZCAoc3RhdGUtZnVsbCkgSlNYLWJhc2VkIGNvbXBvbmVudCBsYWlkIG91dCB1c2luZyBKU1hcclxuXHRDbGFzc0NvbXAsXHJcblxyXG5cdC8vIFN0YXRlbGVzcyBjb21wb25lbnQgKHNpbXBsZSByZW5kZXJpbmcgZnVuY3Rpb24gYWNjZXB0aW5nIHByb3BzKVxyXG5cdEZ1bmNDb21wLFxyXG5cclxuXHQvLyBET00gZWxlbWVudCAoSFRNTCBvciBTVkcpIGxhaWQgb3V0IHVzaW5nIEpTWC5cclxuXHRFbG0sXHJcblxyXG5cdC8vIFRleHQgbm9kZVxyXG5cdFRleHQsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVk5DaGFpbiBpbnRlcmZhY2UgcmVwcmVzZW50IGEgZG91Ymx5LWxpbmtlZCBsaXN0IG9mIHZpcnR1YWwgbm9kZXMuIFRoaXMgaXMgdGhlIG9iamVjdFxyXG4gKiB0aGF0IGlzIHJldHVybmVkIGZyb20gdGhlIEpTWCBwcm9jZXNzaW5nIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVk5DaGFpblxyXG57XHJcblx0LyoqIEZpcnN0IG5vZGUgaW4gdGhlIGNoYWluLiAqL1xyXG5cdHJlYWRvbmx5IEZpcnN0OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBMYXN0IG5vZGUgaW4gdGhlIGNoYWluLiAqL1xyXG5cdHJlYWRvbmx5IExhc3Q6IElWTm9kZTtcclxuXHJcblx0LyoqIE51bWJlciBvZiBub2RlcyBpbiB0aGUgY2hhaW4uICovXHJcblx0cmVhZG9ubHkgQ291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWTm9kZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZS4gVGhyb3VnaCB0aGlzIGludGVyZmFjZSwgY2FsbGVycyBjYW4gcGVyZm9ybVxyXG4gKiBtb3N0IGNvbW1vbiBhY3Rpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSBvbiBldmVyeSB0eXBlIG9mIHZpcnR1YWwgbm9kZS4gRWFjaCB0eXBlIG9mIHZpcnR1YWwgbm9kZVxyXG4gKiBhbHNvIGltcGxlbWVudHMgYSBtb3JlIHNwZWNpZmljIGludGVyZmFjZSB0aHJvdWdoIHdoaWNoIHRoZSBzcGVjaWZpYyBjYXBhYmlsaXRpZXMgb2YgdGhlIG5vZGVcclxuICogdHlwZSBhcmUgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIG5vZGUgdHlwZS4gKi9cclxuXHRyZWFkb25seSBUeXBlOiBWTlR5cGU7XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuICovXHJcblx0cmVhZG9ubHkgUGFyZW50OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBuZXh0IHNpYmxpbmcuICovXHJcblx0cmVhZG9ubHkgTmV4dDogSVZOb2RlO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgcHJldmlvdXMgc2libGluZy4gKi9cclxuXHRyZWFkb25seSBQcmV2OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRyZWFkb25seSBTdWJOb2RlczogSVZOQ2hhaW47XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBkaXNwbGF5IG5hbWUuICovXHJcblx0cmVhZG9ubHkgTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgd2hlbiBpdCBuZWVkcyB0byBiZSB1cGRhdGVkLiAqL1xyXG5cdHJlcXVlc3RVcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgd2hlbiBpdCBkZWNpZGVzIHRvIGNhbmNlbCBhIHByZXZpb3VzbHkgcmVxdWVzdGVkXHJcblx0ICogdXBkYXRlIHJlcXVlc3QuXHJcblx0ICovXHJcblx0Y2FuY2VsVXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHNcclxuXHQgKiBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgdXBkYXRlIGN5Y2xlLlxyXG5cdCAqIEBwYXJhbSBiZWZvcmVVcGRhdGUgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlICh0cnVlKVxyXG5cdCAqIG9yIGFmdGVyIChmYWxzZSkgdGhlIHVwZGF0ZSBjeWNsZS5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGwoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBDYW5jZWxzIGEgY2FsbCB0aGF0IGhhcyBiZWVuIHNjaGVkdWxlZCB0byBiZSBtYWRlIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWRcclxuXHQgKiBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRoYXQgd2FzIHByZXZpb3VzbHkgcGFzc2VkIHRvIHRoZSBzY2hlZHVsZUNhbGwgbWV0aG9kLlxyXG5cdCAqIEBwYXJhbSBiZWZvcmVVcGRhdGUgRmxhZyB0aGF0IHdhcyBwYXNzZWQgdG8gdGhlIHNjaGVkdWxlQ2FsbCBtZXRob2QuXHJcblx0ICovXHJcblx0Y2FuY2VsU2NoZWR1bGVkQ2FsbCggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0ICogY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNlcnZpY2U6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10pOiB2b2lkO1xyXG5cclxuXHQvKiogVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiAqL1xyXG5cdHVucHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN1YnNjcmliZXMgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0ICogYnkgdGhpcyBvciBvbmUgb2YgdGhlIGFuY2VzdG9yIGNvbXBvbmVudHMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDtcclxuXHQgKiBvdGhlcndpc2UsIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW5cclxuXHQgKiB1bmRlZmluZWQuIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgdGhpcyBvciBhIGNsb3Nlc3RcclxuXHQgKiBhbmNlc3RvciBjb21wb25lbnQgaXMgY2hhbmdlZCx0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHQgKiBUaGUgdXNlU2VsZiBvcHRpb25hbCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjb21wb25lbnQgY2FuIHN1YnNjcmliZSB0byB0aGVcclxuXHQgKiBzZXJ2aWNlIHB1Ymxpc2hlZCBieSBpdHNlbGYuIFRoZSBkZWZhdWx0IGlzIGZhbHNlLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKiBAcGFyYW0gcmVmIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRzdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHJlZjogUmVmUHJvcFR5cGU8SVNlcnZpY2VEZWZpbml0aW9uc1tLXT4sXHJcblx0XHRcdFx0XHRkZWZhdWx0U2VydmljZT86IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10sIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVW5zdWJzY3JpYmVzIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBUaGUgUmVmIG9iamVjdCB0aGF0IHdhcyB1c2VkIHRvIHN1YnNjcmliZVxyXG5cdCAqIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICovXHJcblx0dW5zdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQgKiBjb21wb25lbnQgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0ICogdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRnZXRTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSxcclxuXHRcdFx0XHRcdHVzZVNlbGY/OiBib29sZWFuKTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXTtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibGUgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzIHRvXHJcblx0ICogaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYnkgdGhlIGNvZGUgdGhhdCBpcyBub3QgcGFydCBvZiBhbnkgY29tcG9uZW50IGJ1dCBzdGlsbCBoYXMgYWNjZXNzXHJcblx0ICogdG8gdGhlIElWTm9kZSBvYmplY3Q7IGZvciBleGFtcGxlLCBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhlXHJcblx0ICogbWltLkNvbXBvbmVudCBjbGFzcyBzaG91bGQgdXNlIHRoZSB3cmFwQ2FsbGJhY2sgbWV0aG9kIG9mIHRoZSBtaW0uQ29tcG9uZW50IGNsYXNzLlxyXG5cdCAqIFxyXG5cdCAqIFVzZSB0aGlzIG1ldGhvZCBiZWZvcmUgcGFzc2luZyBjYWxsYmFja3MgdG8gZG9jdW1lbnQgYW5kIHdpbmRvdyBldmVudCBoYW5kbGVycyBhcyB3ZWxsIGFzXHJcblx0ICogbm9uLURPTSBvYmplY3RzIHRoYXQgdXNlIGNhbGxiYWNrcywgZS5nLiBwcm9taXNlcy4gRm9yIGV4YW1wbGU6XHJcblx0ICogXHJcblx0ICogYGBgdHlwZXNjcmlwdFxyXG5cdCAqXHRjbGFzcyBBZGRzXHJcblx0ICpcdHtcclxuXHQgKlx0XHRwcml2YXRlIG9uV2luZG93UmVzaXplID0gKCBlOiBFdmVudCk6IHZvaWQgPT4ge307XHJcblx0ICpcclxuXHQgKiBcdFx0d3JhcHBlcjogKGU6IEV2ZW50KTogdm9pZDtcclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0YXJ0UmVzaXplTW9uaXRvcmluZyggdm46IElWTm9kZSlcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB2bi53cmFwQ2FsbGJhY2soIHRoaXMub25XaW5kb3dSZXNpemUpO1xyXG5cdCAqXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0fVxyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RvcFJlc2l6ZU1vbml0b3JpbmcoKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xyXG5cdCAqXHRcdH1cclxuXHQgKlx0fVxyXG5cdCAqIGBgYFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkXHJcblx0ICogQHJldHVybnMgRnVuY3Rpb24gdGhhdCBoYXMgdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgdGhhdCBzaG91bGQgYmUgdXNlZFxyXG5cdCAqICAgICBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFja1xyXG5cdCAqL1xyXG5cdHdyYXBDYWxsYmFjazxUPiggY2FsbGJhY2s6IFQpOiBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUluc3RhbmNlVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgY29tcG9uZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJSW5zdGFuY2VWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBpbnN0YW5jZS4gKi9cclxuXHRyZWFkb25seSBDb21wOiBJQ29tcG9uZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNsYXNzVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgSlNYLWJhc2VkIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgY2xhc3MuICovXHJcblx0cmVhZG9ubHkgQ29tcENsYXNzOiBJQ29tcG9uZW50Q2xhc3M7XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgaW5zdGFuY2UuICovXHJcblx0cmVhZG9ubHkgQ29tcDogSUNvbXBvbmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogIFRoZSBJRWxtVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgRE9NIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbG1WTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGVsZW1lbnQgbmFtZS4gKi9cclxuXHRyZWFkb25seSBFbG1OYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGVsZW1lbnQgaXMgYW4gU1ZHIChhcyBvcHBvc2VkIHRvIEhUTUwpLiAqL1xyXG5cdHJlYWRvbmx5IElzU3ZnOiBib29sZWFuO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgZWxlbWVudCBpbnN0YW5jZS4gKi9cclxuXHRyZWFkb25seSBFbG06IEVsZW1lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVGV4dFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIHRleHQgRE9NIG5vZGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0Vk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBUZXh0IG9mIHRoZSBub2RlLiAqL1xyXG5cdFRleHQ6IHN0cmluZztcclxuXHJcblx0LyoqIFRleHQgRE9NIG5vZGUuICovXHJcblx0VGV4dE5vZGU6IFRleHQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBTdHlsZXNcclxuICovXHJcbmV4cG9ydCB0eXBlIFN0eWxlUHJvcFR5cGUgPSBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3IgRE9NIGV2ZW50cyBvZiB0eXBlIFQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSAoZTogVCkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50XHJcbiAqIGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRGbGFnVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFVuaW9uIHR5cGUgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFuIEVsZW1lbnQncyBldmVudC4gSXQgaXMgZWl0aGVyIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25cclxuICogb3IgYSB0dXBsZSBjb25zaXN0aW5nIG9mIHRoZSBoYW5kbGVyIGZ1bmN0aW9uIGFuZCB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50XHJcbiAqIGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudFByb3BUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBFdmVudEZ1bmNUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kRmxhZ1R5cGU8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbW1vblByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSlNYIGVsZW1lbnRzIC1cclxuICogaW50cmluc2ljIChIVE1MIGFuZCBTVkcpIGFzIHdlbGwgYXMgZnVuY3Rpb25hbCBhbmQgY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogVW5pcXVlIGtleSB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhpcyBKU1ggZWxlbWVudCBmcm9tIGl0cyBzaWJsaW5ncy4gVGhlIGtleSBjYW4gYmUgb2YgYW55IHR5cGUuICovXHJcblx0a2V5PzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBwcm9wZXJ0eSB0eXBlcyB1c2VkIGJ5IEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgdHlwZSBDb2xvclByb3BUeXBlID0gc3RyaW5nO1xyXG5leHBvcnQgdHlwZSBDcm9zc29yaWdpblByb3BUeXBlID0gXCJhbm9ueW1vdXNcIiB8IFwidXNlLWNyZWRlbnRpYWxzXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1lbmN0eXBlUHJvcFR5cGUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIHwgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfCBcInRleHQvcGxhaW5cIjtcclxuZXhwb3J0IHR5cGUgRm9ybW1ldGhvZFByb3BUeXBlID0gXCJnZXRcIiB8IFwicG9zdFwiIHwgXCJkaWFsb2dcIjtcclxuZXhwb3J0IHR5cGUgRm9ybXRhcmdldFByb3BUeXBlID0gc3RyaW5nIHwgXCJfc2VsZlwiIHwgXCJfYmxhbmtcIiB8IFwiX3BhcmVudFwifCBcIl90b3BcIjtcclxuZXhwb3J0IHR5cGUgUmVmZXJyZXJQb2xpY3lQcm9wVHlwZSA9IFwibm8tcmVmZXJyZXJcIiB8IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIiB8IFwib3JpZ2luXCIgfFxyXG5cdFx0XCJvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiB8IFwidW5zYWZlLXVybFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRWxlbWVudFByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgKGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycylcclxuICogdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudFByb3BzPFRSZWYsVENoaWxkcmVuID0gYW55PiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0Ly9cclxuXHQvKiogUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBlbGVtZW50IGFmdGVyIGl0IGlzIGNyZWF0ZWQgKG1vdW50ZWQpLiBUaGVcclxuXHQgKiByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHQgKi9cclxuXHRyZWY/OiBSZWZQcm9wVHlwZTxUUmVmPjtcclxuXHJcblx0LyoqIENoaWxkcmVuIHRoYXQgY2FuIGJlIHN1cHBsaWVkIHRvIHRoZSBlbGVtZW50ICovXHJcblx0Y2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblxyXG5cdGNsYXNzPzogc3RyaW5nXHJcblx0ZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuXHRkcm9wem9uZSA/OiBcImNvcHlcIiB8IFwibW92ZVwiIHwgXCJsaW5rXCI7XHJcblx0aWQ/OiBzdHJpbmcgfCBudW1iZXI7XHJcblx0bGFuZz86IHN0cmluZztcclxuXHRyb2xlPzogc3RyaW5nO1xyXG5cdHN0eWxlPzogU3R5bGVQcm9wVHlwZTtcclxuXHR0YWJpbmRleD86IG51bWJlcjtcclxuXHJcblx0Ly8gZ2xvYmFsIGV2ZW50c1xyXG5cdGFib3J0PzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRhbmltYXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25pdGVyYXRpb24/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGF1eGNsaWNrPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Ymx1cj86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Y2FuY2VsPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2FucGxheT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXl0aHJvdWdoPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2xpY2s/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGNsb3NlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y29udGV4dG1lbnU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGN1ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGRibGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRkdXJhdGlvbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVtcHRpZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbmRlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVycm9yPzogRXZlbnRQcm9wVHlwZTxFcnJvckV2ZW50PjtcclxuXHRmb2N1cz86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Z290cG9pbnRlcmNhcHR1cmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0aW5wdXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRpbnZhbGlkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0a2V5ZG93bj86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0a2V5cHJlc3M/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXVwPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRsb2FkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVkZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZG1ldGFkYXRhPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVuZD86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0bG9hZHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9zdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdG1vdXNlZG93bj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VlbnRlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VsZWF2ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2Vtb3ZlPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW91dD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdmVyPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZXVwPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRwYXVzZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cG9pbnRlcmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZG93bj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZW50ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmxlYXZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJtb3ZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdXQ/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm92ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcnVwPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHByb2dyZXNzPzogRXZlbnRQcm9wVHlwZTxQcm9ncmVzc0V2ZW50PjtcclxuXHRyYXRlY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzZXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRyZXNpemU/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHNjcm9sbD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbj86IEV2ZW50UHJvcFR5cGU8U2VjdXJpdHlQb2xpY3lWaW9sYXRpb25FdmVudD47XHJcblx0c2Vla2VkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c2Vla2luZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlbGVjdD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0c3RhbGxlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1Ym1pdD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1c3BlbmQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0aW1ldXBkYXRlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG9nZ2xlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG91Y2hjYW5jZWw/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoZW5kPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVudGVyPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGxlYXZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaG1vdmU/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbmVuZD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9ucnVuPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR2b2x1bWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR3YWl0aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2hlZWw/OiBFdmVudFByb3BUeXBlPFdoZWVsRXZlbnQ+O1xyXG5cclxuXHQvLyBFbGVtZW50J3MgZXZlbnRzXHJcblx0ZnVsbHNjcmVlbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGZ1bGxzY3JlZW5lcnJvcj86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cclxuXHQvLyBEb2N1bWVudCdzIGFuZCBFbGVtZW50J3MgZXZlbnRzXHJcblx0Y29weT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdGN1dD86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdHBhc3RlPzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgb25lIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBTVkcgc3BlYzsgdGhhdCBpcywgPHN2Zz5cclxuICogb3IgYW55IG90aGVyIGZyb20gU1ZHLlxyXG4gKiBAcGFyYW0gZWxtIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCJvd25lclNWR0VsZW1lbnRcIiBpbiAoZWxtIGFzIGFueSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB0aGUgPHN2Zz4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSAgRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmdTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAoZWxtIGFzIGFueSkub3duZXJTVkdFbGVtZW50ID09PSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBKU1ggbmFtZXNwYWNlIGRlZmluaW5nIGhvdyBUeXBlU2NyaXB0IHBlcmZvcm1zIHR5cGUgY2hlY2tzIG9uIEpTWCBlbGVtZW50cyxjb21wb25lbnRzXHJcbi8vIHByb3BlcnRpZXMgYW5kIGNoaWxkcmVuLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi9IdG1sVHlwZXNcIjtcclxuaW1wb3J0ICogYXMgc3ZnIGZyb20gXCIuL1N2Z1R5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBOYW1lc3BhY2UgZGVmaW5pbmcgaW50ZXJmYWNlcyB1c2VkIGJ5IFR5cGVTY3JpcHQgdG8gdHlwZS1jaGVjayBKU1ggZXhwcmVzc2lvbnMuXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIEpTWFxyXG57XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudCBleHRlbmRzIElWTkNoYWluIHt9XHJcblxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDbGFzcyBleHRlbmRzIElDb21wb25lbnQge31cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50QXR0cmlidXRlc1Byb3BlcnR5IHsgcHJvcHM6IHt9IH1cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q2hpbGRyZW5BdHRyaWJ1dGUgeyBjaGlsZHJlbjogYW55IH1cclxuXHRcclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0VsZW1lbnRzXHJcblx0e1xyXG5cdFx0Ly8gSFRNTCBlbGVtZW50c1xyXG5cdFx0YTogaHRtbC5JSHRtbEFFbGVtZW50UHJvcHM7XHJcblx0XHRhYmJyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YWNyb255bTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFkZHJlc3M6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhcHBsZXQ6IGh0bWwuSUh0bWxBcHBsZXRFbGVtZW50UHJvcHM7XHJcblx0XHRhcmVhOiBodG1sLklIdG1sQXJlYUVsZW1lbnRQcm9wcztcclxuXHRcdGFydGljbGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhc2lkZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGF1ZGlvOiBodG1sLklIdG1sQXVkaW9FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0YjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJhc2U6IGh0bWwuSUh0bWxCYXNlRWxlbWVudFByb3BzO1xyXG5cdFx0YmFzZWZvbnQ6IGh0bWwuSUh0bWxCYXNlZm9udEVsZW1lbnRQcm9wcztcclxuXHRcdGJkaTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJkbzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJpZzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJsb2NrcXVvdGU6IGh0bWwuSUh0bWxCbG9ja3F1b3RlRWxlbWVudFByb3BzO1xyXG5cdFx0Ym9keTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJyOiBodG1sLklIdG1sQnJFbGVtZW50UHJvcHM7XHJcblx0XHRidXR0b246IGh0bWwuSUh0bWxCdXR0b25FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Y2FudmFzOiBodG1sLklIdG1sQ2FudmFzRWxlbWVudFByb3BzO1xyXG5cdFx0Y2FwdGlvbjogaHRtbC5JSHRtbENhcHRpb25FbGVtZW50UHJvcHM7XHJcblx0XHRjZW50ZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjaXRlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29kZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbDogaHRtbC5JSHRtbENvbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbGdyb3VwOiBodG1sLklIdG1sQ29sZ3JvdXBFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZGF0YTogaHRtbC5JSHRtbERhdGFFbGVtZW50UHJvcHM7XHJcblx0XHRkYXRhbGlzdDogaHRtbC5JSHRtbERhdGFMaXN0RWxlbWVudFByb3BzO1xyXG5cdFx0ZGQ6IGh0bWwuSUh0bWxEZEVsZW1lbnRQcm9wcztcclxuXHRcdGRlbDogaHRtbC5JSHRtbERlbEVsZW1lbnRQcm9wcztcclxuXHRcdGRldGFpbHM6IGh0bWwuSUh0bWxEZXRhaWxzRWxlbWVudFByb3BzO1xyXG5cdFx0ZGZuOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlhbG9nOiBodG1sLklIdG1sRGlhbG9nRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlyOiBodG1sLklIdG1sRGlyRWxlbWVudFByb3BzO1xyXG5cdFx0ZGl2OiBodG1sLklIdG1sRGl2RWxlbWVudFByb3BzO1xyXG5cdFx0ZGw6IGh0bWwuSUh0bWxEbEVsZW1lbnRQcm9wcztcclxuXHRcdGR0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGVtOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZW1iZWQ6IGh0bWwuSUh0bWxFbWJlZEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRmaWVsZHNldDogaHRtbC5JSHRtbEZpZWxkc2V0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmlnY2FwdGlvbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZpZ3VyZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZvbnQ6IGh0bWwuSUh0bWxGb250RWxlbWVudFByb3BzO1xyXG5cdFx0Zm9vdGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9ybTogaHRtbC5JSHRtbEZvcm1FbGVtZW50UHJvcHM7XHJcblx0XHRmcmFtZTogaHRtbC5JSHRtbEZyYW1lRWxlbWVudFByb3BzO1xyXG5cdFx0ZnJhbWVzZXQ6IGh0bWwuSUh0bWxGcmFtZXNldEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRoMTogaHRtbC5JSHRtbEgxRWxlbWVudFByb3BzO1xyXG5cdFx0aDI6IGh0bWwuSUh0bWxIMkVsZW1lbnRQcm9wcztcclxuXHRcdGgzOiBodG1sLklIdG1sSDNFbGVtZW50UHJvcHM7XHJcblx0XHRoNDogaHRtbC5JSHRtbEg0RWxlbWVudFByb3BzO1xyXG5cdFx0aDU6IGh0bWwuSUh0bWxINUVsZW1lbnRQcm9wcztcclxuXHRcdGg2OiBodG1sLklIdG1sSDZFbGVtZW50UHJvcHM7XHJcblx0XHRoZWFkOiBodG1sLklIdG1sSGVhZEVsZW1lbnRQcm9wcztcclxuXHRcdGhlYWRlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGhncm91cDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGhyOiBodG1sLklIdG1sSHJFbGVtZW50UHJvcHM7XHJcblx0XHRodG1sOiBodG1sLklIdG1sSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRpOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aWZyYW1lOiBodG1sLklIdG1sSWZyYW1lRWxlbWVudFByb3BzO1xyXG5cdFx0aW1nOiBodG1sLklIdG1sSW1nRWxlbWVudFByb3BzO1xyXG5cdFx0aW5wdXQ6IGh0bWwuSUh0bWxJbnB1dEVsZW1lbnRQcm9wcztcclxuXHRcdGluczogaHRtbC5JSHRtbEluc0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRrYmQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRrZXlnZW46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bGFiZWw6IGh0bWwuSUh0bWxMYWJlbEVsZW1lbnRQcm9wcztcclxuXHRcdGxlZ2VuZDogaHRtbC5JSHRtbExlZ2VuZEVsZW1lbnRQcm9wcztcclxuXHRcdGxpOiBodG1sLklIdG1sTGlFbGVtZW50UHJvcHM7XHJcblx0XHRsaW5rOiBodG1sLklIdG1sTGlua0VsZW1lbnRQcm9wcztcclxuXHRcdGxpc3Rpbmc6IGh0bWwuSUh0bWxMaXN0aW5nRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG1haW46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtYXA6IGh0bWwuSUh0bWxNYXBFbGVtZW50UHJvcHM7XHJcblx0XHRtYXJrOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWVudTogaHRtbC5JSHRtbE1lbnVFbGVtZW50UHJvcHM7XHJcblx0XHRtZW51aXRlbTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1ldGE6IGh0bWwuSUh0bWxNZXRhRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0ZXI6IGh0bWwuSUh0bWxNZXRlckVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRuYXY6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub2JyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9mcmFtZXM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub3NjcmlwdDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRvYmplY3Q6IGh0bWwuSUh0bWxPYmplY3RFbGVtZW50UHJvcHM7XHJcblx0XHRvbDogaHRtbC5JSHRtbE9sRWxlbWVudFByb3BzO1xyXG5cdFx0b3B0Z3JvdXA6IGh0bWwuSUh0bWxPcHRncm91cEVsZW1lbnRQcm9wcztcclxuXHRcdG9wdGlvbjogaHRtbC5JSHRtbE9wdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdG91dHB1dDogaHRtbC5JSHRtbE91dHB1dEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRwOiBodG1sLklIdG1sUEVsZW1lbnRQcm9wcztcclxuXHRcdHBhcmFtOiBodG1sLklIdG1sUGFyYW1FbGVtZW50UHJvcHM7XHJcblx0XHRwaWN0dXJlOiBodG1sLklIdG1sUGljdHVyZUVsZW1lbnRQcm9wcztcclxuXHRcdHByZTogaHRtbC5JSHRtbFByZUVsZW1lbnRQcm9wcztcclxuXHRcdHByb2dyZXNzOiBodG1sLklIdG1sUHJvZ3Jlc3NFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cTogaHRtbC5JSHRtbFFFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cmI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRycDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnRjOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnVieTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2FtcDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNjcmlwdDogaHRtbC5JSHRtbFNjcmlwdEVsZW1lbnRQcm9wcztcclxuXHRcdHNlY3Rpb246IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzZWxlY3Q6IGh0bWwuSUh0bWxTZWxlY3RFbGVtZW50UHJvcHM7XHJcblx0XHRzbG90OiBodG1sLklIdG1sU2xvdEVsZW1lbnRQcm9wcztcclxuXHRcdHNtYWxsOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c291cmNlOiBodG1sLklIdG1sU291cmNlRWxlbWVudFByb3BzO1xyXG5cdFx0c3BhbjogaHRtbC5JSHRtbFNwYW5FbGVtZW50UHJvcHM7XHJcblx0XHRzdHJpa2U6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdHJvbmc6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdHlsZTogaHRtbC5JSHRtbFN0eWxlRWxlbWVudFByb3BzO1xyXG5cdFx0c3ViOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3VtbWFyeTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN1cDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR0YWJsZTogaHRtbC5JSHRtbFRhYmxlRWxlbWVudFByb3BzO1xyXG5cdFx0dGJvZHk6IGh0bWwuSUh0bWxUYm9keUVsZW1lbnRQcm9wcztcclxuXHRcdHRkOiBodG1sLklIdG1sVGRFbGVtZW50UHJvcHM7XHJcblx0XHR0ZW1wbGF0ZTogaHRtbC5JSHRtbFRlbXBsYXRlRWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dGFyZWE6IGh0bWwuSUh0bWxUZXh0YXJlYUVsZW1lbnRQcm9wcztcclxuXHRcdHRmb290OiBodG1sLklIdG1sVGZvb3RFbGVtZW50UHJvcHM7XHJcblx0XHR0aDogaHRtbC5JSHRtbFRoRWxlbWVudFByb3BzO1xyXG5cdFx0dGhlYWQ6IGh0bWwuSUh0bWxUSGVhZEVsZW1lbnRQcm9wcztcclxuXHRcdHRpbWU6IGh0bWwuSUh0bWxUaW1lRWxlbWVudFByb3BzO1xyXG5cdFx0dGl0bGU6IGh0bWwuSUh0bWxUaXRsZUVsZW1lbnRQcm9wcztcclxuXHRcdHRyOiBodG1sLklIdG1sVHJFbGVtZW50UHJvcHM7XHJcblx0XHR0cmFjazogaHRtbC5JSHRtbFRyYWNrRWxlbWVudFByb3BzO1xyXG5cdFx0dHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHVsOiBodG1sLklIdG1sVWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dmFyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0dmlkZW86IGh0bWwuSUh0bWxWaWRlb0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHR3YnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0eG1wOiBodG1sLklIdG1sWG1wRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdC8vIFNWRyBlbGVtZW50c1xyXG5cdFx0c3ZnOiBzdmcuSVN2Z1N2Z0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzdmdBOiBzdmcuSVN2Z0FFbGVtZW50UHJvcHM7XHJcblx0XHRhbmltYXRlOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdBbmltYXRpb25Qcm9wcztcclxuXHRcdGFuaW1hdGVNb3Rpb246IHN2Zy5JU3ZnQW5pbWF0ZU1vdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdGFuaW1hdGVUYXJuc2Zvcm06IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z0FuaW1hdGlvblByb3BzO1xyXG5cclxuXHRcdGNpcmNsZTogc3ZnLklTdmdDaXJjbGVFbGVtZW50UHJvcHM7XHJcblx0XHRjbGlwUGF0aDogc3ZnLklTdmdDbGlwUGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbG9yUHJvZmlsZTogc3ZnLklTdmdDb2xvclByb2ZpbGVQYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGRlZnM6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0ZGVzYzogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRkaXNjYXJkOiBzdmcuSVN2Z0Rpc2NhcmRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZWxsaXBzZTogc3ZnLklTdmdFbGxpcHNlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGZlQmxlbmQ6IHN2Zy5JU3ZnRmVCbGVuZEVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29sb3JNYXRyaXg6IHN2Zy5JU3ZnRmVDb2xvck1hdHJpeEVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IHN2Zy5JU3ZnRmVDb21wb25lbnRUcmFuc2ZlckVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29tcG9zaXRlOiBzdmcuSVN2Z0ZlQ29tcG9zaXRlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogc3ZnLklTdmdGZUNvbnZvbHZlTWF0cml4RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaWZmdXNlTGlnaHRpbmc6IHN2Zy5JU3ZnRmVEaWZmdXNlTGlnaHRpbmdFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogc3ZnLklTdmdGZURpc3BsYWNlbWVudE1hcEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlzdGFudExpZ2h0OiBzdmcuSVN2Z0ZlRGlzdGFudExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEcm9wU2hhZG93OiBzdmcuSVN2Z0ZlRHJvcFNoYWRvd0VsZW1lbnRQcm9wcztcclxuXHRcdGZlRmxvb2Q6IHN2Zy5JU3ZnRmVGbG9vZEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRnVuY0E6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY0I6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY0c6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY1I6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBzdmcuSVN2Z0ZlR2F1c3NpYW5CbHVyRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVJbWFnZTogc3ZnLklTdmdGZUltYWdlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVNZXJnZTogc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcyB8IHN2Zy5JU3ZnRmlsdGVyUHJpbWl0aXZlUHJvcHM7XHJcblx0XHRmZU1lcmdlTm9kZTogc3ZnLklTdmdGZU1lcmdlTm9kZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlTW9ycGhvbG9neTogc3ZnLklTdmdGZU1vcnBob2xvZ3lFbGVtZW50UHJvcHM7XHJcblx0XHRmZU9mZnNldDogc3ZnLklTdmdGZU9mZnNldEVsZW1lbnRQcm9wcztcclxuXHRcdGZlUG9pbnRMaWdodDogc3ZnLklTdmdGZVBvaW50TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVNwZWN1bGFyTGlnaHRpbmc6IHN2Zy5JU3ZnRmVTcGVjdWxhckxpZ2h0aW5nRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVTcG90TGlnaHQ6IHN2Zy5JU3ZnRmVTcG90TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVRpbGU6IHN2Zy5JU3ZnRmVUaWxlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVUdXJidWxlbmNlOiBzdmcuSVN2Z0ZlVHVyYnVsZW5jZUVsZW1lbnRQcm9wcztcclxuXHRcdGZpbHRlcjogc3ZnLklTdmdGaWx0ZXJFbGVtZW50UHJvcHM7XHJcblx0XHRmb3JlaWduT2JqZWN0OiBzdmcuSVN2Z0ZvcmVpZ25PYmplY3RFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Zzogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHM7XHJcblxyXG5cdFx0aGF0Y2g6IHN2Zy5JU3ZnSGF0Y2hFbGVtZW50UHJvcHM7XHJcblx0XHRoYXRjaHBhdGg6IHN2Zy5JU3ZnSGF0Y2hwYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGltYWdlOiBzdmcuSVN2Z0ltYWdlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGxpbmU6IHN2Zy5JU3ZnTGluZUVsZW1lbnRQcm9wcztcclxuXHRcdGxpbmVhckdyYWRpZW50OiBzdmcuSVN2Z0xpbmVhckdyYWRpZW50RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG1hcmtlcjogc3ZnLklTdmdNYXJrZXJFbGVtZW50UHJvcHM7XHJcblx0XHRtYXNrOiBzdmcuSVN2Z01hc2tFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRhZGF0YTogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRtcGF0aDogc3ZnLklTdmdNUGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRwYXRoOiBzdmcuSVN2Z1BhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRwYXR0ZXJuOiBzdmcuSVN2Z1BhdHRlcm5FbGVtZW50UHJvcHM7XHJcblx0XHRwb2x5Z29uOiBzdmcuSVN2Z1BvbHlnb25FbGVtZW50UHJvcHM7XHJcblx0XHRwb2x5bGluZTogc3ZnLklTdmdQb2x5bGluZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRyYWRpYWxHcmFkaWVudDogc3ZnLklTdmdSYWRpYWxHcmFkaWVudEVsZW1lbnRQcm9wcztcclxuXHRcdHJlY3Q6IHN2Zy5JU3ZnUmVjdEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzdmdTY3JpcHQ6IHN2Zy5JU3ZnU2NyaXB0RWxlbWVudFByb3BzO1xyXG5cdFx0c2V0OiBzdmcuSVN2Z1NldEVsZW1lbnRQcm9wcztcclxuXHRcdHNvbGlkY29sb3I6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0c3RvcDogc3ZnLklTdmdTdG9wRWxlbWVudFByb3BzO1xyXG5cdFx0c3ZnU3R5bGU6IHN2Zy5JU3ZnU3R5bGVFbGVtZW50UHJvcHM7XHJcblx0XHRzd2l0Y2g6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzO1xyXG5cdFx0c3ltYm9sOiBzdmcuSVN2Z1N5bWJvbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR0ZXh0OiBzdmcuSVN2Z1RleHRFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0UGF0aDogc3ZnLklTdmdUZXh0UGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdHN2Z1RpdGxlOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdHRleHRTcGFuOiBzdmcuSVN2Z1RleHRTcGFuRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHVzZTogc3ZnLklTdmdVc2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dmlldzogc3ZnLklTdmdWaWV3RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdC8vW2VsZW1OYW1lOiBzdHJpbmddOiBhbnlcclxuXHR9XHJcblxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHQvLyBQcm9wZXJ0aWVzIGluIHRoaXMgaW50ZXJmYWNlIGFwcGx5IHRvIGludHJpbnNpYyBlbGVtZW50cyBhbmQgdG8gZnVuY3Rpb25hbCBjb21wb25lbnRzLlxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljQXR0cmlidXRlcyBleHRlbmRzIElDb21tb25Qcm9wcyB7fVxyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIGluIHRoaXMgaW50ZXJmYWNlIGFwcGx5IHRvIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNDbGFzc0F0dHJpYnV0ZXM8VD4gZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxuXHR7XHJcblx0XHQvLyBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBpcyBtb3VudGVkLiBUaGVcclxuXHRcdC8vIHJlZmVyZW5jZSB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRyZWY/OiBSZWZQcm9wVHlwZTxUPjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluaXRpb25zIG9mIGZ1bmN0aW9ucyB0aGF0IGRlcGVuZCBvbiBWTi1kZXJpdmVkIGNsYXNzZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7Um9vdFZOfSBmcm9tIFwiLi9Sb290Vk5cIlxyXG5pbXBvcnQge2NyZWF0ZVZOQ2hhaW5Gcm9tSlNYfSBmcm9tIFwiLi9WTkNoYWluRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogSlNYIEZhY3RvcnkgZnVuY3Rpb24uIEluIG9yZGVyIGZvciB0aGlzIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYnkgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIsIHRoZVxyXG4gKiB0c2NvbmZpZy5qc29uIG11c3QgaGF2ZSB0aGUgZm9sbG93aW5nIG9wdGlvbjpcclxuICpcclxuICogXCJjb21waWxlck9wdGlvbnNcIjpcclxuICoge1xyXG4gKiAgICAgXCJqc3hcIjogXCJyZWFjdFwiLFxyXG4gKiAgICAgXCJqc3hGYWN0b3J5XCI6IFwibWltLmpzeFwiXHJcbiAqIH1cclxuICpcclxuICogVGhlIC50c3ggZmlsZXMgbXVzdCBpbXBvcnQgdGhlIG1pbWJsIG1vZHVsZSBhcyBtaW06IGltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG4gKiBAcGFyYW0gdGFnIFxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqIEBwYXJhbSBjaGlsZHJlbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqc3goIHRhZzogYW55LCBwcm9wczogYW55LCAuLi5jaGlsZHJlbjogYW55W10pOiBhbnlcclxue1xyXG5cdC8vIGNoaWxkcmVuIHBhcmFtZXRlciBpcyBhbHdheXMgYW4gYXJyYXkuIEEgY29tcG9uZW50IGNhbiBzcGVjaWZ5IHRoYXQgaXRzIGNoaWxkcmVuIGFyZSBhbiBhcnJheVxyXG5cdC8vIG9mIGEgY2VydGFpbiB0eXBlLCBlLmcuIGNsYXNzIEEgZXh0ZW5kcyBtaW0uQ29tcG9uZW50PHt9LFRbXT4uIEluIHRoaXMgY2FzZSB0aGVyZSBhcmUgdHdvXHJcblx0Ly8gd2F5cyB0byBzcGVjaWZ5IGNoaWxkcmVuIGluIEpTWDpcclxuXHQvL1x0MSkgPEE+e3QxfXt0Mn08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW3QxLCB0Ml0uXHJcblx0Ly9cdDIpIDxBPntbdDEsIHQyXX08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW1t0MSx0Ml1dLlxyXG5cdC8vIFRoZSByZWFsQ2hpbGRyZW4gdmFyaWFibGUgYWNjb21tb2RhdGVzIGJvdGggY2FzZXMuXHJcblx0bGV0IHJlYWxDaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KCBjaGlsZHJlblswXSkgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xyXG5cdHJldHVybiBjcmVhdGVWTkNoYWluRnJvbUpTWCggdGFnLCBwcm9wcywgcmVhbENoaWxkcmVuKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24pIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQgaW4gYVxyXG4gKiBzeW5jaHJvbm91cyBtYW5uZXIuXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcmVuZGVyLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gcmVuZGVyIHRoZSBjb250ZW50LiBJZiBudWxsIG9yIHVuZGVmaW5lZCwgdGhlblxyXG4gKiByZW5kZXIgdW5kZXIgdGhlIGRvY3VtZW50LmJvZHkgdGFnLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50U3luYyggY29udGVudDogYW55LCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRSb290Vk4ubW91bnRSb290U3luYyggY29udGVudCwgYW5jaG9yRE4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFxyXG4vKipcclxuICogUmVtb3ZlcyB0aGUgY29udGVudCB0aGF0IHdhcyBvcmlnaW5hbGx5IGdlbmVyYXRlZCBieSB0aGUgbW91bnRTeW5jIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGNvbnRlbnQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudFN5bmMoIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdFJvb3RWTi51bm1vdW50Um9vdFN5bmMoIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24pIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnRcclxuLy8gYXN5bmNocm9ub3VzbHkuXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcmVuZGVyLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gcmVuZGVyIHRoZSBjb250ZW50LiBJZiBudWxsIG9yIHVuZGVmaW5lZCx0aGVuXHJcbiAqXHRcdFx0XHRyZW5kZXIgdW5kZXIgdGhlIGRvY3VtZW50LmJvZHkgdGFnLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdFJvb3RWTi5tb3VudFJvb3QoIGNvbnRlbnQsIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVtb3ZlcyB0aGUgY29udGVudCB0aGF0IHdhcyBvcmlnaW5hbGx5IGdlbmVyYXRlZCBieSB0aGUgbW91bnQgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0aGUgY29udGVudCB3YXMgcHJldmlvdXNseSByZW5kZXJlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50KCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRSb290Vk4udW5tb3VudFJvb3QoIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvdmlkZSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlIGV4cG9ydGVkIGZ1bmN0aW9uLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtFbG1BdHRyLCBQcm9wVHlwZX0gZnJvbSBcIi4uL2NvcmUvRWxtQXR0clwiO1xyXG5cclxuZnVuY3Rpb24gc19yZWdpc3RlckN1c3RvbUF0dHJpYnV0ZTxUPiggcHJvcE5hbWU6IHN0cmluZywgZmFjdG9yeTogSUN1c3RvbUF0dHJpYnV0ZUZhY3Rvcnk8VD4pOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIHByb3BOYW1lLCB7IHR5cGU6IFByb3BUeXBlLkN1c3RvbUF0dHIsIGZhY3RvcnkgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltYmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvbWltXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvSHRtbFR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvU3ZnVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9FbG1BdHRyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9FdmVudFNsb3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9Mb2NhbFN0eWxlc1wiO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9