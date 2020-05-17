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
- [Style Rules](#style-rules)
  - [IStyleRule Interface](#istylerule-interface)
  - [$abstract Function](#abstract-function)
  - [$class Function](#class-function)
  - [$id Function](#id-function)
  - [$style Function](#style-function)
- [At-Rules](#at-rules)
- [Special Rules](#special-rules)
  - [$var Function](#var-function)
- [Activation Functions](#activation-functions)
- [Selector Types](#selector-types)
  - [$SelectorProxy Type](#selectorproxy-type)
  - [$SelectorItem Type](#selectoritem-type)
  - [$CssSelector Type](#cssselector-type)
  - [$PagePseudoClass Type](#pagepseudoclass-type)
  - [$PseudoClass Type](#pseudoclass-type)
  - [$PseudoElement Type](#pseudoelement-type)
  - [$PseudoEntity Type](#pseudoentity-type)
  - [$NthChildExpression Type](#nthchildexpression-type)
  - [$IParameterizedPseudoEntity Interface](#iparameterizedpseudoentity-interface)

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

## Style Rules

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

The `dependentRules` property contains any dependent (a.k.a as nested) style rules that were specified in the `CombinedStyleset` object based on which the style rule object was created. The `DependentRules` type is specified as follows:

```tsx
export type DependentRules =
    { [K in PseudoEntity]?: IStyleRule } &
    { [K in SelectorCombinator]?: IStyleRule[] } &
    { [K in keyof IParameterizedPseudoEntity]?: IStyleRule[] };
```

The types and interfaces used in the definition of the `DependentRules` type are discussed in the document [Stylesets](mimcss-reference-stylesets.html).

The methods `setProp` and `setCustomProp` can be used to change values of style properties programmatically.

#### $abstract() Function

```tsx
export function $abstract( style: CombinedStyleset): IStyleRule
```

The `$abstract` function creates a new abstract style rule, which defines a styleset that can be extended by other style rules. Abstract rules don't have selectors and are not inserted into DOM.

**Example.** The following example defines an abstract rule that contains style properties common for all headers. The abstract rule is then used by several style rules defining concrete headers.

```tsx
class MyStyles extends css.StyleDefinition
{
    headerBase = css.$abstract({ fontWeight: 700, fontFamily: Verdana, color: "navy" })

    h1 = css.$style( "h1", { "+": this.headerBase, fontSize: 24 })
    h2 = css.$style( "h2", { "+": this.headerBase, fontSize: 20 })
    h3 = css.$style( "h3", { "+": this.headerBase, fontSize: 18 })
}
```

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

    // every odd row in a "striped" table will have a   light-grey background.
    row = css.style( css.selector`table${this.striped} tr:nth-child(odd)`, { backgroundColor: "lightgrey" })
}
```

## At-Rules

## Special Rules
Special rules are objects that do not correspond to any CSS rule but which are defined within style definition classes in a manner similar to real CSS rules.

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

## Activation Functions

## Selector Types

#### SelectorProxy Type

```tsx
export type SelectorProxy = (p?: "selector") => string;
```

The SelectorProxy function returns a CSS selector string. This type is returned from the `selector` function.

#### SelectorItem Type

```tsx
export type SelectorItem = string | IStyleRule | StringProxy | SelectorProxy;
```

The `SelectorItem` type describes a single selector token that can be used as an argument to the `selector` function.

#### CssSelector Type

```tsx
export type CssSelector = SelectorItem | SelectorItem[];
```

The `CssSelector` type is used to specify a selector in a style rule.

#### PagePseudoClass Type

```tsx
export type PagePseudoClass = ":blank" | ":first" | ":left" | ":right";
```

The `PagePseudoClass` type represents print-related pseudo classes - those that can be specified with the @page CSS rule */

#### PseudoClass Type

```tsx
export type PseudoClass = PagePseudoClass |
	":active" | ":any-link" | ":blank" | ":checked" | ":default" | ":defined" | ":disabled" |
	":empty" | ":enabled" | ":first-child" | ":first-of-type" | ":fullscreen" | ":focus" |
	":focus-visible" | ":focus-Within" | ":hover" | ":indeterminate" | ":in-range" | ":invalid" |
	":last-child" | ":last-of-type" | ":link" | ":only-child" | ":only-of-type" | ":optional" |
	":out-of-range" | ":placeholder-shown" | ":read-only" | ":read-write" | ":required" | ":root" |
	":scope" | ":target" | ":valid" | ":visited" | ":dir(rtl)" | ":dir(ltr)";
```

The `PseudoClass` type lists all pseudo classes that don't require parameters.

#### PseudoElement Type

```tsx
export type PseudoElement = "::after" | "::backdrop" | "::before" | "::cue" | "::firstLetter" |
	"::firstLine" | "::grammarError" | "::marker" | "::placeholder" | "::selection" | "::spellingError";
```

The `PseudoElement` type lists pseudo elements that don't require parameters.

#### PseudoEntity Type

```tsx
export type PseudoEntity = PseudoClass | PseudoElement;
```

The `PseudoEntity` type combines names of non-parameterized pseudo classes and pseudo elements.

#### NthChildExpression Type

```tsx
export type NthChildExpression = "odd" | "even" | number | [number, number?] | string | StringProxy;
```

The `NthChildExpression` type describes an expression that is used for parameterized pseudo classes like `nth-child`. It can be a string, a single number or a tuple with one or two numbers. If it is a single number, the 'n' in An+B will not be used - as in `nth-child(2)`. If it is a tuple, the `n` character will be used even if the second tuple's element is not provided.

#### IParameterizedPseudoEntity Interface

```tsx
export interface IParameterizedPseudoEntity
{
	":has": string;
	":host": string;
	":host-context": string;
	":is": string;
	":lang": string;
	":not": string;
	":nth-child": NthChildExpression;
	":nth-of-type": NthChildExpression;
	":nth-last-child": NthChildExpression;
	":nth-last-of-type": NthChildExpression;
	":where": string;
	"::part": string;
	"::slotted": string;
}
```

The `IParameterizedPseudoEntity` interface maps names of pseudo classes and pseudo elements that require parameters to the type that can be used to specify these parameters.
 

