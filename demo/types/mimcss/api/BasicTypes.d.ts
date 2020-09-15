/**
 * This module describes common types and functions used in Mimcss. These include:
 *
 * - basic types used for all style properties
 * - numeric types used for style properties of CSS types such as `<length>`, `<angle>`, etc.
 * - pseudo classes and pseudo elements
 * - selectors
 * - colors
 * - shapes
 * - filters
 * - transforms
 * - utility types
 */
/**
 * Style values that can be used for any CSS property.
 */
export declare type Global_StyleType = "inherit" | "initial" | "unset" | "revert";
/**
 * The IGenericProxy interface represents a callable interface implemented using functions that
 * accept an optional parameter of a generic type and return a string. This interface is used as a
 * base for proxy interfaces defining types acceptable by certain style properties. The type
 * parameter helps differentiate these interfaces so that functions that can be assigned to one
 * type of style properties (e.g. `transform`) cannot be assigned to an incompatible style property
 * (e.g. `filter`).
 *
 * All CSS properties should accept string as the type of their value even if normally
 * they accept other types (e.g a set of string literals as `"red" | "green" | ...` for the
 * color) property. This is because in addition to their normal values any property
 * can use custom CSS property in the form `var(--propname)`. However, if we add string type
 * to the set of string literals (e.g. `"red" | "green" | string`), this throws off the
 * Intellisense and it doesn't prompt developers for the possible values. The `IGenericProxy`
 * can be used instead of string and this solves the Intellisense issue.
 *
 * Another benefit of using functions is that they are
 * constructed at one time but the string generation occurs at another time. This allows
 * using these objects in the style definition classes. They can reference objects like
 * `IVarRule` that are not fully initialized yet. However, when the styles should be inserted
 * into DOM the initialization will have already occurred and the function will
 * return a correct string.
 *
 * @typeParam T String constant that is used to differentiate between proxies used for different
 * purposes. The parameter `p` of this callable interface is of type T but it is not used
 * in any way.
 */
export interface IGenericProxy<T extends string = any> {
    (p?: T): string;
}
/**
 * The `IStringProxy` interface represents a function that returns a string. This function is part
 * of type definition for all CSS properties - even for those that don't have `string` as part of
 * their type.
 *
 * This function is returned from the [[raw]] function, which allows by-passing the property
 * typing rules and specifying a string directly. This might be useful, when a string value is
 * obtained from some external calculations.
 */
export interface IStringProxy extends IGenericProxy<"string"> {
}
/**
 * The `ICustomVar` interface represents a custom property or a constant with values of the given
 * type. Every style property can accept a custom CSS property value in the form of the `var()` CSS
 * function. Mimcss also allows defining "constants", which are a more lightweight way to provide
 * values that are used in other rules and properties.
 *
 * The `ICustomVar` interface is extended by the [[IVarRule]] interface that is returned
 * from the [[$var]] function and by the [[IConstRule]] interface that is returned from the
 * [[$const]] function.
 *
 * @typeparam T Basic type of the value of the custom CSS variable.
 */
export interface ICustomVar<T = any> {
    /**
     * Sets new value of this custom CSS property at the global level; that is, under `:root`. To
     * set a value of the CSS custom property under a certain CSS rule, use the
     * [[IStyleRule.setCustomProp]] method.
     * @param value New value for the CSS property.
     * @param schedulerType ID of a registered scheduler type that is used to write the property
     * value to the DOM. If undefined, the current default scheduler will be used.
     */
    setValue(value: ExtendedProp<T>, schedulerType?: number): void;
}
/**
 * The `IConstant` interface represents a constant with values of the given type. Mimcss allows
 * defining "constants", which are a lightweight way (compared to custom CSS properties) to provide
 * values that are used in other rules and properties. Every style property can accept a constant
 * value.
 *
 * The `IConstant` interface is extended by the [[IConstRule]] interface that is returned from the
 * [[$const]] function.
 *
 * @typeparam T Basic type of the value of the constant.
 */
export interface IConstant<T = any> {
    /**
     * Gets the value of the property.
     */
    getValue(): ExtendedProp<T>;
}
/**
 * Type that extends the given type with the following types:
 * - ICustomVar interface that allows using a CSS custom property rule value.
 * - IConstant interface that allows using a constant rule value.
 * - IStringProxy interface that allows specifying raw string value.
 */
export declare type Extended<T> = T | ICustomVar<T> | IConstant<T> | IStringProxy | null | undefined;
/**
 * Type that encapsulates the type of property in an object with a single "!" property. This
 * type is used to indicate that the property value must be flagged as "!important".
 */
