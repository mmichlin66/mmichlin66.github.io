---
layout: mimcss-guide
unit: 0
title: Introduction
---

# Mimcss Guide: Introduction

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

### Features
The goal of the Mimcss library is to support all CSS features in a type-safe and convenient manner.

- Compatible with and independent of any library: use with React, Angular, Vue etc.
- Supports all CSS rule types in a type-safe manner:
    - Class-, tag-, and ID-based rules
    - Complex selectors
    - Custom CSS properties
    - Animation (@keyframes) rules
    - @media and @supports rules
    - @font-face rules
- Names of classes, IDs, animations and custom CSS properties are auto-generated, while developers use TypeScript objects and properties that return these names.
- CSS rules can extend other CSS rules.
- Type safety and autocomplete (Intellisense) support for the majority of CSS properties. This eliminates the need for developers to remember CSS keywords and eliminates misspelling errors.
- Using numbers for default dimensions of length, angle, percent and other CSS property types.
- Using Booleans, numbers, tuples, arrays, objects and functions (in addition to strings) when specifying CSS property values to increase convenience and eliminate misspelling errors.
- Convenience functions for specifying complex property values (e.g. colors).
- Type safety for custom CSS properties by defining what standard CSS property type they represent.
- Access to CSSRule-derived objects for direct rule and property manipulation.

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
    background-color: #FC8;
    font-weight: 700;
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
        color: 0xFFCC88,
        fontWeight: 700,
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
- If you noticed, there was a misspelling of the identifier name in the CSS-based `render` method above: we "accidentally" used the underscore instead of the dash. Such errors would only manifest themselves at run-time and they are notoriously difficult to find. In Mimcss-based code, such run-time errors are simply not possible because they will be detected at compile time.
- Notice how we used numbers instead of strings when defining `color` and `fontWeight` properties. Although seemingly a minor feature, this can add extra convenience and speed during development.
- The names we are using in our code are not actually the names that will be used in the resulting HTML. The actual names to use in HTML will be defined based on several factors described later; the important fact is that the Mimcss infrastructure ensures that they will be unique.
- The `import "./MyStyles.css"` statement in the CSS-based component file doesn't work on its own but only with the help of a plug in to our bundler (e.g. Webpack). In Mimcss code, there is no need in such a plug in - everything is just a pure TypeScript code.

