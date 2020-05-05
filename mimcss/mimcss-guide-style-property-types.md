---
layout: mimcss-guide
unit: 6
title: "Mimcss Guide: Style Property Types"
---

# Mimcss Guide: Style Property Types

As we already mentioned earlier, the `Styleset` type which is used to specify style property values in Mimcss, resembles the `CSSStyleDeclaration` type in that it has properties with the same names: the camel-cased names of all CSS shorthand and longhand properties. The difference is that while the `CSSStyleDeclaration` type defines all the properties to have the type `string`, the `Styleset` type defines a different type for each property with the goal of making it easier and less error-prone for developers to assign values to them. This unit describes the different types of the properties in the `Styleset` type.

## Style Property Categories
We can divide all the style properties into the following broad categories based on the values they accept:

- Keyword-based properties. These properties use keywords to define their values. An example is the `visibility` property, whose allowed values are `visible` or `hidden` or `collapse`.
- Number-based properties. These properties accept numbers usually (but not always) accompanied by a unit specification. An example is the `top` property with accepted values such as `4px` or `1.5em` or `10%`.
- Color properties. These properties accept named colors as well as color specified in the hexadecimal form and as `rgb` and `hsl` functions.
- Complex value properties. These properties accept a list of values usually of different types and often in an arbitrary order. Shorthand properties usually belong to this category; for example, the `border` property. There are, however, longhand properties with complex values, for example the `clip-path` property. 
- Multi-value properties. These properties accept one or many values of either a simple or a complex type. For some properties, such as `animation`, the multiple values are separated by commas while for others, such as `padding`, the values are separated by spaces.

When deciding what type to use for each individual style property, in addition to the category Mimcss considered the following factors:

- There are many properties that do not belong strictly to one category. For example, the `vertical-align` property can be defined using a number of keyword value but also accepts a numeric `<length>` value.
- All properties accept the standard values of `initial`, `reset` and `inherit`.
- All properties can accept the value of a custom CSS property using the `var()` CSS function.
- Number-based properties must support the numeric functions, such as `min()` and `calc()`.

## General Approach
The goal of Mimcss is to increase the developers' productivity by increasing convenience and decreasing the number of errors. These two requirements are contradictory: the fastest and most convenient way to specify property values is to use strings but it is the most error-prone way too. The least error-prone way is to use the strictest types possible, but this is often inconvenient. Mimcss has to make a certain trade off balancing between the convenience and type strictness and here is the general approach that Mimcss has settled on:

- For keyword-based properties, the property type is defined as a union of string literals. The `string` type is not a part of type definition. For example, the type for the `visibility` property is defined as:
    ```tsx
    export type Visibility_StyleType = "visible" | "hidden" | "collapse";
    ```

- For number-based types (such as `<length>`, `<angle>`, etc.) the type is defined as a union of `number` and `string`. The `string` type is included only because writing `100%` or `0.5in` is much more convenient than using a construct such as `Len.percent(100)` or `Len.in(0.5)` (these functions are also part of Mimcss). The exception to this rule is that the type used for unitless numeric properties such as `orhans` or `order` only allows `number`.
- For color properties, the `CssColor` type includes string literals for all the named colors. It also allows specifying colors as numbers and provides `css.rgb()` and `css.hsl()` functions.
- For complex properties Mimcss uses arrays, tuples, functions and objects to provide the type-safe and convenient way to specify values. For most complex properties such as `background`, `animation`, etc. the `string` type is allowed.
- The string literals `initial`, `reset` and `inherit` are part of any property type definition.
- All properties accept a custom CSS property if it is defined for a compatible type; for example:
    ```tsx
    class MyStyles extends css.StyleDefinition
    {
        defaultColor = css.$var( "color", "red");

        cls = css.$class({
            // this will work because "backgroundColor" property is of the same type as "color"
            backgroundColor: this.defaultColor,

            // this will NOT work because "width" property is of different type than "color"
            width: this.defaultColor
        })
    }
    ```

- All properties accept the result of the `css.raw()` function, which serves as an escape hatch when there is a need to specify a string value for a property that normally doesn't accept the `string` type.