export declare type ImportantProp<T> = {
    "!": ExtendedProp<T>;
};
/**
 * The ExtendedProp extends the given generic type with the following elements:
 * - Object with a single property "!", which is used to mark a property as "!important".
 * - Global_StyleType, which allows any property to be assigned the global values such as
 *   "initial", "inherit", "unset" and "revert".
 */
export declare type ExtendedProp<T> = Extended<T> | ImportantProp<T> | Global_StyleType;
/**
 * Type for pair-like properties that can have 1 or 2 values of the given type. This type is used
 * for style properties that can specify values for two dimensions (x and y), but also allow for a
 * single value, in which case it applies to both dimensions. For example, it used by style
 * properties such as `overflow`, `border-radius`, `background-repeat` and others.
 *
 * @typeparam T Type of the values
 *
 * **Examples:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // single value
 *     cls1 = css.$class({ overflow: "auto" })

 *     // two values
 *     cls2 = css.$class({ overflow: ["scroll", "hidden"] })
 * }
 * ```
 */
export declare type OneOrPair<T> = T | [Extended<T>, Extended<T>?];
/**
 * Type for box-like properties that can have 1 to 4 values of the given type. This type is used
 * for style properties that specify values for the four sides of an element box and have rules how
 * specifying 1, 2 or 3 values determine the values applied to all four sides. For example, it used
 * by style properties such as `margin`, `padding`, `border-color` and others.
 *
 * @typeparam T Type of the values
 *
 * **Examples:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // single value
 *     cls1 = css.$class({ margin: "auto" })
 *
 *     // two values
 *     cls2 = css.$class({ margin: [0, 8] })
 *
 *     // three values
 *     cls3 = css.$class({ margin: [6, 6, 8] })
 *
 *     // four values
 *     cls4 = css.$class({ margin: [4, 6, 8, 12] })
 * }
 * ```
 */
export declare type OneOrBox<T> = T | [Extended<T>, Extended<T>?, Extended<T>?, Extended<T>?];
/**
 * Type for properties that can have 1 or more values of the given type. It is used by many style
 * properties such as `animation` and all its longhands, `background` and all its longhands,
 * `transition` and all its longhands, `box-shadow`, `transform`, `filter` and others.
 *
 * @typeparam T Type of the values
 *
 * **Examples:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // single value
 *     cls1 = css.$class({ transform: scale(0.5) })
 *
 *     // several values
 *     cls2 = css.$class({ transform: [scale(0.5, rotate(90), translateX(200))] })
 * }
 * ```
 */
export declare type OneOrMany<T> = T | Extended<T>[];
/**
 * The INumberBaseMath interface contains methods that implement CSS mathematical functions on the
 * numeric CSS types. This interface is extended by dimension-specific interfaces such as
 * [[INumberMath]], [[ILengthMath]], [[IAngleMath]], etc.
 *
 * @typeparam T Type of values participating in the mathematical functions. For example, the
 * [[ILengthMath]] interface specifies it as [[CssLength]].
 * @typeparam U Type that contains string literals defining units available for the given numeric
 * type.
 * @typeparam P String literal type that distinguishes one numeric type from another. This
 * parameter is passed to the [[IGenericProxy]] interface, which is used as a return value from the
 * interface methods.
 */
