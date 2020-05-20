---
layout: mimcss-reference
unit: 3
title: "Mimcss Reference: Common Types"
---

# Mimcss Reference: Common Types

This page describes utility types and functions used to set values of style properties.

- [Using Raw CSS](#using-raw-css)
- [Using URLs](#using-urls)
- [Using Element Attributes](#using-element-attributes)
- [Using Counters](#using-counters)


## Using Raw CSS

#### raw() Function

```tsx
export function raw( parts: TemplateStringsArray, ...params: any[]): StringProxy
```

The `raw()` function returns the `StringProxy` type encapsulating the given string-like parameter. This function allows specifying arbitrary text for properties whose type normally doesn't allow strings. This is used as an "escape hatch" when a string value already exists and there is no sense to convert it to a proper type. This function is a tag function and must be invoked with the template string without parentheses.

Many style properties accept pre-defined keyword values and in order to eliminate misspellings and allow IDEs to use the autocomplete feature, Mimcss doesn't include the string type as part of the type definition of these properties. Properties of the CSS `<color>` type such as `color` and `background-color` is one example. These properties\` type is `CssColor`, which includes keywords for all supported named colors. If the string type was included in the `CssType`, first, autocomplete for color names wouldn't work, and second, any misspellings of color names would not be caught at compile time.

Sometimes, however, there is a need to use strings even for properties that don't include string in their type. In addition, even for properties that do allow strings, there is a need to compose the string from many parts. The `raw()` function accommodates both of these needs.

**Example.** The following example uses the `raw()` function to specify a value of the `border` property using custom CSS properties for some of its components.

```tsx
class MyStyle extends css.StyleDefinition
{
    defaultBorderWidth = css.$var( "CssLength", 1)
    defaultBorderStyle = css.$var( "border-style", "solid")

    blueBorder = css.$class({ border: css.raw`${this.defaultBorderWidth} ${this.defaultBorderStyle} blue` })
}
```

## Using URLs

#### url() Function

```tsx
export function url( val: Extended<string>): UrlProxy
```

The `url()` function returns a `UrlProxy` type representing the CSS `url()` function. URLs and CSS `url()` function are used in several places in CSS to link to images, fonts, imported stylesheets and counter symbols. The `url()` function mimics the CSS function.

**Example.** The following example uses the `url()` function to reference an image.

```tsx
class MyStyle extends css.StyleDefinition
{
    startListItem = css.$style( "li::after", { content: css.url("assets/star.gif") })
}
```

#### UrlProxy Type 

```tsx
export type UrlProxy = (p?: "url") => string;
```

The `UrlProxy` type represents an invocation of the CSS `url()` function. This type is returned from the Mimcss `url()` function.

## Using Element Attributes

#### attr() Function

```tsx
export function attr( attrName: Extended<string>, typeOrUnit?: Extended<AttrTypeKeyword | AttrUnitKeyword>,
	fallback?: Extended<string>): StringProxy
```

The `attr()` function returns the StringProxy type representing the `attr()` CSS function. It theoretically can be used in any style property; however, its use by browsers is currently limited to the `content` property. Also no browser currently support type, units or fallback values.

**Example.** The following example uses the `attr()` function to display a tooltip for elements that specify it using the "data-tooltip" attribute.

```tsx
class MyStyle extends css.StyleDefinition
{
    startListItem = css.$style( "[data-tooltip]:hover::after", {
        content: css.attr("data-tooltip")
    })
}
```

## Using Counters

#### counter() Function

```tsx
export function counter( counterObj: Extended<ICounterRule | string>,
	style?: Extended<ListStyleType_StyleType>,
	textAfter?: Extended<string>, textBefore?: Extended<string>): StringProxy
```

The `counter()` function returns the StringProxy type representing the CSS `counter()` function with additional optional strings added after and/or before the counter.

**Example.** The following example uses the `counter()` function to display ordered list items with Roman numbers.

```tsx
class MyStyle extends css.StyleDefinition
{
    // define counter object
	counter1 = css.$counter();

    ol = css.$style( "ol", { counterReset: this.counter, listStyleType: "none" })
    
	li = css.$style( "li", {
		counterIncrement: this.counter,
		"::before": { content: css.counter( this.counter, "upper-roman", " ") }
	})
}
```

#### counters() Function

```tsx
export function counters( counterObj: Extended<ICounterRule | string>,
	separator: Extended<string>, style?: Extended<ListStyleType_StyleType>,
	textAfter?: Extended<string>, textBefore?: Extended<string>): StringProxy
```

The `counters()` function returns a StringProxy function representing the CSS `countesr()` function with the given separator string and additional optional strings added after and/or before the counter.

**Example.** The following example uses the `counters()` function to display a hierarchical list of items with Hebrew numbers.

```tsx
class MyStyle extends css.StyleDefinition
{
	counter = css.$counter();

    ol = css.$style( "ol", { counterReset: this.counter, listStyleType: "none" })
    
	li = css.$style( "li", {
		counterIncrement: this.counter,
		"::before": { content: css.counters( this.counter, ".", "hebrew", " ") }
	})
}
```

