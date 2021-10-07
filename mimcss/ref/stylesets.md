---
layout: mimcss-reference
unit: 1
title: "Mimcss Reference: Stylesets"
description: "Describes types of stylesets used to define style rules including selectors, pseudo classes and elements and custom properties."
---

# Mimcss Reference: Stylesets

This page describes the different types of stylesets Mimcss uses.

- [IStyleset Interface](#icssstyleset-interface)
- [ExtendedBaseStyleset Type](#extendedstyleset-type)
  - [Global_StyleType Type](#global_styletype-type)
  - [ICustomVar Interface](#icustomvar-interface)
  - [IGenericProxy Interface](#igenericproxy-interface)
  - [IStringProxy Interface](#istringproxy-interface)
  - [Extended Type](#extended-type)
  - [ImportantProp Type](#importantprop-type)
  - [ExtendedProp Type](#extendedprop-type)
  - [Utility Types](#utility-types)
- [Styleset Type](#styleset-type)
  - [IVarTemplateStyleset Interface](#icssvartemplates-interface)
  - [CustomVar_StyleType Type](#customvar_styletype-type)
  - [VarTemplateName Type](#vartemplatename-type)
  - [VarValueType Type](#varvaluetype-type)
  - [VarTemplates Type](#vartemplates-type)
- [CombinedStyleset Type](#combinedstyleset-type)
  - [ISelectorProxy Interface](#iselectorproxy-interface)
  - [SelectorItem Type](#selectoritem-type)
  - [CssSelector Type](#cssselector-type)
  - [PagePseudoClass Type](#pagepseudoclass-type)
  - [PseudoClass Type](#pseudoclass-type)
  - [PseudoElement Type](#pseudoelement-type)
  - [PseudoEntity Type](#pseudoentity-type)
  - [NthChildExpression Type](#nthchildexpression-type)
  - [IParameterizedPseudoClass Interface](#iparameterizedpseudoclass-interface)
  - [IParameterizedPseudoElement Interface](#iparameterizedpseudoelement-interface)
  - [IParameterizedPseudoEntity Interface](#iparameterizedpseudoentity-interface)

In Mimcss, the term *styleset* describes an object with style properties. Stylesets are used to set values to style properties when defining style rules; therefore, the basic styleset described by the `IStyleset` interface contains properties corresponding to the CSS properties. In order to make the life of developers easier, Mimcss defines a number of additional stylesets described by interfaces extending or using the `IStyleset` interface. The additional properties or property types defined in these interfaces provide for the following features:

- Allowing special types to be assigned to all properties.
- Defining custom CSS properties.
- Defining *dependent* style rules.
- Reusing style rules (a.k.a. extending or inheriting or composing or deriving from).

In most cases, developers using Mimcss don't directly use the types described in this document. These types are mostly act "behind the scenes" making IDEs to enforce the rules defined by these types as developers write the code setting values to style properties. In some advanced scenarios, however, these types can be used directly.

## IStyleset Interface

The `IStyleset` interface is the basic interface that defines names and types of the CSS style properties. Each property has its own type, which are described in the [Style Properties](style-properties.html) document. We don't list its properties here because there is a lot of them. You can find the interface defined in the file `StyleTypes.d.ts`, which is included with the Mimcss NPM package.

## ExtendedBaseStyleset Type

```tsx
export type ExtendedBaseStyleset = { [K in keyof IStyleset]: ExtendedProp<IStyleset[K]> }
```

In CSSOM, style properties are part of the `CSSStyleDeclaration` type, where each property is defined as having the `string` type. In Mimcss, the `IStyleset` defines different types for different properties so that it is easier and less error-prone for developers to set their values. There are, however, some values that are common to all style properties, for example:

- All style properties can have one of the *global* values: `inherit`, `initial`, `unset`, or `revert`.
- All style properties can be set using a custom CSS property via the `var()` function.
- All style properties can have the `!important` flag set.

The `ExtendedBaseStyleset` interface extends the `IStyleset` interface and changes the type of each style property to include additional types. As a result, if a style property was defined in the `IStyleset` interface as having the type `T`, this property can be specified as one of the following types in the `ExtendedBaseStyleset` object:

- `T` - the original type as declared in the `ICssInterface`.
- `ICustomVar<T>` - a custom CSS property that yields type `T`.
- `StringProxy` - a function returning a string such as `raw()`, which allows assigning strings even to the properties whose type declared in the `IStyleset` interface doesn't allow strings.
- `undefined` - allows to omit the property.
- `ImportantProp<T>` - adds the `!important` flag to the property value.
- One of the global keywords: `inherit`, `initial`, `unset`, or `revert`.

#### Global_StyleType Type

```tsx
export type Global_StyleType = "inherit" | "initial" | "unset" | "revert";
```

#### ICustomVar Interface

```tsx
export interface ICustomVar<T = any>
{
    setValue( value: T, important?: boolean, schedulerType?: number): void;
}
```

The `ICustomVar` generic interface represents a CSS custom property object with values of the given type. This interface is needed because every style property can accept value in the form of the `var()` CSS function.

#### IGenericProxy Interface

```tsx
export interface IGenericProxy<T extends string>
{
    (p?: T): string;
}
```

The `IGenericProxy` interface represents a callable interface implemented using functions that accept an optional parameter of a generic type and return a string. This interface is used as a base for proxy interfaces defining types acceptable by certain style properties. The type parameter helps differentiate these interfaces so that functions that can be assigned to one type of style properties (e.g. "transform") cannot be assigned to an incompatible style property (e.g. clip-path).

#### IStringProxy Interface

```tsx
export interface IStringProxy extends IGenericProxy<"string"> {};
```

The `IStringProxy` interface represents a function that returns a string. This function is part of type definition for all CSS properties - even for those that don't have `string` as part of their type. The `IStringProxy` interface is returned from the `raw()` function, which allows bypassing the property typing rules and specifying a string directly. This might be useful, when a string value is obtained from some external code.

#### Extended Type

```tsx
export type Extended<T> = T | ICustomVar<T> | IStringProxy | undefined;
```

The `Extended` generic type extends the given type with the following types:

- `ICustomVar` interface that allows using a CSS custom property.
- `IStringProxy` interface that allows specifying raw string value.
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

#### Utility Types

The following utility generic types are frequently used when defining style properties:

```tsx
/** Type for pair-like property that can have 1 to 2 values of the given type */
export type OneOrPair<T> = T | [Extended<T>, Extended<T>];

/** Type for box-like property that can have 1 to 4 values of the given type */
export type OneOrBox<T> = T | [Extended<T>, Extended<T>, Extended<T>?, Extended<T>?];

/** Type for a property that can have 1 or more values of the given type */
export type OneOrMany<T> = T | Extended<T>[];
```

## Styleset Type

```tsx
export type Styleset = ExtendedBaseStyleset & { "--"?: CustomVar_StyleType[] };
```

The `Styleset` type extends the `ExtendedBaseStyleset` type adding to it the `"--"` property, which is an array of `CustomVar_StyleType` objects. In CSSOM, custom properties are not part of the `CSSStyleDeclaration` type (although the `setProperty` method is used to add them to the style definition). In Mimcss, we do want them to be specified declaratively in the stylesets when defining rules; therefore, we introduce several helper types that are used by the `Styleset` type.

#### IVarTemplateStyleset Interface

```tsx
export interface IVarTemplateStyleset extends IStyleset
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

The `IVarTemplateStyleset` interface maps template names to the types, which can be used for defining custom CSS properties (a.k.a. variables). Normally, variables are defined using the names of the style properties and their type is determined by the type of this property in the `IStyleset` interface. Sometimes, however, there is a need to define variables of some other types, for which there is no suitable style property. The `IVarTemplateStyleset` interface provides many basic types and it can also be extended using the TypeScript's module augmentation.

#### VarTemplateName Type

```tsx
export type VarTemplateName = keyof IVarTemplateStyleset;
```

The VarTemplateName type defines the keys (strings) that can be used as templates for defining custom CSS properties using the [[$var]] function.

#### VarValueType Type

```tsx
export type VarValueType<K extends VarTemplateName> = IVarTemplates[K];
```

The VarValueType generic type defines the type of the value that can be assigned to the custom CSS property using the generic type K as its template.

#### VarTemplates Type

```tsx
export type VarTemplates = { [K in VarTemplateName]: ExtendedProp<IVarTemplateStyleset[K]> }
```

The VarTemplates type maps all template properties defined in the `IVarTemplateStyleset` interface to the "extended" versions of their types. These extended types are defined using the `Extended` generic type, which adds basic keywords (e.g. "unset", "initial", etc.) as well as `StringProxy` and `ICustomVar` to the type that is defined in the `IVarTemplateStyleset` interface.

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

## CombinedStyleset Type

```tsx
/**
 * The CombinedStyleset type extends the Styleset type with certain properties that provide
 * additional meaning to the styleset and allow building dependent style rules:
 */
export type CombinedStyleset = Styleset &
	{ "+"?: OneOrMany<IStyleRule> } &
	{ [K in PseudoEntity]?: CombinedStyleset } &
	{ [K in keyof IParameterizedPseudoEntity]?: [IParameterizedPseudoEntity[K], CombinedStyleset][] } &
	{ [K in SelectorCombinator]?: [CssSelector, CombinedStyleset][] };

/** Represents properties used in the [[CombinedStyleset]] which are used to define dependent rules */
export type SelectorCombinator = "&" | "&," | "& " | "&>" | "&+" | "&~" | ",&" | " &" | ">&" | "+&" | "~&";
```

 The CombinedStyleset type extends the Styleset type with certain properties that provide additional meaning to the styleset and allow building dependent style rules:

- The `"+"` property specifies one or more parent style rules. This allows specifying parent rules using a convenient style-property-like notation.
- Properties with pseudo class names (e.g. `":hover"`) or pseudo element names (e.g. `"::after"`). These properties define a styleset that will be assigned to the selector obtained by using the original styleset's owner followed by the given pseudo class or pseudo element.
- Properties with names of parameterized pseudo classes (e.g. `":nth-child"`) or parameterized pseudo elements (e.g. `"::slotted"`). These properties contain a tuple, where the first element is the parameter for the selector and the second element is the styleset. These properties define a styleset that will be assigned to the selector obtained by using the original styleset's owner followed by the given pseudo class or pseudo element.
- Properties with the ampersand symbol (`'&'`) that contain arrays of two-element tuples each defining a selector and a style corresponding to this selector. Selectors can use the ampersand symbol to refer to the parent style selector. If the ampersand symbol is not used, the selector will be simply appended to the parent selector.

Functions that return style rules (e.g. `$class`) accept the `CombinedStyleset` as a parameter, for example:

```tsx
class MyStyles extends css.StyleDefinition
{
    class1 = this.$class({})

    class2 = this.$class({
        backgroundColor: "white",
        ":hover" : { backgroundColor: "grey" },
        "&": [
            [ "li > &", { backgroundColor: "yellow" } ],
            [ this.class1, { backgroundColor: "orange" } ]
        ]
    })
}
```

This will translate to the following CSS (class names will be auto-generated):

```css
.class2 { backgroundColor: white; }

.class2:hover { backgroundColor: grey; }

li > .class2 { backgroundColor: yellow; }

.class2.class1 { backgroundColor: orange; }
```


#### ISelectorProxy Interface

```tsx
export interface ISelectorProxy extends IGenericProxy<"selector"> {};
```

The ISelectorProxy function returns a CSS selector string. This type is returned from the `selector` function.

#### SelectorItem Type

```tsx
export type SelectorItem = string | IStyleRule | IStringProxy | ISelectorProxy;
```

The `SelectorItem` type describes a single selector token that can be used as an argument to the `selector` function.

#### CssSelector Type

```tsx
export type CssSelector = SelectorItem | SelectorItem[];
```

The `CssSelector` type is used to specify a selector in a style rule.

#### PagePseudoClass Type

```tsx
export type PagePseudoClass = ":blank" | ":first" | ":left" | ":right";
```

The `PagePseudoClass` type represents print-related pseudo classes - those that can be specified with the @page CSS rule */

#### PseudoClass Type

```tsx
export type PseudoClass = PagePseudoClass |
	":active" | ":any-link" | ":blank" | ":checked" | ":default" | ":defined" | ":disabled" |
	":empty" | ":enabled" | ":first-child" | ":first-of-type" | ":fullscreen" | ":focus" |
	":focus-visible" | ":focus-Within" | ":hover" | ":indeterminate" | ":in-range" | ":invalid" |
	":last-child" | ":last-of-type" | ":link" | ":only-child" | ":only-of-type" | ":optional" |
	":out-of-range" | ":placeholder-shown" | ":read-only" | ":read-write" | ":required" | ":root" |
	":scope" | ":target" | ":valid" | ":visited" | ":dir(rtl)" | ":dir(ltr)";
```

The `PseudoClass` type lists all pseudo classes that don't require parameters.

#### PseudoElement Type

```tsx
export type PseudoElement = "::after" | "::backdrop" | "::before" | "::cue" | "::firstLetter" |
	"::firstLine" | "::grammarError" | "::marker" | "::placeholder" | "::selection" | "::spellingError";
```

The `PseudoElement` type lists pseudo elements that don't require parameters.

#### PseudoEntity Type

```tsx
export type PseudoEntity = PseudoClass | PseudoElement;
```

The `PseudoEntity` type combines names of non-parameterized pseudo classes and pseudo elements.

#### NthChildExpression Type

```tsx
export type NthChildExpression = "odd" | "even" | number | [number, number?] | string | IStringProxy;
```

The `NthChildExpression` type describes an expression that is used for parameterized pseudo classes like `nth-child`. It can be a string, a single number or a tuple with one or two numbers. If it is a single number, the 'n' in An+B will not be used - as in `nth-child(2)`. If it is a tuple, the `n` character will be used even if the second tuple's element is not provided.

#### IParameterizedPseudoClass Interface

```tsx
export interface IParameterizedPseudoClass
{
	":has": string;
	":host": string;
	":host-context": string;
	":is": string;
	":lang": string;
	":not": string;
	":nth-child": NthChildExpression;
	":nth-of-type": NthChildExpression;
	":nth-last-child": NthChildExpression;
	":nth-last-of-type": NthChildExpression;
	":where": string;
	"::part": string;
	"::slotted": string;
}
```

The `IParameterizedPseudoClass` interface maps names of pseudo classes that require parameters to the type that can be used to specify these parameters.

#### IParameterizedPseudoElement Interface

```tsx
export interface IParameterizedPseudoElement
{
	"::part": string;
	"::slotted": string;
}
```

The `IParameterizedPseudoElement` interface maps names of pseudo elements that require parameters to the type that can be used to specify these parameters.

#### IParameterizedPseudoEntity Interface

```tsx
export interface IParameterizedPseudoEntity extends IParameterizedPseudoClass, IParameterizedPseudoElement
{
}
```

The `IParameterizedPseudoEntity` interface combines `IParameterizedPseudoClass` and `IParameterizedPseudoElement` interfaces.


#### SelectorCombinator Type

```tsx
export type SelectorCombinator = "&" | "&," | "& " | "&>" | "&+" | "&~" | ",&" | " &" | ">&" | "+&" | "~&";
```

The `SelectorCombinator` type represents properties used in the `CombinedStyleset` to define dependent rules.