export interface INumberBaseMath<T, U extends string, P extends string> {
    /**
     * Creates value from the given number and unit. This method can be used to dynamically
     * construct the needed dimension.
     *
     * @param n Numeric value.
     * @param unit Unit to append to the numeric value.
     * @returns Function implementing the `IGenericProxy<P>` callable interface. This allows the
     * result of the `units` method to be assigned only to the properties of compatible numeric
     * type.
     */
    units(n: number, unit: U): IGenericProxy<P>;
    /**
     * Creates property value using the CSS `min()` function. Parameters are of the type
     * `Extended<T>`; that is, they can be either of the generic type `T`, or a CSS custom variable
     * or constant of type `T`.
     *
     * @param params One or more values to choose the minimum from.
     * @returns Function implementing the `IGenericProxy<P>` callable interface. This allows the
     * result of the `min` method to be assigned only to the properties of a compatible numeric
     * type.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     // min( 200px, 25.5em, 45%)
     *     cls1 = css.$class({
     *         width: css.min( 200, 25.5, css.percent(45))
     *     })
     * }
     * ```
     */
    min(...params: Extended<T>[]): IGenericProxy<P>;
    /**
     * Creates property value using the CSS `max()` function. Parameters are of the type
     * `Extended<T>`; that is, they can be either of the generic type `T`, or a CSS custom variable
     * or constant of type `T`.
     *
     * @param params One or more values to choose the maximum from.
     * @returns Function implementing the `IGenericProxy<P>` callable interface. This allows the
     * result of the `max` method to be assigned only to the properties of a compatible numeric
     * type.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     // max( 200px, 25.5em, 45%)
     *     cls1 = css.$class({
     *         width: css.max( 200, 25.5, css.percent(45))
     *     })
     * }
     * ```
     */
    max(...params: Extended<T>[]): IGenericProxy<P>;
    /**
     * Creates property value using the CSS `clamp()` function. Parameters are of the type
     * `Extended<T>`; that is, they can be either of the generic type `T`, or a CSS custom variable
     * or constant of type `T`.
     *
     * @param min Lower bound for the return value.
     * @param pref Preferred value.
     * @param min Upper bound for the return value.
     * @returns Function implementing the `IGenericProxy<P>` callable interface. This allows the
     * result of the `clamp` method to be assigned only to the properties of a compatible numeric
     * type.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     // clamp( 200px, 25.5em, 45%)
     *     cls1 = css.$class({
     *         width: css.clamp( 200, 25.5, css.percent(45))
     *     })
     * }
     * ```
     */
    clamp(min: Extended<T>, pref: Extended<T>, max: Extended<T>): IGenericProxy<P>;
    /**
     * Creates property value using the CSS `calc()` function. This method is a tag function and must
     * be invoked with a template string without parentheses. Parameters in the template string
     * are of the type `Extended<T>`; that is, they can be either of the generic type `T`, or a
     * CSS custom variable or constant of type `T`.
     *
     * @param formularParts Array of strings, whcih are part of the template string and which are
     * not parameters.
     * @param params Array of parameters from the template string.
     * @returns Function implementing the `IGenericProxy<P>` callable interface. This allows the
     * result of the `calc` method to be assigned only to the properties of a compatible numeric
     * type.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     defaultPadding = css.var( "CssLength", 8)
     *
     *     // calc( 200px - (2 * var(--defaultPadding)))
     *     cls1 = css.$class({
     *         width: css.calc` 200px - (2 * ${this.defaultPadding})`
     *     })
     * }
     * ```
     */
    calc(formulaParts: TemplateStringsArray, ...params: Extended<T>[]): IGenericProxy<P>;
}
/** Unique string literal that distinguishes the Number type from other numeric types */
export declare type NumberType = "Number";
/** Proxy interface that represents values of the `<percent>` CSS type */
export interface INumberProxy extends IGenericProxy<NumberType> {
}
/** Type for a value of the `<number>` CSS type */
export declare type CssNumber = number | INumberProxy;
/**
 * The ICssNumberMath interface contains methods that implement CSS mathematic functions on the
 * `<number>` CSS types. This interface is implemented by the [[Num]] object.
 */
export interface INumberMath extends INumberBaseMath<CssNumber, "", NumberType> {
}
/** Unique string literal that distinguishes the Percent type from other numeric types */
export declare type PercentType = "Percent";
/** Units of percent */
export declare type PercentUnits = "%";
/** Proxy interface that represents values of the `<percent>` CSS type */
export interface IPercentProxy extends IGenericProxy<PercentType> {
}
/** Type for single style property of the `<percent>` CSS type */
export declare type CssPercent = number | IPercentProxy | "100%";
/**
 * The ICssPercentMath interface contains methods that implement CSS mathematic functions on the
 * `<percent>` CSS types. This interface is implemented by the [[Percent]] object.
 */
export interface IPercentMath extends INumberBaseMath<CssPercent, PercentUnits, PercentType> {
}
/** Unique string literal that distinguishes the Length type from other numeric types */
export declare type LengthType = "Length" | PercentType;
/** Units of length */
export declare type LengthUnits = "Q" | "ch" | "cm" | "em" | "ex" | "ic" | "in" | "lh" | "mm" | "pc" | "pt" | "px" | "vb" | "vh" | "vi" | "vw" | "rem" | "rlh" | "vmax" | "vmin" | "fr";
/** Proxy interface that represents values of the `<length>` CSS type */
export interface ILengthProxy extends IGenericProxy<LengthType> {
}
/**
 * Type for single style property of the `<length>` CSS type. Integer numbers are interpreted as
 * having the `"px"` units and floating point numbers are interpreted as having the `"em"` units.
 * In addition to numbers and the [[ILengthProxy]] interface it also allows several string
 * literals, such as `"1fr"` and `"100%"`. This is in order to make it more convenient for
 * developers to write these frequently used values. Other `<length>` units should be specified
 * using the functions such as [[rem]], [[vh]], [[vmin]], etc.
 */
