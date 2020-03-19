---
layout: mimcss-guide
unit: 4
title: Rule Types
---

# Mimcss Guide: Rule Types

So far we have been playing with mostly class and ID styling rules. CSS has many different types of rules in addition to classes and IDs: tag-based, selector-based, custom properties, animations (@keyframes), @media, @supports, etc.

Mimcss supports these types with a syntax similar to that of classes. There are two distinct kinds of rules that Mimcss recognizes: those that produce names and those that don't. Rules that produce names are: classes, IDs, animations and custom properties. The names that these rules produce are accessed as properties under the `classes`, `ids`, `animations` and `vars` objects respectively.

### Named Rules
In order to properly produce a name, the rules should be used as an assignment to a class member:

```tsx
class MyStyles
{
    vbox = $class({ display: "flex", flexDirection: "column", });

    standout = $id({ boxShadow: "10px 5px 5px red", });

	move = $animation([
		[ "from", { top: 0} ],
		[ 50, { top: "50%" } ],
		[ "to", { top: "100%" } ]
	]);

    defaultColor = $custom({ color: "black", });
}
```

### Unnamed Rules
The other kind of rules are those that don't produce names. For example, a selector based rule doesn't produce a name of its own (although it usually uses names produced by other rules e.g. classes). Such rules can be created in two different ways:

```tsx
class MyStyles
{
    hr = $rule( "hr", { width: "100%" });
    firstRowInTable = $rule( "table row:first-of-type" , { color: "blue", });
}

// OR

class MyStyles
{
    $unnamed = [
        $rule( "hr", { width: "100%" }),
        $rule( "table row:first-of-type" , { color: "blue", }),
    ]
}

```

The first form creates a property in the style definition class and makes the rule object accessible via this property in the `rules` object (e.g. `MyStyles.rules.firstRowInTable`). This allows manipulating the rule programmatically. The second form doesn't create any property and doesn't make the rule available for programmatic manipulation and is suitable for rules that remain unchanged forever.

### Group Rules
CSS defines several group rules: @supports, @media, @document and @page. These rules contain other CSS rules. In Mimcss, these rules are modeled very similarly to the top-level styling scope; however, instead of a TypeScript class, we use an object to describe the rules. Here is an example of the @media rule:

```tsx
class MyStyles
{
    box = $class( { margin: 8 })

    ifSmallScreen = $media( { maxWidth: 600 }, {
        box: $class({ margin: 4 })
    })
}
```

The `$media` function accepts an object that defines rules - often called *nested* rules. For the named rules (classes, IDs, animations and custom properties), Mimcss will create names that would be actually inserted into DOM. There is a significant caveat here though: if a nested rule is assigned to a property with the name that already exists in the enclosing class, the actual name for the nested rule will be the same as the actual name for the existing property. This is done because the group rules such as @supports, @media and @document are conditional rules and the rules defined within them are supposed to override the styles defined outside of the conditions.

The `box` property in our above example is used to define a CSS class in two places: as a property of the MyStyles class and as a property of the object passed to the `$media` function. Mimcss will generate a single actual class name for the `box` property and the `margin` value of 4 pixels will be used on smaller devices while the value of 8 pixels will be used on the larger ones.

### Import Rules
CSS has the @import rule that allows bringing in an external CSS sheet from a given URL. Mimcss supports the @import rule via the `$import` function. Since the @import rule doesn't have a name, these rules are usually placed under the `$unnamed` property (although you can use a named property if you wish to):

```tsx
class MyStyles
{
    $unnamed = [
        $import( "http://3rd.party.com/stylesheet.css")
    ]
}
```

Under the CSS specification, the @import rules should precede all style rules in the style sheet. Mimcss doesn't impose such requirements. Behind the scenes, Mimcss creates a separate `<style>` element in the `<head>` of the document and puts all the @import statements there.




