---
layout: mimcss-reference
unit: 6
title: "Mimcss Reference: Helper Functions"
---

# Mimcss Reference: Helper Functions

This page describes types and functions that are used to work with images, filters, basic shapes and transforms in CSS properties.

- [Images](#images)
    - [Gradients](#gradients)
        - [Linear Gradients](#linear-gradients)
        - [Radial Gradients](#radial-gradients)
        - [Conic Gradients](#conic-gradients)
- [Filters](#filters)
- [Basic Shapes](#basic-shapes)
- [Transforms](#transforms)

## Images

Mimcss provides types and functions that mimic the signatures of the CSS `<image>` functions:

### Gradients
The `gradient` object implements the `IGradient` interface that contains properties named after the CSS functions defined in the `<gradient>` CSS type:

```tsx
export interface IGradient
{
    readonly linear: ILinearGradient;
    readonly repeatingLinear: ILinearGradient;
    readonly radial: IRadialGradient;
    readonly repeatingRadial: IRadialGradient;
    readonly conic: IConicGradient;
    readonly repeatingConic: IConicGradient;
}

export let gradient: IGradient;
```

The `ILinearGradient`, `IRadialGradient` and `IConicGradient` interfaces are *callable* interfaces meaning that can be called as functions. These functions accept the variable array of parameters defining color stops and hints. In addition, these interfaces expose methods that can be called to set optional parameters further defining the behavior of the gradients.

#### Linear Gradients
The `linear` and `repeatingLinear` properties of the `IGradient` interface return the `ILinearGradient` interface:

```tsx
export interface ILinearGradient
{
    (...stopsOrHints: GradientStopOrHint[]): ImageProxy;
    to( angle: LinearGradAngle): ILinearGradient;
}

export type LinearGradAngle = Extended<CssAngle> | LinearGradSideOrCorner;

export type LinearGradSideOrCorner = "bottom" | "left" | "top" | "right" |
    "top left" | "top right" | "bottom right" | "bottom left" |
    "left top" | "right top" | "left bottom" | "right bottom";
```

The `to()` method allows setting the angle of the linear gradient.

**Examples**

```tsx
class MyStyles extends css.StyleDefinition
{
    // Simple linear gradient going from top to bottom.
    cls1 = css.$class({
        backgroundImage: css.gradient.linear( "red", "blue")
    })

    // Linear gradient going towards the top with color hint at 30%. Note that hints are specified
    // as single number arrays and not just as numbers.
    cls2 = css.$class({
        backgroundImage: css.gradient.linear.to("top")( "red", [30], "blue")
    })

    // Linear gradient going towards the right-bottom corner.
    cls3 = css.$class({
        backgroundImage: css.gradient.linear.to("bottom right")( "red", "blue")
    })

    // Repeating linear gradient going towards the right side. The yellow color stop is at
    // 25% and the second red stop is at 50%.
    cls4 = css.$class({
        backgroundImage: css.gradient.repeatingLinear.to("right")("red", ["yellow", 25], ["red", 50])
    })

    // Repeating linear gradient going towards the right side. The yellow color stop is at
    // 25% and the second red stop is at 50%.
    cls5 = css.$class({
        backgroundImage: css.gradient.repeatingLinear.to("right")("red", ["yellow", 25], ["red", 50])
    })

    // Repeating linear gradient going with the angle of 45 degrees.
    cls6 = css.$class({
        backgroundImage: css.gradient.repeatingLinear.to(45)("red", ["yellow", 25], ["red", 50])
    })
}
```


#### Radial Gradients
The `radial` and `repeatingRadial` properties of the `IGradient` interface return the `IRadialGradient` interface:

```tsx
export interface IRadialGradient
{
    (...stopsOrHints: GradientStopOrHint[]): ImageProxy;
    circle( sizeOrExtent?: Extended<CssLength> | Extended<ExtentKeyword>): IRadialGradient;
    ellipse( sizeOrExtent?: [Extended<CssLength>, Extended<CssLength>] | Extended<ExtentKeyword>): IRadialGradient;
    extent( extent: Extended<ExtentKeyword>): IRadialGradient;
    at( pos: Extended<CssPosition>): IRadialGradient;
}

export type ExtentKeyword = "closest-corner" | "closest-side" | "farthest-corner" | "farthest-side";
```

The `circle()` method is used to indicate that the radial gradient will have circular shape. The size of the circle can be specified either as a radius or as one of the *extent* keywords.

The `ellipse()` method is used to indicate that the radial gradient will have elliptical shape. The size of the ellipse can be specified either as a two element tuple of radii or as one of the *extent* keywords.

The `extent()` method is used to specify the size of the radial gradient shape using one of the *extent* keywords. The shape will be elliptical by default.

The `at()` method is used to specify the position of the center of the gradient shape.

**Examples**

```tsx
class MyStyles extends css.StyleDefinition
{
    // Simple radial gradient with the center positioned at the center of the box
    cls1 = css.$class({
        backgroundImage: css.gradient.radial( "red", "blue")
    })

    // Radial gradient with the center positioned at the middle of the right side
    cls2 = css.$class({
        backgroundImage: css.gradient.radial.at(["right", "center"])( "red", [30], "blue")
    })

    // Circular radial gradient with absolute size.
    cls3 = css.$class({
        backgroundImage: css.gradient.radial.circle(css.Len.px(50))( "red", "blue", "yellow")
    })

    // Elliptical radial gradient with size defined by the closest corner. The yellow color stop is at
    // 50% and the second red stop is at 90%.
    cls4 = css.$class({
        backgroundImage: css.gradient.radial.ellipse("closest-corner")("red", ["yellow", 50], ["red", 90])
    })

    // Repeating circular radial gradient going up to the farthest side.
    cls5 = css.$class({
        backgroundImage: css.gradient.repeatingRadial.circle("farthest-side")
            ("red", ["yellow", 25], ["red", 50])
    })

    // Repeating circular radial gradient going up to the closest side positioned close to the
    // bottom left corner.
    cls6 = css.$class({
        backgroundImage: css.gradient.repeatingRadial.at(["left", 3.5, "bottom", 3.5])
            .circle(50)("red", ["yellow", 25], ["red", 50])
    })
}
```


#### Conic Gradients
The `conic` and `repeatingConic` properties of the `IGradient` interface return the `IConicGradient` interface:

```tsx
export interface IConicGradient
{
    (...stopsOrHints: GradientStopOrHint[]): ImageProxy;
    from( angle: Extended<CssAngle>): IConicGradient;
    at( pos: Extended<SimpleCssPosition>): IConicGradient;
}

export type ExtentKeyword = "closest-corner" | "closest-side" | "farthest-corner" | "farthest-side";
```

The `from()` method is used to specify the initial angle of the conic gradient.

The `at()` method is used to specify the position of the center of the conic shape.

**Examples**

```tsx
class MyStyles extends css.StyleDefinition
{
    // Conic gradient with the center positioned at the center of the box
    cls1 = css.$class({
        backgroundImage: css.gradient.conic( "red", "blue")
    })

    // Conic gradient with the center positioned at the middle of the right side
    cls2 = css.$class({
        backgroundImage: css.gradient.conic.at(["right", "center"])( "red", [30], "blue")
    })

    // Conic gradient starting with the angle of 30 degrees.
    cls3 = css.$class({
        backgroundImage: css.gradient.conic.from(30)( "red", "blue", "yellow")
    })

    // Conic gradient starting with the angle of 30 degrees and positioned at the middle of the
    // right side.
    cls4 = css.$class({
        backgroundImage: css.gradient.conic.from(30).at(["right", "center"])
            ("red", ["yellow", 50], ["red", 90])
    })
}
```


