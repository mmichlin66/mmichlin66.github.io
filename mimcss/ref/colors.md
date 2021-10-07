---
layout: mimcss-reference
unit: 5
title: "Mimcss Reference: Colors"
description: "Describes types and functions for working with colors."
---

# Mimcss Reference: Colors

This page describes types and functions that are used to work with color in CSS properties.

- [Color Types](#color-types)
  - [CssColor Type](#csscolor-type)
  - [INamedColors Interface](#inamedColors-interface)
  - [Colors Object](#colors-object)
  - [ColorProxy Type](#colorproxy-type)
- [Color Functions](#color-functions)
  - [rgb() Function](#rgb-function)
  - [hsl() Function](#hsl-function)
  - [alpha() Function](#alpha-function)
- [Custom Named Colors](#custom-named-colors)

## Color Types

#### CssColor Type

```tsx
export type CssColor = "transparent" | "currentcolor" | keyof INamedColors | number | IColorProxy | SystemColors
```

The `CssColor` type is used to set values of properties that accept the CSS `<color>` type. Color can be represented using the following types:

- keywords:
  - `"transparent"` and `"currentcolor"`
  - Names of the properties in the `INamedColors` interface, which correspond to the standard Web color names.
  - One of the values from the `SystemColors` type.
- numbers:
  - The first 3 bytes are treated as specifying the RGB color separations as in 0xRRGGBB.
  - Negative numbers are treated as inverted colors.
  - Integer part of the number must be less than or equal to 0xFFFFFF - everything else is ignored.
  - Floating point part of the number is treated as a percent of alpha channel. If there is no floating part, alpha is 1.
- functions:
  - `rgb()`, `hsl()`, `alpha()` as well as any function that returns the `ColorProxy` type.

**Example.**

```tsx
class MyStyles extends css.StyleDefinition
{
    // color name
    purple = this.$class({ color: "purple" })

    // positive number
    red = this.$class({ color: 0xFF0000 })

    // negative number - inverted color (same as 0x00FFFF)
    cyan = this.$class({ color: -0xFF0000 })

    // floating point number - alpha channel
    halfGreen = this.$class({ color: 0x00FF00 + 0.5 })
}
```

#### INamedColors Interface

```tsx
export interface INamedColors
{
    readonly aliceblue: number;
    readonly antiquewhite: number;
    ...
}
```

The `INamedColors` interface contains properties named after the standard Web colors. All properties have the `number` type. This interface is implemented by the `Colors` object and is needed to allow developers to add new named colors through the module augmentation technique.

#### Colors Object

```tsx
export let Colors: INamedColors =
{
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    ...
}
```

The `Colors` object implements the `INamedColors` interface and thus contains properties named after the standard Web colors. The property values are set to the numeric representation of the corresponding color (in the form 0xRRGGBB). The object's properties can be used anywhere the color value is expected and the effect is identical to using the corresponding color name.

Since the properties of the `Colors` object are numbers, they can be used in any mathematical operations - something that cannot be done with color names.

**Example.**

```tsx
class MyStyles extends css.StyleDefinition
{
    // the following two classes have identical effect
    red1 = this.$class({ color: "red" })
    red2 = this.$class({ color: css.Colors.red })

    // color with alpha channel
    halfGreen = this.$class({ color: css.Colors.green + 0.5 })
}
```

#### IColorProxy Interface

```tsx
export interface IColorProxy extends IGenericProxy<"color"> {};
```

The `ColorProxy` interface represents an invocation of one of CSS functions that are used for specifying colors. This interface is returned from functions like: `rgb()`, `alpha()`, etc.

## Color Functions

#### rgb() Function

```tsx
export function rgb( r: number, g: number, b: number, a?: number): IColorProxy
```

The `rgb()` function converts the color specified as red, green and blue separation values and an optional alpha mask to a CSS color representation. Each color separation is represented as a number:

- Integer number -255 to 255. Numbers beyond this range will be clamped. Negative numbers will be inverted.
- Floating number -1.0 to 1.0 non-inclusive, which is multiplied by 100 treated as percentage. Floating numbers beyond this range will be rounded and treated as integer numbers. Negative numbers will be inverted.

The alpha mask can be one of the following:

- Floating number 0 to 1 inclusive.
- Integer or floating number 1 to 100, which is divided by 100. Floating numbers will be rounded. Numbers beyond this range will be clamped.
- The sign of alpha is ignored; that is, only the absolute value is considered.

#### hsl() Function

```tsx
export function hsl( h: number | string, s: number, l: number, a?: number): IColorProxy
```

The `hsl()` function converts the color specified as hue-saturation-lightness components and an optional alpha mask to a CSS color representation. This method should be used when defining CSS color values in styleset properties.

The Hue component is treated as the CSS `<angle>` type. Numbers are considered degrees.

The Saturation and Lightness components are treated as percentages:

- The sign is ignored; that is, only the absolute value is considered.
- Floating number 0 to 1 inclusive are multiplied by 100 and treated as percentage.
- Integer or floating number 1 to 100 are treated as percentage. Floating numbers will be rounded. Numbers beyond this range will be clamped to 100.

The alpha mask can be one of the following:

- Floating number 0 to 1 inclusive.
- Integer or floating number 1 to 100, which is divided by 100. Floating numbers will be rounded. Numbers beyond this range will be clamped.
- The sign of alpha is ignored; that is, only the absolute value is considered.

#### alpha() Function

```tsx
export function alpha( c: number | keyof ColorTypes.INamedColors, a: number): IColorProxy
```

The `hsl()` function converts the given color and the alpha mask to the CSS Color representation. This method should be used when defining CSS color values in styleset properties.

The color can be specified as a numeric value or as a string color name.

The alpha mask is specified as a number:

- The sign is ignored; that is, only the absolute value is considered.
- Number 0 to 1 inclusive, which is treated as percentage.
- Number 1 to 100 inclusive, which is treated as percentage.
- Numbers greater than 100 are clamped to 100;

## Custom Named Colors
Mimcss allows defining custom named colors and refer to them by their names everywhere the `CssColor` is accepted. This is done in two steps:

1. Use module augmentation technique to extend the INamedColors interface with your own name.
1. Provide the value for your color - it must be a number with absolute value less than `0x1000000`. It can be negative for inverted colors and it can have a floating point part to specify alpha channel.

```tsx
// Add new color name to the INamedColors interface.
declare module "mimcss/lib/styles/ColorTypes"
{
    interface INamedColors
    {
        myColor?: number;
    }
}

// Provide the value for your color.
css.Colors.myFavColor = 0x123456;

// Use it just as any other named color.
class MyStyles extends css.StyleDefinition
{
    anchor = this.$style( "a", {
        color: "myColor",
        ":hover": { color: css.alpha( "myColor", 0.7) }
    })
}
```

