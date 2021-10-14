import { Extended, IStringProxy } from "./CoreTypes";
import { CssAngle, CssLength, CssNumber, CssPercent, CssPoint } from "./NumericTypes";
import { CssColor } from "./ColorTypes";
import { CrossFadeParam, GradientStopOrHint, ShapeRadius, IImageProxy, IMinMaxFunc, IPathBuilder, IRepeatFunc, IGridSpanFunc, IUrlFunc, TimingFunctionJumpTerm, ICursorFunc, ExtentKeyword, AttrTypeKeyword, AttrUnitKeyword, FillRule, ICircleBuilder, IEllipseBuilder, IInsetBuilder, IPolygonBuilder, IRayFunc, IStepsFunc, ICubicBezierFunc, IPercentFilterFunc, IBlurFunc, IDropShadowFunc, IHueRotateFunc, IMatrixFunc, IMatrix3dFunc, IPerspectiveFunc, IRotateFunc, IRotate3dFunc, IScale1dFunc, IScaleFunc, IScale3dFunc, ISkewFunc, ISkew1dFunc, ITranslate1dFunc, ITranslate3dFunc, ITranslateFunc, ILinearGradientBuilder, IRadialGradientBuilder, IConicGradientBuilder } from "./ShapeTypes";
import { ICounterRule, IIDRule } from "./RuleTypes";
import { GridLineCountOrName, GridTrack, GridTrackSize, ListStyleType_StyleType } from "./StyleTypes";
/**
 * Function returning the ILinearGradientBuilder interface representing the `linear-gradient` CSS functions.
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
 * @param stops Variable argument list specifying stops or hints that will be added to
 * the gradient definition.
 *
 * @category Image
 */
export declare function linearGradient(...stops: GradientStopOrHint<CssLength>[]): ILinearGradientBuilder;
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
 * @param stops Variable argument list specifying stops or hints that will be added to
 * the gradient definition.
 *
 * @category Image
 */
export declare function radialGradient(...stops: GradientStopOrHint<CssLength>[]): IRadialGradientBuilder;
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
 * @param stops Variable argument list specifying stops or hints that will be added to
 * the gradient definition.
 *
 * @category Image
 */
export declare function conicGradient(...stops: GradientStopOrHint<CssAngle>[]): IConicGradientBuilder;
/**
 * Returns an ImageProxy function representing the `cross-fade()` CSS function.
 *
 * @category Image
 */
export declare function crossFade(...args: CrossFadeParam[]): IImageProxy;
/**
 * Returns an [[IPercentFilterFunc]] object representing the `brightness()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: brightness(150%)
 *     bright = this.$class({ filter: css.brightness(150)})
 *
 *     // filter: brightness(50%)
 *     dim = this.$class({ filter: css.brightness(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
export declare function brightness(p: Extended<CssPercent>): IPercentFilterFunc;
/**
 * Returns an [[IPercentFilterFunc]] object representing the `contrast()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: contrast(150%)
 *     highContrast = this.$class({ filter: css.contrast(150)})
 *
 *     // filter: contrast(50%)
 *     lowContrast = this.$class({ filter: css.contrast(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
export declare function contrast(p: Extended<CssPercent>): IPercentFilterFunc;
/**
 * Returns an [[IPercentFilterFunc]] object representing the `grayscale()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: grayscale(100%)
 *     gray = this.$class({ filter: css.grayscale(100)})
 *
 *     // filter: grayscale(50%)
 *     halfColor = this.$class({ filter: css.grayscale(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
export declare function grayscale(p: Extended<CssPercent>): IPercentFilterFunc;
/**
 * Returns an [[IPercentFilterFunc]] object representing the `invert()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: invert(100%)
 *     inverted = this.$class({ filter: css.invert(100)})
 *
 *     // filter: invert(75%)
 *     somewhatnverted = this.$class({ filter: css.invert(0.75)})
 *
 *     // filter: invert(50%)
 *     gray = this.$class({ filter: css.invert(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
export declare function invert(p: Extended<CssPercent>): IPercentFilterFunc;
/**
 * Returns an [[IPercentFilterFunc]] object representing the `opacity()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: opacity(50%)
 *     halfTransparent = this.$class({ filter: css.opacity(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
export declare function opacity(p: Extended<CssPercent>): IPercentFilterFunc;
/**
 * Returns an [[IPercentFilterFunc]] object representing the `saturate()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: saturate(150%)
 *     superSaturated = this.$class({ filter: css.saturate(150)})
 *
 *     // filter: saturate(50%)
 *     underSaturated = this.$class({ filter: css.saturate(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
export declare function saturate(p: Extended<CssPercent>): IPercentFilterFunc;
/**
 * Returns an [[IPercentFilterFunc]] object representing the `sepia()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: sepia(100%)
 *     vintage = this.$class({ filter: css.sepia(100)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
export declare function sepia(p: Extended<CssPercent>): IPercentFilterFunc;
/**
 * Returns an [[IBlurFunc]] object representing the `blur()` CSS function parameters.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: blur(0)
 *     sharp = this.$class({ filter: css.blur(0)})
 *
 *     // filter: blur(2px)
 *     blurred = this.$class({ filter: css.blur(2)})
 *
 *     // filter: blur(1.5em)
 *     superBlurred = this.$class({ filter: css.blur(1.5)})
 * }
 * ```
 *
 * @param r Radius of the blur.
 * @returns The `IBlurFunc` interface containing the blur radius
 * @category Filter
 */
