import * as mimurl from "mimurl";
import * as mim from "mimbl";
declare module "mimbl/lib/api/mim" {
    interface IServiceDefinitions {
        Router: IRouterService;
    }
}
/**
 * The IRouterService is a service that is published by the Router component. It allows
 * subscribers to navigate to paths defined by Router's routes.
 */
export interface IRouterService {
    navigateByURL(url: string, makeHistoryEntry?: boolean): void;
    navigateByID(id: string, fields?: RouteFields, makeHistoryEntry?: boolean): void;
}
/**
 * Type of object containing field values that is passed when navigating to a route. When
 * navigating by route ID, the fields are passed explicitly. When navigating by URL, the fields
 * are extracted from the URL according to the URL pattern in the route.
 */
export declare type RouteFields = {
    [P: string]: mimurl.FieldValueType;
};
/**
 * Type of a function that provides content to display for a route. It can return a Promise in
 * which case the Router will display progress UI until the content becomes available.
 */
export declare type NavToRouteFuncType = (fields: RouteFields) => any;
/**
 * Type of a function that is invoked when navigating from the currently displayed route. If false
 * is returned, navigation doesn't happen. This allows the current component to prompt the user
 * about unsaved data. If Promise is returned, the Router will wait until the response is available.
 */
export declare type NavFromRouteFuncType = () => boolean | Promise<boolean>;
/**
 * The Route interface defines a navigation target. Routes can have sub-routes, which creates a
 * hierarchy of routes.
 */
export interface Route {
    /**
     * Unique (but optional) ID that allows navigating to the target using a simple ID instead of
     * path. The path member will be displayed in the browser's address control.
     */
    id?: string;
    /**
     * URL pattern - can contain named parameters (as in /users/{uid}). This can be left empty
     * if only id is used
     */
    urlPattern?: string;
    /**
     * Optional property that is passed to the history.pushState function.
     */
    title?: string;
    /**
     * Navigation function that provides content to display.
     */
    navToFunc?: NavToRouteFuncType;
    /**
     * Navigation function that allows the current component to prompt the user about unsaved data.
     */
    navFromFunc?: NavFromRouteFuncType;
    /**
     * Ordered list of Route objects, which are sub-routes of this route.
     */
    subRoutes?: Route[];
}
/**
 * Type of a function that is invoked by the Router to display the content of the current route.
 * This allows the router do have its own content - the same for all routes - and insert the
 * current router's content into it.
 */
export declare type RouterOuterContentRenderFuncType = (routeContent: any) => any;
/**
 * Type of a function that is invoked by the Router to display a progress UI while it is loading
 * route content.
 */
export declare type ProgressContentRenderFuncType = () => any;
/**
 * The IRouterProps interface
 */
export interface IRouterProps {
    /**
     * Flag indicating whether this router controls the browser; that is, uses History API to
     * push new state and intercept back and forward commands. Default value is true.
     */
    controlsBrowser?: boolean;
    /**
     * Flag indicating that if this router cannot resolve a path, it will delegate to a router up
     * the component chain (if there is one).
     */
    chainsToHigherRouter?: boolean;
    /**
     * Absolute or relative URL based on which all route paths will be resolved. Default value is
     * true.
     */
    baseURL?: string;
}
/**
 * The Router component provides client-side routing. It works with Route objects that define
 * available navigation targets.
 */
export declare class Router extends mim.Component<IRouterProps, Route[]> implements IRouterService, mim.IErrorHandlingService {
    constructor(props: IRouterProps);
    /**
     * Inserts the given route at the given index in the list.
     * @param route [[Route]] object to add
     * @param index Index at which to add the route object. If the index is not defined, the
     *		route is appended to the end of the list. If index is out of range an exception will
     *		be thrown.
     */
    addRoute(route: Route, index?: number): void;
    /**
     * Removes a route at the given index in the list and returns the Route object. If index is
     * out of range an exception will be thrown.
     *
     * @param index
     * @return Route [[Route]] object that was removed.
     */
    removeRoute(index: number): Route;
    private addRouteToMap;
    private removeRouteFromMap;
    /**
     * Navigates to a route matching the given URL.
     * @param url Absolute or relative URL to navigate to
     * @param makeHistoryEntry
     */
    navigateByURL(url: string, makeHistoryEntry?: boolean): void;
    /**
     * Navigates to a route with the given ID.
     *
     * @param id ID of the route
     * @param params Parameters to be passed to the route's function
     * @param makeHistoryEntry Flag indicating whether the Router should create a new entry in the
     *		browser's history.
     */
    navigateByID(id: string, fields?: RouteFields, makeHistoryEntry?: boolean): void;
    /**
     * Finds a route by going through the route hierarchy and trying to match the given URL.
     * If the route is found, the URL is parsed and any parameters are extracted from it.
     * @param url
     */
    private findRouteByURL;
    /**
     * Looks for a route matching the given URL among the given array of Route objects and
     * recursively among their sub-routes.
     * @param url URL to match
     * @param routes Array of Route objects to match with the URL
     */
    private static findRouteRecursiveByURL;
    /**
     * Navigates to the given route passing the given parameters.
     *
     * @param id ID of the route
     * @param params Parameters to be passed to the route's function
     * @param makeHistoryEntry Flag indicating whether the Router should create a new entry in the
     *		browser's history.
     */
    private navigateToRoute;
    reportError(err: any, path: string[]): void;
    willMount(): void;
    willUnmount(): void;
    render(): any;
    handleError(err: any, nodePath: string[]): void;
    /**
     * "Virtual" function that can be overridden by derived classes. Responsible for returning
     * content to be displayed by the Router component. The default implementation either calls
     * the outerContentFunc if defined or just returns the content passed as a parameter.
     *
     * @param currRouteContent
     * @return Content to be displayed by the Router component.
     */
    protected virtRender(currRouteContent: any): any;
    private onPopstate;
    private get controlsBrowser();
    private get chainsToHigherRouter();
    private get baseURL();
    /**
     * Sets the function that renders the content of the current route inside the router's own content. If
     * this member is undefined, only the current route's content will be displayed.
     */
    set OuterContentFunc(val: RouterOuterContentRenderFuncType);
    private outerContentFunc;
    /** Sets the function that renders a progress UI while the router is loading route content. */
    set ProgressContentFunc(val: ProgressContentRenderFuncType);
    private progressContentFunc;
    private higherRouterService;
    private routes;
    private routesByID;
    private currRoute;
    private currRouteContent;
    private error;
    private errorPath;
}
export interface LinkProps extends mim.IHtmlAElementProps {
    routeURL?: string;
    routeID?: string;
    fields?: RouteFields;
    makeHistoryEntry?: boolean;
}
export declare class Link extends mim.Component<LinkProps> {
    constructor(props: LinkProps);
    render(): any;
    private onClick;
}
