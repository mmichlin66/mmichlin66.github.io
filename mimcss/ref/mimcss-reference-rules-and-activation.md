---
layout: mimcss-reference
unit: 2
title: "Mimcss Reference: Rules and Activation"
---

# Mimcss Reference: Rules and Activation

This page describes types and functions that are used to create rules and activate and deactivate Style Definition classes.

- [Style Definition Classes](#style-definition-classes)
  - [StyleDefinition Class](#styledefinition-class)
  - [IRule Interface](#irule-interface)
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
- [Rule Types](#rule-types)
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
- [Activation Functions](#activation-functions)

## Style Definition Classes

#### StyleDefinition Class

```tsx
export abstract class StyleDefinition<O extends StyleDefinition = any>
{
    /**
     * Style definition classes are created directly only by the *styled components* - that is,
     * components that use different styles for each instance. Otherwise, style definition
     * class instances are created when either the [[$use]] or [[$activate]] function is called.
     * @param owner Reference to the top-level style definition class
     */
    public constructor( owner: O | null = null);

    /**
     * Refers to the instance of the style definition class which is the *owner* of
     * this style definition object. The owner is the top-level class in the chain of style
     * definition classes. Through this member, all rules and other members defined in the owner
     * definition class can be accessed.
     */
    public get owner(): O | null;
}
```

The `StyleDefinition` class is the base class that all styAle definition classes must derive from.

#### IRule Interface

```tsx
export interface IRule
{
    /** SOM rule */
    readonly cssRule: CSSRule | null;
}
```

The `IRule` interface is implemented by both style and at-rules and contains the basic properties that are common for all Mimcss objects implementing CSS rules:

- The `cssRule` property points to the `CSSRule` object inserted into DOM when the style definition class containing the Mimcss rule is activated.

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
    headerBase = css.$abstract({ fontWeight: 700, fontFamily: Verdana, color: "navy" })

    // Define styles for concrete header elements extending the headerBase abstract rule.
    h1 = css.$style( "h1", { "+": this.headerBase, fontSize: 24 })
    h2 = css.$style( "h2", { "+": this.headerBase, fontSize: 20 })
    h3 = css.$style( "h3", { "+": this.headerBase, fontSize: 18 })
}
```

**Note**: The property defined as an abstract rule is of the `IStyleRule` type; however, the `cssRule` property of this type will be undefined as no real CSS rule objects are created for abstract rules.

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
    red = css.$class({ color: "red" })
}

let myStyles = css.$activate( MyStyles);

render()
{
    return <p className={myStyles.red.name}>This paragraph is red.</p>
}
```

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
    importantElement = css.$id({ color: "red" })
}

let myStyles = css.$activate( MyStyles);

render()
{
    return <span id={myStyles.importantElement.name}>This is an important message.</p>
}
```

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
    all = css.$style( "*", { boxSizing: "border-box" })

    // first <li> element under <ul> element will be red.
    li = css.$style( "ul > li:first-child", { color: "red" })

    // define class without actual styles - just for using in the next rule.
    striped = css.$class()

    // every odd row in a "striped" table will have a light-grey background.
    row = css.style( css.selector`table${this.striped} tr:nth-child(odd)`, { backgroundColor: "lightgrey" })
}
```

#### $keyframes() Function

```tsx
export function $keyframes( frames?: AnimationFrame[], nameOverride?: string | IAnimationRule): IAnimationRule;
```

The `$keyframes` function creates a new `@keyframes` CSS rule. The animation name will be created when the rule is processed as part of the style definition class. The name can be also overridden by providing either an explicit name or another animation rule. The function can be called without parameters just to "declare" the animation. Such animation can be later used either in conditional grouping rules or in derived style definition classes.

The `$keyframes` function accepts an array of `AnimationRule` object. Each `AnimationRule` object defines a *waypoint* and a styleset. Waypoints are specified either as keywords `"from"` and `"to"` or as a number representing percentage.

**Example.** The following example defines a simple animation rule.

```tsx
class MyStyles extends StyleDefinition
{
	move = css.$keyframes( [
		[ "from", { top: 0 } ],
		[ 50, { top: "50%" } ],
		[ "to"], { top: "100%" } ]
	]);
}
```

#### $page() Function

```tsx
export function $page( pseudoClass?: PagePseudoClass, style?: Styleset): IPageRule
```

The `$page` function creates a new `@page` CSS rule.

**Example.** The following example defines a `@page` rule.

```tsx
class MyStyles extends StyleDefinition
{
	firstPage = css.$page( ":first", { margin: ["2in", "1in"] })
}
```

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
        css.$import( "smallDevice.css", { maxWidth: 600 })
    ]
}
```

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
		css.$namespace( css.WebNamespaces.HTML),
        css.$namespace( css.WebNamespaces.SVG, "svg"),
    ]
}
```

#### $fontface() Function

```tsx
export function $fontface( fontface: IFontFace): IFontFaceRule
```

The `$fontface` function creates a new `@font-face` CSS rule.

**Example.** The following example defines a `@font-face` rule for Roboto font.

```tsx
class MyStyles extends StyleDefinition
{
	roboto = css.$fontface( {
		fontFamily: "Roboto",
		fontWeight: 700,
		src: [
			{url: 'roboto.woff', format: 'woff'},
		]
	});
}
```

#### $supports() Function

```tsx
export function $supports<T extends StyleDefinition<O>, O extends StyleDefinition>(
	query: SupportsQuery, instanceOrClass: T | IStyleDefinitionClass<T,O>): ISupportsRule<T>
```

The `$supports` function creates a new `@supports` CSS rule.

The generic `T` parameter is the type of the class or instance that the function accepts as the first parameter. This object defines the rules nested within the `@supports` rule.

The generic type `O` defines the type of the *owner* style definition class. The owner is the top-level class in the chain of nested grouping rules. This type is used to define the type of the `owner` property, which can be used within the `@supports` rule to refer to properties of the owner style definition class.

**Example.** The following example defines a `@supports` rule, which will be in effect only if the browser supports the grid layout.

```tsx
class MyStyles extends StyleDefinition
{
	ifGridSupported = css.$supports( { display: "grid" },
		class extends css.StyleDefinition<MyStyles>
		{
			gridContainer = css.$class( {
                gridTemplateColumns: "repeat(3, 1fr)"
                gridTemplateRows: "repeat(4, 200px)"
            })
		}
	)
}
```

**Note**: The `@supports` CSS rule will be created only if the supports query is true; that is, the browser supports the features and syntax specified in the query. Otherwise; the property defined using the `$supports` function will have its `cssRule` property undefined.

#### $media() Function

```tsx
export function $media<T extends StyleDefinition<O>, O extends StyleDefinition>(
	query: string | MediaQuery, instanceOrClass: T | IStyleDefinitionClass<T,O>): IMediaRule<T>
```

The `$media` function creates a new `@supports` CSS rule.

The generic `T` parameter is the type of the class or instance that the function accepts as the first parameter. This object defines the rules nested within the `@media` rule.

The generic type `O` defines the type of the *owner* style definition class. The owner is the top-level class in the chain of nested grouping rules. This type is used to define the type of the `owner` property, which can be used within the `@media` rule to refer to properties of the owner style definition class.

**Example.** The following example defines a `@media` rule, which will be in effect only for smaller devices. The `inputText` class defined in the top-level style definition class `MyStyles` will be overridden on devices with width less than 600 pixels.

```tsx
class MyStyles extends StyleDefinition
{
    inputText = css.$class( { margin: 4 })

	ifSmallDevice = css.$media( { maxWidth: 600 },
		class extends css.StyleDefinition<MyStyles>
		{
			inputText = css.$class( { margin: 2 })
		}
	)
}
```

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
    defaultColor = css.$var( "color", "black")

    // creates p { color: var(--defaultColor); } rule
    p = css.$style( "p", { color: this.defaultColor })
}
```

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
	counter = css.$counter();

    // Each <ol> element will reset the corresponding level of the counter to 0.
    ol = css.$style( "ol", { counterReset: this.counter, listStyleType: "none" })
    
    // Each <li> element will increment the corresponding level of the counter and
    // use it in the `::before` pseudo element.
	li = css.$style( "li", {
		counterIncrement: this.counter,
		"::before": { content: css.counters( this.counter, ".", "hebrew") }
	})
}
```

