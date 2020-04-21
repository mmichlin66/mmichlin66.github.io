---
layout: mimcss-guide
unit: 3
title: "Mimcss Guide: Custom Properties"
---

# Mimcss Guide: Custom Properties

## Custom Properties in CSS Files
CSS custom properties are properties with arbitrary names beginning with two dashes. The properties are defined as having arbitrary values and they are used as values of the style properties. Here is an example:

```css
:root {
    --special-color: blue;
}

.special-container {
    --special-color: green;
}

.special {
    color: var(--special-color);
}
```

Custom properties are often defined at the root level and serve as named constants. This allows Web developers to create robust code that wouldn't require extensive changes when aspects of the application design change. The utility of custom properties, however, goes beyond just serving as named constants: they participate in the cascade and can be re-defined at any level - that is, under any CSS selector.

In the above example, an element having the `special` class will have the blue color unless it resides under the element with the  `special-container` class, in which case the element's color will be green.

One downside of custom properties is that no restrictions are put on their values, which means that there is no way for the tools to help developers avoid inevitable misspellings and other errors. Consider the following example:

```css
:root {
    --special-color: bluue; /* misspelled color value */
    --special-font-weight: 600;
}

.special-container {
    --special-color: bold; /* mixed up value */
    --special-font-weight: green; /* mixed up value */
}

.special {
    color: var(--special-color);
    font-weight: var(--special-color); /* incorrect property assignment - wrong type */
}
```

We purposefully made several errors here:
1. We put an extra 'u' in the value of the `--special-color` custom property.
1. We redefined both custom properties under the `.special-container` selector but mixed up their values.
1. We assigned to the `font-weight` style the value of the `--special-color` custom property instead of `--special-font-weight` property.

These errors will only manifest themselves at run time: since custom properties allow any values, the tools cannot recognize the errors at compile time (although, for example, the tools would warn the developer if the incorrect color value were assigned directly to the `color` style).

## Custom Properties in Mimcss
Mimcss allows defining and using custom properties while helping developers avoid the above problems at compile time. First, here is an example of how custom properties are defined and used:

```tsx
class MyStyles extends css.StyleDefinition
{
    specialColor = css.$var( "color", "blue")

    specialContainer = css.$class({
         "--": [ [this.specialColor, "green"] ]
    })

    special = css.$class({ color: this.specialColor })
}
```

The `$var` function defines a custom property of the type determined by the first parameter, which is a name of a CSS style property. The second parameter is the value of the custom property and it must be of the type corresponding to the first parameter. More precisely, the type of the second parameter is the type of the property of the `IStyleset` interface whose name is given by the first parameter. In our example, the second parameter will only accept the correct color values.

The `specialContainer` property defines a CSS class, which re-defines the `specialColor` custom property using the `--` property of the `Styleset` class. The `--` property value is an array of two-element tuples. The first element is a reference to the custom property rule - in our case `specialColor` property. The second element is the property value. The first element informs us of two things: first, what custom property is being re-defined, and second, what types are valid for the second parameters. In our example, only valid color values will be accepted.

The `special` property defines a CSS class that uses the value of the `specialColor` custom property. Note that we simply referenced a custom property object. When the rule will be inserted into the DOM this will be represented by the CSS `var()` function. Note that Mimcss allows using custom property objects in lieu of values of any CSS property - but only if the type of the custom property is compatible with the type of the CSS property.

TypeScript's powerful typing system enforces the typing rules and helps with autocomplete. In the `specialColor` rule, the developer will be prompted with the possible color names. Misspelling a color name will result in a compile time error.

In the `specialContainer` rule, the developer will be similarly prompted with the correct color names because, the system understands what type is allowed in the second element of the tuple based on the custom property type in first element.

In the `special` rule, a compile time error will be generated if the developer incorrectly assigns a previously defined custom property to a Styleset property of a wrong type.

Thus, Mimcss solves the problems mentioned above so that instead of being run-time errors they become compile-time errors.



