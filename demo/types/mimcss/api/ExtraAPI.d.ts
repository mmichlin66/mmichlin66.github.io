import { CrossFadeParam, CssColor, GradientStopOrHint, ICircleProxy, IColorProxy, IConicGradient, IEllipseProxy, IFilterBlur, IFilterDropShadow, IFilterHueRotate, IFilterPercent, IImageProxy, IInsetProxy, ILinearGradient, IMinMaxProxy, INamedColors, IPathBuilder, IPolygonProxy, IRadialGradient, IRayProxy, IRepeatProxy, ISpanProxy, ITransformMatrix, ITransformMatrix3d, ITransformPerspective, ITransformRotate1d, ITransformRotate3d, ITransformScale1d, ITransformScale2d, ITransformScale3d, ITransformSkew1d, ITransformSkew2d, ITransformTranslate1d, ITransformTranslate2d, ITransformTranslate3d, ShapeRadius } from "./ExtraTypes";
import { FillRule_StyleType, GridLineCountOrName, GridTrack, GridTrackSize } from "./StyleTypes";
import { CssAngle, CssLength, CssNumber, CssPercent, CssPoint, Extended, ExtentKeyword } from "./CoreTypes";
/**
 * Object whose property names are names of well-known colors and values correspond to the
 * hexadecimal representation of the RGB separations (without an alpha mask). The properties of
 * this object can be used wherever the [[CssColor]] type can be used. Since the properties are
 * of the `number` type, they can be used for manipulating the color value.
 */
export declare let Colors: INamedColors;
/**
 * Converts the color specified as red, green, blue separation values and an optional alpha
 * mask to a CSS color representation. Each color separation can be represented as a number with
 * the following meaning:
 *   - Integer number -255 to 255. Numbers beyond this range will be clamped. Negative numbers
 *     will be inverted.
 *   - Floating number -1.0 to 1.0 non-inclusive, which is multiplied by 100 treated as percentage.
 *     Floating numbers beyond this range will be rounded and treated as integer numbers. Negative
 *     numbers will be inverted.
 *
 * The alpha mask can be one of the following:
 *   - Floating number 0 to 1 inclusive.
 *   - Integer or floating number 1 to 100, which is divided by 100. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped.
 *   - The sign of alpha is ignored; that is, only the absolute value is considered.
 *
 * @param r Red separation value.
 * @param g Green separation value.
 * @param b Blue separation value.
 * @param a Optional alpha mask as a percentage value.
 */
export declare function rgb(r: Extended<number>, g: Extended<number>, b: Extended<number>, a?: Extended<number>): IColorProxy;
/**
 * Converts the color specified as hue-saturation-lightness components and an optional alpha
 * mask to a CSS color representation. This method should be used when defining CSS color
 * values in styleset properties.
 *
 * The Hue component is treated as the CSS `<angle>` type. Numbers are considered degrees.
 *
 * The Saturation and Lightness components are treated as percentages:
 *   - The sign is ignored; that is, only the absolute value is considered.
 *   - Floating number 0 to 1 inclusive are multiplied by 100 and treated as percentage.
 *   - Integer or floating number 1 to 100 are treated as percentage. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped to 100.
 *
 * The alpha mask can be one of the following:
 *   - Floating number 0 to 1 inclusive.
 *   - Integer or floating number 1 to 100, which is divided by 100. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped.
 *   - The sign of alpha is ignored; that is, only the absolute value is considered.
 *
 * @param h Hue component as an angle value.
 * @param s Saturation component as a percentage value.
 * @param l Lightness component as a percentage value.
 * @param a Optional alpha mask as a percentage value.
 */
