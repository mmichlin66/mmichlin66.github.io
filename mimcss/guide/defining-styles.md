---
layout: mimcss-guide
unit: 2
title: "Mimcss Guide: Defining Styles"
description: "Mimcss uses the full power of the TypeScript typing system to define style property values in a type-safe and convenient ways."
---

# Mimcss Guide: Defining Styles

* [Styleset](#styleset)
* [Styleset Special Properties](#styleset-special-properties)
* [Extended Styleset](#extended-styleset)
* [Reusing Styles](#reusing-styles)
* [Dependent Styles](#dependent-styles)
* [Pseudo Classes and Pseudo Elements](#pseudo-classes-and-pseudo-elements)
* [Complex Dependent Selectors](#complex-dependent-selectors)
* [Selector Combinators](#selector-combinators)
* [Referencing External Style Definitions](#referencing-external-style-definitions)

## Styleset
Styles are defined using style rules, which usually accept some kind of selector and an object that gives values to a set of standard CSS style properties - such as `color`, `margin`, etc. This object is called a *styleset* and is defined by Mimcss using the `Styleset` type.

The `Styleset` type contains every short-hand and long-hand style property defined by the CSS standard and, if there are omissions or the Mimcss library hasn't caught up with the latest standard yet, there is a way to add the missing properties using the TypeScript's module augmentation technique.

The `Styleset` type might look similar to the built-in `CSSStyleDeclaration` type; however, while in `CSSStyleDeclaration` all properties have the `string` type, in `Styleset`, each property has its own type. This provides to the developers an easier and more powerful way to specify values for the properties. Moreover, specifying invalid values will be detected as a compile-time error. Let's see several examples:

1. The `color` property. Mimcss provides names of all the built-in colors in the `Colors` type. You can either use its properties, e.g. `Colors.dodgerblue`, or directly type `"dodgerblue"`. When you start typing color names as strings, the autocomplete feature of your IDE will prompt you with the suitable names. If you misspell the color name, it will be immediately detected. You can add new named colors using the module augmentation technique. You can also specify colors as numbers, e.g. 0xFF0000 for red, which is similar to the CSS notation `"#FF0000"` but allows you to calculate the color value programmatically without the need to convert it to string. There are also special color functions such as `rgb()` or `alpha()` that allow manipulating color values. All of these methods are of course applicable not only to the `color` property but to any property that uses color.

1. The `padding` property. CSS allows specifying 1 to 4 values for the `padding` property where each of the values must specify dimension units (except for 0). In Mimcss,  the `padding` property value can be specified as a number or an array of numbers with 2, 3, or 4 elements. Integer numbers will be considered as `px` units, while floating point numbers will be considered as `em` units. In additions, Mimcss provides functions for every CSS unit and these functions can be used in lieu of the numbers.

1. The `border` property. CSS defines the `border` property as a sequence of 1 to 3 values: width, style and color. In Mimcss you can specify the value as either a number or a Color value or as a tuple of 2 or 3 elements. Moreover, Mimcss provides all possible values for the style element, so that you cannot misspell it.

Here are a few examples of how such styles are used for defining style rules:

```tsx
class MyStyles extends css.StyleDefinition
{
    button1 = css.$class({
        backgroundColor: css.Colors.blue,   // built-in color property
        padding: 4,                         // 4px for all sides
        border: 2                           // 2px width with default style and color
    })

    button2 = css.$class({
        backgroundColor: "yellow",          // built-in color constant
        padding: [4, 0.3],                  // 4px top and bottom, 0.3em left and right
        border: ["solid", "brown"]          // defined as a two-element tuple
    })

    button3 = css.$class({
        backgroundColor: 0xFF00,            // green
        padding: [4, css.inch(0.1)],        // 4px top and bottom, 0.1in left and right
        border: [1, "solid", "brown"]       // defined as a three element tuple
    })
}
```

Mimcss strives to avoid defining `string` as property type, especially for those properties that have a lot of keyword values such as `justify-items`, `cursor`, `list-style-type`, `border-style`, etc. If `string` is among the possible property types, then first, the autocomplete feature doesn't work, and second, misspellings are not detected at compile time. Ultimately, the decision whether or not to have `string` for a property type is a trade-off between the above considerations and the developer's convenience.

The `Styleset` type allows specifying custom CSS properties using the special `"--"` property, which will be explained in the [Custom Properties](custom-properties.html) unit.

### Specifying !important flag
CSS allows adding the `!important` flag to any style property to increase its specificity. For many style properties, Mimcss doesn't include the `string` type; however, for any property, Mimcss allows specifying an object with a single property `"!"`, which contains the property value.

```tsx
class MyClass extends css.StyleDefinition
{
    // .isNotImportant { min-width: 20px; }
    isNotImportant = css.$class({ minWidth: 20 })

    // .isImportant { min-width: 20px !important }
    isImportant = css.$class({ minWidth: { "!": 20 } })
}
```

## Combined Styleset
The functions that create style rules - such as `$style`, `$class` and `$id` - accept not just the `Styleset` type described above, but an extended variant of it called `CombinedStyleset`. The `CombinedStyleset` type adds a number of properties to the `Styleset` type, which allow for the following features:

- Combined styleset can specify that it *extends* (*composites*, *inherits*, *derives from*) one or more stylesets defined by other style rules.
- Combined styleset can have *dependent* (a.k.a. *nested*) stylesets for pseudo classes, pseudo elements and other kinds of selectors related to the CSS entity for which the style rule is defined.

These features are discussed in details in the following sections.

### Reusing Styles

With CSS pre-processors, the idea of a style rule re-using other rules (a.k.a. style extending/composing/inheriting) became very popular. Mimcss also has this capability and it uses the TypeScript's type-safety features to eliminate errors. Here is an example:

```tsx
class MyStyles extends css.StyleDefinition
{
    vbox = css.$class({
        display: "flex",
        flexDirection: "column"
    })

    // extend the vbox class
    sidebar = css.$class({ "+": this.vbox,
        position: "absolute",
        width: css.em(15),
        height: css.em(50)
    })

    standout = css.$class({
        boxShadow: { blur: 4, color: "red" }
    })

    // extend two clases: sidebar and standout
    rightbar = css.$class({ "+": [this.sidebar, this.standout],
        width: css.em(10),
        left: css.em(1)
    })
}
```

The special property `"+"` of the `CombinedStyleset` type allows specifying one or more style rules whose styles will be re-used. The `"sidebar"`class extends the `"vbox"` class, while the `"rightbar"` class extends two classes: `"sidebar"` and `"standout"`. Note how we reuse the previously defined classes by referring to them via the property names (e.g. `this.vbox`). These are not just strings, but strongly typed objects, which prevents misspelling errors.

The above code is equivalent to the following CSS (except that actual names would be auto-generated by Mimcss):

```css
.vbox {
    display: flex;
    flex-direction: column;
}

.sidebar {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 15em;
    height: 50em;
}

.standout {
    box-shadow: 10px 5px 5px red;
}

.rightbar {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 10em;
    height: 50em;
    box-shadow: 0 0 4px red;
    left: 1em;
}
```

Reusing another style rule simply means that Mimcss copies all style properties from the rules being reused and then applies our own style properties. Notice how the `width` property from the `rightbar` class overrode the value of this property defined in the `sidebar` class.

> We considered implementing a different model of re-using class names, in which the resultant CSS would only list non-inherited style properties for each class, but the actual name created for the derived class would contain names of both classes, e.g. "vbox sidebar". The advantage of this approach is in smaller code; however, the big obstacle (and as we decided - unsurmountable) is that there would be no reliable way to override classes in grouping conditional rules such as @media and @supports. Classes inside the conditional rules usually have the same names as the classes declared outside but provide different styles. There is no way to ensure, however, that the inheritance chains of the classes inside the conditional rules would be exactly the same as the chains outside; therefore, the names would be different and the overriding will not work. In addition, it is quite convenient that rules within a grouping rule "extend" the same rules from the top-level class overriding only several of the properties. And, of course, creating a name like "sidebar sidebar" wouldn't make any sense.

### Dependent Styles

In CSS, we often define styles for a class and then define additional styles (or override styles) for this class in combination with a pseudo class or a pseudo element. Also quite often we reuse an already defined class in a complex selector specifying child, descendant or sibling relationships to other classes or tags. For example:

```css
.myspan {
    padding: 4px;
}

.mydiv {
    background-color: white;
    padding: 4px;
}

.mydiv:hover {
    background-color: pink;
}

td > .mydiv, li > .mydiv {
    padding: 0;
}

.mydiv#solid {
    border: solid;
}

.mydiv > .myspan {
    border: dashed;
}
```

Mimcss supports such dependent and related rules via an easy-to-use construct using special properties of the `CombinedStyleset` type. First let's see how pseudo styles and pseudo elements are specified.


#### Pseudo Classes and Pseudo Elements
Mimcss allows names of all pseudo entities as properties in the `CombinedStyleset`. The value of these properties is another `CombinedStyleset`, so that the process of defining dependent rules is recursive. Here is how the `:hover` pseudo class from the example above is defined:

```tsx
class MyStyles extends css.StyleDefinition
{
    mydiv = css.$class({
        backgroundColor: "white",
        padding: 4,
        ":hover": { backgroundColor: "pink" }
    })
}
```

The `CombinedStyleset` type allows creating hierarchical structures with unlimited nesting levels so that expressing the following CSS is quite easy:

```css
a { color: blue; }
a:first-child { color: green; }
a:first-child:visited { color: pink; }
a:first-child:visited:hover { color: maroon; }
```

Here is the Mimcss code:

```tsx
class MyClass extends css.StyleDefinition
{
    anchor = css.$style( "a", { color: "blue",
        ":first-child": { color: "green",
            ":visited": { color: "pink",
                ":hover" { color: "maroon" }
            }
        }
    })
}
```

#### Complex Dependent Selectors
To support complex selectors, Mimcss uses a special property `"&"`, which specifies an array of two-element tuples, where the first element is a selector and the second element is a styleset assigned to this selector. Every occurrence of the ampersand symbol in the selector string will be replaced with the selector one level above - a.k.a. parent selector.

The selector in the first element of each tuple can be of several types: all of them are used to produce a selector string within which any occurrence of the ampersand symbol will be replaced with the parent selector.

- String.
- Class rule object. The selector string is obtained by taking the class name and prefixing it with the dot symbol.
- ID rule object. The selector string is obtained by taking the ID name and prefixing it with the pound sign.
- Style rule object. The selector string is the rule's selector.
- `selector()` function - allows composing selectors from many components using a template string with embedded parameters.
- Array of the above. The selector string is obtained by getting selector strings of the array items and concatenating them.

Here is how the second part of our CSS example above is expressed in Mimcss:
```tsx
class MyStyles extends css.StyleDefinition
{
    myspan = css.$class({ padding: 4 })
    solid = css.$id();

    mydiv = css.$class({
        backgroundColor: "white",
        padding: 4,
        "&": [
            [ "tr > &, li > &", { padding: 0 }],
            [this.solid, { border: "solid" }],
            [ css.selector`& > ${this.myspan}`, { border: "dashed" }]
        ]
    })
}
```

The second tuple specifies the ID rule object. The selector string obtained for this object is `"#solid` and it doesn't specify any ampersand symbols. In this case, this string is simply appended to the parent selector.

The third tuple uses the `selector` function to create a selector that combines two classes. As in the first tuple, the ampersand symbol stands for the class name behind the `mydiv` property. The `selector` function allows specifying multiple placeholders; therefore, it is possible to create arbitrary complex selectors that involve multiple classes, IDs, tags, pseudo classes and pseudo elements.

#### Selector Combinators
The `selector()` function allows building very complex selectors; however, it is quite verbose. For simpler cases, the `CombinedStyleset` type provides several *combinator* properties that make it easy to combine the "parent" selector with another selector. These combinator properties are named using the ampersand symbol prefixed or followed by one of the CSS selector combinator symbols:

- `"& "` and `" &"` for descendants
- `"&>"` and `">&"` for immediate children
- `"&+"` and `"+&"` for adjacent siblings
- `"&~"` and `"~&"` for general siblings
- `"&,"` and `",&"` for selector lists

With these properties, it is easy to specify selectors that combine the parent selector with a single class or element ID without using the `selector()` function.

```tsx
class MyStyles extends css.StyleDefinition
{
    cls1 = css.$class({})

    cls2 = css.$class({
        // will produce selector .cls2.cls1
        "&": [[ this.cls1, { color: "red" } ]]

        // will produce selector .cls2 > .cls1
        "&>": [[ this.cls1, { color: "green" } ]]

        // will produce selector .cls1 + .cls2
        "+&": [[ this.cls1, { color: "blue" } ]]
    })
}
```


## Referencing External Style Definitions
So far we used a single style definition class in our examples. In practice, it is usually desirable to divide application styles into several areas and use a separate style definition class for each of them. The styles defined by these classes are not usually completely isolated from one another though; that is, rules from one definition class may need to use the rules from another one. For example, a rule in class *A* may need to extend the rule from class *B* or a selector may need to combine CSS classes from two or more style definition classes.

Mimcss allows one style definition class to reference another one via the `$use` function as in the following example:

```tsx
// CommonStyles.ts
class CommonStyles extends css.StyleDefinition
{
    vbox = css.$class({
        display: "flex",
        flexDirection: "column"
    })

    standout = css.$class({
        boxShadow: { x: 10, y: 5, blur: 5, color: "red" }
    })
}

// MyStyles.ts
import {CommonStyles} from "./CommonStyles"

class MyStyles extends css.StyleDefinition
{
    common = css.$use( CommonStyles)

    sidebar = css.$class({ "+": this.common.vbox,
        position: "absolute",
        width: css.em(15),
        height: css.em(50)
    })

    rightbar = css.$class({ "+": [this.sidebar, this.common.standout],
        width: css.em(10),
        left: css.em(1)
    })
}
```

The `$use` function returns the same object that is returned by the `activate` function. The difference between the `$use` and `activate` functions is that the former doesn't insert the rules into the DOM - it only makes them available for referencing.

When the style definition class is activated and deactivated, all the used style definition classes are activated and deactivated too. This provides a nice encapsulation of the referenced classes and makes the style definition classes self-contained units.