export declare type CssLength = number | ILengthProxy | "5%" | "10%" | "15%" | "20%" | "25%" | "30%" | "35%" | "40%" | "45%" | "50%" | "55%" | "60%" | "65%" | "70%" | "75%" | "80%" | "85%" | "90%" | "95%" | "100%" | "100vh" | "100vw" | "1fr" | "2fr" | "3fr" | "4fr" | "5fr" | "6fr" | "7fr" | "8fr" | "9fr" | "10fr" | "11fr" | "12fr";
/**
 * The ICssLengthMath interface contains methods that implement CSS mathematic functions on the
 * `<length>` CSS types. This interface is implemented by the [[Len]] object.
 */
export interface ILengthMath extends INumberBaseMath<CssLength, LengthUnits | PercentUnits, LengthType> {
}
/** Unique string literal that distinguishes the Angle type from other numeric types */
export declare type AngleType = "Angle" | PercentType;
/** Units of angle */
export declare type AngleUnits = "deg" | "rad" | "grad" | "turn";
/** Proxy interface that represents values of the `<angle>` CSS type */
export interface IAngleProxy extends IGenericProxy<AngleType> {
}
/** Type for single style property of the `<angle>` CSS type */
export declare type CssAngle = number | IAngleProxy;
/**
 * The ICssAngleMath interface contains methods that implement CSS mathematic functions on the
 * `<angle>` CSS types. This interface is implemented by the [[Angle]] object.
 */
export interface IAngleMath extends INumberBaseMath<CssAngle, AngleUnits | PercentUnits, AngleType> {
}
/** Unique string literal that distinguishes the Time type from other numeric types */
export declare type TimeType = "Time";
/** Units of time */
export declare type TimeUnits = "s" | "ms";
/** Proxy interface that represents values of the `<time>` CSS type*/
export interface ITimeProxy extends IGenericProxy<TimeType> {
}
/** Type for single style property of the `<time>` CSS type */
export declare type CssTime = number | ITimeProxy;
/**
 * The ICssTimeMath interface contains methods that implement CSS mathematic functions on the
 * `<time>` CSS types. This interface is implemented by the [[Time]] object.
 */
export interface ITimeMath extends INumberBaseMath<CssTime, TimeUnits, TimeType> {
}
/** Unique string literal that distinguishes the Resolution type from other numeric types */
export declare type ResolutionType = "Resolution";
/** Units of resolution */
export declare type ResolutionUnits = "dpi" | "dpcm" | "dppx" | "x";
/** Proxy interface that represents values of the `<resolution>` CSS type */
export interface IResolutionProxy extends IGenericProxy<ResolutionType> {
}
/** Type for single style property of the `<resolution>` CSS type */
export declare type CssResolution = number | IResolutionProxy;
/**
 * The ICssResolutionMath interface contains methods that implement CSS mathematic functions on the
 * `<resolution>` CSS types. This interface is implemented by the [[Resolution]] object.
 */
export interface IResolutionMath extends INumberBaseMath<CssResolution, ResolutionUnits, ResolutionType> {
}
/** Unique string literal that distinguishes the Frequency type from other numeric types */
export declare type FrequencyType = "Frequency";
/** Units of frequency */
export declare type FrequencyUnits = "Hz" | "kHz";
/** Proxy interface that represents values of the `<frequency>` CSS type */
export interface IFrequencyProxy extends IGenericProxy<FrequencyType> {
}
/** Type for single style property of the `<frequency>` CSS type */
export declare type CssFrequency = number | IFrequencyProxy;
/**
 * The ICssFrequencyMath interface contains methods that implement CSS mathematic functions on the
 * `<frequency>` CSS types. This interface is implemented by the [[Frequency]] object.
 */
export interface IFrequencyMath extends INumberBaseMath<CssFrequency, FrequencyUnits, FrequencyType> {
}
/** Type for `width`, `height`, `block-size` and `inline-size` style properties */
export declare type CssSize = CssLength | "auto" | "max-content" | "min-content" | IFitContentProxy;
/**
 * The IFitContentProxy interface represents an invocation of the CSS `fit-content()` function. It
 * is returned from the [[fitContent]] function.
 */
