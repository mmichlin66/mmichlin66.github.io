---
layout: mimcss
---

# Mimcss: Style Authoring in TypeScript

Mimcss is a TypeScript library that allows authoring CSS styles without creating CSS files. Instead, the styles are created via TypeScript programming. You code your styling rules including CSS classes, selectors, animations, media etc. by creating TypeScript classes. The Mimcss library processes these classes and creates the rules that are inserted into a `<style>` element in the `<head>` of you HTML document. As a result, your application or library bundle is self contained and doesn't require a separate CSS bundle. There are more benefits to this way of creating styles, but first let's talk about the motivation for creating Mimcss.

### Motivation
We increasingly create our Web applications using TypeScript. As a typed language it offers significant benefits to developers in the following ways:

- Many errors that would only be detected at run-time when using JavaScript, are compile-time errors with TypeScript.
- IDEs provide significant help by prompting for appropriate types and values as developers write code.

We get the above benefits when laying out the HTML structure of our pages or components as TypeScript has a built-in type checking for JSX. We don't, however, get any help when we need to refer to CSS entities from our code. How many times did you chase a bug, which turned out to be a misspelled CSS class name? How frustrating is it, when you are writing a component and you know that there is a CSS class for a proper styling, that you just don't remember the class name and have to dig through piles of CSS files to find it? How do you scope your CSS rule names? Are you using BEM notation to create the unique but unwieldy names? What about creating multiple CSS rules that are very similar to each other but differ in one property?

There are many attempts to address the above issues. Most of them use CSS pre-processors and are usually part of the build pipeline. The problem with the pre-processors is that they don't provide any help while you are writing your code. If you create a new class in a CSS file and then go to your code where you need to use it, without running the pre-processor, your IDE will not know that a new class has been created and will not prompt you with its name.

Mimcss takes a different approach by dispensing with CSS files altogether. You just don't write CSS files; instead you write TypeScript code, which becomes an integral part of your application or library bundle. You define you class, ID and animation names as members of a class and as soon as you do that the magic of the TypeScript's powerful typing system makes these names available to your application code as named properties of your class.

There is a second motivation aspect for creating Mimcss: making working with CSS style properties a little bit easier and a little bit more type safe. Style properties are used not only when defining CSS rules but also when setting styles on HTML elements. The underlying CSS type is CSSStyleDeclaration and it is essentially an object with a lot of properties that all have the `string` type. Thus no matter what the style property meaning is - whether it is a length, a color or a combination of keywords - developers set their values as strings. This is not only inconvenient but also error-prone (these two almost always come together).

Mimcss defines a Styleset type, which has the same properties as CSSStyleDeclaration, but with different types. Mimcss also defines multiple types that allow setting style properties with more convenience and type safety. For example, the `display` property has the `DisplayStyleType` type, which is defined as a union of possible string values: `"none" | "block" | "flex" | ... | "grid"`. This way you cannot misspell the property value and then spent the next hour trying to find out why the page content is not being laid out properly.

### Anti-Motivation
There is one thing that Mimcss explicitly doesn't try to address: how to organize your styles in an efficient way. Mimcss provides the tools that make organizing easier and less error-prone; however, it doesn't have any say in how you use CSS entities and how you apply them to your HTML. If you want to assign styles based on element IDs instead of classes (probably a bad idea), Mimcss allows you to do that. Mimcss allows you to have CSS classes to "inherit" from other classes; however, it doesn't have any opinion on whether and when you should do it.

In short, Mimcss doesn't aim to change the CSS styling paradigm - it aims only at making it easier and less error-prone to use.

### Quick Start
Let's assume that you need to create several simple styles for a couple of classes and an element ID. With CSS you would create a CSS file:

```css
/* MyStyles.css */
.vbox {
    display: flex;
    flex-direction: column;
}

.hbox {
    display: flex;
    flex-direction: row;
}

#important-element {
    background-color: #FFCC88;
    font-weight: bold;
}
```
Then, in your component's TypeScript code, you would refer to the CSS classes using their names as string literals:

