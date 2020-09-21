import { Extended, CssPosition, CssLength, CssPercent, CssAngle, CssNumber, CssPoint, CssColor, SelectorItem, ISelectorProxy, IFilterProxy, IBasicShapeProxy, IPathBuilder, IRayProxy, IRepeatProxy, IMinMaxProxy, ITransformProxy, ISpanProxy, ExtentKeyword, IColorProxy, INamedColors } from "../api/BasicTypes";
import { Styleset, ExtendedStyleset, StringStyleset, BorderRadius_StyleType, FillRule_StyleType, GridTrackSize, GridTrack, GridLineCountOrName } from "./StyleTypes";
/**
 * Returns a string representation of a selector. This function is a tag function and must be
 * invoked with the template string without parentheses.
 */
export declare function selector(parts: TemplateStringsArray, ...params: SelectorItem[]): ISelectorProxy;
/**
 * Registers the given function to be used for converting values of the given style property to
 * string. The `registerStyleProperty` function must be used after adding the property to the
 * [[ICssStyleset]] interface via the module augmentation technique if the conversion to string
 * requires non-standard operations. This function should not be called for propeties whose
 * values only include numbers, strings, functions returning a string, objects whose `toString`
 * method produces the necessary string or arrays of the above types.
 *
 * This function can be used for style properties that are not yet supported by Mimcss. This is
 * also the way to support properties with vendor prefixes.
 */
export declare function registerStyleProperty(name: string, toStringFunc: (v: any) => string): boolean;
/**
 * Converts the given value corresponding to the given style property to a CSS string.
 * @param stylePropName Style property name that determines how the value should be converted
 * to a CSS compliant string.
 * @param stylePropValue Value to convert.
 */
export declare function getStylePropValue<K extends keyof ExtendedStyleset>(stylePropName: K, stylePropValue: ExtendedStyleset[K]): string;
/**
 * Sets values of the style properties from the given Styleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML element whose styles will be set.
 * @param styleset Styleset object which provides values for style properties.
 */
export declare function setElementStyle(elm: HTMLElement, styleset: Styleset | null | undefined, schedulerType?: number): void;
/**
 * Sets values of the style properties from the given StringStyleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML element whose styles will be set.
 * @param styleset StringStyleset object which provides values for style properties.
 */
export declare function setElementStringStyle(elm: HTMLElement, styleset: StringStyleset | null | undefined, schedulerType?: number): void;
/**
 * Converts the given [[Styleset]] object into an object, where each Styleset's property is
 * converted to its string value.
 * @param styleset
 */
export declare function stylesetToStringStyleset(styleset: Styleset): StringStyleset;
/**
 * Compares two Styleset objects by converting style properties to strings and returns an object
 * that contains string values of properties that were new or have different values in the new
 * styleset and undefined values for properties that exist in the old styleset but don't exist
 * in the new one.
 * @param oldStyleset
 * @param newStyleset
 * @returns StringStyleset object with properties that have different values in the old and new
 * stylesets. Properties that existed in the old but don't exist in the new styleset, will have
 * their values set to undefined. If there is no differences between the two stylesets null is
 * returned.
 */
export declare function diffStylesets(oldStyleset: Styleset, newStyleset: Styleset): StringStyleset | null;
/**
 * Returns an IFilterProxy function representing the `brightness()` CSS function.
 */
