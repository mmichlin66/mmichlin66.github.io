/**
 * This module describes functions used to create rules within style definition classes.
 * @module
 */
import { CssSelector, PagePseudoClass, OneOrMany } from "./CoreTypes";
import { CombinedStyleset, IStyleRule, IClassRule, IIDRule, AnimationFrame, IAnimationRule, IVarRule, ICounterRule, IGridLineRule, IGridAreaRule, IImportRule, IFontFaceRule, INamespaceRule, IPageRule, StyleDefinition, IStyleDefinitionClass, ISupportsRule, IMediaRule, IClassNameRule, IConstRule, ClassPropType, NameGenerationMethod } from "./RuleTypes";
import { MediaQuery, SupportsQuery } from "./MediaTypes";
import { ExtendedFontFace } from "./FontTypes";
import { Styleset, VarTemplateName, ExtendedVarValue } from "./StyleTypes";
/**
 * Creates a new abstract rule, which defines a styleset that can be extended by other style rules.
 * Abstract rules don't have selectors and are not inserted into the DOM. Abstract rules can
 * themselves extend other rules - both abstract and non-abstract.
 *
 * @param styleset Styleset that will be inherited by style rules that extend this abstract rule.
 * @returns `IStyleRule` object that should be used by the derived rules in the `"+"` property.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     colorBox = css.$abstract({
 *         backgroundColor: "orange",
 *         borderRadius: css.percent(10),
 *         border: [4, "solid", "red"],
 *         ":hover": {
 *             opacity: 0.7
 *         }
 *     })
 *
 *     box1 = css.$class({
 *         "+": this.colorBox,
 *         width: 200,
 *         height: 200,
 *     })
 *
 *     box2 = css.$class({
 *         "+": this.colorBox,
 *         width: 600,
 *         height: 400,
 *     })
 * }
 * ```
 */
export declare function $abstract(styleset: CombinedStyleset): IStyleRule;
/**
 * Creates a new class rule. The class name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another class rule. The function can be called without parameters just to "declare"
 * the class. Such class can be later used either in conditional grouping rules or in derived
 * style definition classes.
 *
 * The returned [[IClassRule]] interface has the `name` property that should be used to assign
 * the class to an HTML element
 *
 * @param styleset Styleset that defines style properties of the class.
 * @param nameOverride string or another `IClassRule` object that determines the name of the class.
 * If this optional parameter is defined, the name will override the Mimcss name assignment
 * mechanism. This might be useful if there is a need for the class to match a name of another,
 * probably external, class.
 * @returns `IClassRule` object that should be used for getting the class name and for accessing
 * the style properties if needed.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     vbox = css.$class({
 *         display: "flex",
 *         flexDirection: "column",
 *         alignItems: "center"
 *     })
 * }
 * ...
 * let styles = css.activate( MyClasses);
 * ...
 * render
 * {
 *     return <div class={styles.vbox.name}>
 *         <span>Hello</span>
 *         <span>World!</span>
 *     </div>
 * }
 * ```
*/
export declare function $class(styleset?: CombinedStyleset, nameOverride?: string | IClassRule): IClassRule;
/**
 * Creates a new class name rule, which combines one or more other class names. This creates a
 * "synonym" that is easier to apply to an element's class attribute than an array of two or
 * more class rules.
 *
 * @param ...classes List of class names specified either as a string or `IClassRule` objects.
 * @returns `IClassNameRule` object whose `name` property contains the combined class name. The
 * `cssClassName` property contains the combined selector, e.g. `.class1.class2`.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // declare class - just to be used later
 *     spaced = css.class()
 *
 *     vbox = css.$class({
 *         display: "flex",
 *         flexDirection: "column",
 *         alignItems: "center",
 *         "&": [
 *             [this.spaced, {
 *                 gap: 8
 *             }
 *         ]
 *     })
 *
 *     // use $classname rule to combine the names of classes vbox and spaced
 *     spacedVbox = css.$classname( this.vbox, this.spaced)
 * }
 * ...
 * let styles = css.activate( MyClasses);
 * ...
 * render
 * {
 *     // without spacedVbox, the class would be: {[styles.vbox.name, styles.spaced.name]}
 *     return <div class={styles.spacedVbox.name}>
 *         <span>Hello</span>
 *         <span>World!</span>
 *     </div>
 * }
 *
 * ```
 */
