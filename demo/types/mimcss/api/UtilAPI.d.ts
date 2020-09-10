import { INumberMath, ILengthMath, IAngleMath, ITimeMath, IResolutionMath, IFrequencyMath, IPercentMath, Extended, IStringProxy, IUrlProxy, AttrTypeKeyword, AttrUnitKeyword, ILengthProxy, IPercentProxy, IAngleProxy, ITimeProxy, IResolutionProxy, IFrequencyProxy, IQuotedProxy, CssLength, IFitContentProxy } from "../api/BasicTypes";
import { IVarRule, ICounterRule, IIDRule } from "./RuleTypes";
import { VarTemplateName, ListStyleType_StyleType, ExtendedVarValue } from "./StyleTypes";
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
 */
export declare function percent(n: number): IPercentProxy;
/**
 * The Len object contains methods that implement CSS mathematic functions on the `<length>`
 * CSS type by appending a length unit suffix.
 * Integer numbers use "px"; floating point numbers use "em".
 */
export declare let Len: ILengthMath;
/** Creates length value in quarters of an inch */
export declare function Q(n: number): ILengthProxy;
/** Creates length value in ch units */
export declare function ch(n: number): ILengthProxy;
/** Creates length value in cantimeters */
export declare function cm(n: number): ILengthProxy;
/** Creates length value in calculated font-sizes of the element */
export declare function em(n: number): ILengthProxy;
/** Creates length value in heights of lowercase letter 'x' in the font */
export declare function ex(n: number): ILengthProxy;
/** Creates length value in ic units */
export declare function ic(n: number): ILengthProxy;
/** Creates length value in inches */
export declare function inch(n: number): ILengthProxy;
/** Creates length value in line-heights of the element */
export declare function lh(n: number): ILengthProxy;
/** Creates length value in millimeters */
export declare function mm(n: number): ILengthProxy;
/** Creates length value in picas */
export declare function pc(n: number): ILengthProxy;
/** Creates length value in points */
export declare function pt(n: number): ILengthProxy;
/** Creates length value in pixels */
export declare function px(n: number): ILengthProxy;
/** Creates length value in 1% of the size of the initial containing block, in the direction
 * of the root element’s block axis */
export declare function vb(n: number): ILengthProxy;
/** Creates length value in 1% of the height of the viewport's initial containing block */
export declare function vh(n: number): ILengthProxy;
/** Creates length value in 1% of the size of the initial containing block, in the direction
 * of the root element’s inline axis */
export declare function vi(n: number): ILengthProxy;
/** Creates length value in 1% of the width of the viewport's initial containing block */
export declare function vw(n: number): ILengthProxy;
/** Creates length value in fontsizes of the root element (<html>) */
export declare function rem(n: number): ILengthProxy;
/** Creates length value in line-heights of the root element (<html>) */
export declare function rlh(n: number): ILengthProxy;
/** Creates length value in the units which are a smaller value between vw and vh */
export declare function vmin(n: number): ILengthProxy;
/** Creates length value in the units which are a larger value between vw and vh */
export declare function vmax(n: number): ILengthProxy;
/** Creates length value for flex */
export declare function fr(n: number): ILengthProxy;
/**
 * The Angle object contains methods that implement CSS mathematic functions on the `<angle>`
 * CSS type by appending an angle unit suffix.
 * Integer numbers use "deg"; floating point numbers use "turn".
 */
export declare let Angle: IAngleMath;
/** Creates angle value in degrees */
export declare function deg(n: number): IAngleProxy;
/** Creates angle value in radians */
export declare function rad(n: number): IAngleProxy;
/** Creates angle value in gradians */
export declare function grad(n: number): IAngleProxy;
/** Creates angle value in turns */
export declare function turn(n: number): IAngleProxy;
/**
 * The Time object contains methods that implement CSS mathematic functions on the `<time>`
 * CSS type by appending a time unit suffix.
 * Integer numbers use "ms"; floating point numbers use "s".
 */
