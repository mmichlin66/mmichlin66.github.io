---
layout: mimcss-guide
unit: 2
title: Activating Rules
---

# Mimcss Guide: Activating Rules

In the previous examples, we used the `$activate` function to define CSS rules. The `$activate` function accepts a "rule definition" class and returns an object with `classes`, `ids` and other properties through which the names of CSS classes, IDs and other entities are accessed. The `$activate` function also inserts the CSS rules into the DOM.

Sometimes, however, we want to define a set of possible CSS rules but not insert them into the DOM immediately. Imagine a component library where each component defines it own set of style rules. An application that uses the library may not use all of the components from it but only a sub-set of them. There is no need to insert into the DOM the styles that will not be used.

The second aspect of style activation is that the `$activate` function inserts the CSS rules into the DOM in a synchronous manner. Since inserting CSS rules into the DOM may cause layout changes, application developers want more control over when this insertion occurs.

Mimcss provides the `$use` function that also accepts a "rule definition" class and returns an object with `classes`, `ids` and other; however, the CSS rules are not inserted into the DOM. They can be inserted later, when the `$activate` function is called. The `$use` function can be utilized by library developers that want their style definitions to be re-used but not inserted into the DOM immediately. Here is an example:

```tsx
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

The style rule definitions are described by regular TypeScript classes. The `SidebarStyles` class uses the `BasicStyles` class by calling the `$use` function and assigning the return value to its `basic` property. When this is done, the `basic` property references the object that can refer to all the rules (and their names) defined in the `BasicStyles` class.

Before our component references properties defining the CSS class names, the rules must be activated; that is, inserted into the DOM. This is accomplished by calling the `$activate` function and passing the `SidebarStyles` class to it. We don't need to call the `$activate` function for the `BasicStyles` class: it will be activated along with the `SidebarStyles` class because the latter uses the former. (There is no harm in calling the `$activate` function for the `BasicStyles` class too - this is described later.)

Note that we could have used a variable definition outside of the `SidebarStyles` class to use the `BasicStyles` class, like in this example:

```tsx
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

The advantage of using a class from within another class versus defining a global variable is that the `$use` function would not be invoked until the class calling it is instantiated. Note also that Mimcss ensures that even if multiple classes use some class `A`, only a single instance of `A` will be created and the CSS rules defined by `A` will be inserted into DOM only once.