export declare function $classname(...classes: (IClassRule | IClassNameRule | string)[]): IClassNameRule;
/**
 * Creates a new ID rule. The ID name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another ID rule. The function can be called without parameters just to "declare"
 * the ID. Such ID can be later used either in conditional grouping rules or in derived
 * style definition classes.
 *
 * The returned [[IIDRule]] interface has the `name` property that should be used to assign
 * the ID to an HTML element.
 *
 * @param styleset Styleset that defines style properties of the element.
 * @param nameOverride string or another `IIDRule` object that determines the name of the ID.
 * If this optional parameter is defined, the name will override the Mimcss name assignment
 * mechanism. This might be useful if there is a need for the ID to match a name of another ID.
 * @returns `IIDRule` object that should be used for getting the ID name and for accessing
 * the style properties if needed.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     container = css.$id({
 *         display: "flex",
 *         flexDirection: "column",
 *         alignItems: "center"
 *     })
 * }
 * ...
 * let styles = css.activate( MyClasses);
 * ...
 * render
 * {
 *     return <div id={styles.container.name}>
 *         <span>Hello</span>
 *         <span>World!</span>
 *     </div>
 * }
 */
export declare function $id(styleset?: CombinedStyleset, nameOverride?: string | IIDRule): IIDRule;
/**
 * Creates a new style rule for the given HTML or SVG element tags. The `tag` parameter specifies
 * either a single tag or an array of tags. In addition an asterisk symbol ('"*"`) can be specified
 * to target all elements.
 *
 * When multiple tags are specified, they will be treated as the selector list; that is, they will
 * be separated by commas.
 *
 * @param tag One or more element tags
 * @param styleset Styleset that defines style properties for the tags.
 *
 * **Examples:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // using string for selecting a single elemenet tag
 *     tr = css.$tag( "tr", {})
 *
 *     // using array for selecting multiple elemenet tags
 *     header123 = css.$tag( ["h1", "h2", "h3"], {})
 *
 *     // using asterisk to address all elements
 *     all = css.$tag( "*", {})
 * }
 */
export declare function $tag(tag: "*" | OneOrMany<(keyof HTMLElementTagNameMap) | (keyof SVGElementTagNameMap)>, styleset: CombinedStyleset): IStyleRule;
/**
 * Creates a new style rule with an arbitrary complex selector. Selectors can be specified as
 * one or array of [[SelectorItem]] objects where each `SelectorItem` is one of the following
 * types:
 * - string - allows any content but lacks type-safety checks.
 * - any style rule, that is a rule that implements the [[IStyleRule]] interface. This allows
 *   using prevously defined tag, class, ID and other style rules as selector items
 * - [[selector]] function - a tag function that allows convenient mixing of free-format strings
 *   and strongly typed style rules.
 *
 * When multiple selector items are specified, they will be concatenated into a single string.
 *
 * Note that although style rules can be used for selecting element tags, the [[$tag]] function would
 * be more appropriate because it will catch misspellings of tag names.
 *
 * @param selector One or more [[SelectorItem]] objects
 * @param styleset Styleset that defines style properties for this selector.
 *
 * **Examples:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // using a string
 *     style1 = css.$style( "li::before", {})
 *
 *     id = css.$id()
 *     cls = css.$class()
 *
 *     // using an array of style rules. The selector will be "#id.cls"
 *     style2 = css.$style( [this.id, this.cls], {})
 *
 *     // using the selector function. The selector will be "#id > .cls"
 *     style3 = css.$style( css.selector`${this.id} > ${this.cls}`, {})
 *
 *     // using a string for selecting element tag.
 *     h1 = css.$style( "h1", {})
 * }
 */
export declare function $style(selector: CssSelector, styleset: CombinedStyleset): IStyleRule;
/**
 * Creates new animation rule. The animation name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another animation rule. The function can be called without parameters just to
 * "declare" the animation. Such animation can be later used either in conditional grouping rules
 * or in derived style definition classes.
 *
 * The returned [[IAnimationRule]] interface represents an object that should be used when
 * using the keyframes name in the `animation-name` or `animation` style properties.
 *
 * @param frames Array of [[AnimationFrame]] objects. Each animation frame contains a waypoint
 * and a styleset.
 * @param nameOverride String or another `IAnimationRule` object that determines the name of the
 * animation. If this optional parameter is defined, the name will override the Mimcss name
 * assignment mechanism. This might be useful if there is a need for the name to match a name of
 * another animation.
 * @returns `IAnimationRule` object that should be used for getting the animation name.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     vanish = css.$keyframes([
 *         [0, { opacity: 100 }],
 *     	   [100, { opacity: 0 }],
 *     ])
 *
 *     vanishingBlock = css.$class({
 *         animation: { name: this.vanish, duration: 2000, count: "infinite", direction: "alternate" }
 *     })
 * }
 */