export interface IFitContentProxy extends IGenericProxy<"fit-content"> {
}
/**
 * Type representing a point as a two element tuple where x and y coordinates are specified using
 * the [[CssLength]] type.
 */
export declare type CssPoint = [Extended<CssLength>, Extended<CssLength>];
/** Horizontal position keywords */
export declare type HorizontalPositionKeyword = "left" | "center" | "right";
/** Type of a value specifying the horizontal position */
export declare type HorizontalPosition = HorizontalPositionKeyword | CssLength;
/** Vertical position keywords */
export declare type VerticalPositionKeyword = "top" | "center" | "bottom";
/** Type of a value specifying the vertical position */
export declare type VerticalPosition = VerticalPositionKeyword | CssLength;
/** Type describing a simple 1 or two values `<position>` CSS type */
export declare type SimpleCssPosition = HorizontalPositionKeyword | VerticalPositionKeyword | CssLength | [Extended<HorizontalPosition>, Extended<VerticalPosition>] | [Extended<VerticalPosition>, Extended<HorizontalPosition>];
/** Type describing the full up to 4 values `<position>` CSS type */
export declare type CssPosition = SimpleCssPosition | [Extended<HorizontalPositionKeyword>, Extended<VerticalPositionKeyword>, Extended<CssLength>] | [Extended<HorizontalPositionKeyword>, Extended<CssLength>, Extended<VerticalPositionKeyword>, Extended<CssLength>?] | [Extended<VerticalPositionKeyword>, Extended<HorizontalPositionKeyword>, Extended<CssLength>] | [Extended<VerticalPositionKeyword>, Extended<CssLength>, Extended<HorizontalPositionKeyword>, Extended<CssLength>?];
/** Type for a single corner radius */
export declare type CssRadius = OneOrPair<CssLength>;
/**
 * The CssAspectRatio interface represents the CSS `<ratio>` type.
 */
export declare type CssAspectRatio = CssNumber | [Extended<CssNumber>, Extended<CssNumber>] | IAspectRatioProxy | "1/1" | "4/3" | "16/9" | "185/100" | "239/100";
/**
 * The IAspectRatioProxy interface represents an invocation of the [[ratio]] function.
 */
export interface IAspectRatioProxy extends IGenericProxy<"aspect-ratio"> {
}
/**
 * The IRuleWithSelector interface represents an entity that has a selector string..
 */
export interface IRuleWithSelector {
    /** CSS rule selector string */
    readonly selectorText: string;
}
/**
 * The ISelectorProxy function returns a CSS selector string. This type is returned from the
 * [[selector]] function.
 */
export interface ISelectorProxy extends IGenericProxy<"selector"> {
}
/** Type for a single selector token that can be used as an argument to the [[selector]] function */
export declare type SelectorItem = string | IRuleWithSelector | IStringProxy | ISelectorProxy;
/** Type for a selector */
export declare type CssSelector = SelectorItem | SelectorItem[];
/** Represents print-related pseudo classes - those that can be specified with the @page CSS rule */
export declare type PagePseudoClass = ":blank" | ":first" | ":left" | ":right";
/** Represents pseudo classes */
export declare type PseudoClass = PagePseudoClass | ":active" | ":any-link" | ":blank" | ":checked" | ":default" | ":defined" | ":disabled" | ":empty" | ":enabled" | ":first-child" | ":first-of-type" | ":fullscreen" | ":focus" | ":focus-visible" | ":focus-Within" | ":hover" | ":indeterminate" | ":in-range" | ":invalid" | ":last-child" | ":last-of-type" | ":link" | ":only-child" | ":only-of-type" | ":optional" | ":out-of-range" | ":placeholder-shown" | ":read-only" | ":read-write" | ":required" | ":root" | ":scope" | ":target" | ":valid" | ":visited" | ":dir(rtl)" | ":dir(ltr)";
/** Represents pseudo elements */
export declare type PseudoElement = "::after" | "::backdrop" | "::before" | "::cue" | "::firstLetter" | "::firstLine" | "::grammarError" | "::marker" | "::placeholder" | "::selection" | "::spellingError";
/** Combines names of non-parameterized pseudo classes and pseudo elements */
export declare type PseudoEntity = PseudoClass | PseudoElement;
/**
 * Type for expression An+B, which is used for parameterized pseudo classes like `nth-child`. It
 * can be a string, a single number or a tuple with one or two numbers. If it is a single number,
 * the 'n' in An+B will not be used - as in `nth-child(2)`. If it is a tuple, the 'n' will be used
 * even if the second tuple's element is not provided.
 */