export declare function blur(r: Extended<CssLength>): IBlurFunc;
/**
 * Returns an [[IDropShadowFunc]] object representing the `dropShadow()` CSS function parameters.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: drop-shadow(30px 10px 4px blue)
 *     blurredShadow = this.$class({ filter: css.dropShadow( 30, 10, "blue", 4)})
 *
 *     // filter: drop-shadow(2.5em -1.5em green)
 *     sharpShadow = this.$class({ filter: css.dropShadow( 2.5, -1.5, "green")})
 *
 *     // filter: drop-shadow(0 0 20px orange)
 *     haloShadow = this.$class({ filter: css.dropShadow( 0, 0, "orange", 20px)})
 * }
 * ```
 *
 * @param x Horizontal offset of the shadow.
 * @param y Vertical offset of the shadow.
 * @param color Color of the shadow. If undefined, the color of the shadow is taken from the color
 * property.
 * @param blur Value of the shadow's blurring. If undefined, the shadow will be sharp (not blurred).
 * @returns The `IDropShadowFunc` interface containing the shadow parameters.
 *
 * @category Filter
 */
export declare function dropShadow(x: Extended<CssLength>, y: Extended<CssLength>, color?: Extended<CssColor>, blur?: Extended<CssLength>): IDropShadowFunc;
/**
 * Returns an [[IHueRotateFunc]] object representing the `hue-rotate()` CSS function parameters.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: hue-rotate(90deg)
 *     toTheRight = this.$class({ filter: css.hueRotate(90)})
 *
 *     // filter: hue-rotate(-0.25turn)
 *     toTheLeft = this.$class({ filter: css.blur(-0.25)})
 * }
 * ```
 *
 * @param a The relative change in hue of the input sample.
 * @returns The `IHueRotateFunc` interface containing the hue rotation angle
 * @category Filter
 */
export declare function hueRotate(a: Extended<CssAngle>): IHueRotateFunc;
/**
 * Returns an IMatrixFunc object representing the `matrix()` CSS function.
 *
 * @category Transform
 */
export declare function matrix(a: Extended<CssNumber>, b: Extended<CssNumber>, c: Extended<CssNumber>, d: Extended<CssNumber>, tx: Extended<CssNumber>, ty: Extended<CssNumber>): IMatrixFunc;
/**
 * Returns an IMatrix3dFunc function representing the `matrix3d()` CSS function.
 *
 * @category Transform
 */
export declare function matrix3d(a1: Extended<CssNumber>, b1: Extended<CssNumber>, c1: Extended<CssNumber>, d1: Extended<CssNumber>, a2: Extended<CssNumber>, b2: Extended<CssNumber>, c2: Extended<CssNumber>, d2: Extended<CssNumber>, a3: Extended<CssNumber>, b3: Extended<CssNumber>, c3: Extended<CssNumber>, d3: Extended<CssNumber>, a4: Extended<CssNumber>, b4: Extended<CssNumber>, c4: Extended<CssNumber>, d4: Extended<CssNumber>): IMatrix3dFunc;
/**
 * Returns an IPerspectiveFunc function representing the `perspective()` CSS function.
 *
 * @category Transform
 */
