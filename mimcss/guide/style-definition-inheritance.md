---
layout: mimcss-guide
unit: 8
title: "Mimcss Guide: Style Definition Inheritance"
description: "Style definition classes can use inheritance to allow changing visual aspects of the application without changing its HTML code."
---

# Mimcss Guide: Style Definition Inheritance

Style definition classes are regular TypeScript classes and thus support inheritance. Mimcss uses the inheritance mechanism to achieve style virtualization, which allows changing entire style theme with very little code.

### Basic Inheritance
Let's look at a simple example and see what Mimcss does in the presence of inheritance:

```tsx
class Base extends css.StyleDefinition
{
    textInput = this.$class({ padding: 4 })
}

class Derived extends Base
{
    button = this.$class({ padding: 8 })
}

let derived = css.activate(Base);
```

Nothing surprising will happen when we activate the `Derived` class: the `derived` variable will provide access to both the `textInput` and the `button` CSS classes. For each of these properties Mimcss will generate a unique CSS class name. If you use the **Scoped** mode for name generation, the names of the classes will be `Base_textInput` and `Derived_button`.

Interesting things start happening when the derived class overrides a property from the base class:

```tsx
class Base extends css.StyleDefinition
{
    textInput = this.$class({ padding: 4 })
}

class Derived extends Base
{
    textInput = this.$class({ padding: 8 })
}

let derived = css.activate(Derived);
```

There will be a single name generated for the `derived.textInput.name` variable. The name will be `Base_textInput`; however, the style will be `{ padding: 8 }`. That is, the name is generated using the name of the base class, while the style is taken from the derived class.

Let's now have another style definition class that derives from the same `Base` class:

```tsx
class AnotherDerived extends Base
{
    textInput = this.$class({ padding: 16 })
}

let anotherDerived = css.activate(AnotherDerived);
```

As expected, the `anotherDerived.textInput.name` will have the name `Base_textInput` and the style `{ padding: 16 }`. Thus no matter how many different derived classes we may have, they will all use the same name for the inherited properties but different styles assigned to them. This is actually in full conformance with Object-Oriented Programming paradigm and this allows us to achieve what we call "style virtualization".

### Style Virtualization
The idea of "style virtualization" is to have a base "interface" that "declares" several CSS style rules and have multiple "implementations" of this interface that "implement" these rules by providing actual styles. When we need CSS classes, IDs, animations and custom properties in our code, we will use the names provided by the "interface". Then we can activate either this or that implementation and, voila - we can completely change the styling of our application with very little code.

```tsx
class Theme extends css.StyleDefinition
{
    @css.virtual bgColor = this.$var( "color")
    @css.virtual frColor = this.$var( "color")

    label = this.$class();

    input = this.$tag( "input", { backgroundColor: this.bgColor, color: this.frColor })
}

let theme: Theme = null;

...

render()
{
    return <form>
        <label for="favFood" class={theme.label.name}>Type your favorite food:</label>
        <input type="text" id="favFood" name="favFood" />
    </form>
}

...

class BlueTheme extends Theme
{
    bgColor = this.$var( "color", Colors.cyan)
    frColor = this.$var( "color", Colors.navy)
    label = this.$class({ color: Colors.darkblue})
}

class BeigeTheme extends Theme
{
    bgColor = this.$var( "color", Colors.beige)
    frColor = this.$var( "color", Colors.brown)
    label = this.$class({ color: Colors.darkorange})
}

theme = css.activate( BlueTheme);
```

As our "interface", we defined a style definition class `Theme`. It has two "virtual" properties defining custom CSS properties for colors (we will discuss the `@virtual` decorator a bit later) and one regular class rule for a label. Note that we didn't specify any styles for them. We are using them only to define types and names. We also created a rule that applies for all `<input>` tags, which uses our custom CSS properties to specify background and foreground colors.

We then declared a variable `theme` of the type `Theme`. Although we didn't activate any styles, declaring a variable of this type tells the TypeScript compiler that it will have access to all the names and rules defined in `Theme`. So, we can now write our rendering code and use `theme.label.name` as a CSS class name.

We then defined two classes - `BlueTheme` and `BeigeTheme` - which derived from the abstract `Theme` class and override the virtual properties with different styles. Then we activated the `BlueTheme` class as our initial theme.

All what is left to write is the code that allows the user to choose one of the two themes, deactivate the current theme and activate the new one.

Note that a theme is just a TypeScript class that derives from the `Theme` class. This opens a door to easily "externalize" creation of themes - they can be created by 3rd-party vendors and delivered as regular JavaScript package.

### `@virtual` Decorator
You probably noticed that we used the `@virtual` decorator on some of our properties in the base `Theme` class. Why did we have to use it on `bgColor` and `frColor` but not on `label` and `input`? Note that this is not simply because the properties are overridden in the derived classes - the `label` property is overridden too but we don't need to apply the `@virtual` decorator to it. The real reason is that the color properties are **used** in the same class where they are defined while they can also be overridden by the derived classes. There is a technical explanation why the decorator is needed for such properties.

> **TL;DR** The property assignments are executed as part of object construction. Let's first consider what would happen without the `@virtual` decorator. When the constructor function of the parent class (the `Theme` class in our case) runs and encounters the `input` property assignment, it sees the values of the color properties as they are at that moment - that is, undefined values. When the constructor of the derived class (e.g. the `BlueTheme` class) runs and overrides the color properties, that doesn't affect the values of the color properties remembered by the rule assigned to the `input` property. Thus, without the `@virtual` decorator, the `input` rule would not see the overridden values of the color properties.

> The `@virtual` decorator ensures that whenever a property is read, it will return the most recently assigned value. Behind the scenes, a JavaScript `Proxy` object is created for each virtual property and it remembers the last assigned value. Thus, the rule assigned to the `input` property in the `Theme` class doesn't keep the rule currently assigned to the `bgColor` property, but instead, keeps a proxy object that points to that rule. When the `bgColor` property is overridden in the `BlueTheme` constructor, the proxy object starts pointing to the overridden rule. As a result, when the rules are processed by the Mimcss mechanism, the overridden value is seen by the `input` rule.






