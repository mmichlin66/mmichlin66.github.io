---
layout: mimcss-reference
unit: 7
title: "Mimcss Reference: Miscellaneous"
description: "Describes miscellaneous types and functions used to set values of style properties."
---

# Mimcss Reference: Miscellaneous

This page describes miscellaneous types and functions used to set values of style properties.

- [Using Raw CSS](#using-raw-css)
- [Using URLs](#using-urls)
- [Using Element Attributes](#using-element-attributes)
- [Using Counters](#using-counters)


## Using Raw CSS

#### raw() Function

```tsx
export function raw( parts: TemplateStringsArray, ...params: any[]): IStringProxy
```

The `raw()` function returns the `StringProxy` type encapsulating the given string-like parameter. This function allows specifying arbitrary text for properties whose type normally doesn't allow strings. This is used as an "escape hatch" when a string value already exists and there is no sense to convert it to a proper type. This function is a tag function and must be invoked with the template string without parentheses.

Many style properties accept pre-defined keyword values and in order to eliminate misspellings and allow IDEs to use the autocomplete feature, Mimcss doesn't include the string type as part of the type definition of these properties. Properties of the CSS `<color>` type such as `color` and `background-color` is one example. These properties\` type is `CssColor`, which includes keywords for all supported named colors. If the string type was included in the `CssType`, first, autocomplete for color names wouldn't work, and second, any misspellings of color names would not be caught at compile time.

Sometimes, however, there is a need to use strings even for properties that don't include string in their type. In addition, even for properties that do allow strings, there is a need to compose the string from many parts. The `raw()` function accommodates both of these needs.

**Example.** The following example uses the `raw()` function to specify a value of the `border` property using custom CSS properties for some of its components.

```tsx
class MyStyle extends css.StyleDefinition
{
    defaultBorderWidth = this.$var( "CssLength", 1)
    defaultBorderStyle = this.$var( "borderStyle", "solid")

    blueBorder = this.$class({ border: css.raw`${this.defaultBorderWidth} ${this.defaultBorderStyle} blue` })
}
```

#### IQuotedProxy Interface

```tsx
export interface IQuotedProxy extends IGenericProxy<"quoted"> {};
```

The `IQuotedProxy` interface represents a string in quotation marks.

#### quoted() Function

```tsx
export function quoted( val: any): IQuotedProxy
```

The `quoted()` function returns a `IUrlProxy` interface representing a string in quotation marks.

**Example.**

```tsx
class MyStyle extends css.StyleDefinition
{
    // link to an image
    startListItem = this.$style( "li::after", { content: css.url("assets/star.gif") })

    // define ID for an SVG element and use it for setting background-image property
    svgID = this.$id()
    svgRef = this.$class({ backgroundImage: css.url(this.svgID) })
}
```

## Using URLs

#### url() Function

```tsx
export function url( val: Extended<string | IIDRule>): IUrlProxy
```

The `url()` function returns a `IUrlProxy` interface representing the CSS `url()` function. URLs and CSS `url()` function are used in several places in CSS to link to images, fonts, imported stylesheets and counter symbols. The `url()` function mimics the CSS function.

The CSS `url()` function also allows specifying an ID of an element within the document using the syntax `url(#elmID)`. Mimcss allows passing an ID rule object defined in the style definition class to use this feature. This eliminates misspelling errors when referencing element IDs.

**Example.**

```tsx
class MyStyle extends css.StyleDefinition
{
    // link to an image
    startListItem = this.$style( "li::after", { content: css.url("assets/star.gif") })

    // define ID for an SVG element and use it for setting background-image property
    svgID = this.$id()
    svgRef = this.$class({ backgroundImage: css.url(this.svgID) })
}
```

#### IUrlProxy Interface

```tsx
export interface IUrlProxy extends IGenericProxy<"url"> {};
```

The `IUrlProxy` interface represents an invocation of the CSS `url()` function. This interface is returned from the Mimcss `url()` function.

## Using Element Attributes

#### attr() Function

```tsx
export function attr( attrName: Extended<string>, typeOrUnit?: Extended<AttrTypeKeyword | AttrUnitKeyword>,
    fallback?: Extended<string>): IStringProxy
```

The `attr()` function returns the IStringProxy interface representing the `attr()` CSS function. It theoretically can be used in any style property; however, its use by browsers is currently limited to the `content` property. Also no browser currently support type, units or fallback values.

**Example.** The following example uses the `attr()` function to display a tooltip for elements that specify it using the "data-tooltip" attribute.

```tsx
class MyStyle extends css.StyleDefinition
{
    startListItem = this.$style( "[data-tooltip]:hover::after", {
        content: css.attr("data-tooltip")
    })
}
```

## Using Counters

#### counter() Function

```tsx
export function counter( counterObj: Extended<ICounterRule | string>,
    style?: Extended<ListStyleType_StyleType>,
    textAfter?: Extended<string>, textBefore?: Extended<string>): IStringProxy
```

The `counter()` function returns the IStringProxy interface representing the CSS `counter()` function with additional optional strings added after and/or before the counter.

**Example.** The following example uses the `counter()` function to display ordered list items with Roman numbers.

```tsx
class MyStyle extends css.StyleDefinition
{
    // define counter object
    counter1 = this.$counter();

    ol = this.$style( "ol", { counterReset: this.counter, listStyleType: "none" })

    li = this.$style( "li", {
        counterIncrement: this.counter,
        "::before": { content: css.counter( this.counter, "upper-roman", " ") }
    })
}
```

#### counters() Function

```tsx
export function counters( counterObj: Extended<ICounterRule | string>,
    separator: Extended<string>, style?: Extended<ListStyleType_StyleType>,
    textAfter?: Extended<string>, textBefore?: Extended<string>): IStringProxy
```

The `counters()` function returns a IStringProxy interface representing the CSS `countesr()` function with the given separator string and additional optional strings added after and/or before the counter.

**Example.** The following example uses the `counters()` function to display a hierarchical list of items with Hebrew numbers.

```tsx
class MyStyle extends css.StyleDefinition
{
    counter = this.$counter();

    ol = this.$style( "ol", { counterReset: this.counter, listStyleType: "none" })

    li = this.$style( "li", {
        counterIncrement: this.counter,
        "::before": { content: css.counters( this.counter, ".", "hebrew", " ") }
    })
}
```

