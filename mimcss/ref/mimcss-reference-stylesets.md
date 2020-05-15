---
layout: mimcss-reference
unit: 2
title: "Mimcss Reference: Stylesets"
---

# Mimcss Reference: Stylesets

This page describes the different types of stylesets Mimcss uses.

- [ICssStyleset Interface](#icssstyleset-interface)
- [IStyleset Interface](#icsstyleset-interface)

In Mimcss, the term *styleset* describes an object with style properties. Stylesets are used to sets values to style properties when defining style rules; therefore, the basic styleset described by the `ICssStyleset` interface contains properties corresponding to the CSS properties. In order to make the life of developers easier, Mimcss defines a number of additional stylesets described by interfaces extending or using the `ICssStyleset` interface. The additional properties or property types defined in these interfaces provide for the following features:

- Defining custom CSS properties
- Adding the `!important` flag to style properties
- Defining *dependent* style rules
- Reusing style rules (a.k.a. as extending or inheriting or deriving from or composing)

## ICssStyleset Interface

The `ICssStyleset` interface is the basic interface that defines names and types of the CSS style properties. All properties are optional and each property has its own type, which is described in the [Style Properties](mimcss-reference-style-properties.html) document. We don't list its properties here because there is a lot of them. You can find the interface defined in the file `StyleTypes.d.ts`, which is included with the Mimcss NPM package.

## IStyleset Interface

```tsx
export type IStyleset = { [K in keyof ICssStyleset]: Extended<ICssStyleset[K]> | Global_StyleType }

/**
 * Type that extends the given type with the following types:
 * - ICustomVar object that allows using a CSS custom property.
 * - StringProxy type that allows specifying raw string value.
 */
export type Extended<T> = T | ICustomVar<T> | StringProxy | undefined;

/**
 * Style values that can be used for any CSS property.
 */
export type Global_StyleType = "inherit" | "initial" | "unset" | "revert";

/**
 * The StringProxy type represents a function that returns a string. This function is part of type
 * definition for all CSS properties - even for those that don't have `string` as part of their
 * type.
 * 
 * This function is returned from the `raw()` function, which allows by-passing the property
 * typing rules and specifying a string directly. This might be useful, when a string value is
 * obtained from some external calculations.
 */
export type StringProxy = (p?: "string") => string;
```

The `IStyleset` interface extends the `ICssStyleset` interface and changes the type of each style property to include additional types.
