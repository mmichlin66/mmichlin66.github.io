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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29tcC9Sb3V0ZXIudHN4Iiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvQ2xhc3NWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0NvbXBCYXNlVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9FbG1BdHRyLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRWxtVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9FdmVudFNsb3QudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9GdW5jVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9JbnN0YW5jZVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvTG9jYWxTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290VUkudHN4Iiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUm9vdFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TdmdFbG1zLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVGV4dFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQ2hhaW4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9taW0udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvbWltYmxUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1ibC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW11cmxcIixcImNvbW1vbmpzMlwiOlwibWltdXJsXCIsXCJjb21tb25qc1wiOlwibWltdXJsXCIsXCJhbWRcIjpcIm1pbXVybFwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsMkRBQWdDO0FBQ2hDLHdFQUFrQztBQStGbEM7Ozs7R0FJRztBQUNILE1BQU0sVUFBVTtDQUtmO0FBNkNEOzs7R0FHRztBQUNILE1BQWEsTUFBTyxTQUFRLEdBQUcsQ0FBQyxTQUErQjtJQUU5RCxZQUFhLEtBQW1CO1FBRS9CLEtBQUssRUFBRSxDQUFDO1FBc1ZULGlEQUFpRDtRQUN6QyxlQUFVLEdBQUcsQ0FBRSxDQUFnQixFQUFRLEVBQUU7WUFFaEQsSUFBSSxLQUFLLEdBQWUsQ0FBQyxD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LHFGQUFtQztBQUNuQyw0RUFBOEI7Ozs7Ozs7Ozs7OztBQ1Q5QixvRCIsImZpbGUiOiJtaW1ibC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pbXVybFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtaW11cmxcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltYmxcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW11cmxcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWJsXCJdID0gZmFjdG9yeShyb290W1wibWltdXJsXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9taW1ibFR5cGVzLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgbWltdXJsIGZyb20gXCJtaW11cmxcIlxyXG5pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2NvcmUvbWltXCJcclxuaW1wb3J0IHtJSHRtbEFFbGVtZW50UHJvcHN9IGZyb20gXCIuLi9jb3JlL0h0bWxUeXBlc1wiXHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vY29yZS9taW1cIlxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxuXHR7XHJcbiAgICAgICAgUm91dGVyOiBJUm91dGVyU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSb3V0ZXJTZXJ2aWNlIGlzIGEgc2VydmljZSB0aGF0IGlzIHB1Ymxpc2hlZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC4gSXQgYWxsb3dzXHJcbiAqIHN1YnNjcmliZXJzIHRvIG5hdmlnYXRlIHRvIHBhdGhzIGRlZmluZWQgYnkgUm91dGVyJ3Mgcm91dGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUm91dGVyU2VydmljZVxyXG57XHJcblx0Ly8gTmF2aWdhdGVzIHRvIGEgcm91dGUgbWF0Y2hpbmcgdGhlIGdpdmVuIFVSTC5cclxuXHRuYXZpZ2F0ZUJ5VVJMKCB1cmw6IHN0cmluZywgbWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvLyBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRuYXZpZ2F0ZUJ5SUQoIGlkOiBzdHJpbmcsIGZpZWxkcz86IFJvdXRlRmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5PzogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2Ygb2JqZWN0IGNvbnRhaW5pbmcgZmllbGQgdmFsdWVzIHRoYXQgaXMgcGFzc2VkIHdoZW4gbmF2aWdhdGluZyB0byBhIHJvdXRlLiBXaGVuXHJcbiAqIG5hdmlnYXRpbmcgYnkgcm91dGUgSUQsIHRoZSBmaWVsZHMgYXJlIHBhc3NlZCBleHBsaWNpdGx5LiBXaGVuIG5hdmlnYXRpbmcgYnkgVVJMLCB0aGUgZmllbGRzXHJcbiAqIGFyZSBleHRyYWN0ZWQgZnJvbSB0aGUgVVJMIGFjY29yZGluZyB0byB0aGUgVVJMIHBhdHRlcm4gaW4gdGhlIHJvdXRlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUm91dGVGaWVsZHMgPSB7IFtQOiBzdHJpbmddOiBtaW11cmwuRmllbGRWYWx1ZVR5cGUgfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IHByb3ZpZGVzIGNvbnRlbnQgdG8gZGlzcGxheSBmb3IgYSByb3V0ZS4gSXQgY2FuIHJldHVybiBhIFByb21pc2UgaW5cclxuICogd2hpY2ggY2FzZSB0aGUgUm91dGVyIHdpbGwgZGlzcGxheSBwcm9ncmVzcyBVSSB1bnRpbCB0aGUgY29udGVudCBiZWNvbWVzIGF2YWlsYWJsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIE5hdlRvUm91dGVGdW5jVHlwZSA9IChmaWVsZHM6IFJvdXRlRmllbGRzKSA9PiBhbnk7XHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCB3aGVuIG5hdmlnYXRpbmcgZnJvbSB0aGUgY3VycmVudGx5IGRpc3BsYXllZCByb3V0ZS4gSWYgZmFsc2VcclxuICogaXMgcmV0dXJuZWQsIG5hdmlnYXRpb24gZG9lc24ndCBoYXBwZW4uIFRoaXMgYWxsb3dzIHRoZSBjdXJyZW50IGNvbXBvbmVudCB0byBwcm9tcHQgdGhlIHVzZXJcclxuICogYWJvdXQgdW5zYXZlZCBkYXRhLiBJZiBQcm9taXNlIGlzIHJldHVybmVkLCB0aGUgUm91dGVyIHdpbGwgd2FpdCB1bnRpbCB0aGUgcmVzcG9uc2UgaXMgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTmF2RnJvbVJvdXRlRnVuY1R5cGUgPSAoKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSb3V0ZSBpbnRlcmZhY2UgZGVmaW5lcyBhIG5hdmlnYXRpb24gdGFyZ2V0LiBSb3V0ZXMgY2FuIGhhdmUgc3ViLXJvdXRlcywgd2hpY2ggY3JlYXRlcyBhXHJcbiAqIGhpZXJhcmNoeSBvZiByb3V0ZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlXHJcbntcclxuXHQvKipcclxuXHQgKiBVbmlxdWUgKGJ1dCBvcHRpb25hbCkgSUQgdGhhdCBhbGxvd3MgbmF2aWdhdGluZyB0byB0aGUgdGFyZ2V0IHVzaW5nIGEgc2ltcGxlIElEIGluc3RlYWQgb2ZcclxuXHQgKiBwYXRoLiBUaGUgcGF0aCBtZW1iZXIgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGJyb3dzZXIncyBhZGRyZXNzIGNvbnRyb2wuXHJcblx0ICovXHJcblx0aWQ/OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVSTCBwYXR0ZXJuIC0gY2FuIGNvbnRhaW4gbmFtZWQgcGFyYW1ldGVycyAoYXMgaW4gL3VzZXJzL3t1aWR9KS4gVGhpcyBjYW4gYmUgbGVmdCBlbXB0eVxyXG5cdCAqIGlmIG9ubHkgaWQgaXMgdXNlZFxyXG5cdCAqL1xyXG5cdHVybFBhdHRlcm4/OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIHByb3BlcnR5IHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBoaXN0b3J5LnB1c2hTdGF0ZSBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHR0aXRsZT86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGlvbiBmdW5jdGlvbiB0aGF0IHByb3ZpZGVzIGNvbnRlbnQgdG8gZGlzcGxheS5cclxuXHQgKi9cclxuXHRuYXZUb0Z1bmM/OiBOYXZUb1JvdXRlRnVuY1R5cGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRpb24gZnVuY3Rpb24gdGhhdCBhbGxvd3MgdGhlIGN1cnJlbnQgY29tcG9uZW50IHRvIHByb21wdCB0aGUgdXNlciBhYm91dCB1bnNhdmVkIGRhdGEuXHJcblx0ICovXHJcblx0bmF2RnJvbUZ1bmM/OiBOYXZGcm9tUm91dGVGdW5jVHlwZTtcclxuXHJcblx0LyoqXHJcblx0ICogT3JkZXJlZCBsaXN0IG9mIFJvdXRlIG9iamVjdHMsIHdoaWNoIGFyZSBzdWItcm91dGVzIG9mIHRoaXMgcm91dGUuXHJcblx0ICovXHJcblx0c3ViUm91dGVzPzogUm91dGVbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgY2xhc3MgdGhhdCBpcyB1c2VkIGFzIGEgc3RhdGUgZm9yIEhpc3RvcnkucHVzaFN0YXRlIGZ1bmN0aW9uLiBJdCByZW1lbWJlcnMgdGhlXHJcbiAqIHBhcmFtZXRlcnMgb2YgYSByb3V0ZSB0byBuYXZpZ2F0ZSB0byB3aGVuIHRoZSB1c2VyIGdvZXMgYmFjayBvciBmb3J3YXJkIGluIHRoZSBicm93c2VyJ3NcclxuICogaGlzdG9yeS5cclxuICovXHJcbmNsYXNzIFJvdXRlU3RhdGVcclxue1xyXG5cdHJvdXRlSUQ6IHN0cmluZztcclxuXHRyb3V0ZVVSTDogc3RyaW5nO1xyXG5cdGZpZWxkczogUm91dGVGaWVsZHM7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgYnkgdGhlIFJvdXRlciB0byBkaXNwbGF5IHRoZSBjb250ZW50IG9mIHRoZSBjdXJyZW50IHJvdXRlLlxyXG4gKiBUaGlzIGFsbG93cyB0aGUgcm91dGVyIGRvIGhhdmUgaXRzIG93biBjb250ZW50IC0gdGhlIHNhbWUgZm9yIGFsbCByb3V0ZXMgLSBhbmQgaW5zZXJ0IHRoZVxyXG4gKiBjdXJyZW50IHJvdXRlcidzIGNvbnRlbnQgaW50byBpdC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJvdXRlck91dGVyQ29udGVudFJlbmRlckZ1bmNUeXBlID0gKHJvdXRlQ29udGVudDogYW55KSA9PiBhbnk7XHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCBieSB0aGUgUm91dGVyIHRvIGRpc3BsYXkgYSBwcm9ncmVzcyBVSSB3aGlsZSBpdCBpcyBsb2FkaW5nXHJcbiAqIHJvdXRlIGNvbnRlbnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQcm9ncmVzc0NvbnRlbnRSZW5kZXJGdW5jVHlwZSA9ICgpID0+IGFueTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUm91dGVyUHJvcHMgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSb3V0ZXJQcm9wc1xyXG57XHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyByb3V0ZXIgY29udHJvbHMgdGhlIGJyb3dzZXI7IHRoYXQgaXMsIHVzZXMgSGlzdG9yeSBBUEkgdG9cclxuXHQgKiBwdXNoIG5ldyBzdGF0ZSBhbmQgaW50ZXJjZXB0IGJhY2sgYW5kIGZvcndhcmQgY29tbWFuZHMuIERlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cclxuXHQgKi9cclxuXHRjb250cm9sc0Jyb3dzZXI/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgdGhhdCBpZiB0aGlzIHJvdXRlciBjYW5ub3QgcmVzb2x2ZSBhIHBhdGgsIGl0IHdpbGwgZGVsZWdhdGUgdG8gYSByb3V0ZXIgdXBcclxuXHQgKiB0aGUgY29tcG9uZW50IGNoYWluIChpZiB0aGVyZSBpcyBvbmUpLlxyXG5cdCAqL1xyXG5cdGNoYWluc1RvSGlnaGVyUm91dGVyPzogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIGJhc2VkIG9uIHdoaWNoIGFsbCByb3V0ZSBwYXRocyB3aWxsIGJlIHJlc29sdmVkLiBEZWZhdWx0IHZhbHVlIGlzXHJcblx0ICogdHJ1ZS5cclxuXHQgKi9cclxuXHRiYXNlVVJMPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUm91dGVyIGNvbXBvbmVudCBwcm92aWRlcyBjbGllbnQtc2lkZSByb3V0aW5nLiBJdCB3b3JrcyB3aXRoIFJvdXRlIG9iamVjdHMgdGhhdCBkZWZpbmVcclxuICogYXZhaWxhYmxlIG5hdmlnYXRpb24gdGFyZ2V0cy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXIgZXh0ZW5kcyBtaW0uQ29tcG9uZW50PElSb3V0ZXJQcm9wcyxSb3V0ZVtdPiBpbXBsZW1lbnRzIElSb3V0ZXJTZXJ2aWNlLCBtaW0uSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IElSb3V0ZXJQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHJcblx0XHRpZiAodGhpcy5wcm9wcy5jaGlsZHJlbilcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcm91dGUgb2YgdGhpcy5wcm9wcy5jaGlsZHJlbilcclxuXHRcdFx0XHR0aGlzLmFkZFJvdXRlKCByb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc2VydHMgdGhlIGdpdmVuIHJvdXRlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgbGlzdC5cclxuXHQgKiBAcGFyYW0gcm91dGUgW1tSb3V0ZV1dIG9iamVjdCB0byBhZGRcclxuXHQgKiBAcGFyYW0gaW5kZXggSW5kZXggYXQgd2hpY2ggdG8gYWRkIHRoZSByb3V0ZSBvYmplY3QuIElmIHRoZSBpbmRleCBpcyBub3QgZGVmaW5lZCwgdGhlXHJcblx0ICpcdFx0cm91dGUgaXMgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC4gSWYgaW5kZXggaXMgb3V0IG9mIHJhbmdlIGFuIGV4Y2VwdGlvbiB3aWxsXHJcblx0ICpcdFx0YmUgdGhyb3duLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhZGRSb3V0ZSggcm91dGU6IFJvdXRlLCBpbmRleD86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXJvdXRlKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiUm91dGUgb2JqZWN0IGNhbm5vdCBiZSBudWxsXCIpO1xyXG5cclxuXHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnJvdXRlcy5zcGxpY2UoIGluZGV4LCAwLCByb3V0ZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMucm91dGVzLnB1c2goIHJvdXRlKTtcclxuXHJcblx0XHQvLyByZWN1cnNpdmVseSBhZGQgdGhlIHJvdXRlIGFuZCBhbGwgaXRzIHN1Yi1yb3V0ZXMgKHRoYXQgaGF2ZSBJRHMpIHRvIHRoZSBtYXBcclxuXHRcdHRoaXMuYWRkUm91dGVUb01hcCggcm91dGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZW1vdmVzIGEgcm91dGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBsaXN0IGFuZCByZXR1cm5zIHRoZSBSb3V0ZSBvYmplY3QuIElmIGluZGV4IGlzXHJcblx0ICogb3V0IG9mIHJhbmdlIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93bi5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gaW5kZXhcclxuXHQgKiBAcmV0dXJuIFJvdXRlIFtbUm91dGVdXSBvYmplY3QgdGhhdCB3YXMgcmVtb3ZlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgcmVtb3ZlUm91dGUoIGluZGV4OiBudW1iZXIpOiBSb3V0ZVxyXG5cdHtcclxuXHRcdGxldCByb3V0ZTogUm91dGUgPSB0aGlzLnJvdXRlcy5zcGxpY2UoIGluZGV4LCAxKVswXTtcclxuXHJcblx0XHQvLyByZWN1cnNpdmVseSByZW1vdmUgdGhlIHJvdXRlIGFuZCBhbGwgaXRzIHN1Yi1yb3V0ZXMgKHRoYXQgaGF2ZSBJRHMpIGZyb20gdGhlIG1hcFxyXG5cdFx0dGhpcy5yZW1vdmVSb3V0ZUZyb21NYXAoIHJvdXRlKTtcclxuXHJcblx0XHRyZXR1cm4gcm91dGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIHJvdXRlIGFuZCBpdHMgc3ViLXJvdXRlcyByZWN1cnNpdmVseSB0byB0aGUgbWFwIG9mIHJvdXRlcyBieSBJRHMgKG9ubHlcclxuXHQvLyB0aGUgcm91dGVzIHRoYXQgaGF2ZSB0aGVpciBpZCBwcm9wZXJ0eSBkZWZpbmVkIGFuZCBub3QgZW1wdHkpLlxyXG5cdHByaXZhdGUgYWRkUm91dGVUb01hcCggcm91dGU6IFJvdXRlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChyb3V0ZS5pZClcclxuXHRcdFx0dGhpcy5yb3V0ZXNCeUlELnNldCggcm91dGUuaWQsIHJvdXRlKTtcclxuXHJcblx0XHRpZiAocm91dGUuc3ViUm91dGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBzdWJSb3V0ZSBvZiByb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHRcdFx0dGhpcy5hZGRSb3V0ZVRvTWFwKCBzdWJSb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIHJvdXRlIGFuZCBpdHMgc3ViLXJvdXRlcyByZWN1cnNpdmVseSBmcm9tIHRoZSBtYXAgb2Ygcm91dHMgYnkgSURzIChvbmx5XHJcblx0Ly8gdGhlIHJvdXRlcyB0aGF0IGhhdmUgdGhlaXIgaWQgcHJvcGVydHkgZGVmaW5lZCBhbmQgbm90IGVtcHR5KS5cclxuXHRwcml2YXRlIHJlbW92ZVJvdXRlRnJvbU1hcCggcm91dGU6IFJvdXRlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChyb3V0ZS5pZClcclxuXHRcdFx0dGhpcy5yb3V0ZXNCeUlELmRlbGV0ZSggcm91dGUuaWQpO1xyXG5cclxuXHRcdGlmIChyb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHN1YlJvdXRlIG9mIHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZVJvdXRlRnJvbU1hcCggc3ViUm91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSBtYXRjaGluZyB0aGUgZ2l2ZW4gVVJMLlxyXG5cdCAqIEBwYXJhbSB1cmwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIG5hdmlnYXRlIHRvXHJcblx0ICogQHBhcmFtIG1ha2VIaXN0b3J5RW50cnlcclxuXHQgKi9cclxuXHRwdWJsaWMgbmF2aWdhdGVCeVVSTCggdXJsOiBzdHJpbmcsIG1ha2VIaXN0b3J5RW50cnk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgW3JvdXRlLCBmaWVsZHNdID0gdGhpcy5maW5kUm91dGVCeVVSTCggdXJsKTtcclxuXHRcdGlmICghcm91dGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UpXHJcblx0XHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlLnIubmF2aWdhdGVCeVVSTCggdXJsLCBtYWtlSGlzdG9yeUVudHJ5KTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5hdmlnYXRlVG9Sb3V0ZSggcm91dGUsIHVybCwgZmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGVzIHRvIGEgcm91dGUgd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGlkIElEIG9mIHRoZSByb3V0ZVxyXG5cdCAqIEBwYXJhbSBwYXJhbXMgUGFyYW1ldGVycyB0byBiZSBwYXNzZWQgdG8gdGhlIHJvdXRlJ3MgZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0gbWFrZUhpc3RvcnlFbnRyeSBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgUm91dGVyIHNob3VsZCBjcmVhdGUgYSBuZXcgZW50cnkgaW4gdGhlXHJcblx0ICpcdFx0YnJvd3NlcidzIGhpc3RvcnkuXHJcblx0ICovXHJcblx0cHVibGljIG5hdmlnYXRlQnlJRCggaWQ6IHN0cmluZywgZmllbGRzPzogUm91dGVGaWVsZHMsIG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByb3V0ZTogUm91dGUgPSB0aGlzLnJvdXRlc0J5SUQuZ2V0KCBpZCk7XHJcblx0XHRpZiAoIXJvdXRlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlKVxyXG5cdFx0XHRcdHRoaXMuaGlnaGVyUm91dGVyU2VydmljZS5yLm5hdmlnYXRlQnlJRCggaWQsIGZpZWxkcyk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgd2UgYXJlIGNvbnRyb2xsaW5nIHRoZSBicm93c2VyIHdlIG1heSBuZWVkIHRvIHN1YnN0aXR1dGUgcGFyYW1ldGVycyBpbiB0aGVcclxuXHRcdC8vIHJvdXRlJ3MgVVJMIHBhdHRlcm5cclxuXHRcdGxldCB1cmw6IHN0cmluZztcclxuXHRcdGlmICh0aGlzLmNvbnRyb2xzQnJvd3NlcilcclxuXHRcdHtcclxuXHRcdFx0dXJsID0gcm91dGUudXJsUGF0dGVybjtcclxuXHRcdFx0aWYgKHVybCAmJiBmaWVsZHMpXHJcblx0XHRcdHtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubmF2aWdhdGVUb1JvdXRlKCByb3V0ZSwgdXJsLCBmaWVsZHMsIG1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGaW5kcyBhIHJvdXRlIGJ5IGdvaW5nIHRocm91Z2ggdGhlIHJvdXRlIGhpZXJhcmNoeSBhbmQgdHJ5aW5nIHRvIG1hdGNoIHRoZSBnaXZlbiBVUkwuXHJcblx0ICogSWYgdGhlIHJvdXRlIGlzIGZvdW5kLCB0aGUgVVJMIGlzIHBhcnNlZCBhbmQgYW55IHBhcmFtZXRlcnMgYXJlIGV4dHJhY3RlZCBmcm9tIGl0LlxyXG5cdCAqIEBwYXJhbSB1cmxcclxuXHQgKi9cclxuXHRwcml2YXRlIGZpbmRSb3V0ZUJ5VVJMKCB1cmw6IHN0cmluZyk6IFtSb3V0ZSwgUm91dGVGaWVsZHNdXHJcblx0e1xyXG5cdFx0cmV0dXJuIFJvdXRlci5maW5kUm91dGVSZWN1cnNpdmVCeVVSTCggdXJsLCB0aGlzLnJvdXRlcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIExvb2tzIGZvciBhIHJvdXRlIG1hdGNoaW5nIHRoZSBnaXZlbiBVUkwgYW1vbmcgdGhlIGdpdmVuIGFycmF5IG9mIFJvdXRlIG9iamVjdHMgYW5kXHJcblx0ICogcmVjdXJzaXZlbHkgYW1vbmcgdGhlaXIgc3ViLXJvdXRlcy5cclxuXHQgKiBAcGFyYW0gdXJsIFVSTCB0byBtYXRjaFxyXG5cdCAqIEBwYXJhbSByb3V0ZXMgQXJyYXkgb2YgUm91dGUgb2JqZWN0cyB0byBtYXRjaCB3aXRoIHRoZSBVUkxcclxuXHQgKi9cclxuXHRwcml2YXRlIHN0YXRpYyBmaW5kUm91dGVSZWN1cnNpdmVCeVVSTCggdXJsOiBzdHJpbmcsIHJvdXRlczogUm91dGVbXSk6IFtSb3V0ZSwgUm91dGVGaWVsZHNdXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgcm91dGUgb2Ygcm91dGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbWF0Y2hSZXN1bHQgPSBtaW11cmwubWF0Y2goIHVybCwgcm91dGUudXJsUGF0dGVybik7XHJcblx0XHRcdGlmIChtYXRjaFJlc3VsdClcclxuXHRcdFx0XHRyZXR1cm4gW3JvdXRlLCBtYXRjaFJlc3VsdC5maWVsZHNdO1xyXG5cdFx0XHRlbHNlIGlmIChyb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcm9vdEFuZEZpZWxkcyA9IFJvdXRlci5maW5kUm91dGVSZWN1cnNpdmVCeVVSTCggdXJsLCByb3V0ZS5zdWJSb3V0ZXMpO1xyXG5cdFx0XHRcdGlmIChyb290QW5kRmllbGRzWzBdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJvb3RBbmRGaWVsZHM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gW251bGwsIG51bGxdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0ZXMgdG8gdGhlIGdpdmVuIHJvdXRlIHBhc3NpbmcgdGhlIGdpdmVuIHBhcmFtZXRlcnMuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGlkIElEIG9mIHRoZSByb3V0ZVxyXG5cdCAqIEBwYXJhbSBwYXJhbXMgUGFyYW1ldGVycyB0byBiZSBwYXNzZWQgdG8gdGhlIHJvdXRlJ3MgZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0gbWFrZUhpc3RvcnlFbnRyeSBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgUm91dGVyIHNob3VsZCBjcmVhdGUgYSBuZXcgZW50cnkgaW4gdGhlXHJcblx0ICpcdFx0YnJvd3NlcidzIGhpc3RvcnkuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyBuYXZpZ2F0ZVRvUm91dGUoIHJvdXRlOiBSb3V0ZSwgdXJsOiBzdHJpbmcsIGZpZWxkczogUm91dGVGaWVsZHMsXHJcblx0XHRcdFx0XHRtYWtlSGlzdG9yeUVudHJ5OiBib29sZWFuKTogUHJvbWlzZTxhbnk+XHJcblx0e1xyXG5cdFx0Ly8vLyBjaGVjayBpZiB0aGUgbmV3IHJvdXRlIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHJvdXRlIGFuZCBkb24ndCBkbyBhbnl0aGluZ1xyXG5cdFx0Ly9pZiAocm91dGUgPT09IHRoaXMuY3VyclJvdXRlKVxyXG5cdFx0Ly9cdHJldHVybjtcclxuXHJcblx0XHQvLyBpZiB3ZSBoYXZlIGN1cnJlbnQgcm91dGUsIGFzayBpdCBpZiB3ZSBjYW4gbGVhdmUgaXRcclxuXHRcdGlmICh0aGlzLmN1cnJSb3V0ZSAmJiB0aGlzLmN1cnJSb3V0ZS5uYXZGcm9tRnVuYylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJldDogYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4gPSB0aGlzLmN1cnJSb3V0ZS5uYXZGcm9tRnVuYygpO1xyXG5cdFx0XHRpZiAocmV0IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdFx0XHRyZXQgPSBhd2FpdCAocmV0IGFzIFByb21pc2U8Ym9vbGVhbj4pO1xyXG5cclxuXHRcdFx0aWYgKCFyZXQpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGlmIHdlIGFyZSBjb250cm9sbGluZyB0aGUgYnJvd3NlciB1c2UgSGlzdG9yeSBBUEkgdG8gY2hhbmdlIHN0YXRlXHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIgJiYgbWFrZUhpc3RvcnlFbnRyeSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHN0YXRlOiBSb3V0ZVN0YXRlID0geyByb3V0ZUlEOiByb3V0ZS5pZCwgcm91dGVVUkw6IHVybCwgZmllbGRzIH07XHJcblx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKCBzdGF0ZSwgXCJcIiwgdXJsKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJvdXRlIGFuZCBnZXQgaXRzIGNvbnRlbnRcclxuXHRcdHRoaXMuY3VyclJvdXRlID0gcm91dGU7XHJcblx0XHRsZXQgY29udGVudDogYW55ID0gcm91dGUubmF2VG9GdW5jID8gcm91dGUubmF2VG9GdW5jKCBmaWVsZHMpIDogbnVsbDtcclxuXHRcdGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gYXdhaXQgKGNvbnRlbnQgYXMgUHJvbWlzZTxhbnk+KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gY29udGVudDtcclxuXHJcblx0XHQvLyByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQgc28gdGhhdCBvdXIgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGNhbGxlZFxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIGVycm9yIHdhcyByYWlzZWQgYnkgb25lIG9mIHRoZSBkZXNjZW5kYW50IGNvcG9uZW50cy5cclxuXHRwdWJsaWMgcmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgY29tcG9uZW50V2lsbE1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnNpdGUucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB0aGlzKTtcclxuXHJcblx0XHQvLyBwdWJsaXNoIG91cnNlbHZlcyBhcyBhIHJvdXRlciBzZXJ2aWNlXHJcblx0XHR0aGlzLnNpdGUucHVibGlzaFNlcnZpY2UoIFwiUm91dGVyXCIsIHRoaXMpO1xyXG5cclxuXHRcdC8vIGlmIGluc3RydWN0ZWQgc28sIHN1YnNjcmliZSB0byBhIHJvdXRlciBzZXJ2aWNlIGltcGxlbWVudGVkIGJ5IGFueSBvZiBjb21wb25lbnRzXHJcblx0XHQvLyB1cCB0aGUgY2hhaW5cclxuXHRcdGlmICh0aGlzLmNoYWluc1RvSGlnaGVyUm91dGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UgPSBuZXcgbWltLlJlZjxJUm91dGVyU2VydmljZT4oKTtcclxuXHRcdFx0dGhpcy5zaXRlLnN1YnNjcmliZVNlcnZpY2UoIFwiUm91dGVyXCIsIHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmluZCB0aGUgZmlyc3Qgcm91dGUgdG8gZGlzcGxheVxyXG5cdFx0bGV0IGZpcnN0Um91dGU6IFJvdXRlID0gdGhpcy5yb3V0ZXMubGVuZ3RoID4gMCA/IHRoaXMucm91dGVzWzBdIDogbnVsbDtcclxuXHRcdGlmICghZmlyc3RSb3V0ZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3VyclJvdXRlID0gZmlyc3RSb3V0ZTtcclxuXHRcdGxldCBjb250ZW50OiBhbnkgPSBmaXJzdFJvdXRlLm5hdlRvRnVuYyA/IGZpcnN0Um91dGUubmF2VG9GdW5jKCB7fSkgOiBudWxsO1xyXG5cdFx0aWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBcIlBsZWFzZSB3YWl0IHdoaWxlIGNvbnRlbnQgaXMgbG9hZGluZy4uLlwiO1xyXG5cdFx0XHQoY29udGVudCBhcyBQcm9taXNlPGFueT4pLnRoZW4oICggZGVsYXllZENvbnRlbnQ6IGFueSkgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGRlbGF5ZWRDb250ZW50O1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlTWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbnRyb2xzQnJvd3NlcilcclxuXHRcdHtcclxuXHRcdFx0Ly8gZXN0YWJsaXNoIGJhc2UgVVJMIHJlbGF0aXZlIHRvIHdoaWNoIGFsbCBwYXRocyB3aWxsIGJlIGNvbnNpZGVyZWRcclxuXHRcdFx0aWYgKCF0aGlzLmJhc2VVUkwpXHJcblx0XHRcdHtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gc3Vic2NyaWJlIHRvIHRoZSBwb3BzdGF0ZSBldmVudCBmb3IgbW9uaXRvcmluZyBiYWNrIGFuZCBmb3J3YXJkIGNvbW1hbmRzXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInBvcHN0YXRlXCIsIHRoaXMub25Qb3BzdGF0ZSk7XHJcblxyXG5cdFx0XHRsZXQgc3RhdGU6IFJvdXRlU3RhdGUgPSB7IHJvdXRlSUQ6IGZpcnN0Um91dGUuaWQsIHJvdXRlVVJMOiBmaXJzdFJvdXRlLnVybFBhdHRlcm4sIGZpZWxkczogbnVsbCB9O1xyXG5cdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZSggc3RhdGUsIFwiXCIsIGZpcnN0Um91dGUudXJsUGF0dGVybik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyKVxyXG5cdFx0e1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wc3RhdGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuY2hhaW5zVG9IaWdoZXJSb3V0ZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc2l0ZS51bnN1YnNjcmliZVNlcnZpY2UoIFwiUm91dGVyXCIpO1xyXG5cdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zaXRlLnVucHVibGlzaFNlcnZpY2UoIFwiUm91dGVyXCIpO1xyXG5cdFx0dGhpcy5zaXRlLnVucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy52aXJ0UmVuZGVyKCB0aGlzLmN1cnJSb3V0ZUNvbnRlbnQpO1xyXG5cdH1cclxuXHRcclxuXHJcblxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvciggZXJyOiBhbnksIG5vZGVQYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHQvL3RoaXMuZXJyb3IgPSBlcnI7XHJcblx0XHQvL3RoaXMuZXJyb3JQYXRoID0gbm9kZVBhdGg7XHJcblx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBcclxuXHRcdFx0PGRpdiBpZD1cInJvb3RFcnJvclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwicGlua1wiLCBkaXNwbGF5OlwiZmxleFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgYWxpZ25JdGVtczogXCJzdGFydFwifX0+XHJcblx0XHRcdFx0e2Vycn1cclxuXHRcdFx0XHR7bm9kZVBhdGggJiYgbm9kZVBhdGgubWFwKCAobmFtZSkgPT4gPHNwYW4+e25hbWV9PC9zcGFuPil9XHJcblx0XHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBcIlZpcnR1YWxcIiBmdW5jdGlvbiB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIGJ5IGRlcml2ZWQgY2xhc3Nlcy4gUmVzcG9uc2libGUgZm9yIHJldHVybmluZ1xyXG5cdCAqIGNvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGJ5IHRoZSBSb3V0ZXIgY29tcG9uZW50LiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBlaXRoZXIgY2FsbHNcclxuXHQgKiB0aGUgb3V0ZXJDb250ZW50RnVuYyBpZiBkZWZpbmVkIG9yIGp1c3QgcmV0dXJucyB0aGUgY29udGVudCBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGN1cnJSb3V0ZUNvbnRlbnRcclxuXHQgKiBAcmV0dXJuIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGJ5IHRoZSBSb3V0ZXIgY29tcG9uZW50LlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCB2aXJ0UmVuZGVyKCBjdXJyUm91dGVDb250ZW50OiBhbnkpOiBhbnlcclxuXHR7XHJcblx0XHQvL3JldHVybiB0aGlzLm91dGVyQ29udGVudEZ1bmMgPyB0aGlzLm91dGVyQ29udGVudEZ1bmMoIGN1cnJSb3V0ZUNvbnRlbnQpIDogY3VyclJvdXRlQ29udGVudDtcclxuXHRcdHJldHVybiBjdXJyUm91dGVDb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWFjdHMgb24gdXNlciB1c2luZyBiYWNrIGFuZCBmb3J3YXJkIGJ1dHRvbnMuXHJcblx0cHJpdmF0ZSBvblBvcHN0YXRlID0gKCBlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGxldCBzdGF0ZTogUm91dGVTdGF0ZSA9IGUuc3RhdGUgYXMgUm91dGVTdGF0ZTtcclxuXHRcdGlmICghc3RhdGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAoc3RhdGUucm91dGVJRClcclxuXHRcdFx0dGhpcy5uYXZpZ2F0ZUJ5SUQoIHN0YXRlLnJvdXRlSUQsIHN0YXRlLmZpZWxkcyk7XHJcblx0XHRlbHNlIGlmIChzdGF0ZS5yb3V0ZVVSTClcclxuXHRcdFx0dGhpcy5uYXZpZ2F0ZUJ5VVJMKCBzdGF0ZS5yb3V0ZVVSTCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCBcIlJvdXRlIHN0YXRlIGluIHBvcHN0YXRlIGV2ZW50IGhhcyBuZWl0aGVyIHJvdXRlIElEIG5vciBwYXRoLlwiKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgcm91dGVyIGNvbnRyb2xzIHRoZSBicm93c2VyOyB0aGF0IGlzLCB1c2VzIEhpc3RvcnlcclxuXHQvLyBBUEkgdG8gcHVzaCBuZXcgc3RhdGUgYW5kIGludGVyY2VwdCBiYWNrIGFuZCBmb3J3YXJkIGNvbW1hbmRzLlxyXG5cdHByaXZhdGUgZ2V0IGNvbnRyb2xzQnJvd3NlcigpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuY29udHJvbHNCcm93c2VyID09PSB1bmRlZmluZWQgPyB0cnVlIDogdGhpcy5wcm9wcy5jb250cm9sc0Jyb3dzZXI7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBmbGFnIGluZGljYXRpbmcgdGhhdCBpZiB0aGlzIHJvdXRlciBjYW5ub3QgcmVzb2x2ZSBhIHBhdGgsIGl0IHdpbGwgZGVsZWdhdGUgdG9cclxuXHQvLyBhIHJvdXRlciB1cCB0aGUgY29tcG9uZW50IGNoYWluIChpZiB0aGVyZSBpcyBvbmUpLlxyXG5cdHByaXZhdGUgZ2V0IGNoYWluc1RvSGlnaGVyUm91dGVyKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jaGFpbnNUb0hpZ2hlclJvdXRlciA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMucHJvcHMuY2hhaW5zVG9IaWdoZXJSb3V0ZXI7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgYmFzZWQgb24gd2hpY2ggYWxsIHJvdXRlIHBhdGhzIHdpbGwgYmUgcmVzb2x2ZWQuXHJcblx0cHJpdmF0ZSBnZXQgYmFzZVVSTCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5iYXNlVVJMID09PSB1bmRlZmluZWQgPyBcIlwiIDogdGhpcy5wcm9wcy5iYXNlVVJMO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgZnVuY3Rpb24gdGhhdCByZW5kZXJzIHRoZSBjb250ZW50IG9mIHRoZSBjdXJyZW50IHJvdXRlIGluc2lkZSB0aGUgcm91dGVyJ3Mgb3duIGNvbnRlbnQuIElmXHJcblx0ICogdGhpcyBtZW1iZXIgaXMgdW5kZWZpbmVkLCBvbmx5IHRoZSBjdXJyZW50IHJvdXRlJ3MgY29udGVudCB3aWxsIGJlIGRpc3BsYXllZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0IE91dGVyQ29udGVudEZ1bmMoIHZhbDogUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGUpIHsgdGhpcy5vdXRlckNvbnRlbnRGdW5jID0gdmFsOyB9XHJcblx0cHJpdmF0ZSBvdXRlckNvbnRlbnRGdW5jOiBSb3V0ZXJPdXRlckNvbnRlbnRSZW5kZXJGdW5jVHlwZTtcclxuXHJcblx0LyoqIFNldHMgdGhlIGZ1bmN0aW9uIHRoYXQgcmVuZGVycyBhIHByb2dyZXNzIFVJIHdoaWxlIHRoZSByb3V0ZXIgaXMgbG9hZGluZyByb3V0ZSBjb250ZW50LiAqL1xyXG5cdHB1YmxpYyBzZXQgUHJvZ3Jlc3NDb250ZW50RnVuYyggdmFsOiBQcm9ncmVzc0NvbnRlbnRSZW5kZXJGdW5jVHlwZSkgeyB0aGlzLnByb2dyZXNzQ29udGVudEZ1bmMgPSB2YWw7IH1cclxuXHRwcml2YXRlIHByb2dyZXNzQ29udGVudEZ1bmM6IFByb2dyZXNzQ29udGVudFJlbmRlckZ1bmNUeXBlO1xyXG5cclxuXHQvLyBBIHJvdXRlciBzZXJ2aWNlIHRoaXMgcm91dGVyIHdpbGwgZGVsZWdhdGUgdG8gd2hlbiBpdCBjYW5ub3QgcmVzb2x2ZSBhIHBhdGguXHJcblx0cHJpdmF0ZSBoaWdoZXJSb3V0ZXJTZXJ2aWNlOiBtaW0uUmVmPElSb3V0ZXJTZXJ2aWNlPjtcclxuXHJcblx0Ly8gT3JkZXJlZCBsaXN0IG9mIFJvdXRlIG9iamVjdHMgLSB1c2VkIHRvIGZpbmQgcm91dGVzIGJ5IG1hdGNoaW5nIHBhdGhzLiBOb3RlIHRoYXQgdGhpc1xyXG5cdC8vIGxpc3QgaXMgYWN0dWFsbHkgYSBoaWVyYXJjaHkgYmVjYXVzZSByb3V0ZXMgY2FuIGNvbnRhaW4gc3ViLXJvdXRlcy5cclxuXHRwcml2YXRlIHJvdXRlczogUm91dGVbXSA9IFtdO1xyXG5cclxuXHQvLyBNYXAgb2Ygcm91dGUgSURzIHRvIFJvdXRlIG9iamVjdHMuIEFsbCByb3V0ZXMgdGhhdCBkZWZpbmUgYW4gSUQgYXJlIGFkZGVkIHRvIHRoaXMgbWFwIC1cclxuXHQvLyBubyBtYXR0ZXIgaG93IGRlZXAgaW4gdGhlIGhpZXJhcmNoeS5cclxuXHRwcml2YXRlIHJvdXRlc0J5SUQgPSBuZXcgTWFwPHN0cmluZyxSb3V0ZT4oKTtcclxuXHJcblx0Ly8gQ3VycmVudGx5IGRpc3BsYXllZCByb3V0ZS5cclxuXHRwcml2YXRlIGN1cnJSb3V0ZTogUm91dGU7XHJcblxyXG5cdC8vIENvbnRlbnQgcG92aWRlZCBieSB0aGUgY3VycmVudCByb3V0ZS5cclxuXHRwcml2YXRlIGN1cnJSb3V0ZUNvbnRlbnQ6IGFueTtcclxuXHJcblx0Ly8gRXJyb3IgYW5kIGNvbXBvbmVudCBwYXRoIGluIGNhc2UgYW4gZXJyb3IgaGFzIGJlZW4gY2F1Z2h0LlxyXG5cdHByaXZhdGUgZXJyb3I6IGFueSA9IG51bGw7XHJcblx0cHJpdmF0ZSBlcnJvclBhdGg6IHN0cmluZ1tdID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIExpbmtQcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBwcm9wZXJ0aWVzIGZvciB0aGUgTGluayBjb21wb25lbnQgYmVjYXVzZS4gVGhlIHByb3BlcnRpZXMgaW5cclxuLy8gdGhpcyBpbnRlcmZhY2UgZGVmaW5lIHRoZSByb3V0ZTsgdGhlIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gdGhlIElIdG1sQUVsZW1lbnRQcm9wcyBpbnRlcmZhY2VcclxuLy8gY29ycmVzcG9uZCB0byB0aGUgcmVsZXZhbnQgYXR0cmlidXRlcyBvZiB0aGUgPGE+IERPTSBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJvcHMgZXh0ZW5kcyBJSHRtbEFFbGVtZW50UHJvcHNcclxue1xyXG5cdC8vIFBhdGggdGhhdCB3aWxsIGJlIG1hcHBlZCB0byBhIHJvdXRlIGJ5IHRoZSBSb3V0ZXIuXHJcblx0cm91dGVVUkw/OiBzdHJpbmc7XHJcblxyXG5cdC8vIElEIG9mIHRoZSByb3V0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIGEgcm91dGUgYnkgdGhlIFJvdXRlci5cclxuXHRyb3V0ZUlEPzogc3RyaW5nO1xyXG5cclxuXHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHJvdXRlIHdoZW4gdXNpbmcgcm91dGVJRC5cclxuXHRmaWVsZHM/OiBSb3V0ZUZpZWxkcztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBzaG91bGQgYmUgbWFkZSBhIG5ldyBlbnRyeSBpbiB0aGUgYnJvd3NlcidzIGhpc3Rvcnk7XHJcblx0Ly8gdGhhdCBpcyB0byBiZSBzdWJqZWN0IHRvIGJhY2sgYW5kIGZvcndhcmQgYnJvd3NlciBjb21tYW5kcy5cclxuXHRtYWtlSGlzdG9yeUVudHJ5PzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIExpbmsgY2xhc3MgaXMgYSBKU1ggY29tcG9uZW50IHRoYXQgYWxsb3dzIGNyZWF0aW5nIGxpbmtzIGhhbmRsZWQgYnkgYSBSb3V0ZXIgb2JqZWN0LiBJdCBpc1xyXG4vLyBpbXBsZW1lbnRlZCBhcyBhIEpTWCBjb21wb25lbnQgYmVjYXVzZSBpdHMgaW50ZW5kZWQgdXNlIGlzIHZlcnkgc2ltaWxhciB0byB0aGUgPGE+IERPTVxyXG4vLyBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIExpbmsgZXh0ZW5kcyBtaW0uQ29tcG9uZW50PExpbmtQcm9wcz5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogTGlua1Byb3BzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBwcm9wcyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vIGV4dHJhY3Qgb3VyIGN1c3RvbSBwYXJhbWV0ZXJzIGFuZCBsZWF2ZSBvbmx5IHRob3NlIHRoYXQgYXJlIDxhPiBhdHRyaWJ1dGVzXHJcblx0XHRsZXQge3JvdXRlVVJMLCByb3V0ZUlELCBmaWVsZHMsIG1ha2VIaXN0b3J5RW50cnksIC4uLnJlc3R9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybiA8YSBocmVmPVwiI1wiIGNsaWNrPXt0aGlzLm9uQ2xpY2t9IHsuLi5yZXN0fT5cclxuXHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblx0XHQ8L2E+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uQ2xpY2sgPSAoIGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGxldCBzZXJ2aWNlOiBJUm91dGVyU2VydmljZSA9IHRoaXMuc2l0ZS5nZXRTZXJ2aWNlKCBcIlJvdXRlclwiKTtcclxuXHRcdGlmICghc2VydmljZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzLnJvdXRlSUQpXHJcblx0XHRcdHNlcnZpY2UubmF2aWdhdGVCeUlEKCB0aGlzLnByb3BzLnJvdXRlSUQsIHRoaXMucHJvcHMuZmllbGRzLCB0aGlzLnByb3BzLm1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzZXJ2aWNlLm5hdmlnYXRlQnlVUkwoIHRoaXMucHJvcHMucm91dGVVUkwsIHRoaXMucHJvcHMubWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHJvdXRlclNlcnZpY2UgPSBuZXcgbWltLlJlZjxJUm91dGVyU2VydmljZT4oKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Q29tcEJhc2VWTn0gZnJvbSBcIi4vQ29tcEJhc2VWTlwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIGNvbXBvbmVudCBpbXBsZW1lbnRpbmcgdGhlIElDb21wb25lbnQ8PiBpbnRlcmZhY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NWTiBleHRlbmRzIENvbXBCYXNlVk48bWltLklDb21wb25lbnQ+IGltcGxlbWVudHMgbWltLklDbGFzc1ZOXHJcbntcclxuXHRjb25zdHJ1Y3RvciggY29tcENsYXNzOiBtaW0uSUNvbXBvbmVudENsYXNzLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoIG1pbS5WTlR5cGUuQ2xhc3NDb21wKVxyXG5cclxuXHRcdHRoaXMuY29tcENsYXNzID0gY29tcENsYXNzO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5IGFuZCByZWZcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgY2hpbGRyZW4gYXMgcGFydCBvZiBwcm9wc1xyXG5cdFx0dGhpcy5wcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdC8vIGRlZmF1bHQgbm9kZSBuYW1lIGlzIHRoZSBjb21wb25lbnQncyBjbGFzcyBuYW1lIHBsdXMga2V5IGlmIHNwZWNpZmllZFxyXG5cdFx0dGhpcy5uYW1lID0gdGhpcy5jb21wQ2xhc3MubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPT0gdW5kZWZpbmVkICYmIHRoaXMua2V5ICE9PSBudWxsKVxyXG5cdFx0XHR0aGlzLm5hbWUgKz0gXCIgQFwiICsgdGhpcy5rZXk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJQ2xhc3NWTiBpbXBsZW1lbnRhdGlvblxyXG5cdHB1YmxpYyBnZXQgQ29tcENsYXNzKCk6IG1pbS5JQ29tcG9uZW50Q2xhc3MgeyByZXR1cm4gdGhpcy5jb21wQ2xhc3M7IH1cclxuXHRwdWJsaWMgZ2V0IENvbXAoKTogbWltLklDb21wb25lbnQgeyByZXR1cm4gdGhpcy5jb21wIGFzIG1pbS5JQ29tcG9uZW50OyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHR0aGlzLmNvbXAgPSBuZXcgdGhpcy5jb21wQ2xhc3MoIHRoaXMucHJvcHMpO1xyXG5cdFx0dGhpcy5jb21wLnNldFNpdGUoIHRoaXMpO1xyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnRXaWxsTW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC5jb21wb25lbnRXaWxsTW91bnQoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWRcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5jb21wKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBjb21wb25lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGNvbXBvbmVudHMgKGFuZC9vciBlbGVtZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuY29tcCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnRXaWxsVW5tb3VudClcclxuXHRcdFx0dGhpcy5jb21wLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XHJcblxyXG5cdFx0dGhpcy5jb21wLnNldFNpdGUoIG51bGwpO1xyXG5cdFx0dGhpcy5jb21wID0gdW5kZWZpbmVkO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoZSBjb21wb25lbnQgY2xhc3MgbmFtZSBpcyB0aGUgc2FtZVxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcENsYXNzID09PSAobmV3Vk4gYXMgQ2xhc3NWTikuY29tcENsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYVxyXG5cdC8vIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRpbmcgc3ViLW5vZGVzIGlzIG5lY2Vzc2FyeSBhbmRcclxuXHQvLyBmYWxzZSBvdGhlcndpc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdDbGFzc1ZOID0gbmV3Vk4gYXMgQ2xhc3NWTjtcclxuXHJcblx0XHQvLyBsZXQgdGhlIGNvbXBvbmVudCBrbm93IGFib3V0IHRoZSBuZXcgcHJvcGVydGllcyAoaWYgaXQgaXMgaW50ZXJlc3RlZCBpbiB0aGVtKVxyXG5cdFx0bGV0IHNob3VsZFJlbmRlcjogYm9vbGVhbiA9IHRydWU7XHJcblx0XHRpZiAodGhpcy5jb21wLnNob3VsZENvbXBvbmVudFVwZGF0ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzaG91bGRSZW5kZXIgPSB0aGlzLmNvbXAuc2hvdWxkQ29tcG9uZW50VXBkYXRlKCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0NsYXNzVk4ucmVmICE9PSB0aGlzLnJlZilcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByZWZlcmVuY2Ugb2JqZWN0XHJcblx0XHRcdHRoaXMucmVmID0gbmV3Q2xhc3NWTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdDbGFzc1ZOLnJlZiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB3ZSBrbm93IHRoYXQgb3VyIHJlZmVyZW5jZSBpcyBkZWZpbmVkLCBzbyB1bnNldCBpdFxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdDbGFzc1ZOLmtleTtcclxuXHJcblx0XHQvLyBzaGFsbG93IGNvcHkgdGhlIG5ldyBwcm9wZXJ0aWVzIGZyb20gdGhlIG90aGVyIG5vZGUgdG8gb3VyIG9iamVjdC4gVGhpcyBpcyBuZWVkZWRcclxuXHRcdC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBnb3Qgb3VyIHByb3BzIG9iamVjdCBpbiB0aGUgY29uc3RydWN0b3IgYW5kIHdpbGwga2VlcFxyXG5cdFx0Ly8gd29ya2luZyB3aXRoIGl0IC0gZXNwZWNpYWxseSBpZiBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlIG1ldGhvZC5cclxuXHRcdE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goIGtleSA9PiBkZWxldGUgdGhpcy5wcm9wc1trZXldKTtcclxuXHRcdE9iamVjdC5hc3NpZ24oIHRoaXMucHJvcHMsIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiB7IHNob3VsZENvbW1pdDogZmFsc2UsIHNob3VsZFJlbmRlciB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUeXBlIG9mIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBjb21wQ2xhc3M6IG1pbS5JQ29tcG9uZW50Q2xhc3M7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC5cclxuXHRwcml2YXRlIHJlZjogbWltLlJlZjxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTn0gZnJvbSBcIi4vVk5cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBDb21wQmFzZVZOIGlzIGEgYmFzZSBjbGFzcyBmb3IgSW5zdGFuY2VWTiBhbmQgQ2xhc3NWTi4gSXQgcHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHlcclxuLy8gaW4gdGVybXMgb2YgdXBkYXRlIHJlcXVlc3RzIGFuZCBsaWZlY3ljbGUgbWFuYWdlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wQmFzZVZOPFRDb21wIGV4dGVuZHMgbWltLklDb21wb25lbnQ+IGV4dGVuZHMgVk4gaW1wbGVtZW50cyBtaW0uSUNvbXBvbmVudFNpdGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB0eXBlOiBtaW0uVk5UeXBlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCB0eXBlKVxyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0cHVibGljIGdldFN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICh0aGlzLmNvbXAgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwicmVuZGVyKCkgd2FzIGNhbGxlZCBvbiB1bm1vdW50ZWQgY29tcG9uZW50LlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG4vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLnJlbmRlcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5oYW5kbGVFcnJvciAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBoYXMgYmVlbiBpbnNlcnRlZFxyXG5cdC8vIGludG8gdGhlIERPTSB0cmVlLlxyXG5cdHB1YmxpYyBkaWRNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnREaWRNb3VudClcclxuXHRcdFx0dGhpcy5jb21wLmNvbXBvbmVudERpZE1vdW50KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBoYXMgYmVlbiB1cGRhdGVkXHJcblx0Ly8gaW4gdGhlIERPTSB0cmVlLlxyXG5cdHB1YmxpYyBkaWRVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbXAuY29tcG9uZW50RGlkVXBkYXRlKVxyXG5cdFx0XHR0aGlzLmNvbXAuY29tcG9uZW50RGlkVXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETlxyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgZG9uJ3QgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIGNvbXA6IFRDb21wO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFR5cGUgb2YgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBQcm9wVHlwZVxyXG57XHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvLyBSZWd1bGFyIGF0dHJpYnV0ZXMgc2V0IHVzaW5nIEVsZW1lbnQuc2V0QXR0cmlidXRlKCk7XHJcblx0QXR0ciA9IDEsXHJcblxyXG5cdC8vIEV2ZW50IGxpc3RlbmVycyBzZXQgdXNpbmcgRWxlbWVudC5hZGRFdmVudExpc3RlbmVyXHJcblx0RXZlbnQgPSAyLFxyXG5cclxuXHQvLyBDdXN0b20gYXR0cmlidXRlcyBmb3Igd2hpY2ggaGFuZGxlciBmYWN0b3JpZXMgYXJlIHJlZ2lzdGVyZWRcclxuXHRDdXN0b21BdHRyID0gMyxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzZSBpbnRlcmZhY2UgZGVzY3JpYmluZyBpbmZvcm1hdGlvbiBrZXB0IGFib3V0IHByb3BlcnR5IHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBUeXBlIG9mIHRoZSBwcm9wZXJ0eS5cclxuXHR0eXBlOiBQcm9wVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgYXR0cmlidXRlcyB0aGF0IGNvbnRhaW5zIGZ1bmN0aW9ucyBmb3Igc2V0dGluZywgZGlmZmluZywgdXBkYXRpbmcgYW5kXHJcbi8vIHJlbW92aW5nIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXR0clByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGdW5jdGlvbiB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIERPTVxyXG5cdC8vIGVsbS5zZXRBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXMgYXR0cmlidXRlIG5hbWUgYW5kIHByb3BWYWwgY29udmVydGVkIHRvIHN0cmluZy5cclxuXHRzZXQ/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGFuZCByZXR1cm5zIGFuIG9iamVjdFxyXG5cdC8vIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHVwZGF0ZUZ1bmMgZnVuY3Rpb24uIElmIHVuZGVmaW5lZCBpcyByZXR1cm5lZCwgdGhlIHZhbHVlIG9mIHRoZVxyXG5cdC8vIGF0dHJpYnV0ZSB3aWxsIG5vdCBjaGFuZ2UgKHRoYXQgbWVhbnMgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgYXJlIGVxdWFsKS4gSWYgdGhpc1xyXG5cdC8vIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCBwcm9wZXJ0eSB2YWx1ZXMgYXJlIGNvbnZlcnRlZCB0byBzdHJpbmcgYW5kIGNvbXBhcmVkIGFzIHN0cmluZ3MuXHJcblx0Ly8gSWYgdGhlc2Ugc3RyaW5ncyBhcmUgZGlmZmVyZW50LCB0aGUgc3RyaW5nIGNvcnJlc3BvbmRpbmcgdG8gdGhlICBuZXcgdmFsdWUgaXMgcmV0dXJuZWQuXHJcblx0ZGlmZj86IChhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSkgPT4gYW55O1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHVwZGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYmFzZWQgb24gdGhlIG9iamVjdCB0aGF0IHdhcyByZXR1cm5lZFxyXG5cdC8vIGZyb20gdGhlIGRpZmYgZnVuY3Rpb24uIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIHNldCBmdW5jdGlvbiBpcyB1c2VkLiBJZlxyXG5cdC8vIHRoZSBzZXQgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQgZWl0aGVyLCB0aGUgRE9NIGVsbS5zZXRBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXNcclxuXHQvLyBhdHRyaWJ1dGUgbmFtZSBhbmQgdXBkYXRlVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0dXBkYXRlPzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgdXBkYXRlVmFsOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0ucmVtb3ZlQXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lLlxyXG5cdHJlbW92ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5cdC8vIFRoZSBhY3R1YWwgbmFtZSBvZiB0aGUgYXR0cmlidXRlLiBUaGlzIGlzIHNvbWV0aW1lcyBuZWVkZWQgaWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNhbm5vdCBiZVxyXG5cdC8vIHVzZWQgYXMgcHJvcGVydHkgbmFtZSAtIGZvciBleGFtcGxlLCBpZiBhdHRyaWJ1dGUgbmFtZSBjb250YWlucyBjaGFyYWN0ZXJzIG5vdCBhbGxvd2VkIGluXHJcblx0Ly8gVHlwZVNjcmlwdCBpZGVudGlmaWVyIChlLmcuIGRhc2gpLlxyXG5cdGF0dHJOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBldmVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudCBidWJibGVzLiBJZiB0aGUgZXZlbnQgZG9lc24ndCBidWJibGUsIHRoZSBldmVudCBoYW5kbGVyXHJcblx0Ly8gbXVzdCBiZSBzZXQgb24gdGhlIGVsZW1lbnQgaXRzZWxmOyBvdGhlcndpc2UsIHRoZSBldmVudCBoYW5kbGVyIGNhbiBiZSBzZXQgb24gdGhlIHJvb3RcclxuXHQvLyBhbmNob3IgZWxlbWVudCwgd2hpY2ggYWxsb3dzIGhhdmluZyBhIHNpbmdsZSBldmVudCBoYW5kbGVyIHJlZ2lzdGVyZWQgZm9yIG1hbnkgZWxlbWVudHMsXHJcblx0Ly8gd2hpY2ggaXMgbW9yZSBwZXJmb3JtYW50LlxyXG5cdGlzQnViYmxpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBjdXN0b20gYXR0cmlidXRlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQXR0clByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGYWN0b3J5IG9iamVjdCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy5cclxuXHRmYWN0b3J5OiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUZhY3Rvcnk8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHlwZSBjb21iaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgcmVndWxhciBhdHRyaWJ1dGVzIG9yIGV2ZW50cyBvciBjdXN0b20gYXR0cmlidXRlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFByb3BJbmZvID0gQXR0clByb3BJbmZvIHwgRXZlbnRQcm9wSW5mbyB8IEN1c3RvbUF0dHJQcm9wSW5mbztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEV4cG9ydGVkIGNsYXNzIHRoYXQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIHNldHRpbmcsIHVwZGF0aW5nIGFuZCByZW1vdmluZyBFbGVtZW50XHJcbi8vIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byBwcm9wZXJ0eSBuYW1lcy5cclxuLy9cclxuLy8gRWxlbWVudCBhdHRyaWJ1dGVzIGFyZSBkZXRlcm1pbmVkIHVzaW5nIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBFbG1WTiBtZXRob2RzLiBTb21lXHJcbi8vIHByb3BlcnRpZXMgYWxsb3cgdXNpbmcgbm9uLXRyaXZpYWwgdHlwZXMsIGUuZy4gYXJyYXlzIG9yIG9iamVjdHMsIGFuZCB0aHVzIGNhbm5vdCBiZSBzaW1wbHlcclxuLy8gaGFuZGxlZCB1c2luZyB0aGUgRWxlbWVudC5zZXRBdHRyaWJ1dGUgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbUF0dHJcclxue1xyXG5cdC8vIE9iamVjdCB0aGF0IG1hcHMgcHJvcGVydHkgbmFtZXMgdG8gUHJvcEluZm8tZGVyaXZlZCBvYmplY3RzLlxyXG5cdHByaXZhdGUgc3RhdGljIHByb3BJbmZvczoge1tQOnN0cmluZ106IFByb3BJbmZvfSA9XHJcblx0e1xyXG5cdFx0Ly8gYXR0cmlidXRlcyAtIG9ubHkgdGhvc2UgYXR0cmlidXRlcyBhcmUgbGlzdGVkIHRoYXQgaGF2ZSBub24tdHJpdmlhbCB0cmVhdG1lbnRcclxuXHRcdFwic3R5bGVcIjogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFN0eWxlUHJvcCwgZGlmZjogZGlmZlN0eWxlUHJvcCwgdXBkYXRlOiB1cGRhdGVTdHlsZVByb3AgfSxcclxuXHRcdFwidmFsdWVcIjogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZlZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVWYWx1ZVByb3AgfSxcclxuXHRcdFwiZGVmYXVsdFZhbHVlXCI6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRWYWx1ZVByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHRcdFwiY2hlY2tlZFwiOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZDaGVja2VkUHJvcCwgcmVtb3ZlOiByZW1vdmVDaGVja2VkUHJvcCB9LFxyXG5cdFx0XCJkZWZhdWx0Q2hlY2tlZFwiOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHJcblx0XHQvLyBldmVudCBsaXN0ZW5lcnMgLSBvbmx5IHRob3NlIGV2ZW50IGFyZSBsaXN0ZWQgdGhhdCBhcmUgbm9uLWJ1YmJsaW5nXHJcblx0XHRcIm1vdXNlZW50ZXJcIjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCwgaXNCdWJibGluZzogZmFsc2UgfSxcclxuXHRcdFwibW91c2VsZWF2ZVwiOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50LCBpc0J1YmJsaW5nOiBmYWxzZSB9LFxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0RWxtQXR0ci5wcm9wSW5mb3NbcHJvcE5hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFByb3BlcnR5SW5mbyggcHJvcE5hbWU6IHN0cmluZyk6IFByb3BJbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwdWJsaWMgc3RhdGljIHNldEF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHR5cGVvZiBwcm9wVmFsID09PSBcInN0cmluZ1wiID8gcHJvcFZhbCA6IHByb3BWYWwudG9TdHJpbmcoKSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCBhY3R1YWwgYXR0cmlidXRlIG5hbWUgdG8gdXNlXHJcblx0XHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YXR0ck5hbWUgPSBwcm9wTmFtZTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCBwcm9wVmFsKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIGF0dHJOYW1lLCB0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIiA/IHByb3BWYWwgOiBwcm9wVmFsLnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIHByb3BlcnR5IGFyZSBkaWZmZXJlbnQgYW5kIHNldHMgdGhlXHJcblx0Ly8gdXBkYXRlZCB2YWx1ZSB0byB0aGUgZWxlbWVudCdzIGF0dHJpYnV0ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kXHJcblx0Ly8gZmFsc2UgaWYgbm8gY2hhbmdlIGluIHByb3BlcnR5IHZhbHVlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoaXMgaXMgbm90IGEgc3BlY2lhbCBjYXNlIChwcm9wZXJ0eSBpcyBub3QgaW4gb3VyIGxpc3QpIGp1c3QgY29tcGFyZSB0aGVtIGFuZFxyXG5cdFx0XHQvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgc2V0IHRoZSBhdHRyaWJ1dGUgdG8gdGhlIG5ldyB2YWx1ZS5cclxuXHRcdFx0aWYgKG9sZFByb3BWYWwgPT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBwcm9wTmFtZSwgdHlwZW9mIG5ld1Byb3BWYWwgPT09IFwic3RyaW5nXCIgPyBuZXdQcm9wVmFsIDogbmV3UHJvcFZhbC50b1N0cmluZygpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29tcGFyZSBvbGQgYW5kIG5ldyB2YWx1ZSB1c2luZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGlmIGRlZmluZWQ7IGlmIG5vdCwganVzdCBjb21wYXJlXHJcblx0XHQvLyB0aGUgdHdvIHZhbHVlcyBhbmQgaWYgdGhleSBhcmUgZGlmZmVyZW50IHVzZSB0aGUgbmV3IG9uZSBhcyBhIHZhbHVlIHRvIHVwZGF0ZSB3aXRoLlxyXG5cdFx0Ly8gTm90ZSB0aGF0IHRoZSBuZWl0aGVyIG9sZCBub3IgbmV3IHZhbHVlcyBjYW4gYmUgdW5kZWZpbmVkIG9yIG51bGwuXHJcblx0XHRsZXQgdXBkYXRlVmFsOiBhbnk7XHJcblx0XHRpZiAoaW5mby5kaWZmICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IGluZm8uZGlmZiggcHJvcE5hbWUsIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdXBkYXRlVmFsdWUgaXMgdW5kZWZpbmVkIHRoZW4gbm8gY2hhbmdlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdFx0XHRpZiAodXBkYXRlVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob2xkUHJvcFZhbCAhPT0gbmV3UHJvcFZhbClcclxuXHRcdFx0dXBkYXRlVmFsID0gbmV3UHJvcFZhbDtcclxuXHJcblx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0Ly8gaWYgdXBkYXRlIG1ldGhvZCBpcyBkZWZpbmVkIHVzZSBpdDsgb3RoZXJ3aXNlLCByZW1vdmUgdGhlIG9sZCB2YWx1ZSBhbmQgc2V0IHRoZSBuZXcgb25lXHJcblx0XHRpZiAoaW5mby51cGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aW5mby51cGRhdGUoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHJlbW92ZSBtZXRob2QgaXMgZGVmaW5lZCwgdXNlIGl0LiBOb3RlIHRoYXQgaWYgcmVtb3ZlIG1ldGhvZCBpcyBub3QgZGVmaW5lZFxyXG5cdFx0XHQvLyB3ZSBkb24ndCB1c2UgZWxtLnJlbW92ZUF0dHJpYnV0ZSB0byBzYXZlIHRpbWUgKGFzIHRoZSBmb2xsb3dpbmcgaW5mby5zZXQgb3JcclxuXHRcdFx0Ly8gZWxtLnNldEF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIGl0IGFueXdheS5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5yZW1vdmUoIGVsbSwgYXR0ck5hbWUpO1xyXG5cclxuXHRcdFx0aWYgKGluZm8uc2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5zZXQoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdHlwZW9mIHVwZGF0ZVZhbCA9PT0gXCJzdHJpbmdcIiA/IHVwZGF0ZVZhbCA6IHVwZGF0ZVZhbC50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlcmUgd2FzIGNoYW5nZSBpbiBhdHRyaWJ1dGUgdmFsdWUuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxyXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggcHJvcE5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5yZW1vdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggYXR0ck5hbWUpO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8gUmVnaXN0ZXIgZXZlbnRzIHdpdGggc3BlY2lhbCBuYW1lc1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZEluc2VydFwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lclByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRJbnNlcnRDYXB0dXJlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJDYXB0dXJlUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lckNhcHR1cmVQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkUmVtb3ZlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZFJlbW92ZUNhcHR1cmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lckNhcHR1cmVQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyQ2FwdHVyZVByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1yZW1vdmVcIiB9KTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIHN0eWxlIHByb3BlcnR5LiBTdHlsZSBwcm9wZXJ0eSBjYW4gYmUgc3BlY2lmaWVkIGVpdGhlciBhcyBhIHN0cmluZyBvciBhcyB0aGVcclxuLy8gQ1NTU3R5bGVEZWNsYXJhdGlvbiBvYmplY3QuIElmIHRoZSBvbGQgYW5kIG5ldyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgYXJlIG9mIGRpZmZlcmVudCB0eXBlc1xyXG4vLyB0aGUgZGlmZiBmdW5jdGlvbiByZXR1cm5zIHRoZSBuZXcgc3R5bGUgdmFsdWUuIElmIGJvdGggYXJlIG9mIHRoZSBzdHJpbmcgdHlwZSwgdGhlbiB0aGUgbmV3XHJcbi8vIHN0cmluZyB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgYm90aCBhcmUgb2YgdGhlIENTU1N0eWxlRGVjbGFyYXRpb24gdHlwZSwgdGhlbiBhbiBvYmplY3QgaXNcclxuLy8gcmV0dXJuZWQgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHN0eWxlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIGNoYW5nZWQuIEZvciB1cGRhdGVkIGl0ZW1zLCB0aGVcclxuLy8ga2V5IHZhbHVlIGlzIGZyb20gdGhlIG5ldyBzdHlsZSB2YWx1ZTsgZm9yIHJlbW92ZWQgaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIFwic3R5bGVcIik7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGNvbnN0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKGVsbSBhcyBIVE1MRWxlbWVudCkuc3R5bGU7XHJcblx0XHRmb3IoIGxldCBrZXkgaW4gcHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qga2V5VmFsOiBhbnkgPSBwcm9wVmFsW2tleV07XHJcblx0XHRcdGlmIChlbG1TdHlsZVtrZXldICE9PSBrZXlWYWwpXHJcblx0XHRcdFx0ZWxtU3R5bGVba2V5XSA9IGtleVZhbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZTdHlsZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYW55XHJcbntcclxuXHRjb25zdCBvbGRQcm9wVHlwZTogc3RyaW5nID0gdHlwZW9mIG9sZFByb3BWYWw7XHJcblx0Y29uc3QgbmV3UHJvcFR5cGU6IHN0cmluZyA9IHR5cGVvZiBuZXdQcm9wVmFsO1xyXG5cdGlmIChvbGRQcm9wVHlwZSAhPT0gbmV3UHJvcFR5cGUpXHJcblx0XHRyZXR1cm4gbmV3UHJvcFZhbDtcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Y29uc3Qgb2xkU3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlID0gb2xkUHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZTtcclxuXHRcdGNvbnN0IG5ld1N0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IG5ld1Byb3BWYWwgYXMgbWltLlN0eWxlUHJvcFR5cGU7XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlVmFsOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHt9O1xyXG5cdFx0bGV0IGNoYW5nZXNFeGlzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBrZXlzIGluIHRoZSBvbGQgc3R5bGUgb2JqZWN0IGFuZCBmaW5kIHRob3NlIHRoYXQgYXJlIG5vdCBpbiB0aGUgbmV3IG9uZS4gVGhlc2VcclxuXHRcdC8vIHdpbGwgYmUgcmVtb3ZlZC5cclxuXHRcdGZvciggbGV0IGtleSBpbiBvbGRTdHlsZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qgb2xkVmFsOiBhbnkgPSBvbGRTdHlsZVtrZXldO1xyXG5cdFx0XHRjb25zdCBuZXdWYWw6IGFueSA9IG5ld1N0eWxlW2tleV07XHJcblx0XHRcdGlmIChuZXdWYWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAobmV3VmFsICE9PSBvbGRWYWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGFuZ2VzRXhpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3VmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG5ldyBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBvbGQgb25lLiBUaGVzZVxyXG5cdFx0Ly8gd2lsbCBiZSBhZGRlZC5cclxuXHRcdGZvciggbGV0IGtleSBpbiBuZXdTdHlsZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qgb2xkVmFsOiBhbnkgPSBvbGRTdHlsZVtrZXldO1xyXG5cdFx0XHRpZiAob2xkVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGFuZ2VzRXhpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3R5bGVba2V5XTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjaGFuZ2VzRXhpc3QgPyB1cGRhdGVWYWwgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCB1cGRhdGVWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdGNvbnN0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKGVsbSBhcyBIVE1MRWxlbWVudCkuc3R5bGU7XHJcblx0Zm9yKCBsZXQga2V5IGluIHVwZGF0ZVZhbCBhcyBPYmplY3QpXHJcblx0e1xyXG5cdFx0Y29uc3Qga2V5VmFsOiBhbnkgPSB1cGRhdGVWYWxba2V5XTtcclxuXHRcdGlmIChrZXlWYWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtU3R5bGVba2V5XSA9IG51bGw7XHJcblx0XHRcdC8vZWxtU3R5bGVba2V5XSA9IFwiaW5pdGlhbFwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRlbG1TdHlsZVtrZXldID0ga2V5VmFsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGZpcnN0IHN0eWxlIGlzIGEgY29tcGxldGUgc3Vic2V0IG9mIHRoZSBzZWNvbmQgb25lOyB0aGF0IGlzIGtleXNcclxuLy8vLyBpbiB0aGUgZmlyc3Qgc3R5bGUgYXJlIGFsbCBmb3VuZCBhbmQgaGF2ZSB0aGUgc2FtZSB2YWx1ZXMgaW4gdGhlIHNlY29uZCBzdHlsZS5cclxuLy9mdW5jdGlvbiBpc1N0eWxlMVN1YnNldE9mU3R5bGUyKCBzdHlsZTE6IE9iamVjdCwgc3R5bGUyOiBPYmplY3QpOiBib29sZWFuXHJcbi8ve1xyXG4vL1x0Zm9yKCBsZXQga2V5MSBpbiBzdHlsZTEpXHJcbi8vXHR7XHJcbi8vXHRcdGlmIChzdHlsZTFba2V5MV0gIT09IHN0eWxlMltrZXkxXSlcclxuLy9cdFx0XHRyZXR1cm4gZmFsc2U7XHJcbi8vXHR9XHJcblxyXG4vL1x0cmV0dXJuIHRydWU7XHJcbi8vfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgdmFsdWUgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyB2YWx1ZSBwcm9wZXJ0eSBhcyBhbiBhdHRyaWJ1dGUgd2Ugc2V0IHRoZSB2YWx1ZVxyXG4vLyBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlIG1ldGhvZFxyXG4vLyBieSBzZXR0aW5nIHRoZSBlbG0udmFsdWUgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS4gV2Ugd2FudCBhbHdheXMgdG8gc2V0IHRoaXMgdmFsdWUgdG8gdGhlIGVsZW1lbnQgYmVjYXVzZSB0aGVcclxuXHQvLyBlbGVtZW50J3MgdmFsdWUgbWF5IGhhdmUgY2huZ2VkIChieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5KS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBkZWZhdWx0VmFsdWUgcHJvcGVydHkuIFRoZSBkZWZhdWx0VmFsdWUgcHJvcGVydHkgd29ya3MgYXMgYSB2YWx1ZSBwcm9wZXJ0eSB3aGVuIHRoZVxyXG4vLyBlbGVtZW50IGlzIGZpcnN0IG1vdW50ZWQgYW5kIGlzIGlnbm9yZWQgdXBvbiB1cGRhdGVzIGFuZCByZW1vdmFscy4gVGhpcyBhbGxvd3MgdXNpbmdcclxuLy8gZGVmYXVsdFZhbHVlIHRvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgdmFsdWUgb25jZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGRpZmZEZWZhdWx0VmFsdWVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGJ5IHJldHVybmluZyB1bmRlZmluZWQgd2UgaW5kaWNhdGUgdGhhdCBubyBjaGFuZ2VzIHdlcmUgbWFkZSB0byB0aGUgcHJvcGVydHkgYW5kIHRodXMgdGhlXHJcblx0Ly8gdXBkYXRlIHdpbGwgbm90IGJlIGNhbGxlZFxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURlZmF1bHRWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIGRvIG5vdGhpbmdcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGNoZWNrZWQgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyBjaGVja2VkIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlXHJcbi8vIGNoZWNrZWQgZmllbGQgb24gdGhlIGVsZW1lbnQuIFRoZSBzZXQgYW5kIHVwZGF0ZSBtZXRob2RzIHdvcmsgdGhlIHNhbWUgd2F5LiBXZSBkZWZpbmUgdGhlIHJlbW92ZVxyXG4vLyBtZXRob2QgYnkgc2V0dGluZyB0aGUgZWxtLmNoZWNrZWQgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldENoZWNrZWRQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBwcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmQ2hlY2tlZFByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtFbG1BdHRyLCBBdHRyUHJvcEluZm8sIEV2ZW50UHJvcEluZm8sIEN1c3RvbUF0dHJQcm9wSW5mbywgUHJvcFR5cGV9IGZyb20gXCIuL0VsbUF0dHJcIlxyXG5pbXBvcnQge1N2Z0VsbXN9IGZyb20gXCIuL1N2Z0VsbXNcIjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXByZXNlbnRzIGEgRE9NIGVsZW1lbnQgY3JlYXRlZCB1c2luZyBKU1guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRWxtVk4gZXh0ZW5kcyBWTiBpbXBsZW1lbnRzIG1pbS5JRWxtVk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCB0YWdOYW1lOiBzdHJpbmcsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlciggbWltLlZOVHlwZS5FbG0pXHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3IgSFRNTCBlbGVtZW50XHJcblx0XHRsZXQgc3ZnSW5mbyA9IFN2Z0VsbXMuZ2V0U3ZnRWxtSW5mbyggdGFnTmFtZSk7XHJcblx0XHRpZiAoc3ZnSW5mbyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB0aGUgaXNTdmcgZmxhZyBtYXkgcmVtYWluIHVuZGVmaW5lZCBmb3IgdGhlIGR1YWwtcHVycG9zZSB0YWdzLiBJbiB0aGlzIGNhc2UgaXQgd2lsbFxyXG5cdFx0XHQvLyBiZSBkZXRlcm1pbmVkIHVwb24gbW91bnRpbmcuXHJcblx0XHRcdHRoaXMuaXNTdmcgPSBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIHN2Z0luZm8pID8gdW5kZWZpbmVkIDogdHJ1ZTtcclxuXHRcdFx0dGhpcy5lbG1OYW1lID0gU3ZnRWxtcy5nZXRFbG1OYW1lKCBzdmdJbmZvLCB0YWdOYW1lKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pc1N2ZyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmVsbU5hbWUgPSB0YWdOYW1lO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGNoaWxkcmVuXHJcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXkgYW5kIHJlZlxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbCByZW1haW5cclxuXHRcdFx0Ly8gdW5kZWZpbmVkLlxyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZWxlbWVudCdzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHR0aGlzLm5hbWUgPSB0aGlzLmVsbU5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmtleSAhPT0gbnVsbClcclxuXHRcdFx0dGhpcy5uYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElFbG1WTiBpbXBsZW1lbnRhdGlvblxyXG5cdHB1YmxpYyBnZXQgRWxtTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5lbG1OYW1lOyB9XHJcblx0cHVibGljIGdldCBFbG0oKTogRWxlbWVudCB7IHJldHVybiB0aGlzLmVsbTsgfVxyXG5cdHB1YmxpYyBnZXQgSXNTdmcoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzU3ZnOyB9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0cHVibGljIGdldFN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkVsbTsgfVxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRyZW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgd2UgZG9uJ3Qga25vdyB5ZXQgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBlbGVtZW50IG9yIG5vdCAod2hjaCBjYW4gaGFwcGVuIGZvclxyXG5cdFx0Ly8gZHVhbC1wdXJwb3NlIGVsZW1lbnRzKSwgZGV0ZXJtaW5lIGl0IG5vdyBieSB3YWxraW5nIHVwIHRoZSBjaGFpbiBvZiBwYXJlbnRzIGFuZFxyXG5cdFx0Ly8gY2hlY2tpbmcgd2hldGhlciB0aGVlIGlzIGFuIDxzdmc+IGVsZW1lbnQgdGhlcmVcclxuXHRcdGlmICh0aGlzLmlzU3ZnID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHBhcmVudCA9IHRoaXMucGFyZW50OyBwYXJlbnQgIT0gbnVsbDsgcGFyZW50ID0gcGFyZW50LnBhcmVudClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChwYXJlbnQudHlwZSA9PT0gbWltLlZOVHlwZS5FbG0gJiYgKHBhcmVudCBhcyBFbG1WTikuZWxtTmFtZSA9PT0gXCJzdmdcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmlzU3ZnID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIGZsYWcgaXMgc3RpbGwgbm90IGRldGVybWluZWQgYWZ0ZXIgdGhlIHBhcmVudCBsb29wLCBzZXQgaXQgdG8gZmFsc2UuXHJcblx0XHRcdGlmICh0aGlzLmlzU3ZnID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5pc1N2ZyA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFyc2VQcm9wcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSB2aXJ0dWFsIG5vZGUncyBjb250ZW50IGludG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSB0aGUgZWxlbWVudFxyXG5cdFx0dGhpcy5lbG0gPSB0aGlzLmlzU3ZnXHJcblx0XHRcdFx0XHQ/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggU3ZnRWxtcy5uYW1lc3BhY2UsIHRoaXMuZWxtTmFtZSlcclxuXHRcdFx0XHRcdDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggdGhpcy5lbG1OYW1lKTtcclxuXHJcblx0XHR0aGlzLmFkZEF0dHJzKCk7XHJcblx0XHR0aGlzLmFkZEV2ZW50cygpO1xyXG5cdFx0dGhpcy5hZGRDdXN0b21BdHRycygpO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZSAoaWYgc3BlY2lmaWVkKVxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmVsbSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBjb250ZW50IGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBlbGVtZW50IGJlZm9yZSBzZXR0aW5nIGl0IHRvIHVuZGVmaW5lZC4gSWYgdGhlIHNhbWUgUmVmIG9iamVjdCBpcyB1c2VkIGZvclxyXG5cdFx0Ly8gbW9yZSB0aGFuIG9uZSBlbGVtZW50IChhbmQvb3IgY29tcG9uZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmVsbSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyB0ZXJtaW5hdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHR0aGlzLnJlbW92ZUN1c3RvbUF0dHJzKCk7XHJcblxyXG5cdFx0Ly8gY2xlYW4gdXBcclxuXHRcdHRoaXMuZWxtID0gbnVsbDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoaXMgaXMgdGhlIHNhbWUgdHlwZSBvZiBlbGVtZW50OyB0aGF0IGlzLCBpdCBoYXMgdGhlIHNhbWVcclxuXHRcdC8vIG5hbWUgYW5kIHRoZSBzYW1lIGlzU3ZnIGZsYWdcclxuXHRcdGNvbnN0IG90aGVyRWxtTm9kZTogRWxtVk4gPSBuZXdWTiBhcyBFbG1WTjtcclxuXHRcdHJldHVybiB0aGlzLmlzU3ZnID09PSBvdGhlckVsbU5vZGUuaXNTdmcgJiYgdGhpcy5lbG1OYW1lID09PSBvdGhlckVsbU5vZGUuZWxtTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Y29uc3QgbmV3RWxtVk46IEVsbVZOID0gbmV3Vk4gYXMgRWxtVk47XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyBwcm9wcyBhbmQgY2hpbGRyZW5cclxuXHRcdHRoaXMucHJvcHMgPSBuZXdFbG1WTi5wcm9wcztcclxuXHRcdHRoaXMuY2hpbGRyZW4gPSBuZXdFbG1WTi5jaGlsZHJlbjtcclxuXHJcblx0XHQvLyBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYW5kIGNoaWxkcmVuIHdpbGwgaGF2ZSB0byBiZSB1cGRhdGVkIHZpYSByZW5kZXJcclxuXHRcdHJldHVybiB7IHNob3VsZENvbW1pdDogdHJ1ZSwgc2hvdWxkUmVuZGVyOiB0cnVlIH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0cHVibGljIGNvbW1pdFVwZGF0ZSggbmV3Vk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGNvbnN0IG5ld0VsbVZOOiBFbG1WTiA9IG5ld1ZOIGFzIEVsbVZOO1xyXG5cdFx0bmV3RWxtVk4ucGFyc2VQcm9wcygpO1xyXG5cclxuXHRcdC8vIGlmIHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uIGNoYW5nZWQgdGhlbiBzZXQgb3IgdW5zZXQgaXQgYXMgbmVjZXNzYXJ5XHJcblx0XHRpZiAobmV3RWxtVk4ucmVmICE9PSB0aGlzLnJlZilcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvblxyXG5cdFx0XHR0aGlzLnJlZiA9IG5ld0VsbVZOLnJlZjtcclxuXHJcblx0XHRcdC8vIGlmIHJlZmVyZW5jZSBpcyBub3cgc3BlY2lmaWVkLCBzZXQgaXQgbm93OyBub3RlIHRoYXQgd2UgYWxyZWFkeSBkZXRlcm1pbmVkIHRoYXRcclxuXHRcdFx0Ly8gdGhlIHJlZmVyZW5jZSBvYmplY3QgaXMgZGlmZmVyZW50LlxyXG5cdFx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5lbG0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdFbG1WTi5rZXk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVBdHRycyggbmV3RWxtVk4uYXR0cnMpO1xyXG5cdFx0dGhpcy51cGRhdGVFdmVudHMoIG5ld0VsbVZOLmV2ZW50cyk7XHJcblx0XHR0aGlzLnVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdFbG1WTi5jdXN0b21BdHRycyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETlxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmVsbTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyBvdmVyIHRoZSBvcmlnaW5hbCBwcm9wZXJ0aWVzIGFuZCBwdXRzIHRoZW0gaW50byB0aGUgYnVja2V0cyBvZiBhdHRyaWJ1dGVzLCBldmVudFxyXG5cdC8vIGxpc3RlbmVycyBhbmQgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcblx0cHJpdmF0ZSBwYXJzZVByb3BzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMucHJvcHMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLnByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gdGhpcy5wcm9wc1twcm9wTmFtZV07XHJcblxyXG5cdFx0XHQvLyBnZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb3BlcnR5IGFuZCBkZXRlcm1pbmUgaXRzIHR5cGUgKHJlZ3VsYXIgYXR0cmlidXRlLCBldmVudFxyXG5cdFx0XHQvLyBvciBjdXN0b20gYXR0cmlidXRlKS4gTm90ZSB0aGF0IGdldFByb3BlcnR5SW5mbyBtYXkgcmV0dXJuIG51bGwgZm9yIG1vc3QgcmVndWxhclxyXG5cdFx0XHQvLyBhdHRyaWJ1dGVzIGFuZCBldmVudHM7IGluIHRoaXMgY2FzZSB3ZSB3aWxsIGNoZWNrIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHRcdFx0bGV0IHByb3BJbmZvID0gRWxtQXR0ci5nZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lKTtcclxuXHRcdFx0bGV0IHByb3BUeXBlID0gcHJvcEluZm8gPyBwcm9wSW5mby50eXBlIDogUHJvcFR5cGUuVW5rbm93bjtcclxuXHRcdFx0aWYgKCFwcm9wSW5mbylcclxuXHRcdFx0XHRwcm9wVHlwZSA9IHRoaXMuSXNFdmVudFZhbHVlKCBwcm9wVmFsKSA/IFByb3BUeXBlLkV2ZW50IDogUHJvcFR5cGUuQXR0cjtcclxuXHJcblx0XHRcdGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQXR0cilcclxuXHRcdFx0XHR0aGlzLmF0dHJzW3Byb3BOYW1lXSA9IHsgaW5mbzogcHJvcEluZm8sIHZhbDogcHJvcFZhbCB9O1xyXG5cdFx0XHRlbHNlIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuRXZlbnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgZXZlbnRJbmZvID0gdGhpcy5HZXRQcm9wQXNFdmVudFJ1blRpbWVEYXRhKCBwcm9wSW5mbywgcHJvcFZhbCk7XHJcblx0XHRcdFx0aWYgKGV2ZW50SW5mbylcclxuXHRcdFx0XHRcdHRoaXMuZXZlbnRzW3Byb3BOYW1lXSA9IGV2ZW50SW5mbztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIC8vIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQ3VzdG9tQXR0cilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIGN1c3RvbWUgYXR0cmlidXRlcyB2YWx1ZS4gSGFuZGxlciB3aWxsIGJlIGNyZWF0ZWQgbGF0ZXIuXHJcblx0XHRcdFx0dGhpcy5jdXN0b21BdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvIGFzIEN1c3RvbUF0dHJQcm9wSW5mbywgdmFsOiBwcm9wVmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0aGFuZGxlcjogdW5kZWZpbmVkfTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnR5IHZhbHVlIGlzIG9mIHRoZSB0eXBlIHRoYXQgaXMgdXNlZCBmb3IgZXZlbnQgaGFuZGxlcnMuXHJcblx0Ly8gSWYgeWVzLCB0aGVuIHJldHVybnMgRXZlbnRSdW5UaW1lRGF0YSBvYmplY3Q7IG90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcblx0cHJpdmF0ZSBJc0V2ZW50VmFsdWUoIHByb3BWYWw6IGFueSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdHlwZW9mIHByb3BWYWwgPT09IFwiZnVuY3Rpb25cIiB8fFxyXG5cdFx0XHRBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMCAmJiB0eXBlb2YgcHJvcFZhbFswXSA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnR5IHZhbHVlIGlzIG9mIHRoZSB0eXBlIHRoYXQgaXMgdXNlZCBmb3IgZXZlbnQgaGFuZGxlcnMuXHJcblx0Ly8gSWYgeWVzLCB0aGVuIHJldHVybnMgRXZlbnRSdW5UaW1lRGF0YSBvYmplY3Q7IG90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcblx0cHJpdmF0ZSBHZXRQcm9wQXNFdmVudFJ1blRpbWVEYXRhKCBpbmZvOiBFdmVudFByb3BJbmZvLCBwcm9wVmFsOiBhbnkpOiBFdmVudFJ1blRpbWVEYXRhXHJcblx0e1xyXG5cdFx0aWYgKHR5cGVvZiBwcm9wVmFsID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHR7XHJcblx0XHRcdGxldCBvcmdGdW5jID0gcHJvcFZhbCBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+O1xyXG5cdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jLCB1c2VDYXB0dXJlOiBmYWxzZSB9O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA9PT0gMiAmJlxyXG5cdFx0XHRcdHR5cGVvZiBwcm9wVmFsWzBdID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHByb3BWYWxbMV0gPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgb3JnRnVuYyA9IHByb3BWYWxbMF0gYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PjtcclxuXHRcdFx0bGV0IHdyYXBwZXIgPSBFdmVudEhhbmRsZXJXcmFwcGVyLmJpbmQoIHRoaXMsIG9yZ0Z1bmMpO1xyXG5cdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jLCB1c2VDYXB0dXJlOiBwcm9wVmFsWzFdIGFzIGJvb2xlYW4gfTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmb3IgYWxsIG90aGVyIHR5cGUgY29tYmluYXRpb25zIGNvbnNpZGVyIGl0IHRvIGJlIGEgcmVndWxhciBhdHRyaWJ1dGVcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgRE9NIGF0dHJpYnV0ZXMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRBdHRycygpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGVsbSA9IHRoaXMuZWxtO1xyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5hdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJ0ZCA9IHRoaXMuYXR0cnNbbmFtZV07XHJcblx0XHRcdEVsbUF0dHIuc2V0QXR0ciggZWxtLCBuYW1lLCBydGQuaW5mbywgcnRkLnZhbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVwZGF0ZXMgRE9NIGF0dHJpYnV0ZXMgb2YgdGhpcyBFbGVtZW50LlxyXG5cdHByaXZhdGUgdXBkYXRlQXR0cnMoIG5ld0F0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBBdHRyUnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBcImNhY2hlXCIgc2V2ZXJhbCBtZW1lYmVycyBmb3IgZmFzdGVyIGFjY2Vzc1xyXG5cdFx0bGV0IGVsbSA9IHRoaXMuZWxtO1xyXG5cdFx0bGV0IG9sZEF0dHJzID0gdGhpcy5hdHRycztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgYXR0cmlidXRlcywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3IG9uZXMgYW5kXHJcblx0XHQvLyB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBvbGRSVEQgPSBvbGRBdHRyc1tuYW1lXTtcclxuXHRcdFx0bGV0IG5ld1JURCA9IG5ld0F0dHJzW25hbWVdO1xyXG5cdFx0XHRpZiAobmV3UlREID09PSB1bmRlZmluZWQgfHwgbmV3UlRELnZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUsIHJlbW92ZSB0aGUgb2xkIHByb3BlcnR5IGFuZFxyXG5cdFx0XHRcdC8vIHJlbW92ZSB0aGUgYXR0cmlidXRlIGZyb20gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRFbG1BdHRyLnJlbW92ZUF0dHIoIGVsbSwgbmFtZSwgb2xkUlRELmluZm8pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBoYXMgYSBkaWZmZXJlbnQgdmFsdWUsIHJlbW1lYmVyIHRoaXNcclxuXHRcdFx0XHQvLyB2YWx1ZSBhbmQgc2V0IGl0IHRvIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRFbG1BdHRyLnVwZGF0ZUF0dHIoIGVsbSwgbmFtZSwgb2xkUlRELmluZm8sIG9sZFJURC52YWwsIG5ld1JURC52YWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBhdHRyaWJ1dGVzOyBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdBdHRycylcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5hbWUgaW4gb2xkQXR0cnMpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRsZXQgbmV3UlREID0gbmV3QXR0cnNbbmFtZV07XHJcblx0XHRcdEVsbUF0dHIuc2V0QXR0ciggZWxtLCBuYW1lLCBuZXdSVEQuaW5mbywgbmV3UlRELnZhbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hdHRycyA9IG5ld0F0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGluZm9ybWF0aW9uIGFib3V0IGV2ZW50cyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIGFkZEV2ZW50cygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmV2ZW50cylcclxuXHRcdFx0dGhpcy5hZGRFdmVudCggbmFtZSwgdGhpcy5ldmVudHNbbmFtZV0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVc2luZyB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZSBhbmQgaXRzIHZhbHVlIHNldCB0aGUgYXBwcm9wcmlhdGUgYXR0cmlidXRlKHMpIG9uIHRoZVxyXG5cdC8vIGVsZW1lbnQuIFRoaXMgbWV0aG9kIGhhbmRsZXMgc3BlY2lhbCBjYXNlcyBvZiBwcm9wZXJ0aWVzIHdpdGggbm9uLXRyaXZpYWwgdmFsdWVzLlxyXG5cdHByaXZhdGUgYWRkRXZlbnQoIG5hbWU6IHN0cmluZywgaW5mbzogRXZlbnRSdW5UaW1lRGF0YSk6IHZvaWRcclxuXHR7XHJcblx0XHRpbmZvLndyYXBwZXIgPSBFdmVudEhhbmRsZXJXcmFwcGVyLmJpbmQoIHRoaXMsIGluZm8ub3JnRnVuYyk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBpbmZvLndyYXBwZXIsIGluZm8udXNlQ2FwdHVyZSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMucmVtb3ZlRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIGluZm86IEV2ZW50UnVuVGltZURhdGEpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggbmFtZSwgaW5mby53cmFwcGVyLCBpbmZvLnVzZUNhcHR1cmUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUV2ZW50cyggbmV3SW5mb3M6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkSW5mb3MgPSB0aGlzLmV2ZW50cztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgZXZlbnQgbGlzdGVuZXJzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiBvbGRJbmZvcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IG9sZEluZm8gPSBvbGRJbmZvc1tuYW1lXTtcclxuXHRcdFx0bGV0IG5ld0luZm8gPSBuZXdJbmZvc1tuYW1lXTtcclxuXHRcdFx0aWYgKCFuZXdJbmZvKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnQoIG5hbWUsIG9sZEluZm8pO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy51cGRhdGVFdmVudCggbmFtZSwgb2xkSW5mbywgbmV3SW5mbyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBldmVudCBsaXN0ZW5lcnMgYW5kIGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0luZm9zKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAobmFtZSBpbiBvbGRJbmZvcylcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBuZXdJbmZvID0gbmV3SW5mb3NbbmFtZV07XHJcblx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIG5ld0luZm8pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZXZlbnRzID0gbmV3SW5mb3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgZXZlbnQgbGlzdGVuZXIgYXJlIGRpZmZlcmVudCBhbmQgc2V0c1xyXG5cdC8vIHRoZSB1cGRhdGVkIHZhbHVlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmQgZmFsc2UgaWYgbm8gY2hhbmdlIGhhc1xyXG5cdC8vIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudCggbmFtZTogc3RyaW5nLCBvbGRJbmZvOiBFdmVudFJ1blRpbWVEYXRhLCBuZXdJbmZvOiBFdmVudFJ1blRpbWVEYXRhKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmIChvbGRJbmZvLm9yZ0Z1bmMgPT09IG5ld0luZm8ub3JnRnVuYyAmJiBvbGRJbmZvLnVzZUNhcHR1cmUgPT09IG5ld0luZm8udXNlQ2FwdHVyZSlcclxuXHRcdHtcclxuXHRcdFx0bmV3SW5mby53cmFwcGVyID0gb2xkSW5mby53cmFwcGVyO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggbmFtZSwgb2xkSW5mby53cmFwcGVyLCBvbGRJbmZvLnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdG5ld0luZm8ud3JhcHBlciA9IEV2ZW50SGFuZGxlcldyYXBwZXIuYmluZCggdGhpcywgbmV3SW5mby5vcmdGdW5jKTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIG5ld0luZm8ud3JhcHBlciwgbmV3SW5mby51c2VDYXB0dXJlKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZXJlIHdhcyBjaGFuZ2UgaW4gYXR0cmlidXRlIHZhbHVlLlxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcblx0cHJpdmF0ZSBhZGRDdXN0b21BdHRycygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGFuZCBpbml0aWFsaXplIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyc1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZGF0YSA9IHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXIuIElmIHdlIGNhbm5vdCBjcmVhdGUgdGhlIGhhbmRsZXIsIHJlbW92ZSB0aGUgcHJvcGVydHlcclxuXHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHRsZXQgaGFuZGxlciA9IGRhdGEuaW5mby5mYWN0b3J5LmNyZWF0ZUhhbmRsZXIoIG5hbWUpO1xyXG5cdFx0XHRpZiAoIWhhbmRsZXIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaW5pdGlhbGl6ZSB0aGUgaGFuZGxlciBhbmQgcmVtZW1iZXIgaXQgaW4gb3VyIG9iamVjdFxyXG5cdFx0XHRoYW5kbGVyLmluaXRpYWxpemUoIHRoaXMsIG5hbWUsIGRhdGEudmFsKTtcclxuXHRcdFx0ZGF0YS5oYW5kbGVyID0gaGFuZGxlcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVzdHJveXMgY3VzdG9tIGF0dHJpYnV0ZXMgb2YgdGhpcyBlbGVtZW50LlxyXG5cdHByaXZhdGUgcmVtb3ZlQ3VzdG9tQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGluZm8gPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRpbmZvLmhhbmRsZXIudGVybWluYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVwZGF0ZXMgY3VzdG9tIGF0dHJpYnV0ZXMgb2YgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgdXBkYXRlQ3VzdG9tQXR0cnMoIG5ld0N1c3RvbVByb3BzOiB7IFtuYW1lOiBzdHJpbmddOiBDeXN0b21BdHRyUnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkQ3VzdG9tUHJvcHMgPSB0aGlzLmN1c3RvbUF0dHJzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBjdXN0b20gcHJvcGVydGllcywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3XHJcblx0XHQvLyBvbmVzIGFuZCB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQ3VzdG9tUHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGNvbnN0IG9sZEluZm8gPSBvbGRDdXN0b21Qcm9wc1tuYW1lXTtcclxuXHRcdFx0Y29uc3QgbmV3SW5mbyA9IG5ld0N1c3RvbVByb3BzW25hbWVdO1xyXG5cdFx0XHRpZiAobmV3SW5mbyA9PT0gdW5kZWZpbmVkIHx8IG5ld0luZm8gPT09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgcmVtb3ZlIHRoZSBvbGQgcHJvcGVydHkgYW5kXHJcblx0XHRcdFx0Ly8gdGVybWluYXRlIGl0cyBoYW5kbGVyXHJcblx0XHRcdFx0b2xkSW5mby5oYW5kbGVyLnRlcm1pbmF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHVwZGF0ZSB0aGUgY3VzdG9tIHByb3BlcnR5IGFuZCByZW1lbWJlciB0aGUgbmV3IHZhbHVlXHJcblx0XHRcdFx0b2xkSW5mby5oYW5kbGVyLnVwZGF0ZSggb2xkSW5mby52YWwsIG5ld0luZm8udmFsKTtcclxuXHRcdFx0XHRuZXdJbmZvLmhhbmRsZXIgPSBvbGRJbmZvLmhhbmRsZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdDdXN0b21Qcm9wcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5hbWUgaW4gb2xkQ3VzdG9tUHJvcHMpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRsZXQgbmV3SW5mbyA9IG5ld0N1c3RvbVByb3BzW25hbWVdO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0bGV0IGhhbmRsZXIgPSBuZXdJbmZvLmluZm8uZmFjdG9yeS5jcmVhdGVIYW5kbGVyKCBuYW1lKTtcclxuXHRcdFx0aWYgKCFoYW5kbGVyKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0Ly8gaW5pdGlhbGl6ZSB0aGUgaGFuZGxlciBhbmQgcmVtZW1iZXIgaXQgaW4gb3VyIG9iamVjdFxyXG5cdFx0XHRoYW5kbGVyLmluaXRpYWxpemUoIHRoaXMsIG5hbWUsIG5ld0luZm8udmFsKTtcclxuXHRcdFx0bmV3SW5mby5oYW5kbGVyID0gaGFuZGxlcjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1c3RvbUF0dHJzID0gbmV3Q3VzdG9tUHJvcHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRhZyBuYW1lIG9mIGFuIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBlbG1OYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgZWxlbWVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIEFycmF5IG9mIGNoaWxkcmVuIG9iamVjdHMuXHJcblx0cHJpdmF0ZSBjaGlsZHJlbjogYW55W107XHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIGFuIEVsZW1lbnQuIFRoZSBpbnN0YW5jZSBpcyBjcmVhdGVkIHdoZW4gdGhlIG5vZGUgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdFxyXG5cdC8vIHRpbWUuXHJcblx0cHJpdmF0ZSBlbG06IEVsZW1lbnQgPSBudWxsO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgRWxlbWVudCBpcyBTVkcgKGFzIG9wcG9zZWQgdG8gSFRMTSkuIFRoZXJlIGFyZSBzb21lIFNWR1xyXG5cdC8vIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgc2FtZSBuYW1lIGFzIHJlZ3VsYXIgZWxlbWVudHMgKGUuZy4gPGE+KS4gVGhlcmVmb3JlLCBpbiBvcmRlciB0b1xyXG5cdC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYW4gU1ZHIG9uZSB3ZSBuZWVkIHRvIGdvIHVwIHRoZSBlbGVtZW50IGNoYWluIGFuZCBzZWUgd2hldGhlclxyXG5cdC8vIHRoZXJlIGlzIGFuIDxzdmc+IGVsZW1lbnQgYXMgYW4gYW5jZXN0b3IuIFNpbmNlIHdlIG9ubHkgaGF2ZSBhY2Nlc3MgdG8gdGhlIHBhcmVudCBub2RlXHJcblx0Ly8gdXBvbiBtb3VudGluZywgZm9yIHN1Y2ggZWxlbWVudHMgd2UgY2Fubm90IGRldGVybWluZSB0aGUgZmxhZydzIHZhbHVlIGluIHRoZSBjb25zdHVjdG9yLlxyXG5cdC8vIEluIHRoaXMgY2FzZSB3ZSB3aWxsIGhhdmUgdGhpcyBmbGFnIHVuZGVmaW5lZCBhbmQgd2lsbCBkZXRlcm1pbmUgaXQgdG8gYmUgdHJ1ZSBvciBmYWxzZVxyXG5cdC8vIHdoZW4gdGhlIG1vdW50IG1ldGhvZCBpcyBjYWxsZWQuXHJcblx0cHJpdmF0ZSBpc1N2ZzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC4gVGhlIHJlZiBwcm9wZXJ0eSBjYW4gYmUgY2hhbmdlZCBvbiB1cGRhdGUuXHJcblx0cHJpdmF0ZSByZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBhdHRyaWJ1dGUgbmFtZXMgYW5kIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxyXG5cdHByaXZhdGUgYXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9ID0ge307XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIHBhcmFtZXRlcnMuXHJcblx0cHJpdmF0ZSBldmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfSA9IHt9O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBuYW1lcyBvZiBjdXN0b20gZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCB0aGVpciByZXNwZWN0aXZlXHJcblx0Ly8gaGFuZGxlciBvYmplY3RzIGFuZCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBjdXN0b21BdHRyczogeyBbbmFtZTogc3RyaW5nXTogQ3lzdG9tQXR0clJ1blRpbWVEYXRhIH0gPSB7fTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUaGUgRXZlbnRIYW5kbGVyV3JhcHBlciBmdW5jdGlvbiBpcyB1c2VkIHRvIHdyYXAgYW4gZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBhc3NpZ25lZCB0byBhbiBldmVudFxyXG4vLyBvZiB0aGUgRWxlbWVudC4gVGhpcyBmdW5jdGlvbiBjYXRjaGVzIGV4Y2VwdGlvbnMgZnJvbSB0aGUgb3JpZ2luYWwgZXZlbnQgaGFuZGxlciBhbmQgdXNlcyB0aGVcclxuLy8gXCJTdGRFcnJvckhhbmRsaW5nXCIgc2VydmljZSB0byByZXBvcnQgdGhlIGV4Y2VwdGlvbiB0byB0aGUgbmVhcmVzdCBub2RlIHRoYXQgY2FuIGhhbmRsZSBpdC5cclxuZnVuY3Rpb24gRXZlbnRIYW5kbGVyV3JhcHBlcigpOiB2b2lkXHJcbntcclxuXHR0cnlcclxuXHR7XHJcblx0XHRsZXQgW29yZ0V2ZW50SGFuZGxlciwgLi4ucmVzdF0gPSBhcmd1bWVudHM7XHJcblx0XHRyZXR1cm4gb3JnRXZlbnRIYW5kbGVyKCAuLi5yZXN0KTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcblx0XHRsZXQgZXJyb3JTZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpIGFzIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2U7XHJcblx0XHRpZiAoZXJyb3JTZXJ2aWNlKVxyXG5cdFx0XHRlcnJvclNlcnZpY2UucmVwb3J0RXJyb3IoIGVyciwgdGhpcy5wYXRoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIHJlZ3VsYXIgYXR0cmlidXRlXHJcbmludGVyZmFjZSBBdHRyUnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgYXR0cmlidXRlIC0gY2FuIGJlIG51bGxcclxuXHRpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHZhbDogYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggZXZlbnQgbGlzdGVuZXJcclxuaW50ZXJmYWNlIEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgZXZlbnQgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEV2ZW50UHJvcEluZm8gfCBudWxsO1xyXG5cclxuXHQvLyBPcmlnaW5hbCBldmVudCBjYWxsYmFjayBwYXNzZWQgYXMgdGhlIHZhbHVlIG9mIHRoZSBldmVudCBwcm9wZXJ0eSBpbiBKU1hcclxuXHRvcmdGdW5jOiBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHVzZUNhcHR1cmU6IGJvb2xlYW47XHJcblxyXG5cdC8vIFdyYXBwZXIgZnVuY3Rpb24gdGhhdCB3ZSBjcmVhdGUgYW5kIGJpbmQgdG8gb3VyIG5vZGUgYW5kIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi4gV2UgbmVlZFxyXG5cdC8vIHRoaXMgd3JhcHBlciBpbiBvcmRlciB0byBjYXRjaCBleGNlcHRpb24gaW4gdGhlIGNhbGxiYWNrIGFuZCBwYXNzIHRoZW0gb24gdG8gYW4gZXJyb3JcclxuXHQvLyBoYW5kbGluZyBzZXJ2aWNlLiBUaGUgd3JhcHBlciBpcyBtYXJrZWQgb3B0aW9uYWwgYmVjYXVzZSBpdCBpcyBjcmVhdGVkIG9ubHkgaWYgYSBuZXdcclxuXHQvLyBldmVudCBsaXN0ZW5lciBpcyBhZGRlZDsgdGhhdCBpcywgaWYgZHVyaW5nIHVwZGF0ZSwgdGhlIGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIGlzIHRoZVxyXG5cdC8vIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gY3JlYXRlIG5ldyB3cmFwcGVyIGJlY2F1c2UgdGhlIG9sZCBvbmUgd2lsbCBiZSB1c2VkLlxyXG5cdHdyYXBwZXI/OiAgKCkgPT4gYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggY3VzdG9tIHByb3BlcnR5LlxyXG5pbnRlcmZhY2UgQ3lzdG9tQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGN1c3RvbSBhdHRyaWJ1dGUgLSBjYW5ub3QgYmUgbnVsbFxyXG5cdGluZm86IEN1c3RvbUF0dHJQcm9wSW5mbztcclxuXHJcblx0Ly8gQ3VycmVudCB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuXHR2YWw6IGFueTtcclxuXHJcblx0Ly8gSGFuZGxlciBvYmplY3QgdGhhdCBrbm93cyB0byBkZWFsIHdpdGggdGhlIHByb3BlcnR5IHZhbHVlc1xyXG5cdGhhbmRsZXI6IG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxhbnk+O1xyXG59O1xyXG5cclxuXHJcblxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElFdmVudFNsb3QgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycy4gTXVsdGlwbGVcclxuLy8gbGlzdGVuZXJzIGNhbiBiZSBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbj5cclxue1xyXG5cdC8vIE1ldGhvZCB0aGF0IHJhaXNlcyB0aGUgZXZlbnQgYW5kIGNhbGxzIGFsbCB0aGUgbGlzdGVuZXJzIChpZiBhbnkpLiBJdCBoYXMgdGhlIHNpZ25hdHVyZVxyXG5cdC8vIG9mIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBzbyBvbmx5IHByb3Blci10eXBlcyBwYXJhbWV0ZXJzIGNhbiBiZSBwYXNzZWQgdG8gaXQuXHJcblx0ZmlyZTogVEZ1bmM7XHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQvLyBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHRhZGQoIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LlxyXG5cdHJlbW92ZSggbGlzdGVuZXI6IFRGdW5jKTogdm9pZDtcclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC5cclxuXHRjbGVhcigpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRXZlbnRTbG90IGNsYXNzIGRlZmluZXMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycyBhcyBtZW1iZXJzIG9mIGNsYXNzZXMgd2l0aG91dCB0aGVcclxuLy8gbmVlZCBmb3IgdGhlIGNsYXNzZXMgdG8gZGVyaXZlIGZyb20gRXZlbnRUYXJnZXQgYW5kIHVzZSBzdHJpbmcgbmFtZXMgZm9yIGV2ZW50cy4gTXVsdGlwbGVcclxuLy8gbGlzdGVuZXJzIGNhbiBiZSBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+IGltcGxlbWVudHMgSUV2ZW50U2xvdDxURnVuYz5cclxue1xyXG5cdC8vIE1ldGhvZCB0aGF0IHJhaXNlcyB0aGUgZXZlbnQgYW5kIGNhbGxzIGFsbCB0aGUgbGlzdGVuZXJzIChpZiBhbnkpLiBJdCBoYXMgdGhlIHNpZ25hdHVyZVxyXG5cdC8vIG9mIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBzbyBvbmx5IHByb3Blci10eXBlcyBwYXJhbWV0ZXJzIGNhbiBiZSBwYXNzZWQgdG8gaXQuXHJcblx0cHVibGljIGZpcmU6IFRGdW5jID0gdGhpcy5yZWFsRmlyZSBhcyBhbnkgYXMgVEZ1bmM7XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuIE5vdGUgdGhhdCB0aGlzIHNob3VsZCBub3QgYmUgYSBsYW1iZGFcclxuXHQvLyBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHRwdWJsaWMgYWRkKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzID09PSBudWxsKVxyXG5cdFx0XHR0aGlzLmxpc3RlbmVycyA9IG5ldyBTZXQ8VEZ1bmM+KCk7XHJcblxyXG5cdFx0dGhpcy5saXN0ZW5lcnMuYWRkKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LlxyXG5cdHB1YmxpYyByZW1vdmUoIGxpc3RlbmVyOiBURnVuYyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGlzdGVuZXJzLmRlbGV0ZSggbGlzdGVuZXIpO1xyXG5cdFx0XHRpZiAodGhpcy5saXN0ZW5lcnMuc2l6ZSA9PT0gMClcclxuXHRcdFx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIGxpc3RlbmVyIHRvIHRoZSBldmVudC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucy4gV2hlbiB0aGVyZSBhcmUgbm8gbGlzdGVuZXJzLCB0aGlzIGZpZWxkIGlzIHNldCB0byBudWxsIHRvXHJcblx0Ly8gcHJlc2VydmUgc3BhY2UuXHJcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IFNldDxURnVuYz4gPSBudWxsO1xyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIHJlYWxseSBjYWxscyB0aGUgbGlzdGVuZXJzIGluIGEgbG9vcC4gSXQgZGVjb25zdHVjdHMgdGhlIFwiYXJndW1lbnRzXCIgdmFsdWVcclxuXHQvLyBpbiBvcmRlciB0byBwYXNzIHRoZSBwcm9wZXIgcGFyYW1ldGVycyB0byB0aGUgbGlzdGVuZXJzLlxyXG5cdHByaXZhdGUgcmVhbEZpcmUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpXHJcblx0XHRcdFx0bGlzdGVuZXIoIC4uLmFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRXZlbnRNdWx0aVNsb3QgY2xhc3MgYWxsb3dzIHJlZ2lzdGVyaW5nIGxpc3RlbmVycyBmb3IgbXVsdGlwbGUgZXZlbnRzLiBFdmVudHMgYXJlIGlkZW50aWZpZWRcclxuLy8gdXNpbmcgdGhlIHNwZWNpZmllZCB0ZW1wbGF0ZSB0eXBlLCB3aGljaCBpcyB1c3VhbGx5IChidXQgbm90IG5lY2Vzc2FyaWx5KSBhIG51bWJlci0gb3JcclxuLy8gc3RyaW5nLWJhc2VkIGVudW1lcmF0aW9uIG9yIHVuaW9uIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRXZlbnRNdWx0aVNsb3Q8VD5cclxue1xyXG5cdC8vIEFkZHMgYSBuZXcgbGlzdGVuZXIgdG8gdGhlIGdpdmVuIGV2ZW50XHJcblx0cHVibGljIGFkZExpc3RlbmVyKCBldmVudDogVCwgZXZlbnRGdW5jOiBGdW5jdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zbG90cyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnNsb3RzID0gbmV3IE1hcDxULEV2ZW50U2xvdDxGdW5jdGlvbj4+KCk7XHJcblxyXG5cdFx0bGV0IHNsb3QgPSB0aGlzLnNsb3RzLmdldCggZXZlbnQpO1xyXG5cdFx0aWYgKHNsb3QgPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0c2xvdCA9IG5ldyBFdmVudFNsb3Q8RnVuY3Rpb24+KCk7XHJcblx0XHRcdHRoaXMuc2xvdHMuc2V0KCBldmVudCwgc2xvdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2xvdC5hZGQoIGV2ZW50RnVuYyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGxpc3RlbmVyIGZyb20gdGhlIGdpdmVuIGV2ZW50XHJcblx0cHVibGljIHJlbW92ZUxpc3RlbmVyKCBldmVudDogVCwgZXZlbnRGdW5jOiBGdW5jdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zbG90cyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2xvdCA9IHRoaXMuc2xvdHMuZ2V0KCBldmVudCk7XHJcblx0XHRcdGlmIChzbG90ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0c2xvdC5yZW1vdmUoIGV2ZW50RnVuYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNsb3RzOiBNYXA8VCxFdmVudFNsb3Q8RnVuY3Rpb24+PjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBJbnRlcmZhY2UgYW5kIGNsYXNzIGZvciBzaW1wbGUgZXZlbnRzIGFjY2VwdGluZyBubyBwYXJhbWV0ZXJzLlxyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVFdmVudFNsb3QgZXh0ZW5kcyBJRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlRXZlbnRTbG90IGV4dGVuZHMgRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHJlbmRlcmluZyBmdW5jdGlvbiBhLmsuYS4gc3RhdGVsZXNzIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jVk4gZXh0ZW5kcyBWTlxyXG57XHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGlzIG5vZGUgY29ycmVzcG9uZHMgdG8gYSBmcmFnbWVudCBwbGFjZWhvbGRlci4gKi9cclxuXHRwdWJsaWMgc3RhdGljIGlzVk5hRnJhZ21lbnQoIHZuOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKHZuIGFzIEZ1bmNWTikuZnVuYyA9PT0gbWltLlBsYWNlaG9sZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggZnVuYzogbWltLkZ1bmNDb21wVHlwZSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBtaW0uVk5UeXBlLkZ1bmNDb21wKVxyXG5cclxuXHRcdHRoaXMuZnVuYyA9IGZ1bmM7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXlcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbCByZW1haW5cclxuXHRcdFx0Ly8gdW5kZWZpbmVkLlxyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGNoaWxkcmVuIGFzIHBhcnQgb2YgcHJvcHNcclxuXHRcdHRoaXMucHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGZ1bmN0aW9uJ3MgbmFtZSBwbHVzIGtleSBpZiBzcGVjaWZpZWRcclxuXHRcdHRoaXMubmFtZSA9IHRoaXMuZnVuYy5uYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5rZXkgIT09IG51bGwpXHJcblx0XHRcdHRoaXMubmFtZSArPSBcIiBAXCIgKyB0aGlzLmtleTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmZ1bmMoIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0XHQvLyBET00gdHJlZS5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0fVxyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIGl0IGlzIHRoZSBzYW1lIGZ1bmN0aW9uIG9iamVjdFxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyA9PT0gKG5ld1ZOIGFzIEZ1bmNWTikuZnVuYztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNWTiA9IG5ld1ZOIGFzIEZ1bmNWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RnVuY1ZOLmtleTtcclxuXHJcblx0XHQvLyB0YWtlIHByb3BlcnRpZXMgZnJvbSB0aGUgbmV3IG5vZGVcclxuXHRcdHRoaXMucHJvcHMgPSBuZXdGdW5jVk4ucHJvcHM7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIHsgc2hvdWxkQ29tbWl0OiBmYWxzZSwgc2hvdWxkUmVuZGVyOiB0cnVlIH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXRPd25ETigpOiBETlxyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgZG9uJ3QgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiBmb3IgYSBzdGF0ZWxlc3MgY29tcG9uZW50LiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZyBwcm9jZXNzLlxyXG5cdGZ1bmM6IG1pbS5GdW5jQ29tcFR5cGU7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LCBmdW5jdGlvbiBvciBlbGVtZW50LlxyXG5cdHByb3BzOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7Vk59IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtDb21wQmFzZVZOfSBmcm9tIFwiLi9Db21wQmFzZVZOXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgSW5zdGFuY2VWTiBpcyBhIG5vZGUgdGhhdCBob2xkcyBhbiBpbnN0YW5jZSBvZiBhbiBJQ29tcG9uZW50LWltcGxlbWVudGluZyBvYmplY3QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VWTiBleHRlbmRzIENvbXBCYXNlVk48bWltLklDb21wb25lbnQ+IGltcGxlbWVudHMgbWltLklJbnN0YW5jZVZOXHJcbntcclxuXHRjb25zdHJ1Y3RvciggY29tcDogbWltLkNvbXBvbmVudClcclxuXHR7XHJcblx0XHRzdXBlciggbWltLlZOVHlwZS5JbnN0YW5jZUNvbXApXHJcblx0XHR0aGlzLmNvbXAgPSBjb21wO1xyXG5cclxuXHRcdC8vIHRoZSBjb21wb25lbnQgb2JqZWN0IGlzIGEga2V5IGZvciB0aGUgbm9kZVxyXG5cdFx0dGhpcy5rZXkgPSBjb21wO1xyXG5cclxuXHRcdC8vIGRlZmF1bHQgbm9kZSBuYW1lIGlzIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBuYW1lXHJcblx0XHR0aGlzLm5hbWUgPSB0aGlzLmNvbXAuY29uc3RydWN0b3IubmFtZTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIElJbnN0YW5jZVZOIGltcGxlbWVudGF0aW9uXHJcblx0cHVibGljIGdldCBDb21wKCk6IG1pbS5JQ29tcG9uZW50IHsgcmV0dXJuIHRoaXMuY29tcDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb21wLnNldFNpdGUoIHRoaXMpO1xyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnRXaWxsTW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC5jb21wb25lbnRXaWxsTW91bnQoKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29tcC5jb21wb25lbnRXaWxsVW5tb3VudClcclxuXHRcdFx0dGhpcy5jb21wLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XHJcblxyXG5cdFx0dGhpcy5jb21wLnNldFNpdGUoIG51bGwpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gc2luY2UgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSBpcyB1c2VkIGFzIGEga2V5LCB0aGUgb3RoZXIgbm9kZSBpcyBhbHdheXMgZm9yIHRoZVxyXG5cdFx0Ly8gc2FtZSBjb21wb25lbnQgaW5zdGFuY2UgYW5kIHVwZGF0ZSBpcyBhbHdheXMgcG9zc2libGUuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7SUV2ZW50U2xvdCwgRXZlbnRTbG90fSBmcm9tXCIuL0V2ZW50U2xvdFwiXHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi9taW1cIlxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxuXHR7XHJcbiAgICAgICAgTG9jYWxTdHlsZXM6IElMb2NhbFN0eWxlU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElMb2NhbFN0eWxlU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBpcyBwdWJsaXNoZWQgYnkgY29tcG9uZW50cyB0aGF0XHJcbi8vIGRlZmluZSB0aGVpciBsb2NhbCBDU1Mgc3R5bGVzOyB0aGF0IGlzLCBjb21wb25lbnRzIGRlcml2aW5nIGZyb20gdGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlc1xyXG4vLyBjbGFzcy4gVGhlIGludGVyZmFjZSBhbGxvd3MgcmV0cmlldmluZyBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIGRlY29yYXRlZCB3aXRoIHRoZSB1bmlxdWVcclxuLy8gSUQsIHdoaWNoIGF2b2lkcyBkdXBsaWNhdGlvbiBvZiBuYW1lcyBiZXR3ZWVuIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgb3IgZGlmZmVyZW50IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxTdHlsZVNlcnZpY2Vcclxue1xyXG5cdC8vIFJldHVybnMgdGhlIHVuaXF1ZSBJRCB1c2VkIHRvIGRlY29yYXRlIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgdG8gbWFrZSB0aGVtIHVuaXF1ZS5cclxuXHRyZWFkb25seSB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRkZWNvcmF0ZU5hbWUoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMgdGhhdCBkZWZpbmUgbG9jYWwgQ1NTIHN0eWxlcy5cclxuLy8gV2hlbiB0aGlzIGNvbXBvbmVudCBpcyBtb3VudGVkIGl0IGNyZWF0ZXMgYSBuZXcgPHN0eWxlPiBlbGVtZW50ICh3aXRoaW4gdGhlIDxoZWFkPiBlbGVtZW50KS5cclxuLy8gQWxsIGNsYXNzIG5hbWVzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIHdpdGhpbiB0aGlzIHN0eWxlIHdpbGwgaGF2ZSBhIHVuaXF1ZSBJRCBhZGRlZCB0b1xyXG4vLyB0aGVtIGluIG9yZGVyIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIG5hbWVzIGFtb25nIG90aGVyIGNvbXBvbmVudHMgKG9mIHRoZSBzYW1lIG9yIG9mIGRpZmZlcmVudFxyXG4vLyB0eXBlLiBUaGlzIGNsYXNzIGFsc28gcHVibGlzaGVzIGEgc2VydmljZSBpbXBsZW1lbnRpbmcgdGhlIElMb2NhbFN0eWxlU2VydmljZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG5cdFx0XHRcdGV4dGVuZHMgbWltLkNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPlxyXG5cdFx0XHRcdGltcGxlbWVudHMgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IFRQcm9wcyA9IG51bGwpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHJcblx0XHR0aGlzLm1fdW5pcXVlSUQgPSAoTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApKS50b1N0cmluZygpO1xyXG5cdFx0dGhpcy5ydWxlcyA9IG5ldyBNYXA8c3RyaW5nLFJ1bGVJbmZvPigpO1xyXG5cdFx0dGhpcy5ydWxlTmFtZXMgPSBbXTtcclxuXHJcblx0XHQvLyBjcmVhdGUgPHN0eWxlPiBlbGVtZW50IGluIHRoZSA8aGVhZD5cclxuXHRcdHRoaXMuc3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0dGhpcy5zdHlsZUVsbS5pZCA9IHRoaXMubV91bmlxdWVJRDtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuc3R5bGVFbG0pO1xyXG5cclxuXHRcdC8vLy8gV2ViS2l0IGhhY2sgOihcclxuXHRcdC8vdGhpcy5zdHlsZUVsbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIElMb2NhbFN0eWxlU2VydmljZSBpbXBsZW1lbnRhdGlvbi5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgdW5pcXVlIElEIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZW0gdW5pcXVlLlxyXG5cdHB1YmxpYyBnZXQgdW5pcXVlSUQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV91bmlxdWVJRDsgfVxyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgZGVjb3JhdGVOYW1lKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZSArIHRoaXMubV91bmlxdWVJRDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0Ly8gUHVibGljIGludGVyZmFjZS5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBjcmVhdGVTdHlsZVJ1bGUoIG5hbWU6IHN0cmluZywgc2VsZWN0b3I/OiBzdHJpbmcsIHByb3BzPzogbWltLlN0eWxlUHJvcFR5cGUpOiBJTUNzc1N0eWxlUnVsZVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBkdW1teSBzdHlsZSBydWxlXHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLmNyZWF0ZUR1bW15UnVsZSggbmFtZSwgXCJkdW1teSB7fVwiKTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1N0eWxlUnVsZSA9IGluZm8uY3Nzb21SdWxlIGFzIENTU1N0eWxlUnVsZTtcclxuXHJcblx0XHQvLyBjcmVhdGUgc3R5bGUgcnVsZSBvYmplY3RcclxuXHRcdGxldCBtY3NzU3R5bGVSdWxlOiBNQ3NzU3R5bGVSdWxlID0gbmV3IE1Dc3NTdHlsZVJ1bGUoIHRoaXMudW5pcXVlSUQsIGNzc29tUnVsZSk7XHJcblx0XHRpZiAoc2VsZWN0b3IpXHJcblx0XHRcdG1jc3NTdHlsZVJ1bGUuc2V0U2VsZWN0b3IoIHNlbGVjdG9yKTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0bWNzc1N0eWxlUnVsZS5zZXRQcm9wZXJ0aWVzKCBwcm9wcyk7XHJcblxyXG5cdFx0aW5mby5tY3NzUnVsZSA9IG1jc3NTdHlsZVJ1bGU7XHJcblx0XHRyZXR1cm4gbWNzc1N0eWxlUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHJ1bGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgZ2V0UnVsZSggbmFtZTogc3RyaW5nKTogSU1Dc3NSdWxlXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5ydWxlcy5nZXQoIG5hbWUpO1xyXG5cdFx0cmV0dXJuIGluZm8gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGluZm8ubWNzc1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYSBydWxlIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIHJlbW92ZVJ1bGUoIG5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy5zaXRlLnB1Ymxpc2hTZXJ2aWNlKCBcIkxvY2FsU3R5bGVzXCIsIHRoaXMpO1xyXG5cdH1cdFxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy5zaXRlLnVucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIik7XHJcblxyXG5cdFx0dGhpcy5zdHlsZUVsbS5yZW1vdmUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHByaXZhdGUgY3JlYXRlRHVtbXlSdWxlKCBuYW1lOiBzdHJpbmcsIHJ1bGVUZXh0OiBzdHJpbmcpOiBSdWxlSW5mb1xyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHJ1bGUgd2l0aCB0aGlzIG5hbWVcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMucnVsZXMuZ2V0KCBuYW1lKTtcclxuXHRcdGlmIChpbmZvICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucmVtb3ZlUnVsZSggbmFtZSk7XHJcblxyXG5cdFx0Ly8gdGhlIG5ldyBydWxlIHdpbGwgYmVjb21lcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXkgb2YgcnVsZXNcclxuXHRcdGxldCBpbmRleCA9IHRoaXMucnVsZU5hbWVzLmxlbmd0aDtcclxuXHJcblx0XHQvLyBjcmVhdGUgZHVtbXkgc3R5bGUgcnVsZVxyXG5cdFx0bGV0IHNoZWV0OiBDU1NTdHlsZVNoZWV0ID0gdGhpcy5zdHlsZUVsbS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0O1xyXG5cdFx0c2hlZXQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIGluZGV4KTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1J1bGUgPSBzaGVldC5ydWxlc1tpbmRleF07XHJcblxyXG5cdFx0Ly8gYWRkIHRoZSBydWxlIHRvIG91ciBpbnRlcm5hbCBzdHJ1Y3R1cmVzXHJcblx0XHR0aGlzLnJ1bGVOYW1lcy5wdXNoKCBuYW1lKTtcclxuXHRcdGluZm8gPSB7IG1jc3NSdWxlOiBudWxsLCBjc3NvbVJ1bGUsIGluZGV4IH07XHJcblx0XHR0aGlzLnJ1bGVzLnNldCggbmFtZSwgaW5mbyk7XHJcblxyXG5cdFx0cmV0dXJuIGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuaXF1ZSBJRCB0aGF0IGlzIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIGJ5IHRoZSBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBtX3VuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIFN0eWxlIGVsZW1lbnQgRE9NIG9iamVjdC4gSXMgZGVmaW5lZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG5cdHByaXZhdGUgc3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblxyXG5cdC8vIE1hcCBvZiBydWxlcyBieSB0aGVpciBuYW1lcy5cclxuXHRwcml2YXRlIHJ1bGVzOiBNYXA8c3RyaW5nLFJ1bGVJbmZvPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgcnVsZSBuYW1lcy4gVGhpcyBpcyBuZWVkZWQgdG8gYWRqdXN0IGluZGV4ZXMgb2YgcnVsZXMgYWZ0ZXIgYSBydWxlIGlzIHJlbW92ZWQuXHJcblx0cHJpdmF0ZSBydWxlTmFtZXM6IHN0cmluZ1tdO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGVscGVyIHR5cGUgdGhhdCBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIENTUyBydWxlIGFkZGVkIHRvIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbnR5cGUgUnVsZUluZm8gPSB7IG1jc3NSdWxlOiBJTUNzc1J1bGUsIGNzc29tUnVsZTogQ1NTUnVsZSwgaW5kZXg6IG51bWJlciB9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElNQ3NzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBydWxlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTUNzc1J1bGVcclxue1xyXG5cdC8vIFVuaXF1ZSBJRCB1c2VkIGluIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lc1xyXG5cdHJlYWRvbmx5IHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIENTU09NIHJ1bGVcclxuXHRyZWFkb25seSBjc3NvbVJ1bGU6IENTU1J1bGU7XHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdGRlY29yYXRlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJlcGxhY2VzIHRoZSBtYXJrZXIgXCIoKilcIiBpbiB0aGUgZ2l2ZW4gbmFtZSB3aXRoIHRoZSB1bmlxdWUgSURcclxuXHRyZXBsYWNlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNQ3NzUnVsZSBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIG9iamVjdHMgcmVwcmVzZW50ZWQgZGlmZmVyZW50IHR5cGVzIG9mIENTUyBydWxlcyB0aGF0XHJcbi8vIGFyZSBjcmVhdGVkIGJ5IHRoZSBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXMgY29tcG9uZW50LiBUaGlzIG9iamVjdCBzaW1wbHkga2VlcHMgdGhlIHVuaXF1ZVxyXG4vLyBJRCB0aGF0IHNob3VsZCBiZSB1c2VkIGJ5IGRlcml2ZWQgY2xhc3NlcyB3aGVuIGNyZWF0aW5nIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBzbyB0aGF0IHRoZXlcclxuLy8gYXJlIGdsb2JhbGx5IHVuaXF1ZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NSdWxlQmFzZTxUIGV4dGVuZHMgQ1NTUnVsZT4gaW1wbGVtZW50cyBJTUNzc1J1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB1bmlxdWVJRDogc3RyaW5nLCBjc3NvbVJ1bGU6IFQpXHJcblx0e1xyXG5cdFx0dGhpcy51bmlxdWVJRCA9IHVuaXF1ZUlEO1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUgPSBjc3NvbVJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBkZWNvcmF0ZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUgKyB0aGlzLnVuaXF1ZUlEO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXBsYWNlcyB0aGUgbWFya2VyIFwiKCopXCIgaW4gdGhlIGdpdmVuIG5hbWUgd2l0aCB0aGUgdW5pcXVlIElEXHJcblx0cHVibGljIHJlcGxhY2UoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lLnJlcGxhY2UoIFwiKCopXCIsIHRoaXMudW5pcXVlSUQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbmlxdWUgSUQgdXNlZCBpbiBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXNcclxuXHRwdWJsaWMgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gQ1NTT00gcnVsZVxyXG5cdHB1YmxpYyBjc3NvbVJ1bGU6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJTUNzc1N0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFNlbGVjdG9yKCBzZWxlY3Rvcjogc3RyaW5nKTtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvLyBTZXRzIHNldmVyYWwgc3R5bGUgcHJvcGVydGllcy4gQm90aCBwcm9wZXJ0eSBuYW1lcyBhbmQgcHJvcGVydHkgdmFsdWVzIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0UHJvcGVydGllcyggcHJvcHM6IG1pbS5TdHlsZVByb3BUeXBlKTogdm9pZDtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gUHJvcGVydHkgbmFtZSBjYW4gdXNlIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlXHJcblx0Ly8gc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHJlbW92ZVByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1Dc3NTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHRoYXQgY29udGFpbnMgYSBzZWxlY3RvciBhbmQgYSBzZXQgb2ZcclxuLy8gc3R5bGUgcHJvcGVydHkgbmFtZS12YWx1ZSBwYWlycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NTdHlsZVJ1bGUgZXh0ZW5kcyBNQ3NzUnVsZUJhc2U8Q1NTU3R5bGVSdWxlPiBpbXBsZW1lbnRzIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdW5pcXVlSUQ6IHN0cmluZywgY3Nzb21SdWxlOiBDU1NTdHlsZVJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVuaXF1ZUlELCBjc3NvbVJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRTZWxlY3Rvciggc2VsZWN0b3I6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmNzc29tUnVsZS5zZWxlY3RvclRleHQgPSB0aGlzLnJlcGxhY2UoIHNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogc3RyaW5nLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlLnNldFByb3BlcnR5KCB0aGlzLnJlcGxhY2UoIHByb3BOYW1lKSwgdGhpcy5yZXBsYWNlKCBwcm9wVmFsKSxcclxuXHRcdFx0XHRcdFx0aW1wb3J0YW50PyBcImltcG9ydGFudFwiIDogdW5kZWZpbmVkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyBzZXZlcmFsIHN0eWxlIHByb3BlcnRpZXMuIEJvdGggcHJvcGVydHkgbmFtZXMgYW5kIHByb3BlcnR5IHZhbHVlcyBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0aWVzKCBwcm9wczogbWltLlN0eWxlUHJvcFR5cGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR0aGlzLmNzc29tUnVsZS5zdHlsZVt0aGlzLnJlcGxhY2UoIHByb3BOYW1lKV0gPSB0aGlzLnJlcGxhY2UoIHByb3BzW3Byb3BOYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIFByb3BlcnR5IG5hbWUgY2FuIHVzZSB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZVxyXG5cdC8vIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgcmVtb3ZlUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoIHRoaXMucmVwbGFjZSggcHJvcE5hbWUpKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7Um9vdFZOfSBmcm9tIFwiLi9Sb290Vk5cIlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSb290RXJyb3JVSSBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdHByaXZhdGUgcm9vdFZOOiBSb290Vk47XHJcblx0cHJpdmF0ZSBlcnI6IGFueTtcclxuXHRwcml2YXRlIHBhdGhTdHJpbmc6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoIHJvb3RWTjogUm9vdFZOLCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnJvb3RWTiA9IHJvb3RWTjtcclxuXHRcdHRoaXMuZXJyID0gZXJyO1xyXG5cdFx0dGhpcy5wYXRoU3RyaW5nID0gcGF0aCA/IHBhdGguam9pbiggXCIgXFx1MjE5MiBcIikgOiBcIlwiO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBpZD1cInJvb3RFcnJvclwiIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLCBhbGlnbkl0ZW1zOiBcInN0YXJ0XCJ9fT5cclxuXHRcdFx0PGRpdj57dGhpcy5lcnIuTWVzc2FnZX08L2Rpdj5cclxuXHRcdFx0PGRpdj57dGhpcy5wYXRoU3RyaW5nfTwvZGl2PlxyXG5cdFx0XHQ8aHIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19Lz5cclxuXHRcdFx0PGJ1dHRvbiBrZXk9XCJidG5SZXN0YXJ0XCIgY2xpY2s9e3RoaXMub25SZXN0YXJ0fT5SZXN0YXJ0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25SZXN0YXJ0ID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnJvb3RWTi5yZXN0YXJ0KCk7XHJcblx0fTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RXYWl0aW5nVUkgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiBcIkxvYWRpbmcgLi4uXCI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgSVJvb3RWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5DaGFpbn0gZnJvbSBcIi4vVk5DaGFpblwiXHJcbmltcG9ydCB7Um9vdEVycm9yVUksIFJvb3RXYWl0aW5nVUl9IGZyb20gXCIuL1Jvb3RVSVwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcbmxldCBnX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSAod2luZG93IGFzIGFueSkucmVxdWVzdElkbGVDYWxsYmFja1xyXG5cdFx0XHRcdD8gKHdpbmRvdyBhcyBhbnkpLnJlcXVlc3RJZGxlQ2FsbGJhY2tcclxuXHRcdFx0XHQ6ICggZnVuYzogKCk9PnZvaWQpID0+IHNldFRpbWVvdXQoIGZ1bmMpO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFJvb3RWTiBjbGFzcyBpcyB1c2VkIGFzIGEgdG9wLWxldmVsIHZpcnR1YWwgbm9kZSBmb3IgYWxsIHJlbmRlcmVkIHRyZWVzLiBSb290Vk4gc2VydmVzXHJcbi8vIGFzIGFuIGVycm9yIGJvdW5kYXJ5IG9mIGxhc3QgcmVzb3J0LiBXaGVuIGl0IGNhdGNoZXMgYW4gZXJyb3IgdGhhdCB3YXNuJ3QgY2F1Z2h0IGJ5IGFueVxyXG4vLyBkZXNjZW5kYW5kIG5vZGUsIGl0IGRpc3BsYXlzIGEgc2ltcGxlIFVJIHRoYXQgc2hvd3MgdGhlIGVycm9yIGFuZCBhbGxvd3MgdGhlIHVzZXIgdG8gcmVzdGFydC5cclxuLy8gUm9vdFZOIGFsc28gbWFuYWdlcyBzZXJ2aWNlIHB1Ymxpc2hlcnMgYW5kIHN1YnNjcmliZXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFJvb3RWTiBleHRlbmRzIFZOIGltcGxlbWVudHMgSVJvb3RWTiwgbWltLklFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIGFuY2hvckROOiBETilcclxuXHR7XHJcblx0XHRzdXBlciggbWltLlZOVHlwZS5Sb290KVxyXG5cclxuXHRcdHRoaXMuYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHRcdHRoaXMubmFtZSA9IFwiUm9vdFwiO1xyXG5cdFx0dGhpcy5pbml0aWFsaXplKCBudWxsKTtcclxuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XHJcblx0XHR0aGlzLndpbGxNb3VudCgpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0cHVibGljIGdldFN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBjb250ZW50IHRvIGJlIHJlbmRlcmVkIHVuZGVyIHRoaXMgcm9vdCBub2RlIGFuZCB0cmlnZ2VycyB1cGRhdGUuXHJcblx0cHVibGljIHNldENvbnRlbnQoIGNvbnRlbnQ6IGFueSwgc3luYzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuXHRcdGlmIChzeW5jKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2V0ID0gbmV3IFNldDxWTj4oKTtcclxuXHRcdFx0c2V0LmFkZCggdGhpcyk7XHJcblx0XHRcdHRoaXMucGVyZm9ybVVwZGF0ZUN5Y2xlKCBzZXQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuXHQvLyB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGluIGEgc3luY2hyb25vdXMgd2F5LlxyXG5cdHB1YmxpYyBzdGF0aWMgbW91bnRSb290U3luYyggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0XHQvLyBwcm9wZXJ0eVxyXG5cdFx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRcdGlmICghcm9vdFZOKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjcmVhdGUgcm9vdCBub2RlIGFuZCByZW1lbWJlciBpdCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcblx0XHRcdChyZWFsQW5jaG9yRE4gYXMgYW55KVtSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV0gPSByb290Vk47XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdC8vIHNldCBjb250ZW50IHRvIHRoZSByb290IG5vZGUgYW5kIHRyaWdnZXIgc3luY2hyb25vdXMgdXBkYXRlXHJcblx0XHRyb290Vk4uc2V0Q29udGVudCggY29udGVudCwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVubW91bnRzIGEgcm9vdCBub2RlIHRoYXQgd2FzIGNyZWF0ZWQgdXNpbmcgbW91bnRSb290U3luYy5cclxuXHRwdWJsaWMgc3RhdGljIHVubW91bnRSb290U3luYyggYW5jaG9yRE46IEROKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblx0XHRpZiAoIXJlYWxBbmNob3JETilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGdldCBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eS5cclxuXHRcdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0XHRpZiAoIXJvb3RWTilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdFx0ZGVsZXRlIHJlYWxBbmNob3JETltSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV07XHJcblxyXG5cdFx0cm9vdFZOLnNldENvbnRlbnQoIG51bGwsIHRydWUpO1xyXG5cdFx0cm9vdFZOLndpbGxVbm1vdW50KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgYSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24gb3IgYSBjb21wb25lbnQgaW5zdGFuY2UpXHJcblx0Ly8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuXHRwdWJsaWMgc3RhdGljIG1vdW50Um9vdCggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0XHQvLyBwcm9wZXJ0eVxyXG5cdFx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRcdGlmICghcm9vdFZOKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjcmVhdGUgcm9vdCBub2RlIGFuZCByZW1lbWJlciBpdCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcblx0XHRcdChyZWFsQW5jaG9yRE4gYXMgYW55KVtSb290Vk4ubWltYmxBbmNob3JQcm9wTmFtZV0gPSByb290Vk47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2V0IGNvbnRlbnQgdG8gdGhlIHJvb3Qgbm9kZSwgd2hpY2ggd2lsbCB0cmlnZ2VyIHVwZGF0ZVxyXG5cdFx0cm9vdFZOLnNldENvbnRlbnQoIGNvbnRlbnQsIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5tb3VudHMgYSByb290IG5vZGUgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyBzX01vdW50Um9vdC5cclxuXHRwdWJsaWMgc3RhdGljIHVubW91bnRSb290KCBhbmNob3JETjogRE4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHRcdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gZ2V0IG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5LlxyXG5cdFx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRcdGlmICghcm9vdFZOKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gcmVtb3ZlIG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRkZWxldGUgcmVhbEFuY2hvckROW1Jvb3RWTi5taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHJcblx0XHQvLyBkZXN0cnVjdCB0aGUgcm9vdCBub2RlIChhc3luY2hyb25vdXNseSlcclxuXHRcdHJvb3RWTi5zZXRDb250ZW50KCBudWxsLCBmYWxzZSk7XHJcblx0XHRyb290Vk4uc2NoZWR1bGVDYWxsKCAoKSA9PiByb290Vk4ud2lsbFVubW91bnQoKSApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgYSBjaGFpbiBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmVcclxuXHQvLyBzdWItbm9kZXMsIG51bGwgc2hvdWxkIGJlIHJldHVybmVkLlxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZXJyb3JVSSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JVSTtcclxuXHRcdGVsc2UgaWYgKHRoaXMud2FpdGluZ1VJKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy53YWl0aW5nVUk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5wdWJsaXNoU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnVucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdXBwb3J0c0Vycm9ySGFuZGxpbmcoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBvciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChlcnIgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvbWlzZSA9IGVyciBhcyBQcm9taXNlPGFueT47XHJcblx0XHRcdHRoaXMudGhyb3duUHJvbWlzZXMuYWRkKCBwcm9taXNlKTtcclxuXHRcdFx0cHJvbWlzZS50aGVuKCAoKSA9PiB7IHRoaXMub25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlKTsgfSk7XHJcblx0XHRcdHByb21pc2UuY2F0Y2goICgpID0+IHsgdGhpcy5vblByb21pc2VGdWxmaWxsZWQoIHByb21pc2UpOyB9KTtcclxuXHRcdFx0aWYgKCF0aGlzLndhaXRpbmdVSSlcclxuXHRcdFx0XHR0aGlzLndhaXRpbmdVSSA9IG5ldyBSb290V2FpdGluZ1VJKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZXJyb3JVSSA9IG5ldyBSb290RXJyb3JVSSggdGhpcywgZXJyLCBwYXRoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIGFuZCBub3QgdG8gYW55IG9mIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldE93bkROKCk6IEROIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgbWltYmxBbmNob3JQcm9wTmFtZSA9IFwiX19taW1ibEFuY2hvclByb3BOYW1lX19cIjtcclxuXHJcblxyXG5cclxuXHQvLyBEaXNwbGF5cyB0aGUgY29udGVudCBvcmlnaW5hbGx5IHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHVibGljIHJlc3RhcnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNsZWFyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byBiZSB1cGRhdGVkXHJcblx0XHR0aGlzLmVycm9yVUkgPSBudWxsO1xyXG5cdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwdWJsaWMgbm90aWZ5U2VydmljZVB1Ymxpc2hlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHRoaXMuc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0aW5mbyA9IG5ldyBTZXJ2aWNlSW5mbygpO1xyXG5cdFx0XHR0aGlzLnNlcnZpY2VJbmZvcy5zZXQoIGlkLCBpbmZvKTtcclxuXHRcdH1cclxuXHJcblx0XHRpbmZvLnB1Ymxpc2hpbmdWTnMuYWRkKCBzb3VyY2VWTik7XHJcblxyXG5cdFx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRcdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdFx0dm4ubm90aWZ5U2VydmljZUNoYW5nZWQoIGlkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgdW5wdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHRoaXMuc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGluZm8ucHVibGlzaGluZ1ZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0XHRpZiAoaW5mby5wdWJsaXNoaW5nVk5zLnNpemUgPT09IDAgJiYgaW5mby5zdWJzY3JpYmVkVk5zLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMuc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdFx0XHRmb3IoIGxldCB2biBvZiBpbmZvLnN1YnNjcmliZWRWTnMpXHJcblx0XHRcdFx0dm4ubm90aWZ5U2VydmljZUNoYW5nZWQoIGlkKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyBzdWJzY3JpYmVkIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgbm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU2VydmljZUluZm8gPSB0aGlzLnNlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdFx0dGhpcy5zZXJ2aWNlSW5mb3Muc2V0KCBpZCwgaW5mbyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5mby5zdWJzY3JpYmVkVk5zLmFkZCggc291cmNlVk4pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHRoaXMuc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGluZm8uc3Vic2NyaWJlZFZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0XHRpZiAoaW5mby5wdWJsaXNoaW5nVk5zLnNpemUgPT09IDAgJiYgaW5mby5zdWJzY3JpYmVkVk5zLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMuc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwdWJsaWMgcmVxdWVzdE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBhZGQgdGhpcyBub2RlIHRvIHRoZSBtYXAgb2Ygbm9kZXMgZm9yIHdoaWNoIGVpdGhlciB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgb3JcclxuXHRcdC8vIGRlbGV0aW9uIGlzIHNjaGVkdWxlZC4gTm90ZSB0aGF0IGEgbm9kZSB3aWxsIG9ubHkgYmUgcHJlc2VudCBvbmNlIGluIHRoZSBtYXAgbm9cclxuXHRcdC8vIG1hdHRlciBob3cgbWFueSB0aW1lcyBpdCBjYWxscyByZXF1ZXN0VXBkYXRlKCkuXHJcblx0XHR0aGlzLnZuc1NjaGVkdWxlZEZvclVwZGF0ZS5hZGQoIHZuKTtcclxuXHJcblx0XHQvLyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBub2RlIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQsIHNjaGVkdWxlIGFuIHVwZGF0ZSB0byBiZSBwZXJmb3JtZWRcclxuXHRcdC8vIG9uIHRoZSBuZXh0IGN5Y2xlLlxyXG5cdFx0dGhpcy5yZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWxzIGEgcHJldmlvdXNseSByZXF1ZXN0ZWQgdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwdWJsaWMgY2FuY2VsTm9kZVVwZGF0ZSggdm46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHRyeSB0byByZW1vdmUgdGhpcyBub2RlIGZyb20gdGhlIHNldCBvZiBub2RlcyBmb3Igd2hpY2ggdXBkYXRlIG9yIHJlcGxhY2VtZW50IG9yXHJcblx0XHQvLyBkZWxldGlvbiBpcyBzY2hlZHVsZWQuXHJcblx0XHRpZiAoIXRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlLmRlbGV0ZSggdm4pKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gaWYgdGhpcyB3YXMgdGhlIGxhc3Qgbm9kZSBpbiB0aGUgc2V0LCBjYW5jZWwgdGhlIHJlcXVlc3QgdG8gc2NoZWR1bGUgdXBkYXRlIHByb2Nlc3NpbmcuXHJcblx0XHR0aGlzLmNhbmNlbEZyYW1lUmVxdWVzdElmTmVlZGVkKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHNcclxuXHQvLyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHRwdWJsaWMgc2NoZWR1bGVGdW5jQ2FsbCggZnVuYzogbWltLlNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIWZ1bmMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAoYmVmb3JlVXBkYXRlKVxyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLmFkZCggZnVuYyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5hZGQoIGZ1bmMpO1xyXG5cclxuXHRcdHRoaXMucmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VscyBhIGNhbGwgdGhhdCBoYXMgYmVlbiBzY2hlZHVsZWQgdG8gYmUgbWFkZSBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkXHJcblx0Ly8gY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHRwdWJsaWMgY2FuY2VsU2NoZWR1bGVkRnVuY0NhbGwoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFmdW5jKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5kZWxldGUoIGZ1bmMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuZGVsZXRlKCBmdW5jKTtcclxuXHJcblx0XHR0aGlzLmNhbmNlbEZyYW1lUmVxdWVzdElmTmVlZGVkKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyByZXBvcnRFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZnVsZmlsbGVkIHByb21pc2UgZnJvbSBvdXIgaW50ZXJuYWwgbGlzdCBhbmQgaWYgdGhlIGxpc3QgaXMgZW1wdHkgYXNrcyB0b1xyXG5cdC8vIHJlLXJlbmRlclxyXG5cdHByaXZhdGUgb25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlOiBQcm9taXNlPGFueT4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50aHJvd25Qcm9taXNlcy5kZWxldGUoIHByb21pc2UpO1xyXG5cdFx0aWYgKHRoaXMudGhyb3duUHJvbWlzZXMuc2l6ZSA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy53YWl0aW5nVUkgPSBudWxsO1xyXG5cdFx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjYWxsIHRvIHJlcXVlc3RBbmltYXRpb25GcmFtZSBzaG91bGQgYmUgbWFkZSBhZnRlciBhbiB1cGRhdGUgb3IgYVxyXG5cdC8vIGNhbGwgaGFzIGJlZW4gc2NoZWR1bGVkLlxyXG5cdHByaXZhdGUgcmVxdWVzdEZyYW1lSWZOZWVkZWQoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNjaGVkdWxlZEZyYW1lSGFuZGxlID09PSAwKVxyXG5cdFx0XHR0aGlzLnNjaGVkdWxlZEZyYW1lSGFuZGxlID0gZ19yZXF1ZXN0SWRsZUNhbGxiYWNrKCB0aGlzLm9uU2NoZWR1bGVkRnJhbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNhbGwgdG8gY2FuY2VsQW5pbWF0aW9uRnJhbWUgc2hvdWxkIGJlIG1hZGUgYWZ0ZXIgYSBzY2hlZHVsZWQgdXBkYXRlXHJcblx0Ly8gb3IgY2FsbCBoYXMgYmVlbiBjYW5jZWxlZC5cclxuXHRwcml2YXRlIGNhbmNlbEZyYW1lUmVxdWVzdElmTmVlZGVkKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy52bnNTY2hlZHVsZWRGb3JVcGRhdGUuc2l6ZSA9PT0gMCAmJlxyXG5cdFx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNpemUgPT09IDAgJiZcclxuXHRcdFx0dGhpcy5jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNpemUgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdCh3aW5kb3cgYXMgYW55KS5jYW5jZWxJZGxlQ2FsbGJhY2soIHRoaXMuc2NoZWR1bGVkRnJhbWVIYW5kbGUpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlZEZyYW1lSGFuZGxlID0gMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gYSBuZXcgVUkgY3ljbGUgd2hlbiB0aGVyZSBpcyBhIG5lZWQgdG8gdXBkYXRlIFVJIGNvbXBvbmVudHNcclxuXHRwcml2YXRlIG9uU2NoZWR1bGVkRnJhbWUgPSAoKTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdC8vIGNsZWFyIHRoZSBzY2hlZHVsZWQgZnJhbWUgaGFuZGxlIHNvIHRoYXQgbmV3IHVwZGF0ZSBvciByZXBsYWNlbWVudCByZXF1ZXN0cyB3aWxsXHJcblx0XHQvLyBzY2hlZHVsZSBhIG5ldyBmcmFtZS5cclxuXHRcdHRoaXMuc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSAwO1xyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBpbnRlcm5hbCBzZXQgb2Ygbm9kZXMgYW5kIHJlLWNyZWF0ZSBpdCBzbyB0aGF0IGl0IGlzIHJlYWR5IGZvciBuZXdcclxuXHRcdC8vIHVwZGF0ZSByZXF1ZXN0c1xyXG5cdFx0bGV0IHZuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IHRoaXMudm5zU2NoZWR1bGVkRm9yVXBkYXRlO1xyXG5cdFx0dGhpcy52bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBzZXQgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgYmVmb3JlIHVwZGF0aW5nIG5vZGVzXHJcblx0XHRjb25zdCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IHRoaXMuY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGU7XHJcblx0XHR0aGlzLmNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gbmV3IFNldDxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIHNldCBvZiBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCBhZnRlciB1cGRhdGluZyBub2Rlc1xyXG5cdFx0Y29uc3QgY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IHRoaXMuY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZTtcclxuXHRcdHRoaXMuY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBTZXQ8bWltLlNjaGVkdWxlZEZ1bmNUeXBlPigpO1xyXG5cclxuXHRcdC8vIGNhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBpbnZva2VkIGJlZm9yZSB1cGRhdGluZyBjb21wb25lbnRzXHJcblx0XHR0aGlzLnBlcmZvcm1VcGRhdGVDeWNsZSggdm5zU2NoZWR1bGVkRm9yVXBkYXRlLCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSwgY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBhIG5ldyBVSSBjeWNsZSB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byB1cGRhdGUgVUkgY29tcG9uZW50c1xyXG5cdHByaXZhdGUgcGVyZm9ybVVwZGF0ZUN5Y2xlKCB2bnNUb1VwZGF0ZTogU2V0PFZOPixcclxuXHRcdFx0XHRjYWxsc0JlZm9yZVVwZGF0ZT86IFNldDxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+LFxyXG5cdFx0XHRcdGNhbGxzQWZ0ZXJVcGRhdGU/OiBTZXQ8bWltLlNjaGVkdWxlZEZ1bmNUeXBlPik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbmNyZW1lbnQgdGljayBudW1iZXIuXHJcblx0XHR0aGlzLmN1cnJlbnRUaWNrKys7XHJcblxyXG5cdFx0Ly8gY2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGludm9rZWQgYmVmb3JlIHVwZGF0aW5nIGNvbXBvbmVudHNcclxuXHRcdGlmIChjYWxsc0JlZm9yZVVwZGF0ZSlcclxuXHRcdFx0dGhpcy5jYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc0JlZm9yZVVwZGF0ZSwgXCJiZWZvcmVcIik7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBuZXcgRGV0YWlsZWRTdGF0cyggYE1pbWJsIHVwZGF0ZSBjeWNsZSAke3RoaXMuY3VycmVudFRpY2t9OiBgKTtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdGFydCgpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyBhcnJhbmdlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBwZXJmb3JtIHVwZGF0ZXNcclxuXHRcdHRoaXMucGVyZm9ybUNvbW1pdFBoYXNlKCB0aGlzLnBlcmZvcm1SZW5kZXJQaGFzZSggdGhpcy5hcnJhbmdlTm9kZXNCeURlcHRoKCB2bnNUb1VwZGF0ZSkpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdG9wKCB0cnVlKTtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG51bGw7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGNhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBpbnZva2VkIGFmdGVyIHVwZGF0aW5nIGNvbXBvbmVudHNcclxuXHRcdGlmIChjYWxsc0FmdGVyVXBkYXRlKVxyXG5cdFx0XHR0aGlzLmNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGNhbGxzQWZ0ZXJVcGRhdGUsIFwiYWZ0ZXJcIik7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBBcnJhbmdlcyB0aGUgc2NoZWR1bGVkIG5vZGVzIGJ5IHRoZWlyIG5lc3RpbmcgZGVwdGhzIHNvIHRoYXQgd2UgdXBkYXRlIFwidXBwZXJcIiBub2RlcyBiZWZvcmVcclxuXHQvLyB0aGUgbG93ZXIgb25lcy4gVGhpcyBjYW4gaGVscCBhdm9pZCB0d28gY29uZGl0aW9uczpcclxuXHQvL1x0LSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgdHdpY2UgKGZpcnN0IGJlY2F1c2UgaXQgY2FsbGVkIHVwZGF0ZU1lKSBhbmQgc2Vjb25kXHJcblx0Ly9cdFx0YmVjYXVzZSBpdHMgcGFyZW50IHdhcyBhbHNvIHVwZGF0ZWQuXHJcblx0Ly9cdC0gdW5uZWNlc3NheSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgYmVmb3JlIGl0IGlzIHJlbW92ZWQgYnkgdGhlIHBhcmVudFxyXG5cdC8vIFdlIGFsbG9jYXRlIGNvbnRpZ3VvdXMgYXJyYXkgd2hlcmUgaW5kZXhlcyBjb3JyZXNwb25kIHRvIGRlcHRoLiBFYWNoIGVsZW1lbnQgaW4gdGhpc1xyXG5cdC8vIGFycmF5IHdpbGwgZWl0aGVyIGJlIHVuZGVmaW5lZCBvciBjb250YWluIGFuIGFycmF5IG9mIG5vZGVzIGF0IHRoaXMgZGVwdGguXHJcblx0cHJpdmF0ZSBhcnJhbmdlTm9kZXNCeURlcHRoKCB2bnNTY2hlZHVsZWRGb3JVcGRhdGU6IFNldDxWTj4pOiBWTltdW11cclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyBjcmVhdGUgYSBzcGFyc2UgYXJyYXkgb2YgY2VydGFpbiByZWFzb25hYmxlIHNpemUuIElmIHdlIGhhdmUgZGVwdGhzIGdyZWF0ZXIgdGhhbiB0aGlzLFxyXG5cdFx0Ly8gdGhlIGFycmF5IHdpbGwgZ3JvdyBhdXRvbWF0aWNhbGx5IChhbHRob3VnaCBpdCBpcyBsZXNzIGVyZm9ybWFudCBpdCBpcyBzdGlsbCBhY2NlcHRhYmxlKS5cclxuXHRcdGxldCB2bnNCeURlcHRoOiBWTltdW10gPSBuZXcgQXJyYXk8Vk5bXT4oMTAwKTtcclxuXHRcdHZuc1NjaGVkdWxlZEZvclVwZGF0ZS5mb3JFYWNoKCAodm46IFZOKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYXJyID0gdm5zQnlEZXB0aFt2bi5kZXB0aF07XHJcblx0XHRcdGlmICghYXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YXJyID0gW107XHJcblx0XHRcdFx0dm5zQnlEZXB0aFt2bi5kZXB0aF0gPSBhcnI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGFyci5wdXNoKHZuKTtcclxuXHRcdH0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIHZuc0J5RGVwdGg7XHJcblx0fVxyXG5cclxuXHQvLyBQZXJmb3JtcyByZW5kZXJpbmcgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuXHQvLyBzdWItbm9kZXMgd2hlcmUgbmVjZXNzYXJ5LiBSZXR1cm5zIGFycmF5IG9mIFZORGlzcCBzdHJ1Y3R1cmVzIGZvciBlYWNoIHVwZGF0ZWQgbm9kZS5cclxuXHRwcml2YXRlIHBlcmZvcm1SZW5kZXJQaGFzZSggdm5zQnlEZXB0aDogVk5bXVtdKTogVk5EaXNwW11cclxuXHR7XHJcblx0XHRsZXQgdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10gPSBbXTtcclxuXHJcblx0XHQvLyBpdGVyYXRpb24gb3ZlciB0aGUgc3BhcnNlIGFycmF5IHNraXBzIHRoZSBob2xlcy5cclxuXHRcdHZuc0J5RGVwdGguZm9yRWFjaCggKHZuczogVk5bXSkgPT4geyB2bnMuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgY29tcG9uZW50IHdhcyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSwgZG9uJ3QgdXBkYXRlIGl0IGFnYWluXHJcblx0XHRcdFx0aWYgKHZuLmxhc3RVcGRhdGVUaWNrID09PSB0aGlzLmN1cnJlbnRUaWNrKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR1cGRhdGVkTm9kZURpc3BzLnB1c2goIHRoaXMudXBkYXRlU3RlbVZpcnR1YWwoIHZuKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGZpbmQgdGhlIG5lYXJlc3QgZXJyb3IgaGFuZGxpbmcgc2VydmljZS4gSWYgbm9ib2R5IGVsc2UsIGl0IGlzIGltcGxlbWVudGVkXHJcblx0XHRcdFx0Ly8gYnkgdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0XHRcdFx0bGV0IGVycm9yU2VydmljZTogbWltLklFcnJvckhhbmRsaW5nU2VydmljZSA9IHZuLmZpbmRTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdGVycm9yU2VydmljZS5yZXBvcnRFcnJvciggZXJyLCB0aGlzLmN1cnJlbnRWTiA/IHRoaXMuY3VycmVudFZOLnBhdGggOiBudWxsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5jdXJyZW50Vk4gPSBudWxsO1xyXG5cdFx0fSl9KTtcclxuXHJcblx0XHRyZXR1cm4gdXBkYXRlZE5vZGVEaXNwcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIGJlZm9yZSBvciBhZnRlciB1cGRhdGUgY3ljbGUuXHJcblx0cHJpdmF0ZSBjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBmdW5jczogU2V0PCgpPT52b2lkPiwgYmVmb3JlT3JBZnRlcjogc3RyaW5nKVxyXG5cdHtcclxuXHRcdGZ1bmNzLmZvckVhY2goIChmdW5jKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZ1bmMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBmdW5jdGlvbiAke2JlZm9yZU9yQWZ0ZXJ9IHVwZGF0aW5nIGNvbXBvbmVudHNcXG5gLCBlcnIpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGVyZm9ybXMgdGhlIGNvbW1pdCBwaGFzZSBmb3IgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYW5kIHJlY3Vyc2l2ZWx5IGZvciB0aGVpclxyXG5cdC8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFRoZSBDb21taXQgcGhhc2UgY29uc2lzdHMgb2YgdXBkYXRpbmcgRE9NIGFuZCBjYWxsaW5nIGxpZmUtY3ljbGVcclxuXHQvLyBtZXRob2RzIGRpZE1vdW50LCBkaWRVcGRhdGUgYW5kIHdpbGxVbm1vdW50LlxyXG5cdHByaXZhdGUgcGVyZm9ybUNvbW1pdFBoYXNlKCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR1cGRhdGVkTm9kZURpc3BzLmZvckVhY2goIChkaXNwOiBWTkRpc3ApID0+XHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHJlVXBkYXRlUGh5c2ljYWwoIGRpc3ApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dXBkYXRlZE5vZGVEaXNwcy5mb3JFYWNoKCAoZGlzcDogVk5EaXNwKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVBoeXNpY2FsKCBkaXNwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHVwZGF0ZWROb2RlRGlzcHMuZm9yRWFjaCggKGRpc3A6IFZORGlzcCkgPT5cclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wb3N0VXBkYXRlKCBkaXNwKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSBjcmVhdGVzIGFuZCByZW5kZXJzIHRoaXMgbm9kZSBhbmQgaXRzIHN1Yi1ub2Rlcy4gVGhpcyBtZXRob2QgaXMgaW52b2tlZFxyXG5cdC8vIHdoZW4gYSBub2RlIGlzIGZpcnN0IG1vdW50ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpc1xyXG5cdC8vIG1ldGhvZCAod2hpY2ggY2FuIGJlIG9ubHkgZnJvbSBjb21wb25lbnRzJyBzZXRTaXRlIG9yIHJlbmRlciBtZXRob2RzKSxcclxuXHQvLyB0aGUgY29tcG9uZW50IGlzIGFza2VkIHRvIGhhbmRsZSB0aGUgZXJyb3IuIElmIHRoZSBjb21wb25lbnQgaGFuZGxlcyB0aGUgZXJyb3IsIHRoZVxyXG5cdC8vIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGUgZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb25cclxuXHQvLyBpcyByZS10aHJvd24uIFRodXMsIHRoZSBleGNlcHRpb24gaXMgcHJvcGFnYXRlZCB1cCB1bnRpbCBpdCBpcyBoYW5kbGVkIGJ5IGEgbm9kZSB0aGF0XHJcblx0Ly8gaGFuZGxlcyBpdCBvciB1cCB0byB0aGUgcm9vdCBub2RlLlxyXG5cdHByaXZhdGUgY3JlYXRlVmlydHVhbCggdm46IFZOLCBwYXJlbnQ6IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHNldCBlc3NlbnRpYWwgbm9kZSBwYXJhbWV0ZXJzLlxyXG5cdFx0dm4uaW5pdGlhbGl6ZSggcGFyZW50KTtcclxuXHJcblx0XHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRcdGxldCBjdXJyZW50Vk4gPSB2bjtcclxuXHRcdHRoaXMuY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblx0XHR2bi53aWxsTW91bnQoKTtcclxuXHJcblx0XHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGhhbmRsZSBlcnJvcnMgd2UgZG9uJ3QgbmVlZCB0byB3YXN0ZSB0aW1lIHRvIHVzZSB0cnkvY2F0Y2hcclxuXHRcdGlmICghdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKCkpXHJcblx0XHRcdHRoaXMuY3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bik7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVTdWJOb2Rlc1ZpcnR1YWwoIHZuKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyXHJcblx0XHRcdFx0dm4uaGFuZGxlRXJyb3IoIGVyciwgdGhpcy5jdXJyZW50Vk4ucGF0aCk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVTdWJOb2Rlc1ZpcnR1YWwoIHZuKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Ym5vZGVzXHJcblx0XHR0aGlzLmN1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGVyZm9ybXMgY3JlYXRpb24gYW5kIGluaXRpYWwgcmVuZGVyaW5nIG9uIHRoZSBzdWItbm9kZXMgb2Ygb3VyIG5vZGUuXHJcblx0cHJpdmF0ZSBjcmVhdGVTdWJOb2Rlc1ZpcnR1YWwoIHZuOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuXHRcdGZvciggbGV0IHN2biA9IHN1Yk5vZGVzLmZpcnN0OyBzdm4gIT09IG51bGw7IHN2biA9IHN2bi5uZXh0KVxyXG5cdFx0XHR0aGlzLmNyZWF0ZVZpcnR1YWwoIHN2biwgdm4pO1xyXG5cclxuXHRcdHZuLnN1Yk5vZGVzID0gc3ViTm9kZXM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgRE9NIG5vZGVzIGZvciB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5cdHByaXZhdGUgY3JlYXRlUGh5c2ljYWwoIHZuOiBWTiwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pXHJcblx0e1xyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIGFuY2hvciBub2RlXHJcblx0XHR2bi5hbmNob3JETiA9IGFuY2hvckROO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHRcdHZuLm1vdW50KCk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93biBET00gbm9kZSwgYWRkIGl0IHRvIHRoZSBET00gdHJlZSBhbmQgdXNlIGl0IGFzIGFuXHJcblx0XHQvLyBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMuXHJcblx0XHRsZXQgb3duRE46IEROID0gdm4uZ2V0T3duRE4oKTtcclxuXHJcblx0XHQvLyBpZiB3ZSBoYXZlIG91ciBvd24gRE9NIG5vZGUsIGFkZCBpdCB1bmRlciB0aGUgYW5jaG9yIG5vZGVcclxuXHRcdGlmIChvd25ETiAhPT0gbnVsbClcclxuXHRcdFx0dm4uYW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBvd25ETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBub2RlIGhhcyBzdWItbm9kZXMsIGFkZCBET00gbm9kZXMgZm9yIHRoZW1cclxuXHRcdGlmICh2bi5zdWJOb2Rlcy5jb3VudCA+IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGRldGVybWluZSB3aGF0IG5vZGVzIHRvIHVzZSBhcyBhbmNob3IgYW5kIFwiYmVmb3JlXCIgZm9yIHRoZSBzdWItbm9kZXNcclxuXHRcdFx0bGV0IG5ld0FuY2hvckROOiBETiA9IG93bkROID09PSBudWxsID8gYW5jaG9yRE4gOiBvd25ETjtcclxuXHRcdFx0bGV0IG5ld0JlZm9yZUROOiBETiA9IG93bkROID09PSBudWxsID8gYmVmb3JlRE4gOiBudWxsO1xyXG5cclxuXHRcdFx0Ly8gbW91bnQgYWxsIHN1Yi1ub2Rlc1xyXG5cdFx0XHRmb3IoIGxldCBzdm4gPSB2bi5zdWJOb2Rlcy5maXJzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ubmV4dClcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZVBoeXNpY2FsKCBzdm4sIG5ld0FuY2hvckROLCBuZXdCZWZvcmVETik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IGNhbGxzIGRpZE1vdW50IG9uIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSBwb3N0Q3JlYXRlKCB2bjogVk4pXHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR2bi5kaWRNb3VudCgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYE5vZGUgJHt2bi5uYW1lfSB0aHJldyBleGNlcHRpb24gJyR7ZXJyLm1lc3NhZ2V9JyBpbiBkaWRNb3VudGApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciggbGV0IHN2biA9IHZuLnN1Yk5vZGVzLmZpcnN0OyBzdm4gIT09IG51bGw7IHN2biA9IHN2bi5uZXh0KVxyXG5cdFx0XHR0aGlzLnBvc3RDcmVhdGUoIHN2bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IGNhbGxzIHdpbGxVbm1vdW50IG9uIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSBwcmVEZXN0cm95KCB2bjogVk4pXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3ZuID0gdm4uc3ViTm9kZXMuZmlyc3Q7IHN2biAhPT0gbnVsbDsgc3ZuID0gc3ZuLm5leHQpXHJcblx0XHRcdHRoaXMucHJlRGVzdHJveSggc3ZuKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHZuLndpbGxVbm1vdW50KCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgTm9kZSAke3ZuLm5hbWV9IHRocmV3IGV4Y2VwdGlvbiAnJHtlcnIubWVzc2FnZX0nIGluIHdpbGxVbm1vdW50YCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlY3Vyc2l2ZWx5IHJlbW92ZXMgRE9NIG5vZGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwcml2YXRlIGRlc3Ryb3lQaHlzaWNhbCggdm46IFZOKVxyXG5cdHtcclxuXHRcdC8vIGdldCB0aGUgRE9NIG5vZGUgYmVmb3JlIHdlIGNhbGwgdW5tb3VudCwgYmVjYXVzZSB1bm1vdW50IHdpbGwgY2xlYXIgaXQuXHJcblx0XHRsZXQgb3duRE46IEROID0gdm4uZ2V0T3duRE4oKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHRcdHZuLnVubW91bnQoKTtcclxuXHJcblx0XHQvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCB3ZSByZW1vdmUgaXQgZnJvbSB0aGUgRE9NIHRyZWUuIEluIHRoaXMgY2FzZSxcclxuXHRcdC8vIHdlIGRvbid0IG5lZWQgdG8gcmVjdXJzZSBpbnRvIHN1Yi1ub2RlcywgYmVjYXVzZSB0aGV5IGFyZSByZW1vdmVkIHdpdGggdGhlIHBhcmVudC5cclxuXHRcdGlmIChvd25ETilcclxuXHRcdHtcclxuXHRcdFx0Ly8gb3VyIERPTSBub2RlcyBjYW4gb25seSBiZSBlaXRoZXIgRWxlbWVudCBvciBUZXh0IC0gYm90aCBkZXJpdmUgZnJvbSBDaGlsZE5vZGVcclxuXHRcdFx0KG93bkROIGFzIGFueSBhcyBDaGlsZE5vZGUpLnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBsb29wIG92ZXIgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCBiZWNhdXNlIHRoaXMgd2F5IHRoZSBET00gZWxlbWVudCByZW1vdmFsIGlzXHJcblx0XHRcdC8vIGVhc2llci5cclxuXHRcdFx0Zm9yKCBsZXQgc3ZuID0gdm4uc3ViTm9kZXMubGFzdDsgc3ZuICE9PSBudWxsOyBzdm4gPSBzdm4ucHJldilcclxuXHRcdFx0XHR0aGlzLmRlc3Ryb3lQaHlzaWNhbCggc3ZuKTtcclxuXHRcdH1cclxuXHJcblx0XHR2bi50ZXJtaW5hdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgcmVuZGVycyB0aGlzIG5vZGUgYW5kIHVwZGF0ZXMgaXRzIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnkuIFRoaXMgbWV0aG9kIGlzXHJcblx0Ly8gaW52b2tlZCB3aGVuIGEgbm9kZSBpcyBiZWluZyB1cGRhdGVkIGVpdGhlciBhcyBhIHJlc3VsdCBvZiB1cGRhdGVNZSBpbnZvY2F0aW9uIG9yIGJlY2F1c2VcclxuXHQvLyB0aGUgcGFyZW50IG5vZGUgd2FzIHVwZGF0ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpcyBtZXRob2RcclxuXHQvLyAod2hpY2ggY2FuIGJlIG9ubHkgZnJvbSBjb21wb25lbnRzJyBzaG91bGRVcGRhdGUgb3IgcmVuZGVyIG1ldGhvZHMpLCB0aGUgY29tcG9uZW50IGlzIGFza2VkXHJcblx0Ly8gdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGVcclxuXHQvLyBlcnJvciBoYW5kbGluZyBtZXRob2QgaXMgcmVuZGVyZWQ7IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvbiBpcyByZS10aHJvd24uIFRodXMsIHRoZVxyXG5cdC8vIGV4Y2VwdGlvbiBpcyBwcm9wYWdhdGVkIHVwIHVudGlsIGl0IGlzIGhhbmRsZWQgYnkgYSBub2RlIHRoYXQgaGFuZGxlcyBpdCBvciB1cCB0byB0aGUgcm9vdFxyXG5cdC8vIG5vZGUuXHJcblx0cHJpdmF0ZSB1cGRhdGVTdGVtVmlydHVhbCggdm46IFZOKTogVk5EaXNwXHJcblx0e1xyXG5cdFx0bGV0IGRpc3AgPSBuZXcgVk5EaXNwKCk7XHJcblx0XHRkaXNwLmFjdGlvbiA9IFZOQWN0aW9uLlVwZGF0ZVN1Yk5vZGVzT25seTtcclxuXHRcdGRpc3Aub2xkVk4gPSB2bjtcclxuXHRcdHRoaXMudXBkYXRlVmlydHVhbCggZGlzcCk7XHJcblx0XHRyZXR1cm4gZGlzcDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVjdXJzaXZlbHkgcmVuZGVycyB0aGlzIG5vZGUgYW5kIHVwZGF0ZXMgaXRzIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnkuIFRoaXMgbWV0aG9kIGlzXHJcblx0Ly8gaW52b2tlZCB3aGVuIGEgbm9kZSBpcyBiZWluZyB1cGRhdGVkIGVpdGhlciBhcyBhIHJlc3VsdCBvZiB1cGRhdGVNZSBpbnZvY2F0aW9uIG9yIGJlY2F1c2VcclxuXHQvLyB0aGUgcGFyZW50IG5vZGUgd2FzIHVwZGF0ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpcyBtZXRob2RcclxuXHQvLyAod2hpY2ggY2FuIGJlIG9ubHkgZnJvbSBjb21wb25lbnRzJyBzaG91bGRVcGRhdGUgb3IgcmVuZGVyIG1ldGhvZHMpLCB0aGUgY29tcG9uZW50IGlzIGFza2VkXHJcblx0Ly8gdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGVcclxuXHQvLyBlcnJvciBoYW5kbGluZyBtZXRob2QgaXMgcmVuZGVyZWQ7IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvbiBpcyByZS10aHJvd24uIFRodXMsIHRoZVxyXG5cdC8vIGV4Y2VwdGlvbiBpcyBwcm9wYWdhdGVkIHVwIHVudGlsIGl0IGlzIGhhbmRsZWQgYnkgYSBub2RlIHRoYXQgaGFuZGxlcyBpdCBvciB1cCB0byB0aGUgcm9vdFxyXG5cdC8vIG5vZGUuXHJcblx0cHJpdmF0ZSB1cGRhdGVWaXJ0dWFsKCBkaXNwOiBWTkRpc3ApOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0XHRsZXQgY3VycmVudFZOID0gZGlzcC5vbGRWTjtcclxuXHRcdHRoaXMuY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBub2RlIGRvZXNuJ3QgaGFuZGxlIGVycm9ycyB3ZSBkb24ndCBuZWVkIHRvIHdhc3RlIHRpbWUgdG8gdXNlIHRyeS9jYXRjaFxyXG5cdFx0aWYgKCFkaXNwLm9sZFZOLnN1cHBvcnRzRXJyb3JIYW5kbGluZygpKVxyXG5cdFx0XHR0aGlzLnVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3ApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLm9sZFZOLmhhbmRsZUVycm9yKCBlcnIsIHRoaXMuY3VycmVudFZOLnBhdGgpO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3ViTm9kZXNWaXJ0dWFsKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlIG5vZGUgd2FzIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSAtIHRoaXMgd2lsbCBwcmV2ZW50IGl0IGZyb20gXHJcblx0XHQvLyByZW5kZXJpbmcgYWdhaW4gaW4gdGhpcyBjeWNsZS5cclxuXHRcdGRpc3Aub2xkVk4ubGFzdFVwZGF0ZVRpY2sgPSB0aGlzLmN1cnJlbnRUaWNrO1xyXG5cclxuXHRcdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Ym5vZGVzXHJcblx0XHR0aGlzLmN1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIG9mIHRoZSB1cGRhdGUgb24gdGhlIHN1Yi1ub2RlcyBvZiB0aGUgbm9kZSwgd2hpY2ggaXMgcGFzc2VkIGFzXHJcblx0Ly8gdGhlIG9sZFZOIG1lbWJlciBvZiB0aGUgVk5EaXNwIHN0cnVjdHVyZS5cclxuXHRwcml2YXRlIHVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHJlbmRlciB0aGUgbmV3IGNvbnRlbnQgYW5kIGJ1aWxkIGFycmF5IG9mIGRpc3Bvc2l0aW9ucyBvYmplY3RzIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdFx0dGhpcy5idWlsZE5vZGVEaXNwcyggZGlzcCk7XHJcblxyXG5cdFx0Ly8gcGVyZm9ybSByZW5kZXJpbmcgZm9yIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZCwgcmVwbGFjZWQgb3IgdXBkYXRlZFxyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZOQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3AgPSBzdWJOb2RlRGlzcC5vbGRWTi5wcmVwYXJlVXBkYXRlKCBzdWJOb2RlRGlzcC5uZXdWTik7XHJcblx0XHRcdFx0aWYgKHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVWaXJ0dWFsKCBzdWJOb2RlRGlzcCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlVmlydHVhbCggc3ViTm9kZURpc3AubmV3Vk4sIGRpc3Aub2xkVk4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSBjYWxscyB3aWxsVW5tb3VudCBvbiBzdWItbm9kZXMgbWFya2VkIGZvciBkZWxldGlvbi5cclxuXHRwcml2YXRlIHByZVVwZGF0ZVBoeXNpY2FsKCBkaXNwOiBWTkRpc3ApXHJcblx0e1xyXG5cdFx0Ly8gZmlyc3QsIHN1Yi1ub2RlcyBtYXJrZWQgZm9yIGRlbGV0aW9uXHJcblx0XHRmb3IoIGxldCBzdm4gb2YgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHR0aGlzLnByZURlc3Ryb3koIHN2bik7XHJcblxyXG5cdFx0Ly8gc2Vjb25kLCBzdWItbm9kZXMgbWFya2VkIGZvciB1cGRhdGUgb3IgaW5zZXJ0XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRGlzcCBvZiBkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHRcdFx0dGhpcy5wcmVVcGRhdGVQaHlzaWNhbCggc3ViTm9kZURpc3ApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSBwZXJmb3JtcyBET00gdXBkYXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcblx0cHJpdmF0ZSB1cGRhdGVQaHlzaWNhbCggZGlzcDogVk5EaXNwKVxyXG5cdHtcclxuXHRcdC8vIGdldCB0aGUgbm9kZSB3aG9zZSBjaGlsZHJlbiBhcmUgYmVpbmcgdXBkYXRlZC4gVGhpcyBpcyBhbHdheXMgdGhlIG9sZFZOIG1lbWJlciBvZlxyXG5cdFx0Ly8gdGhlIGRpc3Agc3RydWN0dXJlLlxyXG5cdFx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHQvLyByZW1vdmUgZnJvbSBET00gdGhlIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlbW92ZWQgKHRoYXQgaXMsIHRob3NlIGZvciB3aGljaCB0aGVyZVxyXG5cdFx0Ly8gaXMgbm8gY291bnRlcnBhcnQgbmV3IG5vZGUgdGhhdCB3aWxsIGVpdGhlciB1cGRhdGUgb3IgcmVwbGFjZSBpdCkgYW5kIHRoZW4gdGhvc2VcclxuXHRcdC8vIGRlc2lnbmF0ZWQgdG8gYmUgcmVwbGFjZWQuIFdlIG5lZWQgdG8gcmVtb3ZlIG9sZCBub2RlcyBmaXJzdCBiZWZvcmUgd2Ugc3RhcnQgaW5zZXJ0aW5nXHJcblx0XHQvLyBuZXcgLSBvbmUgcmVhc29uIGlzIHRvIHByb3Blcmx5IG1haW50YWluIHJlZmVyZW5jZXMuXHJcblx0XHRmb3IoIGxldCBzdm4gb2YgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHR0aGlzLmRlc3Ryb3lQaHlzaWNhbCggc3ZuKTtcclxuXHJcblx0XHQvLyBjbGVhciBvdXIgY3VycmVudCBsaXN0IG9mIHN1Yi1ub2RlcyBhbmQgcmUtYWxsb2NhdGUgaXQgZm9yIG5ldyBzdWItbm9kZSAtIHdlIHdpbGxcclxuXHRcdC8vIHBvcHVsYXRlIGl0IHdoaWxlIHVwZGF0aW5nIHRoZW1cclxuXHRcdHZuLnN1Yk5vZGVzLmNsZWFyKCk7XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHRoZSBhbmNob3Igbm9kZSB0byB1c2Ugd2hlbiBpbnNlcnRpbmcgb3IgbW92aW5nIG5ldyBub2Rlc1xyXG5cdFx0bGV0IG93bkROID0gdm4uZ2V0T3duRE4oKTtcclxuXHRcdGxldCBhbmNob3JETiA9IG93bkROICE9PSBudWxsID8gb3duRE4gOiB2bi5hbmNob3JETjtcclxuXHJcblx0XHQvLyBpZiB0aGlzIHZpcnR1YWwgbm9kZSBkb2Vzbid0IGRlZmluZSBpdHMgb3duIERPTSBub2RlICh0cnVlIGZvciBjb21wb25lbnRzKSwgd2Ugd2lsbFxyXG5cdFx0Ly8gbmVlZCB0byBmaW5kIGEgRE9NIG5vZGUgYmVmb3JlIHdoaWNoIHRvIHN0YXJ0IGluc2VydGluZyBvciBtb3Zpbmcgbm9kZXMuIE51bGwgbWVhbnNcclxuXHRcdC8vIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSBhbmNob3Igbm9kZSdzIGNoaWxkcmVuLlxyXG5cdFx0bGV0IGJlZm9yZUROOiBETiA9IG93bkROICE9PSBudWxsID8gbnVsbCA6IHZuLmdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCBhbmNob3JETik7XHJcblxyXG5cdFx0Ly8gcGVyZm9ybSBET00gb3BlcmF0aW9ucyBhY2NvcmRpbmcgdG8gc3ViLW5vZGUgZGlzcG9zaXRpb24uIFdlIG5lZWQgdG8gZGVjaWRlIGZvciBlYWNoXHJcblx0XHQvLyBub2RlIHdoYXQgbm9kZSB0byB1c2UgdG8gaW5zZXJ0IG9yIG1vdmUgaXQgYmVmb3JlLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2ZcclxuXHRcdC8vIG5ldyBub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5cdFx0Zm9yKCBsZXQgaSA9IGRpc3Auc3ViTm9kZURpc3BzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3ViTm9kZURpc3AgPSBkaXNwLnN1Yk5vZGVEaXNwc1tpXTtcclxuXHRcdFx0bGV0IGFjdGlvbiA9IHN1Yk5vZGVEaXNwLmFjdGlvbjtcclxuXHRcdFx0aWYgKGFjdGlvbiA9PT0gVk5BY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZFZOID0gc3ViTm9kZURpc3Aub2xkVk47XHJcblx0XHRcdFx0bGV0IG5ld1ZOID0gc3ViTm9kZURpc3AubmV3Vk47XHJcblx0XHRcdFx0aWYgKHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdFx0b2xkVk4uY29tbWl0VXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBpZiB0aGUgdXBkYXRlZCBvbGQgVk4gKG9yIG9uZSBvZiBpdHMgc3ViLW5vZGVzKSBkZWZpbmVzIGEgRE9NIG5vZGUgYW5kIGl0XHJcblx0XHRcdFx0Ly8gaXMgbm90IHBvc2l0aW9uZWQgYmVmb3JlIHRoZSBjdXJyZW50IFwiYmVmb3JlRE5cIiwgbW92ZSBpdCB0aGVyZS4gSXQgYWxzb1xyXG5cdFx0XHRcdC8vIGJlY29tZXMgdGhlIG5ldyBET00gbm9kZSBiZWZvcmUgd2hpY2ggbmV4dCBjb21wb25lbnRzIHNob3VsZCBiZSBpbnNlcnRlZC5cclxuXHRcdFx0XHRsZXQgZmlyc3RETiA9IG9sZFZOLmdldEZpcnN0RE4oKTtcclxuXHRcdFx0XHRpZiAoZmlyc3RETiAhPT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciB3ZSBuZWVkIHRvIG1vdmUgb3VyIG5vZGVcclxuXHRcdFx0XHRcdGxldCBuZXh0U3ViTm9kZVZORGlzcDogVk5EaXNwID0gaSA9PT0gZGlzcC5zdWJOb2RlRGlzcHMubGVuZ3RoIC0gMVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IHVuZGVmaW5lZCA6IGRpc3Auc3ViTm9kZURpc3BzW2krMV07XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaG91bGRNb3ZlVk4oIHN1Yk5vZGVEaXNwLCBuZXh0U3ViTm9kZVZORGlzcCkgJiYgZmlyc3RETi5uZXh0U2libGluZyAhPT0gYmVmb3JlRE4pXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggZmlyc3RETiwgYmVmb3JlRE4pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggdm4uZ2V0U3RhdHNDYXRlZ29yeSgpLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRpZiAoc3ViTm9kZURpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVBoeXNpY2FsKCBzdWJOb2RlRGlzcCk7XHJcblxyXG5cdFx0XHRcdHZuLnN1Yk5vZGVzLmluc2VydFZOKCBvbGRWTik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5ld1ZOID0gc3ViTm9kZURpc3AubmV3Vk47XHJcblxyXG5cdFx0XHRcdC8vIHNpbmNlIHdlIGFscmVhZHkgZGVzdHJveWVkIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLCB0aGUgY29kZSBpc1xyXG5cdFx0XHRcdC8vIGlkZW50aWNhbCBmb3IgUmVwbGFjZSBhbmQgSW5zZXJ0IGFjdGlvbnNcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZVBoeXNpY2FsKCBuZXdWTiwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgdGhlIG5ldyBub2RlIGRlZmluZXMgYSBET00gbm9kZSwgaXQgYmVjb21lcyB0aGUgRE9NIG5vZGUgYmVmb3JlIHdoaWNoXHJcblx0XHRcdFx0Ly8gbmV4dCBjb21wb25lbnRzIHNob3VsZCBiZSBpbnNlcnRlZC9tb3ZlZFxyXG5cdFx0XHRcdGxldCBmaXJzdEROOiBETiA9IG5ld1ZOLmdldEZpcnN0RE4oKTtcclxuXHRcdFx0XHRpZiAoZmlyc3RETiAhPT0gbnVsbClcclxuXHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHJcblx0XHRcdFx0dm4uc3ViTm9kZXMuaW5zZXJ0Vk4oIG5ld1ZOKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWN1cnNpdmVseSBjYWxscyBhcHByb3ByaWF0ZSBsaWZlLWN5Y2xlIG1ldGhvZHMgb24gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwcml2YXRlIHBvc3RVcGRhdGUoIGRpc3A6IFZORGlzcClcclxuXHR7XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRGlzcCBvZiBkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHN1Yk5vZGVEaXNwLmFjdGlvbiA9PT0gVk5BY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgd2UgdXBkYXRlZCBzdWItbm9kZXMsIG5vdGlmeSB0aGVtIHRvb1xyXG5cdFx0XHRcdGlmIChzdWJOb2RlRGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdHRoaXMucG9zdFVwZGF0ZSggc3ViTm9kZURpc3ApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHN1Yk5vZGVEaXNwLmFjdGlvbiA9PT0gVk5BY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHRcdHRoaXMucG9zdENyZWF0ZSggc3ViTm9kZURpc3AubmV3Vk4pO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcC5vbGRWTi5kaWRVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBOb2RlICR7ZGlzcC5vbGRWTi5uYW1lfSB0aHJldyBleGNlcHRpb24gJyR7ZXJyLm1lc3NhZ2V9JyBpbiBkaWRVcGRhdGVgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tcGFyZXMgdHdvIGNoYWlucyBvZiBub2RlcyAob2xkIGFuZCBuZXcpIGFuZCBmaWxscyB0d28gYXJyYXlzIGZvciBzdWItbm9kZXM6XHJcblx0Ly9cdC0gYXJyYXkgb2Ygbm9kZSBkaXNwb3NpdGlvbiBvYmplY3RzIGNvcnJlc3BvbmRpbmcgdG8gbmV3IHN1Yi1ub2Rlcy4gRWFjaCBkaXNwb3NpdGlvblxyXG5cdC8vXHRcdGluZGljYXRlcyB3aGV0aGVyIHRoZSBuZXcgc3ViLW5vZGUgc2hvdWxkIGJlIGp1c3QgaW5zZXJ0ZWQgb3Igd2hldGhlciBpdCBzaG91bGQgdXBkYXRlXHJcblx0Ly9cdFx0dGhlIG9sZCBzdWItbm9kZS5cclxuXHQvL1x0LSBhcnJheSBvZiBvbGQgc3ViLW5vZGVzIHdoaWNoIHNob3VsZCBiZSByZW1vdmVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIG9ubHkgaW52b2tlZCB3aXRoIHRoZSBkaXNwIG9iamVjdCB3aG9zZSBvbGRWTiBmaWVsZCBpcyBub24tbnVsbC5cclxuXHRwcml2YXRlIGJ1aWxkTm9kZURpc3BzKCBkaXNwOiBWTkRpc3ApOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly9kaXNwLnN1Yk5vZGVEaXNwcyA9IFtdO1xyXG5cdFx0Ly9kaXNwLnN1Yk5vZGVzVG9SZW1vdmUgPSBbXTtcclxuXHJcblx0XHQvLyByZW5kZXIgdGhlIG5ldyBjb250ZW50O1xyXG5cdFx0bGV0IG5ld0NoYWluID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCBkaXNwLm9sZFZOLnJlbmRlcigpKTtcclxuXHJcblx0XHQvLyBidWlsZCBtYXAgb2Ygb2xkIGtleWVkIG5vZGVzIGFuZCBhbiBhcnJheSBvZiBvbGQgbm9uLWtleWVkIG5vZGVzXHJcblx0XHRsZXQga2V5ZWRNYXA6IE1hcDxhbnksVk4+ID0gbmV3IE1hcDxhbnksVk4+KCk7XHJcblx0XHRsZXQgbm9uS2V5ZWRMaXN0OiBWTltdID0gW107XHJcblx0XHRsZXQgb2xkQ2hhaW4gPSBkaXNwLm9sZFZOLnN1Yk5vZGVzO1xyXG5cdFx0Zm9yKCBsZXQgb2xkVk4gPSBvbGRDaGFpbi5maXJzdDsgb2xkVk4gIT09IG51bGw7IG9sZFZOID0gb2xkVk4ubmV4dClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG9sZFZOLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdG5vbktleWVkTGlzdC5wdXNoKCBvbGRWTik7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRrZXllZE1hcC5zZXQoIG9sZFZOLmtleSwgb2xkVk4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgbm9kZXNcclxuXHRcdGxldCBub25LZXllZExpc3RMZW5ndGg6IG51bWJlciA9IG5vbktleWVkTGlzdC5sZW5ndGg7XHJcblx0XHRsZXQgbm9uS2V5ZWRJbmRleDogbnVtYmVyID0gMDtcclxuXHRcdGZvciggbGV0IG5ld1ZOID0gbmV3Q2hhaW4uZmlyc3Q7IG5ld1ZOICE9PSBudWxsOyBuZXdWTiA9IG5ld1ZOLm5leHQpXHJcblx0XHR7XHJcblx0XHRcdGxldCBhY3Rpb246IFZOQWN0aW9uO1xyXG5cdFx0XHRsZXQgb2xkVk46IFZOO1xyXG5cdFx0XHRpZiAobmV3Vk4ua2V5ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRvbGRWTiA9IGtleWVkTWFwLmdldCggbmV3Vk4ua2V5KTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgd2UgZm91bmQgb2xkIG5vZGUgdGhlbiByZW1vdmUgdGhlIG9sZCBub2RlIGZyb20gdGhlIG1hcCAtIHRoaXMgd2F5IGF0XHJcblx0XHRcdFx0Ly8gdGhlIGVuZCBvZiB0aGUgbG9vcCBhbGwgb2xkIG5vZGVzIHJlbWFpbmluZyBpbiB0aGUgbWFwIHNob3VsZCBiZSBkZWxldGVkXHJcblx0XHRcdFx0aWYgKG9sZFZOICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRrZXllZE1hcC5kZWxldGUoIG5ld1ZOLmtleSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAobm9uS2V5ZWRJbmRleCA8IG5vbktleWVkTGlzdExlbmd0aClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG9sZFZOID0gbm9uS2V5ZWRMaXN0W25vbktleWVkSW5kZXhdO1xyXG5cdFx0XHRcdG5vbktleWVkSW5kZXgrKztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IHN1Yk5vZGVEaXNwID0gbmV3IFZORGlzcCgpO1xyXG5cdFx0XHRzdWJOb2RlRGlzcC5uZXdWTiA9IG5ld1ZOO1xyXG5cclxuXHRcdFx0Ly8gYnkgbm93LCBpZiB3ZSBkaWRuJ3QgZmluZCBhbiBvbGQgbm9kZSwgdGhlbiB0aGUgbmV3IG5vZGUgc2hvdWxkIGJlIGluc2VydGVkO1xyXG5cdFx0XHQvLyBvdGhlcndpc2UsIHdlIGRlY2lkZSBvbiB3aGV0aGVyIHRoZSBuZXcgbm9kZSBzaG91bGQgYmUgdXNlZCB0byB1cGRhdGUgb3JcclxuXHRcdFx0Ly8gcmVwbGFjZSB0aGUgb2xkIG5vZGVcclxuXHRcdFx0aWYgKG9sZFZOID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0c3ViTm9kZURpc3AuYWN0aW9uID0gVk5BY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRlbHNlIGlmIChvbGRWTi50eXBlID09PSBuZXdWTi50eXBlICYmIG9sZFZOLmlzVXBkYXRlUG9zc2libGUoIG5ld1ZOKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN1Yk5vZGVEaXNwLmFjdGlvbiA9IFZOQWN0aW9uLlVwZGF0ZTtcclxuXHRcdFx0XHRzdWJOb2RlRGlzcC5vbGRWTiA9IG9sZFZOO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHdlIGFyZSBoZXJlIGlmIHRoZSBuZXcgbm9kZSBzaG91bGQgcmVwbGFjZSB0aGUgb2xkIG9uZS4gV2UgYWRkIHRoZSBvbGQgbm9kZSB0b1xyXG5cdFx0XHRcdC8vIHRoZSBsaXN0IG9mIHRob3NlIHRvIGJlIHJlbW92ZWQgYW5kIGluZGljYXRlXHJcblx0XHRcdFx0ZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKTtcclxuXHRcdFx0XHRzdWJOb2RlRGlzcC5hY3Rpb24gPSBWTkFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRpc3Auc3ViTm9kZURpc3BzLnB1c2goIHN1Yk5vZGVEaXNwKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBvbGQga2V5ZWQgbm9kZXMgcmVtYWluaW5nIGluIHRoZSBtYXAgd2lsbCBiZSB1bm1vdW50ZWQgYmVjYXVzZSB0aGVzZSBhcmUgdGhlIG9sZCBub2Rlc1xyXG5cdFx0Ly8gZm9yIHdoaWNoIHRoZXJlIHdlcmUgbm8gbmV3IG5vZGVzIHdpdGggdGhlIHNhbWUga2V5LlxyXG5cdFx0Zm9yKCBsZXQgb2xkVk4gb2Yga2V5ZWRNYXAudmFsdWVzKCkpXHJcblx0XHRcdGRpc3Auc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTik7XHJcblxyXG5cdFx0Ly8gb2xkIG5vbi1rZXllZCBub2RlcyBmcm9tIHRoZSBjdXJyZW50IGluZGV4IHRvIHRoZSBlbmQgb2YgdGhlIGxpc3Qgd2lsbCBiZSB1bm1vdW50ZWRcclxuXHRcdGZvciggbGV0IGkgPSBub25LZXllZEluZGV4OyBpIDwgbm9uS2V5ZWRMaXN0TGVuZ3RoOyBpKyspXHJcblx0XHRcdGRpc3Auc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBub25LZXllZExpc3RbaV0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGJlIG1vdmVkIGJhc2VkIG9uIGl0cyBkaXNwb3NpdGlvbi5cclxuXHRwcml2YXRlIHNob3VsZE1vdmVWTiggdm5EaXNwOiBWTkRpc3AsIG5leHRWTkRpc3A6IFZORGlzcCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAobmV4dFZORGlzcCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gdm5EaXNwLm9sZFZOLm5leHQgIT09IG51bGw7XHJcblx0XHRlbHNlIGlmIChuZXh0Vk5EaXNwLmFjdGlvbiA9PT0gVk5BY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHRyZXR1cm4gdm5EaXNwLm9sZFZOLm5leHQgIT09IG5leHRWTkRpc3Aub2xkVk47XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb250ZW50IHJlbmRlcmVkIHVuZGVyIHRoaXMgcm9vdCBub2RlLlxyXG5cdHByaXZhdGUgY29udGVudDogYW55O1xyXG5cclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGFuIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGZyb20gZGVzY2VuZGFuZCBub2Rlcy5cclxuXHRwcml2YXRlIGVycm9yVUk6IFJvb3RFcnJvclVJID0gbnVsbDtcclxuXHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBhbiBleGNlcHRpb24gd2FzIGNhdWdodCBmcm9tIGRlc2NlbmRhbmQgbm9kZXMuXHJcblx0cHJpdmF0ZSB3YWl0aW5nVUk6IFJvb3RXYWl0aW5nVUkgPSBudWxsO1xyXG5cclxuXHQvLyBTZXQgb2YgcHJvbWlzZXMgdGhyb3duIGJ5IGRlc2NlbmRhbnQgbm9kZXMgYW5kIG5vdCB5ZXQgZnVsZmlsbGVkLlxyXG5cdHByaXZhdGUgdGhyb3duUHJvbWlzZXMgPSBuZXcgU2V0PFByb21pc2U8YW55Pj4oKTtcclxuXHJcblx0Ly8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIHNldHMgb2YgdmlydHVhbCBub2RlcyB0aGF0IHN1YnNjcmliZWQgdG8gdGhpcyBzZXJ2aWNlLlxyXG5cdHByaXZhdGUgc2VydmljZUluZm9zID0gbmV3IE1hcDxzdHJpbmcsU2VydmljZUluZm8+KCk7XHJcblxyXG5cdC8vIE1hcCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9uIHRoZSBuZXh0IFVJIGN5Y2xlLiBXZSB1c2UgTWFwIGluIG9yZGVyIHRvIG5vdCBpbmNsdWRlXHJcblx0Ly8gdGhlIHNhbWUgbm9kZSBtb3JlIHRoYW4gb25jZSAtIHdoaWNoIGNhbiBoYXBwZW4gaWYgdGhlIG5vZGUncyByZXF1ZXN0VXBkYXRlIG1ldGhvZCBpcyBjYWxsZWRcclxuXHQvLyBtb3JlIHRoYW4gb25jZSBkdXJpbmcgYSBzaW5nbGUgcnVuIChlLmcuIGR1cmluZyBldmVudCBwcm9jZXNzaW5nKS4gVGhlIHZhbHVlIG1hcHBlZCB0byB0aGVcclxuXHQvLyBub2RlIGRldGVybWluZXMgdGhlIG9wZXJhdGlvbiB0byBiZSBwZXJmb3JtZWQ6XHJcblx0Ly9cdC0gdW5kZWZpbmVkIC0gdGhlIG5vZGUgd2lsbCBiZSB1cGRhdGVkXHJcblx0Ly9cdC0gbnVsbCAtIHRoZSBub2RlIHdpbGwgYmUgZGVsZXRlZCBmcm9tIGl0cyBwYXJlbnRcclxuXHQvL1x0LSBhbnl0aGluZyBlbHNlIC0gdGhlIG5vZGUgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoaXMgbmV3IGNvbnRlbnRcclxuXHRwcml2YXRlIHZuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IG5ldyBTZXQ8Vk4+KCk7XHJcblxyXG5cdC8vIFNldCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBiZWZvcmVcclxuXHQvLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLlxyXG5cdHByaXZhdGUgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBuZXcgU2V0PG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHJcblx0Ly8gU2V0IG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGFmdGVyXHJcblx0Ly8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC5cclxuXHRwcml2YXRlIGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgU2V0PG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHJcblx0Ly8gSGFuZGxlIG9mIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCAoaW4gY2FzZSBpdCBzaG91bGQgYmUgY2FuY2VsZWQpLlxyXG5cdHByaXZhdGUgc2NoZWR1bGVkRnJhbWVIYW5kbGU6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciB0aGF0IHNlcnZlcyBhcyBhIHVuaXF1ZSBJRCBvZiBhbiB1cGRhdGUgY3ljbGUuIEVhY2ggdXBkYXRlIGN5Y2xlIHRoZSByb290IG5vZGVcclxuXHQvLyBpbmNyZW1lbnRzIHRoaXMgbnVtYmVyLiBFYWNoIG5vZGUgYmVpbmcgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlIGlzIGFzc2lnbmVkIHRoaXMgbnVtYmVyLlxyXG5cdC8vIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIHdoZW4gYm90aCBhIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmVcclxuXHQvLyB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5cdHByaXZhdGUgY3VycmVudFRpY2s6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE5vZGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC4gRHVyaW5nIGNyZWF0aW9uIGFuZCB1cGRhdGluZyBwcm9jZXNzLCB0aGlzIHZhbHVlIGlzIHNldFxyXG5cdC8vIGV2ZXJ5IHRpbWUgd2UgcmVjdXJzZSBpbnRvIHN1Yi1ub2RlcyBhbmQgcmVzdG9yZWQgd2hlbiB3ZSByZXR1cm4gYmFjayB0byB0aGUgbm9kZS4gSWZcclxuXHQvLyBkdXJpbmcgY3JlYXRpb24gb3IgdXBkYXRpbmcgcHJvY2VzcyBhbiBleGNlcHRpb24gaXMgdGhyb3duIGFuZCBpcyBjYXVnaHQgYnkgc29tZSB1cHBlclxyXG5cdC8vIGxldmVsIG5vZGUsIHRoaXMgdmFsdWUgd2lsbCBzdGlsbCBwb2ludCBhdCB0aGUgbm9kZSB0aGF0IGNhdXNlZCB0aGUgZXhjZXB0aW9uLlxyXG5cdHByaXZhdGUgY3VycmVudFZOOiBWTiA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGtlcHQgYnkgUm9vdCB2aXJ0dWFsIG5vZGUgYWJvdXQgc2VydmljZSBwdWJsaWNhdGlvbnMgYW5kIHN1YnNjcmlwdGlvbnMuIFRoZSBzYW1lXHJcbi8vIHNlcnZpY2UgY2FuIGJlIHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCB0byBieSBtdWx0aXBsZSBub2Rlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFNlcnZpY2VJbmZvXHJcbntcclxuXHRwdWJsaXNoaW5nVk5zOiBTZXQ8Vk4+ID0gbmV3IFNldDxWTj4oKTtcclxuXHRzdWJzY3JpYmVkVk5zOiBTZXQ8Vk4+ID0gbmV3IFNldDxWTj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOQWN0aW9uIGVudW1lcmF0aW9uIHNwZWNpZmllcyBwb3NzaWJsZSBhY3Rpb25zIHRvIHBlcmZvcm0gZm9yIG5ldyBub2RlcyBkdXJpbmdcclxuLy8gcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIFZOQWN0aW9uXHJcbntcclxuXHQvLyBUaGUgbm9kZSdzIGNoaWxkcmVuIHNob3VsZCBiZXVwZGF0ZWQuXHJcblx0VXBkYXRlU3ViTm9kZXNPbmx5ID0gMCxcclxuXHJcblx0Ly8gVGhlIG5ldyBub2RlIHNob3VsZCBiZSBpbnNlcnRlZC4gVGhpcyBtZWFucyB0aGF0IGVpdGhlciB0aGVyZSB3YXMgbm8gY291bnRlcnBhcnQgb2xkIG5vZGVcclxuXHQvLyBmb3VuZCBvciB0aGUgZm91bmQgbm9kZSBjYW5ub3QgYmUgdXNlZCB0byB1cGRhdGUgdGhlIG9sZCBvbmUgKGUuZy4gb2YgZGlmZmVyZW50IHR5cGUpLlxyXG5cdEluc2VydCA9IDEsXHJcblxyXG5cdC8vIFRoZSBuZXcgbm9kZSBzaG91bGQgYmUgdXNlZCB0byB1cGRhdGUgdGhlIG9sZCBub2RlLlxyXG5cdFVwZGF0ZSA9IDIsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTkRpc3AgY2xhc3MgZGVzY3JpYmVzIGEgZGlzcG9zaXRpb24gZm9yIGEgbm9kZSBkdXJpbmcgcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFZORGlzcFxyXG57XHJcblx0Ly8gQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZVxyXG5cdGFjdGlvbjogVk5BY3Rpb247XHJcblxyXG5cdC8vIE5ldyB2aXJ0dWFsIG5vZGUgdG8gaW5zZXJ0LCB1cGRhdGUgb3IgcmVwbGFjZSBhbiBvbGQgbm9kZVxyXG5cdG5ld1ZOOiBWTjtcclxuXHJcblx0Ly8gT2xkIHZpcnR1YWwgbm9kZSB0byBiZSB1cGRhdGVkIG9yIHJlcGxhY2VkLiBUaGlzIGlzIG5vdCB1c2VkIGZvciB0aGUgaW5zZXJ0IGFjdGlvbi5cclxuXHRvbGRWTjogVk47XHJcblxyXG5cdC8vIERpc3Bvc2l0aW9uIGZsYWdzIGZvciB0aGUgVXBkYXRlIGFjdGlvbi4gVGhpcyBmaWVsZCBpcyBub3QgdXNlZCBmb3IgSW5zZXJ0IGFuZCBSZXBsYWNlXHJcblx0Ly8gYWN0aW9ucy5cclxuXHR1cGRhdGVEaXNwOiBWTlVwZGF0ZURpc3A7XHJcblxyXG5cdC8vIEFycmF5IG9mIGRpc3Bvc2l0aW9uIG9iamVjdHMgZm9yIHN1Yi1ub2Rlcy5cclxuXHRzdWJOb2RlRGlzcHM6IFZORGlzcFtdID0gW107XHJcblxyXG5cdC8vIEFycmF5IG9mIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSByZW1vdmVkIGR1cmluZyB1cGRhdGUgb2YgdGhlIHN1Yi1ub2Rlcy5cclxuXHRzdWJOb2Rlc1RvUmVtb3ZlOiBWTltdID0gW107XHJcbn1cclxuXHJcblxyXG5cclxuaW1wb3J0IHtJbnN0YW5jZVZOfSBmcm9tIFwiLi9JbnN0YW5jZVZOXCJcclxuaW1wb3J0IHtDbGFzc1ZOfSBmcm9tIFwiLi9DbGFzc1ZOXCJcclxuaW1wb3J0IHtGdW5jVk59IGZyb20gXCIuL0Z1bmNWTlwiXHJcbmltcG9ydCB7RWxtVk59IGZyb20gXCIuL0VsbVZOXCJcclxuaW1wb3J0IHtUZXh0Vk59IGZyb20gXCIuL1RleHRWTlwiXHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBjaGFpbiBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuIEZvciBhbGwgdHlwZXMgb2YgY29udGVudHMgb3RoZXIgdGhhbiBhblxyXG4vLyBhcnJheSwgdGhlIHJldHVybmVkIGNoYWluIGNvbnRhaW5zIGEgc2luZ2xlIFZOLiBJZiB0aGUgaW5wdXQgY29udGVudCBpcyBhbiBhcnJheSwgdGhlblxyXG4vLyBhIFZOIGlzIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGFycmF5IGVsZW1lbnRzLiBTaW5jZSBhcnJheSBlbGVtZW50cyBtaWdodCBhbHNvIGJlIGFycmF5cyxcclxuLy8gdGhlIHByb2Nlc3MgaXMgcmVjdXJzaXZlLlxyXG5mdW5jdGlvbiBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGNvbnRlbnQ6IGFueSk6IFZOQ2hhaW5cclxue1xyXG5cdGNvbnN0IGNoYWluID0gbmV3IFZOQ2hhaW4oKTtcclxuXHRsZXQgY29udGVudFR5cGU6IHN0cmluZyA9IHR5cGVvZiBjb250ZW50O1xyXG5cdGlmIChjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCBjb250ZW50VHlwZSA9PT0gXCJib29sZWFuXCIgfHwgY29udGVudFR5cGUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHJldHVybiBjaGFpbjtcclxuXHJcblx0aWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBWTilcclxuXHRcdGNoYWluLmFwcGVuZFZOKCBjb250ZW50IGFzIFZOKTtcclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVk5DaGFpbilcclxuXHRcdGNoYWluLmFwcGVuZENoYWluKCBjb250ZW50IGFzIFZOQ2hhaW4pO1xyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBtaW0uQ29tcG9uZW50KVxyXG5cdFx0Y2hhaW4uYXBwZW5kVk4oIG5ldyBJbnN0YW5jZVZOKCBjb250ZW50IGFzIG1pbS5Db21wb25lbnQpKTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBjb250ZW50KSlcclxuXHR7XHJcblx0XHRmb3IoIGxldCBhcnJJdGVtIG9mIGNvbnRlbnQgYXMgQXJyYXk8YW55PilcclxuXHRcdFx0Y2hhaW4uYXBwZW5kQ2hhaW4oIGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggYXJySXRlbSkpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChjb250ZW50VHlwZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdGNoYWluLmFwcGVuZFZOKCBuZXcgVGV4dFZOKCBjb250ZW50IGFzIHN0cmluZykpO1xyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0dGhyb3cgY29udGVudDtcclxuXHRlbHNlXHJcblx0XHRjaGFpbi5hcHBlbmRWTiggbmV3IFRleHRWTiggY29udGVudC50b1N0cmluZygpKSk7XHJcblxyXG5cdHJldHVybiBjaGFpbjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGEgY2hhaW4gb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBUeXBlU2NyaXB0J3MgSlNYIHBhcnNlci5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOQ2hhaW5Gcm9tSlNYKCB0YWc6IGFueSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKTogVk5DaGFpblxyXG57XHJcblx0Y29uc3QgY2hhaW46IFZOQ2hhaW4gPSBuZXcgVk5DaGFpbigpO1xyXG5cclxuXHRpZiAodGFnID09PSBtaW0uUGxhY2Vob2xkZXIpXHJcblx0XHRjaGFpbi5hcHBlbmRDaGFpbiggY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCBjaGlsZHJlbikpO1xyXG5cdGVsc2UgaWYgKG1pbS5Db21wb25lbnQuaXNQcm90b3R5cGVPZiggdGFnKSlcclxuXHRcdGNoYWluLmFwcGVuZFZOKCBuZXcgQ2xhc3NWTiggdGFnIGFzIG1pbS5JQ29tcG9uZW50Q2xhc3MsIHByb3BzLCBjaGlsZHJlbikpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRsZXQgdGFnVHlwZTogc3RyaW5nID0gdHlwZW9mIHRhZztcclxuXHRcdGlmICh0YWdUeXBlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdGNoYWluLmFwcGVuZFZOKCBuZXcgRnVuY1ZOKCB0YWcgYXMgbWltLkZ1bmNDb21wVHlwZSwgcHJvcHMsIGNoaWxkcmVuKSk7XHJcblx0XHRlbHNlIGlmICh0YWdUeXBlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRjaGFpbi5hcHBlbmRWTiggbmV3IEVsbVZOKCB0YWcgYXMgc3RyaW5nLCBwcm9wcywgY2hpbGRyZW4pKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiSW52YWxpZCB0YWcgaW4ganN4IHByb2Nlc3NpbmcgZnVuY3Rpb246IFwiICsgdGFnKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY2hhaW47XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdhdGhlcmluZyB1cGRhdGUgc3RhdGlzdGljc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIENhdGVnb3JpZXMgb2YgY2hhbmdlZCBlbnRpdGllcyB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC5cclxuZXhwb3J0IGVudW0gU3RhdHNDYXRlZ29yeVxyXG57XHJcblx0Q29tcCxcclxuXHRFbG0sXHJcblx0VGV4dCxcclxuXHRBdHRyLFxyXG5cdEV2ZW50LFxyXG59XHJcblxyXG5cclxuXHJcbi8vIEFjdGlvbnMgb24gYW4gZW50aXR5IHRvIGdhdGhlciBzdGF0aXN0aWNzIGFib3V0LiBOb3QgYWxsIGFjdGlvbnMgYXJlIHJlbGV2YW50IGZvciBhbGxcclxuLy8gY2F0ZWdvcmllczpcclxuLy9cdC0gVXBkYXRlZCBkb2Vzbid0IGV4aXN0IGZvciBjb21wb25lbnRzIGFuZCBmb3IgZWxlbWVudHNcclxuLy9cdC0gTW92ZWQgZG9lc24ndCBleGlzdCBmb3IgYXR0cmlidXRlc1xyXG4vL1x0LSBSZW5kZXJlZCBvbmx5IGV4aXN0cyBmb3IgY29tcG9uZW50c1xyXG5leHBvcnQgZW51bSBTdGF0c0FjdGlvblxyXG57XHJcblx0QWRkZWQ9IDEsXHJcblx0RGVsZXRlZCA9IDIsXHJcblx0VXBkYXRlZCA9IDMsXHJcblx0TW92ZWQgPSA0LFxyXG5cdFJlbmRlcmVkID0gNSxcclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9yYWdlIGZvciBhIG51bWJlciBvZiBlYWNoIGFjdGlvbiB1bmRlciBhIGNhdGVnb3J5LlxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlTdGF0c1xyXG57XHJcblx0YWRkZWQ6IG51bWJlciA9IDA7XHJcblx0ZGVsZXRlZDogbnVtYmVyID0gMDtcclxuXHR1cGRhdGVkOiBudW1iZXIgPSAwO1xyXG5cdG1vdmVkOiBudW1iZXIgPSAwO1xyXG5cdHJlbmRlcmVkOiBudW1iZXIgPSAwO1xyXG5cclxuXHRwdWJsaWMgaGFzU29tZURhdGEoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmFkZGVkIHx8IHRoaXMuZGVsZXRlZCB8fCB0aGlzLnVwZGF0ZWQgfHwgdGhpcy5tb3ZlZCB8fCB0aGlzLnJlbmRlcmVkO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGV0YWlsZWRTdGF0c1xyXG57XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHN0YXJ0VGltZTogbnVtYmVyO1xyXG5cdGR1cmF0aW9uOiBudW1iZXI7XHJcblx0Y29tcDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0ZWxtOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHR0ZXh0OiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRhdHRyOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRldmVudDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIG5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhcnQoKVxyXG5cdHtcclxuXHRcdHRoaXMuZHVyYXRpb24gPSAwLjA7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RvcCggcHJpbnRTdW1tYXJ5OiBib29sZWFuID0gdHJ1ZSlcclxuXHR7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcclxuXHJcblx0XHRpZiAocHJpbnRTdW1tYXJ5KVxyXG5cdFx0XHRjb25zb2xlLmxvZyggdGhpcy50b1N0cmluZygpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gaW5jcmVtZW50cyB0aGVudW1iZXIgb2YgdGltZXMgdGhlIGdpdmVuIGFjdGlvbiB3YXMgcGVyZm9ybWVkIG9uIGFuIGVudGl0eSBvZiBhIGdpdmVuXHJcblx0Ly8gY2F0ZWdvcnkuIElmIHRoZSBlbnRpdHkgaXMgYSBET00gZW50aXR5IChhcyBvcHBvc2VkIHRvIGEgY29tcG9uZW50KSwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gdG90YWwgbnVtYmVyIGlzIGFsc28gaW5jcmVtZW50ZWQuXHJcblx0cHVibGljIGxvZyggY2F0ZWdvcnk6IFN0YXRzQ2F0ZWdvcnksIGFjdGlvbjogU3RhdHNBY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGNhdGVnb3J5U3RhdHM6IENhdGVnb3J5U3RhdHM7XHJcblx0XHRzd2l0Y2goIGNhdGVnb3J5KVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuQ29tcDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuY29tcDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5FbG06IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmVsbTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5UZXh0OiBjYXRlZ29yeVN0YXRzID0gdGhpcy50ZXh0OyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkF0dHI6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmF0dHI7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuRXZlbnQ6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmV2ZW50OyBicmVhaztcclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaCggYWN0aW9uKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLkFkZGVkOiBjYXRlZ29yeVN0YXRzLmFkZGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLkRlbGV0ZWQ6IGNhdGVnb3J5U3RhdHMuZGVsZXRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5VcGRhdGVkOiBjYXRlZ29yeVN0YXRzLnVwZGF0ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uTW92ZWQ6IGNhdGVnb3J5U3RhdHMubW92ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uUmVuZGVyZWQ6IGNhdGVnb3J5U3RhdHMucmVuZGVyZWQrKzsgYnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGAke3RoaXMubmFtZX0gJHt0aGlzLmR1cmF0aW9uLnRvRml4ZWQoMil9bXMgYCArXHJcblx0XHRcdFx0dGhpcy5nZXRDb21wU3RyaW5nKCkgKyB0aGlzLmdldEVsbVN0cmluZygpICsgdGhpcy5nZXRUZXh0U3RyaW5nKCkgK1xyXG5cdFx0XHRcdHRoaXMuZ2V0QXR0clN0cmluZygpICsgdGhpcy5nZXRFdmVudFN0cmluZygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNvbXBvbmVudCBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRDb21wU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5jb21wLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmNvbXAuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuY29tcC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjcwRVwiLCB0aGlzLmNvbXAucmVuZGVyZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMuY29tcC5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBjb21wKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZWxlbWVudCBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRFbG1TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmVsbS5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5lbG0uYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuZWxtLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMuZWxtLm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGVsbSgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRleHQgbm9kZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRUZXh0U3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy50ZXh0Lmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLnRleHQuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMudGV4dC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLnRleHQudXBkYXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy50ZXh0Lm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYHRleHQoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhdHRyaWJ1dGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0QXR0clN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuYXR0ci5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5hdHRyLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmF0dHIuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy5hdHRyLnVwZGF0ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgYXR0cigke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGF0dHJpYnV0ZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRFdmVudFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZXZlbnQuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuZXZlbnQuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuZXZlbnQuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy5ldmVudC51cGRhdGVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGV2ZW50KCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIHNpZ24gYW5kIHZhbHVlIHRvIHRoZSBnaXZlbiBzdHJpbmcgYnV0IG9ubHkgaWYgdGhlIHZhbHVlIGlzIG5vbi16ZXJvLlxyXG5cdHByaXZhdGUgZ2V0VmFsU3RyaW5nKCBzOiBzdHJpbmcsIHNpZ246IHN0cmluZywgdmFsOiBudW1iZXIpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodmFsID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIChzLmxlbmd0aCA+IDAgPyBcIiBcIiA6IFwiXCIpICsgc2lnbiArIHZhbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBzdGF0czogRGV0YWlsZWRTdGF0cztcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN2Z0VsbUluZm8gdHlwZSBkZWZpbmVzIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gU1ZHIGVsZW1lbnQuIFRoaXNcclxuLy8gaW5mb3JtYXRpb24gY2FuIGJlIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbi8vXHQtIHN0cmluZyAtIGFjdHVhbCBuYW1lIHRvIHVzZSBmb3IgdGhlIGVsZW1lbnQuIFNvbWUgU1ZHIGVsZW1lbnRzIGhhdmUgbmFtZXMgdGhhdCBjYW5ub3QgYmUgdXNlZFxyXG4vL1x0XHRpbiBKWCBkaXJlY3RseSAoZS5nLiBiZWNhdXNlIG9mIGh5cGhlbiBsaWtlIGluIFwiY29sb3ItcHJvZmlsZVwiKS4gSW4gdGhpcyBjYXNlIHRoZSBzdHJpbmdcclxuLy9cdFx0dmFsdWUgd2lsbCBiZSB0aGUgYWN0dWFsIGVsZW1lbnQgbmFtZSB0byBwdXQgaW50byBIVE1MIGRvY3VtZW50LCB3aGlsZSBKU1ggd2lsbCBiZSB1c2luZ1xyXG4vL1x0XHRhIGNhbWVsLWZvcm1hdHRlZCBuYW1lIChlLmcuIFwiY29sb3JQcm9maWxlXCIpLlxyXG4vL1x0LSBib29sZWFuIC0gZmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhlIGVsZW1lbnQgaXMgXCJkdWFsLXB1cnBvc2VcIjsgdGhhdCBpcywgZWxlbWVudCB3aXRoIHRoaXNcclxuLy9cdFx0bmFtZSBjYW4gYmUgdXNlZCBhcyBlaXRoZXIgSFRNTCBvciBTVkcgZWxlbWVudC5cclxuLy9cdC0gdHVwbGUgb2YgdHdvIGVsZW1lbnRzIC0gc3RyaW5nIGFuZCBib29sZWFuIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFib3ZlIGl0ZW1zLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgU3ZnRWxtSW5mbyA9IGJvb2xlYW4gfCBzdHJpbmcgfCBbc3RyaW5nLCBib29sZWFuXTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1zIGNsYXNzIGNvbnRhaW5zIHByb3BlcnRpZXMgd2l0aCBuYW1lcyB1c2VkIHRvIGRlZmluZSBTVkcgZWxlbWVudHMgaW4gSlNYLiBXaGVuXHJcbi8vIHdlIG5lZWQgdG8gY3JlYXRlIGFuIGVsZW1lbnQsIHdlIGxvb2t1cCB0aGUgcHJvdmlkZWQgdGFnIG5hbWUgYW5kIGlmIHdlIGZpbmQgaXQgaW4gdGhpcyBjbGFzc1xyXG4vLyB3ZSB1c2UgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIHdpdGggdGhlIHByb3BlciBTVkcgbmFtZXNwYWNlIHN0cmluZy4gVmFsdWVzIG9mIHRoZXNlIHByb3BlcnRpZXNcclxuLy8gYXJlIFN2Z0VsbUluZm8gdmFsdWVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFN2Z0VsbXNcclxue1xyXG5cdC8vIE5hbWVzcGFjZSB1c2VkIHRvIGNyZWF0ZSBTVkcgZWxlbWVudHMuXHJcblx0cHVibGljIHN0YXRpYyBuYW1lc3BhY2U6IHN0cmluZyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuXHJcblxyXG5cclxuXHQvLyBSZWdpc3RlcnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIFNWRyB0YWdcclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyKCB0YWdOYW1lOiBzdHJpbmcsIGluZm86IFN2Z0VsbUluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0U3ZnRWxtcy5pbmZvc1t0YWdOYW1lXSA9IGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gdGFnIG5hbWUgY2FuIGJlIHVzZWQgYXMgYW4gU1ZHIGVsZW1lbnQgbmFtZS5cclxuXHRwdWJsaWMgc3RhdGljIGlzU3ZnRWxtKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRhZ05hbWUgaW4gU3ZnRWxtcy5pbmZvcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBpbmZvcm1hdGlvbiBvYmplY3QgZm9yIHRoZSBnaXZlbiB0YWcgbmFtZS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFN2Z0VsbUluZm8oIHRhZ05hbWU6IHN0cmluZyk6IFN2Z0VsbUluZm8gfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRyZXR1cm4gU3ZnRWxtcy5pbmZvc1t0YWdOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBpbmZvcm1hdGlvbiBvYmplY3QgaGFzIHRoZSBcImR1YWwtcHVycG9zZVwiIGZsYWcgc2V0LlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNEdWFsUHVycG9zZSggaW5mbzogU3ZnRWxtSW5mbyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAxID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzFdIDogZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIiA/IGZhbHNlIDogaW5mbyBhcyBib29sZWFuO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGlzIGEgXCJkdWFsLXB1cnBvc2VcIiBlbGVtZW50OyB0aGF0IGlzIGNhbiBiZSBlaXRoZXJcclxuXHQvLyBIVE1MIGFuZCBTVkcgZWxlbWVudC5cclxuXHRwdWJsaWMgc3RhdGljIGlzVGFnRHVhbFB1cnBvc2UoIHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU3ZnRWxtSW5mbyA9IFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0XHRyZXR1cm4gaW5mbyA/IFN2Z0VsbXMuaXNEdWFsUHVycG9zZSggaW5mbykgOiBmYWxzZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWN0dWFsIG5hbWUgdG8gYmUgdXNlZCBiYXNlZCBvbiB0aGUgaW5mb3JtYXRpb24gb2JqZWN0IGFuZCB0aGUgdGFnIG5hbWVcclxuXHRwdWJsaWMgc3RhdGljIGdldEVsbU5hbWUoIGluZm86IFN2Z0VsbUluZm8sIHRhZ05hbWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KCBpbmZvKSlcclxuXHRcdFx0cmV0dXJuIChpbmZvIGFzIEFycmF5PGFueT4pLmxlbmd0aCA+IDAgPyAoaW5mbyBhcyBbc3RyaW5nLCBib29sZWFuXSlbMF0gOiB0YWdOYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBpbmZvIGFzIHN0cmluZyA6IHRhZ05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgdGhlIGdpdmVuIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lRm9yVGFnKCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU3ZnRWxtSW5mbyA9IFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0XHRyZXR1cm4gaW5mbyA/IFN2Z0VsbXMuZ2V0RWxtTmFtZSggaW5mbywgdGFnTmFtZSkgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBtYXBzIFNWRyBlbGVtZW50IG5hbWVzIHRvIFN2Z0VsbUluZm8uXHJcblx0cHJpdmF0ZSBzdGF0aWMgaW5mb3M6IHtbZWxtTmFtZTpzdHJpbmddOiBTdmdFbG1JbmZvfSA9XHJcblx0e1xyXG5cdFx0c3ZnOiBmYWxzZSxcclxuXHJcblx0XHRhOiB0cnVlLFxyXG5cdFx0YW5pbWF0ZTogZmFsc2UsXHJcblx0XHRhbmltYXRlTW90aW9uOiBmYWxzZSxcclxuXHRcdGFuaW1hdGVUcmFuc2Zvcm06IGZhbHNlLFxyXG5cclxuXHRcdGNpcmNsZTogZmFsc2UsXHJcblx0XHRjbGlwUGF0aDogZmFsc2UsXHJcblx0XHRjb2xvclByb2ZpbGU6IFwiY29sb3ItcHJvZmlsZVwiLFxyXG5cclxuXHRcdGRlZnM6IGZhbHNlLFxyXG5cdFx0ZGVzYzogZmFsc2UsXHJcblx0XHRkaXNjYXJkOiBmYWxzZSxcclxuXHJcblx0XHRlbGxpcHNlOiBmYWxzZSxcclxuXHJcblx0XHRmZUJsZW5kOiBmYWxzZSxcclxuXHRcdGZlQ29sb3JNYXRyaXg6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb25lbnRUcmFuc2ZlcjogZmFsc2UsXHJcblx0XHRmZUNvbXBvc2l0ZTogZmFsc2UsXHJcblx0XHRmZUNvbnZvbHZlTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlRGlmZnVzZUxpZ2h0aW5nOiBmYWxzZSxcclxuXHRcdGZlRGlzcGxhY2VtZW50TWFwOiBmYWxzZSxcclxuXHRcdGZlRGlzdGFudExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlRHJvcFNoYWRvdzogZmFsc2UsXHJcblx0XHRmZUZsb29kOiBmYWxzZSxcclxuXHRcdGZlRnVuY0E6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jQjogZmFsc2UsXHJcblx0XHRmZUZ1bmNHOiBmYWxzZSxcclxuXHRcdGZlRnVuY1I6IGZhbHNlLFxyXG5cdFx0ZmVHYXVzc2lhbkJsdXI6IGZhbHNlLFxyXG5cdFx0ZmVJbWFnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlOiBmYWxzZSxcclxuXHRcdGZlTWVyZ2VOb2RlOiBmYWxzZSxcclxuXHRcdGZlTW9ycGhvbG9neTogZmFsc2UsXHJcblx0XHRmZU9mZnNldDogZmFsc2UsXHJcblx0XHRmZVBvaW50TGlnaHQ6IGZhbHNlLFxyXG5cdFx0ZmVTcGVjdWxhckxpZ2h0aW5nOiBmYWxzZSxcclxuXHRcdGZlU3BvdExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlVGlsZTogZmFsc2UsXHJcblx0XHRmZVR1cmJ1bGVuY2U6IGZhbHNlLFxyXG5cdFx0ZmlsdGVyOiBmYWxzZSxcclxuXHRcdGZvcmVpZ25PYmplY3Q6IGZhbHNlLFxyXG5cclxuXHRcdGc6IGZhbHNlLFxyXG5cclxuXHRcdGhhdGNoOiBmYWxzZSxcclxuXHRcdGhhdGNocGF0aDogZmFsc2UsXHJcblxyXG5cdFx0aW1hZ2U6IGZhbHNlLFxyXG5cclxuXHRcdGxpbmU6IGZhbHNlLFxyXG5cdFx0bGluZWFyR3JhZGllbnQ6IGZhbHNlLFxyXG5cclxuXHRcdG1hcmtlcjogZmFsc2UsXHJcblx0XHRtYXNrOiBmYWxzZSxcclxuXHRcdG1ldGFkYXRhOiBmYWxzZSxcclxuXHRcdG1wYXRoOiBmYWxzZSxcclxuXHJcblx0XHRwYXRoOiBmYWxzZSxcclxuXHRcdHBhdHRlcm46IGZhbHNlLFxyXG5cdFx0cG9seWdvbjogZmFsc2UsXHJcblx0XHRwb2x5bGluZTogZmFsc2UsXHJcblxyXG5cdFx0cmFkaWFsR3JhZGllbnQ6IGZhbHNlLFxyXG5cdFx0cmVjdDogZmFsc2UsXHJcblxyXG5cdFx0c2NyaXB0OiB0cnVlLFxyXG5cdFx0c2V0OiBmYWxzZSxcclxuXHRcdHNvbGlkY29sb3I6IGZhbHNlLFxyXG5cdFx0c3RvcDogZmFsc2UsXHJcblx0XHRzdHlsZTogdHJ1ZSxcclxuXHRcdHN3aXRjaDogZmFsc2UsXHJcblx0XHRzeW1ib2w6IGZhbHNlLFxyXG5cclxuXHRcdHRleHQ6IGZhbHNlLFxyXG5cdFx0dGV4dFBhdGg6IGZhbHNlLFxyXG5cdFx0dGl0bGU6IHRydWUsXHJcblx0XHR0ZXh0U3BhbjogZmFsc2UsXHJcblxyXG5cdFx0dXNlOiBmYWxzZSxcclxuXHJcblx0XHR2aWV3OiBmYWxzZSxcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgdGV4dCBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHRWTiBleHRlbmRzIFZOIGltcGxlbWVudHMgbWltLklUZXh0Vk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCB0ZXh0OiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIoIG1pbS5WTlR5cGUuVGV4dClcclxuXHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cclxuXHRcdC8vIG5vZGUgbmFtZSBpcyAjdGV4dFxyXG5cdFx0dGhpcy5uYW1lID0gXCIjdGV4dFwiO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHVibGljIGdldCBUZXh0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnRleHQ7IH1cclxuXHRwdWJsaWMgZ2V0IFRleHROb2RlKCk6IFRleHQgeyByZXR1cm4gdGhpcy5kbjsgfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5UZXh0OyB9XHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSB2aXJ0dWFsIG5vZGUncyBjb250ZW50IGludG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZG4gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdGhpcy50ZXh0KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBjb250ZW50IGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5kbiA9IHVuZGVmaW5lZDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIG9uZSB0ZXh0IG5vZGUgY2FuIGFsd2F5cyB1cGRhdGUgYW5vdGhlciB0ZXh0IG5vZGVcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyB0ZXh0IG5vZGVzIGRvbid0IGhhdmUgc3ViLW5vZGVzXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQ6IHRoaXMudGV4dCAhPT0gKG5ld1ZOIGFzIFRleHRWTikudGV4dCwgc2hvdWxkUmVuZGVyOiBmYWxzZSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnRleHQgPSAobmV3Vk4gYXMgVGV4dFZOKS50ZXh0O1xyXG5cdFx0dGhpcy5kbi5ub2RlVmFsdWUgPSB0aGlzLnRleHQ7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGdldE93bkROKCk6IEROXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZG47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRleHQgZm9yIGEgc2ltcGxlIHRleHQgbm9kZS5cclxuXHR0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8vIFRleHQgRE9NIG5vZGVcclxuXHRkbjogVGV4dDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4vbWltXCJcclxuaW1wb3J0IHtJRXZlbnRTbG90LCBFdmVudFNsb3R9IGZyb21cIi4vRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBDbGFzc2VzIGFic3RyYWN0IGNsYXNzIHByb3ZpZGVzIHVzZWZ1bCBzdGF0aWMgZnVuY3Rpb25zIGZvciB3b3JraW5nIHdpdGggY2xhc3MgcHJvcGVydGllcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbGFzc2VzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIGNsYXNzIHByb3BlcnRpZXMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcblx0Ly8gcmV0dXJucyBhIHN0cmluZyBvciB1bmRlZmluZWQgLSBpZiBhbGwgY2xhc3NOYW1lcyB3ZXJlIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgc3RhdGljIE1lcmdlQ2xhc3NlcyggLi4uY2xhc3NOYW1lczogKHN0cmluZyB8IHN0cmluZ1tdKVtdKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHJlc0NsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuXHRcdGZvciggbGV0IGNsYXNzTmFtZSBvZiBjbGFzc05hbWVzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIWNsYXNzTmFtZSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdC8vIHBhcnNlIHRoZSBjbGFzcyBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmdcclxuXHRcdFx0bGV0IGNsYXNzTmFtZUFzU3RyaW5nOiBzdHJpbmcgPSB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiXHJcblx0XHRcdFx0XHQ/IGNsYXNzTmFtZSBhcyBzdHJpbmdcclxuXHRcdFx0XHRcdDogQ2xhc3Nlcy5BcnJheVRvU3RyaW5nKCBjbGFzc05hbWUgYXMgc3RyaW5nW10pO1xyXG5cclxuXHRcdFx0aWYgKHJlc0NsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc0NsYXNzTmFtZSA9IFwiXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXNDbGFzc05hbWUgKz0gXCIgXCI7XHJcblxyXG5cdFx0XHRyZXNDbGFzc05hbWUgKz0gY2xhc3NOYW1lQXNTdHJpbmc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc0NsYXNzTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBjbGFzcyBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLlxyXG5cdHB1YmxpYyBzdGF0aWMgQXJyYXlUb1N0cmluZyggY2xhc3NOYW1lczogc3RyaW5nW10pOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gY2xhc3NOYW1lcy5qb2luKCBcIiBcIik7XHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN0eWxlcyBhYnN0cmFjdCBjbGFzcyBwcm92aWRlcyB1c2VmdWwgc3RhdGljIGZ1bmN0aW9ucyBmb3Igd29ya2luZyB3aXRoIHN0eWxlIHByb3BlcnRpZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcblx0Ly8gYWx3YXlzIHJldHVybnMgYW4gb2JqZWN0IC0gZXZlbiBpZiBlbXB0eVxyXG5cdHB1YmxpYyBzdGF0aWMgTWVyZ2VTdHlsZXMoIC4uLnN0eWxlczogbWltLlN0eWxlUHJvcFR5cGVbXSk6IG1pbS5TdHlsZVByb3BUeXBlXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGFuIGVtcHR5IG9iamVjdCBmb3IgYWNjdW11bGF0aW5nIHN0eWxlIHByb3BlcnRpZXNcclxuXHRcdGxldCByZXNTdHlsZTogbWltLlN0eWxlUHJvcFR5cGUgPSB7fTtcclxuXHRcdFN0eWxlcy5NZXJnZVN0eWxlc1RvKCByZXNTdHlsZSwgLi4uc3R5bGVzKTtcclxuXHRcdHJldHVybiByZXNTdHlsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZmlyc3Qgb25lLlxyXG5cdHB1YmxpYyBzdGF0aWMgTWVyZ2VTdHlsZXNUbyggcmVzU3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlLCAuLi5zdHlsZXM6IChtaW0uU3R5bGVQcm9wVHlwZSB8IHN0cmluZylbXSApOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3R5bGUgb2Ygc3R5bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXN0eWxlKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0Ly8gcGFyc2UgdGhlIHN0eWxlIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZ1xyXG5cdFx0XHRsZXQgc3R5bGVPYmo6IG1pbS5TdHlsZVByb3BUeXBlID0gdHlwZW9mIHN0eWxlID09PSBcIm9iamVjdFwiXHJcblx0XHRcdFx0XHQ/IHN0eWxlIGFzIG1pbS5TdHlsZVByb3BUeXBlXHJcblx0XHRcdFx0XHQ6IFN0eWxlcy5QYXJzZVN0eWxlU3RyaW5nKCBzdHlsZSBhcyBzdHJpbmcpO1xyXG5cclxuXHRcdFx0Ly8gY29weSBhbGwgcHJvcGVydGllcyBkZWZpbmVkIGluIHRlaCBjdXJyZW50IHN0eWxlIG9iamVjdCB0byBvdXIgcmVzdWx0YW50IG9iamVjdFx0XHRcdFxyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZU9iailcclxuXHRcdFx0XHRyZXNTdHlsZVtwcm9wTmFtZV0gPSBzdHlsZU9ialtwcm9wTmFtZV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy5cclxuXHRwdWJsaWMgc3RhdGljIFBhcnNlU3R5bGVTdHJpbmcoIHM6IHN0cmluZyk6IG1pbS5TdHlsZVByb3BUeXBlXHJcblx0e1xyXG5cdFx0aWYgKCFzKVxyXG5cdFx0XHRyZXR1cm4ge307XHJcblxyXG5cdFx0bGV0IHJldFN0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHt9O1xyXG5cclxuXHRcdGxldCBlbG1zOiBzdHJpbmdbXSA9IHMuc3BsaXQoXCI7XCIpO1xyXG5cdFx0Zm9yKCBsZXQgZWxtIG9mIGVsbXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwYWlyOiBzdHJpbmdbXSA9IGVsbS5zcGxpdCggXCI6XCIpO1xyXG5cdFx0XHRpZiAoIXBhaXIgfHwgcGFpci5sZW5ndGggPT09IDAgfHwgcGFpci5sZW5ndGggPiAyKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0cmV0U3R5bGVbU3R5bGVzLkRhc2hUb0NhbWVsKCBwYWlyWzBdLnRyaW0oKSldID0gcGFpclsxXS50cmltKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJldFN0eWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyBuYW1lcyB3aXRoIGRhc2hlcyBpbnRvIG5hbWVzIGluIGNhbWVsQ2FzZSwgd2hlcmUgZXZlcnkgY2hhcmFjdGVyIGFmdGVyIGEgZGFzaCBpc1xyXG5cdC8vIGNhcGl0YWxpemVkIGFuZCBkYXNoZXMgYXJlIHJlbW92ZWQuXHJcblx0cHVibGljIHN0YXRpYyBEYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCFkYXNoKVxyXG5cdFx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0XHRsZXQgY2FtZWw6IHN0cmluZztcclxuXHRcdGxldCBpbmRleDogbnVtYmVyID0gLTE7XHJcblx0XHRsZXQgbmV4dEluZGV4VG9Db3B5RnJvbTogbnVtYmVyID0gMDtcclxuXHRcdHdoaWxlKCAoaW5kZXggPSBkYXNoLmluZGV4T2YoIFwiLVwiLCBpbmRleCArIDEpKSA+PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoY2FtZWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRjYW1lbCA9IFwiXCI7XHJcblxyXG5cdFx0XHRjYW1lbCArPSBkYXNoLnN1YnN0ciggbmV4dEluZGV4VG9Db3B5RnJvbSwgaW5kZXggLSBuZXh0SW5kZXhUb0NvcHlGcm9tKTtcclxuXHRcdFx0aWYgKGluZGV4ICE9IGRhc2gubGVuZ3RoIC0gMSlcclxuXHRcdFx0XHRjYW1lbCArPSBkYXNoW2luZGV4ICsgMV0udG9VcHBlckNhc2UoKTtcclxuXHJcblx0XHRcdG5leHRJbmRleFRvQ29weUZyb20gPSBpbmRleCArIDI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNhbWVsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBkYXNoO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAobmV4dEluZGV4VG9Db3B5RnJvbSA8IGRhc2gubGVuZ3RoKVxyXG5cdFx0XHRcdGNhbWVsICs9IGRhc2guc3Vic3RyKCBuZXh0SW5kZXhUb0NvcHlGcm9tKTtcclxuXHJcblx0XHRcdHJldHVybiBjYW1lbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTbGljZSB0eXBlIGRlZmluZXMgYW4gb2JqZWN0IHN0cnVjdHVyZSBkZXNjcmliaW5nXHJcbi8vIHBhcmFtZXRlcnMgZm9yIHJlbmRlcmluZyBhbiBlbGVtZW50LiBUaGV5IGluY2x1ZGU6IENsYXNzLCBTdHlsZSwgUHJvcGVydGllcywgQ29udGVudC4gVGhpc1xyXG4vLyBzdHJ1Y3R1cmUgaXMgaW50ZW5kZWQgdG8gYmUgcGFzc2VkIGVpdGhlciBpbiB0aGUgY29uc3RydWN0b3Igb3IgdmlhIHRoZSBwcm90ZWN0ZWQgbWV0aG9kcyBvZlxyXG4vLyBkZXJpdmVkIGNsYXNzZXMsIHNvIHRoYXQgdGhleSBjYW4gY29udHJvbCBwYXJhbWV0ZXJzIG9mIGVsZW1lbnRzIHJlbmRlcmVkIGJ5IHRoZSB1cHBlciBjbGFzc2VzLlxyXG4vLyBUaGUgbWFpbiBwdXJwb3NlIG9mIHRoaXMgc3RydWN0dXJlIGlzIHRvIGNvbWJpbmUgcGFyYW1ldGVycyBkZWZpbmluZyBhbiBlbGVtZW50IGludG8gYSBzaW5nbGVcclxuLy8gb2JqZWN0IHRvIG1pbmltaXplIHRoZSBudW1iZXIgb2YgcHJvcGVydGllcyBjYWxsZXJzIG9mIGNsYXNzZXMgc2hvdWxkIGRlYWwgd2l0aC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFNsaWNlID1cclxue1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxuXHRzdHlsZT86IG1pbS5TdHlsZVByb3BUeXBlO1xyXG5cdHByb3BzPzogT2JqZWN0XHJcblx0Y29udGVudD86IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTbGljZXMgYWJzdHJhY3QgY2xhc3MgcHJvdmlkZXMgdXNlZnVsIHN0YXRpYyBmdW5jdGlvbnMgZm9yIHdvcmtpbmcgd2l0aCBTbGljZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2xpY2VzXHJcbntcclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuXHRwdWJsaWMgc3RhdGljIE1lcmdlU2xpY2VzKCAuLi5zbGljZXM6IFNsaWNlW10pOiBTbGljZVxyXG5cdHtcclxuXHRcdGxldCByZXNTbGljZTogU2xpY2UgPSB7fTtcclxuXHRcdFNsaWNlcy5NZXJnZVNsaWNlc1RvKCByZXNTbGljZSwgLi4uc2xpY2VzKTtcclxuXHRcdHJldHVybiByZXNTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuXHQvLyBpbnRvIHRoZSBnaXZlbiByZXN1bHRhbnQgc2xpY2UuXHJcblx0cHVibGljIHN0YXRpYyBNZXJnZVNsaWNlc1RvKCByZXNTbGljZTogU2xpY2UsIC4uLnNsaWNlczogU2xpY2VbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocmVzU2xpY2UgPT09IHVuZGVmaW5lZCB8fCByZXNTbGljZSA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGZvciggbGV0IHNsaWNlIG9mIHNsaWNlcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKCFzbGljZSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGlmIChzbGljZS5zdHlsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChyZXNTbGljZS5zdHlsZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmVzU2xpY2Uuc3R5bGUgPSB7fTtcclxuXHJcblx0XHRcdFx0U3R5bGVzLk1lcmdlU3R5bGVzVG8oIHJlc1NsaWNlLnN0eWxlLCBzbGljZS5zdHlsZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzbGljZS5jbGFzc05hbWUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAocmVzU2xpY2UuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBcIlwiO1xyXG5cclxuXHRcdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBDbGFzc2VzLk1lcmdlQ2xhc3NlcyggcmVzU2xpY2UuY2xhc3NOYW1lIGFzIHN0cmluZywgc2xpY2UuY2xhc3NOYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNsaWNlLnByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHJlc1NsaWNlLnByb3BzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXNTbGljZS5wcm9wcyA9IHt9O1xyXG5cclxuXHRcdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzbGljZS5wcm9wcylcclxuXHRcdFx0XHRcdHJlc1NsaWNlW3Byb3BOYW1lXSA9IHNsaWNlW3Byb3BOYW1lXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNsaWNlLmNvbnRlbnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAocmVzU2xpY2UuY29udGVudCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudCA9IHNsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSggcmVzU2xpY2UuY29udGVudCkpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxldCBvbGRDb250ZW50OiBhbnkgPSByZXNTbGljZS5jb250ZW50O1xyXG5cdFx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50ID0gW107XHJcblx0XHRcdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQucHVzaCggb2xkQ29udGVudCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudC5wdXNoKCBzbGljZS5jb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge1ZOQ2hhaW59IGZyb20gXCIuL1ZOQ2hhaW5cIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8gVXNlIHR5cGUgRE4gdG8gcmVmZXIgdG8gRE9NJ3MgTm9kZSBjbGFzcy4gVGhlIERPTSBub2RlcyB0aGF0IHdlIGFyZSBkZWFsaW5nIHdpdGggYXJlXHJcbi8vIGVpdGhlciBvZiB0eXBlIEVsZW1lbnQgb3IgVGV4dC5cclxuZXhwb3J0IHR5cGUgRE4gPSBOb2RlO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElWTkxpZmVDeWNsZSBpbnRlcmZhY2UgZGVmaW5lcyBsaWZlLWN5Y2xlIGFuZCBub3RpZmljYXRpb25zIG1ldGhvZnMgdGhhdCBhcmUgY2FsbGVkIGR1cmluZ1xyXG4vLyBtb3VudGluZywgdW5tb3VudGluZyBhbmQgdXBkYXRlcy4gVGhlIElWTkxpZmVDeWNsZSBpbnRlcmZhY2UgaXMgaW1wbGVtZW50ZWQgYnkgYWxsIHR5cGVzIG9mXHJcbi8vIHZpcnR1YWwgbm9kZXMuIEFsbCBtZXRob2RzIGluIHRoaXMgaW50ZXJmYWNlIGFyZSBvcHRpb25hbCBiZWNhdXNlIHRoZXkgbWlnaHQgbm90IGJlIG5lZWVkZWRcclxuLy8gZm9yIGFsbCB0eXBlcyBvZiBub2Rlcy5cclxuLy9cclxuLy8gTW91bnRpbmcgc2VxdWVuY2U6XHJcbi8vXHQtIGNvbnN0cnVjdG9yXHJcbi8vXHQtIHdpbGxNb3VudFxyXG4vL1x0LSByZW5kZXJcclxuLy9cdC0gbW91bnRcclxuLy9cdC0gZGlkTW91bnRcclxuLy9cclxuLy8gVW5tb3VudGluZyBzZXF1ZW5jZTpcclxuLy9cdC0gd2lsbFVubW91bnRcclxuLy9cdC0gdW5tb3VudFxyXG4vL1x0LSBkaWRVbm1vdW50XHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgdGhlIG5vZGUgaXRzZWxmOlxyXG4vL1x0LSByZW5kZXJcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgcGFyZW50OlxyXG4vL1x0LSB1cGRhdGVGcm9tXHJcbi8vXHQtIHJlbmRlciAob25seSBpZiB1cGRhdGVGcm9tIGluZGljYXRlZCB0aGF0IGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkKVxyXG4vL1x0LSBjb21taXRVcGRhdGUgKG9ubHkgaWYgdXBkYXRlRnJvbSBpbmRpY2F0ZWQgdGhhdCBjb21taXQgaXMgbmVjZXNzYXJ5KVxyXG4vL1x0LSBtb3ZlIChvbmx5IGlmIG5lY2Vzc2FyeSlcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuIFZpcnR1YWwgbm9kZXMgYXJlIGtlcHQgaW4gYVxyXG4vLyBkb3VibGx5LWxpbmtlZCBsaXN0IGFuZCBlYWNoIG5vZGUgcG9pbnRzIHRvIGEgcGFyZW50IG5vZGUgYXMgd2VsbCBhcyBmaXJzdCBhbmQgbGFzdCBzdWItbm9kZXMuXHJcbi8vXHJcbi8vIE1vdW50aW5nIHNlcXVlbmNlOlxyXG4vL1x0LSBjb25zdHJ1Y3RvclxyXG4vL1x0LSB3aWxsTW91bnRcclxuLy9cdC0gcmVuZGVyXHJcbi8vXHQtIG1vdW50XHJcbi8vXHQtIGRpZE1vdW50XHJcbi8vXHJcbi8vIFVubW91bnRpbmcgc2VxdWVuY2U6XHJcbi8vXHQtIHdpbGxVbm1vdW50XHJcbi8vXHQtIHVubW91bnRcclxuLy9cdC0gLy9kaWRVbm1vdW50XHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgdGhlIG5vZGUgaXRzZWxmOlxyXG4vL1x0LSByZW5kZXJcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vIFVwZGF0aW5nIHNlcXVlbmNlIHdoZW4gdXBkYXRlIHdhcyBjYXVzZWQgYnkgcGFyZW50OlxyXG4vL1x0LSB1cGRhdGVGcm9tXHJcbi8vXHQtIHJlbmRlciAob25seSBpZiB1cGRhdGVGcm9tIGluZGljYXRlZCB0aGF0IGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkKVxyXG4vL1x0LSBjb21taXRVcGRhdGUgKG9ubHkgaWYgdXBkYXRlRnJvbSBpbmRpY2F0ZWQgdGhhdCBjb21taXQgaXMgbmVjZXNzYXJ5KVxyXG4vL1x0LSBtb3ZlIChvbmx5IGlmIG5lY2Vzc2FyeSlcclxuLy9cdC0gZGlkVXBkYXRlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVk4gaW1wbGVtZW50cyBtaW0uSVZOb2RlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdHlwZTogbWltLlZOVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJVk5vZGUgaW1wbGVtZW50YXRpb25cclxuXHRwdWJsaWMgZ2V0IFR5cGUoKTogbWltLlZOVHlwZSB7IHJldHVybiB0aGlzLnR5cGU7IH1cclxuXHRwdWJsaWMgZ2V0IFBhcmVudCgpOiBtaW0uSVZOb2RlIHsgcmV0dXJuIHRoaXMucGFyZW50OyB9XHJcblx0cHVibGljIGdldCBOZXh0KCk6IG1pbS5JVk5vZGUgeyByZXR1cm4gdGhpcy5uZXh0OyB9XHJcblx0cHVibGljIGdldCBQcmV2KCk6IG1pbS5JVk5vZGUgeyByZXR1cm4gdGhpcy5wcmV2OyB9XHJcblx0cHVibGljIGdldCBTdWJOb2RlcygpOiBtaW0uSVZOQ2hhaW4geyByZXR1cm4gdGhpcy5zdWJOb2RlczsgfVxyXG5cdHB1YmxpYyBnZXQgRGlzcGxheU5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxyXG5cclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdGlhbGl6ZSggcGFyZW50OiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdGlmIChwYXJlbnQgPT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucm9vdCA9IHRoaXMgYXMgYW55IGFzIElSb290Vk47XHJcblx0XHRcdHRoaXMuZGVwdGggPSAwO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnJvb3QgPSBwYXJlbnQucm9vdDtcclxuXHRcdFx0dGhpcy5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDE7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHB1YmxpYyB0ZXJtaW5hdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHJlbW92ZSBpbmZvcm1hdGlvbiBhYm91dCBhbnkgcHVibGlzaGVkIGFuZCBzdWJzY3JpYmVkIHNlcnZpY2VzXHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmZvckVhY2goIChzZXJ2aWNlLCBpZCkgPT4gdGhpcy5yb290Lm5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpKTtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5mb3JFYWNoKCAoaW5mbywgaWQpID0+IHsgdGhpcy5yb290Lm5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKTsgfSk7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmNsZWFyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hbmNob3JETiA9IG51bGw7XHJcblx0XHR0aGlzLnN1Yk5vZGVzLmNsZWFyKCk7XHJcblx0XHR0aGlzLnJvb3QgPSBudWxsO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cdFx0dGhpcy5kZXB0aCA9IDA7XHJcblx0fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnk7XHJcbi8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyBjb250ZW50IHRoYXQgY29tcHJpemVzIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIGl0IGlzIGFzIHRob3VnaFxyXG5cdC8vIG51bGwgaXMgcmV0dXJuZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyByZW5kZXI/KCk6IGFueSB7fVxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQ/KCk6IHZvaWQge31cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGUgdmlydHVhbCBub2RlJ3MgY29udGVudCBpbnRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50PygpOiB2b2lkIHt9XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBoYXMgYmVlbiBpbnNlcnRlZFxyXG5cdC8vIGludG8gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgZGlkTW91bnQ/KCk6IHZvaWQge31cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudD8oKTogdm9pZCB7fVxyXG5cclxuXHQvLyBSZW1vdmVzIGNvbnRlbnQgZnJvbSB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50PygpOiB2b2lkIHt9XHJcblxyXG5cdC8vLy8gQ2xlYXJzIGludGVybmFsIHN0cnVjdHVyZXMgYWZ0ZXIgdGhlIERPTSBjb250ZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHRyZWUuXHJcblx0Ly8vLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0Ly9kaWRVbm1vdW50PygpOiB2b2lkIHt9XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGlzIG1ldGhvZCBpc1xyXG5cdC8vIE5PVCBtYXJrZWQgYXMgb3B0aW9uYWwgYW5kIHRodXMgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhbGwgdHlwZXMgb2YgdmlydHVhbCBub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZT8oIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcCB7IHJldHVybiB7IHNob3VsZENvbW1pdDogZmFsc2UsIHNob3VsZFJlbmRlcjogZmFsc2UgfTsgfVxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlPyggbmV3Vk46IFZOKTogdm9pZCB7fVxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaGFzIGJlZW4gdXBkYXRlZFxyXG5cdC8vIGluIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIGRpZFVwZGF0ZT8oKTogdm9pZCB7fVxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBzdXBwb3J0c0Vycm9ySGFuZGxpbmc/KCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuIEl0IHJldHVybnMgY29udGVudCBjb21wcmlzaW5nIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIGhhbmRsZUVycm9yPyggdm5FcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkIHt9XHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiAoaWYgYW55KSBhbmQgbm90IHRvIGFueSBvZiBpdHNcclxuXHQvLyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldE93bkROKCk6IEROIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBmaXJzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGNhbGxlZCBvbiB0aGUgbW91bnRlZCBub2Rlcy5cclxuXHRwdWJsaWMgZ2V0Rmlyc3RETigpOiBETlxyXG5cdHtcclxuXHRcdGxldCBkbjogRE4gPSB0aGlzLmdldE93bkROKCk7XHJcblx0XHRpZiAoZG4gIT09IG51bGwpXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHJcblx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgdW50aWwgYSB2YWxpZCBub2RlIGlzIHJldHVybmVkXHJcblx0XHRpZiAodGhpcy5zdWJOb2Rlcy5maXJzdCAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ZuOiBWTiA9IHRoaXMuc3ViTm9kZXMuZmlyc3Q7IHN2biAhPT0gbnVsbDsgc3ZuID0gc3ZuLm5leHQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkbiA9IHN2bi5nZXRGaXJzdEROKCk7XHJcblx0XHRcdFx0aWYgKGRuICE9PSBudWxsKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGRuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0byBzZXQgYSBkaXN0aW5ndWlzaGluZyBkaXNwbGF5IG5hbWUgaWRlbnRpZnlpbmcgdGhlIG9iamVjdFxyXG5cdC8vIHJlcHJlc2VudGVkIGJ5IHRoZSBub2RlIChlLmcuIGNvbXBvbmVudCBpbnN0YW5jZSkuXHJcblx0cHVibGljIHNldERpc3BsYXlOYW1lKCBuYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyByZXF1ZXN0VXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5yb290KVxyXG5cdFx0XHR0aGlzLnJvb3QucmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWxzIGEgcHJldmlvdXNseSByZXF1ZXN0ZWQgdXBkYXRlIGZvciB0aGlzIG5vZGUuXHJcblx0cHVibGljIGNhbmNlbFVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucm9vdClcclxuXHRcdFx0dGhpcy5yb290LmNhbmNlbE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcblx0Ly8gaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0cHVibGljIHNjaGVkdWxlQ2FsbCggZnVuYzogKCkgPT4gdm9pZCwgYmVmb3JlVXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucm9vdClcclxuXHRcdFx0dGhpcy5yb290LnNjaGVkdWxlRnVuY0NhbGwoIGZ1bmMsIGJlZm9yZVVwZGF0ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbmNlbHMgYSBjYWxsIHRoYXQgaGFzIGJlZW4gc2NoZWR1bGVkIHRvIGJlIG1hZGUgZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZFxyXG5cdC8vIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0cHVibGljIGNhbmNlbFNjaGVkdWxlZENhbGwoIGZ1bmM6ICgpID0+IHZvaWQsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnJvb3QpXHJcblx0XHRcdHRoaXMucm9vdC5jYW5jZWxTY2hlZHVsZWRGdW5jQ2FsbCggZnVuYywgYmVmb3JlVXBkYXRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGFuIG9iamVjdCBvZiBhbnkgdHlwZSBhcyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3JcclxuXHQvLyBjb25zdW1wdGlvbiBieSBkZXNjZW5kYW50IG5vZGVzLlxyXG5cdHB1YmxpYyBwdWJsaXNoU2VydmljZSggaWQ6IHN0cmluZywgc2VydmljZTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMgPSBuZXcgTWFwPHN0cmluZyxhbnk+KCk7XHJcblxyXG5cdFx0bGV0IGV4aXN0aW5TZXJ2aWNlOiBhbnkgPSB0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGV4aXN0aW5TZXJ2aWNlICE9PSBzZXJ2aWNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLnNldCggaWQsIHNlcnZpY2UpO1xyXG5cdFx0XHR0aGlzLnJvb3Qubm90aWZ5U2VydmljZVB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHVucHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZGVsZXRlKCBpZCk7XHJcblx0XHR0aGlzLnJvb3Qubm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZCwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3Vic2NyaWJlcyBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0Ly8gYnkgb25lIG9mIHRoZSBhbmNlc3RvciBub2RlcywgdGhlIHBhc3NlZCBSZWYgb2JqZWN0IHdpbGwgcmVmZXJlbmNlIGl0OyBvdGhlcndpc2UsXHJcblx0Ly8gdGhlIFJlZiBvYmplY3Qgd2lsbCBiZSBzZXQgdG8gdGhlIGRlZmF1bHRWYWx1ZSAoaWYgc3BlY2lmaWVkKSBvciB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXHJcblx0Ly8gV2hlbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3Igbm9kZSBpc1xyXG5cdC8vIGNoYW5nZWQsIHRoZSBSZWYgb2JqZWN0IHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHZhbHVlLlxyXG5cdHB1YmxpYyBzdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nLCByZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+LCBkZWZhdWx0U2VydmljZT86IGFueSwgdXNlU2VsZj86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsVk5TdWJzY3JpYmVkU2VydmljZUluZm8+KCk7XHJcblxyXG5cdFx0bGV0IGluZm8gPSBuZXcgVk5TdWJzY3JpYmVkU2VydmljZUluZm8oKTtcclxuXHRcdGluZm8ucmVmID0gcmVmO1xyXG5cdFx0aW5mby5kZWZhdWx0U2VydmljZSA9IGRlZmF1bHRTZXJ2aWNlO1xyXG5cdFx0aW5mby51c2VTZWxmID0gdXNlU2VsZiA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zZXQoIGlkLCBpbmZvKTtcclxuXHRcdHRoaXMucm9vdC5ub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cdFx0bWltLnNldFJlZiggcmVmLCB0aGlzLmdldFNlcnZpY2UoIGlkLCBkZWZhdWx0U2VydmljZSkpO1xyXG59XHJcblxyXG5cclxuXHJcblx0Ly8gVW5zdWJzY3JpYmVzIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBUaGUgUmVmIG9iamVjdCB0aGF0IHdhcyB1c2VkIHRvIHN1YnNjcmliZSxcclxuXHQvLyB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXHJcblx0cHVibGljIHVuc3Vic2NyaWJlU2VydmljZSggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBpbmZvID0gdGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bWltLnNldFJlZiggaW5mby5yZWYsIHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5kZWxldGUoIGlkKTtcclxuXHRcdHRoaXMucm9vdC5ub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkKCBpZCwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb3RpZmllcyB0aGUgbm9kZSB0aGF0IHB1YmxpY2F0aW9uIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBzZXJ2aWNlICh0byB3aGljaCB0aGUgbm9kZVxyXG5cdC8vIGhhcyBwcmV2aW91c2x5IHN1YnNjcmliZWQpIGhhcyBjaGFuZ2VkLlxyXG5cdHB1YmxpYyBub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBpbmZvID0gdGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bWltLnNldFJlZiggaW5mby5yZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGluZm8uZGVmYXVsdFNlcnZpY2UpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0Ly8gbm9kZSBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0Ly8gdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0cHVibGljIGdldFNlcnZpY2UoIGlkOiBzdHJpbmcsIGRlZmF1bHRTZXJ2aWNlPzogYW55LCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGxldCBzZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggaWQsIHVzZVNlbGYpO1xyXG5cdFx0cmV0dXJuIHNlcnZpY2UgIT09IHVuZGVmaW5lZCA/IHNlcnZpY2UgOiBkZWZhdWx0U2VydmljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyB1cCB0aGUgY2hhaW4gb2Ygbm9kZXMgbG9va2luZyBmb3IgYSBwdWJsaXNoZWQgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gUmV0dXJuc1xyXG5cdC8vIHVuZGVmaW5lZCBpZiB0aGUgc2VydmljZSBpcyBub3QgZm91bmQuIE5vdGUgdGhhdCBudWxsIG1pZ2h0IGJlIGEgdmFsaWQgdmFsdWUuXHJcblx0cHVibGljIGZpbmRTZXJ2aWNlKCBpZDogc3RyaW5nLCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGlmICh1c2VTZWxmKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHNlcnZpY2UgPSB0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0XHRcdGlmIChzZXJ2aWNlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gc2VydmljZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGdvIHVwIHRoZSBjaGFpbjsgbm90ZSB0aGF0IHdlIGRvbid0IHBhc3MgdGhlIHVzZVNlbGYgcGFyYW1ldGVyIG9uLlxyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ICE9PSBudWxsID8gdGhpcy5wYXJlbnQuZmluZFNlcnZpY2UoIGlkLCB0cnVlKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBGaW5kcyB0aGUgZmlyc3QgRE9NIG5vZGUgaW4gdGhlIHRyZWUgb2YgdmlydHVhbCBub2RlcyB0aGF0IGNvbWVzIGFmdGVyIG91ciBub2RlIHRoYXQgaXMgYVxyXG5cdC8vIGNoaWxkIG9mIG91ciBvd24gYW5jaG9yIGVsZW1lbnQuIFdlIHVzZSBpdCBhcyBhIG5vZGUgYmVmb3JlIHdoaWNoIHRvIGluc2VydC9tb3ZlIG5vZGVzIG9mXHJcblx0Ly8gb3VyIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuIFRoZSBhbGdvcml0aG0gZmlyc3QgZ29lcyB0byB0aGUgbmV4dFxyXG5cdC8vIHNpYmxpbmdzIG9mIG91ciBub2RlIGFuZCB0aGVuIHRvIHRoZSBuZXh0IHNpYmxpbmdzIG9mIG91ciBwYXJlbnQgbm9kZSByZWN1cnNpdmVseS4gSXQgc3RvcHNcclxuXHQvLyB3aGVuIHdlIGVpdGhlciBmaW5kIGEgRE9NIG5vZGUgKHRoZW4gaXQgaXMgcmV0dXJuZWQpIG9yIGZpbmQgYSBkaWZmZXJlbiBhbmNob3IgZWxlbWVudFxyXG5cdC8vICh0aGVuIG51bGwgaXMgcmV0dXJuZWQpLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSByZWNvbmNpbGlhdGlvbiBwcm9jZXNzIGZvciBvdXJcclxuXHQvLyBzdWItbm9kZXMgc3RhcnRzIGFuZCwgdGhlcmVmb3JlLCBpdCBvbmx5IHRyYXZlcnNlcyBtb3VudGVkIG5vZGVzLlxyXG5cdHB1YmxpYyBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggYW5jaG9yRE46IEROKTogRE5cclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB3ZSBoYXZlIHNpYmxpbmcgRE9NIG5vZGVzIGFmdGVyIG91ciBsYXN0IHN1Yi1ub2RlIC0gdGhhdCBtaWdodCBiZSBlbGVtZW50c1xyXG5cdFx0Ly8gbm90IGNvbnRyb2xsZWQgYnkgb3VyIGNvbXBvbmVudC5cclxuXHRcdGlmICh0aGlzLnN1Yk5vZGVzLmxhc3QgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGNvbnN0IGRuOiBETiA9IHRoaXMuc3ViTm9kZXMubGFzdC5nZXRGaXJzdEROKCk7XHJcblx0XHRcdGlmIChkbiAhPT0gbnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnN0IG5leHRTaWJsaW5nOiBETiA9IGRuLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRcdGlmIChuZXh0U2libGluZyAhPT0gbnVsbClcclxuXHRcdFx0XHRcdHJldHVybiBuZXh0U2libGluZztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBvdXIgbmV4dCBzaWJsaW5nc1xyXG5cdFx0Zm9yKCBsZXQgdm46IFZOID0gdGhpcy5uZXh0OyB2biAhPT0gbnVsbDsgdm4gPSB2bi5uZXh0KVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodm4uYW5jaG9yRE4gIT09IGFuY2hvckROKVxyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0Ly8gbm90ZSB0aGF0IGdldEZpcnN0RE4gY2FsbCB0cmF2ZXJzZXMgdGhlIGhpZXJhcmNoeSBvZiBub2Rlcy4gTm90ZSBhbHNvIHRoYXRcclxuXHRcdFx0Ly8gaXQgY2Fubm90IGZpbmQgYSBub2RlIHVuZGVyIGEgZGlmZmVyZW50IGFuY2hvciBlbGVtZW50IGJlY2F1c2UgdGhlIGZpcnN0IGRpZmZlcmVudFxyXG5cdFx0XHQvLyBhbmNob3IgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkIGFzIGEgd2FudGVkIG5vZGUuXHJcblx0XHRcdGNvbnN0IGRuOiBETiA9IHZuLmdldEZpcnN0RE4oKTtcclxuXHRcdFx0aWYgKGRuICE9PSBudWxsKVxyXG5cdFx0XHRcdHJldHVybiBkbjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZWN1cnNlIHRvIG91ciBwYXJlbnQgaWYgZXhpc3RzXHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgIT09IG51bGwgJiYgdGhpcy5wYXJlbnQuYW5jaG9yRE4gPT09IGFuY2hvckROXHJcblx0XHRcdFx0XHRcdD8gdGhpcy5wYXJlbnQuZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIGFuY2hvckROKSA6IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYXJyYXkgb2Ygbm9kZSBuYW1lcyBzdGFydGluZyB3aXRoIHRoaXMgbm9kZSBhbmQgdXAgdW50aWwgdGhlIHRvcC1sZXZlbCBub2RlLlxyXG5cdHB1YmxpYyBnZXQgcGF0aCgpOiBzdHJpbmdbXVxyXG5cdHtcclxuXHRcdGxldCBkZXB0aCA9IHRoaXMuZGVwdGg7XHJcblx0XHRsZXQgcGF0aCA9IEFycmF5PHN0cmluZz4oIGRlcHRoKTtcclxuXHRcdGZvciggbGV0IGkgPSAwLCB2bjogVk4gPSB0aGlzOyBpIDwgZGVwdGg7IGkrKywgdm4gPSB2bi5wYXJlbnQpXHJcblx0XHR7XHJcblx0XHRcdHBhdGhbaV0gPSB2bi5uYW1lO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXRoO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgaXMgbW91bnRlZC5cclxuXHRwdWJsaWMgZ2V0IElzTW91bnRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuYW5jaG9yRE4gIT09IG51bGw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbm9kZS5cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyB0eXBlLlxyXG5cdHB1YmxpYyB0eXBlOiBtaW0uVk5UeXBlO1xyXG5cclxuXHQvLyBQYXJlbnQgbm9kZS4gVGhpcyBpcyBudWxsIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy5cclxuXHRwdWJsaWMgcGFyZW50OiBWTjtcclxuXHJcblx0Ly8gUm9vdCBub2RlLlxyXG5cdHB1YmxpYyByb290OiBJUm9vdFZOO1xyXG5cclxuXHQvLyBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS5cclxuXHRwdWJsaWMgZGVwdGg6IG51bWJlcjtcclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZFxyXG5cdC8vIGVycm9yIHJlcG9ydGluZy4gVGhlIG5hbWUgbXVzdCBiZSBhdmFpbGFibGUgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaXMgY29uc3RydWN0ZWQgLSB3aGljaFxyXG5cdC8vIG1lYW5zIGJlZm9yZSB0aGUgY3JlYXRlIG1ldGhvZCBpcyBjYWxsZWQuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGVcclxuXHQvLyB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLCBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOZXh0IG5vZGUgaW4gdGhlIGNoYWluIG9mIHNpYmxpbmcgbm9kZXMgb3IgbnVsbCBpZiB0aGlzIGlzIHRoZSBsYXN0IG9uZS5cclxuXHRwdWJsaWMgbmV4dDogVk4gPSBudWxsO1xyXG5cclxuXHQvLyBQcmV2aW91cyBub2RlIGluIHRoZSBjaGFpbiBvZiBzaWJsaW5nIG5vZGVzIG9yIG51bGwgaWYgdGhpcyBpcyB0aGUgZmlyc3Qgb25lLlxyXG5cdHB1YmxpYyBwcmV2OiBWTiA9IG51bGw7XHJcblxyXG5cdC8vIENoYWluIG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3ViTm9kZXMgPSBuZXcgVk5DaGFpbigpO1xyXG5cclxuXHQvLyBET00gbm9kZSB1bmRlciB3aGljaCBhbGwgY29udGVudCBvZiB0aGlzIHZpcnR1YWwgbm9kZSBpcyByZW5kZXJlZC5cclxuXHRwdWJsaWMgYW5jaG9yRE46IEROID0gbnVsbDtcclxuXHJcblx0Ly8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIHNlcnZpY2Ugb2JqZWN0cyBwdWJsaXNoZWQgYnkgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgcHVibGlzaGVkU2VydmljZXM6IE1hcDxzdHJpbmcsYW55PjtcclxuXHJcblx0Ly8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIG9iamVjdHMgY29uc3RpdHV0aW5nIHN1YnNjcmlwdGlvbnMgbWFkZSBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBzdWJzY3JpYmVkU2VydmljZXM6IE1hcDxzdHJpbmcsVk5TdWJzY3JpYmVkU2VydmljZUluZm8+O1xyXG5cclxuXHQvLyBcIlRpY2sgbnVtYmVyXCIgZHVyaW5nIHdoaWNoIHRoZSBub2RlIHdhcyBsYXN0IHVwZGF0ZWQuIElmIHRoaXMgbm9kZSdzIHRpY2sgbnVtYmVyIGVxdWFsc1xyXG5cdC8vIHRoZSBjdXJyZW50IHRpY2sgbnVtYmVyIG1haW50YWluZWQgYnkgdGhlIHJvb3Qgbm9kZSwgdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgd2FzXHJcblx0Ly8gYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgdXBkYXRlIGN5Y2xlLiBUaGlzIGhlbHBzIHByZXZlbnQgdGhlIGRvdWJsZS1yZW5kZXJpbmcgb2YgYVxyXG5cdC8vIGNvbXBvbmVudCBpZiBib3RoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcblx0cHVibGljIGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTlVwZGF0ZURpc3AgdHlwZSBkZXNjcmliZXMgd2hldGhlciBjZXJ0YWluIGFjdGlvbnMgc2hvdWxkIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZVxyXG4vLyBkdXJpbmcgdXBkYXRlLiBUaGlzIG9iamVjdCBpcyByZXR1cm5lZCBmcm9tIHRoZSBub2RlJ3MgdXBkYXRlRnJvbSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBWTlVwZGF0ZURpc3AgPVxyXG57XHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgbm9kZSBoYXMgY2hhbmdlcyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBET00gdHJlZS4gSWYgdGhpc1xyXG5cdC8vIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCB3aWxsIGJlIGNsbGVkIG9uIHRoZSBub2RlIGR1cmluZyB0aGUgQ29tbWl0XHJcblx0Ly8gcGhhc2UuXHJcblx0c2hvdWxkQ29tbWl0OiBib29sZWFuO1xyXG5cclxuXHQvLyBGYWxnIGluZGljYXRuZyB3aGV0aGVyIHRoZSBzdWItbm9kZXMgc2hvdWxkIGJlIHVwZGF0ZWQuIElmIHRoaXMgZmxhZyBpcyB0cnVlLCB0aGVuIHRoZVxyXG5cdC8vIG5vZGUncyByZW5kZXIgbWV0aG9kIHdpbGwgYmUgaW1tZWRpYXRlbHkgY2FsbGVkLlxyXG5cdHNob3VsZFJlbmRlcjogYm9vbGVhbjtcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbyBjbGFzcyBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIHN1YnNjcmlwdGlvbiBvZiBhIG5vZGUgdG8gYSBzZXJ2aWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgVk5TdWJzY3JpYmVkU2VydmljZUluZm9cclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgZmlsbGVkIGluIHdpdGggdGhlIHNlcnZpY2UgdmFsdWVcclxuXHRyZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBEZWZhdWx0IHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgdXNlZCBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyBwdWJsaXNoZXMgdGhlXHJcblx0Ly8gc2VydmljZVxyXG5cdGRlZmF1bHRTZXJ2aWNlOiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGEgbm9kZSBjYW4gc3Vic2NyaWJlIHRvIGEgc2VydmljZSB0aGF0IGl0IGltcGxlbWVudHMgaXRzZWxmLiBUaGlzXHJcblx0Ly8gaXMgdXNlZnVsIGluIGNhc2Ugd2hlcmUgYSBzZXJ2aWNlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgYSBjb21wb25lbnQgY2FuIGNoYWluIHRvIGEgc2VydmljZVxyXG5cdC8vIGltcGxlbWVudGVkIGJ5IGFuIGFuY2VzdG9yIGNvbXBvbmVudC5cclxuXHR1c2VTZWxmOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVJvb3RWTiBpbnRlcmZhY2UgcmVwcmVzZW50IHRoZSBmdW5jdGlvbmFsaXR5IG9mIHRoZSBSb290IHZpcnR1YWwgbm9kZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvb3RWTlxyXG57XHJcblx0Ly8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgcHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5cdG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHVucHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5cdG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyBzdWJzY3JpYmVkIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyB1bnN1YnNjcmliZWQgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0bm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhlIGdpdmVuIG5vZGUuXHJcblx0cmVxdWVzdE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIENhbmNlbHMgYSBwcmV2aW91c2x5IHJlcXVlc3RlZCB1cGRhdGUgZm9yIHRoZSBnaXZlbiBub2RlLlxyXG5cdGNhbmNlbE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHNcclxuXHQvLyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jOiAoKSA9PiB2b2lkLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvLyBDYW5jZWxzIGEgY2FsbCB0aGF0IGhhcyBiZWVuIHNjaGVkdWxlZCB0byBiZSBtYWRlIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWRcclxuXHQvLyBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdGNhbmNlbFNjaGVkdWxlZEZ1bmNDYWxsKCBmdW5jOiAoKSA9PiB2b2lkLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi9taW1cIlxyXG5pbXBvcnQge1ZOfSBmcm9tIFwiLi9WTlwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5DaGFpbiBjbGFzcyByZXByZXNlbnRzIGEgZG91YmxseS1saW5rZWQgbGlzdCBvZiB2aXJ0dWFsIG5vZGVzLiBJdCByZWZlcmVuY2VzIHRoZSBmaXJzdFxyXG4vLyBhbmQgbGFzdCBzdWItbm9kZXMgYW5kIHByb3ZpZGVzIHNvbWUgY29udmVuaWVuY2UgbWV0aG9kcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBWTkNoYWluIGltcGxlbWVudHMgbWltLklWTkNoYWluXHJcbntcclxuXHRjb25zdHJ1Y3Rvciggdm4/OiBWTilcclxuXHR7XHJcblx0XHRpZiAodm4gIT09IHVuZGVmaW5lZCAmJiB2biAhPSBudWxsKVxyXG5cdFx0XHR0aGlzLmFwcGVuZFZOKCB2bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElWTkNoYWluIGltcGxlbWVudGF0aW9uXHJcblx0cHVibGljIGdldCBGaXJzdCgpOiBtaW0uSVZOb2RlIHsgcmV0dXJuIHRoaXMuZmlyc3Q7IH1cclxuXHRwdWJsaWMgZ2V0IExhc3QoKTogbWltLklWTm9kZSB7IHJldHVybiB0aGlzLmxhc3Q7IH1cclxuXHRwdWJsaWMgZ2V0IENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmNvdW50OyB9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbm9kZXMgZnJvbSB0aGUgY2hhaW4uXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmZpcnN0ID0gdGhpcy5sYXN0ID0gbnVsbDtcclxuXHRcdHRoaXMuY291bnQgPSAwO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGEgbmV3IG5vZGUgdG8gdGhlIGVuZCBvZiB0aGUgY2hhaW4uXHJcblx0cHVibGljIGFwcGVuZFZOKCB2bjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHZuID09PSBudWxsKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dm4ucHJldiA9IHRoaXMubGFzdDtcclxuXHRcdGlmICh0aGlzLmZpcnN0ID09PSBudWxsKVxyXG5cdFx0XHR0aGlzLmZpcnN0ID0gdGhpcy5sYXN0ID0gdm47XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGFzdC5uZXh0ID0gdm47XHJcblx0XHRcdHRoaXMubGFzdCA9IHZuO1xyXG5cdFx0fVxyXG5cdFx0dm4ubmV4dCA9IG51bGxcclxuXHRcdHRoaXMuY291bnQrKztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBhbGwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gY2hhaW4gdG8gdGhlIGVuZCBvZiBvdXIgY2hhaW4uXHJcblx0cHVibGljIGFwcGVuZENoYWluKCBjaGFpbjogVk5DaGFpbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoY2hhaW4gPT09IG51bGwgfHwgY2hhaW4uZmlyc3QgPT09IG51bGwpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRjaGFpbi5maXJzdC5wcmV2ID0gdGhpcy5sYXN0O1xyXG5cdFx0aWYgKHRoaXMuZmlyc3QgPT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZmlyc3QgPSBjaGFpbi5maXJzdDtcclxuXHRcdFx0dGhpcy5sYXN0ID0gY2hhaW4ubGFzdDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5sYXN0Lm5leHQgPSBjaGFpbi5maXJzdDtcclxuXHRcdFx0dGhpcy5sYXN0ID0gY2hhaW4ubGFzdDtcclxuXHRcdH1cclxuXHRcdGNoYWluLmxhc3QubmV4dCA9IG51bGw7XHJcblx0XHR0aGlzLmNvdW50ICs9IGNoYWluLmNvdW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGEgbmV3IG5vZGUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBjaGFpbi5cclxuXHRwdWJsaWMgaW5zZXJ0Vk4oIHZuOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodm4gPT09IG51bGwpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR2bi5uZXh0ID0gdGhpcy5maXJzdDtcclxuXHRcdGlmICh0aGlzLmZpcnN0ID09PSBudWxsKVxyXG5cdFx0XHR0aGlzLmZpcnN0ID0gdGhpcy5sYXN0ID0gdm47XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZmlyc3QucHJldiA9IHZuO1xyXG5cdFx0XHR0aGlzLmZpcnN0ID0gdm47XHJcblx0XHR9XHJcblx0XHR2bi5wcmV2ID0gbnVsbFxyXG5cdFx0dGhpcy5jb3VudCsrO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXBsYWNlcyB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoZSBub2RlcyBmcm9tIHRoZSBnaXZlbiBjaGFpbi5cclxuXHRwdWJsaWMgcmVwbGFjZVZOV2l0aENoYWluKCB2bjogVk4sIGNoYWluOiBWTkNoYWluKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh2biA9PT0gbnVsbCB8fCBjaGFpbiA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBwcmV2OiBWTiA9IHZuLnByZXY7XHJcblx0XHRsZXQgbmV4dDogVk4gPSB2bi5uZXh0O1xyXG5cdFx0aWYgKHRoaXMuZmlyc3QgPT09IHZuKVxyXG5cdFx0XHR0aGlzLmZpcnN0ID0gY2hhaW4uZmlyc3Q7XHJcblx0XHRpZiAodGhpcy5sYXN0ID09PSB2bilcclxuXHRcdFx0dGhpcy5sYXN0ID0gY2hhaW4ubGFzdDtcclxuXHRcdGlmIChwcmV2ICE9PSBudWxsKVxyXG5cdFx0XHRwcmV2Lm5leHQgPSBjaGFpbi5maXJzdDtcclxuXHRcdGlmIChuZXh0ICE9IG51bGwpXHJcblx0XHRcdG5leHQucHJldiA9IGNoYWluLmxhc3Q7XHJcblxyXG5cdFx0dGhpcy5jb3VudCArPSBjaGFpbi5jb3VudCAtIDE7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvLyBEZWxldGVzIHRoZSBnaXZlbiBub2RlIGZyb20gdGhlIGNoYWluLlxyXG5cdHB1YmxpYyBkZWxldGVWTiggdm46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh2biA9PT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBwcmV2OiBWTiA9IHZuLnByZXY7XHJcblx0XHRsZXQgbmV4dDogVk4gPSB2bi5uZXh0O1xyXG5cdFx0aWYgKHRoaXMuZmlyc3QgPT09IHZuKVxyXG5cdFx0XHR0aGlzLmZpcnN0ID0gbmV4dDtcclxuXHRcdGlmICh0aGlzLmxhc3QgPT09IHZuKVxyXG5cdFx0XHR0aGlzLmxhc3QgPSBwcmV2O1xyXG5cdFx0aWYgKHByZXYgIT09IG51bGwpXHJcblx0XHRcdHByZXYubmV4dCA9IG5leHQ7XHJcblx0XHRpZiAobmV4dCAhPSBudWxsKVxyXG5cdFx0XHRuZXh0LnByZXYgPSBwcmV2O1xyXG5cclxuXHRcdHRoaXMuY291bnQtLTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmlyc3Qgbm9kZSBpbiB0aGUgY2hhaW4gb2Ygc3ViLW5vZGVzLiBOdWxsIGZvciBlbXB0eSBjaGFpbnMuXHJcblx0cHVibGljIGZpcnN0OiBWTiA9IG51bGw7XHJcblxyXG5cdC8vIExhc3Qgbm9kZSBpbiB0aGUgY2hhaW4gb2Ygc3ViLW5vZGVzLiBOdWxsIGZvciBlbXB0eSBjaGFpbnMuXHJcblx0cHVibGljIGxhc3Q6IFZOID0gbnVsbDtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBjaGFpbi5cclxuXHRwdWJsaWMgY291bnQ6IG51bWJlciA9IDA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJRXZlbnRTbG90LCBFdmVudFNsb3R9IGZyb20gXCIuL0V2ZW50U2xvdFwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHVzZWQgdG8gZGVmaW5lIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgZnVuY3Rpb25hbCBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbmFsIGNvbXBvbmVudFxyXG4gKlx0XHR3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGZ1bmN0aW9uYWwgY29tcG9uZW50IHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZ1bmNQcm9wczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IFJlYWRvbmx5PFRQcm9wcz4gJlxyXG5cdHtcclxuXHRcdHJlYWRvbmx5IGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGZ1bmN0aW9ucyByZXByZXNlbnRpbmcgZnVuY3Rpb25hbCBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50LlxyXG4gKlx0XHREZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGdW5jQ29tcFR5cGU8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSAocHJvcHM6IEZ1bmNQcm9wczxUUHJvcHMsVENoaWxkcmVuPikgPT4gYW55O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIHRvIGRlZmluZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxyXG4gKlx0XHR3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCB3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wUHJvcHM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSBSZWFkb25seTxUUHJvcHM+ICZcclxuXHR7XHJcblx0XHRyZWFkb25seSBjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgZGVmaW5lcyBjb25zdHVjdG9yIHNpZ25hdHVyZSBmb3IgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxyXG4gKlx0XHRvZiB0aGlzIHR5cGUuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCBvZiB0aGlzIHR5cGUuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDbGFzczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG57XHJcblx0bmV3KCBwcm9wczogVFByb3BzKTogSUNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhbGwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdC8qKiBDb21wb25lbnQgcHJvcGVydGllcyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yICovXHJcblx0cHJvcHM6IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyBvciBjbGVhcnMgdGhlIHNpdGUgb2JqZWN0IHRvIHRoZSBjb21wb25lbnQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0d2ljZTpcclxuXHQgKlx0MSkgQmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lOiB0aGUgY29tcG9uZW50IG11c3QgcmVtZW1iZXIgdGhlXHJcblx0ICpcdFx0cGFzc2VkIG9iamVjdC5cclxuXHQgKlx0MikgQmVmb3JlIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkOiBudWxsIGlzIHBhc3NlZCBhcyBhIHBhcmFtZXRlciBhbmQgdGhlIGNvbXBvbmVudCBtdXN0XHJcblx0ICpcdFx0cmVsZWFzZSB0aGUgcmVtZW1iZXJlZCBvYmplY3QuXHJcblx0ICogQHBhcmFtIHNpdGUgVGhlIHNpdGUgb2JqZWN0IGltcGxlbWVudGluZyB0aGUgSUNvbXBvbmVudFNpdGUgaW50ZXJmYWNlLiBUaGUgY29tcG9uZW50IHVzZXNcclxuXHQgKiB0aGlzIG9iamVjdCB0byBpbnZva2UgZGlmZmVyZW50IHNlcnZpY2VzIHByb3ZpZGVkIGJ5IHRoZSBNaW1ibCBpbmZyYXN0cnVjdHVyZTsgZm9yIGV4YW1wbGVcclxuXHQgKiB0byByZXF1ZXN0IGEgcmUtcmVuZGVyaW5nLlxyXG5cdCAqL1xyXG5cdHNldFNpdGUoIHNpdGU6IElDb21wb25lbnRTaXRlKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHJlbmRlciBpdHMgY29udGVudCBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMgbWV0aG9kXHJcblx0ICogaXMgY2FsbGVkIHdoZW4gdGhlIHNpdGUgaGFzIGFscmVhZHkgYmVlbiBzZXQgc28gdGhlIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlcyBmcm9tIGl0LlxyXG5cdCAqL1xyXG5cdGNvbXBvbmVudFdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgaGFzIGJlZW4gaW5zZXJ0ZWQgaW50byB0aGUgRE9NIHRyZWUuIFRoaXMgbWV0aG9kIGlzXHJcblx0ICogY2FsbGVkIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gaW5zdGFudGlhdGVkIGFuZCB0aGUgaW5pdGlhbCByZW5kZXJpbmcgaGFzIGJlZW4gZG9uZS5cclxuXHQgKi9cclxuXHRjb21wb25lbnREaWRNb3VudD8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogSW5mb3JtcyB0aGUgY29tcG9uZW50IHRoYXQgbmV3IHByb3BlcnRpZXMgaGF2ZSBiZWVuIHNwZWNpZmllZC4gQXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcclxuXHQgKiB0aGlzLnByb3BzIHJlZmVycyB0byB0aGUgXCJvbGRcIiBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnMgdHJ1ZSx0aGVuIGl0cyByZW5kZXJcclxuXHQgKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQuIEF0IHRoYXQgdGltZSx0aGUgb3JpZ2luYWwgcHJvcHMgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBpbnRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIHdpbGwgaGF2ZSB0aGVzZSBuZXcgcHJvcGVydGllcy4gSWYgdGhlIGNvbXBvbmVudCBkb2Vzbid0IGltcGxlbWVudFxyXG5cdCAqIHRoZSBzaG91bGRDb21wb25lbnRVcGRhdGUgbWV0aG9kIGl0IGlzIGFzIHRob3VnaCB0cnVlIGlzIHJldHVybmVkLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnNcclxuXHQgKiBmYWxzZSwgdGhlIHJlbmRlciBtZXRob2QgaXMgbm90IGNhbGxlZCBhbmQgdGhlIERPTSB0cmVlIG9mIHRoZSBjb21wb25lbnQgcmVtYWlucyB1bmNoYW5nZWQuXHJcblx0ICogVGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudCwgaG93ZXZlciwgc3RpbGwgY2hhbmdlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wcyBUaGUgbmV3IHByb3BlcnRpZXMgdGhhdCB0aGUgcGFyZW50IGNvbXBvbmVudCBwcm92aWRlcyB0byB0aGlzIGNvbXBvbmVudC5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIGhhdmUgaXRzIHJlbmRlciBtZXRob2QgY2FsbGVkIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0c2hvdWxkQ29tcG9uZW50VXBkYXRlPyggbmV3UHJvcHM6IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPik6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQncyBjb250ZW50IGhhcyBiZWVuIHVwZGF0ZWQgaW4gdGhlIERPTSB0cmVlLiAqL1xyXG5cdGNvbXBvbmVudERpZFVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50J3MgY29udGVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLiBBZnRlclxyXG5cdCAqIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXHJcblx0ICovXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgYW4gZXhjZXB0aW9uIHRoYXQgb2NjdXJyZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZyBvZlxyXG5cdCAqIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvciBpZiBpdCB0aHJvd3MgYW4gZXJyb3IsIHRoZVxyXG5cdCAqIGVycm9yIHdpbGwgYmUgcHJvcGFnYXRlZCB1cCB0aGUgY2hhaW4gb2YgY29tcG9uZW50cyB1bnRpbCBpdCByZWFjaGVzIGEgY29tcG9uZW50IHRoYXRcclxuXHQgKiBoYW5kbGVzIGl0LiBJZiBub25lIG9mIHRoZSBjb21wb25lbnRzIGNhbiBoYW5kbGUgdGhlIGVycm9yLCB0aGUgZW50aXJlIHRyZWUgd2lsbCBiZVxyXG5cdCAqIHVubW91bnRlZC5cclxuXHQgKiBAcGFyYW0gZXJyIEFuIGV4Y2VwdGlvbiB0aGF0IHdhcyB0aHJvd24gZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZ1xyXG5cdCAqIG9mIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuXHJcblx0ICogQHBhcmFtIHBhdGggQW4gYXJyYXkgb2YgbmFtZXMgb2YgY29tcG9uZW50cyBhbmQgZWxlbWVudHMgZnJvbSB0aGUgbW91bnRlZCByb290IHRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCB0aGF0IHRocmV3IHRoZSBleGNlcHRpb24uIFRoaXMgcGF0aCBpcyBwcm92aWRlZCBtb3N0bHkgZm9yIGRlYnVnZ2luZyBhbmQgdHJhY2luZ1xyXG5cdCAqIHB1cnBvc2VzLlxyXG5cdCAqL1xyXG5cdGhhbmRsZUVycm9yPyggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSB1cGRhdGUgY3ljbGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTY2hlZHVsZWRGdW5jVHlwZSA9ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbXBvbmVudFNpdGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjb25uZWN0aW9uIG9mIGEgY29tcG9uZW50IHRvIHRoZSByZW5kZXJpbmcgbWVjaGFuaXNtLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCB1cG9uIGluaXRpYWxpemF0aW9uIGFuZCB0aGUgY29tcG9uZW50IGNhbGxzIGl0c1xyXG4gKiBtZXRob2RzIHRvIGdldCBzZXJ2aWNlcywgZS5nLiB0byByZXF1ZXN0IGJlaW5nIHVwZGF0ZWQgb3IgdG8gc3Vic2NyaWJlIHRvIGEgc2VydmljZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudFNpdGVcclxue1xyXG5cdC8qKiBUaGUgY29tcG9uZW50IGNhbiBjYWxsIHRoaXMgbWV0aG9kIHRvIHNldCBhIGRpc3Rpbmd1aXNoaW5nIGRpc3BsYXkgbmFtZSBpZGVudGlmeWluZyB0aGVcclxuXHQgKiBjb21wb25lbnQgaW5zdGFuY2UuIEJ5IGRlZmF1bHQsIGRpc3BsYXkgbmFtZSBpcyBzZXQgdXNpbmcgdGhlIGNvbXBvbmVudCdzIGNsYXNzIG5hbWUgYW5kXHJcblx0ICoga2V5IChpZiBzcGVjaWZpZWQpLiBVcG9uIEphdmFTY3JpcHQgbWluaWZpY2F0aW9uLCBjbGFzcyBuYW1lcyBjYW4gYmVjb21lIG1lYW5pbmdsZXNzIGFuZFxyXG5cdCAqIGNvbXBvbmVudHMgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBzZXQgYSBuYW1lIHdpdGggc29tZSBtZWFuaW5nLiBEaXNwbGF5IG5hbWUgaXMgdXNlZCBmb3JcclxuXHQgKiB0cmFjaW5nIGFuZCBkZWJ1Z2dpbmcgb25seS5cclxuXHQgKiBAcGFyYW0gbmFtZSBEaXNwbGF5IG5hbWUgdG8gdXNlIGZvciB0aGlzIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRzZXREaXNwbGF5TmFtZSggbmFtZTogc3RyaW5nKTogdm9pZDtcclxuXHJcblx0LyoqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHdoZW4gaXQgbmVlZHMgdG8gYmUgdXBkYXRlZC4gKi9cclxuXHRyZXF1ZXN0VXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB3aGVuIGl0IGRlY2lkZXMgdG8gY2FuY2VsIGEgcHJldmlvdXNseSByZXF1ZXN0ZWRcclxuXHQgKiB1cGRhdGUgcmVxdWVzdC5cclxuXHQgKi9cclxuXHRjYW5jZWxVcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHNcclxuXHQgKiBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgdXBkYXRlIGN5Y2xlLlxyXG5cdCAqIEBwYXJhbSBiZWZvcmVVcGRhdGUgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlICh0cnVlKVxyXG5cdCAqIG9yIGFmdGVyIChmYWxzZSkgdGhlIHVwZGF0ZSBjeWNsZS5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGwoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKiogQ2FuY2VscyBhIGNhbGwgdGhhdCBoYXMgYmVlbiBzY2hlZHVsZWQgdG8gYmUgbWFkZSBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkXHJcblx0ICogY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0aGF0IHdhcyBwcmV2aW91c2x5IHBhc3NlZCB0byB0aGUgc2NoZWR1bGVDYWxsIG1ldGhvZC5cclxuXHQgKiBAcGFyYW0gYmVmb3JlVXBkYXRlIEZsYWcgdGhhdCB3YXMgcGFzc2VkIHRvIHRoZSBzY2hlZHVsZUNhbGwgbWV0aG9kLlxyXG5cdCAqL1xyXG5cdGNhbmNlbFNjaGVkdWxlZENhbGwoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKiogUmVnaXN0ZXJzIGFuIG9iamVjdCBvZiBhbnkgdHlwZSBhcyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3JcclxuXHQgKiBjb25zdW1wdGlvbiBieSBkZXNjZW5kYW50IGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0cHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgc2VydmljZTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSk6IHZvaWQ7XHJcblxyXG5cdC8qKiBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuICovXHJcblx0dW5wdWJsaXNoU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZDtcclxuXHJcblx0LyoqIFN1YnNjcmliZXMgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0ICogYnkgdGhpcyBvciBvbmUgb2YgdGhlIGFuY2VzdG9yIGNvbXBvbmVudHMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDtcclxuXHQgKiBvdGhlcndpc2UsIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW5cclxuXHQgKiB1bmRlZmluZWQuIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgdGhpcyBvciBhIGNsb3Nlc3RcclxuXHQgKiBhbmNlc3RvciBjb21wb25lbnQgaXMgY2hhbmdlZCx0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHQgKiBUaGUgdXNlU2VsZiBvcHRpb25hbCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjb21wb25lbnQgY2FuIHN1YnNjcmliZSB0byB0aGVcclxuXHQgKiBzZXJ2aWNlIHB1Ymxpc2hlZCBieSBpdHNlbGYuIFRoZSBkZWZhdWx0IGlzIGZhbHNlLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKiBAcGFyYW0gcmVmIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRzdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHJlZjogUmVmUHJvcFR5cGU8SVNlcnZpY2VEZWZpbml0aW9uc1tLXT4sXHJcblx0XHRcdFx0XHRkZWZhdWx0U2VydmljZT86IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10sIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqIFVuc3Vic2NyaWJlcyBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gVGhlIFJlZiBvYmplY3QgdGhhdCB3YXMgdXNlZCB0byBzdWJzY3JpYmVcclxuXHQgKiB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqL1xyXG5cdHVuc3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZDtcclxuXHJcblx0LyoqIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvclxyXG5cdCAqIGNvbXBvbmVudCBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBjb21wb25lbnRzIHJlZ2lzdGVyZWQgYSBzZXJ2aWNlIHdpdGhcclxuXHQgKiB0aGlzIElELiBUaGlzIG1ldGhvZCBkb2Vzbid0IGVzdGFibGlzaCBhIHN1YnNjcmlwdGlvbiBhbmQgb25seSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZS5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICogQHBhcmFtIGRlZmF1bHRTZXJ2aWNlIFxyXG5cdCAqIEBwYXJhbSB1c2VTZWxmIFxyXG5cdCAqL1xyXG5cdGdldFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgZGVmYXVsdFNlcnZpY2U/OiBJU2VydmljZURlZmluaXRpb25zW0tdLFxyXG5cdFx0XHRcdFx0dXNlU2VsZj86IGJvb2xlYW4pOiBJU2VydmljZURlZmluaXRpb25zW0tdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNlcnZpY2VEZWZpbml0aW9ucyBpbnRlcmZhY2Ugc2VydmVzIGFzIGEgbWFwcGluZyBiZXR3ZWVuIHNlcnZpY2UgbmFtZXMgYW5kIHNlcnZpY2UgdHlwZXMuXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIGludGVuZGVkIHRvIGJlIGF1Z21lbnRlZCBieSBtb2R1bGVzIHRoYXQgZGVmaW5lIGFuZC9vciB1c2Ugc3BlY2lmaWMgc2VydmljZXMuXHJcbiAqIFRoaXMgYWxsb3dzIHBlcmZvcm1pbmcgc2VydmljZSBwdWJsaXNoaW5nIGFuZCBzdWJzY3JpYmluZyBpbiB0eXBlLXNhZmUgbWFubmVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcbntcclxuXHQvKiogQnVpbHQtaW4gZXJyb3IgaGFuZGxpbmcgc2VydmljZS4gKi9cclxuXHRcIlN0ZEVycm9ySGFuZGxpbmdcIjogSUVycm9ySGFuZGxpbmdTZXJ2aWNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBCdWlsdC1pbiBzZXJ2aWNlIGZvciBsYXp5IHBlb3BsZSAtIGNhbiBiZSB1c2VkIGZvciBxdWljayBwcm90b3R5cGVzIHdpdGhvdXQgdGhlIG5lZWQgdG9cclxuXHQgKiBhdWdtZW50IHRoZSBpbnRlcmZhY2UuXHJcblx0ICovXHJcblx0XCJhbnlcIjogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUVycm9ySGFuZGxpbmdTZXJ2aWNlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2VydmljZSB0aGF0IGNhbiBiZSBpbnZva2VkIHdoZW4gYW4gZXJyb3IgLVxyXG4gKiB1c3VhbGx5IGFuIGV4Y2VwdGlvbiAtIGlzIGVuY291bnRlcmVkIGJ1dCBjYW5ub3QgYmUgaGFuZGxlZCBsb2NhbGx5LiBBIGNvbXBvbmVudCB0aGF0IGltcGxlbWVudHNcclxuICogdGhpcyBzZXJ2aWNlIHdvdWxkIG5vcm1hbGx5IHJlbWVtYmVyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byB1cGRhdGUgaXRzZWxmLHNvIHRoYXQgaW4gaXRzXHJcbiAqIHJlbmRlciBtZXRob2QgaXQgd2lsbCBwcmVzZW50IHRoZSBlcnJvciB0byB0aGUgdXNlci5cclxuICpcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpcyBpbXBsZW1lbnRlZCBieSB0aGUgUm9vdCBWaXJ0dWFsIE5vZGUgYXMgYSBsYXN0IHJlc29ydCBmb3IgZXJyb3JcclxuICogaGFuZGxpbmcuIFRoZSBSb290IFZOIHdpbGwgZGlzcGxheSBhIHNpbXBsZSBVSSBzaG93aW5nIHRoZSBlcnJvciBhbmQgd2lsbCBhbGxvdyB0aGUgdXNlciB0b1xyXG4gKiByZXN0YXJ0IC0gaW4gdGhlIGhvcGUgdGhhdCB0aGUgZXJyb3Igd2lsbCBub3QgcmVwZWF0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRyZXBvcnRFcnJvciggZXJyOiBhbnkscGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnRzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhpcyBjbGFzcyBtdXN0IGltcGxlbWVudCB0aGUgcmVuZGVyXHJcbiAqIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+XHJcbntcclxuXHQvKiogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHM/OiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pXHJcblx0e1xyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdH1cclxuXHJcblx0LyoqIFNpdGUgb2JqZWN0IHRocm91Z2ggd2hpY2ggY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzLiAqL1xyXG5cdHByb3RlY3RlZCBzaXRlOiBJQ29tcG9uZW50U2l0ZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIERpc3BsYXkgbmFtZSBzcGVjaWZpZWQgYnkgdGhlIGNvbXBvbmVudC4gKi9cclxuXHRwcm90ZWN0ZWQgZGlzcGFseU5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIFNldHMgb3IgY2xlYXJzIHRoZSBzaXRlIG9iamVjdCB0aHJvdWdoIHdoaWNoIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlcy4gKi9cclxuXHRwdWJsaWMgc2V0U2l0ZSggc2l0ZTogSUNvbXBvbmVudFNpdGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5zaXRlID0gc2l0ZTtcclxuXHJcblx0XHQvLyBpZiB0aGUgc2l0ZSBoYXMganVzdCBiZSBzZXQgKHRoYXQgaXMgdGhlIGNvbXBvbmVudCBpcyBiZWluZyBtb3VudGVkKSBhbmQgdGhlIGRpc3BsYXlOYW1lXHJcblx0XHQvLyBwcm9wZXJ0eSBpcyBkZWZpbmVkLHBhc3MgaXQgb24gdG8gdGhlIHNpdGVcclxuXHRcdGlmIChzaXRlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5kaXNwYWx5TmFtZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnNpdGUuc2V0RGlzcGxheU5hbWUoIHRoaXMuZGlzcGFseU5hbWUpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHB1YmxpYyBhYnN0cmFjdCByZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKiogU2V0cyB0aGUgY29tcG9uZW50J3MgZGlzcGxheSBuYW1lICovXHJcblx0cHJvdGVjdGVkIHNldERpc3BsYXlOYW1lKCBkaXNwYWx5TmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZGlzcGFseU5hbWUgPSBkaXNwYWx5TmFtZTtcclxuXHRcdGlmICh0aGlzLnNpdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zaXRlLnNldERpc3BsYXlOYW1lKCBkaXNwYWx5TmFtZSk7XHJcblx0fVxyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgdG8gcmVxdWVzdCB0byBiZSB1cGRhdGVkLiAqL1xyXG5cdHByb3RlY3RlZCB1cGRhdGVNZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2l0ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnNpdGUucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgdG8gaWdub3JlIGFueSB1cGRhdGUvZGVsZXRlL3JlcGxhY2UgcmVxdWVzdHNcclxuXHQvLyB0aGF0IGhhdmUgYmVlbiBtYWRlIGJ5IHRoZSBjb21wb25lbnQgZHVyaW5nIHRoZSBjdXJyZW50IEphdmFTY3JpcHQgZXZlbnQgbG9vcC5cclxuXHRwcm90ZWN0ZWQgaWdub3JlTWUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNpdGUgIT09IG51bGwpXHJcblx0XHRcdHRoaXMuc2l0ZS5jYW5jZWxVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byBzY2hlZHVsZSBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb24gdGhlIG5leHRcclxuXHQgKiB1cGRhdGUgY3ljbGUgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkXHJcblx0ICogQHBhcmFtIGJlZm9yZVVwZGF0ZSBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgKHRydWUpXHJcblx0ICogb3IgYWZ0ZXIgKGZhbHNlKSB0aGUgdXBkYXRlIGN5Y2xlLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBjYWxsTWUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zaXRlICE9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnNpdGUuc2NoZWR1bGVDYWxsKCBmdW5jLCBiZWZvcmVVcGRhdGUpO1xyXG5cdH1cclxuXHJcblx0LyoqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHRvIGNhbmNlbCBhIHNjaGVkdWxlZCBmdW5jdGlvbi4gKi9cclxuXHRwcm90ZWN0ZWQgZG9udENhbGxNZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnNpdGUgIT09IG51bGwpXHJcblx0XHRcdHRoaXMuc2l0ZS5jYW5jZWxTY2hlZHVsZWRDYWxsKCBmdW5jLCBiZWZvcmVVcGRhdGUpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgUmVmRnVuYyBkZWZpbmVzIGV2ZW50IGhhbmRsZXIgdGhhdCBpcyBpbnZva2VkIHdoZW4gcmVmZXJlbmNlIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZGdW5jPFQ+ID0gKG5ld1JlZjogVCkgPT4gdm9pZDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSBjbGFzcyB0byB1c2Ugd2hlbmV2ZXIgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IGlzIG5lZWRlZCAtIGZvciBleGFtcGxlLCB3aXRoIEpTWCByZWZcclxuICogYXR0cmlidXRlcyBhbmQgc2VydmljZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVmPFQ+XHJcbntcclxuXHRwcml2YXRlIF9yOiBUO1xyXG5cclxuXHQvKiogRXZlbnQgdGhhdCBpcyBmaXJlZCB3aGVuIHRoZSByZWZlcmVuY2VkIHZhbHVlIGNoYW5nZXMgKi9cclxuXHRwdWJsaWMgY2hhbmdlZEV2ZW50OiBJRXZlbnRTbG90PFJlZkZ1bmM8VD4+ID0gbmV3IEV2ZW50U2xvdDxSZWZGdW5jPFQ+PigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggbGlzdGVuZXI/OiBSZWZGdW5jPFQ+LCBpbml0aWFsUmVmZXJlbmU/OiBUKVxyXG5cdHtcclxuXHRcdGlmIChsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5hZGQoIGxpc3RlbmVyKTtcclxuXHJcblx0XHR0aGlzLl9yID0gaW5pdGlhbFJlZmVyZW5lO1xyXG5cdH1cclxuXHJcblx0LyoqIEFkZHMgYSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSB2YXVlIG9mIHRoZSByZWZlcm5jZSBjaGFuZ2VzLiAqL1xyXG5cdHB1YmxpYyBhZGRMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQuYWRkKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogUmVtb3ZlcyBhIGNhbGxiYWNrIHRoYXQgd2FzIGFkZGVkIHdpdGggYWRkTGlzdGVuZXIuICovXHJcblx0cHVibGljIHJlbW92ZUxpc3RlbmVyKCBsaXN0ZW5lcjogUmVmRnVuYzxUPilcclxuXHR7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5yZW1vdmUoIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdC8qKiBHZXQgYWNjZXNzb3JzIHRvIHRoZSByZWZlcmVuY2UgdmFsdWUgKi9cclxuXHRwdWJsaWMgZ2V0IHIoKTogVCB7IHJldHVybiB0aGlzLl9yOyB9XHJcblxyXG5cdC8qKiBTZXQgYWNjZXNzb3JzIHRvIHRoZSByZWZlcmVuY2UgdmFsdWUgKi9cclxuXHRwdWJsaWMgc2V0IHIoIG5ld1JlZjogVClcclxuXHR7XHJcblx0XHRpZiAodGhpcy5fciAhPT0gbmV3UmVmKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLl9yID0gbmV3UmVmO1xyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5maXJlKCBuZXdSZWYpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqIENsZWFycyB0aGUgcmVmZXJlbmNlIHZhbHVlIGFuZCBhbHNvIGNsZWFycyBhbGwgYWxsIHJlZ2lzdGVyZWQgbGlzdGVuZXJzICovXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLl9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQuY2xlYXIoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIC8vXHJcbi8vIC8vIERlY29yYXRvciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgcmVmZXJlbmNlIHByb3BlcnRpZXMgd2l0aG91dCB0aGUgbmVlZCB0byBtYW51YWxseSBjcmVhdGVcclxuLy8gLy8gUmVmPD4gaW5zdGFuY2VzLiBUaGlzIGFsbG93cyBmb3IgdGhlIGZvbGxvd2luZyBjb2RlIHBhdHRlcm46XHJcbi8vIC8vXHJcbi8vIC8vXHRjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50XHJcbi8vIC8vXHR7XHJcbi8vIC8vXHRcdEByZWYgbXlEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4vLyAvL1x0XHRyZW5kZXIoKSB7IHJldHVybiA8ZGl2IHJlZj17bXlEaXZ9PkhlbGxvPC9kaXY+OyB9XHJcbi8vIC8vXHR9XHJcbi8vIC8vXHJcbi8vIC8vIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgbXlEaXYgcHJvcGVydHkgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgd2hlbiBmaXJzdCBhY2Nlc3NlZC4gVGhlXHJcbi8vIC8vIGFjdHVhbCBvYmplY3Qgd2lsbCBiZSBhIFByb3h5IHRvIFJlZjw+IG9mIHRoZSBnaXZlbiB0eXBlIChIVE1MRGl2RWxlbWVudCBpbiB0aGlzIGNhc2UpLlxyXG4vLyAvL1xyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlZiggdGFyZ2V0LCBuYW1lKVxyXG4vLyB7XHJcbi8vIFx0ZnVuY3Rpb24gcmVmR2V0KCBvYmosIGtleSlcclxuLy8gXHR7XHJcbi8vIFx0XHRpZiAoa2V5ID09PSBcInJcIilcclxuLy8gXHRcdFx0cmV0dXJuIG9iai5yO1xyXG4vLyBcdFx0ZWxzZVxyXG4vLyBcdFx0XHRyZXR1cm4gb2JqLnJba2V5XTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGZ1bmN0aW9uIHJlZlNldCggb2JqLCBrZXksIHZhbCwgcmVjZWl2ZXIpOiBib29sZWFuXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWYgKGtleSA9PT0gXCJyXCIpXHJcbi8vIFx0XHRcdG9iai5yID0gdmFsO1xyXG4vLyBcdFx0ZWxzZVxyXG4vLyBcdFx0XHRvYmoucltrZXldID0gdmFsO1xyXG5cclxuLy8gXHRcdHJldHVybiB0cnVlO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0ZnVuY3Rpb24gZW5zdXJlUHJveHkoIHRoaXNPYmo6IGFueSwgYXR0ck5hbWU6IHN0cmluZyk6IGFueVxyXG4vLyBcdHtcclxuLy8gXHRcdGxldCBwcm94eSA9IHRoaXNPYmpbYXR0ck5hbWVdO1xyXG4vLyBcdFx0aWYgKCFwcm94eSlcclxuLy8gXHRcdHtcclxuLy8gXHRcdFx0cHJveHkgPSBuZXcgUHJveHkoIG5ldyBSZWY8YW55PigpLCB7IGdldDogcmVmR2V0LCBzZXQ6IHJlZlNldCB9KTtcclxuLy8gXHRcdFx0dGhpc09ialthdHRyTmFtZV0gPSBwcm94eTtcclxuLy8gXHRcdH1cclxuLy8gXHRcdHJldHVybiBwcm94eTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGxldCBhdHRyTmFtZSA9IFwiX3JlZl9cIiArIG5hbWU7XHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsXHJcbi8vIFx0XHR7XHJcbi8vIFx0XHRcdHNldCggdmFsKSB7IGVuc3VyZVByb3h5KCB0aGlzLCBhdHRyTmFtZSkuciA9IHZhbDsgfSxcclxuLy8gXHRcdFx0Z2V0KCkgeyByZXR1cm4gZW5zdXJlUHJveHkoIHRoaXMsIGF0dHJOYW1lKTsgfVxyXG4vLyBcdFx0fVxyXG4vLyBcdCk7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgcmVmIHByb3BlcnR5IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBKU1ggZWxlbWVudHMgYW5kIGNvbXBvbmVudHMuIFRoaXMgY2FuIGJlIGVpdGhlciB0aGVcclxuICogUmVmIGNsYXNzIG9yIFJlZkZ1bmMgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZQcm9wVHlwZTxUPiA9IFJlZjxUPiB8IFJlZkZ1bmM8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIHRoYXQgdGFrZXMgY2FyZSBvZiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mXHJcbiAqIHJlZmVyZW5jZXMuIFRoZSBvcHRpb25hbCBvbmx5SWYgcGFyYW1ldGVyIG1heSBzcGVjaWZ5IGEgdmFsdWUgc28gdGhhdCBvbmx5IGlmIHRoZSByZWZlcmVuY2VcclxuICogY3VycmVudGx5IGhhcyB0aGUgc2FtZSB2YWx1ZSBpdCB3aWxsIGJlIHJlcGxhY2VkLiBUaGlzIG1pZ2h0IGJlIG5lZWRlZCB0byBub3QgY2xlYXIgYVxyXG4gKiByZWZlcmVuY2UgaWYgaXQgYWxyZWFkeSBwb2ludHMgdG8gYSBkaWZmZXJlbnQgb2JqZWN0LlxyXG4gKiBAcGFyYW0gcmVmIFJlZmVyZW5jZSBwcm9wZXJ0eSB0byBiZSBzZXRcclxuICogQHBhcmFtIHZhbCBSZWZlcmVuY2UgdmFsdWUgdG8gc2V0IHRvIHRoZSBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0gb25seUlmIEFuIG9wdGlvbmFsIHZhbHVlIHRvIHdoaWNoIHRvIGNvbXBhcmUgdGhlIGN1cnJlbnQgKG9sZCkgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZS5cclxuICogVGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldCBvbmx5IGlmIHRoZSBvbGQgdmFsdWUgZXF1YWxzIHRoZSBvbmx5SWYgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmPFQ+KCByZWY6IFJlZlByb3BUeXBlPFQ+LCB2YWw6IFQsIG9ubHlJZj86IFQpOiB2b2lkXHJcbntcclxuXHRpZiAodHlwZW9mIHJlZiA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRsZXQgcmVmT2JqID0gcmVmIGFzIFJlZjxUPjtcclxuXHRcdGlmIChvbmx5SWYgPT09IHVuZGVmaW5lZCB8fCByZWZPYmouciA9PT0gb25seUlmKVxyXG5cdFx0XHRyZWZPYmouciA9IHZhbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0KHJlZiBhcyBSZWZGdW5jPFQ+KSh2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIHByb3BlcnRpZXMgd2l0aCBhIHNldCBtZXRob2QgdGhhdCBjYWxscyB0aGUgdXBkYXRlTWUgbWV0aG9kXHJcbiAqIHdoZW5ldmVyIHRoZSBwcm9wZXJ0eSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKlxyXG4gKlx0Y2xhc3MgQ2hpbGQgZXh0ZW5kcyBDb21wb25lbnRcclxuICpcdHtcclxuICpcdFx0QHByb3AgdGV4dDogc3RyaW5nID0gXCJIZWxsbyFcIjtcclxuICpcdFx0cmVuZGVyKCkgeyByZXR1cm4gPGRpdiByZWY9e215RGl2fT57dGV4dH08L2Rpdj47IH1cclxuICpcdH1cclxuICpcclxuICpcdGNsYXNzIFBhcmVudCBleHRlbmRzIENvbXBvbmVudFxyXG4gKlx0e1xyXG4gKlx0XHRjaGlsZCA9IG5ldyBDaGlsZCgpO1xyXG4gKlx0XHRyZW5kZXIoKSB7IHJldHVybiA8ZGl2IGNsaWNrPXsoKSA9PiB0aGlzLmNoaWxkLnRleHQgKz0gXCIgYWdhaW5cIn0+e3RoaXMuY2hpbGR9PC9kaXY+OyB9XHJcbiAqXHR9XHJcbiAqXHJcbiAqIEluIHRoZSBhYm92ZSBleGFtcGxlLHRoZSBDaGlsZCBjb21wb25lbnQgd2lsbCBiZSByZS1yZW5kZXJlZCB3aGV2ZXIgaXRzIHRleHQgcHJvcGVydHkgY2hhbmdlcy5cclxuICogVGhlIFBhcmVudCBjb21wb25lbnQgYXBwZW5kcyB0aGUgd29yZCBcImFnYWluXCIgdG8gdGhlIENoaWxkIGNvbXBvbmVudCdzIHRleHQgd2hlbmV2ZXIgdGhlIHVzZXJcclxuICogY2xpY2tzIG9uIGl0LlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0gbmFtZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9wKCB0YXJnZXQsIG5hbWU6IHN0cmluZylcclxue1xyXG5cdGxldCBhdHRyTmFtZSA9IFwiX21fXCIgKyBuYW1lO1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLFxyXG5cdFx0e1xyXG5cdFx0XHRzZXQoIHZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdmFsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXNbYXR0ck5hbWVdID0gdmFsO1xyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0KCkgeyByZXR1cm4gdGhpc1thdHRyTmFtZV07IH1cclxuXHRcdH1cclxuXHQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBbiBhcnRpZmljaWFsIFwiZnJhZ21lbnRcIiBjb21wb25lbnQgdGhhdCBpcyBvbmx5IHVzZWQgYXMgYSB0ZW1wb3JhcnkgY29sbGVjdGlvbiBvZiBvdGhlciBpdGVtc1xyXG4gKiBpbiBwbGFjZXMgd2hlcmUgSlNYIG9ubHkgYWxsb3dzIGEgc2luZ2xlIGl0ZW0uIE91ciBKU1ggZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVzIGEgdmlydHVhbCBub2RlXHJcbiAqIGZvciBpdHMgY2hpbGRyZW4sYnV0IGxhdGVyIHRoaXMgbm9kZSBpcyB0aHJvd24gYXdheSBhbmQgb25seSBjaGlsZHJlbiBhcmUgdXNlZC4gVGhpcyBjb21wb25lbnRcclxuICogaXMgb25seSBuZWVkZWQgYmVjYXVzZSBjdXJyZW50bHkgVHlwZVNjcmlwdCBkb2Vzbid0IGFsb3cgdGhlIDw+IGZyYWdtZW50IG5vdGF0aW9uIGlmIGEgY3VzdG9tXHJcbiAqIEpTWCBmYWN0b3J5IGZ1bmN0aW9uIGlzIHVzZWQuXHJcbiAqXHJcbiAqIFVzZSBpdCBhcyBmb2xsb3dpbmc6XHJcbiAqXHJcbiAqXHRpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICpcdC4uLi4uXHJcbiAqXHRyZW5kZXIoKVxyXG4gKlx0e1xyXG4gKlx0XHRyZXR1cm4gPG1pbS5QbGFjZWhvbGRlcj5cclxuICpcdFx0XHQ8ZGl2MS8+XHJcbiAqXHRcdFx0PGRpdjIvPlxyXG4gKlx0XHRcdDxkaXYzLz5cclxuICpcdFx0PC9taW0uUGxhY2Vob2xkZXI+XHJcbiAqXHR9XHJcbiAqIEBwYXJhbSBwcm9wcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGFjZWhvbGRlciggcHJvcHM6IENvbXBQcm9wczx7fT4pOiBhbnkge31cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBhYmlsaXR5IHRvIGhhbmRsZSBjdXN0b20gcHJvcGVydGllcyB0aGF0IGNhblxyXG4gKiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPlxyXG57XHJcblx0aW5pdGlhbGl6ZSggZWxtVk46IElFbG1WTiwgcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogVCk6IHZvaWQ7XHJcblx0dGVybWluYXRlKCk6IHZvaWQ7XHJcblx0dXBkYXRlKCBvbGRQcm9wVmFsOiBULCBuZXdQcm9wVmFsOiBUKTogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlRmFjdG9yeSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBhYmlsaXR5IHRvIGNyZWF0ZSBvYmplY3RzIGZvciBoYW5kbGluZ1xyXG4gKiBjdXN0b20gcHJvcGVydGllcyB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlRmFjdG9yeTxUPlxyXG57XHJcblx0Y3JlYXRlSGFuZGxlciggcHJvcE5hbWU6IHN0cmluZyk6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgY3VzdG9tIGF0dHJpYnV0ZSBmdW5jdG9yeSBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUuXHJcbiAqIEBwYXJhbSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlXHJcbiAqIEBwYXJhbSBmYWN0b3J5IGN1c3RvbSBwcm9wZXJ0eSBmYWN0b3J5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGU8VD4oIHByb3BOYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IElDdXN0b21BdHRyaWJ1dGVGYWN0b3J5PFQ+KTogdm9pZFxyXG57XHJcblx0c19yZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSggcHJvcE5hbWUsIGZhY3RvcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3cmFwcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgY29udGVudC4gUHJveGllcyBjYW4gd3JhcCBpbnN0YW5jZVxyXG4gKiBtZXRob2RzIG9mIGNsYXNzZXMgdGhhdCBoYXZlIGFjY2VzcyB0byBcInRoaXNcIiB0aHVzIGFsbG93aW5nIGEgc2luZ2xlIGNsYXNzIHRvIFwiaG9zdFwiIG11bHRpcGxlXHJcbiAqIGNvbXBvbmVudHMgdGhhdCBjYW4gYmUgdXBkYXRlZCBzZXBhcmF0ZWx5LiBUaGlzIGlzIGVzcGVjaWFsbHkgdXNlZnVsIHdoZW4gdGhlcmUgaXMgYSBoaWVyYXJjaHlcclxuICogb2YgZGVyaXZlZCBjbGFzc2VzIGFuZCAodmlydHVhbCkgbWV0aG9kcyB0aGF0IGRlbGl2ZXIgc2V2ZXJhbCBwaWVjZXMgb2YgY29udGVudC4gRnVuY1Byb3hpZXNcclxuICogY2FuIHdyYXAgdGhlc2UgdmlydHVhbCBtZXRob2RzIChvciBvdGhlciBtZXRob2RzIHRoYXQgY2FsbCB0aGVtKSBzbyB0aGF0IHRoZSBjb250ZW50IHBpZWNlc1xyXG4gKiBjYW4gYmUgdXBkYXRlZCBzZXBhcmF0ZWx5LiBGdW5jUHJveHkgaGFzIGEgcHVibGljIFVwZGF0ZSBtZXRob2QgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIGNhdXNlXHJcbiAqIHRoZSByZW5kZXJpbmcgbWVjaGFuaXNtIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNQcm94eSBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcblx0Y29uc3RydWN0b3IoIGZ1bmM6ICgpID0+IGFueSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZnVuYyA9IGZ1bmM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5zaXRlKVxyXG5cdFx0XHR0aGlzLnNpdGUucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBmdW5jOiAoKSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBXYWl0aW5nIGNvbXBvbmVudCB3cmFwcyBhIFByb21pc2UgYW5kIHJlcGxhY2VzIGl0cyBjb250ZW50IHdoZW4gdGhlIHByb21pc2UgaXMgc2V0dGxlZC5cclxuICogQmVmb3JlIHRoZSBwcm9taXNlIGlzIHNldHRsZWQsIHRoZSBjb21wb25lbnQgZGlzcGxheXMgYW4gb3B0aW9uYWwgXCJpbi1wcm9ncmVzc1wiIGNvbnRlbnRcclxuICogc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci4gSWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQsIHRoZSBjb21wb25lbnQgd2lsbCBlaXRoZXIgZGlzcGxheVxyXG4gKiB0aGUgXCJlcnJvclwiIGNvbnRlbnQgb2J0YWluZWQgYnkgY2FsbGluZyBhIGZ1bmN0aW9ucyBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yIG9yIGlmIHN1Y2hcclxuICogZnVuY3Rpb24gaXMgbm90IHNwZWNpZmllZCBzaG93IGVtcHR5IGNvbnRlbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV2FpdGluZyBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyB0aGUgb2JqZWN0XHJcblx0ICogQHBhcmFtIHByb21pc2UgUHJvbWlzZSBvYmplY3QgdG8gd2FpdCBmb3JcclxuXHQgKiBAcGFyYW0gcHJvZ3Jlc3NDb250ZW50IENvbnRlbnQgdG8gZGlzcGxheSB3aGlsZSB3YWl0aW5nIGZvciB0aGUgcHJvbWlzZVxyXG5cdCAqIEBwYXJhbSBlcnJvckNvbnRlbnRGdW5jIENvbnRlbnQgdG8gZGlzcGxheSBpZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9taXNlOiBQcm9taXNlPGFueT4sIHByb2dyZXNzQ29udGVudD86IGFueSwgZXJyb3JDb250ZW50RnVuYz86IChlcnI6IGFueSkgPT4gYW55KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5jb250ZW50ID0gcHJvZ3Jlc3NDb250ZW50O1xyXG5cclxuXHRcdHRoaXMud2F0Y2hQcm9taXNlKCBwcm9taXNlLCBlcnJvckNvbnRlbnRGdW5jKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29udGVudDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgd2F0Y2hQcm9taXNlKHByb21pc2U6IFByb21pc2U8YW55PixlcnJvckNvbnRlbnRGdW5jPzogKGVycjogYW55KSA9PiBhbnkpOiBQcm9taXNlPGFueT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gYXdhaXQgcHJvbWlzZTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IG51bGw7XHJcblx0XHRcdGlmIChlcnJvckNvbnRlbnRGdW5jICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBlcnJvckNvbnRlbnRGdW5jKCBlcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaChhbm90aGVyRXJyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY29udGVudDogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBEZWZpbmVzIHR5cGVzIG9mIHZpcnR1YWwgRE9NIG5vZGVzICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFZOVHlwZVxyXG57XHJcblx0Ly8gVG9wLWxldmVsIG5vZGVcclxuXHRSb290LFxyXG5cclxuXHQvLyBDbGFzcy1iYXNlZCAoc3RhdGUtZnVsbCkgY29tcG9uZW50IGNyZWF0ZWQgdmlhIG5ld1xyXG5cdEluc3RhbmNlQ29tcCxcclxuXHJcblx0Ly8gQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIEpTWC1iYXNlZCBjb21wb25lbnQgbGFpZCBvdXQgdXNpbmcgSlNYXHJcblx0Q2xhc3NDb21wLFxyXG5cclxuXHQvLyBTdGF0ZWxlc3MgY29tcG9uZW50IChzaW1wbGUgcmVuZGVyaW5nIGZ1bmN0aW9uIGFjY2VwdGluZyBwcm9wcylcclxuXHRGdW5jQ29tcCxcclxuXHJcblx0Ly8gRE9NIGVsZW1lbnQgKEhUTUwgb3IgU1ZHKSBsYWlkIG91dCB1c2luZyBKU1guXHJcblx0RWxtLFxyXG5cclxuXHQvLyBUZXh0IG5vZGVcclxuXHRUZXh0LFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZOQ2hhaW4gaW50ZXJmYWNlIHJlcHJlc2VudCBhIGRvdWJseS1saW5rZWQgbGlzdCBvZiB2aXJ0dWFsIG5vZGVzLiBUaGlzIGlzIHRoZSBvYmplY3RcclxuICogdGhhdCBpcyByZXR1cm5lZCBmcm9tIHRoZSBKU1ggcHJvY2Vzc2luZyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZOQ2hhaW5cclxue1xyXG5cdC8qKiBGaXJzdCBub2RlIGluIHRoZSBjaGFpbi4gKi9cclxuXHRyZWFkb25seSBGaXJzdDogSVZOb2RlO1xyXG5cclxuXHQvKiogTGFzdCBub2RlIGluIHRoZSBjaGFpbi4gKi9cclxuXHRyZWFkb25seSBMYXN0OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGNoYWluLiAqL1xyXG5cdHJlYWRvbmx5IENvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVk5vZGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUuIFRocm91Z2ggdGhpcyBpbnRlcmZhY2UsY2FsbGVycyBjYW4gcGVyZm9ybVxyXG4gKiBtb3N0IGNvbW1vbiBhY3Rpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSBvbiBldmVyeSB0eXBlIG9mIHZpcnR1YWwgbm9kZS4gRWFjaCB0eXBlIG9mIHZpcnR1YWwgbm9kZVxyXG4gKiBhbHNvIGltcGxlbWVudHMgYSBtb3JlIHNwZWNpZmljIGludGVyZmFjZSB0aHJvdWdoIHdoaWNoIHRoZSBzcGVjaWZpYyBjYXBhYmlsaXRpZXMgb2YgdGhlIG5vZGVcclxuICogdHlwZSBhcmUgYXZhaWxiYWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIG5vZGUgdHlwZS4gKi9cclxuXHRyZWFkb25seSBUeXBlOiBWTlR5cGU7XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuICovXHJcblx0cmVhZG9ubHkgUGFyZW50OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBuZXh0IHNpYmxpbmcuICovXHJcblx0cmVhZG9ubHkgTmV4dDogSVZOb2RlO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgcHJldmlvdXMgc2libGluZy4gKi9cclxuXHRyZWFkb25seSBQcmV2OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRyZWFkb25seSBTdWJOb2RlczogSVZOQ2hhaW47XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBkaXNwbGF5IG5hbWUuICovXHJcblx0cmVhZG9ubHkgRGlzcGxheU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElJbnN0YW5jZVZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIGNvbXBvbmVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUluc3RhbmNlVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgaW5zdGFuY2UuICovXHJcblx0cmVhZG9ubHkgQ29tcDogSUNvbXBvbmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc1ZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIEpTWC1iYXNlZCBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc1ZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGNsYXNzLiAqL1xyXG5cdHJlYWRvbmx5IENvbXBDbGFzczogSUNvbXBvbmVudENsYXNzO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGluc3RhbmNlLiAqL1xyXG5cdHJlYWRvbmx5IENvbXA6IElDb21wb25lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBUaGUgSUVsbVZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIERPTSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxtVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBlbGVtZW50IG5hbWUuICovXHJcblx0cmVhZG9ubHkgRWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBlbGVtZW50IGlzIGFuIFNWRyAoYXMgb3Bwb3NlZCB0byBIVE1MKS4gKi9cclxuXHRyZWFkb25seSBJc1N2ZzogYm9vbGVhbjtcclxuXHJcblx0LyoqIEdldHMgdGhlIGVsZW1lbnQgaW5zdGFuY2UuICovXHJcblx0cmVhZG9ubHkgRWxtOiBFbGVtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRleHRWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSB0ZXh0IERPTSBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGV4dFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogVGV4dCBvZiB0aGUgbm9kZS4gKi9cclxuXHRUZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKiBUZXh0IERPTSBub2RlLiAqL1xyXG5cdFRleHROb2RlOiBUZXh0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiAgU3R5bGVzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdHlsZVByb3BUeXBlID0gUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPjtcclxuXHJcbi8qKlxyXG4gKiBFdmVudCBwcm9wZXJ0eSB2YWx1ZSBpcyBhbiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLiBUIGlzIERPTSBldmVudCB0eXBlLGUuZy4gTW91c2VFdmVudC4gQWxsXHJcbiAqIERPTSBldmVudHMgYWNjZXB0IGV2ZW50IG9iamVjdCBhbmQgcmV0dXJuIHZvaWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSAoZTogVCkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBFdmVudCBwcm9wZXJ0eSB2YWx1ZSBpcyBhbiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLiBUIGlzIERPTSBldmVudCB0eXBlLGUuZy4gTW91c2VFdmVudC4gQWxsXHJcbiAqIERPTSBldmVudHMgYWNjZXB0IGV2ZW50IG9iamVjdCBhbmQgcmV0dXJuIHZvaWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRGbGFnVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIEV2ZW50IHByb3BlcnR5IHZhbHVlIGlzIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uIFQgaXMgRE9NIGV2ZW50IHR5cGUsZS5nLiBNb3VzZUV2ZW50LiBBbGxcclxuICogRE9NIGV2ZW50cyBhY2NlcHQgZXZlbnQgb2JqZWN0IGFuZCByZXR1cm4gdm9pZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50UHJvcFR5cGU8VCBleHRlbmRzIEV2ZW50PiA9IEV2ZW50RnVuY1R5cGU8VD4gfCBFdmVudEZ1bmNBbmRGbGFnVHlwZTxUPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29tbW9uUHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgc3RhbmRhcmQgcHJvcGVydGllcyB0aGF0IGNhbiBiZSB1c2VkIG9uIGFsbCBKU1ggZWxlbWVudHMgLVxyXG4gKiBpbnRyaW5zaWMgKEhUTUwgYW5kIFNWRykgYXMgd2VsbCBhcyBmdW5jdGlvbmFsIGFuZCBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBVbmlxdWUga2V5IHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGlzIEpTWCBlbGVtZW50IGZyb20gaXRzIHNpYmxpbmdzLiBUaGUga2V5IGNhbiBiZSBvZiBhbnkgdHlwZS4gKi9cclxuXHRrZXk/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluaXRpb25zIG9mIHByb3BlcnR5IHR5cGVzIHVzZWQgYnkgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCB0eXBlIENvbG9yUHJvcFR5cGUgPSBzdHJpbmc7XHJcbmV4cG9ydCB0eXBlIENyb3Nzb3JpZ2luUHJvcFR5cGUgPSBcImFub255bW91c1wiIHwgXCJ1c2UtY3JlZGVudGlhbHNcIjtcclxuZXhwb3J0IHR5cGUgRm9ybWVuY3R5cGVQcm9wVHlwZSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfCBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB8IFwidGV4dC9wbGFpblwiO1xyXG5leHBvcnQgdHlwZSBGb3JtbWV0aG9kUHJvcFR5cGUgPSBcImdldFwiIHwgXCJwb3N0XCIgfCBcImRpYWxvZ1wiO1xyXG5leHBvcnQgdHlwZSBGb3JtdGFyZ2V0UHJvcFR5cGUgPSBzdHJpbmcgfCBcIl9zZWxmXCIgfCBcIl9ibGFua1wiIHwgXCJfcGFyZW50XCJ8IFwiX3RvcFwiO1xyXG5leHBvcnQgdHlwZSBSZWZlcnJlclBvbGljeVByb3BUeXBlID0gXCJuby1yZWZlcnJlclwiIHwgXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiIHwgXCJvcmlnaW5cIiB8XHJcblx0XHRcIm9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIHwgXCJ1bnNhZmUtdXJsXCI7XHJcblxyXG4vKipcclxuICogVGhlIElFbGVtZW50UHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgc3RhbmRhcmQgcHJvcGVydGllcyAoYXR0cmlidXRlcyBhbmQgZXZlbnQgbGlzdGVuZXJzKVxyXG4gKiB0aGF0IGNhbiBiZSB1c2VkIG9uIGFsbCBIVE1MIGFuZCBTVkcgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbGVtZW50UHJvcHM8VFJlZixUQ2hpbGRyZW4gPSBhbnk+IGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvL1xyXG5cdC8qKiBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGVsZW1lbnQgYWZ0ZXIgaXQgaXMgY3JlYXRlZCAobW91bnRlZCkuIFRoZVxyXG5cdCAqIHJlZmVyZW5jZSB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgdW5tb3VudGVkLlxyXG5cdCAqL1xyXG5cdHJlZj86IFJlZlByb3BUeXBlPFRSZWY+O1xyXG5cclxuXHQvKiogQ2hpbGRyZW4gdGhhdCBjYW4gYmUgc3VwcGxpZWQgdG8gdGhlIGVsZW1lbnQgKi9cclxuXHRjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHJcblx0Y2xhc3M/OiBzdHJpbmdcclxuXHRkcmFnZ2FibGU/OiBib29sZWFuO1xyXG5cdGRyb3B6b25lID86IFwiY29weVwiIHwgXCJtb3ZlXCIgfCBcImxpbmtcIjtcclxuXHRpZD86IHN0cmluZyB8IG51bWJlcjtcclxuXHRsYW5nPzogc3RyaW5nO1xyXG5cdHJvbGU/OiBzdHJpbmc7XHJcblx0c3R5bGU/OiBTdHlsZVByb3BUeXBlO1xyXG5cdHRhYmluZGV4PzogbnVtYmVyO1xyXG5cclxuXHQvLyBnbG9iYWwgZXZlbnRzXHJcblx0YWJvcnQ/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbmVuZD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbml0ZXJhdGlvbj86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbnN0YXJ0PzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YXV4Y2xpY2s/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRibHVyPzogRXZlbnRQcm9wVHlwZTxGb2N1c0V2ZW50PjtcclxuXHRjYW5jZWw/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjYW5wbGF5PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2FucGxheXRocm91Z2g/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjbGljaz86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0Y2xvc2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjb250ZXh0bWVudT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0Y3VlY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZGJsY2xpY2s/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGR1cmF0aW9uY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZW1wdGllZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVuZGVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZXJyb3I/OiBFdmVudFByb3BUeXBlPEVycm9yRXZlbnQ+O1xyXG5cdGZvY3VzPzogRXZlbnRQcm9wVHlwZTxGb2N1c0V2ZW50PjtcclxuXHRnb3Rwb2ludGVyY2FwdHVyZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRpbnB1dD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGludmFsaWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRrZXlkb3duPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRrZXlwcmVzcz86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0a2V5dXA/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGxvYWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZWRkYXRhPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVkbWV0YWRhdGE/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZW5kPzogRXZlbnRQcm9wVHlwZTxQcm9ncmVzc0V2ZW50PjtcclxuXHRsb2Fkc3RhcnQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb3N0cG9pbnRlcmNhcHR1cmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0bW91c2Vkb3duPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZWVudGVyPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZWxlYXZlPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW1vdmU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlb3V0PzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW92ZXI/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNldXA/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdHBhdXNlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cGxheT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBsYXlpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwb2ludGVyY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJkb3duPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJlbnRlcj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVybGVhdmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm1vdmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm91dD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyb3Zlcj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVydXA/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cHJvZ3Jlc3M/OiBFdmVudFByb3BUeXBlPFByb2dyZXNzRXZlbnQ+O1xyXG5cdHJhdGVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRyZXNldD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHJlc2l6ZT86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0c2Nyb2xsPzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHQvL3NlY3VyaXR5cG9saWN5dmlvbGF0aW9uPzogRXZlbnRQcm9wVHlwZTxTZWN1cml0eVBvbGljeVZpb2xhdGlvbkV2ZW50PjtcclxuXHRzZWVrZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzZWVraW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c2VsZWN0PzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRzdGFsbGVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c3VibWl0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c3VzcGVuZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRpbWV1cGRhdGU/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0b2dnbGU/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0b3VjaGNhbmNlbD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hlbmQ/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoZW50ZXI/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNobGVhdmU/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNobW92ZT86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hzdGFydD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dHJhbnNpdGlvbmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9uZW5kPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25ydW4/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbnN0YXJ0PzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHZvbHVtZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHdhaXRpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR3aGVlbD86IEV2ZW50UHJvcFR5cGU8V2hlZWxFdmVudD47XHJcblxyXG5cdC8vIEVsZW1lbnQncyBldmVudHNcclxuXHRmdWxsc2NyZWVuY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZnVsbHNjcmVlbmVycm9yPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblxyXG5cdC8vIERvY3VtZW50J3MgYW5kIEVsZW1lbnQncyBldmVudHNcclxuXHRjb3B5PzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcblx0Y3V0PzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcblx0cGFzdGU/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBhbiBTVkcuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBvbmUgb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhlIFNWRyBzcGVjOyB0aGF0IGlzLCA8c3ZnPlxyXG4gKiBvciBhbnkgb3RoZXIgZnJvbSBTVkcuXHJcbiAqIEBwYXJhbSBlbG0gRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBcIm93bmVyU1ZHRWxlbWVudFwiIGluIChlbG0gYXMgYW55KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IGlzIHRoZSA8c3ZnPiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxtICBFbGVtZW50IHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N2Z1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIChlbG0gYXMgYW55KS5vd25lclNWR0VsZW1lbnQgPT09IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEpTWCBuYW1lc3BhY2UgZGVmaW5pbmcgaG93IFR5cGVTY3JpcHQgcGVyZm9ybXMgdHlwZSBjaGVja3Mgb24gSlNYIGVsZW1lbnRzLGNvbXBvbmVudHNcclxuLy8gcHJvcGVydGllcyBhbmQgY2hpbGRyZW4uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuL0h0bWxUeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBzdmcgZnJvbSBcIi4vU3ZnVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE5hbWVzcGFjZSBkZWZpbmluZyBpbnRlcmZhY2VzIHVzZWQgYnkgVHlwZVNjcmlwdCB0byB0eXBlLWNoZWNrIEpTWCBleHByZXNzaW9ucy5cclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSlNYXHJcbntcclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50IGV4dGVuZHMgSVZOQ2hhaW4ge31cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENsYXNzIGV4dGVuZHMgSUNvbXBvbmVudCB7fVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRBdHRyaWJ1dGVzUHJvcGVydHkgeyBwcm9wczoge30gfVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDaGlsZHJlbkF0dHJpYnV0ZSB7IGNoaWxkcmVuOiBhbnkgfVxyXG5cdFxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHNcclxuXHR7XHJcblx0XHQvLyBIVE1MIGVsZW1lbnRzXHJcblx0XHRhOiBodG1sLklIdG1sQUVsZW1lbnRQcm9wcztcclxuXHRcdGFiYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhY3JvbnltOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YWRkcmVzczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFwcGxldDogaHRtbC5JSHRtbEFwcGxldEVsZW1lbnRQcm9wcztcclxuXHRcdGFyZWE6IGh0bWwuSUh0bWxBcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0YXJ0aWNsZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFzaWRlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXVkaW86IGh0bWwuSUh0bWxBdWRpb0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmFzZTogaHRtbC5JSHRtbEJhc2VFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlZm9udDogaHRtbC5JSHRtbEJhc2Vmb250RWxlbWVudFByb3BzO1xyXG5cdFx0YmRpOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmRvOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmlnOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmxvY2txdW90ZTogaHRtbC5JSHRtbEJsb2NrcXVvdGVFbGVtZW50UHJvcHM7XHJcblx0XHRib2R5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YnI6IGh0bWwuSUh0bWxCckVsZW1lbnRQcm9wcztcclxuXHRcdGJ1dHRvbjogaHRtbC5JSHRtbEJ1dHRvbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRjYW52YXM6IGh0bWwuSUh0bWxDYW52YXNFbGVtZW50UHJvcHM7XHJcblx0XHRjYXB0aW9uOiBodG1sLklIdG1sQ2FwdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdGNlbnRlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNpdGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2RlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sOiBodG1sLklIdG1sQ29sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sZ3JvdXA6IGh0bWwuSUh0bWxDb2xncm91cEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkYXRhOiBodG1sLklIdG1sRGF0YUVsZW1lbnRQcm9wcztcclxuXHRcdGRhdGFsaXN0OiBodG1sLklIdG1sRGF0YUxpc3RFbGVtZW50UHJvcHM7XHJcblx0XHRkZDogaHRtbC5JSHRtbERkRWxlbWVudFByb3BzO1xyXG5cdFx0ZGVsOiBodG1sLklIdG1sRGVsRWxlbWVudFByb3BzO1xyXG5cdFx0ZGV0YWlsczogaHRtbC5JSHRtbERldGFpbHNFbGVtZW50UHJvcHM7XHJcblx0XHRkZm46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRkaWFsb2c6IGh0bWwuSUh0bWxEaWFsb2dFbGVtZW50UHJvcHM7XHJcblx0XHRkaXI6IGh0bWwuSUh0bWxEaXJFbGVtZW50UHJvcHM7XHJcblx0XHRkaXY6IGh0bWwuSUh0bWxEaXZFbGVtZW50UHJvcHM7XHJcblx0XHRkbDogaHRtbC5JSHRtbERsRWxlbWVudFByb3BzO1xyXG5cdFx0ZHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRlbWJlZDogaHRtbC5JSHRtbEVtYmVkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGZpZWxkc2V0OiBodG1sLklIdG1sRmllbGRzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmaWdjYXB0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlndXJlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9udDogaHRtbC5JSHRtbEZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRmb290ZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb3JtOiBodG1sLklIdG1sRm9ybUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lOiBodG1sLklIdG1sRnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRmcmFtZXNldDogaHRtbC5JSHRtbEZyYW1lc2V0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGgxOiBodG1sLklIdG1sSDFFbGVtZW50UHJvcHM7XHJcblx0XHRoMjogaHRtbC5JSHRtbEgyRWxlbWVudFByb3BzO1xyXG5cdFx0aDM6IGh0bWwuSUh0bWxIM0VsZW1lbnRQcm9wcztcclxuXHRcdGg0OiBodG1sLklIdG1sSDRFbGVtZW50UHJvcHM7XHJcblx0XHRoNTogaHRtbC5JSHRtbEg1RWxlbWVudFByb3BzO1xyXG5cdFx0aDY6IGh0bWwuSUh0bWxINkVsZW1lbnRQcm9wcztcclxuXHRcdGhlYWQ6IGh0bWwuSUh0bWxIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aGdyb3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aHI6IGh0bWwuSUh0bWxIckVsZW1lbnRQcm9wcztcclxuXHRcdGh0bWw6IGh0bWwuSUh0bWxIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRpZnJhbWU6IGh0bWwuSUh0bWxJZnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRpbWc6IGh0bWwuSUh0bWxJbWdFbGVtZW50UHJvcHM7XHJcblx0XHRpbnB1dDogaHRtbC5JSHRtbElucHV0RWxlbWVudFByb3BzO1xyXG5cdFx0aW5zOiBodG1sLklIdG1sSW5zRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGtiZDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGtleWdlbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsYWJlbDogaHRtbC5JSHRtbExhYmVsRWxlbWVudFByb3BzO1xyXG5cdFx0bGVnZW5kOiBodG1sLklIdG1sTGVnZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0bGk6IGh0bWwuSUh0bWxMaUVsZW1lbnRQcm9wcztcclxuXHRcdGxpbms6IGh0bWwuSUh0bWxMaW5rRWxlbWVudFByb3BzO1xyXG5cdFx0bGlzdGluZzogaHRtbC5JSHRtbExpc3RpbmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFpbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcDogaHRtbC5JSHRtbE1hcEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcms6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZW51OiBodG1sLklIdG1sTWVudUVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnVpdGVtOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YTogaHRtbC5JSHRtbE1ldGFFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRlcjogaHRtbC5JSHRtbE1ldGVyRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG5hdjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub2ZyYW1lczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vc2NyaXB0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG9iamVjdDogaHRtbC5JSHRtbE9iamVjdEVsZW1lbnRQcm9wcztcclxuXHRcdG9sOiBodG1sLklIdG1sT2xFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRncm91cDogaHRtbC5JSHRtbE9wdGdyb3VwRWxlbWVudFByb3BzO1xyXG5cdFx0b3B0aW9uOiBodG1sLklIdG1sT3B0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0b3V0cHV0OiBodG1sLklIdG1sT3V0cHV0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHA6IGh0bWwuSUh0bWxQRWxlbWVudFByb3BzO1xyXG5cdFx0cGFyYW06IGh0bWwuSUh0bWxQYXJhbUVsZW1lbnRQcm9wcztcclxuXHRcdHBpY3R1cmU6IGh0bWwuSUh0bWxQaWN0dXJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJlOiBodG1sLklIdG1sUHJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJvZ3Jlc3M6IGh0bWwuSUh0bWxQcm9ncmVzc0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRxOiBodG1sLklIdG1sUUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRyYjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydGM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydWJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzYW1wOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2NyaXB0OiBodG1sLklIdG1sU2NyaXB0RWxlbWVudFByb3BzO1xyXG5cdFx0c2VjdGlvbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNlbGVjdDogaHRtbC5JSHRtbFNlbGVjdEVsZW1lbnRQcm9wcztcclxuXHRcdHNsb3Q6IGh0bWwuSUh0bWxTbG90RWxlbWVudFByb3BzO1xyXG5cdFx0c21hbGw6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzb3VyY2U6IGh0bWwuSUh0bWxTb3VyY2VFbGVtZW50UHJvcHM7XHJcblx0XHRzcGFuOiBodG1sLklIdG1sU3BhbkVsZW1lbnRQcm9wcztcclxuXHRcdHN0cmlrZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0cm9uZzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0eWxlOiBodG1sLklIdG1sU3R5bGVFbGVtZW50UHJvcHM7XHJcblx0XHRzdWI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdW1tYXJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRhYmxlOiBodG1sLklIdG1sVGFibGVFbGVtZW50UHJvcHM7XHJcblx0XHR0Ym9keTogaHRtbC5JSHRtbFRib2R5RWxlbWVudFByb3BzO1xyXG5cdFx0dGQ6IGh0bWwuSUh0bWxUZEVsZW1lbnRQcm9wcztcclxuXHRcdHRlbXBsYXRlOiBodG1sLklIdG1sVGVtcGxhdGVFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0YXJlYTogaHRtbC5JSHRtbFRleHRhcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0dGZvb3Q6IGh0bWwuSUh0bWxUZm9vdEVsZW1lbnRQcm9wcztcclxuXHRcdHRoOiBodG1sLklIdG1sVGhFbGVtZW50UHJvcHM7XHJcblx0XHR0aGVhZDogaHRtbC5JSHRtbFRIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0dGltZTogaHRtbC5JSHRtbFRpbWVFbGVtZW50UHJvcHM7XHJcblx0XHR0aXRsZTogaHRtbC5JSHRtbFRpdGxlRWxlbWVudFByb3BzO1xyXG5cdFx0dHI6IGh0bWwuSUh0bWxUckVsZW1lbnRQcm9wcztcclxuXHRcdHRyYWNrOiBodG1sLklIdG1sVHJhY2tFbGVtZW50UHJvcHM7XHJcblx0XHR0dDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0dWw6IGh0bWwuSUh0bWxVbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2YXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR2aWRlbzogaHRtbC5JSHRtbFZpZGVvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHdicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR4bXA6IGh0bWwuSUh0bWxYbXBFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly8gU1ZHIGVsZW1lbnRzXHJcblx0XHRzdmc6IHN2Zy5JU3ZnU3ZnRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z0E6IHN2Zy5JU3ZnQUVsZW1lbnRQcm9wcztcclxuXHRcdGFuaW1hdGU6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z0FuaW1hdGlvblByb3BzO1xyXG5cdFx0YW5pbWF0ZU1vdGlvbjogc3ZnLklTdmdBbmltYXRlTW90aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZVRhcm5zZm9ybTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblxyXG5cdFx0Y2lyY2xlOiBzdmcuSVN2Z0NpcmNsZUVsZW1lbnRQcm9wcztcclxuXHRcdGNsaXBQYXRoOiBzdmcuSVN2Z0NsaXBQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sb3JQcm9maWxlOiBzdmcuSVN2Z0NvbG9yUHJvZmlsZVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZGVmczogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRkZXNjOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRpc2NhcmQ6IHN2Zy5JU3ZnRGlzY2FyZEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbGxpcHNlOiBzdmcuSVN2Z0VsbGlwc2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmVCbGVuZDogc3ZnLklTdmdGZUJsZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb2xvck1hdHJpeDogc3ZnLklTdmdGZUNvbG9yTWF0cml4RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb25lbnRUcmFuc2Zlcjogc3ZnLklTdmdGZUNvbXBvbmVudFRyYW5zZmVyRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb3NpdGU6IHN2Zy5JU3ZnRmVDb21wb3NpdGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbnZvbHZlTWF0cml4OiBzdmcuSVN2Z0ZlQ29udm9sdmVNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogc3ZnLklTdmdGZURpZmZ1c2VMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlzcGxhY2VtZW50TWFwOiBzdmcuSVN2Z0ZlRGlzcGxhY2VtZW50TWFwRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXN0YW50TGlnaHQ6IHN2Zy5JU3ZnRmVEaXN0YW50TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZURyb3BTaGFkb3c6IHN2Zy5JU3ZnRmVEcm9wU2hhZG93RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGbG9vZDogc3ZnLklTdmdGZUZsb29kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGdW5jQTogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jQjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jRzogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jUjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVHYXVzc2lhbkJsdXI6IHN2Zy5JU3ZnRmVHYXVzc2lhbkJsdXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUltYWdlOiBzdmcuSVN2Z0ZlSW1hZ2VFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1lcmdlOiBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzIHwgc3ZnLklTdmdGaWx0ZXJQcmltaXRpdmVQcm9wcztcclxuXHRcdGZlTWVyZ2VOb2RlOiBzdmcuSVN2Z0ZlTWVyZ2VOb2RlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVNb3JwaG9sb2d5OiBzdmcuSVN2Z0ZlTW9ycGhvbG9neUVsZW1lbnRQcm9wcztcclxuXHRcdGZlT2Zmc2V0OiBzdmcuSVN2Z0ZlT2Zmc2V0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVQb2ludExpZ2h0OiBzdmcuSVN2Z0ZlUG9pbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogc3ZnLklTdmdGZVNwZWN1bGFyTGlnaHRpbmdFbGVtZW50UHJvcHM7XHJcblx0XHRmZVNwb3RMaWdodDogc3ZnLklTdmdGZVNwb3RMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlVGlsZTogc3ZnLklTdmdGZVRpbGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZVR1cmJ1bGVuY2U6IHN2Zy5JU3ZnRmVUdXJidWxlbmNlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlsdGVyOiBzdmcuSVN2Z0ZpbHRlckVsZW1lbnRQcm9wcztcclxuXHRcdGZvcmVpZ25PYmplY3Q6IHN2Zy5JU3ZnRm9yZWlnbk9iamVjdEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRnOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHJcblx0XHRoYXRjaDogc3ZnLklTdmdIYXRjaEVsZW1lbnRQcm9wcztcclxuXHRcdGhhdGNocGF0aDogc3ZnLklTdmdIYXRjaHBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aW1hZ2U6IHN2Zy5JU3ZnSW1hZ2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bGluZTogc3ZnLklTdmdMaW5lRWxlbWVudFByb3BzO1xyXG5cdFx0bGluZWFyR3JhZGllbnQ6IHN2Zy5JU3ZnTGluZWFyR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFya2VyOiBzdmcuSVN2Z01hcmtlckVsZW1lbnRQcm9wcztcclxuXHRcdG1hc2s6IHN2Zy5JU3ZnTWFza0VsZW1lbnRQcm9wcztcclxuXHRcdG1ldGFkYXRhOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdG1wYXRoOiBzdmcuSVN2Z01QYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHBhdGg6IHN2Zy5JU3ZnUGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdHBhdHRlcm46IHN2Zy5JU3ZnUGF0dGVybkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlnb246IHN2Zy5JU3ZnUG9seWdvbkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlsaW5lOiBzdmcuSVN2Z1BvbHlsaW5lRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBzdmcuSVN2Z1JhZGlhbEdyYWRpZW50RWxlbWVudFByb3BzO1xyXG5cdFx0cmVjdDogc3ZnLklTdmdSZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z1NjcmlwdDogc3ZnLklTdmdTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZXQ6IHN2Zy5JU3ZnU2V0RWxlbWVudFByb3BzO1xyXG5cdFx0c29saWRjb2xvcjogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRzdG9wOiBzdmcuSVN2Z1N0b3BFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdTdHlsZTogc3ZnLklTdmdTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN3aXRjaDogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHM7XHJcblx0XHRzeW1ib2w6IHN2Zy5JU3ZnU3ltYm9sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRleHQ6IHN2Zy5JU3ZnVGV4dEVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRQYXRoOiBzdmcuSVN2Z1RleHRQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0c3ZnVGl0bGU6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFNwYW46IHN2Zy5JU3ZnVGV4dFNwYW5FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dXNlOiBzdmcuSVN2Z1VzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2aWV3OiBzdmcuSVN2Z1ZpZXdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly9bZWxlbU5hbWU6IHN0cmluZ106IGFueVxyXG5cdH1cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gaW50cmluc2ljIGVsZW1lbnRzIGFuZCB0byBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNBdHRyaWJ1dGVzIGV4dGVuZHMgSUNvbW1vblByb3BzIHt9XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0NsYXNzQXR0cmlidXRlczxUPiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG5cdHtcclxuXHRcdC8vIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGlzIG1vdW50ZWQuIFRoZVxyXG5cdFx0Ly8gcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuXHRcdHJlZj86IFJlZlByb3BUeXBlPFQ+O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgZnVuY3Rpb25zIHRoYXQgZGVwZW5kIG9uIFZOLWRlcml2ZWQgY2xhc3Nlc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtjcmVhdGVWTkNoYWluRnJvbUpTWCwgUm9vdFZOfSBmcm9tIFwiLi4vY29yZS9Sb290Vk5cIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogSlNYIEZhY3RvcnkgZnVuY3Rpb24uIEluIG9yZGVyIGZvciB0aGlzIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYnkgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIsIHRoZVxyXG4gKiB0c2NvbmZpZy5qc29uIG11c3QgaGF2ZSB0aGUgZm9sbG93aW5nIG9wdGlvbjpcclxuICpcclxuICogXCJjb21waWxlck9wdGlvbnNcIjpcclxuICoge1xyXG4gKiAgICAgXCJqc3hcIjogXCJyZWFjdFwiLFxyXG4gKiAgICAgXCJqc3hGYWN0b3J5XCI6IFwibWltLmpzeFwiXHJcbiAqIH1cclxuICpcclxuICogVGhlIC50c3ggZmlsZXMgbXVzdCBpbXBvcnQgdGhlIG1pbWJsIG1vZHVsZSBhcyBtaW06IGltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG4gKiBAcGFyYW0gdGFnIFxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqIEBwYXJhbSBjaGlsZHJlbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqc3goIHRhZzogYW55LCBwcm9wczogYW55LCAuLi5jaGlsZHJlbjogYW55W10pOiBhbnlcclxue1xyXG5cdC8vIGNoaWxkcmVuIHBhcmFtZXRlciBpcyBhbHdheXMgYW4gYXJyYXkuIEEgY29tcG9uZW50IGNhbiBzcGVjaWZ5IHRoYXQgaXRzIGNoaWxkcmVuIGFyZSBhbiBhcnJheVxyXG5cdC8vIG9mIGEgY2VydGFpbiB0eXBlLCBlLmcuIGNsYXNzIEEgZXh0ZW5kcyBtaW0uQ29tcG9uZW50PHt9LFRbXT4uIEluIHRoaXMgY2FzZSB0aGVyZSBhcmUgdHdvXHJcblx0Ly8gd2F5cyB0byBzcGVjaWZ5IGNoaWxkcmVuIGluIEpTWDpcclxuXHQvL1x0MSkgPEE+e3QxfXt0Mn08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW3QxLCB0Ml0uXHJcblx0Ly9cdDIpIDxBPntbdDEsIHQyXX08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW1t0MSx0Ml1dLlxyXG5cdC8vIFRoZSByZWFsQ2hpbGRyZW4gdmFyaWFibGUgYWNjb21tb2RhdGVzIGJvdGggY2FzZXMuXHJcblx0bGV0IHJlYWxDaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KCBjaGlsZHJlblswXSkgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xyXG5cdHJldHVybiBjcmVhdGVWTkNoYWluRnJvbUpTWCggdGFnLCBwcm9wcywgcmVhbENoaWxkcmVuKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24pIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQgaW4gYVxyXG4gKiBzeW5jaHJvbnVzIG1hbm5lci5cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byByZW5kZXIuXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0byByZW5kZXIgdGhlIGNvbnRlbnQuIElmIG51bGwgb3IgdW5kZWZpbmVkLCB0aGVuXHJcbiAqIHJlbmRlciB1bmRlciB0aGUgZG9jdW1lbnQuYm9keSB0YWcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW91bnRTeW5jKCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdFJvb3RWTi5tb3VudFJvb3RTeW5jKCBjb250ZW50LCBhbmNob3JETik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBjb250ZW50IHRoYXQgd2FzIG9yaWdpbmFsbHkgZ2VuZXJhdGVkIGJ5IHRoZSBtb3VudFN5bmMgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0aGUgY29udGVudCB3YXMgcHJldmlvdXNseSByZW5kZXJlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50U3luYyggYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0Um9vdFZOLnVubW91bnRSb290U3luYyggYW5jaG9yRE4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbikgdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudFxyXG4vLyBhc3luY2hyb25vdXNseS5cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byByZW5kZXIuXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0byByZW5kZXIgdGhlIGNvbnRlbnQuIElmIG51bGwgb3IgdW5kZWZpbmVkLHRoZW5cclxuICpcdFx0XHRcdHJlbmRlciB1bmRlciB0aGUgZG9jdW1lbnQuYm9keSB0YWcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW91bnQoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0Um9vdFZOLm1vdW50Um9vdCggY29udGVudCwgYW5jaG9yRE4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBjb250ZW50IHRoYXQgd2FzIG9yaWdpbmFsbHkgZ2VuZXJhdGVkIGJ5IHRoZSBtb3VudCBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQoIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdFJvb3RWTi51bm1vdW50Um9vdCggYW5jaG9yRE4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQcm92aWRlIGltcGxlbWVudGF0aW9uIGZvciB0aGUgcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUgZXhwb3J0ZWQgZnVuY3Rpb24uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQge0VsbUF0dHIsIFByb3BUeXBlfSBmcm9tIFwiLi4vY29yZS9FbG1BdHRyXCI7XHJcblxyXG5mdW5jdGlvbiBzX3JlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlPFQ+KCBwcm9wTmFtZTogc3RyaW5nLCBmYWN0b3J5OiBJQ3VzdG9tQXR0cmlidXRlRmFjdG9yeTxUPik6IHZvaWRcclxue1xyXG5cdEVsbUF0dHIucmVnaXN0ZXJQcm9wZXJ0eSggcHJvcE5hbWUsIHsgdHlwZTogUHJvcFR5cGUuQ3VzdG9tQXR0ciwgZmFjdG9yeSB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1ibFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9taW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9IdG1sVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9TdmdUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0VsbUF0dHJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9VdGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0V2ZW50U2xvdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0xvY2FsU3R5bGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbXAvUm91dGVyXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX187Il0sInNvdXJjZVJvb3QiOiIifQ==