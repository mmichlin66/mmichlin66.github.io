(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mimurl"));
	else if(typeof define === 'function' && define.amd)
		define(["mimurl"], factory);
	else if(typeof exports === 'object')
		exports["mimbl"] = factory(require("mimurl"));
	else
		root["mimbl"] = factory(root["mimurl"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_mimurl__) {
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

/***/ "./src/comp/Router.tsx":
/*!*****************************!*\
  !*** ./src/comp/Router.tsx ***!
  \*****************************/
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mimurl = __webpack_require__(/*! mimurl */ "mimurl");
const mim = __webpack_require__(/*! ../core/mim */ "./src/core/mim.ts");
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
            if (matchResult)
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
        // name and the same isSvg flag
        const otherElmNode = newVN;
        return this.isSvg === otherElmNode.isSvg && this.elmName === otherElmNode.elmName;
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
        return vn.func === mim.Placeholder;
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
        this.comp.setSite(this);
        if (this.comp.componentWillMount)
            this.comp.componentWillMount();
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
        ////////////
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the Commit phase.
    willUnmount() {
        if (this.comp.componentWillUnmount)
            this.comp.componentWillUnmount();
        this.comp.setSite(null);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
        ////////////
    }
    // Determines whether the update of this node from the given node is possible. The newVN
    // parameter is guaranteed to point to a VN of the same type as this node.
    isUpdatePossible(newVN) {
        // since the component instance is used as a key, the other node is always for the
        // same component instance and update is always possible.
        return true;
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
const mim = __webpack_require__(/*! ./mim */ "./src/core/mim.ts");
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const VNChain_1 = __webpack_require__(/*! ./VNChain */ "./src/core/VNChain.ts");
const RootUI_1 = __webpack_require__(/*! ./RootUI */ "./src/core/RootUI.tsx");
/////////////////
const Stats_1 = __webpack_require__(/*! ./Stats */ "./src/core/Stats.ts");
//////////
let g_requestIdleCallback = window.requestIdleCallback
    ? window.requestIdleCallback
    : (func) => setTimeout(func);
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
            // remember the internal set of nodes and re-create it so that it is ready for new
            // update requests
            let vnsScheduledForUpdate = this.vnsScheduledForUpdate;
            this.vnsScheduledForUpdate = new Set();
            // remember the set of functions scheduled to be called before updating nodes
            const callsScheduledBeforeUpdate = this.callsScheduledBeforeUpdate;
            this.callsScheduledBeforeUpdate = new Set();
            // remember the set of functions scheduled to be called after updating nodes
            const callsScheduledAfterUpdate = this.callsScheduledAfterUpdate;
            this.callsScheduledAfterUpdate = new Set();
            // call functions scheduled to be invoked before updating components
            this.performUpdateCycle(vnsScheduledForUpdate, callsScheduledBeforeUpdate, callsScheduledAfterUpdate);
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
            let set = new Set();
            set.add(this);
            this.performUpdateCycle(set);
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
        // add this node to the map of nodes for which either update or replacement or
        // deletion is scheduled. Note that a node will only be present once in the map no
        // matter how many times it calls requestUpdate().
        this.vnsScheduledForUpdate.add(vn);
        // if this is the first node that should be updated, schedule an update to be performed
        // on the next cycle.
        this.requestFrameIfNeeded();
    }
    // Cancels a previously requested update for the given node.
    cancelNodeUpdate(vn) {
        // try to remove this node from the set of nodes for which update or replacement or
        // deletion is scheduled.
        if (!this.vnsScheduledForUpdate.delete(vn))
            return;
        // if this was the last node in the set, cancel the request to schedule update processing.
        this.cancelFrameRequestIfNeeded();
    }
    // Schedules to call the given function either before or after all the scheduled components
    // have been updated.
    scheduleFuncCall(func, beforeUpdate = false) {
        if (!func)
            return;
        if (beforeUpdate)
            this.callsScheduledBeforeUpdate.add(func);
        else
            this.callsScheduledAfterUpdate.add(func);
        this.requestFrameIfNeeded();
    }
    // Cancels a call that has been scheduled to be made either before or after all the scheduled
    // components have been updated.
    cancelScheduledFuncCall(func, beforeUpdate = false) {
        if (!func)
            return;
        if (beforeUpdate)
            this.callsScheduledBeforeUpdate.delete(func);
        else
            this.callsScheduledAfterUpdate.delete(func);
        this.cancelFrameRequestIfNeeded();
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
            this.scheduledFrameHandle = g_requestIdleCallback(this.onScheduledFrame);
    }
    // Determines whether the call to cancelAnimationFrame should be made after a scheduled update
    // or call has been canceled.
    cancelFrameRequestIfNeeded() {
        if (this.vnsScheduledForUpdate.size === 0 &&
            this.callsScheduledBeforeUpdate.size === 0 &&
            this.callsScheduledAfterUpdate.size === 0) {
            window.cancelIdleCallback(this.scheduledFrameHandle);
            this.scheduledFrameHandle = 0;
        }
    }
    // Callback that is called on a new UI cycle when there is a need to update UI components
    performUpdateCycle(vnsToUpdate, callsBeforeUpdate, callsAfterUpdate) {
        // increment tick number.
        this.currentTick++;
        // call functions scheduled to be invoked before updating components
        if (callsBeforeUpdate)
            this.callScheduledFunctions(callsBeforeUpdate, "before");
        ///////////////////
        Stats_1.DetailedStats.stats = new Stats_1.DetailedStats(`Mimbl update cycle ${this.currentTick}: `);
        Stats_1.DetailedStats.stats.start();
        ////////////
        // arrange scheduled nodes by their nesting depths perform updates
        this.performCommitPhase(this.performRenderPhase(this.arrangeNodesByDepth(vnsToUpdate)));
        ///////////////////
        Stats_1.DetailedStats.stats.stop(true);
        Stats_1.DetailedStats.stats = null;
        ////////////
        // call functions scheduled to be invoked after updating components
        if (callsAfterUpdate)
            this.callScheduledFunctions(callsAfterUpdate, "after");
    }
    ;
    // Arranges the scheduled nodes by their nesting depths so that we update "upper" nodes before
    // the lower ones. This can help avoid two conditions:
    //	- rendering a child component twice (first because it called updateMe) and second
    //		because its parent was also updated.
    //	- unnecessay rendering a child component before it is removed by the parent
    // We allocate contiguous array where indexes correspond to depth. Each element in this
    // array will either be undefined or contain an array of nodes at this depth.
    arrangeNodesByDepth(vnsScheduledForUpdate) {
        //////////////////////
        ///////////////////////////////////////////////////////////////
        ////////////////////////
        ////////////
        // create a sparse array of certain reasonable size. If we have depths greater than this,
        // the array will grow automatically (although it is less erformant it is still acceptable).
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
        let subNodes = createVNChainFromContent(vn.render());
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
    // Recursively renders this node and updates its sub-nodes if necessary. This method is
    // invoked when a node is being updated either as a result of updateMe invocation or because
    // the parent node was updated. If an exception is thrown during the execution of this method
    // (which can be only from components' shouldUpdate or render methods), the component is asked
    // to handle the error. If the component handles the error, the content returned from the
    // error handling method is rendered; otherwise, the exception is re-thrown. Thus, the
    // exception is propagated up until it is handled by a node that handles it or up to the root
    // node.
    updateStemVirtual(vn) {
        let disp = new VNDisp();
        disp.action = 0 /* UpdateSubNodesOnly */;
        disp.oldVN = vn;
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
        this.buildNodeDisps(disp);
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
        // remove from DOM the old nodes designated to be removed (that is, those for which there
        // is no counterpart new node that will either update or replace it) and then those
        // designated to be replaced. We need to remove old nodes first before we start inserting
        // new - one reason is to properly maintain references.
        for (let svn of disp.subNodesToRemove)
            this.destroyPhysical(svn);
        // clear our current list of sub-nodes and re-allocate it for new sub-node - we will
        // populate it while updating them
        vn.subNodes.clear();
        // determine the anchor node to use when inserting or moving new nodes
        let ownDN = vn.getOwnDN();
        let anchorDN = ownDN !== null ? ownDN : vn.anchorDN;
        // if this virtual node doesn't define its own DOM node (true for components), we will
        // need to find a DOM node before which to start inserting or moving nodes. Null means
        // append to the end of the anchor node's children.
        let beforeDN = ownDN !== null ? null : vn.getNextDNUnderSameAnchorDN(anchorDN);
        // perform DOM operations according to sub-node disposition. We need to decide for each
        // node what node to use to insert or move it before. We go from the end of the list of
        // new nodes and on each iteration we decide the value of the "beforeDN".
        for (let i = disp.subNodeDisps.length - 1; i >= 0; i--) {
            let subNodeDisp = disp.subNodeDisps[i];
            let action = subNodeDisp.action;
            if (action === 2 /* Update */) {
                let oldVN = subNodeDisp.oldVN;
                let newVN = subNodeDisp.newVN;
                if (subNodeDisp.updateDisp.shouldCommit) {
                    /////////////////////////
                    //////////////////////////////////////////////////////////////////////////////
                    ///////////////
                    oldVN.commitUpdate(newVN);
                }
                // if the updated old VN (or one of its sub-nodes) defines a DOM node and it
                // is not positioned before the current "beforeDN", move it there. It also
                // becomes the new DOM node before which next components should be inserted.
                let firstDN = oldVN.getFirstDN();
                if (firstDN !== null) {
                    // determine whether we need to move our node
                    let nextSubNodeVNDisp = i === disp.subNodeDisps.length - 1
                        ? undefined : disp.subNodeDisps[i + 1];
                    if (this.shouldMoveVN(subNodeDisp, nextSubNodeVNDisp) && firstDN.nextSibling !== beforeDN) {
                        anchorDN.insertBefore(firstDN, beforeDN);
                        ///////////////////////
                        Stats_1.DetailedStats.stats.log(vn.getStatsCategory(), Stats_1.StatsAction.Moved);
                        ////////////////
                    }
                    beforeDN = firstDN;
                }
                // update the sub-nodes if necessary
                if (subNodeDisp.updateDisp.shouldRender)
                    this.updatePhysical(subNodeDisp);
                vn.subNodes.insertVN(oldVN);
            }
            else {
                let newVN = subNodeDisp.newVN;
                // since we already destroyed old nodes designated to be replaced, the code is
                // identical for Replace and Insert actions
                this.createPhysical(newVN, anchorDN, beforeDN);
                // if the new node defines a DOM node, it becomes the DOM node before which
                // next components should be inserted/moved
                let firstDN = newVN.getFirstDN();
                if (firstDN !== null)
                    beforeDN = firstDN;
                vn.subNodes.insertVN(newVN);
            }
        }
    }
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
    // Compares two chains of nodes (old and new) and fills two arrays for sub-nodes:
    //	- array of node disposition objects corresponding to new sub-nodes. Each disposition
    //		indicates whether the new sub-node should be just inserted or whether it should update
    //		the old sub-node.
    //	- array of old sub-nodes which should be removed.
    // This method is only invoked with the disp object whose oldVN field is non-null.
    buildNodeDisps(disp) {
        //disp.subNodeDisps = [];
        //disp.subNodesToRemove = [];
        // render the new content;
        let newChain = createVNChainFromContent(disp.oldVN.render());
        // build map of old keyed nodes and an array of old non-keyed nodes
        let keyedMap = new Map();
        let nonKeyedList = [];
        let oldChain = disp.oldVN.subNodes;
        for (let oldVN = oldChain.first; oldVN !== null; oldVN = oldVN.next) {
            if (oldVN.key === undefined)
                nonKeyedList.push(oldVN);
            else
                keyedMap.set(oldVN.key, oldVN);
        }
        // loop over new nodes
        let nonKeyedListLength = nonKeyedList.length;
        let nonKeyedIndex = 0;
        for (let newVN = newChain.first; newVN !== null; newVN = newVN.next) {
            let action;
            let oldVN;
            if (newVN.key !== undefined) {
                oldVN = keyedMap.get(newVN.key);
                // if we found old node then remove the old node from the map - this way at
                // the end of the loop all old nodes remaining in the map should be deleted
                if (oldVN !== undefined)
                    keyedMap.delete(newVN.key);
            }
            else if (nonKeyedIndex < nonKeyedListLength) {
                oldVN = nonKeyedList[nonKeyedIndex];
                nonKeyedIndex++;
            }
            let subNodeDisp = new VNDisp();
            subNodeDisp.newVN = newVN;
            // by now, if we didn't find an old node, then the new node should be inserted;
            // otherwise, we decide on whether the new node should be used to update or
            // replace the old node
            if (oldVN === undefined)
                subNodeDisp.action = 1 /* Insert */;
            else if (oldVN.type === newVN.type && oldVN.isUpdatePossible(newVN)) {
                subNodeDisp.action = 2 /* Update */;
                subNodeDisp.oldVN = oldVN;
            }
            else {
                // we are here if the new node should replace the old one. We add the old node to
                // the list of those to be removed and indicate
                disp.subNodesToRemove.push(oldVN);
                subNodeDisp.action = 1 /* Insert */;
            }
            disp.subNodeDisps.push(subNodeDisp);
        }
        // old keyed nodes remaining in the map will be unmounted because these are the old nodes
        // for which there were no new nodes with the same key.
        for (let oldVN of keyedMap.values())
            disp.subNodesToRemove.push(oldVN);
        // old non-keyed nodes from the current index to the end of the list will be unmounted
        for (let i = nonKeyedIndex; i < nonKeyedListLength; i++)
            disp.subNodesToRemove.push(nonKeyedList[i]);
    }
    // Determines whether the node should be moved based on its disposition.
    shouldMoveVN(vnDisp, nextVNDisp) {
        if (nextVNDisp === undefined)
            return vnDisp.oldVN.next !== null;
        else if (nextVNDisp.action === 2 /* Update */)
            return vnDisp.oldVN.next !== nextVNDisp.oldVN;
        else
            return true;
    }
}
RootVN.mimblAnchorPropName = "__mimblAnchorPropName__";
exports.RootVN = RootVN;
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
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The VNDisp class describes a disposition for a node during reconciliation process.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class VNDisp {
    constructor() {
        // Array of disposition objects for sub-nodes.
        this.subNodeDisps = [];
        // Array of sub-nodes that should be removed during update of the sub-nodes.
        this.subNodesToRemove = [];
    }
}
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
// Creates a chain of virtual nodes from the data provided by the TypeScript's JSX parser.
function createVNChainFromJSX(tag, props, children) {
    const chain = new VNChain_1.VNChain();
    if (tag === mim.Placeholder)
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
        this.text = newVN.text;
        this.dn.nodeValue = this.text;
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
        // recursively call this method on the sub-nodes until a valid node is returned
        if (this.subNodes.first !== null) {
            for (let svn = this.subNodes.first; svn !== null; svn = svn.next) {
                dn = svn.getFirstDN();
                if (dn !== null)
                    return dn;
            }
        }
        return null;
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
 * Reference class to use whenever a reference to an object is needed - for example, with JSX ref
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
 * references. The optional onlyIf parameter may specify a value so that only if the reference
 * currently has the same value it will be replaced. This might be needed to not clear a
 * reference if it already points to a different object.
 * @param ref Reference property to be set
 * @param val Reference value to set to the property
 * @param onlyIf An optional value to which to compare the current (old) value of the reference.
 * The new value will be set only if the old value equals the onlyIf value.
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
 *	class Child extends Component
 *	{
 *		@prop text: string = "Hello!";
 *		render() { return <div ref={myDiv}>{text}</div>; }
 *	}
 *
 *	class Parent extends Component
 *	{
 *		child = new Child();
 *		render() { return <div click={() => this.child.text += " again"}>{this.child}</div>; }
 *	}
 *
 * In the above example,the Child component will be re-rendered whever its text property changes.
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
 * for its children,but later this node is thrown away and only children are used. This component
 * is only needed because currently TypeScript doesn't alow the <> fragment notation if a custom
 * JSX factory function is used.
 *
 * Use it as following:
 *
 *	import * as mim from "mimbl"
 *	.....
 *	render()
 *	{
 *		return <mim.Placeholder>
 *			<div1/>
 *			<div2/>
 *			<div3/>
 *		</mim.Placeholder>
 *	}
 * @param props
 */
function Placeholder(props) { }
exports.Placeholder = Placeholder;
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
const RootVN_1 = __webpack_require__(/*! ../core/RootVN */ "./src/core/RootVN.ts");
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
    return RootVN_1.createVNChainFromJSX(tag, props, realChildren);
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
__export(__webpack_require__(/*! ./comp/Router */ "./src/comp/Router.tsx"));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29tcC9Sb3V0ZXIudHN4Iiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvQ2xhc3NWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0NvbXBCYXNlVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9FbG1BdHRyLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRWxtVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9FdmVudFNsb3QudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9GdW5jVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9JbnN0YW5jZVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvTG9jYWxTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290VUkudHN4Iiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUm9vdFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TdmdFbG1zLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVGV4dFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQ2hhaW4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9taW0udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvbWltYmxUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1ibC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW11cmxcIixcImNvbW1vbmpzMlwiOlwibWltdXJsXCIsXCJjb21tb25qc1wiOlwibWltdXJsXCIsXCJhbWRcIjpcIm1pbXVybFwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsMkRBQWdDO0FBQ2hDLHdFQUFrQztBQStGbEM7Ozs7R0FJRztBQUNILE1BQU0sVUFBVTtDQUtmO0FBNkNEOzs7R0FHRztBQUNILE1BQWEsTUFBTyxTQUFRLEdBQUcsQ0FBQyxTQUErQjtJQUU5RCxZQUFhLEtBQW1CO1FBRS9CLEtBQUssRUFBRSxDQUFDO1FBc1ZULGlEQUFpRDtRQUN6QyxlQUFVLEdBQUcsQ0FBRSxDQUFnQixFQUFRLEVBQUU7WUFFaEQsSUFBSSxLQUFLLEdBQWUsQ0FBQyxD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LHFGQUFtQztBQUNuQyw0RUFBOEI7Ozs7Ozs7Ozs7OztBQ1Q5QixvRCIsImZpbGUiOiJtaW1ibC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW11cmxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibWltdXJsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWJsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibWltdXJsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1ibFwiXSA9IGZhY3Rvcnkocm9vdFtcIm1pbXVybFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWltYmxUeXBlcy50c1wiKTtcbiIsImltcG9ydCAqIGFzIG1pbXVybCBmcm9tIFwibWltdXJsXCJcclxuaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9jb3JlL21pbVwiXHJcbmltcG9ydCB7SUh0bWxBRWxlbWVudFByb3BzfSBmcm9tIFwiLi4vY29yZS9IdG1sVHlwZXNcIlxyXG5cclxuXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uL2NvcmUvbWltXCJcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcblx0e1xyXG4gICAgICAgIFJvdXRlcjogSVJvdXRlclNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUm91dGVyU2VydmljZSBpcyBhIHNlcnZpY2UgdGhhdCBpcyBwdWJsaXNoZWQgYnkgdGhlIFJvdXRlciBjb21wb25lbnQuIEl0IGFsbG93c1xyXG4gKiBzdWJzY3JpYmVycyB0byBuYXZpZ2F0ZSB0byBwYXRocyBkZWZpbmVkIGJ5IFJvdXRlcidzIHJvdXRlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlclNlcnZpY2Vcclxue1xyXG5cdC8vIE5hdmlnYXRlcyB0byBhIHJvdXRlIG1hdGNoaW5nIHRoZSBnaXZlbiBVUkwuXHJcblx0bmF2aWdhdGVCeVVSTCggdXJsOiBzdHJpbmcsIG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0Ly8gTmF2aWdhdGVzIHRvIGEgcm91dGUgd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0bmF2aWdhdGVCeUlEKCBpZDogc3RyaW5nLCBmaWVsZHM/OiBSb3V0ZUZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIG9iamVjdCBjb250YWluaW5nIGZpZWxkIHZhbHVlcyB0aGF0IGlzIHBhc3NlZCB3aGVuIG5hdmlnYXRpbmcgdG8gYSByb3V0ZS4gV2hlblxyXG4gKiBuYXZpZ2F0aW5nIGJ5IHJvdXRlIElELCB0aGUgZmllbGRzIGFyZSBwYXNzZWQgZXhwbGljaXRseS4gV2hlbiBuYXZpZ2F0aW5nIGJ5IFVSTCwgdGhlIGZpZWxkc1xyXG4gKiBhcmUgZXh0cmFjdGVkIGZyb20gdGhlIFVSTCBhY2NvcmRpbmcgdG8gdGhlIFVSTCBwYXR0ZXJuIGluIHRoZSByb3V0ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJvdXRlRmllbGRzID0geyBbUDogc3RyaW5nXTogbWltdXJsLkZpZWxkVmFsdWVUeXBlIH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBwcm92aWRlcyBjb250ZW50IHRvIGRpc3BsYXkgZm9yIGEgcm91dGUuIEl0IGNhbiByZXR1cm4gYSBQcm9taXNlIGluXHJcbiAqIHdoaWNoIGNhc2UgdGhlIFJvdXRlciB3aWxsIGRpc3BsYXkgcHJvZ3Jlc3MgVUkgdW50aWwgdGhlIGNvbnRlbnQgYmVjb21lcyBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOYXZUb1JvdXRlRnVuY1R5cGUgPSAoZmllbGRzOiBSb3V0ZUZpZWxkcykgPT4gYW55O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgd2hlbiBuYXZpZ2F0aW5nIGZyb20gdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgcm91dGUuIElmIGZhbHNlXHJcbiAqIGlzIHJldHVybmVkLCBuYXZpZ2F0aW9uIGRvZXNuJ3QgaGFwcGVuLiBUaGlzIGFsbG93cyB0aGUgY3VycmVudCBjb21wb25lbnQgdG8gcHJvbXB0IHRoZSB1c2VyXHJcbiAqIGFib3V0IHVuc2F2ZWQgZGF0YS4gSWYgUHJvbWlzZSBpcyByZXR1cm5lZCwgdGhlIFJvdXRlciB3aWxsIHdhaXQgdW50aWwgdGhlIHJlc3BvbnNlIGlzIGF2YWlsYWJsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIE5hdkZyb21Sb3V0ZUZ1bmNUeXBlID0gKCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUm91dGUgaW50ZXJmYWNlIGRlZmluZXMgYSBuYXZpZ2F0aW9uIHRhcmdldC4gUm91dGVzIGNhbiBoYXZlIHN1Yi1yb3V0ZXMsIHdoaWNoIGNyZWF0ZXMgYVxyXG4gKiBoaWVyYXJjaHkgb2Ygcm91dGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVxyXG57XHJcblx0LyoqXHJcblx0ICogVW5pcXVlIChidXQgb3B0aW9uYWwpIElEIHRoYXQgYWxsb3dzIG5hdmlnYXRpbmcgdG8gdGhlIHRhcmdldCB1c2luZyBhIHNpbXBsZSBJRCBpbnN0ZWFkIG9mXHJcblx0ICogcGF0aC4gVGhlIHBhdGggbWVtYmVyIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBicm93c2VyJ3MgYWRkcmVzcyBjb250cm9sLlxyXG5cdCAqL1xyXG5cdGlkPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBVUkwgcGF0dGVybiAtIGNhbiBjb250YWluIG5hbWVkIHBhcmFtZXRlcnMgKGFzIGluIC91c2Vycy97dWlkfSkuIFRoaXMgY2FuIGJlIGxlZnQgZW1wdHlcclxuXHQgKiBpZiBvbmx5IGlkIGlzIHVzZWRcclxuXHQgKi9cclxuXHR1cmxQYXR0ZXJuPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcHRpb25hbCBwcm9wZXJ0eSB0aGF0IGlzIHBhc3NlZCB0byB0aGUgaGlzdG9yeS5wdXNoU3RhdGUgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRpb24gZnVuY3Rpb24gdGhhdCBwcm92aWRlcyBjb250ZW50IHRvIGRpc3BsYXkuXHJcblx0ICovXHJcblx0bmF2VG9GdW5jPzogTmF2VG9Sb3V0ZUZ1bmNUeXBlO1xyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0aW9uIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHRoZSBjdXJyZW50IGNvbXBvbmVudCB0byBwcm9tcHQgdGhlIHVzZXIgYWJvdXQgdW5zYXZlZCBkYXRhLlxyXG5cdCAqL1xyXG5cdG5hdkZyb21GdW5jPzogTmF2RnJvbVJvdXRlRnVuY1R5cGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9yZGVyZWQgbGlzdCBvZiBSb3V0ZSBvYmplY3RzLCB3aGljaCBhcmUgc3ViLXJvdXRlcyBvZiB0aGlzIHJvdXRlLlxyXG5cdCAqL1xyXG5cdHN1YlJvdXRlcz86IFJvdXRlW107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGNsYXNzIHRoYXQgaXMgdXNlZCBhcyBhIHN0YXRlIGZvciBIaXN0b3J5LnB1c2hTdGF0ZSBmdW5jdGlvbi4gSXQgcmVtZW1iZXJzIHRoZVxyXG4gKiBwYXJhbWV0ZXJzIG9mIGEgcm91dGUgdG8gbmF2aWdhdGUgdG8gd2hlbiB0aGUgdXNlciBnb2VzIGJhY2sgb3IgZm9yd2FyZCBpbiB0aGUgYnJvd3NlcidzXHJcbiAqIGhpc3RvcnkuXHJcbiAqL1xyXG5jbGFzcyBSb3V0ZVN0YXRlXHJcbntcclxuXHRyb3V0ZUlEOiBzdHJpbmc7XHJcblx0cm91dGVVUkw6IHN0cmluZztcclxuXHRmaWVsZHM6IFJvdXRlRmllbGRzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGJ5IHRoZSBSb3V0ZXIgdG8gZGlzcGxheSB0aGUgY29udGVudCBvZiB0aGUgY3VycmVudCByb3V0ZS5cclxuICogVGhpcyBhbGxvd3MgdGhlIHJvdXRlciBkbyBoYXZlIGl0cyBvd24gY29udGVudCAtIHRoZSBzYW1lIGZvciBhbGwgcm91dGVzIC0gYW5kIGluc2VydCB0aGVcclxuICogY3VycmVudCByb3V0ZXIncyBjb250ZW50IGludG8gaXQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSb3V0ZXJPdXRlckNvbnRlbnRSZW5kZXJGdW5jVHlwZSA9IChyb3V0ZUNvbnRlbnQ6IGFueSkgPT4gYW55O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgYnkgdGhlIFJvdXRlciB0byBkaXNwbGF5IGEgcHJvZ3Jlc3MgVUkgd2hpbGUgaXQgaXMgbG9hZGluZ1xyXG4gKiByb3V0ZSBjb250ZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUHJvZ3Jlc3NDb250ZW50UmVuZGVyRnVuY1R5cGUgPSAoKSA9PiBhbnk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJvdXRlclByb3BzIGludGVyZmFjZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUm91dGVyUHJvcHNcclxue1xyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgcm91dGVyIGNvbnRyb2xzIHRoZSBicm93c2VyOyB0aGF0IGlzLCB1c2VzIEhpc3RvcnkgQVBJIHRvXHJcblx0ICogcHVzaCBuZXcgc3RhdGUgYW5kIGludGVyY2VwdCBiYWNrIGFuZCBmb3J3YXJkIGNvbW1hbmRzLiBEZWZhdWx0IHZhbHVlIGlzIHRydWUuXHJcblx0ICovXHJcblx0Y29udHJvbHNCcm93c2VyPzogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHRoYXQgaWYgdGhpcyByb3V0ZXIgY2Fubm90IHJlc29sdmUgYSBwYXRoLCBpdCB3aWxsIGRlbGVnYXRlIHRvIGEgcm91dGVyIHVwXHJcblx0ICogdGhlIGNvbXBvbmVudCBjaGFpbiAoaWYgdGhlcmUgaXMgb25lKS5cclxuXHQgKi9cclxuXHRjaGFpbnNUb0hpZ2hlclJvdXRlcj86IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCBiYXNlZCBvbiB3aGljaCBhbGwgcm91dGUgcGF0aHMgd2lsbCBiZSByZXNvbHZlZC4gRGVmYXVsdCB2YWx1ZSBpc1xyXG5cdCAqIHRydWUuXHJcblx0ICovXHJcblx0YmFzZVVSTD86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJvdXRlciBjb21wb25lbnQgcHJvdmlkZXMgY2xpZW50LXNpZGUgcm91dGluZy4gSXQgd29ya3Mgd2l0aCBSb3V0ZSBvYmplY3RzIHRoYXQgZGVmaW5lXHJcbiAqIGF2YWlsYWJsZSBuYXZpZ2F0aW9uIHRhcmdldHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUm91dGVyIGV4dGVuZHMgbWltLkNvbXBvbmVudDxJUm91dGVyUHJvcHMsUm91dGVbXT4gaW1wbGVtZW50cyBJUm91dGVyU2VydmljZSwgbWltLklFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBJUm91dGVyUHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblxyXG5cdFx0aWYgKHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHJvdXRlIG9mIHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcblx0XHRcdFx0dGhpcy5hZGRSb3V0ZSggcm91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJbnNlcnRzIHRoZSBnaXZlbiByb3V0ZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGxpc3QuXHJcblx0ICogQHBhcmFtIHJvdXRlIFtbUm91dGVdXSBvYmplY3QgdG8gYWRkXHJcblx0ICogQHBhcmFtIGluZGV4IEluZGV4IGF0IHdoaWNoIHRvIGFkZCB0aGUgcm91dGUgb2JqZWN0LiBJZiB0aGUgaW5kZXggaXMgbm90IGRlZmluZWQsIHRoZVxyXG5cdCAqXHRcdHJvdXRlIGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuIElmIGluZGV4IGlzIG91dCBvZiByYW5nZSBhbiBleGNlcHRpb24gd2lsbFxyXG5cdCAqXHRcdGJlIHRocm93bi5cclxuXHQgKi9cclxuXHRwdWJsaWMgYWRkUm91dGUoIHJvdXRlOiBSb3V0ZSwgaW5kZXg/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFyb3V0ZSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIlJvdXRlIG9iamVjdCBjYW5ub3QgYmUgbnVsbFwiKTtcclxuXHJcblx0XHRpZiAoaW5kZXggIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5yb3V0ZXMuc3BsaWNlKCBpbmRleCwgMCwgcm91dGUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnJvdXRlcy5wdXNoKCByb3V0ZSk7XHJcblxyXG5cdFx0Ly8gcmVjdXJzaXZlbHkgYWRkIHRoZSByb3V0ZSBhbmQgYWxsIGl0cyBzdWItcm91dGVzICh0aGF0IGhhdmUgSURzKSB0byB0aGUgbWFwXHJcblx0XHR0aGlzLmFkZFJvdXRlVG9NYXAoIHJvdXRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVtb3ZlcyBhIHJvdXRlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgbGlzdCBhbmQgcmV0dXJucyB0aGUgUm91dGUgb2JqZWN0LiBJZiBpbmRleCBpc1xyXG5cdCAqIG91dCBvZiByYW5nZSBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd24uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGluZGV4XHJcblx0ICogQHJldHVybiBSb3V0ZSBbW1JvdXRlXV0gb2JqZWN0IHRoYXQgd2FzIHJlbW92ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHJlbW92ZVJvdXRlKCBpbmRleDogbnVtYmVyKTogUm91dGVcclxuXHR7XHJcblx0XHRsZXQgcm91dGU6IFJvdXRlID0gdGhpcy5yb3V0ZXMuc3BsaWNlKCBpbmRleCwgMSlbMF07XHJcblxyXG5cdFx0Ly8gcmVjdXJzaXZlbHkgcmVtb3ZlIHRoZSByb3V0ZSBhbmQgYWxsIGl0cyBzdWItcm91dGVzICh0aGF0IGhhdmUgSURzKSBmcm9tIHRoZSBtYXBcclxuXHRcdHRoaXMucmVtb3ZlUm91dGVGcm9tTWFwKCByb3V0ZSk7XHJcblxyXG5cdFx0cmV0dXJuIHJvdXRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiByb3V0ZSBhbmQgaXRzIHN1Yi1yb3V0ZXMgcmVjdXJzaXZlbHkgdG8gdGhlIG1hcCBvZiByb3V0ZXMgYnkgSURzIChvbmx5XHJcblx0Ly8gdGhlIHJvdXRlcyB0aGF0IGhhdmUgdGhlaXIgaWQgcHJvcGVydHkgZGVmaW5lZCBhbmQgbm90IGVtcHR5KS5cclxuXHRwcml2YXRlIGFkZFJvdXRlVG9NYXAoIHJvdXRlOiBSb3V0ZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocm91dGUuaWQpXHJcblx0XHRcdHRoaXMucm91dGVzQnlJRC5zZXQoIHJvdXRlLmlkLCByb3V0ZSk7XHJcblxyXG5cdFx0aWYgKHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ViUm91dGUgb2Ygcm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHRcdHRoaXMuYWRkUm91dGVUb01hcCggc3ViUm91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiByb3V0ZSBhbmQgaXRzIHN1Yi1yb3V0ZXMgcmVjdXJzaXZlbHkgZnJvbSB0aGUgbWFwIG9mIHJvdXRzIGJ5IElEcyAob25seVxyXG5cdC8vIHRoZSByb3V0ZXMgdGhhdCBoYXZlIHRoZWlyIGlkIHByb3BlcnR5IGRlZmluZWQgYW5kIG5vdCBlbXB0eSkuXHJcblx0cHJpdmF0ZSByZW1vdmVSb3V0ZUZyb21NYXAoIHJvdXRlOiBSb3V0ZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocm91dGUuaWQpXHJcblx0XHRcdHRoaXMucm91dGVzQnlJRC5kZWxldGUoIHJvdXRlLmlkKTtcclxuXHJcblx0XHRpZiAocm91dGUuc3ViUm91dGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBzdWJSb3V0ZSBvZiByb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmVSb3V0ZUZyb21NYXAoIHN1YlJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGVzIHRvIGEgcm91dGUgbWF0Y2hpbmcgdGhlIGdpdmVuIFVSTC5cclxuXHQgKiBAcGFyYW0gdXJsIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBuYXZpZ2F0ZSB0b1xyXG5cdCAqIEBwYXJhbSBtYWtlSGlzdG9yeUVudHJ5XHJcblx0ICovXHJcblx0cHVibGljIG5hdmlnYXRlQnlVUkwoIHVybDogc3RyaW5nLCBtYWtlSGlzdG9yeUVudHJ5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IFtyb3V0ZSwgZmllbGRzXSA9IHRoaXMuZmluZFJvdXRlQnlVUkwoIHVybCk7XHJcblx0XHRpZiAoIXJvdXRlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlKVxyXG5cdFx0XHRcdHRoaXMuaGlnaGVyUm91dGVyU2VydmljZS5yLm5hdmlnYXRlQnlVUkwoIHVybCwgbWFrZUhpc3RvcnlFbnRyeSk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uYXZpZ2F0ZVRvUm91dGUoIHJvdXRlLCB1cmwsIGZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRlcyB0byBhIHJvdXRlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpZCBJRCBvZiB0aGUgcm91dGVcclxuXHQgKiBAcGFyYW0gcGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIHRoZSByb3V0ZSdzIGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIG1ha2VIaXN0b3J5RW50cnkgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIFJvdXRlciBzaG91bGQgY3JlYXRlIGEgbmV3IGVudHJ5IGluIHRoZVxyXG5cdCAqXHRcdGJyb3dzZXIncyBoaXN0b3J5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYXZpZ2F0ZUJ5SUQoIGlkOiBzdHJpbmcsIGZpZWxkcz86IFJvdXRlRmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcm91dGU6IFJvdXRlID0gdGhpcy5yb3V0ZXNCeUlELmdldCggaWQpO1xyXG5cdFx0aWYgKCFyb3V0ZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSlcclxuXHRcdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2Uuci5uYXZpZ2F0ZUJ5SUQoIGlkLCBmaWVsZHMpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGlmIHdlIGFyZSBjb250cm9sbGluZyB0aGUgYnJvd3NlciB3ZSBtYXkgbmVlZCB0byBzdWJzdGl0dXRlIHBhcmFtZXRlcnMgaW4gdGhlXHJcblx0XHQvLyByb3V0ZSdzIFVSTCBwYXR0ZXJuXHJcblx0XHRsZXQgdXJsOiBzdHJpbmc7XHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIpXHJcblx0XHR7XHJcblx0XHRcdHVybCA9IHJvdXRlLnVybFBhdHRlcm47XHJcblx0XHRcdGlmICh1cmwgJiYgZmllbGRzKVxyXG5cdFx0XHR7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5hdmlnYXRlVG9Sb3V0ZSggcm91dGUsIHVybCwgZmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRmluZHMgYSByb3V0ZSBieSBnb2luZyB0aHJvdWdoIHRoZSByb3V0ZSBoaWVyYXJjaHkgYW5kIHRyeWluZyB0byBtYXRjaCB0aGUgZ2l2ZW4gVVJMLlxyXG5cdCAqIElmIHRoZSByb3V0ZSBpcyBmb3VuZCwgdGhlIFVSTCBpcyBwYXJzZWQgYW5kIGFueSBwYXJhbWV0ZXJzIGFyZSBleHRyYWN0ZWQgZnJvbSBpdC5cclxuXHQgKiBAcGFyYW0gdXJsXHJcblx0ICovXHJcblx0cHJpdmF0ZSBmaW5kUm91dGVCeVVSTCggdXJsOiBzdHJpbmcpOiBbUm91dGUsIFJvdXRlRmllbGRzXVxyXG5cdHtcclxuXHRcdHJldHVybiBSb3V0ZXIuZmluZFJvdXRlUmVjdXJzaXZlQnlVUkwoIHVybCwgdGhpcy5yb3V0ZXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBMb29rcyBmb3IgYSByb3V0ZSBtYXRjaGluZyB0aGUgZ2l2ZW4gVVJMIGFtb25nIHRoZSBnaXZlbiBhcnJheSBvZiBSb3V0ZSBvYmplY3RzIGFuZFxyXG5cdCAqIHJlY3Vyc2l2ZWx5IGFtb25nIHRoZWlyIHN1Yi1yb3V0ZXMuXHJcblx0ICogQHBhcmFtIHVybCBVUkwgdG8gbWF0Y2hcclxuXHQgKiBAcGFyYW0gcm91dGVzIEFycmF5IG9mIFJvdXRlIG9iamVjdHMgdG8gbWF0Y2ggd2l0aCB0aGUgVVJMXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzdGF0aWMgZmluZFJvdXRlUmVjdXJzaXZlQnlVUkwoIHVybDogc3RyaW5nLCByb3V0ZXM6IFJvdXRlW10pOiBbUm91dGUsIFJvdXRlRmllbGRzXVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHJvdXRlIG9mIHJvdXRlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IG1hdGNoUmVzdWx0ID0gbWltdXJsLm1hdGNoKCB1cmwsIHJvdXRlLnVybFBhdHRlcm4pO1xyXG5cdFx0XHRpZiAobWF0Y2hSZXN1bHQpXHJcblx0XHRcdFx0cmV0dXJuIFtyb3V0ZSwgbWF0Y2hSZXN1bHQuZmllbGRzXTtcclxuXHRcdFx0ZWxzZSBpZiAocm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHJvb3RBbmRGaWVsZHMgPSBSb3V0ZXIuZmluZFJvdXRlUmVjdXJzaXZlQnlVUkwoIHVybCwgcm91dGUuc3ViUm91dGVzKTtcclxuXHRcdFx0XHRpZiAocm9vdEFuZEZpZWxkc1swXSlcclxuXHRcdFx0XHRcdHJldHVybiByb290QW5kRmllbGRzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFtudWxsLCBudWxsXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGVzIHRvIHRoZSBnaXZlbiByb3V0ZSBwYXNzaW5nIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpZCBJRCBvZiB0aGUgcm91dGVcclxuXHQgKiBAcGFyYW0gcGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIHRoZSByb3V0ZSdzIGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIG1ha2VIaXN0b3J5RW50cnkgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIFJvdXRlciBzaG91bGQgY3JlYXRlIGEgbmV3IGVudHJ5IGluIHRoZVxyXG5cdCAqXHRcdGJyb3dzZXIncyBoaXN0b3J5LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgbmF2aWdhdGVUb1JvdXRlKCByb3V0ZTogUm91dGUsIHVybDogc3RyaW5nLCBmaWVsZHM6IFJvdXRlRmllbGRzLFxyXG5cdFx0XHRcdFx0bWFrZUhpc3RvcnlFbnRyeTogYm9vbGVhbik6IFByb21pc2U8YW55PlxyXG5cdHtcclxuXHRcdC8vLy8gY2hlY2sgaWYgdGhlIG5ldyByb3V0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCByb3V0ZSBhbmQgZG9uJ3QgZG8gYW55dGhpbmdcclxuXHRcdC8vaWYgKHJvdXRlID09PSB0aGlzLmN1cnJSb3V0ZSlcclxuXHRcdC8vXHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBjdXJyZW50IHJvdXRlLCBhc2sgaXQgaWYgd2UgY2FuIGxlYXZlIGl0XHJcblx0XHRpZiAodGhpcy5jdXJyUm91dGUgJiYgdGhpcy5jdXJyUm91dGUubmF2RnJvbUZ1bmMpXHJcblx0XHR7XHJcblx0XHRcdGxldCByZXQ6IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+ID0gdGhpcy5jdXJyUm91dGUubmF2RnJvbUZ1bmMoKTtcclxuXHRcdFx0aWYgKHJldCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHRcdFx0cmV0ID0gYXdhaXQgKHJldCBhcyBQcm9taXNlPGJvb2xlYW4+KTtcclxuXHJcblx0XHRcdGlmICghcmV0KVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBhcmUgY29udHJvbGxpbmcgdGhlIGJyb3dzZXIgdXNlIEhpc3RvcnkgQVBJIHRvIGNoYW5nZSBzdGF0ZVxyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyICYmIG1ha2VIaXN0b3J5RW50cnkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdGF0ZTogUm91dGVTdGF0ZSA9IHsgcm91dGVJRDogcm91dGUuaWQsIHJvdXRlVVJMOiB1cmwsIGZpZWxkcyB9O1xyXG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSggc3RhdGUsIFwiXCIsIHVybCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByb3V0ZSBhbmQgZ2V0IGl0cyBjb250ZW50XHJcblx0XHR0aGlzLmN1cnJSb3V0ZSA9IHJvdXRlO1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9IHJvdXRlLm5hdlRvRnVuYyA/IHJvdXRlLm5hdlRvRnVuYyggZmllbGRzKSA6IG51bGw7XHJcblx0XHRpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGF3YWl0IChjb250ZW50IGFzIFByb21pc2U8YW55Pik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0Ly8gcmVxdWVzdCB0byBiZSB1cGRhdGVkIHNvIHRoYXQgb3VyIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBjYWxsZWRcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBlcnJvciB3YXMgcmFpc2VkIGJ5IG9uZSBvZiB0aGUgZGVzY2VuZGFudCBjb3BvbmVudHMuXHJcblx0cHVibGljIHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGNvbXBvbmVudFdpbGxNb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy5zaXRlLnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgdGhpcyk7XHJcblxyXG5cdFx0Ly8gcHVibGlzaCBvdXJzZWx2ZXMgYXMgYSByb3V0ZXIgc2VydmljZVxyXG5cdFx0dGhpcy5zaXRlLnB1Ymxpc2hTZXJ2aWNlKCBcIlJvdXRlclwiLCB0aGlzKTtcclxuXHJcblx0XHQvLyBpZiBpbnN0cnVjdGVkIHNvLCBzdWJzY3JpYmUgdG8gYSByb3V0ZXIgc2VydmljZSBpbXBsZW1lbnRlZCBieSBhbnkgb2YgY29tcG9uZW50c1xyXG5cdFx0Ly8gdXAgdGhlIGNoYWluXHJcblx0XHRpZiAodGhpcy5jaGFpbnNUb0hpZ2hlclJvdXRlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlID0gbmV3IG1pbS5SZWY8SVJvdXRlclNlcnZpY2U+KCk7XHJcblx0XHRcdHRoaXMuc2l0ZS5zdWJzY3JpYmVTZXJ2aWNlKCBcIlJvdXRlclwiLCB0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UsIHVuZGVmaW5lZCwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpbmQgdGhlIGZpcnN0IHJvdXRlIHRvIGRpc3BsYXlcclxuXHRcdGxldCBmaXJzdFJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzLmxlbmd0aCA+IDAgPyB0aGlzLnJvdXRlc1swXSA6IG51bGw7XHJcblx0XHRpZiAoIWZpcnN0Um91dGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmN1cnJSb3V0ZSA9IGZpcnN0Um91dGU7XHJcblx0XHRsZXQgY29udGVudDogYW55ID0gZmlyc3RSb3V0ZS5uYXZUb0Z1bmMgPyBmaXJzdFJvdXRlLm5hdlRvRnVuYygge30pIDogbnVsbDtcclxuXHRcdGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gXCJQbGVhc2Ugd2FpdCB3aGlsZSBjb250ZW50IGlzIGxvYWRpbmcuLi5cIjtcclxuXHRcdFx0KGNvbnRlbnQgYXMgUHJvbWlzZTxhbnk+KS50aGVuKCAoIGRlbGF5ZWRDb250ZW50OiBhbnkpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBkZWxheWVkQ29udGVudDtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZU1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gY29udGVudDtcclxuXHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIpXHJcblx0XHR7XHJcblx0XHRcdC8vIGVzdGFibGlzaCBiYXNlIFVSTCByZWxhdGl2ZSB0byB3aGljaCBhbGwgcGF0aHMgd2lsbCBiZSBjb25zaWRlcmVkXHJcblx0XHRcdGlmICghdGhpcy5iYXNlVVJMKVxyXG5cdFx0XHR7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHN1YnNjcmliZSB0byB0aGUgcG9wc3RhdGUgZXZlbnQgZm9yIG1vbml0b3JpbmcgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kc1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wc3RhdGUpO1xyXG5cclxuXHRcdFx0bGV0IHN0YXRlOiBSb3V0ZVN0YXRlID0geyByb3V0ZUlEOiBmaXJzdFJvdXRlLmlkLCByb3V0ZVVSTDogZmlyc3RSb3V0ZS51cmxQYXR0ZXJuLCBmaWVsZHM6IG51bGwgfTtcclxuXHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoIHN0YXRlLCBcIlwiLCBmaXJzdFJvdXRlLnVybFBhdHRlcm4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbnRyb2xzQnJvd3NlcilcclxuXHRcdHtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicG9wc3RhdGVcIiwgdGhpcy5vblBvcHN0YXRlKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmNoYWluc1RvSGlnaGVyUm91dGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNpdGUudW5zdWJzY3JpYmVTZXJ2aWNlKCBcIlJvdXRlclwiKTtcclxuXHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2l0ZS51bnB1Ymxpc2hTZXJ2aWNlKCBcIlJvdXRlclwiKTtcclxuXHRcdHRoaXMuc2l0ZS51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudmlydFJlbmRlciggdGhpcy5jdXJyUm91dGVDb250ZW50KTtcclxuXHR9XHJcblx0XHJcblxyXG5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBub2RlUGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly90aGlzLmVycm9yID0gZXJyO1xyXG5cdFx0Ly90aGlzLmVycm9yUGF0aCA9IG5vZGVQYXRoO1xyXG5cdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gXHJcblx0XHRcdDxkaXYgaWQ9XCJyb290RXJyb3JcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInBpbmtcIiwgZGlzcGxheTpcImZsZXhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwic3RhcnRcIn19PlxyXG5cdFx0XHRcdHtlcnJ9XHJcblx0XHRcdFx0e25vZGVQYXRoICYmIG5vZGVQYXRoLm1hcCggKG5hbWUpID0+IDxzcGFuPntuYW1lfTwvc3Bhbj4pfVxyXG5cdFx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogXCJWaXJ0dWFsXCIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuIFJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmdcclxuXHQgKiBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gZWl0aGVyIGNhbGxzXHJcblx0ICogdGhlIG91dGVyQ29udGVudEZ1bmMgaWYgZGVmaW5lZCBvciBqdXN0IHJldHVybnMgdGhlIGNvbnRlbnQgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjdXJyUm91dGVDb250ZW50XHJcblx0ICogQHJldHVybiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgdmlydFJlbmRlciggY3VyclJvdXRlQ29udGVudDogYW55KTogYW55XHJcblx0e1xyXG5cdFx0Ly9yZXR1cm4gdGhpcy5vdXRlckNvbnRlbnRGdW5jID8gdGhpcy5vdXRlckNvbnRlbnRGdW5jKCBjdXJyUm91dGVDb250ZW50KSA6IGN1cnJSb3V0ZUNvbnRlbnQ7XHJcblx0XHRyZXR1cm4gY3VyclJvdXRlQ29udGVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVhY3RzIG9uIHVzZXIgdXNpbmcgYmFjayBhbmQgZm9yd2FyZCBidXR0b25zLlxyXG5cdHByaXZhdGUgb25Qb3BzdGF0ZSA9ICggZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRsZXQgc3RhdGU6IFJvdXRlU3RhdGUgPSBlLnN0YXRlIGFzIFJvdXRlU3RhdGU7XHJcblx0XHRpZiAoIXN0YXRlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHN0YXRlLnJvdXRlSUQpXHJcblx0XHRcdHRoaXMubmF2aWdhdGVCeUlEKCBzdGF0ZS5yb3V0ZUlELCBzdGF0ZS5maWVsZHMpO1xyXG5cdFx0ZWxzZSBpZiAoc3RhdGUucm91dGVVUkwpXHJcblx0XHRcdHRoaXMubmF2aWdhdGVCeVVSTCggc3RhdGUucm91dGVVUkwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZyggXCJSb3V0ZSBzdGF0ZSBpbiBwb3BzdGF0ZSBldmVudCBoYXMgbmVpdGhlciByb3V0ZSBJRCBub3IgcGF0aC5cIik7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHJvdXRlciBjb250cm9scyB0aGUgYnJvd3NlcjsgdGhhdCBpcywgdXNlcyBIaXN0b3J5XHJcblx0Ly8gQVBJIHRvIHB1c2ggbmV3IHN0YXRlIGFuZCBpbnRlcmNlcHQgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kcy5cclxuXHRwcml2YXRlIGdldCBjb250cm9sc0Jyb3dzZXIoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmNvbnRyb2xzQnJvd3NlciA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMucHJvcHMuY29udHJvbHNCcm93c2VyO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgZmxhZyBpbmRpY2F0aW5nIHRoYXQgaWYgdGhpcyByb3V0ZXIgY2Fubm90IHJlc29sdmUgYSBwYXRoLCBpdCB3aWxsIGRlbGVnYXRlIHRvXHJcblx0Ly8gYSByb3V0ZXIgdXAgdGhlIGNvbXBvbmVudCBjaGFpbiAoaWYgdGhlcmUgaXMgb25lKS5cclxuXHRwcml2YXRlIGdldCBjaGFpbnNUb0hpZ2hlclJvdXRlcigpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hhaW5zVG9IaWdoZXJSb3V0ZXIgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aGlzLnByb3BzLmNoYWluc1RvSGlnaGVyUm91dGVyO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIGJhc2VkIG9uIHdoaWNoIGFsbCByb3V0ZSBwYXRocyB3aWxsIGJlIHJlc29sdmVkLlxyXG5cdHByaXZhdGUgZ2V0IGJhc2VVUkwoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuYmFzZVVSTCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHRoaXMucHJvcHMuYmFzZVVSTDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGZ1bmN0aW9uIHRoYXQgcmVuZGVycyB0aGUgY29udGVudCBvZiB0aGUgY3VycmVudCByb3V0ZSBpbnNpZGUgdGhlIHJvdXRlcidzIG93biBjb250ZW50LiBJZlxyXG5cdCAqIHRoaXMgbWVtYmVyIGlzIHVuZGVmaW5lZCwgb25seSB0aGUgY3VycmVudCByb3V0ZSdzIGNvbnRlbnQgd2lsbCBiZSBkaXNwbGF5ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHNldCBPdXRlckNvbnRlbnRGdW5jKCB2YWw6IFJvdXRlck91dGVyQ29udGVudFJlbmRlckZ1bmNUeXBlKSB7IHRoaXMub3V0ZXJDb250ZW50RnVuYyA9IHZhbDsgfVxyXG5cdHByaXZhdGUgb3V0ZXJDb250ZW50RnVuYzogUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGU7XHJcblxyXG5cdC8qKiBTZXRzIHRoZSBmdW5jdGlvbiB0aGF0IHJlbmRlcnMgYSBwcm9ncmVzcyBVSSB3aGlsZSB0aGUgcm91dGVyIGlzIGxvYWRpbmcgcm91dGUgY29udGVudC4gKi9cclxuXHRwdWJsaWMgc2V0IFByb2dyZXNzQ29udGVudEZ1bmMoIHZhbDogUHJvZ3Jlc3NDb250ZW50UmVuZGVyRnVuY1R5cGUpIHsgdGhpcy5wcm9ncmVzc0NvbnRlbnRGdW5jID0gdmFsOyB9XHJcblx0cHJpdmF0ZSBwcm9ncmVzc0NvbnRlbnRGdW5jOiBQcm9ncmVzc0NvbnRlbnRSZW5kZXJGdW5jVHlwZTtcclxuXHJcblx0Ly8gQSByb3V0ZXIgc2VydmljZSB0aGlzIHJvdXRlciB3aWxsIGRlbGVnYXRlIHRvIHdoZW4gaXQgY2Fubm90IHJlc29sdmUgYSBwYXRoLlxyXG5cdHByaXZhdGUgaGlnaGVyUm91dGVyU2VydmljZTogbWltLlJlZjxJUm91dGVyU2VydmljZT47XHJcblxyXG5cdC8vIE9yZGVyZWQgbGlzdCBvZiBSb3V0ZSBvYmplY3RzIC0gdXNlZCB0byBmaW5kIHJvdXRlcyBieSBtYXRjaGluZyBwYXRocy4gTm90ZSB0aGF0IHRoaXNcclxuXHQvLyBsaXN0IGlzIGFjdHVhbGx5IGEgaGllcmFyY2h5IGJlY2F1c2Ugcm91dGVzIGNhbiBjb250YWluIHN1Yi1yb3V0ZXMuXHJcblx0cHJpdmF0ZSByb3V0ZXM6IFJvdXRlW10gPSBbXTtcclxuXHJcblx0Ly8gTWFwIG9mIHJvdXRlIElEcyB0byBSb3V0ZSBvYmplY3RzLiBBbGwgcm91dGVzIHRoYXQgZGVmaW5lIGFuIElEIGFyZSBhZGRlZCB0byB0aGlzIG1hcCAtXHJcblx0Ly8gbm8gbWF0dGVyIGhvdyBkZWVwIGluIHRoZSBoaWVyYXJjaHkuXHJcblx0cHJpdmF0ZSByb3V0ZXNCeUlEID0gbmV3IE1hcDxzdHJpbmcsUm91dGU+KCk7XHJcblxyXG5cdC8vIEN1cnJlbnRseSBkaXNwbGF5ZWQgcm91dGUuXHJcblx0cHJpdmF0ZSBjdXJyUm91dGU6IFJvdXRlO1xyXG5cclxuXHQvLyBDb250ZW50IHBvdmlkZWQgYnkgdGhlIGN1cnJlbnQgcm91dGUuXHJcblx0cHJpdmF0ZSBjdXJyUm91dGVDb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIEVycm9yIGFuZCBjb21wb25lbnQgcGF0aCBpbiBjYXNlIGFuIGVycm9yIGhhcyBiZWVuIGNhdWdodC5cclxuXHRwcml2YXRlIGVycm9yOiBhbnkgPSBudWxsO1xyXG5cdHByaXZhdGUgZXJyb3JQYXRoOiBzdHJpbmdbXSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBMaW5rUHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgcHJvcGVydGllcyBmb3IgdGhlIExpbmsgY29tcG9uZW50IGJlY2F1c2UuIFRoZSBwcm9wZXJ0aWVzIGluXHJcbi8vIHRoaXMgaW50ZXJmYWNlIGRlZmluZSB0aGUgcm91dGU7IHRoZSBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBJSHRtbEFFbGVtZW50UHJvcHMgaW50ZXJmYWNlXHJcbi8vIGNvcnJlc3BvbmQgdG8gdGhlIHJlbGV2YW50IGF0dHJpYnV0ZXMgb2YgdGhlIDxhPiBET00gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlua1Byb3BzIGV4dGVuZHMgSUh0bWxBRWxlbWVudFByb3BzXHJcbntcclxuXHQvLyBQYXRoIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gYSByb3V0ZSBieSB0aGUgUm91dGVyLlxyXG5cdHJvdXRlVVJMPzogc3RyaW5nO1xyXG5cclxuXHQvLyBJRCBvZiB0aGUgcm91dGUgdGhhdCB3aWxsIGJlIG1hcHBlZCB0byBhIHJvdXRlIGJ5IHRoZSBSb3V0ZXIuXHJcblx0cm91dGVJRD86IHN0cmluZztcclxuXHJcblx0Ly8gT3B0aW9uYWwgcGFyYW1ldGVycyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSByb3V0ZSB3aGVuIHVzaW5nIHJvdXRlSUQuXHJcblx0ZmllbGRzPzogUm91dGVGaWVsZHM7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgc2hvdWxkIGJlIG1hZGUgYSBuZXcgZW50cnkgaW4gdGhlIGJyb3dzZXIncyBoaXN0b3J5O1xyXG5cdC8vIHRoYXQgaXMgdG8gYmUgc3ViamVjdCB0byBiYWNrIGFuZCBmb3J3YXJkIGJyb3dzZXIgY29tbWFuZHMuXHJcblx0bWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBMaW5rIGNsYXNzIGlzIGEgSlNYIGNvbXBvbmVudCB0aGF0IGFsbG93cyBjcmVhdGluZyBsaW5rcyBoYW5kbGVkIGJ5IGEgUm91dGVyIG9iamVjdC4gSXQgaXNcclxuLy8gaW1wbGVtZW50ZWQgYXMgYSBKU1ggY29tcG9uZW50IGJlY2F1c2UgaXRzIGludGVuZGVkIHVzZSBpcyB2ZXJ5IHNpbWlsYXIgdG8gdGhlIDxhPiBET01cclxuLy8gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBMaW5rIGV4dGVuZHMgbWltLkNvbXBvbmVudDxMaW5rUHJvcHM+XHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IExpbmtQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlciggcHJvcHMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLyBleHRyYWN0IG91ciBjdXN0b20gcGFyYW1ldGVycyBhbmQgbGVhdmUgb25seSB0aG9zZSB0aGF0IGFyZSA8YT4gYXR0cmlidXRlc1xyXG5cdFx0bGV0IHtyb3V0ZVVSTCwgcm91dGVJRCwgZmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5LCAuLi5yZXN0fSA9IHRoaXMucHJvcHM7XHJcblx0XHRyZXR1cm4gPGEgaHJlZj1cIiNcIiBjbGljaz17dGhpcy5vbkNsaWNrfSB7Li4ucmVzdH0+XHJcblx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG5cdFx0PC9hPjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkNsaWNrID0gKCBlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRsZXQgc2VydmljZTogSVJvdXRlclNlcnZpY2UgPSB0aGlzLnNpdGUuZ2V0U2VydmljZSggXCJSb3V0ZXJcIik7XHJcblx0XHRpZiAoIXNlcnZpY2UpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAodGhpcy5wcm9wcy5yb3V0ZUlEKVxyXG5cdFx0XHRzZXJ2aWNlLm5hdmlnYXRlQnlJRCggdGhpcy5wcm9wcy5yb3V0ZUlELCB0aGlzLnByb3BzLmZpZWxkcywgdGhpcy5wcm9wcy5tYWtlSGlzdG9yeUVudHJ5KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0c2VydmljZS5uYXZpZ2F0ZUJ5VVJMKCB0aGlzLnByb3BzLnJvdXRlVVJMLCB0aGlzLnByb3BzLm1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSByb3V0ZXJTZXJ2aWNlID0gbmV3IG1pbS5SZWY8SVJvdXRlclNlcnZpY2U+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7Vk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge0NvbXBCYXNlVk59IGZyb20gXCIuL0NvbXBCYXNlVk5cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBjb21wb25lbnQgaW1wbGVtZW50aW5nIHRoZSBJQ29tcG9uZW50PD4gaW50ZXJmYWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIENsYXNzVk4gZXh0ZW5kcyBDb21wQmFzZVZOPG1pbS5JQ29tcG9uZW50PiBpbXBsZW1lbnRzIG1pbS5JQ2xhc3NWTlxyXG57XHJcblx0Y29uc3RydWN0b3IoIGNvbXBDbGFzczogbWltLklDb21wb25lbnRDbGFzcywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBtaW0uVk5UeXBlLkNsYXNzQ29tcClcclxuXHJcblx0XHR0aGlzLmNvbXBDbGFzcyA9IGNvbXBDbGFzcztcclxuXHJcblx0XHQvLyBjb3B5IHByb3BlcnRpZXMgdG8gb3VyIG93biBvYmplY3QgZXhjbHVkaW5nIGZyYW1ld29yay1oYW5kbGVkIGtleSBhbmQgcmVmXHJcblx0XHR0aGlzLnByb3BzID0ge307XHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHByb3BWYWw6IGFueSA9IHByb3BzW3Byb3BOYW1lXTtcclxuXHRcdFx0XHRpZiAocHJvcFZhbCA9PT0gdW5kZWZpbmVkIHx8IHByb3BWYWwgPT09IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkIGFuZCBudWxsXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIga2V5IHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLmtleSA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcInJlZlwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIHJlZiBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5yZWYgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnByb3BzW3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90IHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW5cclxuXHRcdFx0Ly8gdW5kZWZpbmVkLlxyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGNoaWxkcmVuIGFzIHBhcnQgb2YgcHJvcHNcclxuXHRcdHRoaXMucHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHJcblx0XHQvLyBkZWZhdWx0IG5vZGUgbmFtZSBpcyB0aGUgY29tcG9uZW50J3MgY2xhc3MgbmFtZSBwbHVzIGtleSBpZiBzcGVjaWZpZWRcclxuXHRcdHRoaXMubmFtZSA9IHRoaXMuY29tcENsYXNzLm5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmtleSAhPT0gbnVsbClcclxuXHRcdFx0dGhpcy5uYW1lICs9IFwiIEBcIiArIHRoaXMua2V5O1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSUNsYXNzVk4gaW1wbGVtZW50YXRpb25cclxuXHRwdWJsaWMgZ2V0IENvbXBDbGFzcygpOiBtaW0uSUNvbXBvbmVudENsYXNzIHsgcmV0dXJuIHRoaXMuY29tcENsYXNzOyB9XHJcblx0cHVibGljIGdldCBDb21wKCk6IG1pbS5JQ29tcG9uZW50IHsgcmV0dXJuIHRoaXMuY29tcCBhcyBtaW0uSUNvbXBvbmVudDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGNvbXBvbmVudCBpbnN0YW5jZVxyXG5cdFx0dGhpcy5jb21wID0gbmV3IHRoaXMuY29tcENsYXNzKCB0aGlzLnByb3BzKTtcclxuXHRcdHRoaXMuY29tcC5zZXRTaXRlKCB0aGlzKTtcclxuXHRcdGlmICh0aGlzLmNvbXAuY29tcG9uZW50V2lsbE1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAuY29tcG9uZW50V2lsbE1vdW50KCk7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHVuc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkLiBXZSBjaGVjayB3aGV0aGVyIHRoZSByZWZlcmVuY2Ugc3RpbGwgcG9pbnRzXHJcblx0XHQvLyB0byBvdXIgY29tcG9uZW50IGJlZm9yZSBzZXR0aW5nIGl0IHRvIHVuZGVmaW5lZC4gSWYgdGhlIHNhbWUgUmVmIG9iamVjdCBpcyB1c2VkIGZvclxyXG5cdFx0Ly8gbW9yZSB0aGFuIG9uZSBjb21wb25lbnRzIChhbmQvb3IgZWxlbWVudHMpIGl0IGNhbiBoYXBwZW4gdGhhdCB0aGUgcmVmZXJlbmNlIGlzIGNoYW5nZWRcclxuXHRcdC8vIGJlZm9yZSBvdXIgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbXAuY29tcG9uZW50V2lsbFVubW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xyXG5cclxuXHRcdHRoaXMuY29tcC5zZXRTaXRlKCBudWxsKTtcclxuXHRcdHRoaXMuY29tcCA9IHVuZGVmaW5lZDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGUgY29tcG9uZW50IGNsYXNzIG5hbWUgaXMgdGhlIHNhbWVcclxuXHRcdHJldHVybiB0aGlzLmNvbXBDbGFzcyA9PT0gKG5ld1ZOIGFzIENsYXNzVk4pLmNvbXBDbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGFcclxuXHQvLyBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0aW5nIHN1Yi1ub2RlcyBpcyBuZWNlc3NhcnkgYW5kXHJcblx0Ly8gZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3Q2xhc3NWTiA9IG5ld1ZOIGFzIENsYXNzVk47XHJcblxyXG5cdFx0Ly8gbGV0IHRoZSBjb21wb25lbnQga25vdyBhYm91dCB0aGUgbmV3IHByb3BlcnRpZXMgKGlmIGl0IGlzIGludGVyZXN0ZWQgaW4gdGhlbSlcclxuXHRcdGxldCBzaG91bGRSZW5kZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdFx0aWYgKHRoaXMuY29tcC5zaG91bGRDb21wb25lbnRVcGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0c2hvdWxkUmVuZGVyID0gdGhpcy5jb21wLnNob3VsZENvbXBvbmVudFVwZGF0ZSggbmV3Q2xhc3NWTi5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gaWYgcmVmZXJlbmNlIHNwZWNpZmljYXRpb24gY2hhbmdlZCB0aGVuIHNldCBvciB1bnNldCBpdCBhcyBuZWNlc3NhcnlcclxuXHRcdGlmIChuZXdDbGFzc1ZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIG9iamVjdFxyXG5cdFx0XHR0aGlzLnJlZiA9IG5ld0NsYXNzVk4ucmVmO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVmZXJlbmNlIGlzIG5vdyBzcGVjaWZpZWQsIHNldCBpdCBub3c7IG5vdGUgdGhhdCB3ZSBhbHJlYWR5IGRldGVybWluZWQgdGhhdFxyXG5cdFx0XHQvLyB0aGUgcmVmZXJlbmNlIG9iamVjdCBpcyBkaWZmZXJlbnQuXHJcblx0XHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobmV3Q2xhc3NWTi5yZWYgPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gd2Uga25vdyB0aGF0IG91ciByZWZlcmVuY2UgaXMgZGVmaW5lZCwgc28gdW5zZXQgaXRcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5jb21wKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3Q2xhc3NWTi5rZXk7XHJcblxyXG5cdFx0Ly8gc2hhbGxvdyBjb3B5IHRoZSBuZXcgcHJvcGVydGllcyBmcm9tIHRoZSBvdGhlciBub2RlIHRvIG91ciBvYmplY3QuIFRoaXMgaXMgbmVlZGVkXHJcblx0XHQvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgZ290IG91ciBwcm9wcyBvYmplY3QgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCB3aWxsIGtlZXBcclxuXHRcdC8vIHdvcmtpbmcgd2l0aCBpdCAtIGVzcGVjaWFsbHkgaWYgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlIHNob3VsZENvbXBvbmVudFVwZGF0ZSBtZXRob2QuXHJcblx0XHRPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5mb3JFYWNoKCBrZXkgPT4gZGVsZXRlIHRoaXMucHJvcHNba2V5XSk7XHJcblx0XHRPYmplY3QuYXNzaWduKCB0aGlzLnByb3BzLCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBzaW5jZSB0aGUgcmVuZGVyaW5nIHByb2R1Y2VkIGJ5IGEgZnVuY3Rpb24gbWF5IGRlcGVuZCBvbiBmYWN0b3JzIGJleW9uZCBwcm9wZXJ0aWVzLFxyXG5cdFx0Ly8gd2UgYWx3YXlzIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQ6IGZhbHNlLCBzaG91bGRSZW5kZXIgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVHlwZSBvZiB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG5cdHByaXZhdGUgY29tcENsYXNzOiBtaW0uSUNvbXBvbmVudENsYXNzO1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc3BlY2lmaWVkIGFzIGEgXCJyZWZcIiBwcm9wZXJ0eS4gUmVmZXJlbmNlIG9iamVjdCBpc1xyXG5cdC8vIHNldCB3aGVuIGFuYWx5emluZyBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgZHVyaW5nIHVwZGF0ZS4gUmVmZXJlbmNlIHZhbHVlIGlzXHJcblx0Ly8gc2V0IGR1cmluZyBtb3VudCBhbmQgdW5zZXQgZHVyaW5nIHVubW91bnQuXHJcblx0cHJpdmF0ZSByZWY6IG1pbS5SZWY8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtETiwgVk59IGZyb20gXCIuL1ZOXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgQ29tcEJhc2VWTiBpcyBhIGJhc2UgY2xhc3MgZm9yIEluc3RhbmNlVk4gYW5kIENsYXNzVk4uIEl0IHByb3ZpZGVzIGNvbW1vbiBmdW5jdGlvbmFsaXR5XHJcbi8vIGluIHRlcm1zIG9mIHVwZGF0ZSByZXF1ZXN0cyBhbmQgbGlmZWN5Y2xlIG1hbmFnZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcEJhc2VWTjxUQ29tcCBleHRlbmRzIG1pbS5JQ29tcG9uZW50PiBleHRlbmRzIFZOIGltcGxlbWVudHMgbWltLklDb21wb25lbnRTaXRlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdHlwZTogbWltLlZOVHlwZSlcclxuXHR7XHJcblx0XHRzdXBlciggdHlwZSlcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRpZiAodGhpcy5jb21wID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBcInJlbmRlcigpIHdhcyBjYWxsZWQgb24gdW5tb3VudGVkIGNvbXBvbmVudC5cIik7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5yZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdXBwb3J0c0Vycm9ySGFuZGxpbmcoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuaGFuZGxlRXJyb3IgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb21wLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaGFzIGJlZW4gaW5zZXJ0ZWRcclxuXHQvLyBpbnRvIHRoZSBET00gdHJlZS5cclxuXHRwdWJsaWMgZGlkTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbXAuY29tcG9uZW50RGlkTW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC5jb21wb25lbnREaWRNb3VudCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaGFzIGJlZW4gdXBkYXRlZFxyXG5cdC8vIGluIHRoZSBET00gdHJlZS5cclxuXHRwdWJsaWMgZGlkVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jb21wLmNvbXBvbmVudERpZFVwZGF0ZSlcclxuXHRcdFx0dGhpcy5jb21wLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0T3duRE4oKTogRE5cclxuXHR7XHJcblx0XHQvLyBjb21wb25lbnRzIGRvbid0IGhhdmUgdGhlaXIgb3duIERPTSBub2RlXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlLlxyXG5cdHByb3RlY3RlZCBjb21wOiBUQ29tcDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUeXBlIG9mIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gUHJvcFR5cGVcclxue1xyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRVbmtub3duID0gMCxcclxuXHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdEF0dHIgPSAxLFxyXG5cclxuXHQvLyBFdmVudCBsaXN0ZW5lcnMgc2V0IHVzaW5nIEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lclxyXG5cdEV2ZW50ID0gMixcclxuXHJcblx0Ly8gQ3VzdG9tIGF0dHJpYnV0ZXMgZm9yIHdoaWNoIGhhbmRsZXIgZmFjdG9yaWVzIGFyZSByZWdpc3RlcmVkXHJcblx0Q3VzdG9tQXR0ciA9IDMsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgaW50ZXJmYWNlIGRlc2NyaWJpbmcgaW5mb3JtYXRpb24ga2VwdCBhYm91dCBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgcHJvcGVydHkuXHJcblx0dHlwZTogUHJvcFR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGF0dHJpYnV0ZXMgdGhhdCBjb250YWlucyBmdW5jdGlvbnMgZm9yIHNldHRpbmcsIGRpZmZpbmcsIHVwZGF0aW5nIGFuZFxyXG4vLyByZW1vdmluZyBhdHRyaWJ1dGUocykgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lIGFuZCBwcm9wVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0c2V0PzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNvbXBhcmVzIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuXHQvLyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSB1cGRhdGVGdW5jIGZ1bmN0aW9uLiBJZiB1bmRlZmluZWQgaXMgcmV0dXJuZWQsIHRoZSB2YWx1ZSBvZiB0aGVcclxuXHQvLyBhdHRyaWJ1dGUgd2lsbCBub3QgY2hhbmdlICh0aGF0IG1lYW5zIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIGFyZSBlcXVhbCkuIElmIHRoaXNcclxuXHQvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgcHJvcGVydHkgdmFsdWVzIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5nIGFuZCBjb21wYXJlZCBhcyBzdHJpbmdzLlxyXG5cdC8vIElmIHRoZXNlIHN0cmluZ3MgYXJlIGRpZmZlcmVudCwgdGhlIHN0cmluZyBjb3JyZXNwb25kaW5nIHRvIHRoZSAgbmV3IHZhbHVlIGlzIHJldHVybmVkLlxyXG5cdGRpZmY/OiAoYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpID0+IGFueTtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCB1cGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGJhc2VkIG9uIHRoZSBvYmplY3QgdGhhdCB3YXMgcmV0dXJuZWRcclxuXHQvLyBmcm9tIHRoZSBkaWZmIGZ1bmN0aW9uLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBzZXQgZnVuY3Rpb24gaXMgdXNlZC4gSWZcclxuXHQvLyB0aGUgc2V0IGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkIGVpdGhlciwgdGhlIERPTSBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzXHJcblx0Ly8gYXR0cmlidXRlIG5hbWUgYW5kIHVwZGF0ZVZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHVwZGF0ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnJlbW92ZUF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZS5cclxuXHRyZW1vdmU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuXHQvLyBUaGUgYWN0dWFsIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZS4gVGhpcyBpcyBzb21ldGltZXMgbmVlZGVkIGlmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjYW5ub3QgYmVcclxuXHQvLyB1c2VkIGFzIHByb3BlcnR5IG5hbWUgLSBmb3IgZXhhbXBsZSwgaWYgYXR0cmlidXRlIG5hbWUgY29udGFpbnMgY2hhcmFjdGVycyBub3QgYWxsb3dlZCBpblxyXG5cdC8vIFR5cGVTY3JpcHQgaWRlbnRpZmllciAoZS5nLiBkYXNoKS5cclxuXHRhdHRyTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgZXZlbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXZlbnQgYnViYmxlcy4gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgYnViYmxlLCB0aGUgZXZlbnQgaGFuZGxlclxyXG5cdC8vIG11c3QgYmUgc2V0IG9uIHRoZSBlbGVtZW50IGl0c2VsZjsgb3RoZXJ3aXNlLCB0aGUgZXZlbnQgaGFuZGxlciBjYW4gYmUgc2V0IG9uIHRoZSByb290XHJcblx0Ly8gYW5jaG9yIGVsZW1lbnQsIHdoaWNoIGFsbG93cyBoYXZpbmcgYSBzaW5nbGUgZXZlbnQgaGFuZGxlciByZWdpc3RlcmVkIGZvciBtYW55IGVsZW1lbnRzLFxyXG5cdC8vIHdoaWNoIGlzIG1vcmUgcGVyZm9ybWFudC5cclxuXHRpc0J1YmJsaW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRmFjdG9yeSBvYmplY3QgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuXHJcblx0ZmFjdG9yeTogbWltLklDdXN0b21BdHRyaWJ1dGVGYWN0b3J5PGFueT47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFR5cGUgY29tYmluaW5nIGluZm9ybWF0aW9uIGFib3V0IHJlZ3VsYXIgYXR0cmlidXRlcyBvciBldmVudHMgb3IgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBQcm9wSW5mbyA9IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBFeHBvcnRlZCBjbGFzcyB0aGF0IHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBzZXR0aW5nLCB1cGRhdGluZyBhbmQgcmVtb3ZpbmcgRWxlbWVudFxyXG4vLyBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gcHJvcGVydHkgbmFtZXMuXHJcbi8vXHJcbi8vIEVsZW1lbnQgYXR0cmlidXRlcyBhcmUgZGV0ZXJtaW5lZCB1c2luZyBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgRWxtVk4gbWV0aG9kcy4gU29tZVxyXG4vLyBwcm9wZXJ0aWVzIGFsbG93IHVzaW5nIG5vbi10cml2aWFsIHR5cGVzLCBlLmcuIGFycmF5cyBvciBvYmplY3RzLCBhbmQgdGh1cyBjYW5ub3QgYmUgc2ltcGx5XHJcbi8vIGhhbmRsZWQgdXNpbmcgdGhlIEVsZW1lbnQuc2V0QXR0cmlidXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1BdHRyXHJcbntcclxuXHQvLyBPYmplY3QgdGhhdCBtYXBzIHByb3BlcnR5IG5hbWVzIHRvIFByb3BJbmZvLWRlcml2ZWQgb2JqZWN0cy5cclxuXHRwcml2YXRlIHN0YXRpYyBwcm9wSW5mb3M6IHtbUDpzdHJpbmddOiBQcm9wSW5mb30gPVxyXG5cdHtcclxuXHRcdC8vIGF0dHJpYnV0ZXMgLSBvbmx5IHRob3NlIGF0dHJpYnV0ZXMgYXJlIGxpc3RlZCB0aGF0IGhhdmUgbm9uLXRyaXZpYWwgdHJlYXRtZW50XHJcblx0XHRcInN0eWxlXCI6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRTdHlsZVByb3AsIGRpZmY6IGRpZmZTdHlsZVByb3AsIHVwZGF0ZTogdXBkYXRlU3R5bGVQcm9wIH0sXHJcblx0XHRcInZhbHVlXCI6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRWYWx1ZVByb3AsIGRpZmY6IGRpZmZWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlVmFsdWVQcm9wIH0sXHJcblx0XHRcImRlZmF1bHRWYWx1ZVwiOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0VmFsdWVQcm9wLCBkaWZmOiBkaWZmRGVmYXVsdFZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVEZWZhdWx0VmFsdWVQcm9wIH0sXHJcblx0XHRcImNoZWNrZWRcIjogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldENoZWNrZWRQcm9wLCBkaWZmOiBkaWZmQ2hlY2tlZFByb3AsIHJlbW92ZTogcmVtb3ZlQ2hlY2tlZFByb3AgfSxcclxuXHRcdFwiZGVmYXVsdENoZWNrZWRcIjogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldENoZWNrZWRQcm9wLCBkaWZmOiBkaWZmRGVmYXVsdFZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVEZWZhdWx0VmFsdWVQcm9wIH0sXHJcblxyXG5cdFx0Ly8gZXZlbnQgbGlzdGVuZXJzIC0gb25seSB0aG9zZSBldmVudCBhcmUgbGlzdGVkIHRoYXQgYXJlIG5vbi1idWJibGluZ1xyXG5cdFx0XCJtb3VzZWVudGVyXCI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRcIm1vdXNlbGVhdmVcIjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCwgaXNCdWJibGluZzogZmFsc2UgfSxcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlclByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXSA9IGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyBnZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lOiBzdHJpbmcpOiBQcm9wSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBFbG1BdHRyLnByb3BJbmZvc1twcm9wTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHVibGljIHN0YXRpYyBzZXRBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIHByb3BWYWw6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIiA/IHByb3BWYWwgOiBwcm9wVmFsLnRvU3RyaW5nKCkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5zZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRpbmZvLnNldCggZWxtLCBhdHRyTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdHlwZW9mIHByb3BWYWwgPT09IFwic3RyaW5nXCIgPyBwcm9wVmFsIDogcHJvcFZhbC50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIG9mIHRoZSBwcm9wZXJ0eSBhcmUgZGlmZmVyZW50IGFuZCBzZXRzIHRoZVxyXG5cdC8vIHVwZGF0ZWQgdmFsdWUgdG8gdGhlIGVsZW1lbnQncyBhdHRyaWJ1dGUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGUgaGFzIGJlZW4gcGVyZm9ybWVkIGFuZFxyXG5cdC8vIGZhbHNlIGlmIG5vIGNoYW5nZSBpbiBwcm9wZXJ0eSB2YWx1ZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gZ2V0IHByb3BlcnR5IGluZm8gb2JqZWN0XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGlzIGlzIG5vdCBhIHNwZWNpYWwgY2FzZSAocHJvcGVydHkgaXMgbm90IGluIG91ciBsaXN0KSBqdXN0IGNvbXBhcmUgdGhlbSBhbmRcclxuXHRcdFx0Ly8gaWYgdGhleSBhcmUgZGlmZmVyZW50IHNldCB0aGUgYXR0cmlidXRlIHRvIHRoZSBuZXcgdmFsdWUuXHJcblx0XHRcdGlmIChvbGRQcm9wVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHR5cGVvZiBuZXdQcm9wVmFsID09PSBcInN0cmluZ1wiID8gbmV3UHJvcFZhbCA6IG5ld1Byb3BWYWwudG9TdHJpbmcoKSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbXBhcmUgb2xkIGFuZCBuZXcgdmFsdWUgdXNpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpZiBkZWZpbmVkOyBpZiBub3QsIGp1c3QgY29tcGFyZVxyXG5cdFx0Ly8gdGhlIHR3byB2YWx1ZXMgYW5kIGlmIHRoZXkgYXJlIGRpZmZlcmVudCB1c2UgdGhlIG5ldyBvbmUgYXMgYSB2YWx1ZSB0byB1cGRhdGUgd2l0aC5cclxuXHRcdC8vIE5vdGUgdGhhdCB0aGUgbmVpdGhlciBvbGQgbm9yIG5ldyB2YWx1ZXMgY2FuIGJlIHVuZGVmaW5lZCBvciBudWxsLlxyXG5cdFx0bGV0IHVwZGF0ZVZhbDogYW55O1xyXG5cdFx0aWYgKGluZm8uZGlmZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSBpbmZvLmRpZmYoIHByb3BOYW1lLCBvbGRQcm9wVmFsLCBuZXdQcm9wVmFsKTtcclxuXHJcblx0XHRcdC8vIGlmIHVwZGF0ZVZhbHVlIGlzIHVuZGVmaW5lZCB0aGVuIG5vIGNoYW5nZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRcdFx0aWYgKHVwZGF0ZVZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG9sZFByb3BWYWwgIT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHVwZGF0ZVZhbCA9IG5ld1Byb3BWYWw7XHJcblxyXG5cdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdC8vIGlmIHVwZGF0ZSBtZXRob2QgaXMgZGVmaW5lZCB1c2UgaXQ7IG90aGVyd2lzZSwgcmVtb3ZlIHRoZSBvbGQgdmFsdWUgYW5kIHNldCB0aGUgbmV3IG9uZVxyXG5cdFx0aWYgKGluZm8udXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdGluZm8udXBkYXRlKCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiByZW1vdmUgbWV0aG9kIGlzIGRlZmluZWQsIHVzZSBpdC4gTm90ZSB0aGF0IGlmIHJlbW92ZSBtZXRob2QgaXMgbm90IGRlZmluZWRcclxuXHRcdFx0Ly8gd2UgZG9uJ3QgdXNlIGVsbS5yZW1vdmVBdHRyaWJ1dGUgdG8gc2F2ZSB0aW1lIChhcyB0aGUgZm9sbG93aW5nIGluZm8uc2V0IG9yXHJcblx0XHRcdC8vIGVsbS5zZXRBdHRyaWJ1dGUgd2lsbCBvdmVycmlkZSBpdCBhbnl3YXkuXHJcblx0XHRcdGlmIChpbmZvLnJlbW92ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggYXR0ck5hbWUsIHR5cGVvZiB1cGRhdGVWYWwgPT09IFwic3RyaW5nXCIgPyB1cGRhdGVWYWwgOiB1cGRhdGVWYWwudG9TdHJpbmcoKSk7XHJcblx0XHR9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZXJlIHdhcyBjaGFuZ2UgaW4gYXR0cmlidXRlIHZhbHVlLlxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIHByb3BOYW1lKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0XHRpZiAoYXR0ck5hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmZvLnJlbW92ZSggZWxtLCBhdHRyTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIGF0dHJOYW1lKTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vIFJlZ2lzdGVyIGV2ZW50cyB3aXRoIHNwZWNpYWwgbmFtZXNcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRJbnNlcnRcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0Q2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZFJlbW92ZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lclByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVDYXB0dXJlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJDYXB0dXJlUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lckNhcHR1cmVQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtcmVtb3ZlXCIgfSk7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBzdHlsZSBwcm9wZXJ0eS4gU3R5bGUgcHJvcGVydHkgY2FuIGJlIHNwZWNpZmllZCBlaXRoZXIgYXMgYSBzdHJpbmcgb3IgYXMgdGhlXHJcbi8vIENTU1N0eWxlRGVjbGFyYXRpb24gb2JqZWN0LiBJZiB0aGUgb2xkIGFuZCBuZXcgc3R5bGUgcHJvcGVydHkgdmFsdWVzIGFyZSBvZiBkaWZmZXJlbnQgdHlwZXNcclxuLy8gdGhlIGRpZmYgZnVuY3Rpb24gcmV0dXJucyB0aGUgbmV3IHN0eWxlIHZhbHVlLiBJZiBib3RoIGFyZSBvZiB0aGUgc3RyaW5nIHR5cGUsIHRoZW4gdGhlIG5ld1xyXG4vLyBzdHJpbmcgdmFsdWUgaXMgcmV0dXJuZWQuIElmIGJvdGggYXJlIG9mIHRoZSBDU1NTdHlsZURlY2xhcmF0aW9uIHR5cGUsIHRoZW4gYW4gb2JqZWN0IGlzXHJcbi8vIHJldHVybmVkIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byBzdHlsZSBpdGVtcyB0aGF0IHNob3VsZCBiZSBjaGFuZ2VkLiBGb3IgdXBkYXRlZCBpdGVtcywgdGhlXHJcbi8vIGtleSB2YWx1ZSBpcyBmcm9tIHRoZSBuZXcgc3R5bGUgdmFsdWU7IGZvciByZW1vdmVkIGl0ZW1zLCB0aGUga2V5IHZhbHVlIGlzIHVuZGVmaW5lZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldFN0eWxlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHRpZiAocHJvcFZhbCA9PT0gdW5kZWZpbmVkIHx8IHByb3BWYWwgPT09IG51bGwpXHJcblx0XHRlbG0ucmVtb3ZlQXR0cmlidXRlKCBcInN0eWxlXCIpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRjb25zdCBlbG1TdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IChlbG0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlO1xyXG5cdFx0Zm9yKCBsZXQga2V5IGluIHByb3BWYWwgYXMgbWltLlN0eWxlUHJvcFR5cGUpXHJcblx0XHR7XHJcblx0XHRcdGNvbnN0IGtleVZhbDogYW55ID0gcHJvcFZhbFtrZXldO1xyXG5cdFx0XHRpZiAoZWxtU3R5bGVba2V5XSAhPT0ga2V5VmFsKVxyXG5cdFx0XHRcdGVsbVN0eWxlW2tleV0gPSBrZXlWYWw7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmU3R5bGVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGFueVxyXG57XHJcblx0Y29uc3Qgb2xkUHJvcFR5cGU6IHN0cmluZyA9IHR5cGVvZiBvbGRQcm9wVmFsO1xyXG5cdGNvbnN0IG5ld1Byb3BUeXBlOiBzdHJpbmcgPSB0eXBlb2YgbmV3UHJvcFZhbDtcclxuXHRpZiAob2xkUHJvcFR5cGUgIT09IG5ld1Byb3BUeXBlKVxyXG5cdFx0cmV0dXJuIG5ld1Byb3BWYWw7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGNvbnN0IG9sZFN0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IG9sZFByb3BWYWwgYXMgbWltLlN0eWxlUHJvcFR5cGU7XHJcblx0XHRjb25zdCBuZXdTdHlsZTogbWltLlN0eWxlUHJvcFR5cGUgPSBuZXdQcm9wVmFsIGFzIG1pbS5TdHlsZVByb3BUeXBlO1xyXG5cclxuXHRcdGNvbnN0IHVwZGF0ZVZhbDogbWltLlN0eWxlUHJvcFR5cGUgPSB7fTtcclxuXHRcdGxldCBjaGFuZ2VzRXhpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgb2xkIHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG5ldyBvbmUuIFRoZXNlXHJcblx0XHQvLyB3aWxsIGJlIHJlbW92ZWQuXHJcblx0XHRmb3IoIGxldCBrZXkgaW4gb2xkU3R5bGUpXHJcblx0XHR7XHJcblx0XHRcdGNvbnN0IG9sZFZhbDogYW55ID0gb2xkU3R5bGVba2V5XTtcclxuXHRcdFx0Y29uc3QgbmV3VmFsOiBhbnkgPSBuZXdTdHlsZVtrZXldO1xyXG5cdFx0XHRpZiAobmV3VmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGFuZ2VzRXhpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKG5ld1ZhbCAhPT0gb2xkVmFsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2hhbmdlc0V4aXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHR1cGRhdGVWYWxba2V5XSA9IG5ld1ZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBrZXlzIGluIHRoZSBuZXcgc3R5bGUgb2JqZWN0IGFuZCBmaW5kIHRob3NlIHRoYXQgYXJlIG5vdCBpbiB0aGUgb2xkIG9uZS4gVGhlc2VcclxuXHRcdC8vIHdpbGwgYmUgYWRkZWQuXHJcblx0XHRmb3IoIGxldCBrZXkgaW4gbmV3U3R5bGUpXHJcblx0XHR7XHJcblx0XHRcdGNvbnN0IG9sZFZhbDogYW55ID0gb2xkU3R5bGVba2V5XTtcclxuXHRcdFx0aWYgKG9sZFZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2hhbmdlc0V4aXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHR1cGRhdGVWYWxba2V5XSA9IG5ld1N0eWxlW2tleV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY2hhbmdlc0V4aXN0ID8gdXBkYXRlVmFsIDogdW5kZWZpbmVkO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTdHlsZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgdXBkYXRlVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHRjb25zdCBlbG1TdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IChlbG0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlO1xyXG5cdGZvciggbGV0IGtleSBpbiB1cGRhdGVWYWwgYXMgT2JqZWN0KVxyXG5cdHtcclxuXHRcdGNvbnN0IGtleVZhbDogYW55ID0gdXBkYXRlVmFsW2tleV07XHJcblx0XHRpZiAoa2V5VmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbVN0eWxlW2tleV0gPSBudWxsO1xyXG5cdFx0XHQvL2VsbVN0eWxlW2tleV0gPSBcImluaXRpYWxcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0ZWxtU3R5bGVba2V5XSA9IGtleVZhbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBmaXJzdCBzdHlsZSBpcyBhIGNvbXBsZXRlIHN1YnNldCBvZiB0aGUgc2Vjb25kIG9uZTsgdGhhdCBpcyBrZXlzXHJcbi8vLy8gaW4gdGhlIGZpcnN0IHN0eWxlIGFyZSBhbGwgZm91bmQgYW5kIGhhdmUgdGhlIHNhbWUgdmFsdWVzIGluIHRoZSBzZWNvbmQgc3R5bGUuXHJcbi8vZnVuY3Rpb24gaXNTdHlsZTFTdWJzZXRPZlN0eWxlMiggc3R5bGUxOiBPYmplY3QsIHN0eWxlMjogT2JqZWN0KTogYm9vbGVhblxyXG4vL3tcclxuLy9cdGZvciggbGV0IGtleTEgaW4gc3R5bGUxKVxyXG4vL1x0e1xyXG4vL1x0XHRpZiAoc3R5bGUxW2tleTFdICE9PSBzdHlsZTJba2V5MV0pXHJcbi8vXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG4vL1x0fVxyXG5cclxuLy9cdHJldHVybiB0cnVlO1xyXG4vL31cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIHZhbHVlIHByb3BlcnR5LiBJbnN0ZWFkIG9mIHNldHRpbmcgdmFsdWUgcHJvcGVydHkgYXMgYW4gYXR0cmlidXRlIHdlIHNldCB0aGUgdmFsdWVcclxuLy8gZmllbGQgb24gdGhlIGVsZW1lbnQuIFRoZSBzZXQgYW5kIHVwZGF0ZSBtZXRob2RzIHdvcmsgdGhlIHNhbWUgd2F5LiBXZSBkZWZpbmUgdGhlIHJlbW92ZSBtZXRob2RcclxuLy8gYnkgc2V0dGluZyB0aGUgZWxtLnZhbHVlIGZpZWxkIHRvIG51bGwuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiBzZXRWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkudmFsdWUgPSBwcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmVmFsdWVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGJ5IGFsd2F5cyByZXR1cm5pbmcgdGhlIG5ldyBwcm9wZXJ0eSB2YWx1ZSB3ZSBjYXVzZSB0aGUgdmFsdWUgdG8gYWx3YXlzIGJlIHVwZGF0ZWQgdG9cclxuXHQvLyB0aGF0IG9mIHRoZSBuZXcgcHJvcGVydHkuIFdlIHdhbnQgYWx3YXlzIHRvIHNldCB0aGlzIHZhbHVlIHRvIHRoZSBlbGVtZW50IGJlY2F1c2UgdGhlXHJcblx0Ly8gZWxlbWVudCdzIHZhbHVlIG1heSBoYXZlIGNobmdlZCAoYnkgdGhlIHVzZXIgb3IgcHJvZ3JhbW1hdGljYWxseSkuXHJcblx0cmV0dXJuIG5ld1Byb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkudmFsdWUgPSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgZGVmYXVsdFZhbHVlIHByb3BlcnR5LiBUaGUgZGVmYXVsdFZhbHVlIHByb3BlcnR5IHdvcmtzIGFzIGEgdmFsdWUgcHJvcGVydHkgd2hlbiB0aGVcclxuLy8gZWxlbWVudCBpcyBmaXJzdCBtb3VudGVkIGFuZCBpcyBpZ25vcmVkIHVwb24gdXBkYXRlcyBhbmQgcmVtb3ZhbHMuIFRoaXMgYWxsb3dzIHVzaW5nXHJcbi8vIGRlZmF1bHRWYWx1ZSB0byBpbml0aWFsaXplIHRoZSBjb250cm9sIHZhbHVlIG9uY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiBkaWZmRGVmYXVsdFZhbHVlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSByZXR1cm5pbmcgdW5kZWZpbmVkIHdlIGluZGljYXRlIHRoYXQgbm8gY2hhbmdlcyB3ZXJlIG1hZGUgdG8gdGhlIHByb3BlcnR5IGFuZCB0aHVzIHRoZVxyXG5cdC8vIHVwZGF0ZSB3aWxsIG5vdCBiZSBjYWxsZWRcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVEZWZhdWx0VmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHQvLyBkbyBub3RoaW5nXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBjaGVja2VkIHByb3BlcnR5LiBJbnN0ZWFkIG9mIHNldHRpbmcgY2hlY2tlZCBwcm9wZXJ0eSBhcyBhbiBhdHRyaWJ1dGUgd2Ugc2V0IHRoZVxyXG4vLyBjaGVja2VkIGZpZWxkIG9uIHRoZSBlbGVtZW50LiBUaGUgc2V0IGFuZCB1cGRhdGUgbWV0aG9kcyB3b3JrIHRoZSBzYW1lIHdheS4gV2UgZGVmaW5lIHRoZSByZW1vdmVcclxuLy8gbWV0aG9kIGJ5IHNldHRpbmcgdGhlIGVsbS5jaGVja2VkIGZpZWxkIHRvIG51bGwuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiBzZXRDaGVja2VkUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS5jaGVja2VkID0gcHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZkNoZWNrZWRQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGJ5IGFsd2F5cyByZXR1cm5pbmcgdGhlIG5ldyBwcm9wZXJ0eSB2YWx1ZSB3ZSBjYXVzZSB0aGUgdmFsdWUgdG8gYWx3YXlzIGJlIHVwZGF0ZWQgdG9cclxuXHQvLyB0aGF0IG9mIHRoZSBuZXcgcHJvcGVydHkuXHJcblx0cmV0dXJuIG5ld1Byb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNoZWNrZWRQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS5jaGVja2VkID0gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7RWxtQXR0ciwgQXR0clByb3BJbmZvLCBFdmVudFByb3BJbmZvLCBDdXN0b21BdHRyUHJvcEluZm8sIFByb3BUeXBlfSBmcm9tIFwiLi9FbG1BdHRyXCJcclxuaW1wb3J0IHtTdmdFbG1zfSBmcm9tIFwiLi9TdmdFbG1zXCI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIERPTSBlbGVtZW50IGNyZWF0ZWQgdXNpbmcgSlNYLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbVZOIGV4dGVuZHMgVk4gaW1wbGVtZW50cyBtaW0uSUVsbVZOXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdGFnTmFtZTogc3RyaW5nLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoIG1pbS5WTlR5cGUuRWxtKVxyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYW4gU1ZHIG9yIEhUTUwgZWxlbWVudFxyXG5cdFx0bGV0IHN2Z0luZm8gPSBTdmdFbG1zLmdldFN2Z0VsbUluZm8oIHRhZ05hbWUpO1xyXG5cdFx0aWYgKHN2Z0luZm8gIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gdGhlIGlzU3ZnIGZsYWcgbWF5IHJlbWFpbiB1bmRlZmluZWQgZm9yIHRoZSBkdWFsLXB1cnBvc2UgdGFncy4gSW4gdGhpcyBjYXNlIGl0IHdpbGxcclxuXHRcdFx0Ly8gYmUgZGV0ZXJtaW5lZCB1cG9uIG1vdW50aW5nLlxyXG5cdFx0XHR0aGlzLmlzU3ZnID0gU3ZnRWxtcy5pc0R1YWxQdXJwb3NlKCBzdmdJbmZvKSA/IHVuZGVmaW5lZCA6IHRydWU7XHJcblx0XHRcdHRoaXMuZWxtTmFtZSA9IFN2Z0VsbXMuZ2V0RWxtTmFtZSggc3ZnSW5mbywgdGFnTmFtZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaXNTdmcgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5lbG1OYW1lID0gdGFnTmFtZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlblxyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5IGFuZCByZWZcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGVsZW1lbnQncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0dGhpcy5uYW1lID0gdGhpcy5lbG1OYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5rZXkgIT09IG51bGwpXHJcblx0XHRcdHRoaXMubmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJRWxtVk4gaW1wbGVtZW50YXRpb25cclxuXHRwdWJsaWMgZ2V0IEVsbU5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuZWxtTmFtZTsgfVxyXG5cdHB1YmxpYyBnZXQgRWxtKCk6IEVsZW1lbnQgeyByZXR1cm4gdGhpcy5lbG07IH1cclxuXHRwdWJsaWMgZ2V0IElzU3ZnKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc1N2ZzsgfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5FbG07IH1cclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkcmVuO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHdlIGRvbid0IGtub3cgeWV0IHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgZWxlbWVudCBvciBub3QgKHdoY2ggY2FuIGhhcHBlbiBmb3JcclxuXHRcdC8vIGR1YWwtcHVycG9zZSBlbGVtZW50cyksIGRldGVybWluZSBpdCBub3cgYnkgd2Fsa2luZyB1cCB0aGUgY2hhaW4gb2YgcGFyZW50cyBhbmRcclxuXHRcdC8vIGNoZWNraW5nIHdoZXRoZXIgdGhlZSBpcyBhbiA8c3ZnPiBlbGVtZW50IHRoZXJlXHJcblx0XHRpZiAodGhpcy5pc1N2ZyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudDsgcGFyZW50ICE9IG51bGw7IHBhcmVudCA9IHBhcmVudC5wYXJlbnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAocGFyZW50LnR5cGUgPT09IG1pbS5WTlR5cGUuRWxtICYmIChwYXJlbnQgYXMgRWxtVk4pLmVsbU5hbWUgPT09IFwic3ZnXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5pc1N2ZyA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIHRoZSBmbGFnIGlzIHN0aWxsIG5vdCBkZXRlcm1pbmVkIGFmdGVyIHRoZSBwYXJlbnQgbG9vcCwgc2V0IGl0IHRvIGZhbHNlLlxyXG5cdFx0XHRpZiAodGhpcy5pc1N2ZyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMuaXNTdmcgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBhcnNlUHJvcHMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGUgdmlydHVhbCBub2RlJ3MgY29udGVudCBpbnRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgdGhlIGVsZW1lbnRcclxuXHRcdHRoaXMuZWxtID0gdGhpcy5pc1N2Z1xyXG5cdFx0XHRcdFx0PyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoIFN2Z0VsbXMubmFtZXNwYWNlLCB0aGlzLmVsbU5hbWUpXHJcblx0XHRcdFx0XHQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIHRoaXMuZWxtTmFtZSk7XHJcblxyXG5cdFx0dGhpcy5hZGRBdHRycygpO1xyXG5cdFx0dGhpcy5hZGRFdmVudHMoKTtcclxuXHRcdHRoaXMuYWRkQ3VzdG9tQXR0cnMoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgKGlmIHNwZWNpZmllZClcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5lbG0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgY29udGVudCBmcm9tIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHVuc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkLiBXZSBjaGVjayB3aGV0aGVyIHRoZSByZWZlcmVuY2Ugc3RpbGwgcG9pbnRzXHJcblx0XHQvLyB0byBvdXIgZWxlbWVudCBiZWZvcmUgc2V0dGluZyBpdCB0byB1bmRlZmluZWQuIElmIHRoZSBzYW1lIFJlZiBvYmplY3QgaXMgdXNlZCBmb3JcclxuXHRcdC8vIG1vcmUgdGhhbiBvbmUgZWxlbWVudCAoYW5kL29yIGNvbXBvbmVudHMpIGl0IGNhbiBoYXBwZW4gdGhhdCB0aGUgcmVmZXJlbmNlIGlzIGNoYW5nZWRcclxuXHRcdC8vIGJlZm9yZSBvdXIgZWxlbWVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5lbG0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0Ly8gdGVybWluYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyc1xyXG5cdFx0dGhpcy5yZW1vdmVDdXN0b21BdHRycygpO1xyXG5cclxuXHRcdC8vIGNsZWFuIHVwXHJcblx0XHR0aGlzLmVsbSA9IG51bGw7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGlzIGlzIHRoZSBzYW1lIHR5cGUgb2YgZWxlbWVudDsgdGhhdCBpcywgaXQgaGFzIHRoZSBzYW1lXHJcblx0XHQvLyBuYW1lIGFuZCB0aGUgc2FtZSBpc1N2ZyBmbGFnXHJcblx0XHRjb25zdCBvdGhlckVsbU5vZGU6IEVsbVZOID0gbmV3Vk4gYXMgRWxtVk47XHJcblx0XHRyZXR1cm4gdGhpcy5pc1N2ZyA9PT0gb3RoZXJFbG1Ob2RlLmlzU3ZnICYmIHRoaXMuZWxtTmFtZSA9PT0gb3RoZXJFbG1Ob2RlLmVsbU5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGNvbnN0IG5ld0VsbVZOOiBFbG1WTiA9IG5ld1ZOIGFzIEVsbVZOO1xyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcHJvcHMgYW5kIGNoaWxkcmVuXHJcblx0XHR0aGlzLnByb3BzID0gbmV3RWxtVk4ucHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gbmV3RWxtVk4uY2hpbGRyZW47XHJcblxyXG5cdFx0Ly8gY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGFuZCBjaGlsZHJlbiB3aWxsIGhhdmUgdG8gYmUgdXBkYXRlZCB2aWEgcmVuZGVyXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQ6IHRydWUsIHNob3VsZFJlbmRlcjogdHJ1ZSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRjb25zdCBuZXdFbG1WTjogRWxtVk4gPSBuZXdWTiBhcyBFbG1WTjtcclxuXHRcdG5ld0VsbVZOLnBhcnNlUHJvcHMoKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0VsbVZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIHNwZWNpZmljYXRpb25cclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdFbG1WTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RWxtVk4ua2V5O1xyXG5cclxuXHRcdHRoaXMudXBkYXRlQXR0cnMoIG5ld0VsbVZOLmF0dHJzKTtcclxuXHRcdHRoaXMudXBkYXRlRXZlbnRzKCBuZXdFbG1WTi5ldmVudHMpO1xyXG5cdFx0dGhpcy51cGRhdGVDdXN0b21BdHRycyggbmV3RWxtVk4uY3VzdG9tQXR0cnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0T3duRE4oKTogRE5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lbG07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgb3ZlciB0aGUgb3JpZ2luYWwgcHJvcGVydGllcyBhbmQgcHV0cyB0aGVtIGludG8gdGhlIGJ1Y2tldHMgb2YgYXR0cmlidXRlcywgZXZlbnRcclxuXHQvLyBsaXN0ZW5lcnMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgcGFyc2VQcm9wcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5wcm9wcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWw6IGFueSA9IHRoaXMucHJvcHNbcHJvcE5hbWVdO1xyXG5cclxuXHRcdFx0Ly8gZ2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBwcm9wZXJ0eSBhbmQgZGV0ZXJtaW5lIGl0cyB0eXBlIChyZWd1bGFyIGF0dHJpYnV0ZSwgZXZlbnRcclxuXHRcdFx0Ly8gb3IgY3VzdG9tIGF0dHJpYnV0ZSkuIE5vdGUgdGhhdCBnZXRQcm9wZXJ0eUluZm8gbWF5IHJldHVybiBudWxsIGZvciBtb3N0IHJlZ3VsYXJcclxuXHRcdFx0Ly8gYXR0cmlidXRlcyBhbmQgZXZlbnRzOyBpbiB0aGlzIGNhc2Ugd2Ugd2lsbCBjaGVjayB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0XHRcdGxldCBwcm9wSW5mbyA9IEVsbUF0dHIuZ2V0UHJvcGVydHlJbmZvKCBwcm9wTmFtZSk7XHJcblx0XHRcdGxldCBwcm9wVHlwZSA9IHByb3BJbmZvID8gcHJvcEluZm8udHlwZSA6IFByb3BUeXBlLlVua25vd247XHJcblx0XHRcdGlmICghcHJvcEluZm8pXHJcblx0XHRcdFx0cHJvcFR5cGUgPSB0aGlzLklzRXZlbnRWYWx1ZSggcHJvcFZhbCkgPyBQcm9wVHlwZS5FdmVudCA6IFByb3BUeXBlLkF0dHI7XHJcblxyXG5cdFx0XHRpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkF0dHIpXHJcblx0XHRcdFx0dGhpcy5hdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvLCB2YWw6IHByb3BWYWwgfTtcclxuXHRcdFx0ZWxzZSBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkV2ZW50KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGV2ZW50SW5mbyA9IHRoaXMuR2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggcHJvcEluZm8sIHByb3BWYWwpO1xyXG5cdFx0XHRcdGlmIChldmVudEluZm8pXHJcblx0XHRcdFx0XHR0aGlzLmV2ZW50c1twcm9wTmFtZV0gPSBldmVudEluZm87XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSAvLyBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkN1c3RvbUF0dHIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyByZW1lbWJlciBjdXN0b21lIGF0dHJpYnV0ZXMgdmFsdWUuIEhhbmRsZXIgd2lsbCBiZSBjcmVhdGVkIGxhdGVyLlxyXG5cdFx0XHRcdHRoaXMuY3VzdG9tQXR0cnNbcHJvcE5hbWVdID0geyBpbmZvOiBwcm9wSW5mbyBhcyBDdXN0b21BdHRyUHJvcEluZm8sIHZhbDogcHJvcFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI6IHVuZGVmaW5lZH07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0eSB2YWx1ZSBpcyBvZiB0aGUgdHlwZSB0aGF0IGlzIHVzZWQgZm9yIGV2ZW50IGhhbmRsZXJzLlxyXG5cdC8vIElmIHllcywgdGhlbiByZXR1cm5zIEV2ZW50UnVuVGltZURhdGEgb2JqZWN0OyBvdGhlcndpc2UsIHJldHVybnMgdW5kZWZpbmVkLlxyXG5cdHByaXZhdGUgSXNFdmVudFZhbHVlKCBwcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHR5cGVvZiBwcm9wVmFsID09PSBcImZ1bmN0aW9uXCIgfHxcclxuXHRcdFx0QXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDAgJiYgdHlwZW9mIHByb3BWYWxbMF0gPT09IFwiZnVuY3Rpb25cIjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0eSB2YWx1ZSBpcyBvZiB0aGUgdHlwZSB0aGF0IGlzIHVzZWQgZm9yIGV2ZW50IGhhbmRsZXJzLlxyXG5cdC8vIElmIHllcywgdGhlbiByZXR1cm5zIEV2ZW50UnVuVGltZURhdGEgb2JqZWN0OyBvdGhlcndpc2UsIHJldHVybnMgdW5kZWZpbmVkLlxyXG5cdHByaXZhdGUgR2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggaW5mbzogRXZlbnRQcm9wSW5mbywgcHJvcFZhbDogYW55KTogRXZlbnRSdW5UaW1lRGF0YVxyXG5cdHtcclxuXHRcdGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgb3JnRnVuYyA9IHByb3BWYWwgYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PjtcclxuXHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYywgdXNlQ2FwdHVyZTogZmFsc2UgfTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPT09IDIgJiZcclxuXHRcdFx0XHR0eXBlb2YgcHJvcFZhbFswXSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBwcm9wVmFsWzFdID09PSBcImJvb2xlYW5cIilcclxuXHRcdHtcclxuXHRcdFx0bGV0IG9yZ0Z1bmMgPSBwcm9wVmFsWzBdIGFzIG1pbS5FdmVudEZ1bmNUeXBlPGFueT47XHJcblx0XHRcdGxldCB3cmFwcGVyID0gRXZlbnRIYW5kbGVyV3JhcHBlci5iaW5kKCB0aGlzLCBvcmdGdW5jKTtcclxuXHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYywgdXNlQ2FwdHVyZTogcHJvcFZhbFsxXSBhcyBib29sZWFuIH07XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZm9yIGFsbCBvdGhlciB0eXBlIGNvbWJpbmF0aW9ucyBjb25zaWRlciBpdCB0byBiZSBhIHJlZ3VsYXIgYXR0cmlidXRlXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIERPTSBhdHRyaWJ1dGVzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgYWRkQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbTtcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuYXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBydGQgPSB0aGlzLmF0dHJzW25hbWVdO1xyXG5cdFx0XHRFbG1BdHRyLnNldEF0dHIoIGVsbSwgbmFtZSwgcnRkLmluZm8sIHJ0ZC52YWwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIERPTSBhdHRyaWJ1dGVzIG9mIHRoaXMgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUF0dHJzKCBuZXdBdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gXCJjYWNoZVwiIHNldmVyYWwgbWVtZWJlcnMgZm9yIGZhc3RlciBhY2Nlc3NcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbTtcclxuXHRcdGxldCBvbGRBdHRycyA9IHRoaXMuYXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGF0dHJpYnV0ZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ldyBvbmVzIGFuZFxyXG5cdFx0Ly8gdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgb2xkUlREID0gb2xkQXR0cnNbbmFtZV07XHJcblx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRyc1tuYW1lXTtcclxuXHRcdFx0aWYgKG5ld1JURCA9PT0gdW5kZWZpbmVkIHx8IG5ld1JURC52YWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHQvLyByZW1vdmUgdGhlIGF0dHJpYnV0ZSBmcm9tIHRoZSBlbGVtZW50XHJcblx0XHRcdFx0RWxtQXR0ci5yZW1vdmVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaGFzIGEgZGlmZmVyZW50IHZhbHVlLCByZW1tZWJlciB0aGlzXHJcblx0XHRcdFx0Ly8gdmFsdWUgYW5kIHNldCBpdCB0byB0aGUgYXR0cmlidXRlIGluIHRoZSBlbGVtZW50XHJcblx0XHRcdFx0RWxtQXR0ci51cGRhdGVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvLCBvbGRSVEQudmFsLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgYXR0cmlidXRlczsgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gbmV3QXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChuYW1lIGluIG9sZEF0dHJzKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IG5ld1JURCA9IG5ld0F0dHJzW25hbWVdO1xyXG5cdFx0XHRFbG1BdHRyLnNldEF0dHIoIGVsbSwgbmFtZSwgbmV3UlRELmluZm8sIG5ld1JURC52YWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXR0cnMgPSBuZXdBdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBpbmZvcm1hdGlvbiBhYm91dCBldmVudHMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRFdmVudHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwcml2YXRlIGFkZEV2ZW50KCBuYW1lOiBzdHJpbmcsIGluZm86IEV2ZW50UnVuVGltZURhdGEpOiB2b2lkXHJcblx0e1xyXG5cdFx0aW5mby53cmFwcGVyID0gRXZlbnRIYW5kbGVyV3JhcHBlci5iaW5kKCB0aGlzLCBpbmZvLm9yZ0Z1bmMpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgaW5mby53cmFwcGVyLCBpbmZvLnVzZUNhcHR1cmUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuZXZlbnRzKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCB0aGlzLmV2ZW50c1tuYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVFdmVudCggbmFtZTogc3RyaW5nLCBpbmZvOiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIGluZm8ud3JhcHBlciwgaW5mby51c2VDYXB0dXJlKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudHMoIG5ld0luZm9zOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEluZm9zID0gdGhpcy5ldmVudHM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVycywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3XHJcblx0XHQvLyBvbmVzIGFuZCB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gb2xkSW5mb3MpXHJcblx0XHR7XHJcblx0XHRcdGxldCBvbGRJbmZvID0gb2xkSW5mb3NbbmFtZV07XHJcblx0XHRcdGxldCBuZXdJbmZvID0gbmV3SW5mb3NbbmFtZV07XHJcblx0XHRcdGlmICghbmV3SW5mbylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCBvbGRJbmZvKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlRXZlbnQoIG5hbWUsIG9sZEluZm8sIG5ld0luZm8pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgZXZlbnQgbGlzdGVuZXJzIGFuZCBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdJbmZvcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5hbWUgaW4gb2xkSW5mb3MpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRsZXQgbmV3SW5mbyA9IG5ld0luZm9zW25hbWVdO1xyXG5cdFx0XHR0aGlzLmFkZEV2ZW50KCBuYW1lLCBuZXdJbmZvKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmV2ZW50cyA9IG5ld0luZm9zO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIGV2ZW50IGxpc3RlbmVyIGFyZSBkaWZmZXJlbnQgYW5kIHNldHNcclxuXHQvLyB0aGUgdXBkYXRlZCB2YWx1ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kIGZhbHNlIGlmIG5vIGNoYW5nZSBoYXNcclxuXHQvLyBiZWVuIGRldGVjdGVkLlxyXG5cdHByaXZhdGUgdXBkYXRlRXZlbnQoIG5hbWU6IHN0cmluZywgb2xkSW5mbzogRXZlbnRSdW5UaW1lRGF0YSwgbmV3SW5mbzogRXZlbnRSdW5UaW1lRGF0YSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAob2xkSW5mby5vcmdGdW5jID09PSBuZXdJbmZvLm9yZ0Z1bmMgJiYgb2xkSW5mby51c2VDYXB0dXJlID09PSBuZXdJbmZvLnVzZUNhcHR1cmUpXHJcblx0XHR7XHJcblx0XHRcdG5ld0luZm8ud3JhcHBlciA9IG9sZEluZm8ud3JhcHBlcjtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIG9sZEluZm8ud3JhcHBlciwgb2xkSW5mby51c2VDYXB0dXJlKTtcclxuXHJcblx0XHRuZXdJbmZvLndyYXBwZXIgPSBFdmVudEhhbmRsZXJXcmFwcGVyLmJpbmQoIHRoaXMsIG5ld0luZm8ub3JnRnVuYyk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBuZXdJbmZvLndyYXBwZXIsIG5ld0luZm8udXNlQ2FwdHVyZSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCB0aGVyZSB3YXMgY2hhbmdlIGluIGF0dHJpYnV0ZSB2YWx1ZS5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgYWRkQ3VzdG9tQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRhdGEgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0bGV0IGhhbmRsZXIgPSBkYXRhLmluZm8uZmFjdG9yeS5jcmVhdGVIYW5kbGVyKCBuYW1lKTtcclxuXHRcdFx0aWYgKCFoYW5kbGVyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGluaXRpYWxpemUgdGhlIGhhbmRsZXIgYW5kIHJlbWVtYmVyIGl0IGluIG91ciBvYmplY3RcclxuXHRcdFx0aGFuZGxlci5pbml0aWFsaXplKCB0aGlzLCBuYW1lLCBkYXRhLnZhbCk7XHJcblx0XHRcdGRhdGEuaGFuZGxlciA9IGhhbmRsZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERlc3Ryb3lzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgZWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUN1c3RvbUF0dHJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBpbmZvID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0aW5mby5oYW5kbGVyLnRlcm1pbmF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdDdXN0b21Qcm9wczogeyBbbmFtZTogc3RyaW5nXTogQ3lzdG9tQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEN1c3RvbVByb3BzID0gdGhpcy5jdXN0b21BdHRycztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgY3VzdG9tIHByb3BlcnRpZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEN1c3RvbVByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zdCBvbGRJbmZvID0gb2xkQ3VzdG9tUHJvcHNbbmFtZV07XHJcblx0XHRcdGNvbnN0IG5ld0luZm8gPSBuZXdDdXN0b21Qcm9wc1tuYW1lXTtcclxuXHRcdFx0aWYgKG5ld0luZm8gPT09IHVuZGVmaW5lZCB8fCBuZXdJbmZvID09PSBudWxsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUsIHJlbW92ZSB0aGUgb2xkIHByb3BlcnR5IGFuZFxyXG5cdFx0XHRcdC8vIHRlcm1pbmF0ZSBpdHMgaGFuZGxlclxyXG5cdFx0XHRcdG9sZEluZm8uaGFuZGxlci50ZXJtaW5hdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB1cGRhdGUgdGhlIGN1c3RvbSBwcm9wZXJ0eSBhbmQgcmVtZW1iZXIgdGhlIG5ldyB2YWx1ZVxyXG5cdFx0XHRcdG9sZEluZm8uaGFuZGxlci51cGRhdGUoIG9sZEluZm8udmFsLCBuZXdJbmZvLnZhbCk7XHJcblx0XHRcdFx0bmV3SW5mby5oYW5kbGVyID0gb2xkSW5mby5oYW5kbGVyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBjdXN0b20gcHJvcGVydGllcyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gbmV3Q3VzdG9tUHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChuYW1lIGluIG9sZEN1c3RvbVByb3BzKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IG5ld0luZm8gPSBuZXdDdXN0b21Qcm9wc1tuYW1lXTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlci4gSWYgd2UgY2Fubm90IGNyZWF0ZSB0aGUgaGFuZGxlciwgcmVtb3ZlIHRoZSBwcm9wZXJ0eVxyXG5cdFx0XHQvLyBmcm9tIG91ciBvYmplY3QuXHJcblx0XHRcdGxldCBoYW5kbGVyID0gbmV3SW5mby5pbmZvLmZhY3RvcnkuY3JlYXRlSGFuZGxlciggbmFtZSk7XHJcblx0XHRcdGlmICghaGFuZGxlcilcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdC8vIGluaXRpYWxpemUgdGhlIGhhbmRsZXIgYW5kIHJlbWVtYmVyIGl0IGluIG91ciBvYmplY3RcclxuXHRcdFx0aGFuZGxlci5pbml0aWFsaXplKCB0aGlzLCBuYW1lLCBuZXdJbmZvLnZhbCk7XHJcblx0XHRcdG5ld0luZm8uaGFuZGxlciA9IGhhbmRsZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXN0b21BdHRycyA9IG5ld0N1c3RvbVByb3BzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUYWcgbmFtZSBvZiBhbiBFbGVtZW50LlxyXG5cdHByaXZhdGUgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBBcnJheSBvZiBjaGlsZHJlbiBvYmplY3RzLlxyXG5cdHByaXZhdGUgY2hpbGRyZW46IGFueVtdO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LiBUaGUgaW5zdGFuY2UgaXMgY3JlYXRlZCB3aGVuIHRoZSBub2RlIGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3RcclxuXHQvLyB0aW1lLlxyXG5cdHByaXZhdGUgZWxtOiBFbGVtZW50ID0gbnVsbDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEVsZW1lbnQgaXMgU1ZHIChhcyBvcHBvc2VkIHRvIEhUTE0pLiBUaGVyZSBhcmUgc29tZSBTVkdcclxuXHQvLyBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHNhbWUgbmFtZSBhcyByZWd1bGFyIGVsZW1lbnRzIChlLmcuIDxhPikuIFRoZXJlZm9yZSwgaW4gb3JkZXIgdG9cclxuXHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBvbmUgd2UgbmVlZCB0byBnbyB1cCB0aGUgZWxlbWVudCBjaGFpbiBhbmQgc2VlIHdoZXRoZXJcclxuXHQvLyB0aGVyZSBpcyBhbiA8c3ZnPiBlbGVtZW50IGFzIGFuIGFuY2VzdG9yLiBTaW5jZSB3ZSBvbmx5IGhhdmUgYWNjZXNzIHRvIHRoZSBwYXJlbnQgbm9kZVxyXG5cdC8vIHVwb24gbW91bnRpbmcsIGZvciBzdWNoIGVsZW1lbnRzIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGZsYWcncyB2YWx1ZSBpbiB0aGUgY29uc3R1Y3Rvci5cclxuXHQvLyBJbiB0aGlzIGNhc2Ugd2Ugd2lsbCBoYXZlIHRoaXMgZmxhZyB1bmRlZmluZWQgYW5kIHdpbGwgZGV0ZXJtaW5lIGl0IHRvIGJlIHRydWUgb3IgZmFsc2VcclxuXHQvLyB3aGVuIHRoZSBtb3VudCBtZXRob2QgaXMgY2FsbGVkLlxyXG5cdHByaXZhdGUgaXNTdmc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc3BlY2lmaWVkIGFzIGEgXCJyZWZcIiBwcm9wZXJ0eS4gUmVmZXJlbmNlIG9iamVjdCBpc1xyXG5cdC8vIHNldCB3aGVuIGFuYWx5emluZyBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgZHVyaW5nIHVwZGF0ZS4gUmVmZXJlbmNlIHZhbHVlIGlzXHJcblx0Ly8gc2V0IGR1cmluZyBtb3VudCBhbmQgdW5zZXQgZHVyaW5nIHVubW91bnQuIFRoZSByZWYgcHJvcGVydHkgY2FuIGJlIGNoYW5nZWQgb24gdXBkYXRlLlxyXG5cdHByaXZhdGUgcmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PjtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gYXR0cmlidXRlIG5hbWVzIGFuZCB0aGVpciBjdXJyZW50IHZhbHVlcy5cclxuXHRwcml2YXRlIGF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBBdHRyUnVuVGltZURhdGEgfSA9IHt9O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBuYW1lcyBvZiBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBwYXJhbWV0ZXJzLlxyXG5cdHByaXZhdGUgZXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH0gPSB7fTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gbmFtZXMgb2YgY3VzdG9tIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIGhhbmRsZXIgb2JqZWN0cyBhbmQgdmFsdWVzLlxyXG5cdHByaXZhdGUgY3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9ID0ge307XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVGhlIEV2ZW50SGFuZGxlcldyYXBwZXIgZnVuY3Rpb24gaXMgdXNlZCB0byB3cmFwIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gYXNzaWduZWQgdG8gYW4gZXZlbnRcclxuLy8gb2YgdGhlIEVsZW1lbnQuIFRoaXMgZnVuY3Rpb24gY2F0Y2hlcyBleGNlcHRpb25zIGZyb20gdGhlIG9yaWdpbmFsIGV2ZW50IGhhbmRsZXIgYW5kIHVzZXMgdGhlXHJcbi8vIFwiU3RkRXJyb3JIYW5kbGluZ1wiIHNlcnZpY2UgdG8gcmVwb3J0IHRoZSBleGNlcHRpb24gdG8gdGhlIG5lYXJlc3Qgbm9kZSB0aGF0IGNhbiBoYW5kbGUgaXQuXHJcbmZ1bmN0aW9uIEV2ZW50SGFuZGxlcldyYXBwZXIoKTogdm9pZFxyXG57XHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0bGV0IFtvcmdFdmVudEhhbmRsZXIsIC4uLnJlc3RdID0gYXJndW1lbnRzO1xyXG5cdFx0cmV0dXJuIG9yZ0V2ZW50SGFuZGxlciggLi4ucmVzdCk7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0bGV0IGVycm9yU2VydmljZSA9IHRoaXMuZmluZFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKSBhcyBtaW0uSUVycm9ySGFuZGxpbmdTZXJ2aWNlO1xyXG5cdFx0aWYgKGVycm9yU2VydmljZSlcclxuXHRcdFx0ZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIHRoaXMucGF0aCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCByZWd1bGFyIGF0dHJpYnV0ZVxyXG5pbnRlcmZhY2UgQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGF0dHJpYnV0ZSAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogQXR0clByb3BJbmZvIHwgbnVsbDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBldmVudCBzaG91bGQgYmUgdXNlZCBhcyBDYXB0dXJpbmcgKHRydWUpIG9yIEJ1YmJsaW5nIChmYWxzZSlcclxuXHR2YWw6IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGV2ZW50IGxpc3RlbmVyXHJcbmludGVyZmFjZSBFdmVudFJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGV2ZW50IC0gY2FuIGJlIG51bGxcclxuXHRpbmZvOiBFdmVudFByb3BJbmZvIHwgbnVsbDtcclxuXHJcblx0Ly8gT3JpZ2luYWwgZXZlbnQgY2FsbGJhY2sgcGFzc2VkIGFzIHRoZSB2YWx1ZSBvZiB0aGUgZXZlbnQgcHJvcGVydHkgaW4gSlNYXHJcblx0b3JnRnVuYzogbWltLkV2ZW50RnVuY1R5cGU8YW55PjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBldmVudCBzaG91bGQgYmUgdXNlZCBhcyBDYXB0dXJpbmcgKHRydWUpIG9yIEJ1YmJsaW5nIChmYWxzZSlcclxuXHR1c2VDYXB0dXJlOiBib29sZWFuO1xyXG5cclxuXHQvLyBXcmFwcGVyIGZ1bmN0aW9uIHRoYXQgd2UgY3JlYXRlIGFuZCBiaW5kIHRvIG91ciBub2RlIGFuZCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uIFdlIG5lZWRcclxuXHQvLyB0aGlzIHdyYXBwZXIgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9uIGluIHRoZSBjYWxsYmFjayBhbmQgcGFzcyB0aGVtIG9uIHRvIGFuIGVycm9yXHJcblx0Ly8gaGFuZGxpbmcgc2VydmljZS4gVGhlIHdyYXBwZXIgaXMgbWFya2VkIG9wdGlvbmFsIGJlY2F1c2UgaXQgaXMgY3JlYXRlZCBvbmx5IGlmIGEgbmV3XHJcblx0Ly8gZXZlbnQgbGlzdGVuZXIgaXMgYWRkZWQ7IHRoYXQgaXMsIGlmIGR1cmluZyB1cGRhdGUsIHRoZSBldmVudCBsaXN0ZW5lciBmdW5jdGlvbiBpcyB0aGVcclxuXHQvLyBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIGNyZWF0ZSBuZXcgd3JhcHBlciBiZWNhdXNlIHRoZSBvbGQgb25lIHdpbGwgYmUgdXNlZC5cclxuXHR3cmFwcGVyPzogICgpID0+IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGN1c3RvbSBwcm9wZXJ0eS5cclxuaW50ZXJmYWNlIEN5c3RvbUF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBjdXN0b20gYXR0cmlidXRlIC0gY2Fubm90IGJlIG51bGxcclxuXHRpbmZvOiBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cdC8vIEN1cnJlbnQgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcblx0dmFsOiBhbnk7XHJcblxyXG5cdC8vIEhhbmRsZXIgb2JqZWN0IHRoYXQga25vd3MgdG8gZGVhbCB3aXRoIHRoZSBwcm9wZXJ0eSB2YWx1ZXNcclxuXHRoYW5kbGVyOiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8YW55PjtcclxufTtcclxuXHJcblxyXG5cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRXZlbnRTbG90IGludGVyZmFjZSByZXByZXNlbnRzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMuIE11bHRpcGxlXHJcbi8vIGxpc3RlbmVycyBjYW4gYmUgYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+XHJcbntcclxuXHQvLyBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQvLyBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdGZpcmU6IFRGdW5jO1xyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0Ly8gZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0YWRkKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC5cclxuXHRyZW1vdmUoIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0byB0aGUgZXZlbnQuXHJcblx0Y2xlYXIoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIEV2ZW50U2xvdCBjbGFzcyBkZWZpbmVzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMgYXMgbWVtYmVycyBvZiBjbGFzc2VzIHdpdGhvdXQgdGhlXHJcbi8vIG5lZWQgZm9yIHRoZSBjbGFzc2VzIHRvIGRlcml2ZSBmcm9tIEV2ZW50VGFyZ2V0IGFuZCB1c2Ugc3RyaW5nIG5hbWVzIGZvciBldmVudHMuIE11bHRpcGxlXHJcbi8vIGxpc3RlbmVycyBjYW4gYmUgYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEV2ZW50U2xvdDxURnVuYyBleHRlbmRzIEZ1bmN0aW9uPiBpbXBsZW1lbnRzIElFdmVudFNsb3Q8VEZ1bmM+XHJcbntcclxuXHQvLyBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQvLyBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdHB1YmxpYyBmaXJlOiBURnVuYyA9IHRoaXMucmVhbEZpcmUgYXMgYW55IGFzIFRGdW5jO1xyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBzaG91bGQgbm90IGJlIGEgbGFtYmRhXHJcblx0Ly8gZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0cHVibGljIGFkZCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyA9PT0gbnVsbClcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBuZXcgU2V0PFRGdW5jPigpO1xyXG5cclxuXHRcdHRoaXMubGlzdGVuZXJzLmFkZCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC5cclxuXHRwdWJsaWMgcmVtb3ZlKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzICE9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxpc3RlbmVycy5kZWxldGUoIGxpc3RlbmVyKTtcclxuXHRcdFx0aWYgKHRoaXMubGlzdGVuZXJzLnNpemUgPT09IDApXHJcblx0XHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBsaXN0ZW5lciB0byB0aGUgZXZlbnQuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldCBvZiBsaXN0ZW5lciBmdW5jdGlvbnMuIFdoZW4gdGhlcmUgYXJlIG5vIGxpc3RlbmVycywgdGhpcyBmaWVsZCBpcyBzZXQgdG8gbnVsbCB0b1xyXG5cdC8vIHByZXNlcnZlIHNwYWNlLlxyXG5cdHByaXZhdGUgbGlzdGVuZXJzOiBTZXQ8VEZ1bmM+ID0gbnVsbDtcclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCByZWFsbHkgY2FsbHMgdGhlIGxpc3RlbmVycyBpbiBhIGxvb3AuIEl0IGRlY29uc3R1Y3RzIHRoZSBcImFyZ3VtZW50c1wiIHZhbHVlXHJcblx0Ly8gaW4gb3JkZXIgdG8gcGFzcyB0aGUgcHJvcGVyIHBhcmFtZXRlcnMgdG8gdGhlIGxpc3RlbmVycy5cclxuXHRwcml2YXRlIHJlYWxGaXJlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKVxyXG5cdFx0XHRcdGxpc3RlbmVyKCAuLi5hcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIEV2ZW50TXVsdGlTbG90IGNsYXNzIGFsbG93cyByZWdpc3RlcmluZyBsaXN0ZW5lcnMgZm9yIG11bHRpcGxlIGV2ZW50cy4gRXZlbnRzIGFyZSBpZGVudGlmaWVkXHJcbi8vIHVzaW5nIHRoZSBzcGVjaWZpZWQgdGVtcGxhdGUgdHlwZSwgd2hpY2ggaXMgdXN1YWxseSAoYnV0IG5vdCBuZWNlc3NhcmlseSkgYSBudW1iZXItIG9yXHJcbi8vIHN0cmluZy1iYXNlZCBlbnVtZXJhdGlvbiBvciB1bmlvbiB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEV2ZW50TXVsdGlTbG90PFQ+XHJcbntcclxuXHQvLyBBZGRzIGEgbmV3IGxpc3RlbmVyIHRvIHRoZSBnaXZlbiBldmVudFxyXG5cdHB1YmxpYyBhZGRMaXN0ZW5lciggZXZlbnQ6IFQsIGV2ZW50RnVuYzogRnVuY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2xvdHMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zbG90cyA9IG5ldyBNYXA8VCxFdmVudFNsb3Q8RnVuY3Rpb24+PigpO1xyXG5cclxuXHRcdGxldCBzbG90ID0gdGhpcy5zbG90cy5nZXQoIGV2ZW50KTtcclxuXHRcdGlmIChzbG90ID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHNsb3QgPSBuZXcgRXZlbnRTbG90PEZ1bmN0aW9uPigpO1xyXG5cdFx0XHR0aGlzLnNsb3RzLnNldCggZXZlbnQsIHNsb3QpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNsb3QuYWRkKCBldmVudEZ1bmMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiBsaXN0ZW5lciBmcm9tIHRoZSBnaXZlbiBldmVudFxyXG5cdHB1YmxpYyByZW1vdmVMaXN0ZW5lciggZXZlbnQ6IFQsIGV2ZW50RnVuYzogRnVuY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2xvdHMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNsb3QgPSB0aGlzLnNsb3RzLmdldCggZXZlbnQpO1xyXG5cdFx0XHRpZiAoc2xvdCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHNsb3QucmVtb3ZlKCBldmVudEZ1bmMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzbG90czogTWFwPFQsRXZlbnRTbG90PEZ1bmN0aW9uPj47XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW50ZXJmYWNlIGFuZCBjbGFzcyBmb3Igc2ltcGxlIGV2ZW50cyBhY2NlcHRpbmcgbm8gcGFyYW1ldGVycy5cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlRXZlbnRTbG90IGV4dGVuZHMgSUV2ZW50U2xvdDwoKT0+dm9pZD4ge31cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50U2xvdCBleHRlbmRzIEV2ZW50U2xvdDwoKT0+dm9pZD4ge31cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSByZW5kZXJpbmcgZnVuY3Rpb24gYS5rLmEuIHN0YXRlbGVzcyBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1ZOIGV4dGVuZHMgVk5cclxue1xyXG5cdC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBub2RlIGNvcnJlc3BvbmRzIHRvIGEgZnJhZ21lbnQgcGxhY2Vob2xkZXIuICovXHJcblx0cHVibGljIHN0YXRpYyBpc1ZOYUZyYWdtZW50KCB2bjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuICh2biBhcyBGdW5jVk4pLmZ1bmMgPT09IG1pbS5QbGFjZWhvbGRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIGZ1bmM6IG1pbS5GdW5jQ29tcFR5cGUsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlciggbWltLlZOVHlwZS5GdW5jQ29tcClcclxuXHJcblx0XHR0aGlzLmZ1bmMgPSBmdW5jO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5XHJcblx0XHR0aGlzLnByb3BzID0ge307XHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHByb3BWYWw6IGFueSA9IHByb3BzW3Byb3BOYW1lXTtcclxuXHRcdFx0XHRpZiAocHJvcFZhbCA9PT0gdW5kZWZpbmVkIHx8IHByb3BWYWwgPT09IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkIGFuZCBudWxsXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIga2V5IHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLmtleSA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblxyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBmdW5jdGlvbidzIG5hbWUgcGx1cyBrZXkgaWYgc3BlY2lmaWVkXHJcblx0XHR0aGlzLm5hbWUgPSB0aGlzLmZ1bmMubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPT0gdW5kZWZpbmVkICYmIHRoaXMua2V5ICE9PSBudWxsKVxyXG5cdFx0XHR0aGlzLm5hbWUgKz0gXCIgQFwiICsgdGhpcy5rZXk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRwdWJsaWMgZ2V0U3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jKCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0XHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdFx0Ly8gRE9NIHRyZWUuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0XHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdH1cclxuLy8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3RcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IChuZXdWTiBhcyBGdW5jVk4pLmZ1bmM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jVk4gPSBuZXdWTiBhcyBGdW5jVk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNWTi5rZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBwcm9wZXJ0aWVzIGZyb20gdGhlIG5ldyBub2RlXHJcblx0XHR0aGlzLnByb3BzID0gbmV3RnVuY1ZOLnByb3BzO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiB7IHNob3VsZENvbW1pdDogZmFsc2UsIHNob3VsZFJlbmRlcjogdHJ1ZSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0T3duRE4oKTogRE5cclxuXHR7XHJcblx0XHQvLyBjb21wb25lbnRzIGRvbid0IGhhdmUgdGhlaXIgb3duIERPTSBub2RlXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gZm9yIGEgc3RhdGVsZXNzIGNvbXBvbmVudC4gVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgZHVyaW5nIHRoZSByZW5kZXJpbmcgcHJvY2Vzcy5cclxuXHRmdW5jOiBtaW0uRnVuY0NvbXBUeXBlO1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCwgZnVuY3Rpb24gb3IgZWxlbWVudC5cclxuXHRwcm9wczogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge1ZOfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Q29tcEJhc2VWTn0gZnJvbSBcIi4vQ29tcEJhc2VWTlwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIGNsYXNzIEluc3RhbmNlVk4gaXMgYSBub2RlIHRoYXQgaG9sZHMgYW4gaW5zdGFuY2Ugb2YgYW4gSUNvbXBvbmVudC1pbXBsZW1lbnRpbmcgb2JqZWN0LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEluc3RhbmNlVk4gZXh0ZW5kcyBDb21wQmFzZVZOPG1pbS5JQ29tcG9uZW50PiBpbXBsZW1lbnRzIG1pbS5JSW5zdGFuY2VWTlxyXG57XHJcblx0Y29uc3RydWN0b3IoIGNvbXA6IG1pbS5Db21wb25lbnQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIG1pbS5WTlR5cGUuSW5zdGFuY2VDb21wKVxyXG5cdFx0dGhpcy5jb21wID0gY29tcDtcclxuXHJcblx0XHQvLyB0aGUgY29tcG9uZW50IG9iamVjdCBpcyBhIGtleSBmb3IgdGhlIG5vZGVcclxuXHRcdHRoaXMua2V5ID0gY29tcDtcclxuXHJcblx0XHQvLyBkZWZhdWx0IG5vZGUgbmFtZSBpcyB0aGUgY29tcG9uZW50J3MgY29uc3RydWN0b3IgbmFtZVxyXG5cdFx0dGhpcy5uYW1lID0gdGhpcy5jb21wLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJSW5zdGFuY2VWTiBpbXBsZW1lbnRhdGlvblxyXG5cdHB1YmxpYyBnZXQgQ29tcCgpOiBtaW0uSUNvbXBvbmVudCB7IHJldHVybiB0aGlzLmNvbXA7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29tcC5zZXRTaXRlKCB0aGlzKTtcclxuXHRcdGlmICh0aGlzLmNvbXAuY29tcG9uZW50V2lsbE1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAuY29tcG9uZW50V2lsbE1vdW50KCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbXAuY29tcG9uZW50V2lsbFVubW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xyXG5cclxuXHRcdHRoaXMuY29tcC5zZXRTaXRlKCBudWxsKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHNpbmNlIHRoZSBjb21wb25lbnQgaW5zdGFuY2UgaXMgdXNlZCBhcyBhIGtleSwgdGhlIG90aGVyIG5vZGUgaXMgYWx3YXlzIGZvciB0aGVcclxuXHRcdC8vIHNhbWUgY29tcG9uZW50IGluc3RhbmNlIGFuZCB1cGRhdGUgaXMgYWx3YXlzIHBvc3NpYmxlLlxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0lFdmVudFNsb3QsIEV2ZW50U2xvdH0gZnJvbVwiLi9FdmVudFNsb3RcIlxyXG5cclxuXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4vbWltXCJcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcblx0e1xyXG4gICAgICAgIExvY2FsU3R5bGVzOiBJTG9jYWxTdHlsZVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJTG9jYWxTdHlsZVNlcnZpY2UgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzZXJ2aWNlIHRoYXQgaXMgcHVibGlzaGVkIGJ5IGNvbXBvbmVudHMgdGhhdFxyXG4vLyBkZWZpbmUgdGhlaXIgbG9jYWwgQ1NTIHN0eWxlczsgdGhhdCBpcywgY29tcG9uZW50cyBkZXJpdmluZyBmcm9tIHRoZSBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXNcclxuLy8gY2xhc3MuIFRoZSBpbnRlcmZhY2UgYWxsb3dzIHJldHJpZXZpbmcgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWNvcmF0ZWQgd2l0aCB0aGUgdW5pcXVlXHJcbi8vIElELCB3aGljaCBhdm9pZHMgZHVwbGljYXRpb24gb2YgbmFtZXMgYmV0d2VlbiBjb21wb25lbnRzIG9mIHRoZSBzYW1lIG9yIGRpZmZlcmVudCB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbntcclxuXHQvLyBSZXR1cm5zIHRoZSB1bmlxdWUgSUQgdXNlZCB0byBkZWNvcmF0ZSBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIHRvIG1ha2UgdGhlbSB1bmlxdWUuXHJcblx0cmVhZG9ubHkgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gUmV0cnVybnMgQ1NTIGNsYXNzIG9yIHZhcmlhYmxlIG5hbWUgZGVjb3JhdGVkIHdpdGggYSB1bmlxdWUgSUQuXHJcblx0ZGVjb3JhdGVOYW1lKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXMgY2xhc3MgaXMgYSBiYXNlIGNsYXNzIGZvciBjb21wb25lbnRzIHRoYXQgZGVmaW5lIGxvY2FsIENTUyBzdHlsZXMuXHJcbi8vIFdoZW4gdGhpcyBjb21wb25lbnQgaXMgbW91bnRlZCBpdCBjcmVhdGVzIGEgbmV3IDxzdHlsZT4gZWxlbWVudCAod2l0aGluIHRoZSA8aGVhZD4gZWxlbWVudCkuXHJcbi8vIEFsbCBjbGFzcyBuYW1lcyBhbmQgdmFyaWFibGUgbmFtZXMgZGVmaW5lZCB3aXRoaW4gdGhpcyBzdHlsZSB3aWxsIGhhdmUgYSB1bmlxdWUgSUQgYWRkZWQgdG9cclxuLy8gdGhlbSBpbiBvcmRlciB0byBhdm9pZCBkdXBsaWNhdGlvbiBvZiBuYW1lcyBhbW9uZyBvdGhlciBjb21wb25lbnRzIChvZiB0aGUgc2FtZSBvciBvZiBkaWZmZXJlbnRcclxuLy8gdHlwZS4gVGhpcyBjbGFzcyBhbHNvIHB1Ymxpc2hlcyBhIHNlcnZpY2UgaW1wbGVtZW50aW5nIHRoZSBJTG9jYWxTdHlsZVNlcnZpY2VcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxuXHRcdFx0XHRleHRlbmRzIG1pbS5Db21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj5cclxuXHRcdFx0XHRpbXBsZW1lbnRzIElMb2NhbFN0eWxlU2VydmljZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBUUHJvcHMgPSBudWxsKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5tX3VuaXF1ZUlEID0gKE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKSkudG9TdHJpbmcoKTtcclxuXHRcdHRoaXMucnVsZXMgPSBuZXcgTWFwPHN0cmluZyxSdWxlSW5mbz4oKTtcclxuXHRcdHRoaXMucnVsZU5hbWVzID0gW107XHJcblxyXG5cdFx0Ly8gY3JlYXRlIDxzdHlsZT4gZWxlbWVudCBpbiB0aGUgPGhlYWQ+XHJcblx0XHR0aGlzLnN0eWxlRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzdHlsZVwiKTtcclxuXHRcdHRoaXMuc3R5bGVFbG0uaWQgPSB0aGlzLm1fdW5pcXVlSUQ7XHJcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCB0aGlzLnN0eWxlRWxtKTtcclxuXHJcblx0XHQvLy8vIFdlYktpdCBoYWNrIDooXHJcblx0XHQvL3RoaXMuc3R5bGVFbG0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvLyBJTG9jYWxTdHlsZVNlcnZpY2UgaW1wbGVtZW50YXRpb24uXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHVuaXF1ZSBJRCB1c2VkIHRvIGRlY29yYXRlIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgdG8gbWFrZSB0aGVtIHVuaXF1ZS5cclxuXHRwdWJsaWMgZ2V0IHVuaXF1ZUlEKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1fdW5pcXVlSUQ7IH1cclxuXHJcblx0Ly8gUmV0cnVybnMgQ1NTIGNsYXNzIG9yIHZhcmlhYmxlIG5hbWUgZGVjb3JhdGVkIHdpdGggYSB1bmlxdWUgSUQuXHJcblx0cHVibGljIGRlY29yYXRlTmFtZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUgKyB0aGlzLm1fdW5pcXVlSUQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIFB1YmxpYyBpbnRlcmZhY2UuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdC8vIENyZWF0ZXMgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgY3JlYXRlU3R5bGVSdWxlKCBuYW1lOiBzdHJpbmcsIHNlbGVjdG9yPzogc3RyaW5nLCBwcm9wcz86IG1pbS5TdHlsZVByb3BUeXBlKTogSU1Dc3NTdHlsZVJ1bGVcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgZHVtbXkgc3R5bGUgcnVsZVxyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5jcmVhdGVEdW1teVJ1bGUoIG5hbWUsIFwiZHVtbXkge31cIik7XHJcblx0XHRsZXQgY3Nzb21SdWxlOiBDU1NTdHlsZVJ1bGUgPSBpbmZvLmNzc29tUnVsZSBhcyBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIHN0eWxlIHJ1bGUgb2JqZWN0XHJcblx0XHRsZXQgbWNzc1N0eWxlUnVsZTogTUNzc1N0eWxlUnVsZSA9IG5ldyBNQ3NzU3R5bGVSdWxlKCB0aGlzLnVuaXF1ZUlELCBjc3NvbVJ1bGUpO1xyXG5cdFx0aWYgKHNlbGVjdG9yKVxyXG5cdFx0XHRtY3NzU3R5bGVSdWxlLnNldFNlbGVjdG9yKCBzZWxlY3Rvcik7XHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHRcdG1jc3NTdHlsZVJ1bGUuc2V0UHJvcGVydGllcyggcHJvcHMpO1xyXG5cclxuXHRcdGluZm8ubWNzc1J1bGUgPSBtY3NzU3R5bGVSdWxlO1xyXG5cdFx0cmV0dXJuIG1jc3NTdHlsZVJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYSBydWxlIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIGdldFJ1bGUoIG5hbWU6IHN0cmluZyk6IElNQ3NzUnVsZVxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMucnVsZXMuZ2V0KCBuYW1lKTtcclxuXHRcdHJldHVybiBpbmZvID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBpbmZvLm1jc3NSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGEgcnVsZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyByZW1vdmVSdWxlKCBuYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKVxyXG5cdHtcclxuXHRcdHRoaXMuc2l0ZS5wdWJsaXNoU2VydmljZSggXCJMb2NhbFN0eWxlc1wiLCB0aGlzKTtcclxuXHR9XHRcclxuXHJcblxyXG5cclxuXHRwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKVxyXG5cdHtcclxuXHRcdHRoaXMuc2l0ZS51bnB1Ymxpc2hTZXJ2aWNlKCBcIkxvY2FsU3R5bGVzXCIpO1xyXG5cclxuXHRcdHRoaXMuc3R5bGVFbG0ucmVtb3ZlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgc3R5bGUgcnVsZS5cclxuXHRwcml2YXRlIGNyZWF0ZUR1bW15UnVsZSggbmFtZTogc3RyaW5nLCBydWxlVGV4dDogc3RyaW5nKTogUnVsZUluZm9cclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBydWxlIHdpdGggdGhpcyBuYW1lXHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLnJ1bGVzLmdldCggbmFtZSk7XHJcblx0XHRpZiAoaW5mbyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnJlbW92ZVJ1bGUoIG5hbWUpO1xyXG5cclxuXHRcdC8vIHRoZSBuZXcgcnVsZSB3aWxsIGJlY29tZXMgdGhlIGxhc3QgaW4gdGhlIGFycmF5IG9mIHJ1bGVzXHJcblx0XHRsZXQgaW5kZXggPSB0aGlzLnJ1bGVOYW1lcy5sZW5ndGg7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGR1bW15IHN0eWxlIHJ1bGVcclxuXHRcdGxldCBzaGVldDogQ1NTU3R5bGVTaGVldCA9IHRoaXMuc3R5bGVFbG0uc2hlZXQgYXMgQ1NTU3R5bGVTaGVldDtcclxuXHRcdHNoZWV0Lmluc2VydFJ1bGUoIHJ1bGVUZXh0LCBpbmRleCk7XHJcblx0XHRsZXQgY3Nzb21SdWxlOiBDU1NSdWxlID0gc2hlZXQucnVsZXNbaW5kZXhdO1xyXG5cclxuXHRcdC8vIGFkZCB0aGUgcnVsZSB0byBvdXIgaW50ZXJuYWwgc3RydWN0dXJlc1xyXG5cdFx0dGhpcy5ydWxlTmFtZXMucHVzaCggbmFtZSk7XHJcblx0XHRpbmZvID0geyBtY3NzUnVsZTogbnVsbCwgY3Nzb21SdWxlLCBpbmRleCB9O1xyXG5cdFx0dGhpcy5ydWxlcy5zZXQoIG5hbWUsIGluZm8pO1xyXG5cclxuXHRcdHJldHVybiBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbmlxdWUgSUQgdGhhdCBpcyB1c2VkIHRvIGRlY29yYXRlIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgZGVmaW5lZCBieSB0aGUgY29tcG9uZW50LlxyXG5cdHByaXZhdGUgbV91bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBTdHlsZSBlbGVtZW50IERPTSBvYmplY3QuIElzIGRlZmluZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuXHRwcml2YXRlIHN0eWxlRWxtOiBIVE1MU3R5bGVFbGVtZW50O1xyXG5cclxuXHQvLyBNYXAgb2YgcnVsZXMgYnkgdGhlaXIgbmFtZXMuXHJcblx0cHJpdmF0ZSBydWxlczogTWFwPHN0cmluZyxSdWxlSW5mbz47XHJcblxyXG5cdC8vIEFycmF5IG9mIHJ1bGUgbmFtZXMuIFRoaXMgaXMgbmVlZGVkIHRvIGFkanVzdCBpbmRleGVzIG9mIHJ1bGVzIGFmdGVyIGEgcnVsZSBpcyByZW1vdmVkLlxyXG5cdHByaXZhdGUgcnVsZU5hbWVzOiBzdHJpbmdbXTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhlbHBlciB0eXBlIHRoYXQga2VlcHMgaW5mb3JtYXRpb24gYWJvdXQgYSBDU1MgcnVsZSBhZGRlZCB0byBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG50eXBlIFJ1bGVJbmZvID0geyBtY3NzUnVsZTogSU1Dc3NSdWxlLCBjc3NvbVJ1bGU6IENTU1J1bGUsIGluZGV4OiBudW1iZXIgfTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJTUNzc1J1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBDU1MgcnVsZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1Dc3NSdWxlXHJcbntcclxuXHQvLyBVbmlxdWUgSUQgdXNlZCBpbiBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXNcclxuXHRyZWFkb25seSB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBDU1NPTSBydWxlXHJcblx0cmVhZG9ubHkgY3Nzb21SdWxlOiBDU1NSdWxlO1xyXG5cclxuXHQvLyBBcHBlbmRzIHVuaXF1ZSBJRCB0byB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRkZWNvcmF0ZSggbmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuXHQvLyBSZXBsYWNlcyB0aGUgbWFya2VyIFwiKCopXCIgaW4gdGhlIGdpdmVuIG5hbWUgd2l0aCB0aGUgdW5pcXVlIElEXHJcblx0cmVwbGFjZSggbmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTUNzc1J1bGUgY2xhc3MgaXMgYSBiYXNlIGNsYXNzIGZvciBvYmplY3RzIHJlcHJlc2VudGVkIGRpZmZlcmVudCB0eXBlcyBvZiBDU1MgcnVsZXMgdGhhdFxyXG4vLyBhcmUgY3JlYXRlZCBieSB0aGUgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzIGNvbXBvbmVudC4gVGhpcyBvYmplY3Qgc2ltcGx5IGtlZXBzIHRoZSB1bmlxdWVcclxuLy8gSUQgdGhhdCBzaG91bGQgYmUgdXNlZCBieSBkZXJpdmVkIGNsYXNzZXMgd2hlbiBjcmVhdGluZyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgc28gdGhhdCB0aGV5XHJcbi8vIGFyZSBnbG9iYWxseSB1bmlxdWUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBNQ3NzUnVsZUJhc2U8VCBleHRlbmRzIENTU1J1bGU+IGltcGxlbWVudHMgSU1Dc3NSdWxlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdW5pcXVlSUQ6IHN0cmluZywgY3Nzb21SdWxlOiBUKVxyXG5cdHtcclxuXHRcdHRoaXMudW5pcXVlSUQgPSB1bmlxdWVJRDtcclxuXHRcdHRoaXMuY3Nzb21SdWxlID0gY3Nzb21SdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBcHBlbmRzIHVuaXF1ZSBJRCB0byB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgZGVjb3JhdGUoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lICsgdGhpcy51bmlxdWVJRDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVwbGFjZXMgdGhlIG1hcmtlciBcIigqKVwiIGluIHRoZSBnaXZlbiBuYW1lIHdpdGggdGhlIHVuaXF1ZSBJRFxyXG5cdHB1YmxpYyByZXBsYWNlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZS5yZXBsYWNlKCBcIigqKVwiLCB0aGlzLnVuaXF1ZUlEKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5pcXVlIElEIHVzZWQgaW4gY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzXHJcblx0cHVibGljIHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIENTU09NIHJ1bGVcclxuXHRwdWJsaWMgY3Nzb21SdWxlOiBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSU1Dc3NTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTUNzc1N0eWxlUnVsZVxyXG57XHJcblx0Ly8gU2V0cyB0aGUgcnVsZSBzZWxlY3Rvci4gVGhlIHN0cmluZyBjYW4gY29udGFpbiB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZFxyXG5cdC8vIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRzZXRTZWxlY3Rvciggc2VsZWN0b3I6IHN0cmluZyk7XHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIEJvdGggcHJvcGVydHkgbmFtZSBhbmQgcHJvcGVydHkgdmFsdWUgY2FuIHVzZSB0aGVcclxuXHQvLyAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRzZXRQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogc3RyaW5nLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0Ly8gU2V0cyBzZXZlcmFsIHN0eWxlIHByb3BlcnRpZXMuIEJvdGggcHJvcGVydHkgbmFtZXMgYW5kIHByb3BlcnR5IHZhbHVlcyBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFByb3BlcnRpZXMoIHByb3BzOiBtaW0uU3R5bGVQcm9wVHlwZSk6IHZvaWQ7XHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIFByb3BlcnR5IG5hbWUgY2FuIHVzZSB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZVxyXG5cdC8vIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRyZW1vdmVQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNQ3NzU3R5bGVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB0aGF0IGNvbnRhaW5zIGEgc2VsZWN0b3IgYW5kIGEgc2V0IG9mXHJcbi8vIHN0eWxlIHByb3BlcnR5IG5hbWUtdmFsdWUgcGFpcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBNQ3NzU3R5bGVSdWxlIGV4dGVuZHMgTUNzc1J1bGVCYXNlPENTU1N0eWxlUnVsZT4gaW1wbGVtZW50cyBJTUNzc1N0eWxlUnVsZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHVuaXF1ZUlEOiBzdHJpbmcsIGNzc29tUnVsZTogQ1NTU3R5bGVSdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCB1bmlxdWVJRCwgY3Nzb21SdWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgcnVsZSBzZWxlY3Rvci4gVGhlIHN0cmluZyBjYW4gY29udGFpbiB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZFxyXG5cdC8vIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgc2V0U2VsZWN0b3IoIHNlbGVjdG9yOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc2VsZWN0b3JUZXh0ID0gdGhpcy5yZXBsYWNlKCBzZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIEJvdGggcHJvcGVydHkgbmFtZSBhbmQgcHJvcGVydHkgdmFsdWUgY2FuIHVzZSB0aGVcclxuXHQvLyAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgc2V0UHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNzc29tUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eSggdGhpcy5yZXBsYWNlKCBwcm9wTmFtZSksIHRoaXMucmVwbGFjZSggcHJvcFZhbCksXHJcblx0XHRcdFx0XHRcdGltcG9ydGFudD8gXCJpbXBvcnRhbnRcIiA6IHVuZGVmaW5lZCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgc2V2ZXJhbCBzdHlsZSBwcm9wZXJ0aWVzLiBCb3RoIHByb3BlcnR5IG5hbWVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXMgY2FuIHVzZSB0aGVcclxuXHQvLyAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgc2V0UHJvcGVydGllcyggcHJvcHM6IG1pbS5TdHlsZVByb3BUeXBlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghcHJvcHMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGVbdGhpcy5yZXBsYWNlKCBwcm9wTmFtZSldID0gdGhpcy5yZXBsYWNlKCBwcm9wc1twcm9wTmFtZV0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBQcm9wZXJ0eSBuYW1lIGNhbiB1c2UgdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmVcclxuXHQvLyBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHJlbW92ZVByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCB0aGlzLnJlcGxhY2UoIHByb3BOYW1lKSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge1Jvb3RWTn0gZnJvbSBcIi4vUm9vdFZOXCJcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vdEVycm9yVUkgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRwcml2YXRlIHJvb3RWTjogUm9vdFZOO1xyXG5cdHByaXZhdGUgZXJyOiBhbnk7XHJcblx0cHJpdmF0ZSBwYXRoU3RyaW5nOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCByb290Vk46IFJvb3RWTiwgZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5yb290Vk4gPSByb290Vk47XHJcblx0XHR0aGlzLmVyciA9IGVycjtcclxuXHRcdHRoaXMucGF0aFN0cmluZyA9IHBhdGggPyBwYXRoLmpvaW4oIFwiIFxcdTIxOTIgXCIpIDogXCJcIjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXYgaWQ9XCJyb290RXJyb3JcIiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgYWxpZ25JdGVtczogXCJzdGFydFwifX0+XHJcblx0XHRcdDxkaXY+e3RoaXMuZXJyLk1lc3NhZ2V9PC9kaXY+XHJcblx0XHRcdDxkaXY+e3RoaXMucGF0aFN0cmluZ308L2Rpdj5cclxuXHRcdFx0PGhyIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fS8+XHJcblx0XHRcdDxidXR0b24ga2V5PVwiYnRuUmVzdGFydFwiIGNsaWNrPXt0aGlzLm9uUmVzdGFydH0+UmVzdGFydDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uUmVzdGFydCA9ICgpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5yb290Vk4ucmVzdGFydCgpO1xyXG5cdH07XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSb290V2FpdGluZ1VJIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gXCJMb2FkaW5nIC4uLlwiO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIElSb290Vk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQ2hhaW59IGZyb20gXCIuL1ZOQ2hhaW5cIlxyXG5pbXBvcnQge1Jvb3RFcnJvclVJLCBSb290V2FpdGluZ1VJfSBmcm9tIFwiLi9Sb290VUlcIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5sZXQgZ19yZXF1ZXN0SWRsZUNhbGxiYWNrID0gKHdpbmRvdyBhcyBhbnkpLnJlcXVlc3RJZGxlQ2FsbGJhY2tcclxuXHRcdFx0XHQ/ICh3aW5kb3cgYXMgYW55KS5yZXF1ZXN0SWRsZUNhbGxiYWNrXHJcblx0XHRcdFx0OiAoIGZ1bmM6ICgpPT52b2lkKSA9PiBzZXRUaW1lb3V0KCBmdW5jKTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBSb290Vk4gY2xhc3MgaXMgdXNlZCBhcyBhIHRvcC1sZXZlbCB2aXJ0dWFsIG5vZGUgZm9yIGFsbCByZW5kZXJlZCB0cmVlcy4gUm9vdFZOIHNlcnZlc1xyXG4vLyBhcyBhbiBlcnJvciBib3VuZGFyeSBvZiBsYXN0IHJlc29ydC4gV2hlbiBpdCBjYXRjaGVzIGFuIGVycm9yIHRoYXQgd2Fzbid0IGNhdWdodCBieSBhbnlcclxuLy8gZGVzY2VuZGFuZCBub2RlLCBpdCBkaXNwbGF5cyBhIHNpbXBsZSBVSSB0aGF0IHNob3dzIHRoZSBlcnJvciBhbmQgYWxsb3dzIHRoZSB1c2VyIHRvIHJlc3RhcnQuXHJcbi8vIFJvb3RWTiBhbHNvIG1hbmFnZXMgc2VydmljZSBwdWJsaXNoZXJzIGFuZCBzdWJzY3JpYmVycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBSb290Vk4gZXh0ZW5kcyBWTiBpbXBsZW1lbnRzIElSb290Vk4sIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBhbmNob3JETjogRE4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIG1pbS5WTlR5cGUuUm9vdClcclxuXHJcblx0XHR0aGlzLmFuY2hvckROID0gYW5jaG9yRE47XHJcblx0XHR0aGlzLm5hbWUgPSBcIlJvb3RcIjtcclxuXHRcdHRoaXMuaW5pdGlhbGl6ZSggbnVsbCk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cdFx0dGhpcy53aWxsTW91bnQoKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdHB1YmxpYyBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgY29udGVudCB0byBiZSByZW5kZXJlZCB1bmRlciB0aGlzIHJvb3Qgbm9kZSBhbmQgdHJpZ2dlcnMgdXBkYXRlLlxyXG5cdHB1YmxpYyBzZXRDb250ZW50KCBjb250ZW50OiBhbnksIHN5bmM6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcclxuXHJcblx0XHRpZiAoc3luYylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNldCA9IG5ldyBTZXQ8Vk4+KCk7XHJcblx0XHRcdHNldC5hZGQoIHRoaXMpO1xyXG5cdFx0XHR0aGlzLnBlcmZvcm1VcGRhdGVDeWNsZSggc2V0KTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5yZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgYSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24gb3IgYSBjb21wb25lbnQgaW5zdGFuY2UpXHJcblx0Ly8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBpbiBhIHN5bmNocm9ub3VzIHdheS5cclxuXHRwdWJsaWMgc3RhdGljIG1vdW50Um9vdFN5bmMoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgcm9vdCBub2RlIHJlbWVtYmVyZWQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93blxyXG5cdFx0Ly8gcHJvcGVydHlcclxuXHRcdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0XHRpZiAoIXJvb3RWTilcclxuXHRcdHtcclxuXHRcdFx0Ly8gY3JlYXRlIHJvb3Qgbm9kZSBhbmQgcmVtZW1iZXIgaXQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdFx0XHRyb290Vk4gPSBuZXcgUm9vdFZOKCByZWFsQW5jaG9yRE4pO1xyXG5cdFx0XHQocmVhbEFuY2hvckROIGFzIGFueSlbUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdID0gcm9vdFZOO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHQvLyBzZXQgY29udGVudCB0byB0aGUgcm9vdCBub2RlIGFuZCB0cmlnZ2VyIHN5bmNocm9ub3VzIHVwZGF0ZVxyXG5cdFx0cm9vdFZOLnNldENvbnRlbnQoIGNvbnRlbnQsIHRydWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbm1vdW50cyBhIHJvb3Qgbm9kZSB0aGF0IHdhcyBjcmVhdGVkIHVzaW5nIG1vdW50Um9vdFN5bmMuXHJcblx0cHVibGljIHN0YXRpYyB1bm1vdW50Um9vdFN5bmMoIGFuY2hvckROOiBETik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdFx0aWYgKCFyZWFsQW5jaG9yRE4pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0XHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cdFx0aWYgKCFyb290Vk4pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyByZW1vdmUgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdGRlbGV0ZSByZWFsQW5jaG9yRE5bUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cclxuXHRcdHJvb3RWTi5zZXRDb250ZW50KCBudWxsLCB0cnVlKTtcclxuXHRcdHJvb3RWTi53aWxsVW5tb3VudCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IGEgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uIG9yIGEgY29tcG9uZW50IGluc3RhbmNlKVxyXG5cdC8vIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBtb3VudFJvb3QoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgcm9vdCBub2RlIHJlbWVtYmVyZWQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93blxyXG5cdFx0Ly8gcHJvcGVydHlcclxuXHRcdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0XHRpZiAoIXJvb3RWTilcclxuXHRcdHtcclxuXHRcdFx0Ly8gY3JlYXRlIHJvb3Qgbm9kZSBhbmQgcmVtZW1iZXIgaXQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdFx0XHRyb290Vk4gPSBuZXcgUm9vdFZOKCByZWFsQW5jaG9yRE4pO1xyXG5cdFx0XHQocmVhbEFuY2hvckROIGFzIGFueSlbUm9vdFZOLm1pbWJsQW5jaG9yUHJvcE5hbWVdID0gcm9vdFZOO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHNldCBjb250ZW50IHRvIHRoZSByb290IG5vZGUsIHdoaWNoIHdpbGwgdHJpZ2dlciB1cGRhdGVcclxuXHRcdHJvb3RWTi5zZXRDb250ZW50KCBjb250ZW50LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVubW91bnRzIGEgcm9vdCBub2RlIHRoYXQgd2FzIGNyZWF0ZWQgdXNpbmcgc19Nb3VudFJvb3QuXHJcblx0cHVibGljIHN0YXRpYyB1bm1vdW50Um9vdCggYW5jaG9yRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblx0XHRpZiAoIXJlYWxBbmNob3JETilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGdldCBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eS5cclxuXHRcdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0XHRpZiAoIXJvb3RWTilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdFx0ZGVsZXRlIHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblxyXG5cdFx0Ly8gZGVzdHJ1Y3QgdGhlIHJvb3Qgbm9kZSAoYXN5bmNocm9ub3VzbHkpXHJcblx0XHRyb290Vk4uc2V0Q29udGVudCggbnVsbCwgZmFsc2UpO1xyXG5cdFx0cm9vdFZOLnNjaGVkdWxlQ2FsbCggKCkgPT4gcm9vdFZOLndpbGxVbm1vdW50KCkgKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGEgY2hhaW4gb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVycm9yVUkpXHJcblx0XHRcdHJldHVybiB0aGlzLmVycm9yVUk7XHJcblx0XHRlbHNlIGlmICh0aGlzLndhaXRpbmdVSSlcclxuXHRcdFx0cmV0dXJuIHRoaXMud2FpdGluZ1VJO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3VwcG9ydHNFcnJvckhhbmRsaW5nKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoZXJyIGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb21pc2UgPSBlcnIgYXMgUHJvbWlzZTxhbnk+O1xyXG5cdFx0XHR0aGlzLnRocm93blByb21pc2VzLmFkZCggcHJvbWlzZSk7XHJcblx0XHRcdHByb21pc2UudGhlbiggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHRwcm9taXNlLmNhdGNoKCAoKSA9PiB7IHRoaXMub25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlKTsgfSk7XHJcblx0XHRcdGlmICghdGhpcy53YWl0aW5nVUkpXHJcblx0XHRcdFx0dGhpcy53YWl0aW5nVUkgPSBuZXcgUm9vdFdhaXRpbmdVSSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmVycm9yVUkgPSBuZXcgUm9vdEVycm9yVUkoIHRoaXMsIGVyciwgcGF0aCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETiB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgc3RhdGljIG1pbWJsQW5jaG9yUHJvcE5hbWUgPSBcIl9fbWltYmxBbmNob3JQcm9wTmFtZV9fXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gRGlzcGxheXMgdGhlIGNvbnRlbnQgb3JpZ2luYWxseSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG5cdHB1YmxpYyByZXN0YXJ0KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjbGVhciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gYmUgdXBkYXRlZFxyXG5cdFx0dGhpcy5lcnJvclVJID0gbnVsbDtcclxuXHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyBwdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU2VydmljZUluZm8gPSB0aGlzLnNlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdFx0dGhpcy5zZXJ2aWNlSW5mb3Muc2V0KCBpZCwgaW5mbyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5mby5wdWJsaXNoaW5nVk5zLmFkZCggc291cmNlVk4pO1xyXG5cclxuXHRcdC8vIG5vdGlmeSBhbGwgc3Vic2NyaWJlZCBub2RlcyB0aGF0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBzZXJ2aWNlIGhhcyBjaGFuZ2VkXHJcblx0XHRmb3IoIGxldCB2biBvZiBpbmZvLnN1YnNjcmliZWRWTnMpXHJcblx0XHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHVucHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5cdHB1YmxpYyBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU2VydmljZUluZm8gPSB0aGlzLnNlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpbmZvLnB1Ymxpc2hpbmdWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdFx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnNlcnZpY2VJbmZvcy5kZWxldGUoIGlkKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRcdFx0Zm9yKCBsZXQgdm4gb2YgaW5mby5zdWJzY3JpYmVkVk5zKVxyXG5cdFx0XHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgc3Vic2NyaWJlZCB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gdGhpcy5zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRpbmZvID0gbmV3IFNlcnZpY2VJbmZvKCk7XHJcblx0XHRcdHRoaXMuc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGluZm8uc3Vic2NyaWJlZFZOcy5hZGQoIHNvdXJjZVZOKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyB1bnN1YnNjcmliZWQgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU2VydmljZUluZm8gPSB0aGlzLnNlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpbmZvLnN1YnNjcmliZWRWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdFx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnNlcnZpY2VJbmZvcy5kZWxldGUoIGlkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHVibGljIHJlcXVlc3ROb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gYWRkIHRoaXMgbm9kZSB0byB0aGUgbWFwIG9mIG5vZGVzIGZvciB3aGljaCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2VtZW50IG9yXHJcblx0XHQvLyBkZWxldGlvbiBpcyBzY2hlZHVsZWQuIE5vdGUgdGhhdCBhIG5vZGUgd2lsbCBvbmx5IGJlIHByZXNlbnQgb25jZSBpbiB0aGUgbWFwIG5vXHJcblx0XHQvLyBtYXR0ZXIgaG93IG1hbnkgdGltZXMgaXQgY2FsbHMgcmVxdWVzdFVwZGF0ZSgpLlxyXG5cdFx0dGhpcy52bnNTY2hlZHVsZWRGb3JVcGRhdGUuYWRkKCB2bik7XHJcblxyXG5cdFx0Ly8gaWYgdGhpcyBpcyB0aGUgZmlyc3Qgbm9kZSB0aGF0IHNob3VsZCBiZSB1cGRhdGVkLCBzY2hlZHVsZSBhbiB1cGRhdGUgdG8gYmUgcGVyZm9ybWVkXHJcblx0XHQvLyBvbiB0aGUgbmV4dCBjeWNsZS5cclxuXHRcdHRoaXMucmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VscyBhIHByZXZpb3VzbHkgcmVxdWVzdGVkIHVwZGF0ZSBmb3IgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHVibGljIGNhbmNlbE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB0cnkgdG8gcmVtb3ZlIHRoaXMgbm9kZSBmcm9tIHRoZSBzZXQgb2Ygbm9kZXMgZm9yIHdoaWNoIHVwZGF0ZSBvciByZXBsYWNlbWVudCBvclxyXG5cdFx0Ly8gZGVsZXRpb24gaXMgc2NoZWR1bGVkLlxyXG5cdFx0aWYgKCF0aGlzLnZuc1NjaGVkdWxlZEZvclVwZGF0ZS5kZWxldGUoIHZuKSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGlmIHRoaXMgd2FzIHRoZSBsYXN0IG5vZGUgaW4gdGhlIHNldCwgY2FuY2VsIHRoZSByZXF1ZXN0IHRvIHNjaGVkdWxlIHVwZGF0ZSBwcm9jZXNzaW5nLlxyXG5cdFx0dGhpcy5jYW5jZWxGcmFtZVJlcXVlc3RJZk5lZWRlZCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcblx0Ly8gaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0cHVibGljIHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFmdW5jKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5hZGQoIGZ1bmMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuYWRkKCBmdW5jKTtcclxuXHJcblx0XHR0aGlzLnJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbmNlbHMgYSBjYWxsIHRoYXQgaGFzIGJlZW4gc2NoZWR1bGVkIHRvIGJlIG1hZGUgZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZFxyXG5cdC8vIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0cHVibGljIGNhbmNlbFNjaGVkdWxlZEZ1bmNDYWxsKCBmdW5jOiBtaW0uU2NoZWR1bGVkRnVuY1R5cGUsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghZnVuYylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmIChiZWZvcmVVcGRhdGUpXHJcblx0XHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuZGVsZXRlKCBmdW5jKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLmRlbGV0ZSggZnVuYyk7XHJcblxyXG5cdFx0dGhpcy5jYW5jZWxGcmFtZVJlcXVlc3RJZk5lZWRlZCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgcmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGZ1bGZpbGxlZCBwcm9taXNlIGZyb20gb3VyIGludGVybmFsIGxpc3QgYW5kIGlmIHRoZSBsaXN0IGlzIGVtcHR5IGFza3MgdG9cclxuXHQvLyByZS1yZW5kZXJcclxuXHRwcml2YXRlIG9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZTogUHJvbWlzZTxhbnk+KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGhyb3duUHJvbWlzZXMuZGVsZXRlKCBwcm9taXNlKTtcclxuXHRcdGlmICh0aGlzLnRocm93blByb21pc2VzLnNpemUgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2FpdGluZ1VJID0gbnVsbDtcclxuXHRcdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgY2FsbCB0byByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc2hvdWxkIGJlIG1hZGUgYWZ0ZXIgYW4gdXBkYXRlIG9yIGFcclxuXHQvLyBjYWxsIGhhcyBiZWVuIHNjaGVkdWxlZC5cclxuXHRwcml2YXRlIHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zY2hlZHVsZWRGcmFtZUhhbmRsZSA9PT0gMClcclxuXHRcdFx0dGhpcy5zY2hlZHVsZWRGcmFtZUhhbmRsZSA9IGdfcmVxdWVzdElkbGVDYWxsYmFjayggdGhpcy5vblNjaGVkdWxlZEZyYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjYWxsIHRvIGNhbmNlbEFuaW1hdGlvbkZyYW1lIHNob3VsZCBiZSBtYWRlIGFmdGVyIGEgc2NoZWR1bGVkIHVwZGF0ZVxyXG5cdC8vIG9yIGNhbGwgaGFzIGJlZW4gY2FuY2VsZWQuXHJcblx0cHJpdmF0ZSBjYW5jZWxGcmFtZVJlcXVlc3RJZk5lZWRlZCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlLnNpemUgPT09IDAgJiZcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zaXplID09PSAwICYmXHJcblx0XHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zaXplID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHQod2luZG93IGFzIGFueSkuY2FuY2VsSWRsZUNhbGxiYWNrKCB0aGlzLnNjaGVkdWxlZEZyYW1lSGFuZGxlKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZWRGcmFtZUhhbmRsZSA9IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIGEgbmV3IFVJIGN5Y2xlIHdoZW4gdGhlcmUgaXMgYSBuZWVkIHRvIHVwZGF0ZSBVSSBjb21wb25lbnRzXHJcblx0cHJpdmF0ZSBvblNjaGVkdWxlZEZyYW1lID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHQvLyBjbGVhciB0aGUgc2NoZWR1bGVkIGZyYW1lIGhhbmRsZSBzbyB0aGF0IG5ldyB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgcmVxdWVzdHMgd2lsbFxyXG5cdFx0Ly8gc2NoZWR1bGUgYSBuZXcgZnJhbWUuXHJcblx0XHR0aGlzLnNjaGVkdWxlZEZyYW1lSGFuZGxlID0gMDtcclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgaW50ZXJuYWwgc2V0IG9mIG5vZGVzIGFuZCByZS1jcmVhdGUgaXQgc28gdGhhdCBpdCBpcyByZWFkeSBmb3IgbmV3XHJcblx0XHQvLyB1cGRhdGUgcmVxdWVzdHNcclxuXHRcdGxldCB2bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSB0aGlzLnZuc1NjaGVkdWxlZEZvclVwZGF0ZTtcclxuXHRcdHRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgc2V0IG9mIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIGJlZm9yZSB1cGRhdGluZyBub2Rlc1xyXG5cdFx0Y29uc3QgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSB0aGlzLmNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlO1xyXG5cdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBTZXQ8bWltLlNjaGVkdWxlZEZ1bmNUeXBlPigpO1xyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBzZXQgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgYWZ0ZXIgdXBkYXRpbmcgbm9kZXNcclxuXHRcdGNvbnN0IGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSB0aGlzLmNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGU7XHJcblx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgU2V0PG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHJcblx0XHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBiZWZvcmUgdXBkYXRpbmcgY29tcG9uZW50c1xyXG5cdFx0dGhpcy5wZXJmb3JtVXBkYXRlQ3ljbGUoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZSwgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUsIGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gYSBuZXcgVUkgY3ljbGUgd2hlbiB0aGVyZSBpcyBhIG5lZWQgdG8gdXBkYXRlIFVJIGNvbXBvbmVudHNcclxuXHRwcml2YXRlIHBlcmZvcm1VcGRhdGVDeWNsZSggdm5zVG9VcGRhdGU6IFNldDxWTj4sXHJcblx0XHRcdFx0Y2FsbHNCZWZvcmVVcGRhdGU/OiBTZXQ8bWltLlNjaGVkdWxlZEZ1bmNUeXBlPixcclxuXHRcdFx0XHRjYWxsc0FmdGVyVXBkYXRlPzogU2V0PG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaW5jcmVtZW50IHRpY2sgbnVtYmVyLlxyXG5cdFx0dGhpcy5jdXJyZW50VGljaysrO1xyXG5cclxuXHRcdC8vIGNhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBpbnZva2VkIGJlZm9yZSB1cGRhdGluZyBjb21wb25lbnRzXHJcblx0XHRpZiAoY2FsbHNCZWZvcmVVcGRhdGUpXHJcblx0XHRcdHRoaXMuY2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggY2FsbHNCZWZvcmVVcGRhdGUsIFwiYmVmb3JlXCIpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzID0gbmV3IERldGFpbGVkU3RhdHMoIGBNaW1ibCB1cGRhdGUgY3ljbGUgJHt0aGlzLmN1cnJlbnRUaWNrfTogYCk7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMuc3RhcnQoKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0Ly8gYXJyYW5nZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgcGVyZm9ybSB1cGRhdGVzXHJcblx0XHR0aGlzLnBlcmZvcm1Db21taXRQaGFzZSggdGhpcy5wZXJmb3JtUmVuZGVyUGhhc2UoIHRoaXMuYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zVG9VcGRhdGUpKSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMuc3RvcCggdHJ1ZSk7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBudWxsO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBhZnRlciB1cGRhdGluZyBjb21wb25lbnRzXHJcblx0XHRpZiAoY2FsbHNBZnRlclVwZGF0ZSlcclxuXHRcdFx0dGhpcy5jYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc0FmdGVyVXBkYXRlLCBcImFmdGVyXCIpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gQXJyYW5nZXMgdGhlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBzbyB0aGF0IHdlIHVwZGF0ZSBcInVwcGVyXCIgbm9kZXMgYmVmb3JlXHJcblx0Ly8gdGhlIGxvd2VyIG9uZXMuIFRoaXMgY2FuIGhlbHAgYXZvaWQgdHdvIGNvbmRpdGlvbnM6XHJcblx0Ly9cdC0gcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IHR3aWNlIChmaXJzdCBiZWNhdXNlIGl0IGNhbGxlZCB1cGRhdGVNZSkgYW5kIHNlY29uZFxyXG5cdC8vXHRcdGJlY2F1c2UgaXRzIHBhcmVudCB3YXMgYWxzbyB1cGRhdGVkLlxyXG5cdC8vXHQtIHVubmVjZXNzYXkgcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IGJlZm9yZSBpdCBpcyByZW1vdmVkIGJ5IHRoZSBwYXJlbnRcclxuXHQvLyBXZSBhbGxvY2F0ZSBjb250aWd1b3VzIGFycmF5IHdoZXJlIGluZGV4ZXMgY29ycmVzcG9uZCB0byBkZXB0aC4gRWFjaCBlbGVtZW50IGluIHRoaXNcclxuXHQvLyBhcnJheSB3aWxsIGVpdGhlciBiZSB1bmRlZmluZWQgb3IgY29udGFpbiBhbiBhcnJheSBvZiBub2RlcyBhdCB0aGlzIGRlcHRoLlxyXG5cdHByaXZhdGUgYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlOiBTZXQ8Vk4+KTogVk5bXVtdXHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0Ly8gY3JlYXRlIGEgc3BhcnNlIGFycmF5IG9mIGNlcnRhaW4gcmVhc29uYWJsZSBzaXplLiBJZiB3ZSBoYXZlIGRlcHRocyBncmVhdGVyIHRoYW4gdGhpcyxcclxuXHRcdC8vIHRoZSBhcnJheSB3aWxsIGdyb3cgYXV0b21hdGljYWxseSAoYWx0aG91Z2ggaXQgaXMgbGVzcyBlcmZvcm1hbnQgaXQgaXMgc3RpbGwgYWNjZXB0YWJsZSkuXHJcblx0XHRsZXQgdm5zQnlEZXB0aDogVk5bXVtdID0gbmV3IEFycmF5PFZOW10+KDEwMCk7XHJcblx0XHR2bnNTY2hlZHVsZWRGb3JVcGRhdGUuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHRcdHtcclxuXHRcdFx0bGV0IGFyciA9IHZuc0J5RGVwdGhbdm4uZGVwdGhdO1xyXG5cdFx0XHRpZiAoIWFycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFyciA9IFtdO1xyXG5cdFx0XHRcdHZuc0J5RGVwdGhbdm4uZGVwdGhdID0gYXJyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhcnIucHVzaCh2bik7XHJcblx0XHR9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHJldHVybiB2bnNCeURlcHRoO1xyXG5cdH1cclxuXHJcblx0Ly8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcblx0Ly8gc3ViLW5vZGVzIHdoZXJlIG5lY2Vzc2FyeS4gUmV0dXJucyBhcnJheSBvZiBWTkRpc3Agc3RydWN0dXJlcyBmb3IgZWFjaCB1cGRhdGVkIG5vZGUuXHJcblx0cHJpdmF0ZSBwZXJmb3JtUmVuZGVyUGhhc2UoIHZuc0J5RGVwdGg6IFZOW11bXSk6IFZORGlzcFtdXHJcblx0e1xyXG5cdFx0bGV0IHVwZGF0ZWROb2RlRGlzcHM6IFZORGlzcFtdID0gW107XHJcblxyXG5cdFx0Ly8gaXRlcmF0aW9uIG92ZXIgdGhlIHNwYXJzZSBhcnJheSBza2lwcyB0aGUgaG9sZXMuXHJcblx0XHR2bnNCeURlcHRoLmZvckVhY2goICh2bnM6IFZOW10pID0+IHsgdm5zLmZvckVhY2goICh2bjogVk4pID0+XHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGNvbXBvbmVudCB3YXMgYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgY3ljbGUsIGRvbid0IHVwZGF0ZSBpdCBhZ2FpblxyXG5cdFx0XHRcdGlmICh2bi5sYXN0VXBkYXRlVGljayA9PT0gdGhpcy5jdXJyZW50VGljaylcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0dXBkYXRlZE5vZGVEaXNwcy5wdXNoKCB0aGlzLnVwZGF0ZVN0ZW1WaXJ0dWFsKCB2bikpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBmaW5kIHRoZSBuZWFyZXN0IGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuIElmIG5vYm9keSBlbHNlLCBpdCBpcyBpbXBsZW1lbnRlZFxyXG5cdFx0XHRcdC8vIGJ5IHRoZSBSb290Vk4gb2JqZWN0LlxyXG5cdFx0XHRcdGxldCBlcnJvclNlcnZpY2U6IG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2UgPSB2bi5maW5kU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIsIGZhbHNlKTtcclxuXHRcdFx0XHRlcnJvclNlcnZpY2UucmVwb3J0RXJyb3IoIGVyciwgdGhpcy5jdXJyZW50Vk4gPyB0aGlzLmN1cnJlbnRWTi5wYXRoIDogbnVsbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuY3VycmVudFZOID0gbnVsbDtcclxuXHRcdH0pfSk7XHJcblxyXG5cdFx0cmV0dXJuIHVwZGF0ZWROb2RlRGlzcHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCBiZWZvcmUgb3IgYWZ0ZXIgdXBkYXRlIGN5Y2xlLlxyXG5cdHByaXZhdGUgY2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggZnVuY3M6IFNldDwoKT0+dm9pZD4sIGJlZm9yZU9yQWZ0ZXI6IHN0cmluZylcclxuXHR7XHJcblx0XHRmdW5jcy5mb3JFYWNoKCAoZnVuYykgPT5cclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRmdW5jKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFeGNlcHRpb24gd2hpbGUgaW52b2tpbmcgZnVuY3Rpb24gJHtiZWZvcmVPckFmdGVyfSB1cGRhdGluZyBjb21wb25lbnRzXFxuYCwgZXJyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBlcmZvcm1zIHRoZSBjb21taXQgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuXHQvLyBzdWItbm9kZXMgd2hlcmUgbmVjZXNzYXJ5LiBUaGUgQ29tbWl0IHBoYXNlIGNvbnNpc3RzIG9mIHVwZGF0aW5nIERPTSBhbmQgY2FsbGluZyBsaWZlLWN5Y2xlXHJcblx0Ly8gbWV0aG9kcyBkaWRNb3VudCwgZGlkVXBkYXRlIGFuZCB3aWxsVW5tb3VudC5cclxuXHRwcml2YXRlIHBlcmZvcm1Db21taXRQaGFzZSggdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dXBkYXRlZE5vZGVEaXNwcy5mb3JFYWNoKCAoZGlzcDogVk5EaXNwKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnByZVVwZGF0ZVBoeXNpY2FsKCBkaXNwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHVwZGF0ZWROb2RlRGlzcHMuZm9yRWFjaCggKGRpc3A6IFZORGlzcCkgPT5cclxuXHRcdHtcclxuXHRcdFx0dGhpcy51cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR1cGRhdGVkTm9kZURpc3BzLmZvckVhY2goIChkaXNwOiBWTkRpc3ApID0+XHJcblx0XHR7XHJcblx0XHRcdHRoaXMucG9zdFVwZGF0ZSggZGlzcCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgY3JlYXRlcyBhbmQgcmVuZGVycyB0aGlzIG5vZGUgYW5kIGl0cyBzdWItbm9kZXMuIFRoaXMgbWV0aG9kIGlzIGludm9rZWRcclxuXHQvLyB3aGVuIGEgbm9kZSBpcyBmaXJzdCBtb3VudGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXNcclxuXHQvLyBtZXRob2QgKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2V0U2l0ZSBvciByZW5kZXIgbWV0aG9kcyksXHJcblx0Ly8gdGhlIGNvbXBvbmVudCBpcyBhc2tlZCB0byBoYW5kbGUgdGhlIGVycm9yLiBJZiB0aGUgY29tcG9uZW50IGhhbmRsZXMgdGhlIGVycm9yLCB0aGVcclxuXHQvLyBjb250ZW50IHJldHVybmVkIGZyb20gdGhlIGVycm9yIGhhbmRsaW5nIG1ldGhvZCBpcyByZW5kZXJlZDsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9uXHJcblx0Ly8gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXQgaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdFxyXG5cdC8vIGhhbmRsZXMgaXQgb3IgdXAgdG8gdGhlIHJvb3Qgbm9kZS5cclxuXHRwcml2YXRlIGNyZWF0ZVZpcnR1YWwoIHZuOiBWTiwgcGFyZW50OiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBzZXQgZXNzZW50aWFsIG5vZGUgcGFyYW1ldGVycy5cclxuXHRcdHZuLmluaXRpYWxpemUoIHBhcmVudCk7XHJcblxyXG5cdFx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0XHRsZXQgY3VycmVudFZOID0gdm47XHJcblx0XHR0aGlzLmN1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cdFx0dm4ud2lsbE1vdW50KCk7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIG5vZGUgZG9lc24ndCBoYW5kbGUgZXJyb3JzIHdlIGRvbid0IG5lZWQgdG8gd2FzdGUgdGltZSB0byB1c2UgdHJ5L2NhdGNoXHJcblx0XHRpZiAoIXZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZygpKVxyXG5cdFx0XHR0aGlzLmNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm4pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bik7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHQvLyBsZXQgdGhlIG5vZGUgaGFuZGxlIGl0cyBvd24gZXJyb3IgYW5kIHJlLXJlbmRlclxyXG5cdFx0XHRcdHZuLmhhbmRsZUVycm9yKCBlcnIsIHRoaXMuY3VycmVudFZOLnBhdGgpO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWJub2Rlc1xyXG5cdFx0dGhpcy5jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBlcmZvcm1zIGNyZWF0aW9uIGFuZCBpbml0aWFsIHJlbmRlcmluZyBvbiB0aGUgc3ViLW5vZGVzIG9mIG91ciBub2RlLlxyXG5cdHByaXZhdGUgY3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHN1Yk5vZGVzID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB2bi5yZW5kZXIoKSk7XHJcblx0XHRmb3IoIGxldCBzdm4gPSBzdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdFx0dGhpcy5jcmVhdGVWaXJ0dWFsKCBzdm4sIHZuKTtcclxuXHJcblx0XHR2bi5zdWJOb2RlcyA9IHN1Yk5vZGVzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSBjcmVhdGVzIERPTSBub2RlcyBmb3IgdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwcml2YXRlIGNyZWF0ZVBoeXNpY2FsKCB2bjogVk4sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKVxyXG5cdHtcclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdFx0dm4uYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblx0XHR2bi5tb3VudCgpO1xyXG5cclxuXHRcdC8vIElmIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGl0cyBvd24gRE9NIG5vZGUsIGFkZCBpdCB0byB0aGUgRE9NIHRyZWUgYW5kIHVzZSBpdCBhcyBhblxyXG5cdFx0Ly8gYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdFx0bGV0IG93bkROOiBETiA9IHZuLmdldE93bkROKCk7XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBvdXIgb3duIERPTSBub2RlLCBhZGQgaXQgdW5kZXIgdGhlIGFuY2hvciBub2RlXHJcblx0XHRpZiAob3duRE4gIT09IG51bGwpXHJcblx0XHRcdHZuLmFuY2hvckROLmluc2VydEJlZm9yZSggb3duRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHQvLyBpZiB0aGUgbm9kZSBoYXMgc3ViLW5vZGVzLCBhZGQgRE9NIG5vZGVzIGZvciB0aGVtXHJcblx0XHRpZiAodm4uc3ViTm9kZXMuY291bnQgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBkZXRlcm1pbmUgd2hhdCBub2RlcyB0byB1c2UgYXMgYW5jaG9yIGFuZCBcImJlZm9yZVwiIGZvciB0aGUgc3ViLW5vZGVzXHJcblx0XHRcdGxldCBuZXdBbmNob3JETjogRE4gPSBvd25ETiA9PT0gbnVsbCA/IGFuY2hvckROIDogb3duRE47XHJcblx0XHRcdGxldCBuZXdCZWZvcmVETjogRE4gPSBvd25ETiA9PT0gbnVsbCA/IGJlZm9yZUROIDogbnVsbDtcclxuXHJcblx0XHRcdC8vIG1vdW50IGFsbCBzdWItbm9kZXNcclxuXHRcdFx0Zm9yKCBsZXQgc3ZuID0gdm4uc3ViTm9kZXMuZmlyc3Q7IHN2biAhPT0gbnVsbDsgc3ZuID0gc3ZuLm5leHQpXHJcblx0XHRcdFx0dGhpcy5jcmVhdGVQaHlzaWNhbCggc3ZuLCBuZXdBbmNob3JETiwgbmV3QmVmb3JlRE4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSBjYWxscyBkaWRNb3VudCBvbiB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5cdHByaXZhdGUgcG9zdENyZWF0ZSggdm46IFZOKVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dm4uZGlkTW91bnQoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBOb2RlICR7dm4ubmFtZX0gdGhyZXcgZXhjZXB0aW9uICcke2Vyci5tZXNzYWdlfScgaW4gZGlkTW91bnRgKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBzdm4gPSB2bi5zdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdFx0dGhpcy5wb3N0Q3JlYXRlKCBzdm4pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSBjYWxscyB3aWxsVW5tb3VudCBvbiB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5cdHByaXZhdGUgcHJlRGVzdHJveSggdm46IFZOKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biA9IHZuLnN1Yk5vZGVzLmZpcnN0OyBzdm4gIT09IG51bGw7IHN2biA9IHN2bi5uZXh0KVxyXG5cdFx0XHR0aGlzLnByZURlc3Ryb3koIHN2bik7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR2bi53aWxsVW5tb3VudCgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYE5vZGUgJHt2bi5uYW1lfSB0aHJldyBleGNlcHRpb24gJyR7ZXJyLm1lc3NhZ2V9JyBpbiB3aWxsVW5tb3VudGApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSByZW1vdmVzIERPTSBub2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSBkZXN0cm95UGh5c2ljYWwoIHZuOiBWTilcclxuXHR7XHJcblx0XHQvLyBnZXQgdGhlIERPTSBub2RlIGJlZm9yZSB3ZSBjYWxsIHVubW91bnQsIGJlY2F1c2UgdW5tb3VudCB3aWxsIGNsZWFyIGl0LlxyXG5cdFx0bGV0IG93bkROOiBETiA9IHZuLmdldE93bkROKCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblx0XHR2bi51bm1vdW50KCk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93biBET00gbm9kZSwgd2UgcmVtb3ZlIGl0IGZyb20gdGhlIERPTSB0cmVlLiBJbiB0aGlzIGNhc2UsXHJcblx0XHQvLyB3ZSBkb24ndCBuZWVkIHRvIHJlY3Vyc2UgaW50byBzdWItbm9kZXMsIGJlY2F1c2UgdGhleSBhcmUgcmVtb3ZlZCB3aXRoIHRoZSBwYXJlbnQuXHJcblx0XHRpZiAob3duRE4pXHJcblx0XHR7XHJcblx0XHRcdC8vIG91ciBET00gbm9kZXMgY2FuIG9ubHkgYmUgZWl0aGVyIEVsZW1lbnQgb3IgVGV4dCAtIGJvdGggZGVyaXZlIGZyb20gQ2hpbGROb2RlXHJcblx0XHRcdChvd25ETiBhcyBhbnkgYXMgQ2hpbGROb2RlKS5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gbG9vcCBvdmVyIHN1Yi1ub2RlcyBmcm9tIGxhc3QgdG8gZmlyc3QgYmVjYXVzZSB0aGlzIHdheSB0aGUgRE9NIGVsZW1lbnQgcmVtb3ZhbCBpc1xyXG5cdFx0XHQvLyBlYXNpZXIuXHJcblx0XHRcdGZvciggbGV0IHN2biA9IHZuLnN1Yk5vZGVzLmxhc3Q7IHN2biAhPT0gbnVsbDsgc3ZuID0gc3ZuLnByZXYpXHJcblx0XHRcdFx0dGhpcy5kZXN0cm95UGh5c2ljYWwoIHN2bik7XHJcblx0XHR9XHJcblxyXG5cdFx0dm4udGVybWluYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IHJlbmRlcnMgdGhpcyBub2RlIGFuZCB1cGRhdGVzIGl0cyBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5LiBUaGlzIG1ldGhvZCBpc1xyXG5cdC8vIGludm9rZWQgd2hlbiBhIG5vZGUgaXMgYmVpbmcgdXBkYXRlZCBlaXRoZXIgYXMgYSByZXN1bHQgb2YgdXBkYXRlTWUgaW52b2NhdGlvbiBvciBiZWNhdXNlXHJcblx0Ly8gdGhlIHBhcmVudCBub2RlIHdhcyB1cGRhdGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXMgbWV0aG9kXHJcblx0Ly8gKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2hvdWxkVXBkYXRlIG9yIHJlbmRlciBtZXRob2RzKSwgdGhlIGNvbXBvbmVudCBpcyBhc2tlZFxyXG5cdC8vIHRvIGhhbmRsZSB0aGUgZXJyb3IuIElmIHRoZSBjb21wb25lbnQgaGFuZGxlcyB0aGUgZXJyb3IsIHRoZSBjb250ZW50IHJldHVybmVkIGZyb20gdGhlXHJcblx0Ly8gZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb24gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGVcclxuXHQvLyBleGNlcHRpb24gaXMgcHJvcGFnYXRlZCB1cCB1bnRpbCBpdCBpcyBoYW5kbGVkIGJ5IGEgbm9kZSB0aGF0IGhhbmRsZXMgaXQgb3IgdXAgdG8gdGhlIHJvb3RcclxuXHQvLyBub2RlLlxyXG5cdHByaXZhdGUgdXBkYXRlU3RlbVZpcnR1YWwoIHZuOiBWTik6IFZORGlzcFxyXG5cdHtcclxuXHRcdGxldCBkaXNwID0gbmV3IFZORGlzcCgpO1xyXG5cdFx0ZGlzcC5hY3Rpb24gPSBWTkFjdGlvbi5VcGRhdGVTdWJOb2Rlc09ubHk7XHJcblx0XHRkaXNwLm9sZFZOID0gdm47XHJcblx0XHR0aGlzLnVwZGF0ZVZpcnR1YWwoIGRpc3ApO1xyXG5cdFx0cmV0dXJuIGRpc3A7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IHJlbmRlcnMgdGhpcyBub2RlIGFuZCB1cGRhdGVzIGl0cyBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5LiBUaGlzIG1ldGhvZCBpc1xyXG5cdC8vIGludm9rZWQgd2hlbiBhIG5vZGUgaXMgYmVpbmcgdXBkYXRlZCBlaXRoZXIgYXMgYSByZXN1bHQgb2YgdXBkYXRlTWUgaW52b2NhdGlvbiBvciBiZWNhdXNlXHJcblx0Ly8gdGhlIHBhcmVudCBub2RlIHdhcyB1cGRhdGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXMgbWV0aG9kXHJcblx0Ly8gKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2hvdWxkVXBkYXRlIG9yIHJlbmRlciBtZXRob2RzKSwgdGhlIGNvbXBvbmVudCBpcyBhc2tlZFxyXG5cdC8vIHRvIGhhbmRsZSB0aGUgZXJyb3IuIElmIHRoZSBjb21wb25lbnQgaGFuZGxlcyB0aGUgZXJyb3IsIHRoZSBjb250ZW50IHJldHVybmVkIGZyb20gdGhlXHJcblx0Ly8gZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb24gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGVcclxuXHQvLyBleGNlcHRpb24gaXMgcHJvcGFnYXRlZCB1cCB1bnRpbCBpdCBpcyBoYW5kbGVkIGJ5IGEgbm9kZSB0aGF0IGhhbmRsZXMgaXQgb3IgdXAgdG8gdGhlIHJvb3RcclxuXHQvLyBub2RlLlxyXG5cdHByaXZhdGUgdXBkYXRlVmlydHVhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdFx0bGV0IGN1cnJlbnRWTiA9IGRpc3Aub2xkVk47XHJcblx0XHR0aGlzLmN1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHJcblx0XHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGhhbmRsZSBlcnJvcnMgd2UgZG9uJ3QgbmVlZCB0byB3YXN0ZSB0aW1lIHRvIHVzZSB0cnkvY2F0Y2hcclxuXHRcdGlmICghZGlzcC5vbGRWTi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcoKSlcclxuXHRcdFx0dGhpcy51cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3ApO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3ViTm9kZXNWaXJ0dWFsKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5vbGRWTi5oYW5kbGVFcnJvciggZXJyLCB0aGlzLmN1cnJlbnRWTi5wYXRoKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZSBub2RlIHdhcyB1cGRhdGVkIGluIHRoaXMgY3ljbGUgLSB0aGlzIHdpbGwgcHJldmVudCBpdCBmcm9tIFxyXG5cdFx0Ly8gcmVuZGVyaW5nIGFnYWluIGluIHRoaXMgY3ljbGUuXHJcblx0XHRkaXNwLm9sZFZOLmxhc3RVcGRhdGVUaWNrID0gdGhpcy5jdXJyZW50VGljaztcclxuXHJcblx0XHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWJub2Rlc1xyXG5cdFx0dGhpcy5jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBvZiB0aGUgdXBkYXRlIG9uIHRoZSBzdWItbm9kZXMgb2YgdGhlIG5vZGUsIHdoaWNoIGlzIHBhc3NlZCBhc1xyXG5cdC8vIHRoZSBvbGRWTiBtZW1iZXIgb2YgdGhlIFZORGlzcCBzdHJ1Y3R1cmUuXHJcblx0cHJpdmF0ZSB1cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW5kZXIgdGhlIG5ldyBjb250ZW50IGFuZCBidWlsZCBhcnJheSBvZiBkaXNwb3NpdGlvbnMgb2JqZWN0cyBmb3IgdGhlIHN1Yi1ub2Rlcy5cclxuXHRcdHRoaXMuYnVpbGROb2RlRGlzcHMoIGRpc3ApO1xyXG5cclxuXHRcdC8vIHBlcmZvcm0gcmVuZGVyaW5nIGZvciBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQsIHJlcGxhY2VkIG9yIHVwZGF0ZWRcclxuXHRcdGZvciggbGV0IHN1Yk5vZGVEaXNwIG9mIGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHRzdWJOb2RlRGlzcC51cGRhdGVEaXNwID0gc3ViTm9kZURpc3Aub2xkVk4ucHJlcGFyZVVwZGF0ZSggc3ViTm9kZURpc3AubmV3Vk4pO1xyXG5cdFx0XHRcdGlmIChzdWJOb2RlRGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVmlydHVhbCggc3ViTm9kZURpc3ApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZVZpcnR1YWwoIHN1Yk5vZGVEaXNwLm5ld1ZOLCBkaXNwLm9sZFZOKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgY2FsbHMgd2lsbFVubW91bnQgb24gc3ViLW5vZGVzIG1hcmtlZCBmb3IgZGVsZXRpb24uXHJcblx0cHJpdmF0ZSBwcmVVcGRhdGVQaHlzaWNhbCggZGlzcDogVk5EaXNwKVxyXG5cdHtcclxuXHRcdC8vIGZpcnN0LCBzdWItbm9kZXMgbWFya2VkIGZvciBkZWxldGlvblxyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHRcdFx0dGhpcy5wcmVEZXN0cm95KCBzdm4pO1xyXG5cclxuXHRcdC8vIHNlY29uZCwgc3ViLW5vZGVzIG1hcmtlZCBmb3IgdXBkYXRlIG9yIGluc2VydFxyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHRcdHRoaXMucHJlVXBkYXRlUGh5c2ljYWwoIHN1Yk5vZGVEaXNwKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgcGVyZm9ybXMgRE9NIHVwZGF0ZXMgY29ycmVzcG9uZGluZyB0byB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5cdHByaXZhdGUgdXBkYXRlUGh5c2ljYWwoIGRpc3A6IFZORGlzcClcclxuXHR7XHJcblx0XHQvLyBnZXQgdGhlIG5vZGUgd2hvc2UgY2hpbGRyZW4gYXJlIGJlaW5nIHVwZGF0ZWQuIFRoaXMgaXMgYWx3YXlzIHRoZSBvbGRWTiBtZW1iZXIgb2ZcclxuXHRcdC8vIHRoZSBkaXNwIHN0cnVjdHVyZS5cclxuXHRcdGxldCB2biA9IGRpc3Aub2xkVk47XHJcblxyXG5cdFx0Ly8gcmVtb3ZlIGZyb20gRE9NIHRoZSBvbGQgbm9kZXMgZGVzaWduYXRlZCB0byBiZSByZW1vdmVkICh0aGF0IGlzLCB0aG9zZSBmb3Igd2hpY2ggdGhlcmVcclxuXHRcdC8vIGlzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd2lsbCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2UgaXQpIGFuZCB0aGVuIHRob3NlXHJcblx0XHQvLyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLiBXZSBuZWVkIHRvIHJlbW92ZSBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZ1xyXG5cdFx0Ly8gbmV3IC0gb25lIHJlYXNvbiBpcyB0byBwcm9wZXJseSBtYWludGFpbiByZWZlcmVuY2VzLlxyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHRcdFx0dGhpcy5kZXN0cm95UGh5c2ljYWwoIHN2bik7XHJcblxyXG5cdFx0Ly8gY2xlYXIgb3VyIGN1cnJlbnQgbGlzdCBvZiBzdWItbm9kZXMgYW5kIHJlLWFsbG9jYXRlIGl0IGZvciBuZXcgc3ViLW5vZGUgLSB3ZSB3aWxsXHJcblx0XHQvLyBwb3B1bGF0ZSBpdCB3aGlsZSB1cGRhdGluZyB0aGVtXHJcblx0XHR2bi5zdWJOb2Rlcy5jbGVhcigpO1xyXG5cclxuXHRcdC8vIGRldGVybWluZSB0aGUgYW5jaG9yIG5vZGUgdG8gdXNlIHdoZW4gaW5zZXJ0aW5nIG9yIG1vdmluZyBuZXcgbm9kZXNcclxuXHRcdGxldCBvd25ETiA9IHZuLmdldE93bkROKCk7XHJcblx0XHRsZXQgYW5jaG9yRE4gPSBvd25ETiAhPT0gbnVsbCA/IG93bkROIDogdm4uYW5jaG9yRE47XHJcblxyXG5cdFx0Ly8gaWYgdGhpcyB2aXJ0dWFsIG5vZGUgZG9lc24ndCBkZWZpbmUgaXRzIG93biBET00gbm9kZSAodHJ1ZSBmb3IgY29tcG9uZW50cyksIHdlIHdpbGxcclxuXHRcdC8vIG5lZWQgdG8gZmluZCBhIERPTSBub2RlIGJlZm9yZSB3aGljaCB0byBzdGFydCBpbnNlcnRpbmcgb3IgbW92aW5nIG5vZGVzLiBOdWxsIG1lYW5zXHJcblx0XHQvLyBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgYW5jaG9yIG5vZGUncyBjaGlsZHJlbi5cclxuXHRcdGxldCBiZWZvcmVETjogRE4gPSBvd25ETiAhPT0gbnVsbCA/IG51bGwgOiB2bi5nZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggYW5jaG9yRE4pO1xyXG5cclxuXHRcdC8vIHBlcmZvcm0gRE9NIG9wZXJhdGlvbnMgYWNjb3JkaW5nIHRvIHN1Yi1ub2RlIGRpc3Bvc2l0aW9uLiBXZSBuZWVkIHRvIGRlY2lkZSBmb3IgZWFjaFxyXG5cdFx0Ly8gbm9kZSB3aGF0IG5vZGUgdG8gdXNlIHRvIGluc2VydCBvciBtb3ZlIGl0IGJlZm9yZS4gV2UgZ28gZnJvbSB0aGUgZW5kIG9mIHRoZSBsaXN0IG9mXHJcblx0XHQvLyBuZXcgbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIHdlIGRlY2lkZSB0aGUgdmFsdWUgb2YgdGhlIFwiYmVmb3JlRE5cIi5cclxuXHRcdGZvciggbGV0IGkgPSBkaXNwLnN1Yk5vZGVEaXNwcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHN1Yk5vZGVEaXNwID0gZGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdGxldCBhY3Rpb24gPSBzdWJOb2RlRGlzcC5hY3Rpb247XHJcblx0XHRcdGlmIChhY3Rpb24gPT09IFZOQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRWTiA9IHN1Yk5vZGVEaXNwLm9sZFZOO1xyXG5cdFx0XHRcdGxldCBuZXdWTiA9IHN1Yk5vZGVEaXNwLm5ld1ZOO1xyXG5cdFx0XHRcdGlmIChzdWJOb2RlRGlzcC51cGRhdGVEaXNwLnNob3VsZENvbW1pdClcclxuXHRcdFx0XHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gaWYgdGhlIHVwZGF0ZWQgb2xkIFZOIChvciBvbmUgb2YgaXRzIHN1Yi1ub2RlcykgZGVmaW5lcyBhIERPTSBub2RlIGFuZCBpdFxyXG5cdFx0XHRcdC8vIGlzIG5vdCBwb3NpdGlvbmVkIGJlZm9yZSB0aGUgY3VycmVudCBcImJlZm9yZUROXCIsIG1vdmUgaXQgdGhlcmUuIEl0IGFsc29cclxuXHRcdFx0XHQvLyBiZWNvbWVzIHRoZSBuZXcgRE9NIG5vZGUgYmVmb3JlIHdoaWNoIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcblx0XHRcdFx0bGV0IGZpcnN0RE4gPSBvbGRWTi5nZXRGaXJzdEROKCk7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT09IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgd2UgbmVlZCB0byBtb3ZlIG91ciBub2RlXHJcblx0XHRcdFx0XHRsZXQgbmV4dFN1Yk5vZGVWTkRpc3A6IFZORGlzcCA9IGkgPT09IGRpc3Auc3ViTm9kZURpc3BzLmxlbmd0aCAtIDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0PyB1bmRlZmluZWQgOiBkaXNwLnN1Yk5vZGVEaXNwc1tpKzFdO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2hvdWxkTW92ZVZOKCBzdWJOb2RlRGlzcCwgbmV4dFN1Yk5vZGVWTkRpc3ApICYmIGZpcnN0RE4ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRhbmNob3JETi5pbnNlcnRCZWZvcmUoIGZpcnN0RE4sIGJlZm9yZUROKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHZuLmdldFN0YXRzQ2F0ZWdvcnkoKSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG4vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5XHJcblx0XHRcdFx0aWYgKHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVQaHlzaWNhbCggc3ViTm9kZURpc3ApO1xyXG5cclxuXHRcdFx0XHR2bi5zdWJOb2Rlcy5pbnNlcnRWTiggb2xkVk4pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBuZXdWTiA9IHN1Yk5vZGVEaXNwLm5ld1ZOO1xyXG5cclxuXHRcdFx0XHQvLyBzaW5jZSB3ZSBhbHJlYWR5IGRlc3Ryb3llZCBvbGQgbm9kZXMgZGVzaWduYXRlZCB0byBiZSByZXBsYWNlZCwgdGhlIGNvZGUgaXNcclxuXHRcdFx0XHQvLyBpZGVudGljYWwgZm9yIFJlcGxhY2UgYW5kIEluc2VydCBhY3Rpb25zXHJcblx0XHRcdFx0dGhpcy5jcmVhdGVQaHlzaWNhbCggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0XHRsZXQgZmlyc3RETjogRE4gPSBuZXdWTi5nZXRGaXJzdEROKCk7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT09IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblxyXG5cdFx0XHRcdHZuLnN1Yk5vZGVzLmluc2VydFZOKCBuZXdWTik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgY2FsbHMgYXBwcm9wcmlhdGUgbGlmZS1jeWNsZSBtZXRob2RzIG9uIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSBwb3N0VXBkYXRlKCBkaXNwOiBWTkRpc3ApXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZOQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHdlIHVwZGF0ZWQgc3ViLW5vZGVzLCBub3RpZnkgdGhlbSB0b29cclxuXHRcdFx0XHRpZiAoc3ViTm9kZURpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHR0aGlzLnBvc3RVcGRhdGUoIHN1Yk5vZGVEaXNwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZOQWN0aW9uLkluc2VydClcclxuXHRcdFx0XHR0aGlzLnBvc3RDcmVhdGUoIHN1Yk5vZGVEaXNwLm5ld1ZOKTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdGRpc3Aub2xkVk4uZGlkVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgTm9kZSAke2Rpc3Aub2xkVk4ubmFtZX0gdGhyZXcgZXhjZXB0aW9uICcke2Vyci5tZXNzYWdlfScgaW4gZGlkVXBkYXRlYCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbXBhcmVzIHR3byBjaGFpbnMgb2Ygbm9kZXMgKG9sZCBhbmQgbmV3KSBhbmQgZmlsbHMgdHdvIGFycmF5cyBmb3Igc3ViLW5vZGVzOlxyXG5cdC8vXHQtIGFycmF5IG9mIG5vZGUgZGlzcG9zaXRpb24gb2JqZWN0cyBjb3JyZXNwb25kaW5nIHRvIG5ldyBzdWItbm9kZXMuIEVhY2ggZGlzcG9zaXRpb25cclxuXHQvL1x0XHRpbmRpY2F0ZXMgd2hldGhlciB0aGUgbmV3IHN1Yi1ub2RlIHNob3VsZCBiZSBqdXN0IGluc2VydGVkIG9yIHdoZXRoZXIgaXQgc2hvdWxkIHVwZGF0ZVxyXG5cdC8vXHRcdHRoZSBvbGQgc3ViLW5vZGUuXHJcblx0Ly9cdC0gYXJyYXkgb2Ygb2xkIHN1Yi1ub2RlcyB3aGljaCBzaG91bGQgYmUgcmVtb3ZlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGludm9rZWQgd2l0aCB0aGUgZGlzcCBvYmplY3Qgd2hvc2Ugb2xkVk4gZmllbGQgaXMgbm9uLW51bGwuXHJcblx0cHJpdmF0ZSBidWlsZE5vZGVEaXNwcyggZGlzcDogVk5EaXNwKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vZGlzcC5zdWJOb2RlRGlzcHMgPSBbXTtcclxuXHRcdC8vZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlID0gW107XHJcblxyXG5cdFx0Ly8gcmVuZGVyIHRoZSBuZXcgY29udGVudDtcclxuXHRcdGxldCBuZXdDaGFpbiA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggZGlzcC5vbGRWTi5yZW5kZXIoKSk7XHJcblxyXG5cdFx0Ly8gYnVpbGQgbWFwIG9mIG9sZCBrZXllZCBub2RlcyBhbmQgYW4gYXJyYXkgb2Ygb2xkIG5vbi1rZXllZCBub2Rlc1xyXG5cdFx0bGV0IGtleWVkTWFwOiBNYXA8YW55LFZOPiA9IG5ldyBNYXA8YW55LFZOPigpO1xyXG5cdFx0bGV0IG5vbktleWVkTGlzdDogVk5bXSA9IFtdO1xyXG5cdFx0bGV0IG9sZENoYWluID0gZGlzcC5vbGRWTi5zdWJOb2RlcztcclxuXHRcdGZvciggbGV0IG9sZFZOID0gb2xkQ2hhaW4uZmlyc3Q7IG9sZFZOICE9PSBudWxsOyBvbGRWTiA9IG9sZFZOLm5leHQpXHJcblx0XHR7XHJcblx0XHRcdGlmIChvbGRWTi5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRub25LZXllZExpc3QucHVzaCggb2xkVk4pO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0a2V5ZWRNYXAuc2V0KCBvbGRWTi5rZXksIG9sZFZOKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IG5vZGVzXHJcblx0XHRsZXQgbm9uS2V5ZWRMaXN0TGVuZ3RoOiBudW1iZXIgPSBub25LZXllZExpc3QubGVuZ3RoO1xyXG5cdFx0bGV0IG5vbktleWVkSW5kZXg6IG51bWJlciA9IDA7XHJcblx0XHRmb3IoIGxldCBuZXdWTiA9IG5ld0NoYWluLmZpcnN0OyBuZXdWTiAhPT0gbnVsbDsgbmV3Vk4gPSBuZXdWTi5uZXh0KVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYWN0aW9uOiBWTkFjdGlvbjtcclxuXHRcdFx0bGV0IG9sZFZOOiBWTjtcclxuXHRcdFx0aWYgKG5ld1ZOLmtleSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0b2xkVk4gPSBrZXllZE1hcC5nZXQoIG5ld1ZOLmtleSk7XHJcblxyXG5cdFx0XHRcdC8vIGlmIHdlIGZvdW5kIG9sZCBub2RlIHRoZW4gcmVtb3ZlIHRoZSBvbGQgbm9kZSBmcm9tIHRoZSBtYXAgLSB0aGlzIHdheSBhdFxyXG5cdFx0XHRcdC8vIHRoZSBlbmQgb2YgdGhlIGxvb3AgYWxsIG9sZCBub2RlcyByZW1haW5pbmcgaW4gdGhlIG1hcCBzaG91bGQgYmUgZGVsZXRlZFxyXG5cdFx0XHRcdGlmIChvbGRWTiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0a2V5ZWRNYXAuZGVsZXRlKCBuZXdWTi5rZXkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKG5vbktleWVkSW5kZXggPCBub25LZXllZExpc3RMZW5ndGgpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRvbGRWTiA9IG5vbktleWVkTGlzdFtub25LZXllZEluZGV4XTtcclxuXHRcdFx0XHRub25LZXllZEluZGV4Kys7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBzdWJOb2RlRGlzcCA9IG5ldyBWTkRpc3AoKTtcclxuXHRcdFx0c3ViTm9kZURpc3AubmV3Vk4gPSBuZXdWTjtcclxuXHJcblx0XHRcdC8vIGJ5IG5vdywgaWYgd2UgZGlkbid0IGZpbmQgYW4gb2xkIG5vZGUsIHRoZW4gdGhlIG5ldyBub2RlIHNob3VsZCBiZSBpbnNlcnRlZDtcclxuXHRcdFx0Ly8gb3RoZXJ3aXNlLCB3ZSBkZWNpZGUgb24gd2hldGhlciB0aGUgbmV3IG5vZGUgc2hvdWxkIGJlIHVzZWQgdG8gdXBkYXRlIG9yXHJcblx0XHRcdC8vIHJlcGxhY2UgdGhlIG9sZCBub2RlXHJcblx0XHRcdGlmIChvbGRWTiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHN1Yk5vZGVEaXNwLmFjdGlvbiA9IFZOQWN0aW9uLkluc2VydDtcclxuXHRcdFx0ZWxzZSBpZiAob2xkVk4udHlwZSA9PT0gbmV3Vk4udHlwZSAmJiBvbGRWTi5pc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzdWJOb2RlRGlzcC5hY3Rpb24gPSBWTkFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0c3ViTm9kZURpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB3ZSBhcmUgaGVyZSBpZiB0aGUgbmV3IG5vZGUgc2hvdWxkIHJlcGxhY2UgdGhlIG9sZCBvbmUuIFdlIGFkZCB0aGUgb2xkIG5vZGUgdG9cclxuXHRcdFx0XHQvLyB0aGUgbGlzdCBvZiB0aG9zZSB0byBiZSByZW1vdmVkIGFuZCBpbmRpY2F0ZVxyXG5cdFx0XHRcdGRpc3Auc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTik7XHJcblx0XHRcdFx0c3ViTm9kZURpc3AuYWN0aW9uID0gVk5BY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkaXNwLnN1Yk5vZGVEaXNwcy5wdXNoKCBzdWJOb2RlRGlzcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gb2xkIGtleWVkIG5vZGVzIHJlbWFpbmluZyBpbiB0aGUgbWFwIHdpbGwgYmUgdW5tb3VudGVkIGJlY2F1c2UgdGhlc2UgYXJlIHRoZSBvbGQgbm9kZXNcclxuXHRcdC8vIGZvciB3aGljaCB0aGVyZSB3ZXJlIG5vIG5ldyBub2RlcyB3aXRoIHRoZSBzYW1lIGtleS5cclxuXHRcdGZvciggbGV0IG9sZFZOIG9mIGtleWVkTWFwLnZhbHVlcygpKVxyXG5cdFx0XHRkaXNwLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pO1xyXG5cclxuXHRcdC8vIG9sZCBub24ta2V5ZWQgbm9kZXMgZnJvbSB0aGUgY3VycmVudCBpbmRleCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0IHdpbGwgYmUgdW5tb3VudGVkXHJcblx0XHRmb3IoIGxldCBpID0gbm9uS2V5ZWRJbmRleDsgaSA8IG5vbktleWVkTGlzdExlbmd0aDsgaSsrKVxyXG5cdFx0XHRkaXNwLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggbm9uS2V5ZWRMaXN0W2ldKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHNob3VsZCBiZSBtb3ZlZCBiYXNlZCBvbiBpdHMgZGlzcG9zaXRpb24uXHJcblx0cHJpdmF0ZSBzaG91bGRNb3ZlVk4oIHZuRGlzcDogVk5EaXNwLCBuZXh0Vk5EaXNwOiBWTkRpc3ApOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKG5leHRWTkRpc3AgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIHZuRGlzcC5vbGRWTi5uZXh0ICE9PSBudWxsO1xyXG5cdFx0ZWxzZSBpZiAobmV4dFZORGlzcC5hY3Rpb24gPT09IFZOQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0cmV0dXJuIHZuRGlzcC5vbGRWTi5uZXh0ICE9PSBuZXh0Vk5EaXNwLm9sZFZOO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udGVudCByZW5kZXJlZCB1bmRlciB0aGlzIHJvb3Qgbm9kZS5cclxuXHRwcml2YXRlIGNvbnRlbnQ6IGFueTtcclxuXHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBhbiBleGNlcHRpb24gd2FzIGNhdWdodCBmcm9tIGRlc2NlbmRhbmQgbm9kZXMuXHJcblx0cHJpdmF0ZSBlcnJvclVJOiBSb290RXJyb3JVSSA9IG51bGw7XHJcblxyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gYW4gZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgd2FpdGluZ1VJOiBSb290V2FpdGluZ1VJID0gbnVsbDtcclxuXHJcblx0Ly8gU2V0IG9mIHByb21pc2VzIHRocm93biBieSBkZXNjZW5kYW50IG5vZGVzIGFuZCBub3QgeWV0IGZ1bGZpbGxlZC5cclxuXHRwcml2YXRlIHRocm93blByb21pc2VzID0gbmV3IFNldDxQcm9taXNlPGFueT4+KCk7XHJcblxyXG5cdC8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXRzIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBzdWJzY3JpYmVkIHRvIHRoaXMgc2VydmljZS5cclxuXHRwcml2YXRlIHNlcnZpY2VJbmZvcyA9IG5ldyBNYXA8c3RyaW5nLFNlcnZpY2VJbmZvPigpO1xyXG5cclxuXHQvLyBNYXAgb2Ygbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBvbiB0aGUgbmV4dCBVSSBjeWNsZS4gV2UgdXNlIE1hcCBpbiBvcmRlciB0byBub3QgaW5jbHVkZVxyXG5cdC8vIHRoZSBzYW1lIG5vZGUgbW9yZSB0aGFuIG9uY2UgLSB3aGljaCBjYW4gaGFwcGVuIGlmIHRoZSBub2RlJ3MgcmVxdWVzdFVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkXHJcblx0Ly8gbW9yZSB0aGFuIG9uY2UgZHVyaW5nIGEgc2luZ2xlIHJ1biAoZS5nLiBkdXJpbmcgZXZlbnQgcHJvY2Vzc2luZykuIFRoZSB2YWx1ZSBtYXBwZWQgdG8gdGhlXHJcblx0Ly8gbm9kZSBkZXRlcm1pbmVzIHRoZSBvcGVyYXRpb24gdG8gYmUgcGVyZm9ybWVkOlxyXG5cdC8vXHQtIHVuZGVmaW5lZCAtIHRoZSBub2RlIHdpbGwgYmUgdXBkYXRlZFxyXG5cdC8vXHQtIG51bGwgLSB0aGUgbm9kZSB3aWxsIGJlIGRlbGV0ZWQgZnJvbSBpdHMgcGFyZW50XHJcblx0Ly9cdC0gYW55dGhpbmcgZWxzZSAtIHRoZSBub2RlIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGlzIG5ldyBjb250ZW50XHJcblx0cHJpdmF0ZSB2bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cclxuXHQvLyBTZXQgb2YgZnVuY3Rpb25zIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgdXBvbiBhIG5ldyBhbmltYXRpb24gZnJhbWUgYmVmb3JlXHJcblx0Ly8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC5cclxuXHRwcml2YXRlIGNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gbmV3IFNldDxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblxyXG5cdC8vIFNldCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBhZnRlclxyXG5cdC8vIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYXJlIHVwZGF0ZWQuXHJcblx0cHJpdmF0ZSBjYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlID0gbmV3IFNldDxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblxyXG5cdC8vIEhhbmRsZSBvZiB0aGUgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QgKGluIGNhc2UgaXQgc2hvdWxkIGJlIGNhbmNlbGVkKS5cclxuXHRwcml2YXRlIHNjaGVkdWxlZEZyYW1lSGFuZGxlOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOdW1iZXIgdGhhdCBzZXJ2ZXMgYXMgYSB1bmlxdWUgSUQgb2YgYW4gdXBkYXRlIGN5Y2xlLiBFYWNoIHVwZGF0ZSBjeWNsZSB0aGUgcm9vdCBub2RlXHJcblx0Ly8gaW5jcmVtZW50cyB0aGlzIG51bWJlci4gRWFjaCBub2RlIGJlaW5nIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSBpcyBhc3NpZ25lZCB0aGlzIG51bWJlci5cclxuXHQvLyBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiB3aGVuIGJvdGggYSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlXHJcblx0Ly8gdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRwcml2YXRlIGN1cnJlbnRUaWNrOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOb2RlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuIER1cmluZyBjcmVhdGlvbiBhbmQgdXBkYXRpbmcgcHJvY2VzcywgdGhpcyB2YWx1ZSBpcyBzZXRcclxuXHQvLyBldmVyeSB0aW1lIHdlIHJlY3Vyc2UgaW50byBzdWItbm9kZXMgYW5kIHJlc3RvcmVkIHdoZW4gd2UgcmV0dXJuIGJhY2sgdG8gdGhlIG5vZGUuIElmXHJcblx0Ly8gZHVyaW5nIGNyZWF0aW9uIG9yIHVwZGF0aW5nIHByb2Nlc3MgYW4gZXhjZXB0aW9uIGlzIHRocm93biBhbmQgaXMgY2F1Z2h0IGJ5IHNvbWUgdXBwZXJcclxuXHQvLyBsZXZlbCBub2RlLCB0aGlzIHZhbHVlIHdpbGwgc3RpbGwgcG9pbnQgYXQgdGhlIG5vZGUgdGhhdCBjYXVzZWQgdGhlIGV4Y2VwdGlvbi5cclxuXHRwcml2YXRlIGN1cnJlbnRWTjogVk4gPSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBrZXB0IGJ5IFJvb3QgdmlydHVhbCBub2RlIGFib3V0IHNlcnZpY2UgcHVibGljYXRpb25zIGFuZCBzdWJzY3JpcHRpb25zLiBUaGUgc2FtZVxyXG4vLyBzZXJ2aWNlIGNhbiBiZSBwdWJsaXNoZWQgYW5kIHN1YnNjcmliZWQgdG8gYnkgbXVsdGlwbGUgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBTZXJ2aWNlSW5mb1xyXG57XHJcblx0cHVibGlzaGluZ1ZOczogU2V0PFZOPiA9IG5ldyBTZXQ8Vk4+KCk7XHJcblx0c3Vic2NyaWJlZFZOczogU2V0PFZOPiA9IG5ldyBTZXQ8Vk4+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTkFjdGlvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgcG9zc2libGUgYWN0aW9ucyB0byBwZXJmb3JtIGZvciBuZXcgbm9kZXMgZHVyaW5nXHJcbi8vIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBWTkFjdGlvblxyXG57XHJcblx0Ly8gVGhlIG5vZGUncyBjaGlsZHJlbiBzaG91bGQgYmV1cGRhdGVkLlxyXG5cdFVwZGF0ZVN1Yk5vZGVzT25seSA9IDAsXHJcblxyXG5cdC8vIFRoZSBuZXcgbm9kZSBzaG91bGQgYmUgaW5zZXJ0ZWQuIFRoaXMgbWVhbnMgdGhhdCBlaXRoZXIgdGhlcmUgd2FzIG5vIGNvdW50ZXJwYXJ0IG9sZCBub2RlXHJcblx0Ly8gZm91bmQgb3IgdGhlIGZvdW5kIG5vZGUgY2Fubm90IGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBvbGQgb25lIChlLmcuIG9mIGRpZmZlcmVudCB0eXBlKS5cclxuXHRJbnNlcnQgPSAxLFxyXG5cclxuXHQvLyBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBvbGQgbm9kZS5cclxuXHRVcGRhdGUgPSAyLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5EaXNwIGNsYXNzIGRlc2NyaWJlcyBhIGRpc3Bvc2l0aW9uIGZvciBhIG5vZGUgZHVyaW5nIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBWTkRpc3Bcclxue1xyXG5cdC8vIEFjdGlvbiB0byBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGVcclxuXHRhY3Rpb246IFZOQWN0aW9uO1xyXG5cclxuXHQvLyBOZXcgdmlydHVhbCBub2RlIHRvIGluc2VydCwgdXBkYXRlIG9yIHJlcGxhY2UgYW4gb2xkIG5vZGVcclxuXHRuZXdWTjogVk47XHJcblxyXG5cdC8vIE9sZCB2aXJ0dWFsIG5vZGUgdG8gYmUgdXBkYXRlZCBvciByZXBsYWNlZC4gVGhpcyBpcyBub3QgdXNlZCBmb3IgdGhlIGluc2VydCBhY3Rpb24uXHJcblx0b2xkVk46IFZOO1xyXG5cclxuXHQvLyBEaXNwb3NpdGlvbiBmbGFncyBmb3IgdGhlIFVwZGF0ZSBhY3Rpb24uIFRoaXMgZmllbGQgaXMgbm90IHVzZWQgZm9yIEluc2VydCBhbmQgUmVwbGFjZVxyXG5cdC8vIGFjdGlvbnMuXHJcblx0dXBkYXRlRGlzcDogVk5VcGRhdGVEaXNwO1xyXG5cclxuXHQvLyBBcnJheSBvZiBkaXNwb3NpdGlvbiBvYmplY3RzIGZvciBzdWItbm9kZXMuXHJcblx0c3ViTm9kZURpc3BzOiBWTkRpc3BbXSA9IFtdO1xyXG5cclxuXHQvLyBBcnJheSBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBkdXJpbmcgdXBkYXRlIG9mIHRoZSBzdWItbm9kZXMuXHJcblx0c3ViTm9kZXNUb1JlbW92ZTogVk5bXSA9IFtdO1xyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCB7SW5zdGFuY2VWTn0gZnJvbSBcIi4vSW5zdGFuY2VWTlwiXHJcbmltcG9ydCB7Q2xhc3NWTn0gZnJvbSBcIi4vQ2xhc3NWTlwiXHJcbmltcG9ydCB7RnVuY1ZOfSBmcm9tIFwiLi9GdW5jVk5cIlxyXG5pbXBvcnQge0VsbVZOfSBmcm9tIFwiLi9FbG1WTlwiXHJcbmltcG9ydCB7VGV4dFZOfSBmcm9tIFwiLi9UZXh0Vk5cIlxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGEgY2hhaW4gb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBjb250ZW50LiBGb3IgYWxsIHR5cGVzIG9mIGNvbnRlbnRzIG90aGVyIHRoYW4gYW5cclxuLy8gYXJyYXksIHRoZSByZXR1cm5lZCBjaGFpbiBjb250YWlucyBhIHNpbmdsZSBWTi4gSWYgdGhlIGlucHV0IGNvbnRlbnQgaXMgYW4gYXJyYXksIHRoZW5cclxuLy8gYSBWTiBpcyBjcmVhdGVkIGZvciBlYWNoIG9mIHRoZSBhcnJheSBlbGVtZW50cy4gU2luY2UgYXJyYXkgZWxlbWVudHMgbWlnaHQgYWxzbyBiZSBhcnJheXMsXHJcbi8vIHRoZSBwcm9jZXNzIGlzIHJlY3Vyc2l2ZS5cclxuZnVuY3Rpb24gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCBjb250ZW50OiBhbnkpOiBWTkNoYWluXHJcbntcclxuXHRjb25zdCBjaGFpbiA9IG5ldyBWTkNoYWluKCk7XHJcblx0bGV0IGNvbnRlbnRUeXBlOiBzdHJpbmcgPSB0eXBlb2YgY29udGVudDtcclxuXHRpZiAoY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB1bmRlZmluZWQgfHwgY29udGVudFR5cGUgPT09IFwiYm9vbGVhblwiIHx8IGNvbnRlbnRUeXBlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRyZXR1cm4gY2hhaW47XHJcblxyXG5cdGlmIChjb250ZW50IGluc3RhbmNlb2YgVk4pXHJcblx0XHRjaGFpbi5hcHBlbmRWTiggY29udGVudCBhcyBWTik7XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFZOQ2hhaW4pXHJcblx0XHRjaGFpbi5hcHBlbmRDaGFpbiggY29udGVudCBhcyBWTkNoYWluKTtcclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgbWltLkNvbXBvbmVudClcclxuXHRcdGNoYWluLmFwcGVuZFZOKCBuZXcgSW5zdGFuY2VWTiggY29udGVudCBhcyBtaW0uQ29tcG9uZW50KSk7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggY29udGVudCkpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgYXJySXRlbSBvZiBjb250ZW50IGFzIEFycmF5PGFueT4pXHJcblx0XHRcdGNoYWluLmFwcGVuZENoYWluKCBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGFyckl0ZW0pKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoY29udGVudFR5cGUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRjaGFpbi5hcHBlbmRWTiggbmV3IFRleHRWTiggY29udGVudCBhcyBzdHJpbmcpKTtcclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHRocm93IGNvbnRlbnQ7XHJcblx0ZWxzZVxyXG5cdFx0Y2hhaW4uYXBwZW5kVk4oIG5ldyBUZXh0Vk4oIGNvbnRlbnQudG9TdHJpbmcoKSkpO1xyXG5cclxuXHRyZXR1cm4gY2hhaW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGNoYWluIG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgVHlwZVNjcmlwdCdzIEpTWCBwYXJzZXIuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTkNoYWluRnJvbUpTWCggdGFnOiBhbnksIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSk6IFZOQ2hhaW5cclxue1xyXG5cdGNvbnN0IGNoYWluOiBWTkNoYWluID0gbmV3IFZOQ2hhaW4oKTtcclxuXHJcblx0aWYgKHRhZyA9PT0gbWltLlBsYWNlaG9sZGVyKVxyXG5cdFx0Y2hhaW4uYXBwZW5kQ2hhaW4oIGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggY2hpbGRyZW4pKTtcclxuXHRlbHNlIGlmIChtaW0uQ29tcG9uZW50LmlzUHJvdG90eXBlT2YoIHRhZykpXHJcblx0XHRjaGFpbi5hcHBlbmRWTiggbmV3IENsYXNzVk4oIHRhZyBhcyBtaW0uSUNvbXBvbmVudENsYXNzLCBwcm9wcywgY2hpbGRyZW4pKTtcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0bGV0IHRhZ1R5cGU6IHN0cmluZyA9IHR5cGVvZiB0YWc7XHJcblx0XHRpZiAodGFnVHlwZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRjaGFpbi5hcHBlbmRWTiggbmV3IEZ1bmNWTiggdGFnIGFzIG1pbS5GdW5jQ29tcFR5cGUsIHByb3BzLCBjaGlsZHJlbikpO1xyXG5cdFx0ZWxzZSBpZiAodGFnVHlwZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0Y2hhaW4uYXBwZW5kVk4oIG5ldyBFbG1WTiggdGFnIGFzIHN0cmluZywgcHJvcHMsIGNoaWxkcmVuKSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkludmFsaWQgdGFnIGluIGpzeCBwcm9jZXNzaW5nIGZ1bmN0aW9uOiBcIiArIHRhZyk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNoYWluO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHYXRoZXJpbmcgdXBkYXRlIHN0YXRpc3RpY3NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBDYXRlZ29yaWVzIG9mIGNoYW5nZWQgZW50aXRpZXMgdG8gZ2F0aGVyIHN0YXRpc3RpY3MgYWJvdXQuXHJcbmV4cG9ydCBlbnVtIFN0YXRzQ2F0ZWdvcnlcclxue1xyXG5cdENvbXAsXHJcblx0RWxtLFxyXG5cdFRleHQsXHJcblx0QXR0cixcclxuXHRFdmVudCxcclxufVxyXG5cclxuXHJcblxyXG4vLyBBY3Rpb25zIG9uIGFuIGVudGl0eSB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC4gTm90IGFsbCBhY3Rpb25zIGFyZSByZWxldmFudCBmb3IgYWxsXHJcbi8vIGNhdGVnb3JpZXM6XHJcbi8vXHQtIFVwZGF0ZWQgZG9lc24ndCBleGlzdCBmb3IgY29tcG9uZW50cyBhbmQgZm9yIGVsZW1lbnRzXHJcbi8vXHQtIE1vdmVkIGRvZXNuJ3QgZXhpc3QgZm9yIGF0dHJpYnV0ZXNcclxuLy9cdC0gUmVuZGVyZWQgb25seSBleGlzdHMgZm9yIGNvbXBvbmVudHNcclxuZXhwb3J0IGVudW0gU3RhdHNBY3Rpb25cclxue1xyXG5cdEFkZGVkPSAxLFxyXG5cdERlbGV0ZWQgPSAyLFxyXG5cdFVwZGF0ZWQgPSAzLFxyXG5cdE1vdmVkID0gNCxcclxuXHRSZW5kZXJlZCA9IDUsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvcmFnZSBmb3IgYSBudW1iZXIgb2YgZWFjaCBhY3Rpb24gdW5kZXIgYSBjYXRlZ29yeS5cclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U3RhdHNcclxue1xyXG5cdGFkZGVkOiBudW1iZXIgPSAwO1xyXG5cdGRlbGV0ZWQ6IG51bWJlciA9IDA7XHJcblx0dXBkYXRlZDogbnVtYmVyID0gMDtcclxuXHRtb3ZlZDogbnVtYmVyID0gMDtcclxuXHRyZW5kZXJlZDogbnVtYmVyID0gMDtcclxuXHJcblx0cHVibGljIGhhc1NvbWVEYXRhKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5hZGRlZCB8fCB0aGlzLmRlbGV0ZWQgfHwgdGhpcy51cGRhdGVkIHx8IHRoaXMubW92ZWQgfHwgdGhpcy5yZW5kZXJlZDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERldGFpbGVkU3RhdHNcclxue1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdGFydFRpbWU6IG51bWJlcjtcclxuXHRkdXJhdGlvbjogbnVtYmVyO1xyXG5cdGNvbXA6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGVsbTogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0dGV4dDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0YXR0cjogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0ZXZlbnQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXJ0KClcclxuXHR7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gMC4wO1xyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0b3AoIHByaW50U3VtbWFyeTogYm9vbGVhbiA9IHRydWUpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWU7XHJcblxyXG5cdFx0aWYgKHByaW50U3VtbWFyeSlcclxuXHRcdFx0Y29uc29sZS5sb2coIHRoaXMudG9TdHJpbmcoKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIGluY3JlbWVudHMgdGhlbnVtYmVyIG9mIHRpbWVzIHRoZSBnaXZlbiBhY3Rpb24gd2FzIHBlcmZvcm1lZCBvbiBhbiBlbnRpdHkgb2YgYSBnaXZlblxyXG5cdC8vIGNhdGVnb3J5LiBJZiB0aGUgZW50aXR5IGlzIGEgRE9NIGVudGl0eSAoYXMgb3Bwb3NlZCB0byBhIGNvbXBvbmVudCksIHRoZW4gdGhlIERPTVxyXG5cdC8vIHRvdGFsIG51bWJlciBpcyBhbHNvIGluY3JlbWVudGVkLlxyXG5cdHB1YmxpYyBsb2coIGNhdGVnb3J5OiBTdGF0c0NhdGVnb3J5LCBhY3Rpb246IFN0YXRzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjYXRlZ29yeVN0YXRzOiBDYXRlZ29yeVN0YXRzO1xyXG5cdFx0c3dpdGNoKCBjYXRlZ29yeSlcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkNvbXA6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmNvbXA7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuRWxtOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5lbG07IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuVGV4dDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMudGV4dDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5BdHRyOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5hdHRyOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkV2ZW50OiBjYXRlZ29yeVN0YXRzID0gdGhpcy5ldmVudDsgYnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2goIGFjdGlvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5BZGRlZDogY2F0ZWdvcnlTdGF0cy5hZGRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5EZWxldGVkOiBjYXRlZ29yeVN0YXRzLmRlbGV0ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uVXBkYXRlZDogY2F0ZWdvcnlTdGF0cy51cGRhdGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLk1vdmVkOiBjYXRlZ29yeVN0YXRzLm1vdmVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlJlbmRlcmVkOiBjYXRlZ29yeVN0YXRzLnJlbmRlcmVkKys7IGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgJHt0aGlzLm5hbWV9ICR7dGhpcy5kdXJhdGlvbi50b0ZpeGVkKDIpfW1zIGAgK1xyXG5cdFx0XHRcdHRoaXMuZ2V0Q29tcFN0cmluZygpICsgdGhpcy5nZXRFbG1TdHJpbmcoKSArIHRoaXMuZ2V0VGV4dFN0cmluZygpICtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJTdHJpbmcoKSArIHRoaXMuZ2V0RXZlbnRTdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb21wb25lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0Q29tcFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY29tcC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5jb21wLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmNvbXAuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTI3MEVcIiwgdGhpcy5jb21wLnJlbmRlcmVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmNvbXAubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgY29tcCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVsZW1lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RWxtU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5lbG0uaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuZWxtLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmVsbS5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmVsbS5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBlbG0oJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0ZXh0IG5vZGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0VGV4dFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudGV4dC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy50ZXh0LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLnRleHQuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy50ZXh0LnVwZGF0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMudGV4dC5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGB0ZXh0KCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEF0dHJTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmF0dHIuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuYXR0ci5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5hdHRyLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuYXR0ci51cGRhdGVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGF0dHIoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhdHRyaWJ1dGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RXZlbnRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50Lmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmV2ZW50LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmV2ZW50LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuZXZlbnQudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBldmVudCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiBzaWduIGFuZCB2YWx1ZSB0byB0aGUgZ2l2ZW4gc3RyaW5nIGJ1dCBvbmx5IGlmIHRoZSB2YWx1ZSBpcyBub24temVyby5cclxuXHRwcml2YXRlIGdldFZhbFN0cmluZyggczogc3RyaW5nLCBzaWduOiBzdHJpbmcsIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHZhbCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAocy5sZW5ndGggPiAwID8gXCIgXCIgOiBcIlwiKSArIHNpZ24gKyB2YWw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc3RhdHM6IERldGFpbGVkU3RhdHM7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1JbmZvIHR5cGUgZGVmaW5lcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIFNWRyBlbGVtZW50LiBUaGlzXHJcbi8vIGluZm9ybWF0aW9uIGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4vL1x0LSBzdHJpbmcgLSBhY3R1YWwgbmFtZSB0byB1c2UgZm9yIHRoZSBlbGVtZW50LiBTb21lIFNWRyBlbGVtZW50cyBoYXZlIG5hbWVzIHRoYXQgY2Fubm90IGJlIHVzZWRcclxuLy9cdFx0aW4gSlggZGlyZWN0bHkgKGUuZy4gYmVjYXVzZSBvZiBoeXBoZW4gbGlrZSBpbiBcImNvbG9yLXByb2ZpbGVcIikuIEluIHRoaXMgY2FzZSB0aGUgc3RyaW5nXHJcbi8vXHRcdHZhbHVlIHdpbGwgYmUgdGhlIGFjdHVhbCBlbGVtZW50IG5hbWUgdG8gcHV0IGludG8gSFRNTCBkb2N1bWVudCwgd2hpbGUgSlNYIHdpbGwgYmUgdXNpbmdcclxuLy9cdFx0YSBjYW1lbC1mb3JtYXR0ZWQgbmFtZSAoZS5nLiBcImNvbG9yUHJvZmlsZVwiKS5cclxuLy9cdC0gYm9vbGVhbiAtIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoZSBlbGVtZW50IGlzIFwiZHVhbC1wdXJwb3NlXCI7IHRoYXQgaXMsIGVsZW1lbnQgd2l0aCB0aGlzXHJcbi8vXHRcdG5hbWUgY2FuIGJlIHVzZWQgYXMgZWl0aGVyIEhUTUwgb3IgU1ZHIGVsZW1lbnQuXHJcbi8vXHQtIHR1cGxlIG9mIHR3byBlbGVtZW50cyAtIHN0cmluZyBhbmQgYm9vbGVhbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBhYm92ZSBpdGVtcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFN2Z0VsbUluZm8gPSBib29sZWFuIHwgc3RyaW5nIHwgW3N0cmluZywgYm9vbGVhbl07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtcyBjbGFzcyBjb250YWlucyBwcm9wZXJ0aWVzIHdpdGggbmFtZXMgdXNlZCB0byBkZWZpbmUgU1ZHIGVsZW1lbnRzIGluIEpTWC4gV2hlblxyXG4vLyB3ZSBuZWVkIHRvIGNyZWF0ZSBhbiBlbGVtZW50LCB3ZSBsb29rdXAgdGhlIHByb3ZpZGVkIHRhZyBuYW1lIGFuZCBpZiB3ZSBmaW5kIGl0IGluIHRoaXMgY2xhc3NcclxuLy8gd2UgdXNlIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyB3aXRoIHRoZSBwcm9wZXIgU1ZHIG5hbWVzcGFjZSBzdHJpbmcuIFZhbHVlcyBvZiB0aGVzZSBwcm9wZXJ0aWVzXHJcbi8vIGFyZSBTdmdFbG1JbmZvIHZhbHVlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBTdmdFbG1zXHJcbntcclxuXHQvLyBOYW1lc3BhY2UgdXNlZCB0byBjcmVhdGUgU1ZHIGVsZW1lbnRzLlxyXG5cdHB1YmxpYyBzdGF0aWMgbmFtZXNwYWNlOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBTVkcgdGFnXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlciggdGFnTmFtZTogc3RyaW5nLCBpbmZvOiBTdmdFbG1JbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV0gPSBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGNhbiBiZSB1c2VkIGFzIGFuIFNWRyBlbGVtZW50IG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBpc1N2Z0VsbSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0YWdOYW1lIGluIFN2Z0VsbXMuaW5mb3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgZ2l2ZW4gdGFnIG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdmdFbG1JbmZvKCB0YWdOYW1lOiBzdHJpbmcpOiBTdmdFbG1JbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gaW5mb3JtYXRpb24gb2JqZWN0IGhhcyB0aGUgXCJkdWFsLXB1cnBvc2VcIiBmbGFnIHNldC5cclxuXHRwdWJsaWMgc3RhdGljIGlzRHVhbFB1cnBvc2UoIGluZm86IFN2Z0VsbUluZm8pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMSA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVsxXSA6IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBmYWxzZSA6IGluZm8gYXMgYm9vbGVhbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBpcyBhIFwiZHVhbC1wdXJwb3NlXCIgZWxlbWVudDsgdGhhdCBpcyBjYW4gYmUgZWl0aGVyXHJcblx0Ly8gSFRNTCBhbmQgU1ZHIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBpc1RhZ0R1YWxQdXJwb3NlKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIGluZm8pIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgdGhlIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lKCBpbmZvOiBTdmdFbG1JbmZvLCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAwID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzBdIDogdGFnTmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gaW5mbyBhcyBzdHJpbmcgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIHRoZSBnaXZlbiB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZUZvclRhZyggdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmdldEVsbU5hbWUoIGluZm8sIHRhZ05hbWUpIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBTVkcgZWxlbWVudCBuYW1lcyB0byBTdmdFbG1JbmZvLlxyXG5cdHByaXZhdGUgc3RhdGljIGluZm9zOiB7W2VsbU5hbWU6c3RyaW5nXTogU3ZnRWxtSW5mb30gPVxyXG5cdHtcclxuXHRcdHN2ZzogZmFsc2UsXHJcblxyXG5cdFx0YTogdHJ1ZSxcclxuXHRcdGFuaW1hdGU6IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZU1vdGlvbjogZmFsc2UsXHJcblx0XHRhbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcclxuXHJcblx0XHRjaXJjbGU6IGZhbHNlLFxyXG5cdFx0Y2xpcFBhdGg6IGZhbHNlLFxyXG5cdFx0Y29sb3JQcm9maWxlOiBcImNvbG9yLXByb2ZpbGVcIixcclxuXHJcblx0XHRkZWZzOiBmYWxzZSxcclxuXHRcdGRlc2M6IGZhbHNlLFxyXG5cdFx0ZGlzY2FyZDogZmFsc2UsXHJcblxyXG5cdFx0ZWxsaXBzZTogZmFsc2UsXHJcblxyXG5cdFx0ZmVCbGVuZDogZmFsc2UsXHJcblx0XHRmZUNvbG9yTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb3NpdGU6IGZhbHNlLFxyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogZmFsc2UsXHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogZmFsc2UsXHJcblx0XHRmZURpc3RhbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZURyb3BTaGFkb3c6IGZhbHNlLFxyXG5cdFx0ZmVGbG9vZDogZmFsc2UsXHJcblx0XHRmZUZ1bmNBOiBmYWxzZSxcclxuXHRcdGZlRnVuY0I6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jRzogZmFsc2UsXHJcblx0XHRmZUZ1bmNSOiBmYWxzZSxcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBmYWxzZSxcclxuXHRcdGZlSW1hZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlTm9kZTogZmFsc2UsXHJcblx0XHRmZU1vcnBob2xvZ3k6IGZhbHNlLFxyXG5cdFx0ZmVPZmZzZXQ6IGZhbHNlLFxyXG5cdFx0ZmVQb2ludExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZVNwb3RMaWdodDogZmFsc2UsXHJcblx0XHRmZVRpbGU6IGZhbHNlLFxyXG5cdFx0ZmVUdXJidWxlbmNlOiBmYWxzZSxcclxuXHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRmb3JlaWduT2JqZWN0OiBmYWxzZSxcclxuXHJcblx0XHRnOiBmYWxzZSxcclxuXHJcblx0XHRoYXRjaDogZmFsc2UsXHJcblx0XHRoYXRjaHBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdGltYWdlOiBmYWxzZSxcclxuXHJcblx0XHRsaW5lOiBmYWxzZSxcclxuXHRcdGxpbmVhckdyYWRpZW50OiBmYWxzZSxcclxuXHJcblx0XHRtYXJrZXI6IGZhbHNlLFxyXG5cdFx0bWFzazogZmFsc2UsXHJcblx0XHRtZXRhZGF0YTogZmFsc2UsXHJcblx0XHRtcGF0aDogZmFsc2UsXHJcblxyXG5cdFx0cGF0aDogZmFsc2UsXHJcblx0XHRwYXR0ZXJuOiBmYWxzZSxcclxuXHRcdHBvbHlnb246IGZhbHNlLFxyXG5cdFx0cG9seWxpbmU6IGZhbHNlLFxyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBmYWxzZSxcclxuXHRcdHJlY3Q6IGZhbHNlLFxyXG5cclxuXHRcdHNjcmlwdDogdHJ1ZSxcclxuXHRcdHNldDogZmFsc2UsXHJcblx0XHRzb2xpZGNvbG9yOiBmYWxzZSxcclxuXHRcdHN0b3A6IGZhbHNlLFxyXG5cdFx0c3R5bGU6IHRydWUsXHJcblx0XHRzd2l0Y2g6IGZhbHNlLFxyXG5cdFx0c3ltYm9sOiBmYWxzZSxcclxuXHJcblx0XHR0ZXh0OiBmYWxzZSxcclxuXHRcdHRleHRQYXRoOiBmYWxzZSxcclxuXHRcdHRpdGxlOiB0cnVlLFxyXG5cdFx0dGV4dFNwYW46IGZhbHNlLFxyXG5cclxuXHRcdHVzZTogZmFsc2UsXHJcblxyXG5cdFx0dmlldzogZmFsc2UsXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHRleHQgbm9kZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0Vk4gZXh0ZW5kcyBWTiBpbXBsZW1lbnRzIG1pbS5JVGV4dFZOXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdGV4dDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBtaW0uVk5UeXBlLlRleHQpXHJcblxyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHJcblx0XHQvLyBub2RlIG5hbWUgaXMgI3RleHRcclxuXHRcdHRoaXMubmFtZSA9IFwiI3RleHRcIjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBnZXQgVGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50ZXh0OyB9XHJcblx0cHVibGljIGdldCBUZXh0Tm9kZSgpOiBUZXh0IHsgcmV0dXJuIHRoaXMuZG47IH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRwdWJsaWMgZ2V0U3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuVGV4dDsgfVxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGUgdmlydHVhbCBub2RlJ3MgY29udGVudCBpbnRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmRuID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIHRoaXMudGV4dCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgY29udGVudCBmcm9tIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZG4gPSB1bmRlZmluZWQ7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBvbmUgdGV4dCBub2RlIGNhbiBhbHdheXMgdXBkYXRlIGFub3RoZXIgdGV4dCBub2RlXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gdGV4dCBub2RlcyBkb24ndCBoYXZlIHN1Yi1ub2Rlc1xyXG5cdFx0cmV0dXJuIHsgc2hvdWxkQ29tbWl0OiB0aGlzLnRleHQgIT09IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQsIHNob3VsZFJlbmRlcjogZmFsc2UgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0ID0gKG5ld1ZOIGFzIFRleHRWTikudGV4dDtcclxuXHRcdHRoaXMuZG4ubm9kZVZhbHVlID0gdGhpcy50ZXh0O1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETlxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRuO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUZXh0IGZvciBhIHNpbXBsZSB0ZXh0IG5vZGUuXHJcblx0dGV4dDogc3RyaW5nO1xyXG5cclxuXHQvLyBUZXh0IERPTSBub2RlXHJcblx0ZG46IFRleHQ7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7SUV2ZW50U2xvdCwgRXZlbnRTbG90fSBmcm9tXCIuL0V2ZW50U2xvdFwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgQ2xhc3NlcyBhYnN0cmFjdCBjbGFzcyBwcm92aWRlcyB1c2VmdWwgc3RhdGljIGZ1bmN0aW9ucyBmb3Igd29ya2luZyB3aXRoIGNsYXNzIHByb3BlcnRpZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2xhc3Nlc1xyXG57XHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBjbGFzcyBwcm9wZXJ0aWVzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG5cdC8vIHJldHVybnMgYSBzdHJpbmcgb3IgdW5kZWZpbmVkIC0gaWYgYWxsIGNsYXNzTmFtZXMgd2VyZSB1bmRlZmluZWQuXHJcblx0cHVibGljIHN0YXRpYyBNZXJnZUNsYXNzZXMoIC4uLmNsYXNzTmFtZXM6IChzdHJpbmcgfCBzdHJpbmdbXSlbXSk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCByZXNDbGFzc05hbWU6IHN0cmluZztcclxuXHJcblx0XHRmb3IoIGxldCBjbGFzc05hbWUgb2YgY2xhc3NOYW1lcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKCFjbGFzc05hbWUpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHQvLyBwYXJzZSB0aGUgY2xhc3MgaWYgaXQgaXMgc3BlY2lmaWVkIGFzIGEgc3RyaW5nXHJcblx0XHRcdGxldCBjbGFzc05hbWVBc1N0cmluZzogc3RyaW5nID0gdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHRcdFx0PyBjbGFzc05hbWUgYXMgc3RyaW5nXHJcblx0XHRcdFx0XHQ6IENsYXNzZXMuQXJyYXlUb1N0cmluZyggY2xhc3NOYW1lIGFzIHN0cmluZ1tdKTtcclxuXHJcblx0XHRcdGlmIChyZXNDbGFzc05hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRyZXNDbGFzc05hbWUgPSBcIlwiO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmVzQ2xhc3NOYW1lICs9IFwiIFwiO1xyXG5cclxuXHRcdFx0cmVzQ2xhc3NOYW1lICs9IGNsYXNzTmFtZUFzU3RyaW5nO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXNDbGFzc05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgY2xhc3Mgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy5cclxuXHRwdWJsaWMgc3RhdGljIEFycmF5VG9TdHJpbmcoIGNsYXNzTmFtZXM6IHN0cmluZ1tdKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGNsYXNzTmFtZXMuam9pbiggXCIgXCIpO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdHlsZXMgYWJzdHJhY3QgY2xhc3MgcHJvdmlkZXMgdXNlZnVsIHN0YXRpYyBmdW5jdGlvbnMgZm9yIHdvcmtpbmcgd2l0aCBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0eWxlc1xyXG57XHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG5cdC8vIGFsd2F5cyByZXR1cm5zIGFuIG9iamVjdCAtIGV2ZW4gaWYgZW1wdHlcclxuXHRwdWJsaWMgc3RhdGljIE1lcmdlU3R5bGVzKCAuLi5zdHlsZXM6IG1pbS5TdHlsZVByb3BUeXBlW10pOiBtaW0uU3R5bGVQcm9wVHlwZVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBhbiBlbXB0eSBvYmplY3QgZm9yIGFjY3VtdWxhdGluZyBzdHlsZSBwcm9wZXJ0aWVzXHJcblx0XHRsZXQgcmVzU3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlID0ge307XHJcblx0XHRTdHlsZXMuTWVyZ2VTdHlsZXNUbyggcmVzU3R5bGUsIC4uLnN0eWxlcyk7XHJcblx0XHRyZXR1cm4gcmVzU3R5bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGZpcnN0IG9uZS5cclxuXHRwdWJsaWMgc3RhdGljIE1lcmdlU3R5bGVzVG8oIHJlc1N0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSwgLi4uc3R5bGVzOiAobWltLlN0eWxlUHJvcFR5cGUgfCBzdHJpbmcpW10gKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN0eWxlIG9mIHN0eWxlcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKCFzdHlsZSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdC8vIHBhcnNlIHRoZSBzdHlsZSBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmdcclxuXHRcdFx0bGV0IHN0eWxlT2JqOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHR5cGVvZiBzdHlsZSA9PT0gXCJvYmplY3RcIlxyXG5cdFx0XHRcdFx0PyBzdHlsZSBhcyBtaW0uU3R5bGVQcm9wVHlwZVxyXG5cdFx0XHRcdFx0OiBTdHlsZXMuUGFyc2VTdHlsZVN0cmluZyggc3R5bGUgYXMgc3RyaW5nKTtcclxuXHJcblx0XHRcdC8vIGNvcHkgYWxsIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0ZWggY3VycmVudCBzdHlsZSBvYmplY3QgdG8gb3VyIHJlc3VsdGFudCBvYmplY3RcdFx0XHRcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3R5bGVPYmopXHJcblx0XHRcdFx0cmVzU3R5bGVbcHJvcE5hbWVdID0gc3R5bGVPYmpbcHJvcE5hbWVdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuXHJcblx0cHVibGljIHN0YXRpYyBQYXJzZVN0eWxlU3RyaW5nKCBzOiBzdHJpbmcpOiBtaW0uU3R5bGVQcm9wVHlwZVxyXG5cdHtcclxuXHRcdGlmICghcylcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cclxuXHRcdGxldCByZXRTdHlsZTogbWltLlN0eWxlUHJvcFR5cGUgPSB7fTtcclxuXHJcblx0XHRsZXQgZWxtczogc3RyaW5nW10gPSBzLnNwbGl0KFwiO1wiKTtcclxuXHRcdGZvciggbGV0IGVsbSBvZiBlbG1zKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcGFpcjogc3RyaW5nW10gPSBlbG0uc3BsaXQoIFwiOlwiKTtcclxuXHRcdFx0aWYgKCFwYWlyIHx8IHBhaXIubGVuZ3RoID09PSAwIHx8IHBhaXIubGVuZ3RoID4gMilcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdHJldFN0eWxlW1N0eWxlcy5EYXNoVG9DYW1lbCggcGFpclswXS50cmltKCkpXSA9IHBhaXJbMV0udHJpbSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXRTdHlsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udmVydHMgbmFtZXMgd2l0aCBkYXNoZXMgaW50byBuYW1lcyBpbiBjYW1lbENhc2UsIHdoZXJlIGV2ZXJ5IGNoYXJhY3RlciBhZnRlciBhIGRhc2ggaXNcclxuXHQvLyBjYXBpdGFsaXplZCBhbmQgZGFzaGVzIGFyZSByZW1vdmVkLlxyXG5cdHB1YmxpYyBzdGF0aWMgRGFzaFRvQ2FtZWwoIGRhc2g6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghZGFzaClcclxuXHRcdFx0cmV0dXJuIGRhc2g7XHJcblxyXG5cdFx0bGV0IGNhbWVsOiBzdHJpbmc7XHJcblx0XHRsZXQgaW5kZXg6IG51bWJlciA9IC0xO1xyXG5cdFx0bGV0IG5leHRJbmRleFRvQ29weUZyb206IG51bWJlciA9IDA7XHJcblx0XHR3aGlsZSggKGluZGV4ID0gZGFzaC5pbmRleE9mKCBcIi1cIiwgaW5kZXggKyAxKSkgPj0gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKGNhbWVsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0Y2FtZWwgPSBcIlwiO1xyXG5cclxuXHRcdFx0Y2FtZWwgKz0gZGFzaC5zdWJzdHIoIG5leHRJbmRleFRvQ29weUZyb20sIGluZGV4IC0gbmV4dEluZGV4VG9Db3B5RnJvbSk7XHJcblx0XHRcdGlmIChpbmRleCAhPSBkYXNoLmxlbmd0aCAtIDEpXHJcblx0XHRcdFx0Y2FtZWwgKz0gZGFzaFtpbmRleCArIDFdLnRvVXBwZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRuZXh0SW5kZXhUb0NvcHlGcm9tID0gaW5kZXggKyAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjYW1lbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gZGFzaDtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5leHRJbmRleFRvQ29weUZyb20gPCBkYXNoLmxlbmd0aClcclxuXHRcdFx0XHRjYW1lbCArPSBkYXNoLnN1YnN0ciggbmV4dEluZGV4VG9Db3B5RnJvbSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gY2FtZWw7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU2xpY2UgdHlwZSBkZWZpbmVzIGFuIG9iamVjdCBzdHJ1Y3R1cmUgZGVzY3JpYmluZ1xyXG4vLyBwYXJhbWV0ZXJzIGZvciByZW5kZXJpbmcgYW4gZWxlbWVudC4gVGhleSBpbmNsdWRlOiBDbGFzcywgU3R5bGUsIFByb3BlcnRpZXMsIENvbnRlbnQuIFRoaXNcclxuLy8gc3RydWN0dXJlIGlzIGludGVuZGVkIHRvIGJlIHBhc3NlZCBlaXRoZXIgaW4gdGhlIGNvbnN0cnVjdG9yIG9yIHZpYSB0aGUgcHJvdGVjdGVkIG1ldGhvZHMgb2ZcclxuLy8gZGVyaXZlZCBjbGFzc2VzLCBzbyB0aGF0IHRoZXkgY2FuIGNvbnRyb2wgcGFyYW1ldGVycyBvZiBlbGVtZW50cyByZW5kZXJlZCBieSB0aGUgdXBwZXIgY2xhc3Nlcy5cclxuLy8gVGhlIG1haW4gcHVycG9zZSBvZiB0aGlzIHN0cnVjdHVyZSBpcyB0byBjb21iaW5lIHBhcmFtZXRlcnMgZGVmaW5pbmcgYW4gZWxlbWVudCBpbnRvIGEgc2luZ2xlXHJcbi8vIG9iamVjdCB0byBtaW5pbWl6ZSB0aGUgbnVtYmVyIG9mIHByb3BlcnRpZXMgY2FsbGVycyBvZiBjbGFzc2VzIHNob3VsZCBkZWFsIHdpdGguXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBTbGljZSA9XHJcbntcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcblx0c3R5bGU/OiBtaW0uU3R5bGVQcm9wVHlwZTtcclxuXHRwcm9wcz86IE9iamVjdFxyXG5cdGNvbnRlbnQ/OiBhbnk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU2xpY2VzIGFic3RyYWN0IGNsYXNzIHByb3ZpZGVzIHVzZWZ1bCBzdGF0aWMgZnVuY3Rpb25zIGZvciB3b3JraW5nIHdpdGggU2xpY2VzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNsaWNlc1xyXG57XHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBTbGljZSBvYmplY3RzIG1lcmdpbmcgY2xhc3Nlcywgc3R5bGVzLCBwcm9wZXJ0aWVzIGFuZCBjb250ZW50XHJcblx0cHVibGljIHN0YXRpYyBNZXJnZVNsaWNlcyggLi4uc2xpY2VzOiBTbGljZVtdKTogU2xpY2VcclxuXHR7XHJcblx0XHRsZXQgcmVzU2xpY2U6IFNsaWNlID0ge307XHJcblx0XHRTbGljZXMuTWVyZ2VTbGljZXNUbyggcmVzU2xpY2UsIC4uLnNsaWNlcyk7XHJcblx0XHRyZXR1cm4gcmVzU2xpY2U7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBTbGljZSBvYmplY3RzIG1lcmdpbmcgY2xhc3Nlcywgc3R5bGVzLCBwcm9wZXJ0aWVzIGFuZCBjb250ZW50XHJcblx0Ly8gaW50byB0aGUgZ2l2ZW4gcmVzdWx0YW50IHNsaWNlLlxyXG5cdHB1YmxpYyBzdGF0aWMgTWVyZ2VTbGljZXNUbyggcmVzU2xpY2U6IFNsaWNlLCAuLi5zbGljZXM6IFNsaWNlW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHJlc1NsaWNlID09PSB1bmRlZmluZWQgfHwgcmVzU2xpY2UgPT09IG51bGwpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRmb3IoIGxldCBzbGljZSBvZiBzbGljZXMpXHJcblx0XHR7XHJcblx0XHRcdGlmICghc2xpY2UpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRpZiAoc2xpY2Uuc3R5bGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAocmVzU2xpY2Uuc3R5bGUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdHJlc1NsaWNlLnN0eWxlID0ge307XHJcblxyXG5cdFx0XHRcdFN0eWxlcy5NZXJnZVN0eWxlc1RvKCByZXNTbGljZS5zdHlsZSwgc2xpY2Uuc3R5bGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoc2xpY2UuY2xhc3NOYW1lKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHJlc1NsaWNlLmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY2xhc3NOYW1lID0gXCJcIjtcclxuXHJcblx0XHRcdFx0cmVzU2xpY2UuY2xhc3NOYW1lID0gQ2xhc3Nlcy5NZXJnZUNsYXNzZXMoIHJlc1NsaWNlLmNsYXNzTmFtZSBhcyBzdHJpbmcsIHNsaWNlLmNsYXNzTmFtZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzbGljZS5wcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChyZXNTbGljZS5wcm9wcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmVzU2xpY2UucHJvcHMgPSB7fTtcclxuXHJcblx0XHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc2xpY2UucHJvcHMpXHJcblx0XHRcdFx0XHRyZXNTbGljZVtwcm9wTmFtZV0gPSBzbGljZVtwcm9wTmFtZV07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzbGljZS5jb250ZW50KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHJlc1NsaWNlLmNvbnRlbnQgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQgPSBzbGljZS5jb250ZW50O1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoIHJlc1NsaWNlLmNvbnRlbnQpKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsZXQgb2xkQ29udGVudDogYW55ID0gcmVzU2xpY2UuY29udGVudDtcclxuXHRcdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudCA9IFtdO1xyXG5cdFx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50LnB1c2goIG9sZENvbnRlbnQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQucHVzaCggc2xpY2UuY29udGVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtWTkNoYWlufSBmcm9tIFwiLi9WTkNoYWluXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vIFVzZSB0eXBlIEROIHRvIHJlZmVyIHRvIERPTSdzIE5vZGUgY2xhc3MuIFRoZSBET00gbm9kZXMgdGhhdCB3ZSBhcmUgZGVhbGluZyB3aXRoIGFyZVxyXG4vLyBlaXRoZXIgb2YgdHlwZSBFbGVtZW50IG9yIFRleHQuXHJcbmV4cG9ydCB0eXBlIEROID0gTm9kZTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVk5MaWZlQ3ljbGUgaW50ZXJmYWNlIGRlZmluZXMgbGlmZS1jeWNsZSBhbmQgbm90aWZpY2F0aW9ucyBtZXRob2ZzIHRoYXQgYXJlIGNhbGxlZCBkdXJpbmdcclxuLy8gbW91bnRpbmcsIHVubW91bnRpbmcgYW5kIHVwZGF0ZXMuIFRoZSBJVk5MaWZlQ3ljbGUgaW50ZXJmYWNlIGlzIGltcGxlbWVudGVkIGJ5IGFsbCB0eXBlcyBvZlxyXG4vLyB2aXJ0dWFsIG5vZGVzLiBBbGwgbWV0aG9kcyBpbiB0aGlzIGludGVyZmFjZSBhcmUgb3B0aW9uYWwgYmVjYXVzZSB0aGV5IG1pZ2h0IG5vdCBiZSBuZWVlZGVkXHJcbi8vIGZvciBhbGwgdHlwZXMgb2Ygbm9kZXMuXHJcbi8vXHJcbi8vIE1vdW50aW5nIHNlcXVlbmNlOlxyXG4vL1x0LSBjb25zdHJ1Y3RvclxyXG4vL1x0LSB3aWxsTW91bnRcclxuLy9cdC0gcmVuZGVyXHJcbi8vXHQtIG1vdW50XHJcbi8vXHQtIGRpZE1vdW50XHJcbi8vXHJcbi8vIFVubW91bnRpbmcgc2VxdWVuY2U6XHJcbi8vXHQtIHdpbGxVbm1vdW50XHJcbi8vXHQtIHVubW91bnRcclxuLy9cdC0gZGlkVW5tb3VudFxyXG4vL1xyXG4vLyBVcGRhdGluZyBzZXF1ZW5jZSB3aGVuIHVwZGF0ZSB3YXMgY2F1c2VkIGJ5IHRoZSBub2RlIGl0c2VsZjpcclxuLy9cdC0gcmVuZGVyXHJcbi8vXHQtIGRpZFVwZGF0ZVxyXG4vL1xyXG4vLyBVcGRhdGluZyBzZXF1ZW5jZSB3aGVuIHVwZGF0ZSB3YXMgY2F1c2VkIGJ5IHBhcmVudDpcclxuLy9cdC0gdXBkYXRlRnJvbVxyXG4vL1x0LSByZW5kZXIgKG9ubHkgaWYgdXBkYXRlRnJvbSBpbmRpY2F0ZWQgdGhhdCBjaGlsZHJlbiBzaG91bGQgYmUgdXBkYXRlZClcclxuLy9cdC0gY29tbWl0VXBkYXRlIChvbmx5IGlmIHVwZGF0ZUZyb20gaW5kaWNhdGVkIHRoYXQgY29tbWl0IGlzIG5lY2Vzc2FyeSlcclxuLy9cdC0gbW92ZSAob25seSBpZiBuZWNlc3NhcnkpXHJcbi8vXHQtIGRpZFVwZGF0ZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTiBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLiBWaXJ0dWFsIG5vZGVzIGFyZSBrZXB0IGluIGFcclxuLy8gZG91YmxseS1saW5rZWQgbGlzdCBhbmQgZWFjaCBub2RlIHBvaW50cyB0byBhIHBhcmVudCBub2RlIGFzIHdlbGwgYXMgZmlyc3QgYW5kIGxhc3Qgc3ViLW5vZGVzLlxyXG4vL1xyXG4vLyBNb3VudGluZyBzZXF1ZW5jZTpcclxuLy9cdC0gY29uc3RydWN0b3JcclxuLy9cdC0gd2lsbE1vdW50XHJcbi8vXHQtIHJlbmRlclxyXG4vL1x0LSBtb3VudFxyXG4vL1x0LSBkaWRNb3VudFxyXG4vL1xyXG4vLyBVbm1vdW50aW5nIHNlcXVlbmNlOlxyXG4vL1x0LSB3aWxsVW5tb3VudFxyXG4vL1x0LSB1bm1vdW50XHJcbi8vXHQtIC8vZGlkVW5tb3VudFxyXG4vL1xyXG4vLyBVcGRhdGluZyBzZXF1ZW5jZSB3aGVuIHVwZGF0ZSB3YXMgY2F1c2VkIGJ5IHRoZSBub2RlIGl0c2VsZjpcclxuLy9cdC0gcmVuZGVyXHJcbi8vXHQtIGRpZFVwZGF0ZVxyXG4vL1xyXG4vLyBVcGRhdGluZyBzZXF1ZW5jZSB3aGVuIHVwZGF0ZSB3YXMgY2F1c2VkIGJ5IHBhcmVudDpcclxuLy9cdC0gdXBkYXRlRnJvbVxyXG4vL1x0LSByZW5kZXIgKG9ubHkgaWYgdXBkYXRlRnJvbSBpbmRpY2F0ZWQgdGhhdCBjaGlsZHJlbiBzaG91bGQgYmUgdXBkYXRlZClcclxuLy9cdC0gY29tbWl0VXBkYXRlIChvbmx5IGlmIHVwZGF0ZUZyb20gaW5kaWNhdGVkIHRoYXQgY29tbWl0IGlzIG5lY2Vzc2FyeSlcclxuLy9cdC0gbW92ZSAob25seSBpZiBuZWNlc3NhcnkpXHJcbi8vXHQtIGRpZFVwZGF0ZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZOIGltcGxlbWVudHMgbWltLklWTm9kZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHR5cGU6IG1pbS5WTlR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSVZOb2RlIGltcGxlbWVudGF0aW9uXHJcblx0cHVibGljIGdldCBUeXBlKCk6IG1pbS5WTlR5cGUgeyByZXR1cm4gdGhpcy50eXBlOyB9XHJcblx0cHVibGljIGdldCBQYXJlbnQoKTogbWltLklWTm9kZSB7IHJldHVybiB0aGlzLnBhcmVudDsgfVxyXG5cdHB1YmxpYyBnZXQgTmV4dCgpOiBtaW0uSVZOb2RlIHsgcmV0dXJuIHRoaXMubmV4dDsgfVxyXG5cdHB1YmxpYyBnZXQgUHJldigpOiBtaW0uSVZOb2RlIHsgcmV0dXJuIHRoaXMucHJldjsgfVxyXG5cdHB1YmxpYyBnZXQgU3ViTm9kZXMoKTogbWltLklWTkNoYWluIHsgcmV0dXJuIHRoaXMuc3ViTm9kZXM7IH1cclxuXHRwdWJsaWMgZ2V0IERpc3BsYXlOYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm5hbWU7IH1cclxuXHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0cHVibGljIGluaXRpYWxpemUoIHBhcmVudDogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblx0XHRpZiAocGFyZW50ID09PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnJvb3QgPSB0aGlzIGFzIGFueSBhcyBJUm9vdFZOO1xyXG5cdFx0XHR0aGlzLmRlcHRoID0gMDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5yb290ID0gcGFyZW50LnJvb3Q7XHJcblx0XHRcdHRoaXMuZGVwdGggPSBwYXJlbnQuZGVwdGggKyAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGVhbnMgdXAgdGhlIG5vZGUgb2JqZWN0IGJlZm9yZSBpdCBpcyByZWxlYXNlZC5cclxuXHRwdWJsaWMgdGVybWluYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW1vdmUgaW5mb3JtYXRpb24gYWJvdXQgYW55IHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCBzZXJ2aWNlc1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5mb3JFYWNoKCAoc2VydmljZSwgaWQpID0+IHRoaXMucm9vdC5ub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkLCB0aGlzKSk7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZm9yRWFjaCggKGluZm8sIGlkKSA9PiB7IHRoaXMucm9vdC5ub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkKCBpZCwgdGhpcyk7IH0pO1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYW5jaG9yRE4gPSBudWxsO1xyXG5cdFx0dGhpcy5zdWJOb2Rlcy5jbGVhcigpO1xyXG5cdFx0dGhpcy5yb290ID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHRcdHRoaXMuZGVwdGggPSAwO1xyXG5cdH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0U3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5O1xyXG4vLy8vLy8vLy8vXHJcblxyXG5cdC8vIFJldHVybnMgY29udGVudCB0aGF0IGNvbXByaXplcyB0aGUgY2hpbGRyZW4gb2YgdGhlIG5vZGUuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZVxyXG5cdC8vIHN1Yi1ub2RlcywgbnVsbCBzaG91bGQgYmUgcmV0dXJuZWQuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBpdCBpcyBhcyB0aG91Z2hcclxuXHQvLyBudWxsIGlzIHJldHVybmVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcmVuZGVyPygpOiBhbnkge31cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50PygpOiB2b2lkIHt9XHJcblxyXG5cdC8vIEluc2VydHMgdGhlIHZpcnR1YWwgbm9kZSdzIGNvbnRlbnQgaW50byBET00uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBtb3VudD8oKTogdm9pZCB7fVxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaGFzIGJlZW4gaW5zZXJ0ZWRcclxuXHQvLyBpbnRvIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIGRpZE1vdW50PygpOiB2b2lkIHt9XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQ/KCk6IHZvaWQge31cclxuXHJcblx0Ly8gUmVtb3ZlcyBjb250ZW50IGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudD8oKTogdm9pZCB7fVxyXG5cclxuXHQvLy8vIENsZWFycyBpbnRlcm5hbCBzdHJ1Y3R1cmVzIGFmdGVyIHRoZSBET00gY29udGVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vLy8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdC8vZGlkVW5tb3VudD8oKTogdm9pZCB7fVxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhpcyBtZXRob2QgaXNcclxuXHQvLyBOT1QgbWFya2VkIGFzIG9wdGlvbmFsIGFuZCB0aHVzIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGU/KCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3AgeyByZXR1cm4geyBzaG91bGRDb21taXQ6IGZhbHNlLCBzaG91bGRSZW5kZXI6IGZhbHNlIH07IH1cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIGNvbW1pdFVwZGF0ZT8oIG5ld1ZOOiBWTik6IHZvaWQge31cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGhhcyBiZWVuIHVwZGF0ZWRcclxuXHQvLyBpbiB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBkaWRVcGRhdGU/KCk6IHZvaWQge31cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgc3VwcG9ydHNFcnJvckhhbmRsaW5nPygpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIGFuZC9vciBpdHMgc3ViLW5vZGVzLiBJdCByZXR1cm5zIGNvbnRlbnQgY29tcHJpc2luZyB0aGUgY2hpbGRyZW4gb2YgdGhlIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvcj8oIHZuRXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZCB7fVxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETiB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgZmlyc3QgRE9NIG5vZGUgZGVmaW5lZCBieSBlaXRoZXIgdGhpcyB2aXJ0dWFsIG5vZGUgb3Igb25lIG9mIGl0cyBzdWItbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcblx0cHVibGljIGdldEZpcnN0RE4oKTogRE5cclxuXHR7XHJcblx0XHRsZXQgZG46IEROID0gdGhpcy5nZXRPd25ETigpO1xyXG5cdFx0aWYgKGRuICE9PSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblxyXG5cdFx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIHVudGlsIGEgdmFsaWQgbm9kZSBpcyByZXR1cm5lZFxyXG5cdFx0aWYgKHRoaXMuc3ViTm9kZXMuZmlyc3QgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHN2bjogVk4gPSB0aGlzLnN1Yk5vZGVzLmZpcnN0OyBzdm4gIT09IG51bGw7IHN2biA9IHN2bi5uZXh0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZG4gPSBzdm4uZ2V0Rmlyc3RETigpO1xyXG5cdFx0XHRcdGlmIChkbiAhPT0gbnVsbClcclxuXHRcdFx0XHRcdHJldHVybiBkbjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgdG8gc2V0IGEgZGlzdGluZ3Vpc2hpbmcgZGlzcGxheSBuYW1lIGlkZW50aWZ5aW5nIHRoZSBvYmplY3RcclxuXHQvLyByZXByZXNlbnRlZCBieSB0aGUgbm9kZSAoZS5nLiBjb21wb25lbnQgaW5zdGFuY2UpLlxyXG5cdHB1YmxpYyBzZXREaXNwbGF5TmFtZSggbmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNjaGVkdWxlcyBhbiB1cGRhdGUgZm9yIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgcmVxdWVzdFVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucm9vdClcclxuXHRcdFx0dGhpcy5yb290LnJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VscyBhIHByZXZpb3VzbHkgcmVxdWVzdGVkIHVwZGF0ZSBmb3IgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBjYW5jZWxVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnJvb3QpXHJcblx0XHRcdHRoaXMucm9vdC5jYW5jZWxOb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50c1xyXG5cdC8vIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdHB1YmxpYyBzY2hlZHVsZUNhbGwoIGZ1bmM6ICgpID0+IHZvaWQsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnJvb3QpXHJcblx0XHRcdHRoaXMucm9vdC5zY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCBiZWZvcmVVcGRhdGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWxzIGEgY2FsbCB0aGF0IGhhcyBiZWVuIHNjaGVkdWxlZCB0byBiZSBtYWRlIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWRcclxuXHQvLyBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdHB1YmxpYyBjYW5jZWxTY2hlZHVsZWRDYWxsKCBmdW5jOiAoKSA9PiB2b2lkLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5yb290KVxyXG5cdFx0XHR0aGlzLnJvb3QuY2FuY2VsU2NoZWR1bGVkRnVuY0NhbGwoIGZ1bmMsIGJlZm9yZVVwZGF0ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0Ly8gY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBub2Rlcy5cclxuXHRwdWJsaWMgcHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcsIHNlcnZpY2U6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsYW55PigpO1xyXG5cclxuXHRcdGxldCBleGlzdGluU2VydmljZTogYW55ID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChleGlzdGluU2VydmljZSAhPT0gc2VydmljZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zZXQoIGlkLCBzZXJ2aWNlKTtcclxuXHRcdFx0dGhpcy5yb290Lm5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyB1bnB1Ymxpc2hTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0dGhpcy5yb290Lm5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN1YnNjcmliZXMgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gSWYgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgcmVnaXN0ZXJlZFxyXG5cdC8vIGJ5IG9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDsgb3RoZXJ3aXNlLFxyXG5cdC8vIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW4gdW5kZWZpbmVkLlxyXG5cdC8vIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yIG5vZGUgaXNcclxuXHQvLyBjaGFuZ2VkLCB0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHRwdWJsaWMgc3Vic2NyaWJlU2VydmljZSggaWQ6IHN0cmluZywgcmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PiwgZGVmYXVsdFNlcnZpY2U/OiBhbnksIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvPigpO1xyXG5cclxuXHRcdGxldCBpbmZvID0gbmV3IFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvKCk7XHJcblx0XHRpbmZvLnJlZiA9IHJlZjtcclxuXHRcdGluZm8uZGVmYXVsdFNlcnZpY2UgPSBkZWZhdWx0U2VydmljZTtcclxuXHRcdGluZm8udXNlU2VsZiA9IHVzZVNlbGYgPyB0cnVlIDogZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuc2V0KCBpZCwgaW5mbyk7XHJcblx0XHR0aGlzLnJvb3Qubm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkLCB0aGlzKTtcclxuXHRcdG1pbS5zZXRSZWYoIHJlZiwgdGhpcy5nZXRTZXJ2aWNlKCBpZCwgZGVmYXVsdFNlcnZpY2UpKTtcclxufVxyXG5cclxuXHJcblxyXG5cdC8vIFVuc3Vic2NyaWJlcyBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gVGhlIFJlZiBvYmplY3QgdGhhdCB3YXMgdXNlZCB0byBzdWJzY3JpYmUsXHJcblx0Ly8gd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxyXG5cdHB1YmxpYyB1bnN1YnNjcmliZVNlcnZpY2UoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgaW5mbyA9IHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdG1pbS5zZXRSZWYoIGluZm8ucmVmLCB1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZGVsZXRlKCBpZCk7XHJcblx0XHR0aGlzLnJvb3Qubm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm90aWZpZXMgdGhlIG5vZGUgdGhhdCBwdWJsaWNhdGlvbiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gc2VydmljZSAodG8gd2hpY2ggdGhlIG5vZGVcclxuXHQvLyBoYXMgcHJldmlvdXNseSBzdWJzY3JpYmVkKSBoYXMgY2hhbmdlZC5cclxuXHRwdWJsaWMgbm90aWZ5U2VydmljZUNoYW5nZWQoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgaW5mbyA9IHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdG1pbS5zZXRSZWYoIGluZm8ucmVmLCB0aGlzLmdldFNlcnZpY2UoIGlkLCBpbmZvLmRlZmF1bHRTZXJ2aWNlKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvclxyXG5cdC8vIG5vZGUgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcmVnaXN0ZXJlZCBhIHNlcnZpY2Ugd2l0aFxyXG5cdC8vIHRoaXMgSUQuIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXN0YWJsaXNoIGEgc3Vic2NyaXB0aW9uIGFuZCBvbmx5IHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdHB1YmxpYyBnZXRTZXJ2aWNlKCBpZDogc3RyaW5nLCBkZWZhdWx0U2VydmljZT86IGFueSwgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgc2VydmljZSA9IHRoaXMuZmluZFNlcnZpY2UoIGlkLCB1c2VTZWxmKTtcclxuXHRcdHJldHVybiBzZXJ2aWNlICE9PSB1bmRlZmluZWQgPyBzZXJ2aWNlIDogZGVmYXVsdFNlcnZpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgdXAgdGhlIGNoYWluIG9mIG5vZGVzIGxvb2tpbmcgZm9yIGEgcHVibGlzaGVkIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFJldHVybnNcclxuXHQvLyB1bmRlZmluZWQgaWYgdGhlIHNlcnZpY2UgaXMgbm90IGZvdW5kLiBOb3RlIHRoYXQgbnVsbCBtaWdodCBiZSBhIHZhbGlkIHZhbHVlLlxyXG5cdHB1YmxpYyBmaW5kU2VydmljZSggaWQ6IHN0cmluZywgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodXNlU2VsZilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBzZXJ2aWNlID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdFx0XHRpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHNlcnZpY2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBnbyB1cCB0aGUgY2hhaW47IG5vdGUgdGhhdCB3ZSBkb24ndCBwYXNzIHRoZSB1c2VTZWxmIHBhcmFtZXRlciBvbi5cclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCAhPT0gbnVsbCA/IHRoaXMucGFyZW50LmZpbmRTZXJ2aWNlKCBpZCwgdHJ1ZSkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gRmluZHMgdGhlIGZpcnN0IERPTSBub2RlIGluIHRoZSB0cmVlIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBjb21lcyBhZnRlciBvdXIgbm9kZSB0aGF0IGlzIGFcclxuXHQvLyBjaGlsZCBvZiBvdXIgb3duIGFuY2hvciBlbGVtZW50LiBXZSB1c2UgaXQgYXMgYSBub2RlIGJlZm9yZSB3aGljaCB0byBpbnNlcnQvbW92ZSBub2RlcyBvZlxyXG5cdC8vIG91ciBzdWItbm9kZXMgZHVyaW5nIHRoZSByZWNvbmNpbGlhdGlvbiBwcm9jZXNzLiBUaGUgYWxnb3JpdGhtIGZpcnN0IGdvZXMgdG8gdGhlIG5leHRcclxuXHQvLyBzaWJsaW5ncyBvZiBvdXIgbm9kZSBhbmQgdGhlbiB0byB0aGUgbmV4dCBzaWJsaW5ncyBvZiBvdXIgcGFyZW50IG5vZGUgcmVjdXJzaXZlbHkuIEl0IHN0b3BzXHJcblx0Ly8gd2hlbiB3ZSBlaXRoZXIgZmluZCBhIERPTSBub2RlICh0aGVuIGl0IGlzIHJldHVybmVkKSBvciBmaW5kIGEgZGlmZmVyZW4gYW5jaG9yIGVsZW1lbnRcclxuXHQvLyAodGhlbiBudWxsIGlzIHJldHVybmVkKS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2VzcyBmb3Igb3VyXHJcblx0Ly8gc3ViLW5vZGVzIHN0YXJ0cyBhbmQsIHRoZXJlZm9yZSwgaXQgb25seSB0cmF2ZXJzZXMgbW91bnRlZCBub2Rlcy5cclxuXHRwdWJsaWMgZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIGFuY2hvckROOiBETik6IEROXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgaWYgd2UgaGF2ZSBzaWJsaW5nIERPTSBub2RlcyBhZnRlciBvdXIgbGFzdCBzdWItbm9kZSAtIHRoYXQgbWlnaHQgYmUgZWxlbWVudHNcclxuXHRcdC8vIG5vdCBjb250cm9sbGVkIGJ5IG91ciBjb21wb25lbnQuXHJcblx0XHRpZiAodGhpcy5zdWJOb2Rlcy5sYXN0ICE9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zdCBkbjogRE4gPSB0aGlzLnN1Yk5vZGVzLmxhc3QuZ2V0Rmlyc3RETigpO1xyXG5cdFx0XHRpZiAoZG4gIT09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zdCBuZXh0U2libGluZzogRE4gPSBkbi5uZXh0U2libGluZztcclxuXHRcdFx0XHRpZiAobmV4dFNpYmxpbmcgIT09IG51bGwpXHJcblx0XHRcdFx0XHRyZXR1cm4gbmV4dFNpYmxpbmc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgb3VyIG5leHQgc2libGluZ3NcclxuXHRcdGZvciggbGV0IHZuOiBWTiA9IHRoaXMubmV4dDsgdm4gIT09IG51bGw7IHZuID0gdm4ubmV4dClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHZuLmFuY2hvckROICE9PSBhbmNob3JETilcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdC8vIG5vdGUgdGhhdCBnZXRGaXJzdEROIGNhbGwgdHJhdmVyc2VzIHRoZSBoaWVyYXJjaHkgb2Ygbm9kZXMuIE5vdGUgYWxzbyB0aGF0XHJcblx0XHRcdC8vIGl0IGNhbm5vdCBmaW5kIGEgbm9kZSB1bmRlciBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudCBiZWNhdXNlIHRoZSBmaXJzdCBkaWZmZXJlbnRcclxuXHRcdFx0Ly8gYW5jaG9yIGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZCBhcyBhIHdhbnRlZCBub2RlLlxyXG5cdFx0XHRjb25zdCBkbjogRE4gPSB2bi5nZXRGaXJzdEROKCk7XHJcblx0XHRcdGlmIChkbiAhPT0gbnVsbClcclxuXHRcdFx0XHRyZXR1cm4gZG47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVjdXJzZSB0byBvdXIgcGFyZW50IGlmIGV4aXN0c1xyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ICE9PSBudWxsICYmIHRoaXMucGFyZW50LmFuY2hvckROID09PSBhbmNob3JETlxyXG5cdFx0XHRcdFx0XHQ/IHRoaXMucGFyZW50LmdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCBhbmNob3JETikgOiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGFycmF5IG9mIG5vZGUgbmFtZXMgc3RhcnRpbmcgd2l0aCB0aGlzIG5vZGUgYW5kIHVwIHVudGlsIHRoZSB0b3AtbGV2ZWwgbm9kZS5cclxuXHRwdWJsaWMgZ2V0IHBhdGgoKTogc3RyaW5nW11cclxuXHR7XHJcblx0XHRsZXQgZGVwdGggPSB0aGlzLmRlcHRoO1xyXG5cdFx0bGV0IHBhdGggPSBBcnJheTxzdHJpbmc+KCBkZXB0aCk7XHJcblx0XHRmb3IoIGxldCBpID0gMCwgdm46IFZOID0gdGhpczsgaSA8IGRlcHRoOyBpKyssIHZuID0gdm4ucGFyZW50KVxyXG5cdFx0e1xyXG5cdFx0XHRwYXRoW2ldID0gdm4ubmFtZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcGF0aDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIGlzIG1vdW50ZWQuXHJcblx0cHVibGljIGdldCBJc01vdW50ZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmFuY2hvckROICE9PSBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG5vZGUuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm5hbWU7IH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3MgdHlwZS5cclxuXHRwdWJsaWMgdHlwZTogbWltLlZOVHlwZTtcclxuXHJcblx0Ly8gUGFyZW50IG5vZGUuIFRoaXMgaXMgbnVsbCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cHVibGljIHBhcmVudDogVk47XHJcblxyXG5cdC8vIFJvb3Qgbm9kZS5cclxuXHRwdWJsaWMgcm9vdDogSVJvb3RWTjtcclxuXHJcblx0Ly8gTGV2ZWwgb2YgbmVzdGluZyBhdCB3aGljaCB0aGUgbm9kZSByZXNpZGVzIHJlbGF0aXZlIHRvIHRoZSByb290IG5vZGUuXHJcblx0cHVibGljIGRlcHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmRcclxuXHQvLyBlcnJvciByZXBvcnRpbmcuIFRoZSBuYW1lIG11c3QgYmUgYXZhaWxhYmxlIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGlzIGNvbnN0cnVjdGVkIC0gd2hpY2hcclxuXHQvLyBtZWFucyBiZWZvcmUgdGhlIGNyZWF0ZSBtZXRob2QgaXMgY2FsbGVkLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlXHJcblx0Ly8gdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSwgaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmV4dCBub2RlIGluIHRoZSBjaGFpbiBvZiBzaWJsaW5nIG5vZGVzIG9yIG51bGwgaWYgdGhpcyBpcyB0aGUgbGFzdCBvbmUuXHJcblx0cHVibGljIG5leHQ6IFZOID0gbnVsbDtcclxuXHJcblx0Ly8gUHJldmlvdXMgbm9kZSBpbiB0aGUgY2hhaW4gb2Ygc2libGluZyBub2RlcyBvciBudWxsIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG9uZS5cclxuXHRwdWJsaWMgcHJldjogVk4gPSBudWxsO1xyXG5cclxuXHQvLyBDaGFpbiBvZiBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1Yk5vZGVzID0gbmV3IFZOQ2hhaW4oKTtcclxuXHJcblx0Ly8gRE9NIG5vZGUgdW5kZXIgd2hpY2ggYWxsIGNvbnRlbnQgb2YgdGhpcyB2aXJ0dWFsIG5vZGUgaXMgcmVuZGVyZWQuXHJcblx0cHVibGljIGFuY2hvckROOiBETiA9IG51bGw7XHJcblxyXG5cdC8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXJ2aWNlIG9iamVjdHMgcHVibGlzaGVkIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHB1Ymxpc2hlZFNlcnZpY2VzOiBNYXA8c3RyaW5nLGFueT47XHJcblxyXG5cdC8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBvYmplY3RzIGNvbnN0aXR1dGluZyBzdWJzY3JpcHRpb25zIG1hZGUgYnkgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgc3Vic2NyaWJlZFNlcnZpY2VzOiBNYXA8c3RyaW5nLFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvPjtcclxuXHJcblx0Ly8gXCJUaWNrIG51bWJlclwiIGR1cmluZyB3aGljaCB0aGUgbm9kZSB3YXMgbGFzdCB1cGRhdGVkLiBJZiB0aGlzIG5vZGUncyB0aWNrIG51bWJlciBlcXVhbHNcclxuXHQvLyB0aGUgY3VycmVudCB0aWNrIG51bWJlciBtYWludGFpbmVkIGJ5IHRoZSByb290IG5vZGUsIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIHdhc1xyXG5cdC8vIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIHVwZGF0ZSBjeWNsZS4gVGhpcyBoZWxwcyBwcmV2ZW50IHRoZSBkb3VibGUtcmVuZGVyaW5nIG9mIGFcclxuXHQvLyBjb21wb25lbnQgaWYgYm90aCB0aGUgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZSB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5cdHB1YmxpYyBsYXN0VXBkYXRlVGljazogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5VcGRhdGVEaXNwIHR5cGUgZGVzY3JpYmVzIHdoZXRoZXIgY2VydGFpbiBhY3Rpb25zIHNob3VsZCBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGVcclxuLy8gZHVyaW5nIHVwZGF0ZS4gVGhpcyBvYmplY3QgaXMgcmV0dXJuZWQgZnJvbSB0aGUgbm9kZSdzIHVwZGF0ZUZyb20gbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgVk5VcGRhdGVEaXNwID1cclxue1xyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIG5vZGUgaGFzIGNoYW5nZXMgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgRE9NIHRyZWUuIElmIHRoaXNcclxuXHQvLyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgd2lsbCBiZSBjbGxlZCBvbiB0aGUgbm9kZSBkdXJpbmcgdGhlIENvbW1pdFxyXG5cdC8vIHBoYXNlLlxyXG5cdHNob3VsZENvbW1pdDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgc3ViLW5vZGVzIHNob3VsZCBiZSB1cGRhdGVkLiBJZiB0aGlzIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGVcclxuXHQvLyBub2RlJ3MgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGltbWVkaWF0ZWx5IGNhbGxlZC5cclxuXHRzaG91bGRSZW5kZXI6IGJvb2xlYW47XHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5TdWJzY3JpYmVkU2VydmljZUluZm8gY2xhc3Mga2VlcHMgaW5mb3JtYXRpb24gYWJvdXQgYSBzdWJzY3JpcHRpb24gb2YgYSBub2RlIHRvIGEgc2VydmljZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvXHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIGZpbGxlZCBpbiB3aXRoIHRoZSBzZXJ2aWNlIHZhbHVlXHJcblx0cmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PjtcclxuXHJcblx0Ly8gRGVmYXVsdCB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHVzZWQgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcHVibGlzaGVzIHRoZVxyXG5cdC8vIHNlcnZpY2VcclxuXHRkZWZhdWx0U2VydmljZTogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciBhIG5vZGUgY2FuIHN1YnNjcmliZSB0byBhIHNlcnZpY2UgdGhhdCBpdCBpbXBsZW1lbnRzIGl0c2VsZi4gVGhpc1xyXG5cdC8vIGlzIHVzZWZ1bCBpbiBjYXNlIHdoZXJlIGEgc2VydmljZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGEgY29tcG9uZW50IGNhbiBjaGFpbiB0byBhIHNlcnZpY2VcclxuXHQvLyBpbXBsZW1lbnRlZCBieSBhbiBhbmNlc3RvciBjb21wb25lbnQuXHJcblx0dXNlU2VsZjogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElSb290Vk4gaW50ZXJmYWNlIHJlcHJlc2VudCB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgUm9vdCB2aXJ0dWFsIG5vZGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSb290Vk5cclxue1xyXG5cdC8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyB1bnB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgc3Vic2NyaWJlZCB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0bm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIFNjaGVkdWxlcyBhbiB1cGRhdGUgZm9yIHRoZSBnaXZlbiBub2RlLlxyXG5cdHJlcXVlc3ROb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBDYW5jZWxzIGEgcHJldmlvdXNseSByZXF1ZXN0ZWQgdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRjYW5jZWxOb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcblx0Ly8gaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0c2NoZWR1bGVGdW5jQ2FsbCggZnVuYzogKCkgPT4gdm9pZCwgYmVmb3JlVXBkYXRlOiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0Ly8gQ2FuY2VscyBhIGNhbGwgdGhhdCBoYXMgYmVlbiBzY2hlZHVsZWQgdG8gYmUgbWFkZSBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkXHJcblx0Ly8gY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHRjYW5jZWxTY2hlZHVsZWRGdW5jQ2FsbCggZnVuYzogKCkgPT4gdm9pZCwgYmVmb3JlVXBkYXRlOiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtWTn0gZnJvbSBcIi4vVk5cIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOQ2hhaW4gY2xhc3MgcmVwcmVzZW50cyBhIGRvdWJsbHktbGlua2VkIGxpc3Qgb2YgdmlydHVhbCBub2Rlcy4gSXQgcmVmZXJlbmNlcyB0aGUgZmlyc3RcclxuLy8gYW5kIGxhc3Qgc3ViLW5vZGVzIGFuZCBwcm92aWRlcyBzb21lIGNvbnZlbmllbmNlIG1ldGhvZHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVk5DaGFpbiBpbXBsZW1lbnRzIG1pbS5JVk5DaGFpblxyXG57XHJcblx0Y29uc3RydWN0b3IoIHZuPzogVk4pXHJcblx0e1xyXG5cdFx0aWYgKHZuICE9PSB1bmRlZmluZWQgJiYgdm4gIT0gbnVsbClcclxuXHRcdFx0dGhpcy5hcHBlbmRWTiggdm4pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJVk5DaGFpbiBpbXBsZW1lbnRhdGlvblxyXG5cdHB1YmxpYyBnZXQgRmlyc3QoKTogbWltLklWTm9kZSB7IHJldHVybiB0aGlzLmZpcnN0OyB9XHJcblx0cHVibGljIGdldCBMYXN0KCk6IG1pbS5JVk5vZGUgeyByZXR1cm4gdGhpcy5sYXN0OyB9XHJcblx0cHVibGljIGdldCBDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5jb3VudDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIG5vZGVzIGZyb20gdGhlIGNoYWluLlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5maXJzdCA9IHRoaXMubGFzdCA9IG51bGw7XHJcblx0XHR0aGlzLmNvdW50ID0gMDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBhIG5ldyBub2RlIHRvIHRoZSBlbmQgb2YgdGhlIGNoYWluLlxyXG5cdHB1YmxpYyBhcHBlbmRWTiggdm46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh2biA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHZuLnByZXYgPSB0aGlzLmxhc3Q7XHJcblx0XHRpZiAodGhpcy5maXJzdCA9PT0gbnVsbClcclxuXHRcdFx0dGhpcy5maXJzdCA9IHRoaXMubGFzdCA9IHZuO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxhc3QubmV4dCA9IHZuO1xyXG5cdFx0XHR0aGlzLmxhc3QgPSB2bjtcclxuXHRcdH1cclxuXHRcdHZuLm5leHQgPSBudWxsXHJcblx0XHR0aGlzLmNvdW50Kys7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYWxsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNoYWluIHRvIHRoZSBlbmQgb2Ygb3VyIGNoYWluLlxyXG5cdHB1YmxpYyBhcHBlbmRDaGFpbiggY2hhaW46IFZOQ2hhaW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKGNoYWluID09PSBudWxsIHx8IGNoYWluLmZpcnN0ID09PSBudWxsKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Y2hhaW4uZmlyc3QucHJldiA9IHRoaXMubGFzdDtcclxuXHRcdGlmICh0aGlzLmZpcnN0ID09PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmZpcnN0ID0gY2hhaW4uZmlyc3Q7XHJcblx0XHRcdHRoaXMubGFzdCA9IGNoYWluLmxhc3Q7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGFzdC5uZXh0ID0gY2hhaW4uZmlyc3Q7XHJcblx0XHRcdHRoaXMubGFzdCA9IGNoYWluLmxhc3Q7XHJcblx0XHR9XHJcblx0XHRjaGFpbi5sYXN0Lm5leHQgPSBudWxsO1xyXG5cdFx0dGhpcy5jb3VudCArPSBjaGFpbi5jb3VudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBhIG5ldyBub2RlIHRvIHRoZSBzdGFydCBvZiB0aGUgY2hhaW4uXHJcblx0cHVibGljIGluc2VydFZOKCB2bjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHZuID09PSBudWxsKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dm4ubmV4dCA9IHRoaXMuZmlyc3Q7XHJcblx0XHRpZiAodGhpcy5maXJzdCA9PT0gbnVsbClcclxuXHRcdFx0dGhpcy5maXJzdCA9IHRoaXMubGFzdCA9IHZuO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmZpcnN0LnByZXYgPSB2bjtcclxuXHRcdFx0dGhpcy5maXJzdCA9IHZuO1xyXG5cdFx0fVxyXG5cdFx0dm4ucHJldiA9IG51bGxcclxuXHRcdHRoaXMuY291bnQrKztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVwbGFjZXMgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGUgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gY2hhaW4uXHJcblx0cHVibGljIHJlcGxhY2VWTldpdGhDaGFpbiggdm46IFZOLCBjaGFpbjogVk5DaGFpbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodm4gPT09IG51bGwgfHwgY2hhaW4gPT09IG51bGwpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgcHJldjogVk4gPSB2bi5wcmV2O1xyXG5cdFx0bGV0IG5leHQ6IFZOID0gdm4ubmV4dDtcclxuXHRcdGlmICh0aGlzLmZpcnN0ID09PSB2bilcclxuXHRcdFx0dGhpcy5maXJzdCA9IGNoYWluLmZpcnN0O1xyXG5cdFx0aWYgKHRoaXMubGFzdCA9PT0gdm4pXHJcblx0XHRcdHRoaXMubGFzdCA9IGNoYWluLmxhc3Q7XHJcblx0XHRpZiAocHJldiAhPT0gbnVsbClcclxuXHRcdFx0cHJldi5uZXh0ID0gY2hhaW4uZmlyc3Q7XHJcblx0XHRpZiAobmV4dCAhPSBudWxsKVxyXG5cdFx0XHRuZXh0LnByZXYgPSBjaGFpbi5sYXN0O1xyXG5cclxuXHRcdHRoaXMuY291bnQgKz0gY2hhaW4uY291bnQgLSAxO1xyXG59XHJcblxyXG5cclxuXHJcblx0Ly8gRGVsZXRlcyB0aGUgZ2l2ZW4gbm9kZSBmcm9tIHRoZSBjaGFpbi5cclxuXHRwdWJsaWMgZGVsZXRlVk4oIHZuOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodm4gPT09IG51bGwpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgcHJldjogVk4gPSB2bi5wcmV2O1xyXG5cdFx0bGV0IG5leHQ6IFZOID0gdm4ubmV4dDtcclxuXHRcdGlmICh0aGlzLmZpcnN0ID09PSB2bilcclxuXHRcdFx0dGhpcy5maXJzdCA9IG5leHQ7XHJcblx0XHRpZiAodGhpcy5sYXN0ID09PSB2bilcclxuXHRcdFx0dGhpcy5sYXN0ID0gcHJldjtcclxuXHRcdGlmIChwcmV2ICE9PSBudWxsKVxyXG5cdFx0XHRwcmV2Lm5leHQgPSBuZXh0O1xyXG5cdFx0aWYgKG5leHQgIT0gbnVsbClcclxuXHRcdFx0bmV4dC5wcmV2ID0gcHJldjtcclxuXHJcblx0XHR0aGlzLmNvdW50LS07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpcnN0IG5vZGUgaW4gdGhlIGNoYWluIG9mIHN1Yi1ub2Rlcy4gTnVsbCBmb3IgZW1wdHkgY2hhaW5zLlxyXG5cdHB1YmxpYyBmaXJzdDogVk4gPSBudWxsO1xyXG5cclxuXHQvLyBMYXN0IG5vZGUgaW4gdGhlIGNoYWluIG9mIHN1Yi1ub2Rlcy4gTnVsbCBmb3IgZW1wdHkgY2hhaW5zLlxyXG5cdHB1YmxpYyBsYXN0OiBWTiA9IG51bGw7XHJcblxyXG5cdC8vIE51bWJlciBvZiBub2RlcyBpbiB0aGUgY2hhaW4uXHJcblx0cHVibGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUV2ZW50U2xvdCwgRXZlbnRTbG90fSBmcm9tIFwiLi9FdmVudFNsb3RcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIHRvIGRlZmluZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIGZ1bmN0aW9uYWwgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBmdW5jdGlvbmFsIGNvbXBvbmVudCB3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGdW5jUHJvcHM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSBSZWFkb25seTxUUHJvcHM+ICZcclxuXHR7XHJcblx0XHRyZWFkb25seSBjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBmdW5jdGlvbnMgcmVwcmVzZW50aW5nIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICpcdFx0RGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY0NvbXBUeXBlPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gKHByb3BzOiBGdW5jUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pID0+IGFueTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tcFByb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IGRlZmluZXMgY29uc3R1Y3RvciBzaWduYXR1cmUgZm9yIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0b2YgdGhpcyB0eXBlLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgb2YgdGhpcyB0eXBlLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50Q2xhc3M8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdG5ldyggcHJvcHM6IFRQcm9wcyk6IElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYWxsIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG4gKlx0XHREZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoaXMgY2xhc3MtYmFzZWQgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50PFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcbntcclxuXHQvKiogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciAqL1xyXG5cdHByb3BzOiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgb3IgY2xlYXJzIHRoZSBzaXRlIG9iamVjdCB0byB0aGUgY29tcG9uZW50LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgdHdpY2U6XHJcblx0ICpcdDEpIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3QgdGltZTogdGhlIGNvbXBvbmVudCBtdXN0IHJlbWVtYmVyIHRoZVxyXG5cdCAqXHRcdHBhc3NlZCBvYmplY3QuXHJcblx0ICpcdDIpIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZDogbnVsbCBpcyBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgYW5kIHRoZSBjb21wb25lbnQgbXVzdFxyXG5cdCAqXHRcdHJlbGVhc2UgdGhlIHJlbWVtYmVyZWQgb2JqZWN0LlxyXG5cdCAqIEBwYXJhbSBzaXRlIFRoZSBzaXRlIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIElDb21wb25lbnRTaXRlIGludGVyZmFjZS4gVGhlIGNvbXBvbmVudCB1c2VzXHJcblx0ICogdGhpcyBvYmplY3QgdG8gaW52b2tlIGRpZmZlcmVudCBzZXJ2aWNlcyBwcm92aWRlZCBieSB0aGUgTWltYmwgaW5mcmFzdHJ1Y3R1cmU7IGZvciBleGFtcGxlXHJcblx0ICogdG8gcmVxdWVzdCBhIHJlLXJlbmRlcmluZy5cclxuXHQgKi9cclxuXHRzZXRTaXRlKCBzaXRlOiBJQ29tcG9uZW50U2l0ZSk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBpcyBhYm91dCB0byByZW5kZXIgaXRzIGNvbnRlbnQgZm9yIHRoZSBmaXJzdCB0aW1lLiBUaGlzIG1ldGhvZFxyXG5cdCAqIGlzIGNhbGxlZCB3aGVuIHRoZSBzaXRlIGhhcyBhbHJlYWR5IGJlZW4gc2V0IHNvIHRoZSBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXMgZnJvbSBpdC5cclxuXHQgKi9cclxuXHRjb21wb25lbnRXaWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQncyBjb250ZW50IHRoYXQgd2lsbCBiZSB1bHRpbWF0ZWx5IHBsYWNlZCBpbnRvIHRoZSBET00gdHJlZS4gKi9cclxuXHRyZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQncyBjb250ZW50IGhhcyBiZWVuIGluc2VydGVkIGludG8gdGhlIERPTSB0cmVlLiBUaGlzIG1ldGhvZCBpc1xyXG5cdCAqIGNhbGxlZCBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGluc3RhbnRpYXRlZCBhbmQgdGhlIGluaXRpYWwgcmVuZGVyaW5nIGhhcyBiZWVuIGRvbmUuXHJcblx0ICovXHJcblx0Y29tcG9uZW50RGlkTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluZm9ybXMgdGhlIGNvbXBvbmVudCB0aGF0IG5ldyBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBzcGVjaWZpZWQuIEF0IHRoZSB0aW1lIG9mIHRoZSBjYWxsXHJcblx0ICogdGhpcy5wcm9wcyByZWZlcnMgdG8gdGhlIFwib2xkXCIgcHJvcGVydGllcy4gSWYgdGhlIGNvbXBvbmVudCByZXR1cm5zIHRydWUsdGhlbiBpdHMgcmVuZGVyXHJcblx0ICogbWV0aG9kIHdpbGwgYmUgY2FsbGVkLiBBdCB0aGF0IHRpbWUsdGhlIG9yaWdpbmFsIHByb3BzIG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgaW50byB0aGVcclxuXHQgKiBjb21wb25lbnQncyBjb25zdHJ1Y3RvciB3aWxsIGhhdmUgdGhlc2UgbmV3IHByb3BlcnRpZXMuIElmIHRoZSBjb21wb25lbnQgZG9lc24ndCBpbXBsZW1lbnRcclxuXHQgKiB0aGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlIG1ldGhvZCBpdCBpcyBhcyB0aG91Z2ggdHJ1ZSBpcyByZXR1cm5lZC4gSWYgdGhlIGNvbXBvbmVudCByZXR1cm5zXHJcblx0ICogZmFsc2UsIHRoZSByZW5kZXIgbWV0aG9kIGlzIG5vdCBjYWxsZWQgYW5kIHRoZSBET00gdHJlZSBvZiB0aGUgY29tcG9uZW50IHJlbWFpbnMgdW5jaGFuZ2VkLlxyXG5cdCAqIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjb21wb25lbnQsIGhvd2V2ZXIsIHN0aWxsIGNoYW5nZS5cclxuXHQgKiBAcGFyYW0gbmV3UHJvcHMgVGhlIG5ldyBwcm9wZXJ0aWVzIHRoYXQgdGhlIHBhcmVudCBjb21wb25lbnQgcHJvdmlkZXMgdG8gdGhpcyBjb21wb25lbnQuXHJcblx0ICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBoYXZlIGl0cyByZW5kZXIgbWV0aG9kIGNhbGxlZCBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdHNob3VsZENvbXBvbmVudFVwZGF0ZT8oIG5ld1Byb3BzOiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pOiBib29sZWFuO1xyXG5cclxuXHQvKiogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50J3MgY29udGVudCBoYXMgYmVlbiB1cGRhdGVkIGluIHRoZSBET00gdHJlZS4gKi9cclxuXHRjb21wb25lbnREaWRVcGRhdGU/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00gdHJlZS4gQWZ0ZXJcclxuXHQgKiB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxyXG5cdCAqL1xyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIGFuIGV4Y2VwdGlvbiB0aGF0IG9jY3VycmVkIGR1cmluZyB0aGUgY29tcG9uZW50J3Mgb3duIHJlbmRlcmluZyBvciByZW5kZXJpbmcgb2ZcclxuXHQgKiBvbmUgb2YgaXRzIGRlc2NlbmRhbnRzLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgb3IgaWYgaXQgdGhyb3dzIGFuIGVycm9yLCB0aGVcclxuXHQgKiBlcnJvciB3aWxsIGJlIHByb3BhZ2F0ZWQgdXAgdGhlIGNoYWluIG9mIGNvbXBvbmVudHMgdW50aWwgaXQgcmVhY2hlcyBhIGNvbXBvbmVudCB0aGF0XHJcblx0ICogaGFuZGxlcyBpdC4gSWYgbm9uZSBvZiB0aGUgY29tcG9uZW50cyBjYW4gaGFuZGxlIHRoZSBlcnJvciwgdGhlIGVudGlyZSB0cmVlIHdpbGwgYmVcclxuXHQgKiB1bm1vdW50ZWQuXHJcblx0ICogQHBhcmFtIGVyciBBbiBleGNlcHRpb24gdGhhdCB3YXMgdGhyb3duIGR1cmluZyB0aGUgY29tcG9uZW50J3Mgb3duIHJlbmRlcmluZyBvciByZW5kZXJpbmdcclxuXHQgKiBvZiBvbmUgb2YgaXRzIGRlc2NlbmRhbnRzLlxyXG5cdCAqIEBwYXJhbSBwYXRoIEFuIGFycmF5IG9mIG5hbWVzIG9mIGNvbXBvbmVudHMgYW5kIGVsZW1lbnRzIGZyb20gdGhlIG1vdW50ZWQgcm9vdCB0byB0aGVcclxuXHQgKiBjb21wb25lbnQgdGhhdCB0aHJldyB0aGUgZXhjZXB0aW9uLiBUaGlzIHBhdGggaXMgcHJvdmlkZWQgbW9zdGx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRyYWNpbmdcclxuXHQgKiBwdXJwb3Nlcy5cclxuXHQgKi9cclxuXHRoYW5kbGVFcnJvcj8oIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgdXBkYXRlIGN5Y2xlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2NoZWR1bGVkRnVuY1R5cGUgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDb21wb25lbnRTaXRlIGludGVyZmFjZSByZXByZXNlbnRzIGEgY29ubmVjdGlvbiBvZiBhIGNvbXBvbmVudCB0byB0aGUgcmVuZGVyaW5nIG1lY2hhbmlzbS5cclxuICogVGhpcyBpbnRlcmZhY2UgaXMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgdXBvbiBpbml0aWFsaXphdGlvbiBhbmQgdGhlIGNvbXBvbmVudCBjYWxscyBpdHNcclxuICogbWV0aG9kcyB0byBnZXQgc2VydmljZXMsIGUuZy4gdG8gcmVxdWVzdCBiZWluZyB1cGRhdGVkIG9yIHRvIHN1YnNjcmliZSB0byBhIHNlcnZpY2UuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRTaXRlXHJcbntcclxuXHQvKiogVGhlIGNvbXBvbmVudCBjYW4gY2FsbCB0aGlzIG1ldGhvZCB0byBzZXQgYSBkaXN0aW5ndWlzaGluZyBkaXNwbGF5IG5hbWUgaWRlbnRpZnlpbmcgdGhlXHJcblx0ICogY29tcG9uZW50IGluc3RhbmNlLiBCeSBkZWZhdWx0LCBkaXNwbGF5IG5hbWUgaXMgc2V0IHVzaW5nIHRoZSBjb21wb25lbnQncyBjbGFzcyBuYW1lIGFuZFxyXG5cdCAqIGtleSAoaWYgc3BlY2lmaWVkKS4gVXBvbiBKYXZhU2NyaXB0IG1pbmlmaWNhdGlvbiwgY2xhc3MgbmFtZXMgY2FuIGJlY29tZSBtZWFuaW5nbGVzcyBhbmRcclxuXHQgKiBjb21wb25lbnRzIGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gc2V0IGEgbmFtZSB3aXRoIHNvbWUgbWVhbmluZy4gRGlzcGxheSBuYW1lIGlzIHVzZWQgZm9yXHJcblx0ICogdHJhY2luZyBhbmQgZGVidWdnaW5nIG9ubHkuXHJcblx0ICogQHBhcmFtIG5hbWUgRGlzcGxheSBuYW1lIHRvIHVzZSBmb3IgdGhpcyBjb21wb25lbnQuXHJcblx0ICovXHJcblx0c2V0RGlzcGxheU5hbWUoIG5hbWU6IHN0cmluZyk6IHZvaWQ7XHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB3aGVuIGl0IG5lZWRzIHRvIGJlIHVwZGF0ZWQuICovXHJcblx0cmVxdWVzdFVwZGF0ZSgpOiB2b2lkO1xyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgd2hlbiBpdCBkZWNpZGVzIHRvIGNhbmNlbCBhIHByZXZpb3VzbHkgcmVxdWVzdGVkXHJcblx0ICogdXBkYXRlIHJlcXVlc3QuXHJcblx0ICovXHJcblx0Y2FuY2VsVXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcblx0ICogaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlIHVwZGF0ZSBjeWNsZS5cclxuXHQgKiBAcGFyYW0gYmVmb3JlVXBkYXRlIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSAodHJ1ZSlcclxuXHQgKiBvciBhZnRlciAoZmFsc2UpIHRoZSB1cGRhdGUgY3ljbGUuXHJcblx0ICovXHJcblx0c2NoZWR1bGVDYWxsKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqIENhbmNlbHMgYSBjYWxsIHRoYXQgaGFzIGJlZW4gc2NoZWR1bGVkIHRvIGJlIG1hZGUgZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZFxyXG5cdCAqIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdGhhdCB3YXMgcHJldmlvdXNseSBwYXNzZWQgdG8gdGhlIHNjaGVkdWxlQ2FsbCBtZXRob2QuXHJcblx0ICogQHBhcmFtIGJlZm9yZVVwZGF0ZSBGbGFnIHRoYXQgd2FzIHBhc3NlZCB0byB0aGUgc2NoZWR1bGVDYWxsIG1ldGhvZC5cclxuXHQgKi9cclxuXHRjYW5jZWxTY2hlZHVsZWRDYWxsKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0ICogY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNlcnZpY2U6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10pOiB2b2lkO1xyXG5cclxuXHQvKiogVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiAqL1xyXG5cdHVucHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKiBTdWJzY3JpYmVzIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gSWYgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgcmVnaXN0ZXJlZFxyXG5cdCAqIGJ5IHRoaXMgb3Igb25lIG9mIHRoZSBhbmNlc3RvciBjb21wb25lbnRzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7XHJcblx0ICogb3RoZXJ3aXNlLCB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluXHJcblx0ICogdW5kZWZpbmVkLiBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IHRoaXMgb3IgYSBjbG9zZXN0XHJcblx0ICogYW5jZXN0b3IgY29tcG9uZW50IGlzIGNoYW5nZWQsdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0ICogVGhlIHVzZVNlbGYgb3B0aW9uYWwgcGFyYW1ldGVyIGRldGVybWluZXMgd2hldGhlciB0aGUgY29tcG9uZW50IGNhbiBzdWJzY3JpYmUgdG8gdGhlXHJcblx0ICogc2VydmljZSBwdWJsaXNoZWQgYnkgaXRzZWxmLiBUaGUgZGVmYXVsdCBpcyBmYWxzZS5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICogQHBhcmFtIHJlZiBcclxuXHQgKiBAcGFyYW0gZGVmYXVsdFNlcnZpY2UgXHJcblx0ICogQHBhcmFtIHVzZVNlbGYgXHJcblx0ICovXHJcblx0c3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCByZWY6IFJlZlByb3BUeXBlPElTZXJ2aWNlRGVmaW5pdGlvbnNbS10+LFxyXG5cdFx0XHRcdFx0ZGVmYXVsdFNlcnZpY2U/OiBJU2VydmljZURlZmluaXRpb25zW0tdLCB1c2VTZWxmPzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8qKiBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlXHJcblx0ICogd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKi9cclxuXHR1bnN1YnNjcmliZVNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQgKiBjb21wb25lbnQgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0ICogdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRnZXRTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSxcclxuXHRcdFx0XHRcdHVzZVNlbGY/OiBib29sZWFuKTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZXJ2aWNlRGVmaW5pdGlvbnMgaW50ZXJmYWNlIHNlcnZlcyBhcyBhIG1hcHBpbmcgYmV0d2VlbiBzZXJ2aWNlIG5hbWVzIGFuZCBzZXJ2aWNlIHR5cGVzLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBpbnRlbmRlZCB0byBiZSBhdWdtZW50ZWQgYnkgbW9kdWxlcyB0aGF0IGRlZmluZSBhbmQvb3IgdXNlIHNwZWNpZmljIHNlcnZpY2VzLlxyXG4gKiBUaGlzIGFsbG93cyBwZXJmb3JtaW5nIHNlcnZpY2UgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcgaW4gdHlwZS1zYWZlIG1hbm5lci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG57XHJcblx0LyoqIEJ1aWx0LWluIGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuICovXHJcblx0XCJTdGRFcnJvckhhbmRsaW5nXCI6IElFcnJvckhhbmRsaW5nU2VydmljZTtcclxuXHJcblx0LyoqXHJcblx0ICogQnVpbHQtaW4gc2VydmljZSBmb3IgbGF6eSBwZW9wbGUgLSBjYW4gYmUgdXNlZCBmb3IgcXVpY2sgcHJvdG90eXBlcyB3aXRob3V0IHRoZSBuZWVkIHRvXHJcblx0ICogYXVnbWVudCB0aGUgaW50ZXJmYWNlLlxyXG5cdCAqL1xyXG5cdFwiYW55XCI6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBjYW4gYmUgaW52b2tlZCB3aGVuIGFuIGVycm9yIC1cclxuICogdXN1YWxseSBhbiBleGNlcHRpb24gLSBpcyBlbmNvdW50ZXJlZCBidXQgY2Fubm90IGJlIGhhbmRsZWQgbG9jYWxseS4gQSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzXHJcbiAqIHRoaXMgc2VydmljZSB3b3VsZCBub3JtYWxseSByZW1lbWJlciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gdXBkYXRlIGl0c2VsZixzbyB0aGF0IGluIGl0c1xyXG4gKiByZW5kZXIgbWV0aG9kIGl0IHdpbGwgcHJlc2VudCB0aGUgZXJyb3IgdG8gdGhlIHVzZXIuXHJcbiAqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaXMgaW1wbGVtZW50ZWQgYnkgdGhlIFJvb3QgVmlydHVhbCBOb2RlIGFzIGEgbGFzdCByZXNvcnQgZm9yIGVycm9yXHJcbiAqIGhhbmRsaW5nLiBUaGUgUm9vdCBWTiB3aWxsIGRpc3BsYXkgYSBzaW1wbGUgVUkgc2hvd2luZyB0aGUgZXJyb3IgYW5kIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG9cclxuICogcmVzdGFydCAtIGluIHRoZSBob3BlIHRoYXQgdGhlIGVycm9yIHdpbGwgbm90IHJlcGVhdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cmVwb3J0RXJyb3IoIGVycjogYW55LHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgY29tcG9uZW50cy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoaXMgY2xhc3MgbXVzdCBpbXBsZW1lbnQgdGhlIHJlbmRlclxyXG4gKiBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPlxyXG57XHJcblx0LyoqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IgKi9cclxuXHRwdWJsaWMgcHJvcHM6IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KVxyXG5cdHtcclxuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHR9XHJcblxyXG5cdC8qKiBTaXRlIG9iamVjdCB0aHJvdWdoIHdoaWNoIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlcy4gKi9cclxuXHRwcm90ZWN0ZWQgc2l0ZTogSUNvbXBvbmVudFNpdGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdC8qKiBEaXNwbGF5IG5hbWUgc3BlY2lmaWVkIGJ5IHRoZSBjb21wb25lbnQuICovXHJcblx0cHJvdGVjdGVkIGRpc3BhbHlOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBTZXRzIG9yIGNsZWFycyB0aGUgc2l0ZSBvYmplY3QgdGhyb3VnaCB3aGljaCBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXMuICovXHJcblx0cHVibGljIHNldFNpdGUoIHNpdGU6IElDb21wb25lbnRTaXRlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuc2l0ZSA9IHNpdGU7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIHNpdGUgaGFzIGp1c3QgYmUgc2V0ICh0aGF0IGlzIHRoZSBjb21wb25lbnQgaXMgYmVpbmcgbW91bnRlZCkgYW5kIHRoZSBkaXNwbGF5TmFtZVxyXG5cdFx0Ly8gcHJvcGVydHkgaXMgZGVmaW5lZCxwYXNzIGl0IG9uIHRvIHRoZSBzaXRlXHJcblx0XHRpZiAoc2l0ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZGlzcGFseU5hbWUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zaXRlLnNldERpc3BsYXlOYW1lKCB0aGlzLmRpc3BhbHlOYW1lKTtcclxuXHR9XHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQncyBjb250ZW50IHRoYXQgd2lsbCBiZSB1bHRpbWF0ZWx5IHBsYWNlZCBpbnRvIHRoZSBET00gdHJlZS4gKi9cclxuXHRwdWJsaWMgYWJzdHJhY3QgcmVuZGVyKCk6IGFueTtcclxuXHJcblx0LyoqIFNldHMgdGhlIGNvbXBvbmVudCdzIGRpc3BsYXkgbmFtZSAqL1xyXG5cdHByb3RlY3RlZCBzZXREaXNwbGF5TmFtZSggZGlzcGFseU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmRpc3BhbHlOYW1lID0gZGlzcGFseU5hbWU7XHJcblx0XHRpZiAodGhpcy5zaXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc2l0ZS5zZXREaXNwbGF5TmFtZSggZGlzcGFseU5hbWUpO1xyXG5cdH1cclxuXHJcblx0LyoqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHRvIHJlcXVlc3QgdG8gYmUgdXBkYXRlZC4gKi9cclxuXHRwcm90ZWN0ZWQgdXBkYXRlTWUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNpdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zaXRlLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHRvIGlnbm9yZSBhbnkgdXBkYXRlL2RlbGV0ZS9yZXBsYWNlIHJlcXVlc3RzXHJcblx0Ly8gdGhhdCBoYXZlIGJlZW4gbWFkZSBieSB0aGUgY29tcG9uZW50IGR1cmluZyB0aGUgY3VycmVudCBKYXZhU2NyaXB0IGV2ZW50IGxvb3AuXHJcblx0cHJvdGVjdGVkIGlnbm9yZU1lKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zaXRlICE9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnNpdGUuY2FuY2VsVXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgdG8gc2NoZWR1bGUgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uIHRoZSBuZXh0XHJcblx0ICogdXBkYXRlIGN5Y2xlIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGFyZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSBiZWZvcmVVcGRhdGUgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlICh0cnVlKVxyXG5cdCAqIG9yIGFmdGVyIChmYWxzZSkgdGhlIHVwZGF0ZSBjeWNsZS5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY2FsbE1lKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2l0ZSAhPT0gbnVsbClcclxuXHRcdFx0dGhpcy5zaXRlLnNjaGVkdWxlQ2FsbCggZnVuYywgYmVmb3JlVXBkYXRlKTtcclxuXHR9XHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byBjYW5jZWwgYSBzY2hlZHVsZWQgZnVuY3Rpb24uICovXHJcblx0cHJvdGVjdGVkIGRvbnRDYWxsTWUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zaXRlICE9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnNpdGUuY2FuY2VsU2NoZWR1bGVkQ2FsbCggZnVuYywgYmVmb3JlVXBkYXRlKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIFJlZkZ1bmMgZGVmaW5lcyBldmVudCBoYW5kbGVyIHRoYXQgaXMgaW52b2tlZCB3aGVuIHJlZmVyZW5jZSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmRnVuYzxUPiA9IChuZXdSZWY6IFQpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZWZlcmVuY2UgY2xhc3MgdG8gdXNlIHdoZW5ldmVyIGEgcmVmZXJlbmNlIHRvIGFuIG9iamVjdCBpcyBuZWVkZWQgLSBmb3IgZXhhbXBsZSwgd2l0aCBKU1ggcmVmXHJcbiAqIGF0dHJpYnV0ZXMgYW5kIHNlcnZpY2VzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlZjxUPlxyXG57XHJcblx0cHJpdmF0ZSBfcjogVDtcclxuXHJcblx0LyoqIEV2ZW50IHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgcmVmZXJlbmNlZCB2YWx1ZSBjaGFuZ2VzICovXHJcblx0cHVibGljIGNoYW5nZWRFdmVudDogSUV2ZW50U2xvdDxSZWZGdW5jPFQ+PiA9IG5ldyBFdmVudFNsb3Q8UmVmRnVuYzxUPj4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IoIGxpc3RlbmVyPzogUmVmRnVuYzxUPiwgaW5pdGlhbFJlZmVyZW5lPzogVClcclxuXHR7XHJcblx0XHRpZiAobGlzdGVuZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuYWRkKCBsaXN0ZW5lcik7XHJcblxyXG5cdFx0dGhpcy5fciA9IGluaXRpYWxSZWZlcmVuZTtcclxuXHR9XHJcblxyXG5cdC8qKiBBZGRzIGEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgdmF1ZSBvZiB0aGUgcmVmZXJuY2UgY2hhbmdlcy4gKi9cclxuXHRwdWJsaWMgYWRkTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmFkZCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJlbW92ZXMgYSBjYWxsYmFjayB0aGF0IHdhcyBhZGRlZCB3aXRoIGFkZExpc3RlbmVyLiAqL1xyXG5cdHB1YmxpYyByZW1vdmVMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQucmVtb3ZlKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogR2V0IGFjY2Vzc29ycyB0byB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIGdldCByKCk6IFQgeyByZXR1cm4gdGhpcy5fcjsgfVxyXG5cclxuXHQvKiogU2V0IGFjY2Vzc29ycyB0byB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIHNldCByKCBuZXdSZWY6IFQpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuX3IgIT09IG5ld1JlZilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fciA9IG5ld1JlZjtcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZmlyZSggbmV3UmVmKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKiBDbGVhcnMgdGhlIHJlZmVyZW5jZSB2YWx1ZSBhbmQgYWxzbyBjbGVhcnMgYWxsIGFsbCByZWdpc3RlcmVkIGxpc3RlbmVycyAqL1xyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5fciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmNsZWFyKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAvL1xyXG4vLyAvLyBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHJlZmVyZW5jZSBwcm9wZXJ0aWVzIHdpdGhvdXQgdGhlIG5lZWQgdG8gbWFudWFsbHkgY3JlYXRlXHJcbi8vIC8vIFJlZjw+IGluc3RhbmNlcy4gVGhpcyBhbGxvd3MgZm9yIHRoZSBmb2xsb3dpbmcgY29kZSBwYXR0ZXJuOlxyXG4vLyAvL1xyXG4vLyAvL1x0Y2xhc3MgQSBleHRlbmRzIENvbXBvbmVudFxyXG4vLyAvL1x0e1xyXG4vLyAvL1x0XHRAcmVmIG15RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuLy8gLy9cdFx0cmVuZGVyKCkgeyByZXR1cm4gPGRpdiByZWY9e215RGl2fT5IZWxsbzwvZGl2PjsgfVxyXG4vLyAvL1x0fVxyXG4vLyAvL1xyXG4vLyAvLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIG15RGl2IHByb3BlcnR5IHdpbGwgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkIHdoZW4gZmlyc3QgYWNjZXNzZWQuIFRoZVxyXG4vLyAvLyBhY3R1YWwgb2JqZWN0IHdpbGwgYmUgYSBQcm94eSB0byBSZWY8PiBvZiB0aGUgZ2l2ZW4gdHlwZSAoSFRNTERpdkVsZW1lbnQgaW4gdGhpcyBjYXNlKS5cclxuLy8gLy9cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiByZWYoIHRhcmdldCwgbmFtZSlcclxuLy8ge1xyXG4vLyBcdGZ1bmN0aW9uIHJlZkdldCggb2JqLCBrZXkpXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWYgKGtleSA9PT0gXCJyXCIpXHJcbi8vIFx0XHRcdHJldHVybiBvYmoucjtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0cmV0dXJuIG9iai5yW2tleV07XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRmdW5jdGlvbiByZWZTZXQoIG9iaiwga2V5LCB2YWwsIHJlY2VpdmVyKTogYm9vbGVhblxyXG4vLyBcdHtcclxuLy8gXHRcdGlmIChrZXkgPT09IFwiclwiKVxyXG4vLyBcdFx0XHRvYmouciA9IHZhbDtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0b2JqLnJba2V5XSA9IHZhbDtcclxuXHJcbi8vIFx0XHRyZXR1cm4gdHJ1ZTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGZ1bmN0aW9uIGVuc3VyZVByb3h5KCB0aGlzT2JqOiBhbnksIGF0dHJOYW1lOiBzdHJpbmcpOiBhbnlcclxuLy8gXHR7XHJcbi8vIFx0XHRsZXQgcHJveHkgPSB0aGlzT2JqW2F0dHJOYW1lXTtcclxuLy8gXHRcdGlmICghcHJveHkpXHJcbi8vIFx0XHR7XHJcbi8vIFx0XHRcdHByb3h5ID0gbmV3IFByb3h5KCBuZXcgUmVmPGFueT4oKSwgeyBnZXQ6IHJlZkdldCwgc2V0OiByZWZTZXQgfSk7XHJcbi8vIFx0XHRcdHRoaXNPYmpbYXR0ck5hbWVdID0gcHJveHk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRyZXR1cm4gcHJveHk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRsZXQgYXR0ck5hbWUgPSBcIl9yZWZfXCIgKyBuYW1lO1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLFxyXG4vLyBcdFx0e1xyXG4vLyBcdFx0XHRzZXQoIHZhbCkgeyBlbnN1cmVQcm94eSggdGhpcywgYXR0ck5hbWUpLnIgPSB2YWw7IH0sXHJcbi8vIFx0XHRcdGdldCgpIHsgcmV0dXJuIGVuc3VyZVByb3h5KCB0aGlzLCBhdHRyTmFtZSk7IH1cclxuLy8gXHRcdH1cclxuLy8gXHQpO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIHJlZiBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gSlNYIGVsZW1lbnRzIGFuZCBjb21wb25lbnRzLiBUaGlzIGNhbiBiZSBlaXRoZXIgdGhlXHJcbiAqIFJlZiBjbGFzcyBvciBSZWZGdW5jIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmUHJvcFR5cGU8VD4gPSBSZWY8VD4gfCBSZWZGdW5jPFQ+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHNldCB0aGUgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZSB0aGF0IHRha2VzIGNhcmUgb2YgdGhlIGRpZmZlcmVudCB0eXBlcyBvZlxyXG4gKiByZWZlcmVuY2VzLiBUaGUgb3B0aW9uYWwgb25seUlmIHBhcmFtZXRlciBtYXkgc3BlY2lmeSBhIHZhbHVlIHNvIHRoYXQgb25seSBpZiB0aGUgcmVmZXJlbmNlXHJcbiAqIGN1cnJlbnRseSBoYXMgdGhlIHNhbWUgdmFsdWUgaXQgd2lsbCBiZSByZXBsYWNlZC4gVGhpcyBtaWdodCBiZSBuZWVkZWQgdG8gbm90IGNsZWFyIGFcclxuICogcmVmZXJlbmNlIGlmIGl0IGFscmVhZHkgcG9pbnRzIHRvIGEgZGlmZmVyZW50IG9iamVjdC5cclxuICogQHBhcmFtIHJlZiBSZWZlcmVuY2UgcHJvcGVydHkgdG8gYmUgc2V0XHJcbiAqIEBwYXJhbSB2YWwgUmVmZXJlbmNlIHZhbHVlIHRvIHNldCB0byB0aGUgcHJvcGVydHlcclxuICogQHBhcmFtIG9ubHlJZiBBbiBvcHRpb25hbCB2YWx1ZSB0byB3aGljaCB0byBjb21wYXJlIHRoZSBjdXJyZW50IChvbGQpIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UuXHJcbiAqIFRoZSBuZXcgdmFsdWUgd2lsbCBiZSBzZXQgb25seSBpZiB0aGUgb2xkIHZhbHVlIGVxdWFscyB0aGUgb25seUlmIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFJlZjxUPiggcmVmOiBSZWZQcm9wVHlwZTxUPiwgdmFsOiBULCBvbmx5SWY/OiBUKTogdm9pZFxyXG57XHJcblx0aWYgKHR5cGVvZiByZWYgPT09IFwib2JqZWN0XCIpXHJcblx0e1xyXG5cdFx0bGV0IHJlZk9iaiA9IHJlZiBhcyBSZWY8VD47XHJcblx0XHRpZiAob25seUlmID09PSB1bmRlZmluZWQgfHwgcmVmT2JqLnIgPT09IG9ubHlJZilcclxuXHRcdFx0cmVmT2JqLnIgPSB2YWw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdChyZWYgYXMgUmVmRnVuYzxUPikodmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIGZ1bmN0aW9uIGZvciBkZWZpbmluZyBwcm9wZXJ0aWVzIHdpdGggYSBzZXQgbWV0aG9kIHRoYXQgY2FsbHMgdGhlIHVwZGF0ZU1lIG1ldGhvZFxyXG4gKiB3aGVuZXZlciB0aGUgcHJvcGVydHkgdmFsdWUgY2hhbmdlcy5cclxuICpcclxuICpcdGNsYXNzIENoaWxkIGV4dGVuZHMgQ29tcG9uZW50XHJcbiAqXHR7XHJcbiAqXHRcdEBwcm9wIHRleHQ6IHN0cmluZyA9IFwiSGVsbG8hXCI7XHJcbiAqXHRcdHJlbmRlcigpIHsgcmV0dXJuIDxkaXYgcmVmPXtteURpdn0+e3RleHR9PC9kaXY+OyB9XHJcbiAqXHR9XHJcbiAqXHJcbiAqXHRjbGFzcyBQYXJlbnQgZXh0ZW5kcyBDb21wb25lbnRcclxuICpcdHtcclxuICpcdFx0Y2hpbGQgPSBuZXcgQ2hpbGQoKTtcclxuICpcdFx0cmVuZGVyKCkgeyByZXR1cm4gPGRpdiBjbGljaz17KCkgPT4gdGhpcy5jaGlsZC50ZXh0ICs9IFwiIGFnYWluXCJ9Pnt0aGlzLmNoaWxkfTwvZGl2PjsgfVxyXG4gKlx0fVxyXG4gKlxyXG4gKiBJbiB0aGUgYWJvdmUgZXhhbXBsZSx0aGUgQ2hpbGQgY29tcG9uZW50IHdpbGwgYmUgcmUtcmVuZGVyZWQgd2hldmVyIGl0cyB0ZXh0IHByb3BlcnR5IGNoYW5nZXMuXHJcbiAqIFRoZSBQYXJlbnQgY29tcG9uZW50IGFwcGVuZHMgdGhlIHdvcmQgXCJhZ2FpblwiIHRvIHRoZSBDaGlsZCBjb21wb25lbnQncyB0ZXh0IHdoZW5ldmVyIHRoZSB1c2VyXHJcbiAqIGNsaWNrcyBvbiBpdC5cclxuICogQHBhcmFtIHRhcmdldCBcclxuICogQHBhcmFtIG5hbWUgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvcCggdGFyZ2V0LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuXHRsZXQgYXR0ck5hbWUgPSBcIl9tX1wiICsgbmFtZTtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSxcclxuXHRcdHtcclxuXHRcdFx0c2V0KCB2YWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodGhpc1thdHRyTmFtZV0gIT09IHZhbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzW2F0dHJOYW1lXSA9IHZhbDtcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldCgpIHsgcmV0dXJuIHRoaXNbYXR0ck5hbWVdOyB9XHJcblx0XHR9XHJcblx0KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQW4gYXJ0aWZpY2lhbCBcImZyYWdtZW50XCIgY29tcG9uZW50IHRoYXQgaXMgb25seSB1c2VkIGFzIGEgdGVtcG9yYXJ5IGNvbGxlY3Rpb24gb2Ygb3RoZXIgaXRlbXNcclxuICogaW4gcGxhY2VzIHdoZXJlIEpTWCBvbmx5IGFsbG93cyBhIHNpbmdsZSBpdGVtLiBPdXIgSlNYIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRlcyBhIHZpcnR1YWwgbm9kZVxyXG4gKiBmb3IgaXRzIGNoaWxkcmVuLGJ1dCBsYXRlciB0aGlzIG5vZGUgaXMgdGhyb3duIGF3YXkgYW5kIG9ubHkgY2hpbGRyZW4gYXJlIHVzZWQuIFRoaXMgY29tcG9uZW50XHJcbiAqIGlzIG9ubHkgbmVlZGVkIGJlY2F1c2UgY3VycmVudGx5IFR5cGVTY3JpcHQgZG9lc24ndCBhbG93IHRoZSA8PiBmcmFnbWVudCBub3RhdGlvbiBpZiBhIGN1c3RvbVxyXG4gKiBKU1ggZmFjdG9yeSBmdW5jdGlvbiBpcyB1c2VkLlxyXG4gKlxyXG4gKiBVc2UgaXQgYXMgZm9sbG93aW5nOlxyXG4gKlxyXG4gKlx0aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbiAqXHQuLi4uLlxyXG4gKlx0cmVuZGVyKClcclxuICpcdHtcclxuICpcdFx0cmV0dXJuIDxtaW0uUGxhY2Vob2xkZXI+XHJcbiAqXHRcdFx0PGRpdjEvPlxyXG4gKlx0XHRcdDxkaXYyLz5cclxuICpcdFx0XHQ8ZGl2My8+XHJcbiAqXHRcdDwvbWltLlBsYWNlaG9sZGVyPlxyXG4gKlx0fVxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUGxhY2Vob2xkZXIoIHByb3BzOiBDb21wUHJvcHM8e30+KTogYW55IHt9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gYWJpbGl0eSB0byBoYW5kbGUgY3VzdG9tIHByb3BlcnRpZXMgdGhhdCBjYW5cclxuICogYmUgYXBwbGllZCB0byBpbnRyaW5zaWMgKEhUTUwgb3IgU1ZHKSBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8VD5cclxue1xyXG5cdGluaXRpYWxpemUoIGVsbVZOOiBJRWxtVk4sIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IFQpOiB2b2lkO1xyXG5cdHRlcm1pbmF0ZSgpOiB2b2lkO1xyXG5cdHVwZGF0ZSggb2xkUHJvcFZhbDogVCwgbmV3UHJvcFZhbDogVCk6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFxyXG4gKiBUaGUgSUN1c3RvbUF0dHJpYnV0ZUZhY3RvcnkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gYWJpbGl0eSB0byBjcmVhdGUgb2JqZWN0cyBmb3IgaGFuZGxpbmdcclxuICogY3VzdG9tIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBpbnRyaW5zaWMgKEhUTUwgb3IgU1ZHKSBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUF0dHJpYnV0ZUZhY3Rvcnk8VD5cclxue1xyXG5cdGNyZWF0ZUhhbmRsZXIoIHByb3BOYW1lOiBzdHJpbmcpOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGN1c3RvbSBhdHRyaWJ1dGUgZnVuY3RvcnkgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgbmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG4gKiBAcGFyYW0gZmFjdG9yeSBjdXN0b20gcHJvcGVydHkgZmFjdG9yeVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlPFQ+KCBwcm9wTmFtZTogc3RyaW5nLCBmYWN0b3J5OiBJQ3VzdG9tQXR0cmlidXRlRmFjdG9yeTxUPik6IHZvaWRcclxue1xyXG5cdHNfcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUoIHByb3BOYW1lLCBmYWN0b3J5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZ1bmNQcm94eSBjb21wb25lbnQgd3JhcHMgYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGNvbnRlbnQuIFByb3hpZXMgY2FuIHdyYXAgaW5zdGFuY2VcclxuICogbWV0aG9kcyBvZiBjbGFzc2VzIHRoYXQgaGF2ZSBhY2Nlc3MgdG8gXCJ0aGlzXCIgdGh1cyBhbGxvd2luZyBhIHNpbmdsZSBjbGFzcyB0byBcImhvc3RcIiBtdWx0aXBsZVxyXG4gKiBjb21wb25lbnRzIHRoYXQgY2FuIGJlIHVwZGF0ZWQgc2VwYXJhdGVseS4gVGhpcyBpcyBlc3BlY2lhbGx5IHVzZWZ1bCB3aGVuIHRoZXJlIGlzIGEgaGllcmFyY2h5XHJcbiAqIG9mIGRlcml2ZWQgY2xhc3NlcyBhbmQgKHZpcnR1YWwpIG1ldGhvZHMgdGhhdCBkZWxpdmVyIHNldmVyYWwgcGllY2VzIG9mIGNvbnRlbnQuIEZ1bmNQcm94aWVzXHJcbiAqIGNhbiB3cmFwIHRoZXNlIHZpcnR1YWwgbWV0aG9kcyAob3Igb3RoZXIgbWV0aG9kcyB0aGF0IGNhbGwgdGhlbSkgc28gdGhhdCB0aGUgY29udGVudCBwaWVjZXNcclxuICogY2FuIGJlIHVwZGF0ZWQgc2VwYXJhdGVseS4gRnVuY1Byb3h5IGhhcyBhIHB1YmxpYyBVcGRhdGUgbWV0aG9kIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byBjYXVzZVxyXG4gKiB0aGUgcmVuZGVyaW5nIG1lY2hhbmlzbSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdyYXBwZWQgYnkgdGhlIEZ1bmNQcm94eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHkgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBmdW5jOiAoKSA9PiBhbnkpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmZ1bmMgPSBmdW5jO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZSA9ICgpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2l0ZSlcclxuXHRcdFx0dGhpcy5zaXRlLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZnVuYzogKCkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgV2FpdGluZyBjb21wb25lbnQgd3JhcHMgYSBQcm9taXNlIGFuZCByZXBsYWNlcyBpdHMgY29udGVudCB3aGVuIHRoZSBwcm9taXNlIGlzIHNldHRsZWQuXHJcbiAqIEJlZm9yZSB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkLCB0aGUgY29tcG9uZW50IGRpc3BsYXlzIGFuIG9wdGlvbmFsIFwiaW4tcHJvZ3Jlc3NcIiBjb250ZW50XHJcbiAqIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuIElmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLCB0aGUgY29tcG9uZW50IHdpbGwgZWl0aGVyIGRpc3BsYXlcclxuICogdGhlIFwiZXJyb3JcIiBjb250ZW50IG9idGFpbmVkIGJ5IGNhbGxpbmcgYSBmdW5jdGlvbnMgc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3RvciBvciBpZiBzdWNoXHJcbiAqIGZ1bmN0aW9uIGlzIG5vdCBzcGVjaWZpZWQgc2hvdyBlbXB0eSBjb250ZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFdhaXRpbmcgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgdGhlIG9iamVjdFxyXG5cdCAqIEBwYXJhbSBwcm9taXNlIFByb21pc2Ugb2JqZWN0IHRvIHdhaXQgZm9yXHJcblx0ICogQHBhcmFtIHByb2dyZXNzQ29udGVudCBDb250ZW50IHRvIGRpc3BsYXkgd2hpbGUgd2FpdGluZyBmb3IgdGhlIHByb21pc2VcclxuXHQgKiBAcGFyYW0gZXJyb3JDb250ZW50RnVuYyBDb250ZW50IHRvIGRpc3BsYXkgaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWRcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvciggcHJvbWlzZTogUHJvbWlzZTxhbnk+LCBwcm9ncmVzc0NvbnRlbnQ/OiBhbnksIGVycm9yQ29udGVudEZ1bmM/OiAoZXJyOiBhbnkpID0+IGFueSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuY29udGVudCA9IHByb2dyZXNzQ29udGVudDtcclxuXHJcblx0XHR0aGlzLndhdGNoUHJvbWlzZSggcHJvbWlzZSwgZXJyb3JDb250ZW50RnVuYyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIHdhdGNoUHJvbWlzZShwcm9taXNlOiBQcm9taXNlPGFueT4sZXJyb3JDb250ZW50RnVuYz86IChlcnI6IGFueSkgPT4gYW55KTogUHJvbWlzZTxhbnk+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IGF3YWl0IHByb21pc2U7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cdFx0XHRpZiAoZXJyb3JDb250ZW50RnVuYyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50ID0gZXJyb3JDb250ZW50RnVuYyggZXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2goYW5vdGhlckVycilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNvbnRlbnQ6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogRGVmaW5lcyB0eXBlcyBvZiB2aXJ0dWFsIERPTSBub2RlcyAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBWTlR5cGVcclxue1xyXG5cdC8vIFRvcC1sZXZlbCBub2RlXHJcblx0Um9vdCxcclxuXHJcblx0Ly8gQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIGNvbXBvbmVudCBjcmVhdGVkIHZpYSBuZXdcclxuXHRJbnN0YW5jZUNvbXAsXHJcblxyXG5cdC8vIENsYXNzLWJhc2VkIChzdGF0ZS1mdWxsKSBKU1gtYmFzZWQgY29tcG9uZW50IGxhaWQgb3V0IHVzaW5nIEpTWFxyXG5cdENsYXNzQ29tcCxcclxuXHJcblx0Ly8gU3RhdGVsZXNzIGNvbXBvbmVudCAoc2ltcGxlIHJlbmRlcmluZyBmdW5jdGlvbiBhY2NlcHRpbmcgcHJvcHMpXHJcblx0RnVuY0NvbXAsXHJcblxyXG5cdC8vIERPTSBlbGVtZW50IChIVE1MIG9yIFNWRykgbGFpZCBvdXQgdXNpbmcgSlNYLlxyXG5cdEVsbSxcclxuXHJcblx0Ly8gVGV4dCBub2RlXHJcblx0VGV4dCxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWTkNoYWluIGludGVyZmFjZSByZXByZXNlbnQgYSBkb3VibHktbGlua2VkIGxpc3Qgb2YgdmlydHVhbCBub2Rlcy4gVGhpcyBpcyB0aGUgb2JqZWN0XHJcbiAqIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSB0aGUgSlNYIHByb2Nlc3NpbmcgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWTkNoYWluXHJcbntcclxuXHQvKiogRmlyc3Qgbm9kZSBpbiB0aGUgY2hhaW4uICovXHJcblx0cmVhZG9ubHkgRmlyc3Q6IElWTm9kZTtcclxuXHJcblx0LyoqIExhc3Qgbm9kZSBpbiB0aGUgY2hhaW4uICovXHJcblx0cmVhZG9ubHkgTGFzdDogSVZOb2RlO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBjaGFpbi4gKi9cclxuXHRyZWFkb25seSBDb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZOb2RlIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlLiBUaHJvdWdoIHRoaXMgaW50ZXJmYWNlLGNhbGxlcnMgY2FuIHBlcmZvcm1cclxuICogbW9zdCBjb21tb24gYWN0aW9ucyB0aGF0IGFyZSBhdmFpbGFibGUgb24gZXZlcnkgdHlwZSBvZiB2aXJ0dWFsIG5vZGUuIEVhY2ggdHlwZSBvZiB2aXJ0dWFsIG5vZGVcclxuICogYWxzbyBpbXBsZW1lbnRzIGEgbW9yZSBzcGVjaWZpYyBpbnRlcmZhY2UgdGhyb3VnaCB3aGljaCB0aGUgc3BlY2lmaWMgY2FwYWJpbGl0aWVzIG9mIHRoZSBub2RlXHJcbiAqIHR5cGUgYXJlIGF2YWlsYmFsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyBub2RlIHR5cGUuICovXHJcblx0cmVhZG9ubHkgVHlwZTogVk5UeXBlO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgcGFyZW50LiAqL1xyXG5cdHJlYWRvbmx5IFBhcmVudDogSVZOb2RlO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgbmV4dCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IE5leHQ6IElWTm9kZTtcclxuXHJcblx0LyoqIEdldHMgbm9kZSdzIHByZXZpb3VzIHNpYmxpbmcuICovXHJcblx0cmVhZG9ubHkgUHJldjogSVZOb2RlO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdWItbm9kZXMuICovXHJcblx0cmVhZG9ubHkgU3ViTm9kZXM6IElWTkNoYWluO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgZGlzcGxheSBuYW1lLiAqL1xyXG5cdHJlYWRvbmx5IERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJSW5zdGFuY2VWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBjb21wb25lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbnN0YW5jZVZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGluc3RhbmNlLiAqL1xyXG5cdHJlYWRvbmx5IENvbXA6IElDb21wb25lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBKU1gtYmFzZWQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3NWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBjbGFzcy4gKi9cclxuXHRyZWFkb25seSBDb21wQ2xhc3M6IElDb21wb25lbnRDbGFzcztcclxuXHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBpbnN0YW5jZS4gKi9cclxuXHRyZWFkb25seSBDb21wOiBJQ29tcG9uZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiAgVGhlIElFbG1WTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBET00gZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsbVZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgZWxlbWVudCBuYW1lLiAqL1xyXG5cdHJlYWRvbmx5IEVsbU5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIEdldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZWxlbWVudCBpcyBhbiBTVkcgKGFzIG9wcG9zZWQgdG8gSFRNTCkuICovXHJcblx0cmVhZG9ubHkgSXNTdmc6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBlbGVtZW50IGluc3RhbmNlLiAqL1xyXG5cdHJlYWRvbmx5IEVsbTogRWxlbWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElUZXh0Vk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgdGV4dCBET00gbm9kZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRleHRWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIFRleHQgb2YgdGhlIG5vZGUuICovXHJcblx0VGV4dDogc3RyaW5nO1xyXG5cclxuXHQvKiogVGV4dCBET00gbm9kZS4gKi9cclxuXHRUZXh0Tm9kZTogVGV4dDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogIFN0eWxlc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3R5bGVQcm9wVHlwZSA9IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj47XHJcblxyXG4vKipcclxuICogRXZlbnQgcHJvcGVydHkgdmFsdWUgaXMgYW4gZXZlbnQgaGFuZGxlciBmdW5jdGlvbi4gVCBpcyBET00gZXZlbnQgdHlwZSxlLmcuIE1vdXNlRXZlbnQuIEFsbFxyXG4gKiBET00gZXZlbnRzIGFjY2VwdCBldmVudCBvYmplY3QgYW5kIHJldHVybiB2b2lkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gKGU6IFQpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogRXZlbnQgcHJvcGVydHkgdmFsdWUgaXMgYW4gZXZlbnQgaGFuZGxlciBmdW5jdGlvbi4gVCBpcyBET00gZXZlbnQgdHlwZSxlLmcuIE1vdXNlRXZlbnQuIEFsbFxyXG4gKiBET00gZXZlbnRzIGFjY2VwdCBldmVudCBvYmplY3QgYW5kIHJldHVybiB2b2lkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBFdmVudCBwcm9wZXJ0eSB2YWx1ZSBpcyBhbiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLiBUIGlzIERPTSBldmVudCB0eXBlLGUuZy4gTW91c2VFdmVudC4gQWxsXHJcbiAqIERPTSBldmVudHMgYWNjZXB0IGV2ZW50IG9iamVjdCBhbmQgcmV0dXJuIHZvaWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudFByb3BUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBFdmVudEZ1bmNUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kRmxhZ1R5cGU8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbW1vblByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSlNYIGVsZW1lbnRzIC1cclxuICogaW50cmluc2ljIChIVE1MIGFuZCBTVkcpIGFzIHdlbGwgYXMgZnVuY3Rpb25hbCBhbmQgY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogVW5pcXVlIGtleSB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhpcyBKU1ggZWxlbWVudCBmcm9tIGl0cyBzaWJsaW5ncy4gVGhlIGtleSBjYW4gYmUgb2YgYW55IHR5cGUuICovXHJcblx0a2V5PzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBwcm9wZXJ0eSB0eXBlcyB1c2VkIGJ5IEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgdHlwZSBDb2xvclByb3BUeXBlID0gc3RyaW5nO1xyXG5leHBvcnQgdHlwZSBDcm9zc29yaWdpblByb3BUeXBlID0gXCJhbm9ueW1vdXNcIiB8IFwidXNlLWNyZWRlbnRpYWxzXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1lbmN0eXBlUHJvcFR5cGUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIHwgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfCBcInRleHQvcGxhaW5cIjtcclxuZXhwb3J0IHR5cGUgRm9ybW1ldGhvZFByb3BUeXBlID0gXCJnZXRcIiB8IFwicG9zdFwiIHwgXCJkaWFsb2dcIjtcclxuZXhwb3J0IHR5cGUgRm9ybXRhcmdldFByb3BUeXBlID0gc3RyaW5nIHwgXCJfc2VsZlwiIHwgXCJfYmxhbmtcIiB8IFwiX3BhcmVudFwifCBcIl90b3BcIjtcclxuZXhwb3J0IHR5cGUgUmVmZXJyZXJQb2xpY3lQcm9wVHlwZSA9IFwibm8tcmVmZXJyZXJcIiB8IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIiB8IFwib3JpZ2luXCIgfFxyXG5cdFx0XCJvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiB8IFwidW5zYWZlLXVybFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRWxlbWVudFByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgKGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycylcclxuICogdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudFByb3BzPFRSZWYsVENoaWxkcmVuID0gYW55PiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0Ly9cclxuXHQvKiogUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBlbGVtZW50IGFmdGVyIGl0IGlzIGNyZWF0ZWQgKG1vdW50ZWQpLiBUaGVcclxuXHQgKiByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHQgKi9cclxuXHRyZWY/OiBSZWZQcm9wVHlwZTxUUmVmPjtcclxuXHJcblx0LyoqIENoaWxkcmVuIHRoYXQgY2FuIGJlIHN1cHBsaWVkIHRvIHRoZSBlbGVtZW50ICovXHJcblx0Y2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblxyXG5cdGNsYXNzPzogc3RyaW5nXHJcblx0ZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuXHRkcm9wem9uZSA/OiBcImNvcHlcIiB8IFwibW92ZVwiIHwgXCJsaW5rXCI7XHJcblx0aWQ/OiBzdHJpbmcgfCBudW1iZXI7XHJcblx0bGFuZz86IHN0cmluZztcclxuXHRyb2xlPzogc3RyaW5nO1xyXG5cdHN0eWxlPzogU3R5bGVQcm9wVHlwZTtcclxuXHR0YWJpbmRleD86IG51bWJlcjtcclxuXHJcblx0Ly8gZ2xvYmFsIGV2ZW50c1xyXG5cdGFib3J0PzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRhbmltYXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25pdGVyYXRpb24/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGF1eGNsaWNrPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Ymx1cj86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Y2FuY2VsPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2FucGxheT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXl0aHJvdWdoPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2xpY2s/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGNsb3NlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y29udGV4dG1lbnU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGN1ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGRibGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRkdXJhdGlvbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVtcHRpZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbmRlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVycm9yPzogRXZlbnRQcm9wVHlwZTxFcnJvckV2ZW50PjtcclxuXHRmb2N1cz86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Z290cG9pbnRlcmNhcHR1cmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0aW5wdXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRpbnZhbGlkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0a2V5ZG93bj86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0a2V5cHJlc3M/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXVwPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRsb2FkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVkZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZG1ldGFkYXRhPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVuZD86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0bG9hZHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9zdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdG1vdXNlZG93bj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VlbnRlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VsZWF2ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2Vtb3ZlPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW91dD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdmVyPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZXVwPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRwYXVzZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cG9pbnRlcmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZG93bj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZW50ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmxlYXZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJtb3ZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdXQ/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm92ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcnVwPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHByb2dyZXNzPzogRXZlbnRQcm9wVHlwZTxQcm9ncmVzc0V2ZW50PjtcclxuXHRyYXRlY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzZXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRyZXNpemU/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHNjcm9sbD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbj86IEV2ZW50UHJvcFR5cGU8U2VjdXJpdHlQb2xpY3lWaW9sYXRpb25FdmVudD47XHJcblx0c2Vla2VkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c2Vla2luZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlbGVjdD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0c3RhbGxlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1Ym1pdD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1c3BlbmQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0aW1ldXBkYXRlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG9nZ2xlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG91Y2hjYW5jZWw/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoZW5kPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVudGVyPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGxlYXZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaG1vdmU/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbmVuZD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9ucnVuPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR2b2x1bWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR3YWl0aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2hlZWw/OiBFdmVudFByb3BUeXBlPFdoZWVsRXZlbnQ+O1xyXG5cclxuXHQvLyBFbGVtZW50J3MgZXZlbnRzXHJcblx0ZnVsbHNjcmVlbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGZ1bGxzY3JlZW5lcnJvcj86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cclxuXHQvLyBEb2N1bWVudCdzIGFuZCBFbGVtZW50J3MgZXZlbnRzXHJcblx0Y29weT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdGN1dD86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdHBhc3RlPzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgb25lIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBTVkcgc3BlYzsgdGhhdCBpcywgPHN2Zz5cclxuICogb3IgYW55IG90aGVyIGZyb20gU1ZHLlxyXG4gKiBAcGFyYW0gZWxtIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCJvd25lclNWR0VsZW1lbnRcIiBpbiAoZWxtIGFzIGFueSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB0aGUgPHN2Zz4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSAgRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmdTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAoZWxtIGFzIGFueSkub3duZXJTVkdFbGVtZW50ID09PSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBKU1ggbmFtZXNwYWNlIGRlZmluaW5nIGhvdyBUeXBlU2NyaXB0IHBlcmZvcm1zIHR5cGUgY2hlY2tzIG9uIEpTWCBlbGVtZW50cyxjb21wb25lbnRzXHJcbi8vIHByb3BlcnRpZXMgYW5kIGNoaWxkcmVuLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi9IdG1sVHlwZXNcIjtcclxuaW1wb3J0ICogYXMgc3ZnIGZyb20gXCIuL1N2Z1R5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBOYW1lc3BhY2UgZGVmaW5pbmcgaW50ZXJmYWNlcyB1c2VkIGJ5IFR5cGVTY3JpcHQgdG8gdHlwZS1jaGVjayBKU1ggZXhwcmVzc2lvbnMuXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIEpTWFxyXG57XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudCBleHRlbmRzIElWTkNoYWluIHt9XHJcblxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDbGFzcyBleHRlbmRzIElDb21wb25lbnQge31cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50QXR0cmlidXRlc1Byb3BlcnR5IHsgcHJvcHM6IHt9IH1cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q2hpbGRyZW5BdHRyaWJ1dGUgeyBjaGlsZHJlbjogYW55IH1cclxuXHRcclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0VsZW1lbnRzXHJcblx0e1xyXG5cdFx0Ly8gSFRNTCBlbGVtZW50c1xyXG5cdFx0YTogaHRtbC5JSHRtbEFFbGVtZW50UHJvcHM7XHJcblx0XHRhYmJyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YWNyb255bTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFkZHJlc3M6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhcHBsZXQ6IGh0bWwuSUh0bWxBcHBsZXRFbGVtZW50UHJvcHM7XHJcblx0XHRhcmVhOiBodG1sLklIdG1sQXJlYUVsZW1lbnRQcm9wcztcclxuXHRcdGFydGljbGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhc2lkZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGF1ZGlvOiBodG1sLklIdG1sQXVkaW9FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0YjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJhc2U6IGh0bWwuSUh0bWxCYXNlRWxlbWVudFByb3BzO1xyXG5cdFx0YmFzZWZvbnQ6IGh0bWwuSUh0bWxCYXNlZm9udEVsZW1lbnRQcm9wcztcclxuXHRcdGJkaTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJkbzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJpZzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJsb2NrcXVvdGU6IGh0bWwuSUh0bWxCbG9ja3F1b3RlRWxlbWVudFByb3BzO1xyXG5cdFx0Ym9keTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJyOiBodG1sLklIdG1sQnJFbGVtZW50UHJvcHM7XHJcblx0XHRidXR0b246IGh0bWwuSUh0bWxCdXR0b25FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Y2FudmFzOiBodG1sLklIdG1sQ2FudmFzRWxlbWVudFByb3BzO1xyXG5cdFx0Y2FwdGlvbjogaHRtbC5JSHRtbENhcHRpb25FbGVtZW50UHJvcHM7XHJcblx0XHRjZW50ZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjaXRlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29kZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbDogaHRtbC5JSHRtbENvbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbGdyb3VwOiBodG1sLklIdG1sQ29sZ3JvdXBFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZGF0YTogaHRtbC5JSHRtbERhdGFFbGVtZW50UHJvcHM7XHJcblx0XHRkYXRhbGlzdDogaHRtbC5JSHRtbERhdGFMaXN0RWxlbWVudFByb3BzO1xyXG5cdFx0ZGQ6IGh0bWwuSUh0bWxEZEVsZW1lbnRQcm9wcztcclxuXHRcdGRlbDogaHRtbC5JSHRtbERlbEVsZW1lbnRQcm9wcztcclxuXHRcdGRldGFpbHM6IGh0bWwuSUh0bWxEZXRhaWxzRWxlbWVudFByb3BzO1xyXG5cdFx0ZGZuOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlhbG9nOiBodG1sLklIdG1sRGlhbG9nRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlyOiBodG1sLklIdG1sRGlyRWxlbWVudFByb3BzO1xyXG5cdFx0ZGl2OiBodG1sLklIdG1sRGl2RWxlbWVudFByb3BzO1xyXG5cdFx0ZGw6IGh0bWwuSUh0bWxEbEVsZW1lbnRQcm9wcztcclxuXHRcdGR0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGVtOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZW1iZWQ6IGh0bWwuSUh0bWxFbWJlZEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRmaWVsZHNldDogaHRtbC5JSHRtbEZpZWxkc2V0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmlnY2FwdGlvbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZpZ3VyZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZvbnQ6IGh0bWwuSUh0bWxGb250RWxlbWVudFByb3BzO1xyXG5cdFx0Zm9vdGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9ybTogaHRtbC5JSHRtbEZvcm1FbGVtZW50UHJvcHM7XHJcblx0XHRmcmFtZTogaHRtbC5JSHRtbEZyYW1lRWxlbWVudFByb3BzO1xyXG5cdFx0ZnJhbWVzZXQ6IGh0bWwuSUh0bWxGcmFtZXNldEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRoMTogaHRtbC5JSHRtbEgxRWxlbWVudFByb3BzO1xyXG5cdFx0aDI6IGh0bWwuSUh0bWxIMkVsZW1lbnRQcm9wcztcclxuXHRcdGgzOiBodG1sLklIdG1sSDNFbGVtZW50UHJvcHM7XHJcblx0XHRoNDogaHRtbC5JSHRtbEg0RWxlbWVudFByb3BzO1xyXG5cdFx0aDU6IGh0bWwuSUh0bWxINUVsZW1lbnRQcm9wcztcclxuXHRcdGg2OiBodG1sLklIdG1sSDZFbGVtZW50UHJvcHM7XHJcblx0XHRoZWFkOiBodG1sLklIdG1sSGVhZEVsZW1lbnRQcm9wcztcclxuXHRcdGhlYWRlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGhncm91cDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGhyOiBodG1sLklIdG1sSHJFbGVtZW50UHJvcHM7XHJcblx0XHRodG1sOiBodG1sLklIdG1sSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRpOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aWZyYW1lOiBodG1sLklIdG1sSWZyYW1lRWxlbWVudFByb3BzO1xyXG5cdFx0aW1nOiBodG1sLklIdG1sSW1nRWxlbWVudFByb3BzO1xyXG5cdFx0aW5wdXQ6IGh0bWwuSUh0bWxJbnB1dEVsZW1lbnRQcm9wcztcclxuXHRcdGluczogaHRtbC5JSHRtbEluc0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRrYmQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRrZXlnZW46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bGFiZWw6IGh0bWwuSUh0bWxMYWJlbEVsZW1lbnRQcm9wcztcclxuXHRcdGxlZ2VuZDogaHRtbC5JSHRtbExlZ2VuZEVsZW1lbnRQcm9wcztcclxuXHRcdGxpOiBodG1sLklIdG1sTGlFbGVtZW50UHJvcHM7XHJcblx0XHRsaW5rOiBodG1sLklIdG1sTGlua0VsZW1lbnRQcm9wcztcclxuXHRcdGxpc3Rpbmc6IGh0bWwuSUh0bWxMaXN0aW5nRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG1haW46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtYXA6IGh0bWwuSUh0bWxNYXBFbGVtZW50UHJvcHM7XHJcblx0XHRtYXJrOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWVudTogaHRtbC5JSHRtbE1lbnVFbGVtZW50UHJvcHM7XHJcblx0XHRtZW51aXRlbTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1ldGE6IGh0bWwuSUh0bWxNZXRhRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0ZXI6IGh0bWwuSUh0bWxNZXRlckVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRuYXY6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub2JyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9mcmFtZXM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub3NjcmlwdDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRvYmplY3Q6IGh0bWwuSUh0bWxPYmplY3RFbGVtZW50UHJvcHM7XHJcblx0XHRvbDogaHRtbC5JSHRtbE9sRWxlbWVudFByb3BzO1xyXG5cdFx0b3B0Z3JvdXA6IGh0bWwuSUh0bWxPcHRncm91cEVsZW1lbnRQcm9wcztcclxuXHRcdG9wdGlvbjogaHRtbC5JSHRtbE9wdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdG91dHB1dDogaHRtbC5JSHRtbE91dHB1dEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRwOiBodG1sLklIdG1sUEVsZW1lbnRQcm9wcztcclxuXHRcdHBhcmFtOiBodG1sLklIdG1sUGFyYW1FbGVtZW50UHJvcHM7XHJcblx0XHRwaWN0dXJlOiBodG1sLklIdG1sUGljdHVyZUVsZW1lbnRQcm9wcztcclxuXHRcdHByZTogaHRtbC5JSHRtbFByZUVsZW1lbnRQcm9wcztcclxuXHRcdHByb2dyZXNzOiBodG1sLklIdG1sUHJvZ3Jlc3NFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cTogaHRtbC5JSHRtbFFFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cmI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRycDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnRjOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnVieTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2FtcDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNjcmlwdDogaHRtbC5JSHRtbFNjcmlwdEVsZW1lbnRQcm9wcztcclxuXHRcdHNlY3Rpb246IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzZWxlY3Q6IGh0bWwuSUh0bWxTZWxlY3RFbGVtZW50UHJvcHM7XHJcblx0XHRzbG90OiBodG1sLklIdG1sU2xvdEVsZW1lbnRQcm9wcztcclxuXHRcdHNtYWxsOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c291cmNlOiBodG1sLklIdG1sU291cmNlRWxlbWVudFByb3BzO1xyXG5cdFx0c3BhbjogaHRtbC5JSHRtbFNwYW5FbGVtZW50UHJvcHM7XHJcblx0XHRzdHJpa2U6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdHJvbmc6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdHlsZTogaHRtbC5JSHRtbFN0eWxlRWxlbWVudFByb3BzO1xyXG5cdFx0c3ViOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3VtbWFyeTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN1cDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR0YWJsZTogaHRtbC5JSHRtbFRhYmxlRWxlbWVudFByb3BzO1xyXG5cdFx0dGJvZHk6IGh0bWwuSUh0bWxUYm9keUVsZW1lbnRQcm9wcztcclxuXHRcdHRkOiBodG1sLklIdG1sVGRFbGVtZW50UHJvcHM7XHJcblx0XHR0ZW1wbGF0ZTogaHRtbC5JSHRtbFRlbXBsYXRlRWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dGFyZWE6IGh0bWwuSUh0bWxUZXh0YXJlYUVsZW1lbnRQcm9wcztcclxuXHRcdHRmb290OiBodG1sLklIdG1sVGZvb3RFbGVtZW50UHJvcHM7XHJcblx0XHR0aDogaHRtbC5JSHRtbFRoRWxlbWVudFByb3BzO1xyXG5cdFx0dGhlYWQ6IGh0bWwuSUh0bWxUSGVhZEVsZW1lbnRQcm9wcztcclxuXHRcdHRpbWU6IGh0bWwuSUh0bWxUaW1lRWxlbWVudFByb3BzO1xyXG5cdFx0dGl0bGU6IGh0bWwuSUh0bWxUaXRsZUVsZW1lbnRQcm9wcztcclxuXHRcdHRyOiBodG1sLklIdG1sVHJFbGVtZW50UHJvcHM7XHJcblx0XHR0cmFjazogaHRtbC5JSHRtbFRyYWNrRWxlbWVudFByb3BzO1xyXG5cdFx0dHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHVsOiBodG1sLklIdG1sVWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dmFyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0dmlkZW86IGh0bWwuSUh0bWxWaWRlb0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHR3YnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0eG1wOiBodG1sLklIdG1sWG1wRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdC8vIFNWRyBlbGVtZW50c1xyXG5cdFx0c3ZnOiBzdmcuSVN2Z1N2Z0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzdmdBOiBzdmcuSVN2Z0FFbGVtZW50UHJvcHM7XHJcblx0XHRhbmltYXRlOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdBbmltYXRpb25Qcm9wcztcclxuXHRcdGFuaW1hdGVNb3Rpb246IHN2Zy5JU3ZnQW5pbWF0ZU1vdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdGFuaW1hdGVUYXJuc2Zvcm06IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z0FuaW1hdGlvblByb3BzO1xyXG5cclxuXHRcdGNpcmNsZTogc3ZnLklTdmdDaXJjbGVFbGVtZW50UHJvcHM7XHJcblx0XHRjbGlwUGF0aDogc3ZnLklTdmdDbGlwUGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbG9yUHJvZmlsZTogc3ZnLklTdmdDb2xvclByb2ZpbGVQYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGRlZnM6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0ZGVzYzogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRkaXNjYXJkOiBzdmcuSVN2Z0Rpc2NhcmRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZWxsaXBzZTogc3ZnLklTdmdFbGxpcHNlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGZlQmxlbmQ6IHN2Zy5JU3ZnRmVCbGVuZEVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29sb3JNYXRyaXg6IHN2Zy5JU3ZnRmVDb2xvck1hdHJpeEVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IHN2Zy5JU3ZnRmVDb21wb25lbnRUcmFuc2ZlckVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29tcG9zaXRlOiBzdmcuSVN2Z0ZlQ29tcG9zaXRlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogc3ZnLklTdmdGZUNvbnZvbHZlTWF0cml4RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaWZmdXNlTGlnaHRpbmc6IHN2Zy5JU3ZnRmVEaWZmdXNlTGlnaHRpbmdFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogc3ZnLklTdmdGZURpc3BsYWNlbWVudE1hcEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlzdGFudExpZ2h0OiBzdmcuSVN2Z0ZlRGlzdGFudExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEcm9wU2hhZG93OiBzdmcuSVN2Z0ZlRHJvcFNoYWRvd0VsZW1lbnRQcm9wcztcclxuXHRcdGZlRmxvb2Q6IHN2Zy5JU3ZnRmVGbG9vZEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRnVuY0E6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY0I6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY0c6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY1I6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBzdmcuSVN2Z0ZlR2F1c3NpYW5CbHVyRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVJbWFnZTogc3ZnLklTdmdGZUltYWdlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVNZXJnZTogc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcyB8IHN2Zy5JU3ZnRmlsdGVyUHJpbWl0aXZlUHJvcHM7XHJcblx0XHRmZU1lcmdlTm9kZTogc3ZnLklTdmdGZU1lcmdlTm9kZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlTW9ycGhvbG9neTogc3ZnLklTdmdGZU1vcnBob2xvZ3lFbGVtZW50UHJvcHM7XHJcblx0XHRmZU9mZnNldDogc3ZnLklTdmdGZU9mZnNldEVsZW1lbnRQcm9wcztcclxuXHRcdGZlUG9pbnRMaWdodDogc3ZnLklTdmdGZVBvaW50TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVNwZWN1bGFyTGlnaHRpbmc6IHN2Zy5JU3ZnRmVTcGVjdWxhckxpZ2h0aW5nRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVTcG90TGlnaHQ6IHN2Zy5JU3ZnRmVTcG90TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVRpbGU6IHN2Zy5JU3ZnRmVUaWxlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVUdXJidWxlbmNlOiBzdmcuSVN2Z0ZlVHVyYnVsZW5jZUVsZW1lbnRQcm9wcztcclxuXHRcdGZpbHRlcjogc3ZnLklTdmdGaWx0ZXJFbGVtZW50UHJvcHM7XHJcblx0XHRmb3JlaWduT2JqZWN0OiBzdmcuSVN2Z0ZvcmVpZ25PYmplY3RFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Zzogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHM7XHJcblxyXG5cdFx0aGF0Y2g6IHN2Zy5JU3ZnSGF0Y2hFbGVtZW50UHJvcHM7XHJcblx0XHRoYXRjaHBhdGg6IHN2Zy5JU3ZnSGF0Y2hwYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGltYWdlOiBzdmcuSVN2Z0ltYWdlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGxpbmU6IHN2Zy5JU3ZnTGluZUVsZW1lbnRQcm9wcztcclxuXHRcdGxpbmVhckdyYWRpZW50OiBzdmcuSVN2Z0xpbmVhckdyYWRpZW50RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG1hcmtlcjogc3ZnLklTdmdNYXJrZXJFbGVtZW50UHJvcHM7XHJcblx0XHRtYXNrOiBzdmcuSVN2Z01hc2tFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRhZGF0YTogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRtcGF0aDogc3ZnLklTdmdNUGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRwYXRoOiBzdmcuSVN2Z1BhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRwYXR0ZXJuOiBzdmcuSVN2Z1BhdHRlcm5FbGVtZW50UHJvcHM7XHJcblx0XHRwb2x5Z29uOiBzdmcuSVN2Z1BvbHlnb25FbGVtZW50UHJvcHM7XHJcblx0XHRwb2x5bGluZTogc3ZnLklTdmdQb2x5bGluZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRyYWRpYWxHcmFkaWVudDogc3ZnLklTdmdSYWRpYWxHcmFkaWVudEVsZW1lbnRQcm9wcztcclxuXHRcdHJlY3Q6IHN2Zy5JU3ZnUmVjdEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzdmdTY3JpcHQ6IHN2Zy5JU3ZnU2NyaXB0RWxlbWVudFByb3BzO1xyXG5cdFx0c2V0OiBzdmcuSVN2Z1NldEVsZW1lbnRQcm9wcztcclxuXHRcdHNvbGlkY29sb3I6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0c3RvcDogc3ZnLklTdmdTdG9wRWxlbWVudFByb3BzO1xyXG5cdFx0c3ZnU3R5bGU6IHN2Zy5JU3ZnU3R5bGVFbGVtZW50UHJvcHM7XHJcblx0XHRzd2l0Y2g6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzO1xyXG5cdFx0c3ltYm9sOiBzdmcuSVN2Z1N5bWJvbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR0ZXh0OiBzdmcuSVN2Z1RleHRFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0UGF0aDogc3ZnLklTdmdUZXh0UGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdHN2Z1RpdGxlOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdHRleHRTcGFuOiBzdmcuSVN2Z1RleHRTcGFuRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHVzZTogc3ZnLklTdmdVc2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dmlldzogc3ZnLklTdmdWaWV3RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdC8vW2VsZW1OYW1lOiBzdHJpbmddOiBhbnlcclxuXHR9XHJcblxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHQvLyBQcm9wZXJ0aWVzIGluIHRoaXMgaW50ZXJmYWNlIGFwcGx5IHRvIGludHJpbnNpYyBlbGVtZW50cyBhbmQgdG8gZnVuY3Rpb25hbCBjb21wb25lbnRzLlxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljQXR0cmlidXRlcyBleHRlbmRzIElDb21tb25Qcm9wcyB7fVxyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIGluIHRoaXMgaW50ZXJmYWNlIGFwcGx5IHRvIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNDbGFzc0F0dHJpYnV0ZXM8VD4gZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxuXHR7XHJcblx0XHQvLyBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBpcyBtb3VudGVkLiBUaGVcclxuXHRcdC8vIHJlZmVyZW5jZSB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRyZWY/OiBSZWZQcm9wVHlwZTxUPjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluaXRpb25zIG9mIGZ1bmN0aW9ucyB0aGF0IGRlcGVuZCBvbiBWTi1kZXJpdmVkIGNsYXNzZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21KU1gsIFJvb3RWTn0gZnJvbSBcIi4uL2NvcmUvUm9vdFZOXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEpTWCBGYWN0b3J5IGZ1bmN0aW9uLiBJbiBvcmRlciBmb3IgdGhpcyBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGJ5IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyLCB0aGVcclxuICogdHNjb25maWcuanNvbiBtdXN0IGhhdmUgdGhlIGZvbGxvd2luZyBvcHRpb246XHJcbiAqXHJcbiAqIFwiY29tcGlsZXJPcHRpb25zXCI6XHJcbiAqIHtcclxuICogICAgIFwianN4XCI6IFwicmVhY3RcIixcclxuICogICAgIFwianN4RmFjdG9yeVwiOiBcIm1pbS5qc3hcIlxyXG4gKiB9XHJcbiAqXHJcbiAqIFRoZSAudHN4IGZpbGVzIG11c3QgaW1wb3J0IHRoZSBtaW1ibCBtb2R1bGUgYXMgbWltOiBpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICogQHBhcmFtIHRhZyBcclxuICogQHBhcmFtIHByb3BzIFxyXG4gKiBAcGFyYW0gY2hpbGRyZW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ganN4KCB0YWc6IGFueSwgcHJvcHM6IGFueSwgLi4uY2hpbGRyZW46IGFueVtdKTogYW55XHJcbntcclxuXHQvLyBjaGlsZHJlbiBwYXJhbWV0ZXIgaXMgYWx3YXlzIGFuIGFycmF5LiBBIGNvbXBvbmVudCBjYW4gc3BlY2lmeSB0aGF0IGl0cyBjaGlsZHJlbiBhcmUgYW4gYXJyYXlcclxuXHQvLyBvZiBhIGNlcnRhaW4gdHlwZSwgZS5nLiBjbGFzcyBBIGV4dGVuZHMgbWltLkNvbXBvbmVudDx7fSxUW10+LiBJbiB0aGlzIGNhc2UgdGhlcmUgYXJlIHR3b1xyXG5cdC8vIHdheXMgdG8gc3BlY2lmeSBjaGlsZHJlbiBpbiBKU1g6XHJcblx0Ly9cdDEpIDxBPnt0MX17dDJ9PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFt0MSwgdDJdLlxyXG5cdC8vXHQyKSA8QT57W3QxLCB0Ml19PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFtbdDEsdDJdXS5cclxuXHQvLyBUaGUgcmVhbENoaWxkcmVuIHZhcmlhYmxlIGFjY29tbW9kYXRlcyBib3RoIGNhc2VzLlxyXG5cdGxldCByZWFsQ2hpbGRyZW4gPSBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheSggY2hpbGRyZW5bMF0pID8gY2hpbGRyZW5bMF0gOiBjaGlsZHJlbjtcclxuXHRyZXR1cm4gY3JlYXRlVk5DaGFpbkZyb21KU1goIHRhZywgcHJvcHMsIHJlYWxDaGlsZHJlbik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uKSB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGluIGFcclxuICogc3luY2hyb251cyBtYW5uZXIuXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcmVuZGVyLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gcmVuZGVyIHRoZSBjb250ZW50LiBJZiBudWxsIG9yIHVuZGVmaW5lZCwgdGhlblxyXG4gKiByZW5kZXIgdW5kZXIgdGhlIGRvY3VtZW50LmJvZHkgdGFnLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50U3luYyggY29udGVudDogYW55LCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRSb290Vk4ubW91bnRSb290U3luYyggY29udGVudCwgYW5jaG9yRE4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFxyXG4vKipcclxuICogUmVtb3ZlcyB0aGUgY29udGVudCB0aGF0IHdhcyBvcmlnaW5hbGx5IGdlbmVyYXRlZCBieSB0aGUgbW91bnRTeW5jIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGNvbnRlbnQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudFN5bmMoIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdFJvb3RWTi51bm1vdW50Um9vdFN5bmMoIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24pIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnRcclxuLy8gYXN5bmNocm9ub3VzbHkuXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcmVuZGVyLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gcmVuZGVyIHRoZSBjb250ZW50LiBJZiBudWxsIG9yIHVuZGVmaW5lZCx0aGVuXHJcbiAqXHRcdFx0XHRyZW5kZXIgdW5kZXIgdGhlIGRvY3VtZW50LmJvZHkgdGFnLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdFJvb3RWTi5tb3VudFJvb3QoIGNvbnRlbnQsIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVtb3ZlcyB0aGUgY29udGVudCB0aGF0IHdhcyBvcmlnaW5hbGx5IGdlbmVyYXRlZCBieSB0aGUgbW91bnQgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0aGUgY29udGVudCB3YXMgcHJldmlvdXNseSByZW5kZXJlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50KCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRSb290Vk4udW5tb3VudFJvb3QoIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvdmlkZSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlIGV4cG9ydGVkIGZ1bmN0aW9uLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtFbG1BdHRyLCBQcm9wVHlwZX0gZnJvbSBcIi4uL2NvcmUvRWxtQXR0clwiO1xyXG5cclxuZnVuY3Rpb24gc19yZWdpc3RlckN1c3RvbUF0dHJpYnV0ZTxUPiggcHJvcE5hbWU6IHN0cmluZywgZmFjdG9yeTogSUN1c3RvbUF0dHJpYnV0ZUZhY3Rvcnk8VD4pOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIHByb3BOYW1lLCB7IHR5cGU6IFByb3BUeXBlLkN1c3RvbUF0dHIsIGZhY3RvcnkgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltYmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvbWltXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvSHRtbFR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvU3ZnVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9FbG1BdHRyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9FdmVudFNsb3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9Mb2NhbFN0eWxlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wL1JvdXRlclwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fOyJdLCJzb3VyY2VSb290IjoiIn0=