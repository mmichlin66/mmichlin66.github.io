import { Extended, CssPosition, CssAngle, CssLength } from "../styles/UtilTypes";
import { GradientStopOrHint, LinearGradAngle, CrossFadeParam, IImageProxy } from "../styles/ImageTypes";
import { ExtentKeyword } from "../styles/StyleTypes";
/**
 * Returns an ImageProxy function representing the `cross-fade()` CSS function.
 */
export declare function crossFade(...args: CrossFadeParam[]): IImageProxy;
/**
 * The ILinearGradient interface represents a function that produces either `linear-gradient` or
 * `repeating-linear-gradient` CSS function. It can be directly assigned to a suitable style
 * property (e.g. background-image). In addition it has the `to` method that can be called to
 * specify the angle of the gradiant.
 */
export interface ILinearGradient extends IImageProxy {
    to(angle: LinearGradAngle): IImageProxy;
}
/**
 * Function returning the ILinearGradient interface representing the `linear-gradient` CSS functions.
 *
 * *Example:*
 *
 * ```typescript
 * backgroundImage: linearGradient( "red", "blue")
 *
 * backgroundImage: linearGradient( "red", "blue").to( 45)
 * ```
 */
export declare function linearGradient(...stopsOrHints: GradientStopOrHint[]): ILinearGradient;
/**
 * Function returning the ILinearGradient interface representing the `repeating-linear-gradient` CSS functions.
 *
 * *Example:*
 *
 * ```typescript
 * backgroundImage: linearGradient( "red", "blue")
 *
 * backgroundImage: linearGradient( "red", "blue").to( 45)
 * ```
 */
export declare function repeatingLinearGradient(...stopsOrHints: GradientStopOrHint[]): ILinearGradient;
/**
 * The IRadialGradient interface represents a function that produces either `radial-gradient` or
 * `repeating-radial-gradient` CSS function. It can be directly assigned to a suitable style
 * property (e.g. background-image). In addition it has the `circle`, `ellipse`, `extent` and `at`
 * methods that can be called to specify parameters of the gradiant.
 */
export interface IRadialGradient extends IImageProxy {
    circle(sizeOrExtent?: Extended<CssLength> | Extended<ExtentKeyword>): IRadialGradient;
    ellipse(sizeOrExtent?: [Extended<CssLength>, Extended<CssLength>] | Extended<ExtentKeyword>): IRadialGradient;
    extent(extent: Extended<ExtentKeyword>): IRadialGradient;
    at(pos: Extended<CssPosition>): IRadialGradient;
}
/**
 * Function returning the IRadialGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Example:*
 *
 * ```typescript
 * backgroundImage: radialGradient( "red", "blue")
 *
 * backgroundImage: radialGradient( "red", "blue").circle( "30%").at( ["center", "65%"])
 *
 * backgroundImage: radialGradient( "red", "blue").ellipse( "closest-side")
 * ```
 */
export declare function radialGradient(...stopsOrHints: GradientStopOrHint[]): IRadialGradient;
/**
 * Function returning the IRadialGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Example:*
 *
 * ```typescript
 * backgroundImage: repeatinGradialGradient( "red", "blue")
 *
 * backgroundImage: repeatinGradialGradient( "red", "blue").circle( "30%").at( ["center", "65%"])
 *
 * backgroundImage: repeatinGradialGradient( "red", "blue").ellipse( "closest-side")
 * ```
 */
export declare function repeatingGradialGradient(...stopsOrHints: GradientStopOrHint[]): IRadialGradient;
/**
 * The IConicGradient interface represents a function that produces either `conic-gradient` or
 * `repeating-conic-gradient` CSS function. It can be directly assigned to a suitable style
 * property (e.g. background-image). In addition it has the `from` and `at` methods that can be
 * called to specify the parameters of the gradiant.
 */
export interface IConicGradient extends IImageProxy {
    from(angle: Extended<CssAngle>): IConicGradient;
    at(pos: Extended<CssPosition>): IConicGradient;
}
/**
 * Function returning the IConicGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Example:*
 *
 * ```typescript
 * backgroundImage: conicGradient( "red", "blue")
 *
 * backgroundImage: conicGradient( "red", "blue").from( 0.25).at( ["center", "65%"])
 * ```
 */
export declare function conicGradient(...stopsOrHints: GradientStopOrHint[]): IConicGradient;
/**
 * Function returning the IConicGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Example:*
 *
 * ```typescript
 * backgroundImage: repeatingConicGradient( "red", "blue")
 *
 * backgroundImage: repeatingConicGradient( "red", "blue").from( 0.25).at( ["center", "65%"])
 * ```
 */
export declare function repeatingConicGradient(...stopsOrHints: GradientStopOrHint[]): IConicGradient;
//# sourceMappingURL=ImageAPI.d.ts.map