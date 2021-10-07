---
layout: mimcss-reference
unit: 2
title: "Mimcss Reference: Rules"
description: "Describes types and functions used to define CSS style and at-rules."
---

# Mimcss Reference: Rules

This page describes types and functions that are used to create Style Definition classes and specify style rules and at-rules.

- [Style Definition Classes](#style-definition-classes)
  - [StyleDefinition Class](#styledefinition-class)
- [Rule Functions](#rule-functions)
  - [$abstract Function](#abstract-function)
  - [$class Function](#class-function)
  - [$id Function](#id-function)
  - [$style Function](#style-function)
  - [$keyframes Function](#keyframes-function)
  - [$page Function](#page-function)
  - [$import Function](#import-function)
  - [$namespace Function](#namespace-function)
  - [$fontface Function](#fontface-function)
  - [$supports Function](#supports-function)
  - [$media Function](#media-function)
  - [$var Function](#var-function)
  - [$counter Function](#counter-function)
  - [$gridline Function](#gridline-function)
  - [$gridarea Function](#gridarea-function)
  - [$use Function](#use-function)
  - [$embed Function](#embed-function)
- [Helper Functions](#helper-functions)
  - [enableShortNames Function](#enableshortnames-function)
  - [selector Function](#selector-function)
  - [classes Function](#classes-function)
- [Rule Types](#rule-types)
  - [IRule Interface](#irule-interface)
  - [IStyleRule Interface](#istylerule-interface)
  - [DependentRules Type](#dependentrules-type)
  - [INamedEntity Interface](#inamedentity-interface)
  - [INamedStyleRule Interface](#inamedstylerule-interface)
  - [IClassRule Interface](#iclassrule-interface)
  - [IIDRule Interface](#iidrule-interface)
  - [IAnimationRule Interface](#ianimationrule-interface)
  - [IPageRule Interface](#ipagerule-interface)
  - [IImportRule Interface](#iimportrule-interface)
  - [INamespaceRule Interface](#inamespacerule-interface)
  - [IFontFaceRule Interface](#ifontfacerule-interface)
  - [IGroupRule Interface](#igrouprule-interface)
  - [ISupportsRule Interface](#isupportsrule-interface)
  - [IMediaRule Interface](#imediarule-interface)
  - [IVarRule Interface](#ivarrule-interface)
  - [ICounterRule Interface](#icounterrule-interface)
  - [IGridLineRule Interface](#igridlinerule-interface)
  - [IGridAreaRule Interface](#igridarearule-interface)

### Style Definition Classes

#### StyleDefinition Class

```tsx
export abstract class StyleDefinition<P extends StyleDefinition = any, O extends StyleDefinition = any>
{
    public constructor( parent?: P);

    /**
     * Refers to the instance of the style definition class which is the parnt of this style
     * definition object in the chain of style definition classes. Through this member, all rules
     * and other members defined in the parent definition class can be accessed.
     */
    public get $parent(): P | undefined;

    /**
     * Refers to the instance of the style definition class which is the owner of
     * this style definition object. The owner is the top-level class in the chain of style
     * definition classes. Through this member, all rules and other members defined in the owner
     * definition class can be accessed.
     */
    public get $owner(): O | undefined;
}
```

The `StyleDefinition` class is the base class that all style definition classes must derive from.

### Rule Functions

#### $abstract() Function

```tsx
export function $abstract( style: CombinedStyleset): IStyleRule
```

The `$abstract` function creates a new abstract style rule, which defines a styleset that can be extended by other style rules. Abstract rules don't have selectors and are not inserted into DOM.

**Example.** The following example defines an abstract rule that contains style properties common for all headers. The abstract rule is then used by several style rules defining concrete headers.

```tsx
class MyStyles extends css.StyleDefinition
{
    // Define styles common to all headers.
    headerBase = this.$abstract({ fontWeight: 700, fontFamily: Verdana, color: "navy" })

    // Define styles for concrete header elements extending the headerBase abstract rule.
    h1 = this.$style( "h1", { "+": this.headerBase, fontSize: 24 })
    h2 = this.$style( "h2", { "+": this.headerBase, fontSize: 20 })
    h3 = this.$style( "h3", { "+": this.headerBase, fontSize: 18 })
}
```

**Note**: The property defined as an abstract rule is of the `IStyleRule` type; however, the `cssRule` property of this type will be undefined as no real CSS rule objects are created for abstract rules.

**See Also:** [CombinedStyleset](stylesets.html#combinedstyleset-type), [IStyleRule](#istylerule-interface)

#### $class() Function

```tsx
export function $class( style?: CombinedStyleset, nameOverride?: string | IClassRule): IClassRule
```

The `$class` function creates a new class rule. The class name will be created when the rule is processed as part of the style definition class. The name can also be overridden by providing either an explicit name or another class rule. The function can be called without parameters just to "declare" the class. Such class can be later used either in conditional grouping rules or in derived style definition classes.

The returned object implements the `IClassRule` interface that has the property `name`, which should be assigned to an element class name in the HTML generating code.

**Example.** The following example defines a CSS rule for a class, which is later used in JSX expression.

```tsx
class MyStyles extends StyleDefinition
{
    red = this.$class({ color: "red" })
}

let myStyles = css.activate( MyStyles);

render()
{
    return <p className={myStyles.red.name}>This paragraph is red.</p>
}
```

**See Also:** [CombinedStyleset](stylesets.html#combinedstyleset-type), [IClassRule](#iclassrule-interface)

#### $id() Function

```tsx
export function $id( style?: CombinedStyleset, nameOverride?: string | IIDRule): IIDRule
```

The `$id` function creates a new ID rule. The ID name will be created when the rule is processed as part of the style definition class. The name can also be overridden by providing either an explicit name or another ID rule. The function can be called without parameters just to "declare" the ID. Such ID can be later used either in conditional grouping rules or in derived style definition classes.

The returned object implements the `IIDRule` interface that has the property `name`, which should be assigned to an element ID in the HTML generating code.

**Example.** The following example defines a CSS rule for an element ID, which is later used in JSX expression.

```tsx
class MyStyles extends StyleDefinition
{
    importantElement = this.$id({ color: "red" })
}

let myStyles = css.activate( MyStyles);

render()
{
    return <span id={myStyles.importantElement.name}>This is an important message.</p>
}
```

**See Also:** [CombinedStyleset](stylesets.html#combinedstyleset-type), [IIDRule](#iidrule-interface)

#### $style() Function

```tsx
export function $style( selector: CssSelector, style: RuleTypes.CombinedStyleset): RuleTypes.IStyleRule
```

The `$style` function creates a CSS style rule for an arbitrary complex selectors. The selector can be specified as a regular string or as a template string with parameters using the `selector` function.

**Example.** The following example defines a number of CSS rules for different selectors.

```tsx
class MyStyles extends StyleDefinition
{
    // all elements will be measured using the border box.
    all = this.$style( "*", { boxSizing: "border-box" })

    // first <li> element under <ul> element will be red.
    li = this.$style( "ul > li:first-child", { color: "red" })

    // define class without actual styles - just for using in the next rule.
    striped = this.$class()

    // every odd row in a "striped" table will have a light-grey background.
    row = css.style( css.selector`table${this.striped} tr:nth-child(odd)`, { backgroundColor: "lightgrey" })
}
```

**See Also:** [CssSelector](stylesets.html#cssselector-type), [CombinedStyleset](stylesets.html#combinedstyleset-type), [IStyleRule](#istylerule-interface)

#### $keyframes() Function

```tsx
export function $keyframes( frames?: AnimationFrame[], nameOverride?: string | IAnimationRule): IAnimationRule
```

The `$keyframes` function creates a new `@keyframes` CSS rule. The animation name will be created when the rule is processed as part of the style definition class. The name can be also overridden by providing either an explicit name or another animation rule. The function can be called without parameters just to "declare" the animation. Such animation can be later used either in conditional grouping rules or in derived style definition classes.

The `$keyframes` function accepts an array of `AnimationFrame` objects, each defining a *waypoint* and a styleset. Waypoints are specified either as keywords `"from"` and `"to"` or as a number representing percentage.

**Example.** The following example defines a simple animation rule.

```tsx
class MyStyles extends StyleDefinition
{
	move = this.$keyframes( [
		[ "from", { top: 0 } ],
		[ 50, { top: "50%" } ],
		[ "to"], { top: "100%" } ]
	]);
}
```

**See Also:** [AnimationFrame](#animationframe-type), [IAnimationRule](#ianimationrule-interface)

#### $page() Function

```tsx
export function $page( pseudoClass?: PagePseudoClass, style?: Styleset): IPageRule
```

The `$page` function creates a new `@page` CSS rule.

**Example.** The following example defines a `@page` rule.

```tsx
class MyStyles extends StyleDefinition
{
	firstPage = this.$page( ":first", { margin: ["2in", "1in"] })
}
```

**See Also:** [PagePseudoClass](stylesets.html#pagepseudoclass-type), [Styleset](stylesets.html#styleset-type), [IPageRule](#ipagerule-interface)

#### $import() Function

```tsx
export function $import( url: string, mediaQuery?: string | MediaQuery,
    supportsQuery?: string | SupportsQuery): IImportRule
```

The `$import` function creates a new `@import` CSS rule. This function is used to link from Mimcss-defined styles to styles defined in regular CSS files. CSS requires that the `@import` rules must be specified at the top of the CSS file and that they cannot be defined inside grouping rules. In Mimcss, the first restriction is lifted - the properties defined using the `$import` function can be specified in any order and can intermingle with properties defining other style and at-rules. The second restriction, however, stands and any invocation of the `$import` function made inside a grouping rule is ignored.

**Example.** The following example defines an `@import` rule, which is only used on smaller devices.

```tsx
class MyStyles extends StyleDefinition
{
	imports = [
        this.$import( "smallDevice.css", { maxWidth: 600 })
    ]
}
```

**See Also:** [IImportRule](#iimportrule-interface)

#### $namespace() Function

```tsx
export function $namespace( namespace: string, prefix?: string): INamespaceRule
```

The `$namespace` function creates a new `@namespace` CSS rule. CSS requires that the `@namespace` rules must be specified at the top of the CSS file but after all `@import` rules and that they cannot be defined inside grouping rules. In Mimcss, the first restriction is lifted - the properties defined using the `$namespace` function can be specified in any order and can intermingle with properties defining other style and at-rules. The second restriction, however, stands and any invocation of the `$namespace` function made inside a grouping rule is ignored.

**Example.** The following example defines two `@namespace` rules: HTML and SVG.

```tsx
class MyStyles extends StyleDefinition
{
    namespaces: [
		this.$namespace( css.WebNamespaces.HTML),
        this.$namespace( css.WebNamespaces.SVG, "svg"),
    ]
}
```

**See Also:** [INamespaceRule](#inamespacerule-interface)

#### $fontface() Function

```tsx
export function $fontface( fontface: IFontFace): IFontFaceRule
```

The `$fontface` function creates a new `@font-face` CSS rule.

**Example.** The following example defines a `@font-face` rule for Roboto font.

```tsx
class MyStyles extends StyleDefinition
{
	roboto = this.$fontface( {
		fontFamily: "Roboto",
		fontWeight: 700,
		src: [
			{url: 'roboto.woff', format: 'woff'},
		]
	});
}
```

**See Also:** [IFontFaceRule](#ifontfacerule-interface)

#### $supports() Function

```tsx
export function $supports<T extends StyleDefinition>( query: SupportsQuery,
    instOrClass: T | IStyleDefinitionClass<T>): ISupportsRule<T>
```

The `$supports` function creates a new `@supports` CSS rule.

The generic `T` parameter is the type of the class or instance that the function accepts as the first parameter. This object defines the rules nested within the `@supports` rule.

**Example.** The following example defines a `@supports` rule, which will be in effect only if the browser supports the grid layout.

```tsx
class MyStyles extends StyleDefinition
{
	ifGridSupported = this.$supports( { display: "grid" },
		class extends css.StyleDefinition<MyStyles>
		{
			gridContainer = this.$class( {
                gridTemplateColumns: "repeat(3, 1fr)"
                gridTemplateRows: "repeat(4, 200px)"
            })
		}
	)
}
```

**Note**: The `@supports` CSS rule will be created only if the supports query is true; that is, the browser supports the features and syntax specified in the query. Otherwise; the property defined using the `$supports` function will have its `cssRule` property undefined.

**See Also:** [ISupportsRule](#isupportsrule-interface)

#### $media() Function

```tsx
export function $media<T extends StyleDefinition>( query: string | MediaQuery,
    instOrClass: T | IStyleDefinitionClass<T>): IMediaRule<T>
```

The `$media` function creates a new `@supports` CSS rule.

The generic `T` parameter is the type of the class or instance that the function accepts as the first parameter. This object defines the rules nested within the `@media` rule.

**Example.** The following example defines a `@media` rule, which will be in effect only for smaller devices. The `inputText` class defined in the top-level style definition class `MyStyles` will be overridden on devices with width less than 600 pixels.

```tsx
class MyStyles extends StyleDefinition
{
    inputText = this.$class( { margin: 4 })

	ifSmallDevice = this.$media( { maxWidth: 600 },
		class extends css.StyleDefinition<MyStyles>
		{
			inputText = this.$class( { margin: 2 })
		}
	)
}
```

**See Also:** [IMediaRule](#imediarule-interface)

#### $var() Function

```tsx
export function $var<K extends VarTemplateName>( template: K, propVal?: VarValueType<K>,
    nameOverride?: string | IVarRule<K>): IVarRule<K>
```

The `$var` function creates a custom CSS property that will be inserted into the DOM using the `:root` style rule. The `K` generic type parameter is either the name of a style property or a string that defines one of Mimcss types such as `CssLength`, `CssAngle`, etc. or the string `"any"`. The type of the value of the CSS property will be the type of the CSS style property or the Mimcss type or `any` respectively. The actual name of the custom CSS property will be generated when the style definition class is processed; alternatively, it can be provided either as a string or as another `IVarRule` object.

Although the `IVarRule` interface exposes the `name` property, which contains the actual custom variable name used in HTML, it is rarely needed. Usually, the CSS variables are used by specifying the `IVarRule` object itself, which invokes the CSS `var()` function.

**Example.** The following example defines a custom CSS property of the `color` type and then uses it in a style  definition.

```tsx
class MyStyles extends StyleDefinition
{
    // creates :root { --defaultColor: black; } rule
    defaultColor = this.$var( "color", "black")

    // creates p { color: var(--defaultColor); } rule
    p = this.$style( "p", { color: this.defaultColor })
}
```

**See Also:** [IVarRule](#ivarrule-interface)

#### $counter() Function

```tsx
export function $counter( nameOverride?: string | ICounterRule): ICounterRule
```

Creates a new counter object. The counter name will be created when the rule is processed as part of the style definition class. The name can be also overridden by providing either an explicit name or another counter rule.

Counters are not real CSS rules, but since they are named objects they can be defined in a manner similar to CSS rules so that they can be accessed using properties defined via the `$counter` function. Counters are used in `counter-reset` and `counter-increment` style properties in conjunction with the `counter()` and `counters()` CSS functions and pseudo-elements such as `::before`.

**Example.** The following example defines a counter object and then uses it to define counters in the hierarchical list of `<ol>` and `<li>` elements.

```tsx
class MyStyles extends StyleDefinition
{
    // Define a counter object.
    counter = this.$counter();

    // Each <ol> element will reset the corresponding level of the counter to 0.
    ol = this.$style( "ol", { counterReset: this.counter, listStyleType: "none" })

    // Each <li> element will increment the corresponding level of the counter and
    // use it in the `::before` pseudo element. The numbers corresponding to different
    // levels within the counter will be separated by ".".
    li = this.$style( "li", {
        counterIncrement: this.counter,
        "::before": { content: css.counters( this.counter, ".", "hebrew") }
    })
}
```

**See Also:** [ICounterRule](#icounterrule-interface)

#### $gridline() Function

```tsx
export function $gridline( nameOverride?: string | IGridLineRule, isStartEndOrNone?: boolean): IGridLineRule
```

The `$gridline` function creates a new grid line object. The line name will be created when the rule is processed as part of the style definition class. The name can be also overridden by providing either an explicit name or another grid line rule.

Grid lines are not real CSS rules, but since they are named objects they can be defined in a manner similar to CSS rules so that they can be accessed using properties defined via the `$gridLine` function. Grid lines are used in several `grid-` style properties.

Whether the `$gridline` function creates a *start* or *end* line depends on the arguments:
- **No arguments at all.** The line is created with the Mimcss-generated name without the `"-start"` or `"-end"` suffix.

- **`nameOverride` parameter is `undefined` and `isStartEndOrNone` parameter is `true`.** The line is created with the Mimcss-generated name with the `"-start"` suffix.

- **`nameOverride` parameter is `undefined` and `isStartEndOrNone` parameter is `false`.** The line is created with the Mimcss-generated name with the `"-end"` suffix.

- **`nameOverride` parameter is specified as a string and `isStartEndOrNone` parameter is `undefined`.** The line name is set to the value of the `nameOverride` parameter without the `"-start"` or `"-end"` suffix.

- **`nameOverride` parameter is specified as a string and `isStartEndOrNone` parameter is `true`.** The line name is set to the value of the `nameOverride` parameter with the `"-start"` suffix.

- **`nameOverride` parameter is specified as a string and `isStartEndOrNone` parameter is `false`.** The line name is set to the value of the `nameOverride` parameter with the `"-end"` suffix.

- **`nameOverride` parameter is specified as a string and already has `"-start"` or `"-end"` suffix**. The line name is set to the value of the `nameOverride` parameter and the `isStartEndOrNone` parameter is ignored.

- **`nameOverride` parameter is specified as an `IGridLineRule` object.** The line name is copied from the IGridLineRule object and the `isStartEndOrNone` parameter is ignored.

**Example.**

```tsx
class MyStyles extends StyleDefinition
{
    // Define a simple grid line object with auto-generated name.
    line = this.$gridline();

    // Define grid line objects that can be used as start and end lines for the "header" grid area.
    headerStart = this.$gridline( "header", true);
    headerEnd = this.$gridline( "header", false);

    // Use the above grid lines to define grid template columns. Note that line names should be
    // specified as array elements
    grid = this.$class({
        gridTemplateColumns: [ [this.headerStart], 200, "2fr", [this.headerEnd], "1fr", [this.line] ]
    })
}
```

**See Also:** [IGridLineRule](#igridlinerule-interface)

#### $gridarea() Function

```tsx
export function $gridarea( nameOverride?: string | IGridAreaRule): IGridAreaRule
```

The `$gridarea` function creates a new grid line object. The line name will be created when the rule is processed as part of the style definition class. The name can be also overridden by providing either an explicit name or another grid line rule.

Grid areas are not real CSS rules, but since they are named objects they can be defined in a manner similar to CSS rules so that they can be accessed using properties defined via the `$gridarea` function. Grid areas are used in several `grid-` style properties.

Each grid area object defines two lines - start of the area and end of the area - which are accessible via the `startLine` and `endLine` properties of the `IGridAreaRule` interface.

**Example.**

```tsx
class MyStyles extends StyleDefinition
{
    // Define a simple grid line object with auto-generated name.
    main = this.$gridarea();

    // Define grid area with the given name.
    header = this.$gridarea( "header");

    // Use the start and end lines of the above grid area to define grid template rows.
    grid = this.$class({
        gridTemplateRowss: [
            [this.header.startLine], 100, [this.header.endLine, this.main.startLine],
            "1fr", [this.main.endLine]
        ]
    })
}
```

**See Also:** [IGridAreaRule](#igridarearule-interface)

#### $use() Function

```tsx
export function $use<T extends StyleDefinition>( instanceOrClass: T | IStyleDefinitionClass<T>): T | null
```

The `$use` function returns a processed instance of the style definition class, whose properties can be accessed by the callers. The input parameter can be one of the following three things:

1. A style definition class. The `$use` function checks whether there is already an instance of this class associated with the class. This condition is true if either the `$use` or `activate` function has already been called for this style definition class. If this is the case, the associated instance is returned; otherwise, a new instance is created and is associated with the class. This ensures, that a single instance is ever associated with the style definition class and that a single set of CSS rules is created for the style definition class. In other words, the class is *shared* between the callers.
1. An unprocessed instance of a style definition class. The `$use` function processes the instance and creates unique names for the named entities. This use case is suitable for so called *styled components*, where all component instances use the same style definition class but create separate instances of it for each component instance. Styled components can programmatically change the style properties and having separate instances of the style definition class isolates different instances of the component from each other.
1. A processed instance of a style definition class. The `$use` function simply returns this instance.

The `$use` function is a convenient means of dividing style definitions into separate classes and referencing them from other style definition classes. When a style definition class that uses the `$use` function to reference other style definition classes is activated, the referenced classes are activated as well.

**Example.** The following example defines two separate style definition classes, where the second class uses a property from the first class.

```tsx
class SharedStyles extends StyleDefinition
{
    anchor = this.$style( "a", { color: "blue" })
}

class MyStyles extends StyleDefinition
{
    shared = this.$use( SharedStyles)

    myAnchor = css.style( "a", {
        "+": this.shared.anchor,
        ":hover": { color: "navy" }
    })
}
```

#### $embed() Function

```tsx
export function $embed<T extends StyleDefinition>( instanceOrClass: T | IStyleDefinitionClass<T>): T | null
```

The `$embed` function makes the given style definition class an "owned" part of the "owner" style definition object. When activated, the embedded object doesn't create its own `<style>` element but uses that of its owner. This allows creating many small style definition classes instead of a single huge one without incurring the overhead of many `<style>` elements.

Note that as opposed to the `$use` function, the `$embed` function always creates a new instance of the given class and doesn't associate the class with the created instance. That means that if a class is embedded into more than one "owner", two separate instances of each CSS rule will be created with different unique names.

The input parameter can be one of the following two things:

1. A style definition class. The `$embed` function will create and return a new instance of the class.
1. An unprocessed instance of a style definition class. The `$embed` function will simply return this instance.

Note that if an already processed instance of a style definition class is passed to the `$embed` function it will simply return this instance and will behave identically to the `$use` function.

The `$embed` function is a convenient means of dividing style definitions into separate small classes that conceptually comprise a single stylesheet.

**Example.** The following example defines two separate style definition classes, which are combined into a single class, which will be the one that is activated.

```tsx
class InputStyles extends StyleDefinition
{
    input = this.$style( "input", { border: "1 solid blue" })
}

class AnchorStyles extends StyleDefinition
{
    anchor = this.$style( "a", { color: "blue" })
}

class MyStyles extends StyleDefinition
{
    inputs = this.$embed( InputStyles)
    anchors = this.$embed( AnchorStyles)
}

// A single <style> element  will be created that will include rules from all
// the embedded style definition classes.
let myStyles = css.activate( MyStyles);
```

### Helper Functions

#### enableShortNames() Function

```tsx
export function enableShortNames( enable: boolean, prefix?: string): void
```

The `enableShortNames` function sets the flag indicating whether to use optimized (short) rule names. If yes, the names will be created by appending a unique number to the given prefix. If prefix is not specified, the standard prefix `"n"` will be used.

**Example.** The following example shows the difference between the short names and the regular ones.

```tsx
class MyStyles extends StyleDefinition
{
    myClass = this.$class({ color: "red" })
}

if (optimize)
    css.enableShortNames( true, "abc");

this.myStyles = css.activate( MyStyles);

render()
{
    // the actual class name applied to the HTML element will be:
    //  - non- optimaized: "MyStyles_myClass"
    //  - optimaized: "abc1"
    return <p className={myStyles.myClass.name}>This is a red paragraph</p>;
}
```

#### selector() Function

```tsx
export function selector( parts: TemplateStringsArray, ...params: SelectorItem[]): ISelectorProxy
```

The `selector` function returns a string representation of a selector. This function is a tag function and must be invoked with the template string without parentheses.

**Example.** The following example use the `selector` function to create complex selector.

```tsx
class MyStyles extends StyleDefinition
{
    dataTable = this.$class({ borderCollapse: "collapse" })
    mainTableHeader = this.$style(css.selector`article table${this.dataTable} tr > th`, {
        backgroundColor: "lightgrey"
    })
}
```

**See Also:** [ISelectorProxy](#iselectorproxy-interface)

#### classes() Function

```tsx
export function classes( ...classes: (IClassRule | Extended<string>)[]): string;
```

The `classes` function concatenates the names of the given classes into a single string that can be assigned to a `class` property of an HTML classes.

**Example.** The following example defines two CSS classes and assigns them both to an HTML element.

```tsx
class MyStyles extends StyleDefinition
{
    red = this.$class({ color: "red" })

    bold = this.$class({ fontWeight: 700 })
}

this.myStyles = css.activate( MyStyles);

render()
{
    return <p className={css.classes( myStyles.red, myStyles.bold)}>This is a bold, red paragraph</p>;
}
```

**See Also:** [IClassRule](#iclassrule-interface)

### Rule Types

#### IRule Interface

```tsx
export interface IRule
{
    /** CSSOM rule */
    readonly cssRule: CSSRule | null;
}
```

The `IRule` interface is implemented by both style and at-rules and contains the basic properties that are common for all Mimcss objects implementing CSS rules:

- The `cssRule` property points to the `CSSRule` object inserted into DOM when the style definition class containing the Mimcss rule is activated. The type of this property is overridden in the derived classes to reflect the proper CSS rule object type.

#### IStyleRule Interface

```tsx
export interface IStyleRule extends IRule
{
    /** CSSOM style rule */
    readonly cssRule: CSSStyleRule | null;

    /** CSS rule selector string */
    readonly selectorText: string;

    /**
     * Object containing dependent rules. Property names are taken from special properties
     * of the CombinedStyleset. This object allows callers to access dependent rules to change
     * style property values programmatically.
     */
    readonly dependentRules: DependentRules;

    /**
     * Adds/replaces/removes the value of the given CSS property in this rule.
     * @param name Name of the CSS property.
     * @param value New value of the CSS property. If this value is undefined or null, the property
     * is removed from the rule's styleset.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     * @param schedulerType Optional scheduler type identifier.
     */
    setProp<K extends keyof ExtendedBaseStyleset>( name: K, value: ExtendedBaseStyleset[K],
        important?: boolean, schedulerType?: number): void;

    /**
     * Adds/replaces/removes the value of the given custmom CSS property in this rule.
     * @param customVar IVarRule object defining a custom CSS property.
     * @param value New value of the custom CSS property. If this value is undefined or null, the property
     * is removed from the rule's styleset.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     * @param schedulerType Optional scheduler type identifier.
     */
    setCustomProp<K extends VarTemplateName>( customVar: IVarRule<K>, value: VarValueType<K>,
        important?: boolean, schedulerType?: number): void;
}
```

The IStyleRule interface represents a styling rule in a style sheet. Style rules can be used anywhere where style properties can be defined: class rules, ID rules, selector rules, keyframes, etc. `IStyleRule` defines a styleset and can optionally point to one or more style rules from which it inherits. A styleset combines all the properties from its own property block as well as from all of style rules it inherits from.

The `cssRule` property overrides the property with the same name from the `IRule` interface to specify the `CSSStyleRule` type (which derives from the `CSSRule` type).

The `dependentRules` property contains any dependent (a.k.a as nested) style rules that were specified in the `CombinedStyleset` object based on which the style rule object was created.

The methods `setProp` and `setCustomProp` can be used to change values of style properties programmatically. The optional `schedulerType` parameter can be set to designate the scheduler type to be used for scheduling the actual writing of style property values to the DOM. If this parameter is left undefined, the current default scheduler type is used.

#### DependentRules Type

```tsx
export type DependentRules =
    { [K in PseudoEntity]?: IStyleRule } &
    { [K in SelectorCombinator]?: IStyleRule[] } &
    { [K in keyof IParameterizedPseudoEntity]?: IStyleRule[] };
```

The types and interfaces used in the definition of the `DependentRules` type are discussed in the document [Stylesets](stylesets.html).

**Example.** The following example defines a class rule with a dependent `:hover` rule. Then a new value is set for the style property in the dependent rule.

```tsx
class MyStyles extends css.StyleDefinition
{
    // Define class with a dependent rule.
    class1 = this.$class({
        backgroundColor: "cyan",
        ":hover": { opacity: 0.8 }
    })
}

// Activate rules.
let myStyles = css.activate( MyStyles);

// Change the value of the `opacity` property in the `:hover` dependent rule.
myStyles.class1.dependentRules[":hover"].setProp( "opacity", 0.6);
```

#### INamedEntity Interface

```tsx
export interface INamedEntity
{
    readonly name: string;
}
```

The INamedRule interface is a base interface implemented by all rules that have a name; that is, class, ID, keyframes and custom CSS property. The `name` property is the rule's unique name assigned by the Mimcss infrastructure. This name doesn't have the prefix that is used when referring to classes (.), IDs (#) and custom CSS properties (--).

#### INamedStyleRule Interface

```tsx
export interface INamedStyleRule extends IStyleRule, INamedEntity
{
}
```

The INamedStyleRule interface combines IStyleRule and INamedEntity interfaces. This is used for class and ID rules.

**See Also:** [$IClassRule](#iclassrule-interface), [$IIDRule](#iidrule-interface)

#### IClassRule Interface

```tsx
export interface IClassRule extends INamedStyleRule
{
    readonly cssClassName: string;
}
```

The IClassRule interface represents a style rule where the selector is a single class name. The `cssClassName` property is the unique class name prefixed with the `"."` character.

**See Also:** [$class()](#class-function)

#### IIDRule Interface

```tsx
export interface IIDRule extends INamedStyleRule
{
    readonly cssIDName: string;
}
```

The IIDRule interface represents a style rule where the selector is a single element ID. The `cssIDsName` property is the unique ID name prefixed with the `"#"` character.

**See Also:** [$id()](#id-function)

#### IAnimationRule Interface

```tsx
export interface IAnimationRule extends IRule, INamedEntity
{
    /** CSSOM keyframes rule */
    readonly cssRule: CSSKeyframesRule | null;

    /** List of style rules representing animation frames */
    readonly frameRules: IAnimationFrameRule[];
}
```

The `IAnimationRule` interface represents the `@keyframes` CSS rule. Objects implementing this interface are returned from the `$keyframes` function.

**See Also:** [$keyframes()](#keyframes-function)

##### IAnimationFrameRule Interface

```tsx
export interface IAnimationFrameRule extends IStyleRule
{
    /** Identifier of the waypoint */
    readonly waypoint: AnimationWaypoint;

    /** CSSOM keyframe rule */
    readonly cssKeyframeRule: CSSKeyframeRule;
}
```

The `IAnimationFrameRule` interface represents a single frame in the `@keyframes` CSS rule.

##### AnimationFrame Type

```tsx
export type AnimationFrame = [AnimationWaypoint, AnimationStyleset];
```

The `AnimationFrame` type defines a single keyframe within a `@keyframes` CSS rule. The waypoint can be specified as `"from"` or `"to"` strings or as a number 0 to 100, which will be used as a percent.

##### AnimationWaypoint Type

```tsx
export type AnimationWaypoint = OneOrMany<"from" | "to" | number>;
```

The `AnimationWaypoint` type is used to define a waypoint in an animation sequence. A number is treated as percentage.

##### AnimationStyleset Type

```tsx
export type AnimationStyleset = Styleset & { "+"?: OneOrMany<IStyleRule> };
```

The `AnimationStyles` type defines a object containing style properties for an animation frame. Stylesets for keyframes allow custom properties (via `"--"` property) but do not allow any dependent rules. Animation styleset can extend other style rules (via `"+"` property); however, any dependent rules will be ignored.

#### IPageRule Interface

```tsx
export interface IPageRule extends IStyleRule
{
    /** Optional name of the page pseudo style (e.g. "":first") */
    readonly pseudoClass: PagePseudoClass | undefined;

    /** CSSOM page rule */
    readonly cssRule: CSSPageRule | null;
}
```

The `IPageRule` interface represents the `@page` CSS rule. Objects implementing this interface are returned from the `$page` function.

**See Also:** [$page()](#page-function)

#### IImportRule Interface

```tsx
export interface IImportRule extends IRule
{
    /** CSSOM import rule */
    readonly cssRule: CSSImportRule | null;
}
```

The `IImportRule` interface represents the CSS `@import` rule. Objects implementing this interface are returned from the `$import` function.

**See Also:** [$import()](#import-function)

#### INamespaceRule Interface

```tsx
export interface INamespaceRule extends IRule
{
    /** Namespace string for the rule */
    readonly namespace: string;

    /** Optional prefix for the rule */
    readonly prefix: string | undefined;

    /** CSSOM namespace rule */
    readonly cssRule: CSSNamespaceRule | null;
}
```

The `INamespaceRule` interface represents the CSS `@namespace` rule. Objects implementing this interface are returned from the `$namespace` function.

**See Also:** [$namespace()](#namespace-function)

#### IFontFaceRule Interface

```tsx
export interface IFontFaceRule extends IRule
{
    /** CSSOM font-face rule */
    readonly cssRule: CSSFontFaceRule | null;
}
```

The `IFontFaceRule` interface represents the CSS `@font-face` rule. Objects implementing this interface are returned from the `$fontface` function.

**See Also:** [$fontface()](#fontface-function)

#### IGroupRule Interface

```tsx
export interface IGroupRule<T extends StyleDefinition = any> extends IRule
{
    // Instance of the style definition class defining the rules under this grouping rule
    readonly rules: T;

    /** CSSOM supports rule */
    readonly cssRule: CSSGroupingRule | null;
}
```

The `IGroupRule` interface represents a grouping CSS rule. The `rules` property provides programmatic access to the nested rules; that is, rules defined inside the grouping rule.

#### ISupportsRule Interface

```tsx
export interface ISupportsRule<T extends StyleDefinition = any> extends IGroupRule<T>
{
    /** CSSOM supports rule */
    readonly cssRule: CSSSupportsRule | null;
}
```

The `ISupportsRule` interface represents the `@supports` CSS rule. Objects implementing this interface are returned from the `$supports` function.

**See Also:** [$supports()](#supports-function)

#### IMediaRule Interface

```tsx
export interface IMediaRule<T extends StyleDefinition = any> extends IGroupRule<T>
{
    /** CSSOM media rule */
    readonly cssRule: CSSMediaRule | null;
}
```

The `IMediaRule` interface represents the `@media` CSS rule. Objects implementing this interface are returned from the `$media` function.

**See Also:** [$media()](#media-function)

#### IVarRule Interface

```tsx
export interface IVarRule<K extends VarTemplateName = any> extends INamedEntity, ICustomVar<VarValueType<K>>
{
    /** Name of a non-custom CSS property whose type determines the type of the custom property value. */
    readonly template: K;
}
```

The `IVarRule` interface represents a CSS custom property definition. Objects implementing this interface are returned from the `$var` function.

The `template` property specifies the name of the property of the `ICssVarTemplate` interface and determines the type accepted by the custom property.

**See Also:** [$var()](#var-function)

#### ICounterRule Interface

```tsx
export interface ICounterRule extends INamedEntity
{
    /** Name of the counter */
    readonly counterName: string;
}
```

The `ICounterRule` interface represents a named counter definition. Use this rule to create counter objects that can be used in counter-increment, counter-reset and counter-set style properties. No CSS rule is created for counters - they are needed only to provide type-safe counter definitions. Objects implementing this interface are returned from the `$counter` function.

**See Also:** [$counter()](#counter-function)

#### IGridLineRule Interface

```tsx
export interface IGridLineRule extends INamedEntity
{
    /**
     * Flag indicating whether the line is a start or end line of a grid area. The value is true
     * if this is the start line; false if this is the end line; and undefined if the line is
     * not related to any area.
     */
    readonly isStartEndOrNone?: boolean;

    /**
     * Name of the grid area of which the line is either a start or an end line. It is defined
     * only if the line name ends with "-start" or "-end".
     */
    readonly areaName: string;
}
```

The `IGridLineRule` interface represents a definition of a named grid line. Objects implementing this interface are returned from the `$gridline` function or created when a grid area is defined using the `$gridarea` function.

**See Also:** [$gridline()](#gridline-function)

#### IGridAreaRule Interface

```tsx
export interface IGridAreaRule extends INamedEntity
{
    /** Start line of the area. */
    readonly startLine: IGridLineRule;

    /** End line of the area. */
    readonly endLine: IGridLineRule;
}
```

The `IGridAreaRule` interface represents a definition of a named grid are. Grid area rule defines two line rules: for its start and end lines. Objects implementing this interface are returned from the `$gridarea` function.

**See Also:** [$gridarea()](#gridarea-function)

