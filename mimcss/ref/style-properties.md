---
layout: mimcss-reference
unit: 8
title: "Mimcss Reference: Style Properties"
description: "Describes types of every supported CSS style property."
---

# Mimcss Reference: Style Properties

This page describes types of CSS style properties used in Mimcss in alphabetical order.

<style>
.capital { font-size: 24px; font-weight: bold; }
table { display: block; }
th, td { padding: 2px 6px }
h4 { color: teal }
#searchContainer {
    border: 1px solid blue;
    background-color: beige;
    padding: 16px;
    margin: 0 1em;
}
#propertySearchDropdown {
    padding: 4px;
    color: blue;
}
.linkFromProp {
    margin-left: 10px;
    font-weight: normal;
}
</style>

### Search Style Properties
<script>
    var propertySearchPlaceholder = "propertySearchPlaceholder";
</script>
<div id="searchContainer">
    <label for="propertySearchDropdown">Lookup Style Properties:</label>
    <select id="propertySearchDropdown" onchange="gotoSelectedStyleProperty();">
        <option value="propertySearchPlaceholder">--Please choose a property--</option>
    </select>
</div>

Note that in addition to the type specified for the property, all properties accept the following types:

- `undefined` - the type that means that the style property should not be considered a part of the style rule.

- `export type Global_StyleType = "inherit" | "initial" | "unset" | "revert"` - global CSS style property values.

- `export interface IStringProxy extends IGenericProxy<"string"> {}` - a function that returns a `string`. This can be either the Mimcss `raw()` function or any custom function that returns a string. Note that the custom function will be called without any parameters.

- `export interface ICustomVar<T = any>` - the interface that is implemented by the custom CSS property rules. This allows using custom CSS properties as values of style properties provided the type of the custom CSS property is compatible with the type of the style property.

- `export type ImportantProp<T> = { "!": T | ICustomVar<T> | IStringProxy }` - allows specifying any of the above types while indicating that the property must be marked `"!important"`.



#### align-content