export declare function $keyframes(frames?: AnimationFrame[], nameOverride?: string | IAnimationRule): IAnimationRule;
/**
 * Creates new custom variable object that defines a custom CSS property. The variable name will
 * be created when the rule is processed as part of the style definition class. The name can be
 * also overridden by providing either an explicit name or another custom variable rule. The
 * function can be called without specifying the value just to "declare" the variable. Such
 * variable can be later used either in conditional grouping rules or in derived style definition
 * classes.
 *
 * Custom properties defined using the `$var` function are included into the `:root {}` block;
 * however, they can be redefined with different values under any style rule.
 *
 * @param template Either a name of a style property (in camel-case) or a name of the property from
 * the [[IVarTemplateStyleset]] interface. The type corresponding to that property defines the type
 * of the second parameter.
 * @param value The value assigned to the property.
 * @param nameOverride String or another `IVarRule` object that determines the name of the
 * custom property. If this optional parameter is defined, the name will override the Mimcss name
 * assignment mechanism. This might be useful if there is a need for the name to match a name of
 * existing property.
 * @returns The `IVarRule` object that represents the custom property. Any usage of this object in
 * style properties or function parameters is substituted by the `var()` CSS function invocation.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // define and use custom CSS property
 *     importantTextColor = css.$var( "color", "red")
 *     important = css.$class({
 *         color: this.importantTextColor
 *     })
 *
 *     // use different value for the custom property under another CSS class
 *     special = css.$class({
 *         "+": this.important,
 *         "--": [ [this.importantTextColor, "maroon"] ]
 *     })
 * }
 */
export declare function $var<K extends VarTemplateName>(template: K, value?: ExtendedVarValue<K>, nameOverride?: string | IVarRule<K>): IVarRule<K>;
/**
 * Creates a "constant" that can be used anywhere the type defined by the `template` parameter can
 * be used. They are called constants, because they provide a convenient and lightweight way of
 * defining values that are unchanged during the application lifetime. Although constants are
 * defined very similarly to custom properties (see the [[$var]] function), they cannot participate
 * in the cascade and cannot be redefined under style rules. Constant can use any expression that
 * satisfies the type defined by the `template` parameter including other constants, custom
 * properties and functions.
 *
 * No CSS rules are created for costants and due to this fact constants are preferable to custom
 * properties unless the intention is to change the variable value at run-time or to redefine its
 * value under different style rules.
 *
 * @param template Either a name of a style property (in camel-case) or a name of the property from
 * the [[IVarTemplateStyleset]] interface. The type corresponding to that property defines the type
 * of the second parameter.
 * @param value The value assigned to the constant.
 * @returns The `IConstRule` object that represents the value of the constant. The value is
 * computed once when the style definition is processed.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // defining and using custom CSS property
 *     defaultTextColor = css.$const( "color", "red")
 *     para = css.$style( "p", {
 *         color: this.defaultTextColor
 *     })
 * }
 */
export declare function $const<K extends VarTemplateName>(template: K, value?: ExtendedVarValue<K>): IConstRule;
/**
 * Creates new counter object. The counter name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another counter rule.
 *
 * Counter rules don't create any CSS rules, but they create unique names that can be used
 * for `counter-reset` and `counter-increment` style properties. Counter rules are usually used
 * in conjunction with the [[counter]] and [[counters]] functions.
 *
 * @param nameOverride String or another `ICounterRule` object that determines the name of the
 * counter. If this optional parameter is defined, the name will override the Mimcss name
 * assignment mechanism. This might be useful if there is a need for the name to match a name of
 * existing counter.
 * @returns The `ICounterRule` object that represents the counter.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     counter = css.$counter()
 *     ol = css.$style( "ol", { counterReset: this.counter, listStyleType: "none" })
 *     li = css.$style( "li", {
 *         counterIncrement: this.counter,
 *         "::before": { content: css.counters( this.counter) }
 *     })
 * }
 */
