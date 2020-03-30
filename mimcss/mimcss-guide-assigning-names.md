---
layout: mimcss-guide
unit: 3
title: Assigning Names
---

# Mimcss Guide: Assigning Names

We already mentioned that the names you use when referring to your classes, IDs, animations and custom properties are not the names that are actually used in HTML. Different classes can define properties with identical names and they will be unique when applied to HTML.

Consider the following example, where we have two classes (that might be coming from different libraries):

```tsx
/* MyStyles.ts */
export let MyStyles = $activate( class
{
    emphasized = $class({ color: "red", fontWeight: 700 });
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