export declare function brightness(amount: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `contrast()` CSS function.
 */
export declare function contrast(amount: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `grayscale()` CSS function.
 */
export declare function grayscale(amount: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `invert()` CSS function.
 */
export declare function invert(amount: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `opacity()` CSS function.
 */
export declare function opacity(amount: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `saturate()` CSS function.
 */
export declare function saturate(amount: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `sepia()` CSS function.
 */
export declare function sepia(amount: Extended<CssPercent>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `blur()` CSS function.
 */
export declare function blur(radius: Extended<CssLength>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `dropShadow()` CSS function.
 * @param x Horizontal offset of the shadow.
 * @param y Vertical offset of the shadow.
 * @param color Color of the shadow.
 * @param blur Value of the shadow's blurring. The default value is 1 pixel.
 * @param spread Value of the shadow's spreading. The default value is 0.
 * @param inset Flag indicating whether the shadow goes inside the shape. The default value is false.
 */
export declare function dropShadow(x: Extended<CssLength>, y: Extended<CssLength>, color?: Extended<CssColor>, blur?: Extended<CssLength>): IFilterProxy;
/**
 * Returns an IFilterProxy function representing the `hue-rotate()` CSS function.
 */
export declare function hueRotate(amount: Extended<CssAngle>): IFilterProxy;
/**
 * The IInsetProxy interface represents the CSS inset basic shape. It is the result of invoking
 * the [[inset]] function and it can be directly assigned to a suitable style property (e.g.
 * clip-path). In addition it has the `round` method that can be called to specify the radii of
 * the inset rectangle's corners.
 */
export interface IInsetProxy extends IBasicShapeProxy {
    round(radius?: Extended<BorderRadius_StyleType>): IBasicShapeProxy;
}
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
 * Type that is used to specify a radius in [[circle]] and [[ellipse]] functions.
 */
export declare type ShapeRadius = Extended<CssLength | "closest-side" | "farthest-side">;
/**
 * The ICircleProxy interface represents the CSS circle basic shape. It is the result of invoking
 * the [[circle]] function and it can be directly assigned to a suitable style property (e.g.
 * clip-path). In addition it has the `at` method that can be called to specify the position of
 * the circle's center.
 */
export interface ICircleProxy extends IBasicShapeProxy {
    at(pos: Extended<CssPosition>): IBasicShapeProxy;
}
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
 * The IEllipseProxy interface represents the CSS ellipse basic shape. It is the result of invoking
 * the [[ellipse]] function and it can be directly assigned to a suitable style property (e.g.
 * clip-path). In addition it has the `at` method that can be called to specify the position of
 * the ellipse's center.
 */
export interface IEllipseProxy extends IBasicShapeProxy {
    at(pos: Extended<CssPosition>): IBasicShapeProxy;
}
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
 * The IPolygonProxy interface represents the CSS polygon basic shape. It is the result of invoking
 * the [[polygon]] function and it can be directly assigned to a suitable style property (e.g.
 * clip-path). In addition it has the `fill` method that can be called to specify the fill
 * rule.
 */
export interface IPolygonProxy extends IBasicShapeProxy {
    fill(rule: FillRule_StyleType): IBasicShapeProxy;
}
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
 * Returns an ITransformProxy function representing the `matrix()` CSS function.
 */
export declare function matrix(a: Extended<CssNumber>, b: Extended<CssNumber>, c: Extended<CssNumber>, d: Extended<CssNumber>, tx: Extended<CssNumber>, ty: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `matrix3d()` CSS function.
 */
export declare function matrix3d(a1: Extended<CssNumber>, b1: Extended<CssNumber>, c1: Extended<CssNumber>, d1: Extended<CssNumber>, a2: Extended<CssNumber>, b2: Extended<CssNumber>, c2: Extended<CssNumber>, d2: Extended<CssNumber>, a3: Extended<CssNumber>, b3: Extended<CssNumber>, c3: Extended<CssNumber>, d3: Extended<CssNumber>, a4: Extended<CssNumber>, b4: Extended<CssNumber>, c4: Extended<CssNumber>, d4: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `perspective()` CSS function.
 */
export declare function perspective(d: Extended<CssLength>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `rotate()` CSS function.
 */
export declare function rotate(a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `rotateX()` CSS function.
 */
export declare function rotateX(a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `rotateY()` CSS function.
 */
export declare function rotateY(a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `rotateZ()` CSS function.
 */
export declare function rotateZ(a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `rotate3d()` CSS function.
 */
export declare function rotate3d(x: Extended<CssNumber>, y: Extended<CssNumber>, z: Extended<CssNumber>, a: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `scale()` CSS function.
 */
export declare function scale(cx: Extended<CssNumber>, cy?: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `scaleX()` CSS function.
 */
export declare function scaleX(s: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `scaleY()` CSS function.
 */
export declare function scaleY(s: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `scaleZ()` CSS function.
 */
export declare function scaleZ(s: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `scale3d()` CSS function.
 */
export declare function scale3d(sx: Extended<CssNumber>, sy: Extended<CssNumber>, sz: Extended<CssNumber>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `skew()` CSS function.
 */
export declare function skew(ax: Extended<CssAngle>, ay?: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `skewX()` CSS function.
 */
export declare function skewX(ax: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `skewY()` CSS function.
 */
export declare function skewY(ay: Extended<CssAngle>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `translate()` CSS function.
 */
export declare function translate(x: Extended<CssLength>, y?: Extended<CssLength>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `translateX()` CSS function.
 */
export declare function translateX(x: Extended<CssLength>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `translateY()` CSS function.
 */
export declare function translateY(y: Extended<CssLength>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `translateZ()` CSS function.
 */
export declare function translateZ(z: Extended<CssLength>): ITransformProxy;
/**
 * Returns an ITransformProxy function representing the `translate3d()` CSS function.
 */
export declare function translate3d(x: Extended<CssLength>, y: Extended<CssLength>, z: Extended<CssLength>): ITransformProxy;
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
//# sourceMappingURL=StyleAPI.d.ts.map