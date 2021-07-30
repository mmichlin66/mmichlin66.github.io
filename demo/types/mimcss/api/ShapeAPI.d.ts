import { Extended, IStringProxy } from "./CoreTypes";
import { CssAngle, CssLength, CssNumber, CssPercent, CssPoint } from "./NumericTypes";
import { CssColor } from "./ColorTypes";
import { CrossFadeParam, GradientStopOrHint, ICircle, IConicGradient, IEllipse, ShapeRadius, IImageProxy, IInset, ILinearGradient, IMinMaxProxy, IPathBuilder, IPolygon, IRadialGradient, IRepeatProxy, ISpanProxy, IFilterProxy, ITransformProxy, IUrlProxy, IRayProxy, TimingFunctionJumpTerm, ITimingFunctionProxy, ICursorProxy, ExtentKeyword, AttrTypeKeyword, AttrUnitKeyword, FillRule } from "./ShapeTypes";
import { ICounterRule, IIDRule } from "./RuleTypes";
import { GridLineCountOrName, GridTrack, GridTrackSize, ListStyleType_StyleType } from "./StyleTypes";
/**
 * Function returning the ILinearGradient interface representing the `linear-gradient` CSS functions.
 *
 * *Examples:*
 *
 * ```typescript
 * backgroundImage: linearGradient( "red", "blue")
 *
 * backgroundImage: linearGradient( ["red", 30], ["green", 50, 60], ["blue", 80]).repeating()
 *
 * backgroundImage: linearGradient( "red", "blue").to( 45)
 * ```
 *
 * @param stopsOrHints Variable argument list specifying stops or hints that will be added to
 * the gradient definition.
 *
 * @category Image
 */
export declare function linearGradient(...stopsOrHints: GradientStopOrHint<CssLength>[]): ILinearGradient;
/**
 * Function returning the IRadialGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Examples:*
 *
 * ```typescript
 * backgroundImage: radialGradient( "red", "blue")
 *
 * backgroundImage: radialGradient( "red", "blue").circle( css.percent(30)).at( ["center", css.percent(65)])
 *
 * backgroundImage: radialGradient( "red", "blue").circle( 200).repeating()
 *
 * backgroundImage: radialGradient( "red", "blue").ellipse( "closest-side")
 * ```
 *
 * @param stopsOrHints Variable argument list specifying stops or hints that will be added to
 * the gradient definition.
 *
 * @category Image
 */
export declare function radialGradient(...stopsOrHints: GradientStopOrHint<CssLength>[]): IRadialGradient;
/**
 * Function returning the IConicGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Examples:*
 *
 * ```typescript
 * backgroundImage: conicGradient( "red", "blue")
 *
 * backgroundImage: conicGradient().repeating().add( "red", "blue")
 *
 * backgroundImage: conicGradient( "red", "blue").from( 0.25).at( ["center", css.percent(65)])
 * ```
 *
 * @param stopsOrHints Variable argument list specifying stops or hints that will be added to
 * the gradient definition.
 *
 * @category Image
 */
export declare function conicGradient(...stopsOrHints: GradientStopOrHint<CssAngle>[]): IConicGradient;
/**
 * Returns an ImageProxy function representing the `cross-fade()` CSS function.
 *
 * @category Image
 */
export declare function crossFade(...args: CrossFadeParam[]): IImageProxy;
/**
 * Returns an IFilterProxy function representing the `brightness()` CSS function.
 *
 * @category Filter
 */
