---
layout: mimcss-guide
unit: 1
title: "Mimcss Guide: Defining Rules"
---

# Mimcss Guide: Defining Rules

* [Rule Definitions](#rule-definitions)
* [Style Definitions](#style-definitions)
* [Rules Activation](#rules-activation)
* [Grouping Rules](#grouping-rules)
* [Other Rules](#other-rules)

## Rule Definitions
In regular CSS a unit of style definition is a rule. There are regular style rules that define a selector followed by a styleset, and at-rules: @import, @font-face, @keyframes, @media, @supports and others. Rules such as @media and @support are conditional grouping rules; that is, they define a condition and a set of nested rules, which, in turn, might be style rules or at-rules. Multiple rules are combined into a CSS file, which is sometimes called a stylesheet.

In Mimcss, a stylesheet is represented by a class - called a Style Definition class. Individual rules are defined as properties of a style definition class. More precisely, a property of a style definition class can either define a single rule or be an array of rules. If the property defines a single rule, it is called a named rule because the property name allows referring to the rule by the property name. If a property is an array of rules, those rules are called unnamed rules because there is no property by which individual rules can be addressed.

There are some rule types that are almost always defined as named rules: classes, IDs, custom properties and animations. The property names to which these rules are attached become the names by which these rules are referred to from the HTML rendering code.

## Style Definitions
Let's create a simple style definition class:

```tsx
import * as css from "mimcss";

class MyStyles extends css.StyleDefinition
{
    init = [
        css.$style( "*", { boxSizing: "border-box" }),
        css.$style( "body", { height: "100%", margin: 0 }),
    ]

    vbox = css.$class({ display: "flex", flexDirection: "column" })

    standout = css.$id({ boxShadow: {color: "red", blur: 4} });

    defaultColor = css.$var({ "color", "black" });

    move = css.$animation([
        [ "from", { top: 0} ],
        [ 50, { top: "50%" } ],
        [ "to", { top: "100%" } ]
    ])
}
```

Hopefully, the rules defined above are more or less self-explanatory. The `$style` function defines a basic style rule that has a selector string and a `Styleset` object. The `Styleset` type is defined by Mimcss as an object with property names corresponding to the camel-cased names of CSS properties. The `$style` function defines a style rule with arbitrary selector. The `$class` and `$id` functions define style rules where the selector is a class and an element ID respectively. The `$var` function defines a custom CSS property. The `$animation` function defines a @keyframes rule.

The rules that require names are assigned to the class's properties. The names of these properties will be later used as names of the corresponding CSS entities (classes, IDs, etc.) when writing TSX code. Rules that don't require names - such as simple tag rules or a universal rule (*) - are gathered into an array. The array does get assigned to a property, but this is only because the language's syntax requires it; this property name is not used in any way.

Note that we didn't specify the name of the class (nor of the ID, animation or custom property). This is because we will never use the actual name; instead, we will use the property to refer to the class. This is a fundamental aspect of Mimcss: names are hidden from the developers, so that the latter never have a chance of misspelling the former.

## Rules Activation
By now we have defined our rules with a TypeScript class; however, how do we insert the rules into the DOM so that they start applying to the HTML? This process is called "activation" and is accomplished using the `$activate` function.

```tsx
let myStyles = css.$activate( MyStyles);
```

Notice that we passed the class object to the `$activate` function - we didn't create an instance of the class by ourselves. There are special situations in which you will want to create instances of the style definition class (see Styled Components later in this guide); however, normally you pass the class object to the `$activate` function and Mimcss creates an instance of it.

The `$ctivate` function can be invoked multiple times for the same class - Mimcss makes sure that only a single instance is created and the rules are inserted into the DOM only once.

The result of the `$activate` call is two-fold: first, the rules defined in the class are inserted into the DOM, and second, the `myStyles` variable can now be used to refer to rule names. Here is how we do it in a hypothetical HTML rendering code:

```tsx
render()
{
    return <div class={myStyles.vbox.name}>
        <div id={myStyles.standout.name}>Hello!</div>
    </div>
}
```

The return value of the `$activate` method is the instance of the style definition class. Properties created using one of the rule definition functions (`$class`, `$id`, etc.) implement different interfaces for different types of rules. The rules that produce names (such as class name or animation name) have the `name` property. In addition, each rule interface contains a reference to the Style Object Model rule objects such as CSSStyleRule. These can be used to manipulate styles programmatically.

If the `$activate` function inserts the rules into the DOM, the `$deactivate` function removes the rules from the DOM:

```tsx
css.$deactivate( myStyles);
```

The `$activate` and `$deactivate` functions use the reference counting mechanism. If you call the `$activate` function several times on the same style definition class, the styles will only be inserted once into the DOM. However, in order to remove them from the DOM, the `$deactivate` function has to be called the same number of times.

In many cases, the rules don't need to be removed from the DOM and should stay active for the lifetime of the application. There are, however, situations when a set of CSS rules is only used by a specific component. In this case, it is desirable that the styles will be inserted into DOM only when the component is mounted. Moreover, when the component is unmounted, it is desirable to remove the rules from the DOM. In Mimcss, this can be accomplished by placing the calls to the `$activate` and `$deactivate` functions into the mounting and unmounting code respectively, for example:

```tsx
class MyComponent
{
    private styles;

    willMount()
    {
        this.styles = css.$activate( MyStyles);
    }

    willUnmount()
    {
         css.$deactivate( this.styles);
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

There are more sophisticated activation strategies possible and they are discussed in [Activation Strategies](mimcss-guide-activation-strategies.html) unit.

Activating and deactivating style definitions is a DOM writing activity. Without the proper care writing to the DOM can have adverse effects such as layout thrashing. Mimcss provides several methods of *activation scheduling*. The `$activate` and `$deactivate` functions have an optional parameter `schedulerType` that can be used to specify what scheduling/activation method to use. Alternatively (and preferably) a default scheduling method can be set using the `setDefaultSchedulerType` function.

Mimcss supports several built-in scheduler types and allows the library users to create their own schedulers. For more information see the [Activation Scheduling](mimcss-guide-activation-scheduling.html) unit.

## Grouping Rules
CSS defines several grouping rules: @supports, @media and @document. These rules contain other CSS rules. In Mimcss, these rules are modeled in the same way as the top-level style definition class. The only difference is that for the grouping rules it is beneficial (but optional) to pass the class name of the parent as a generic parameter. Here is an example of the @media rule:

```tsx
class MyStyles extends css.StyleDefinition
{
    box = css.$class( { margin: 8 })

    ifSmallScreen = css.$media( { maxWidth: 600 },
        class extends css.StyleDefinition<MyStyles>
        {
            box = css.$class({ margin: 4 })
        }
    )
}
```

The `$media` function accepts a style definition class that extends the `StyleDefinition` class with the generic type parameter set to the top-level style definition class.

For the named rules (classes, IDs, animations and custom properties), Mimcss will create names that would be actually inserted into DOM. There is a significant caveat here though: if a nested rule is assigned to a property with the name that already exists in the enclosing class, the actual name for the nested rule will be the same as the actual name for the existing property. This is done because the group rules such as @supports, @media and @document are conditional rules and the styles defined by them are supposed to override the styles defined outside of the conditions.

The `box` property in our example is used to define a CSS class in two places: as a property of the MyStyles class and as a property of the object passed to the `$media` function. Mimcss will generate a single actual class name for the `box` property and the `margin` value of 4 pixels will be used on smaller devices while the value of 8 pixels will be used on the larger ones.

Every style definition has the `owner` property inherited from the StyleDefinition class. The type of this property is the type of the generic parameter passed to the StyleDefinition class. The `owner` property is the pointer to the top-level class. For the top-level class itself the value of the `owner` property is the same as `this` - it essentially points to itself - and, therefore, there is no real case for using the `owner` property in the top-level classes. For the grouping rules, however, the `owner` property allows referencing rules defined in the top-level class and that's why it is important to specify the generic parameter as the name of the top-level class. Here is how we can use the `owner` property from the @media rule:

```tsx
class MyStyles extends css.StyleDefinition
{
    defaultColor = css.$var( "color", "blue")

    ifSmallScreen = css.$media( { maxWidth: 600 },
        class extends css.StyleDefinition<MyStyles>
        {
            p = css.$style( "p", { color: this.owner.defultColor })
        }
    )
}
```

In the top-level class, we defined a custom CSS variable that defines font color and in the @media rule, we referred to it using the `this.owner.defaultColor` notation. Since we defined `MyStyles` class as a generic parameter for the StyleDefinition, the TypeScript compiler knows the type of the `owner` property and will help us with the autocomplete feature.


## Other Rules
Mimcss supports all CSS rules except @charset - the latter is not needed because developers don't actually write text-based CSS files. We already covered style and grouping rules. What's left are rules like @import, @namespace, @font-face and @page.

The @import rule allows bringing in an external CSS sheet from a given URL. Mimcss is not "all or nothing" library: it can coexist with regular CSS files - whether defined in the same project or as external resources.

Mimcss supports the @import , @namespace, @font-face and @page via the `$import`, `$namespace`, `$fontface` and `$page` functions respectively. Since these rules don't produce names, they can be placed in an array along with each other and with other "unnamed" rules:

```tsx
class MyStyles extends css.StyleDefinition
{
    unnamed = [
        css.$import( "http://3rd.party.com/stylesheet.css"),

		css.$namespace( css.WebNamespaces.SVG, "svg"),

        css.$fontface({
            fontFamily: "Roboto",
            fontWeight: 700,
            src: [ {url: "roboto.woff", format: "woff"} ]
        })

        css.$page( ":first", {
            margin: ["3in", "1in"]
        })
    ]
}
```

Under the CSS specification, @import and $namespace rules should precede all style rules in the style sheet. Mimcss doesn't impose such a restriction: when Mimcss inserts the CSS rules into the DOM, it creates the @import statements first and the @namespace rules second, followed by other rules - regardless of their position in the style definition class. Mimcss will ignore any @import and @namespace rules specified under the nested grouping rules, such as @media and @supports - also in accordance with the CSS specification.

The majority of CSS rules require specifying values for the style properties and that's what the next unit will cover.



