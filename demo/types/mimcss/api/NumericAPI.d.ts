import { Extended } from "./CoreTypes";
import { ILengthProxy, IPercentProxy, IAngleProxy, ITimeProxy, IResolutionProxy, IFrequencyProxy, CssLength, IFitContentProxy, CssNumber, IAspectRatioProxy, INumberMath, IPercentMath, ILengthMath, IAngleMath, ITimeMath, IResolutionMath, IFrequencyMath, IRectProxy, CssLengthOrAuto } from "./NumericTypes";
/**
 * The Num object contains methods that implement CSS mathematic functions on the `<number>`
 * CSS type.
 */
export declare let Num: INumberMath;
/**
 * The Percent object contains methods that implement CSS mathematic functions on the
 * `<percentage>` CSS type by appending a "%" unit suffix.
 */
export declare let Percent: IPercentMath;
/**
 * Creates percent value by appenfing the `"%"` sign to the given number. This function should be
 * used whenever a `<percentage>` CSS type is used for a style property or value.
 * @category Units
 */
export declare function percent(n: number): IPercentProxy;
/**
 * The Len object contains methods that implement CSS mathematic functions on the `<length>`
 * CSS type by appending a length unit suffix.
 * Integer numbers use "px"; floating point numbers use "em".
 */
export declare let Len: ILengthMath;
/**
 * Creates length value in quarters of an inch.
 * @category Units
 */
export declare function Q(n: number): ILengthProxy;
/**
 * Creates length value in ch units, which is equal to the used advance measure of the “0” (ZERO,
 * U+0030) glyph found in the font used to render it. (The advance measure of a glyph is its
 * advance width or height, whichever is in the inline axis of the element.)
 * @category Units
 */
export declare function ch(n: number): ILengthProxy;
/**
 * Creates length value in cantimeters.
 * @category Units
 */
export declare function cm(n: number): ILengthProxy;
/**
 * Creates length value in calculated font-sizes of the element.
 * @category Units
 */
export declare function em(n: number): ILengthProxy;
/**
 * Creates length value in heights of lowercase letter 'x' in the font.
 * @category Units
 */
export declare function ex(n: number): ILengthProxy;
/**
 * Creates length value in ic units.
 * @category Units
 */
export declare function ic(n: number): ILengthProxy;
/**
 * Creates length value in inches.
 * @category Units
 */
export declare function inch(n: number): ILengthProxy;
/**
 * Creates length value in line-heights of the element.
 * @category Units
 */
export declare function lh(n: number): ILengthProxy;
/**
 * Creates length value in millimeters.
 * @category Units
 */
export declare function mm(n: number): ILengthProxy;
/**
 * Creates length value in picas.
 * @category Units
 */
export declare function pc(n: number): ILengthProxy;
/**
 * Creates length value in points.
 * @category Units
 */
export declare function pt(n: number): ILengthProxy;
/**
 * Creates length value in pixels.
 * @category Units
 */
export declare function px(n: number): ILengthProxy;
/**
 * Creates length value in 1% of the size of the initial containing block, in the direction
 * of the root element’s block axis.
 * @category Units
 */
export declare function vb(n: number): ILengthProxy;
/**
 * Creates length value in 1% of the height of the viewport's initial containing block.
 * @category Units
 */
export declare function vh(n: number): ILengthProxy;
/**
 * Creates length value in 1% of the size of the initial containing block, in the direction
 * of the root element’s inline axis.
 * @category Units
 */
export declare function vi(n: number): ILengthProxy;
/**
 * Creates length value in 1% of the width of the viewport's initial containing block.
 * @category Units
 */
export declare function vw(n: number): ILengthProxy;
/**
 * Creates length value in fontsizes of the root element (<html>).
 * @category Units
 */
export declare function rem(n: number): ILengthProxy;
/**
 * Creates length value in line-heights of the root element (<html>).
 * @category Units
 */
export declare function rlh(n: number): ILengthProxy;
/**
 * Creates length value in the units which are a smaller value between vw and vh.
 * @category Units
 */
export declare function vmin(n: number): ILengthProxy;
/**
 * Creates length value in the units which are a larger value between vw and vh.
 * @category Units
 */
export declare function vmax(n: number): ILengthProxy;
/**
 * Creates length value for flex.
 * @category Units
 */
export declare function fr(n: number): ILengthProxy;
/**
 * The AngleMath object contains methods that implement CSS mathematic functions on the `<angle>`
 * CSS type by appending an angle unit suffix.
 * Integer numbers use "deg"; floating point numbers use "turn".
 */
export declare let Angle: IAngleMath;
/**
 * Creates angle value in degrees.
 * @category Units
 */
export declare function deg(n: number): IAngleProxy;
/**
 * Creates angle value in radians.
 * @category Units
 */
export declare function rad(n: number): IAngleProxy;
/**
 * Creates angle value in gradians.
 * @category Units
 */
export declare function grad(n: number): IAngleProxy;
/**
 * Creates angle value in turns.
 * @category Units
 */
export declare function turn(n: number): IAngleProxy;
/**
 * The Time object contains methods that implement CSS mathematic functions on the `<time>`
 * CSS type by appending a time unit suffix.
 * Integer numbers use "ms"; floating point numbers use "s".
 */
export declare let Time: ITimeMath;
/**
* Creates time value in milliseconds.
* @category Units
*/
export declare function ms(n: number): ITimeProxy;
/**
 * Creates time value in seconds.
 * @category Units
 */
export declare function s(n: number): ITimeProxy;
/**
 * The Resolution object contains methods that implement CSS mathematic functions on the
 * `<resolution>` CSS type by appending a resolution unit suffix.
 * Integer numbers use "dpi"; floating point numbers use "dpcm".
 */
export declare let Resolution: IResolutionMath;
/**
* Creates resolution value in DPI.
* @category Units
*/
export declare function dpi(n: number): IResolutionProxy;
/**
 * Creates resolution value in DPCM.
 * @category Units
 */
export declare function dpcm(n: number): IResolutionProxy;
/**
 * Creates resolution value in DPPX.
 * @category Units
 */
export declare function dppx(n: number): IResolutionProxy;
/**
 * Creates resolution value in X.
 * @category Units
 */
export declare function x(n: number): IResolutionProxy;
/**
 * The Frequency object contains methods that implement CSS mathematic functions on the
 * `<frequency>` CSS type by appending a frequency unit suffix.
 * Integer numbers use "Hz"; floating point numbers use "kHz".
 */
export declare let Frequency: IFrequencyMath;
/**
* Creates frequency value in Hertz.
* @category Units
*/
export declare function hz(n: number): IFrequencyProxy;
/**
 * Creates frequency value in Kilo-Hertz.
 * @category Units
 */
export declare function khz(n: number): IFrequencyProxy;
/**
 * Returns an IFitContentProxy function representing the `fit-content()` CSS function.
 */
export declare function fitContent(size: Extended<CssLength>): IFitContentProxy;
/**
 * Returns an IAspectRatioProxy function representing the `<ratio>` CSS type.
 */
export declare function ratio(w: CssNumber, h?: CssNumber): IAspectRatioProxy;
/**
 * Returns an IAspectRatioProxy function representing the `<ratio>` CSS type.
 */
export declare function rect(top: CssLengthOrAuto, right: CssLengthOrAuto, bottom: CssLengthOrAuto, left: CssLengthOrAuto): IRectProxy;
//# sourceMappingURL=NumericAPI.d.ts.map