### Rule Types

#### IStyleRule Interface

```tsx
export interface IStyleRule extends IRule
{
    /** SOM style rule */
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
     */
    setProp<K extends keyof ExtendedStyleset>( name: K, value: ExtendedStyleset[K], important?: boolean): void;

    /**
     * Adds/replaces/removes the value of the given custmom CSS property in this rule.
     * @param customVar IVarRule object defining a custom CSS property.
     * @param value New value of the custom CSS property. If this value is undefined or null, the property
     * is removed from the rule's styleset.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     */
    setCustomProp<K extends VarTemplateName>( customVar: IVarRule<K>, value: VarValueType<K>, important?: boolean): void;
}
```

The IStyleRule interface represents a styling rule in a style sheet. Style rules can be used anywhere where style properties can be defined: class rules, ID rules, selector rules, keyframes, etc. `IStyleRule` defines a styleset and can optionally point to one or more style rules from which it inherits. A styleset combines all the properties from its own property block as well as from all of style rules it inherits from.

The `cssRule` property overrides the property with the same name from the `IRule` interface to specify the `CSSStyleRule` type (which derives from the `CSSRule` type).

The `dependentRules` property contains any dependent (a.k.a as nested) style rules that were specified in the `CombinedStyleset` object based on which the style rule object was created.

The methods `setProp` and `setCustomProp` can be used to change values of style properties programmatically.

#### DependentRules Type

```tsx
export type DependentRules =
    { [K in PseudoEntity]?: IStyleRule } &
    { [K in SelectorCombinator]?: IStyleRule[] } &
    { [K in keyof IParameterizedPseudoEntity]?: IStyleRule[] };
```

The types and interfaces used in the definition of the `DependentRules` type are discussed in the document [Stylesets](mimcss-reference-stylesets.html).

