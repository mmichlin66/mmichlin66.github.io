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
            this.removeCustomAttrs(true);
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
            let customAttr = this.customAttrs[name];
            // create custom property handler. If we cannot create the handler, remove the property
            // from our object.
            try {
                customAttr.handler = new customAttr.info.handlerClass(this, customAttr.val, name);
            }
            catch (err) {
                console.error(`Error creating handler for custom attribute '${name}': ${err.message}`);
                delete this.customAttrs[name];
                continue;
            }
        }
    }
    // Destroys custom attributes of this element.
    removeCustomAttrs(isRemoval) {
        ///////////////
        if (!this.customAttrs)
            throw new Error("ElmVN.removeCustomAttrs called with this.customAttrs = null");
        ////////////
        for (let name in this.customAttrs) {
            let customAttr = this.customAttrs[name];
            try {
                customAttr.handler.terminate(isRemoval);
            }
            catch (err) {
                console.error(`Error terminating handler for custom attribute '${name}': ${err.message}`);
            }
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
                    try {
                        oldCustomAttr.handler.terminate(false);
                    }
                    catch (err) {
                        console.error(`Error terminating handler for custom attribute '${name}': ${err.message}`);
                    }
                }
                else {
                    // update the custom property and remember the new value
                    try {
                        oldCustomAttr.handler.update(newCustomAttr.val);
                    }
                    catch (err) {
                        console.error(`Error updating handler for custom attribute '${name}': ${err.message}`);
                    }
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
                try {
                    newCustomAttr.handler = new newCustomAttr.info.handlerClass(this, newCustomAttr.val, name);
                }
                catch (err) {
                    console.error(`Error creating handler for custom attribute '${name}': ${err.message}`);
                    delete newCustomAttrs[name];
                    continue;
                }
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
        // we don't unticipate any exceptions here because we don't invoke 3rd-party code here.
        updatedNodeDisps.forEach((disp) => {
            this.updatePhysical(disp);
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
        // if willMount returns false, the node never has any sub-nodes (e.g. text nodes)
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
        // for nodes to be removed, call willUnmount
        if (disp.subNodesToRemove) {
            for (let svn of disp.subNodesToRemove)
                this.preDestroy(svn);
        }
        // perform rendering for sub-nodes that should be inserted, replaced or updated
        if (disp.subNodeDisps) {
            for (let subNodeDisp of disp.subNodeDisps) {
                if (subNodeDisp.action === 2 /* Update */) {
                    /////////////////////////
                    ///////////////////////////////////////////////////////////////////////////////////////////
                    ///////////////
                    subNodeDisp.updateDisp = subNodeDisp.oldVN.prepareUpdate(subNodeDisp.newVN);
                    if (subNodeDisp.updateDisp.shouldRender)
                        this.updateVirtual(subNodeDisp);
                }
                else
                    this.createVirtual(subNodeDisp.newVN, disp.oldVN);
            }
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
        vn.subNodes = disp.subNodeDisps ? new VNChain_1.VNChain() : undefined;
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
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the Render phase.
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
        return this.parent ? this.parent.findService(id, true) : undefined;
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
        // if either old or new or both chains are empty, we do special things
        if ((!newChain || newChain.count === 0) && (!oldChain || oldChain.count === 0)) {
            // both chain are empty - do nothing
            return;
        }
        else if (!newChain || newChain.count === 0) {
            // new chain is empty - just delete all old nodes
            this.subNodesToRemove = new Array(oldChain.count);
            let i = 0;
            for (let oldVN = oldChain.first; oldVN !== null; oldVN = oldVN.next)
                this.subNodesToRemove[i++] = oldVN;
            return;
        }
        else if (!oldChain || oldChain.count === 0) {
            // old chain is empty - just insert all new nodes
            this.subNodeDisps = new Array(newChain.count);
            let i = 0;
            for (let newVN = newChain.first; newVN !== null; newVN = newVN.next)
                this.subNodeDisps[i++] = new VNDisp(newVN, 1 /* Insert */);
            return;
        }
        // we are here if both old and new chains contain some nodes.
        // loop over new nodes and fill an array of VNDisp objects in the parent disp. At the same
        // time, build a map that includes all new nodes that have keys. The values are VNDisp objects.
        this.subNodeDisps = new Array(newChain.count);
        let newKeyedNodeMap = new Map();
        let i = 0;
        for (let newVN = newChain.first; newVN !== null; newVN = newVN.next) {
            let subNodeDisp = new VNDisp(newVN);
            this.subNodeDisps[i++] = subNodeDisp;
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
 *	```tsx
 *	class Child extends Component
 *	{
 *		@mim.updatable text: string = "Hello!";
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
 * In the above example, the Child component will be re-rendered when its `text` property changes.
 * The Parent component appends the word "again" to the Child component's text whenever the user
 * clicks on it.
 * @param target
 * @param name
 */
function updatable(target, name) {
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
exports.updatable = updatable;
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
 * Registers custom attribute handler class for the given property name.
 * @param propName name of the custom attribute
 * @param factory custom attribute class
 */
function registerCustomAttribute(attrName, handlerClass) {
    s_registerCustomAttribute(attrName, handlerClass);
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
function s_registerCustomAttribute(attrName, handlerClass) {
    ElmAttr_1.ElmAttr.registerProperty(attrName, { type: 3 /* CustomAttr */, handlerClass });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvQ29tcEJhc2VWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbUF0dHIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9FbG1WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0V2ZW50U2xvdC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0Z1bmNWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0luc3RhbmNlVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Mb2NhbFN0eWxlcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1Jvb3RVSS50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TdGF0cy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1N2Z0VsbXMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9UZXh0Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9VdGlscy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVk5DaGFpbi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQ2hhaW5GdW5jcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZORGlzcC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL21pbS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9taW1ibFR5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IjoibWltYmwuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltYmxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltYmxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9taW1ibFR5cGVzLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7Vk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge0NvbXBCYXNlVk59IGZyb20gXCIuL0NvbXBCYXNlVk5cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBjb21wb25lbnQgaW1wbGVtZW50aW5nIHRoZSBJQ29tcG9uZW50PD4gaW50ZXJmYWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIENsYXNzVk4gZXh0ZW5kcyBDb21wQmFzZVZOPG1pbS5JQ29tcG9uZW50PiBpbXBsZW1lbnRzIG1pbS5JQ2xhc3NWTlxyXG57XHJcblx0Y29uc3RydWN0b3IoIGNvbXBDbGFzczogbWltLklDb21wb25lbnRDbGFzcywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5jb21wQ2xhc3MgPSBjb21wQ2xhc3M7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXkgYW5kIHJlZlxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJQ2xhc3NWTiBpbXBsZW1lbnRhdGlvblxyXG5cdHB1YmxpYyBnZXQgQ29tcENsYXNzKCk6IG1pbS5JQ29tcG9uZW50Q2xhc3MgeyByZXR1cm4gdGhpcy5jb21wQ2xhc3M7IH1cclxuXHRwdWJsaWMgZ2V0IENvbXAoKTogbWltLklDb21wb25lbnQgeyByZXR1cm4gdGhpcy5jb21wIGFzIG1pbS5JQ29tcG9uZW50OyB9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIHR5cGUuXHJcblx0cHVibGljIGdldCB0eXBlKCk6IG1pbS5WTlR5cGUgeyByZXR1cm4gbWltLlZOVHlwZS5DbGFzc0NvbXA7IH1cclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gY29tcG9uZW50cyBjYW4gZGVmaW5lIHRoZSBnZXREaXNwbGF5TmFtZSBtZXRob2Q7IGlmIHRoZXkgZG9uJ3QgdGhlbiB0aGUgZGVmYXVsdCBuYW1lXHJcblx0XHQvLyBpcyB0aGUgY29tcG9uZW50J3MgY29uc3RydWN0b3IgbmFtZSBwbHVzIGtleSBpZiBkZWZpbmVkLiBOb3RlIHRoYXQgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHQvLyBtaWdodCBub3QgYmUgY3JlYXRlZCB5ZXQgd2hlbiB0aGlzIG1ldGhvZCBpcyBjYWxsZWRcclxuXHRcdGlmICh0aGlzLmNvbXAgJiYgdGhpcy5jb21wLmdldERpc3BsYXlOYW1lKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb21wLmdldERpc3BsYXlOYW1lKCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBuYW1lID0gdGhpcy5jb21wQ2xhc3MubmFtZTtcclxuXHRcdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdFx0cmV0dXJuIG5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGNvbXBvbmVudCBpbnN0YW5jZVxyXG5cdFx0dGhpcy5jb21wID0gbmV3IHRoaXMuY29tcENsYXNzKCB0aGlzLnByb3BzKTtcclxuXHJcblx0XHQvLyBpdCBpcyBPSyBmb3IgdGhlIGNvbXBvbmVudCB0byBub3QgaW1wbGVtZW50IHNldFNpdGUgbWV0aG9kOyBob3dldmVyLCBpdCB3aWxsIG5vdCBiZVxyXG5cdFx0Ly8gYWJsZSB0byB1c2UgYW55IG9mIHRoZSBNaW1ibCBzZXJ2aWNlcyBpbmNsdWRpbmcgcmVxdWVzdHMgZm9yIHVwZGF0ZXMuXHJcblx0XHRpZiAodGhpcy5jb21wLnNldFNpdGUpXHJcblx0XHRcdHRoaXMuY29tcC5zZXRTaXRlKCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5jb21wLmNvbXBvbmVudFdpbGxNb3VudClcclxuXHRcdFx0dGhpcy5jb21wLmNvbXBvbmVudFdpbGxNb3VudCgpO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZFxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmNvbXApO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGNvbXBvbmVudCBiZWZvcmUgc2V0dGluZyBpdCB0byB1bmRlZmluZWQuIElmIHRoZSBzYW1lIFJlZiBvYmplY3QgaXMgdXNlZCBmb3JcclxuXHRcdC8vIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50cyAoYW5kL29yIGVsZW1lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5jb21wKTtcclxuXHJcblx0XHRpZiAodGhpcy5jb21wLmNvbXBvbmVudFdpbGxVbm1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAuY29tcG9uZW50V2lsbFVubW91bnQoKTtcclxuXHJcblx0XHRpZiAodGhpcy5jb21wLnNldFNpdGUpXHJcblx0XHRcdHRoaXMuY29tcC5zZXRTaXRlKCBudWxsKTtcclxuXHJcblx0XHR0aGlzLmNvbXAgPSB1bmRlZmluZWQ7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgdGhlIGNvbXBvbmVudCBjbGFzcyBuYW1lIGlzIHRoZSBzYW1lXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wQ2xhc3MgPT09IChuZXdWTiBhcyBDbGFzc1ZOKS5jb21wQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVwZGF0ZXMgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhXHJcblx0Ly8gVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGluZyBzdWItbm9kZXMgaXMgbmVjZXNzYXJ5IGFuZFxyXG5cdC8vIGZhbHNlIG90aGVyd2lzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0NsYXNzVk4gPSBuZXdWTiBhcyBDbGFzc1ZOO1xyXG5cclxuXHRcdC8vIGxldCB0aGUgY29tcG9uZW50IGtub3cgYWJvdXQgdGhlIG5ldyBwcm9wZXJ0aWVzIChpZiBpdCBpcyBpbnRlcmVzdGVkIGluIHRoZW0pXHJcblx0XHRsZXQgc2hvdWxkUmVuZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuXHRcdGlmICh0aGlzLmNvbXAuc2hvdWxkQ29tcG9uZW50VXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHNob3VsZFJlbmRlciA9IHRoaXMuY29tcC5zaG91bGRDb21wb25lbnRVcGRhdGUoIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIGlmIHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uIGNoYW5nZWQgdGhlbiBzZXQgb3IgdW5zZXQgaXQgYXMgbmVjZXNzYXJ5XHJcblx0XHRpZiAobmV3Q2xhc3NWTi5yZWYgIT09IHRoaXMucmVmKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJlZmVyZW5jZSBvYmplY3RcclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdDbGFzc1ZOLnJlZjtcclxuXHJcblx0XHRcdC8vIGlmIHJlZmVyZW5jZSBpcyBub3cgc3BlY2lmaWVkLCBzZXQgaXQgbm93OyBub3RlIHRoYXQgd2UgYWxyZWFkeSBkZXRlcm1pbmVkIHRoYXRcclxuXHRcdFx0Ly8gdGhlIHJlZmVyZW5jZSBvYmplY3QgaXMgZGlmZmVyZW50LlxyXG5cdFx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5jb21wKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG5ld0NsYXNzVk4ucmVmID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHdlIGtub3cgdGhhdCBvdXIgcmVmZXJlbmNlIGlzIGRlZmluZWQsIHNvIHVuc2V0IGl0XHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0NsYXNzVk4ua2V5O1xyXG5cclxuXHRcdC8vIHNoYWxsb3cgY29weSB0aGUgbmV3IHByb3BlcnRpZXMgZnJvbSB0aGUgb3RoZXIgbm9kZSB0byBvdXIgb2JqZWN0LiBUaGlzIGlzIG5lZWRlZFxyXG5cdFx0Ly8gYmVjYXVzZSB0aGUgY29tcG9uZW50IGdvdCBvdXIgcHJvcHMgb2JqZWN0IGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgd2lsbCBrZWVwXHJcblx0XHQvLyB3b3JraW5nIHdpdGggaXQgLSBlc3BlY2lhbGx5IGlmIGl0IGRvZXNuJ3QgaW1wbGVtZW50IHRoZSBzaG91bGRDb21wb25lbnRVcGRhdGUgbWV0aG9kLlxyXG5cdFx0T2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaCgga2V5ID0+IGRlbGV0ZSB0aGlzLnByb3BzW2tleV0pO1xyXG5cdFx0T2JqZWN0LmFzc2lnbiggdGhpcy5wcm9wcywgbmV3Q2xhc3NWTi5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIHsgc2hvdWxkQ29tbWl0OiBmYWxzZSwgc2hvdWxkUmVuZGVyIH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFR5cGUgb2YgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuXHRwcml2YXRlIGNvbXBDbGFzczogbWltLklDb21wb25lbnRDbGFzcztcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHNwZWNpZmllZCBhcyBhIFwicmVmXCIgcHJvcGVydHkuIFJlZmVyZW5jZSBvYmplY3QgaXNcclxuXHQvLyBzZXQgd2hlbiBhbmFseXppbmcgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIGR1cmluZyB1cGRhdGUuIFJlZmVyZW5jZSB2YWx1ZSBpc1xyXG5cdC8vIHNldCBkdXJpbmcgbW91bnQgYW5kIHVuc2V0IGR1cmluZyB1bm1vdW50LlxyXG5cdHByaXZhdGUgcmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtETiwgVk59IGZyb20gXCIuL1ZOXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgQ29tcEJhc2VWTiBpcyBhIGJhc2UgY2xhc3MgZm9yIEluc3RhbmNlVk4gYW5kIENsYXNzVk4uIEl0IHByb3ZpZGVzIGNvbW1vbiBmdW5jdGlvbmFsaXR5XHJcbi8vIGluIHRlcm1zIG9mIHVwZGF0ZSByZXF1ZXN0cyBhbmQgbGlmZWN5Y2xlIG1hbmFnZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcEJhc2VWTjxUQ29tcCBleHRlbmRzIG1pbS5JQ29tcG9uZW50PiBleHRlbmRzIFZOXHJcbntcclxuLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRwdWJsaWMgZ2V0U3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICh0aGlzLmNvbXAgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwicmVuZGVyKCkgd2FzIGNhbGxlZCBvbiB1bm1vdW50ZWQgY29tcG9uZW50LlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG4vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLnJlbmRlcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5oYW5kbGVFcnJvciAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBoYXMgYmVlbiBpbnNlcnRlZFxyXG5cdC8vIGludG8gdGhlIERPTSB0cmVlLlxyXG5cdHB1YmxpYyBkaWRNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnREaWRNb3VudClcclxuXHRcdFx0dGhpcy5jb21wLmNvbXBvbmVudERpZE1vdW50KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBoYXMgYmVlbiB1cGRhdGVkXHJcblx0Ly8gaW4gdGhlIERPTSB0cmVlLlxyXG5cdHB1YmxpYyBkaWRVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbXAuY29tcG9uZW50RGlkVXBkYXRlKVxyXG5cdFx0XHR0aGlzLmNvbXAuY29tcG9uZW50RGlkVXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETlxyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgZG9uJ3QgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIGNvbXA6IFRDb21wO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFR5cGUgb2YgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBQcm9wVHlwZVxyXG57XHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvLyBSZWd1bGFyIGF0dHJpYnV0ZXMgc2V0IHVzaW5nIEVsZW1lbnQuc2V0QXR0cmlidXRlKCk7XHJcblx0QXR0ciA9IDEsXHJcblxyXG5cdC8vIEV2ZW50IGxpc3RlbmVycyBzZXQgdXNpbmcgRWxlbWVudC5hZGRFdmVudExpc3RlbmVyXHJcblx0RXZlbnQgPSAyLFxyXG5cclxuXHQvLyBDdXN0b20gYXR0cmlidXRlcyBmb3Igd2hpY2ggaGFuZGxlciBmYWN0b3JpZXMgYXJlIHJlZ2lzdGVyZWRcclxuXHRDdXN0b21BdHRyID0gMyxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzZSBpbnRlcmZhY2UgZGVzY3JpYmluZyBpbmZvcm1hdGlvbiBrZXB0IGFib3V0IHByb3BlcnR5IHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBUeXBlIG9mIHRoZSBwcm9wZXJ0eS5cclxuXHR0eXBlOiBQcm9wVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgYXR0cmlidXRlcyB0aGF0IGNvbnRhaW5zIGZ1bmN0aW9ucyBmb3Igc2V0dGluZywgZGlmZmluZywgdXBkYXRpbmcgYW5kXHJcbi8vIHJlbW92aW5nIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXR0clByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGdW5jdGlvbiB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIERPTVxyXG5cdC8vIGVsbS5zZXRBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXMgYXR0cmlidXRlIG5hbWUgYW5kIHByb3BWYWwgY29udmVydGVkIHRvIHN0cmluZy5cclxuXHRzZXQ/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGFuZCByZXR1cm5zIGFuIG9iamVjdFxyXG5cdC8vIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHVwZGF0ZUZ1bmMgZnVuY3Rpb24uIElmIHVuZGVmaW5lZCBpcyByZXR1cm5lZCwgdGhlIHZhbHVlIG9mIHRoZVxyXG5cdC8vIGF0dHJpYnV0ZSB3aWxsIG5vdCBjaGFuZ2UgKHRoYXQgbWVhbnMgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgYXJlIGVxdWFsKS4gSWYgdGhpc1xyXG5cdC8vIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCBwcm9wZXJ0eSB2YWx1ZXMgYXJlIGNvbnZlcnRlZCB0byBzdHJpbmcgYW5kIGNvbXBhcmVkIGFzIHN0cmluZ3MuXHJcblx0Ly8gSWYgdGhlc2Ugc3RyaW5ncyBhcmUgZGlmZmVyZW50LCB0aGUgc3RyaW5nIGNvcnJlc3BvbmRpbmcgdG8gdGhlICBuZXcgdmFsdWUgaXMgcmV0dXJuZWQuXHJcblx0ZGlmZj86IChhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSkgPT4gYW55O1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHVwZGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYmFzZWQgb24gdGhlIG9iamVjdCB0aGF0IHdhcyByZXR1cm5lZFxyXG5cdC8vIGZyb20gdGhlIGRpZmYgZnVuY3Rpb24uIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIHNldCBmdW5jdGlvbiBpcyB1c2VkLiBJZlxyXG5cdC8vIHRoZSBzZXQgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQgZWl0aGVyLCB0aGUgRE9NIGVsbS5zZXRBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXNcclxuXHQvLyBhdHRyaWJ1dGUgbmFtZSBhbmQgdXBkYXRlVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0dXBkYXRlPzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgdXBkYXRlVmFsOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0ucmVtb3ZlQXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lLlxyXG5cdHJlbW92ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5cdC8vIFRoZSBhY3R1YWwgbmFtZSBvZiB0aGUgYXR0cmlidXRlLiBUaGlzIGlzIHNvbWV0aW1lcyBuZWVkZWQgaWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNhbm5vdCBiZVxyXG5cdC8vIHVzZWQgYXMgcHJvcGVydHkgbmFtZSAtIGZvciBleGFtcGxlLCBpZiBhdHRyaWJ1dGUgbmFtZSBjb250YWlucyBjaGFyYWN0ZXJzIG5vdCBhbGxvd2VkIGluXHJcblx0Ly8gVHlwZVNjcmlwdCBpZGVudGlmaWVyIChlLmcuIGRhc2gpLlxyXG5cdGF0dHJOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBldmVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudCBidWJibGVzLiBJZiB0aGUgZXZlbnQgZG9lc24ndCBidWJibGUsIHRoZSBldmVudCBoYW5kbGVyXHJcblx0Ly8gbXVzdCBiZSBzZXQgb24gdGhlIGVsZW1lbnQgaXRzZWxmOyBvdGhlcndpc2UsIHRoZSBldmVudCBoYW5kbGVyIGNhbiBiZSBzZXQgb24gdGhlIHJvb3RcclxuXHQvLyBhbmNob3IgZWxlbWVudCwgd2hpY2ggYWxsb3dzIGhhdmluZyBhIHNpbmdsZSBldmVudCBoYW5kbGVyIHJlZ2lzdGVyZWQgZm9yIG1hbnkgZWxlbWVudHMsXHJcblx0Ly8gd2hpY2ggaXMgbW9yZSBwZXJmb3JtYW50LlxyXG5cdGlzQnViYmxpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBjdXN0b20gYXR0cmlidXRlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQXR0clByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBDbGFzcyBvYmplY3QgdGhhdCBjcmVhdGVzIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuXHJcblx0aGFuZGxlckNsYXNzOiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUeXBlIGNvbWJpbmluZyBpbmZvcm1hdGlvbiBhYm91dCByZWd1bGFyIGF0dHJpYnV0ZXMgb3IgZXZlbnRzIG9yIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgUHJvcEluZm8gPSBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gRXhwb3J0ZWQgY2xhc3MgdGhhdCBwcm92aWRlcyBzdGF0aWMgbWV0aG9kcyBmb3Igc2V0dGluZywgdXBkYXRpbmcgYW5kIHJlbW92aW5nIEVsZW1lbnRcclxuLy8gYXR0cmlidXRlcyBjb3JyZXNwb25kaW5nIHRvIHByb3BlcnR5IG5hbWVzLlxyXG4vL1xyXG4vLyBFbGVtZW50IGF0dHJpYnV0ZXMgYXJlIGRldGVybWluZWQgdXNpbmcgcHJvcGVydGllcyBwYXNzZWQgdG8gdGhlIEVsbVZOIG1ldGhvZHMuIFNvbWVcclxuLy8gcHJvcGVydGllcyBhbGxvdyB1c2luZyBub24tdHJpdmlhbCB0eXBlcywgZS5nLiBhcnJheXMgb3Igb2JqZWN0cywgYW5kIHRodXMgY2Fubm90IGJlIHNpbXBseVxyXG4vLyBoYW5kbGVkIHVzaW5nIHRoZSBFbGVtZW50LnNldEF0dHJpYnV0ZSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRWxtQXR0clxyXG57XHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBwcm9wZXJ0eSBuYW1lcyB0byBQcm9wSW5mby1kZXJpdmVkIG9iamVjdHMuIEluZm9ybWF0aW9uIGFib3V0IGN1c3RvbVxyXG5cdC8vIGF0dHJpYnV0ZXMgaXMgYWRkZWQgdG8gdGhpcyBvYmplY3Qgd2hlbiB0aGUgcmVnaXN0ZXJQcm9wZXJ0eSBtZXRob2QgaXMgY2FsbGVkLlxyXG5cdHByaXZhdGUgc3RhdGljIHByb3BJbmZvczoge1tQOnN0cmluZ106IFByb3BJbmZvfSA9XHJcblx0e1xyXG5cdFx0Ly8gYXR0cmlidXRlcyAtIG9ubHkgdGhvc2UgYXR0cmlidXRlcyBhcmUgbGlzdGVkIHRoYXQgaGF2ZSBub24tdHJpdmlhbCB0cmVhdG1lbnRcclxuXHRcdFwic3R5bGVcIjogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFN0eWxlUHJvcCwgZGlmZjogZGlmZlN0eWxlUHJvcCwgdXBkYXRlOiB1cGRhdGVTdHlsZVByb3AgfSxcclxuXHRcdFwidmFsdWVcIjogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZlZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVWYWx1ZVByb3AgfSxcclxuXHRcdFwiZGVmYXVsdFZhbHVlXCI6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRWYWx1ZVByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHRcdFwiY2hlY2tlZFwiOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZDaGVja2VkUHJvcCwgcmVtb3ZlOiByZW1vdmVDaGVja2VkUHJvcCB9LFxyXG5cdFx0XCJkZWZhdWx0Q2hlY2tlZFwiOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHJcblx0XHQvLyBldmVudCBsaXN0ZW5lcnMgLSBvbmx5IHRob3NlIGV2ZW50IGFyZSBsaXN0ZWQgdGhhdCBhcmUgbm9uLWJ1YmJsaW5nXHJcblx0XHRcIm1vdXNlZW50ZXJcIjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCwgaXNCdWJibGluZzogZmFsc2UgfSxcclxuXHRcdFwibW91c2VsZWF2ZVwiOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50LCBpc0J1YmJsaW5nOiBmYWxzZSB9LFxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0RWxtQXR0ci5wcm9wSW5mb3NbcHJvcE5hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFByb3BlcnR5SW5mbyggcHJvcE5hbWU6IHN0cmluZyk6IFByb3BJbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwdWJsaWMgc3RhdGljIHNldEF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHR5cGVvZiBwcm9wVmFsID09PSBcInN0cmluZ1wiID8gcHJvcFZhbCA6IHByb3BWYWwudG9TdHJpbmcoKSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCBhY3R1YWwgYXR0cmlidXRlIG5hbWUgdG8gdXNlXHJcblx0XHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YXR0ck5hbWUgPSBwcm9wTmFtZTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCBwcm9wVmFsKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIGF0dHJOYW1lLCB0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIiA/IHByb3BWYWwgOiBwcm9wVmFsLnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIHByb3BlcnR5IGFyZSBkaWZmZXJlbnQgYW5kIHNldHMgdGhlXHJcblx0Ly8gdXBkYXRlZCB2YWx1ZSB0byB0aGUgZWxlbWVudCdzIGF0dHJpYnV0ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kXHJcblx0Ly8gZmFsc2UgaWYgbm8gY2hhbmdlIGluIHByb3BlcnR5IHZhbHVlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoaXMgaXMgbm90IGEgc3BlY2lhbCBjYXNlIChwcm9wZXJ0eSBpcyBub3QgaW4gb3VyIGxpc3QpIGp1c3QgY29tcGFyZSB0aGVtIGFuZFxyXG5cdFx0XHQvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgc2V0IHRoZSBhdHRyaWJ1dGUgdG8gdGhlIG5ldyB2YWx1ZS5cclxuXHRcdFx0aWYgKG9sZFByb3BWYWwgPT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBwcm9wTmFtZSwgdHlwZW9mIG5ld1Byb3BWYWwgPT09IFwic3RyaW5nXCIgPyBuZXdQcm9wVmFsIDogbmV3UHJvcFZhbC50b1N0cmluZygpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29tcGFyZSBvbGQgYW5kIG5ldyB2YWx1ZSB1c2luZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGlmIGRlZmluZWQ7IGlmIG5vdCwganVzdCBjb21wYXJlXHJcblx0XHQvLyB0aGUgdHdvIHZhbHVlcyBhbmQgaWYgdGhleSBhcmUgZGlmZmVyZW50IHVzZSB0aGUgbmV3IG9uZSBhcyBhIHZhbHVlIHRvIHVwZGF0ZSB3aXRoLlxyXG5cdFx0Ly8gTm90ZSB0aGF0IHRoZSBuZWl0aGVyIG9sZCBub3IgbmV3IHZhbHVlcyBjYW4gYmUgdW5kZWZpbmVkIG9yIG51bGwuXHJcblx0XHRsZXQgdXBkYXRlVmFsOiBhbnk7XHJcblx0XHRpZiAoaW5mby5kaWZmICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IGluZm8uZGlmZiggcHJvcE5hbWUsIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdXBkYXRlVmFsdWUgaXMgdW5kZWZpbmVkIHRoZW4gbm8gY2hhbmdlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdFx0XHRpZiAodXBkYXRlVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob2xkUHJvcFZhbCAhPT0gbmV3UHJvcFZhbClcclxuXHRcdFx0dXBkYXRlVmFsID0gbmV3UHJvcFZhbDtcclxuXHJcblx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0Ly8gaWYgdXBkYXRlIG1ldGhvZCBpcyBkZWZpbmVkIHVzZSBpdDsgb3RoZXJ3aXNlLCByZW1vdmUgdGhlIG9sZCB2YWx1ZSBhbmQgc2V0IHRoZSBuZXcgb25lXHJcblx0XHRpZiAoaW5mby51cGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aW5mby51cGRhdGUoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHJlbW92ZSBtZXRob2QgaXMgZGVmaW5lZCwgdXNlIGl0LiBOb3RlIHRoYXQgaWYgcmVtb3ZlIG1ldGhvZCBpcyBub3QgZGVmaW5lZFxyXG5cdFx0XHQvLyB3ZSBkb24ndCB1c2UgZWxtLnJlbW92ZUF0dHJpYnV0ZSB0byBzYXZlIHRpbWUgKGFzIHRoZSBmb2xsb3dpbmcgaW5mby5zZXQgb3JcclxuXHRcdFx0Ly8gZWxtLnNldEF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIGl0IGFueXdheS5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5yZW1vdmUoIGVsbSwgYXR0ck5hbWUpO1xyXG5cclxuXHRcdFx0aWYgKGluZm8uc2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5zZXQoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdHlwZW9mIHVwZGF0ZVZhbCA9PT0gXCJzdHJpbmdcIiA/IHVwZGF0ZVZhbCA6IHVwZGF0ZVZhbC50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlcmUgd2FzIGNoYW5nZSBpbiBhdHRyaWJ1dGUgdmFsdWUuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxyXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggcHJvcE5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5yZW1vdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggYXR0ck5hbWUpO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8gUmVnaXN0ZXIgZXZlbnRzIHdpdGggc3BlY2lhbCBuYW1lc1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZEluc2VydFwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lclByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRJbnNlcnRDYXB0dXJlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJDYXB0dXJlUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lckNhcHR1cmVQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkUmVtb3ZlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZFJlbW92ZUNhcHR1cmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lckNhcHR1cmVQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyQ2FwdHVyZVByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1yZW1vdmVcIiB9KTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIHN0eWxlIHByb3BlcnR5LiBTdHlsZSBwcm9wZXJ0eSBjYW4gYmUgc3BlY2lmaWVkIGVpdGhlciBhcyBhIHN0cmluZyBvciBhcyB0aGVcclxuLy8gQ1NTU3R5bGVEZWNsYXJhdGlvbiBvYmplY3QuIElmIHRoZSBvbGQgYW5kIG5ldyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgYXJlIG9mIGRpZmZlcmVudCB0eXBlc1xyXG4vLyB0aGUgZGlmZiBmdW5jdGlvbiByZXR1cm5zIHRoZSBuZXcgc3R5bGUgdmFsdWUuIElmIGJvdGggYXJlIG9mIHRoZSBzdHJpbmcgdHlwZSwgdGhlbiB0aGUgbmV3XHJcbi8vIHN0cmluZyB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgYm90aCBhcmUgb2YgdGhlIENTU1N0eWxlRGVjbGFyYXRpb24gdHlwZSwgdGhlbiBhbiBvYmplY3QgaXNcclxuLy8gcmV0dXJuZWQgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHN0eWxlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIGNoYW5nZWQuIEZvciB1cGRhdGVkIGl0ZW1zLCB0aGVcclxuLy8ga2V5IHZhbHVlIGlzIGZyb20gdGhlIG5ldyBzdHlsZSB2YWx1ZTsgZm9yIHJlbW92ZWQgaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIFwic3R5bGVcIik7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGNvbnN0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKGVsbSBhcyBIVE1MRWxlbWVudCkuc3R5bGU7XHJcblx0XHRmb3IoIGxldCBrZXkgaW4gcHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qga2V5VmFsOiBhbnkgPSBwcm9wVmFsW2tleV07XHJcblx0XHRcdGlmIChlbG1TdHlsZVtrZXldICE9PSBrZXlWYWwpXHJcblx0XHRcdFx0ZWxtU3R5bGVba2V5XSA9IGtleVZhbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZTdHlsZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYW55XHJcbntcclxuXHRpZiAodHlwZW9mIG9sZFByb3BWYWwgIT09IHR5cGVvZiBuZXdQcm9wVmFsKVxyXG5cdFx0cmV0dXJuIG5ld1Byb3BWYWw7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGNvbnN0IG9sZFN0eWxlID0gb2xkUHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZTtcclxuXHRcdGNvbnN0IG5ld1N0eWxlID0gbmV3UHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZTtcclxuXHJcblx0XHRjb25zdCB1cGRhdGVWYWw6IG1pbS5TdHlsZVByb3BUeXBlID0ge307XHJcblx0XHRsZXQgY2hhbmdlc0V4aXN0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG9sZCBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBuZXcgb25lLiBUaGVzZVxyXG5cdFx0Ly8gd2lsbCBiZSByZW1vdmVkLlxyXG5cdFx0Zm9yKCBsZXQga2V5IGluIG9sZFN0eWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zdCBvbGRWYWw6IGFueSA9IG9sZFN0eWxlW2tleV07XHJcblx0XHRcdGNvbnN0IG5ld1ZhbDogYW55ID0gbmV3U3R5bGVba2V5XTtcclxuXHRcdFx0aWYgKG5ld1ZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2hhbmdlc0V4aXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHR1cGRhdGVWYWxba2V5XSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChuZXdWYWwgIT09IG9sZFZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdWYWw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgbmV3IHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG9sZCBvbmUuIFRoZXNlXHJcblx0XHQvLyB3aWxsIGJlIGFkZGVkLlxyXG5cdFx0Zm9yKCBsZXQga2V5IGluIG5ld1N0eWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zdCBvbGRWYWw6IGFueSA9IG9sZFN0eWxlW2tleV07XHJcblx0XHRcdGlmIChvbGRWYWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdTdHlsZVtrZXldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNoYW5nZXNFeGlzdCA/IHVwZGF0ZVZhbCA6IHVuZGVmaW5lZDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogYW55KTogdm9pZFxyXG57XHJcblx0Y29uc3QgZWxtU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSAoZWxtIGFzIEhUTUxFbGVtZW50KS5zdHlsZTtcclxuXHRmb3IoIGxldCBrZXkgaW4gdXBkYXRlVmFsIGFzIE9iamVjdClcclxuXHR7XHJcblx0XHRjb25zdCBrZXlWYWw6IGFueSA9IHVwZGF0ZVZhbFtrZXldO1xyXG5cdFx0aWYgKGtleVZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRlbG1TdHlsZVtrZXldID0gbnVsbDtcclxuXHRcdFx0Ly9lbG1TdHlsZVtrZXldID0gXCJpbml0aWFsXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdGVsbVN0eWxlW2tleV0gPSBrZXlWYWw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vIERldGVybWluZXMgd2hldGhlciB0aGUgZmlyc3Qgc3R5bGUgaXMgYSBjb21wbGV0ZSBzdWJzZXQgb2YgdGhlIHNlY29uZCBvbmU7IHRoYXQgaXMga2V5c1xyXG4vLy8vIGluIHRoZSBmaXJzdCBzdHlsZSBhcmUgYWxsIGZvdW5kIGFuZCBoYXZlIHRoZSBzYW1lIHZhbHVlcyBpbiB0aGUgc2Vjb25kIHN0eWxlLlxyXG4vL2Z1bmN0aW9uIGlzU3R5bGUxU3Vic2V0T2ZTdHlsZTIoIHN0eWxlMTogT2JqZWN0LCBzdHlsZTI6IE9iamVjdCk6IGJvb2xlYW5cclxuLy97XHJcbi8vXHRmb3IoIGxldCBrZXkxIGluIHN0eWxlMSlcclxuLy9cdHtcclxuLy9cdFx0aWYgKHN0eWxlMVtrZXkxXSAhPT0gc3R5bGUyW2tleTFdKVxyXG4vL1x0XHRcdHJldHVybiBmYWxzZTtcclxuLy9cdH1cclxuXHJcbi8vXHRyZXR1cm4gdHJ1ZTtcclxuLy99XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiB2YWx1ZSBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIHZhbHVlIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlIHZhbHVlXHJcbi8vIGZpZWxkIG9uIHRoZSBlbGVtZW50LiBUaGUgc2V0IGFuZCB1cGRhdGUgbWV0aG9kcyB3b3JrIHRoZSBzYW1lIHdheS4gV2UgZGVmaW5lIHRoZSByZW1vdmUgbWV0aG9kXHJcbi8vIGJ5IHNldHRpbmcgdGhlIGVsbS52YWx1ZSBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0VmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gcHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZlZhbHVlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LiBXZSB3YW50IGFsd2F5cyB0byBzZXQgdGhpcyB2YWx1ZSB0byB0aGUgZWxlbWVudCBiZWNhdXNlIHRoZVxyXG5cdC8vIGVsZW1lbnQncyB2YWx1ZSBtYXkgaGF2ZSBjaG5nZWQgKGJ5IHRoZSB1c2VyIG9yIHByb2dyYW1tYXRpY2FsbHkpLlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eS4gVGhlIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSB3b3JrcyBhcyBhIHZhbHVlIHByb3BlcnR5IHdoZW4gdGhlXHJcbi8vIGVsZW1lbnQgaXMgZmlyc3QgbW91bnRlZCBhbmQgaXMgaWdub3JlZCB1cG9uIHVwZGF0ZXMgYW5kIHJlbW92YWxzLiBUaGlzIGFsbG93cyB1c2luZ1xyXG4vLyBkZWZhdWx0VmFsdWUgdG8gaW5pdGlhbGl6ZSB0aGUgY29udHJvbCB2YWx1ZSBvbmNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gZGlmZkRlZmF1bHRWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgcmV0dXJuaW5nIHVuZGVmaW5lZCB3ZSBpbmRpY2F0ZSB0aGF0IG5vIGNoYW5nZXMgd2VyZSBtYWRlIHRvIHRoZSBwcm9wZXJ0eSBhbmQgdGh1cyB0aGVcclxuXHQvLyB1cGRhdGUgd2lsbCBub3QgYmUgY2FsbGVkXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gZG8gbm90aGluZ1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgY2hlY2tlZCBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIGNoZWNrZWQgcHJvcGVydHkgYXMgYW4gYXR0cmlidXRlIHdlIHNldCB0aGVcclxuLy8gY2hlY2tlZCBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlXHJcbi8vIG1ldGhvZCBieSBzZXR0aW5nIHRoZSBlbG0uY2hlY2tlZCBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0Q2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZDaGVja2VkUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGVja2VkUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge0VsbUF0dHIsIEF0dHJQcm9wSW5mbywgRXZlbnRQcm9wSW5mbywgQ3VzdG9tQXR0clByb3BJbmZvLCBQcm9wVHlwZX0gZnJvbSBcIi4vRWxtQXR0clwiXHJcbmltcG9ydCB7U3ZnRWxtc30gZnJvbSBcIi4vU3ZnRWxtc1wiO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBET00gZWxlbWVudCBjcmVhdGVkIHVzaW5nIEpTWC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1WTiBleHRlbmRzIFZOIGltcGxlbWVudHMgbWltLklFbG1WTlxyXG57XHJcblx0Y29uc3RydWN0b3IoIHRhZ05hbWU6IHN0cmluZywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGFnIG5hbWUgYW5kIGNoaWxkcmVuXHJcblx0XHR0aGlzLmVsbU5hbWUgPSB0YWdOYW1lO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5IGFuZCByZWZcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElFbG1WTiBpbXBsZW1lbnRhdGlvblxyXG5cdHB1YmxpYyBnZXQgRWxtTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5lbG1OYW1lOyB9XHJcblx0cHVibGljIGdldCBFbG0oKTogRWxlbWVudCB7IHJldHVybiB0aGlzLmVsbTsgfVxyXG5cdHB1YmxpYyBnZXQgSXNTdmcoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzU3ZnOyB9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0cHVibGljIGdldFN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkVsbTsgfVxyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyB0eXBlLlxyXG5cdHB1YmxpYyBnZXQgdHlwZSgpOiBtaW0uVk5UeXBlIHsgcmV0dXJuIG1pbS5WTlR5cGUuRWxtOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZWxlbWVudCdzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZWxtTmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkcmVuO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSB2aXJ0dWFsIG5vZGUncyBjb250ZW50IGludG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYW4gU1ZHIG9yIEhUTUwgZWxlbWVudCBhbmQgY3JlYXRlIHRoZSBlbGVtZW50XHJcblx0XHRsZXQgc3ZnSW5mbyA9IFN2Z0VsbXMuZ2V0U3ZnRWxtSW5mbyggdGhpcy5lbG1OYW1lKTtcclxuXHRcdHRoaXMuaXNTdmcgPSBzdmdJbmZvICE9PSB1bmRlZmluZWQgJiYgKHN2Z0luZm8gIT09IHRydWUgfHwgdGhpcy5hbmNob3JETi5uYW1lc3BhY2VVUkkuZW5kc1dpdGgoIFwic3ZnXCIpKTtcclxuXHRcdHRoaXMuZWxtID0gdGhpcy5pc1N2Z1xyXG5cdFx0XHQ/IHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBTdmdFbG1zLm5hbWVzcGFjZSwgU3ZnRWxtcy5nZXRFbG1OYW1lKCBzdmdJbmZvLCB0aGlzLmVsbU5hbWUpKVxyXG5cdFx0XHQ6IHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggdGhpcy5lbG1OYW1lKTtcclxuXHJcblx0XHQvLyB0cmFuc2xhdGUgcHJvcGVydGllcyBpbnRvIGF0dHJpYnV0ZXMsIGV2ZW50cyBhbmQgY3VzdG9tIGF0dHJpYnV0ZXNcclxuXHRcdHRoaXMucGFyc2VQcm9wcygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmF0dHJzKVxyXG5cdFx0XHR0aGlzLmFkZEF0dHJzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZXZlbnRzKVxyXG5cdFx0XHR0aGlzLmFkZEV2ZW50cygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHR0aGlzLmFkZEN1c3RvbUF0dHJzKCk7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIChpZiBzcGVjaWZpZWQpXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGNvbnRlbnQgZnJvbSB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGVsZW1lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgKGFuZC9vciBjb21wb25lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGVsZW1lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuZWxtKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyB0ZXJtaW5hdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHRpZiAodGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0dGhpcy5yZW1vdmVDdXN0b21BdHRycyggdHJ1ZSk7XHJcblxyXG5cdFx0Ly8gY2xlYW4gdXBcclxuXHRcdHRoaXMuZWxtID0gbnVsbDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoaXMgaXMgdGhlIHNhbWUgdHlwZSBvZiBlbGVtZW50OyB0aGF0IGlzLCBpdCBoYXMgdGhlIHNhbWVcclxuXHRcdC8vIG5hbWUuXHJcblx0XHRyZXR1cm4gdGhpcy5lbG1OYW1lID09PSAobmV3Vk4gYXMgRWxtVk4pLmVsbU5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGNvbnN0IG5ld0VsbVZOOiBFbG1WTiA9IG5ld1ZOIGFzIEVsbVZOO1xyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcHJvcHMgYW5kIGNoaWxkcmVuXHJcblx0XHR0aGlzLnByb3BzID0gbmV3RWxtVk4ucHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gbmV3RWxtVk4uY2hpbGRyZW47XHJcblxyXG5cdFx0Ly8gY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGFuZCBjaGlsZHJlbiB3aWxsIGhhdmUgdG8gYmUgdXBkYXRlZCB2aWEgcmVuZGVyXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQ6IHRydWUsIHNob3VsZFJlbmRlcjogdHJ1ZSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRjb25zdCBuZXdFbG1WTjogRWxtVk4gPSBuZXdWTiBhcyBFbG1WTjtcclxuXHRcdG5ld0VsbVZOLnBhcnNlUHJvcHMoKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0VsbVZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIHNwZWNpZmljYXRpb25cclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdFbG1WTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RWxtVk4ua2V5O1xyXG5cclxuXHRcdHRoaXMudXBkYXRlQXR0cnMoIG5ld0VsbVZOLmF0dHJzKTtcclxuXHRcdHRoaXMudXBkYXRlRXZlbnRzKCBuZXdFbG1WTi5ldmVudHMpO1xyXG5cdFx0dGhpcy51cGRhdGVDdXN0b21BdHRycyggbmV3RWxtVk4uY3VzdG9tQXR0cnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0T3duRE4oKTogRE5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lbG07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgb3ZlciB0aGUgb3JpZ2luYWwgcHJvcGVydGllcyBhbmQgcHV0cyB0aGVtIGludG8gdGhlIGJ1Y2tldHMgb2YgYXR0cmlidXRlcywgZXZlbnRcclxuXHQvLyBsaXN0ZW5lcnMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgcGFyc2VQcm9wcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5wcm9wcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWw6IGFueSA9IHRoaXMucHJvcHNbcHJvcE5hbWVdO1xyXG5cclxuXHRcdFx0Ly8gZ2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBwcm9wZXJ0eSBhbmQgZGV0ZXJtaW5lIGl0cyB0eXBlIChyZWd1bGFyIGF0dHJpYnV0ZSwgZXZlbnRcclxuXHRcdFx0Ly8gb3IgY3VzdG9tIGF0dHJpYnV0ZSkuIE5vdGUgdGhhdCBnZXRQcm9wZXJ0eUluZm8gbWF5IHJldHVybiBudWxsIGZvciBtb3N0IHJlZ3VsYXJcclxuXHRcdFx0Ly8gYXR0cmlidXRlcyBhbmQgZXZlbnRzOyBpbiB0aGlzIGNhc2Ugd2Ugd2lsbCBjaGVjayB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0XHRcdGxldCBwcm9wSW5mbyA9IEVsbUF0dHIuZ2V0UHJvcGVydHlJbmZvKCBwcm9wTmFtZSk7XHJcblx0XHRcdGxldCBwcm9wVHlwZSA9IHByb3BJbmZvID8gcHJvcEluZm8udHlwZSA6IHRoaXMuSXNFdmVudFZhbHVlKCBwcm9wVmFsKSA/IFByb3BUeXBlLkV2ZW50IDogUHJvcFR5cGUuQXR0cjtcclxuXHJcblx0XHRcdGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQXR0cilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHRcdHRoaXMuYXR0cnMgPSB7fTtcclxuXHJcblx0XHRcdFx0dGhpcy5hdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvLCB2YWw6IHByb3BWYWwgfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuRXZlbnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgZXZlbnRJbmZvID0gdGhpcy5HZXRQcm9wQXNFdmVudFJ1blRpbWVEYXRhKCBwcm9wSW5mbywgcHJvcFZhbCk7XHJcblx0XHRcdFx0aWYgKGV2ZW50SW5mbylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmV2ZW50cyA9IHt9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5ldmVudHNbcHJvcE5hbWVdID0gZXZlbnRJbmZvO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIC8vIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQ3VzdG9tQXR0cilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHRcdHRoaXMuY3VzdG9tQXR0cnMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly8gcmVtZW1iZXIgY3VzdG9tZSBhdHRyaWJ1dGVzIHZhbHVlLiBIYW5kbGVyIHdpbGwgYmUgY3JlYXRlZCBsYXRlci5cclxuXHRcdFx0XHR0aGlzLmN1c3RvbUF0dHJzW3Byb3BOYW1lXSA9IHsgaW5mbzogcHJvcEluZm8gYXMgQ3VzdG9tQXR0clByb3BJbmZvLCB2YWw6IHByb3BWYWwsXHJcblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyOiB1bmRlZmluZWR9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydHkgdmFsdWUgaXMgb2YgdGhlIHR5cGUgdGhhdCBpcyB1c2VkIGZvciBldmVudCBoYW5kbGVycy5cclxuXHQvLyBJZiB5ZXMsIHRoZW4gcmV0dXJucyBFdmVudFJ1blRpbWVEYXRhIG9iamVjdDsgb3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuXHRwcml2YXRlIElzRXZlbnRWYWx1ZSggcHJvcFZhbDogYW55KTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0eXBlb2YgcHJvcFZhbCA9PT0gXCJmdW5jdGlvblwiIHx8XHJcblx0XHRcdEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwICYmIHR5cGVvZiBwcm9wVmFsWzBdID09PSBcImZ1bmN0aW9uXCI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydHkgdmFsdWUgaXMgb2YgdGhlIHR5cGUgdGhhdCBpcyB1c2VkIGZvciBldmVudCBoYW5kbGVycy5cclxuXHQvLyBJZiB5ZXMsIHRoZW4gcmV0dXJucyBFdmVudFJ1blRpbWVEYXRhIG9iamVjdDsgb3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuXHRwcml2YXRlIEdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIGluZm86IEV2ZW50UHJvcEluZm8sIHByb3BWYWw6IGFueSk6IEV2ZW50UnVuVGltZURhdGFcclxuXHR7XHJcblx0XHRpZiAodHlwZW9mIHByb3BWYWwgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHtcclxuXHRcdFx0bGV0IG9yZ0Z1bmMgPSBwcm9wVmFsIGFzIG1pbS5FdmVudEZ1bmNUeXBlPGFueT47XHJcblx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmMsIHVzZUNhcHR1cmU6IGZhbHNlIH07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID09PSAyICYmXHJcblx0XHRcdFx0dHlwZW9mIHByb3BWYWxbMF0gPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgcHJvcFZhbFsxXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHR7XHJcblx0XHRcdGxldCBvcmdGdW5jID0gcHJvcFZhbFswXSBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+O1xyXG5cdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jLCB1c2VDYXB0dXJlOiBwcm9wVmFsWzFdIGFzIGJvb2xlYW4gfTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmb3IgYWxsIG90aGVyIHR5cGUgY29tYmluYXRpb25zIGNvbnNpZGVyIGl0IHRvIGJlIGEgcmVndWxhciBhdHRyaWJ1dGVcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgRE9NIGF0dHJpYnV0ZXMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRBdHRycygpOiB2b2lkXHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0aWYgKCF0aGlzLmF0dHJzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5hZGRBdHRycyBjYWxsZWQgd2l0aCB0aGlzLmF0dHJzID0gbnVsbFwiKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcnRkID0gdGhpcy5hdHRyc1tuYW1lXTtcclxuXHRcdFx0RWxtQXR0ci5zZXRBdHRyKCB0aGlzLmVsbSwgbmFtZSwgcnRkLmluZm8sIHJ0ZC52YWwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIERPTSBhdHRyaWJ1dGVzIG9mIHRoaXMgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUF0dHJzKCBuZXdBdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gXCJjYWNoZVwiIHNldmVyYWwgbWVtZWJlcnMgZm9yIGZhc3RlciBhY2Nlc3NcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbTtcclxuXHRcdGxldCBvbGRBdHRycyA9IHRoaXMuYXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGF0dHJpYnV0ZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ldyBvbmVzIGFuZFxyXG5cdFx0Ly8gdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkUlREID0gb2xkQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0bGV0IG5ld1JURCA9IG5ld0F0dHJzID8gbmV3QXR0cnNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdSVEQgfHwgIW5ld1JURC52YWwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUsIHJlbW92ZSB0aGUgb2xkIHByb3BlcnR5IGFuZFxyXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgZnJvbSB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdFx0RWxtQXR0ci5yZW1vdmVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZSBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBoYXMgYSBkaWZmZXJlbnQgdmFsdWUsIHJlbW1lYmVyIHRoaXNcclxuXHRcdFx0XHRcdC8vIHZhbHVlIGFuZCBzZXQgaXQgdG8gdGhlIGF0dHJpYnV0ZSBpbiB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdFx0RWxtQXR0ci51cGRhdGVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvLCBvbGRSVEQudmFsLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGF0dHJpYnV0ZXM7IGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3QXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3QXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkQXR0cnMgJiYgKG5hbWUgaW4gb2xkQXR0cnMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRFbG1BdHRyLnNldEF0dHIoIGVsbSwgbmFtZSwgbmV3UlRELmluZm8sIG5ld1JURC52YWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hdHRycyA9IG5ld0F0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGluZm9ybWF0aW9uIGFib3V0IGV2ZW50cyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIGFkZEV2ZW50cygpOiB2b2lkXHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkRXZlbnRzIGNhbGxlZCB3aXRoIHRoaXMuZXZlbnRzID0gbnVsbFwiKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmV2ZW50cylcclxuXHRcdFx0dGhpcy5hZGRFdmVudCggbmFtZSwgdGhpcy5ldmVudHNbbmFtZV0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVc2luZyB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZSBhbmQgaXRzIHZhbHVlIHNldCB0aGUgYXBwcm9wcmlhdGUgYXR0cmlidXRlKHMpIG9uIHRoZVxyXG5cdC8vIGVsZW1lbnQuIFRoaXMgbWV0aG9kIGhhbmRsZXMgc3BlY2lhbCBjYXNlcyBvZiBwcm9wZXJ0aWVzIHdpdGggbm9uLXRyaXZpYWwgdmFsdWVzLlxyXG5cdHByaXZhdGUgYWRkRXZlbnQoIG5hbWU6IHN0cmluZywgZXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiB2b2lkXHJcblx0e1xyXG5cdFx0ZXZlbnQud3JhcHBlciA9IHRoaXMud3JhcENhbGxiYWNrKCBldmVudC5vcmdGdW5jKTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy9cclxuLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vL1xyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUV2ZW50cyggbmV3RXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEV2ZW50cyA9IHRoaXMuZXZlbnRzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBldmVudCBsaXN0ZW5lcnMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkRXZlbnRzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEV2ZW50cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRFdmVudCA9IG9sZEV2ZW50c1tuYW1lXTtcclxuXHRcdFx0XHRsZXQgbmV3RXZlbnQgPSBuZXdFdmVudHMgPyBuZXdFdmVudHNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdFdmVudClcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnQoIG5hbWUsIG9sZEV2ZW50KTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUV2ZW50KCBuYW1lLCBvbGRFdmVudCwgbmV3RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBldmVudCBsaXN0ZW5lcnMgYW5kIGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0V2ZW50cylcclxuXHRcdHtcclxuXHRcdFx0aWYgKG9sZEV2ZW50cyAmJiAobmFtZSBpbiBvbGRFdmVudHMpKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IG5ld0V2ZW50ID0gbmV3RXZlbnRzW25hbWVdO1xyXG5cdFx0XHR0aGlzLmFkZEV2ZW50KCBuYW1lLCBuZXdFdmVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ldmVudHMgPSBuZXdFdmVudHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgZXZlbnQgbGlzdGVuZXIgYXJlIGRpZmZlcmVudCBhbmQgc2V0c1xyXG5cdC8vIHRoZSB1cGRhdGVkIHZhbHVlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmQgZmFsc2UgaWYgbm8gY2hhbmdlIGhhc1xyXG5cdC8vIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudCggbmFtZTogc3RyaW5nLCBvbGRFdmVudDogRXZlbnRSdW5UaW1lRGF0YSwgbmV3RXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKG9sZEV2ZW50Lm9yZ0Z1bmMgPT09IG5ld0V2ZW50Lm9yZ0Z1bmMgJiYgb2xkRXZlbnQudXNlQ2FwdHVyZSA9PT0gbmV3RXZlbnQudXNlQ2FwdHVyZSlcclxuXHRcdHtcclxuXHRcdFx0bmV3RXZlbnQud3JhcHBlciA9IG9sZEV2ZW50LndyYXBwZXI7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBuYW1lLCBvbGRFdmVudC53cmFwcGVyLCBvbGRFdmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHRuZXdFdmVudC53cmFwcGVyID0gdGhpcy53cmFwQ2FsbGJhY2soIG5ld0V2ZW50Lm9yZ0Z1bmMpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgbmV3RXZlbnQud3JhcHBlciwgbmV3RXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCB0aGVyZSB3YXMgY2hhbmdlIGluIGV2ZW50IGxpc3RlbmVyIHZhbHVlLlxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcblx0cHJpdmF0ZSBhZGRDdXN0b21BdHRycygpOiB2b2lkXHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5hZGRDdXN0b21BdHRycyBjYWxsZWQgd2l0aCB0aGlzLmN1c3RvbUF0dHJzID0gbnVsbFwiKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0Ly8gY3JlYXRlIGFuZCBpbml0aWFsaXplIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyc1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3VzdG9tQXR0ciA9IHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXIuIElmIHdlIGNhbm5vdCBjcmVhdGUgdGhlIGhhbmRsZXIsIHJlbW92ZSB0aGUgcHJvcGVydHlcclxuXHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGN1c3RvbUF0dHIuaGFuZGxlciA9IG5ldyBjdXN0b21BdHRyLmluZm8uaGFuZGxlckNsYXNzKCB0aGlzLCBjdXN0b21BdHRyLnZhbCwgbmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBjcmVhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXN0cm95cyBjdXN0b20gYXR0cmlidXRlcyBvZiB0aGlzIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVDdXN0b21BdHRycyggaXNSZW1vdmFsOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4ucmVtb3ZlQ3VzdG9tQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5jdXN0b21BdHRycyA9IG51bGxcIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN1c3RvbUF0dHIgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGN1c3RvbUF0dHIuaGFuZGxlci50ZXJtaW5hdGUoIGlzUmVtb3ZhbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB0ZXJtaW5hdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdDdXN0b21BdHRyczogeyBbbmFtZTogc3RyaW5nXTogQ3lzdG9tQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEN1c3RvbUF0dHJzID0gdGhpcy5jdXN0b21BdHRycztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgY3VzdG9tIHByb3BlcnRpZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkQ3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQ3VzdG9tQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zdCBvbGRDdXN0b21BdHRyID0gb2xkQ3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29uc3QgbmV3Q3VzdG9tQXR0ciA9IG5ld0N1c3RvbUF0dHJzID8gbmV3Q3VzdG9tQXR0cnNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdDdXN0b21BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHRlcm1pbmF0ZSBpdHMgaGFuZGxlclxyXG5cdFx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9sZEN1c3RvbUF0dHIuaGFuZGxlci50ZXJtaW5hdGUoIGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB0ZXJtaW5hdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgY3VzdG9tIHByb3BlcnR5IGFuZCByZW1lbWJlciB0aGUgbmV3IHZhbHVlXHJcblx0XHRcdFx0XHR0cnlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0b2xkQ3VzdG9tQXR0ci5oYW5kbGVyLnVwZGF0ZSggbmV3Q3VzdG9tQXR0ci52YWwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIHVwZGF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBvbGRDdXN0b21BdHRyLmhhbmRsZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBjdXN0b20gcHJvcGVydGllcyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdDdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdDdXN0b21BdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRDdXN0b21BdHRycyAmJiAobmFtZSBpbiBvbGRDdXN0b21BdHRycykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRyc1tuYW1lXTtcclxuXHJcblx0XHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHRcdHRyeVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5ld0N1c3RvbUF0dHIuaGFuZGxlciA9IG5ldyBuZXdDdXN0b21BdHRyLmluZm8uaGFuZGxlckNsYXNzKCB0aGlzLCBuZXdDdXN0b21BdHRyLnZhbCwgbmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGNyZWF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIG5ld0N1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXN0b21BdHRycyA9IG5ld0N1c3RvbUF0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUYWcgbmFtZSBvZiBhbiBFbGVtZW50LlxyXG5cdHByaXZhdGUgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBBcnJheSBvZiBjaGlsZHJlbiBvYmplY3RzLlxyXG5cdHByaXZhdGUgY2hpbGRyZW46IGFueVtdO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LiBUaGUgaW5zdGFuY2UgaXMgY3JlYXRlZCB3aGVuIHRoZSBub2RlIGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3RcclxuXHQvLyB0aW1lLlxyXG5cdHByaXZhdGUgZWxtOiBFbGVtZW50ID0gbnVsbDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEVsZW1lbnQgaXMgU1ZHIChhcyBvcHBvc2VkIHRvIEhUTE0pLiBUaGVyZSBhcmUgc29tZSBTVkdcclxuXHQvLyBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHNhbWUgbmFtZSBhcyByZWd1bGFyIGVsZW1lbnRzIChlLmcuIDxhPikuIFRoZXJlZm9yZSwgaW4gb3JkZXIgdG9cclxuXHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBvciBub3Qgd2UgbmVlZCB0byBjaGVjayB0aGUgbmFtZXNwYWNlVVJJIG9mIHRoZSBwYXJlbnRcclxuXHQvLyAoYW5jaG9yZSkgRE9NIG5vZGUuXHJcblx0cHJpdmF0ZSBpc1N2ZzogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC4gVGhlIHJlZiBwcm9wZXJ0eSBjYW4gYmUgY2hhbmdlZCBvbiB1cGRhdGUuXHJcblx0cHJpdmF0ZSByZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBhdHRyaWJ1dGUgbmFtZXMgYW5kIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxyXG5cdHByaXZhdGUgYXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBuYW1lcyBvZiBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBwYXJhbWV0ZXJzLlxyXG5cdHByaXZhdGUgZXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGN1c3RvbSBlbGVtZW50IHByb3BlcnRpZXMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBoYW5kbGVyIG9iamVjdHMgYW5kIHZhbHVlcy5cclxuXHRwcml2YXRlIGN1c3RvbUF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBDeXN0b21BdHRyUnVuVGltZURhdGEgfTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggcmVndWxhciBhdHRyaWJ1dGVcclxuaW50ZXJmYWNlIEF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBhdHRyaWJ1dGUgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGw7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZXZlbnQgc2hvdWxkIGJlIHVzZWQgYXMgQ2FwdHVyaW5nICh0cnVlKSBvciBCdWJibGluZyAoZmFsc2UpXHJcblx0dmFsOiBhbnk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCBldmVudCBsaXN0ZW5lclxyXG5pbnRlcmZhY2UgRXZlbnRSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBldmVudCAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogRXZlbnRQcm9wSW5mbyB8IG51bGw7XHJcblxyXG5cdC8vIE9yaWdpbmFsIGV2ZW50IGNhbGxiYWNrIHBhc3NlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGV2ZW50IHByb3BlcnR5IGluIEpTWFxyXG5cdG9yZ0Z1bmM6IG1pbS5FdmVudEZ1bmNUeXBlPGFueT47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZXZlbnQgc2hvdWxkIGJlIHVzZWQgYXMgQ2FwdHVyaW5nICh0cnVlKSBvciBCdWJibGluZyAoZmFsc2UpXHJcblx0dXNlQ2FwdHVyZTogYm9vbGVhbjtcclxuXHJcblx0Ly8gV3JhcHBlciBmdW5jdGlvbiB0aGF0IHdlIGNyZWF0ZSBhbmQgYmluZCB0byBvdXIgbm9kZSBhbmQgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLiBXZSBuZWVkXHJcblx0Ly8gdGhpcyB3cmFwcGVyIGluIG9yZGVyIHRvIGNhdGNoIGV4Y2VwdGlvbiBpbiB0aGUgY2FsbGJhY2sgYW5kIHBhc3MgdGhlbSBvbiB0byBhbiBlcnJvclxyXG5cdC8vIGhhbmRsaW5nIHNlcnZpY2UuIFRoZSB3cmFwcGVyIGlzIG1hcmtlZCBvcHRpb25hbCBiZWNhdXNlIGl0IGlzIGNyZWF0ZWQgb25seSBpZiBhIG5ld1xyXG5cdC8vIGV2ZW50IGxpc3RlbmVyIGlzIGFkZGVkOyB0aGF0IGlzLCBpZiBkdXJpbmcgdXBkYXRlLCB0aGUgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24gaXMgdGhlXHJcblx0Ly8gc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byBjcmVhdGUgbmV3IHdyYXBwZXIgYmVjYXVzZSB0aGUgb2xkIG9uZSB3aWxsIGJlIHVzZWQuXHJcblx0d3JhcHBlcj86ICBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggY3VzdG9tIHByb3BlcnR5LlxyXG5pbnRlcmZhY2UgQ3lzdG9tQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGN1c3RvbSBhdHRyaWJ1dGUgLSBjYW5ub3QgYmUgbnVsbFxyXG5cdGluZm86IEN1c3RvbUF0dHJQcm9wSW5mbztcclxuXHJcblx0Ly8gQ3VycmVudCB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuXHR2YWw6IGFueTtcclxuXHJcblx0Ly8gSGFuZGxlciBvYmplY3QgdGhhdCBrbm93cyB0byBkZWFsIHdpdGggdGhlIHByb3BlcnR5IHZhbHVlc1xyXG5cdGhhbmRsZXI6IG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxhbnk+O1xyXG59O1xyXG5cclxuXHJcblxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElFdmVudFNsb3QgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycy4gTXVsdGlwbGVcclxuLy8gbGlzdGVuZXJzIGNhbiBiZSBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbj5cclxue1xyXG5cdC8vIE1ldGhvZCB0aGF0IHJhaXNlcyB0aGUgZXZlbnQgYW5kIGNhbGxzIGFsbCB0aGUgbGlzdGVuZXJzIChpZiBhbnkpLiBJdCBoYXMgdGhlIHNpZ25hdHVyZVxyXG5cdC8vIG9mIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBzbyBvbmx5IHByb3Blci10eXBlcyBwYXJhbWV0ZXJzIGNhbiBiZSBwYXNzZWQgdG8gaXQuXHJcblx0ZmlyZTogVEZ1bmM7XHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQvLyBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHRhZGQoIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LlxyXG5cdHJlbW92ZSggbGlzdGVuZXI6IFRGdW5jKTogdm9pZDtcclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC5cclxuXHRjbGVhcigpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRXZlbnRTbG90IGNsYXNzIGRlZmluZXMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycyBhcyBtZW1iZXJzIG9mIGNsYXNzZXMgd2l0aG91dCB0aGVcclxuLy8gbmVlZCBmb3IgdGhlIGNsYXNzZXMgdG8gZGVyaXZlIGZyb20gRXZlbnRUYXJnZXQgYW5kIHVzZSBzdHJpbmcgbmFtZXMgZm9yIGV2ZW50cy4gTXVsdGlwbGVcclxuLy8gbGlzdGVuZXJzIGNhbiBiZSBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+IGltcGxlbWVudHMgSUV2ZW50U2xvdDxURnVuYz5cclxue1xyXG5cdC8vIE1ldGhvZCB0aGF0IHJhaXNlcyB0aGUgZXZlbnQgYW5kIGNhbGxzIGFsbCB0aGUgbGlzdGVuZXJzIChpZiBhbnkpLiBJdCBoYXMgdGhlIHNpZ25hdHVyZVxyXG5cdC8vIG9mIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBzbyBvbmx5IHByb3Blci10eXBlcyBwYXJhbWV0ZXJzIGNhbiBiZSBwYXNzZWQgdG8gaXQuXHJcblx0cHVibGljIGZpcmU6IFRGdW5jID0gdGhpcy5yZWFsRmlyZSBhcyBhbnkgYXMgVEZ1bmM7XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuIE5vdGUgdGhhdCB0aGlzIHNob3VsZCBub3QgYmUgYSBsYW1iZGFcclxuXHQvLyBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHRwdWJsaWMgYWRkKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzID09PSBudWxsKVxyXG5cdFx0XHR0aGlzLmxpc3RlbmVycyA9IG5ldyBTZXQ8VEZ1bmM+KCk7XHJcblxyXG5cdFx0dGhpcy5saXN0ZW5lcnMuYWRkKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LlxyXG5cdHB1YmxpYyByZW1vdmUoIGxpc3RlbmVyOiBURnVuYyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGlzdGVuZXJzLmRlbGV0ZSggbGlzdGVuZXIpO1xyXG5cdFx0XHRpZiAodGhpcy5saXN0ZW5lcnMuc2l6ZSA9PT0gMClcclxuXHRcdFx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIGxpc3RlbmVyIHRvIHRoZSBldmVudC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucy4gV2hlbiB0aGVyZSBhcmUgbm8gbGlzdGVuZXJzLCB0aGlzIGZpZWxkIGlzIHNldCB0byBudWxsIHRvXHJcblx0Ly8gcHJlc2VydmUgc3BhY2UuXHJcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IFNldDxURnVuYz4gPSBudWxsO1xyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIHJlYWxseSBjYWxscyB0aGUgbGlzdGVuZXJzIGluIGEgbG9vcC4gSXQgZGVjb25zdHVjdHMgdGhlIFwiYXJndW1lbnRzXCIgdmFsdWVcclxuXHQvLyBpbiBvcmRlciB0byBwYXNzIHRoZSBwcm9wZXIgcGFyYW1ldGVycyB0byB0aGUgbGlzdGVuZXJzLlxyXG5cdHByaXZhdGUgcmVhbEZpcmUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpXHJcblx0XHRcdFx0bGlzdGVuZXIoIC4uLmFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRXZlbnRNdWx0aVNsb3QgY2xhc3MgYWxsb3dzIHJlZ2lzdGVyaW5nIGxpc3RlbmVycyBmb3IgbXVsdGlwbGUgZXZlbnRzLiBFdmVudHMgYXJlIGlkZW50aWZpZWRcclxuLy8gdXNpbmcgdGhlIHNwZWNpZmllZCB0ZW1wbGF0ZSB0eXBlLCB3aGljaCBpcyB1c3VhbGx5IChidXQgbm90IG5lY2Vzc2FyaWx5KSBhIG51bWJlci0gb3JcclxuLy8gc3RyaW5nLWJhc2VkIGVudW1lcmF0aW9uIG9yIHVuaW9uIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRXZlbnRNdWx0aVNsb3Q8VD5cclxue1xyXG5cdC8vIEFkZHMgYSBuZXcgbGlzdGVuZXIgdG8gdGhlIGdpdmVuIGV2ZW50XHJcblx0cHVibGljIGFkZExpc3RlbmVyKCBldmVudDogVCwgZXZlbnRGdW5jOiBGdW5jdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zbG90cyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnNsb3RzID0gbmV3IE1hcDxULEV2ZW50U2xvdDxGdW5jdGlvbj4+KCk7XHJcblxyXG5cdFx0bGV0IHNsb3QgPSB0aGlzLnNsb3RzLmdldCggZXZlbnQpO1xyXG5cdFx0aWYgKHNsb3QgPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0c2xvdCA9IG5ldyBFdmVudFNsb3Q8RnVuY3Rpb24+KCk7XHJcblx0XHRcdHRoaXMuc2xvdHMuc2V0KCBldmVudCwgc2xvdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2xvdC5hZGQoIGV2ZW50RnVuYyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGxpc3RlbmVyIGZyb20gdGhlIGdpdmVuIGV2ZW50XHJcblx0cHVibGljIHJlbW92ZUxpc3RlbmVyKCBldmVudDogVCwgZXZlbnRGdW5jOiBGdW5jdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zbG90cyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2xvdCA9IHRoaXMuc2xvdHMuZ2V0KCBldmVudCk7XHJcblx0XHRcdGlmIChzbG90ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0c2xvdC5yZW1vdmUoIGV2ZW50RnVuYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNsb3RzOiBNYXA8VCxFdmVudFNsb3Q8RnVuY3Rpb24+PjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBJbnRlcmZhY2UgYW5kIGNsYXNzIGZvciBzaW1wbGUgZXZlbnRzIGFjY2VwdGluZyBubyBwYXJhbWV0ZXJzLlxyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVFdmVudFNsb3QgZXh0ZW5kcyBJRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlRXZlbnRTbG90IGV4dGVuZHMgRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHJlbmRlcmluZyBmdW5jdGlvbiBhLmsuYS4gc3RhdGVsZXNzIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jVk4gZXh0ZW5kcyBWTlxyXG57XHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGlzIG5vZGUgY29ycmVzcG9uZHMgdG8gYSBmcmFnbWVudCBwbGFjZWhvbGRlci4gKi9cclxuXHRwdWJsaWMgc3RhdGljIGlzVk5hRnJhZ21lbnQoIHZuOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKHZuIGFzIEZ1bmNWTikuZnVuYyA9PT0gbWltLkZyYWdtZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggZnVuYzogbWltLkZ1bmNDb21wVHlwZSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5mdW5jID0gZnVuYztcclxuXHJcblx0XHQvLyBjb3B5IHByb3BlcnRpZXMgdG8gb3VyIG93biBvYmplY3QgZXhjbHVkaW5nIGZyYW1ld29yay1oYW5kbGVkIGtleVxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnByb3BzW3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90IHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW5cclxuXHRcdFx0Ly8gdW5kZWZpbmVkLlxyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGNoaWxkcmVuIGFzIHBhcnQgb2YgcHJvcHNcclxuXHRcdHRoaXMucHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3MgdHlwZS5cclxuXHRwdWJsaWMgZ2V0IHR5cGUoKTogbWltLlZOVHlwZSB7IHJldHVybiBtaW0uVk5UeXBlLkZ1bmNDb21wOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZnVuY3Rpb24ncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmZ1bmMubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyggdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdFx0cHVibGljIHdpbGxNb3VudCgpOiBib29sZWFuXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0XHQvLyBET00gdHJlZS5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0fVxyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIGl0IGlzIHRoZSBzYW1lIGZ1bmN0aW9uIG9iamVjdFxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyA9PT0gKG5ld1ZOIGFzIEZ1bmNWTikuZnVuYztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNWTiA9IG5ld1ZOIGFzIEZ1bmNWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RnVuY1ZOLmtleTtcclxuXHJcblx0XHQvLyB0YWtlIHByb3BlcnRpZXMgZnJvbSB0aGUgbmV3IG5vZGVcclxuXHRcdHRoaXMucHJvcHMgPSBuZXdGdW5jVk4ucHJvcHM7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIHsgc2hvdWxkQ29tbWl0OiBmYWxzZSwgc2hvdWxkUmVuZGVyOiB0cnVlIH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETlxyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgZG9uJ3QgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiBmb3IgYSBzdGF0ZWxlc3MgY29tcG9uZW50LiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZyBwcm9jZXNzLlxyXG5cdGZ1bmM6IG1pbS5GdW5jQ29tcFR5cGU7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LCBmdW5jdGlvbiBvciBlbGVtZW50LlxyXG5cdHByb3BzOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7Vk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge0NvbXBCYXNlVk59IGZyb20gXCIuL0NvbXBCYXNlVk5cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBJbnN0YW5jZVZOIGlzIGEgbm9kZSB0aGF0IGhvbGRzIGFuIGluc3RhbmNlIG9mIGFuIElDb21wb25lbnQtaW1wbGVtZW50aW5nIG9iamVjdC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBJbnN0YW5jZVZOIGV4dGVuZHMgQ29tcEJhc2VWTjxtaW0uSUNvbXBvbmVudD4gaW1wbGVtZW50cyBtaW0uSUluc3RhbmNlVk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBjb21wOiBtaW0uSUNvbXBvbmVudClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5jb21wID0gY29tcDtcclxuXHJcblx0XHQvLyB0aGUgY29tcG9uZW50IG9iamVjdCBpcyBhIGtleSBmb3IgdGhlIG5vZGVcclxuXHRcdHRoaXMua2V5ID0gY29tcDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIElJbnN0YW5jZVZOIGltcGxlbWVudGF0aW9uXHJcblx0cHVibGljIGdldCBDb21wKCk6IG1pbS5JQ29tcG9uZW50IHsgcmV0dXJuIHRoaXMuY29tcDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyB0eXBlLlxyXG5cdHB1YmxpYyBnZXQgdHlwZSgpOiBtaW0uVk5UeXBlIHsgcmV0dXJuIG1pbS5WTlR5cGUuSW5zdGFuY2VDb21wOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZ2V0RGlzcGxheU5hbWUgbWV0aG9kOyBpZiB0aGV5IGRvbid0IHRoZW4gdGhlIGRlZmF1bHQgbmFtZVxyXG5cdFx0Ly8gaXMgdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIG5hbWVcclxuXHRcdGlmICh0aGlzLmNvbXAuZ2V0RGlzcGxheU5hbWUpXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbXAuZ2V0RGlzcGxheU5hbWUoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMuY29tcC5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHRoaXMud2lsbE1vdW50SW5zdGFuY2UoIHRoaXMuY29tcCk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53aWxsVW5tb3VudEluc3RhbmNlKCB0aGlzLmNvbXApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGUgY29tcG9uZW50cyBhcmUgZnJvbSB0aGUgc2FtZSBjbGFzc1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcCA9PT0gKG5ld1ZOIGFzIEluc3RhbmNlVk4pLmNvbXAgfHxcclxuXHRcdFx0XHR0aGlzLmNvbXAuY29uc3RydWN0b3IgPT09IChuZXdWTiBhcyBJbnN0YW5jZVZOKS5jb21wLmNvbnN0cnVjdG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlPyggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gaWYgaXQgaXMgdGhlIHNhbWUgY29tcG9uZW50IGluc3RhbmNlLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXHJcblx0XHRsZXQgbmV3Q29tcCA9IChuZXdWTiBhcyBJbnN0YW5jZVZOKS5jb21wO1xyXG5cdFx0bGV0IG5lZWRzVXBkYXRpbmcgPSB0aGlzLmNvbXAgIT09IG5ld0NvbXA7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGNvcG9uZW50IGluc3RhbmNlIGFyZSBkaWZmZXJlbnQsIHRoZW4gd2UgbmVlZCB0byBwcmVwYXJlIHRoZSBuZXcgaW5zdGFuY2UgZm9yXHJcblx0XHQvLyBtb3VudGluZy5cclxuXHRcdGlmIChuZWVkc1VwZGF0aW5nKVxyXG5cdFx0XHR0aGlzLndpbGxNb3VudEluc3RhbmNlKCBuZXdDb21wKTtcclxuXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQ6IG5lZWRzVXBkYXRpbmcsIHNob3VsZFJlbmRlcjogbmVlZHNVcGRhdGluZyB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlPyggbmV3Vk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHdlIGFyZSBoZXJlIG9ubHkgaWYgdGhlIGNvbXBvbmVudCBpbnN0YW5jZXMgYXJlIGRpZmZlcmVudC4gSW4gdGhpcyBjYXNlIHdlIHNob3VsZFxyXG5cdFx0Ly8gcmVwbGFjZSB0aGUgb2xkIGNvbXBvbmVudCB3aXRoIHRoZSBuZXcgb25lIGFuZCBhbHNvIHJlcGxhY2UgaXRzIGNoYXJhY3RlcmlzdGljcy5cclxuXHRcdC8vIEZpcnN0IGluZGljYXRlIHRoYXQgb3VyIG9sZCBjb21wb25lbnQgd2lsbCBiZSB1bm1vdW50ZWRcclxuXHRcdHRoaXMud2lsbFVubW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuXHJcblx0XHRsZXQgbmV3SW5zdGFuY2VWTiA9IG5ld1ZOIGFzIEluc3RhbmNlVk47XHJcblx0XHR0aGlzLmNvbXAgPSB0aGlzLmtleSA9IG5ld0luc3RhbmNlVk4uY29tcDtcclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBnaXZlbiBjb21wb25lbnQgdGhhdCBpciB3aWxsIGJlIG1vdW50ZWQuXHJcblx0cHJpdmF0ZSB3aWxsTW91bnRJbnN0YW5jZSggY29tcDogbWltLklDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaXQgaXMgT0sgZm9yIHRoZSBjb21wb25lbnQgdG8gbm90IGltcGxlbWVudCBzZXRTaXRlIG1ldGhvZDsgaG93ZXZlciwgaXQgd2lsbCBub3QgYmVcclxuXHRcdC8vIGFibGUgdG8gdXNlIGFueSBvZiB0aGUgTWltYmwgc2VydmljZXMgaW5jbHVkaW5nIHJlcXVlc3RzIGZvciB1cGRhdGVzLlxyXG5cdFx0aWYgKHRoaXMuY29tcC5zZXRTaXRlKVxyXG5cdFx0XHRjb21wLnNldFNpdGUoIHRoaXMpO1xyXG5cclxuXHRcdGlmIChjb21wLmNvbXBvbmVudFdpbGxNb3VudClcclxuXHRcdFx0Y29tcC5jb21wb25lbnRXaWxsTW91bnQoKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm90aWZpZXMgdGhlIGdpdmVuIGNvbXBvbmVudCB0aGF0IGl0IHdpbGwgYmUgdW5tb3VudGVkLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudEluc3RhbmNlKCBjb21wOiBtaW0uSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoY29tcC5jb21wb25lbnRXaWxsVW5tb3VudClcclxuXHRcdFx0Y29tcC5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbXAuc2V0U2l0ZSlcclxuXHRcdFx0Y29tcC5zZXRTaXRlKCBudWxsKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtJRXZlbnRTbG90LCBFdmVudFNsb3R9IGZyb21cIi4vRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuL21pbVwiXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG5cdHtcclxuICAgICAgICBMb2NhbFN0eWxlczogSUxvY2FsU3R5bGVTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUxvY2FsU3R5bGVTZXJ2aWNlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2VydmljZSB0aGF0IGlzIHB1Ymxpc2hlZCBieSBjb21wb25lbnRzIHRoYXRcclxuLy8gZGVmaW5lIHRoZWlyIGxvY2FsIENTUyBzdHlsZXM7IHRoYXQgaXMsIGNvbXBvbmVudHMgZGVyaXZpbmcgZnJvbSB0aGUgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzXHJcbi8vIGNsYXNzLiBUaGUgaW50ZXJmYWNlIGFsbG93cyByZXRyaWV2aW5nIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgZGVjb3JhdGVkIHdpdGggdGhlIHVuaXF1ZVxyXG4vLyBJRCwgd2hpY2ggYXZvaWRzIGR1cGxpY2F0aW9uIG9mIG5hbWVzIGJldHdlZW4gY29tcG9uZW50cyBvZiB0aGUgc2FtZSBvciBkaWZmZXJlbnQgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbFN0eWxlU2VydmljZVxyXG57XHJcblx0Ly8gUmV0dXJucyB0aGUgdW5pcXVlIElEIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZW0gdW5pcXVlLlxyXG5cdHJlYWRvbmx5IHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJldHJ1cm5zIENTUyBjbGFzcyBvciB2YXJpYWJsZSBuYW1lIGRlY29yYXRlZCB3aXRoIGEgdW5pcXVlIElELlxyXG5cdGRlY29yYXRlTmFtZSggbmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgY29tcG9uZW50cyB0aGF0IGRlZmluZSBsb2NhbCBDU1Mgc3R5bGVzLlxyXG4vLyBXaGVuIHRoaXMgY29tcG9uZW50IGlzIG1vdW50ZWQgaXQgY3JlYXRlcyBhIG5ldyA8c3R5bGU+IGVsZW1lbnQgKHdpdGhpbiB0aGUgPGhlYWQ+IGVsZW1lbnQpLlxyXG4vLyBBbGwgY2xhc3MgbmFtZXMgYW5kIHZhcmlhYmxlIG5hbWVzIGRlZmluZWQgd2l0aGluIHRoaXMgc3R5bGUgd2lsbCBoYXZlIGEgdW5pcXVlIElEIGFkZGVkIHRvXHJcbi8vIHRoZW0gaW4gb3JkZXIgdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgbmFtZXMgYW1vbmcgb3RoZXIgY29tcG9uZW50cyAob2YgdGhlIHNhbWUgb3Igb2YgZGlmZmVyZW50XHJcbi8vIHR5cGUuIFRoaXMgY2xhc3MgYWxzbyBwdWJsaXNoZXMgYSBzZXJ2aWNlIGltcGxlbWVudGluZyB0aGUgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcblx0XHRcdFx0ZXh0ZW5kcyBtaW0uQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+XHJcblx0XHRcdFx0aW1wbGVtZW50cyBJTG9jYWxTdHlsZVNlcnZpY2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogVFByb3BzID0gbnVsbClcclxuXHR7XHJcblx0XHRzdXBlciggcHJvcHMpO1xyXG5cclxuXHRcdHRoaXMubV91bmlxdWVJRCA9IChNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCkpLnRvU3RyaW5nKCk7XHJcblx0XHR0aGlzLnJ1bGVzID0gbmV3IE1hcDxzdHJpbmcsUnVsZUluZm8+KCk7XHJcblx0XHR0aGlzLnJ1bGVOYW1lcyA9IFtdO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSA8c3R5bGU+IGVsZW1lbnQgaW4gdGhlIDxoZWFkPlxyXG5cdFx0dGhpcy5zdHlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIik7XHJcblx0XHR0aGlzLnN0eWxlRWxtLmlkID0gdGhpcy5tX3VuaXF1ZUlEO1xyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggdGhpcy5zdHlsZUVsbSk7XHJcblxyXG5cdFx0Ly8vLyBXZWJLaXQgaGFjayA6KFxyXG5cdFx0Ly90aGlzLnN0eWxlRWxtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0Ly8gSUxvY2FsU3R5bGVTZXJ2aWNlIGltcGxlbWVudGF0aW9uLlxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSB1bmlxdWUgSUQgdXNlZCB0byBkZWNvcmF0ZSBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIHRvIG1ha2UgdGhlbSB1bmlxdWUuXHJcblx0cHVibGljIGdldCB1bmlxdWVJRCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tX3VuaXF1ZUlEOyB9XHJcblxyXG5cdC8vIFJldHJ1cm5zIENTUyBjbGFzcyBvciB2YXJpYWJsZSBuYW1lIGRlY29yYXRlZCB3aXRoIGEgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBkZWNvcmF0ZU5hbWUoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lICsgdGhpcy5tX3VuaXF1ZUlEO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvLyBQdWJsaWMgaW50ZXJmYWNlLlxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBDcmVhdGVzIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGNyZWF0ZVN0eWxlUnVsZSggbmFtZTogc3RyaW5nLCBzZWxlY3Rvcj86IHN0cmluZywgcHJvcHM/OiBtaW0uU3R5bGVQcm9wVHlwZSk6IElNQ3NzU3R5bGVSdWxlXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGR1bW15IHN0eWxlIHJ1bGVcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMuY3JlYXRlRHVtbXlSdWxlKCBuYW1lLCBcImR1bW15IHt9XCIpO1xyXG5cdFx0bGV0IGNzc29tUnVsZTogQ1NTU3R5bGVSdWxlID0gaW5mby5jc3NvbVJ1bGUgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBzdHlsZSBydWxlIG9iamVjdFxyXG5cdFx0bGV0IG1jc3NTdHlsZVJ1bGU6IE1Dc3NTdHlsZVJ1bGUgPSBuZXcgTUNzc1N0eWxlUnVsZSggdGhpcy51bmlxdWVJRCwgY3Nzb21SdWxlKTtcclxuXHRcdGlmIChzZWxlY3RvcilcclxuXHRcdFx0bWNzc1N0eWxlUnVsZS5zZXRTZWxlY3Rvciggc2VsZWN0b3IpO1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0XHRtY3NzU3R5bGVSdWxlLnNldFByb3BlcnRpZXMoIHByb3BzKTtcclxuXHJcblx0XHRpbmZvLm1jc3NSdWxlID0gbWNzc1N0eWxlUnVsZTtcclxuXHRcdHJldHVybiBtY3NzU3R5bGVSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGEgcnVsZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBnZXRSdWxlKCBuYW1lOiBzdHJpbmcpOiBJTUNzc1J1bGVcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLnJ1bGVzLmdldCggbmFtZSk7XHJcblx0XHRyZXR1cm4gaW5mbyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogaW5mby5tY3NzUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhIHJ1bGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgcmVtb3ZlUnVsZSggbmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGNvbXBvbmVudERpZE1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnNpdGUucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIiwgdGhpcyk7XHJcblx0fVx0XHJcblxyXG5cclxuXHJcblx0cHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnNpdGUudW5wdWJsaXNoU2VydmljZSggXCJMb2NhbFN0eWxlc1wiKTtcclxuXHJcblx0XHR0aGlzLnN0eWxlRWxtLnJlbW92ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHN0eWxlIHJ1bGUuXHJcblx0cHJpdmF0ZSBjcmVhdGVEdW1teVJ1bGUoIG5hbWU6IHN0cmluZywgcnVsZVRleHQ6IHN0cmluZyk6IFJ1bGVJbmZvXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgcnVsZSB3aXRoIHRoaXMgbmFtZVxyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5ydWxlcy5nZXQoIG5hbWUpO1xyXG5cdFx0aWYgKGluZm8gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5yZW1vdmVSdWxlKCBuYW1lKTtcclxuXHJcblx0XHQvLyB0aGUgbmV3IHJ1bGUgd2lsbCBiZWNvbWVzIHRoZSBsYXN0IGluIHRoZSBhcnJheSBvZiBydWxlc1xyXG5cdFx0bGV0IGluZGV4ID0gdGhpcy5ydWxlTmFtZXMubGVuZ3RoO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBkdW1teSBzdHlsZSBydWxlXHJcblx0XHRsZXQgc2hlZXQ6IENTU1N0eWxlU2hlZXQgPSB0aGlzLnN0eWxlRWxtLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQ7XHJcblx0XHRzaGVldC5pbnNlcnRSdWxlKCBydWxlVGV4dCwgaW5kZXgpO1xyXG5cdFx0bGV0IGNzc29tUnVsZTogQ1NTUnVsZSA9IHNoZWV0LnJ1bGVzW2luZGV4XTtcclxuXHJcblx0XHQvLyBhZGQgdGhlIHJ1bGUgdG8gb3VyIGludGVybmFsIHN0cnVjdHVyZXNcclxuXHRcdHRoaXMucnVsZU5hbWVzLnB1c2goIG5hbWUpO1xyXG5cdFx0aW5mbyA9IHsgbWNzc1J1bGU6IG51bGwsIGNzc29tUnVsZSwgaW5kZXggfTtcclxuXHRcdHRoaXMucnVsZXMuc2V0KCBuYW1lLCBpbmZvKTtcclxuXHJcblx0XHRyZXR1cm4gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5pcXVlIElEIHRoYXQgaXMgdXNlZCB0byBkZWNvcmF0ZSBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIGRlZmluZWQgYnkgdGhlIGNvbXBvbmVudC5cclxuXHRwcml2YXRlIG1fdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gU3R5bGUgZWxlbWVudCBET00gb2JqZWN0LiBJcyBkZWZpbmVkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcblx0cHJpdmF0ZSBzdHlsZUVsbTogSFRNTFN0eWxlRWxlbWVudDtcclxuXHJcblx0Ly8gTWFwIG9mIHJ1bGVzIGJ5IHRoZWlyIG5hbWVzLlxyXG5cdHByaXZhdGUgcnVsZXM6IE1hcDxzdHJpbmcsUnVsZUluZm8+O1xyXG5cclxuXHQvLyBBcnJheSBvZiBydWxlIG5hbWVzLiBUaGlzIGlzIG5lZWRlZCB0byBhZGp1c3QgaW5kZXhlcyBvZiBydWxlcyBhZnRlciBhIHJ1bGUgaXMgcmVtb3ZlZC5cclxuXHRwcml2YXRlIHJ1bGVOYW1lczogc3RyaW5nW107XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIZWxwZXIgdHlwZSB0aGF0IGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgQ1NTIHJ1bGUgYWRkZWQgdG8gQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxudHlwZSBSdWxlSW5mbyA9IHsgbWNzc1J1bGU6IElNQ3NzUnVsZSwgY3Nzb21SdWxlOiBDU1NSdWxlLCBpbmRleDogbnVtYmVyIH07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSU1Dc3NSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIHJ1bGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNQ3NzUnVsZVxyXG57XHJcblx0Ly8gVW5pcXVlIElEIHVzZWQgaW4gY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzXHJcblx0cmVhZG9ubHkgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gQ1NTT00gcnVsZVxyXG5cdHJlYWRvbmx5IGNzc29tUnVsZTogQ1NTUnVsZTtcclxuXHJcblx0Ly8gQXBwZW5kcyB1bmlxdWUgSUQgdG8gdGhlIGdpdmVuIG5hbWUuXHJcblx0ZGVjb3JhdGUoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxuXHJcblx0Ly8gUmVwbGFjZXMgdGhlIG1hcmtlciBcIigqKVwiIGluIHRoZSBnaXZlbiBuYW1lIHdpdGggdGhlIHVuaXF1ZSBJRFxyXG5cdHJlcGxhY2UoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1Dc3NSdWxlIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3Igb2JqZWN0cyByZXByZXNlbnRlZCBkaWZmZXJlbnQgdHlwZXMgb2YgQ1NTIHJ1bGVzIHRoYXRcclxuLy8gYXJlIGNyZWF0ZWQgYnkgdGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBjb21wb25lbnQuIFRoaXMgb2JqZWN0IHNpbXBseSBrZWVwcyB0aGUgdW5pcXVlXHJcbi8vIElEIHRoYXQgc2hvdWxkIGJlIHVzZWQgYnkgZGVyaXZlZCBjbGFzc2VzIHdoZW4gY3JlYXRpbmcgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIHNvIHRoYXQgdGhleVxyXG4vLyBhcmUgZ2xvYmFsbHkgdW5pcXVlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgTUNzc1J1bGVCYXNlPFQgZXh0ZW5kcyBDU1NSdWxlPiBpbXBsZW1lbnRzIElNQ3NzUnVsZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHVuaXF1ZUlEOiBzdHJpbmcsIGNzc29tUnVsZTogVClcclxuXHR7XHJcblx0XHR0aGlzLnVuaXF1ZUlEID0gdW5pcXVlSUQ7XHJcblx0XHR0aGlzLmNzc29tUnVsZSA9IGNzc29tUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQXBwZW5kcyB1bmlxdWUgSUQgdG8gdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIGRlY29yYXRlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZSArIHRoaXMudW5pcXVlSUQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcGxhY2VzIHRoZSBtYXJrZXIgXCIoKilcIiBpbiB0aGUgZ2l2ZW4gbmFtZSB3aXRoIHRoZSB1bmlxdWUgSURcclxuXHRwdWJsaWMgcmVwbGFjZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUucmVwbGFjZSggXCIoKilcIiwgdGhpcy51bmlxdWVJRCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuaXF1ZSBJRCB1c2VkIGluIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lc1xyXG5cdHB1YmxpYyB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBDU1NPTSBydWxlXHJcblx0cHVibGljIGNzc29tUnVsZTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElNQ3NzU3R5bGVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1Dc3NTdHlsZVJ1bGVcclxue1xyXG5cdC8vIFNldHMgdGhlIHJ1bGUgc2VsZWN0b3IuIFRoZSBzdHJpbmcgY2FuIGNvbnRhaW4gdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWRcclxuXHQvLyB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0U2VsZWN0b3IoIHNlbGVjdG9yOiBzdHJpbmcpO1xyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBCb3RoIHByb3BlcnR5IG5hbWUgYW5kIHByb3BlcnR5IHZhbHVlIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0UHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8vIFNldHMgc2V2ZXJhbCBzdHlsZSBwcm9wZXJ0aWVzLiBCb3RoIHByb3BlcnR5IG5hbWVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXMgY2FuIHVzZSB0aGVcclxuXHQvLyAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRzZXRQcm9wZXJ0aWVzKCBwcm9wczogbWltLlN0eWxlUHJvcFR5cGUpOiB2b2lkO1xyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBQcm9wZXJ0eSBuYW1lIGNhbiB1c2UgdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmVcclxuXHQvLyBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cmVtb3ZlUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTUNzc1N0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgdGhhdCBjb250YWlucyBhIHNlbGVjdG9yIGFuZCBhIHNldCBvZlxyXG4vLyBzdHlsZSBwcm9wZXJ0eSBuYW1lLXZhbHVlIHBhaXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgTUNzc1N0eWxlUnVsZSBleHRlbmRzIE1Dc3NSdWxlQmFzZTxDU1NTdHlsZVJ1bGU+IGltcGxlbWVudHMgSU1Dc3NTdHlsZVJ1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB1bmlxdWVJRDogc3RyaW5nLCBjc3NvbVJ1bGU6IENTU1N0eWxlUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggdW5pcXVlSUQsIGNzc29tUnVsZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIHJ1bGUgc2VsZWN0b3IuIFRoZSBzdHJpbmcgY2FuIGNvbnRhaW4gdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWRcclxuXHQvLyB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFNlbGVjdG9yKCBzZWxlY3Rvcjogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnNlbGVjdG9yVGV4dCA9IHRoaXMucmVwbGFjZSggc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBCb3RoIHByb3BlcnR5IG5hbWUgYW5kIHByb3BlcnR5IHZhbHVlIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGUuc2V0UHJvcGVydHkoIHRoaXMucmVwbGFjZSggcHJvcE5hbWUpLCB0aGlzLnJlcGxhY2UoIHByb3BWYWwpLFxyXG5cdFx0XHRcdFx0XHRpbXBvcnRhbnQ/IFwiaW1wb3J0YW50XCIgOiB1bmRlZmluZWQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHNldmVyYWwgc3R5bGUgcHJvcGVydGllcy4gQm90aCBwcm9wZXJ0eSBuYW1lcyBhbmQgcHJvcGVydHkgdmFsdWVzIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFByb3BlcnRpZXMoIHByb3BzOiBtaW0uU3R5bGVQcm9wVHlwZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlW3RoaXMucmVwbGFjZSggcHJvcE5hbWUpXSA9IHRoaXMucmVwbGFjZSggcHJvcHNbcHJvcE5hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gUHJvcGVydHkgbmFtZSBjYW4gdXNlIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlXHJcblx0Ly8gc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyByZW1vdmVQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNzc29tUnVsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSggdGhpcy5yZXBsYWNlKCBwcm9wTmFtZSkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtSb290Vk59IGZyb20gXCIuL1Jvb3RWTlwiXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RFcnJvclVJIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cHJpdmF0ZSByb290Vk46IFJvb3RWTjtcclxuXHRwcml2YXRlIGVycjogYW55O1xyXG5cdHByaXZhdGUgcGF0aFN0cmluZzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvciggcm9vdFZOOiBSb290Vk4sIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucm9vdFZOID0gcm9vdFZOO1xyXG5cdFx0dGhpcy5lcnIgPSBlcnI7XHJcblx0XHR0aGlzLnBhdGhTdHJpbmcgPSBwYXRoID8gcGF0aC5qb2luKCBcIiBcXHUyMTkyIFwiKSA6IFwiXCI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IGlkPVwicm9vdEVycm9yXCIgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwic3RhcnRcIn19PlxyXG5cdFx0XHQ8ZGl2Pnt0aGlzLmVyci5NZXNzYWdlfTwvZGl2PlxyXG5cdFx0XHQ8ZGl2Pnt0aGlzLnBhdGhTdHJpbmd9PC9kaXY+XHJcblx0XHRcdDxociBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0vPlxyXG5cdFx0XHQ8YnV0dG9uIGtleT1cImJ0blJlc3RhcnRcIiBjbGljaz17dGhpcy5vblJlc3RhcnR9PlJlc3RhcnQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblJlc3RhcnQgPSAoKTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMucm9vdFZOLnJlc3RhcnQoKTtcclxuXHR9O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vdFdhaXRpbmdVSSBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiTG9hZGluZyAuLi5cIjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBJUm9vdFZOfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7IFZOQ2hhaW4gfSBmcm9tIFwiLi9WTkNoYWluXCI7XHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21Db250ZW50fSBmcm9tIFwiLi9WTkNoYWluRnVuY3NcIlxyXG5pbXBvcnQge1ZORGlzcEFjdGlvbiwgVk5EaXNwLCBWTkRpc3BHcm91cH0gZnJvbSBcIi4vVk5EaXNwXCJcclxuaW1wb3J0IHtSb290RXJyb3JVSSwgUm9vdFdhaXRpbmdVSX0gZnJvbSBcIi4vUm9vdFVJXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vIGxldCBnX3JlcXVlc3RJZGxlQ2FsbGJhY2s6IChmdW5jOiAoKT0+dm9pZCkgPT4gbnVtYmVyID0gKHdpbmRvdyBhcyBhbnkpLnJlcXVlc3RJZGxlQ2FsbGJhY2tcclxuLy8gXHRcdFx0XHQ/ICh3aW5kb3cgYXMgYW55KS5yZXF1ZXN0SWRsZUNhbGxiYWNrXHJcbi8vIFx0XHRcdFx0OiAoZnVuYzogKCk9PnZvaWQpID0+IHNldFRpbWVvdXQoIGZ1bmMpO1xyXG5cclxuLy8gbGV0IGdfY2FuY2VsSWRsZUNhbGxiYWNrOiAoaGFuZGxlKSA9PiB2b2lkID0gKHdpbmRvdyBhcyBhbnkpLmNhbmNlbElkbGVDYWxsYmFja1xyXG4vLyBcdFx0XHRcdD8gKHdpbmRvdyBhcyBhbnkpLmNhbmNlbENhbGxiYWNrXHJcbi8vIFx0XHRcdFx0OiAoaGFuZGxlKSA9PiBjbGVhclRpbWVvdXQoIGhhbmRsZSk7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUm9vdFZOIGNsYXNzIGlzIHVzZWQgYXMgYSB0b3AtbGV2ZWwgdmlydHVhbCBub2RlIGZvciBhbGwgcmVuZGVyZWQgdHJlZXMuIFJvb3RWTiBzZXJ2ZXNcclxuLy8gYXMgYW4gZXJyb3IgYm91bmRhcnkgb2YgbGFzdCByZXNvcnQuIFdoZW4gaXQgY2F0Y2hlcyBhbiBlcnJvciB0aGF0IHdhc24ndCBjYXVnaHQgYnkgYW55XHJcbi8vIGRlc2NlbmRhbmQgbm9kZSwgaXQgZGlzcGxheXMgYSBzaW1wbGUgVUkgdGhhdCBzaG93cyB0aGUgZXJyb3IgYW5kIGFsbG93cyB0aGUgdXNlciB0byByZXN0YXJ0LlxyXG4vLyBSb290Vk4gYWxzbyBtYW5hZ2VzIHNlcnZpY2UgcHVibGlzaGVycyBhbmQgc3Vic2NyaWJlcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgUm9vdFZOIGV4dGVuZHMgVk4gaW1wbGVtZW50cyBJUm9vdFZOLCBtaW0uSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCBhbmNob3JETjogRE4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKVxyXG5cclxuXHRcdHRoaXMuYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHRcdHRoaXMuaW5pdGlhbGl6ZSggbnVsbCk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cdFx0dGhpcy53aWxsTW91bnQoKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdHB1YmxpYyBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgY29udGVudCB0byBiZSByZW5kZXJlZCB1bmRlciB0aGlzIHJvb3Qgbm9kZSBhbmQgdHJpZ2dlcnMgdXBkYXRlLlxyXG5cdHByaXZhdGUgc2V0Q29udGVudCggY29udGVudDogYW55LCBzeW5jOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0aWYgKHN5bmMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlLmFkZCggdGhpcyk7XHJcblx0XHRcdHRoaXMub25TY2hlZHVsZWRGcmFtZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuXHQvLyB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGluIGEgc3luY2hyb25vdXMgd2F5LlxyXG5cdHB1YmxpYyBzdGF0aWMgbW91bnRSb290U3luYyggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0XHQvLyBwcm9wZXJ0eVxyXG5cdFx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRcdGlmICghcm9vdFZOKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjcmVhdGUgcm9vdCBub2RlIGFuZCByZW1lbWJlciBpdCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcblx0XHRcdChyZWFsQW5jaG9yRE4gYXMgYW55KVtSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV0gPSByb290Vk47XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdC8vIHNldCBjb250ZW50IHRvIHRoZSByb290IG5vZGUgYW5kIHRyaWdnZXIgc3luY2hyb25vdXMgdXBkYXRlXHJcblx0XHRyb290Vk4uc2V0Q29udGVudCggY29udGVudCwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVubW91bnRzIGEgcm9vdCBub2RlIHRoYXQgd2FzIGNyZWF0ZWQgdXNpbmcgbW91bnRSb290U3luYy5cclxuXHRwdWJsaWMgc3RhdGljIHVubW91bnRSb290U3luYyggYW5jaG9yRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblx0XHRpZiAoIXJlYWxBbmNob3JETilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGdldCBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eS5cclxuXHRcdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0XHRpZiAoIXJvb3RWTilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdFx0ZGVsZXRlIHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblxyXG5cdFx0cm9vdFZOLnNldENvbnRlbnQoIG51bGwsIHRydWUpO1xyXG5cdFx0cm9vdFZOLndpbGxVbm1vdW50KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgYSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24gb3IgYSBjb21wb25lbnQgaW5zdGFuY2UpXHJcblx0Ly8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuXHRwdWJsaWMgc3RhdGljIG1vdW50Um9vdCggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0XHQvLyBwcm9wZXJ0eVxyXG5cdFx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRcdGlmICghcm9vdFZOKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjcmVhdGUgcm9vdCBub2RlIGFuZCByZW1lbWJlciBpdCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcblx0XHRcdChyZWFsQW5jaG9yRE4gYXMgYW55KVtSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV0gPSByb290Vk47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2V0IGNvbnRlbnQgdG8gdGhlIHJvb3Qgbm9kZSwgd2hpY2ggd2lsbCB0cmlnZ2VyIHVwZGF0ZVxyXG5cdFx0cm9vdFZOLnNldENvbnRlbnQoIGNvbnRlbnQsIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5tb3VudHMgYSByb290IG5vZGUgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyBzX01vdW50Um9vdC5cclxuXHRwdWJsaWMgc3RhdGljIHVubW91bnRSb290KCBhbmNob3JETjogRE4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHRcdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gZ2V0IG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5LlxyXG5cdFx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRcdGlmICghcm9vdFZOKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gcmVtb3ZlIG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRkZWxldGUgcmVhbEFuY2hvckROW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHJcblx0XHQvLyBkZXN0cnVjdCB0aGUgcm9vdCBub2RlIChhc3luY2hyb25vdXNseSlcclxuXHRcdHJvb3RWTi5zZXRDb250ZW50KCBudWxsLCBmYWxzZSk7XHJcblx0XHRyb290Vk4uc2NoZWR1bGVDYWxsKCAoKSA9PiByb290Vk4ud2lsbFVubW91bnQoKSApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3MgdHlwZS5cclxuXHRwdWJsaWMgZ2V0IHR5cGUoKTogbWltLlZOVHlwZSB7IHJldHVybiBtaW0uVk5UeXBlLlJvb3Q7IH1cclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiUm9vdFwiOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGEgY2hhaW4gb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVycm9yVUkpXHJcblx0XHRcdHJldHVybiB0aGlzLmVycm9yVUk7XHJcblx0XHRlbHNlIGlmICh0aGlzLndhaXRpbmdVSSlcclxuXHRcdFx0cmV0dXJuIHRoaXMud2FpdGluZ1VJO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHRoaXMucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB0aGlzKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnVucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdXBwb3J0c0Vycm9ySGFuZGxpbmcoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBvciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChlcnIgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvbWlzZSA9IGVyciBhcyBQcm9taXNlPGFueT47XHJcblx0XHRcdHRoaXMudGhyb3duUHJvbWlzZXMuYWRkKCBwcm9taXNlKTtcclxuXHRcdFx0cHJvbWlzZS50aGVuKCAoKSA9PiB7IHRoaXMub25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlKTsgfSk7XHJcblx0XHRcdHByb21pc2UuY2F0Y2goICgpID0+IHsgdGhpcy5vblByb21pc2VGdWxmaWxsZWQoIHByb21pc2UpOyB9KTtcclxuXHRcdFx0aWYgKCF0aGlzLndhaXRpbmdVSSlcclxuXHRcdFx0XHR0aGlzLndhaXRpbmdVSSA9IG5ldyBSb290V2FpdGluZ1VJKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZXJyb3JVSSA9IG5ldyBSb290RXJyb3JVSSggdGhpcywgZXJyLCBwYXRoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIGFuZCBub3QgdG8gYW55IG9mIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldE93bkROKCk6IEROIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgbWltYmxBbmNob3JQcm9wTmFtZSA9IFwiX19taW1ibEFuY2hvclByb3BOYW1lX19cIjtcclxuXHJcblxyXG5cclxuXHQvLyBEaXNwbGF5cyB0aGUgY29udGVudCBvcmlnaW5hbGx5IHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHVibGljIHJlc3RhcnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNsZWFyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byBiZSB1cGRhdGVkXHJcblx0XHR0aGlzLmVycm9yVUkgPSBudWxsO1xyXG5cdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwdWJsaWMgbm90aWZ5U2VydmljZVB1Ymxpc2hlZDxLIGV4dGVuZHMga2V5b2YgbWltLklTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgc291cmNlVk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHRoaXMuc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0aW5mbyA9IG5ldyBTZXJ2aWNlSW5mbygpO1xyXG5cdFx0XHR0aGlzLnNlcnZpY2VJbmZvcy5zZXQoIGlkLCBpbmZvKTtcclxuXHRcdH1cclxuXHJcblx0XHRpbmZvLnB1Ymxpc2hpbmdWTnMuYWRkKCBzb3VyY2VWTik7XHJcblxyXG5cdFx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRcdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdFx0dm4ubm90aWZ5U2VydmljZUNoYW5nZWQoIGlkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgdW5wdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZDxLIGV4dGVuZHMga2V5b2YgbWltLklTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgc291cmNlVk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHRoaXMuc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGluZm8ucHVibGlzaGluZ1ZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0XHRpZiAoaW5mby5wdWJsaXNoaW5nVk5zLnNpemUgPT09IDAgJiYgaW5mby5zdWJzY3JpYmVkVk5zLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMuc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdFx0XHRmb3IoIGxldCB2biBvZiBpbmZvLnN1YnNjcmliZWRWTnMpXHJcblx0XHRcdFx0dm4ubm90aWZ5U2VydmljZUNoYW5nZWQoIGlkKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyBzdWJzY3JpYmVkIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgbm90aWZ5U2VydmljZVN1YnNjcmliZWQ8SyBleHRlbmRzIGtleW9mIG1pbS5JU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNvdXJjZVZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU2VydmljZUluZm8gPSB0aGlzLnNlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdFx0dGhpcy5zZXJ2aWNlSW5mb3Muc2V0KCBpZCwgaW5mbyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5mby5zdWJzY3JpYmVkVk5zLmFkZCggc291cmNlVk4pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZDxLIGV4dGVuZHMga2V5b2YgbWltLklTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgc291cmNlVk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHRoaXMuc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGluZm8uc3Vic2NyaWJlZFZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0XHRpZiAoaW5mby5wdWJsaXNoaW5nVk5zLnNpemUgPT09IDAgJiYgaW5mby5zdWJzY3JpYmVkVk5zLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMuc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwdWJsaWMgcmVxdWVzdE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgVXBkYXRlIHJlcXVlc3RlZCBmb3IgdmlydHVhbCBub2RlICcke3ZuLnBhdGguam9pbihcIi9cIil9JyB0aGF0IGRvZXNuJ3QgaGF2ZSBhbmNob3IgRE9NIG5vZGVgKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWRkIHRoaXMgbm9kZSB0byB0aGUgbWFwIG9mIG5vZGVzIGZvciB3aGljaCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2VtZW50IG9yXHJcblx0XHQvLyBkZWxldGlvbiBpcyBzY2hlZHVsZWQuIE5vdGUgdGhhdCBhIG5vZGUgd2lsbCBvbmx5IGJlIHByZXNlbnQgb25jZSBpbiB0aGUgbWFwIG5vXHJcblx0XHQvLyBtYXR0ZXIgaG93IG1hbnkgdGltZXMgaXQgY2FsbHMgcmVxdWVzdFVwZGF0ZSgpLlxyXG5cdFx0dGhpcy52bnNTY2hlZHVsZWRGb3JVcGRhdGUuYWRkKCB2bik7XHJcblxyXG5cdFx0Ly8gdGhlIHVwZGF0ZSBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGUgZHVyaW5nIGFcclxuXHRcdC8vIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uIGV4ZWN1dGlvbi5cclxuXHRcdGlmICh0aGlzLnNjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUpXHJcblx0XHRcdHRoaXMucmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VscyBhIHByZXZpb3VzbHkgcmVxdWVzdGVkIHVwZGF0ZSBmb3IgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHVibGljIGNhbmNlbE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB0cnkgdG8gcmVtb3ZlIHRoaXMgbm9kZSBmcm9tIHRoZSBzZXQgb2Ygbm9kZXMgZm9yIHdoaWNoIHVwZGF0ZSBvciByZXBsYWNlbWVudCBvclxyXG5cdFx0Ly8gZGVsZXRpb24gaXMgc2NoZWR1bGVkLlxyXG5cdFx0aWYgKCF0aGlzLnZuc1NjaGVkdWxlZEZvclVwZGF0ZS5kZWxldGUoIHZuKSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGlmIHRoaXMgd2FzIHRoZSBsYXN0IG5vZGUgaW4gdGhlIHNldCwgY2FuY2VsIHRoZSByZXF1ZXN0IHRvIHNjaGVkdWxlIHVwZGF0ZSBwcm9jZXNzaW5nLlxyXG5cdFx0aWYgKHRoaXMuc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSlcclxuXHRcdFx0dGhpcy5jYW5jZWxGcmFtZVJlcXVlc3RJZk5lZWRlZCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcblx0Ly8gaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0cHVibGljIHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFmdW5jKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5hZGQoIGZ1bmMpO1xyXG5cclxuXHRcdFx0Ly8gYSBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBpcyBhbHdheXMgc2NoZWR1bGVkIGluIHRoZSBuZXh0IGZyYW1lIGV2ZW4gaWYgdGhlXHJcblx0XHRcdC8vIGNhbGwgaXMgbWFkZSBmcm9tIGFub3RoZXIgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24uXHJcblx0XHRcdHRoaXMucmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLmFkZCggZnVuYyk7XHJcblxyXG5cdFx0XHQvLyBhbiBcImFmdGVyIHVwZGF0ZVwiIGZ1bmN0aW9uIGlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBjeWNsZSB1bmxlc3MgdGhlIHJlcXVlc3QgaXMgbWFkZVxyXG5cdFx0XHQvLyBlaXRoZXIgZnJvbSBhIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uIGV4ZWN1dGlvbiBvciBkdXJpbmcgYSBub2RlIHVwZGF0ZS5cclxuXHRcdFx0aWYgKHRoaXMuc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSAmJiB0aGlzLnNjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5VcGRhdGUpXHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWxzIGEgY2FsbCB0aGF0IGhhcyBiZWVuIHNjaGVkdWxlZCB0byBiZSBtYWRlIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWRcclxuXHQvLyBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdHB1YmxpYyBjYW5jZWxTY2hlZHVsZWRGdW5jQ2FsbCggZnVuYzogbWltLlNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIWZ1bmMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAoYmVmb3JlVXBkYXRlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLmRlbGV0ZSggZnVuYyk7XHJcblx0XHRcdHRoaXMuY2FuY2VsRnJhbWVSZXF1ZXN0SWZOZWVkZWQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLmRlbGV0ZSggZnVuYyk7XHJcblx0XHRcdGlmICh0aGlzLnNjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUgJiYgdGhpcy5zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlKVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyB1bnN1YnNjcmliZWQgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBmdWxmaWxsZWQgcHJvbWlzZSBmcm9tIG91ciBpbnRlcm5hbCBsaXN0IGFuZCBpZiB0aGUgbGlzdCBpcyBlbXB0eSBhc2tzIHRvXHJcblx0Ly8gcmUtcmVuZGVyXHJcblx0cHJpdmF0ZSBvblByb21pc2VGdWxmaWxsZWQoIHByb21pc2U6IFByb21pc2U8YW55Pik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnRocm93blByb21pc2VzLmRlbGV0ZSggcHJvbWlzZSk7XHJcblx0XHRpZiAodGhpcy50aHJvd25Qcm9taXNlcy5zaXplID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLndhaXRpbmdVSSA9IG51bGw7XHJcblx0XHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNhbGwgdG8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHNob3VsZCBiZSBtYWRlIGFmdGVyIGFuIHVwZGF0ZSBvciBhXHJcblx0Ly8gY2FsbCBoYXMgYmVlbiBzY2hlZHVsZWQuXHJcblx0cHJpdmF0ZSByZXF1ZXN0RnJhbWVJZk5lZWRlZCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2NoZWR1bGVkRnJhbWVIYW5kbGUgPT09IDApXHJcblx0XHRcdHRoaXMuc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMub25TY2hlZHVsZWRGcmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgY2FsbCB0byBjYW5jZWxBbmltYXRpb25GcmFtZSBzaG91bGQgYmUgbWFkZSBhZnRlciBhIHNjaGVkdWxlZCB1cGRhdGVcclxuXHQvLyBvciBjYWxsIGhhcyBiZWVuIGNhbmNlbGVkLlxyXG5cdHByaXZhdGUgY2FuY2VsRnJhbWVSZXF1ZXN0SWZOZWVkZWQoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuc1NjaGVkdWxlZEZvclVwZGF0ZS5zaXplID09PSAwICYmXHJcblx0XHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuc2l6ZSA9PT0gMCAmJlxyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2l6ZSA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMuc2NoZWR1bGVkRnJhbWVIYW5kbGUpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlZEZyYW1lSGFuZGxlID0gMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gYSBuZXcgVUkgY3ljbGUgd2hlbiB0aGVyZSBpcyBhIG5lZWQgdG8gdXBkYXRlIFVJIGNvbXBvbmVudHNcclxuXHRwcml2YXRlIG9uU2NoZWR1bGVkRnJhbWUgPSAoKTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdC8vIGNsZWFyIHRoZSBzY2hlZHVsZWQgZnJhbWUgaGFuZGxlIHNvIHRoYXQgbmV3IHVwZGF0ZSBvciByZXBsYWNlbWVudCByZXF1ZXN0cyB3aWxsXHJcblx0XHQvLyBzY2hlZHVsZSBhIG5ldyBmcmFtZS5cclxuXHRcdHRoaXMuc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSAwO1xyXG5cclxuXHRcdC8vIGluY3JlbWVudCB0aWNrIG51bWJlci5cclxuXHRcdHRoaXMuY3VycmVudFRpY2srKztcclxuXHJcblx0XHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBiZWZvcmUgdXBkYXRpbmcgY29tcG9uZW50cy4gSWYgdGhpcyBmdW5jdGlvblxyXG5cdFx0Ly8gY2FsbHMgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kIG9yIHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRlcyxcclxuXHRcdC8vIHRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGlzIGN5Y2xlLiBIb3dldmVyLCBpZiBpdCBzY2hlZHVsZXMgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkXHJcblx0XHQvLyBhZnRlciB1cGRhdGVzLCBpdCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBuZXh0IGN5Y2xlLlxyXG5cdFx0aWYgKHRoaXMuY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuc2l6ZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGU7XHJcblx0XHRcdGNvbnN0IGNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gdGhpcy5jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZTtcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBTZXQ8bWltLlNjaGVkdWxlZEZ1bmNUeXBlPigpO1xyXG5cdFx0XHR0aGlzLmNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLCBcImJlZm9yZVwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy52bnNTY2hlZHVsZWRGb3JVcGRhdGUuc2l6ZSA+IDApXHJcblx0XHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG5ldyBEZXRhaWxlZFN0YXRzKCBgTWltYmwgdXBkYXRlIGN5Y2xlICR7dGhpcy5jdXJyZW50VGlja306IGApO1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMuc3RhcnQoKTtcclxuLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIGludGVybmFsIHNldCBvZiBub2RlcyBhbmQgcmUtY3JlYXRlIGl0IHNvIHRoYXQgaXQgaXMgcmVhZHkgZm9yIG5ld1xyXG5cdFx0XHQvLyB1cGRhdGUgcmVxdWVzdHMuIEFycmFuZ2Ugc2NoZWR1bGVkIG5vZGVzIGJ5IHRoZWlyIG5lc3RpbmcgZGVwdGhzIGFuZCBwZXJmb3JtIHVwZGF0ZXMuXHJcblx0XHRcdHRoaXMuc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5VcGRhdGU7XHJcblx0XHRcdGxldCB2bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSB0aGlzLnZuc1NjaGVkdWxlZEZvclVwZGF0ZTtcclxuXHRcdFx0dGhpcy52bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cdFx0XHR0aGlzLnBlcmZvcm1Db21taXRQaGFzZSggdGhpcy5wZXJmb3JtUmVuZGVyUGhhc2UoIHRoaXMuYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlKSkpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLnN0b3AoIHRydWUpO1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBudWxsO1xyXG4vLy8vLy8vLy8vLy8vXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRpbmcgY29tcG9uZW50c1xyXG5cdFx0aWYgKHRoaXMuY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zaXplID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLkFmdGVyVXBkYXRlO1xyXG5cdFx0XHRjb25zdCBjYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlID0gdGhpcy5jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlO1xyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgU2V0PG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHRcdFx0dGhpcy5jYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLCBcImFmdGVyXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5JZGxlO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gQXJyYW5nZXMgdGhlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBzbyB0aGF0IHdlIHVwZGF0ZSBcInVwcGVyXCIgbm9kZXMgYmVmb3JlXHJcblx0Ly8gdGhlIGxvd2VyIG9uZXMuIFRoaXMgY2FuIGhlbHAgYXZvaWQgdHdvIGNvbmRpdGlvbnM6XHJcblx0Ly9cdC0gcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IHR3aWNlOiBmaXJzdCBiZWNhdXNlIGl0IGNhbGxlZCB1cGRhdGVNZSwgYW5kIHNlY29uZFxyXG5cdC8vXHRcdGJlY2F1c2UgaXRzIHBhcmVudCB3YXMgYWxzbyB1cGRhdGVkLlxyXG5cdC8vXHQtIHVubmVjZXNzYXJ5IHJlbmRlcmluZyBhIGNoaWxkIGNvbXBvbmVudCBiZWZvcmUgaXQgaXMgcmVtb3ZlZCBieSB0aGUgcGFyZW50XHJcblx0Ly8gV2UgYWxsb2NhdGUgY29udGlndW91cyBhcnJheSB3aGVyZSBpbmRpY2VzIGNvcnJlc3BvbmQgdG8gZGVwdGguIEVhY2ggZWxlbWVudCBpbiB0aGlzXHJcblx0Ly8gYXJyYXkgd2lsbCBlaXRoZXIgYmUgdW5kZWZpbmVkIG9yIGNvbnRhaW4gYW4gYXJyYXkgb2Ygbm9kZXMgYXQgdGhpcyBkZXB0aC5cclxuXHRwcml2YXRlIGFycmFuZ2VOb2Rlc0J5RGVwdGgoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZTogU2V0PFZOPik6IFZOW11bXVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBhIHNwYXJzZSBhcnJheSBvZiBjZXJ0YWluIHJlYXNvbmFibGUgc2l6ZS4gSWYgd2UgaGF2ZSBkZXB0aHMgZ3JlYXRlciB0aGFuIHRoaXMsXHJcblx0XHQvLyB0aGUgYXJyYXkgd2lsbCBncm93IGF1dG9tYXRpY2FsbHkgKGFsdGhvdWdoIGl0IGlzIGxlc3MgcGVyZm9ybWFudCBpdCBpcyBzdGlsbCBhY2NlcHRhYmxlKS5cclxuXHRcdGxldCB2bnNCeURlcHRoOiBWTltdW10gPSBuZXcgQXJyYXk8Vk5bXT4oMTAwKTtcclxuXHRcdHZuc1NjaGVkdWxlZEZvclVwZGF0ZS5mb3JFYWNoKCAodm46IFZOKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYXJyID0gdm5zQnlEZXB0aFt2bi5kZXB0aF07XHJcblx0XHRcdGlmICghYXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YXJyID0gW107XHJcblx0XHRcdFx0dm5zQnlEZXB0aFt2bi5kZXB0aF0gPSBhcnI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGFyci5wdXNoKHZuKTtcclxuXHRcdH0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIHZuc0J5RGVwdGg7XHJcblx0fVxyXG5cclxuXHQvLyBQZXJmb3JtcyByZW5kZXJpbmcgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuXHQvLyBzdWItbm9kZXMgd2hlcmUgbmVjZXNzYXJ5LiBSZXR1cm5zIGFycmF5IG9mIFZORGlzcCBzdHJ1Y3R1cmVzIGZvciBlYWNoIHVwZGF0ZWQgbm9kZS5cclxuXHRwcml2YXRlIHBlcmZvcm1SZW5kZXJQaGFzZSggdm5zQnlEZXB0aDogVk5bXVtdKTogVk5EaXNwW11cclxuXHR7XHJcblx0XHRsZXQgdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10gPSBbXTtcclxuXHJcblx0XHQvLyBpdGVyYXRpb24gb3ZlciB0aGUgc3BhcnNlIGFycmF5IHNraXBzIHRoZSBob2xlcy5cclxuXHRcdHZuc0J5RGVwdGguZm9yRWFjaCggKHZuczogVk5bXSkgPT4geyB2bnMuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgY29tcG9uZW50IHdhcyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSwgZG9uJ3QgdXBkYXRlIGl0IGFnYWluXHJcblx0XHRcdFx0aWYgKHZuLmxhc3RVcGRhdGVUaWNrID09PSB0aGlzLmN1cnJlbnRUaWNrKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR1cGRhdGVkTm9kZURpc3BzLnB1c2goIHRoaXMudXBkYXRlU3RlbVZpcnR1YWwoIHZuKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGZpbmQgdGhlIG5lYXJlc3QgZXJyb3IgaGFuZGxpbmcgc2VydmljZS4gSWYgbm9ib2R5IGVsc2UsIGl0IGlzIGltcGxlbWVudGVkXHJcblx0XHRcdFx0Ly8gYnkgdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0XHRcdFx0bGV0IGVycm9yU2VydmljZTogbWltLklFcnJvckhhbmRsaW5nU2VydmljZSA9IHZuLmZpbmRTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdGVycm9yU2VydmljZS5yZXBvcnRFcnJvciggZXJyLCB0aGlzLmN1cnJlbnRWTiA/IHRoaXMuY3VycmVudFZOLnBhdGggOiBudWxsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5jdXJyZW50Vk4gPSBudWxsO1xyXG5cdFx0fSl9KTtcclxuXHJcblx0XHRyZXR1cm4gdXBkYXRlZE5vZGVEaXNwcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGVyZm9ybXMgdGhlIGNvbW1pdCBwaGFzZSBmb3IgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYW5kIHJlY3Vyc2l2ZWx5IGZvciB0aGVpclxyXG5cdC8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFRoZSBDb21taXQgcGhhc2UgY29uc2lzdHMgb2YgdXBkYXRpbmcgRE9NIGFuZCBjYWxsaW5nIGxpZmUtY3ljbGVcclxuXHQvLyBtZXRob2RzIGRpZE1vdW50LCBkaWRVcGRhdGUgYW5kIHdpbGxVbm1vdW50LlxyXG5cdHByaXZhdGUgcGVyZm9ybUNvbW1pdFBoYXNlKCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB3ZSBkb24ndCB1bnRpY2lwYXRlIGFueSBleGNlcHRpb25zIGhlcmUgYmVjYXVzZSB3ZSBkb24ndCBpbnZva2UgM3JkLXBhcnR5IGNvZGUgaGVyZS5cclxuXHRcdHVwZGF0ZWROb2RlRGlzcHMuZm9yRWFjaCggKGRpc3A6IFZORGlzcCkgPT5cclxuXHRcdHtcclxuXHRcdFx0dGhpcy51cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIGJlZm9yZSBvciBhZnRlciB1cGRhdGUgY3ljbGUuXHJcblx0cHJpdmF0ZSBjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBmdW5jczogU2V0PCgpPT52b2lkPiwgYmVmb3JlT3JBZnRlcjogc3RyaW5nKVxyXG5cdHtcclxuXHRcdGZ1bmNzLmZvckVhY2goIChmdW5jKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZ1bmMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBmdW5jdGlvbiAke2JlZm9yZU9yQWZ0ZXJ9IHVwZGF0aW5nIGNvbXBvbmVudHNcXG5gLCBlcnIpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgY3JlYXRlcyBhbmQgcmVuZGVycyB0aGlzIG5vZGUgYW5kIGl0cyBzdWItbm9kZXMuIFRoaXMgbWV0aG9kIGlzIGludm9rZWRcclxuXHQvLyB3aGVuIGEgbm9kZSBpcyBmaXJzdCBtb3VudGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXNcclxuXHQvLyBtZXRob2QgKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2V0U2l0ZSBvciByZW5kZXIgbWV0aG9kcyksXHJcblx0Ly8gdGhlIGNvbXBvbmVudCBpcyBhc2tlZCB0byBoYW5kbGUgdGhlIGVycm9yLiBJZiB0aGUgY29tcG9uZW50IGhhbmRsZXMgdGhlIGVycm9yLCB0aGVcclxuXHQvLyBjb250ZW50IHJldHVybmVkIGZyb20gdGhlIGVycm9yIGhhbmRsaW5nIG1ldGhvZCBpcyByZW5kZXJlZDsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9uXHJcblx0Ly8gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXQgaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdFxyXG5cdC8vIGhhbmRsZXMgaXQgb3IgdXAgdG8gdGhlIHJvb3Qgbm9kZS5cclxuXHRwcml2YXRlIGNyZWF0ZVZpcnR1YWwoIHZuOiBWTiwgcGFyZW50OiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBzZXQgZXNzZW50aWFsIG5vZGUgcGFyYW1ldGVycy5cclxuXHRcdHZuLmluaXRpYWxpemUoIHBhcmVudCk7XHJcblxyXG5cdFx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0XHRsZXQgY3VycmVudFZOID0gdm47XHJcblx0XHR0aGlzLmN1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGlmIHdpbGxNb3VudCByZXR1cm5zIGZhbHNlLCB0aGUgbm9kZSBuZXZlciBoYXMgYW55IHN1Yi1ub2RlcyAoZS5nLiB0ZXh0IG5vZGVzKVxyXG5cdFx0aWYgKHZuLndpbGxNb3VudCgpKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGhhbmRsZSBlcnJvcnMgd2UgZG9uJ3QgbmVlZCB0byB3YXN0ZSB0aW1lIHRvIHVzZSB0cnkvY2F0Y2hcclxuXHRcdFx0aWYgKCF2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcoKSlcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm4pO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRcdFx0XHQvLyBsZXQgdGhlIG5vZGUgaGFuZGxlIGl0cyBvd24gZXJyb3IgYW5kIHJlLXJlbmRlclxyXG5cdFx0XHRcdFx0dm4uaGFuZGxlRXJyb3IoIGVyciwgdGhpcy5jdXJyZW50Vk4ucGF0aCk7XHJcblx0XHRcdFx0XHR0aGlzLmNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Ym5vZGVzXHJcblx0XHR0aGlzLmN1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGVyZm9ybXMgY3JlYXRpb24gYW5kIGluaXRpYWwgcmVuZGVyaW5nIG9uIHRoZSBzdWItbm9kZXMgb2Ygb3VyIG5vZGUuXHJcblx0cHJpdmF0ZSBjcmVhdGVTdWJOb2Rlc1ZpcnR1YWwoIHZuOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuXHRcdGlmIChzdWJOb2RlcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ZuID0gc3ViTm9kZXMuZmlyc3Q7IHN2biAhPT0gbnVsbDsgc3ZuID0gc3ZuLm5leHQpXHJcblx0XHRcdFx0dGhpcy5jcmVhdGVWaXJ0dWFsKCBzdm4sIHZuKTtcclxuXHRcdH1cclxuXHJcblx0XHR2bi5zdWJOb2RlcyA9IHN1Yk5vZGVzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSBjcmVhdGVzIERPTSBub2RlcyBmb3IgdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwcml2YXRlIGNyZWF0ZVBoeXNpY2FsKCB2bjogVk4sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKVxyXG5cdHtcclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdFx0dm4uYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblx0XHR2bi5tb3VudCgpO1xyXG5cclxuXHRcdC8vIElmIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGl0cyBvd24gRE9NIG5vZGUsIGFkZCBpdCB0byB0aGUgRE9NIHRyZWUgYW5kIHVzZSBpdCBhcyBhblxyXG5cdFx0Ly8gYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdFx0bGV0IG93bkROOiBETiA9IHZuLmdldE93bkROKCk7XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBvdXIgb3duIERPTSBub2RlLCBhZGQgaXQgdW5kZXIgdGhlIGFuY2hvciBub2RlXHJcblx0XHRpZiAob3duRE4gIT09IG51bGwpXHJcblx0XHRcdHZuLmFuY2hvckROLmluc2VydEJlZm9yZSggb3duRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHQvLyBpZiB0aGUgbm9kZSBoYXMgc3ViLW5vZGVzLCBhZGQgRE9NIG5vZGVzIGZvciB0aGVtXHJcblx0XHRpZiAodm4uc3ViTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdC8vIGRldGVybWluZSB3aGF0IG5vZGVzIHRvIHVzZSBhcyBhbmNob3IgYW5kIFwiYmVmb3JlXCIgZm9yIHRoZSBzdWItbm9kZXNcclxuXHRcdFx0bGV0IG5ld0FuY2hvckROOiBETiA9IG93bkROID09PSBudWxsID8gYW5jaG9yRE4gOiBvd25ETjtcclxuXHRcdFx0bGV0IG5ld0JlZm9yZUROOiBETiA9IG93bkROID09PSBudWxsID8gYmVmb3JlRE4gOiBudWxsO1xyXG5cclxuXHRcdFx0Ly8gbW91bnQgYWxsIHN1Yi1ub2Rlc1xyXG5cdFx0XHRmb3IoIGxldCBzdm4gPSB2bi5zdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZVBoeXNpY2FsKCBzdm4sIG5ld0FuY2hvckROLCBuZXdCZWZvcmVETik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IGNhbGxzIHdpbGxVbm1vdW50IG9uIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSBwcmVEZXN0cm95KCB2bjogVk4pXHJcblx0e1xyXG5cdFx0aWYgKHZuLnN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBzdm4gPSB2bi5zdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdFx0XHR0aGlzLnByZURlc3Ryb3koIHN2bik7XHJcblx0XHR9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR2bi53aWxsVW5tb3VudCgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYE5vZGUgJHt2bi5uYW1lfSB0aHJldyBleGNlcHRpb24gJyR7ZXJyLm1lc3NhZ2V9JyBpbiB3aWxsVW5tb3VudGApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSByZW1vdmVzIERPTSBub2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSBkZXN0cm95UGh5c2ljYWwoIHZuOiBWTilcclxuXHR7XHJcblx0XHQvLyBnZXQgdGhlIERPTSBub2RlIGJlZm9yZSB3ZSBjYWxsIHVubW91bnQsIGJlY2F1c2UgdW5tb3VudCB3aWxsIGNsZWFyIGl0LlxyXG5cdFx0bGV0IG93bkROOiBETiA9IHZuLmdldE93bkROKCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblx0XHR2bi51bm1vdW50KCk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93biBET00gbm9kZSwgd2UgcmVtb3ZlIGl0IGZyb20gdGhlIERPTSB0cmVlLiBJbiB0aGlzIGNhc2UsXHJcblx0XHQvLyB3ZSBkb24ndCBuZWVkIHRvIHJlY3Vyc2UgaW50byBzdWItbm9kZXMsIGJlY2F1c2UgdGhleSBhcmUgcmVtb3ZlZCB3aXRoIHRoZSBwYXJlbnQuXHJcblx0XHRpZiAob3duRE4pXHJcblx0XHR7XHJcblx0XHRcdC8vIG91ciBET00gbm9kZXMgY2FuIG9ubHkgYmUgZWl0aGVyIEVsZW1lbnQgb3IgVGV4dCAtIGJvdGggZGVyaXZlIGZyb20gQ2hpbGROb2RlXHJcblx0XHRcdChvd25ETiBhcyBhbnkgYXMgQ2hpbGROb2RlKS5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHZuLnN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBsb29wIG92ZXIgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCBiZWNhdXNlIHRoaXMgd2F5IHRoZSBET00gZWxlbWVudCByZW1vdmFsIGlzXHJcblx0XHRcdC8vIGVhc2llci5cclxuXHRcdFx0Zm9yKCBsZXQgc3ZuID0gdm4uc3ViTm9kZXMubGFzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ucHJldilcclxuXHRcdFx0XHR0aGlzLmRlc3Ryb3lQaHlzaWNhbCggc3ZuKTtcclxuXHRcdH1cclxuXHJcblx0XHR2bi50ZXJtaW5hdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgcmVuZGVycyB0aGUgY2hpbGRyZW4gaWYgdGhpcyBub2RlLiBUaGlzIG1ldGhvZCBpcyBvbmx5IGludm9rZWQgaWYgYSBub2RlIGlzXHJcblx0Ly8gYmVpbmcgdXBkYXRlZCBhcyBhIHJlc3VsdCBvZiB1cGRhdGVNZSBpbnZvY2F0aW9uLlxyXG5cdHByaXZhdGUgdXBkYXRlU3RlbVZpcnR1YWwoIHZuOiBWTik6IFZORGlzcFxyXG5cdHtcclxuXHRcdGxldCBkaXNwID0gbmV3IFZORGlzcCggdm4sIFZORGlzcEFjdGlvbi5Vbmtub3duLCB2bik7XHJcblx0XHR0aGlzLnVwZGF0ZVZpcnR1YWwoIGRpc3ApO1xyXG5cdFx0cmV0dXJuIGRpc3A7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IHJlbmRlcnMgdGhpcyBub2RlIGFuZCB1cGRhdGVzIGl0cyBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5LiBUaGlzIG1ldGhvZCBpc1xyXG5cdC8vIGludm9rZWQgd2hlbiBhIG5vZGUgaXMgYmVpbmcgdXBkYXRlZCBlaXRoZXIgYXMgYSByZXN1bHQgb2YgdXBkYXRlTWUgaW52b2NhdGlvbiBvciBiZWNhdXNlXHJcblx0Ly8gdGhlIHBhcmVudCBub2RlIHdhcyB1cGRhdGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXMgbWV0aG9kXHJcblx0Ly8gKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2hvdWxkVXBkYXRlIG9yIHJlbmRlciBtZXRob2RzKSwgdGhlIGNvbXBvbmVudCBpcyBhc2tlZFxyXG5cdC8vIHRvIGhhbmRsZSB0aGUgZXJyb3IuIElmIHRoZSBjb21wb25lbnQgaGFuZGxlcyB0aGUgZXJyb3IsIHRoZSBjb250ZW50IHJldHVybmVkIGZyb20gdGhlXHJcblx0Ly8gZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb24gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGVcclxuXHQvLyBleGNlcHRpb24gaXMgcHJvcGFnYXRlZCB1cCB1bnRpbCBpdCBpcyBoYW5kbGVkIGJ5IGEgbm9kZSB0aGF0IGhhbmRsZXMgaXQgb3IgdXAgdG8gdGhlIHJvb3RcclxuXHQvLyBub2RlLlxyXG5cdHByaXZhdGUgdXBkYXRlVmlydHVhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdFx0bGV0IGN1cnJlbnRWTiA9IGRpc3Aub2xkVk47XHJcblx0XHR0aGlzLmN1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHJcblx0XHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGhhbmRsZSBlcnJvcnMgd2UgZG9uJ3QgbmVlZCB0byB3YXN0ZSB0aW1lIHRvIHVzZSB0cnkvY2F0Y2hcclxuXHRcdGlmICghZGlzcC5vbGRWTi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcoKSlcclxuXHRcdFx0dGhpcy51cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3ApO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3ViTm9kZXNWaXJ0dWFsKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5vbGRWTi5oYW5kbGVFcnJvciggZXJyLCB0aGlzLmN1cnJlbnRWTi5wYXRoKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZSBub2RlIHdhcyB1cGRhdGVkIGluIHRoaXMgY3ljbGUgLSB0aGlzIHdpbGwgcHJldmVudCBpdCBmcm9tIFxyXG5cdFx0Ly8gcmVuZGVyaW5nIGFnYWluIGluIHRoaXMgY3ljbGUuXHJcblx0XHRkaXNwLm9sZFZOLmxhc3RVcGRhdGVUaWNrID0gdGhpcy5jdXJyZW50VGljaztcclxuXHJcblx0XHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWJub2Rlc1xyXG5cdFx0dGhpcy5jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBvZiB0aGUgdXBkYXRlIG9uIHRoZSBzdWItbm9kZXMgb2YgdGhlIG5vZGUsIHdoaWNoIGlzIHBhc3NlZCBhc1xyXG5cdC8vIHRoZSBvbGRWTiBtZW1iZXIgb2YgdGhlIFZORGlzcCBzdHJ1Y3R1cmUuXHJcblx0cHJpdmF0ZSB1cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW5kZXIgdGhlIG5ldyBjb250ZW50IGFuZCBidWlsZCBhcnJheSBvZiBkaXNwb3NpdGlvbnMgb2JqZWN0cyBmb3IgdGhlIHN1Yi1ub2Rlcy5cclxuXHRcdGRpc3AuYnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCk7XHJcblxyXG5cdFx0Ly8gZm9yIG5vZGVzIHRvIGJlIHJlbW92ZWQsIGNhbGwgd2lsbFVubW91bnRcclxuXHRcdGlmIChkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHN2biBvZiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHRcdFx0dGhpcy5wcmVEZXN0cm95KCBzdm4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBlcmZvcm0gcmVuZGVyaW5nIGZvciBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQsIHJlcGxhY2VkIG9yIHVwZGF0ZWRcclxuXHRcdGlmIChkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHRcdHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3AgPSBzdWJOb2RlRGlzcC5vbGRWTi5wcmVwYXJlVXBkYXRlKCBzdWJOb2RlRGlzcC5uZXdWTik7XHJcblx0XHRcdFx0XHRpZiAoc3ViTm9kZURpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVmlydHVhbCggc3ViTm9kZURpc3ApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLmNyZWF0ZVZpcnR1YWwoIHN1Yk5vZGVEaXNwLm5ld1ZOLCBkaXNwLm9sZFZOKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSBwZXJmb3JtcyBET00gdXBkYXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSB1cGRhdGVQaHlzaWNhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCB0aGUgbm9kZSB3aG9zZSBjaGlsZHJlbiBhcmUgYmVpbmcgdXBkYXRlZC4gVGhpcyBpcyBhbHdheXMgdGhlIG9sZFZOIG1lbWJlciBvZlxyXG5cdFx0Ly8gdGhlIGRpc3Agc3RydWN0dXJlLlxyXG5cdFx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHQvLyBpdCBtaWdodCBoYXBwZW4gdGhhdCB0aGUgbm9kZSBiZWluZyB1cGRhdGVkIHdhcyBhbHJlYWR5IGRlbGV0ZWQgYnkgaXRzIHBhcmVudC4gQ2hlY2tcclxuXHRcdC8vIGZvciB0aGlzIHNpdHVhdGlvbiBhbmQgZXhpdCBpZiB0aGlzIGlzIHRoZSBjYXNlXHJcblx0XHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHRoZSBhbmNob3Igbm9kZSB0byB1c2Ugd2hlbiBpbnNlcnRpbmcgbmV3IG9yIG1vdmluZyBleGlzdGluZyBzdWItbm9kZXMuIElmXHJcblx0XHQvLyBvdXIgbm9kZSBoYXMgaXRzIG93biBETiwgaXQgd2lsbCBiZSB0aGUgYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzOyBvdGhlcndpc2UsIG91ciBub2RlJ3NcclxuXHRcdC8vIGFuY2hvciB3aWxsIGJlIHRoZSBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMgdG9vLlxyXG5cdFx0bGV0IG93bkROID0gdm4uZ2V0T3duRE4oKTtcclxuXHRcdGxldCBhbmNob3JETiA9IG93bkROICE9PSBudWxsID8gb3duRE4gOiB2bi5hbmNob3JETjtcclxuXHJcblx0XHQvLyBpZiB0aGlzIHZpcnR1YWwgbm9kZSBkb2Vzbid0IGRlZmluZSBpdHMgb3duIERPTSBub2RlICh0cnVlIGZvciBjb21wb25lbnRzKSwgd2Ugd2lsbFxyXG5cdFx0Ly8gbmVlZCB0byBmaW5kIGEgRE9NIG5vZGUgYmVmb3JlIHdoaWNoIHRvIHN0YXJ0IGluc2VydGluZyBuZXcgbm9kZXMuIE51bGwgbWVhbnNcclxuXHRcdC8vIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSBhbmNob3Igbm9kZSdzIGNoaWxkcmVuLlxyXG5cdFx0bGV0IGJlZm9yZUROID0gb3duRE4gIT09IG51bGwgPyBudWxsIDogdm4uZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIGFuY2hvckROKTtcclxuXHJcblx0XHQvLyBjbGVhciBvdXIgY3VycmVudCBsaXN0IG9mIHN1Yi1ub2RlcyAtIHdlIHdpbGwgcG9wdWxhdGUgaXQgd2hpbGUgdXBkYXRpbmcgdGhlbVxyXG5cdFx0dm4uc3ViTm9kZXMgPSBkaXNwLnN1Yk5vZGVEaXNwcyA/IG5ldyBWTkNoYWluKCkgOiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8gcmVtb3ZlIGZyb20gRE9NIHRoZSBvbGQgbm9kZXMgZGVzaWduYXRlZCB0byBiZSByZW1vdmVkICh0aGF0IGlzLCB0aG9zZSBmb3Igd2hpY2ggdGhlcmVcclxuXHRcdC8vIGlzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd2lsbCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2UgaXQpIGFuZCB0aGVuIHRob3NlXHJcblx0XHQvLyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLiBXZSBuZWVkIHRvIHJlbW92ZSBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZ1xyXG5cdFx0Ly8gbmV3IC0gb25lIHJlYXNvbiBpcyB0byBwcm9wZXJseSBtYWludGFpbiByZWZlcmVuY2VzLlxyXG5cdFx0aWYgKGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ZuIG9mIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHRcdFx0XHR0aGlzLmRlc3Ryb3lQaHlzaWNhbCggc3ZuKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBwZXJmb3JtIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZWl0aGVyIGdyb3VwcyBvciBpbmRpdmlkdWFsIG5vZGVzLlxyXG5cdFx0aWYgKGRpc3Auc3ViTm9kZUdyb3VwcylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy51cGRhdGVQaHlzaWNhbEJ5R3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdFx0dGhpcy5hcnJhbmdlR3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVBoeXNpY2FsQnlOb2Rlcyggdm4sIGRpc3Auc3ViTm9kZURpc3BzLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQZXJmb3JtcyB1cGRhdGVzIGFuZCBpbnNlcnRzIGJ5IGdyb3Vwcy4gV2UgZ28gZnJvbSB0aGUgZW5kIG9mIHRoZSBsaXN0IG9mIHVwZGF0ZSBncm91cHNcclxuXHQvLyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5cdHByaXZhdGUgdXBkYXRlUGh5c2ljYWxCeUdyb3VwcyggcGFyZW50Vk46IFZOLCBkaXNwczogVk5EaXNwW10sIGdyb3VwczogVk5EaXNwR3JvdXBbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgaSA9IGdyb3Vwcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGdyb3VwID0gZ3JvdXBzW2ldO1xyXG5cclxuXHRcdFx0Ly8gZmlyc3QgdXBkYXRlIGV2ZXJ5IHN1Yi1ub2RlIGluIHRoZSBncm91cCBhbmQgaXRzIHN1Yi1zdWItbm9kZXNcclxuXHRcdFx0Zm9yKCBsZXQgaiA9IGdyb3VwLmxhc3Q7IGogPj0gZ3JvdXAuZmlyc3Q7IGotLSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBkaXNwID0gZGlzcHNbal07XHJcblx0XHRcdFx0bGV0IG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdFx0XHRpZiAoZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBvbGRWTiA9IGRpc3Aub2xkVk47XHJcblx0XHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZENvbW1pdClcclxuXHRcdFx0XHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdFx0XHRvbGRWTi5jb21taXRVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVBoeXNpY2FsKCBkaXNwKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgZmlyc3RETiA9IG9sZFZOLmdldEZpcnN0RE4oKTtcclxuXHRcdFx0XHRcdGlmIChmaXJzdEROICE9PSBudWxsKVxyXG5cdFx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblxyXG5cdFx0XHRcdFx0Ly8gdGhlIG9sZCBub2RlIHJlbWFpbnMgYXMgYSBzdWItbm9kZVxyXG5cdFx0XHRcdFx0cGFyZW50Vk4uc3ViTm9kZXMuaW5zZXJ0Vk4oIG9sZFZOKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHNpbmNlIHdlIGFyZSBnb2luZyBmcm9tIHRoZSBmaXJzdCBub2RlIGluIHRoZSBncm91cCB0byB0aGUgbGFzdCB3ZSBhbHdheXMgdXNlXHJcblx0XHRcdFx0XHQvLyB0aGUgc2FtZSBiZWZvcmVETiBmb3IgaW5zZXJ0aW9uXHJcblx0XHRcdFx0XHR0aGlzLmNyZWF0ZVBoeXNpY2FsKCBuZXdWTiwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdFx0XHQvLyBpZiB0aGUgbmV3IG5vZGUgZGVmaW5lcyBhIERPTSBub2RlLCBpdCBiZWNvbWVzIHRoZSBET00gbm9kZSBiZWZvcmUgd2hpY2hcclxuXHRcdFx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0XHRcdGxldCBmaXJzdEROID0gbmV3Vk4uZ2V0Rmlyc3RETigpO1xyXG5cdFx0XHRcdFx0aWYgKGZpcnN0RE4gIT09IG51bGwpXHJcblx0XHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHJcblx0XHRcdFx0XHQvLyB0aGUgbmV3IG5vZGUgYmVjb21lcyBhIHN1Yi1ub2RlXHJcblx0XHRcdFx0XHRwYXJlbnRWTi5zdWJOb2Rlcy5pbnNlcnRWTiggbmV3Vk4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gbm93IHRoYXQgYWxsIG5vZGVzIGluIHRoZSBncm91cCBoYXZlIGJlZW4gdXBkYXRlZCBvciBpbnNlcnRlZCwgd2UgY2FuIGRldGVybWluZVxyXG5cdFx0XHQvLyBmaXJzdCBhbmQgbGFzdCBETnMgZm9yIHRoZSBncm91cFxyXG5cdFx0XHRncm91cC5kZXRlcm1pbmVETnMoKTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBncm91cCBoYXMgYXQgbGVhc3Qgb25lIEROLCBpdHMgZmlyc3QgRE4gYmVjb21lcyB0aGUgbm9kZSBiZWZvcmUgd2hpY2ggdGhlIG5leHRcclxuXHRcdFx0Ly8gZ3JvdXAgb2YgbmV3IG5vZGVzIChpZiBhbnkpIHNob3VsZCBiZSBpbnNlcnRlZC5cclxuXHRcdFx0aWYgKGdyb3VwLmZpcnN0RE4pXHJcblx0XHRcdFx0YmVmb3JlRE4gPSBncm91cC5maXJzdEROO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBcnJhbmdlIHRoZSBncm91cHMgaW4gb3JkZXIgYXMgaW4gdGhlIG5ldyBzdWItbm9kZSBsaXN0LCBtb3ZpbmcgdGhlbSBpZiBuZWNlc3NhcnkuXHJcblx0cHJpdmF0ZSBhcnJhbmdlR3JvdXBzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgZ3JvdXBzOiBWTkRpc3BHcm91cFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBXZSBnbyBmcm9tIHRoZSBsYXN0IGdyb3VwIHRvIHRoZSBzZWNvbmQgZ3JvdXAgaW4gdGhlIGxpc3QgYmVjYXVzZSBhcyBzb29uIGFzIHdlIG1vdmVkIGFsbFxyXG5cdFx0Ly8gZ3JvdXBzIGV4Y2VwdCB0aGUgZmlyc3Qgb25lIGludG8gdGhlaXIgcmlnaHQgcGxhY2VzLCB0aGUgZmlyc3QgZ3JvdXAgd2lsbCBiZSBhdXRvbWF0aWNhbGx5XHJcblx0XHQvLyBpbiB0aGUgcmlnaHQgcGxhY2UuIFdlIGFsd2F5cyBoYXZlIHR3byBncm91cHMgKGkgYW5kIGktMSksIHdoaWNoIGFsbG93cyB1cyB0byB1bmRlcnN0YW5kXHJcblx0XHQvLyB3aGV0aGVyIHdlIG5lZWQgdG8gc3dhcCB0aGVtLiBJZiB3ZSBkbyB3ZSBtb3ZlIHRoZSBzaG9ydGVyIGdyb3VwLlxyXG5cdFx0Zm9yKCBsZXQgaSA9IGdyb3Vwcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZ3JvdXAgPSBncm91cHNbaV07XHJcblx0XHRcdGxldCBwcmV2R3JvdXAgPSBncm91cHNbaS0xXTtcclxuXHJcblx0XHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoZSBncm91cCBzaG91bGQgbW92ZS4gV2UgdGFrZSB0aGUgbGFzdCBub2RlIGZyb20gdGhlIGdyb3VwXHJcblx0XHRcdC8vIGFuZCBjb21wYXJlIGl0cyBETidzIG5leHQgc2libGluZyB0byB0aGUgY3VycmVudCBcImJlZm9yZUROXCIuXHJcblx0XHRcdGlmIChncm91cC5sYXN0RE4gIT09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoZ3JvdXAubGFzdEROLm5leHRTaWJsaW5nICE9PSBiZWZvcmVETilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGUgY3VycmVudCBncm91cCBub3cgcmVzaWRlcyBiZWZvcmUgdGhlIHByZXZpb3VzIGdyb3VwLCB0aGVuIHRoYXQgbWVhbnNcclxuXHRcdFx0XHRcdC8vIHRoYXQgd2UgYXJlIHN3YXBwaW5nIHR3byBncm91cHMuIEluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIG1vdmUgdGhlIHNob3J0ZXIgb25lLlxyXG5cdFx0XHRcdFx0aWYgKGdyb3VwLmxhc3RETi5uZXh0U2libGluZyA9PT0gcHJldkdyb3VwLmZpcnN0RE4gJiYgZ3JvdXAuY291bnQgPiBwcmV2R3JvdXAuY291bnQpXHJcblx0XHRcdFx0XHRcdHRoaXMubW92ZUdyb3VwKCBwYXJlbnRWTiwgZGlzcHMsIHByZXZHcm91cCwgYW5jaG9yRE4sIGdyb3VwLmZpcnN0RE4pO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLm1vdmVHcm91cCggcGFyZW50Vk4sIGRpc3BzLCBncm91cCwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHRoZSBncm91cCdzIGZpcnN0IEROIGJlY29tZXMgdGhlIG5ldyBiZWZvcmVETi4gTm90ZSB0aGF0IGZpcnN0RE4gY2Fubm90IGJlIG51bGxcclxuXHRcdFx0XHQvLyBiZWNhdXNlIGxhc3RETiBpcyBub3QgbnVsbFxyXG5cdFx0XHRcdGJlZm9yZUROID0gZ3JvdXAuZmlyc3RETjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNb3ZlcyBhbGwgdGhlIG5vZGVzIGluIHRoZSBnaXZlbiBncm91cCBiZWZvcmUgdGhlIGdpdmVuIERPTSBub2RlLlxyXG5cdHByaXZhdGUgbW92ZUdyb3VwKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgZ3JvdXA6IFZORGlzcEdyb3VwLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBqID0gZ3JvdXAuZmlyc3Q7IGogPD0gZ3JvdXAubGFzdDsgaisrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3ViTm9kZVZOID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcHNbal0ub2xkVk4gOiBkaXNwc1tqXS5uZXdWTjtcclxuXHRcdFx0bGV0IHN1Yk5vZGVETnMgPSBzdWJOb2RlVk4uZ2V0SW1tZWRpYXRlRE5zKCk7XHJcblx0XHRcdGZvciggbGV0IHN1Yk5vZGVETiBvZiBzdWJOb2RlRE5zKVxyXG5cdFx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBwYXJlbnRWTi5nZXRTdGF0c0NhdGVnb3J5KCksIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGVyZm9ybXMgdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBpbmRpdmlkdWFsIG5vZGVzLlxyXG5cdHByaXZhdGUgdXBkYXRlUGh5c2ljYWxCeU5vZGVzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcGVyZm9ybSBET00gb3BlcmF0aW9ucyBhY2NvcmRpbmcgdG8gc3ViLW5vZGUgZGlzcG9zaXRpb24uIFdlIG5lZWQgdG8gZGVjaWRlIGZvciBlYWNoXHJcblx0XHQvLyBub2RlIHdoYXQgbm9kZSB0byB1c2UgdG8gaW5zZXJ0IG9yIG1vdmUgaXQgYmVmb3JlLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2ZcclxuXHRcdC8vIG5ldyBub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5cdFx0Zm9yKCBsZXQgaSA9IGRpc3BzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZGlzcCA9IGRpc3BzW2ldO1xyXG5cdFx0XHRsZXQgYWN0aW9uID0gZGlzcC5hY3Rpb247XHJcblx0XHRcdGxldCBuZXdWTiA9IGRpc3AubmV3Vk47XHJcblx0XHRcdGlmIChhY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkVk4gPSBkaXNwLm9sZFZOO1xyXG5cdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdFx0b2xkVk4uY29tbWl0VXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlUGh5c2ljYWwoIGRpc3ApO1xyXG5cclxuXHRcdFx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciBhbGwgdGhlIG5vZGVzIHVuZGVyIHRoaXMgVk4gc2hvdWxkIGJlIG1vdmVkLlxyXG5cdFx0XHRcdGxldCBzdWJOb2RlRE5zID0gb2xkVk4uZ2V0SW1tZWRpYXRlRE5zKCk7XHJcblx0XHRcdFx0aWYgKHN1Yk5vZGVETnMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBjaGVjayB3aGV0aGVyIHRoZSBsYXN0IG9mIHRoZSBET00gbm9kZXMgYWxyZWFkeSByZXNpZGVzIHJpZ2h0IGJlZm9yZSB0aGUgbmVlZGVkIG5vZGVcclxuXHRcdFx0XHRcdGlmIChzdWJOb2RlRE5zW3N1Yk5vZGVETnMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRmb3IoIGxldCBzdWJOb2RlRE4gb2Ygc3ViTm9kZUROcylcclxuXHRcdFx0XHRcdFx0XHRhbmNob3JETi5pbnNlcnRCZWZvcmUoIHN1Yk5vZGVETiwgYmVmb3JlRE4pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggcGFyZW50Vk4uZ2V0U3RhdHNDYXRlZ29yeSgpLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyB0aGUgZmlyc3Qgb2YgRE9NIG5vZGVzIGJlY29tZSB0aGUgbmV4dCBiZWZvcmVETlxyXG5cdFx0XHRcdFx0YmVmb3JlRE4gPSBzdWJOb2RlRE5zWzBdO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gdGhlIG9sZCBub2RlIHJlbWFpbnMgYXMgYSBzdWItbm9kZVxyXG5cdFx0XHRcdHBhcmVudFZOLnN1Yk5vZGVzLmluc2VydFZOKCBvbGRWTik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gc2luY2Ugd2UgYWxyZWFkeSBkZXN0cm95ZWQgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVwbGFjZWQsIHRoZSBjb2RlIGlzXHJcblx0XHRcdFx0Ly8gaWRlbnRpY2FsIGZvciBSZXBsYWNlIGFuZCBJbnNlcnQgYWN0aW9uc1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlUGh5c2ljYWwoIG5ld1ZOLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0XHQvLyBpZiB0aGUgbmV3IG5vZGUgZGVmaW5lcyBhIERPTSBub2RlLCBpdCBiZWNvbWVzIHRoZSBET00gbm9kZSBiZWZvcmUgd2hpY2hcclxuXHRcdFx0XHQvLyBuZXh0IGNvbXBvbmVudHMgc2hvdWxkIGJlIGluc2VydGVkL21vdmVkXHJcblx0XHRcdFx0bGV0IGZpcnN0RE46IEROID0gbmV3Vk4uZ2V0Rmlyc3RETigpO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9PSBudWxsKVxyXG5cdFx0XHRcdFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cclxuXHRcdFx0XHQvLyB0aGUgbmV3IG5vZGUgYmVjb21lcyBhIHN1Yi1ub2RlXHJcblx0XHRcdFx0cGFyZW50Vk4uc3ViTm9kZXMuaW5zZXJ0Vk4oIG5ld1ZOKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb250ZW50IHJlbmRlcmVkIHVuZGVyIHRoaXMgcm9vdCBub2RlLlxyXG5cdHByaXZhdGUgY29udGVudDogYW55O1xyXG5cclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGFuIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGZyb20gZGVzY2VuZGFuZCBub2Rlcy5cclxuXHRwcml2YXRlIGVycm9yVUk6IFJvb3RFcnJvclVJID0gbnVsbDtcclxuXHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBhbiBleGNlcHRpb24gd2FzIGNhdWdodCBmcm9tIGRlc2NlbmRhbmQgbm9kZXMuXHJcblx0cHJpdmF0ZSB3YWl0aW5nVUk6IFJvb3RXYWl0aW5nVUkgPSBudWxsO1xyXG5cclxuXHQvLyBTZXQgb2YgcHJvbWlzZXMgdGhyb3duIGJ5IGRlc2NlbmRhbnQgbm9kZXMgYW5kIG5vdCB5ZXQgZnVsZmlsbGVkLlxyXG5cdHByaXZhdGUgdGhyb3duUHJvbWlzZXMgPSBuZXcgU2V0PFByb21pc2U8YW55Pj4oKTtcclxuXHJcblx0Ly8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIHNldHMgb2YgdmlydHVhbCBub2RlcyB0aGF0IHN1YnNjcmliZWQgdG8gdGhpcyBzZXJ2aWNlLlxyXG5cdHByaXZhdGUgc2VydmljZUluZm9zID0gbmV3IE1hcDxzdHJpbmcsU2VydmljZUluZm8+KCk7XHJcblxyXG5cdC8vIE1hcCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9uIHRoZSBuZXh0IFVJIGN5Y2xlLiBXZSB1c2UgTWFwIGluIG9yZGVyIHRvIG5vdCBpbmNsdWRlXHJcblx0Ly8gdGhlIHNhbWUgbm9kZSBtb3JlIHRoYW4gb25jZSAtIHdoaWNoIGNhbiBoYXBwZW4gaWYgdGhlIG5vZGUncyByZXF1ZXN0VXBkYXRlIG1ldGhvZCBpcyBjYWxsZWRcclxuXHQvLyBtb3JlIHRoYW4gb25jZSBkdXJpbmcgYSBzaW5nbGUgcnVuIChlLmcuIGR1cmluZyBldmVudCBwcm9jZXNzaW5nKS4gVGhlIHZhbHVlIG1hcHBlZCB0byB0aGVcclxuXHQvLyBub2RlIGRldGVybWluZXMgdGhlIG9wZXJhdGlvbiB0byBiZSBwZXJmb3JtZWQ6XHJcblx0Ly9cdC0gdW5kZWZpbmVkIC0gdGhlIG5vZGUgd2lsbCBiZSB1cGRhdGVkXHJcblx0Ly9cdC0gbnVsbCAtIHRoZSBub2RlIHdpbGwgYmUgZGVsZXRlZCBmcm9tIGl0cyBwYXJlbnRcclxuXHQvL1x0LSBhbnl0aGluZyBlbHNlIC0gdGhlIG5vZGUgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoaXMgbmV3IGNvbnRlbnRcclxuXHRwcml2YXRlIHZuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IG5ldyBTZXQ8Vk4+KCk7XHJcblxyXG5cdC8vIFNldCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBiZWZvcmVcclxuXHQvLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLlxyXG5cdHByaXZhdGUgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBuZXcgU2V0PG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHJcblx0Ly8gU2V0IG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGFmdGVyXHJcblx0Ly8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC5cclxuXHRwcml2YXRlIGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgU2V0PG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHJcblx0Ly8gSGFuZGxlIG9mIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCAoaW4gY2FzZSBpdCBzaG91bGQgYmUgY2FuY2VsZWQpLlxyXG5cdHByaXZhdGUgc2NoZWR1bGVkRnJhbWVIYW5kbGU6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIFN0YXRlIG9mIHRoZSBzY2hlZHVsZXIuXHJcblx0cHJpdmF0ZSBzY2hlZHVsZXJTdGF0ZTogU2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5JZGxlO1xyXG5cclxuXHQvLyBOdW1iZXIgdGhhdCBzZXJ2ZXMgYXMgYSB1bmlxdWUgSUQgb2YgYW4gdXBkYXRlIGN5Y2xlLiBFYWNoIHVwZGF0ZSBjeWNsZSB0aGUgcm9vdCBub2RlXHJcblx0Ly8gaW5jcmVtZW50cyB0aGlzIG51bWJlci4gRWFjaCBub2RlIGJlaW5nIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSBpcyBhc3NpZ25lZCB0aGlzIG51bWJlci5cclxuXHQvLyBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiB3aGVuIGJvdGggYSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlXHJcblx0Ly8gdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRwcml2YXRlIGN1cnJlbnRUaWNrOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOb2RlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuIER1cmluZyBjcmVhdGlvbiBhbmQgdXBkYXRpbmcgcHJvY2VzcywgdGhpcyB2YWx1ZSBpcyBzZXRcclxuXHQvLyBldmVyeSB0aW1lIHdlIHJlY3Vyc2UgaW50byBzdWItbm9kZXMgYW5kIHJlc3RvcmVkIHdoZW4gd2UgcmV0dXJuIGJhY2sgdG8gdGhlIG5vZGUuIElmXHJcblx0Ly8gZHVyaW5nIGNyZWF0aW9uIG9yIHVwZGF0aW5nIHByb2Nlc3MgYW4gZXhjZXB0aW9uIGlzIHRocm93biBhbmQgaXMgY2F1Z2h0IGJ5IHNvbWUgdXBwZXJcclxuXHQvLyBsZXZlbCBub2RlLCB0aGlzIHZhbHVlIHdpbGwgc3RpbGwgcG9pbnQgYXQgdGhlIG5vZGUgdGhhdCBjYXVzZWQgdGhlIGV4Y2VwdGlvbi5cclxuXHRwcml2YXRlIGN1cnJlbnRWTjogVk4gPSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIGluZGljYXRpbmcgaW4gd2hhdCBwaGFzZSBvZiB0aGUgdXBkYXRlIGN5Y2xlIHdlIGN1cnJlbnRseSByZXNpZGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5lbnVtIFNjaGVkdWxlclN0YXRlXHJcbntcclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIG5vdCB3aXRoaW4gdGhlIHVwZGF0ZSBjeWNsZVxyXG5cdElkbGUgPSAwLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIGV4ZWN1dGluZyBmdW5jdGlvbnMgYmVmb3JlIHVwZGF0aW5nIG5vZGVzXHJcblx0QmVmb3JlVXBkYXRlLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIHVwZGF0aW5nIG5vZGVzXHJcblx0VXBkYXRlLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIGV4ZWN1dGluZyBmdW5jdGlvbnMgYWZ0ZXIgdXBkYXRpbmcgbm9kZXNcclxuXHRBZnRlclVwZGF0ZSxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24ga2VwdCBieSBSb290IHZpcnR1YWwgbm9kZSBhYm91dCBzZXJ2aWNlIHB1YmxpY2F0aW9ucyBhbmQgc3Vic2NyaXB0aW9ucy4gVGhlIHNhbWVcclxuLy8gc2VydmljZSBjYW4gYmUgcHVibGlzaGVkIGFuZCBzdWJzY3JpYmVkIHRvIGJ5IG11bHRpcGxlIG5vZGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgU2VydmljZUluZm9cclxue1xyXG5cdHB1Ymxpc2hpbmdWTnM6IFNldDxWTj4gPSBuZXcgU2V0PFZOPigpO1xyXG5cdHN1YnNjcmliZWRWTnM6IFNldDxWTj4gPSBuZXcgU2V0PFZOPigpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHYXRoZXJpbmcgdXBkYXRlIHN0YXRpc3RpY3NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBDYXRlZ29yaWVzIG9mIGNoYW5nZWQgZW50aXRpZXMgdG8gZ2F0aGVyIHN0YXRpc3RpY3MgYWJvdXQuXHJcbmV4cG9ydCBlbnVtIFN0YXRzQ2F0ZWdvcnlcclxue1xyXG5cdENvbXAsXHJcblx0RWxtLFxyXG5cdFRleHQsXHJcblx0QXR0cixcclxuXHRFdmVudCxcclxufVxyXG5cclxuXHJcblxyXG4vLyBBY3Rpb25zIG9uIGFuIGVudGl0eSB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC4gTm90IGFsbCBhY3Rpb25zIGFyZSByZWxldmFudCBmb3IgYWxsXHJcbi8vIGNhdGVnb3JpZXM6XHJcbi8vXHQtIFVwZGF0ZWQgZG9lc24ndCBleGlzdCBmb3IgY29tcG9uZW50cyBhbmQgZm9yIGVsZW1lbnRzXHJcbi8vXHQtIE1vdmVkIGRvZXNuJ3QgZXhpc3QgZm9yIGF0dHJpYnV0ZXNcclxuLy9cdC0gUmVuZGVyZWQgb25seSBleGlzdHMgZm9yIGNvbXBvbmVudHNcclxuZXhwb3J0IGVudW0gU3RhdHNBY3Rpb25cclxue1xyXG5cdEFkZGVkPSAxLFxyXG5cdERlbGV0ZWQgPSAyLFxyXG5cdFVwZGF0ZWQgPSAzLFxyXG5cdE1vdmVkID0gNCxcclxuXHRSZW5kZXJlZCA9IDUsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvcmFnZSBmb3IgYSBudW1iZXIgb2YgZWFjaCBhY3Rpb24gdW5kZXIgYSBjYXRlZ29yeS5cclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U3RhdHNcclxue1xyXG5cdGFkZGVkOiBudW1iZXIgPSAwO1xyXG5cdGRlbGV0ZWQ6IG51bWJlciA9IDA7XHJcblx0dXBkYXRlZDogbnVtYmVyID0gMDtcclxuXHRtb3ZlZDogbnVtYmVyID0gMDtcclxuXHRyZW5kZXJlZDogbnVtYmVyID0gMDtcclxuXHJcblx0cHVibGljIGhhc1NvbWVEYXRhKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5hZGRlZCB8fCB0aGlzLmRlbGV0ZWQgfHwgdGhpcy51cGRhdGVkIHx8IHRoaXMubW92ZWQgfHwgdGhpcy5yZW5kZXJlZDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERldGFpbGVkU3RhdHNcclxue1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdGFydFRpbWU6IG51bWJlcjtcclxuXHRkdXJhdGlvbjogbnVtYmVyO1xyXG5cdGNvbXA6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGVsbTogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0dGV4dDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0YXR0cjogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0ZXZlbnQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXJ0KClcclxuXHR7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gMC4wO1xyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0b3AoIHByaW50U3VtbWFyeTogYm9vbGVhbiA9IHRydWUpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWU7XHJcblxyXG5cdFx0aWYgKHByaW50U3VtbWFyeSlcclxuXHRcdFx0Y29uc29sZS5sb2coIHRoaXMudG9TdHJpbmcoKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIGluY3JlbWVudHMgdGhlbnVtYmVyIG9mIHRpbWVzIHRoZSBnaXZlbiBhY3Rpb24gd2FzIHBlcmZvcm1lZCBvbiBhbiBlbnRpdHkgb2YgYSBnaXZlblxyXG5cdC8vIGNhdGVnb3J5LiBJZiB0aGUgZW50aXR5IGlzIGEgRE9NIGVudGl0eSAoYXMgb3Bwb3NlZCB0byBhIGNvbXBvbmVudCksIHRoZW4gdGhlIERPTVxyXG5cdC8vIHRvdGFsIG51bWJlciBpcyBhbHNvIGluY3JlbWVudGVkLlxyXG5cdHB1YmxpYyBsb2coIGNhdGVnb3J5OiBTdGF0c0NhdGVnb3J5LCBhY3Rpb246IFN0YXRzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjYXRlZ29yeVN0YXRzOiBDYXRlZ29yeVN0YXRzO1xyXG5cdFx0c3dpdGNoKCBjYXRlZ29yeSlcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkNvbXA6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmNvbXA7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuRWxtOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5lbG07IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuVGV4dDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMudGV4dDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5BdHRyOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5hdHRyOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkV2ZW50OiBjYXRlZ29yeVN0YXRzID0gdGhpcy5ldmVudDsgYnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2goIGFjdGlvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5BZGRlZDogY2F0ZWdvcnlTdGF0cy5hZGRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5EZWxldGVkOiBjYXRlZ29yeVN0YXRzLmRlbGV0ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uVXBkYXRlZDogY2F0ZWdvcnlTdGF0cy51cGRhdGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLk1vdmVkOiBjYXRlZ29yeVN0YXRzLm1vdmVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlJlbmRlcmVkOiBjYXRlZ29yeVN0YXRzLnJlbmRlcmVkKys7IGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgJHt0aGlzLm5hbWV9ICR7dGhpcy5kdXJhdGlvbi50b0ZpeGVkKDIpfW1zIGAgK1xyXG5cdFx0XHRcdHRoaXMuZ2V0Q29tcFN0cmluZygpICsgdGhpcy5nZXRFbG1TdHJpbmcoKSArIHRoaXMuZ2V0VGV4dFN0cmluZygpICtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJTdHJpbmcoKSArIHRoaXMuZ2V0RXZlbnRTdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb21wb25lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0Q29tcFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY29tcC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5jb21wLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmNvbXAuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTI3MEVcIiwgdGhpcy5jb21wLnJlbmRlcmVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmNvbXAubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgY29tcCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVsZW1lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RWxtU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5lbG0uaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuZWxtLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmVsbS5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmVsbS5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBlbG0oJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0ZXh0IG5vZGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0VGV4dFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudGV4dC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy50ZXh0LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLnRleHQuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy50ZXh0LnVwZGF0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMudGV4dC5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGB0ZXh0KCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEF0dHJTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmF0dHIuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuYXR0ci5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5hdHRyLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuYXR0ci51cGRhdGVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGF0dHIoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhdHRyaWJ1dGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RXZlbnRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50Lmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmV2ZW50LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmV2ZW50LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuZXZlbnQudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBldmVudCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiBzaWduIGFuZCB2YWx1ZSB0byB0aGUgZ2l2ZW4gc3RyaW5nIGJ1dCBvbmx5IGlmIHRoZSB2YWx1ZSBpcyBub24temVyby5cclxuXHRwcml2YXRlIGdldFZhbFN0cmluZyggczogc3RyaW5nLCBzaWduOiBzdHJpbmcsIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHZhbCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAocy5sZW5ndGggPiAwID8gXCIgXCIgOiBcIlwiKSArIHNpZ24gKyB2YWw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc3RhdHM6IERldGFpbGVkU3RhdHM7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1JbmZvIHR5cGUgZGVmaW5lcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIFNWRyBlbGVtZW50LiBUaGlzXHJcbi8vIGluZm9ybWF0aW9uIGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4vL1x0LSBzdHJpbmcgLSBhY3R1YWwgbmFtZSB0byB1c2UgZm9yIHRoZSBlbGVtZW50LiBTb21lIFNWRyBlbGVtZW50cyBoYXZlIG5hbWVzIHRoYXQgY2Fubm90IGJlIHVzZWRcclxuLy9cdFx0aW4gSlggZGlyZWN0bHkgKGUuZy4gYmVjYXVzZSBvZiBoeXBoZW4gbGlrZSBpbiBcImNvbG9yLXByb2ZpbGVcIikuIEluIHRoaXMgY2FzZSB0aGUgc3RyaW5nXHJcbi8vXHRcdHZhbHVlIHdpbGwgYmUgdGhlIGFjdHVhbCBlbGVtZW50IG5hbWUgdG8gcHV0IGludG8gSFRNTCBkb2N1bWVudCwgd2hpbGUgSlNYIHdpbGwgYmUgdXNpbmdcclxuLy9cdFx0YSBjYW1lbC1mb3JtYXR0ZWQgbmFtZSAoZS5nLiBcImNvbG9yUHJvZmlsZVwiKS5cclxuLy9cdC0gYm9vbGVhbiAtIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoZSBlbGVtZW50IGlzIFwiZHVhbC1wdXJwb3NlXCI7IHRoYXQgaXMsIGVsZW1lbnQgd2l0aCB0aGlzXHJcbi8vXHRcdG5hbWUgY2FuIGJlIHVzZWQgYXMgZWl0aGVyIEhUTUwgb3IgU1ZHIGVsZW1lbnQuXHJcbi8vXHQtIHR1cGxlIG9mIHR3byBlbGVtZW50cyAtIHN0cmluZyBhbmQgYm9vbGVhbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBhYm92ZSBpdGVtcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFN2Z0VsbUluZm8gPSBib29sZWFuIHwgc3RyaW5nIHwgW3N0cmluZywgYm9vbGVhbl07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtcyBjbGFzcyBjb250YWlucyBwcm9wZXJ0aWVzIHdpdGggbmFtZXMgdXNlZCB0byBkZWZpbmUgU1ZHIGVsZW1lbnRzIGluIEpTWC4gV2hlblxyXG4vLyB3ZSBuZWVkIHRvIGNyZWF0ZSBhbiBlbGVtZW50LCB3ZSBsb29rdXAgdGhlIHByb3ZpZGVkIHRhZyBuYW1lIGFuZCBpZiB3ZSBmaW5kIGl0IGluIHRoaXMgY2xhc3NcclxuLy8gd2UgdXNlIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyB3aXRoIHRoZSBwcm9wZXIgU1ZHIG5hbWVzcGFjZSBzdHJpbmcuIFZhbHVlcyBvZiB0aGVzZSBwcm9wZXJ0aWVzXHJcbi8vIGFyZSBTdmdFbG1JbmZvIHZhbHVlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBTdmdFbG1zXHJcbntcclxuXHQvLyBOYW1lc3BhY2UgdXNlZCB0byBjcmVhdGUgU1ZHIGVsZW1lbnRzLlxyXG5cdHB1YmxpYyBzdGF0aWMgbmFtZXNwYWNlOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBTVkcgdGFnXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlciggdGFnTmFtZTogc3RyaW5nLCBpbmZvOiBTdmdFbG1JbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV0gPSBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGNhbiBiZSB1c2VkIGFzIGFuIFNWRyBlbGVtZW50IG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBpc1N2Z0VsbSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0YWdOYW1lIGluIFN2Z0VsbXMuaW5mb3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgZ2l2ZW4gdGFnIG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdmdFbG1JbmZvKCB0YWdOYW1lOiBzdHJpbmcpOiBTdmdFbG1JbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gaW5mb3JtYXRpb24gb2JqZWN0IGhhcyB0aGUgXCJkdWFsLXB1cnBvc2VcIiBmbGFnIHNldC5cclxuXHRwdWJsaWMgc3RhdGljIGlzRHVhbFB1cnBvc2UoIGluZm86IFN2Z0VsbUluZm8pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMSA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVsxXSA6IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBmYWxzZSA6IGluZm8gYXMgYm9vbGVhbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBpcyBhIFwiZHVhbC1wdXJwb3NlXCIgZWxlbWVudDsgdGhhdCBpcyBjYW4gYmUgZWl0aGVyXHJcblx0Ly8gSFRNTCBhbmQgU1ZHIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBpc1RhZ0R1YWxQdXJwb3NlKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIGluZm8pIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgdGhlIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lKCBpbmZvOiBTdmdFbG1JbmZvLCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAwID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzBdIDogdGFnTmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gaW5mbyBhcyBzdHJpbmcgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIHRoZSBnaXZlbiB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZUZvclRhZyggdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmdldEVsbU5hbWUoIGluZm8sIHRhZ05hbWUpIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBTVkcgZWxlbWVudCBuYW1lcyB0byBTdmdFbG1JbmZvLlxyXG5cdHByaXZhdGUgc3RhdGljIGluZm9zOiB7W2VsbU5hbWU6c3RyaW5nXTogU3ZnRWxtSW5mb30gPVxyXG5cdHtcclxuXHRcdHN2ZzogZmFsc2UsXHJcblxyXG5cdFx0YTogdHJ1ZSxcclxuXHRcdGFuaW1hdGU6IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZU1vdGlvbjogZmFsc2UsXHJcblx0XHRhbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcclxuXHJcblx0XHRjaXJjbGU6IGZhbHNlLFxyXG5cdFx0Y2xpcFBhdGg6IGZhbHNlLFxyXG5cdFx0Y29sb3JQcm9maWxlOiBcImNvbG9yLXByb2ZpbGVcIixcclxuXHJcblx0XHRkZWZzOiBmYWxzZSxcclxuXHRcdGRlc2M6IGZhbHNlLFxyXG5cdFx0ZGlzY2FyZDogZmFsc2UsXHJcblxyXG5cdFx0ZWxsaXBzZTogZmFsc2UsXHJcblxyXG5cdFx0ZmVCbGVuZDogZmFsc2UsXHJcblx0XHRmZUNvbG9yTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb3NpdGU6IGZhbHNlLFxyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogZmFsc2UsXHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogZmFsc2UsXHJcblx0XHRmZURpc3RhbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZURyb3BTaGFkb3c6IGZhbHNlLFxyXG5cdFx0ZmVGbG9vZDogZmFsc2UsXHJcblx0XHRmZUZ1bmNBOiBmYWxzZSxcclxuXHRcdGZlRnVuY0I6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jRzogZmFsc2UsXHJcblx0XHRmZUZ1bmNSOiBmYWxzZSxcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBmYWxzZSxcclxuXHRcdGZlSW1hZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlTm9kZTogZmFsc2UsXHJcblx0XHRmZU1vcnBob2xvZ3k6IGZhbHNlLFxyXG5cdFx0ZmVPZmZzZXQ6IGZhbHNlLFxyXG5cdFx0ZmVQb2ludExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZVNwb3RMaWdodDogZmFsc2UsXHJcblx0XHRmZVRpbGU6IGZhbHNlLFxyXG5cdFx0ZmVUdXJidWxlbmNlOiBmYWxzZSxcclxuXHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRmb3JlaWduT2JqZWN0OiBmYWxzZSxcclxuXHJcblx0XHRnOiBmYWxzZSxcclxuXHJcblx0XHRoYXRjaDogZmFsc2UsXHJcblx0XHRoYXRjaHBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdGltYWdlOiBmYWxzZSxcclxuXHJcblx0XHRsaW5lOiBmYWxzZSxcclxuXHRcdGxpbmVhckdyYWRpZW50OiBmYWxzZSxcclxuXHJcblx0XHRtYXJrZXI6IGZhbHNlLFxyXG5cdFx0bWFzazogZmFsc2UsXHJcblx0XHRtZXRhZGF0YTogZmFsc2UsXHJcblx0XHRtcGF0aDogZmFsc2UsXHJcblxyXG5cdFx0cGF0aDogZmFsc2UsXHJcblx0XHRwYXR0ZXJuOiBmYWxzZSxcclxuXHRcdHBvbHlnb246IGZhbHNlLFxyXG5cdFx0cG9seWxpbmU6IGZhbHNlLFxyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBmYWxzZSxcclxuXHRcdHJlY3Q6IGZhbHNlLFxyXG5cclxuXHRcdHNjcmlwdDogdHJ1ZSxcclxuXHRcdHNldDogZmFsc2UsXHJcblx0XHRzb2xpZGNvbG9yOiBmYWxzZSxcclxuXHRcdHN0b3A6IGZhbHNlLFxyXG5cdFx0c3R5bGU6IHRydWUsXHJcblx0XHRzd2l0Y2g6IGZhbHNlLFxyXG5cdFx0c3ltYm9sOiBmYWxzZSxcclxuXHJcblx0XHR0ZXh0OiBmYWxzZSxcclxuXHRcdHRleHRQYXRoOiBmYWxzZSxcclxuXHRcdHRpdGxlOiB0cnVlLFxyXG5cdFx0dGV4dFNwYW46IGZhbHNlLFxyXG5cclxuXHRcdHVzZTogZmFsc2UsXHJcblxyXG5cdFx0dmlldzogZmFsc2UsXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHRleHQgbm9kZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0Vk4gZXh0ZW5kcyBWTiBpbXBsZW1lbnRzIG1pbS5JVGV4dFZOXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdGV4dDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBnZXQgVGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50ZXh0OyB9XHJcblx0cHVibGljIGdldCBUZXh0Tm9kZSgpOiBUZXh0IHsgcmV0dXJuIHRoaXMuZG47IH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRwdWJsaWMgZ2V0U3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuVGV4dDsgfVxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIHR5cGUuXHJcblx0cHVibGljIGdldCB0eXBlKCk6IG1pbS5WTlR5cGUgeyByZXR1cm4gbWltLlZOVHlwZS5UZXh0OyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIiN0ZXh0XCI7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBJZiB0aGUgbm9kZSBuZXZlciBoYXMgYW55IGNoaWxkcmVuIChsaWtlIHRleHQgbm9kZXMpLCBpdCBzaG91bGQgcmV0dXJuIGZhbHNlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdGV4dCBub2RlcyBkb24ndCBoYXZlIGNoaWxkcmVuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSB2aXJ0dWFsIG5vZGUncyBjb250ZW50IGludG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZG4gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdGhpcy50ZXh0KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBjb250ZW50IGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5kbiA9IHVuZGVmaW5lZDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIG9uZSB0ZXh0IG5vZGUgY2FuIGFsd2F5cyB1cGRhdGUgYW5vdGhlciB0ZXh0IG5vZGVcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyB0ZXh0IG5vZGVzIGRvbid0IGhhdmUgc3ViLW5vZGVzXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQ6IHRoaXMudGV4dCAhPT0gKG5ld1ZOIGFzIFRleHRWTikudGV4dCwgc2hvdWxkUmVuZGVyOiBmYWxzZSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmRuLm5vZGVWYWx1ZSA9IHRoaXMudGV4dCA9IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQ7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGdldE93bkROKCk6IEROXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZG47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRleHQgZm9yIGEgc2ltcGxlIHRleHQgbm9kZS5cclxuXHR0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8vIFRleHQgRE9NIG5vZGVcclxuXHRkbjogVGV4dDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtJRXZlbnRTbG90LCBFdmVudFNsb3R9IGZyb21cIi4vRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBDbGFzc2VzIGFic3RyYWN0IGNsYXNzIHByb3ZpZGVzIHVzZWZ1bCBzdGF0aWMgZnVuY3Rpb25zIGZvciB3b3JraW5nIHdpdGggY2xhc3MgcHJvcGVydGllcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbGFzc2VzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIGNsYXNzIHByb3BlcnRpZXMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcblx0Ly8gcmV0dXJucyBhIHN0cmluZyBvciB1bmRlZmluZWQgLSBpZiBhbGwgY2xhc3NOYW1lcyB3ZXJlIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgc3RhdGljIE1lcmdlQ2xhc3NlcyggLi4uY2xhc3NOYW1lczogKHN0cmluZyB8IHN0cmluZ1tdKVtdKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHJlc0NsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuXHRcdGZvciggbGV0IGNsYXNzTmFtZSBvZiBjbGFzc05hbWVzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIWNsYXNzTmFtZSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdC8vIHBhcnNlIHRoZSBjbGFzcyBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmdcclxuXHRcdFx0bGV0IGNsYXNzTmFtZUFzU3RyaW5nOiBzdHJpbmcgPSB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiXHJcblx0XHRcdFx0XHQ/IGNsYXNzTmFtZSBhcyBzdHJpbmdcclxuXHRcdFx0XHRcdDogQ2xhc3Nlcy5BcnJheVRvU3RyaW5nKCBjbGFzc05hbWUgYXMgc3RyaW5nW10pO1xyXG5cclxuXHRcdFx0aWYgKHJlc0NsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc0NsYXNzTmFtZSA9IFwiXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXNDbGFzc05hbWUgKz0gXCIgXCI7XHJcblxyXG5cdFx0XHRyZXNDbGFzc05hbWUgKz0gY2xhc3NOYW1lQXNTdHJpbmc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc0NsYXNzTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBjbGFzcyBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLlxyXG5cdHB1YmxpYyBzdGF0aWMgQXJyYXlUb1N0cmluZyggY2xhc3NOYW1lczogc3RyaW5nW10pOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gY2xhc3NOYW1lcy5qb2luKCBcIiBcIik7XHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN0eWxlcyBhYnN0cmFjdCBjbGFzcyBwcm92aWRlcyB1c2VmdWwgc3RhdGljIGZ1bmN0aW9ucyBmb3Igd29ya2luZyB3aXRoIHN0eWxlIHByb3BlcnRpZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcblx0Ly8gYWx3YXlzIHJldHVybnMgYW4gb2JqZWN0IC0gZXZlbiBpZiBlbXB0eVxyXG5cdHB1YmxpYyBzdGF0aWMgTWVyZ2VTdHlsZXMoIC4uLnN0eWxlczogbWltLlN0eWxlUHJvcFR5cGVbXSk6IG1pbS5TdHlsZVByb3BUeXBlXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGFuIGVtcHR5IG9iamVjdCBmb3IgYWNjdW11bGF0aW5nIHN0eWxlIHByb3BlcnRpZXNcclxuXHRcdGxldCByZXNTdHlsZTogbWltLlN0eWxlUHJvcFR5cGUgPSB7fTtcclxuXHRcdFN0eWxlcy5NZXJnZVN0eWxlc1RvKCByZXNTdHlsZSwgLi4uc3R5bGVzKTtcclxuXHRcdHJldHVybiByZXNTdHlsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZmlyc3Qgb25lLlxyXG5cdHB1YmxpYyBzdGF0aWMgTWVyZ2VTdHlsZXNUbyggcmVzU3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlLCAuLi5zdHlsZXM6IChtaW0uU3R5bGVQcm9wVHlwZSB8IHN0cmluZylbXSApOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3R5bGUgb2Ygc3R5bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXN0eWxlKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0Ly8gcGFyc2UgdGhlIHN0eWxlIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZ1xyXG5cdFx0XHRsZXQgc3R5bGVPYmo6IG1pbS5TdHlsZVByb3BUeXBlID0gdHlwZW9mIHN0eWxlID09PSBcIm9iamVjdFwiXHJcblx0XHRcdFx0XHQ/IHN0eWxlIGFzIG1pbS5TdHlsZVByb3BUeXBlXHJcblx0XHRcdFx0XHQ6IFN0eWxlcy5QYXJzZVN0eWxlU3RyaW5nKCBzdHlsZSBhcyBzdHJpbmcpO1xyXG5cclxuXHRcdFx0Ly8gY29weSBhbGwgcHJvcGVydGllcyBkZWZpbmVkIGluIHRlaCBjdXJyZW50IHN0eWxlIG9iamVjdCB0byBvdXIgcmVzdWx0YW50IG9iamVjdFx0XHRcdFxyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZU9iailcclxuXHRcdFx0XHRyZXNTdHlsZVtwcm9wTmFtZV0gPSBzdHlsZU9ialtwcm9wTmFtZV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy5cclxuXHRwdWJsaWMgc3RhdGljIFBhcnNlU3R5bGVTdHJpbmcoIHM6IHN0cmluZyk6IG1pbS5TdHlsZVByb3BUeXBlXHJcblx0e1xyXG5cdFx0aWYgKCFzKVxyXG5cdFx0XHRyZXR1cm4ge307XHJcblxyXG5cdFx0bGV0IHJldFN0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHt9O1xyXG5cclxuXHRcdGxldCBlbG1zOiBzdHJpbmdbXSA9IHMuc3BsaXQoXCI7XCIpO1xyXG5cdFx0Zm9yKCBsZXQgZWxtIG9mIGVsbXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwYWlyOiBzdHJpbmdbXSA9IGVsbS5zcGxpdCggXCI6XCIpO1xyXG5cdFx0XHRpZiAoIXBhaXIgfHwgcGFpci5sZW5ndGggPT09IDAgfHwgcGFpci5sZW5ndGggPiAyKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0cmV0U3R5bGVbU3R5bGVzLkRhc2hUb0NhbWVsKCBwYWlyWzBdLnRyaW0oKSldID0gcGFpclsxXS50cmltKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJldFN0eWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyBuYW1lcyB3aXRoIGRhc2hlcyBpbnRvIG5hbWVzIGluIGNhbWVsQ2FzZSwgd2hlcmUgZXZlcnkgY2hhcmFjdGVyIGFmdGVyIGEgZGFzaCBpc1xyXG5cdC8vIGNhcGl0YWxpemVkIGFuZCBkYXNoZXMgYXJlIHJlbW92ZWQuXHJcblx0cHVibGljIHN0YXRpYyBEYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCFkYXNoKVxyXG5cdFx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0XHRsZXQgY2FtZWw6IHN0cmluZztcclxuXHRcdGxldCBpbmRleDogbnVtYmVyID0gLTE7XHJcblx0XHRsZXQgbmV4dEluZGV4VG9Db3B5RnJvbTogbnVtYmVyID0gMDtcclxuXHRcdHdoaWxlKCAoaW5kZXggPSBkYXNoLmluZGV4T2YoIFwiLVwiLCBpbmRleCArIDEpKSA+PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoY2FtZWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRjYW1lbCA9IFwiXCI7XHJcblxyXG5cdFx0XHRjYW1lbCArPSBkYXNoLnN1YnN0ciggbmV4dEluZGV4VG9Db3B5RnJvbSwgaW5kZXggLSBuZXh0SW5kZXhUb0NvcHlGcm9tKTtcclxuXHRcdFx0aWYgKGluZGV4ICE9IGRhc2gubGVuZ3RoIC0gMSlcclxuXHRcdFx0XHRjYW1lbCArPSBkYXNoW2luZGV4ICsgMV0udG9VcHBlckNhc2UoKTtcclxuXHJcblx0XHRcdG5leHRJbmRleFRvQ29weUZyb20gPSBpbmRleCArIDI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNhbWVsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBkYXNoO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAobmV4dEluZGV4VG9Db3B5RnJvbSA8IGRhc2gubGVuZ3RoKVxyXG5cdFx0XHRcdGNhbWVsICs9IGRhc2guc3Vic3RyKCBuZXh0SW5kZXhUb0NvcHlGcm9tKTtcclxuXHJcblx0XHRcdHJldHVybiBjYW1lbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTbGljZSB0eXBlIGRlZmluZXMgYW4gb2JqZWN0IHN0cnVjdHVyZSBkZXNjcmliaW5nXHJcbi8vIHBhcmFtZXRlcnMgZm9yIHJlbmRlcmluZyBhbiBlbGVtZW50LiBUaGV5IGluY2x1ZGU6IENsYXNzLCBTdHlsZSwgUHJvcGVydGllcywgQ29udGVudC4gVGhpc1xyXG4vLyBzdHJ1Y3R1cmUgaXMgaW50ZW5kZWQgdG8gYmUgcGFzc2VkIGVpdGhlciBpbiB0aGUgY29uc3RydWN0b3Igb3IgdmlhIHRoZSBwcm90ZWN0ZWQgbWV0aG9kcyBvZlxyXG4vLyBkZXJpdmVkIGNsYXNzZXMsIHNvIHRoYXQgdGhleSBjYW4gY29udHJvbCBwYXJhbWV0ZXJzIG9mIGVsZW1lbnRzIHJlbmRlcmVkIGJ5IHRoZSB1cHBlciBjbGFzc2VzLlxyXG4vLyBUaGUgbWFpbiBwdXJwb3NlIG9mIHRoaXMgc3RydWN0dXJlIGlzIHRvIGNvbWJpbmUgcGFyYW1ldGVycyBkZWZpbmluZyBhbiBlbGVtZW50IGludG8gYSBzaW5nbGVcclxuLy8gb2JqZWN0IHRvIG1pbmltaXplIHRoZSBudW1iZXIgb2YgcHJvcGVydGllcyBjYWxsZXJzIG9mIGNsYXNzZXMgc2hvdWxkIGRlYWwgd2l0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFNsaWNlID1cclxue1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxuXHRzdHlsZT86IG1pbS5TdHlsZVByb3BUeXBlO1xyXG5cdHByb3BzPzogT2JqZWN0XHJcblx0Y29udGVudD86IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTbGljZXMgYWJzdHJhY3QgY2xhc3MgcHJvdmlkZXMgdXNlZnVsIHN0YXRpYyBmdW5jdGlvbnMgZm9yIHdvcmtpbmcgd2l0aCBTbGljZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2xpY2VzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuXHRwdWJsaWMgc3RhdGljIE1lcmdlU2xpY2VzKCAuLi5zbGljZXM6IFNsaWNlW10pOiBTbGljZVxyXG5cdHtcclxuXHRcdGxldCByZXNTbGljZTogU2xpY2UgPSB7fTtcclxuXHRcdFNsaWNlcy5NZXJnZVNsaWNlc1RvKCByZXNTbGljZSwgLi4uc2xpY2VzKTtcclxuXHRcdHJldHVybiByZXNTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuXHQvLyBpbnRvIHRoZSBnaXZlbiByZXN1bHRhbnQgc2xpY2UuXHJcblx0cHVibGljIHN0YXRpYyBNZXJnZVNsaWNlc1RvKCByZXNTbGljZTogU2xpY2UsIC4uLnNsaWNlczogU2xpY2VbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocmVzU2xpY2UgPT09IHVuZGVmaW5lZCB8fCByZXNTbGljZSA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGZvciggbGV0IHNsaWNlIG9mIHNsaWNlcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKCFzbGljZSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGlmIChzbGljZS5zdHlsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChyZXNTbGljZS5zdHlsZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmVzU2xpY2Uuc3R5bGUgPSB7fTtcclxuXHJcblx0XHRcdFx0U3R5bGVzLk1lcmdlU3R5bGVzVG8oIHJlc1NsaWNlLnN0eWxlLCBzbGljZS5zdHlsZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzbGljZS5jbGFzc05hbWUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAocmVzU2xpY2UuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBcIlwiO1xyXG5cclxuXHRcdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBDbGFzc2VzLk1lcmdlQ2xhc3NlcyggcmVzU2xpY2UuY2xhc3NOYW1lIGFzIHN0cmluZywgc2xpY2UuY2xhc3NOYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNsaWNlLnByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHJlc1NsaWNlLnByb3BzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXNTbGljZS5wcm9wcyA9IHt9O1xyXG5cclxuXHRcdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzbGljZS5wcm9wcylcclxuXHRcdFx0XHRcdHJlc1NsaWNlW3Byb3BOYW1lXSA9IHNsaWNlW3Byb3BOYW1lXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNsaWNlLmNvbnRlbnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAocmVzU2xpY2UuY29udGVudCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudCA9IHNsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSggcmVzU2xpY2UuY29udGVudCkpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxldCBvbGRDb250ZW50OiBhbnkgPSByZXNTbGljZS5jb250ZW50O1xyXG5cdFx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50ID0gW107XHJcblx0XHRcdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQucHVzaCggb2xkQ29udGVudCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudC5wdXNoKCBzbGljZS5jb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8gVXNlIHR5cGUgRE4gdG8gcmVmZXIgdG8gRE9NJ3MgTm9kZSBjbGFzcy4gVGhlIERPTSBub2RlcyB0aGF0IHdlIGFyZSBkZWFsaW5nIHdpdGggYXJlXHJcbi8vIGVpdGhlciBvZiB0eXBlIEVsZW1lbnQgb3IgVGV4dC5cclxuZXhwb3J0IHR5cGUgRE4gPSBOb2RlO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuIFZpcnR1YWwgbm9kZXMgYXJlIGtlcHQgaW4gYVxyXG4vLyBkb3VibGx5LWxpbmtlZCBsaXN0IGFuZCBlYWNoIG5vZGUgcG9pbnRzIHRvIGEgcGFyZW50IG5vZGUgYXMgd2VsbCBhcyBmaXJzdCBhbmQgbGFzdCBzdWItbm9kZXMuXHJcbi8vXHJcbi8vIE1vdW50aW5nIHNlcXVlbmNlOlxyXG4vL1x0LSBjb25zdHJ1Y3RvclxyXG4vL1x0LSB3aWxsTW91bnRcclxuLy9cdC0gcmVuZGVyXHJcbi8vXHQtIG1vdW50XHJcbi8vXHQtIGRpZE1vdW50XHJcbi8vXHJcbi8vIFVubW91bnRpbmcgc2VxdWVuY2U6XHJcbi8vXHQtIHdpbGxVbm1vdW50XHJcbi8vXHQtIHVubW91bnRcclxuLy9cdC0gLy9kaWRVbm1vdW50XHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgdGhlIG5vZGUgaXRzZWxmOlxyXG4vL1x0LSByZW5kZXJcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgcGFyZW50OlxyXG4vL1x0LSB1cGRhdGVGcm9tXHJcbi8vXHQtIHJlbmRlciAob25seSBpZiB1cGRhdGVGcm9tIGluZGljYXRlZCB0aGF0IGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkKVxyXG4vL1x0LSBjb21taXRVcGRhdGUgKG9ubHkgaWYgdXBkYXRlRnJvbSBpbmRpY2F0ZWQgdGhhdCBjb21taXQgaXMgbmVjZXNzYXJ5KVxyXG4vL1x0LSBtb3ZlIChvbmx5IGlmIG5lY2Vzc2FyeSlcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVk4gaW1wbGVtZW50cyBtaW0uSVZOb2RlXHJcbntcclxuXHQvLyBJVk5vZGUgaW1wbGVtZW50YXRpb25cclxuXHRwdWJsaWMgZ2V0IFR5cGUoKTogbWltLlZOVHlwZSB7IHJldHVybiB0aGlzLnR5cGU7IH1cclxuXHRwdWJsaWMgZ2V0IFBhcmVudCgpOiBtaW0uSVZOb2RlIHsgcmV0dXJuIHRoaXMucGFyZW50OyB9XHJcblx0cHVibGljIGdldCBOZXh0KCk6IG1pbS5JVk5vZGUgeyByZXR1cm4gdGhpcy5uZXh0OyB9XHJcblx0cHVibGljIGdldCBQcmV2KCk6IG1pbS5JVk5vZGUgeyByZXR1cm4gdGhpcy5wcmV2OyB9XHJcblx0cHVibGljIGdldCBTdWJOb2RlcygpOiBtaW0uSVZOQ2hhaW4geyByZXR1cm4gdGhpcy5zdWJOb2RlczsgfVxyXG5cdHB1YmxpYyBnZXQgTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5uYW1lOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIHR5cGUuXHJcblx0cHVibGljIGFic3RyYWN0IGdldCB0eXBlKCk6IG1pbS5WTlR5cGU7XHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXQgbmFtZSgpOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJvb3Qgbm9kZS5cclxuXHRwdWJsaWMgZ2V0IHJvb3QoKTogSVJvb3RWTlxyXG5cdHtcclxuXHRcdC8vIHdoZW4gdGhpcyBwcm9wZXJ0eSBpcyByZWFkIGZvciB0aGUgZmlyc3QgdGltZSwgaXQgaXMgcmV0cmlldmVkIGZyb20gdGhlIHBhcmVudCBhbmRcclxuXHRcdC8vIHRoZW4gd2UgY2hhbmdlIHRoZSBwcm9wZXJ0eSBmcm9tIHRoZSBnZXR0dGVyIHRvIGEgcmVndWxhci5cclxuXHRcdGRlbGV0ZSB0aGlzLnJvb3Q7XHJcblx0XHRyZXR1cm4gdGhpcy5yb290ID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5yb290IDogdGhpcyBhcyBhbnkgYXMgSVJvb3RWTjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgcm9vdCggdmFsOiBJUm9vdFZOKSB7fVxyXG5cclxuXHQvLyBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS5cclxuXHRwdWJsaWMgZ2V0IGRlcHRoKCk6IG51bWJlclxyXG5cdHtcclxuXHRcdC8vIHdoZW4gdGhpcyBwcm9wZXJ0eSBpcyByZWFkIGZvciB0aGUgZmlyc3QgdGltZSwgaXQgaXMgcmV0cmlldmVkIGZyb20gdGhlIHBhcmVudCBhbmRcclxuXHRcdC8vIHRoZW4gd2UgY2hhbmdlIHRoZSBwcm9wZXJ0eSBmcm9tIHRoZSBnZXR0dGVyIHRvIGEgcmVndWxhci5cclxuXHRcdGRlbGV0ZSB0aGlzLmRlcHRoO1xyXG5cdFx0cmV0dXJuIHRoaXMuZGVwdGggPSB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmRlcHRoICsgMSA6IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGRlcHRoKCB2YWw6IG51bWJlcikge31cclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdGlhbGl6ZSggcGFyZW50OiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlYW5zIHVwIHRoZSBub2RlIG9iamVjdCBiZWZvcmUgaXQgaXMgcmVsZWFzZWQuXHJcblx0cHVibGljIHRlcm1pbmF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcmVtb3ZlIGluZm9ybWF0aW9uIGFib3V0IGFueSBwdWJsaXNoZWQgYW5kIHN1YnNjcmliZWQgc2VydmljZXNcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZm9yRWFjaCggKHNlcnZpY2UsIGlkKSA9PiB0aGlzLnJvb3Qubm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZCwgdGhpcykpO1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmNsZWFyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmZvckVhY2goIChpbmZvLCBpZCkgPT4geyB0aGlzLnJvb3Qubm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpOyB9KTtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmFuY2hvckROID0gbnVsbDtcclxuXHRcdHRoaXMuc3ViTm9kZXMgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0cHVibGljIGFic3RyYWN0IGdldFN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeTtcclxuLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gSWYgdGhlIG5vZGUgbmV2ZXIgaGFzIGFueSBjaGlsZHJlbiAobGlrZSB0ZXh0IG5vZGVzKSwgaXQgc2hvdWxkIHJldHVybiBmYWxzZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQ/KCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIGNvbnRlbnQgdGhhdCBjb21wcmlzZXMgdGhlIGNoaWxkcmVuIG9mIHRoZSBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmVcclxuXHQvLyBzdWItbm9kZXMsIG51bGwgc2hvdWxkIGJlIHJldHVybmVkLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgaXQgaXMgYXMgdGhvdWdoXHJcblx0Ly8gbnVsbCBpcyByZXR1cm5lZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHJlbmRlcj8oKTogYW55IHt9XHJcblxyXG5cdC8vIEluc2VydHMgdGhlIHZpcnR1YWwgbm9kZSdzIGNvbnRlbnQgaW50byBET00uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBtb3VudD8oKTogdm9pZCB7fVxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50PygpOiB2b2lkIHt9XHJcblxyXG5cdC8vIFJlbW92ZXMgY29udGVudCBmcm9tIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHVubW91bnQ/KCk6IHZvaWQge31cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoaXMgbWV0aG9kIGlzXHJcblx0Ly8gTk9UIG1hcmtlZCBhcyBvcHRpb25hbCBhbmQgdGh1cyBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGFsbCB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlPyggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwIHsgcmV0dXJuIHsgc2hvdWxkQ29tbWl0OiBmYWxzZSwgc2hvdWxkUmVuZGVyOiBmYWxzZSB9OyB9XHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGU/KCBuZXdWTjogVk4pOiB2b2lkIHt9XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHN1cHBvcnRzRXJyb3JIYW5kbGluZz8oKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy4gSXQgcmV0dXJucyBjb250ZW50IGNvbXByaXNpbmcgdGhlIGNoaWxkcmVuIG9mIHRoZSBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3I/KCB2bkVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQge31cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIChpZiBhbnkpIGFuZCBub3QgdG8gYW55IG9mIGl0c1xyXG5cdC8vIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0T3duRE4oKTogRE4geyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFNjaGVkdWxlcyBhbiB1cGRhdGUgZm9yIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgcmVxdWVzdFVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucm9vdClcclxuXHRcdFx0dGhpcy5yb290LnJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VscyBhIHByZXZpb3VzbHkgcmVxdWVzdGVkIHVwZGF0ZSBmb3IgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBjYW5jZWxVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnJvb3QpXHJcblx0XHRcdHRoaXMucm9vdC5jYW5jZWxOb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50c1xyXG5cdC8vIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdHB1YmxpYyBzY2hlZHVsZUNhbGwoIGZ1bmM6ICgpID0+IHZvaWQsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnJvb3QpXHJcblx0XHRcdHRoaXMucm9vdC5zY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCBiZWZvcmVVcGRhdGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWxzIGEgY2FsbCB0aGF0IGhhcyBiZWVuIHNjaGVkdWxlZCB0byBiZSBtYWRlIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWRcclxuXHQvLyBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdHB1YmxpYyBjYW5jZWxTY2hlZHVsZWRDYWxsKCBmdW5jOiAoKSA9PiB2b2lkLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5yb290KVxyXG5cdFx0XHR0aGlzLnJvb3QuY2FuY2VsU2NoZWR1bGVkRnVuY0NhbGwoIGZ1bmMsIGJlZm9yZVVwZGF0ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0Ly8gY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBub2Rlcy5cclxuXHRwdWJsaWMgcHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIG1pbS5JU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNlcnZpY2U6IG1pbS5JU2VydmljZURlZmluaXRpb25zW0tdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMgPSBuZXcgTWFwPHN0cmluZyxhbnk+KCk7XHJcblxyXG5cdFx0bGV0IGV4aXN0aW5TZXJ2aWNlOiBhbnkgPSB0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGV4aXN0aW5TZXJ2aWNlICE9PSBzZXJ2aWNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLnNldCggaWQsIHNlcnZpY2UpO1xyXG5cdFx0XHR0aGlzLnJvb3Qubm90aWZ5U2VydmljZVB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHVucHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIG1pbS5JU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZGVsZXRlKCBpZCk7XHJcblx0XHR0aGlzLnJvb3Qubm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZCwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3Vic2NyaWJlcyBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0Ly8gYnkgb25lIG9mIHRoZSBhbmNlc3RvciBub2RlcywgdGhlIHBhc3NlZCBSZWYgb2JqZWN0IHdpbGwgcmVmZXJlbmNlIGl0OyBvdGhlcndpc2UsXHJcblx0Ly8gdGhlIFJlZiBvYmplY3Qgd2lsbCBiZSBzZXQgdG8gdGhlIGRlZmF1bHRWYWx1ZSAoaWYgc3BlY2lmaWVkKSBvciB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXHJcblx0Ly8gV2hlbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3Igbm9kZSBpc1xyXG5cdC8vIGNoYW5nZWQsIHRoZSBSZWYgb2JqZWN0IHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHZhbHVlLlxyXG5cdHB1YmxpYyBzdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBtaW0uSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLFxyXG5cdFx0XHRcdFx0cmVmOiBtaW0uUmVmUHJvcFR5cGU8bWltLklTZXJ2aWNlRGVmaW5pdGlvbnNbS10+LFxyXG5cdFx0XHRcdFx0ZGVmYXVsdFNlcnZpY2U/OiBtaW0uSVNlcnZpY2VEZWZpbml0aW9uc1tLXSwgdXNlU2VsZj86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsVk5TdWJzY3JpYmVkU2VydmljZUluZm8+KCk7XHJcblxyXG5cdFx0bGV0IGluZm8gPSBuZXcgVk5TdWJzY3JpYmVkU2VydmljZUluZm8oKTtcclxuXHRcdGluZm8ucmVmID0gcmVmO1xyXG5cdFx0aW5mby5kZWZhdWx0U2VydmljZSA9IGRlZmF1bHRTZXJ2aWNlO1xyXG5cdFx0aW5mby51c2VTZWxmID0gdXNlU2VsZiA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zZXQoIGlkLCBpbmZvKTtcclxuXHRcdHRoaXMucm9vdC5ub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cdFx0bWltLnNldFJlZiggcmVmLCB0aGlzLmdldFNlcnZpY2UoIGlkLCBkZWZhdWx0U2VydmljZSkpO1xyXG59XHJcblxyXG5cclxuXHJcblx0Ly8gVW5zdWJzY3JpYmVzIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBUaGUgUmVmIG9iamVjdCB0aGF0IHdhcyB1c2VkIHRvIHN1YnNjcmliZSxcclxuXHQvLyB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXHJcblx0cHVibGljIHVuc3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgbWltLklTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBpbmZvID0gdGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bWltLnNldFJlZiggaW5mby5yZWYsIHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5kZWxldGUoIGlkKTtcclxuXHRcdHRoaXMucm9vdC5ub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkKCBpZCwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQvLyBub2RlIG9yIHRoZSBkZWZhdWx0IHZhbHVlIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzIHJlZ2lzdGVyZWQgYSBzZXJ2aWNlIHdpdGhcclxuXHQvLyB0aGlzIElELiBUaGlzIG1ldGhvZCBkb2Vzbid0IGVzdGFibGlzaCBhIHN1YnNjcmlwdGlvbiBhbmQgb25seSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZS5cclxuXHRwdWJsaWMgZ2V0U2VydmljZTxLIGV4dGVuZHMga2V5b2YgbWltLklTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyxcclxuXHRcdFx0XHRcdGRlZmF1bHRTZXJ2aWNlPzogbWltLklTZXJ2aWNlRGVmaW5pdGlvbnNbS10sIHVzZVNlbGY/OiBib29sZWFuKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IHNlcnZpY2UgPSB0aGlzLmZpbmRTZXJ2aWNlKCBpZCwgdXNlU2VsZik7XHJcblx0XHRyZXR1cm4gc2VydmljZSAhPT0gdW5kZWZpbmVkID8gc2VydmljZSA6IGRlZmF1bHRTZXJ2aWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb3RpZmllcyB0aGUgbm9kZSB0aGF0IHB1YmxpY2F0aW9uIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBzZXJ2aWNlICh0byB3aGljaCB0aGUgbm9kZVxyXG5cdC8vIGhhcyBwcmV2aW91c2x5IHN1YnNjcmliZWQpIGhhcyBjaGFuZ2VkLlxyXG5cdHB1YmxpYyBub3RpZnlTZXJ2aWNlQ2hhbmdlZDxLIGV4dGVuZHMga2V5b2YgbWltLklTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBpbmZvID0gdGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bWltLnNldFJlZiggaW5mby5yZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGluZm8uZGVmYXVsdFNlcnZpY2UpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyB1cCB0aGUgY2hhaW4gb2Ygbm9kZXMgbG9va2luZyBmb3IgYSBwdWJsaXNoZWQgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gUmV0dXJuc1xyXG5cdC8vIHVuZGVmaW5lZCBpZiB0aGUgc2VydmljZSBpcyBub3QgZm91bmQuIE5vdGUgdGhhdCBudWxsIG1pZ2h0IGJlIGEgdmFsaWQgdmFsdWUuXHJcblx0cHVibGljIGZpbmRTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBtaW0uSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGlmICh1c2VTZWxmKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHNlcnZpY2UgPSB0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0XHRcdGlmIChzZXJ2aWNlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gc2VydmljZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGdvIHVwIHRoZSBjaGFpbjsgbm90ZSB0aGF0IHdlIGRvbid0IHBhc3MgdGhlIHVzZVNlbGYgcGFyYW1ldGVyIG9uLlxyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZmluZFNlcnZpY2UoIGlkLCB0cnVlKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmxlIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgbm9kZS9jb21wb25lbnQgdGhhdCBrbm93c1xyXG5cdCAqIHRvIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJ5IHRoZSBjb2RlIHRoYXQgaXMgbm90IHBhcnQgb2YgYW55IGNvbXBvbmVudCBidXQgc3RpbGwgaGFzIGFjY2Vzc1xyXG5cdCAqIHRvIHRoZSBJVk5vZGUgb2JqZWN0OyBmb3IgZXhhbXBsZSwgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoZVxyXG5cdCAqIG1pbS5Db21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgbWltLkNvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgXHJcblx0ICovXHJcblx0cHVibGljIHdyYXBDYWxsYmFjazxUPiggY2FsbGJhY2s6IFQpOiBUXHJcblx0e1xyXG5cdFx0cmV0dXJuIENhbGxiYWNrV3JhcHBlci5iaW5kKCB0aGlzLCBjYWxsYmFjayk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGZpcnN0IERPTSBub2RlIGRlZmluZWQgYnkgZWl0aGVyIHRoaXMgdmlydHVhbCBub2RlIG9yIG9uZSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIG9ubHkgY2FsbGVkIG9uIHRoZSBtb3VudGVkIG5vZGVzLlxyXG5cdHB1YmxpYyBnZXRGaXJzdEROKCk6IEROXHJcblx0e1xyXG5cdFx0bGV0IGRuID0gdGhpcy5nZXRPd25ETigpO1xyXG5cdFx0aWYgKGRuICE9PSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0XHRlbHNlIGlmICghdGhpcy5zdWJOb2RlcylcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gZmlyc3QgdG8gbGFzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHRcdC8vIGlzIHJldHVybmVkXHJcblx0XHRmb3IoIGxldCBzdm4gPSB0aGlzLnN1Yk5vZGVzLmZpcnN0OyBzdm4gIT09IG51bGw7IHN2biA9IHN2bi5uZXh0KVxyXG5cdFx0e1xyXG5cdFx0XHRkbiA9IHN2bi5nZXRGaXJzdEROKCk7XHJcblx0XHRcdGlmIChkbiAhPT0gbnVsbClcclxuXHRcdFx0XHRyZXR1cm4gZG47XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGxhc3QgRE9NIG5vZGUgZGVmaW5lZCBieSBlaXRoZXIgdGhpcyB2aXJ0dWFsIG5vZGUgb3Igb25lIG9mIGl0cyBzdWItbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcblx0cHVibGljIGdldExhc3RETigpOiBETlxyXG5cdHtcclxuXHRcdGxldCBkbiA9IHRoaXMuZ2V0T3duRE4oKTtcclxuXHRcdGlmIChkbiAhPT0gbnVsbClcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdFx0ZWxzZSBpZiAoIXRoaXMuc3ViTm9kZXMpXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGxhc3QgdG8gZmlyc3QgdW50aWwgYSB2YWxpZCBub2RlXHJcblx0XHQvLyBpcyByZXR1cm5lZFxyXG5cdFx0Zm9yKCBsZXQgc3ZuID0gdGhpcy5zdWJOb2Rlcy5sYXN0OyBzdm4gIT09IG51bGw7IHN2biA9IHN2bi5wcmV2KVxyXG5cdFx0e1xyXG5cdFx0XHRkbiA9IHN2bi5nZXRMYXN0RE4oKTtcclxuXHRcdFx0aWYgKGRuICE9PSBudWxsKVxyXG5cdFx0XHRcdHJldHVybiBkbjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgbGlzdCBvZiBET00gbm9kZXMgdGhhdCBhcmUgaW1tZWRpYXRlIGNoaWxkcmVuIG9mIHRoaXMgdmlydHVhbCBub2RlOyB0aGF0IGlzLFxyXG5cdC8vIGFyZSBOT1QgY2hpbGRyZW4gb2Ygc3ViLW5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUuIE5ldmVyIHJldHVybnMgbnVsbC5cclxuXHRwdWJsaWMgZ2V0SW1tZWRpYXRlRE5zKCk6IEROW11cclxuXHR7XHJcblx0XHRsZXQgYXJyOiBETltdID0gW107XHJcblx0XHR0aGlzLmNvbGxlY3RJbW1lZGlhdGVETnMoIGFycik7XHJcblx0XHRyZXR1cm4gYXJyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb2xsZWN0cyBhbGwgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZSAodGhhdCBpcyxcclxuXHQvLyBhcmUgTk9UIGNoaWxkcmVuIG9mIHN1Yi1ub2RlcyB0aGF0IGhhdmUgdGhlaXIgb3duIERPTSBub2RlKSBpbnRvIHRoZSBnaXZlbiBhcnJheS5cclxuXHRwdWJsaWMgY29sbGVjdEltbWVkaWF0ZUROcyggYXJyOiBETltdKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBkbiA9IHRoaXMuZ2V0T3duRE4oKTtcclxuXHRcdGlmIChkbiAhPT0gbnVsbClcclxuXHRcdFx0YXJyLnB1c2goIGRuKTtcclxuXHRcdGVsc2UgaWYgKHRoaXMuc3ViTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGZpcnN0IHRvIGxhc3RcclxuXHRcdFx0Zm9yKCBsZXQgc3ZuID0gdGhpcy5zdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdFx0XHRzdm4uY29sbGVjdEltbWVkaWF0ZUROcyggYXJyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmluZHMgdGhlIGZpcnN0IERPTSBub2RlIGluIHRoZSB0cmVlIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBjb21lcyBhZnRlciBvdXIgbm9kZSB0aGF0IGlzIGFcclxuXHQvLyBjaGlsZCBvZiBvdXIgb3duIGFuY2hvciBlbGVtZW50LiBXZSB1c2UgaXQgYXMgYSBub2RlIGJlZm9yZSB3aGljaCB0byBpbnNlcnQvbW92ZSBub2RlcyBvZlxyXG5cdC8vIG91ciBzdWItbm9kZXMgZHVyaW5nIHRoZSByZWNvbmNpbGlhdGlvbiBwcm9jZXNzLiBUaGUgYWxnb3JpdGhtIGZpcnN0IGdvZXMgdG8gdGhlIG5leHRcclxuXHQvLyBzaWJsaW5ncyBvZiBvdXIgbm9kZSBhbmQgdGhlbiB0byB0aGUgbmV4dCBzaWJsaW5ncyBvZiBvdXIgcGFyZW50IG5vZGUgcmVjdXJzaXZlbHkuIEl0IHN0b3BzXHJcblx0Ly8gd2hlbiB3ZSBlaXRoZXIgZmluZCBhIERPTSBub2RlICh0aGVuIGl0IGlzIHJldHVybmVkKSBvciBmaW5kIGEgZGlmZmVyZW4gYW5jaG9yIGVsZW1lbnRcclxuXHQvLyAodGhlbiBudWxsIGlzIHJldHVybmVkKS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2VzcyBmb3Igb3VyXHJcblx0Ly8gc3ViLW5vZGVzIHN0YXJ0cyBhbmQsIHRoZXJlZm9yZSwgaXQgb25seSB0cmF2ZXJzZXMgbW91bnRlZCBub2Rlcy5cclxuXHRwdWJsaWMgZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIGFuY2hvckROOiBETik6IEROXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgaWYgd2UgaGF2ZSBzaWJsaW5nIERPTSBub2RlcyBhZnRlciBvdXIgbGFzdCBzdWItbm9kZSAtIHRoYXQgbWlnaHQgYmUgZWxlbWVudHNcclxuXHRcdC8vIG5vdCBjb250cm9sbGVkIGJ5IG91ciBjb21wb25lbnQuXHJcblx0XHRpZiAodGhpcy5zdWJOb2RlcyAmJiB0aGlzLnN1Yk5vZGVzLmxhc3QgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGNvbnN0IGRuOiBETiA9IHRoaXMuc3ViTm9kZXMubGFzdC5nZXRMYXN0RE4oKTtcclxuXHRcdFx0aWYgKGRuICE9PSBudWxsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc3QgbmV4dFNpYmxpbmc6IEROID0gZG4ubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0aWYgKG5leHRTaWJsaW5nICE9PSBudWxsKVxyXG5cdFx0XHRcdFx0cmV0dXJuIG5leHRTaWJsaW5nO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG91ciBuZXh0IHNpYmxpbmdzXHJcblx0XHRmb3IoIGxldCB2bjogVk4gPSB0aGlzLm5leHQ7IHZuICE9PSBudWxsOyB2biA9IHZuLm5leHQpXHJcblx0XHR7XHJcblx0XHRcdGlmICh2bi5hbmNob3JETiAhPT0gYW5jaG9yRE4pXHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHQvLyBub3RlIHRoYXQgZ2V0TGFzdEROIGNhbGwgdHJhdmVyc2VzIHRoZSBoaWVyYXJjaHkgb2Ygbm9kZXMuIE5vdGUgYWxzbyB0aGF0IGl0XHJcblx0XHRcdC8vIGl0IGNhbm5vdCBmaW5kIGEgbm9kZSB1bmRlciBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudCBiZWNhdXNlIHRoZSBmaXJzdCBkaWZmZXJlbnRcclxuXHRcdFx0Ly8gYW5jaG9yIGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZCBhcyBhIHdhbnRlZCBub2RlLlxyXG5cdFx0XHRjb25zdCBkbjogRE4gPSB2bi5nZXRMYXN0RE4oKTtcclxuXHRcdFx0aWYgKGRuICE9PSBudWxsKVxyXG5cdFx0XHRcdHJldHVybiBkbjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZWN1cnNlIHRvIG91ciBwYXJlbnQgaWYgZXhpc3RzXHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgIT09IG51bGwgJiYgdGhpcy5wYXJlbnQuYW5jaG9yRE4gPT09IGFuY2hvckROXHJcblx0XHRcdFx0XHRcdD8gdGhpcy5wYXJlbnQuZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIGFuY2hvckROKSA6IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygbm9kZSBuYW1lcyBzdGFydGluZyB3aXRoIHRoaXMgbm9kZSBhbmQgdXAgdW50aWwgdGhlIHRvcC1sZXZlbCBub2RlLlxyXG5cdHB1YmxpYyBnZXQgcGF0aCgpOiBzdHJpbmdbXVxyXG5cdHtcclxuXHRcdGxldCBkZXB0aCA9IHRoaXMuZGVwdGg7XHJcblx0XHRsZXQgcGF0aCA9IEFycmF5PHN0cmluZz4oIGRlcHRoKTtcclxuXHRcdGZvciggbGV0IGkgPSAwLCB2bjogVk4gPSB0aGlzOyBpIDwgZGVwdGg7IGkrKywgdm4gPSB2bi5wYXJlbnQpXHJcblx0XHR7XHJcblx0XHRcdHBhdGhbaV0gPSB2bi5uYW1lO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXRoO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgaXMgbW91bnRlZC5cclxuXHRwdWJsaWMgZ2V0IElzTW91bnRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuYW5jaG9yRE4gIT09IG51bGw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbm9kZS5cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFBhcmVudCBub2RlLiBUaGlzIGlzIG51bGwgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLlxyXG5cdHB1YmxpYyBwYXJlbnQ6IFZOO1xyXG5cclxuXHQvLyBET00gbm9kZSB1bmRlciB3aGljaCBhbGwgY29udGVudCBvZiB0aGlzIHZpcnR1YWwgbm9kZSBpcyByZW5kZXJlZC5cclxuXHRwdWJsaWMgYW5jaG9yRE46IEROID0gbnVsbDtcclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cdC8vIE5leHQgbm9kZSBpbiB0aGUgY2hhaW4gb2Ygc2libGluZyBub2RlcyBvciBudWxsIGlmIHRoaXMgaXMgdGhlIGxhc3Qgb25lLlxyXG5cdHB1YmxpYyBuZXh0OiBWTiA9IG51bGw7XHJcblxyXG5cdC8vIFByZXZpb3VzIG5vZGUgaW4gdGhlIGNoYWluIG9mIHNpYmxpbmcgbm9kZXMgb3IgbnVsbCBpZiB0aGlzIGlzIHRoZSBmaXJzdCBvbmUuXHJcblx0cHVibGljIHByZXY6IFZOID0gbnVsbDtcclxuXHJcblx0Ly8gQ2hhaW4gb2Ygc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdWJOb2RlcztcclxuXHJcblx0Ly8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIHNlcnZpY2Ugb2JqZWN0cyBwdWJsaXNoZWQgYnkgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgcHVibGlzaGVkU2VydmljZXM6IE1hcDxzdHJpbmcsYW55PjtcclxuXHJcblx0Ly8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIG9iamVjdHMgY29uc3RpdHV0aW5nIHN1YnNjcmlwdGlvbnMgbWFkZSBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBzdWJzY3JpYmVkU2VydmljZXM6IE1hcDxzdHJpbmcsVk5TdWJzY3JpYmVkU2VydmljZUluZm8+O1xyXG5cclxuXHQvLyBcIlRpY2sgbnVtYmVyXCIgZHVyaW5nIHdoaWNoIHRoZSBub2RlIHdhcyBsYXN0IHVwZGF0ZWQuIElmIHRoaXMgbm9kZSdzIHRpY2sgbnVtYmVyIGVxdWFsc1xyXG5cdC8vIHRoZSBjdXJyZW50IHRpY2sgbnVtYmVyIG1haW50YWluZWQgYnkgdGhlIHJvb3Qgbm9kZSwgdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgd2FzXHJcblx0Ly8gYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgdXBkYXRlIGN5Y2xlLiBUaGlzIGhlbHBzIHByZXZlbnQgdGhlIGRvdWJsZS1yZW5kZXJpbmcgb2YgYVxyXG5cdC8vIGNvbXBvbmVudCBpZiBib3RoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcblx0cHVibGljIGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gXHJcbi8qKlxyXG4gKiBUaGUgQ2FsbGJhY2tXcmFwcGVyIGZ1bmN0aW9uIGlzIHVzZWQgdG8gd3JhcCBhIGNhbGxiYWNrIGluIG9yZGVyIHRvIGNhdGNoIGV4Y2VwdGlvbnMgZnJvbSB0aGVcclxuICogY2FsbGJhY2sgYW5kIHBhc3MgaXQgdG8gdGhlIFwiU3RkRXJyb3JIYW5kbGluZ1wiIHNlcnZpY2UuIFRoZSBmdW5jdGlvbiBpcyBib3VuZCB0byB0d28gcGFyYW1ldGVyczpcclxuICogYSB2aXJ0dWFsIG5vZGUgKGFjY2Vzc2VkIGFzIGB0aGlzYCkgYW5kIHRoZSBvcmlnaW5hbCBjYWxsYmFjayAoYWNjZXNzZWQgYXMgdGhlIGZpcnN0IGVsZW1lbnRcclxuICogZnJvbSB0aGUgYGFyZ3VtZW50c2AgYXJyYXkpLiBUaGUgcmVzdCBvZiBwYXJhbWV0ZXJzIGluIHRoZSBgYXJndW1lbnRzYCBhcnJheSBhcmUgcGFzc2VkIHRvIHRoZVxyXG4gKiBvcmlnaW5hbCBjYWxsYmFjayBhbmQgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFjayBpcyByZXR1cm5lZCBmcm9tIHRoZSB3cmFwcGVyLlxyXG4gKi9cclxuZnVuY3Rpb24gQ2FsbGJhY2tXcmFwcGVyKCk6IGFueVxyXG57XHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0bGV0IFtvcmdDYWxsYmFjaywgLi4ucmVzdF0gPSBhcmd1bWVudHM7XHJcblx0XHRyZXR1cm4gb3JnQ2FsbGJhY2soIC4uLnJlc3QpO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGxldCBlcnJvclNlcnZpY2UgPSB0aGlzLmZpbmRTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIikgYXMgbWltLklFcnJvckhhbmRsaW5nU2VydmljZTtcclxuXHRcdGlmIChlcnJvclNlcnZpY2UpXHJcblx0XHRcdGVycm9yU2VydmljZS5yZXBvcnRFcnJvciggZXJyLCB0aGlzLnBhdGgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBlcnI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5VcGRhdGVEaXNwIHR5cGUgZGVzY3JpYmVzIHdoZXRoZXIgY2VydGFpbiBhY3Rpb25zIHNob3VsZCBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGVcclxuLy8gZHVyaW5nIHVwZGF0ZS4gVGhpcyBvYmplY3QgaXMgcmV0dXJuZWQgZnJvbSB0aGUgbm9kZSdzIHVwZGF0ZUZyb20gbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgVk5VcGRhdGVEaXNwID1cclxue1xyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIG5vZGUgaGFzIGNoYW5nZXMgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgRE9NIHRyZWUuIElmIHRoaXNcclxuXHQvLyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgd2lsbCBiZSBjbGxlZCBvbiB0aGUgbm9kZSBkdXJpbmcgdGhlIENvbW1pdFxyXG5cdC8vIHBoYXNlLlxyXG5cdHNob3VsZENvbW1pdDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgc3ViLW5vZGVzIHNob3VsZCBiZSB1cGRhdGVkLiBJZiB0aGlzIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGVcclxuXHQvLyBub2RlJ3MgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGltbWVkaWF0ZWx5IGNhbGxlZC5cclxuXHRzaG91bGRSZW5kZXI6IGJvb2xlYW47XHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5TdWJzY3JpYmVkU2VydmljZUluZm8gY2xhc3Mga2VlcHMgaW5mb3JtYXRpb24gYWJvdXQgYSBzdWJzY3JpcHRpb24gb2YgYSBub2RlIHRvIGEgc2VydmljZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvXHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIGZpbGxlZCBpbiB3aXRoIHRoZSBzZXJ2aWNlIHZhbHVlXHJcblx0cmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PjtcclxuXHJcblx0Ly8gRGVmYXVsdCB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHVzZWQgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcHVibGlzaGVzIHRoZVxyXG5cdC8vIHNlcnZpY2VcclxuXHRkZWZhdWx0U2VydmljZTogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciBhIG5vZGUgY2FuIHN1YnNjcmliZSB0byBhIHNlcnZpY2UgdGhhdCBpdCBpbXBsZW1lbnRzIGl0c2VsZi4gVGhpc1xyXG5cdC8vIGlzIHVzZWZ1bCBpbiBjYXNlIHdoZXJlIGEgc2VydmljZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGEgY29tcG9uZW50IGNhbiBjaGFpbiB0byBhIHNlcnZpY2VcclxuXHQvLyBpbXBsZW1lbnRlZCBieSBhbiBhbmNlc3RvciBjb21wb25lbnQuXHJcblx0dXNlU2VsZjogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElSb290Vk4gaW50ZXJmYWNlIHJlcHJlc2VudCB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgUm9vdCB2aXJ0dWFsIG5vZGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSb290Vk5cclxue1xyXG5cdC8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyB1bnB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgc3Vic2NyaWJlZCB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0bm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIFNjaGVkdWxlcyBhbiB1cGRhdGUgZm9yIHRoZSBnaXZlbiBub2RlLlxyXG5cdHJlcXVlc3ROb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBDYW5jZWxzIGEgcHJldmlvdXNseSByZXF1ZXN0ZWQgdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRjYW5jZWxOb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcblx0Ly8gaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0c2NoZWR1bGVGdW5jQ2FsbCggZnVuYzogKCkgPT4gdm9pZCwgYmVmb3JlVXBkYXRlOiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0Ly8gQ2FuY2VscyBhIGNhbGwgdGhhdCBoYXMgYmVlbiBzY2hlZHVsZWQgdG8gYmUgbWFkZSBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkXHJcblx0Ly8gY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHRjYW5jZWxTY2hlZHVsZWRGdW5jQ2FsbCggZnVuYzogKCkgPT4gdm9pZCwgYmVmb3JlVXBkYXRlOiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtWTn0gZnJvbSBcIi4vVk5cIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOQ2hhaW4gY2xhc3MgcmVwcmVzZW50cyBhIGRvdWJsbHktbGlua2VkIGxpc3Qgb2YgdmlydHVhbCBub2Rlcy4gSXQgcmVmZXJlbmNlcyB0aGUgZmlyc3RcclxuLy8gYW5kIGxhc3Qgc3ViLW5vZGVzIGFuZCBwcm92aWRlcyBzb21lIGNvbnZlbmllbmNlIG1ldGhvZHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVk5DaGFpbiBpbXBsZW1lbnRzIG1pbS5JVk5DaGFpblxyXG57XHJcblx0Y29uc3RydWN0b3IoIHZuPzogVk4pXHJcblx0e1xyXG5cdFx0aWYgKHZuICE9PSB1bmRlZmluZWQgJiYgdm4gIT0gbnVsbClcclxuXHRcdFx0dGhpcy5hcHBlbmRWTiggdm4pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJVk5DaGFpbiBpbXBsZW1lbnRhdGlvblxyXG5cdHB1YmxpYyBnZXQgRmlyc3QoKTogbWltLklWTm9kZSB7IHJldHVybiB0aGlzLmZpcnN0OyB9XHJcblx0cHVibGljIGdldCBMYXN0KCk6IG1pbS5JVk5vZGUgeyByZXR1cm4gdGhpcy5sYXN0OyB9XHJcblx0cHVibGljIGdldCBDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5jb3VudDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIG5vZGVzIGZyb20gdGhlIGNoYWluLlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5maXJzdCA9IHRoaXMubGFzdCA9IG51bGw7XHJcblx0XHR0aGlzLmNvdW50ID0gMDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBhIG5ldyBub2RlIHRvIHRoZSBlbmQgb2YgdGhlIGNoYWluLlxyXG5cdHB1YmxpYyBhcHBlbmRWTiggdm46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh2biA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHZuLnByZXYgPSB0aGlzLmxhc3Q7XHJcblx0XHRpZiAodGhpcy5maXJzdCA9PT0gbnVsbClcclxuXHRcdFx0dGhpcy5maXJzdCA9IHRoaXMubGFzdCA9IHZuO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxhc3QubmV4dCA9IHZuO1xyXG5cdFx0XHR0aGlzLmxhc3QgPSB2bjtcclxuXHRcdH1cclxuXHRcdHZuLm5leHQgPSBudWxsXHJcblx0XHR0aGlzLmNvdW50Kys7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYWxsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNoYWluIHRvIHRoZSBlbmQgb2Ygb3VyIGNoYWluLlxyXG5cdHB1YmxpYyBhcHBlbmRDaGFpbiggY2hhaW46IFZOQ2hhaW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKGNoYWluID09PSBudWxsIHx8IGNoYWluLmZpcnN0ID09PSBudWxsKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Y2hhaW4uZmlyc3QucHJldiA9IHRoaXMubGFzdDtcclxuXHRcdGlmICh0aGlzLmZpcnN0ID09PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmZpcnN0ID0gY2hhaW4uZmlyc3Q7XHJcblx0XHRcdHRoaXMubGFzdCA9IGNoYWluLmxhc3Q7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGFzdC5uZXh0ID0gY2hhaW4uZmlyc3Q7XHJcblx0XHRcdHRoaXMubGFzdCA9IGNoYWluLmxhc3Q7XHJcblx0XHR9XHJcblx0XHRjaGFpbi5sYXN0Lm5leHQgPSBudWxsO1xyXG5cdFx0dGhpcy5jb3VudCArPSBjaGFpbi5jb3VudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBhIG5ldyBub2RlIHRvIHRoZSBzdGFydCBvZiB0aGUgY2hhaW4uXHJcblx0cHVibGljIGluc2VydFZOKCB2bjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHZuID09PSBudWxsKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dm4ubmV4dCA9IHRoaXMuZmlyc3Q7XHJcblx0XHRpZiAodGhpcy5maXJzdCA9PT0gbnVsbClcclxuXHRcdFx0dGhpcy5maXJzdCA9IHRoaXMubGFzdCA9IHZuO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmZpcnN0LnByZXYgPSB2bjtcclxuXHRcdFx0dGhpcy5maXJzdCA9IHZuO1xyXG5cdFx0fVxyXG5cdFx0dm4ucHJldiA9IG51bGxcclxuXHRcdHRoaXMuY291bnQrKztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVwbGFjZXMgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGUgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gY2hhaW4uXHJcblx0cHVibGljIHJlcGxhY2VWTldpdGhDaGFpbiggdm46IFZOLCBjaGFpbjogVk5DaGFpbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodm4gPT09IG51bGwgfHwgY2hhaW4gPT09IG51bGwpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgcHJldjogVk4gPSB2bi5wcmV2O1xyXG5cdFx0bGV0IG5leHQ6IFZOID0gdm4ubmV4dDtcclxuXHRcdGlmICh0aGlzLmZpcnN0ID09PSB2bilcclxuXHRcdFx0dGhpcy5maXJzdCA9IGNoYWluLmZpcnN0O1xyXG5cdFx0aWYgKHRoaXMubGFzdCA9PT0gdm4pXHJcblx0XHRcdHRoaXMubGFzdCA9IGNoYWluLmxhc3Q7XHJcblx0XHRpZiAocHJldiAhPT0gbnVsbClcclxuXHRcdFx0cHJldi5uZXh0ID0gY2hhaW4uZmlyc3Q7XHJcblx0XHRpZiAobmV4dCAhPSBudWxsKVxyXG5cdFx0XHRuZXh0LnByZXYgPSBjaGFpbi5sYXN0O1xyXG5cclxuXHRcdHRoaXMuY291bnQgKz0gY2hhaW4uY291bnQgLSAxO1xyXG59XHJcblxyXG5cclxuXHJcblx0Ly8gRGVsZXRlcyB0aGUgZ2l2ZW4gbm9kZSBmcm9tIHRoZSBjaGFpbi5cclxuXHRwdWJsaWMgZGVsZXRlVk4oIHZuOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodm4gPT09IG51bGwpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgcHJldjogVk4gPSB2bi5wcmV2O1xyXG5cdFx0bGV0IG5leHQ6IFZOID0gdm4ubmV4dDtcclxuXHRcdGlmICh0aGlzLmZpcnN0ID09PSB2bilcclxuXHRcdFx0dGhpcy5maXJzdCA9IG5leHQ7XHJcblx0XHRpZiAodGhpcy5sYXN0ID09PSB2bilcclxuXHRcdFx0dGhpcy5sYXN0ID0gcHJldjtcclxuXHRcdGlmIChwcmV2ICE9PSBudWxsKVxyXG5cdFx0XHRwcmV2Lm5leHQgPSBuZXh0O1xyXG5cdFx0aWYgKG5leHQgIT0gbnVsbClcclxuXHRcdFx0bmV4dC5wcmV2ID0gcHJldjtcclxuXHJcblx0XHR0aGlzLmNvdW50LS07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpcnN0IG5vZGUgaW4gdGhlIGNoYWluIG9mIHN1Yi1ub2Rlcy4gTnVsbCBmb3IgZW1wdHkgY2hhaW5zLlxyXG5cdHB1YmxpYyBmaXJzdDogVk4gPSBudWxsO1xyXG5cclxuXHQvLyBMYXN0IG5vZGUgaW4gdGhlIGNoYWluIG9mIHN1Yi1ub2Rlcy4gTnVsbCBmb3IgZW1wdHkgY2hhaW5zLlxyXG5cdHB1YmxpYyBsYXN0OiBWTiA9IG51bGw7XHJcblxyXG5cdC8vIE51bWJlciBvZiBub2RlcyBpbiB0aGUgY2hhaW4uXHJcblx0cHVibGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge1ZOfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5DaGFpbn0gZnJvbSBcIi4vVk5DaGFpblwiXHJcbmltcG9ydCB7SW5zdGFuY2VWTn0gZnJvbSBcIi4vSW5zdGFuY2VWTlwiXHJcbmltcG9ydCB7Q2xhc3NWTn0gZnJvbSBcIi4vQ2xhc3NWTlwiXHJcbmltcG9ydCB7RnVuY1ZOfSBmcm9tIFwiLi9GdW5jVk5cIlxyXG5pbXBvcnQge0VsbVZOfSBmcm9tIFwiLi9FbG1WTlwiXHJcbmltcG9ydCB7VGV4dFZOfSBmcm9tIFwiLi9UZXh0Vk5cIlxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGEgY2hhaW4gb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBjb250ZW50LiBGb3IgYWxsIHR5cGVzIG9mIGNvbnRlbnRzIG90aGVyIHRoYW4gYW5cclxuLy8gYXJyYXksIHRoZSByZXR1cm5lZCBjaGFpbiBjb250YWlucyBhIHNpbmdsZSBWTi4gSWYgdGhlIGlucHV0IGNvbnRlbnQgaXMgYW4gYXJyYXksIHRoZW5cclxuLy8gYSBWTiBpcyBjcmVhdGVkIGZvciBlYWNoIG9mIHRoZSBhcnJheSBlbGVtZW50cy4gU2luY2UgYXJyYXkgZWxlbWVudHMgbWlnaHQgYWxzbyBiZSBhcnJheXMsXHJcbi8vIHRoZSBwcm9jZXNzIGlzIHJlY3Vyc2l2ZS5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggY29udGVudDogYW55KTogVk5DaGFpblxyXG57XHJcblx0aWYgKCBjb250ZW50ID09PSB1bmRlZmluZWQgfHwgY29udGVudCA9PT0gbnVsbCB8fGNvbnRlbnQgPT09IGZhbHNlIHx8IHR5cGVvZiBjb250ZW50ID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Y29uc3QgY2hhaW4gPSBuZXcgVk5DaGFpbigpO1xyXG5cdGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdGNoYWluLmFwcGVuZFZOKCBuZXcgVGV4dFZOKCBjb250ZW50IGFzIHN0cmluZykpO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50LnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0Y2hhaW4uYXBwZW5kVk4oIG5ldyBJbnN0YW5jZVZOKCBjb250ZW50IGFzIG1pbS5JQ29tcG9uZW50KSk7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggY29udGVudCkpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgYXJySXRlbSBvZiBjb250ZW50IGFzIEFycmF5PGFueT4pXHJcblx0XHRcdGNoYWluLmFwcGVuZENoYWluKCBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGFyckl0ZW0pKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFZOKVxyXG5cdFx0Y2hhaW4uYXBwZW5kVk4oIGNvbnRlbnQgYXMgVk4pO1xyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBWTkNoYWluKVxyXG5cdFx0Y2hhaW4uYXBwZW5kQ2hhaW4oIGNvbnRlbnQgYXMgVk5DaGFpbik7XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHR0aHJvdyBjb250ZW50O1xyXG5cdGVsc2VcclxuXHRcdGNoYWluLmFwcGVuZFZOKCBuZXcgVGV4dFZOKCBjb250ZW50LnRvU3RyaW5nKCkpKTtcclxuXHJcblx0cmV0dXJuIGNoYWluO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBjaGFpbiBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIFR5cGVTY3JpcHQncyBKU1ggcGFyc2VyLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5DaGFpbkZyb21KU1goIHRhZzogYW55LCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pOiBWTkNoYWluXHJcbntcclxuXHRjb25zdCBjaGFpbjogVk5DaGFpbiA9IG5ldyBWTkNoYWluKCk7XHJcblxyXG5cdGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0Y2hhaW4uYXBwZW5kVk4oIG5ldyBFbG1WTiggdGFnIGFzIHN0cmluZywgcHJvcHMsIGNoaWxkcmVuKSk7XHJcblx0ZWxzZSBpZiAodGFnID09PSBtaW0uRnJhZ21lbnQpXHJcblx0XHRjaGFpbi5hcHBlbmRDaGFpbiggY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCBjaGlsZHJlbikpO1xyXG5cdGVsc2UgaWYgKHRhZy5wcm90b3R5cGUgJiYgdHlwZW9mIHRhZy5wcm90b3R5cGUucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRjaGFpbi5hcHBlbmRWTiggbmV3IENsYXNzVk4oIHRhZyBhcyBtaW0uSUNvbXBvbmVudENsYXNzLCBwcm9wcywgY2hpbGRyZW4pKTtcclxuXHQvLyBlbHNlIGlmIChtaW0uQ29tcG9uZW50LmlzUHJvdG90eXBlT2YoIHRhZykpXHJcblx0Ly8gXHRjaGFpbi5hcHBlbmRWTiggbmV3IENsYXNzVk4oIHRhZyBhcyBtaW0uSUNvbXBvbmVudENsYXNzLCBwcm9wcywgY2hpbGRyZW4pKTtcclxuXHRlbHNlIGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRjaGFpbi5hcHBlbmRWTiggbmV3IEZ1bmNWTiggdGFnIGFzIG1pbS5GdW5jQ29tcFR5cGUsIHByb3BzLCBjaGlsZHJlbikpO1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cdGVsc2VcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJJbnZhbGlkIHRhZyBpbiBqc3ggcHJvY2Vzc2luZyBmdW5jdGlvbjogXCIgKyB0YWcpO1xyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHRyZXR1cm4gY2hhaW47XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge2NyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudH0gZnJvbSBcIi4vVk5DaGFpbkZ1bmNzXCJcclxuaW1wb3J0IHsgVk5UeXBlIH0gZnJvbSBcIi4vbWltXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5BY3Rpb24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHBvc3NpYmxlIGFjdGlvbnMgdG8gcGVyZm9ybSBmb3IgbmV3IG5vZGVzIGR1cmluZ1xyXG4gKiByZWNvbmNpbGlhdGlvbiBwcm9jZXNzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gVk5EaXNwQWN0aW9uXHJcbntcclxuXHQvKipcclxuXHQgKiBFaXRoZXIgaXQgaXMgbm90IHlldCBrbm93biB3aGF0IHRvIGRvIHdpdGggdGhlIG5vZGUgaXRzZWxmIG9yIHRoaXMgaXMgYSBjb21wb25lbnQgbm9kZSxcclxuXHQgKiBmb3Igd2hpY2ggYW4gdXBkYXRlIHdhcyByZXF1ZXN0ZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIG5vZGUncyBjaGlsZHJlbiBzaG91bGQgYmUgdXBkYXRlZC5cclxuXHQgKi9cclxuXHRVbmtub3duID0gMCxcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG5ldyBub2RlIHNob3VsZCBiZSBpbnNlcnRlZC4gVGhpcyBtZWFucyB0aGF0IGVpdGhlciB0aGVyZSB3YXMgbm8gY291bnRlcnBhcnQgb2xkIG5vZGVcclxuXHQgKiBmb3VuZCBvciB0aGUgZm91bmQgbm9kZSBjYW5ub3QgYmUgdXNlZCB0byB1cGRhdGUgdGhlIG9sZCBvbmUgbm9yIGNhbiB0aGUgb2xkIG5vZGUgYmUgcmV1c2VkXHJcblx0ICogYnkgdGhlIG5ldyBvbmUgKGUuZy4gb2YgZGlmZmVyZW50IHR5cGUpLlxyXG5cdCAqL1xyXG5cdEluc2VydCA9IDEsXHJcblxyXG5cdC8qKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBvbGQgbm9kZS4gKi9cclxuXHRVcGRhdGUgPSAyLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5EaXNwR3JvdXAgY2xhc3MgZGVzY3JpYmVzIGEgZ3JvdXAgb2YgY29uc2VjdXRpdmUgVk5EaXNwIG9iamVjdHMgY29ycmVzcHBvbmRpbmcgdG8gdGhlXHJcbiAqIHNlcXVlbmNlIG9mIHN1Yi1ub2Rlcy4gVGhlIGdyb3VwIGlzIGRlc2NyaWJlZCB1c2luZyBpbmRpY2VzIG9mIFZORGlzcCBvYmplY3RzIGluIHRoZVxyXG4gKiBzdWJOb2RlRGlzcCBmaWVsZCBvZiB0aGUgcGFyZW50IFZORGlzcCBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVk5EaXNwR3JvdXBcclxue1xyXG5cdC8qKiBwYXJlbnQgVk5EaXNwIHRvIHdoaWNoIHRoaXMgZ3JvdXAgYmVsb25ncyAqL1xyXG5cdHB1YmxpYyBwYXJlbnREaXNwOiBWTkRpc3A7XHJcblx0XHJcblx0LyoqIEFjdGlvbiB0byBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGVzIGluIHRoZSBncm91cCAqL1xyXG5cdHB1YmxpYyBhY3Rpb246IFZORGlzcEFjdGlvbjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBmaXJzdCBWTkRpc3AgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGZpcnN0OiBudW1iZXI7XHJcblxyXG5cdC8qKiBJbmRleCBvZiB0aGUgbGFzdCBWTkRpc3AgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGxhc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIE51bWJlciBvZiBub2RlcyBpbiB0aGUgZ3JvdXAuICovXHJcblx0cHVibGljIGdldCBjb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5sYXN0IC0gdGhpcy5maXJzdCArIDEgfTtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgZmlyc3RETjogRE47XHJcblxyXG5cdC8qKiBGaXJzdCBET00gbm9kZSBpbiB0aGUgZ3JvdXAgLSB3aWxsIGJlIGtub3duIGFmdGVyIHRoZSBub2RlcyBhcmUgcGh5c2ljYWxseSB1cGRhdGVkICovXHJcblx0cHVibGljIGxhc3RETjogRE47XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHBhcmVudERpc3A6IFZORGlzcCwgYWN0aW9uOiBWTkRpc3BBY3Rpb24pXHJcblx0e1xyXG5cdFx0dGhpcy5wYXJlbnREaXNwID0gcGFyZW50RGlzcDtcclxuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIGZpcnN0IGFuZCBsYXN0IERPTSBub2RlcyBmb3IgdGhlIGdyb3VwLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgYWZ0ZXIgdGhlXHJcblx0ICogbm9kZXMgd2VyZSBwaGlzaWNhbGx5IHVwZGF0ZWQvaW5zZXJ0ZWQgYW5kIHdlIGNhbiBvYnRhaW4gdGhlaXIgRE9NIG5vZGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZXRlcm1pbmVETnMoKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0OyBpIDw9IHRoaXMubGFzdDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdGxldCB2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0ID8gZGlzcC5uZXdWTiA6IGRpc3Aub2xkVk47XHJcblx0XHRcdHRoaXMuZmlyc3RETiA9IHZuLmdldEZpcnN0RE4oKTtcclxuXHRcdFx0aWYgKHRoaXMuZmlyc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5sYXN0OyBpID49IHRoaXMuZmlyc3Q7IGktLSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRpc3AgPSB0aGlzLnBhcmVudERpc3Auc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHRsZXQgdm4gPSB0aGlzLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydCA/IGRpc3AubmV3Vk4gOiBkaXNwLm9sZFZOO1xyXG5cdFx0XHR0aGlzLmxhc3RETiA9IHZuLmdldExhc3RETigpO1xyXG5cdFx0XHRpZiAodGhpcy5sYXN0RE4pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5EaXNwIGNsYXNzIGlzIGEgcmVjdXJzaXZlIHN0cnVjdHVyZSB0aGF0IGRlc2NyaWJlcyBhIGRpc3Bvc2l0aW9uIGZvciBhIG5vZGUgYW5kIGl0c1xyXG4gKiBzdWItbm9kZXMgZHVyaW5nIHRoZSByZWNvbmNpbGlhdGlvbiBwcm9jZXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZORGlzcFxyXG57XHJcblx0Y29uc3RydWN0b3IoIG5ld1ZOOiBWTiwgYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVua25vd24sIG9sZFZOPzogVk4pXHJcblx0e1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0XHR0aGlzLm5ld1ZOID0gbmV3Vk47XHJcblx0XHR0aGlzLm9sZFZOID0gb2xkVk47XHJcblx0fVxyXG5cclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZSAqL1xyXG5cdHB1YmxpYyBhY3Rpb246IFZORGlzcEFjdGlvbjtcclxuXHJcblx0LyoqIE5ldyB2aXJ0dWFsIG5vZGUgdG8gaW5zZXJ0IG9yIHRvIHVwZGF0ZSBhbiBvbGQgbm9kZSAqL1xyXG5cdHB1YmxpYyBuZXdWTjogVk47XHJcblxyXG5cdC8qKiBPbGQgdmlydHVhbCBub2RlIHRvIGJlIHVwZGF0ZWQuIFRoaXMgaXMgbm90IHVzZWQgZm9yIHRoZSBJbnNlcnQgYWN0aW9uLiAqL1xyXG5cdHB1YmxpYyBvbGRWTjogVk47XHJcblxyXG5cdC8qKiBEaXNwb3NpdGlvbiBmbGFncyBmb3IgdGhlIFVwZGF0ZSBhY3Rpb24uIFRoaXMgaXMgbm90IHVzZWQgZm9yIHRoZSBJbnNlcnQgYWN0aW9ucy4gKi9cclxuXHRwdWJsaWMgdXBkYXRlRGlzcDogVk5VcGRhdGVEaXNwO1xyXG5cclxuXHQvKiogQXJyYXkgb2Ygc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQgZHVyaW5nIHVwZGF0ZSBvZiB0aGUgc3ViLW5vZGVzLiAqL1xyXG5cdHB1YmxpYyBzdWJOb2Rlc1RvUmVtb3ZlOiBWTltdO1xyXG5cclxuXHQvKipcclxuXHQgKiBBcnJheSBvZiBkaXNwb3NpdGlvbiBvYmplY3RzIGZvciBzdWItbm9kZXMuIFRoaXMgaW5jbHVkZXMgbm9kZXMgdG8gYmUgdXBkYXRlZFxyXG5cdCAqIGFuZCB0byBiZSBpbnNlcnRlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3ViTm9kZURpc3BzOiBWTkRpc3BbXTtcclxuXHJcblx0LyoqIEFycmF5IG9mIGdyb3VwcyBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBvciBpbnNlcnRlZC4gKi9cclxuXHRwdWJsaWMgc3ViTm9kZUdyb3VwczogVk5EaXNwR3JvdXBbXTtcclxuXHJcblx0LyoqXHJcblx0ICogSWYgdGhlIG5vZGUgaGFzIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBzdWItbm9kZXMsIHRoZW4gd2UgYnVpbGQgZ3JvdXBzLiBUaGUgaWRlYSBpcyB0aGF0XHJcblx0ICogb3RoZXJ3aXNlLCB0aGUgb3ZlcmhlYWQgb2YgYnVpbGRpbmcgZ3JvdXBzIGlzIG5vdCB3b3J0aCBpdC5cclxuXHQgKi9cclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBOT19HUk9VUF9USFJFU0hPTEQgPSAyO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbXBhcmVzIG9sZCBhbmQgbmV3IGNoYWlucyBvZiBzdWItbm9kZXMgYW5kIGRldGVybWluZXMgd2hhdCBub2RlcyBzaG91bGQgYmUgY3JlYXRlZCwgZGVsZXRlZFxyXG5cdCAqIG9yIHVwZGF0ZWQuIFRoZSByZXN1bHQgaXMgcmVtZW1iZXJlZCBhcyBhbiBhcnJheSBvZiBWTkRpc3Agb2JqZWN0cyBmb3IgZWFjaCBzdWItbm9kZSBhbmQgYXNcclxuXHQgKiBhcnJheSBvZiBvbGQgc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIGRlbGV0ZWQuIEluIGFkZGl0aW9uLCB0aGUgbmV3IHN1Yi1ub2RlcyBhcmUgZGl2aWRlZFxyXG5cdCAqIGludG8gZ3JvdXBzIG9mIGNvbnNlY3V0aXZlIG5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIG9mIG5vZGVzIHRoYXQgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdCAqIFRoZSBncm91cHMgYXJlIGJ1aWx0IGluIGEgd2F5IHNvIHRoYXQgaWYgYSBub2RlIHNob3VsZCBiZSBtb3ZlZCwgaXRzIGVudGlyZSBncm91cCBpcyBtb3ZlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgYnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW5kZXIgdGhlIG5ldyBjb250ZW50LiBXaGV0aGVyIHdlIHVzZSB0aGUgb2xkIG9yIHRoZSBuZXcgbm9kZSBmb3IgcmVuZGVyaW5nIGRlcGVuZHMgb25cclxuXHRcdC8vIHNldmVyYWwgZmFjdG9yc1xyXG5cdFx0Ly8gIC0gaWYgaXQgaXMgYW4gSW5zZXJ0IGFjdGlvbiwgdGhlbiB1c2UgdGhlIG5ldyBub2RlIChvbGQgbm9kZSBpc24ndCBldmVuIGF2YWlsYWJsZSkuXHJcblx0XHQvLyAgLSBpZiBpdCBpcyBhbiBVcGRhdGUgb3BlcmF0aW9uLCB0aGVuIGZvciBhbGwgdHlwZXMgb2Ygbm9kZXMgZXhjZXB0IEluc3RhbmNlVk4sIHVzZVxyXG5cdFx0Ly8gICAgdGhlIG9sZCBub2RlLiBGb3IgSW5zdGFuY2VWTiB1c2UgdGhlIG5ldyBub2RlIGJlY2F1c2UgdGhlIG9sZCBub2RlIGlzIHN0aWxsIHBvaW50aW5nXHJcblx0XHQvLyAgICB0byB0aGUgb2xkIGNvbXBvbmVudCBpbnN0YW5jZS4gV2UgYWxzbyByZWx5IG9uIHRoZSBmYWN0IHRoYXQgZm9yIHRoZSBzdGVtIG5vZGVzLCB3ZVxyXG5cdFx0Ly8gICAgaGF2ZSBib3RoIG9sZCBhbmQgbmV3IG5vZGVzIHBvaW50aW5nIHRvIHRoZSBzYW1lIG5vZGUuXHJcblx0XHRsZXQgbmV3Q2hhaW4gPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoXHJcblx0XHRcdFx0dGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQgfHwgdGhpcy5vbGRWTi50eXBlID09PSBWTlR5cGUuSW5zdGFuY2VDb21wXHJcblx0XHRcdFx0XHQ/IHRoaXMubmV3Vk4ucmVuZGVyKCkgOiB0aGlzLm9sZFZOLnJlbmRlcigpKTtcclxuXHRcdGxldCBvbGRDaGFpbiA9IHRoaXMub2xkVk4uc3ViTm9kZXM7XHJcblxyXG5cdFx0Ly8gaWYgZWl0aGVyIG9sZCBvciBuZXcgb3IgYm90aCBjaGFpbnMgYXJlIGVtcHR5LCB3ZSBkbyBzcGVjaWFsIHRoaW5nc1xyXG5cdFx0aWYgKCghbmV3Q2hhaW4gfHwgbmV3Q2hhaW4uY291bnQgPT09IDApICYmICghb2xkQ2hhaW4gfHwgb2xkQ2hhaW4uY291bnQgPT09IDApKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBib3RoIGNoYWluIGFyZSBlbXB0eSAtIGRvIG5vdGhpbmdcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIW5ld0NoYWluIHx8IG5ld0NoYWluLmNvdW50ID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBuZXcgY2hhaW4gaXMgZW1wdHkgLSBqdXN0IGRlbGV0ZSBhbGwgb2xkIG5vZGVzXHJcblx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZSA9IG5ldyBBcnJheSggb2xkQ2hhaW4uY291bnQpO1xyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGZvciggbGV0IG9sZFZOID0gb2xkQ2hhaW4uZmlyc3Q7IG9sZFZOICE9PSBudWxsOyBvbGRWTiA9IG9sZFZOLm5leHQpXHJcblx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlW2krK10gPSBvbGRWTjtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCFvbGRDaGFpbiB8fCBvbGRDaGFpbi5jb3VudCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gb2xkIGNoYWluIGlzIGVtcHR5IC0ganVzdCBpbnNlcnQgYWxsIG5ldyBub2Rlc1xyXG5cdFx0XHR0aGlzLnN1Yk5vZGVEaXNwcyA9IG5ldyBBcnJheSggbmV3Q2hhaW4uY291bnQpO1xyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGZvciggbGV0IG5ld1ZOID0gbmV3Q2hhaW4uZmlyc3Q7IG5ld1ZOICE9PSBudWxsOyBuZXdWTiA9IG5ld1ZOLm5leHQpXHJcblx0XHRcdFx0dGhpcy5zdWJOb2RlRGlzcHNbaSsrXSA9IG5ldyBWTkRpc3AoIG5ld1ZOLCBWTkRpc3BBY3Rpb24uSW5zZXJ0KTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyB3ZSBhcmUgaGVyZSBpZiBib3RoIG9sZCBhbmQgbmV3IGNoYWlucyBjb250YWluIHNvbWUgbm9kZXMuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IG5vZGVzIGFuZCBmaWxsIGFuIGFycmF5IG9mIFZORGlzcCBvYmplY3RzIGluIHRoZSBwYXJlbnQgZGlzcC4gQXQgdGhlIHNhbWVcclxuXHRcdC8vIHRpbWUsIGJ1aWxkIGEgbWFwIHRoYXQgaW5jbHVkZXMgYWxsIG5ldyBub2RlcyB0aGF0IGhhdmUga2V5cy4gVGhlIHZhbHVlcyBhcmUgVk5EaXNwIG9iamVjdHMuXHJcblx0XHR0aGlzLnN1Yk5vZGVEaXNwcyA9IG5ldyBBcnJheSggbmV3Q2hhaW4uY291bnQpO1xyXG5cdFx0bGV0IG5ld0tleWVkTm9kZU1hcCA9IG5ldyBNYXA8YW55LFZORGlzcD4oKTtcclxuXHRcdGxldCBpID0gMDtcclxuXHRcdGZvciggbGV0IG5ld1ZOID0gbmV3Q2hhaW4uZmlyc3Q7IG5ld1ZOICE9PSBudWxsOyBuZXdWTiA9IG5ld1ZOLm5leHQpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdWJOb2RlRGlzcCA9IG5ldyBWTkRpc3AoIG5ld1ZOKTtcclxuXHRcdFx0dGhpcy5zdWJOb2RlRGlzcHNbaSsrXSA9IHN1Yk5vZGVEaXNwO1xyXG5cdFx0XHRpZiAobmV3Vk4ua2V5ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bmV3S2V5ZWROb2RlTWFwLnNldCggbmV3Vk4ua2V5LCBzdWJOb2RlRGlzcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG9sZCBub2RlcyBhbmQgcHV0IHRob3NlIHRoYXQgaGF2ZSBrZXlzIG1hdGNoaW5nIG5ldyBub2RlcyBpbnRvIHRoZSBuZXcgbm9kZXMnIFZORGlzcFxyXG5cdFx0Ly8gb2JqZWN0cy4gUHV0IHRob3NlIHRoYXQgZG9uJ3QgaGF2ZSBrZXlzIG9yIHRoYXQgaGF2ZSBrZXlzIHRoYXQgZG9uJ3QgbWF0Y2ggYW55IG5ldyBub2RlIHRvXHJcblx0XHQvLyBhbiBhcnJheSBvZiBub24tbWF0Y2hpbmcgb2xkIG5vZGVzXHJcblx0XHRsZXQgb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdDogVk5bXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgb2xkVk4gPSBvbGRDaGFpbi5maXJzdDsgb2xkVk4gIT09IG51bGw7IG9sZFZOID0gb2xkVk4ubmV4dClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG9sZFZOLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdG9sZE5vbk1hdGNoaW5nTm9kZUxpc3QucHVzaCggb2xkVk4pO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgc3ViTm9kZURpc3AgPSBuZXdLZXllZE5vZGVNYXAuZ2V0KCBvbGRWTi5rZXkpO1xyXG5cdFx0XHRcdGlmIChzdWJOb2RlRGlzcClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzdWJOb2RlRGlzcC5vbGRWTiA9IG9sZFZOO1xyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVwZGF0ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0b2xkTm9uTWF0Y2hpbmdOb2RlTGlzdC5wdXNoKCBvbGRWTik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBieSBub3cgd2UgaGF2ZSBhbGwgb2xkIGFuZCBuZXcgbm9kZXMgd2l0aCB0aGUgc2FtZSBrZXlzIG1hdGNoZWQgdG8gb25lIGFub3RoZXIuIE5vdyBsb29wXHJcblx0XHQvLyBvdmVyIG5ldyBub2RlIGRpc3Bvc2l0aW9ucyBhbmQgbWF0Y2ggdGhlIG5vdC15ZXQtbWF0Y2hlZCBvbmVzICh0aG9zZSB3aXRoIFVua25vd24gYWN0aW9uKVxyXG5cdFx0Ly8gdG8gb2xkIG5vZGVzIHNlcXVlbnRpYWxseSBmcm9tIHRoZSBsaXN0IG9mIG5vbi1tYXRjaGVkIG9sZCBub2Rlcy5cclxuXHRcdGxldCBvbGROb25NYXRjaGluZ05vZGVMaXN0TGVuZ3RoOiBudW1iZXIgPSBvbGROb25NYXRjaGluZ05vZGVMaXN0Lmxlbmd0aDtcclxuXHRcdGxldCBvbGROb25NYXRjaGluZ05vZGVMaXN0SW5kZXg6IG51bWJlciA9IDA7XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRGlzcCBvZiB0aGlzLnN1Yk5vZGVEaXNwcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHN1Yk5vZGVEaXNwLmFjdGlvbilcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBvbGRWTjogVk47XHJcblx0XHRcdGlmIChvbGROb25NYXRjaGluZ05vZGVMaXN0SW5kZXggPCBvbGROb25NYXRjaGluZ05vZGVMaXN0TGVuZ3RoKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZFZOID0gb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdFtvbGROb25NYXRjaGluZ05vZGVMaXN0SW5kZXhdO1xyXG5cdFx0XHRcdGxldCBuZXdWTiA9IHN1Yk5vZGVEaXNwLm5ld1ZOO1xyXG5cdFx0XHRcdGlmIChvbGRWTi50eXBlID09PSBuZXdWTi50eXBlICYmIG9sZFZOLmlzVXBkYXRlUG9zc2libGUoIG5ld1ZOKSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyB3ZSBhcmUgaGVyZSBpZiB0aGUgbmV3IG5vZGUgY2FuIHVwZGF0ZSB0aGUgb2xkIG9uZVxyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0XHRcdHN1Yk5vZGVEaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyB3ZSBhcmUgaGVyZSBpZiB0aGUgbmV3IG5vZGUgY2Fubm90IHVwZGF0ZSB0aGUgb2xkIG9uZSBhbmQgc2hvdWxkIGNvbXBsZXRlbHlcclxuXHRcdFx0XHRcdC8vIHJlcGxhY2UgaXQuIFdlIGFkZCB0aGUgb2xkIG5vZGUgdG8gdGhlIGxpc3Qgb2YgdGhvc2UgdG8gYmUgcmVtb3ZlZCBhbmQgaW5kaWNhdGVcclxuXHRcdFx0XHRcdC8vIHRoYXQgdGhlIG5ldyBub2RlIHNob3VsZCBiZSBpbnNlcnRlZC5cclxuXHRcdFx0XHRcdGlmICghdGhpcy5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pO1xyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG9sZE5vbk1hdGNoaW5nTm9kZUxpc3RJbmRleCsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHdlIGFyZSBoZXJlIGlmIHRoZXJlIGFyZSBubyBub24tbWF0Y2hlZCBvbGQgbm9kZXMgbGVmdC4gSW5kaWNhdGUgdGhhdCB0aGUgbmV3IG5vZGVcclxuXHRcdFx0XHQvLyBzaG91bGQgYmUgbW91bnRlZC5cclxuXHRcdFx0XHRzdWJOb2RlRGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gb2xkIG5vbi1tYXRjaGVkIG5vZGVzIGZyb20gdGhlIGN1cnJlbnQgaW5kZXggdG8gdGhlIGVuZCBvZiB0aGUgbGlzdCB3aWxsIGJlIHVubW91bnRlZFxyXG5cdFx0aWYgKG9sZE5vbk1hdGNoaW5nTm9kZUxpc3RJbmRleCA8IG9sZE5vbk1hdGNoaW5nTm9kZUxpc3RMZW5ndGgpXHJcblx0XHR7XHJcblx0XHRcdGlmICghdGhpcy5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZSA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yKCBsZXQgaSA9IG9sZE5vbk1hdGNoaW5nTm9kZUxpc3RJbmRleDsgaSA8IG9sZE5vbk1hdGNoaW5nTm9kZUxpc3RMZW5ndGg7IGkrKylcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkTm9uTWF0Y2hpbmdOb2RlTGlzdFtpXSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc3ViTm9kZURpc3BzLmxlbmd0aCA+IFZORGlzcC5OT19HUk9VUF9USFJFU0hPTEQpXHJcblx0XHRcdHRoaXMuYnVpbGRTdWJOb2RlR3JvdXBzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZyb20gYSBmbGF0IGxpc3Qgb2YgbmV3IHN1Yi1ub2RlcyBidWlsZHMgZ3JvdXBzIG9mIGNvbnNlY3V0aXZlIG5vZGVzIHRoYXQgc2hvdWxkIGJlIGVpdGhlclxyXG5cdCAqIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBidWlsZFN1Yk5vZGVHcm91cHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjb3VudCA9IHRoaXMuc3ViTm9kZURpc3BzLmxlbmd0aDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBpcyBub3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkIGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGxlc3MgdGhlblxyXG5cdFx0XHQvLyB0aGUgcHJlLWRldGVybWluZWQgdGhyZXNob2xkXHJcblx0XHRcdGlmIChjb3VudCA8PSBWTkRpc3AuTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG5cdFx0XHRcdHJldHVybjtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0dGhpcy5zdWJOb2RlR3JvdXBzID0gW107XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHN1Yi1ub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gZGVjaWRlIHdoZXRoZXIgd2UgbmVlZCB0byBvcGVuIGEgbmV3IGdyb3VwXHJcblx0XHQvLyBvciBwdXQgdGhlIGN1cnJlbnQgbm9kZSBpbnRvIHRoZSBleGlzdGluZyBncm91cCBvciBjbG9zZSB0aGUgZXhpc3RpbmcgZ3JvdXAgYW5kIG9wZW5cclxuXHRcdC8vIGEgbmV3IG9uZS5cclxuXHRcdGxldCBncm91cDogVk5EaXNwR3JvdXA7XHJcblx0XHRsZXQgbGFzdERpc3BJbmRleCA9IGNvdW50IC0gMTtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRpc3AgPSB0aGlzLnN1Yk5vZGVEaXNwc1tpXTtcclxuXHRcdFx0aWYgKCFncm91cClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIG9wZW4gYSBuZXcgZ3JvdXBcclxuXHRcdFx0XHRncm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgZGlzcC5hY3Rpb24pO1xyXG5cdFx0XHRcdGdyb3VwLmZpcnN0ID0gaTtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZGlzcC5hY3Rpb24gIT09IGdyb3VwLmFjdGlvbilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBwcmV2aW91cyBpbmRleC4gRGVjcmVtZW50IHRoZSBpdGVyYXRpbmcgaW5kZXggc28gdGhhdFxyXG5cdFx0XHRcdC8vIHRoZSBuZXh0IGl0ZXJhdGlvbiB3aWxsIG9wZW4gYSBuZXcgZ3JvdXAuIE5vdGUgdGhhdCB3ZSBjYW5ub3QgYmUgaGVyZSBmb3IgYSBub2RlXHJcblx0XHRcdFx0Ly8gdGhhdCBzdGFydHMgYSBuZXcgZ3JvdXAgYmVjYXVzZSBmb3Igc3VjaCBub2RlIGRpc3AuYWN0aW9uID09PSBncm91cEFjdGlvbi5cclxuXHRcdFx0XHRncm91cC5sYXN0ID0gLS1pO1xyXG5cdFx0XHRcdGdyb3VwID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGdyb3VwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGFuIFwidXBkYXRlXCIgbm9kZSBpcyBvdXQtb2Ytb3JkZXIgYW5kIHNob3VsZCBjbG9zZSB0aGUgY3VycmVudCBncm91cCBpZiBpdHMgbmV4dFxyXG5cdFx0XHRcdC8vIHNpYmxpbmcgaW4gdGhlIG5ldyBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXh0IHNpYmxpbmcgaW4gdGhlIG9sZCBsaXN0LiBUaGVcclxuXHRcdFx0XHQvLyBsYXN0IG5vZGUgd2lsbCBjbG9zZSB0aGUgbGFzdCBncm91cCBhZnRlciB0aGUgbG9vcC5cclxuXHRcdFx0XHRpZiAoaSAhPT0gbGFzdERpc3BJbmRleCAmJiB0aGlzLnN1Yk5vZGVEaXNwc1tpKzFdLm9sZFZOICE9PSBkaXNwLm9sZFZOLm5leHQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIGN1cnJlbnQgaW5kZXguXHJcblx0XHRcdFx0XHRncm91cC5sYXN0ID0gaTtcclxuXHRcdFx0XHRcdGdyb3VwID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWxsIGNvbnNlY3V0aXZlIFwiaW5zZXJ0XCIgbm9kZXMgYmVsb25nIHRvIHRoZSBzYW1lIGdyb3VwIHNvIHdlIGp1c3Qgd2FpdCBmb3IgdGhlXHJcblx0XHRcdC8vIG5leHQgbm9kZVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNsb3NlIHRoZSBsYXN0IGdyb3VwXHJcblx0XHRncm91cC5sYXN0ID0gY291bnQgLSAxO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lFdmVudFNsb3QsIEV2ZW50U2xvdH0gZnJvbSBcIi4vRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uYWwgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY1Byb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHJlcHJlc2VudGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZ1bmNDb21wVHlwZTxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IChwcm9wczogRnVuY1Byb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KSA9PiBhbnk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHVzZWQgdG8gZGVmaW5lIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbXBQcm9wczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IFJlYWRvbmx5PFRQcm9wcz4gJlxyXG5cdHtcclxuXHRcdHJlYWRvbmx5IGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBkZWZpbmVzIGNvbnN0cnVjdG9yIHNpZ25hdHVyZSBmb3IgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxyXG4gKlx0XHRvZiB0aGlzIHR5cGUuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCBvZiB0aGlzIHR5cGUuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDbGFzczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG57XHJcblx0bmV3KCBwcm9wcz86IFRQcm9wcyk6IElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj47XHJcblx0cmVuZGVyKCk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhbGwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdC8qKiBDb21wb25lbnQgcHJvcGVydGllcyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yICovXHJcblx0cHJvcHM6IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50cyBjYW4gZGVmaW5lIGRpc3BsYXkgbmFtZSBmb3IgdHJhY2luZyBwdXJwb3NlczsgaWYgdGhleSBkb24ndCB0aGUgZGVmYXVsdCBuYW1lXHJcblx0ICogaXMgdGhlIGNvbXBvbmVudCdzIGNsYXNzIGNvbnN0cnVjdG9yIG5hbWUuIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIGJlZm9yZVxyXG5cdCAqIHRoZSB2aXJ0dWFsIG5vZGUgaXMgYXR0YWNoZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRnZXREaXNwbGF5TmFtZT8oKTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIG9yIGNsZWFycyB0aGUgc2l0ZSBvYmplY3QgdG8gdGhlIGNvbXBvbmVudC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHR3aWNlOlxyXG5cdCAqICAxLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWU6IHRoZSBjb21wb25lbnQgbXVzdCByZW1lbWJlciB0aGVcclxuXHQgKiAgICBwYXNzZWQgb2JqZWN0LlxyXG5cdCAqICAyLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQ6IG51bGwgaXMgcGFzc2VkIGFzIGEgcGFyYW1ldGVyIGFuZCB0aGUgY29tcG9uZW50IG11c3RcclxuXHQgKiAgICByZWxlYXNlIHRoZSByZW1lbWJlcmVkIG9iamVjdC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBvcHRpb25hbDsgaG93ZXZlciwgd2l0aG91dCBpbXBsZW1lbnRpbmcgaXQgY29tcG9uZW50cyBjYW5ub3QgdXNlIE1pbWJsXHJcblx0ICogc2VydmljZXMuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHNpdGUgVGhlIHNpdGUgb2JqZWN0IGltcGxlbWVudGluZyB0aGUgSVZub2RlIGludGVyZmFjZS4gVGhlIGNvbXBvbmVudCB1c2VzXHJcblx0ICogdGhpcyBvYmplY3QgdG8gaW52b2tlIGRpZmZlcmVudCBzZXJ2aWNlcyBwcm92aWRlZCBieSB0aGUgTWltYmwgaW5mcmFzdHJ1Y3R1cmU7IGZvciBleGFtcGxlXHJcblx0ICogdG8gcmVxdWVzdCBhIHJlLXJlbmRlcmluZy5cclxuXHQgKi9cclxuXHRzZXRTaXRlPyggc2l0ZTogSVZOb2RlKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHJlbmRlciBpdHMgY29udGVudCBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMgbWV0aG9kXHJcblx0ICogaXMgY2FsbGVkIHdoZW4gdGhlIHNpdGUgaGFzIGFscmVhZHkgYmVlbiBzZXQgc28gdGhlIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlcyBmcm9tIGl0LlxyXG5cdCAqL1xyXG5cdGNvbXBvbmVudFdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgaGFzIGJlZW4gaW5zZXJ0ZWQgaW50byB0aGUgRE9NIHRyZWUuIFRoaXMgbWV0aG9kIGlzXHJcblx0ICogY2FsbGVkIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gaW5zdGFudGlhdGVkIGFuZCB0aGUgaW5pdGlhbCByZW5kZXJpbmcgaGFzIGJlZW4gZG9uZS5cclxuXHQgKi9cclxuXHRjb21wb25lbnREaWRNb3VudD8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogSW5mb3JtcyB0aGUgY29tcG9uZW50IHRoYXQgbmV3IHByb3BlcnRpZXMgaGF2ZSBiZWVuIHNwZWNpZmllZC4gQXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcclxuXHQgKiB0aGlzLnByb3BzIHJlZmVycyB0byB0aGUgXCJvbGRcIiBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnMgdHJ1ZSx0aGVuIGl0cyByZW5kZXJcclxuXHQgKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQuIEF0IHRoYXQgdGltZSx0aGUgb3JpZ2luYWwgcHJvcHMgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBpbnRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIHdpbGwgaGF2ZSB0aGVzZSBuZXcgcHJvcGVydGllcy4gSWYgdGhlIGNvbXBvbmVudCBkb2Vzbid0IGltcGxlbWVudFxyXG5cdCAqIHRoZSBzaG91bGRDb21wb25lbnRVcGRhdGUgbWV0aG9kIGl0IGlzIGFzIHRob3VnaCB0cnVlIGlzIHJldHVybmVkLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnNcclxuXHQgKiBmYWxzZSwgdGhlIHJlbmRlciBtZXRob2QgaXMgbm90IGNhbGxlZCBhbmQgdGhlIERPTSB0cmVlIG9mIHRoZSBjb21wb25lbnQgcmVtYWlucyB1bmNoYW5nZWQuXHJcblx0ICogVGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudCwgaG93ZXZlciwgc3RpbGwgY2hhbmdlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wcyBUaGUgbmV3IHByb3BlcnRpZXMgdGhhdCB0aGUgcGFyZW50IGNvbXBvbmVudCBwcm92aWRlcyB0byB0aGlzIGNvbXBvbmVudC5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIGhhdmUgaXRzIHJlbmRlciBtZXRob2QgY2FsbGVkIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0c2hvdWxkQ29tcG9uZW50VXBkYXRlPyggbmV3UHJvcHM6IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPik6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQncyBjb250ZW50IGhhcyBiZWVuIHVwZGF0ZWQgaW4gdGhlIERPTSB0cmVlLiAqL1xyXG5cdGNvbXBvbmVudERpZFVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50J3MgY29udGVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLiBBZnRlclxyXG5cdCAqIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXHJcblx0ICovXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgYW4gZXhjZXB0aW9uIHRoYXQgb2NjdXJyZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZyBvZlxyXG5cdCAqIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvciBpZiBpdCB0aHJvd3MgYW4gZXJyb3IsIHRoZVxyXG5cdCAqIGVycm9yIHdpbGwgYmUgcHJvcGFnYXRlZCB1cCB0aGUgY2hhaW4gb2YgY29tcG9uZW50cyB1bnRpbCBpdCByZWFjaGVzIGEgY29tcG9uZW50IHRoYXRcclxuXHQgKiBoYW5kbGVzIGl0LiBJZiBub25lIG9mIHRoZSBjb21wb25lbnRzIGNhbiBoYW5kbGUgdGhlIGVycm9yLCB0aGUgZW50aXJlIHRyZWUgd2lsbCBiZVxyXG5cdCAqIHVubW91bnRlZC5cclxuXHQgKiBAcGFyYW0gZXJyIEFuIGV4Y2VwdGlvbiB0aGF0IHdhcyB0aHJvd24gZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZ1xyXG5cdCAqIG9mIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuXHJcblx0ICogQHBhcmFtIHBhdGggQW4gYXJyYXkgb2YgbmFtZXMgb2YgY29tcG9uZW50cyBhbmQgZWxlbWVudHMgZnJvbSB0aGUgbW91bnRlZCByb290IHRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCB0aGF0IHRocmV3IHRoZSBleGNlcHRpb24uIFRoaXMgcGF0aCBpcyBwcm92aWRlZCBtb3N0bHkgZm9yIGRlYnVnZ2luZyBhbmQgdHJhY2luZ1xyXG5cdCAqIHB1cnBvc2VzLlxyXG5cdCAqL1xyXG5cdGhhbmRsZUVycm9yPyggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSB1cGRhdGUgY3ljbGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTY2hlZHVsZWRGdW5jVHlwZSA9ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNlcnZpY2VEZWZpbml0aW9ucyBpbnRlcmZhY2Ugc2VydmVzIGFzIGEgbWFwcGluZyBiZXR3ZWVuIHNlcnZpY2UgbmFtZXMgYW5kIHNlcnZpY2UgdHlwZXMuXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIGludGVuZGVkIHRvIGJlIGF1Z21lbnRlZCBieSBtb2R1bGVzIHRoYXQgZGVmaW5lIGFuZC9vciB1c2Ugc3BlY2lmaWMgc2VydmljZXMuXHJcbiAqIFRoaXMgYWxsb3dzIHBlcmZvcm1pbmcgc2VydmljZSBwdWJsaXNoaW5nIGFuZCBzdWJzY3JpYmluZyBpbiB0eXBlLXNhZmUgbWFubmVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcbntcclxuXHQvKiogQnVpbHQtaW4gZXJyb3IgaGFuZGxpbmcgc2VydmljZS4gKi9cclxuXHRcIlN0ZEVycm9ySGFuZGxpbmdcIjogSUVycm9ySGFuZGxpbmdTZXJ2aWNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBCdWlsdC1pbiBzZXJ2aWNlIGZvciBsYXp5IHBlb3BsZSAtIGNhbiBiZSB1c2VkIGZvciBxdWljayBwcm90b3R5cGVzIHdpdGhvdXQgdGhlIG5lZWQgdG9cclxuXHQgKiBhdWdtZW50IHRoZSBpbnRlcmZhY2UuXHJcblx0ICovXHJcblx0XCJhbnlcIjogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUVycm9ySGFuZGxpbmdTZXJ2aWNlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2VydmljZSB0aGF0IGNhbiBiZSBpbnZva2VkIHdoZW4gYW4gZXJyb3IgLVxyXG4gKiB1c3VhbGx5IGFuIGV4Y2VwdGlvbiAtIGlzIGVuY291bnRlcmVkIGJ1dCBjYW5ub3QgYmUgaGFuZGxlZCBsb2NhbGx5LiBBIGNvbXBvbmVudCB0aGF0IGltcGxlbWVudHNcclxuICogdGhpcyBzZXJ2aWNlIHdvdWxkIG5vcm1hbGx5IHJlbWVtYmVyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byB1cGRhdGUgaXRzZWxmLHNvIHRoYXQgaW4gaXRzXHJcbiAqIHJlbmRlciBtZXRob2QgaXQgd2lsbCBwcmVzZW50IHRoZSBlcnJvciB0byB0aGUgdXNlci5cclxuICpcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpcyBpbXBsZW1lbnRlZCBieSB0aGUgUm9vdCBWaXJ0dWFsIE5vZGUgYXMgYSBsYXN0IHJlc29ydCBmb3IgZXJyb3JcclxuICogaGFuZGxpbmcuIFRoZSBSb290IFZOIHdpbGwgZGlzcGxheSBhIHNpbXBsZSBVSSBzaG93aW5nIHRoZSBlcnJvciBhbmQgd2lsbCBhbGxvdyB0aGUgdXNlciB0b1xyXG4gKiByZXN0YXJ0IC0gaW4gdGhlIGhvcGUgdGhhdCB0aGUgZXJyb3Igd2lsbCBub3QgcmVwZWF0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRyZXBvcnRFcnJvciggZXJyOiBhbnkscGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnRzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhpcyBjbGFzcyBtdXN0IGltcGxlbWVudCB0aGUgcmVuZGVyXHJcbiAqIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+XHJcbntcclxuXHQvKiogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHM/OiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pXHJcblx0e1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblx0fVxyXG5cclxuXHQvKiogU2l0ZSBvYmplY3QgdGhyb3VnaCB3aGljaCBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXMuICovXHJcblx0cHJvdGVjdGVkIHNpdGU6IElWTm9kZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIFNldHMgb3IgY2xlYXJzIHRoZSBzaXRlIG9iamVjdCB0aHJvdWdoIHdoaWNoIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlcy4gKi9cclxuXHRwdWJsaWMgc2V0U2l0ZSggc2l0ZTogSVZOb2RlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuc2l0ZSA9IHNpdGU7XHJcblx0fVxyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0aGF0IHdpbGwgYmUgdWx0aW1hdGVseSBwbGFjZWQgaW50byB0aGUgRE9NIHRyZWUuICovXHJcblx0cHVibGljIGFic3RyYWN0IHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQuICovXHJcblx0cHJvdGVjdGVkIHVwZGF0ZU1lKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zaXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc2l0ZS5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byBpZ25vcmUgYW55IHVwZGF0ZS9kZWxldGUvcmVwbGFjZSByZXF1ZXN0c1xyXG5cdC8vIHRoYXQgaGF2ZSBiZWVuIG1hZGUgYnkgdGhlIGNvbXBvbmVudCBkdXJpbmcgdGhlIGN1cnJlbnQgSmF2YVNjcmlwdCBldmVudCBsb29wLlxyXG5cdHByb3RlY3RlZCBpZ25vcmVNZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2l0ZSAhPT0gbnVsbClcclxuXHRcdFx0dGhpcy5zaXRlLmNhbmNlbFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0LyoqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHRvIHNjaGVkdWxlIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbiB0aGUgbmV4dFxyXG5cdCAqIHVwZGF0ZSBjeWNsZSBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBhcmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWRcclxuXHQgKiBAcGFyYW0gYmVmb3JlVXBkYXRlIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSAodHJ1ZSlcclxuXHQgKiBvciBhZnRlciAoZmFsc2UpIHRoZSB1cGRhdGUgY3ljbGUuXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNpdGUgIT09IG51bGwpXHJcblx0XHRcdHRoaXMuc2l0ZS5zY2hlZHVsZUNhbGwoIGZ1bmMsIGJlZm9yZVVwZGF0ZSk7XHJcblx0fVxyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgdG8gY2FuY2VsIGEgc2NoZWR1bGVkIGZ1bmN0aW9uLiAqL1xyXG5cdHByb3RlY3RlZCBkb250Q2FsbE1lKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2l0ZSAhPT0gbnVsbClcclxuXHRcdFx0dGhpcy5zaXRlLmNhbmNlbFNjaGVkdWxlZENhbGwoIGZ1bmMsIGJlZm9yZVVwZGF0ZSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGV2ZW50IGhhbmRsZXIgdGhhdCBpcyBpbnZva2VkIHdoZW4gcmVmZXJlbmNlIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZGdW5jPFQ+ID0gKG5ld1JlZjogVCkgPT4gdm9pZDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSBjbGFzcyB0byB1c2Ugd2hlbmV2ZXIgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IGlzIG5lZWRlZCAtIGZvciBleGFtcGxlLCB3aXRoIEpTWCBgcmVmYFxyXG4gKiBhdHRyaWJ1dGVzIGFuZCBzZXJ2aWNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWY8VD5cclxue1xyXG5cdHByaXZhdGUgX3I6IFQ7XHJcblxyXG5cdC8qKiBFdmVudCB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHJlZmVyZW5jZWQgdmFsdWUgY2hhbmdlcyAqL1xyXG5cdHB1YmxpYyBjaGFuZ2VkRXZlbnQ6IElFdmVudFNsb3Q8UmVmRnVuYzxUPj4gPSBuZXcgRXZlbnRTbG90PFJlZkZ1bmM8VD4+KCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBsaXN0ZW5lcj86IFJlZkZ1bmM8VD4sIGluaXRpYWxSZWZlcmVuZT86IFQpXHJcblx0e1xyXG5cdFx0aWYgKGxpc3RlbmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuY2hhbmdlZEV2ZW50LmFkZCggbGlzdGVuZXIpO1xyXG5cclxuXHRcdHRoaXMuX3IgPSBpbml0aWFsUmVmZXJlbmU7XHJcblx0fVxyXG5cclxuXHQvKiogQWRkcyBhIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgY2hhbmdlcy4gKi9cclxuXHRwdWJsaWMgYWRkTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmFkZCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJlbW92ZXMgYSBjYWxsYmFjayB0aGF0IHdhcyBhZGRlZCB3aXRoIGFkZExpc3RlbmVyLiAqL1xyXG5cdHB1YmxpYyByZW1vdmVMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQucmVtb3ZlKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogR2V0IGFjY2Vzc29ycyB0byB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIGdldCByKCk6IFQgeyByZXR1cm4gdGhpcy5fcjsgfVxyXG5cclxuXHQvKiogU2V0IGFjY2Vzc29ycyB0byB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIHNldCByKCBuZXdSZWY6IFQpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuX3IgIT09IG5ld1JlZilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fciA9IG5ld1JlZjtcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZmlyZSggbmV3UmVmKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKiBDbGVhcnMgdGhlIHJlZmVyZW5jZSB2YWx1ZSBhbmQgYWxzbyBjbGVhcnMgYWxsIGFsbCByZWdpc3RlcmVkIGxpc3RlbmVycyAqL1xyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5fciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmNsZWFyKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAvL1xyXG4vLyAvLyBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHJlZmVyZW5jZSBwcm9wZXJ0aWVzIHdpdGhvdXQgdGhlIG5lZWQgdG8gbWFudWFsbHkgY3JlYXRlXHJcbi8vIC8vIFJlZjw+IGluc3RhbmNlcy4gVGhpcyBhbGxvd3MgZm9yIHRoZSBmb2xsb3dpbmcgY29kZSBwYXR0ZXJuOlxyXG4vLyAvL1xyXG4vLyAvL1x0Y2xhc3MgQSBleHRlbmRzIENvbXBvbmVudFxyXG4vLyAvL1x0e1xyXG4vLyAvL1x0XHRAcmVmIG15RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuLy8gLy9cdFx0cmVuZGVyKCkgeyByZXR1cm4gPGRpdiByZWY9e215RGl2fT5IZWxsbzwvZGl2PjsgfVxyXG4vLyAvL1x0fVxyXG4vLyAvL1xyXG4vLyAvLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIG15RGl2IHByb3BlcnR5IHdpbGwgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkIHdoZW4gZmlyc3QgYWNjZXNzZWQuIFRoZVxyXG4vLyAvLyBhY3R1YWwgb2JqZWN0IHdpbGwgYmUgYSBQcm94eSB0byBSZWY8PiBvZiB0aGUgZ2l2ZW4gdHlwZSAoSFRNTERpdkVsZW1lbnQgaW4gdGhpcyBjYXNlKS5cclxuLy8gLy9cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiByZWYoIHRhcmdldCwgbmFtZSlcclxuLy8ge1xyXG4vLyBcdGZ1bmN0aW9uIHJlZkdldCggb2JqLCBrZXkpXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWYgKGtleSA9PT0gXCJyXCIpXHJcbi8vIFx0XHRcdHJldHVybiBvYmoucjtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0cmV0dXJuIG9iai5yW2tleV07XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRmdW5jdGlvbiByZWZTZXQoIG9iaiwga2V5LCB2YWwsIHJlY2VpdmVyKTogYm9vbGVhblxyXG4vLyBcdHtcclxuLy8gXHRcdGlmIChrZXkgPT09IFwiclwiKVxyXG4vLyBcdFx0XHRvYmouciA9IHZhbDtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0b2JqLnJba2V5XSA9IHZhbDtcclxuXHJcbi8vIFx0XHRyZXR1cm4gdHJ1ZTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGZ1bmN0aW9uIGVuc3VyZVByb3h5KCB0aGlzT2JqOiBhbnksIGF0dHJOYW1lOiBzdHJpbmcpOiBhbnlcclxuLy8gXHR7XHJcbi8vIFx0XHRsZXQgcHJveHkgPSB0aGlzT2JqW2F0dHJOYW1lXTtcclxuLy8gXHRcdGlmICghcHJveHkpXHJcbi8vIFx0XHR7XHJcbi8vIFx0XHRcdHByb3h5ID0gbmV3IFByb3h5KCBuZXcgUmVmPGFueT4oKSwgeyBnZXQ6IHJlZkdldCwgc2V0OiByZWZTZXQgfSk7XHJcbi8vIFx0XHRcdHRoaXNPYmpbYXR0ck5hbWVdID0gcHJveHk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRyZXR1cm4gcHJveHk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRsZXQgYXR0ck5hbWUgPSBcIl9yZWZfXCIgKyBuYW1lO1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLFxyXG4vLyBcdFx0e1xyXG4vLyBcdFx0XHRzZXQoIHZhbCkgeyBlbnN1cmVQcm94eSggdGhpcywgYXR0ck5hbWUpLnIgPSB2YWw7IH0sXHJcbi8vIFx0XHRcdGdldCgpIHsgcmV0dXJuIGVuc3VyZVByb3h5KCB0aGlzLCBhdHRyTmFtZSk7IH1cclxuLy8gXHRcdH1cclxuLy8gXHQpO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIHJlZiBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gSlNYIGVsZW1lbnRzIGFuZCBjb21wb25lbnRzLiBUaGlzIGNhbiBiZSBlaXRoZXIgdGhlXHJcbiAqIFtbUmVmXV0gY2xhc3Mgb3IgW1tSZWZGdW5jXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZQcm9wVHlwZTxUPiA9IFJlZjxUPiB8IFJlZkZ1bmM8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIHRoYXQgdGFrZXMgY2FyZSBvZiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mXHJcbiAqIHJlZmVyZW5jZXMuIFRoZSBvcHRpb25hbCBgb25seUlmYCBwYXJhbWV0ZXIgbWF5IHNwZWNpZnkgYSB2YWx1ZSBzbyB0aGF0IG9ubHkgaWYgdGhlIHJlZmVyZW5jZVxyXG4gKiBjdXJyZW50bHkgaGFzIHRoZSBzYW1lIHZhbHVlIGl0IHdpbGwgYmUgcmVwbGFjZWQuIFRoaXMgbWlnaHQgYmUgbmVlZGVkIHRvIG5vdCBjbGVhciBhXHJcbiAqIHJlZmVyZW5jZSBpZiBpdCBhbHJlYWR5IHBvaW50cyB0byBhIGRpZmZlcmVudCBvYmplY3QuXHJcbiAqIEBwYXJhbSByZWYgW1tSZWZdXSBvYmplY3QgdG8gd2hpY2ggdGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldFxyXG4gKiBAcGFyYW0gdmFsIFJlZmVyZW5jZSB2YWx1ZSB0byBzZXQgdG8gdGhlIFJlZiBvYmplY3RcclxuICogQHBhcmFtIG9ubHlJZiBBbiBvcHRpb25hbCB2YWx1ZSB0byB3aGljaCB0byBjb21wYXJlIHRoZSBjdXJyZW50IChvbGQpIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UuXHJcbiAqIFRoZSBuZXcgdmFsdWUgd2lsbCBiZSBzZXQgb25seSBpZiB0aGUgb2xkIHZhbHVlIGVxdWFscyB0aGUgYG9ubHlJZmAgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmPFQ+KCByZWY6IFJlZlByb3BUeXBlPFQ+LCB2YWw6IFQsIG9ubHlJZj86IFQpOiB2b2lkXHJcbntcclxuXHRpZiAodHlwZW9mIHJlZiA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRsZXQgcmVmT2JqID0gcmVmIGFzIFJlZjxUPjtcclxuXHRcdGlmIChvbmx5SWYgPT09IHVuZGVmaW5lZCB8fCByZWZPYmouciA9PT0gb25seUlmKVxyXG5cdFx0XHRyZWZPYmouciA9IHZhbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0KHJlZiBhcyBSZWZGdW5jPFQ+KSh2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIHByb3BlcnRpZXMgd2l0aCBhIHNldCBtZXRob2QgdGhhdCBjYWxscyB0aGUgdXBkYXRlTWUgbWV0aG9kXHJcbiAqIHdoZW5ldmVyIHRoZSBwcm9wZXJ0eSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKlx0YGBgdHN4XHJcbiAqXHRjbGFzcyBDaGlsZCBleHRlbmRzIENvbXBvbmVudFxyXG4gKlx0e1xyXG4gKlx0XHRAbWltLnVwZGF0YWJsZSB0ZXh0OiBzdHJpbmcgPSBcIkhlbGxvIVwiO1xyXG4gKlx0XHRyZW5kZXIoKVxyXG4gKlx0XHR7XHJcbiAqXHQgXHRcdHJldHVybiA8ZGl2Pnt0ZXh0fTwvZGl2PlxyXG4gKlx0XHR9XHJcbiAgKlx0fVxyXG4qXHJcbiAqXHRjbGFzcyBQYXJlbnQgZXh0ZW5kcyBDb21wb25lbnRcclxuICpcdHtcclxuICpcdFx0Y2hpbGQgPSBuZXcgQ2hpbGQoKTtcclxuICpcdFx0cmVuZGVyKClcclxuICpcdFx0e1xyXG4gKlx0XHRcdHJldHVybiA8ZGl2IGNsaWNrPXsoKSA9PiB0aGlzLmNoaWxkLnRleHQgKz0gXCIgYWdhaW5cIn0+e3RoaXMuY2hpbGR9PC9kaXY+XHJcbiAqXHRcdH1cclxuICpcdH1cclxuICpcdGBgYFxyXG4gKiBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIENoaWxkIGNvbXBvbmVudCB3aWxsIGJlIHJlLXJlbmRlcmVkIHdoZW4gaXRzIGB0ZXh0YCBwcm9wZXJ0eSBjaGFuZ2VzLlxyXG4gKiBUaGUgUGFyZW50IGNvbXBvbmVudCBhcHBlbmRzIHRoZSB3b3JkIFwiYWdhaW5cIiB0byB0aGUgQ2hpbGQgY29tcG9uZW50J3MgdGV4dCB3aGVuZXZlciB0aGUgdXNlclxyXG4gKiBjbGlja3Mgb24gaXQuXHJcbiAqIEBwYXJhbSB0YXJnZXQgXHJcbiAqIEBwYXJhbSBuYW1lIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0YWJsZSggdGFyZ2V0LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuXHRsZXQgYXR0ck5hbWUgPSBcIl9tX1wiICsgbmFtZTtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSxcclxuXHRcdHtcclxuXHRcdFx0c2V0KCB2YWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodGhpc1thdHRyTmFtZV0gIT09IHZhbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzW2F0dHJOYW1lXSA9IHZhbDtcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldCgpIHsgcmV0dXJuIHRoaXNbYXR0ck5hbWVdOyB9XHJcblx0XHR9XHJcblx0KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQW4gYXJ0aWZpY2lhbCBcIkZyYWdtZW50XCIgY29tcG9uZW50IHRoYXQgaXMgb25seSB1c2VkIGFzIGEgdGVtcG9yYXJ5IGNvbGxlY3Rpb24gb2Ygb3RoZXIgaXRlbXNcclxuICogaW4gcGxhY2VzIHdoZXJlIEpTWCBvbmx5IGFsbG93cyBhIHNpbmdsZSBpdGVtLiBPdXIgSlNYIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRlcyBhIHZpcnR1YWwgbm9kZVxyXG4gKiBmb3IgZWFjaCBvZiBpdHMgY2hpbGRyZW4gdGhlIGZ1bmN0aW9uIGlzIG5ldmVyIGFjdHVhbGx5IGNhbGxlZC4gVGhpcyBjb21wb25lbnQgaXMgb25seSBuZWVkZWRcclxuICogYmVjYXVzZSBjdXJyZW50bHkgVHlwZVNjcmlwdCBkb2Vzbid0IGFsbG93IHRoZSA8PiBmcmFnbWVudCBub3RhdGlvbiBpZiBhIGN1c3RvbSBKU1ggZmFjdG9yeVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkLlxyXG4gKlxyXG4gKiBVc2UgaXQgYXMgZm9sbG93czpcclxuICogYGBgdHN4XHJcbiAqXHRpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICpcdC4uLi4uXHJcbiAqXHRyZW5kZXIoKVxyXG4gKlx0e1xyXG4gKlx0XHRyZXR1cm4gPG1pbS5GcmFnbWVudD5cclxuICpcdFx0XHQ8ZGl2MS8+XHJcbiAqXHRcdFx0PGRpdjIvPlxyXG4gKlx0XHRcdDxkaXYzLz5cclxuICpcdFx0PC9taW0uRnJhZ21lbnQ+XHJcbiAqXHR9XHJcbiAgYGBgXHJcblxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRnJhZ21lbnQoIHByb3BzOiBDb21wUHJvcHM8e30+KTogYW55IHt9XHJcblxyXG5cclxuXHJcbi8qKiBcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjbGFzcyBvZiBoYW5kbGVycyBvZiBjdXN0b20gYXR0cmlidXRlc1xyXG4gKiB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLiBUaGUgcmVxdWlyZW1lbnRzIG9uIHN1Y2ggY2xhc3NlcyBhcmU6XHJcbiAqIDEuIEltcGxlbWVudCBhIGNvbnN0cnVjdG9yIGFjY2VwdGluZyBJRWxtVk4sIGF0dHJpYnV0ZSB2YWx1ZSBhbmQgYXR0cmlidXRlIG5hbWUgKHRoaXMgYWxsb3dzXHJcbiAqICAgdGhlIHNhbWUgaGFuZGxlciB0byBzZXJ2ZSBkaWZmZXJlbnQgYXR0cmlidXRlcykuXHJcbiAqIDIuIEltcGxlbWVudCB0aGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXIgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIHRoYXQgd2lsbCBhY3Qgb24gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHByb3ZpZGVzXHJcblx0ICogdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gQXR0cmlidXRlIG5hbWUgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHRoZSBoYW5kbGVyXHJcblx0ICogc3VwcG9ydHMgZGlmZmVyZW50IGF0dHJpYnV0ZXMuIEJ5IHRoZSB0aW1lIHRoaXMgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgRE9NIGVsZW1lbnQgaGFkXHJcblx0ICogYWxyZWFkeSBiZWVuIGNyZWF0ZWQgYW5kIHN0YW5kYXJkIGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycyBoYWQgYmVlbiBhcHBsaWVkLlxyXG5cdCAqIEBwYXJhbSBlbG1WTiBWaXJ0dWFsIG5vZGUgZm9yIHRoaXMgZWxlbWVudC4gVGhlIGhhbmRsZXIgY2FuIHJldHJpZXZlIHRoZSBET00gZWxlbWVudCBmcm9tXHJcblx0ICogICB0aGlzIGludGVyZmFjZSBhbmQgYWxzbyB1c2Ugb3RoZXIgbWV0aG9kcyAoZS5nLiBzdWJzY3JpYmUgdG8gc2VydmljZXMpLlxyXG5cdCAqIEBwYXJhbSBhdHRyVmFsIEluaXRpYWwgdmFsdWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuXHQgKiBAcGFyYW0gYXR0ck5hbWUgTmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG5cdCAqL1xyXG5cdG5ldyggZWxtVk46IElFbG1WTiwgYXR0clZhbDogVCwgYXR0ck5hbWU/OiBzdHJpbmcpOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGFiaWxpdHkgdG8gaGFuZGxlIGN1c3RvbSBwcm9wZXJ0aWVzIHRoYXQgY2FuXHJcbiAqIGJlIGFwcGxpZWQgdG8gaW50cmluc2ljIChIVE1MIG9yIFNWRykgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPFQ+XHJcbntcclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIGFuIGV4aXN0aW5nIGN1c3RvbSBhdHRyaWJ1dGUgd2l0aCB0aGUgbmV3IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wVmFsIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZS5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIGNoYW5nZXMgd2VyZSBtYWRlIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0dXBkYXRlKCBuZXdQcm9wVmFsOiBUKTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogVGVybWluYXRlcyB0aGUgZnVuY3Rpb25pbmcgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlci4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBlaXRoZXJcclxuXHQgKiB3aGVuIGEgbmV3IHJlbmRlcmluZyBvZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgdGhlIGF0dHJpYnV0ZSBhbnltb3JlIG9yIGlmIHRoZSBlbGVtZW50XHJcblx0ICogaXMgcmVtb3ZlZC4gQWx0aG91Z2ggdGhpcyBtZXRob2QgaXMgb3B0aW9uYWwsIG1vc3QgaGFuZGxlcnMgd2lsbCBuZWVkIHRvIGltcGxlbWVudCBpdCB0b1xyXG5cdCAqIHByb3Blcmx5IGNsZWFudXAgYW55IHJlc291cmNlcyAoZS5nLiBldmVudCBoYW5kbGVycykgdG8gYXZvaWQgbGVha3MuXHJcblx0ICogQHBhcmFtIGlzUmVtb3ZhbCBUcnVlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nIHJlbW92ZWQgYW5kIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nXHJcblx0ICogICB1cGRhdGVkIGFuZCB0aGUgYXR0cmlidXRlIGlzIG5vIGxvbmdlciBwcm92aWRlZC4gSWYgdGhlIGhhbmRsZXIgYWRkcyBhbnkgZXZlbnRcclxuXHQgKiAgIGxpc3RlbmVycyB0byB0aGUgZWxlbWVudCwgdGhlbiBpdCBoYXMgdG8gcmVtb3ZlIHRoZW0gb24gdXBkYXRlIGJ1dCBkb2VuJ3QgaGF2ZSB0byBkbyBpdFxyXG5cdCAqICAgb24gZWxlbWVudCByZW1vdmFsLlxyXG5cdCAqL1xyXG5cdHRlcm1pbmF0ZT8oIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXIgY2xhc3MgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgbmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG4gKiBAcGFyYW0gZmFjdG9yeSBjdXN0b20gYXR0cmlidXRlIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGU8VD4oIGF0dHJOYW1lOiBzdHJpbmcsIGhhbmRsZXJDbGFzczogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxUPik6IHZvaWRcclxue1xyXG5cdHNfcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUoIGF0dHJOYW1lLCBoYW5kbGVyQ2xhc3MpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3cmFwcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgY29udGVudC4gUHJveGllcyBjYW4gd3JhcCBpbnN0YW5jZVxyXG4gKiBtZXRob2RzIG9mIGNsYXNzZXMgdGhhdCBoYXZlIGFjY2VzcyB0byBcInRoaXNcIiB0aHVzIGFsbG93aW5nIGEgc2luZ2xlIGNsYXNzIHRvIFwiaG9zdFwiIG11bHRpcGxlXHJcbiAqIGNvbXBvbmVudHMgdGhhdCBjYW4gYmUgdXBkYXRlZCBzZXBhcmF0ZWx5LiBUaGlzIGlzIGVzcGVjaWFsbHkgdXNlZnVsIHdoZW4gdGhlcmUgaXMgYSBoaWVyYXJjaHlcclxuICogb2YgZGVyaXZlZCBjbGFzc2VzIGFuZCAodmlydHVhbCkgbWV0aG9kcyB0aGF0IGRlbGl2ZXIgc2V2ZXJhbCBwaWVjZXMgb2YgY29udGVudC4gRnVuY1Byb3hpZXNcclxuICogY2FuIHdyYXAgdGhlc2UgdmlydHVhbCBtZXRob2RzIChvciBvdGhlciBtZXRob2RzIHRoYXQgY2FsbCB0aGVtKSBzbyB0aGF0IHRoZSBjb250ZW50IHBpZWNlc1xyXG4gKiBjYW4gYmUgdXBkYXRlZCBzZXBhcmF0ZWx5LiBGdW5jUHJveHkgaGFzIGEgcHVibGljIFVwZGF0ZSBtZXRob2QgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIGNhdXNlXHJcbiAqIHRoZSByZW5kZXJpbmcgbWVjaGFuaXNtIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNQcm94eSBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcblx0Y29uc3RydWN0b3IoIGZ1bmM6ICgpID0+IGFueSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZnVuYyA9IGZ1bmM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5zaXRlKVxyXG5cdFx0XHR0aGlzLnNpdGUucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBmdW5jOiAoKSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBXYWl0aW5nIGNvbXBvbmVudCB3cmFwcyBhIFByb21pc2UgYW5kIHJlcGxhY2VzIGl0cyBjb250ZW50IHdoZW4gdGhlIHByb21pc2UgaXMgc2V0dGxlZC5cclxuICogQmVmb3JlIHRoZSBwcm9taXNlIGlzIHNldHRsZWQsIHRoZSBjb21wb25lbnQgZGlzcGxheXMgYW4gb3B0aW9uYWwgXCJpbi1wcm9ncmVzc1wiIGNvbnRlbnRcclxuICogc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci4gSWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQsIHRoZSBjb21wb25lbnQgd2lsbCBlaXRoZXIgZGlzcGxheVxyXG4gKiB0aGUgXCJlcnJvclwiIGNvbnRlbnQgb2J0YWluZWQgYnkgY2FsbGluZyBhIGZ1bmN0aW9ucyBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yIG9yIGlmIHN1Y2hcclxuICogZnVuY3Rpb24gaXMgbm90IHNwZWNpZmllZCBzaG93IGVtcHR5IGNvbnRlbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV2FpdGluZyBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyB0aGUgb2JqZWN0XHJcblx0ICogQHBhcmFtIHByb21pc2UgUHJvbWlzZSBvYmplY3QgdG8gd2FpdCBmb3JcclxuXHQgKiBAcGFyYW0gcHJvZ3Jlc3NDb250ZW50IENvbnRlbnQgdG8gZGlzcGxheSB3aGlsZSB3YWl0aW5nIGZvciB0aGUgcHJvbWlzZVxyXG5cdCAqIEBwYXJhbSBlcnJvckNvbnRlbnRGdW5jIENvbnRlbnQgdG8gZGlzcGxheSBpZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9taXNlOiBQcm9taXNlPGFueT4sIHByb2dyZXNzQ29udGVudD86IGFueSwgZXJyb3JDb250ZW50RnVuYz86IChlcnI6IGFueSkgPT4gYW55KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5jb250ZW50ID0gcHJvZ3Jlc3NDb250ZW50O1xyXG5cclxuXHRcdHRoaXMud2F0Y2hQcm9taXNlKCBwcm9taXNlLCBlcnJvckNvbnRlbnRGdW5jKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29udGVudDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgd2F0Y2hQcm9taXNlKHByb21pc2U6IFByb21pc2U8YW55PixlcnJvckNvbnRlbnRGdW5jPzogKGVycjogYW55KSA9PiBhbnkpOiBQcm9taXNlPGFueT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gYXdhaXQgcHJvbWlzZTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IG51bGw7XHJcblx0XHRcdGlmIChlcnJvckNvbnRlbnRGdW5jICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBlcnJvckNvbnRlbnRGdW5jKCBlcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaChhbm90aGVyRXJyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY29udGVudDogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBEZWZpbmVzIHR5cGVzIG9mIHZpcnR1YWwgRE9NIG5vZGVzICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFZOVHlwZVxyXG57XHJcblx0Ly8gVG9wLWxldmVsIG5vZGVcclxuXHRSb290LFxyXG5cclxuXHQvLyBDbGFzcy1iYXNlZCAoc3RhdGUtZnVsbCkgY29tcG9uZW50IGNyZWF0ZWQgdmlhIG5ld1xyXG5cdEluc3RhbmNlQ29tcCxcclxuXHJcblx0Ly8gQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIEpTWC1iYXNlZCBjb21wb25lbnQgbGFpZCBvdXQgdXNpbmcgSlNYXHJcblx0Q2xhc3NDb21wLFxyXG5cclxuXHQvLyBTdGF0ZWxlc3MgY29tcG9uZW50IChzaW1wbGUgcmVuZGVyaW5nIGZ1bmN0aW9uIGFjY2VwdGluZyBwcm9wcylcclxuXHRGdW5jQ29tcCxcclxuXHJcblx0Ly8gRE9NIGVsZW1lbnQgKEhUTUwgb3IgU1ZHKSBsYWlkIG91dCB1c2luZyBKU1guXHJcblx0RWxtLFxyXG5cclxuXHQvLyBUZXh0IG5vZGVcclxuXHRUZXh0LFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZOQ2hhaW4gaW50ZXJmYWNlIHJlcHJlc2VudCBhIGRvdWJseS1saW5rZWQgbGlzdCBvZiB2aXJ0dWFsIG5vZGVzLiBUaGlzIGlzIHRoZSBvYmplY3RcclxuICogdGhhdCBpcyByZXR1cm5lZCBmcm9tIHRoZSBKU1ggcHJvY2Vzc2luZyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZOQ2hhaW5cclxue1xyXG5cdC8qKiBGaXJzdCBub2RlIGluIHRoZSBjaGFpbi4gKi9cclxuXHRyZWFkb25seSBGaXJzdDogSVZOb2RlO1xyXG5cclxuXHQvKiogTGFzdCBub2RlIGluIHRoZSBjaGFpbi4gKi9cclxuXHRyZWFkb25seSBMYXN0OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGNoYWluLiAqL1xyXG5cdHJlYWRvbmx5IENvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVk5vZGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUuIFRocm91Z2ggdGhpcyBpbnRlcmZhY2UsIGNhbGxlcnMgY2FuIHBlcmZvcm1cclxuICogbW9zdCBjb21tb24gYWN0aW9ucyB0aGF0IGFyZSBhdmFpbGFibGUgb24gZXZlcnkgdHlwZSBvZiB2aXJ0dWFsIG5vZGUuIEVhY2ggdHlwZSBvZiB2aXJ0dWFsIG5vZGVcclxuICogYWxzbyBpbXBsZW1lbnRzIGEgbW9yZSBzcGVjaWZpYyBpbnRlcmZhY2UgdGhyb3VnaCB3aGljaCB0aGUgc3BlY2lmaWMgY2FwYWJpbGl0aWVzIG9mIHRoZSBub2RlXHJcbiAqIHR5cGUgYXJlIGF2YWlsYWJsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyBub2RlIHR5cGUuICovXHJcblx0cmVhZG9ubHkgVHlwZTogVk5UeXBlO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgcGFyZW50LiAqL1xyXG5cdHJlYWRvbmx5IFBhcmVudDogSVZOb2RlO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgbmV4dCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IE5leHQ6IElWTm9kZTtcclxuXHJcblx0LyoqIEdldHMgbm9kZSdzIHByZXZpb3VzIHNpYmxpbmcuICovXHJcblx0cmVhZG9ubHkgUHJldjogSVZOb2RlO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdWItbm9kZXMuICovXHJcblx0cmVhZG9ubHkgU3ViTm9kZXM6IElWTkNoYWluO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgZGlzcGxheSBuYW1lLiAqL1xyXG5cdHJlYWRvbmx5IE5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHdoZW4gaXQgbmVlZHMgdG8gYmUgdXBkYXRlZC4gKi9cclxuXHRyZXF1ZXN0VXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHdoZW4gaXQgZGVjaWRlcyB0byBjYW5jZWwgYSBwcmV2aW91c2x5IHJlcXVlc3RlZFxyXG5cdCAqIHVwZGF0ZSByZXF1ZXN0LlxyXG5cdCAqL1xyXG5cdGNhbmNlbFVwZGF0ZSgpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcblx0ICogaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlIHVwZGF0ZSBjeWNsZS5cclxuXHQgKiBAcGFyYW0gYmVmb3JlVXBkYXRlIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSAodHJ1ZSlcclxuXHQgKiBvciBhZnRlciAoZmFsc2UpIHRoZSB1cGRhdGUgY3ljbGUuXHJcblx0ICovXHJcblx0c2NoZWR1bGVDYWxsKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQ2FuY2VscyBhIGNhbGwgdGhhdCBoYXMgYmVlbiBzY2hlZHVsZWQgdG8gYmUgbWFkZSBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkXHJcblx0ICogY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0aGF0IHdhcyBwcmV2aW91c2x5IHBhc3NlZCB0byB0aGUgc2NoZWR1bGVDYWxsIG1ldGhvZC5cclxuXHQgKiBAcGFyYW0gYmVmb3JlVXBkYXRlIEZsYWcgdGhhdCB3YXMgcGFzc2VkIHRvIHRoZSBzY2hlZHVsZUNhbGwgbWV0aG9kLlxyXG5cdCAqL1xyXG5cdGNhbmNlbFNjaGVkdWxlZENhbGwoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcnMgYW4gb2JqZWN0IG9mIGFueSB0eXBlIGFzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGZvclxyXG5cdCAqIGNvbnN1bXB0aW9uIGJ5IGRlc2NlbmRhbnQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRwdWJsaXNoU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCBzZXJ2aWNlOiBJU2VydmljZURlZmluaXRpb25zW0tdKTogdm9pZDtcclxuXHJcblx0LyoqIFVucmVnaXN0ZXJzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gKi9cclxuXHR1bnB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTdWJzY3JpYmVzIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gSWYgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgcmVnaXN0ZXJlZFxyXG5cdCAqIGJ5IHRoaXMgb3Igb25lIG9mIHRoZSBhbmNlc3RvciBjb21wb25lbnRzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7XHJcblx0ICogb3RoZXJ3aXNlLCB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluXHJcblx0ICogdW5kZWZpbmVkLiBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IHRoaXMgb3IgYSBjbG9zZXN0XHJcblx0ICogYW5jZXN0b3IgY29tcG9uZW50IGlzIGNoYW5nZWQsdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0ICogVGhlIHVzZVNlbGYgb3B0aW9uYWwgcGFyYW1ldGVyIGRldGVybWluZXMgd2hldGhlciB0aGUgY29tcG9uZW50IGNhbiBzdWJzY3JpYmUgdG8gdGhlXHJcblx0ICogc2VydmljZSBwdWJsaXNoZWQgYnkgaXRzZWxmLiBUaGUgZGVmYXVsdCBpcyBmYWxzZS5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICogQHBhcmFtIHJlZiBcclxuXHQgKiBAcGFyYW0gZGVmYXVsdFNlcnZpY2UgXHJcblx0ICogQHBhcmFtIHVzZVNlbGYgXHJcblx0ICovXHJcblx0c3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCByZWY6IFJlZlByb3BUeXBlPElTZXJ2aWNlRGVmaW5pdGlvbnNbS10+LFxyXG5cdFx0XHRcdFx0ZGVmYXVsdFNlcnZpY2U/OiBJU2VydmljZURlZmluaXRpb25zW0tdLCB1c2VTZWxmPzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVuc3Vic2NyaWJlcyBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gVGhlIFJlZiBvYmplY3QgdGhhdCB3YXMgdXNlZCB0byBzdWJzY3JpYmVcclxuXHQgKiB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqL1xyXG5cdHVuc3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0ICogY29tcG9uZW50IG9yIHRoZSBkZWZhdWx0IHZhbHVlIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIGNvbXBvbmVudHMgcmVnaXN0ZXJlZCBhIHNlcnZpY2Ugd2l0aFxyXG5cdCAqIHRoaXMgSUQuIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXN0YWJsaXNoIGEgc3Vic2NyaXB0aW9uIGFuZCBvbmx5IHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKiBAcGFyYW0gZGVmYXVsdFNlcnZpY2UgXHJcblx0ICogQHBhcmFtIHVzZVNlbGYgXHJcblx0ICovXHJcblx0Z2V0U2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCBkZWZhdWx0U2VydmljZT86IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10sXHJcblx0XHRcdFx0XHR1c2VTZWxmPzogYm9vbGVhbik6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS107XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmxlIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgbm9kZS9jb21wb25lbnQgdGhhdCBrbm93cyB0b1xyXG5cdCAqIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJ5IHRoZSBjb2RlIHRoYXQgaXMgbm90IHBhcnQgb2YgYW55IGNvbXBvbmVudCBidXQgc3RpbGwgaGFzIGFjY2Vzc1xyXG5cdCAqIHRvIHRoZSBJVk5vZGUgb2JqZWN0OyBmb3IgZXhhbXBsZSwgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoZVxyXG5cdCAqIG1pbS5Db21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgbWltLkNvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBVc2UgdGhpcyBtZXRob2QgYmVmb3JlIHBhc3NpbmcgY2FsbGJhY2tzIHRvIGRvY3VtZW50IGFuZCB3aW5kb3cgZXZlbnQgaGFuZGxlcnMgYXMgd2VsbCBhc1xyXG5cdCAqIG5vbi1ET00gb2JqZWN0cyB0aGF0IHVzZSBjYWxsYmFja3MsIGUuZy4gcHJvbWlzZXMuIEZvciBleGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqIGBgYHR5cGVzY3JpcHRcclxuXHQgKlx0Y2xhc3MgQWRkc1xyXG5cdCAqXHR7XHJcblx0ICpcdFx0cHJpdmF0ZSBvbldpbmRvd1Jlc2l6ZSA9ICggZTogRXZlbnQpOiB2b2lkID0+IHt9O1xyXG5cdCAqXHJcblx0ICogXHRcdHdyYXBwZXI6IChlOiBFdmVudCk6IHZvaWQ7XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZFxyXG5cdCAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHRoYXQgc2hvdWxkIGJlIHVzZWRcclxuXHQgKiAgICAgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2tcclxuXHQgKi9cclxuXHR3cmFwQ2FsbGJhY2s8VD4oIGNhbGxiYWNrOiBUKTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElJbnN0YW5jZVZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIGNvbXBvbmVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUluc3RhbmNlVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgaW5zdGFuY2UuICovXHJcblx0cmVhZG9ubHkgQ29tcDogSUNvbXBvbmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc1ZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIEpTWC1iYXNlZCBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc1ZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGNsYXNzLiAqL1xyXG5cdHJlYWRvbmx5IENvbXBDbGFzczogSUNvbXBvbmVudENsYXNzO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGluc3RhbmNlLiAqL1xyXG5cdHJlYWRvbmx5IENvbXA6IElDb21wb25lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBUaGUgSUVsbVZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIERPTSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxtVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBlbGVtZW50IG5hbWUuICovXHJcblx0cmVhZG9ubHkgRWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBlbGVtZW50IGlzIGFuIFNWRyAoYXMgb3Bwb3NlZCB0byBIVE1MKS4gKi9cclxuXHRyZWFkb25seSBJc1N2ZzogYm9vbGVhbjtcclxuXHJcblx0LyoqIEdldHMgdGhlIGVsZW1lbnQgaW5zdGFuY2UuICovXHJcblx0cmVhZG9ubHkgRWxtOiBFbGVtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRleHRWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSB0ZXh0IERPTSBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGV4dFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogVGV4dCBvZiB0aGUgbm9kZS4gKi9cclxuXHRUZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKiBUZXh0IERPTSBub2RlLiAqL1xyXG5cdFRleHROb2RlOiBUZXh0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiAgU3R5bGVzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdHlsZVByb3BUeXBlID0gUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gZm9yIERPTSBldmVudHMgb2YgdHlwZSBULlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gKGU6IFQpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVHVwbGUgY29tYmluaW5nIHRoZSBldmVudCBoYW5kbGVyIHR5cGUgYW5kIHRoZSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudFxyXG4gKiBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGUgY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBVbmlvbiB0eXBlIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhbiBFbGVtZW50J3MgZXZlbnQuIEl0IGlzIGVpdGhlciBhbiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uXHJcbiAqIG9yIGEgdHVwbGUgY29uc2lzdGluZyBvZiB0aGUgaGFuZGxlciBmdW5jdGlvbiBhbmQgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudFxyXG4gKiBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGUgY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRQcm9wVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gRXZlbnRGdW5jVHlwZTxUPiB8IEV2ZW50RnVuY0FuZEZsYWdUeXBlPFQ+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDb21tb25Qcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBzdGFuZGFyZCBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHVzZWQgb24gYWxsIEpTWCBlbGVtZW50cyAtXHJcbiAqIGludHJpbnNpYyAoSFRNTCBhbmQgU1ZHKSBhcyB3ZWxsIGFzIGZ1bmN0aW9uYWwgYW5kIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqIFVuaXF1ZSBrZXkgdGhhdCBkaXN0aW5ndWlzaGVzIHRoaXMgSlNYIGVsZW1lbnQgZnJvbSBpdHMgc2libGluZ3MuIFRoZSBrZXkgY2FuIGJlIG9mIGFueSB0eXBlLiAqL1xyXG5cdGtleT86IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgcHJvcGVydHkgdHlwZXMgdXNlZCBieSBIVE1MIGFuZCBTVkcgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IHR5cGUgQ29sb3JQcm9wVHlwZSA9IHN0cmluZztcclxuZXhwb3J0IHR5cGUgQ3Jvc3NvcmlnaW5Qcm9wVHlwZSA9IFwiYW5vbnltb3VzXCIgfCBcInVzZS1jcmVkZW50aWFsc1wiO1xyXG5leHBvcnQgdHlwZSBGb3JtZW5jdHlwZVByb3BUeXBlID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB8IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHwgXCJ0ZXh0L3BsYWluXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1tZXRob2RQcm9wVHlwZSA9IFwiZ2V0XCIgfCBcInBvc3RcIiB8IFwiZGlhbG9nXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm10YXJnZXRQcm9wVHlwZSA9IHN0cmluZyB8IFwiX3NlbGZcIiB8IFwiX2JsYW5rXCIgfCBcIl9wYXJlbnRcInwgXCJfdG9wXCI7XHJcbmV4cG9ydCB0eXBlIFJlZmVycmVyUG9saWN5UHJvcFR5cGUgPSBcIm5vLXJlZmVycmVyXCIgfCBcIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCIgfCBcIm9yaWdpblwiIHxcclxuXHRcdFwib3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgfCBcInVuc2FmZS11cmxcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUVsZW1lbnRQcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBzdGFuZGFyZCBwcm9wZXJ0aWVzIChhdHRyaWJ1dGVzIGFuZCBldmVudCBsaXN0ZW5lcnMpXHJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgb24gYWxsIEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsZW1lbnRQcm9wczxUUmVmLFRDaGlsZHJlbiA9IGFueT4gZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8vXHJcblx0LyoqIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgZWxlbWVudCBhZnRlciBpdCBpcyBjcmVhdGVkIChtb3VudGVkKS4gVGhlXHJcblx0ICogcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgZWxlbWVudCBpcyB1bm1vdW50ZWQuXHJcblx0ICovXHJcblx0cmVmPzogUmVmUHJvcFR5cGU8VFJlZj47XHJcblxyXG5cdC8qKiBDaGlsZHJlbiB0aGF0IGNhbiBiZSBzdXBwbGllZCB0byB0aGUgZWxlbWVudCAqL1xyXG5cdGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cclxuXHRjbGFzcz86IHN0cmluZ1xyXG5cdGRyYWdnYWJsZT86IGJvb2xlYW47XHJcblx0ZHJvcHpvbmUgPzogXCJjb3B5XCIgfCBcIm1vdmVcIiB8IFwibGlua1wiO1xyXG5cdGlkPzogc3RyaW5nIHwgbnVtYmVyO1xyXG5cdGxhbmc/OiBzdHJpbmc7XHJcblx0cm9sZT86IHN0cmluZztcclxuXHRzdHlsZT86IFN0eWxlUHJvcFR5cGU7XHJcblx0dGFiaW5kZXg/OiBudW1iZXI7XHJcblxyXG5cdC8vIGdsb2JhbCBldmVudHNcclxuXHRhYm9ydD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0YW5pbWF0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uZW5kPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uaXRlcmF0aW9uPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhdXhjbGljaz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGJsdXI/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGNhbmNlbD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjYW5wbGF5dGhyb3VnaD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjbG9zZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNvbnRleHRtZW51PzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjdWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRkYmxjbGljaz86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0ZHVyYXRpb25jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbXB0aWVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZW5kZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlcnJvcj86IEV2ZW50UHJvcFR5cGU8RXJyb3JFdmVudD47XHJcblx0Zm9jdXM/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGdvdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdGlucHV0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0aW52YWxpZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGtleWRvd24/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXByZXNzPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRrZXl1cD86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0bG9hZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZGRhdGE/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZWRtZXRhZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlbmQ/OiBFdmVudFByb3BUeXBlPFByb2dyZXNzRXZlbnQ+O1xyXG5cdGxvYWRzdGFydD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvc3Rwb2ludGVyY2FwdHVyZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRtb3VzZWRvd24/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlZW50ZXI/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbGVhdmU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbW92ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdXQ/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlb3Zlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2V1cD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0cGF1c2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cGxheWluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBvaW50ZXJjYW5jZWw/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmRvd24/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmVudGVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJsZWF2ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVybW92ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyb3V0PzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdmVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJ1cD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwcm9ncmVzcz86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0cmF0ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHJlc2V0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzaXplPzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRzY3JvbGw/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdC8vc2VjdXJpdHlwb2xpY3l2aW9sYXRpb24/OiBFdmVudFByb3BUeXBlPFNlY3VyaXR5UG9saWN5VmlvbGF0aW9uRXZlbnQ+O1xyXG5cdHNlZWtlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlZWtpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzZWxlY3Q/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHN0YWxsZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdWJtaXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdXNwZW5kPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dGltZXVwZGF0ZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvZ2dsZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvdWNoY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVuZD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hlbnRlcj86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hsZWF2ZT86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2htb3ZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0cmFuc2l0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbnJ1bj86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dm9sdW1lY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2FpdGluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHdoZWVsPzogRXZlbnRQcm9wVHlwZTxXaGVlbEV2ZW50PjtcclxuXHJcblx0Ly8gRWxlbWVudCdzIGV2ZW50c1xyXG5cdGZ1bGxzY3JlZW5jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRmdWxsc2NyZWVuZXJyb3I/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHJcblx0Ly8gRG9jdW1lbnQncyBhbmQgRWxlbWVudCdzIGV2ZW50c1xyXG5cdGNvcHk/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRjdXQ/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRwYXN0ZT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciBhbiBlbGVtZW50IGlzIGFuIFNWRy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IGlzIG9uZSBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGUgU1ZHIHNwZWM7IHRoYXQgaXMsIDxzdmc+XHJcbiAqIG9yIGFueSBvdGhlciBmcm9tIFNWRy5cclxuICogQHBhcmFtIGVsbSBFbGVtZW50IHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIFwib3duZXJTVkdFbGVtZW50XCIgaW4gKGVsbSBhcyBhbnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgdGhlIDxzdmc+IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gKGVsbSBhcyBhbnkpLm93bmVyU1ZHRWxlbWVudCA9PT0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSlNYIG5hbWVzcGFjZSBkZWZpbmluZyBob3cgVHlwZVNjcmlwdCBwZXJmb3JtcyB0eXBlIGNoZWNrcyBvbiBKU1ggZWxlbWVudHMsY29tcG9uZW50c1xyXG4vLyBwcm9wZXJ0aWVzIGFuZCBjaGlsZHJlbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSBcIi4vSHRtbFR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIHN2ZyBmcm9tIFwiLi9TdmdUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTmFtZXNwYWNlIGRlZmluaW5nIGludGVyZmFjZXMgdXNlZCBieSBUeXBlU2NyaXB0IHRvIHR5cGUtY2hlY2sgSlNYIGV4cHJlc3Npb25zLlxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBKU1hcclxue1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnQgZXh0ZW5kcyBJVk5DaGFpbiB7fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q2xhc3MgZXh0ZW5kcyBJQ29tcG9uZW50IHt9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEF0dHJpYnV0ZXNQcm9wZXJ0eSB7IHByb3BzOiB7fSB9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENoaWxkcmVuQXR0cmlidXRlIHsgY2hpbGRyZW46IGFueSB9XHJcblx0XHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50c1xyXG5cdHtcclxuXHRcdC8vIEhUTUwgZWxlbWVudHNcclxuXHRcdGE6IGh0bWwuSUh0bWxBRWxlbWVudFByb3BzO1xyXG5cdFx0YWJicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFjcm9ueW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhZGRyZXNzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXBwbGV0OiBodG1sLklIdG1sQXBwbGV0RWxlbWVudFByb3BzO1xyXG5cdFx0YXJlYTogaHRtbC5JSHRtbEFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHRhcnRpY2xlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXNpZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhdWRpbzogaHRtbC5JSHRtbEF1ZGlvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlOiBodG1sLklIdG1sQmFzZUVsZW1lbnRQcm9wcztcclxuXHRcdGJhc2Vmb250OiBodG1sLklIdG1sQmFzZWZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRiZGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiZG86IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiaWc6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRibG9ja3F1b3RlOiBodG1sLklIdG1sQmxvY2txdW90ZUVsZW1lbnRQcm9wcztcclxuXHRcdGJvZHk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRicjogaHRtbC5JSHRtbEJyRWxlbWVudFByb3BzO1xyXG5cdFx0YnV0dG9uOiBodG1sLklIdG1sQnV0dG9uRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGNhbnZhczogaHRtbC5JSHRtbENhbnZhc0VsZW1lbnRQcm9wcztcclxuXHRcdGNhcHRpb246IGh0bWwuSUh0bWxDYXB0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0Y2VudGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y2l0ZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2w6IGh0bWwuSUh0bWxDb2xFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xncm91cDogaHRtbC5JSHRtbENvbGdyb3VwRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGRhdGE6IGh0bWwuSUh0bWxEYXRhRWxlbWVudFByb3BzO1xyXG5cdFx0ZGF0YWxpc3Q6IGh0bWwuSUh0bWxEYXRhTGlzdEVsZW1lbnRQcm9wcztcclxuXHRcdGRkOiBodG1sLklIdG1sRGRFbGVtZW50UHJvcHM7XHJcblx0XHRkZWw6IGh0bWwuSUh0bWxEZWxFbGVtZW50UHJvcHM7XHJcblx0XHRkZXRhaWxzOiBodG1sLklIdG1sRGV0YWlsc0VsZW1lbnRQcm9wcztcclxuXHRcdGRmbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGRpYWxvZzogaHRtbC5JSHRtbERpYWxvZ0VsZW1lbnRQcm9wcztcclxuXHRcdGRpcjogaHRtbC5JSHRtbERpckVsZW1lbnRQcm9wcztcclxuXHRcdGRpdjogaHRtbC5JSHRtbERpdkVsZW1lbnRQcm9wcztcclxuXHRcdGRsOiBodG1sLklIdG1sRGxFbGVtZW50UHJvcHM7XHJcblx0XHRkdDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGVtYmVkOiBodG1sLklIdG1sRW1iZWRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmllbGRzZXQ6IGh0bWwuSUh0bWxGaWVsZHNldEVsZW1lbnRQcm9wcztcclxuXHRcdGZpZ2NhcHRpb246IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmaWd1cmU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb250OiBodG1sLklIdG1sRm9udEVsZW1lbnRQcm9wcztcclxuXHRcdGZvb3RlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZvcm06IGh0bWwuSUh0bWxGb3JtRWxlbWVudFByb3BzO1xyXG5cdFx0ZnJhbWU6IGh0bWwuSUh0bWxGcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lc2V0OiBodG1sLklIdG1sRnJhbWVzZXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aDE6IGh0bWwuSUh0bWxIMUVsZW1lbnRQcm9wcztcclxuXHRcdGgyOiBodG1sLklIdG1sSDJFbGVtZW50UHJvcHM7XHJcblx0XHRoMzogaHRtbC5JSHRtbEgzRWxlbWVudFByb3BzO1xyXG5cdFx0aDQ6IGh0bWwuSUh0bWxINEVsZW1lbnRQcm9wcztcclxuXHRcdGg1OiBodG1sLklIdG1sSDVFbGVtZW50UHJvcHM7XHJcblx0XHRoNjogaHRtbC5JSHRtbEg2RWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZDogaHRtbC5JSHRtbEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHRoZWFkZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRoZ3JvdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRocjogaHRtbC5JSHRtbEhyRWxlbWVudFByb3BzO1xyXG5cdFx0aHRtbDogaHRtbC5JSHRtbEh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGlmcmFtZTogaHRtbC5JSHRtbElmcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGltZzogaHRtbC5JSHRtbEltZ0VsZW1lbnRQcm9wcztcclxuXHRcdGlucHV0OiBodG1sLklIdG1sSW5wdXRFbGVtZW50UHJvcHM7XHJcblx0XHRpbnM6IGh0bWwuSUh0bWxJbnNFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0a2JkOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0a2V5Z2VuOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGxhYmVsOiBodG1sLklIdG1sTGFiZWxFbGVtZW50UHJvcHM7XHJcblx0XHRsZWdlbmQ6IGh0bWwuSUh0bWxMZWdlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRsaTogaHRtbC5JSHRtbExpRWxlbWVudFByb3BzO1xyXG5cdFx0bGluazogaHRtbC5JSHRtbExpbmtFbGVtZW50UHJvcHM7XHJcblx0XHRsaXN0aW5nOiBodG1sLklIdG1sTGlzdGluZ0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYWluOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWFwOiBodG1sLklIdG1sTWFwRWxlbWVudFByb3BzO1xyXG5cdFx0bWFyazogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnU6IGh0bWwuSUh0bWxNZW51RWxlbWVudFByb3BzO1xyXG5cdFx0bWVudWl0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRhOiBodG1sLklIdG1sTWV0YUVsZW1lbnRQcm9wcztcclxuXHRcdG1ldGVyOiBodG1sLklIdG1sTWV0ZXJFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bmF2OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9icjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vZnJhbWVzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9zY3JpcHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0b2JqZWN0OiBodG1sLklIdG1sT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0b2w6IGh0bWwuSUh0bWxPbEVsZW1lbnRQcm9wcztcclxuXHRcdG9wdGdyb3VwOiBodG1sLklIdG1sT3B0Z3JvdXBFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRpb246IGh0bWwuSUh0bWxPcHRpb25FbGVtZW50UHJvcHM7XHJcblx0XHRvdXRwdXQ6IGh0bWwuSUh0bWxPdXRwdXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cDogaHRtbC5JSHRtbFBFbGVtZW50UHJvcHM7XHJcblx0XHRwYXJhbTogaHRtbC5JSHRtbFBhcmFtRWxlbWVudFByb3BzO1xyXG5cdFx0cGljdHVyZTogaHRtbC5JSHRtbFBpY3R1cmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcmU6IGh0bWwuSUh0bWxQcmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcm9ncmVzczogaHRtbC5JSHRtbFByb2dyZXNzRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHE6IGh0bWwuSUh0bWxRRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ0YzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ1Ynk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0czogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNhbXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzY3JpcHQ6IGh0bWwuSUh0bWxTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZWN0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2VsZWN0OiBodG1sLklIdG1sU2VsZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0c2xvdDogaHRtbC5JSHRtbFNsb3RFbGVtZW50UHJvcHM7XHJcblx0XHRzbWFsbDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNvdXJjZTogaHRtbC5JSHRtbFNvdXJjZUVsZW1lbnRQcm9wcztcclxuXHRcdHNwYW46IGh0bWwuSUh0bWxTcGFuRWxlbWVudFByb3BzO1xyXG5cdFx0c3RyaWtlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3Ryb25nOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3R5bGU6IGh0bWwuSUh0bWxTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN1YjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN1bW1hcnk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGFibGU6IGh0bWwuSUh0bWxUYWJsZUVsZW1lbnRQcm9wcztcclxuXHRcdHRib2R5OiBodG1sLklIdG1sVGJvZHlFbGVtZW50UHJvcHM7XHJcblx0XHR0ZDogaHRtbC5JSHRtbFRkRWxlbWVudFByb3BzO1xyXG5cdFx0dGVtcGxhdGU6IGh0bWwuSUh0bWxUZW1wbGF0ZUVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRhcmVhOiBodG1sLklIdG1sVGV4dGFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHR0Zm9vdDogaHRtbC5JSHRtbFRmb290RWxlbWVudFByb3BzO1xyXG5cdFx0dGg6IGh0bWwuSUh0bWxUaEVsZW1lbnRQcm9wcztcclxuXHRcdHRoZWFkOiBodG1sLklIdG1sVEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHR0aW1lOiBodG1sLklIdG1sVGltZUVsZW1lbnRQcm9wcztcclxuXHRcdHRpdGxlOiBodG1sLklIdG1sVGl0bGVFbGVtZW50UHJvcHM7XHJcblx0XHR0cjogaHRtbC5JSHRtbFRyRWxlbWVudFByb3BzO1xyXG5cdFx0dHJhY2s6IGh0bWwuSUh0bWxUcmFja0VsZW1lbnRQcm9wcztcclxuXHRcdHR0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR1bDogaHRtbC5JSHRtbFVsRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZhcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHZpZGVvOiBodG1sLklIdG1sVmlkZW9FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0d2JyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHhtcDogaHRtbC5JSHRtbFhtcEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvLyBTVkcgZWxlbWVudHNcclxuXHRcdHN2Zzogc3ZnLklTdmdTdmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnQTogc3ZnLklTdmdBRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblx0XHRhbmltYXRlTW90aW9uOiBzdmcuSVN2Z0FuaW1hdGVNb3Rpb25FbGVtZW50UHJvcHM7XHJcblx0XHRhbmltYXRlVGFybnNmb3JtOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdBbmltYXRpb25Qcm9wcztcclxuXHJcblx0XHRjaXJjbGU6IHN2Zy5JU3ZnQ2lyY2xlRWxlbWVudFByb3BzO1xyXG5cdFx0Y2xpcFBhdGg6IHN2Zy5JU3ZnQ2xpcFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xvclByb2ZpbGU6IHN2Zy5JU3ZnQ29sb3JQcm9maWxlUGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkZWZzOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRlc2M6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlzY2FyZDogc3ZnLklTdmdEaXNjYXJkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGVsbGlwc2U6IHN2Zy5JU3ZnRWxsaXBzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRmZUJsZW5kOiBzdmcuSVN2Z0ZlQmxlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbG9yTWF0cml4OiBzdmcuSVN2Z0ZlQ29sb3JNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvbmVudFRyYW5zZmVyOiBzdmcuSVN2Z0ZlQ29tcG9uZW50VHJhbnNmZXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvc2l0ZTogc3ZnLklTdmdGZUNvbXBvc2l0ZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29udm9sdmVNYXRyaXg6IHN2Zy5JU3ZnRmVDb252b2x2ZU1hdHJpeEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlmZnVzZUxpZ2h0aW5nOiBzdmcuSVN2Z0ZlRGlmZnVzZUxpZ2h0aW5nRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXNwbGFjZW1lbnRNYXA6IHN2Zy5JU3ZnRmVEaXNwbGFjZW1lbnRNYXBFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpc3RhbnRMaWdodDogc3ZnLklTdmdGZURpc3RhbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRHJvcFNoYWRvdzogc3ZnLklTdmdGZURyb3BTaGFkb3dFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZsb29kOiBzdmcuSVN2Z0ZlRmxvb2RFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZ1bmNBOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNCOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNHOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNSOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUdhdXNzaWFuQmx1cjogc3ZnLklTdmdGZUdhdXNzaWFuQmx1ckVsZW1lbnRQcm9wcztcclxuXHRcdGZlSW1hZ2U6IHN2Zy5JU3ZnRmVJbWFnZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlTWVyZ2U6IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHMgfCBzdmcuSVN2Z0ZpbHRlclByaW1pdGl2ZVByb3BzO1xyXG5cdFx0ZmVNZXJnZU5vZGU6IHN2Zy5JU3ZnRmVNZXJnZU5vZGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1vcnBob2xvZ3k6IHN2Zy5JU3ZnRmVNb3JwaG9sb2d5RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVPZmZzZXQ6IHN2Zy5JU3ZnRmVPZmZzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVBvaW50TGlnaHQ6IHN2Zy5JU3ZnRmVQb2ludExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVTcGVjdWxhckxpZ2h0aW5nOiBzdmcuSVN2Z0ZlU3BlY3VsYXJMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BvdExpZ2h0OiBzdmcuSVN2Z0ZlU3BvdExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVUaWxlOiBzdmcuSVN2Z0ZlVGlsZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlVHVyYnVsZW5jZTogc3ZnLklTdmdGZVR1cmJ1bGVuY2VFbGVtZW50UHJvcHM7XHJcblx0XHRmaWx0ZXI6IHN2Zy5JU3ZnRmlsdGVyRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9yZWlnbk9iamVjdDogc3ZnLklTdmdGb3JlaWduT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGc6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzO1xyXG5cclxuXHRcdGhhdGNoOiBzdmcuSVN2Z0hhdGNoRWxlbWVudFByb3BzO1xyXG5cdFx0aGF0Y2hwYXRoOiBzdmcuSVN2Z0hhdGNocGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRpbWFnZTogc3ZnLklTdmdJbWFnZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsaW5lOiBzdmcuSVN2Z0xpbmVFbGVtZW50UHJvcHM7XHJcblx0XHRsaW5lYXJHcmFkaWVudDogc3ZnLklTdmdMaW5lYXJHcmFkaWVudEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYXJrZXI6IHN2Zy5JU3ZnTWFya2VyRWxlbWVudFByb3BzO1xyXG5cdFx0bWFzazogc3ZnLklTdmdNYXNrRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YWRhdGE6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0bXBhdGg6IHN2Zy5JU3ZnTVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cGF0aDogc3ZnLklTdmdQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0cGF0dGVybjogc3ZnLklTdmdQYXR0ZXJuRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWdvbjogc3ZnLklTdmdQb2x5Z29uRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWxpbmU6IHN2Zy5JU3ZnUG9seWxpbmVFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cmFkaWFsR3JhZGllbnQ6IHN2Zy5JU3ZnUmFkaWFsR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblx0XHRyZWN0OiBzdmcuSVN2Z1JlY3RFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnU2NyaXB0OiBzdmcuSVN2Z1NjcmlwdEVsZW1lbnRQcm9wcztcclxuXHRcdHNldDogc3ZnLklTdmdTZXRFbGVtZW50UHJvcHM7XHJcblx0XHRzb2xpZGNvbG9yOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdHN0b3A6IHN2Zy5JU3ZnU3RvcEVsZW1lbnRQcm9wcztcclxuXHRcdHN2Z1N0eWxlOiBzdmcuSVN2Z1N0eWxlRWxlbWVudFByb3BzO1xyXG5cdFx0c3dpdGNoOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHRcdHN5bWJvbDogc3ZnLklTdmdTeW1ib2xFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGV4dDogc3ZnLklTdmdUZXh0RWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFBhdGg6IHN2Zy5JU3ZnVGV4dFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdUaXRsZTogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0U3Bhbjogc3ZnLklTdmdUZXh0U3BhbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1c2U6IHN2Zy5JU3ZnVXNlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZpZXc6IHN2Zy5JU3ZnVmlld0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvL1tlbGVtTmFtZTogc3RyaW5nXTogYW55XHJcblx0fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBpbnRyaW5zaWMgZWxlbWVudHMgYW5kIHRvIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0F0dHJpYnV0ZXMgZXh0ZW5kcyBJQ29tbW9uUHJvcHMge31cclxuXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljQ2xhc3NBdHRyaWJ1dGVzPFQ+IGV4dGVuZHMgSUNvbW1vblByb3BzXHJcblx0e1xyXG5cdFx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgaXMgbW91bnRlZC4gVGhlXHJcblx0XHQvLyByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0cmVmPzogUmVmUHJvcFR5cGU8VD47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBmdW5jdGlvbnMgdGhhdCBkZXBlbmQgb24gVk4tZGVyaXZlZCBjbGFzc2VzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQge1Jvb3RWTn0gZnJvbSBcIi4vUm9vdFZOXCJcclxuaW1wb3J0IHtjcmVhdGVWTkNoYWluRnJvbUpTWH0gZnJvbSBcIi4vVk5DaGFpbkZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEpTWCBGYWN0b3J5IGZ1bmN0aW9uLiBJbiBvcmRlciBmb3IgdGhpcyBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGJ5IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyLCB0aGVcclxuICogdHNjb25maWcuanNvbiBtdXN0IGhhdmUgdGhlIGZvbGxvd2luZyBvcHRpb246XHJcbiAqXHJcbiAqIFwiY29tcGlsZXJPcHRpb25zXCI6XHJcbiAqIHtcclxuICogICAgIFwianN4XCI6IFwicmVhY3RcIixcclxuICogICAgIFwianN4RmFjdG9yeVwiOiBcIm1pbS5qc3hcIlxyXG4gKiB9XHJcbiAqXHJcbiAqIFRoZSAudHN4IGZpbGVzIG11c3QgaW1wb3J0IHRoZSBtaW1ibCBtb2R1bGUgYXMgbWltOiBpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICogQHBhcmFtIHRhZyBcclxuICogQHBhcmFtIHByb3BzIFxyXG4gKiBAcGFyYW0gY2hpbGRyZW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ganN4KCB0YWc6IGFueSwgcHJvcHM6IGFueSwgLi4uY2hpbGRyZW46IGFueVtdKTogYW55XHJcbntcclxuXHQvLyBjaGlsZHJlbiBwYXJhbWV0ZXIgaXMgYWx3YXlzIGFuIGFycmF5LiBBIGNvbXBvbmVudCBjYW4gc3BlY2lmeSB0aGF0IGl0cyBjaGlsZHJlbiBhcmUgYW4gYXJyYXlcclxuXHQvLyBvZiBhIGNlcnRhaW4gdHlwZSwgZS5nLiBjbGFzcyBBIGV4dGVuZHMgbWltLkNvbXBvbmVudDx7fSxUW10+LiBJbiB0aGlzIGNhc2UgdGhlcmUgYXJlIHR3b1xyXG5cdC8vIHdheXMgdG8gc3BlY2lmeSBjaGlsZHJlbiBpbiBKU1g6XHJcblx0Ly9cdDEpIDxBPnt0MX17dDJ9PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFt0MSwgdDJdLlxyXG5cdC8vXHQyKSA8QT57W3QxLCB0Ml19PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFtbdDEsdDJdXS5cclxuXHQvLyBUaGUgcmVhbENoaWxkcmVuIHZhcmlhYmxlIGFjY29tbW9kYXRlcyBib3RoIGNhc2VzLlxyXG5cdGxldCByZWFsQ2hpbGRyZW4gPSBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheSggY2hpbGRyZW5bMF0pID8gY2hpbGRyZW5bMF0gOiBjaGlsZHJlbjtcclxuXHRyZXR1cm4gY3JlYXRlVk5DaGFpbkZyb21KU1goIHRhZywgcHJvcHMsIHJlYWxDaGlsZHJlbik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uKSB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGluIGFcclxuICogc3luY2hyb25vdXMgbWFubmVyLlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHJlbmRlci5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRvIHJlbmRlciB0aGUgY29udGVudC4gSWYgbnVsbCBvciB1bmRlZmluZWQsIHRoZW5cclxuICogcmVuZGVyIHVuZGVyIHRoZSBkb2N1bWVudC5ib2R5IHRhZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudFN5bmMoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0Um9vdFZOLm1vdW50Um9vdFN5bmMoIGNvbnRlbnQsIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBcclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50U3luYyBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRTeW5jKCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRSb290Vk4udW5tb3VudFJvb3RTeW5jKCBhbmNob3JETik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uKSB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50XHJcbi8vIGFzeW5jaHJvbm91c2x5LlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHJlbmRlci5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRvIHJlbmRlciB0aGUgY29udGVudC4gSWYgbnVsbCBvciB1bmRlZmluZWQsdGhlblxyXG4gKlx0XHRcdFx0cmVuZGVyIHVuZGVyIHRoZSBkb2N1bWVudC5ib2R5IHRhZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudCggY29udGVudDogYW55LCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRSb290Vk4ubW91bnRSb290KCBjb250ZW50LCBhbmNob3JETik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50IGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGNvbnRlbnQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCggYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0Um9vdFZOLnVubW91bnRSb290KCBhbmNob3JETik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb3ZpZGUgaW1wbGVtZW50YXRpb24gZm9yIHRoZSByZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSBleHBvcnRlZCBmdW5jdGlvbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7RWxtQXR0ciwgUHJvcFR5cGV9IGZyb20gXCIuLi9jb3JlL0VsbUF0dHJcIjtcclxuXHJcbmZ1bmN0aW9uIHNfcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGU8VD4oIGF0dHJOYW1lOiBzdHJpbmcsIGhhbmRsZXJDbGFzczogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxUPik6IHZvaWRcclxue1xyXG5cdEVsbUF0dHIucmVnaXN0ZXJQcm9wZXJ0eSggYXR0ck5hbWUsIHsgdHlwZTogUHJvcFR5cGUuQ3VzdG9tQXR0ciwgaGFuZGxlckNsYXNzIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWJsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL21pbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0h0bWxUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1N2Z1R5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvRWxtQXR0clwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1V0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvRXZlbnRTbG90XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvTG9jYWxTdHlsZXNcIjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==