export declare let Time: ITimeMath;
/** Creates time value in milliseconds */
export declare function ms(n: number): ITimeProxy;
/** Creates time value in seconds */
export declare function s(n: number): ITimeProxy;
/**
 * The Resolution object contains methods that implement CSS mathematic functions on the
 * `<resolution>` CSS type by appending a resolution unit suffix.
 * Integer numbers use "dpi"; floating point numbers use "dpcm".
 */
export declare let Resolution: IResolutionMath;
/** Creates resolution value in DPI */
export declare function dpi(n: number): IResolutionProxy;
/** Creates resolution value in DPCM */
export declare function dpcm(n: number): IResolutionProxy;
/** Creates resolution value in DPPX */
export declare function dppx(n: number): IResolutionProxy;
/** Creates resolution value in X */
export declare function x(n: number): IResolutionProxy;
/**
 * The Frequency object contains methods that implement CSS mathematic functions on the
 * `<frequency>` CSS type by appending a frequency unit suffix.
 * Integer numbers use "Hz"; floating point numbers use "kHz".
 */
export declare let Frequency: IFrequencyMath;
/** Creates frequency value in Hertz */
export declare function hz(n: number): IFrequencyProxy;
/** Creates frequency value in Kilo-Hertz */
export declare function khz(n: number): IFrequencyProxy;
/**
 * The `raw` function allows specifying arbitrary text for properties whose type normally doesn't
 * allow strings.This function is a tag function and must be invoked with the template string
 * without parentheses. The `raw` function can be used for any style property. Note, however, that
 * no validation checks are performed on the structure of the template. If the resulting string
 * isn't valid for the style property, the property will not be come part of the style rule
 * inserted into the DOM.
 *
 * **Example**
 *
 * ```typescript
 * clip-path: raw`polygon(50% 20%, 90% 80%, 10% 80%)`
 * ```
 */
export declare function raw(parts: TemplateStringsArray, ...params: any[]): IStringProxy;
/**
 * Returns a function representing the invocation of the `var()` CSS function for
 * the given custom CSS property with optional fallbacks.
 */
export declare function usevar<K extends VarTemplateName>(varObj: IVarRule<K>, fallback?: ExtendedVarValue<K>): IStringProxy;
/**
 * Returns an IFitContentProxy function representing the `fit-content()` CSS function.
 */
export declare function fitContent(size: Extended<CssLength>): IFitContentProxy;
/**
 * Returns a function representing the CSS `url()` function. The string parameter
 * will be wrapped in a "url()" invocation. The function can also accept the IIDRule object to
 * create url(#element) invocation, which is often used to address SVG elements by their IDs.
 */
export declare function url(val: Extended<string | IIDRule>): IUrlProxy;
/**
 * Returns a function representing the `attr()` CSS function. It returns IStringProxy
 * and theoretically can be used in any style property; however, its use by browsers is currently
 * limited to the `content` property. Also no browser currently support type, units or fallback
 * values.
 */
export declare function attr(attrName: Extended<string>, typeOrUnit?: Extended<AttrTypeKeyword | AttrUnitKeyword>, fallback?: Extended<string>): IStringProxy;
/**
 * Returns a function representing a string in quotation marks.
 */
export declare function quoted(val: any): IQuotedProxy;
/**
 * Returns a function representing the CSS `counter()` function with additional
 * optional strings added after and/or before the counter.
 */
export declare function counter(counterObj: Extended<ICounterRule | string>, style?: Extended<ListStyleType_StyleType>, textAfter?: Extended<string>, textBefore?: Extended<string>): IStringProxy;
/**
 * Returns a function representing the CSS `countesr()` function with the given
 * separator string and additional optional strings added after and/or before the counter.
 */
export declare function counters(counterObj: Extended<ICounterRule | string>, separator: Extended<string>, style?: Extended<ListStyleType_StyleType>, textAfter?: Extended<string>, textBefore?: Extended<string>): IStringProxy;
//# sourceMappingURL=UtilAPI.d.ts.map