export declare function hsl(h: Extended<CssAngle>, s: Extended<number>, l: Extended<number>, a?: Extended<number>): IColorProxy;
/**
 * Converts the given color and the alpha mask to the CSS Color representation. This
 * method should be used when defining CSS color values in styleset properties.
 *
 * The color can be specified as a numeric value or as a string color name.
 *
 * The alpha mask is specified as a number:
 *   - The sign is ignored; that is, only the absolute value is considered.
 *   - Number 0 to 1 inclusive, which is treated as percentage.
 *   - Number 1 to 100 inclusive, which is treated as percentage.
 *   - Numbers greater than 100 are clamped to 100;
 *
 * @param c Color value as either a number or a named color
 * @param a Alpha channel value
 */
export declare function alpha(c: number | keyof INamedColors, a: number): IColorProxy;
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
export declare function linearGradient(...stopsOrHints: GradientStopOrHint<CssLength>[]): ILinearGradient;
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
export declare function repeatingLinearGradient(...stopsOrHints: GradientStopOrHint<CssLength>[]): ILinearGradient;
/**
 * Function returning the IRadialGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Example:*
 *
 * ```typescript
 * backgroundImage: radialGradient( "red", "blue")
 *
 * backgroundImage: radialGradient( "red", "blue").circle( css.percent(30)).at( ["center", css.percent(65)])
 *
 * backgroundImage: radialGradient( "red", "blue").ellipse( "closest-side")
 * ```
 */
export declare function radialGradient(...stopsOrHints: GradientStopOrHint<CssLength>[]): IRadialGradient;
/**
 * Function returning the IRadialGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Example:*
 *
 * ```typescript
 * backgroundImage: repeatinGradialGradient( "red", "blue")
 *
 * backgroundImage: repeatinGradialGradient( "red", "blue").circle( css.percent(30)).at( ["center", css.percent(65)])
 *
 * backgroundImage: repeatinGradialGradient( "red", "blue").ellipse( "closest-side")
 * ```
 */
export declare function repeatingGradialGradient(...stopsOrHints: GradientStopOrHint<CssLength>[]): IRadialGradient;
/**
 * Function returning the IConicGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Example:*
 *
 * ```typescript
 * backgroundImage: conicGradient( "red", "blue")
 *
 * backgroundImage: conicGradient( "red", "blue").from( 0.25).at( ["center", css.percent(65)])
 * ```
 */
export declare function conicGradient(...stopsOrHints: GradientStopOrHint<CssAngle>[]): IConicGradient;
/**
 * Function returning the IConicGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Example:*
 *
 * ```typescript
 * backgroundImage: repeatingConicGradient( "red", "blue")
 *
 * backgroundImage: repeatingConicGradient( "red", "blue").from( 0.25).at( ["center", css.percent(65)])
 * ```
 */
export declare function repeatingConicGradient(...stopsOrHints: GradientStopOrHint<CssAngle>[]): IConicGradient;
/**
 * Returns an ImageProxy function representing the `cross-fade()` CSS function.
 */
export declare function crossFade(...args: CrossFadeParam[]): IImageProxy;
/**
 * Returns an IFilterPercent object representing the `brightness()` CSS function.
 */
export declare function brightness(p: Extended<CssPercent>): IFilterPercent;
/**
 * Returns an IFilterProxy function representing the `contrast()` CSS function.
 */
export declare function contrast(p: Extended<CssPercent>): IFilterPercent;
/**
 * Returns an IFilterProxy function representing the `grayscale()` CSS function.
 */
export declare function grayscale(p: Extended<CssPercent>): IFilterPercent;
/**
 * Returns an IFilterProxy function representing the `invert()` CSS function.
 */
export declare function invert(p: Extended<CssPercent>): IFilterPercent;
/**
 * Returns an IFilterProxy function representing the `opacity()` CSS function.
 */
export declare function opacity(p: Extended<CssPercent>): IFilterPercent;
/**
 * Returns an IFilterProxy function representing the `saturate()` CSS function.
 */
export declare function saturate(p: Extended<CssPercent>): IFilterPercent;
/**
 * Returns an IFilterProxy function representing the `sepia()` CSS function.
 */