export declare type NthChildExpression = "odd" | "even" | number | [number, number?] | string | IStringProxy;
/**
 * The IParameterizedPseudoClass interface maps names of pseudo classes that require parameters
 * to the type that can be used to specify these parameters.
 */
export interface IParameterizedPseudoClass {
    ":has": string;
    ":host": string;
    ":host-context": string;
    ":is": string;
    ":lang": string;
    ":not": string;
    ":nth-child": NthChildExpression;
    ":nth-of-type": NthChildExpression;
    ":nth-last-child": NthChildExpression;
    ":nth-last-of-type": NthChildExpression;
    ":where": string;
}
/**
 * The IParameterizedPseudoElement interface maps names of pseudo elements that require parameters
 * to the type that can be used to specify these parameters.
 */
export interface IParameterizedPseudoElement {
    "::part": string;
    "::slotted": string;
}
/**
 * The IParameterizedPseudoEntity interface combines IParameterizedPseudoClass and
 * IParameterizedPseudoElement interfaces.
 */
export interface IParameterizedPseudoEntity extends IParameterizedPseudoClass, IParameterizedPseudoElement {
}
/** Represents properties used in the [[CombinedStyleset]] which are used to define dependent rules */
export declare type SelectorCombinator = "&" | "&," | "& " | "&>" | "&+" | "&~" | ",&" | " &" | ">&" | "+&" | "~&";
/**
 * The INamedColors interface lists the names of standard Web colors. It is needed to allow developers
 * to add new named colors through module augmentation technique.
 */
export interface INamedColors {
    readonly black: number;
    readonly silver: number;
    readonly gray: number;
    readonly white: number;
    readonly maroon: number;
    readonly red: number;
    readonly purple: number;
    readonly fuchsia: number;
    readonly green: number;
    readonly lime: number;
    readonly olive: number;
    readonly yellow: number;
    readonly navy: number;
    readonly blue: number;
    readonly teal: number;
    readonly aqua: number;
    readonly orange: number;
    readonly aliceblue: number;
    readonly antiquewhite: number;
    readonly aquamarine: number;
    readonly azure: number;
    readonly beige: number;
    readonly bisque: number;
    readonly blanchedalmond: number;
    readonly blueviolet: number;
    readonly brown: number;
    readonly burlywood: number;
    readonly cadetblue: number;
    readonly chartreuse: number;
    readonly chocolate: number;
    readonly coral: number;
    readonly cornflowerblue: number;
    readonly cornsilk: number;
    readonly crimson: number;
    readonly cyan: number;
    readonly darkblue: number;
    readonly darkcyan: number;
    readonly darkgoldenrod: number;
    readonly darkgray: number;
    readonly darkgreen: number;
    readonly darkgrey: number;
    readonly darkkhaki: number;
    readonly darkmagenta: number;
    readonly darkolivegreen: number;
    readonly darkorange: number;
    readonly darkorchid: number;
    readonly darkred: number;
    readonly darksalmon: number;
    readonly darkseagreen: number;
    readonly darkslateblue: number;
    readonly darkslategray: number;
    readonly darkslategrey: number;
    readonly darkturquoise: number;
    readonly darkviolet: number;
    readonly deeppink: number;
    readonly deepskyblue: number;
    readonly dimgray: number;
    readonly dimgrey: number;
    readonly dodgerblue: number;
    readonly firebrick: number;
    readonly floralwhite: number;
    readonly forestgreen: number;
    readonly gainsboro: number;
    readonly ghostwhite: number;
    readonly gold: number;
    readonly goldenrod: number;
    readonly greenyellow: number;
    readonly grey: number;
    readonly honeydew: number;
    readonly hotpink: number;
    readonly indianred: number;
    readonly indigo: number;
    readonly ivory: number;
    readonly khaki: number;
    readonly lavender: number;
    readonly lavenderblush: number;
    readonly lawngreen: number;
    readonly lemonchiffon: number;
    readonly lightblue: number;
    readonly lightcoral: number;
    readonly lightcyan: number;
    readonly lightgoldenrodyellow: number;
    readonly lightgray: number;
    readonly lightgreen: number;
    readonly lightgrey: number;
    readonly lightpink: number;
    readonly lightsalmon: number;
    readonly lightseagreen: number;
    readonly lightskyblue: number;
    readonly lightslategray: number;
    readonly lightslategrey: number;
    readonly lightsteelblue: number;
    readonly lightyellow: number;
    readonly limegreen: number;
    readonly linen: number;
    readonly magenta: number;
    readonly mediumaquamarine: number;
    readonly mediumblue: number;
    readonly mediumorchid: number;
    readonly mediumpurple: number;
    readonly mediumseagreen: number;
    readonly mediumslateblue: number;
    readonly mediumspringgreen: number;
    readonly mediumturquoise: number;
    readonly mediumvioletred: number;
    readonly midnightblue: number;
    readonly mintcream: number;
    readonly mistyrose: number;
    readonly moccasin: number;
    readonly navajowhite: number;
    readonly oldlace: number;
    readonly olivedrab: number;
    readonly orangered: number;
    readonly orchid: number;
    readonly palegoldenrod: number;
    readonly palegreen: number;
    readonly paleturquoise: number;
    readonly palevioletred: number;
    readonly papayawhip: number;
    readonly peachpuff: number;
    readonly peru: number;
    readonly pink: number;
    readonly plum: number;
    readonly powderblue: number;
    readonly rosybrown: number;
    readonly royalblue: number;
    readonly saddlebrown: number;
    readonly salmon: number;
    readonly sandybrown: number;
    readonly seagreen: number;
    readonly seashell: number;
    readonly sienna: number;
    readonly skyblue: number;
    readonly slateblue: number;
    readonly slategray: number;
    readonly slategrey: number;
    readonly snow: number;
    readonly springgreen: number;
    readonly steelblue: number;
    readonly tan: number;
    readonly thistle: number;
    readonly tomato: number;
    readonly turquoise: number;
    readonly violet: number;
    readonly wheat: number;
    readonly whitesmoke: number;
    readonly yellowgreen: number;
    readonly rebeccapurple: number;
}
/**
 * The IColorProxy interface represents an invocation of one of CSS functions that are used for
 * specifying colors. This interface is returned from functions like: rgb(), alpha(), etc.
 */
