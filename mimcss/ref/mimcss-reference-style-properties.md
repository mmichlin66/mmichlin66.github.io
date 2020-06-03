---
layout: mimcss-reference
unit: 7
title: "Mimcss Reference: Style Properties"
---

# Mimcss Reference: Style Properties

This page describes types of CSS style properties in alphabetical order.

<style>
.capital { font-size: 24px; font-weight: bold; }
table { display: block; }
th, td { padding: 2px 6px }
</style>

<br/>
&nbsp;<span id="a" class="capital">A</span>&nbsp;  [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

#### align-content

```tsx
export type AlignContentStyleType = "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" |
    "baseline" | "first baseline" | "last baseline" | "safe center" | "unsafe center" |
    "space-between" | "space-around" | "space-evenly";
```

#### align-items

```tsx
export type AlignItems_StyleType = "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" |
    "baseline" | "first baseline" | "last baseline" | "safe center" | "unsafe center";
```

#### align-self

```tsx
export type AlignSelf_StyleType = "auto" | "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" |
    "self-start" | "self-end" | "baseline" | "first baseline" | "last baseline" |
    "safe center" | "unsafe center";
```

#### alignment-baseline

```tsx
export type AlignmentBaseline_StyleType = "auto" | "baseline" | "before-edge" | "text-before-edge" |
    "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" |
    "hanging" | "mathematical" | "top" | "center" | "bottom";
```

#### animation

```tsx
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
export type AnimationDelay_StyleType = CssMultiTime;
```

The `animation-delay` property can be specified as a single vale or an array of values of the [Time](mimcss-reference-numeric-types.html#time-values) type.

#### animation-direction

```tsx
/** Type for animation-direction style property */
export type AnimationDirection_StyleType = OneOrMany<AnimationDirection_Single>;

/** Type for single animation direction */
export type AnimationDirection_Single = "normal" | "reverse" | "alternate" | "alternate-reverse";
```

The `animation-direction` property can be specified as a single keyword or an array of keywords.

#### animation-duration

```tsx
export type AnimationDuration_StyleType = CssMultiTime;
```

The `animation-duraton` property can be specified as a single vale or an array of values of the [Time](mimcss-reference-numeric-types.html#time-values) type.

#### animation-fill-mode

```tsx
/** Type for animation-fill-mode style property */
export type AnimationFillMode_StyleType = OneOrMany<AnimationDirection_Single>;

/** Type for single animation fill mode */
export type AnimationFillMode_Single = "none" | "forwards" | "backwards" | "both";
```

The `animation-fill-mode` property can be specified as a single keyword or an array of keywords.

#### animation-iteration-count

```tsx
/** Type for animation-iteration-count style property */
export type AnimationIterationCount_StyleType = OneOrMany<AnimationIterationCount_Single>;

/** Type for single animation iteration count */
export type AnimationIterationCount_Single = "infinite" | CssNumber;
```

The `animation-iteration-count` property can be specified as a single item or an array of items where each item is either a keyword or a number.

#### animation-play-state

```tsx
/** Type for animation-play-state style property */
export type AnimationPlayState_StyleType = OneOrMany<AnimationPlayState_Single>;

/** Type for single animation play state */
export type AnimationPlayState_Single = "paused" | "running";
```

The `animation-play-state` property can be specified as a single keyword or an array of keywords.

#### animation-timing-function

```tsx
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

The `animation-play-state` property can be specified as a single `TimingFunction_Single` item or an array of `TimingFunction_Single` items. Each item represents either a simple timing function using one of the `TimingFunction_Simple` keywords, or a step function using the `TimingFunction_Step` type, or a Bezier function using the `TimingFunction_Bezier` type.

A step function is represented either as a single number or as a two-element tuple where the first element is a number and the second element is one of the `TimingFunction_StepPosition` keywords.

A Bezier function is represented as a four element tuple where each element is a number.



<br/><br/>
[A](#a) &nbsp;<span id="b" class="capital">B</span>&nbsp; [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)



<br/><br/>
[A](#a) [B](#b) <span id="c" class="capital">C</span> [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)