export declare function sepia(p: Extended<CssPercent>): IFilterPercent;
/**
 * Returns an IFilterProxy function representing the `blur()` CSS function.
 */
export declare function blur(r: Extended<CssLength>): IFilterBlur;
/**
 * Returns an IFilterProxy function representing the `dropShadow()` CSS function.
 * @param x Horizontal offset of the shadow.
 * @param y Vertical offset of the shadow.
 * @param color Color of the shadow.
 * @param blur Value of the shadow's blurring. The default value is 1 pixel.
 */
export declare function dropShadow(x: Extended<CssLength>, y: Extended<CssLength>, color?: Extended<CssColor>, blur?: Extended<CssLength>): IFilterDropShadow;
/**
 * Returns an IFilterProxy function representing the `hue-rotate()` CSS function.
 */
export declare function hueRotate(a: Extended<CssAngle>): IFilterHueRotate;
/**
 * Returns an ITransformMatrix function representing the `matrix()` CSS function.
 */
export declare function matrix(a: Extended<CssNumber>, b: Extended<CssNumber>, c: Extended<CssNumber>, d: Extended<CssNumber>, tx: Extended<CssNumber>, ty: Extended<CssNumber>): ITransformMatrix;
/**
 * Returns an ITransformProxy function representing the `matrix3d()` CSS function.
 */
export declare function matrix3d(a1: Extended<CssNumber>, b1: Extended<CssNumber>, c1: Extended<CssNumber>, d1: Extended<CssNumber>, a2: Extended<CssNumber>, b2: Extended<CssNumber>, c2: Extended<CssNumber>, d2: Extended<CssNumber>, a3: Extended<CssNumber>, b3: Extended<CssNumber>, c3: Extended<CssNumber>, d3: Extended<CssNumber>, a4: Extended<CssNumber>, b4: Extended<CssNumber>, c4: Extended<CssNumber>, d4: Extended<CssNumber>): ITransformMatrix3d;
/**
 * Returns an ITransformProxy function representing the `perspective()` CSS function.
 */
export declare function perspective(d: Extended<CssLength>): ITransformPerspective;
/**
 * Returns an ITransformRotate2d object representing the `rotate()` CSS function.
 */
export declare function rotate(a: Extended<CssAngle>): ITransformRotate1d;
/**
 * Returns an ITransformRotate object representing the `rotateX()` CSS function.
 */
export declare function rotateX(a: Extended<CssAngle>): ITransformRotate1d;
/**
 * Returns an ITransformRotate object representing the `rotateY()` CSS function.
 */
export declare function rotateY(a: Extended<CssAngle>): ITransformRotate1d;
/**
 * Returns an ITransformRotate object representing the `rotateZ()` CSS function.
 */
export declare function rotateZ(a: Extended<CssAngle>): ITransformRotate1d;
/**
 * Returns an ITransformRotate3d object representing the `rotate3d()` CSS function.
 */
export declare function rotate3d(x: Extended<CssNumber>, y: Extended<CssNumber>, z: Extended<CssNumber>, a: Extended<CssAngle>): ITransformRotate3d;
/**
 * Returns an ITransformScale2d object representing the `scale()` CSS function.
 */
export declare function scale(sx: Extended<CssNumber>, sy?: Extended<CssNumber>): ITransformScale2d;
/**
 * Returns an ITransformScale object representing the `scaleX()` CSS function.
 */
export declare function scaleX(s: Extended<CssNumber>): ITransformScale1d;
/**
 * Returns an ITransformScale object representing the `scaleY()` CSS function.
 */
export declare function scaleY(s: Extended<CssNumber>): ITransformScale1d;
/**
 * Returns an ITransformScale object representing the `scaleZ()` CSS function.
 */
export declare function scaleZ(s: Extended<CssNumber>): ITransformScale1d;
/**
 * Returns an ITransformScale3d object representing the `scale3d()` CSS function.
 */