export declare function perspective(d: Extended<CssLength>): IPerspectiveFunc;
/**
 * Returns an IRotateFunc function representing the `rotate()` CSS function.
 *
 * @category Transform
 */
export declare function rotate(a: Extended<CssAngle>): IRotateFunc;
/**
 * Returns an ITransformProxy function representing the `rotateX()` CSS function.
 *
 * @category Transform
 */
export declare function rotateX(a: Extended<CssAngle>): IRotateFunc;
/**
 * Returns an ITransformProxy function representing the `rotateY()` CSS function.
 *
 * @category Transform
 */
export declare function rotateY(a: Extended<CssAngle>): IRotateFunc;
/**
 * Returns an ITransformProxy function representing the `rotateZ()` CSS function.
 *
 * @category Transform
 */
export declare function rotateZ(a: Extended<CssAngle>): IRotateFunc;
/**
 * Returns an IRotate3dFunc function representing the `rotate3d()` CSS function.
 *
 * @category Transform
 */
export declare function rotate3d(x: Extended<CssNumber>, y: Extended<CssNumber>, z: Extended<CssNumber>, a: Extended<CssAngle>): IRotate3dFunc;
/**
 * Returns an IScaleFunc function representing the `scale()` CSS function.
 *
 * @category Transform
 */
export declare function scale(sx: Extended<CssNumber>, sy?: Extended<CssNumber>): IScaleFunc;
/**
 * Returns an IScale1dFunc function representing the `scaleX()` CSS function.
 *
 * @category Transform
 */
export declare function scaleX(s: Extended<CssNumber>): IScale1dFunc;
/**
 * Returns an IScale1dFunc function representing the `scaleY()` CSS function.
 *
 * @category Transform
 */
export declare function scaleY(s: Extended<CssNumber>): IScale1dFunc;
/**
 * Returns an IScale1dFunc function representing the `scaleZ()` CSS function.
 *
 * @category Transform
 */
export declare function scaleZ(s: Extended<CssNumber>): IScale1dFunc;
/**
 * Returns an IScale3dFunc function representing the `scale3d()` CSS function.
 *
 * @category Transform
 */
export declare function scale3d(sx: Extended<CssNumber>, sy: Extended<CssNumber>, sz: Extended<CssNumber>): IScale3dFunc;
/**
 * Returns an ISkewFunc function representing the `skew()` CSS function.
 *
 * @category Transform
 */
export declare function skew(ax: Extended<CssAngle>, ay?: Extended<CssAngle>): ISkewFunc;
/**
 * Returns an ISkew1dFunc function representing the `skewX()` CSS function.
 *
 * @category Transform
 */
export declare function skewX(a: Extended<CssAngle>): ISkew1dFunc;
/**
 * Returns an ISkew1dFunc function representing the `skewY()` CSS function.
 *
 * @category Transform
 */
export declare function skewY(a: Extended<CssAngle>): ISkew1dFunc;
/**
 * Returns an ITranslateFunc function representing the `translate()` CSS function.
 *
 * @category Transform
 */
export declare function translate(x: Extended<CssLength>, y?: Extended<CssLength>): ITranslateFunc;
/**
 * Returns an ITranslate1dFunc function representing the `translateX()` CSS function.
 *
 * @category Transform
 */
export declare function translateX(d: Extended<CssLength>): ITranslate1dFunc;
/**
 * Returns an ITranslate1dFunc function representing the `translateY()` CSS function.
 *
 * @category Transform
 */
export declare function translateY(d: Extended<CssLength>): ITranslate1dFunc;
/**
 * Returns an ITranslate1dFunc function representing the `translateZ()` CSS function.
 *
 * @category Transform
 */
export declare function translateZ(d: Extended<CssLength>): ITranslate1dFunc;
/**
 * Returns an ITranslate3dFunc function representing the `translate3d()` CSS function.
 *
 * @category Transform
 */