**Type:** [AlignContent_StyleType](/mimcss/reference/modules/styletypes.html#aligncontent_styletype)

**Examples:**
```tsx
alignContent: "start";
alignContent: "center";
alignContent: "space-between";
alignContent: "space-around";
```

#### align-items

**Type:** [AlignItems_StyleType](/mimcss/reference/modules/styletypes.html#alignitems_styletype)

**Examples:**
```tsx
alignItems: "stretch";
alignItems: "center";
alignItems: "start";
alignItems: "end";
```

#### align-self

**Type:** [AlignSelf_StyleType](/mimcss/reference/modules/styletypes.html#alignself_styletype)

**Examples:**
```tsx
alignSelf: "stretch";
alignSelf: "center";
alignSelf: "start";
alignSelf: "end";
```

#### alignment-baseline

**Type:** [AlignmentBaseline_StyleType](/mimcss/reference/modules/styletypes.html#alignmentbaseline_styletype)

**Examples:**
```tsx
alignmentBaseline: "baseline";
alignmentBaseline: "text-bottom";
alignmentBaseline: "middle";
alignmentBaseline: "text-after-edge";
```

#### animation

**Type:** [Animation_StyleType](/mimcss/reference/modules/styletypes.html#animation_styletype)

The `animation` property can be specified as a single object or as an array of objects. The fields of this object correspond to the types of the following longhand properties:

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

**Examples:**

```typescript
class MyStyes extends css.StyleDefinition
{
    slidein = this.$keyframes([
        ["from", {marginLeft: css.percent(-20)}],
        ["to", {marginLeft: "100%"}]
    ])

    obj = this.$class({
        animation: {
            name: this.slidein,
            duration: 3000,
            func: "ease-in",
            delay: 1000,
            count: "infinite",
            direction: "reverse",
            mode: "both",
            state: "running"
        }
    }
}
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [CssTime](/mimcss/reference.html#modules/numerictypes.html#csstime)

#### animation-delay

```tsx
animationDelay: AnimationDelay_StyleType;

/** Type for animation-delay style property */
export type AnimationDelay_StyleType = OneOrMany<CssTime>;
```

The `animation-delay` property can be specified as a single vale or an array of values of the [CssTime](/mimcss/reference.html#modules/numerictypes.html#csstime) type.

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [CssTime](/mimcss/reference.html#modules/numerictypes.html#csstime)

#### animation-direction

```tsx
animationDirection: AnimationDirection_StyleType;

/** Type for animation-direction style property */
export type AnimationDirection_StyleType = OneOrMany<AnimationDirection_Single>;

/** Type for single animation direction */
export type AnimationDirection_Single = "normal" | "reverse" | "alternate" | "alternate-reverse";
```

The `animation-direction` property can be specified as a single keyword or an array of keywords.

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany)

#### animation-duration

```tsx
animationDuration: AnimationDuration_StyleType;

export type AnimationDuration_StyleType = OneOrMany<CssTime>;
```

The `animation-duraton` property can be specified as a single vale or an array of values of the [CssTime](/mimcss/reference.html#modules/numerictypes.html#csstime) type.

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [CssTime](/mimcss/reference.html#modules/numerictypes.html#csstime)

#### animation-fill-mode

```tsx
animationFillMode: AnimationFillMode_StyleType;

/** Type for animation-fill-mode style property */
export type AnimationFillMode_StyleType = OneOrMany<AnimationDirection_Single>;

/** Type for single animation fill mode */
export type AnimationFillMode_Single = "none" | "forwards" | "backwards" | "both";
```

The `animation-fill-mode` property can be specified as a single keyword or an array of keywords.

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany)

#### animation-iteration-count

```tsx
animationIterationCount: AnimationIterationCount_StyleType;

/** Type for animation-iteration-count style property */
export type AnimationIterationCount_StyleType = OneOrMany<AnimationIterationCount_Single>;

/** Type for single animation iteration count */
export type AnimationIterationCount_Single = "infinite" | CssNumber;
```

The `animation-iteration-count` property can be specified as a single item or an array of items where each item is either a keyword or a number.

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### animation-name

```tsx
animationName: AnimationName_StyleType;

/** Type for single animation name */
export type AnimationName_Single = "none" | string | IAnimationRule;

/** Type for animation-name style property */
export type AnimationName_StyleType = OneOrMany<AnimationName_Single>;
```

The `animation-name` property can be specified as a single string or animation rule object or as an array of strings and/or animation rule objects.

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany)

#### animation-play-state

```tsx
animationPlayState: AnimationPlayState_StyleType;

/** Type for animation-play-state style property */
export type AnimationPlayState_StyleType = OneOrMany<AnimationPlayState_Single>;

/** Type for single animation play state */
export type AnimationPlayState_Single = "paused" | "running";
```

The `animation-play-state` property can be specified as a single keyword or an array of keywords.

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany)

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

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### appearance

```tsx
appearance: Appearance_StyleType;

/** Type for appearance style property */
export type Appearance_StyleType = "none" | "auto" | "textfield" | "menulist-button" |
    "searchfield" | "textarea" | "push-button" | "slider-horizontal" | "checkbox" | "radio" |
    "square-button" | "menulist" | "listbox" | "meter" | "progress-bar" | "button";
```

#### aspect-ratio

```tsx
aspectRatio: AspectRatio_StyleType;

/** Type for aspect-ratio style property */
export type AspectRatio_StyleType = CssAspectRatio | "auto";
```

**See Also:** [CssAspectRatio](/mimcss/reference.html#modules/coretypes.html#cssaspectratio)

#### backdrop-filter

```tsx
backdropFilter: Filter_StyleType;

/** Type for filter and backdrop-filter style property */
export type Filter_StyleType = OneOrMany<Filter_Single>;

/** Type for filter and backdrop-filter style single value */
export type Filter_Single = string | IUrlProxy | IFilterProxy;
```

The `backdrop-filter` property can be specified either as a string or using the Mimcss `url()` function or using one of the Mimcss filter functions that return the `IFilterProxy` type.

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [IUrlProxy](/mimcss/reference.html#interfaces/coretypes_.iurlproxy.html), [IFilterProxy](/mimcss/reference.html#interfaces/coretypes_.ifilterproxy.html)

**Example**

```tsx
class MyStyles extends css.StyleDefinition
{
    // url for SVG filter
    cls1 = this.$class({ bacdropFilter: css.url("filters.svg#filter1") })

    // brightness of 70%
    cls2 = this.$class({ bacdropFilter: css.brightness(70) })

    // multiple backdrop filters
    cls3 = this.$class({ bacdropFilter: [css.dropShadow(16, 16, "red", 10), invert(75)] })
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
        color?: Extended<CssColor>,
        image?: Extended<CssImage | string>,
        position?: Extended<CssPosition>,
        size?: Extended<BackgroundSize_Single>,
        repeat?: Extended<BackgroundRepeat_Single>,
        attachment?: Extended<BackgroundAttachment_Single>,
        origin?: Extended<BackgroundOrigin_Single>,
        clip?: Extended<BackgroundClip_Single>,
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

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor), [CssImage](/mimcss/reference.html#modules/coretypes.html#cssimage), [Extended](/mimcss/reference.html#modules/coretypes.html#extended), [CssPosition](/mimcss/reference.html#modules/coretypes.html#cssposition)

#### background-attachment

```tsx
backgroundAttachment: BackgroundAttachment_StyleType;

/** Type for background-attachment style property */
export type BackgroundAttachment_StyleType = OneOrMany<BackgroundAttachment_Single>;

/** Type for single background attachment */
export type BackgroundAttachment_Single = "scroll" | "fixed" | "local";
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany)

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

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany)

#### background-clip

```tsx
backgroundClip: BackgroundClip_StyleType;

/** Type for background-clip style property */
export type BackgroundClip_StyleType = OneOrMany<BackgroundClip_Single>;

/** Type for single background clip */
export type BackgroundClip_Single = "border-box" | "padding-box" | "content-box" | "text";
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany)

#### background-color

```tsx
backgroundColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### background-image

```tsx
backgroundImage: BackgroundImage_StyleType;

/** Type for background-image style property */
export type BackgroundImage_StyleType = "none" | OneOrMany<CssImage | string>;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [CssImage](/mimcss/reference.html#modules/coretypes.html#cssimage)

#### background-origin

```tsx
backgroundOrigin: BackgroundOrigin_StyleType;

/** Type for background-origin style property */
export type BackgroundOrigin_StyleType = OneOrMany<BackgroundOrigin_Single>;

/** Type for single background origin */
export type BackgroundOrigin_Single = "border-box" | "padding-box" | "content-box" | "text";
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany)

#### background-position

```tsx
backgroundPosition: BackgroundPosition_StyleType;

/** Type for background-position style property */
export type BackgroundPosition_StyleType = OneOrMany<CssPosition>;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [CssPosition](/mimcss/reference.html#modules/coretypes.html#cssposition)

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

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair)

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

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### baseline-shift

```tsx
baselineShift: BaselineShift_StyleType;

/** Type for baseline-shift style property */
export type BaselineShift_StyleType = "sub" | "super" | CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### block-size

```tsx
blockSize: CssSize;
```

**See Also:** [CssSize](/mimcss/reference.html#modules/numerictypes.html#csssize)

#### border

```tsx
border: Border_StyleType;

/** Type for border style property */
export type Border_StyleType = CssLength | BorderStyle_Keyword | CssColor |
    [Extended<CssLength>?, Extended<BorderStyle_Keyword>?, Extended<CssColor>?];
```

The `border` style property can be specified as either a string, a border width value, a border style keyword, a border color or a three element tuple where the first element is the border width value, the second element is the border style keyword and the third element is the border color.

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

**Examples**

```tsx
class MyStyles extends css.StyleDefinition
{
    // border width of 3px
    cls1 = this.$class({ border: 3) })

    // border of dashed style
    cls2 = this.$class({ border: "dashed" })

    // border of red color
    cls3 = this.$class({ border: "red" })

    // border as a string
    cls4 = this.$class({ border: "3px dashed red" })

    // border as an array
    cls5 = this.$class({ border: [3, "dashed", "red"] })
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

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

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
borderBlockStartColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

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

#### border-bottom

```tsx
borderBottom: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-bottom-color

```tsx
borderBottomColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### border-bottom-left-radius

```tsx
borderBottomLeftRadius: CssRadius;
```

**See Also:** [CssRadius](/mimcss/reference.html#modules/coretypes.html#cssradius)

#### border-bottom-right-radius

```tsx
borderBottomRightRadius: CssRadius;
```

**See Also:** [CssRadius](/mimcss/reference.html#modules/coretypes.html#cssradius)

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

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### border-image

```tsx
borderImage: BorderImage_StyleType;

/** Type for border-image style property. */
export type BorderImage_StyleType = string | CssImage | BorderImage_Object;

/** Type for border-image style property expressed as an object. */
export type BorderImage_Object =
    {
        source: Extended<BorderImageSource_StyleType>,
        slice?: Extended<BorderImageSlice_StyleType>,
        width?: Extended<BorderImageWidth_StyleType>,
        outset?: Extended<BorderImageOutset_StyleType>,
        repeat?: Extended<BorderImageRepeat_StyleType>,
    };
```

**See Also:** [CssImage](/mimcss/reference.html#modules/coretypes.html#cssimage), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### border-image-outset

```tsx
borderImageOutset: BorderImageOutset_StyleType;

/**
 * Type for border-image-outset style property. It is CssNumber and not CssLength because
 * border-image-outset can be specified as a unitless number.
 */
export type BorderImageOutset_StyleType = OneOrBox<CssNumber | string>;
```

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### border-image-repeat

```tsx
borderImageRepeat: BorderImageRepeat_StyleType;

/** Type for border-image-repeat style property */
export type BorderImageRepeat_StyleType = OneOrPair<BorderImageRepeat_Keyword>;

/** Type for border-image-repeat keywords */
export type BorderImageRepeat_Keyword = "stretch" | "repeat" | "round" | "space";
```

**See Also:** [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair)

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

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)


#### border-image-source

```tsx
borderImageSource: BorderImageSource_StyleType;

/** Type for border-image-source style property */
export type BorderImageSource_StyleType = OneOrBox<CssImage | string>;
```

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssImage](/mimcss/reference.html#modules/coretypes.html#cssimage)

#### border-image-width

```tsx
borderImageWidth: BorderImageWidth_StyleType;

/**
 * Type for border-image-width style property. It is CssNumber and not CssLength because
 * border-image-width can be specified as a unitless number.
 */
export type BorderImageWidth_StyleType = OneOrBox<CssNumber | "auto" | string>;
```

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### border-inline-end

```tsx
borderInlineEnd: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-inline-end-color

```tsx
borderInlineEndColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

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

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

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

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

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
export type BorderRadius_StyleType = OneOrPair<OneOrBox<CssLength>>;
```

**See Also:** [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair), [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### border-right

```tsx
borderRight: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-right-color

```tsx
borderRightColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

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

**See Also:** [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### border-style

```tsx
borderStyle: BorderStyle_StyleType;

/** Type for border-style style property */
export type BorderStyle_StyleType = OneOrBox<BorderStyle_Keyword>;

/** Type for single border side style property */
export type BorderStyle_Keyword = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" |
    "groove" | "ridge" | "inset" | "outset";
```

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox)

#### border-top

```tsx
borderTop: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### border-top-color

```tsx
borderTopColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

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

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### bottom

```tsx
bottom: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### box-decoration-break

```tsx
boxDecorationBreak?: BoxDecorationBreak_StyleType;
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

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)



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

#### caption-side

```tsx
captionSide: CaptionSide_StyleType;

/** Type for caption-side style property */
export type CaptionSide_StyleType = "top" | "bottom" | "block-start" | "block-end" |
    "inline-start" | "inline-end";
```

#### caret-color

```tsx
caretColor: CaretColor_StyleType;

/** Type for caret-color style property */
export type CaretColor_StyleType = "auto" | CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### clear

```tsx
clear: Clear_StyleType;

/** Type for clear style property */
export type Clear_StyleType = "none" | "left" | "right" | "both" | "inline-start" | "inline-end";
```

#### clip

```tsx
clip: Clip_StyleType;

/** Type for clip style property */
export type Clip_StyleType = "auto" | OneOrBox<CssLength>;
```

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### clip-path

```tsx
clipPath: ClipPath_StyleType;

/** Type for clip-path style property */
export type ClipPath_StyleType = "none" | IUrlProxy | BasicShape | GeometryBoxKeyword |
    [GeometryBoxKeyword, BasicShape];

/** Type used for several properties */
export type GeometryBoxKeyword = "margin-box" | "border-box" | "padding-box" | "content-box" |
    "fill-box" | "stroke-box" | "view-box";
```

**See Also:** [IUrlProxy](/mimcss/reference.html#interfaces/coretypes_.iurlproxy.html), [BasicShape](/mimcss/reference.html#modules/extratypes.html#basicshape)

#### clip-rule

```tsx
clipRule: ClipRule_StyleType;

/** Type for clip-rule style property */
export type ClipRule_StyleType = "nonzero" | "evenodd";
```

#### color

```tsx
color: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### color-adjust

```tsx
colorAdjust: ColorAdjust_StyleType;

/** Type for color-adjust style property */
export type ColorAdjust_StyleType = "economy" | "exact";
```

#### color-interpolation

```tsx
colorInterpolation: ColorInterpolation_StyleType;

/** Type for color-interpolation style and color-interpolation-filter properties */
export type ColorInterpolation_StyleType = "auto" | "sRGB" | "linearRGB";
```

#### color-interpolation-filters

```tsx
colorInterpolationFilters: ColorInterpolation_StyleType;

/** Type for color-interpolation style and color-interpolation-filter properties */
export type ColorInterpolation_StyleType = "auto" | "sRGB" | "linearRGB";
```

#### column-count

```tsx
columnCount: ColumnCount_StyleType;

/** Type for column-count style property */
export type ColumnCount_StyleType = "auto" | number;
```

#### column-fill

```tsx
columnFill: ColumnFill_StyleType;

/** Type for column-fill style property */
export type ColumnFill_StyleType = "auto" | "balance" | "balance-all";
```

#### column-gap

```tsx
columnGap: ColumnGap_StyleType;

/** Type for column-gap style property */
export type ColumnGap_StyleType = "normal" | CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### column-rule

```tsx
columnRule: Border_StyleType;
```

See the [`border`](#border) style property for type definition and examples.

#### column-rule-color

```tsx
columnRuleColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### column-rule-style

```tsx
columnRuleStyle: BorderStyle_Keyword;
```

See the [`border-style`](#border-style) style property for type definition.

#### column-rule-width

```tsx
columnRuleWidth: BorderWidth_Single;
```

See the [`border-width`](#border-width) style property for type definition.

#### column-span

```tsx
columnSpan: ColumnSpan_StyleType;

/** Type for column-span style property */
export type ColumnSpan_StyleType = "none" | "all";
```

#### column-width

```tsx
columnWidth: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### columns

```tsx
columns: Columns_StyleType;

/** Type for columns style property */
export type Columns_StyleType = "auto" | CssNumber | CssLength |
    ["auto" | Extended<CssNumber>, "auto" | Exclude<Extended<CssLength>,number>] |
    ["auto" | Exclude<Extended<CssLength>,number>, "auto" | Extended<CssNumber>];
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### contain

```tsx
contain: Contain_StyleType;

/** Type for contain style property */
export type Contain_StyleType = "none" | "strict" | "content" | "size" | "layout" | "style" |
    "paint" | Extended<"size" | "layout" | "style" | "paint">[];
```

**See Also:** [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### content

```tsx
content: Content_StyleType;

/** Type for content style property */
export type Content_StyleType = string | "none" | "normal" | OneOrMany<CssImage |
    "open-quote" | "close-quote" | "no-open-quote" | "no-close-quote">;
```

The `content` property can also use the [attr()](/mimcss/reference.html#modules/coreapi.html#attr), [counter()](/mimcss/reference.html#modules/coreapi.html#counter) and [counters()](/mimcss/reference.html#modules/coreapi.html#counters) functions (which can potentially be used for any style property, but most browsers only support them for the `content` property).

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [CssImage](/mimcss/reference.html#modules/coretypes.html#cssimage)

#### counter-increment

```tsx
counterIncrement: Counter_StyleType;

/** Type for counter-increment, counter-reset and counter-set style properties */
export type Counter_StyleType = "none" | OneOrMany<ICounterRule | string |
    [ICounterRule | string, Extended<number>]>;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [ICounterRule](/mimcss/reference.html#interfaces/ruletypes_.icounterrule.html), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### counter-reset

```tsx
counterReset: Counter_StyleType;

/** Type for counter-increment, counter-reset and counter-set style properties */
export type Counter_StyleType = "none" | OneOrMany<ICounterRule | string |
    [ICounterRule | string, Extended<number>]>;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [ICounterRule](/mimcss/reference.html#interfaces/ruletypes_.icounterrule.html), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### counter-set

```tsx
counterSet: Counter_StyleType;

/** Type for counter-increment, counter-reset and counter-set style properties */
export type Counter_StyleType = "none" | OneOrMany<ICounterRule | string |
    [ICounterRule | string, Extended<number>]>;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [ICounterRule](/mimcss/reference.html#interfaces/ruletypes_.icounterrule.html), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### cursor

```tsx
cursor: Counter_StyleType;

/** Type for cursor style property */
export type Cursor_StyleType = OneOrMany<Cursor_Single>;

/** Type for cursor style property single value */
export type Cursor_Single = Cursor_Keyword | IUrlProxy |
    [IUrlProxy, Extended<CssNumber>, Extended<CssNumber>];

/** Type for cursor pre-defined names */
export type Cursor_Keyword = "auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" |
    "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" |
    "no-drop" | "not-allowed" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" |
    "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ew-resize" | "ns-resize" |
    "nesw-resize" | "nwse-resize" | "col-resize" | "row-resize" | "all-scroll" | "zoom-in" |
    "zoom-out" | "grab" | "grabbing";
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [ICounterRule](/mimcss/reference.html#interfaces/ruletypes_.icounterrule.html), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### direction

```tsx
direction: Direction_StyleType;

/** Type for direction style property */
export type Direction_StyleType = "ltr" | "rtl";
```

#### display

```tsx
display: Display_StyleType;

/** Type for display style property */
export type Display_StyleType = "block" | "inline" | "run-in" | "contents" | "none" |
    "inline-block" | "inline-list-item" | "inline-table" | "inline-flex" | "inline-grid" |
    "flow" | "flow-root" | "table" | "flex" | "grid" | "ruby" |
    "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-cell" |
        "table-column-group" | "table-column" | "table-caption" | "ruby-base" | "ruby-text" |
        "ruby-base-container" | "ruby-text-container" |
    "list-item" | "list-item block" | "list-item inline" | "list-item flow" | "list-item flow-root" |
        "list-item block flow" | "list-item block flow-root" | "flow list-item block";
```

#### dominant-baseline

```tsx
dominantBaseline: DominantBaseline_StyleType;

/** Type for dominant-baseline style property */
export type DominantBaseline_StyleType = "auto" | "text-bottom" | "alphabetic" | "ideographic" | "middle" |
    "central" | "mathematical" | "hanging" | "text-top";
```

#### empty-cells

```tsx
emptyCells: DominantBaseline_StyleType;

/** Type for empty-cells style property */
export type EmptyCells_StyleType = "show" | "hide";
```

#### fill

```tsx
fill: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### fill-opacity

```tsx
fillOpacity: CssPercent;
```

**See Also:** [CssPercent](/mimcss/reference.html#modules/coretypes.html#csspercent)

#### fill-rule

```tsx
fillRule: FillRule_StyleType;

/** Type for fill-rule style property */
export type FillRule_StyleType = "nonzero" | "evenodd";
```

#### filter

```tsx
filter: Filter_StyleType;

/** Type for filter and backdrop-filter style property */
export type Filter_StyleType = OneOrMany<Filter_Single>;

/** Type for filter and backdrop-filter style single value */
export type Filter_Single = string | IUrlProxy | IFilterProxy;
```

The `filter` property can be specified either as a string or using the Mimcss `url()` function or using one of the Mimcss [filter functions](helper-functions.html#filters) that return the `IFilterProxy` type.

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [IUrlProxy](/mimcss/reference.html#interfaces/coretypes_.iurlproxy.html), [IFilterProxy](/mimcss/reference.html#interfaces/coretypes_.ifilterproxy.html)

**Examples**

```tsx
class MyStyles extends css.StyleDefinition
{
    // url for SVG filter
    cls1 = this.$class({ filter: css.url("filters.svg#filter1") })

    // brightness of 70%
    cls2 = this.$class({ filter: css.brightness(70) })

    // multiple filters
    cls3 = this.$class({ filter: [css.dropShadow(16, 16, "red", 10), invert(75)] })
}
```

#### flex

```tsx
flex: Flex_StyleType;

/** Type for flex style property */
export type Flex_StyleType = FlexBasis_StyleType | [Extended<number>, Extended<number>] |
    [Extended<number>, Extended<number>, Extended<FlexBasis_StyleType>];
```

**See Also:** [flex-basis](#flex-basis), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### flex-basis

```tsx
flexBasis: FlexBasis_StyleType;

/** Type for flex-basis style property */
export type FlexBasis_StyleType = "auto" | "content" | CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### flex-direction

```tsx
flexDirection: FlexDirection_StyleType;

/** Type for flex-direction style property */
export type FlexDirection_StyleType = "row" | "row-reverse" | "column" | "column-reverse";
```

#### flex-flow

```tsx
flexFlow: FlexFlow_StyleType;

/** Type for flex-flow style property */
export type FlexFlow_StyleType = FlexDirection_StyleType | FlexWrap_StyleType |
    [Extended<FlexDirection_StyleType>, Extended<FlexWrap_StyleType>];
```

**See Also:** [flex-direction](#flex-direction), [flex-wrap](#flex-wrap), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### flex-grow

```tsx
flexGrow: CssNumber;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### flex-shrink

```tsx
flexShrink: CssNumber;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### flex-wrap

```tsx
flexWrap: FlexWrap_StyleType;

/** Type for flex-wrap style property */
export type FlexWrap_StyleType = "nowrap" | "wrap" | "wrap-reverse";
```

#### float

```tsx
float: Float_StyleType;

/** Type for float style property */
export type Float_StyleType = "left" | "right" | "none" | "inline-start" | "inline-end";
```

#### flood-color

```tsx
floodColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### flood-opacity

```tsx
floodOpacity: CssPercent;
```

**See Also:** [CssPercent](/mimcss/reference.html#modules/coretypes.html#csspercent)

#### font

```tsx
font: Font_StyleType;

/** Type for font style property */
export type Font_StyleType = string | Font_SystemKeyword |
    {
        size: Extended<CssLength>;
        family: Extended<string>;
        style?: Extended<FontStyle_StyleType>;
        variant?: Extended<string>;
        weight?: Extended<FontWeight_StyleType>;
        stretch?: Extended<Exclude<FontStretch_Single,number>>;
        lineHeight?: Extended<CssNumber>
    };

/** Keywords for font style property */
export type Font_SystemKeyword = "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar";
```

The `font` property can be specified as a string, as a keyword or as an object. The fields of the object correspond to the extended types of the following longhand properties:

| Field | CSS longhand property |
| :--- | :--- |
| size | [font-size](#font-size) |
| family | [font-family](#font-family) |
| style | [font-style](#font-style) |
| variant | [font-variant](#font-variant) |
| weight | [font-weight](#font-weight) |
| stretch | [font-stretch](#font-stretch) |
| lineHeight | [lineHeight](#lineHeight) |

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### font-family

```tsx
fontFamily: string;
```

#### font-feature-settings

```tsx
fontFeatureSettings: string;
```

#### font-kerning

```tsx
fontKerning: FontKerning_StyleType;

/** Type for font-kerning style property */
export type FontKerning_StyleType = "auto" | "normal" | "none";
```

#### font-language-override

```tsx
fontLanguageOverride?: DefaultStyleType;
```

#### font-optical-sizing

```tsx
fontOpticalSizing: FontOpticalSizing_StyleType;

/** Type for font-optical-sizing style property */
export type FontOpticalSizing_StyleType = "auto" | "none";
```

#### font-size

```tsx
fontSize: FontSize_StyleType;

/** Type for font-size style property */
export type FontSize_StyleType = "xx-small" | "x-small" | "small" | "medium" | "large" |
    "x-large" | "xx-large" | "xxx-large" | "larger" | "smaller" | CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### font-size-adjust

```tsx
fontSizeAdjust: CssNumber;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### font-stretch

```tsx
fontStretch: FontStretch_Single;

/** Type for font-stretch style property */
export type FontStretch_StyleType = "normal" | "ultra-condensed" | "extra-condensed" | "condensed" |
"semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | CssNumber;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### font-style

```tsx
fontStyle: FontStyle_StyleType;

/** Type for font-style style property */
export type FontStyle_StyleType = "normal" | "italic" | "oblique" | CssAngle;
```

**See Also:** [CssAngle](/mimcss/reference.html#modules/numerictypes.html#cssangle)

#### font-synthesis

```tsx
fontSynthesis: FontSynthesis_StyleType;

/** Type for font-synthesis style property */
export type FontSynthesis_StyleType = "none" | "weight" | "style" | "weight style";
```

#### font-variant

```tsx
fontVariant: string;
```

#### font-variant-caps

```tsx
fontVariantCaps: FontVariantCaps_StyleType;

/** Type for font-variant-caps style property */
export type FontVariantCaps_StyleType = "normal" | "small-caps" | "all-small-caps" |
    "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps";
```

#### font-variant-east-asian

```tsx
fontVariantEastAsian: string;
```

#### font-variant-east-ligatures

```tsx
fontVariantLigatures: string;
```

#### font-variant-east-numeric

```tsx
fontVariantNumeric: string;
```

#### font-variant-position

```tsx
fontVariantPosition: FontVariantPosition_StyleType;

/** Type for font-variant-position style property */
export type FontVariantPosition_StyleType = "normal" | "sub" | "super";
```

#### font-variation-settings

```tsx
fontVariationSettings: string;
```

#### font-weight

```tsx
fontWeight: FontWeight_StyleType;

/** Type for font-weight style property */
export type FontWeight_StyleType = "normal" | "bold" | "bolder" | "lighter" | number;
```

#### gap

```tsx
gap: Gap_StyleType;

/** Type for a gap or grid-gap style property */
export type Gap_StyleType = RowGap_StyleType | [RowGap_StyleType, ColumnGap_StyleType];
```

**See Also:** [row-gap](#row-gap), [column-gap](#column-gap)

#### grid

```tsx
grid: string;
```

#### grid-area

```tsx
gridArea: GridArea_StyleType;

/** Type for grid-area style property */
export type GridArea_StyleType = OneOrBox<GridAxisSide_StyleType>;

/** Type for grid-column-start/end and grid-row-start/end style properties */
export type GridAxisSide_StyleType = "auto" | GridLineCountOrName | ISpanProxy;

/** Type for specifying either number of grid lines or name of grid line or area */
export type GridLineCountOrName = CssNumber | IGridAreaRule | IGridLineRule | string;
```

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [IGridAreaRule](/mimcss/reference.html#interfaces/ruletypes_.igridarearule.html), [IGridLineRule](/mimcss/reference.html#interfaces/ruletypes_.igridlinerule.html), [ISpanProxy](/mimcss/reference.html#interfaces/coretypes_.ispanproxy.html)

#### grid-auto-columns

```tsx
gridAutoColumns: GridAutoAxis_StyleType;

/** Type for grid-auto-columns and grid-auto-rows style properties */
export type GridAutoAxis_StyleType = OneOrMany<GridTrackSize>;

/** Type for a single element defining track size in grid layout */
export type GridTrackSize = CssLength | "min-content" | "max-content" | "auto" |
    IMinMaxProxy | IFitContentProxy | IRepeatProxy;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [IMinMaxProxy](/mimcss/reference.html#interfaces/coretypes_.iminmaxproxy.html), [IFitContentProxy](/mimcss/reference.html#interfaces/coretypes_.ifitcontentproxy.html), [IRepeatProxy](/mimcss/reference.html#interfaces/coretypes_.irepeatproxy.html)

#### grid-auto-flow

```tsx
gridAutoFlow: GridAutoFlow_StyleType;

/** Type for grid-auto-flow style property */
export type GridAutoFlow_StyleType = "row" | "column" | "dense" | "row dense" | "column dense";
```

#### grid-auto-rows

```tsx
gridAutoRows: GridAutoAxis_StyleType;

/** Type for grid-auto-columns and grid-auto-rows style properties */
export type GridAutoAxis_StyleType = OneOrMany<GridTrackSize>;

/** Type for a single element defining track size in grid layout */
export type GridTrackSize = CssLength | "min-content" | "max-content" | "auto" |
    IMinMaxProxy | IFitContentProxy | IRepeatProxy;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [IMinMaxProxy](/mimcss/reference.html#interfaces/coretypes_.iminmaxproxy.html), [IFitContentProxy](/mimcss/reference.html#interfaces/coretypes_.ifitcontentproxy.html), [IRepeatProxy](/mimcss/reference.html#interfaces/coretypes_.irepeatproxy.html)

#### grid-column

```tsx
gridColumn: GridAxis_StyleType;

/** Type for grid-column and grid-row style properties */
export type GridAxis_StyleType = OneOrPair<GridAxisSide_StyleType>;

/** Type for grid-column-start/end and grid-row-start/end style properties */
export type GridAxisSide_StyleType = "auto" | GridLineCountOrName | ISpanProxy;

/** Type for specifying either number of grid lines or name of grid line or area */
export type GridLineCountOrName = CssNumber | IGridAreaRule | IGridLineRule | string;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [IGridAreaRule](/mimcss/reference.html#interfaces/ruletypes_.igridarearule.html), [IGridLineRule](/mimcss/reference.html#interfaces/ruletypes_.igridlinerule.html), [ISpanProxy](/mimcss/reference.html#interfaces/coretypes_.ispanproxy.html)

#### grid-column-end

```tsx
gridColumnEnd: GridAxisSide_StyleType;

/** Type for grid-column-start/end and grid-row-start/end style properties */
export type GridAxisSide_StyleType = "auto" | GridLineCountOrName | ISpanProxy;

/** Type for specifying either number of grid lines or name of grid line or area */
export type GridLineCountOrName = CssNumber | IGridAreaRule | IGridLineRule | string;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [IGridAreaRule](/mimcss/reference.html#interfaces/ruletypes_.igridarearule.html), [IGridLineRule](/mimcss/reference.html#interfaces/ruletypes_.igridlinerule.html), [ISpanProxy](/mimcss/reference.html#interfaces/coretypes_.ispanproxy.html)

#### grid-column-gap

```tsx
gridColumnGap: ColumnGap_StyleType;

/** Type for column-gap style property */
export type ColumnGap_StyleType = "normal" | CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### grid-column-start

```tsx
gridColumnStart: GridAxisSide_StyleType;

/** Type for grid-column-start/end and grid-row-start/end style properties */
export type GridAxisSide_StyleType = "auto" | GridLineCountOrName | ISpanProxy;

/** Type for specifying either number of grid lines or name of grid line or area */
export type GridLineCountOrName = CssNumber | IGridAreaRule | IGridLineRule | string;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [IGridAreaRule](/mimcss/reference.html#interfaces/ruletypes_.igridarearule.html), [IGridLineRule](/mimcss/reference.html#interfaces/ruletypes_.igridlinerule.html), [ISpanProxy](/mimcss/reference.html#interfaces/coretypes_.ispanproxy.html)

#### grid-gap

```tsx
gridGap: Gap_StyleType;

/** Type for a gap or grid-gap style property */
export type Gap_StyleType = RowGap_StyleType | [RowGap_StyleType, ColumnGap_StyleType];
```

**See Also:** [row-gap](#row-gap), [column-gap](#column-gap)

#### grid-row

```tsx
gridRow: GridAxis_StyleType;

/** Type for grid-column and grid-row style properties */
export type GridAxis_StyleType = OneOrPair<GridAxisSide_StyleType>;

/** Type for grid-column-start/end and grid-row-start/end style properties */
export type GridAxisSide_StyleType = "auto" | GridLineCountOrName | ISpanProxy;

/** Type for specifying either number of grid lines or name of grid line or area */
export type GridLineCountOrName = CssNumber | IGridAreaRule | IGridLineRule | string;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [IGridAreaRule](/mimcss/reference.html#interfaces/ruletypes_.igridarearule.html), [IGridLineRule](/mimcss/reference.html#interfaces/ruletypes_.igridlinerule.html), [ISpanProxy](/mimcss/reference.html#interfaces/coretypes_.ispanproxy.html)

#### grid-row-end

```tsx
gridRowEnd: GridAxisSide_StyleType;

/** Type for grid-column-start/end and grid-row-start/end style properties */
export type GridAxisSide_StyleType = "auto" | GridLineCountOrName | ISpanProxy;

/** Type for specifying either number of grid lines or name of grid line or area */
export type GridLineCountOrName = CssNumber | IGridAreaRule | IGridLineRule | string;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [IGridAreaRule](/mimcss/reference.html#interfaces/ruletypes_.igridarearule.html), [IGridLineRule](/mimcss/reference.html#interfaces/ruletypes_.igridlinerule.html), [ISpanProxy](/mimcss/reference.html#interfaces/coretypes_.ispanproxy.html)

#### grid-row-gap

```tsx
gridRowGap: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### grid-row-start

```tsx
gridRowStart: GridAxisSide_StyleType;

/** Type for grid-column-start/end and grid-row-start/end style properties */
export type GridAxisSide_StyleType = "auto" | GridLineCountOrName | ISpanProxy;

/** Type for specifying either number of grid lines or name of grid line or area */
export type GridLineCountOrName = CssNumber | IGridAreaRule | IGridLineRule | string;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [IGridAreaRule](/mimcss/reference.html#interfaces/ruletypes_.igridarearule.html), [IGridLineRule](/mimcss/reference.html#interfaces/ruletypes_.igridlinerule.html), [ISpanProxy](/mimcss/reference.html#interfaces/coretypes_.ispanproxy.html)

#### grid-template

```tsx
gridTemplate: string;
```

#### grid-template-areas

```tsx
gridTemplateAreas: GridTemplateAreas_StyleType;

/** Type for grid-template-areas style property */
export type GridTemplateAreas_StyleType = "none" | OneOrMany<IQuotedProxy> |
    GridTemplateArea_Definition[];

/**
 * Type for defining a single grid area position. The numbers are 1-based indices of the lines in
 * the following sequence: start row, start column, end row, end column.
 */
export type GridTemplateArea_Definition = [IGridAreaRule | Extended<string>,
    number, number, number, number];
```

The CSS structure of the `grid-template-areas` property is as a sequence of quoted strings representing a matrix of grid areas names separated by spaces. Each grid area name can be repeated multiple times forming a rectangular area. Mimcss supports this structure directly via the array of `IQuotedProxy` objects; however it also supports and even prefers a different approach. Developers can specify an array of tuples (`GridTemplateArea_Definition` types) where each tuple consists of the following elements:

- Grid area name specified as either an `IGridAreaRule` object or a string.
- Coordinates of the area as four numbers: start row, start column, end row, end column.

The coordinates correspond to track numbers occupied by the area within the grid.

**Example**

```tsx
class MyStyles extends css.StyleDefinition
{
    // define grid areas on the page
    header = this.$gridarea();
    main = this.$gridarea();
    footer = this.$gridarea();
    left = this.$gridarea();
    right = this.$gridarea();

	grid = this.$class({
        // define grid of 5 rows by 5 columns
        display: "grid",
        gridTemplateColumns: css.repeat( 5, "1fr"),
        gridTemplateRows: css.repeat(5, "1fr"),

        // place areas on the grid using coordinates 1 to 5 for rows and columns
        gridTemplateAreas: [
            [this.header, 1,1, 1,5],
            [this.main, 2,2, 4,4],
            [this.footer, 5,2, 5,4],
            [this.left, 2,1, 5,1],
            [this.right, 2,5, 5,5],
        ],
    })
}
```

**See Also:** [IQuotedProxy](/mimcss/reference.html#interfaces/coretypes_.iquotedproxy.html), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### grid-template-columns

```tsx
gridTemplateColumns: GridTemplateAxis_StyleType;

/** Type for grid-template-columns and grid-template-rows style properties */
export type GridTemplateAxis_StyleType = "none" | OneOrMany<GridTrack> | "subgrid";

/** Type for a single track element of grid template axis */
export type GridTrack = GridTrackSize | GridTrackLine;

/** Type for a single element defining track size in grid layout */
export type GridTrackSize = CssLength | "min-content" | "max-content" | "auto" |
    IMinMaxProxy | IFitContentProxy | IRepeatProxy;

/**
 * Type for a single template element defining name or names for a grid line in grid template.
 * This is always an array - even if a single name is given.
 */
export type GridTrackLine = (IGridLineRule | Extended<string>)[];
```

**Examples**

```tsx
class MyStyles extends css.StyleDefinition
{
    // 100px 1fr 10%
	grid1 = this.$class({
        gridTemplateColumns: 100, "1fr", css.percent(10)),
    })

    // repeat(3, 1fr)
	grid2 = this.$class({
        gridTemplateColumns: css.repeat( 3, "1fr"),
    })

    // use explicit and line names and defined line rules
    lastLine = this.$gridline();
	grid3 = this.$class({
        gridTemplateColumns: [ ["first-line"], "1fr", "2fr", [this.lastLine] ]
    })

    // use lines defined by a grid area
    mainArea = this.$gridarea();
	grid4 = this.$class({
        gridTemplateColumns: [ css.percent(10), [this.mainArea.startLine], css.repeat(4, "1fr"),
            [this.mainArea.lastLine], css.percent(10)]
    })
}
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [IMinMaxProxy](/mimcss/reference.html#interfaces/coretypes_.iminmaxproxy.html), [IFitContentProxy](/mimcss/reference.html#interfaces/coretypes_.ifitcontentproxy.html), [IRepeatProxy](/mimcss/reference.html#interfaces/coretypes_.irepeatproxy.html), [IGridLineRule](/mimcss/reference.html#interfaces/ruletypes_.igridlinerule.html), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### grid-template-rows

```tsx
gridTemplateRows: GridTemplateAxis_StyleType;

/** Type for grid-template-columns and grid-template-rows style properties */
export type GridTemplateAxis_StyleType = "none" | OneOrMany<GridTrack> | "subgrid";

/** Type for a single track element of grid template axis */
export type GridTrack = GridTrackSize | GridTrackLine;

/** Type for a single element defining track size in grid layout */
export type GridTrackSize = CssLength | "min-content" | "max-content" | "auto" |
    IMinMaxProxy | IFitContentProxy | IRepeatProxy;

/**
 * Type for a single template element defining name or names for a grid line in grid template.
 * This is always an array - even if a single name is given.
 */
export type GridTrackLine = (IGridLineRule | Extended<string>)[];
```

The usage of the `grid-template-rows` property is identical to that of the [grid-template-columns](#grid-template-columns) property.

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [IMinMaxProxy](/mimcss/reference.html#interfaces/coretypes_.iminmaxproxy.html), [IFitContentProxy](/mimcss/reference.html#interfaces/coretypes_.ifitcontentproxy.html), [IRepeatProxy](/mimcss/reference.html#interfaces/coretypes_.irepeatproxy.html), [IGridLineRule](/mimcss/reference.html#interfaces/ruletypes_.igridlinerule.html), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### hanging-punctuation

```tsx
hangingPunctuation?: DefaultStyleType;
```

#### height

```tsx
height: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### hyphens

```tsx
hyphens: Hyphens_StyleType;

/** Type for hyphens style property */
export type Hyphens_StyleType = "none" | "manual" | "auto";
```


#### image-rendering

```tsx
imageRendering: ImageRendering_StyleType;

/** Type for image-rendering style property */
export type ImageRendering_StyleType = "auto" | "crisp-edges" | "pixelated";
```

#### inline-size

```tsx
inlineSize: CssSize;
```

**See Also:** [CssSize](/mimcss/reference.html#modules/numerictypes.html#csssize)

#### initial-letter

```tsx
initialLetter: OneOrPair<CssNumber>;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair)

#### isolation

```tsx
isolation: Isolation_StyleType;

/** Type for isolation style property */
export type Isolation_StyleType = "auto" | "isolate";
```

#### justify-content

```tsx
justifyContent: JustifyContent_StyleType;

/** Type for justify-content style property */
export type JustifyContent_StyleType = "normal" | "space-between" | "space-around" | "space-evenly" | "stretch" |
    "center" | "start" | "end" | "flex-start" | "flex-end" | "left" | "right" |
    "safe center" | "safe start" | "safe end" | "safe flex-start" | "safe flex-end" | "safe left" | "safe right" |
    "unsafe center" | "unsafe start" | "unsafe end" | "unsafe flex-start" | "unsafe flex-end" | "unsafe left" | "unsafe right";
```

#### justify-items

```tsx
justifyItems: JustifyItems_StyleType;

/** Type for justify-items style property */
export type JustifyItems_StyleType = "normal" | "stretch" | "baseline" | "first baseline" | "last baseline" |
    "center" | "start" | "end" | "self-start" | "self-end" | "flex-start" | "flex-end" | "left" | "right" |
    "safe center" | "safe start" | "safe end" | "safe self-start" | "safe self-end" | "safe flex-start" | "safe flex-end" | "safe left" | "safe right" |
    "unsafe center" | "unsafe start" | "unsafe end" | "unsafe self-start" | "unsafe self-end" | "unsafe flex-start" | "unsafe flex-end" | "unsafe left" | "unsafe right" |
    "legacy" | "legacy left" | "legacy right" | "legacy center";
```

#### justify-self

```tsx
justifySelf: JustifySelf_StyleType;

/** Type for justify-self style property */
export type JustifySelf_StyleType = "auto" | "normal" | "stretch" | "baseline" | "first baseline" | "last baseline" |
    "center" | "start" | "end" | "self-start" | "self-end" | "flex-start" | "flex-end" | "left" | "right" |
    "safe center" | "safe start" | "safe end" | "safe self-start" | "safe self-end" | "safe flex-start" | "safe flex-end" | "safe left" | "safe right" |
    "unsafe center" | "unsafe start" | "unsafe end" | "unsafe self-start" | "unsafe self-end" | "unsafe flex-start" | "unsafe flex-end" | "unsafe left" | "unsafe right";
```

#### left

```tsx
left: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### letter-spacing

```tsx
letterSpacing: LetterSpacing_StyleType;

/** Type for letter-spacing style property */
export type LetterSpacing_StyleType = "normal" | CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### lighting-color

```tsx
lightingColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### line-break

```tsx
lineBreak: LineBreak_StyleType;

/** Type for line-break style property */
export type LineBreak_StyleType = "auto" | "loose" | "normal" | "strict" | "anywhere";
```

#### line-height

```tsx
lineHeight: LineHeight_StyleType;

/** Type for line-height style property */
export type LineHeight_StyleType = CssNumber | string;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### list-style

```tsx
listStyle: ListStyle_StyleType;

/** Type for list-style style property */
export type ListStyle_StyleType = ListStyleType_StyleType | ListStylePosition_StyleType | ListStyleImage_StyleType |
    [Extended<ListStyleImage_StyleType>, Extended<ListStylePosition_StyleType>] |
    [Extended<ListStyleImage_StyleType>, Extended<ListStyleType_StyleType>?] |
    [Extended<ListStyleType_StyleType>, Extended<ListStylePosition_StyleType>] |
    [Extended<ListStyleImage_StyleType>, Extended<ListStylePosition_StyleType>, Extended<ListStyleType_StyleType>?];
```

The `list-style` property is a shorthand for properties: [list-style-image](#list-style-image), [list-style-position](#list-style-position), [list-style-type](#list-style-type). The value can be specified as either a single value of any of these properties, or a two-element tuple of combinations of these properties or a three-element tuple of all three of these properties.

**See Also:** [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### line-style-image

```tsx
lineStyleImage: ListStyleImage_StyleType;

/** Type for line-style-image style property */
export type ListStyleImage_StyleType = "none" | IUrlProxy;
```

**See Also:** [IUrlProxy](/mimcss/reference.html#interfaces/coretypes_.iurlproxy.html)

#### line-style-position

```tsx
lineStylePosition: ListStylePosition_StyleType;

/** Type for list-style-position style property */
export type ListStylePosition_StyleType = "inside" | "outside";
```

#### line-style-type

```tsx
lineStyleType: ListStyleType_StyleType;

/** Type for list-style-type style property */
export type ListStyleType_StyleType = "none" | "disc" | "circle" | "square" | "decimal" | "decimal-leading-zero" |
    "cjk-decimal" | "cjk-earthly-branch" | "cjk-heavenly-stem" | "cjk-ideographic" |
    "lower-roman" | "upper-roman" | "lower-greek" | "lower-alpha" | "lower-latin" | "upper-alpha" | "upper-latin" |
    "arabic-indic" | "armenian" | "bengali" | "cambodian" | "devanagari" | "georgian" | "gujarati" | "gurmukhi" | "hebrew" |
    "hiragana" | "hiragana-iroha" | "japanese-formal" | "japanese-informal" | "kannada" | "katakana" | "katakana-iroha" |
    "khmer" | "korean-hangul-formal" | "korean-hanja-formal" | "korean-hanja-informal" | "lao" | "lower-armenian" |
    "malayalam" | "mongolian" | "myanmar" | "oriya" | "persian" | "simp-chinese-formal" | "simp-chinese-informal" |
    "tamil" | "telugu" | "thai" | "tibetan" | "trad-chinese-formal" | "trad-chinese-informal" | "upper-armenian" |
    "disclosure-open" | "disclosure-closed";
```

#### margin

```tsx
margin: OneOrBox<CssLength>;
```

The `margin` property can be specified as a single `<length>` value or two-, three- or four-element tuple of `<length>` values.

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### margin-block-end

```tsx
marginBlockEnd: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### margin-block-start

```tsx
marginBlockStart: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### margin-bottom

```tsx
marginBottom: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### margin-inline-end

```tsx
marginInlineEnd: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### margin-inline-start

```tsx
margIninlineStart: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### margin-left

```tsx
marginLeft: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### margin-right

```tsx
marginRight: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### margin-top

```tsx
marginTop: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### marker-end

```tsx
markerEnd: Marker_StyleType;

/** Type for the marker-start, marker-mid and marker-end style properties */
export type Marker_StyleType = "none" | IIDRule;
```

**See Also:** [IIDRule](/mimcss/reference.html#interfaces/ruletypes_.iidrule.html)

#### marker-mid

```tsx
markerMid: Marker_StyleType;

/** Type for the marker-start, marker-mid and marker-end style properties */
export type Marker_StyleType = "none" | IIDRule;
```

**See Also:** [IIDRule](/mimcss/reference.html#interfaces/ruletypes_.iidrule.html)

#### marker-start

```tsx
markerStart: Marker_StyleType;

/** Type for the marker-start, marker-mid and marker-end style properties */
export type Marker_StyleType = "none" | IIDRule;
```

**See Also:** [IIDRule](/mimcss/reference.html#interfaces/ruletypes_.iidrule.html)

#### max-block-size

```tsx
maxBlockSize: CssSize;
```

**See Also:** [CssSize](/mimcss/reference.html#modules/numerictypes.html#csssize)

#### max-height

```tsx
maxHeight: CssSize;
```

**See Also:** [CssSize](/mimcss/reference.html#modules/numerictypes.html#csssize)

#### max-inline-size

```tsx
maxInlineSize: CssSize;
```

**See Also:** [CssSize](/mimcss/reference.html#modules/numerictypes.html#csssize)

#### max-width

```tsx
maxWidth: CssSize;
```

**See Also:** [CssSize](/mimcss/reference.html#modules/numerictypes.html#csssize)

#### min-block-size

```tsx
minBlockSize: CssSize;
```

**See Also:** [CssSize](/mimcss/reference.html#modules/numerictypes.html#csssize)

#### min-height

```tsx
minHeight: CssSize;
```

**See Also:** [CssSize](/mimcss/reference.html#modules/numerictypes.html#csssize)

#### min-inline-size

```tsx
minInlineSize: CssSize;
```

**See Also:** [CssSize](/mimcss/reference.html#modules/numerictypes.html#csssize)

#### min-width

```tsx
minWidth: CssSize;
```

**See Also:** [CssSize](/mimcss/reference.html#modules/numerictypes.html#csssize)

#### object-fit

```tsx
objectFit: ObjectFit_StyleType;

/** Type for the object-fit style property */
export type ObjectFit_StyleType = "fill" | "contain" | "cover" | "none" | "scale-down";
```

#### object-position

```tsx
objectPosition: CssPosition;
```

**See Also:** [CssPosition](/mimcss/reference.html#modules/coretypes.html#cssposition)

#### offset

```tsx
offset: CssPosition;

/** Type for the offset style property */
export type Offset_StyleType = string | OffsetPath_StyleType |
{
    anchor?: OffsetAnchor_StyleType,
    distance?: CssLength,
    path?: OffsetPath_StyleType,
    position?: CssPosition,
    rotate?: OffsetRotate_StyleType,
}
```

The `offset` property can be specified as a string, as a keyword or as an object. The fields of the object correspond to the extended types of the following longhand properties:

| Field | CSS longhand property |
| :--- | :--- |
| anchor | [offset-anchor](#offset-anchor) |
| distance | [offset-distance](#offset-distance) |
| path | [offset-path](#offset-path) |
| position | [offset-position](#offset-position) |
| rotate | [offset-rotate](#offset-rotate) |

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [CssPosition](/mimcss/reference.html#modules/coretypes.html#cssposition)

#### offset-anchor

```tsx
offseAnchor: OffsetAnchor_StyleType;

/** Type for the offset-anchor style property */
export type OffsetAnchor_StyleType = "auto" | CssPosition;
```

**See Also:** [CssPosition](/mimcss/reference.html#modules/coretypes.html#cssposition)

#### offset-distance

```tsx
offsetDistance: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### offset-path

```tsx
offsePath: OffsetPath_StyleType;

/** Type for offset-path style property */
export type OffsetPath_StyleType = "none" | IRayProxy | IUrlProxy | BasicShape | GeometryBoxKeyword |
    [GeometryBoxKeyword, BasicShape];
```

**See Also:** [IRayProxy](/mimcss/reference.html#interfaces/coretypes_.irayproxy.html), [IUrlProxy](/mimcss/reference.html#interfaces/coretypes_.iurlproxy.html), [BasicShape](/mimcss/reference.html#modules/extratypes.html#basicshape), [GeometryBoxKeyword](/mimcss/reference.html#modules/coretypes.html#geometryboxkeyword)

#### offset-position

```tsx
offsetPosition: CssPosition;
```

**See Also:** [CssPosition](/mimcss/reference.html#modules/coretypes.html#cssposition)

#### offset-rotate

```tsx
offsetRotate: CssPosition;

/** Type for the offset-rotate style property */
export type OffsetRotate_StyleType = "auto" | "reverse" | CssAngle | ["auto" | "reverse", CssAngle];
```

**See Also:** [CssAngle](/mimcss/reference.html#modules/numerictypes.html#cssangle)

#### opacity

```tsx
opacity: CssPercent;
```

**See Also:** [CssPercent](/mimcss/reference.html#modules/coretypes.html#csspercent)

#### order

```tsx
order: CssNumber;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### orphans

```tsx
orphans: CssNumber;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### outline

```tsx
outline: Border_StyleType;
```

**See Also:** [border property](#border)

#### outline-color

```tsx
outlineColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### outline-offset

```tsx
outlineOffset: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### outline-style

```tsx
outlineStyle: BorderStyle_StyleType;
```

**See Also:** [border-style property](#border-style)

#### outline-width

```tsx
outlineWidth: BorderWidth_StyleType;
```

**See Also:** [border-width property](#border-width)

#### overflow

```tsx
overflow: Overflow_StyleType;

/** Type for the overflow style property */
export type Overflow_StyleType = OneOrPair<Overflow_Single_StyleType>;

/** Type for the overflow-x/y style property */
export type Overflow_Single_StyleType = "visible" | "hidden" | "clip" | "scroll" | "auto";
```

**See Also:** [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair)

#### overflow-anchor

```tsx
overflowAnchor: OverflowAnchor_StyleType;

/** Type for the overflow-anchor style property */
export type OverflowAnchor_StyleType = "auto" | "none";
```

#### overflow-block

```tsx
overflowBlock: Overflow_Single_StyleType;
```

**See Also:** [overflow property](#overflow)

#### overflow-inline

```tsx
overflowInline: Overflow_Single_StyleType;
```

**See Also:** [overflow property](#overflow)

#### overflow-wrap

```tsx
overflowWrap: OverflowWrap_StyleType;

/** Type for the overflow-wrap style property */
export type OverflowWrap_StyleType = "normal" | "break-word" | "anywhere";
```

#### overflow-x

```tsx
overflowX: Overflow_Single_StyleType;
```

**See Also:** [overflow property](#overflow)

#### overflow-y

```tsx
overflowY: Overflow_Single_StyleType;
```

**See Also:** [overflow property](#overflow)

#### overscroll-behavior

```tsx
overscrollBehavior: OverscrollBehavior_StyleType;

/** Type for the overscroll-behavior style property */
export type OverscrollBehavior_StyleType = OneOrPair<OverscrollBehavior_Single_StyleType>;

/** Type for the overscroll-behavior-x/y style property */
export type OverscrollBehavior_Single_StyleType = "contain" | "none" | "auto";
```

**See Also:** [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair)

#### overscroll-behavior-block

```tsx
overscrollBehaviorBlock: OverscrollBehavior_Single_StyleType;
```

**See Also:** [overscroll-behavior property](#overscroll-behavior)

#### overscroll-behavior-inline

```tsx
overscrollBehaviorInline: OverscrollBehavior_Single_StyleType;
```

**See Also:** [overscroll-behavior property](#overscroll-behavior)

#### overscroll-behavior-x

```tsx
overscrollBehaviorX: OverscrollBehavior_Single_StyleType;
```

**See Also:** [overscroll-behavior property](#overscroll-behavior)

#### overscroll-behavior-y

```tsx
overscrollBehaviorY: OverscrollBehavior_Single_StyleType;
```

**See Also:** [overscroll-behavior property](#overscroll-behavior)

#### padding

```tsx
padding: OneOrBox<CssLength>;
```

The `padding` property can be specified as a single `<length>` value or two-, three- or four-element tuple of `<length>` values.

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### padding-block-end

```tsx
paddingBlockEnd: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### padding-block-start

```tsx
paddingBlockStart: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### padding-bottom

```tsx
paddingBottom: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### padding-inline-end

```tsx
paddingInlineEnd: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### padding-inline-start

```tsx
margIninlineStart: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### padding-left

```tsx
paddingLeft: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### padding-right

```tsx
paddingRight: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### padding-top

```tsx
paddingTop: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### paint-order

```tsx
paintOrder: PaintOrder_StyleType;

/** Type for the paint-order style property */
export type PaintOrder_StyleType = "normal" | PaintOrder_Keyword |
    [PaintOrder_Keyword, PaintOrder_Keyword?, PaintOrder_Keyword?];

/** Type for the paint-order style property */
export type PaintOrder_Keyword = "fill" | "stroke" | "markers";
```

#### page-break-after

```tsx
pageBreakAfter: BreakAfter_StyleType;
```

**See Also:** [break-after](#break-after)

#### page-break-before

```tsx
pageBreakBefore: BreakBefore_StyleType;
```

**See Also:** [break-before](#break-before)

#### page-break-inside

```tsx
pageBreakInside: BreakInside_StyleType;
```

**See Also:** [break-inside](#break-inside)

#### perspective

```tsx
perspective: Perspective_StyleType;

/** Type for the perspective style property */
export type Perspective_StyleType = "none" | CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### perspective-origin

```tsx
perspectiveOrigin: PerspectiveOrigin_StyleType;

/** Type for the perspective-origin style property */
export type PerspectiveOrigin_StyleType = HorizontalPositionKeyword | VerticalPositionKeyword | CssLength |
    [Extended<HorizontalPositionKeyword | CssLength>, Extended<VerticalPositionKeyword | CssLength>];
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [CssPosition](/mimcss/reference.html#modules/coretypes.html#cssposition), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### place-content

```tsx
placeContent: PlaceContent_StyleType;

/** Type for the place-content style property */
export type PlaceContent_StyleType = AlignContent_StyleType | [Extended<AlignContent_StyleType>, Extended<JustifyContent_StyleType>];
```

**See Also:** [align-content](#align-content), [justify-content](#justify-content), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### place-items

```tsx
placeItems: PlaceItems_StyleType;

/** Type for the place-items style property */
export type PlaceItems_StyleType = AlignItems_StyleType | [Extended<AlignItems_StyleType>, Extended<JustifyItems_StyleType>];
```

**See Also:** [align-items](#align-items), [justify-items](#justify-items), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### place-self

```tsx
placeSelf: PlaceSelf_StyleType;

/** Type for the place-self style property */
export type PlaceSelf_StyleType = AlignSelf_StyleType | [Extended<AlignSelf_StyleType>, Extended<JustifySelf_StyleType>];
```

**See Also:** [align-self](#align-self), [justify-self](#justify-self), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### pointer-events

```tsx
pointerEvents: PointerEvents_StyleType;

/** Type for the pointer-events style property */
export type PointerEvents_StyleType = "auto" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" |
    "painted" | "fill" | "stroke" | "all";
```

#### position

```tsx
position: Position_StyleType;

/** Type for the position style property */
export type Position_StyleType = "static" | "relative" | "absolute" | "sticky" | "fixed";
```

#### quotes

```tsx
quotes: Quotes_StyleType;

/** Type for the quotes style property */
export type Quotes_StyleType = "none" | "auto" | Extended<string>[];
```

**See Also:** [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### resize

```tsx
resize: Resize_StyleType;

/** Type for the resize style property */
export type Resize_StyleType = "none" | "both" | "horizontal" | "vertical" | "block" | "inline";
```

#### right

```tsx
right: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### rotate

```tsx
rotate: Rotate_StyleType;

/** Type for rotate style property */
export type Rotate_StyleType = "none" | ["x" | "y" | "z", Extended<CssAngle>] |
    [Extended<CssNumber>, Extended<CssNumber>, Extended<CssNumber>, Extended<CssAngle>];
```

**See Also:** [CssAngle](/mimcss/reference.html#modules/numerictypes.html#cssangle), [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### row-gap

```tsx
rowGap: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scale

```tsx
scale: Scale_StyleType;

/** Type for the scale style property */
export type Scale_StyleType = "none" | CssNumber |
    [Extended<CssNumber>, Extended<CssNumber>?, Extended<CssNumber>?];
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### scrollbar-color

```tsx
scrollbarColor: ScrollbarColor_StyleType;

/** Type for the scrollbar-color style property */
export type ScrollbarColor_StyleType = "auto" | "dark" | "light" |
    [Extended<CssColor>, Extended<CssColor>];
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### scrollbar-width

```tsx
scrollbarWidth: ScrollbarColor_StyleType;

/** Type for the scrollbar-width style property */
export type ScrollbarWidth_StyleType = "auto" | "thin" | "none";
```

#### scroll-behavior

```tsx
scrollBehavior: ScrollBehavior_StyleType;

/** Type for the scroll-behavior style property */
export type ScrollBehavior_StyleType = "auto" | "smooth";
```

#### scroll-margin

```tsx
scrollMargin: OneOrBox<CssLength>;
```

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-margin-block

```tsx
scrollMarginBlock: OneOrPair<CssLength>;
```

**See Also:** [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-margin-block-end

```tsx
scrollMarginBlockEnd: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-margin-block-start

```tsx
scrollMarginBlockStart: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-margin-bottom

```tsx
scrollMarginBottom: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-margin-inline

```tsx
scrollMarginInline: OneOrPair<CssLength>;
```

**See Also:** [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-margin-inline-end

```tsx
scrollMarginInlineEnd: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-margin-inline-start

```tsx
scrollMarginInlineStart: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-margin-left

```tsx
scrollMarginLeft: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-margin-right

```tsx
scrollMarginRight: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-margin-top

```tsx
scrollMarginTop: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-padding

```tsx
scrollPadding: OneOrBox<CssLength>;
```

**See Also:** [OneOrBox](/mimcss/reference.html#modules/coretypes.html#oneorbox), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-padding-block

```tsx
scrollPaddingBlock: OneOrPair<CssLength>;
```

**See Also:** [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-padding-block-end

```tsx
scrollPaddingBlockEnd: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-padding-block-start

```tsx
scrollPaddingBlockStart: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-padding-bottom

```tsx
scrollPaddingBottom: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-padding-inline

```tsx
scrollPaddingInline: OneOrPair<CssLength>;
```

**See Also:** [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-padding-inline-end

```tsx
scrollPaddingInlineEnd: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-padding-inline-start

```tsx
scrollPaddingInlineStart: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-padding-left

```tsx
scrollPaddingLeft: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-padding-right

```tsx
scrollPaddingRight: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-padding-top

```tsx
scrollPaddingTop: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### scroll-snap-align

```tsx
scrollSnapAlign: ScrollSnapAlign_StyleType;

/** Type for the scroll-snap-align style property */
export type ScrollSnapAlign_StyleType = OneOrPair<"none" | "start" | "end" | "center">;
```

**See Also:** [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair)

#### scroll-snap-stop

```tsx
scrollSnapStop: ScrollSnapStop_StyleType;

/** Type for the scroll-snap-stop style property */
export type ScrollSnapStop_StyleType = "normal" | "always";
```

#### scroll-snap-type

```tsx
scrollSnapType: ScrollSnapType_StyleType;

/** Type for the scroll-snap-type style property */
export type ScrollSnapType_StyleType = "none" |
    [Extended<"x" | "y" | "block" | "inline" | "both">, Extended<"mandatory" | "proximity">];
```

**See Also:** [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### shape-image-threshold

```tsx
shapeImageThreshold: CssNumber;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### shape-margin

```tsx
shapeMargin: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### shape-outside

```tsx
shapeOutside: ShapeOutside_StyleType;

/** Type for shape-outside style property */
export type ShapeOutside_StyleType = IUrlProxy | BasicShape | GeometryBoxKeyword | CssImage;
```

**See Also:** [IUrlProxy](/mimcss/reference.html#interfaces/coretypes_.iurlproxy.html), [BasicShape](/mimcss/reference.html#modules/extratypes.html#basicshape), [GeometryBoxKeyword](/mimcss/reference.html#modules/coretypes.html#geometryboxkeyword), [CssImage](/mimcss/reference.html#modules/coretypes.html#cssimage)

#### shape-rendering

```tsx
shapeRendering: ShapeOutside_StyleType;

/** Type for the shape-rendering style property */
export type ShapeRendering_StyleType = "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision";
```

#### stop-color

```tsx
stopColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### stop-opacity

```tsx
stopOpacity: CssNumber;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### stroke

```tsx
stroke: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### tab-size

```tsx
tabSize: CssNumber | ILengthProxy;
```

If you want to specify the value as a `<length>` type - that is, with one of the length units - you have to use one of the unit functions such as `px()`, `em()`, etc.

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### table-layout

```tsx
tableLayout: TableLayout_StyleType;

/** Type for the table-layout style property */
export type TableLayout_StyleType = "auto" | "fixed";
```

#### text-align

```tsx
textAlign: TextAlign_StyleType;

/** Type for the text-align style property */
export type TextAlign_StyleType = "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
```

#### text-align-last

```tsx
textLast: TextAlignLast_StyleType;

/** Type for the text-align-last style property */
export type TextAlignLast_StyleType = "auto" | "start" | "end" | "left" | "right" | "center" | "justify";
```

#### text-anchor

```tsx
textAnchor: TextAnchor_StyleType;

/** Type for the text-anchor style property */
export type TextAnchor_StyleType = "start" | "middle" | "end";
```

#### text-combine-upright

```tsx
textCombineUpright: TextCombineUpright_StyleType;

/** Type for the text-combine-upright style property */
export type TextCombineUpright_StyleType = "none" | "all" | "digits" | number;
```

#### text-decoration

```tsx
textDecoration: TextDecoration_StyleType;

/**
 * Type for the text-decoration style property. If a number is specified, it will be interpreted
 * as color - not as thickness.
 */
export type TextDecoration_StyleType = TextDecorationLine_StyleType | TextDecorationStyle_StyleType |
    CssColor | TextDecorationThickness_StyleType |
    {
        line?: Extended<TextDecorationLine_StyleType>,
        style?: Extended<TextDecorationStyle_StyleType>,
        color?: Extended<CssColor>,
        thickness?: Extended<TextDecorationThickness_StyleType>,
    };
```

The `text-decoration` property can be specified as a string, as a number or as an object. The fields of the object correspond to the extended types of the following longhand properties:

| Field | CSS longhand property |
| :--- | :--- |
| line | [text-decoration-line](#text-decoration-line) |
| style | [text-decoration-style](#text-decoration-style) |
| color | [text-decoration-color](#text-decoration-color) |
| thickness | [text-decoration-thickness](#text-decoration-thickness) |

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### text-decoration-color

```tsx
textDecorationColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### text-decoration-line

```tsx
textDecorationLine: TextDecorationLine_StyleType;

/** Type for the text-decoration-line style property */
export type TextDecorationLine_StyleType = "none" | "spelling-error" | "grammar-error" |
    OneOrMany<"underline" | "overline" | "line-through">;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany)

#### text-decoration-style

```tsx
textDecorationStyle: TextDecorationStyle_StyleType;

/** Type for the text-decoration-style style property */
export type TextDecorationStyle_StyleType = "solid" | "double" | "dotted" | "dashed" | "wavy";
```

#### text-decoration-skip-ink

```tsx
textDecorationSkipInk: TextDecorationSkipInk_StyleType;

/** Type for the text-decoration-skip-ink style property */
export type TextDecorationSkipInk_StyleType = "none" | "auto" | "all";
```

#### text-decoration-thickness

```tsx
textDecorationThickness: TextDecorationThickness_StyleType;

/** Type for the text-decoration-thickness style property */
export type TextDecorationThickness_StyleType = "auto" | "from-font" | CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### text-emphasis

```tsx
textEmphasis: TextEmphasis_StyleType;

// /** Type for the text-emphasis style property */
export type TextEmphasis_StyleType = TextEmphasisStyle_StyleType | CssColor |
    [Extended<TextEmphasisStyle_StyleType>, Extended<CssColor>];
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor), [text-emphasis-style](text-emphasis-style), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### text-emphasis-position

```tsx
textEmphasisPosition: TextEmphasisPosition_StyleType;

/** Type for the text-emphasis-position style property */
export type TextEmphasisPosition_StyleType = "over left" | "over right" | "under left" | "under right";
```

#### text-emphasis-style

```tsx
textEmphasisStyle: TextEmphasisStyle_StyleType;

/** Type for the text-emphasis-style style property */
export type TextEmphasisStyle_StyleType = "none" | TextEmphasisShape | TextEmphasisFill |
    [Extended<TextEmphasisFill>, Extended<TextEmphasisShape>];

/** Shape for the text-emphasis-style style property */
export type TextEmphasisShape = "dot" | "circle" | "double-circle" | "triangle" | "sesame" | string;

/** Fill option for the text-emphasis-style style property */
export type TextEmphasisFill = "filled" | "open";
```

**See Also:** [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### text-fill-color

```tsx
textFillColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### text-indent

```tsx
textIndent: TextIndent_StyleType;

/** Type for the text-indent style property */
export type TextIndent_StyleType = CssLength |
    [Extended<CssLength>, Extended<OneOrMany<"each-line" | "hanging" | "each-line hanging">>];
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [Extended](/mimcss/reference.html#modules/coretypes.html#extended), [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany)

#### text-justify

```tsx
textJustify: TextJustify_StyleType;

/** Type for the text-justify style property */
export type TextJustify_StyleType = "auto" | "inter-character" | "inter-word" | "none";
```

#### text-orientation

```tsx
textOrientation: TextOrientation_StyleType;

/** Type for the text-orientation style property */
export type TextOrientation_StyleType = "mixed" | "upright" | "sideways";
```

#### text-overflow

```tsx
textOverflow: TextOverflow_StyleType;

/** Type for the text-overflow style property */
export type TextOverflow_StyleType = OneOrPair<"clip" | "ellipsis" | "fade" | string>;
```

**See Also:** [OneOrPair](/mimcss/reference.html#modules/coretypes.html#oneorpair)

#### text-shadow

```tsx
textShadow: TextShadow_StyleType;

/** Type for the text-shadow style property */
export type TextShadow_StyleType = OneOrMany<TextShadow_Single>;

/** Type for the single value of the text-shadow style property */
export type TextShadow_Single = "none" | string |
    {
        x: Extended<CssLength>,
        y: Extended<CssLength>,
        blur?: Extended<CssLength>,
        color?: Extended<CssColor>,
    };
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [Extended](/mimcss/reference.html#modules/coretypes.html#extended), [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### text-size-adjust

```tsx
textSizeAdjust: TextSizeAdjust_StyleType;

/** Type for the text-size-adjust style property */
export type TextSizeAdjust_StyleType = "none" | "auto" | CssPercent;
```

**See Also:** [CssPercent](/mimcss/reference.html#modules/coretypes.html#csspercent)

#### text-stroke

```tsx
textStroke: TextStroke_StyleType;
```

The `text-stroke` property is a shorthand property that can be specified as a number, as a keyword, as a tuple or as an object. The fields of the object correspond to the extended types of the following longhand properties:

| Field | CSS longhand property |
| :--- | :--- |
| width | [text-stroke-width](#text-stroke-width) |
| color | [text-stroke-color](#text-stroke-color) |


**See Also:** [TextStroke_StyleType](/mimcss/reference.html#modules/styletypes.html#textstroke_styletype)

#### text-stroke-color

```tsx
textStrokeColor: CssColor;
```

**See Also:** [CssColor](/mimcss/reference.html#modules/colortypes.html#csscolor)

#### text-stroke-width

```tsx
textStrokeWidth: LineWidth;
```

**See Also:** [LineWidth](/mimcss/reference.html#modules/styletypes.html#linewidth)

#### text-transform

```tsx
textTransform: TextTransform_StyleType;

/** Type for the text-transform style property */
export type TextTransform_StyleType = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana";
```

#### text-underline-position

```tsx
textUnderlinePosition: TextUnderlinePosition_StyleType;

/** Type for the text-underline-position style property */
export type TextUnderlinePosition_StyleType = "auto" | "under" | "left" | "right" | "auto-pos" | "above" | "below";
```

#### top

```tsx
top: CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### touch-action

```tsx
touchAction: TouchAction_StyleType;

/** Type for the touch-action style property */
export type TouchAction_StyleType = "auto" | "none" | "manipulation" |
    "pan-x" | "pan-left" | "pan-right" | "pan-y" | "pan-up" | "pan-down" | "pinch-zoom" |
    "pan-x pinch-zoom" | "pan-left pinch-zoom" | "pan-right pinch-zoom" | "pan-y pinch-zoom" | "pan-up pinch-zoom" | "pan-down pinch-zoom" |
    "pan-x pan-y" | "pan-x pan-y pinch-zoom" | "pan-x pan-up" | "pan-x pan-up pinch-zoom" | "pan-x pan-down" | "pan-x pan-down pinch-zoom" |
    "pan-y pan-left" | "pan-y pan-left pinch-zoom" | "pan-y pan-right" | "pan-y pan-right pinch-zoom" |
    "pan-left pan-up" | "pan-left pan-up pinch-zoom" | "pan-left pan-down" | "pan-left pan-down pinch-zoom" |
    "pan-right pan-up" | "pan-right pan-up pinch-zoom" | "pan-right pan-down" | "pan-right pan-down pinch-zoom" |
    "pan-up pan-left" | "pan-up pan-left pinch-zoom" | "pan-up pan-right" | "pan-up pan-right pinch-zoom" |
    "pan-down pan-left" | "pan-down pan-left pinch-zoom" | "pan-down pan-right" | "pan-down pan-right pinch-zoom";
```

#### transform

```tsx
transform: Transform_StyleType;

/** Type for transform style property */
export type Transform_StyleType = "none" | string | OneOrMany<ITransformProxy>;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [ITransformProxy](/mimcss/reference.html#interfaces/coretypes_.itransformproxy.html)

#### transform-box

```tsx
transformBox: TransformBox_StyleType;

/** Type for transform-box style property */
export type TransformBox_StyleType = "content-box" | "border-box" | "fill-box" | "stroke-box" | "view-box";
```

#### transform-origin

```tsx
transformOrigin: TransformOrigin_StyleType;

/** Type for transform-origin style property */
export type TransformOrigin_StyleType = HorizontalPositionKeyword | VerticalPositionKeyword | CssLength |
    [Extended<HorizontalPositionKeyword | CssLength>, Extended<VerticalPositionKeyword | CssLength>, Extended<CssLength>?];
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [CssPosition](/mimcss/reference.html#modules/coretypes.html#cssposition), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### transform-style

```tsx
transformStyle: TransformStyle_StyleType;

/** Type for transform-style style property */
export type TransformStyle_StyleType = "flat" | "preserve-3d";
```

#### transition

```tsx
transition: Transition_StyleType;

/** Type for transition style property */
export type Transition_StyleType = OneOrMany<Transition_Single>;

/** Type for single transition */
export type Transition_Single = string |
    {
        property?: Extended<TransitionProperty_Single>;
        duration?: Extended<CssTime>;
        func?: Extended<TimingFunction_Single>;
        delay?: Extended<CssTime>;
    };
```

The `transition` property can be specified as a string or as an object. The fields of the object correspond to the extended types of the following longhand properties:

| Field | CSS longhand property |
| :--- | :--- |
| property | [transition-property](#transition-property) |
| duration | [transition-duration](#transition-duration) |
| func | [transition-timing-function](#transition-func) |
| delay | [transition-delay](#transition-delay) |

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [Extended](/mimcss/reference.html#modules/coretypes.html#extended), [CssTime](/mimcss/reference.html#modules/numerictypes.html#csstime)

#### transition-delay

```tsx
transitionDelay: OneOrMany<CssTime>;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [CssTime](/mimcss/reference.html#modules/numerictypes.html#csstime)

#### transition-duration

```tsx
transitionDuration: OneOrMany<CssTime>;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [CssTime](/mimcss/reference.html#modules/numerictypes.html#csstime)

#### transition-property

```tsx
transitionProperty: TransitionProperty_StyleType;

/** Type for transition-property style property */
export type TransitionProperty_StyleType = OneOrMany<TransitionProperty_Single>;

/** Type for single transition-property */
export type TransitionProperty_Single = "none" | "all" | keyof IStyleset;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [IStyleset](/mimcss/reference.html#interfaces/styletypes_.icssstyleset.html)

#### transition-timing-function

```tsx
transitionTimingFunction: TransitionTimingFunction_StyleType;

/** Type for simple animation timing functions - those that don't have parameters */
export type TimingFunction_Simple = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end";

/** Type for step animation timing function position */
export type TimingFunction_StepPosition = "jump-start" | "jump-end" | "jump-none" | "jump-both" | "start" | "end";

/** Type for step animation timing function */
export type TimingFunction_Step = number | [Extended<number>, Extended<TimingFunction_StepPosition>?];

/** Type for Bezier animation timing function */
export type TimingFunction_Bezier = [Extended<number>, Extended<number>, Extended<number>, Extended<number>];

/** Type for transition-timing-function style property */
export type TransitionTimingFunction_StyleType = OneOrMany<TimingFunction_Single>;

/** Type for single animation timing function */
export type TimingFunction_Single = TimingFunction_Simple | TimingFunction_Step | TimingFunction_Bezier;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [IStyleset](/mimcss/reference.html#interfaces/styletypes_.icssstyleset.html), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### translate

```tsx
translate: Translate_StyleType;

/** Type for the translate style property */
export type Translate_StyleType = "none" | CssLength |
    [Extended<CssLength>, Extended<CssLength>, Extended<CssLength>?];
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength), [Extended](/mimcss/reference.html#modules/coretypes.html#extended)

#### unicode-bidi

```tsx
unicodeBidi: UnicodeBidi_StyleType;

/** Type for the unicode-bidi style property */
export type UnicodeBidi_StyleType = "normal" | "embed" | "isolate" | "bidi-override" | "isolate-override" | "plaintext";
```

#### user-select

```tsx
userSelect: UserSelect_StyleType;

/** Type for the user-select style property */
export type UserSelect_StyleType = "auto" | "text" | "none" | "contain" | "all";
```

#### vertical-align

```tsx
verticalAlign: VerticalAlign_StyleType;

/** Type for the vertical-align style property */
export type VerticalAlign_StyleType = "baseline" | "sub" | "super" | "text-top" | "text-bottom" |
    "middle" | "top" | "bottom" | CssLength;
```

#### visibility

```tsx
visibility: Visibility_StyleType;

/** Type for the visibility style property */
export type Visibility_StyleType = "visible" | "hidden" | "collapse";
```

#### vector-effect

```tsx
vectorEffect: VectorEffect_StyleType;

/** Type for the vector-effect style property */
export type VectorEffect_StyleType = "none" | "non-scaling-stroke" | "non-scaling-size" | "non-rotation" | "fixed-position";
```

#### white-space

```tsx
whiteSpace: WhiteSpace_StyleType;

/** Type for the white-space style property */
export type WhiteSpace_StyleType = "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line" | "break-spaces";
```

#### widows

```tsx
widows: CssNumber;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### width

```tsx
width: CssSize;
```

**See Also:** [CssSize](/mimcss/reference.html#modules/numerictypes.html#csssize)

#### will-change

```tsx
willChange: WillChange_StyleType;

/** Type for will-change style property */
export type WillChange_StyleType = "auto" | OneOrMany<"scroll-position" | "contents" | Exclude<keyof IStyleset,"willChange">>;
```

**See Also:** [OneOrMany](/mimcss/reference.html#modules/coretypes.html#oneormany), [IStyleset](/mimcss/reference.html#interfaces/styletypes_.icssstyleset.html)

#### word-break

```tsx
wordBreak: WordBreak_StyleType;

/** Type for the word-break style property */
export type WordBreak_StyleType = "normal" | "break-all" | "keep-all" | "break-word";
```

#### word-spacing

```tsx
wordSpacing: WordSpacing_StyleType;

/** Type for the word-spacing style property */
export type WordSpacing_StyleType = "normal" | CssLength;
```

**See Also:** [CssLength](/mimcss/reference.html#modules/numerictypes.html#csslength)

#### writing-mode

```tsx
writingMode: WritingMode_StyleType;

/** Type for the writing-mode style property */
export type WritingMode_StyleType = "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";
```

#### z-index

```tsx
zIndex: ZIndex_StyleType;

/** Type for the z-index style property */
export type ZIndex_StyleType = "auto" | CssNumber;
```

**See Also:** [CssNumber](/mimcss/reference.html#modules/numerictypes.html#cssnumber)

#### zoom

```tsx
zoom: Zoom_StyleType;

/** Type for the zoom style property */
export type Zoom_StyleType = "normal" | "reset" | CssPercent;
```

**See Also:** [CssPercent](/mimcss/reference.html#modules/coretypes.html#csspercent)





<script>
    // prepare array of all letters
    var allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // prepare set of letters for which we don't have style properties starting with this letter
    var noPropLetters = new Set();
    noPropLetters.add( "K");
    noPropLetters.add( "N");
    noPropLetters.add( "X");
    noPropLetters.add( "Y");

    // find all <h4> elements
    var allPropElms = Array.from( document.getElementsByTagName( "h4"));

    // prepare map of all style property names to their elements
    var allPropNames = new Map();

    var currFirstLetter = "";

    allPropElms.forEach( elmProp =>
    {
        var name = elmProp.id;
        allPropNames.set( name, elmProp);

        // add options to the search dropdown
        var elmOption = document.createElement( "option")
        elmOption.innerText = name;
        propertySearchDropdown.appendChild( elmOption);

        // check if we have a new first letter
        var firstLetter = name.substr( 0, 1);
        if (firstLetter !== currFirstLetter)
        {
            currFirstLetter = firstLetter;
            createAlphabet( firstLetter.toUpperCase(), elmProp);
        }

        // add "to top" link
        var elmTop = document.createElement( "a");
        elmTop.href = "#search-style-properties";
        elmTop.innerText = "top";
        elmTop.className = "linkFromProp";
        elmProp.appendChild( elmTop);

        // add "MDN" link
        var elmMDN = document.createElement( "a");
        elmMDN.href = "https://developer.mozilla.org/en-US/docs/Web/CSS/" + name;
        elmMDN.target = "mdn";
        elmMDN.innerText = "MDN";
        elmMDN.className = "linkFromProp";
        elmProp.appendChild( elmMDN);
    });

    function createAlphabet( selectedLetter, elm)
    {
        var elmAlphabet = document.createElement( "div");
        elmAlphabet.style = "font-weight: bold; background-color: blue; padding: 6px; margin: 1.2em 1em 0";
        elm.parentNode.insertBefore( elmAlphabet, elm);

        for( let letter of allLetters)
        {
            var elmLetter;
            var letterLower = letter.toLowerCase();
            if (noPropLetters.has( letter))
            {
                elmLetter = document.createElement( "span");
                elmLetter.style.fontSize = "large";
                elmLetter.style.color = "lightgrey";
            }
            else if (letter === selectedLetter)
            {
                elmLetter = document.createElement( "span");
                elmLetter.id = letterLower;
                elmLetter.style.fontSize = "xx-large";
                elmLetter.style.color = "yellow";
            }
            else
            {
                elmLetter = document.createElement( "a");
                elmLetter.href = "#" + letterLower;
                elmLetter.style.fontSize = "large";
                elmLetter.style.color = "orange";
            }

            elmLetter.innerText = letter;
            elmLetter.style.marginRight = "0.6rem";
            elmAlphabet.appendChild( elmLetter);
        }
    }

    function gotoSelectedStyleProperty()
    {
        var prop = propertySearchDropdown.value;
        if (prop && prop != propertySearchPlaceholder)
        {
            propertySearchDropdown.value = propertySearchPlaceholder;
            window.location.hash = prop;
        }
    }
</script>


