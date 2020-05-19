---
layout: mimcss-reference
unit: 3
title: "Mimcss Reference: Common Types"
---

# Mimcss Reference: Common Types

This page describes utility types and functions used to set values of style properties.

- [Common Property Types](#common-property-types)
  - [Global_StyleType Type](#global_styletype-type)


## Common Property Types

In CSSOM, style properties are part of the `CSSStyleDeclaration` type, where each property is defined as having the `string` type. In Mimcss, the `ICssStyleset` defines different types for different properties so that it is easier and less error-prone for developers to set their values. There are, however, some values that are common to all style properties, for example:

- All style properties can have one of the *global* values: `inherit`, `initial`, `unset`, or `revert`.
- All style properties can be set using a custom CSS property via the `var()` function.
- All style properties can have the `!important` flag set.

#### Global_StyleType Type

```tsx
export type Global_StyleType = "inherit" | "initial" | "unset" | "revert";
```

#### ICustomVar Interface

```tsx
export interface ICustomVar<T = any>
{
    setValue( value: T, important?: boolean): void;
}
```

The `ICustomVar` generic interface represents a CSS custom property object with values of the given type. This interface is needed because every style property can accept value in the form of the `var()` CSS function.

#### StringProxy Type 

```tsx
export type StringProxy = (p?: "string") => string;
```

The `StringProxy` type represents a function that returns a string. This function is part of type definition for all CSS properties - even for those that don't have `string` as part of their type. This function is returned from the `raw()` function, which allows by-passing the property typing rules and specifying a string directly. This might be useful, when a string value is obtained from some external calculations.

#### Extended Type 

```tsx
export type Extended<T> = T | ICustomVar<T> | StringProxy | undefined;
```

The `Extended` generic type extends the given type with the following types:

- `ICustomVar` object that allows using a CSS custom property.
- `StringProxy` type that allows specifying raw string value.
- `undefined` type that allows omit property value.

#### ImportantProp Type 

```tsx
export type ImportantProp<T> = { "!": Extended<T> };
```

The `ImportantProp` generic type encapsulates the type of a property in an object with a single `"!"` property. This type is used to indicate that the property value must be flagged as `!important`.

#### ExtendedProp Type 

```tsx
export type ExtendedProp<T> = Extended<T> | ImportantProp<T> | Global_StyleType;
```

The `ExtendedProp` generic type extends the given type with the following types:

- `ICustomVar` object that allows using a CSS custom property.
- `StringProxy` type that allows specifying raw string value.
- `undefined` type that allows omit property value.
- `ImportantProp` type that allows flagging the property as `!important`.
- `Global_StyleType` type that allows specifying global property values.

## Custom Property Types

In CSSOM, custom properties are not part of the `CSSStyleDeclaration` type (although the `setProperty` method is used to add them to the style definition). In Mimcss, we do want them to be specified declaratively in the stylesets when defining rules; therefore, we introduce several helper types that are used by the `Styleset` type.

#### ICssVarTemplates Interface

```tsx
export interface ICssVarTemplates extends ICssStyleset
{
    /** Allows having CSS variables that accept value of any type */
    "any"?: any;

    /** Allows having CSS variables that accept a string value */
    CssString?: string;

    /** Allows having CSS variables that accept a `<number>` CSS value */
    CssNumber?: CssNumber;

    /** Allows having CSS variables that accept a `<length>` CSS value */
    CssLength?: CssLength;

    /** Allows having CSS variables that accept an `<angle>` CSS value */
    CssAngle?: CssAngle;

    /** Allows having CSS variables that accept a `<time>` CSS value */
    CssTime?: CssTime;

    /** Allows having CSS variables that accept a `<resolution>` CSS value */
    CssResolution?: CssResolution;

    /** Allows having CSS variables that accept a `<frequency>` CSS value */
    CssFrequency?: CssFrequency;

    /** Allows having CSS variables that accept a `<percent>` CSS value */
    CssPercent?: CssPercent;

    /** Allows having CSS variables that accept a Point value */
    CssPoint?: CssPoint;

    /** Allows having CSS variables that accept a `<position>` CSS value */
    CssPosition?: CssPosition;

    /** Allows having CSS variables that accept a `Radius` CSS value */
    CssRadius?: CssRadius;

    /** Allows having CSS variables that accept a `<color>` CSS value */
    CssColor?: CssColor;

    /** Allows having CSS variables that accept an `<image>` CSS value */
    CssImage?: CssImage;
}
```

The `ICssVarTemplates` interface maps template names to the types, which can be used for defining custom CSS properties (a.k.a. variables). Normally, variables are defined using the names of the style properties and their type is determined by the type of this property in the `ICssStyleset` interface. Sometimes, however, there is a need to define variables of some other types, for which there is no suitable style property. The `ICssVarTemplates` interface provides many basic types and it can also be extended using the TypeScript's module augmentation.

#### VarTemplateName Type

```tsx
export type VarTemplateName = keyof ICssVarTemplates;
```

The VarTemplateName type defines the keys (strings) that can be used as templates for defining custom CSS properties using the [[$var]] function.

#### VarValueType Type

```tsx
export type VarValueType<K extends VarTemplateName> = IVarTemplates[K];
```

The VarValueType generic type defines the type of the value that can be assigned to the custom CSS property using the generic type K as its template.

#### VarTemplates Type

```tsx
export type VarTemplates = { [K in VarTemplateName]: ExtendedProp<ICssVarTemplates[K]> }
```

The VarTemplates type maps all template properties defined in the `ICssVarTemplates` interface to the "extended" versions of their types. These extended types are defined using the `Extended` generic type, which adds basic keywords (e.g. "unset", "initial", etc.) as well as `StringProxy` and `ICustomVar` to the type that is defined in the `ICssVarTemplates` interface.

#### CustomVar_StyleType Type

```tsx
export type CustomVar_StyleType<K extends VarTemplateName = any> = 
    [IVarRule<K>, VarValueType<K>] | [string, K, VarValueType<K>]
```

The `CustomVar_StyleType` type represents a custom CSS property name and value that are used to define custom properties in a Styleset. This object is used in conjunction with the `--` property of the Styleset type.

The `CustomVar_StyleType` type should be mostly used to override custom properties that have previously been defined at the top-level using the $var function. That way you can have a "global" value of a custom property and assign a different value to it under a certain CSS selector.

The values of the type can be specified as either a two-item or a three-item array. The two-item array is used with a previously defined custom CSS property represented by an `IVarRule` object:

- The first item is the `IVarRule` object.
- The second item is the value

The three-item array allows directly specifying the custom CSS property name:

- The first item is a string - the name of the custom CSS property. If the name is not prefixed with two dashes they will be added automatically.
- The second item is the name of a non-custom CSS property whose type determines the type of the custom property value.
- The third item is the value

Use the `CustomVar_StyleType` type in the following manner:

```tsx
class MyStyles extends StyleDefinition
{
    // define global custom CSS property.
    mainColor = $var( "color", "black");

    // re-define the value of the custom CSS property under "brown" class.
    brown = $class({ "--": [ [this.mainColor, "brown"] ] })

	// directly define custom CSS property under "blue" class.
    blue = $class({ "--": [ ["different-color", "color", "blue"] ] })
});
```

This is equivalent to the following CSS:

```css
:root { --MyStyles_mainColor: "black"; }

.brown { --MyStyles_mainColor: "brown"; }

.blue { --different-color: "blue"; }
```

The `CustomVar_StyleType` type is defined using the following helper types:

