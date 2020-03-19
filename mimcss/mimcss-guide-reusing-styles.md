---
layout: mimcss-guide
unit: 2
title: Reusing Styles
---

# Mimcss Guide: Reusing Styles

With CSS pre-processors, the idea of a style rule re-using other rules (a.k.a. style extending/composing/inheriting) became very popular. Mimcss also has this capability and it uses the TypeScript's type-safety features to eliminate errors. Here is an example:

```tsx
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

It is possible to derive from classes defined in different scopes - whether from the same project or from a different (e.g. 3rd-party) library. We can re-write the above example using two style scopes:

```tsx
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

The `rules` property (in our example, of the `libStyles` object) contains class rules defined in that scope. Note, again, that these are not strings, but strongly types objects.

