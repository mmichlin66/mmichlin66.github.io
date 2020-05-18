---
layout: mimcss-guide
unit: 0
title: "Mimcss Guide: Introduction"
---

# Mimcss Guide: Introduction

Mimcss is a TypeScript library that allows authoring CSS styles without creating CSS files. Instead, the styles are created via TypeScript programming. You code your styling rules including CSS classes, animations, media etc. by creating TypeScript classes. The Mimcss library processes these classes and creates the rules that are inserted into `<style>` elements in the `<head>` of your HTML document. As a result, your application or library bundle is self contained and doesn't require a separate CSS bundle.

* [Features](#features)
* [Installation](#installation)
* [Quick Start](#quick-start)

## Features
The goal of the Mimcss library is to support all CSS features in a type-safe and easy-to-use manner. Mimcss provides the following capabilities:

- Compatible with and independent of any library: use with React, Angular, Vue etc.
- Co-exists with regular CSS files - doesn't require re-writing of all existing styles at once or at all. You can gradually introduce Mimcss into you project.
- Stylesheets are defined as TypeScript classes.
- Names of classes, IDs, animations and custom CSS properties are auto-generated, while developers use properties that return these names.
- Stylesheets can be dynamically activated and deactivated.
- All CSS rule types are supported including style rules and at-rules.
- Custom CSS properties are supported in a type safe manner.
- Style rules can be nested and can extend other style rules.
- All pseudo styles and pseudo elements are supported using convenient and compact notation.
- Stylesheet classes support inheritance - elegant way to implement theming.
- Type safety and autocomplete support for CSS property values to eliminate misspellings.
- Using numbers for default units of length, angle, percent and other CSS property types.
- Using Booleans, numbers, tuples, arrays, objects and functions (in addition to strings) when specifying CSS property values to increase convenience and eliminate misspellings.
- Convenience functions for specifying complex property values (e.g. colors, images, filters, shapes, calc(), etc.)
- Access to CSSRule-derived objects for direct rule and property manipulation.

## Installation
Mimcss is available as an NPM package and you can install it using the following command:

```shell
npm i mimcss
```

Although Mimcss is a JavaScript library, its main purpose is to provide type safety when working with styles; it is intended to be used in TypeScript projects.


## Quick Start
Let's assume that you need to create simple styles for a class and an element ID. With CSS you would create a CSS file:

```css
/* MyStyles.css */
.vbox {
    display: flex;
    flex-direction: column;
}

#important-element {
    background-color: #FC8;
    font-weight: 700;
}
```
Then, in your component's TypeScript code, you would refer to the CSS styles using their names as string literals (here and later we are using pseudo-React-style components):

```tsx
/* MyComponent.tsx */
import "./MyStyles.css";

class MyComponent
{
    render()
    {
        return <div class="vbox">
            <span id="important_element">Hello!</span>
        </div>
    }
}
```
With Mimcss, you create a TypeScript class and then, in your component's TypeScript code, you refer to the CSS classes using their names as properties:

```tsx
/* MyComponent.tsx */
import * as css from "mimcss";

// Define styles
class MyStyles  extends css.StyleDefinition
{
    vbox = css.$class({
        display: "flex",
        flexDirection: "column",
    });

    importantElement = css.$id({
        color: 0xFFCC88,
        fontWeight: 700,
    });
}

// Activate styles - insert them into DOM
let styles = css.$activate( MyStyle);

// Component definition
class MyComponent
{
    render()
    {
        return <div class={styles.vbox.name}>
            <span id={styles.importantElement.name}>Hello!</span>
        </div>
    }
}
```

The TypeScript variant is obviously more verbose; however, let's see what we get in return:

- The autocomplete mechanism of our IDE will prompt us with the list of defined names. As soon as we type `styles.` the IDE will present the list of all the properties defined in our style definition object.
- If we change the name of or remove the property in the `MyStyles` class and forget to change it in our component's `render` method, the project will not build. Thus a compile time error will prevent a much-harder-to-find run-time error.
- If you noticed, there was a misspelling of the identifier name in the CSS-based `render` method above: we "accidentally" used the underscore instead of the dash. With regular CSS, such errors would only manifest themselves at run-time and are notoriously difficult to find. In Mimcss-based code, such run-time errors are simply not possible because they will be detected at compile time.
- Notice how we used numbers instead of strings when defining `color` and `fontWeight` properties. Mimcss defines types of each style property and numerous functions so that properties can be set in a type-safe and easy-to-use way.
- The styles are not present in the browser's memory until the application activates them using the `$activate` function that inserts the styles into the DOM. There are several activation strategies - discussed later in this guide - suitable for different scenarios. The developers are in full control of when the rules are activated. Moreover, since activating rules means writing to DOM, components can synchronize this process with other DOM-writing activities.
- The names we are using in our code are not actually the names that will be used in the resulting HTML. The actual names to use in HTML will be auto-generated by the Mimcss infrastructure, which ensures that they will be globally unique. In Debug mode the generated names reflect the names used in the code, while in Release mode, the names are created with minimal length.
- The `import "./MyStyles.css"` statement in the CSS-based component file doesn't work on its own but only with the help of a plug-in to our bundler (e.g. Webpack). In Mimcss code, there is no need in such plug-ins - everything is just a pure TypeScript code.

Let's now see how style rules are defined using Mimcss.