export interface IColorProxy extends IGenericProxy<"color"> {
}
/**
 * The SystemColors type defines keywords for system colors that are used in forced-color mode
 * (but can be also used in the regular mode).
 */
export declare type SystemColors = "ActiveText" | "ButtonFace" | "ButtonText" | "Canvas" | "CanvasText" | "Field" | "FieldText" | "GrayText" | "Highlight" | "HighlightText" | "LinkText" | "VisitedText";
/**
 * Type for CSS color. Color can be represented using the following types:
 * - keywords: any string that is a name of a property in the INamedColors interface.
 * - number:
 *   - negative numbers are treated as inverted colors.
 *   - integer part of the number must be less than or equal to 0xFFFFFF - everything else is
 *     ignored.
 *   - floating point part of the number is treated as percents of alpha channel. If there is no
 *     floating part, alpha is 1.
 * - functions: rgb(), hsl(), alpha() as well as any function that returns the IColorProxy type.
 */
export declare type CssColor = "transparent" | "currentcolor" | keyof INamedColors | number | IColorProxy | SystemColors;
/**
 * Object whose property names are names of well-known colors and values correspond to the hexadecimal
 * representartion of the RGB separations (without an alpha mask).
 */
export declare let Colors: INamedColors;
/**
 * The IUrlProxy function represents an invocation of the CSS url() function.
 */
export interface IUrlProxy extends IGenericProxy<"url"> {
}
/**
 * The ImageProxy interface represents an invocation of one of CSS functions that are used for
 * specifying images. This interface is returned from functions like [[linearGradient]],
 * [[crossFade]] and others.
 */
export interface IImageProxy extends IGenericProxy<"image"> {
}
/**
 * The CssImage type represents a type used for CSS properties that accept the `<image>` type.
 * Image can be specified either using the [[url]] function that returns the [[IUrlProxy]]
 * interface or any of the functions that return the [[IImageProxy]] interface such as
 * [[linearGradient]], [[crossFade]] and others.
 */
export declare type CssImage = IUrlProxy | IImageProxy;
/**
 * The IFilterProxy interface represents an invocation of one the CSS `<filter>` functions.
 */
export interface IFilterProxy extends IGenericProxy<"filter"> {
}
/**
 * The IBasicShapeProxy interface represents an invocation of one the CSS `<basic-shape>` functions
 * except the `path()` function.
 */
export interface IBasicShapeProxy extends IGenericProxy<"basic-shape"> {
}
/**
 * The BasicShapeType represents an invocation of one the CSS `<basic-shape>` functions including
 * the `path()` function.
 */
