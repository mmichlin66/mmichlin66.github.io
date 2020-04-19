---
layout: mimcss-guide
unit: 2
title: "Mimcss Guide: Defining Styles"
---

# Mimcss Guide: Defining Styles

## Style Rules and Styleset
Styles are defined using style rules, which usually accept some kind of selector and an object that gives values to a set of standard CSS style properties - such as `color`, `margin`, etc. This object is called a *styleset* and is defined by Mimcss using the `Styleset` type.

The `Styleset` type contains every short-hand and long-hand style property defined by the CSS standard and, if there are omissions or the Mimcss library hasn't caught up with the latest standard yet, there is a ways to add properties using the TypeScript's module augmentation technique.

The `Styleset` type might look similar to the built-in `CSSStyleDeclaration` type; however, while in `CSSStyleDeclaration`, all properties have the `string` type, in `Styleset`, each property has its own type. This provides to the developers an easier and more powerful way to specify values for the properties. Moreover, specifying invalid values will be detected as a compile-time error. Let's see several examples:

1. The `color` property. Mimcss provides names of all the built-in colors in the `Colors` type. You can either use its properties, e.g. `Colors.dodgerblue`, or directly type `"dodgerblue"`. When you start typing color names as strings, the autocomplete feature of your IDE will prompt you with the suitable names. If you misspell the color name, it will be immediately detected. You can add new named colors using the module augmentation technique. You can also specify colors as numbers, e.g. 0xFF0000 for red, which is similar to the CSS notation `"#FF0000"` but allows you to calculate the color value programmatically without the need to convert it to string. There are also special color functions such as `Colors.rgb()` or `Colors.alpha()` that allow manipulating color values. All of these methods are of course applicable not only for the `color` property but to any property that uses color.

1. The `padding` property. CSS allows specifying 1 to 4 values for the `padding` property where each of the values must specify dimension units (except for 0). In Mimcss,  the `padding` property value can be specified as a string or a number or an array of strings or numbers with 2, 3, or 4 elements. Integer numbers will be considered as `px` units, while floating point numbers will be considered as `em` units.

1. The `border` property. CSS defines the `border` property as a sequence of 1 to 3 values: width, style and color. In Mimcss you can specify the value as either a string or a number or a Color value or as a tuple of 3 elements. Moreover, Mimcss provides all possible values for the style element, so that you cannot misspell it.

Here are a few examples of how such styles are used for defining style rules:

```tsx
class MyStyles extends StyleDefinition
{
    button1 = $class({
        backgroundColor: Colors.blue,   // built-in color property
        padding: 4,                     // 4px for all sides
        border: 2                       // 2px width with default style and color
    })

    button2 = $class({
        backgroundColor: "yellow",      // built-in color constant
        padding: [4, 0.3],              // 4px top and bottom, 0.3em left and right
        border: "1px solid brown"       // defined as a string
    })

    button3 = $class({
        backgroundColor: 0xFF00,        // green
        padding: [4, "0.1in"],          // 4px top and bottom, 0.1in left and right
        border: [1, "solid", "brown"]   // defined as an array
    })
}
```

Mimcss strives to avoid defining `string` as property type, especially for those properties that have a lot of keyword values such as `justify-items`, `cursor`, `list-style-type`, `border-style`, etc. If `string` is among the possible property types, then first, the autocomplete feature doesn't work, and second, misspellings are not detected at compile time. Ultimately, the decision whether or not to have `string` for a property type is a trade-off between the above considerations and the developer's convenience. For example, specifying the `border` property value as a string in `button2` is arguably easier than using an array as in `button3` even though the autocomplete works for the `"solid"` and `"brown"` strings. Similarly, since there are so many different units for specifying lengths, Mimcss allows the `string` type for properties such as `padding`, `width`, `line-height`, etc.

## Extended Styleset
The functions that create style rules - such as `$style`, `$class`, `$id` and `$tag`, accept not just the `Styleset` type described above, but an extended variant of it called `ExtendedStyleset`. The `ExtendedStyleset` type adds a number of properties to the `Styleset` type, which allow for the following features:

- A styleset can specify that it *extends* (*composites*, *inherits*, *derives from*) one or more stylesets defined by other style rules.
- A styleset can have *dependent* (a.k.a. *nested*) stylesets for pseudo styles, pseudo entities and other kinds of selectors related to the CSS entity for which the style rule is defined.
- A styleset can specify that some properties should have the `!important` flag.

These features are discussed in details in the following sections.

### Reusing Styles

With CSS pre-processors, the idea of a style rule re-using other rules (a.k.a. style extending/composing/inheriting) became very popular. Mimcss also has this capability and it uses the TypeScript's type-safety features to eliminate errors. Here is an example:

```tsx
class MyStyles extends StyleDefinition
{
    vbox = $class({
        display: "flex",
        flexDirection: "column"
    })

    sidebar = $class({ "+": this.vbox,
        position: "absolute",
        width: "15em",
        height: "50em"
    })

    standout = $class({
        boxShadow: "10px 5px 5px red"
    })

    rightbar = $class({ "+": [this.sidebar, this.standout],
        width: "10em",
        left: "1em"
    })
}
```