**Example.** The following example defines a class rule with a dependent `:hover` rule. Then a new value is set for the style property in the dependent rule.

```tsx
class MyStyles extends css.StyleDefinition
{
    // Define class with a dependent rule.
    class1 = css.$class({
        backgroundColor: "cyan",
        ":hover": { opacity: 0.8 }
    })
}

// Activate rules.
let myStyles = css.$activate( MyStyles);

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

#### IClassRule Interface

```tsx
export interface IClassRule extends INamedStyleRule
{
    readonly cssClassName: string;
}
```

The IClassRule interface represents a style rule where the selector is a single class name. The `cssClassName` property is the unique class name prefixed with the `"."` character.

#### IIDRule Interface

```tsx
export interface IIDRule extends INamedStyleRule
{
    readonly cssIDName: string;
}
```

The IIDRule interface represents a style rule where the selector is a single element ID. The `cssIDsName` property is the unique ID name prefixed with the `"#"` character.

#### IAnimationRule Interface

```tsx
export interface IAnimationRule extends IRule, INamedEntity
{
    /** SOM keyframes rule */
    readonly cssRule: CSSKeyframesRule | null;

    /** List of style rules representing animation frames */
    readonly frameRules: IAnimationFrameRule[];
}
```

The `IAnimationRule` interface represents the `@keyframes` CSS rule. Objects implementing this interface are returned from the `$keyframes` function.

##### IAnimationFrameRule Interface

```tsx
export interface IAnimationFrameRule extends IStyleRule
{
    /** Identifier of the waypoint */
    readonly waypoint: AnimationWaypoint;

    /** SOM keyframe rule */
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
export type AnimationStyleset = Styleset & { "+"?: IStyleRule | IStyleRule[] };
```

The `AnimationStyles` type defines a object containing style properties for an animation frame. Stylesets for keyframes allow custom properties (via `"--"` property) but do not allow any dependent rules. Animation styleset can extend other style rules (via `"+"` property); however, any dependent rules will be ignored.

#### IPageRule Interface

```tsx
export interface IPageRule extends IStyleRule
{
	/** Optional name of the page pseudo style (e.g. "":first") */
	readonly pseudoClass: PagePseudoClass | undefined;

	/** SOM page rule */
	readonly cssRule: CSSPageRule | null;
}
```

The `IPageRule` interface represents the `@page` CSS rule. Objects implementing this interface are returned from the `$page` function.

#### IImportRule Interface

```tsx
export interface IImportRule extends IRule
{
	/** SOM import rule */
	readonly cssRule: CSSImportRule | null;
}
```

The `IImportRule` interface represents the CSS `@import` rule. Objects implementing this interface are returned from the `$import` function.

#### INamespaceRule Interface

```tsx
export interface INamespaceRule extends IRule
{
	/** Namespace string for the rule */
	readonly namespace: string;

	/** Optional prefix for the rule */
	readonly prefix: string | undefined;

	/** SOM namespace rule */
	readonly cssRule: CSSNamespaceRule | null;
}
```

The `INamespaceRule` interface represents the CSS `@namespace` rule. Objects implementing this interface are returned from the `$namespace` function.

#### IFontFaceRule Interface

```tsx
export interface IFontFaceRule extends IRule
{
	/** SOM font-face rule */
	readonly cssRule: CSSFontFaceRule | null;
}
```

The `IFontFaceRule` interface represents the CSS `@font-face` rule. Objects implementing this interface are returned from the `$fontface` function.

#### IGroupRule Interface

```tsx
export interface IGroupRule<T extends StyleDefinition = any> extends IRule
{
	// Instance of the style definition class defining the rules under this grouping rule
	readonly rules: T;

	/** SOM supports rule */
	readonly cssRule: CSSGroupingRule | null;
}
```

The `IGroupRule` interface represents a grouping CSS rule. The `rules` property provides programmatic access to the nested rules; that is, rules defined inside the grouping rule.

#### ISupportsRule Interface

```tsx
export interface ISupportsRule<T extends StyleDefinition = any> extends IGroupRule<T>
{
	/** SOM supports rule */
	readonly cssRule: CSSSupportsRule | null;
}
```

The `ISupportsRule` interface represents the `@supports` CSS rule. Objects implementing this interface are returned from the `$supports` function.

#### IMediaRule Interface

```tsx
export interface IMediaRule<T extends StyleDefinition = any> extends IGroupRule<T>
{
	/** SOM media rule */
	readonly cssRule: CSSMediaRule | null;
}
```

The `IMediaRule` interface represents the `@media` CSS rule. Objects implementing this interface are returned from the `$media` function.

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

#### ICounterRule Interface

```tsx
export interface ICounterRule extends INamedEntity
{
	/** Name of the counter */
	readonly counterName: string;
}
}
```

The `ICounterRule` interface represents a named counter definition. Use this rule to create counter objects that can be used in counter-increment, counter-reset and counter-set style properties. No CSS rule is created for counters - they are needed only to provide type-safe counter definitions. Objects implementing this interface are returned from the `$counter` function.

## Activation Functions