export declare function brightness(p: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `contrast()` CSS function.
 *
 * @category Filter
 */
export declare function contrast(p: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `grayscale()` CSS function.
 *
 * @category Filter
 */
export declare function grayscale(p: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `invert()` CSS function.
 *
 * @category Filter
 */
export declare function invert(p: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `opacity()` CSS function.
 *
 * @category Filter
 */
export declare function opacity(p: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `saturate()` CSS function.
 *
 * @category Filter
 */
export declare function saturate(p: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `sepia()` CSS function.
 *
 * @category Filter
 */
export declare function sepia(p: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `blur()` CSS function.
 *
 * @category Filter
 */
export declare function blur(r: Extended<CssLength>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `dropShadow()` CSS function.
 * @param x Horizontal offset of the shadow.
 * @param y Vertical offset of the shadow.
 * @param color Color of the shadow.
 * @param blur Value of the shadow's blurring. The default value is 1 pixel.
 *
 * @category Filter
 */
export declare function dropShadow(x: Extended<CssLength>, y: Extended<CssLength>, color?: Extended<CssColor>, blur?: Extended<CssLength>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `hue-rotate()` CSS function.
 *
 * @category Filter
 */
export declare function hueRotate(a: Extended<CssAngle>): IFilterProxy;
/**
 * Returns an ITransformProxy function representing the `matrix()` CSS function.
 *
 * @category Transform
 */
export declare function matrix(a: Extended<CssNumber>, b: Extended<CssNumber>, c: Extended<CssNumber>, d: Extended<CssNumber>, tx: Extended<CssNumber>, ty: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `matrix3d()` CSS function.
 *
 * @category Transform
 */
export declare function matrix3d(a1: Extended<CssNumber>, b1: Extended<CssNumber>, c1: Extended<CssNumber>, d1: Extended<CssNumber>, a2: Extended<CssNumber>, b2: Extended<CssNumber>, c2: Extended<CssNumber>, d2: Extended<CssNumber>, a3: Extended<CssNumber>, b3: Extended<CssNumber>, c3: Extended<CssNumber>, d3: Extended<CssNumber>, a4: Extended<CssNumber>, b4: Extended<CssNumber>, c4: Extended<CssNumber>, d4: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `perspective()` CSS function.
 *
 * @category Transform
 */
export declare function perspective(d: Extended<CssLength>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `rotate()` CSS function.
 *
 * @category Transform
 */
export declare function rotate(a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `rotateX()` CSS function.
 *
 * @category Transform
 */
export declare function rotateX(a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `rotateY()` CSS function.
 *
 * @category Transform
 */
export declare function rotateY(a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `rotateZ()` CSS function.
 *
 * @category Transform
 */
export declare function rotateZ(a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `rotate3d()` CSS function.
 *
 * @category Transform
 */
export declare function rotate3d(x: Extended<CssNumber>, y: Extended<CssNumber>, z: Extended<CssNumber>, a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `scale()` CSS function.
 *
 * @category Transform
 */
export declare function scale(sx: Extended<CssNumber>, sy?: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `scaleX()` CSS function.
 *
 * @category Transform
 */
export declare function scaleX(s: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `scaleY()` CSS function.
 *
 * @category Transform
 */
export declare function scaleY(s: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `scaleZ()` CSS function.
 *
 * @category Transform
 */
export declare function scaleZ(s: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `scale3d()` CSS function.
 *
 * @category Transform
 */
export declare function scale3d(sx: Extended<CssNumber>, sy: Extended<CssNumber>, sz: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `skew()` CSS function.
 *
 * @category Transform
 */
export declare function skew(ax: Extended<CssAngle>, ay?: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `skewX()` CSS function.
 *
 * @category Transform
 */
export declare function skewX(a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `skewY()` CSS function.
 *
 * @category Transform
 */
export declare function skewY(a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `translate()` CSS function.
 *
 * @category Transform
 */
export declare function translate(x: Extended<CssLength>, y?: Extended<CssLength>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `translateX()` CSS function.
 *
 * @category Transform
 */
export declare function translateX(d: Extended<CssLength>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `translateY()` CSS function.
 *
 * @category Transform
 */
export declare function translateY(d: Extended<CssLength>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `translateZ()` CSS function.
 *
 * @category Transform
 */
export declare function translateZ(d: Extended<CssLength>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `translate3d()` CSS function.
 *
 * @category Transform
 */
export declare function translate3d(x: Extended<CssLength>, y: Extended<CssLength>, z: Extended<CssLength>): ITransformProxy;
/**
 * Returns an IInsetProxy function representing the `inset()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: inset( css.percent(15))
 *
 * clipPath: inset( 10, 12, 14, 16).round( 8)
 * ```
 *
 * @category Basic Shape
 */
export declare function inset(o1: Extended<CssLength>, o2?: Extended<CssLength>, o3?: Extended<CssLength>, o4?: Extended<CssLength>): IInset;
/**
 * Returns an ICircle objectn representing the `circle()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: circle( 100)
 *
 * clipPath: circle( 100).at( ["center", css.percent(30)])
 * ```
 *
 * @category Basic Shape
 */
export declare function circle(radius?: ShapeRadius): ICircle;
/**
 * Returns an IEllipse object representing the `ellipse()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: ellipse().at( ["top", "50%"])
 * ```
 *
 * @category Basic Shape
 */
export declare function ellipse(): IEllipse;
/**
 * Returns an IEllipse object representing the `ellipse()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: ellipse( 100, 50)
 *
 * clipPath: ellipse( 100, 50).at( ["center", css.percent(30)])
 * ```
 *
 * @category Basic Shape
 */
export declare function ellipse(radiusX: ShapeRadius, radiusY: ShapeRadius): IEllipse;
/**
 * Returns an IPolygon interface representing the `polygon()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: css.polygon( [0,100], [50,0], [100,100])
 *
 * clipPath: css.polygon( [0,100], [50,0], [100,100]).fill( "evenodd")
 * ```
 *
 * @category Basic Shape
 */
export declare function polygon(...points: CssPoint[]): IPolygon;
/**
 * Returns an IPathBuilder interface that allows building a CSS path.
 *
 * @category Basic Shape
 */
export declare function path(fillRule?: FillRule): IPathBuilder;
/**
 * Returns an IRayFunc function representing invocation of the `ray()` CSS function.
 *
 * @category Basic Shape
 */
export declare function ray(angle: Extended<CssAngle>, size?: Extended<ExtentKeyword | CssLength>, contain?: boolean): IRayProxy;
/**
* Returns an IMinMaxProxy function representing the `minmax()` CSS function.
*
* @category Grid
*/
export declare function minmax(min: GridTrackSize, max: GridTrackSize): IMinMaxProxy;
/**
 * Returns an IRepeatProxy function representing the `repeat()` CSS function.
 *
 * @category Grid
 */
export declare function repeat(count: Extended<CssNumber> | "auto-fill" | "auto-fit", ...tracks: GridTrack[]): IRepeatProxy;
/**
 * Returns an ISpanProxy function representing the `span` expression for grid layouts. If the first
 * parameter is a number, the second parameter (if defined) must be a name; if the first parameter
 * is a name, the second parameter (if defined) must be a number.
 *
 * @category Grid
 */
export declare function span(countOrName: Extended<GridLineCountOrName>, nameOrCount?: Extended<GridLineCountOrName>): ISpanProxy;
/**
 * Returns a function representing the CSS `counter()` function with additional
 * optional strings added after and/or before the counter.
 *
 * @category Counter
 */
export declare function counter(counterObj: Extended<ICounterRule | string>, style?: Extended<ListStyleType_StyleType>, textAfter?: Extended<string>, textBefore?: Extended<string>): IStringProxy;
/**
 * Returns a function representing the CSS `counters()` function with the given
 * separator string and additional optional strings added after and/or before the counter.
 *
 * @category Counter
 */
export declare function counters(counterObj: Extended<ICounterRule | string>, separator: Extended<string>, style?: Extended<ListStyleType_StyleType>, textAfter?: Extended<string>, textBefore?: Extended<string>): IStringProxy;
/**
 * Returns a function representing the CSS `url()` function. The string parameter
 * will be wrapped in a `url()` invocation. The function can also accept the IIDRule object to
 * create url(#element) invocation, which is often used to address SVG elements by their IDs.
 *
 * @category Miscellaneous
 */
export declare function url(p: Extended<string | IIDRule>): IUrlProxy;
/**
 * Returns a function representing the CSS `url()` function.
 *
 * @category Miscellaneous
 */
export declare function cursor(p: Extended<string | IIDRule>): ICursorProxy;
/**
 * Returns a function representing the CSS `url()` function followed by two numbers
 * indicating the cursor hotspot.
 *
 * @category Miscellaneous
 */
export declare function cursor(p: Extended<string | IIDRule>, x: number, y: number): ICursorProxy;
/**
 * Returns a function representing the `attr()` CSS function. It returns IStringProxy
 * and theoretically can be used in any style property; however, its use by browsers is currently
 * limited to the `content` property. Also no browser currently support type, units or fallback
 * values.
 *
 * @category Miscellaneous
 */
export declare function attr(attrName: Extended<string>, typeOrUnit?: Extended<AttrTypeKeyword | AttrUnitKeyword>, fallback?: Extended<string>): IStringProxy;
/**
 * Returns a function representing an invocation of the CSS `steps()` function.
 *
 * @category Transition and Animation
 */
export declare function steps(n: Extended<number>, jumpTerm?: TimingFunctionJumpTerm): ITimingFunctionProxy;
/**
 * Returns a function representing an invocation of the CSS `cubic-bezier()` function.
 *
 * @category Transition and Animation
 */
export declare function cubicBezier(n1: Extended<number>, n2: Extended<number>, n3: Extended<number>, n4: Extended<number>): ITimingFunctionProxy;
//# sourceMappingURL=ShapeAPI.d.ts.map