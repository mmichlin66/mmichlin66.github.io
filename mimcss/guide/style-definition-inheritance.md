---
layout: mimcss-guide
unit: 7
title: "Mimcss Guide: Style Definition Inheritance"
description: "Style definition classes can use inheritance to allow changing visual aspects of the application without changing its HTML code."
---

# Mimcss Guide: Style Definition Inheritance

Style definition classes are regular TypeScript classes and thus support inheritance. Mimcss uses the inheritance mechanism to achieve style virtualization, which allows changing entire style theme with very little code.

Let's look at a simple example and see what Mimcss does in the presence of inheritance:

```tsx
class Base extends css.StyleDefinition
{
    textInput = css.$class({ padding: 4 })
}

class Derived extends Base
{
    button = css.$class({ padding: 8 })
}

let derived = css.activate(Base);
```

Nothing surprising will happen when we activate the `Derived` class: the `derived` variable will provide access to both the `textInput` and the `button` CSS classes. For each of these properties Mimcss will generate a unique CSS class name. If you don't use the **Unique** mode for name generation, the names of the classes will be `Base_textInput` and `Derived_button`.

Interesting things start happening when the derived class overrides a property from the base class:

```tsx
class Base extends css.StyleDefinition
{
    textInput = css.$class({ padding: 4 })
}

class Derived extends Base
{
    textInput = css.$class({ padding: 8 })
}

let derived = css.activate(Derived);
```

There will be a single name generated for the `derived.textInput.name` variable. The name will be `Base_textInput`; however, the style will be `{ padding: 8 }`. That is, the name is generated based on the class where the rule is defined, while the style is taken from the class that has the override.

Let's now have another style definition class that derives from the same `Base` class:

```tsx
class AnotherDerived extends Base
{
    textInput = css.$class({ padding: 16 })
}

let anotherDerived = css.activate(AnotherDerived);
```

As is probably expected, the `anotherDerived.textInput.name` will have the name `Base_textInput` and the style `{ padding: 16 }`. Thus no matter how many different derived classes we may have, they will all use the same name for the inherited properties but different styles assigned to them. This is actually in full conformance with Object-Oriented Programming paradigm and this allows us to achieve what we call "style virtualization".

The idea of "style virtualization" is to have a base "interface" that "declares" several CSS style rules and have multiple "implementations" of this interface that "implement" these rules by providing actual styles. When we need CSS classes IDs, animations and custom properties in our code, we will use the names provided by the interface. Then we can activate either this or that implementation and, voila - we can completely change the styling of our application with very little code.

Here is how we do it:

```tsx
abstract class Theme extends css.StyleDefinition
{
    abstract bgColor = css.$var( "color")
    abstract frColor = css.$var( "color")

    abstract label = css.$class();

    input = css.$style( "input", { backgroundColor: this.bgColor, color: this.frColor })
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
    bgColor = css.$var( "color", Colors.cyan)
    frColor = css.$var( "color", Colors.navy)
    label = css.$class({ color: Colors.darkblue})
}

class BeigeTheme extends Theme
{
    bgColor = css.$var( "color", Colors.beige)
    frColor = css.$var( "color", Colors.brown)
    label = css.$class({ color: Colors.darkorange})
}

theme = css.activate( BlueTheme);
```

As our "interface", we defined an abstract style definition class `Theme`. It has three abstract properties: two for custom CSS properties and one for a CSS class. Note that we didn't specify any styles for them. We are using them only to define types and names. We also created a non-abstract rule that applies for all `<input>` tags, which uses our abstract custom CSS properties to specify background and foreground colors.

> We don't have to use the 'abstract' modifier; however, it is very useful because it forces the derived classes to override these properties.

We then declared a variable `theme` of the type `Theme`. Although we didn't activate any styles, declaring a variable of this type tells the TypeScript compiler that it will have access to all the names and rules defined in `Theme`. So, we can now write our rendering code and use `theme.label.name` as a CSS class name.

We then defined two classes - `BlueTheme` and `BeigeTheme` - which derived from the abstract `Theme` class and override the abstract properties with different styles. Then we activated the `BlueTheme` class as our initial theme.

All what is left to write is the code that allows the user to choose one of the two themes, deactivate the current theme and activate the new one.

Note that a theme is just a TypeScript class that derives from the `Theme` class. This opens a door to easily "externalize" creation of themes - they can be created by 3rd-party vendors and delivered as regular JavaScript package.






