import { Extended } from "./CoreTypes";
import { CssAngle, CssPercent } from "./NumericTypes";
import { CssColorSeparation, IAlphaFunc, IHslFunc, ILabFunc, ILchFunc, INamedColors, IRgbFunc } from "./ColorTypes";
/**
 * Object whose property names are the well-known Web color names while values correspond to the
 * hexadecimal representation of the RGB separations (without an alpha mask). The properties of
 * this object can be used wherever the [[CssColor]] type can be used. Since the properties are
 * of the `number` type, they can be used for manipulating the color value.
*/
export declare const Colors: INamedColors;
/**
 * Registers a new custom color or changes the name of the
 * @param name
 * @param value
 * @returns
 */
export declare function registerColor(name: keyof INamedColors, value: number): boolean;
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
 * @return The IRgbFunc object representing the invocation of the `rgb()` CSS function
 */
export declare function rgb(r: Extended<CssColorSeparation>, g: Extended<CssColorSeparation>, b: Extended<CssColorSeparation>, a?: Extended<CssPercent>): IRgbFunc;
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
 * @return The IHslFunc object representing the invocation of the `hsl()` CSS function
 */
export declare function hsl(h: Extended<CssAngle>, s: Extended<CssPercent>, l: Extended<CssPercent>, a?: Extended<CssPercent>): IHslFunc;
/**
 * Converts the color specified as L*a*b* components and an optional alpha
 * mask to a CSS color representation. This method should be used when defining CSS color
 * values in styleset properties.
 *
 * @param l CIE Lightness component
 * @param da Distance along the a axis in the Lab colorspace
 * @param db Distance along the b axis in the Lab colorspace
 * @param a Optional alpha mask as a percentage value.
 * @returns The ILabFunc object representing the invocation of the `lab()` CSS function
 */
export declare function lab(l: Extended<CssPercent>, da: Extended<number>, db: Extended<number>, a?: Extended<CssPercent>): ILabFunc;
/**
 * Converts the color specified as lightness-chroma-hue components and an optional alpha
 * mask to a CSS color representation. This method should be used when defining CSS color
 * values in styleset properties.
 *
 * @param l CIE Lightness component
 * @param c Chroma component
 * @param h Hue component as an angle value.
 * @param a Optional alpha mask as a percentage value.
 * @returns The ILchFunc object representing the invocation of the `lch()` CSS function
 */
export declare function lch(l: Extended<CssPercent>, c: Extended<number>, h: Extended<CssAngle>, a?: Extended<CssPercent>): ILchFunc;
/**
 * Converts the given color and the alpha mask to the CSS Color representation. This
 * method should be used when defining CSS color values in styleset properties.
 *
 * The color can be specified as a numeric value or as a color name from the [[INamedColors]]
 * interface - including colors added using the module augmentation technique.
 *
 * The alpha mask is specified as a number:
 *   - The sign is ignored; that is, only the absolute value is considered.
 *   - Number 0 to 1 inclusive, which is treated as percentage.
 *   - Number 1 to 100 inclusive, which is treated as percentage.
 *   - Numbers greater than 100 are clamped to 100;
 *
 * **Examples**
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // applying alpha to a numeric color
 *     cls1 = this.$class({ color: css.alpha( 0xAA00AA, 0.5) })
 *
 *     // applying alpha to a named color
 *     cls1 = this.$class({ color: css.alpha( "darkolivegreen", 0.5) })
 * }
 * ```
 * @param c Color value as either a number or a named color
 * @param a Alpha channel value
 */
export declare function alpha(c: number | keyof INamedColors, a: number): IAlphaFunc;
//# sourceMappingURL=ColorAPI.d.ts.map