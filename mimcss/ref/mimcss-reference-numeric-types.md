---
layout: mimcss-reference
unit: 4
title: "Mimcss Reference: Numeric Types"
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
/**
 * The NumberProxy function represents a string value can be assigned to properties of the CSS
 * numeric types. This function is returned from functions like min(), max() and calc().
 */
export type NumberProxy<T extends string> = (p?: T) => string;

/** Type for single numeric style property */
export type NumberBase<T extends string> = number | string | NumberProxy<T>;

/** Type for multi-part numeric style property */
export type MultiNumberBase<T extends string> = OneOrMany<NumberBase<T>>;

/**
 * The INumberMath interface contains methods that implement CSS mathematic functions on the
 * numeric CSS types.
 */
export interface INumberMath<T extends string>
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

[Go to top](#mimcss-reference-numeric-types)

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
export interface ICssNumberMath extends INumberMath<NumberType> {}

/**
 * The Num object contains static methods that implement CSS mathematic functions on the `<number>`
 * CSS type. When arguments for these functions are of the number JavaScript type they are
 * converted to strings without appending any units to them.
 */
export let Num: ICssNumberMath;
```

##### Number Value Examples

```tsx
// Both integer and floating point numbers are simply converted to strings
let num: CssNumber = 100; // "100"
let num: CssNumber = 1.5; // "1.5"

// Number can be specified using a custom CSS variable
let num: CssNumber = this.defaultOrphans; // "var(--defaultOrphans)"

// A custom CSS variable can be declared to have the CssNumber type (within style definition class)
defaultOrphans = $var( "CssNumber", 2); // :root { --defaultOrphans: 2 }

// Number can be specified using the min/max/clamp function
let num: CssNumber = Num.min( 4, this.defaultOrphans); // "min( 4, var(defaultOrphans))"

// Number can be specified using the calc function
let num: CssNumber = Num.calc`2 * ${this.defaultOrphans}`; // "calc(2 * var(--defaultOrphans))"

// Number cannot be specified as a string but you can use the `raw` function to wrap a string
let num: CssNumber = Num.raw`20`; // "20"
```

[Go to top](#mimcss-reference-numeric-types)

### Percent Values
Number values are used to represent the CSS `<number>` type. Since it is a unitless number, the `string` type is not part of the definition for the `CssNumber` Mimcss type.

```tsx
/** Units of percent */
export type PercentUnits = "%";

/** Unique string literal that distinguishes the Percent type from other numeric types */
export type PercentType = "Percent";

/** Type for single style property of the `<percent>` CSS type */
export type CssPercent = NumberBase<PercentType>;

/** Type for multi-part style property of the `<percent>` CSS type */
export type CssMultiPercent = OneOrMany<CssPercent>;

/** Proxy type that represents values of the `<percent>` CSS type */
export type PercentProxy = NumberProxy<PercentType>;

/**
 * The IFractionMath interface contains methods that implement CSS mathematic functions on the
 * `<percent>` CSS types.
 */
export interface ICssPercentMath extends INumberMath<PercentType>
{
    /**
     * Converts the given number to a percent string. Numbers between -1 and 1 are multiplyed by 100.
     */
    percent( n: number): PercentProxy;
}

/**
 * The Percent object contains static methods that implement CSS mathematic functions on the
 * `<percentage>` CSS type by appending a "%" unit suffix.
 */
export let Percent: ICssPercentMath;
```

##### Percent Value Examples

```tsx
// Both integer and floating point numbers are converted to strings by uppending `"%"`. Numbers between -1 and 1 (not inclusive) are first multiplied by 100.
let percent: CssPercent = 100; // "100%"
let percent: CssPercent = 0.75; // "75%"

// Percent can be specified as a string
let percent: CssPercent = "30%"; // "30%"

// A custom CSS variable can be declared to have the CssPercent type (within style definition class)
defaultZoom = $var( "CssPercent", 0.85); // :root { --defaultZoom: 85% }

// Percent can be specified using a custom CSS variable
let percent: CssPercent = this.defaultZoom; // "var(--defaultZoom)"

// Percent can be specified using the min/max/clamp function
let percent: CssPercent = Num.min( 80, this.defaultZoom); // "min( 80%, var(defaultZoom))"

// Percent can be specified using the calc function
let percent: CssPercent = Num.calc`1.1 * ${this.defaultZoom}`; // "calc(1.1 * var(--defaultZoom))"
```

[Go to top](#mimcss-reference-numeric-types)

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
export type CssMultiLength = OneOrMany<CssLength>;

/** Type for 1-to-four-part style property of the `<length>` CSS type */
export type CssLengthBox = OneOrBox<CssLength>;

/** Proxy type that represents values of the `<length>` CSS type */
export type LengthProxy = NumberProxy<LengthType>;

/**
 * The ICssLengthMath interface contains methods that implement CSS mathematic functions on the
 * `<length>` CSS types.
 */
export interface ICssLengthMath extends INumberMath<LengthType>
{
    /** Creates property value using the CSS minmax() function. */
    minmax( min: Extended<CssLength>, max: Extended<CssLength>): NumberProxy<LengthType>;

    /** Creates length value in quaters of an inch */
    Q( n: number): LengthProxy;

    /** Creates length value in ch units */
    ch( n: number): LengthProxy;

    /** Creates length value in cantimeters */
    cm( n: number): LengthProxy;

    /** Creates length value in calculated font-sizes of the element */
    em( n: number): LengthProxy;

    /** Creates length value in heights of lowercase letter 'x' in the font */
    ex( n: number): LengthProxy;

    /** Creates length value in ic units */
    ic( n: number): LengthProxy;

    /** Creates length value in inches */
    in( n: number): LengthProxy;

    /** Creates length value in line-heights of the element */
    lh( n: number): LengthProxy;

    /** Creates length value in millimeters */
    mm( n: number): LengthProxy;

    /** Creates length value in picas */
    pc( n: number): LengthProxy;

    /** Creates length value in points */
    pt( n: number): LengthProxy;

    /** Creates length value in pixels */
    px( n: number): LengthProxy;

    /** Creates length value in 1% of the size of the initial containing block, in the direction
     * of the root element’s block axis */
    vb( n: number): LengthProxy;

    /** Creates length value in 1% of the height of the viewport's initial containing block */
    vh( n: number): LengthProxy;

    /** Creates length value in 1% of the size of the initial containing block, in the direction
     * of the root element’s inline axis */
    vi( n: number): LengthProxy;

    /** Creates length value in 1% of the width of the viewport's initial containing block */
    vw( n: number): LengthProxy;

    /** Creates length value in fontsizes of the root element (<html>) */
    rem( n: number): LengthProxy;

    /** Creates length value in line-heights of the root element (<html>) */
    rlh( n: number): LengthProxy;

    /** Creates length value in the units which are a smaller value between vw and vh */
    vmax( n: number): LengthProxy;

    /** Creates length value in the units which are a larger value between vw and vh */
    vmin( n: number): LengthProxy;

    /** Creates length value for flex */
    fr( n: number): LengthProxy;

    /**
     * Converts the given number into percents. Values between -1.0 and 1.0 non-inclusive are
     * multiplied by 100.
     */
    percent( n: number): LengthProxy;
}

/**
 * The Len object contains static methods that implement CSS mathematic functions on the `<length>`
 * CSS type by appending a length unit suffix.
 * Integer numbers use "px"; floating point numbers use "em".
 */
export let Len: ICssLengthMath;
```

##### Length Value Examples

```tsx
// Integer numbers are converted to strings by appending the 'px' units
let len: CssLength = 100; // "100px"

// Floating point numbers are converted to strings by appending the 'em' units
let len: CssLength = 0.5; // "0.5em"

// Length can be specified as a string
let len: CssLength = "3rem"; // "3rem"

// Length can be specified using one of the "unit" methods
let len: CssLength = Len.in(2); // "2in"
let len: CssLength = Len.vmax(2); // "2vmax"
let len: CssLength = Len.percent(80); // "80%"
let len: CssLength = Len.percent(0.8); // "80%"

// A custom CSS variable can be declared to have the CssLength type (within style definition class)
defaultLength = $var( "CssLength", 400); // :root { --defaultLength: 400px }

// Length can be specified using a custom CSS variable
let len: CssLength = this.defaultLength; // "var(--defaultLength)"

// Length can be specified using the min/max/clamp function
let len: CssLength = Len.min( 200, 15.5, this.defaultLength, "60%"); // "min( 200px, 15em, var(defaultLength), 60%)"

// Length can be specified using the calc function
let len: CssLength = Len.calc`(100% - ${this.defaultLength}) / 2`; // "calc((100% - var(--defaultLength)) / 2)"
```

[Go to top](#mimcss-reference-numeric-types)

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
export type CssMultiTime = OneOrMany<CssTime>;

/** Type for 1-to-four-part style property of the `<time>` CSS type */
export type CssTimeBox = OneOrBox<CssTime>;

/** Proxy type that represents values of the `<time>` CSS type*/
export type TimeProxy = NumberProxy<TimeType>;

/**
 * The ICssTimeMath interface contains methods that implement CSS mathematic functions on the
 * `<time>` CSS types.
 */
export interface ICssTimeMath extends INumberMath<TimeType>
{
    /** Creates time value in milliseconds */
    ms( n: number): TimeProxy;

    /** Creates time value in seconds */
    s( n: number): TimeProxy;
}

/**
 * The Time object contains static methods that implement CSS mathematic functions on the `<time>`
 * CSS type by appending a time unit suffix.
 * Integer numbers use "ms"; floating point numbers use "s".
 */
export let Time: ICssTimeMath;
```

##### Time Value Examples

```tsx
// Integer numbers are converted to strings by appending the 'ms' units
let time: CssTime = 700; // "700s"

// Floating point numbers are converted to strings by appending the 's' units
let time: CssTime = 2.5; // "2.5s"

// Time can be specified as a string
let time: CssTime = "1300ms"; // "1300ms"

// Time can be specified using one of the "unit" methods
let time: CssTime = Time.s(2); // "2s"
let time: CssTime = Time.ms(200); // "200ms"

// A custom CSS variable can be declared to have the CssTime type (within style definition class)
defaultTime = $var( "CssTime", 300); // :root { --defaultTime: 300ms }

// Time can be specified using a custom CSS variable
let time: CssTime = this.defaultTime; // "var(--defaultTime)"

// Time can be specified using the min/max/clamp function
let time: CssTime = Time.min( 700, this.defaultTime); // "min( 700ms, var(defaultTime))"

// Time can be specified using the calc function
let time: CssTime = Time.calc`1300ms - ${700} + ${this.defaultTime}`; // "calc(1300ms - 700ms + var(--defaultTime))"
```

[Go to top](#mimcss-reference-numeric-types)

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
export type CssMultiAngle = OneOrMany<CssAngle>;

/** Proxy type that represents values of the `<angle>` CSS type */
export type AngleProxy = NumberProxy<AngleType>;

/**
 * The ICssAngleMath interface contains methods that implement CSS mathematic functions on the
 * `<angle>` CSS types.
 */
export interface ICssAngleMath extends INumberMath<AngleType>
{
    /** Creates angle value in degrees */
    deg( n: number): AngleProxy;

    /** Creates angle value in radians */
    rad( n: number): AngleProxy;

    /** Creates angle value in gradians */
    grad( n: number): AngleProxy;

    /** Creates angle value in turns */
    turn( n: number): AngleProxy;

    /**
     * Converts the given number into percents. Values between -1.0 and 1.0 non-inclusive are
     * multiplied by 100.
     */
    percent( n: number): AngleProxy;
}

/**
 * The Angle object contains static methods that implement CSS mathematic functions on the `<angle>`
 * CSS type by appending an angle unit suffix.
 * Integer numbers use "deg"; floating point numbers use "turn".
 */
export let Angle: ICssAngleMath;
```

##### Angle Value Examples

```tsx
// Integer numbers are converted to strings by appending the 'deg' units
let angle: CssAngle = 45; // "45deg"

// Floating point numbers are converted to strings by appending the 'turn' units
let angle: CssAngle = 0.5; // "0.5turn"

// Angle can be specified as a string
let angle: CssAngle = "1.3rad"; // "1.3rad"

// Angle can be specified using one of the "unit" methods
let angle: CssAngle = Angle.deg(30); // "30deg"
let angle: CssAngle = Angle.rad(1.5); // "1.5rad"

// A custom CSS variable can be declared to have the CssAngle type (within style definition class)
defaultAngle = $var( "CssAngle", 45); // :root { --defaultAngle: 45deg }

// Angle can be specified using a custom CSS variable
let angle: CssAngle = this.defaultAngle; // "var(--defaultAngle)"

// Angle can be specified using the min/max/clamp function
let angle: CssAngle = Angle.min( 45, this.defaultAngle); // "min( 45deg, var(defaultAngle))"

// Angle can be specified using the calc function
let angle: CssAngle = Angle.calc`0.4 - ${30} + ${this.defaultAngle}`; // "calc(0.4turn - 30deg + var(--defaultAngle))"
```

[Go to top](#mimcss-reference-numeric-types)

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

// A custom CSS variable can be declared to have the CssPoint type (within style definition class)
startPoint = $var( "CssPoint", [1, 1]); // :root { --startPoint: 1px 1px }

// Point can be specified using a custom CSS variable
let point: CssPoint = this.startPoint; // "var(--startPoint)"
```

[Go to top](#mimcss-reference-numeric-types)

### CssPosition Type
Position values are used to represent the CSS `<position>` type. The `CssPosition` type is defined either by a keyword or a [Length](#length-values) value or by an array with up to 4 keywords or [Length](#length-values) values.

```tsx
/** Type describing the full up to 4 values `<position>` CSS type */
export type CssPosition = SimpleCssPosition | 
    [HorizontalPositionKeyword, Extended<CssLength>, VerticalPositionKeyword] |
    [HorizontalPositionKeyword, VerticalPositionKeyword, Extended<CssLength>] |
    [HorizontalPositionKeyword, Extended<CssLength>, VerticalPositionKeyword, Extended<CssLength>];

/** Type describing multiple `<position>` CSS types */
export type MultiCssPosition = Extended<CssPosition>[];

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
// Single keyword value
let pos: CssPosition = "center"; // "center"
let pos: CssPosition = "top"; // "top"

// Single numeric value
let pos: CssPosition = 25; // "25px"
let pos: CssPosition = 0.7; // "0.7em"

// Multiple values
let pos: CssPosition = ["left", "top"]; // "left top"
let pos: CssPosition = ["left", 25, "top"]; // "left 25px top"
let pos: CssPosition = ["right", "bottom", 1.5]; // "left top 1.5em"
let pos: CssPosition = ["center", 25, "top", "10%"]; // "center 25px top 10%"

// A custom CSS variable can be declared to have the CssPosition type (within style definition class)
startPos = $var( "CssPosition", ["center", 25, "top", "10%"]); // :root { --startPos: center 25px top 10% }

// Point can be specified using a custom CSS variable
let point: CssPosition = this.startPos; // "var(--startPos)"
```

[Go to top](#mimcss-reference-numeric-types)

### CssRadius Type
Radius values are used to specify a corner radius (e.g. for a border properties). The `CssRadius` type is defined as either a single [Length](#length-values) value or as a tuple of two [Length](#length-values) values.

```tsx
export type CssRadius = OneOrPair<CssLength>;
```

##### CssRadius Examples

```tsx
// Single value
let radius: CssRadius = 4; // "4px"
let radius: CssRadius = 0.3; // "0.3em"

// Two values
let radius: CssRadius = [2, 4]; // "2px 4px"
let radius: CssRadius = [0.3, 0.5]; // "0.3em 0.5em"

// A custom CSS variable can be declared to have the CssRadius type (within style definition class)
defaultRadius = $var( "CssRadius", [2, 4]); // :root { --defaultRadius: 2, 4 }

// Radius can be specified using a custom CSS variable
let radius: CssRadius = this.defaultRadius; // "var(--defaultRadius)"
```

[Go to top](#mimcss-reference-numeric-types)