export declare function $counter(nameOverride?: string | ICounterRule): ICounterRule;
/**
 * Creates a new grid line rule. The line name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another grid line rule. The grid line rules are used to define values of
 * style properties `grid-row-start/end` and `grid-column-start/end`.
 *
 * No CSS rule is created for grid lines - these objects are solely used for creating names, which
 * can be type-safely referred to from style rules.
 *
 * @param nameOverride String or another `IGridLineRule` object that determines the name of the
 * line. If this optional parameter is defined, the name will override the Mimcss name
 * assignment mechanism. This might be useful if there is a need for the name to match a name of
 * existing grid line.
 * @param isStartEndOrNone Flag indicating whether the `"-start"` or `"-end"` suffix should be
 * appended to the rule name. If the flag is true, `"-start"` is appended; if the flag is false,
 * `"-end"` is appended; if the flag is undefined, no suffix is appended to the rule name.
 * @returns The `IGridLineRule` object that represents the grid line.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     gridLineFirst = css.$gridline()
 *     gridLineLast = css.$gridline()
 *
 *     grid = css.$class({
 *         display: "grid",
 *         gridTemplateColumns: [ [this.gridLineFirst], "1fr", "2fr", [this.gridLineLast] ],
 *         gridTemplateRows: css.repeat( 2, "1fr"),
 *     })
 *
 *     first = css.$class({
 *         gridColumnStart: this.gridLineFirst,
 *     })
 *
 *     last = css.$class({
 *         gridColumnEnd: this.gridLineLast,
 *     })
 * }
 */
export declare function $gridline(nameOverride?: string | IGridLineRule, isStartEndOrNone?: boolean): IGridLineRule;
/**
 * Creates a new grid area rule. The area name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another grid area rule. The grid area rules are used to define values of
 * style properties `grid-area`, `grid-row-start/end`, `grid-column-start/end` and
 * `grid-template-areas`.
 *
 * No CSS rule is created for grid areas - these objects are solely used for creating names, which
 * can be type-safely referred to from style rules.
 *
 * Every grid area defines two grid line rules in each direction, which can be accessed using the
 * [[IGridAreaRule.startLine]] and [[IGridAreaRule.endLine]] properties.
 *
 * @param nameOverride String or another `IGridAreaRule` object that determines the name of the
 * area. If this optional parameter is defined, the name will override the Mimcss name
 * assignment mechanism. This might be useful if there is a need for the name to match a name of
 * existing grid area.
 * @returns The `IGridAreaRule` object that represents the grid area.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     headerArea = css.$gridarea();
 *     mainArea = css.$gridarea();
 *
 *     grid = css.$class({
 *         display: "grid",
 *         gridTemplateColumns: "1fr",
 *         gridTemplateRows: ["3em", "1fr"],
 *         gridTemplateAreas: [
 *             [this.headerArea, 1,1, 1,1],
 *             [this.mainArea, 2,1, 2,1],
 *         ],
 *     })
 *
 *     header = css.$class({
 *         gridArea: this.headerArea,
 *         backgroundColor: "blue"
 *     })
 *
 *     main = css.$class({
 *         gridArea: this.mainArea,
 *         backgroundColor: "lightgrey"
 *     })
 * }
 */
export declare function $gridarea(nameOverride?: string | IGridAreaRule): IGridAreaRule;
/**
 * Creates a new `@font-face` rule.
 *
 * @param fontface Object implementing the `IFontFace` interface defining the parameter of the
 * font to use.
 * @returns The `IFontFaceRule` object that represents the @font-face rule.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     font = css.$fontface({
 *         fontFamily: "Roboto",
 *         fontStyle: "italic",
 *         fontWeight: 700,
 *         src: {url: 'roboto.woff', format: 'woff'}
 *     });
 * }
 */
export declare function $fontface(fontface: ExtendedFontFace): IFontFaceRule;
/**
 * Creates a new `@import` rule referencing the given CSS file.
 *
 * @param url URL to the CSS file. Relative URLs are resolved relative to the base URL of the
 * page where the Mimcss library is invoked.
 * @returns The `IImportRule` object that represents the `@import` rule.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     importedCssFiles = [
 *         css.$import( "common-3rdparty.css"),
 *         css.$import( "small-screen-3rdparty.css", {maxWidth: 600}),
 *     ]
 * }
 */
export declare function $import(url: string, mediaQuery?: string | MediaQuery, supportsQuery?: string | SupportsQuery): IImportRule;
/**
 * Creates new namespace rule.
 */
export declare function $namespace(namespace: string, prefix?: string): INamespaceRule;
/**
 * Creates new page rule.
 */
export declare function $page(pseudoClass?: PagePseudoClass, styleset?: Styleset): IPageRule;
/**
 * Creates a new `@supports` rule.
 */
export declare function $supports<T extends StyleDefinition>(query: SupportsQuery, instOrClass: T | IStyleDefinitionClass<T>): ISupportsRule<T>;
/**
 * Creates new media rule.
 */
