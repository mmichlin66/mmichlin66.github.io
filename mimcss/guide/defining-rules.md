---
layout: mimcss-guide
unit: 1
title: "Mimcss Guide: Defining Rules"
description: "Mimcss uses TypeScript classes to mimic a CSS stylesheets and uses the classes' properties to define CSS style and at-rules."
---

# Mimcss Guide: Defining Rules

* [Style Definitions](#style-definitions)
* [Rules Activation](#rules-activation)
* [Referencing External Style Definitions](#referencing-external-style-definitions)
* [Embedding Style Definitions](#embedding-style-definitions)
* [Conditional Grouping Rules](#conditional-grouping-rules)
* [Other Rules Types](#other-rules-types)
* [Style Definition Class Properties](#style-definition-class-properties)

## Style Definitions
In regular CSS, a unit of style definition is a rule. There are regular style rules that define a selector followed by a styleset, and at-rules: @import, @font-face, @keyframes, @media, @supports and others. Rules such as @media and @support are conditional grouping rules; that is, they define a condition and a set of nested rules, which, in turn, might be style rules or at-rules. Multiple rules are combined into a CSS file, which is sometimes called a stylesheet.

In Mimcss, a stylesheet is represented by a class - called a Style Definition Class. Individual rules are defined as properties of a style definition class. More precisely, a property of a style definition class can either define a single rule or be an array of rules. If the property defines a single rule, it is called a named rule because the property name allows referring to the rule by the property name. If a property is an array of rules, those rules are called unnamed rules because there is no property by which individual rules can be addressed.

There are some rule types that are almost always defined as named rules: classes, IDs, custom properties, animations, counters, grid lines and areas. The property names, to which these rules are assigned, become the names by which these rules are referred to from the HTML rendering code. Other rules, such as tags, media and supports rules can be defined in an array without an explicit property associated with the rule. Note, however, that even for these rules it can be beneficial to be assigned to a property as each rule can be accessed at run time to manipulate the CSS styles the rule defines. Note also, that even rules defined in an array can be accessed via array indexes - this is a regular TypeScript class after all.

Let's create a simple style definition class:

```tsx
import * as css from "mimcss";

class MyStyles extends css.StyleDefinition
{
    vbox = this.$class({ display: "flex", flexDirection: "column" })

    standout = this.$id({ boxShadow: {color: "red", blur: 4} });

    defaultColor = this.$var({ "color", "black" });

    move = this.$keyframes([
        [ "from", { top: 0} ],
        [ 50, { top: css.percent(50) } ],
        [ "to", { top: "100%" } ]
    ])

    init = [
        this.$tag( "*", { boxSizing: "border-box" }),
        this.$tag( "body", { height: "100%", margin: 0 }),
        this.$style( "a:hover", { color: "navy" }),
    ]
}
```

Hopefully, the rules defined above are more or less self-explanatory. The `$tag`,`$class` and `$id` functions define style rules where the selector is a tag name, a class name and an element ID respectively. The `$style` function defines a style rule that has a selector usually more complicated than a tag or class name or an element ID. The `$tag`, `$class`, `$id` and `$style` functions accept a `Styleset` object, which is defined by Mimcss as an object with property names corresponding to the camel-cased names of CSS properties. The `$var` function defines a custom CSS property. The `$keyframes` function defines a @keyframes (animation) rule.

The rules that require names are assigned to the class's properties. The names of these properties will be later used as names of the corresponding CSS entities (classes, IDs, etc.) when writing TSX code. Rules that don't require names - such as simple tag rules or a universal rule (*) - are gathered into an array. The array does get assigned to a property, but this is only because the language's syntax requires it; this property name is usually not used in any way.

Note that we didn't specify the name of the class (nor of the ID, animation or custom property). This is because we usually don't define the names that will be used in HTML; instead, we will use the properties to refer to the class and other entities. This is a fundamental aspect of Mimcss: names are hidden from the developers, so that the developers never have a chance to misspell the names. Mimcss mechanism generates the names that will be used in HTML and makes sure that the properties, to which the rules are assigned, refer to these names.

## Rules Activation
By now we have defined our rules with a TypeScript class, but how do we insert the rules into the DOM so that they start applying to the HTML? This process is called "activation" and is accomplished using the `activate` function.

```tsx
let myStyles = css.activate( MyStyles);
```

Notice that we passed the class object to the `activate` function - we didn't create an instance of the class by ourselves. There are special situations in which you will want to create instances of the style definition class (see [Styled Components](styled-components.html) later in this guide); however, normally you pass the class object to the `activate` function and Mimcss creates an instance of it.

The `activate` function can be invoked multiple times for the same class - Mimcss makes sure that only a single instance is created and the rules are inserted into the DOM only once.

The result of the `activate` call is two-fold: first, the rules defined in the class are inserted into the DOM, and second, the `myStyles` variable can now be used to refer to the rule names. Here is how we do it in a hypothetical HTML rendering code:

```tsx
render()
{
    return <div class={myStyles.vbox.name}>
        <div id={myStyles.standout.name}>Hello!</div>
    </div>
}
```

The return value of the `activate` method is the instance of the style definition class. Properties created using one of the rule definition functions (`$class`, `$id`, etc.) implement different interfaces for different types of rules. The rules that produce names (such as class name or animation name) have the `name` property. In addition, each rule interface contains a reference to the Style Object Model rule objects such as CSSStyleRule. These can be used to manipulate styles programmatically.

While the `activate` function inserts the rules into the DOM, the `deactivate` function removes the rules from the DOM:

```tsx
css.deactivate( myStyles);
```

The `activate` and `deactivate` functions use a reference counting mechanism. If you call the `activate` function several times on the same style definition class, the styles will only be inserted once into the DOM. However, in order to remove them from the DOM, the `deactivate` function has to be called the same number of times.

In many cases, the rules don't need to be removed from the DOM and should stay active for the lifetime of the application. There are, however, situations when a set of CSS rules is only used by a specific component. In this case, it is desirable that the styles will be inserted into DOM only when the component is mounted. Moreover, when the component is unmounted, it is desirable to remove the rules from the DOM. In Mimcss, this can be accomplished by placing the calls to the `activate` and `deactivate` functions into the mounting and unmounting code respectively, for example:

```tsx
class MyComponent
{
    private styles;

    willMount()
    {
        this.styles = css.activate( MyStyles);
    }

    willUnmount()
    {
         css.deactivate( this.styles);
    }

    render()
    {
        return <div class={this.styles.vbox.name}>
            <div id={this.styles.standout.name}>Hello!</div>
        </div>
    }
}
```

What if multiple instances of the component are used at the same time? No problem! The activation infrastructure keeps the reference count of how many times each style definition class has been activated and deactivated. The rules are inserted only upon first activation and removed only upon last deactivation. And, obviously, only a single instance of the style definition class is created.

There are more sophisticated activation strategies possible and they are discussed in [Activation Strategies](activation-strategies.html) unit.

Activating and deactivating style definitions is a DOM writing activity. Without the proper care writing to the DOM can have adverse effects such as layout thrashing. Mimcss provides several methods of *activation scheduling*. The `activate` and `deactivate` functions have an optional parameter `schedulerType` that can be used to specify what scheduling/activation method to use. Alternatively (and preferably) a default scheduling method can be set using the [setDefaultSchedulerType](/mimcss/reference/modules/schedulingapi.html#setdefaultscheduler) function.

Mimcss supports several built-in scheduler types and allows the library users to create their own schedulers. For more information see the [Activation Scheduling](activation-scheduling.html) unit.


## Referencing External Style Definitions
So far we used a single style definition class in our examples. In practice, it is usually desirable to divide application styles into several areas and use a separate style definition class for each of them. The styles defined by these classes are not usually completely isolated from one another though; that is, rules from one definition class may need to use the rules from another one. For example, a rule in class *A* may need to extend the rule from class *B* or a selector may need to combine CSS classes from two or more style definition classes.

Mimcss allows one style definition class to reference another one via the `$use` function as in the following example:

```tsx
// CommonStyles.ts
class CommonStyles extends css.StyleDefinition
{
    shadow = this.$var( "boxShadow", { x: 10, y: 5, blur: 5, color: "gray" })
}

// MyStyles.ts
import {CommonStyles} from "./CommonStyles"

class MyStyles extends css.StyleDefinition
{
    common = this.$use( CommonStyles)

    // use the boxShadow custom CSS property from the CommonStyles stylesheet
    sidebar = this.$class({
        boxShadow: this.common.boxShadow,
        position: "absolute",
        width: css.em(15),
        height: css.em(50)
    })
}
```

The `$use` function returns the instance of the referenced style definition class. When our style definition class is activated and deactivated, all the referenced style definition classes are activated and deactivated too. This provides a nice encapsulation of the referenced classes and makes the style definition classes self-contained units.


## Embedding Style Definitions
When creating a set of components, developers often define small stylesheets for each component, which contain only styles for that single component. These small stylesheets are later combined into a bigger CSS files either explicitly using the @import CSS rule or via the compile-time tools. This is necessary to reduce the number of CSS files that are loaded into a Web page.

In Mimcss, the small stylesheets would be created as separate style definition classes. Normally, each style definition class creates its own `<style>` element when activated. With small style definition files defined for each component, the number of `<style>` elements would be the same as the number of components - which can be quite a big number. In order to reduce the number of `<style>` elements, Mimcss allows marking style definition classes as "embedded" by applying the `@embedded` TypeScript decorator. The decorator takes a string parameter called "category". All style definition classes marked as embedded with the same category string will be "embedded" in a single `<style>` element.

For example, developers of a widget library can create a separate style definition class for each widget component - maybe co-locating the styles and the component code in the same files. Marking all these small style definition classes as embedded with the same category string will make all rules defined in all of these classes to be inserted into a single `<style>` element.

```tsx
// WidgetAAA.tsx
@css.embedded("myLibWidgets")
class WidgetAAAStyles extends css.StyleDefinition
{
    aaa = this.$class( { background: css.Colors.orange, color: -css.Colors.orange })
}

let aaaStyles = css.activate(WidgetAAAStyles);
```

```tsx
// WidgetBBB.tsx
@css.embedded("myLibWidgets")
class WidgetBBBStyles extends css.StyleDefinition
{
    bbb = this.$class( { background: css.Colors.green, color: -css.Colors.green })
}

let bbbStyles = css.activate(WidgetBBBStyles);
```

After being decorated with `@embedded`, the style definition classes are activated as usual. In the example above, the classes are activated right after being defined; however, it is possible to activate the classes only when needed and deactivate them when they are not needed any longer. Activating one embedded class will insert rules from all classes marked with the same category. Activating multiple embedded classes will insert the rules only once; however, in order to remove the rules (if desired at all), all activated classes must be deactivated.


## Conditional Grouping Rules
CSS defines several conditional rules, such as @supports and @media. These rules contain other CSS rules. In Mimcss, these rules are modeled in the same way as the top-level style definition class. The only difference is that for the grouping rules it is beneficial (but optional) to pass the class name of the parent as a generic parameter. Here is an example of the @media rule:

```tsx
class MyStyles extends css.StyleDefinition
{
    box = this.$class( { margin: 8 })

    ifSmallScreen = this.$media( { maxWidth: 600 },
        class extends css.StyleDefinition<MyStyles>
        {
            box = this.$class({ margin: 4 })
        }
    )
}
```

The `$media` function accepts a style definition class that extends the `StyleDefinition` class with the generic type parameter set to the parent style definition class.

For the named rules (classes, IDs, animations and custom properties), Mimcss will create names that would be actually inserted into DOM. There is a significant caveat here though: if a nested rule is assigned to a property with the name that already exists in the enclosing class, the actual name for the nested rule will be the same as the actual name for the existing property. This is done because the group rules such as @supports and @media are conditional rules and the styles defined by them are supposed to override the styles defined outside of the conditions.

The `box` property in our example is used to define a CSS class in two places: as a property of the MyStyles class and as a property of the object passed to the `$media` function. Mimcss will generate a single actual class name for the `box` property and the `margin` value of 4 pixels will be used on smaller devices while the value of 8 pixels will be used on the larger ones.

Every style definition has the special property: `$parent`, which points to the style definition object that is the parent of the current style definition object in the chain of grouping rules. The type of the `$parent` property is the type of the generic parameter passed to the StyleDefinition class. For the top-level class itself the value of the `$parent` property is `undefined`.

For the grouping rules, the `$parent` property allows referencing rules defined anywhere in the chain of grouping rules. Here is an example of how we can use the `$parent` property from the @media rule:

```tsx
class MyStyles extends css.StyleDefinition
{
    defaultColor = this.$var( "color", "blue")

    ifSmallScreen = this.$media( { maxWidth: 600 },
        class extends css.StyleDefinition<MyStyles>
        {
            p = this.$style( "p", { color: this.$parent.defultColor })
        }
    )
}
```

In the top-level class, we defined a custom CSS variable that defines font color and in the @media rule, we referred to it using the `this.$parent.defaultColor` notation. Since we defined `MyStyles` class as a generic parameter for the `StyleDefinition` class, the TypeScript compiler knows the type of the `$parent` property and will help us with the autocomplete feature. Note that since we only use the `$parent` property, we don't need to define the second generic type.


## Other Rule Types
Mimcss supports all CSS rules except @charset - the latter is not needed because developers don't actually write text-based CSS files. We already covered style and grouping rules. What's left are rules like @import, @namespace, @font-face and @page.

The @import rule allows bringing in an external CSS sheet from a given URL. Mimcss is not "all or nothing" library: it can coexist with regular CSS files - whether defined in the same project or as external resources.

Mimcss supports the @import , @namespace, @font-face and @page via the `$import`, `$namespace`, `$fontface` and `$page` functions respectively. Since these rules don't produce names, they can be placed in an array along with each other and with other "unnamed" rules:

```tsx
class MyStyles extends css.StyleDefinition
{
    unnamed = [
        this.$import( "http://3rd.party.com/stylesheet.css"),

        this.$namespace( css.WebNamespaces.SVG, "svg"),

        this.$fontface({
            fontFamily: "Roboto",
            fontWeight: 700,
            src: [ {url: "roboto.woff", format: "woff"} ]
        })

        this.$page( ":first", {
            margin: [css.inch(3), css.inch(1)]
        })
    ]
}
```

Under the CSS specification, @import and @namespace rules should precede all style rules in the style sheet. Mimcss doesn't impose such a restriction: when Mimcss inserts the CSS rules into the DOM, it creates the @import statements first and the @namespace rules second, followed by other rules - regardless of their position in the style definition class. Mimcss will ignore any @import and @namespace rules specified under the nested grouping rules, such as @media and @supports - also in accordance with the CSS specification.


## Style Definition Class Properties
Style definition classes are regular TypeScript classes and thus can have any types of properties and methods. Since the main purpose of a style definition class is to define CSS style and at-rules, the majority of properties will be used to define those CSS rules by having properties initialized using functions like `$tag`, `$class`, `$id`, `$style`, etc. Note that property initializations are actually part of object construction, which run even before the body of the constructor (if given) does.

Properties can refer to other properties defined in the same class using the `this.` notation. The only requirement is that if property A uses property B, property A must be defined *after* property B.

Depending on the function used to initialize a property, it has a type that may allow some actions on the property value after the style definition has been activated (and thus there is an instance of the style definition class). For example, all style properties have a method `setValue`, which allows setting a value of a CSS property at run-time. You can also create methods in the style definition class that manipulate property values. This can be useful if you want to change values of multiple properties at once.

