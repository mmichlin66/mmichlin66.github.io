---
layout: mimcss-reference
unit: 8
title: "Mimcss Reference: Style Properties"
---

# Mimcss Reference: Style Properties

This page describes types of CSS style properties used in Mimcss in alphabetical order. Note that in addition to the type specified for the property, all properties accept the following types:

- `undefined` - the type that means that the style property should not be considered a part of the style rule.
- `export type Global_StyleType = "inherit" | "initial" | "unset" | "revert"` - global CSS style property values.
- `export interface IStringProxy extends IGenericProxy<"string"> {}` - a function that returns a `string`. This can be either the Mimcss `raw()` function or any custom function that returns a string. Note that the custom function will be called without any parameters.
- `export interface ICustomVar<T = any>` - the interface that is implemented by the custom CSS property rules. This allows using custom CSS properties as values of style properties provided the type of the custom CSS property is compatible with the type of the style property.
- `export type ImportantProp<T> = { "!": T | ICustomVar<T> | IStringProxy }` - allows specifying any of the above types while indicating that the property must be marked `"!important"`.


<style>
.capital { font-size: 24px; font-weight: bold; }
table { display: block; }
th, td { padding: 2px 6px }
</style>

<br/>
<span id="a" class="capital">A</span>  [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

#### align-content

```tsx
alignContent: AlignContent_StyleType;

export type AlignContent_StyleType = "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" |
    "baseline" | "first baseline" | "last baseline" | "safe center" | "unsafe center" |
    "space-between" | "space-around" | "space-evenly";
```

#### align-items

```tsx
alignItems: AlignItems_StyleType;

export type AlignItems_StyleType = "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" |
    "baseline" | "first baseline" | "last baseline" | "safe center" | "unsafe center";
```

#### align-self

```tsx
alignSelf: AlignSelf_StyleType;

export type AlignSelf_StyleType = "auto" | "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" |
    "self-start" | "self-end" | "baseline" | "first baseline" | "last baseline" |
    "safe center" | "unsafe center";
```

#### alignment-baseline

```tsx
alignmentBaseline: AlignmentBaseline_StyleType;

export type AlignmentBaseline_StyleType = "auto" | "baseline" | "before-edge" | "text-before-edge" |
    "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" |
    "hanging" | "mathematical" | "top" | "center" | "bottom";
```

#### animation

```tsx
animation: Animation_StyleType;

/** Type for animation style property */
export type Animation_StyleType = string | OneOrMany<Animation_Single>;

/** Type for single animation */
export type Animation_Single =
    {
        name?: ExtendedProp<AnimationName_Single>;
        duration?: ExtendedProp<CssTime>;
        func?: ExtendedProp<TimingFunction_Single>;
        delay?: ExtendedProp<CssTime>;
        count?: ExtendedProp<AnimationIterationCount_Single>;
        direction?: ExtendedProp<AnimationDirection_Single>;
        mode?: ExtendedProp<AnimationFillMode_Single>;
        state?: ExtendedProp<AnimationPlayState_Single>;
    };
```

The `animation` property can be specified as a string, as a single `Animation_Single` object or as an array of `Animation_Single` objects. The fields of the `Animation_Single` object correspond to the extended types of the following longhand properties:

| Field | CSS longhand property |
| :--- | :--- |
| name | [animation-name](#animation-name) |
| duration | [animation-duration](#animation-duration) |
| func | [animation-timing-function](#animation-timing-function) |
| delay | [animation-delay](#animation-delay) |
| count | [animation-iteration-count](#animation-iteration-count) |
| direction | [animation-direction](#animation-direction) |
| mode | [animation-fill-mode](#animation-fill-mode) |
| state | [animation-play-state](#animation-play-state) |

#### animation-delay

```tsx
animationDelay: AnimationDelay_StyleType;

/** Type for animation-delay style property */
export type AnimationDelay_StyleType = CssMultiTime;
```

The `animation-delay` property can be specified as a single vale or an array of values of the [Time](mimcss-reference-numeric-types.html#time-values) type.

#### animation-direction

```tsx
animationDirection: AnimationDirection_StyleType;

/** Type for animation-direction style property */
export type AnimationDirection_StyleType = OneOrMany<AnimationDirection_Single>;

/** Type for single animation direction */
export type AnimationDirection_Single = "normal" | "reverse" | "alternate" | "alternate-reverse";
```

The `animation-direction` property can be specified as a single keyword or an array of keywords.

#### animation-duration

```tsx
animationDuration: AnimationDuration_StyleType;

export type AnimationDuration_StyleType = CssMultiTime;
```

The `animation-duraton` property can be specified as a single vale or an array of values of the [Time](mimcss-reference-numeric-types.html#time-values) type.

#### animation-fill-mode

```tsx
animationFillMode: AnimationFillMode_StyleType;

/** Type for animation-fill-mode style property */
export type AnimationFillMode_StyleType = OneOrMany<AnimationDirection_Single>;

/** Type for single animation fill mode */
export type AnimationFillMode_Single = "none" | "forwards" | "backwards" | "both";
```

The `animation-fill-mode` property can be specified as a single keyword or an array of keywords.

#### animation-iteration-count

```tsx
animationIterationCount: AnimationIterationCount_StyleType;

/** Type for animation-iteration-count style property */
export type AnimationIterationCount_StyleType = OneOrMany<AnimationIterationCount_Single>;

/** Type for single animation iteration count */
export type AnimationIterationCount_Single = "infinite" | CssNumber;
```

The `animation-iteration-count` property can be specified as a single item or an array of items where each item is either a keyword or a number.

#### animation-name

```tsx
animationName: AnimationName_StyleType;

/** Type for single animation name */
export type AnimationName_Single = "none" | string | IAnimationRule;

/** Type for animation-name style property */
export type AnimationName_StyleType = OneOrMany<AnimationName_Single>;
```

The `animation-name` property can be specified as a single string or animation rule object or as an array of strings and/or animation rule objects.

#### animation-play-state

```tsx
animationPlayState: AnimationPlayState_StyleType;

/** Type for animation-play-state style property */
export type AnimationPlayState_StyleType = OneOrMany<AnimationPlayState_Single>;

/** Type for single animation play state */
export type AnimationPlayState_Single = "paused" | "running";
```

The `animation-play-state` property can be specified as a single keyword or an array of keywords.

#### animation-timing-function

```tsx
animationTimingFunction: AnimationTimingFunction_StyleType;

/** Type for simple animation timing functions - those that don't have parameters */
export type TimingFunction_Simple = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end";

/** Type for step animation timing function position */
export type TimingFunction_StepPosition = "jump-start" | "jump-end" | "jump-none" | "jump-both" | "start" | "end";

/** Type for step animation timing function */
export type TimingFunction_Step = number | [Extended<number>, Extended<TimingFunction_StepPosition>?];

/** Type for Bezier animation timing function */
export type TimingFunction_Bezier = [Extended<number>, Extended<number>, Extended<number>, Extended<number>];

/** Type for single animation timing function */
export type TimingFunction_Single = TimingFunction_Simple | TimingFunction_Step | TimingFunction_Bezier;

/** Type for animation-timing-function style property */
export type AnimationTimingFunction_StyleType = OneOrMany<TimingFunction_Single>;
```

The `animation-timing-function` property can be specified as a single `TimingFunction_Single` item or an array of `TimingFunction_Single` items. Each item represents either a simple timing function using one of the `TimingFunction_Simple` keywords, or a step function using the `TimingFunction_Step` type, or a Bezier function using the `TimingFunction_Bezier` type.

A step function is represented either as a single number or as a two-element tuple where the first element is a number and the second element is one of the `TimingFunction_StepPosition` keywords.

A Bezier function is represented as a four element tuple where each element is a number.



<br/><br/>
[A](#a) <span id="b" class="capital">B</span> [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

#### backdrop-filter

```tsx
backdropFilter: Filter_StyleType;

/** Type for filter and backdrop-filter style property */
export type Filter_StyleType = OneOrMany<Filter_Single>;

/** Type for filter and backdrop-filter style single value */
export type Filter_Single = string | IUrlProxy | IFilterProxy;
```

The `backdrop-filter` property can be specified either as a string or using the Mimcss `url()` function or using one of the Mimcss [filter functions](mimcss-reference-helper-functions.html#filters) that return the `FilterProxy` type.

**Example**

```tsx
class MyStyles extends css.StyleDefinition
{
    // url for SVG filter
    cls1 = css.$class({ bacdropFilter: css.url("filters.svg#filter1") })

    // brightness of 70%
    cls2 = css.$class({ bacdropFilter: css.brightness(70) })

    // multiple backdrop filters
    cls3 = css.$class({ bacdropFilter: [css.dropShadow(16, 16, "red", 10), invert(75)] })
}
```

#### backface-visibility

```tsx
backfaceVisibility: BackfaceVisibilityMode_StyleType;

export type BackfaceVisibilityMode_StyleType = "visible" | "hidden";
```

#### background

```tsx
background: Background_StyleType;

/** Type for background style property */
export type Background_StyleType = OneOrMany<Background_Single>;

/** Type for single background value */
export type Background_Single = string | CssColor |
    {
        color?: ExtendedProp<CssColor>,
        image?: ExtendedProp<CssImage | string>,
        position?: ExtendedProp<CssPosition>,
        size?: ExtendedProp<BackgroundSize_Single>,
        repeat?: ExtendedProp<BackgroundRepeat_Single>,
        attachment?: ExtendedProp<BackgroundAttachment_Single>,
        origin?: ExtendedProp<BackgroundOrigin_Single>,
        clip?: ExtendedProp<BackgroundClip_Single>,
    };
```

The `background` property can be specified as a string, as a single `Background_Single` object or as an array of `Background_Single` objects. The fields of the `Background_Single` object correspond to the extended types of the following longhand properties:

| Field | CSS longhand property |
| :--- | :--- |
| color | [background-color](#background-color) |
| image | [background-image](#background-image) |
| position | [background-position](#background-position) |
| size | [background-size](#background-size) |
| repeat | [background-repeat](#background-repeat) |
| attachment | [background-attachment](#background-attachment) |
| origin | [background-origin](#background-origin) |
| clip | [background-clip](#background-clip) |

#### background-attachment

```tsx
backgroundAttachment: BackgroundAttachment_StyleType;

/** Type for background-attachment style property */
export type BackgroundAttachment_StyleType = OneOrMany<BackgroundAttachment_Single>;

/** Type for single background attachment */
export type BackgroundAttachment_Single = "scroll" | "fixed" | "local";
```

#### background-blend-mode

```tsx
backgroundBlendMode: BackgroundBlendMode_StyleType;

/** Type for background-blend-mode style property */
export type BackgroundBlendMode_StyleType = OneOrMany<BackgroundBlendMode_Single>;

/** Type for single background blend mode */
export type BackgroundBlendMode_Single = "normal" | "multiply" | "screen" | "overlay" | "darken" |
    "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" |
    "exclusion" | "hue" | "saturation" | "color" | "luminosity";
```

#### background-clip

```tsx
backgroundClip: BackgroundClip_StyleType;

/** Type for background-clip style property */
export type BackgroundClip_StyleType = OneOrMany<BackgroundClip_Single>;

/** Type for single background clip */
export type BackgroundClip_Single = "border-box" | "padding-box" | "content-box" | "text";
```

#### background-color

```tsx
backgroundColor: CssColor;
```

#### background-image

```tsx
backgroundImage: BackgroundImage_StyleType;

/** Type for background-image style property */
export type BackgroundImage_StyleType = "none" | OneOrMany<CssImage | string>;
```

#### background-origin

```tsx
backgroundOrigin: BackgroundOrigin_StyleType;

/** Type for background-origin style property */
export type BackgroundOrigin_StyleType = OneOrMany<BackgroundOrigin_Single>;

/** Type for single background origin */
export type BackgroundOrigin_Single = "border-box" | "padding-box" | "content-box" | "text";
```

#### background-position

```tsx
backgroundPosition: BackgroundPosition_StyleType;

/** Type for background-position style property */
export type BackgroundPosition_StyleType = MultiCssPosition;
```

#### background-repeat

```tsx
backgroundRepeat: BackgroundRepeat_StyleType;

/** Type for background-repeat style property */
export type BackgroundRepeat_StyleType = OneOrMany<BackgroundRepeat_Single>;

/** Type for single background repeat */
export type BackgroundRepeat_Single = "repeat-x" | "repeat-y" | OneOrPair<BackgroundRepeatKeyword_Single>;

/** Type for single background repeat */
export type BackgroundRepeatKeyword_Single = "repeat" | "space" | "round" | "no-repeat";

```

#### background-size

```tsx
backgroundSize: BackgroundSize_StyleType;

/** Type for background-size style property. */
export type BackgroundSize_StyleType = OneOrMany<BackgroundSize_Single>;

/** Type for background size */
export type BackgroundSize_Single = "cover" | "contain" | OneOrPair<CssLength | "auto">;
```

The `background-size` style can specify one or more comma-separated sizes, where each size can be a keyword, a length or two lengths. We model this structure the following way:
- if the value is a string or a number, that's the only value;
- if the value is an array, then it is a list of several sizes. Each element in this array is either a keyword or a length or an array of two elements.

Thus `[100,200]` will be interpreted as `"100px, 200px"` and not `"100px 200px"`; that is, it will
define two sizes each with a width instead of one size with both width and height. If you need
to specify both width and height you must use array within array - even for a single size:
`[[100,200]]` will be interpreted as `"100px 200px"`.

#### baseline-shift

```tsx
baselineShift: BaselineShift_StyleType;

/** Type for baseline-shift style property */
export type BaselineShift_StyleType = "sub" | "super" | CssLength;
```

#### block-size

```tsx
blockSize: CssLength;
```

#### border

```tsx
border: Border_StyleType;

/** Type for border style property */
export type Border_StyleType = CssLength | BorderStyle_Keyword | CssColor |
    [ExtendedProp<CssLength>?, ExtendedProp<BorderStyle_Keyword>?, ExtendedProp<CssColor>?];
```

The `border` style property can be specified as either a string, a border width value, a border style keyword, a border color or a three element tuple where the first element is the border width value, the second element is the border style keyword and the third element is the border color.

**Examples**

```tsx
class MyStyles extends css.StyleDefinition
{
    // border width of 3px
    cls1 = css.$class({ border: 3) })

    // border of dashed style
    cls2 = css.$class({ border: "dashed" })

    // border of red color
    cls3 = css.$class({ border: "red" })

    // border as a string
    cls3 = css.$class({ border: "3px dashed red" })

    // border as an array
    cls3 = css.$class({ border: [3, "dashed", "red"] })
}
```

#### border-block-end

```tsx
borderBlockEnd: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-block-end-color

```tsx
borderBlockEndColor: CssColor;
```

#### border-block-end-style

```tsx
borderBlockEndStyle: BorderStyle_Keyword;
```

See the [`border-style`](#border-style) style property for type definition.

#### border-block-end-width

```tsx
borderBlockEndWidth: BorderWidth_Single;
```

#### border-block-start

```tsx
borderBlockStart: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-block-start-color

```tsx
borderBlockeStartColor: CssColor;
```

#### border-block-start-style

```tsx
borderBlockStartStyle: BorderStyle_Keyword;
```

See the [`border-style`](#border-style) style property for type definition.

#### border-block-start-width

```tsx
borderBlockStartWidth: BorderWidth_Single;
```

See the [`border-width`](#border-width) style property for type definition.

See the [`border-width`](#border-width) style property for type definition.

#### border-bottom

```tsx
borderBottom: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-bottom-color

```tsx
borderBottomColor: CssColor;
```

#### border-bottom-left-radius

```tsx
borderBottomLeftRadius: CssRadius;
```

#### border-bottom-right-radius

```tsx
borderBottomRightRadius: CssRadius;
```

#### border-bottom-style

```tsx
borderBottomStyle: BorderStyle_Keyword;
```

See the [`border-style`](#border-style) style property for type definition.

#### border-bottom-width

```tsx
borderBottomWidth: BorderWidth_Single;
```

See the [`border-width`](#border-width) style property for type definition.

#### border-collapse

```tsx
borderCollapse: BorderColapse_StyleType;

/** Type for border-collapse style property */
export type BorderColapse_StyleType = "collapse" | "separate";
```

#### border-color

```tsx
borderColor: BorderColor_StyleType;

/** Type for border-color style property */
export type BorderColor_StyleType = OneOrBox<CssColor>;
```

#### border-image

```tsx
borderImage: BorderImage_StyleType;

/** Type for border-image style property. */
export type BorderImage_StyleType = string | CssImage | BorderImage_Object;

/** Type for border-image style property expressed as an object. */
export type BorderImage_Object =
    {
        source: ExtendedProp<BorderImageSource_StyleType>,
        slice?: ExtendedProp<BorderImageSlice_StyleType>,
        width?: ExtendedProp<BorderImageWidth_StyleType>,
        outset?: ExtendedProp<BorderImageOutset_StyleType>,
        repeat?: ExtendedProp<BorderImageRepeat_StyleType>,
    };
```

#### border-image-outset

```tsx
borderImageOutset: BorderImageOutset_StyleType;

/**
 * Type for border-image-outset style property. It is CssNumber and not CssLength because
 * border-image-outset can be specified as a unitless number.
 */
export type BorderImageOutset_StyleType = OneOrBox<CssNumber | string>;
```

#### border-image-repeat

```tsx
borderImageRepeat: BorderImageRepeat_StyleType;

/** Type for border-image-repeat style property */
export type BorderImageRepeat_StyleType = OneOrPair<BorderImageRepeat_Keyword>;

/** Type for border-image-repeat keywords */
export type BorderImageRepeat_Keyword = "stretch" | "repeat" | "round" | "space";
```

#### border-image-slice

```tsx
borderImageSlice: BorderImageSlice_StyleType;

/** Type for border-image-slice style property */
export type BorderImageSlice_StyleType = OneOrBox<CssNumber | string> |
    [Extended<CssNumber | string>, true] |
    [Extended<CssNumber | string>, Extended<CssNumber | string>, true] |
    [Extended<CssNumber | string>, Extended<CssNumber | string>, Extended<CssNumber | string>, true] |
    [Extended<CssNumber | string>, Extended<CssNumber | string>, Extended<CssNumber | string>, Extended<CssNumber | string>, true];
```

#### border-image-source

```tsx
borderImageSource: BorderImageSource_StyleType;

/** Type for border-image-source style property */
export type BorderImageSource_StyleType = OneOrBox<CssImage | string>;
```

#### border-image-width

```tsx
borderImageWidth: BorderImageWidth_StyleType;

/**
 * Type for border-image-width style property. It is CssNumber and not CssLength because
 * border-image-width can be specified as a unitless number.
 */
export type BorderImageWidth_StyleType = OneOrBox<CssNumber | "auto" | string>;
```

#### border-inline-end

```tsx
borderInlineEnd: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-inline-end-color

```tsx
borderInlineEndColor: CssColor;
```

#### border-inline-end-style

```tsx
borderInlineEndStyle: BorderStyle_Keyword;
```

See the [`border-style`](#border-style) style property for type definition.

#### border-inline-end-width

```tsx
borderInlineEndWidth: BorderWidth_Single;
```

See the [`border-width`](#border-width) style property for type definition.

#### border-inline-start

```tsx
borderInlineStart: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-inline-start-color

```tsx
borderInlineStartColor: CssColor;
```

#### border-inline-start-style

```tsx
borderInlineStartStyle: BorderStyle_Keyword;
```

See the [`border-style`](#border-style) style property for type definition.

#### border-inline-start-width

```tsx
borderInlineStartWidth: BorderWidth_Single;
```

See the [`border-width`](#border-width) style property for type definition.

#### border-left

```tsx
borderLeft: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-left-color

```tsx
borderLeftColor: CssColor;
```

#### border-left-style

```tsx
borderLeftStyle: BorderStyle_Keyword;
```

See the [`border-style`](#border-style) style property for type definition.

#### border-left-width

```tsx
borderLeftWidth: BorderWidth_Single;
```

See the [`border-width`](#border-width) style property for type definition.

#### border-radius

```tsx
borderRadius: BorderRadius_StyleType;

/** Type for border-radius style property */
export type BorderRadius_StyleType = OneOrPair<CssLengthBox>;
```

#### border-right

```tsx
borderRight: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-right-color

```tsx
borderRightColor: CssColor;
```

#### border-right-style

```tsx
borderRightStyle: BorderStyle_Keyword;
```

See the [`border-style`](#border-style) style property for type definition.

#### border-right-width

```tsx
borderRightWidth: BorderWidth_Single;
```

See the [`border-width`](#border-width) style property for type definition.

#### border-spacing

```tsx
borderSpacing: BorderSpacing_StyleType;

/** Type for border-spacing style property */
export type BorderSpacing_StyleType = OneOrPair<CssLength>;
```

#### border-style

```tsx
borderStyle: BorderStyle_StyleType;

/** Type for border-style style property */
export type BorderStyle_StyleType = OneOrBox<BorderStyle_Keyword>;

/** Type for single border side style property */
export type BorderStyle_Keyword = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" |
    "groove" | "ridge" | "inset" | "outset";
```

#### border-top

```tsx
borderTop: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-top-color

```tsx
borderTopColor: CssColor;
```

#### border-top-left-radius

```tsx
borderTopLeftRadius: CssRadius;
```

#### border-top-right-radius

```tsx
borderTopRightRadius: CssRadius;
```

#### border-top-style

```tsx
borderTopStyle: BorderStyle_Keyword;
```

See the [`border-style`](#border-style) style property for type definition.

#### border-top-width

```tsx
borderTopWidth: BorderWidth_Single;
```

See the [`border-width`](#border-width) style property for type definition.

#### border-width

```tsx
borderWidth: BorderWidth_StyleType;

/** Type for border-width style property */
export type BorderWidth_StyleType = OneOrBox<BorderWidth_Single>;

/** Type for border side width style property */
export type BorderWidth_Single = "thin" | "medium" | "thick" | CssLength;
```

#### bottom

```tsx
bottom: CssLength;
```

#### box-shadow

```tsx
boxShadow: BoxShadow_StyleType;

/** Type for box shadow style property */
export type BoxShadow_StyleType = OneOrMany<BoxShadow_Single>;

/** Type for single box shadow. */
export type BoxShadow_Single = "none" | string |
    {
        x: Extended<CssLength>,
        y: Extended<CssLength>,
        blur?: Extended<CssLength>,
        spread?: Extended<CssLength>,
        color?: Extended<CssColor>,
        inset?: Extended<boolean>
    };
```

#### box-sizing

```tsx
boxSizing: BoxSizing_StyleType;

/** Type for box-sizing style property */
export type BoxSizing_StyleType = "content-box" | "border-box";
```

#### break-after

```tsx
breakAfter: BreakAfter_StyleType;

/** Type for break-after style property */
export type BreakAfter_StyleType = "auto" | "avoid" | "always" | "all" | "avoid-page" | "page" |
    "left" | "right" | "recto" | "verso" | "avoid-column" | "column" |
    "avoid-region" | "region";
```

#### break-before

```tsx
breakBefore: BreakBefore_StyleType;

/** Type for break-before style property */
export type BreakBefore_StyleType = "auto" | "avoid" | "always" | "all" | "avoid-page" | "page" |
    "left" | "right" | "recto" | "verso" | "avoid-column" | "column" |
    "avoid-region" | "region";
```

#### break-inside

```tsx
breakInside: BreakInside_StyleType;

/** Type for break-inside style property */
export type BreakInside_StyleType = "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";
```

<br/><br/>
[A](#a) [B](#b) <span id="c" class="capital">C</span> [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)


<br/><br/>
[A](#a) [B](#b) [C](#c) [D](#d) [E](#e) <span id="f" class="capital">F</span> [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

#### filter

```tsx
filter: Filter_StyleType;

/** Type for filter and backdrop-filter style property */
export type Filter_StyleType = OneOrMany<Filter_Single>;

/** Type for filter and backdrop-filter style single value */
export type Filter_Single = string | IUrlProxy | IFilterProxy;
```

The `filter` property can be specified either as a string or using the Mimcss `url()` function or using one of the Mimcss [filter functions](mimcss-reference-helper-functions.html#filters) that return the `FilterProxy` type.

**Examples**

```tsx
class MyStyles extends css.StyleDefinition
{
    // url for SVG filter
    cls1 = css.$class({ filter: css.url("filters.svg#filter1") })

    // brightness of 70%
    cls2 = css.$class({ filter: css.brightness(70) })

    // multiple backdrop filters
    cls3 = css.$class({ filter: [css.dropShadow(16, 16, "red", 10), invert(75)] })
}
```