The special property `"+"` of the `ExtendedStyleset` type allows specifying one or more style rules whose styles will be re-used. The `"sidebar"`class extends the `"vbox"` class, while the `"rightbar"` class extends two classes: `"sidebar"` and `"standout"`. Note how we reuse the previously defined classes by referring to them via the property names (e.g. `this.vbox`). These are not just strings, but strongly types objects, which prevents misspelling errors.

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
    box-shadow: 10px 5px 5px red;
    left: 1em;
}
```

Reusing another style rule simply means that Mimcss copies all style properties from the rules being reused and then applying our own style properties. Notice, how the `width` property from the `rightbar` class overrode the value of this property defined in the `sidebar` class.

> We considered implementing a different model of re-using class names, in which the resultant CSS would only list non-inherited style properties for each class, but the actual name created for the derived class would contain names of both classes, e.g. "vbox sidebar". The advantage of this approach is in smaller code; however, the big obstacle (and as we decided - unsurmountable) is that there would be no reliable way to override classes in grouping conditional rules such as @media and @supports. Classes inside the conditional rules usually have the same names as the classes declared outside but provide different styles. There is no way to ensure, however, that the inheritance chains of the classes inside the conditional rules would be exactly the same as the chains outside; therefore, the names would be different and the overriding will not work.

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

.mydiv > .myspan {
    border: dashed;
}
```

Mimcss supports such dependent and related rules via an easy-to-use construct using special properties of the `ExtendedStyleset` type. Here is how the above CSS would be implemented in Mimcss:

```tsx
class MyStyles extends StyleDefinition
{
    myspan = $class({ padding: 4 })

    mydiv = $class({
        backgroundColor: "white",
        padding: 4,
        ":hover": { backgroundColor: "pink" },
        "&": [
            [ "tr > &, li > &", { padding: 0 }],
            [ $selector("& > {0}", this.myspan), { border: "dashed" }]
        ]
    })
}
```

Here is what's happening here:

1. The class `myspan` is defined with a regular style property `padding`.
1. The class `mydiv` is defined with two regular style properties: `backgroundColor` and `padding`.
1. A special property `":hover"` specifies a styleset that will be assigned to a selector that is obtained by appending the string `":hover"` to the class name. Mimcss allows names of all pseudo styles and pseudo elements as properties in the `ExtendedStyleset`.
1. A special property `"&"` specifies an array of two-element tuples, where the first element is a selector and the second element is a styleset assigned to this selector. Every occurrence of the ampersand symbol in the selector string will be replace with the selector one level above - in our case the actual class name behind the `mydiv` property.
1. The second tuple uses the `$selector` function to create a selector that combines two classes. As in the first tuple, the ampersand symbol stands for the class name behind the `mydiv` property. The placeholder `{0}` will be replaced by the class name behind the `myspan` class. The `$selector` function allows specifying multiple placeholders; therefore, it is possible to create arbitrary complex selectors that involve multiple classes, IDs, tags, pseudo classes and pseudo elements.

The `ExtendedStyleset` type allows creating hierarchical structures with unlimited nesting levels so that expressing the following CSS is quite easy:

```css
a { color: blue; }

a:first-child { color: green; }

a:first-child:visited { color: pink; }

a:first-child:visited:hover { color: maroon; }
```

Here is the Mimcss code:

```tsx
class MyClass extends StyleDefinition
{
    anchor = $tag( "a", { color: "blue",
        ":first-child": { color: "green",
            ":visited": { color: "pink",
                ":hover" { color: "maroon" }
            }
        }
    })
}
```

### "!important" Style Properties
CSS allows adding the `!important` flag to any style property to increase its specificity. Since for many style properties Mimcss doesn't include the `string` type, there is no easy way to specify the `!important` flag in the property value. Instead, Mimcss provides a special property `"!"` in the `ExtendedStyleset` type, which allows specifying names of properties for which the `!important` flag should be added.

```tsx
class MyClass extends StyleDefinition
{
    widthIsImportant = $class({
        minWidth: 20,
        maxWidth: 120,
        "!": ["minWidth", "maxWidth"]
    })

    onlyMinHeightIsImportant = $class({
        minHeight: 20,
        maxHeight: 120,
        "!": "minHeight"
    })
}
```

The value of the `"!"` property is either a single name or an array of names of CSS properties. Note that Mimcss only allows valid names of CSS properties and not just arbitrary strings, so that misspellings are caught at compile time.

## Referencing External Style Definitions
So far we used a single style definition class in our examples. In practice, it is usually desirable to divide application styles into several areas and use a separate style definition class for each of them. The styles defined by these classes are not usually completely isolated from one another though; that is, rules from one definition class may need to use the rules from another one. For example, a rule in class *A* may need to extend the rule from class *B* or a selector may need to combine CSS classes from two or more style definition classes.

Mimcss allows one style definition class to reference another one via the `$use` function as in the following example:

```tsx
// CommonStyles.ts
class CommonStyles extends StyleDefinition
{
    vbox = $class({
        display: "flex",
        flexDirection: "column"
    })

    standout = $class({
        boxShadow: "10px 5px 5px red"
    })
}

// MyStyles.ts
import {CommonStyles} from "./CommonStyles"

class MyStyles extends StyleDefinition
{
    common = $use( CommonStyles)

    sidebar = $class({ "+": this.common.rules.vbox,
        position: "absolute",
        width: "15em",
        height: "50em"
    })

    rightbar = $class({ "+": [this.sidebar, this.common.rules.standout],
        width: "10em",
        left: "1em"
    })
}
```

The `$use` function returns the same object that is returned by the `$activate` function. The difference between the `$use` and `$activate` functions is that the former doesn't insert the rules into the DOM - it only makes them available for referencing.

It is possible to call the `$use` function outside of any style definition class - it can be assigned to a variable and then used wherever this variable is visible. There is a significant advantage, however, of calling the `$use` function from inside a style definition class: when the style definition class is activated and deactivated, all the referenced classes will be activated and deactivated too. This provides a nice encapsulation of the referenced classes and makes the style definition classes self-contained units.



