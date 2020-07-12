---
layout: mimcss-reference
unit: 7
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
- [Transforms](#transforms)
- [Basic Shapes](#basic-shapes)

## Images

Mimcss provides types and functions that mimic the signatures of the CSS `<image>` functions:

```tsx
/**
 * The ImageProxy interface represents an invocation of one of CSS functions that are used for
 * secifying images. This interface is returned from functions like: linearGradient(), paint(),
 * element(), etc.
 */
export interface IImageProxy extends IGenericProxy<"image"> {};

/**
 * The CssImage type represents a type used for CSS properties that accept the `<image>` type.
 */
export type CssImage = IUrlProxy | IImageProxy;



```

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

## Filters

Mimcss provides types and functions that mimic the functions of the `<filter-function>` CSS type:

```tsx
/**
 * The IFilterProxy function represents an invocation of one the CSS `<filter>` functions.
 */
export interface IFilterProxy extends IGenericProxy<"filter"> {};

export function brightness( amount: Extended<CssPercent>): IFilterProxy;

export function contrast( amount: Extended<CssPercent>): IFilterProxy;

export function grayscale( amount: Extended<CssPercent>): IFilterProxy;

export function invert( amount: Extended<CssPercent>): IFilterProxy;

export function opacity( amount: Extended<CssPercent>): IFilterProxy;

export function saturate( amount: Extended<CssPercent>): IFilterProxy;

export function sepia( amount: Extended<CssPercent>): IFilterProxy;

export function blur( radius: Extended<CssLength>): IFilterProxy;

export function dropShadow( x: Extended<CssLength>, y: Extended<CssLength>,
    color?: Extended<CssColor>, blur?: Extended<CssLength>,
    spread?: Extended<CssLength>): IFilterProxy;

export function hueRotate( amount: Extended<CssAngle>): IFilterProxy;
```

## Transforms

Mimcss provides types and functions that mimic the functions of the `<transform-function>` CSS type:

```tsx
/**
 * The ITransformProxy function represents an invocation of one the CSS `<basic-shape>` functions.
 */
export interface ITransformProxy extends IGenericProxy<"transform">;

export function matrix( a: Extended<CssNumber>, b: Extended<CssNumber>, c: Extended<CssNumber>,
    d: Extended<CssNumber>, tx: Extended<CssNumber>, ty: Extended<CssNumber>): ITransformProxy;

export function matrix3d(
    a1: Extended<CssNumber>, b1: Extended<CssNumber>, c1: Extended<CssNumber>, d1: Extended<CssNumber>,
    a2: Extended<CssNumber>, b2: Extended<CssNumber>, c2: Extended<CssNumber>, d2: Extended<CssNumber>,
    a3: Extended<CssNumber>, b3: Extended<CssNumber>, c3: Extended<CssNumber>, d3: Extended<CssNumber>,
    a4: Extended<CssNumber>, b4: Extended<CssNumber>, c4: Extended<CssNumber>, d4: Extended<CssNumber>,
): ITransformProxy;

export function perspective( d: Extended<CssLength>): ITransformProxy;

export function rotate( a: Extended<CssAngle>): ITransformProxy;

export function rotateX( a: Extended<CssAngle>): ITransformProxy;

export function rotateY( a: Extended<CssAngle>): ITransformProxy;

export function rotateZ( a: Extended<CssAngle>): ITransformProxy;

export function rotate3d(
    x: Extended<CssNumber>, y: Extended<CssNumber>, z: Extended<CssNumber>,
    a: Extended<CssAngle>): ITransformProxy;

export function scale( cx: Extended<CssNumber>, sy?: Extended<CssNumber>): ITransformProxy;

export function scaleX( s: Extended<CssNumber>): ITransformProxy;

export function scaleY( s: Extended<CssNumber>): ITransformProxy;

export function scaleZ( s: Extended<CssNumber>): ITransformProxy;

export function scale3d( sx: Extended<CssNumber>, sy: Extended<CssNumber>,
    sz: Extended<CssNumber>): ITransformProxy;

export function skew( ax: Extended<CssAngle>, ay?: Extended<CssAngle>): ITransformProxy;

export function skewX( ax: Extended<CssAngle>): ITransformProxy;

export function skewY( ay: Extended<CssAngle>): ITransformProxy;

export function translate( x: Extended<CssLength>, y?: Extended<CssLength>): ITransformProxy;

export function translateX( x: Extended<CssLength>): ITransformProxy;

export function translateY( y: Extended<CssLength>): ITransformProxy;

export function translateZ( z: Extended<CssLength>): ITransformProxy;

export function translate3d( x: Extended<CssLength>, y: Extended<CssLength>,
    z: Extended<CssLength>): ITransformProxy;
```

## Basic Shapes

Mimcss provides types and functions that mimic the functions of the `<basic-shape>` CSS type:

```tsx
/**
 * The BasicShapeType represents an invocation of one the CSS `<basic-shape>` functions including
 * the `path()` function.
 */
export type BasicShape = IBasicShapeProxy | IPathBuilder;

/**
 * The IBasicShapeProxy function represents an invocation of one the CSS `<basic-shape>` functions
 * except the `path()` function.
 */
export interface IBasicShapeProxy extends IGenericProxy<"basic-shape">;

/**
 * The IRayProxy function represents an invocation of one the CSS `ray()` functions.
 */
export interface IRayProxy extends IGenericProxy<"ray">;

export function inset( offset: Extended<OneOrBox<CssLength>>,
    radius?: Extended<BorderRadius_StyleType>): IBasicShapeProxy;

export type ShapeRadius = Extended<CssLength | "closest-side" | "farthest-side">;

export function circle( center?: ShapeRadius, position?: Extended<CssPosition>): IBasicShapeProxy;

export function ellipse( rx?: ShapeRadius, ry?: ShapeRadius,
    position?: Extended<CssPosition>): IBasicShapeProxy;

export function polygon( pointOrRule: CssPoint | FillRule_StyleType,
    ...points: CssPoint[]): IBasicShapeProxy;

export function ray( angle: Extended<CssAngle>, size?: Extended<ExtentKeyword | CssLength>,
    contain?: boolean): IRayProxy;

export function path( fillRule?: FillRule_StyleType): IPathBuilder;
```

The `IPathBuilder` interface allows building a path using successive convenient methods:

```tsx
export interface IPathBuilder
{
    // Move-to command with absolute coordinates.
    M( first: [number,number], ...next: [number,number][]): IPathBuilder;

    // Move-to command with relative coordinates.
    m( first: [number,number], ...next: [number,number][]): IPathBuilder;

    // Line-to command with absolute coordinates.
    L( first: [number,number], ...next: [number,number][]): IPathBuilder;

    // Line-to command with relative coordinates.
    l( first: [number,number], ...next: [number,number][]): IPathBuilder;

    // Horizontal line-to command with absolute coordinates.
    H( first: number, ...next: number[]): IPathBuilder;

    // Horizontal line-to command with relative coordinates.
    h( first: number, ...next: number[]): IPathBuilder;

    // Vertical line-to command with absolute coordinates.
    V( first: number, ...next: number[]): IPathBuilder;

    // Vertical line-to command with relative coordinates.
    v( first: number, ...next: number[]): IPathBuilder;

    // Cubic bezier curve command with absolute coordinates.
    C( first: [number,number,number,number,number,number],
    ...next: [number,number,number,number,number,number][]): IPathBuilder;

    // Cubic bezier curve command with relative coordinates.
    c( first: [number,number,number,number,number,number],
        ...next: [number,number,number,number,number,number][]): IPathBuilder;

    // Smooth cubic bezier curve command with absolute coordinates.
    S( first: [number,number,number,number], ...next: [number,number,number,number][]): IPathBuilder;

    // Smooth cubic bezier curve command with relative coordinates.
    s( first: [number,number,number,number], ...next: [number,number,number,number][]): IPathBuilder;

    // Quadratic bezier curve command with absolute coordinates.
    Q( first: [number,number,number,number], ...next: [number,number,number,number][]): IPathBuilder;

    // Quadratic bezier curve command with relative coordinates.
    q( first: [number,number,number,number], ...next: [number,number,number,number][]): IPathBuilder;

    // Smooth quadratic bezier curve command with absolute coordinates.
    T( first: [number,number], ...next: [number,number][]): IPathBuilder;

    // Smooth quadratic bezier curve command with relative coordinates.
    t( first: [number,number], ...next: [number,number][]): IPathBuilder;

    // Elliptical arc curve command with absolute coordinates.
    A( first: [number,number,number,0|1,0|1,number,number],
        ...next: [number,number,number,0|1,0|1,number,number][]): IPathBuilder;

    // Elliptical arc curve command with relative coordinates.
    a( first: [number,number,number,0|1,0|1,number,number],
        ...next: [number,number,number,0|1,0|1,number,number][]): IPathBuilder;

    // Close-path command.
    z(): IPathBuilder;
}
```