export declare function $media<T extends StyleDefinition>(query: MediaQuery, instOrClass: T | IStyleDefinitionClass<T>): IMediaRule<T>;
/**
 * Processes the given style definition class or instance and creates unique names for all named
 * entities. For a given style definition class only a single instance is created, no matter how
 * many times this function is invoked. However, if an instance, which has not yet been processed,
 * is passed, then a new set of unique names will be created for it.
 *
 * The `$use` function is used to reference a style definition from another style definition, for
 * example:
 *
 * ```typescript
 * class CommonStyles extends css.StyleDefinition
 * {
 *     error = css.$class({ color: "red"})
 * }
 *
 * class PageStyles extends css.StyleDefinition
 * {
 *     common = css.$use( CommonStyles)
 *
 *     erroMessage = css.$class({
 *         "+": this.common.error,
 *         fontWeight: "bold"
 *     })
 * }
 * ```
 *
 * When the `$use` function is called, the rules from the referenced style definition are not
 * inserted into the DOM; they will be inserted when the style definition class that contains
 * the `$use` call is activated. The same style definition class can be used from several
 * other style definitions: as long as there is at least one referencing style definition that
 * is activated, the rules will be in the DOM; as soon as all referencing style definitions are
 * deactivated, the rules from the referenced definition are removed from the DOM.
 */
export declare function $use<T extends StyleDefinition>(instOrClass: T | IStyleDefinitionClass<T>): T | null;
/**
 * Embeds the given style definition class into another style definition object. When activated,
 * the embedded object doesn't create its own `<style>` element but uses that of its owner. This
 * allows creating many small style definition classes instead of one huge one without incurring
 * the overhead of many `<style>` elements. For example, when developing a library of components,
 * every component can define their own style definition class; however, they all can be embedded
 * into a single style definion class for the entire library.
 *
 * Embedded styles should not be activated separately - they are activated when the embedding
 * style definition class is activated.
 *
 * Note that as opposed to the [[$use]] function, the `$embed` function always creates a new instance of
 * the given class and doesn't associate the class with the created instance. That means that if
 * a class is embedded into more than one "owner", two separate instances of each CSS rule will be
 * created with different unique names.
 *
 * **Example:**
 * ```typescript
 * class Comp1Styles extends css.StyleDefinition { ... }
 * class Comp2Styles extends css.StyleDefinition { ... }
 * class Comp3Styles extends css.StyleDefinition { ... }
 *
 * class LibraryStyles extends css.StyleDefinition
 * {
 *     comp1 = css.$embed( Comp1Styles)
 *     comp2 = css.$embed( Comp2Styles)
 *     comp3 = css.$embed( Comp3Styles)
 * }
 *
 * let libStyles = css.activate( LibraryStyles);
 *
 * render()
 * {
 *     return <div className={libStyles.comp1.someClass.name}>...>/div>
 * }
 * ```
 */
export declare function $embed<T extends StyleDefinition>(instOrClass: T | IStyleDefinitionClass<T>): T | null;
/**
 * Sets the method uses to generate names of CSS entities. If yes, the names
 * will be created by appending a unique number to the given prefix. If the prefix is not
 * specified, the standard prefix "n" will be used.
 *
 * By default the development version of the library (mimcss.dev.js) uses the [[UniqueScoped]]
 * method and the production version (mimcss.js) uses the [[Optimized]] method. This function can
 * be called to switch to the alternative method of name generation in either the development or
 * the production builds.
 *
 * @param method Indicates what method to use.
 * @param prefix Optional string that will serve as a prefix to which unique numbers will be added
 * to generate optimized names. Ignored if the `method` parameter is anything other than.
 */
export declare function configNameGeneration(method: NameGenerationMethod, prefix?: string): void;
/**
 * Concatenates the names of the given classes into a single string that can be assigned to a
 * `class` property of an HTML element.
 *
 * *Example*:
 * @param classProps Variable argument list of either class names or class rule objects.
 */
export declare function classes(...classProps: ClassPropType[]): string;
/**
 * Chooses the first non-null name from the given list of classes.
 * @param classProps
 */
export declare function chooseClass(...classProps: ClassPropType[]): string | null;
/**
 * Decorator that should be applied to a rule if it is defined and used in the same style
 * definition class but then is overridden in a derived style definition class. The problem
 * this solves is this: when a rule is defined in a base class and then overridden in a derived
 * class, when an instance of the derived class is created, the rules that are created in the
 * base and derived classes see different values of the rule. Since our rules are defined as
 * part of the constructor, the base class constructor's code only sees the value assigned in that
 * code. If another rule in the base class uses this first rule, this value is remembered.
 *
 * The `@virtual` decorator creates a Proxy object for the rule with the handler that keeps the
 * most recent value set. Thus when a rule in the base class's constructor uses a virtualized
 * rule, the first rule will see the overridden value of the rule when accessed in the
 * post-constructor code.
 */
export declare function virtual(target: any, name: string): void;
//# sourceMappingURL=RuleAPI.d.ts.map