export declare function translate3d(x: Extended<CssLength>, y: Extended<CssLength>, z: Extended<CssLength>): ITranslate3dFunc;
/**
 * Returns an IInsetBuilder object representing the `inset()` CSS function.
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
export declare function inset(o1: Extended<CssLength>, o2?: Extended<CssLength>, o3?: Extended<CssLength>, o4?: Extended<CssLength>): IInsetBuilder;
/**
 * Returns an ICircleBuilder object representing the `circle()` CSS function.
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
export declare function circle(r?: ShapeRadius): ICircleBuilder;
/**
 * Returns an IEllipseBuilder object representing the `ellipse()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: ellipse().at( ["top", "50%"])
 * ```
 *
 * @category Basic Shape
 */
export declare function ellipse(): IEllipseBuilder;
/**
 * Returns an IEllipseBuilder object representing the `ellipse()` CSS function.
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
export declare function ellipse(rx: ShapeRadius, ry: ShapeRadius): IEllipseBuilder;
/**
 * Returns an IPolygon object representing the `polygon()` CSS function.
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
export declare function polygon(...points: CssPoint[]): IPolygonBuilder;
/**
 * Returns an IPathBuilder object that allows building a CSS path.
 *
 * @category Basic Shape
 */
export declare function path(fillRule?: FillRule): IPathBuilder;
/**
 * Returns an IRay object representing invocation of the `ray()` CSS function.
 *
 * @category Basic Shape
 */
export declare function ray(angle: Extended<CssAngle>, size?: Extended<ExtentKeyword | CssLength>, contain?: boolean): IRayFunc;
/**
* Returns an IMinMax function representing the `minmax()` CSS function.
*
* @category Grid
*/
export declare function minmax(min: GridTrackSize, max: GridTrackSize): IMinMaxFunc;
/**
 * Returns an IRepeat function representing the `repeat()` CSS function.
 *
 * @category Grid
 */
export declare function repeat(count: Extended<CssNumber> | "auto-fill" | "auto-fit", ...tracks: GridTrack[]): IRepeatFunc;
/**
 * Returns an IGridSpanFunc function representing the `span` expression for grid layouts. If the first
 * parameter is a number, the second parameter (if defined) must be a name; if the first parameter
 * is a name, the second parameter (if defined) must be a number.
 *
 * @category Grid
 */
export declare function span(p1: Extended<GridLineCountOrName>, p2?: Extended<GridLineCountOrName>): IGridSpanFunc;
/**
 * Returns a representation of the CSS `counter()` function with additional optional strings
 * added after and/or before the counter.
 *
 * @category Counter
 */
export declare function counter(counterObj: Extended<ICounterRule | string>, style?: Extended<ListStyleType_StyleType>): IStringProxy;
/**
 * Returns a representation of the CSS `counters()` function with the given separator string
 * and additional optional strings added after and/or before the counter.
 *
 * @category Counter
 */
export declare function counters(counterObj: Extended<ICounterRule | string>, sep: Extended<string>, style?: Extended<ListStyleType_StyleType>): IStringProxy;
/**
 * Returns a function representing the CSS `url()` function. The string parameter
 * will be wrapped in a `url()` invocation. The function can also accept the IIDRule object to
 * create url(#element) invocation, which is often used to address SVG elements by their IDs.
 *
 * @category Miscellaneous
 */
export declare function url(p: Extended<string | IIDRule>): IUrlFunc;
/**
 * Returns a function representing the CSS `url()` function.
 *
 * @category Miscellaneous
 */
export declare function cursor(p: Extended<string | IIDRule>): ICursorFunc;
/**
 * Returns a function representing the CSS `url()` function followed by two numbers
 * indicating the cursor hotspot.
 *
 * @category Miscellaneous
 */
export declare function cursor(p: Extended<string | IIDRule>, x: number, y: number): ICursorFunc;
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
export declare function steps(n: Extended<number>, j?: TimingFunctionJumpTerm): IStepsFunc;
/**
 * Returns a function representing an invocation of the CSS `cubic-bezier()` function.
 *
 * @category Transition and Animation
 */
export declare function cubicBezier(n1: Extended<number>, n2: Extended<number>, n3: Extended<number>, n4: Extended<number>): ICubicBezierFunc;
//# sourceMappingURL=ShapeAPI.d.ts.map