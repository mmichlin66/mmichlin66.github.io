---
layout: mimcss-reference
unit: 4
title: "Mimcss Reference: Numeric Types"
description: "Describes types and functions used to set numeric values of CSS types such as <length>, <angle>, etc."
---

# Mimcss Reference: Numeric Types

This page describes types and functions that are used to set numeric values of CSS types.

- [Generic Numeric Values](#generic-numeric-values)
- [Number Values](#number-values)
- [Percent Values](#percent-values)
- [Length Values](#length-values)
- [Time Values](#time-values)
- [Angle Values](#angle-values)
- [CssPoint Type](#csspoint-type)
- [CssPosition Type](#cssposition-type)
- [CssRadius Type](#cssradius-type)

### Generic Numeric Values
CSS defines several numeric types, which can be specified either as unitless numbers or as numbers accompanied by a unit symbol. Mimcss defines TypeScript types for all these CSS types and they are based on the generic `NumberBase<>` and related types.

```tsx
/** Type for single numeric style property */
export type NumberBase<T extends string> = number | string | IGenericProxy<T>;

/** Type for multi-part numeric style property */
export type MultiNumberBase<T extends string> = OneOrMany<NumberBase<T>>;

/**
 * The INumberBaseMath interface contains methods that implement CSS mathematic functions on the
 * numeric CSS types.
 */
export interface INumberBaseMath<T extends string>
{
    /** Creates property value using the CSS min() function. */
    min( ...params: Extended<NumberBase<T>>[]): NumberProxy<T>;

    /** Creates property value using the CSS max() function. */
    max( ...params: Extended<NumberBase<T>>[]): NumberProxy<T>;

    /** Creates property value using the CSS clamp() function. */
    clamp( min: Extended<NumberBase<T>>, pref: Extended<NumberBase<T>>, max: Extended<NumberBase<T>>): NumberProxy<T>;

    /**
     * Creates property value using the CSS calc() function. This method is a tag function and must
     * be invoked with a template string without parentheses.
     */
    calc( formulaParts: TemplateStringsArray, ...params: Extended<NumberBase<T>>[]): NumberProxy<T>;
}
```

**See Also:** [IGenericProxy](stylesets.html#igenericproxy-interface), [OneOrMany](stylesets.html#utility-types), [Extended](stylesets.html#extended-type)

[Go to top](#numeric-types)

### Number Values
Number values are used to represent the CSS `<number>` type. Since it is a unitless number, the `string` type is not part of the definition for the `CssNumber` Mimcss type.

```tsx
/** Unique string literal that distinguishes the Number type from other numeric types */
export type NumberType = "Number";

/** Type for single style property of the `<number>` CSS type - note that it exludes `string` */
export type CssNumber = Exclude<NumberBase<NumberType>,string>;

/** Type for multi-part style property of the `<number>` CSS type */
export type CssMultiNumber = OneOrMany<CssNumber>;

/**
 * The ICssNumberMath interface contains methods that implement CSS mathematic functions on the
 * `<number>` CSS types.
 */
export interface ICssNumberMath extends INumberBaseMath<NumberType> {}

/**
 * The Num object contains static methods that implement CSS mathematic functions on the `<number>`
 * CSS type. When arguments for these functions are of the number JavaScript type they are
 * converted to strings without appending any units to them.
 */
export let Num: ICssNumberMath;
```

##### Number Value Examples

```tsx
class MyStyles extends css.StyleDefinition
{
    // Both integer and floating point numbers are simply converted to strings
    cls1 = this.$class({ flexGrow: 3 }) // "3"
    cls2 = this.$class({ flexGrow: 1.5 }) // "1.5"

    // A custom CSS variable can be declared to have the CssNumber type
    defaultFlexGrow = this.$var( "CssNumber", 2) }) // :root { --defaultFlexGrow: 2 }

    // Number can be specified using a custom CSS variable
    cls3 = this.$class({ flexGrow: this.defaultFlexGrow }) // "var(--defaultFlexGrow)"

    // Number can be specified using the min/max/clamp function
    cls4 = this.$class({ flexGrow: css.Num.min( 4, this.defaultFlexGrow) }) // "min( 4, var(defaultFlexGrow))"

    // Number can be specified using the calc function
    cls5 = this.$class({ flexGrow: css.Num.calc`2 * ${this.defaultFlexGrow}` }) // "calc(2 * var(--defaultFlexGrow))"

    // Number cannot be specified as a string but you can use the `raw` function to wrap a string
    cls6 = this.$class({ flexGrow: css.raw`20` }) // "20"
}
```

[Go to top](#numeric-types)

### Percent Values
Percent values are used to represent the CSS `<percentage>` type.

```tsx
/** Units of percent */
export type PercentUnits = "%";

/** Unique string literal that distinguishes the Percent type from other numeric types */
export type PercentType = "Percent";

/** Type for single style property of the `<percent>` CSS type */
export type CssPercent = NumberBase<PercentType>;

/** Type for multi-part style property of the `<percent>` CSS type */
export type OneOrMany<CssPercent> = OneOrMany<CssPercent>;

/** Proxy interface that represents values of the `<percent>` CSS type */
export interface IPercentProxy extends IGenericProxy<PercentType> {};

/**
 * The ICssPercentMath interface contains methods that implement CSS mathematic functions on the
 * `<percent>` CSS types.
 */
export interface ICssPercentMath extends INumberBaseMath<PercentType>
{
}

/**
 * The Percent object contains static methods that implement CSS mathematic functions on the
 * `<percentage>` CSS type by appending a "%" unit suffix.
 */
export let Percent: ICssPercentMath;
```

Mimcss provides the following function to create `<percent>` units:

```tsx
/** Creates angle value in degrees */
export function percent( n: number): IPercentProxy;
```

##### Percent Value Examples

```tsx
class MyStyles extends css.StyleDefinition
{
    // Integer numbers are converted to strings by appending the '%' units
    cls1 = this.$class({ zoom: 100 }) // "100%"

    // Both integer and floating point numbers are converted to strings by uppending `"%"`.
    // Numbers between -1 and 1 (not inclusive) are first multiplied by 100.
    cls2 = this.$class({ zoom: 100 }) // "100%"
    cls3 = this.$class({ zoom: 0.75 }) // "75%"

    // Percent can be specified using the css.percent() function
    cls4 = this.$class({ zoom: css.percent(30) }) // "30%"

    // A custom CSS variable can be declared to have the CssPercent type
    defaultZoom = this.$var( "CssPercent", 0.85) // :root { --defaultZoom: 85% }

    // Percent can be specified using a custom CSS variable
    cls5 = this.$class({ zoom: this.defaultZoom }) // "var(--defaultZoom)"

    // Percent can be specified using the min/max/clamp function
    cls6 = this.$class({ zoom: css.min( 80, this.defaultZoom) }) // "min( 80%, var(--defaultZoom))"

    // Percent can be specified using the calc function
    cls7 = this.$class({ zoom: css.Percent.calc`1.1 * ${this.defaultZoom}` }) // "calc(1.1 * var(--defaultZoom))"
}
```

[Go to top](#numeric-types)

### Length Values
Length values are used to represent the CSS `<length> | <percentage>` type.

```tsx
/** Units of length */
export type LengthUnits = "Q" | "ch" | "cm" | "em" | "ex" | "ic" | "in" | "lh" | "mm" | "pc" |
                "pt" | "px" | "vb" | "vh" | "vi" | "vw" | "rem" | "rlh" | "vmax" | "vmin" | "fr";

/** Unique string literal that distinguishes the Length type from other numeric types */
export type LengthType = "Length" | PercentType;

/** Type for single style property of the `<length>` CSS type */
export type CssLength = NumberBase<LengthType>;

/** Type for multi-part style property of the `<length>` CSS type */
export type OneOrMany<CssLength> = OneOrMany<CssLength>;

/** Type for 1-to-2-part style property of the `<length>` CSS type */
export type OneOrPair<CssLength> = OneOrPair<CssLength>;

/** Type for 1-to-4-part style property of the `<length>` CSS type */
export type OneOrBox<CssLength> = OneOrBox<CssLength>;

/** Proxy interface that represents values of the `<length>` CSS type */
export interface ILengthProxy extends IGenericProxy<LengthType> {};

/**
 * The ICssLengthMath interface contains methods that implement CSS mathematic functions on the
 * `<length>` CSS types.
 */
export interface ICssLengthMath extends INumberBaseMath<LengthType>
{
    /** Creates property value using the CSS minmax() function. */
    minmax( min: Extended<CssLength>, max: Extended<CssLength>): ILengthProxy;
}

/**
 * The Len object contains static methods that implement CSS mathematic functions on the `<length>`
 * CSS type.
 * Integer numbers use "px"; floating point numbers use "em".
 */
export let Len: ICssLengthMath;
```

Mimcss provides the following functions to create `<length>` units:

```tsx
/** Creates length value in quarters of an inch */
export function Q( n: number): ILengthProxy;

/** Creates length value in ch units */
export function ch( n: number): ILengthProxy;

/** Creates length value in cantimeters */
export function cm( n: number): ILengthProxy;

/** Creates length value in calculated font-sizes of the element */
export function em( n: number): ILengthProxy;

/** Creates length value in heights of lowercase letter 'x' in the font */
export function ex( n: number): ILengthProxy;

/** Creates length value in ic units */
export function ic( n: number): ILengthProxy;

/** Creates length value in inches */
export function inch( n: number): ILengthProxy;

/** Creates length value in line-heights of the element */
export function lh( n: number): ILengthProxy;

/** Creates length value in millimeters */
export function mm( n: number): ILengthProxy;

/** Creates length value in picas */
export function pc( n: number): ILengthProxy;

/** Creates length value in points */
export function pt( n: number): ILengthProxy;

/** Creates length value in pixels */
export function px( n: number): ILengthProxy;

/** Creates length value in 1% of the size of the initial containing block, in the direction
    * of the root element’s block axis */
export function vb( n: number): ILengthProxy;

/** Creates length value in 1% of the height of the viewport's initial containing block */
export function vh( n: number): ILengthProxy;

/** Creates length value in 1% of the size of the initial containing block, in the direction
    * of the root element’s inline axis */
export function vi( n: number): ILengthProxy;

/** Creates length value in 1% of the width of the viewport's initial containing block */
export function vw( n: number): ILengthProxy;

/** Creates length value in fontsizes of the root element (<html>) */
export function rem( n: number): ILengthProxy;

/** Creates length value in line-heights of the root element (<html>) */
export function rlh( n: number): ILengthProxy;

/** Creates length value in the units which are a smaller value between vw and vh */
export function vmax( n: number): ILengthProxy;

/** Creates length value in the units which are a larger value between vw and vh */
export function vmin( n: number): ILengthProxy;

/** Creates length value for flex */
export function fr( n: number): ILengthProxy;
```

##### Length Value Examples

```tsx
class MyStyles extends css.StyleDefinition
{
    // Integer numbers are converted to strings by appending the 'px' units
    cls1 = this.$class({ width: 100 }) // "100px"

    // Floating point numbers are converted to strings by appending the 'em' units
    cls2 = this.$class({ width:  0.5 }) // "0.5em"

    // Length can be specified as a string
    cls3 = this.$class({ width: "3rem" }) // "3rem"

    // Length can be specified using one of the "unit" methods
    cls4 = this.$class({ width: css.inch(2) }) // "2in"
    cls5 = this.$class({ width: css.vmax(2) }) // "2vmax"
    cls6 = this.$class({ width: css.percent(80) }) // "80%"

    // A custom CSS variable can be declared to have the CssLength type
    defaultLength = this.$var( "CssLength", 400) // :root { --defaultLength: 400px }

    // Length can be specified using a custom CSS variable
    cls7 = this.$class({ width: this.defaultLength }) // "var(--defaultLength)"

    // Length can be specified using the min/max/clamp function
    cls8 = this.$class({ width: css.Len.min( 200, 15.5, this.defaultLength, "60%") }) // "min( 200px, 15em, var(--defaultLength), 60%)"

    // Length can be specified using the calc function
    cls9 = this.$class({ width: css.Len.calc`(100% - ${this.defaultLength}) / 2` }) // "calc((100% - var(--defaultLength)) / 2)"
}
```

[Go to top](#numeric-types)

### Time Values
Time values are used to represent the CSS `<time>` type.

```tsx
/** Units of time */
export type TimeUnits = "s" | "ms";

/** Unique string literal that distinguishes the Time type from other numeric types */
export type TimeType = "Time";

/** Type for single style property of the `<time>` CSS type */
export type CssTime = NumberBase<TimeType>;

/** Type for multi-part style property of the `<time>` CSS type */
export type OneOrMany<CssTime> = OneOrMany<CssTime>;

/** Type for 1-to-four-part style property of the `<time>` CSS type */
export type CssTimeBox = OneOrBox<CssTime>;

/** Proxy interface that represents values of the `<time>` CSS type*/
export interface ITimeProxy extends IGenericProxy<TimeType> {};

/**
 * The ICssTimeMath interface contains methods that implement CSS mathematic functions on the
 * `<time>` CSS types.
 */
export interface ICssTimeMath extends INumberBaseMath<TimeType>
{
}

/**
 * The Time object contains static methods that implement CSS mathematic functions on the `<time>`
 * CSS type by appending a time unit suffix.
 * Integer numbers use "ms"; floating point numbers use "s".
 */
export let Time: ICssTimeMath;
```

Mimcss provides the following functions to create `<time>` units:

```tsx
/** Creates time value in milliseconds */
export function ms( n: number): ITimeProxy;

/** Creates time value in seconds */
export function s( n: number): ITimeProxy;
```

##### Time Value Examples

```tsx
class MyStyles extends css.StyleDefinition
{
    // Integer numbers are converted to strings by appending the 'px' units
    cls1 = this.$class({ animationDuration: 700 }) // "700ms"

    // Floating point numbers are converted to strings by appending the 's' units
    cls2 = this.$class({ animationDuration: 2.5 }) // "2.5s"

    // Time can be specified as a string
    cls3 = this.$class({ animationDuration: "1300ms" }) // "1300ms"

    // Time can be specified using one of the "unit" methods
    cls4 = this.$class({ animationDuration: css.s(2) }) // "2s"
    cls5 = this.$class({ animationDuration: css.ms(200) }) // "200ms"

    // A custom CSS variable can be declared to have the CssTime type
    defaultTime = this.$var( "CssTime", 300); // :root { --defaultTime: 300ms }

    // Time can be specified using a custom CSS variable
    cls6 = this.$class({ animationDuration: this.defaultTime }) // "var(--defaultTime)"

    // Time can be specified using the min/max/clamp function
    cls7 = this.$class({ animationDuration: css.Time.min( 700, this.defaultTime) }) // "min( 700ms, var(--defaultTime))"

    // Time can be specified using the calc function
    cls8 = this.$class({ animationDuration: css.Time.calc`1300ms - ${700} + ${this.defaultTime}` }) // "calc(1300ms - 700ms + var(--defaultTime))"
}
```

[Go to top](#numeric-types)

### Angle Values
Angle values are used to represent the CSS `<angle> | <percentage>` type.

```tsx
/** Units of angle */
export type AngleUnits = "deg" | "rad" | "grad" | "turn";

/** Unique string literal that distinguishes the Angle type from other numeric types */
export type AngleType = "Angle" | PercentType;

/** Type for single style property of the `<angle>` CSS type */
export type CssAngle = NumberBase<AngleType>;

/** Type for multi-part style property of the `<angle>` CSS type */
export type OneOrMany<CssAngle> = OneOrMany<CssAngle>;

/** Proxy interface that represents values of the `<angle>` CSS type */
export interface IAngleProxy extends IGenericProxy<AngleType> {};

/**
 * The ICssAngleMath interface contains methods that implement CSS mathematic functions on the
 * `<angle>` CSS types.
 */
export interface ICssAngleMath extends INumberBaseMath<AngleType>
{
    /** Creates angle value in degrees */
    deg( n: number): IAngleProxy;

    /** Creates angle value in radians */
    rad( n: number): IAngleProxy;

    /** Creates angle value in gradians */
    grad( n: number): IAngleProxy;

    /** Creates angle value in turns */
    turn( n: number): IAngleProxy;
}

/**
 * The Angle object contains static methods that implement CSS mathematic functions on the `<angle>`
 * CSS type by appending an angle unit suffix.
 * Integer numbers use "deg"; floating point numbers use "turn".
 */
export let Angle: ICssAngleMath;
```

Mimcss provides the following functions to create `<angle>` units:

```tsx
/** Creates angle value in degrees */
export function deg( n: number): IAngleProxy;

/** Creates angle value in radians */
export function rad( n: number): IAngleProxy;

/** Creates angle value in gradians */
export function grad( n: number): IAngleProxy;

/** Creates angle value in turns */
export function turn( n: number): IAngleProxy;
```

##### Angle Value Examples

```tsx
class MyStyles extends css.StyleDefinition
{
    // Integer numbers are converted to strings by appending the 'deg' units
    cls1 = this.$class({ fontStyle: 45 }) // "45deg"

    // Floating point numbers are converted to strings by appending the 'turn' units
    cls2 = this.$class({ fontStyle: 0.5 }) // "0.5turn"

    // Angle can be specified as a string
    cls3 = this.$class({ fontStyle: "1.3rad" }) // "1.3rad"

    // Angle can be specified using one of the "unit" methods
    cls4 = this.$class({ fontStyle: css.deg(30) }) // "30deg"
    cls5 = this.$class({ fontStyle: css.rad(1.5) }) // "1.5rad"

    // A custom CSS variable can be declared to have the CssAngle type
    defaultAngle = this.$var( "CssAngle", 45); // :root { --defaultAngle: 45deg }

    // Angle can be specified using a custom CSS variable
    cls6 = this.$class({ fontStyle: this.defaultAngle }) // "var(--defaultAngle)"

    // Angle can be specified using the min/max/clamp function
    cls7 = this.$class({ fontStyle: css.Angle.min( 45, this.defaultAngle) }) // "min( 45deg, var(--defaultAngle))"

    // Angle can be specified using the calc function
    cls8 = this.$class({ fontStyle: css.Angle.calc`0.4 - ${30} + ${this.defaultAngle}` }) // "calc(0.4turn - 30deg + var(--defaultAngle))"
}
```

[Go to top](#numeric-types)

### CssPoint Type
The `CssPoint` type is defined by an array with two [Length](#length-values) values.

```tsx
export type CssPoint = [Extended<CssLength>, Extended<CssLength>];
```

##### CssPoint Examples

```tsx
// Integer numbers are converted to strings by appending the 'px' units
let point: CssPoint = [2,2]; // "2px 2px"

// Floating point numbers are converted to strings by appending the 'em' units
let point: CssPoint = [0.5, 0.5]; // "0.5em 0.5em"

// A custom CSS variable can be declared to have the CssPoint type
startPoint = $var( "CssPoint", [1, 1]); // :root { --startPoint: 1px 1px }

// Point can be specified using a custom CSS variable
let point: CssPoint = this.startPoint; // "var(--startPoint)"
```

[Go to top](#numeric-types)

### CssPosition Type
Position values are used to represent the CSS `<position>` type. The `CssPosition` type is defined either by a keyword or a [Length](#length-values) value or by an array with up to 4 keywords or [Length](#length-values) values.

```tsx
/** Type describing the full up to 4 values `<position>` CSS type */
export type CssPosition = SimpleCssPosition |
    [HorizontalPositionKeyword, Extended<CssLength>, VerticalPositionKeyword] |
    [HorizontalPositionKeyword, VerticalPositionKeyword, Extended<CssLength>] |
    [HorizontalPositionKeyword, Extended<CssLength>, VerticalPositionKeyword, Extended<CssLength>];

/** Type describing multiple `<position>` CSS types */
export type OneOrMany<CssPosition> = Extended<CssPosition>[];

/** Type describing the horizontal position */
export type HorizontalPositionKeyword = "left" | "center" | "right";

/** Type describing the horizontal position */
export type VerticalPositionKeyword = "top" | "center" | "bottom";

/** Type describing a simple 1 or two values `<position>` CSS type */
export type SimpleCssPosition = HorizontalPositionKeyword | VerticalPositionKeyword | Extended<CssLength> |
    [HorizontalPositionKeyword | Extended<CssLength>, VerticalPositionKeyword | Extended<CssLength>];
```

##### CssPosition Examples

```tsx
class MyStyles extends css.StyleDefinition
{
    // Single keyword value
    cls1 = this.$class({ offsetPosition: "center" }) // "center"
    cls2 = this.$class({ offsetPosition: "top" }) // "top"

    // Single numeric value
    cls3 = this.$class({ offsetPosition: 25 }) // "25px"
    cls4 = this.$class({ offsetPosition: 0.7 }) // "0.7em"

    // Multiple values
    cls5 = this.$class({ offsetPosition: ["left", "top"] }) // "left top"
    cls6 = this.$class({ offsetPosition: ["left", 25, "top"] }) // "left 25px top"
    cls7 = this.$class({ offsetPosition: ["right", "bottom", 1.5] }) // "left top 1.5em"
    cls8 = this.$class({ offsetPosition: ["center", 25, "top", "10%"] }) // "center 25px top 10%"

    // A custom CSS variable can be declared to have the CssPosition type
    startPos = this.$var( "CssPosition", ["center", 25, "top", "10%"]) }) // :root { --startPos: center 25px top 10% }

    // Position can be specified using a custom CSS variable
    cls9 = this.$class({ offsetPosition: this.startPos }) // "var(--startPos)"
}
```

[Go to top](#numeric-types)

### CssRadius Type
Radius values are used to specify a corner radius (e.g. for a border properties). The `CssRadius` type is defined as either a single [Length](#length-values) value or as a tuple of two [Length](#length-values) values.

```tsx
export type CssRadius = OneOrPair<CssLength>;
```

##### CssRadius Examples

```tsx
class MyStyles extends css.StyleDefinition
{
    // Single value
    cls1 = this.$class({ borderTopLeftRadius: 4 }) // "4px"
    cls2 = this.$class({ borderTopLeftRadius: 0.3 }) // "0.3em"

    // Two values
    cls3 = this.$class({ borderTopLeftRadius: [2, 4] }) // "2px 4px"
    cls4 = this.$class({ borderTopLeftRadius: [0.3, 0.5] }) // "0.3em 0.5em"

    // A custom CSS variable can be declared to have the CssRadius type (within style definition class)
    defaultRadius = this.$var( "CssRadius", [2, 4]); // :root { --defaultRadius: 2, 4 }

    // Radius can be specified using a custom CSS variable
    cls5 = this.$class({ borderTopLeftRadius: this.defaultRadius }) // "var(--defaultRadius)"
}
```

[Go to top](#numeric-types)

