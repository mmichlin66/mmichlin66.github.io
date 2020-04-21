---
layout: mimcss-guide
unit: 5
title: "Mimcss Guide: Activation Strategies"
---

# Mimcss Guide: Activation Strategies

In the previous sections, we saw that rules are defined using rule definition classes and that the `$activate` function is called to insert the CSS rules into the DOM. The `$deactivate` function can be called at a later moment to remove the rules from the DOM. The question arises when we should call these functions. There is no a single answer that is good for all situations and this unit lists several of these situations and suggest an activation strategy for them.

We should consider the following factors of the activation process:
- Rules inserted into DOM occupy memory, increase style layout calculation time and increase the possibility of style conflicts. The less rules are in the DOM, the leaner, faster and less error-prone is your application.
- Inserting and removing rules into/from the DOM is a time consuming process - not only because the insertion/removal functions take time but mostly because of layout calculations that the browser must perform to account for the new or removed styles.

These two factors are contradictory: the first factor calls for having only those styles in the DOM that are relevant for the current content, while the second factor calls for inserting all the possible styles into the DOM once and leaving them there for the lifetime of the application.

The general approach is, as usual, a trade off: the styles that are used throughout your application should be inserted once and never removed, while the styles that are only used by a certain component should be inserted only when the component is mounted and removed immediately (or soon) after the component is unmounted.

## Immediate Activation
The first approach is probably the simplest and it is as close to the behavior of the CSS files as possible. In this approach, the activation is performed as soon as the style definition class is written:

```tsx
class CommonStyles extends css.StyleDefinition
{
    vbox = css.$class({ display: "flex", flexDirection: "column" })
}

export let commonStyles = css.$activate( CommonStyles);
```

The style definition class does not even have to be exported - we only export the activated stylesheet object. The rules are activated as soon as the code is loaded. This is similar in behavior to loading CSS files using the `<link>` element in HTML - the rules are loaded and activated by the browser at the application start up.

This approach is suitable for the shared styles that are used throughout the application. These can include definitions of custom CSS properties with application-wide defaults and most common layout and styling rules. Although the stylesheet can be deactivated it is usually not needed.

## Explicit Activation
In this approach, the style definition classes are exported but the `$activate` function is called only at certain points in the application - usually when the user navigates to a relevant part of the application. Depending on the application needs styles can be deactivated when navigating to the part of the application that doesn't need them.

Imagine an application that allows users to enter data into forms and also see reports and charts. It is conceivable that styles for input controls would be rather different from the styles needed to format tables and from the styles needed for charts.

This approach is also suitable for applications that employ themes. Switching themes becomes as easy as deactivating one set of rules and activating another.

## Just-in-time Activation
In this approach, the style rules are activated only when needed and deactivated as soon as they become not needed. This approach is suitable for large components that present complex UI structure, occupy the entire or a significant part of the page and stay on the screen for a while. This approach is NOT suitable for components that represent widgets.

In the just-in-time approach, the style definition class becomes an essential part of the component. It is activated when the component is mounted and deactivated when the component is unmounted.




