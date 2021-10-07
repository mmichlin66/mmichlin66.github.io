---
layout: mimcss-reference
unit: 6
title: "Mimcss Reference: Helper Functions"
description: "Describes types and functions for working with gradients, filters, transforms, shapes and grids."
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
- [Grids](#grids)

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
Mimcss implements functions named after the CSS functions defined in the `<gradient>` CSS type. These functions return interfaces that extend the `IImageProxy` interface, which is accepted by several style properties such as `background-image` and `border-image`. These functions accept the variable array of parameters defining color stops and hints. In addition, these functions expose methods that can be called to set optional parameters further defining the behavior of the gradients.

#### Linear Gradients
The `linearGradient` and `repeatingLinearGradient` functions return the `ILinearGradient` interface:

```tsx
export interface ILinearGradient extends IImageProxy
{
    to( angle: LinearGradAngle): ILinearGradient;
}

export type LinearGradAngle = Extended<CssAngle> | LinearGradSideOrCorner;

export type LinearGradSideOrCorner = "bottom" | "left" | "top" | "right" |
    "top left" | "top right" | "bottom right" | "bottom left" |
    "left top" | "right top" | "left bottom" | "right bottom";

export function linearGradient(...stopsOrHints: GradientStopOrHint[]): ILinearGradient;

export function repeatingLinearGradient(...stopsOrHints: GradientStopOrHint[]): ILinearGradient;
```

The `to()` method allows setting the angle of the linear gradient.

**Examples**

```tsx
class MyStyles extends css.StyleDefinition
{
    // Simple linear gradient going from top to bottom.
    cls1 = this.$class({
        backgroundImage: css.linearGradient( "red", "blue")
    })

    // Linear gradient going towards the top with color hint at 30%. Note that hints are specified
    // as single number arrays and not just as numbers.
    cls2 = this.$class({
        backgroundImage: css.linearGradient( "red", [30], "blue").to("top")
    })

    // Linear gradient going towards the right-bottom corner.
    cls3 = this.$class({
        backgroundImage: css.linearGradient( "red", "blue").to("bottom right")
    })

    // Repeating linear gradient going towards the right side. The yellow color stop is at
    // 25% and the second red stop is at 50%.
    cls4 = this.$class({
        backgroundImage: css.repeatingLinearGradient("red", ["yellow", 25], ["red", 50]).to("right")
    })

    // Repeating linear gradient going towards the right side. The yellow color stop is at
    // 25% and the second red stop is at 50%.
    cls5 = this.$class({
        backgroundImage: css.repeatingLinearGradient("red", ["yellow", 25], ["red", 50]).to("right")
    })

    // Repeating linear gradient going with the angle of 45 degrees.
    cls6 = this.$class({
        backgroundImage: css.repeatingLinearGradient("red", ["yellow", 25], ["red", 50]).to(45)
    })
}
```


#### Radial Gradients
The `radialGradient` and `repeatingRadialGradient` functions return the `IRadialGradient` interface:

```tsx
export interface IRadialGradient extends IImageProxy
{
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
    cls1 = this.$class({
        backgroundImage: css.radialGradient( "red", "blue")
    })

    // Radial gradient with the center positioned at the middle of the right side
    cls2 = this.$class({
        backgroundImage: css.radialGradient( "red", [30], "blue").at(["right", "center"])
    })

    // Circular radial gradient with absolute size.
    cls3 = this.$class({
        backgroundImage: css.radialGradient( "red", "blue", "yellow").circle(css.Len.px(50))
    })

    // Elliptical radial gradient with size defined by the closest corner. The yellow color stop is at
    // 50% and the second red stop is at 90%.
    cls4 = this.$class({
        backgroundImage: css.radialGradient( "red", ["yellow", 50], ["red", 90]).ellipse("closest-corner")
    })

    // Repeating circular radial gradient going up to the farthest side.
    cls5 = this.$class({
        backgroundImage: css.repeatingRadialGradient( "red", ["yellow", 25], ["red", 50]).circle("farthest-side")
    })

    // Repeating circular radial gradient going up to the closest side positioned close to the
    // bottom left corner.
    cls6 = this.$class({
        backgroundImage: css.repeatingRadialGradient( "red", ["yellow", 25], ["red", 50])
            .circle(50).at(["left", 3.5, "bottom", 3.5])
    })
}
```


#### Conic Gradients
The `conicGradient` and `repeatingConicGradient` functions return the `IConicGradient` interface:

```tsx
export interface IConicGradient extends IImageProxy
{
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
    cls1 = this.$class({
        backgroundImage: css.conicGradient( "red", "blue")
    })

    // Conic gradient with the center positioned at the middle of the right side
    cls2 = this.$class({
        backgroundImage: css.conicGradient( "red", [30], "blue").at(["right", "center"])
    })

    // Conic gradient starting with the angle of 30 degrees.
    cls3 = this.$class({
        backgroundImage: css.conicGradient( "red", "blue", "yellow").from(30)
    })

    // Conic gradient starting with the angle of 30 degrees and positioned at the middle of the
    // right side.
    cls4 = this.$class({
        backgroundImage: css.conicGradient ( "red", ["yellow", 50], ["red", 90])
            .from(30).at(["right", "center"])
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

/** Type used for several properties */
export type GeometryBoxKeyword = "margin-box" | "border-box" | "padding-box" | "content-box" |
    "fill-box" | "stroke-box" | "view-box";

export interface IInsetProxy extends IBasicShapeProxy
{
    round( radius?: Extended<BorderRadius_StyleType>): IBasicShapeProxy;
}

export function inset( o1: Extended<CssLength>, o2?: Extended<CssLength>,
    o3?: Extended<CssLength>, o4?: Extended<CssLength>): IInsetProxy;

export type ShapeRadius = Extended<CssLength | "closest-side" | "farthest-side">;

export interface ICircleProxy extends IBasicShapeProxy
{
    at( pos: Extended<CssPosition>): IBasicShapeProxy;
}

export function circle( radius?: ShapeRadius): ICircleProxy;

export interface IEllipseProxy extends IBasicShapeProxy
{
    at( pos: Extended<CssPosition>): IBasicShapeProxy;
}

export function ellipse( radiusX?: ShapeRadius, radiusY?: ShapeRadius): IEllipseProxy;

export interface IPolygonProxy extends IBasicShapeProxy
{
    fill( rule: FillRule_StyleType): IBasicShapeProxy;
}

export function polygon( ...points: CssPoint[]): IPolygonProxy

export interface IRayProxy extends IGenericProxy<"ray">;

export function ray( angle: Extended<CssAngle>, size?: Extended<ExtentKeyword | CssLength>,
    contain?: boolean): IRayProxy;

export function path( fillRule?: FillRule_StyleType): IPathBuilder;
```

The `IPathBuilder` interface allows building a path using successive methods:

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

## Grids

Mimcss provides types and functions that mimic the functions used for defining grid layouts:

```tsx
/**
 * The IMinMaxProxy function represents an invocation of the minmax() function
 */
export interface IMinMaxProxy extends IGenericProxy<"minmax"> {}

/**
 * The IFitContentProxy function represents an invocation of the fit-content() function
 */
export interface IFitContentProxy extends IGenericProxy<"fit-content"> {}

/**
 * The IRepeatProxy function represents an invocation of the repeat() function
 */
export interface IRepeatProxy extends IGenericProxy<"repeat"> {}

/**
 * The ISpanProxy function produces the span expression for grid layouts
 */
export interface ISpanProxy extends IGenericProxy<"span"> {}

/**
 * Returns an IFitContentProxy function representing the `fit-content()` CSS function.
 */
export function fitContent( size: Extended<CssLength>): IFitContentProxy;

/**
 * Returns an IMinMaxProxy function representing the `minmax()` CSS function.
 */
export function minmax( min: GridTrackSize, max: GridTrackSize): IMinMaxProxy;

/**
 * Returns an IRepeatProxy function representing the `repeat()` CSS function.
 */
export function repeat( count: Extended<CssNumber> | "auto-fill" | "auto-fill",
    ...tracks: GridTrack[]): IRepeatProxy;

/**
 * Returns an ISpanProxy function representing the span expression for grid layouts. If the first
 * parameter is a number, the second parameter (if defined) must be a name; if the first parameter
 * is a name, the second parameter (if defined) must be a number.
 */
export function span( countOrName: Extended<GridLineCountOrName>,
    nameOrCount?: Extended<GridLineCountOrName>): ISpanProxy;
```