export declare type BasicShape = IBasicShapeProxy | IPathBuilder;
/**
 * The IRayProxy function represents an invocation of one the CSS `ray()` functions.
 */
export interface IRayProxy extends IGenericProxy<"ray"> {
}
/**
 * The ITransformProxy interface represents an invocation of one the CSS `<basic-shape>` functions.
 * It is returned from the multiple functions such as [[scale]], [[skew]] and others.
 */
export interface ITransformProxy extends IGenericProxy<"transform"> {
}
/**
 * The IMinMaxProxy interface represents an invocation of the minmax() function. It is returned from
 * the [[minmax]] function.
 */
export interface IMinMaxProxy extends IGenericProxy<"minmax"> {
}
/**
 * The IRepeatProxy interface represents an invocation of the CSS `repeat()` function. It is
 * returned from the [[repeat]] function.
 */
export interface IRepeatProxy extends IGenericProxy<"repeat"> {
}
/**
 * The ISpanProxy interface produces the span expression for grid layouts. It is returned from
 * the [[span]] function.
 */
export interface ISpanProxy extends IGenericProxy<"span"> {
}
/**
 * The `IPathBuilder` interface represents the object that accumulates path commands that are then
 * converted to a string parameter of the CSS `path()` function. The `IPathBuilder` interface is
 * returned from the [[path]] function.
 */
export interface IPathBuilder {
    M(first: [number, number], ...next: [number, number][]): IPathBuilder;
    m(first: [number, number], ...next: [number, number][]): IPathBuilder;
    L(first: [number, number], ...next: [number, number][]): IPathBuilder;
    l(first: [number, number], ...next: [number, number][]): IPathBuilder;
    H(first: number, ...next: number[]): IPathBuilder;
    h(first: number, ...next: number[]): IPathBuilder;
    V(first: number, ...next: number[]): IPathBuilder;
    v(first: number, ...next: number[]): IPathBuilder;
    C(first: [number, number, number, number, number, number], ...next: [number, number, number, number, number, number][]): IPathBuilder;
    c(first: [number, number, number, number, number, number], ...next: [number, number, number, number, number, number][]): IPathBuilder;
    S(first: [number, number, number, number], ...next: [number, number, number, number][]): IPathBuilder;
    s(first: [number, number, number, number], ...next: [number, number, number, number][]): IPathBuilder;
    Q(first: [number, number, number, number], ...next: [number, number, number, number][]): IPathBuilder;
    q(first: [number, number, number, number], ...next: [number, number, number, number][]): IPathBuilder;
    T(first: [number, number], ...next: [number, number][]): IPathBuilder;
    t(first: [number, number], ...next: [number, number][]): IPathBuilder;
    A(first: [number, number, number, 0 | 1, 0 | 1, number, number], ...next: [number, number, number, 0 | 1, 0 | 1, number, number][]): IPathBuilder;
    a(first: [number, number, number, 0 | 1, 0 | 1, number, number], ...next: [number, number, number, 0 | 1, 0 | 1, number, number][]): IPathBuilder;
    z(): IPathBuilder;
}
/** Type used for several properties */
export declare type GeometryBoxKeyword = "margin-box" | "border-box" | "padding-box" | "content-box" | "fill-box" | "stroke-box" | "view-box";
/**
 * Type representing extent for the `radial-gradient()` or `ray()` CSS function.
 */
export declare type ExtentKeyword = "closest-corner" | "closest-side" | "farthest-corner" | "farthest-side";
export declare type AttrTypeKeyword = "string" | "color" | "url" | "integer" | "number" | "length" | "angle" | "time" | "frequency";
export declare type AttrUnitKeyword = PercentUnits | LengthUnits | TimeUnits | AngleUnits | ResolutionUnits | FrequencyUnits;
/**
 * The IQuotedProxy function represents a string in quotation marks
 */
export interface IQuotedProxy extends IGenericProxy<"quoted"> {
}
/**
 * The WebNamespaces class contains identifiers for the known Web-related namespaces.
 */
export declare abstract class WebNamespaces {
    static readonly HTML = "http://www.w3.org/1999/xhtml";
    static readonly SVG = "http://www.w3.org/2000/svg";
    static readonly XLink = "http://www.w3.org/1999/xlink";
    static readonly XML = "http://www.w3.org/XML/1998/namespace";
    static readonly XMLNS = "http://www.w3.org/2000/xmlns/";
    static readonly MathML = "http://www.w3.org/1998/Math/MathML";
}
//# sourceMappingURL=BasicTypes.d.ts.map