```tsx
/* MyComponent.tsx */
import "./MyStyles.css"

render()
{
    return <div className="vbox">
        <div id="important_element"/>
        <div className="hbox"/>
   </div>
}
```
With Mimcss, you create a TypeScript class and then, in your component's TypeScript code, you refer to the CSS classes using their names as properties:

```tsx
/* MyStyles.ts */
import {$class, $id, $activate} from "mimcss"

class MyStyleDefinitions
{
    vbox = $class({
        display: "flex",
        flexDirection: "column",
    });

    hbox = $class({
        display: "flex",
        flexDirection: "row",
    });

    importantElement = $id({
        color: "blue",
        fontWeight: bold,
    });
}

export let MyStyles = $activate( MyStyleDefinitions);

/* MyComponent.tsx */
import {MyStyles} from "./MyStyles"

render()
{
    return <div className={MyStyles.classes.vbox}>
        <p id={MyStyles.ids.importantElement}>Hello!</p>
        <div className={MyStyles.classNaes.hbox}/>Hello!</div>
   </div>
}
```

The TypeScript variant is obviously more verbose; however, let's see what we get in return. As we define our classes and IDs as properties of the MyStyles class, they automatically become properties of the `MyStyles.classes` and `MyStyles.ids` objects. This immediately brings us the following advantages:

- The Intellisense mechanism of our IDE will prompt us with the list of defined names. As soon as we type `MyStyles.classes` the IDE will present the list of all the classes defined in our style definition object. Note that Mimcss puts names of classes and IDs (as well as animations and custom properties) into different objects, so that the chances that you use an ID name instead of a class name are lower.
- If we change the name of or remove the property in the MyStylesDefinition class and forget to change it in our component's `render` method, the project will not build. Thus a compile time error will prevent a much-harder-to-find run-time error.
- Don't know if you noticed but there was a misspelling of the identifier name in the CSS-based `render` method above: we "accidentally" used the underscore instead of the dash. Such errors would only manifest themselves at run-time and they are notoriously difficult to find. In Mimcss-based code, such run-time errors are simply not possible because they will be detected at compile time.
- The names we are using in our code are not actually the names that will be used in the resulting HTML. The actual names to use in HTML will be defined based on several factors described later; the important fact is that the Mimcss infrastructure ensures that they will be unique.
- The `import "./MyStyles.css"` statement in the CSS-based component file doesn't work on its own but only with the help of a plug in to our bundler (e.g. Webpack). In Mimcss code, there is no need in such a plug in - everything is just a pure TypeScript code.

### Names in Mimcss
We already mentioned that the names you use when referring to your classes, IDs, animations and custom properties are not the names that are actually used in HTML. Different classes can define properties with identical names and they will be unique when applied to HTML.

Consider the following example, where we have two classes (that might be coming from different libraries):

```tsx
/* MyStyles.ts */
export let MyStyles = $activate( class
{
    emphasized = $class({ color: "red", fontWeight: "700" });
});

/* OtherStyles.ts */
export let OtherStyles = $activate( class
{
    emphasized = $class({ color: "orange", fontStyle: "italic" });
});

/* MyComponent.tsx */
import {MyStyles} from "./MyStyles"
import {OtherStyles} from "./OtherStyles"

render()
{
    return <div>
        <p className={MyStyles.classes.emphasized}>Hello!</p>
        <p className={OtherStyles.classes.emphasized}>Hello!</p>
   </div>
```

Although the names of the properties defining the CSS classes are the same, Mimcss will use different names when creating CSS rules and inserting them into the DOM.

Mimcss has two modes of assigning names and both ensure that they are unique within your application.