export declare function scale3d(sx: Extended<CssNumber>, sy: Extended<CssNumber>, sz: Extended<CssNumber>): ITransformScale3d;
/**
 * Returns an ITransformProxy function representing the `skew()` CSS function.
 */
export declare function skew(ax: Extended<CssAngle>, ay?: Extended<CssAngle>): ITransformSkew2d;
/**
 * Returns an ITransformProxy function representing the `skewX()` CSS function.
 */
export declare function skewX(a: Extended<CssAngle>): ITransformSkew1d;
/**
 * Returns an ITransformProxy function representing the `skewY()` CSS function.
 */
export declare function skewY(a: Extended<CssAngle>): ITransformSkew1d;
/**
 * Returns an ITransformTranslate2d object representing the `translate()` CSS function.
 */
export declare function translate(x: Extended<CssLength>, y?: Extended<CssLength>): ITransformTranslate2d;
/**
 * Returns an ITransformTranslate1d object representing the `translateX()` CSS function.
 */
export declare function translateX(d: Extended<CssLength>): ITransformTranslate1d;
/**
 * Returns an ITransformTranslate1d object representing the `translateY()` CSS function.
 */
export declare function translateY(d: Extended<CssLength>): ITransformTranslate1d;
/**
 * Returns an ITransformTranslate1d object representing the `translateZ()` CSS function.
 */
export declare function translateZ(d: Extended<CssLength>): ITransformTranslate1d;
/**
 * Returns an ITransformTranslate3d object representing the `translate3d()` CSS function.
 */
export declare function translate3d(x: Extended<CssLength>, y: Extended<CssLength>, z: Extended<CssLength>): ITransformTranslate3d;
/**
 * Returns an IInsetProxy function representing the `inset()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: inset( css.percent(15))
 *
 * clipPath: inset( css.percent(15)).round( 8)
 * ```
 */
export declare function inset(o1: Extended<CssLength>, o2?: Extended<CssLength>, o3?: Extended<CssLength>, o4?: Extended<CssLength>): IInsetProxy;
/**
 * Returns an ICircleProxy function representing the `circle()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: circle( 100)
 *
 * clipPath: circle( 100).at( ["center", css.percent(30)])
 * ```
 */
export declare function circle(radius?: ShapeRadius): ICircleProxy;
/**
 * Returns an IEllipseProxy function representing the `ellipse()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: ellipse( 100, 50)
 *
 * clipPath: ellipse( 100, 50).at( ["center", css.percent(30)])
 * ```
 */
export declare function ellipse(radiusX?: ShapeRadius, radiusY?: ShapeRadius): IEllipseProxy;
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
 */
export declare function polygon(...points: CssPoint[]): IPolygonProxy;
/**
 * Returns an IRayProxy function representing the `ray()` CSS function.
 */
export declare function ray(angle: Extended<CssAngle>, size?: Extended<ExtentKeyword | CssLength>, contain?: boolean): IRayProxy;
/**
 * Returns an IPathBuilder interface that allows building a CSS path.
 */
export declare function path(fillRule?: FillRule_StyleType): IPathBuilder;
/**
 * Returns an IMinMaxProxy function representing the `minmax()` CSS function.
 */
export declare function minmax(min: GridTrackSize, max: GridTrackSize): IMinMaxProxy;
/**
 * Returns an IRepeatProxy function representing the `repeat()` CSS function.
 */
export declare function repeat(count: Extended<CssNumber> | "auto-fill" | "auto-fit", ...tracks: GridTrack[]): IRepeatProxy;
/**
 * Returns an ISpanProxy function representing the `span` expression for grid layouts. If the first
 * parameter is a number, the second parameter (if defined) must be a name; if the first parameter
 * is a name, the second parameter (if defined) must be a number.
 */
export declare function span(countOrName: Extended<GridLineCountOrName>, nameOrCount?: Extended<GridLineCountOrName>): ISpanProxy;
//# sourceMappingURL=ExtraAPI.d.ts.map