The first mode is called "Scoped" and it creates names that combine the name of the class that defined the property and the name of the property itself, thus creating a two-level scoping. In the above example, the string value of the `MyStyles.classNames.emphasized` property will be `".MyStyles_emphasized"`, while the string value of the `OtherStyles.classNames.emphasized` property will be `".OtherStyles_emphasized"`. These names clearly refer to the place where the class was defined and, therefore, this method should be used during development.

The second method of assigning names is called "Unique" and it produces names by appending an incrementally increasing number to a prefix. The default prefix is `"n"` but it can be changed programmatically. In the example above, the string values of the two classes might be generated as `"n34"` and `"n73"`. This method produces short names without a real possibility to relate back to the place in the code where they were defined; therefore, this method should be used for release builds.

The default mode is Scoped. In order to switch to the Unique mode, the application should call the Mimcss's `useOptimizedStyleNames` function. This function accepts an optional `prefix` parameter that can specify the prefix to be used for generating unique names. The `useOptimizedStyleNames` function must be called very early in the application life because the mode must be set before any style definition classes are processed.

### Reusing Styles
With CSS pre-processors, the idea of a style rule re-using (a.k.a. extending) other rules became very popular. Mimcss also has this capability and it uses the TypeScript's type-safety features to eliminate errors. Here is an example:

```typescript
class MyStyles
{
    vbox = $class({ display: "flex", flexDirection: "column", });

    sidebar = $class({
        $extends: this.vbox,
        position: "absolute",
        width: "15em",
        height: "50em"
    });

    standout = $class({ boxShadow: "10px 5px 5px red;", });

    rightbar = $class({
        $extends: [this.sidebar, this.standout],
        left: "1em",
    });
}
```
The `"sidebar"`class extends the `"vbox"` class, while the `"rightbar"` class extends two classes: `"sidebar"` and `"standout"`. Note how we reuse the previously defined classes by referring to them via the property names (e.g. `this.vbox`). These are not just strings, but strongly types objects, which prevents misspelling errors.

It is possible to derive from classes defined in different scopes - whether from the same project or from a different (e.g. 3rd-party) library. We can redo the above example using two style scopes:

```typescript
/* LibStyles.ts */
class LibStyles
{
    vbox = $class({ display: "flex", flexDirection: "column", });

    standout = $class({ boxShadow: "10px 5px 5px red;", });

}

/* MyStyles.ts */
import {LibStyles} from "./LibStyles"

let libStyles = $activate( LibStyles);

class MyStyles
{
    sidebar = $class({
        $extends: libStyles.rules.vbox,
        position: "absolute",
        width: "15em",
        height: "50em"
    });

    rightbar = $class({
        $extends: [this.sidebar, libStyles.rules.standout],
        left: "1em",
    });
}
```

The `rules` property (in our example, of the `LibStyles` object) contains class rules defined in that scope. Note, again, that these are not strings, but strongly types objects.

### Types of Rules
So far we have been playing with mostly class and ID styling rules. CSS has many different types of rules in addition to classes and IDs: tag-based, selector-based, custom properties, animations (@keyframes), @media, @supports, etc.

Mimcss supports these types with a syntax similar to that of classes. There are two distinct kinds of rules that Mimcss recognizes: those that produce names and those that don't. Rules that produce names are: classes, IDs, animations and custom properties. The names that these rules produce are accessed as properties under the `classes`, `ids`, `animations` and `vars` objects respectively. In order to properly produce a name, the rules should be used as an assignment to a class member:

```typescript
export let MyStyles = $activate( class
{
    vbox = $class({ display: "flex", flexDirection: "column", });

    standout = $id({ boxShadow: "10px 5px 5px red;", });

    defaultColor = $custom({ color: "black", });

});
```

The other kind of rules are those that don't produce names. For example, a selector based rule doesn't produce a name of its own (although it usually uses names produced by other rules e.g. classes). Such rules can be created in two different ways:

```typescript
export let MyStyles = $activate( class
{
    hr = $rule( "hr", { width: "100%" });
    firstRowInTable = $rule( "table row:first-of-type" , { color: "blue", });
});

// OR

export let MyStyles = $activate( class
{
    $unnamed = [
        $rule( "hr", { width: "100%" }),
        $rule( "table row:first-of-type" , { color: "blue", }),
    ]
});

```

The first form creates a property in the style definition class and makes the rule object accessible via this property in the `rules` object (e.g. `MyStyles.rules.firstRowInTable`). This allows manipulating the rule programmatically. The second form doesn't create any property and doesn't make the rule available for programmatic manipulation and is suitable for rules that remain unchanged forever.

### Activation
In the previous examples, we used the `$activate` function to define CSS rules. The `$activate` function accepts a "rule definition" class and returns an object with `classes`, `ids` and other properties through which the names of CSS classes, IDs and other entities are accessed. The `$activate` function also inserts the CSS rules into the DOM.

Sometimes, however, we want to define a set of possible CSS rules but not insert them into the DOM immediately. Imagine a component library where each component defines it own set of style rules. An application that uses the library may not use all of the components from it but only a sub-set of them. There is no need to insert into the DOM the styles that will not be used.

The second aspect of style activation is that the `$activate` function inserts the CSS rules into the DOM in a synchronous manner. Since inserting CSS rules into the DOM may cause layout changes, application developers want more control over when this insertion occurs.

Mimcss provides the `$use` function that also accepts a "rule definition" class and returns an object with `classes`, `ids` and other; however, the CSS rules are not inserted into the DOM. They can be inserted later, when the `$activate` function is called. The `$use` function can be utilized by library developers that want their style definitions to be re-used but not inserted into the DOM immediately. Here is an example:

```typescript
/* MyStyles.ts */
export class BasicStyles
{
    vbox = $class({
        display: "flex",
        flexDirection: "column",
    });

    hbox = $class({
        display: "flex",
        flexDirection: "row",
    });

    standout = $class({ boxShadow: "10px 5px 5px red;", });
}

export class SidebarStyles
{
    basic = $use( BasicStyles);

    sidebar = $class({
        $extends: this.basic.rules.vbox,
        position: "absolute",
        width: "15em",
        height: "50em"
    });

    rightbar = $class({
        $extends: [this.sidebar, this.basic.rules.standout],
        left: "1em",
    });
}

/* MyComponent.tsx */
let styles = $activate( SidebarStyles);

render()
{
    return <div className={styles.classes.sidebar}>
        <p>Hello!</p>
        <p>Hello again!</p>
   </div>
```

The style rule definitions are described by regular TypeScript classes. The `SidebarStyles` class *uses* the `BasicStyles` class by calling the `$use` function and assigning the return value to its `basic` property. When this is done, the `basic` property references the object that can refer to all the rules (and their names) defined in the `BasicStyles` class.

Before our component references properties defining the CSS class names, the rules must be *activated*; that is, inserted into the DOM. This is accomplished by calling the `$activate` function and passing the `SidebarStyles` class to it. We don't need to call the `$activate` function for the `BasicStyles` class: it will be activate along with the `SidebarStyles` class because the latter uses the former. (There is no harm in calling the `$activate` function for the `BasicStyles` class too - this is described later.)

Note that we could have used a variable definition outside of the `SidebarStyles` class to *use* the `BasicStyles` class, like in this example:

```typescript
/* MyStyles.ts */
export class BasicStyles
{
    ...
}

let basic = $use( BasicStyles);

export class SidebarStyles
{
    sidebar = $class({
        $extends: basic.rules.vbox,
        ...
    });

    ...
}
```

The advantage of *using* a class from within another class versus defining a global variable is that the `$use` function would not be invoked until the class calling it is instantiated. Note also that Mimcss ensures that even if multiple classes *use* some class `A`, only a single instance of `A` will be created and the CSS rules defined by `A` will be inserted into DOM only once.




