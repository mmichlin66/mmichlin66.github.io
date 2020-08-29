/**
 * This module describes functions used to create rules within style definition classes andsome
 * helper types and functions
 */
import { CssSelector, PagePseudoClass } from "../api/BasicTypes";
import { CombinedStyleset, IStyleRule, IClassRule, IIDRule, AnimationFrame, IAnimationRule, IVarRule, ICounterRule, IGridLineRule, IGridAreaRule, IImportRule, IFontFaceRule, INamespaceRule, IPageRule, StyleDefinition, IStyleDefinitionClass, ISupportsRule, IMediaRule, IClassNameRule, IConstRule } from "./RuleTypes";
import { SupportsQuery, Styleset, VarTemplateName, ExtendedVarValue } from "./StyleTypes";
import { MediaQuery } from "./MediaAPI";
import { IFontFace } from "./FontFaceAPI";
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
 *         borderRadius: "10%",
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
 * Creates a new style rule with an arbitrary complex selector. Selectors can be specified as
 * one or array of [[SelectorItem]] objects where each `SelectorItem` is one of the following
 * types:
 * - string - allows any content but lacks type-safety checks.
 * - any style rule, that is a rule that implements the [[IStyleRule]] interface. This allows
 *   using prevously defined class, ID and other style rules as selector items
 * - [[selector]] function - a tag function that allows convenient mixing of free-format strings
 *   and strongly typed style rules.
 *
 * When multiple selector items are specified, they will be treated as the selector list; that is,
 * they will be separated by commas.
 *
 * @param selector One or more [[SelectorItem]] objects
 * @param styleset Styleset that defines style properties for this selector.
 *
 * **Examples:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // using string for selecting elemnet type
 *     h1 = css.$style( "h1", {})
 *
 *     // using string for a slightly more complex selector
 *     style1 = css.$style( "*, ::after, ::before", {})
 *
 *     id = css.$id()
 *     cls = css.$class()
 *
 *     // using an array of style rules. The selector will be "#id, .cls"
 *     style1 = css.$style( [this.id, this.cls], {})
 *
 *     // using the selector function. The selector will be "#id > .cls"
 *     style1 = css.$style( css.selector`[this.id] > [this.cls]`, {})
 * }
 */
export declare function $style(selector: CssSelector, styleset: CombinedStyleset): IStyleRule;
/**
 * Creates new animation rule. The animation name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another animation rule. The function can be called without parameters just to
 * "declare" the animation. Such animation can be later used either in conditional grouping rules
 * or in derived style definition classes.
 */
export declare function $keyframes(frames?: AnimationFrame[], nameOverride?: string | IAnimationRule): IAnimationRule;
/**
 * Creates new custom variable object that defines a custom CSS property. The variable name will
 * be created when the rule is processed as part of the style definition class. The name can be
 * also overridden by providing either an explicit name or another custom variable rule. The
 * function can be called without specifying the value just to "declare" the variable. Such
 * variable can be later used either in conditional grouping rules or in derived style definition
 * classes.
 */
export declare function $var<K extends VarTemplateName>(template: K, propVal?: ExtendedVarValue<K>, nameOverride?: string | IVarRule<K>): IVarRule<K>;
/**
 * Creates a "constant" that can be used anywhere the type defined by the `template` parameter can
 * be used. These are called constants, because they provide the convenient and lightweight way
 * of defining values that are unchanged during the application lifetime. Although constants are
 * defined very similarly to custom properties (see the [[var]] function), they cannot participate
 * in the cascade and cannot be redefined under elements.
 *
 * Constant can, however, use any expression that satisfies the type defined by the `template`
 * parameter including other constants, custom properties and functions.
 *
 * @param template Either a name of a style property (camel case) or a name of the property from
 * the [[ICssVarTemplates]] interface. The type corresponding to that property defines the type
 * of the second parameter.
 * @param value The value assigned to the constant.
 * @returns A function that returns a string value of the constant. The function is invoked once
 * when the style definition is processed.
 */
export declare function $const<K extends VarTemplateName>(template: K, value?: ExtendedVarValue<K>): IConstRule;
/**
 * Creates new counter object. The counter name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another counter rule.
 */
export declare function $counter(nameOverride?: string | ICounterRule): ICounterRule;
/**
 * Creates new grid line object. The line name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another grid line rule.
 */
export declare function $gridline(nameOverride?: string | IGridLineRule, isStartEndOrNone?: boolean): IGridLineRule;
/**
 * Creates new grid area object. The area name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another grid area rule.
 */
export declare function $gridarea(nameOverride?: string | IGridAreaRule): IGridAreaRule;
/**
 * Creates new import rule.
 */
export declare function $import(url: string, mediaQuery?: string | MediaQuery, supportsQuery?: string | SupportsQuery): IImportRule;
/**
 * Creates new font-face rule.
 */
export declare function $fontface(fontface: IFontFace): IFontFaceRule;
/**
 * Creates new namespace rule.
 */
export declare function $namespace(namespace: string, prefix?: string): INamespaceRule;
/**
 * Creates new page rule.
 */
export declare function $page(pseudoClass?: PagePseudoClass, styleset?: Styleset): IPageRule;
/**
 * Creates new supports rule.
 */
export declare function $supports<T extends StyleDefinition>(query: SupportsQuery, instOrClass: T | IStyleDefinitionClass<T>): ISupportsRule<T>;
/**
 * Creates new media rule.
 */
export declare function $media<T extends StyleDefinition>(query: string | MediaQuery, instOrClass: T | IStyleDefinitionClass<T>): IMediaRule<T>;
/**
 * Processes the given style definition class or instance and creates unique names for all named
 * entities. For a given style definition class only a single instance is created, no matter how
 * many times this function is invoked. However, if an instance, which has not yet been processed,
 * is passed, then a new set of unique names will be created for it.
 */
export declare function $use<T extends StyleDefinition>(instOrClass: T | IStyleDefinitionClass<T>): T | null;
/**
 * Embeds the given style definition class into another style definition object. When activated,
 * the embedded object doesn't create its own `<style>` element but uses that of its owner. This
 * allows creating many small style definition classes instead of one huge one without incurring
 * the overhead of many `<style>` elements.
 *
 * Note that as opposed to the $use function, the $embed function always creates a new instance of
 * the given class and doesn't associate the class with the created instance. That means that if
 * a class is embedded into more than one "owner", two separate instances of each CSS rule will be
 * created with different unique names.
 */
export declare function $embed<T extends StyleDefinition>(instOrClass: T | IStyleDefinitionClass<T>): T | null;
/**
 * Sets the flag indicating whether to use optimized (short) rule names. If yes, the names
 * will be created by appending a unique number to the given prefix. If the prefix is not
 * specified, the standard prefix "n" will be used.
 * @param enable
 * @param prefix
 */
export declare function enableShortNames(enable: boolean, prefix?: string): void;
/**
 * Type for defining the class property of HTML elements.
 */
export declare type ClassPropType = string | IClassRule | IClassNameRule | ClassPropType[];
/**
 * Concatenates the names of the given classes into a single string that can be assigned to a
 * `class` property of an HTML element.
 * @param classProps
 */
export declare function classes(...classProps: ClassPropType[]): string;
/**
 * Chooses the first non-null name from the given list of classes.
 * @param classProps
 */
export declare function chooseClass(...classProps: ClassPropType[]): string | null;
/**
 * The ICssSerializer interface allows adding style definition classes and objects
 * and serializing them to a single string. This can be used for server-side rendering when
 * the resultant string can be set as the content of a `<style>` element.
 */
export interface ICssSerializer {
    /**
     * Adds style definition class or instance.
     */
    add(instOrClass: StyleDefinition | IStyleDefinitionClass): void;
    /**
     * Returns concatenated string representation of all CSS rules added to the context.
     */
    serialize(): string;
}
/**
 * Creates a new ICssSerializer object that allows adding style definition classes
 * and instances and serializing them to a string. This can be used for server-side rendering when
 * the resultant string can be set as the content of a `<style>` element.
 */
export declare function createCssSerializer(): ICssSerializer;
/**
 * Serializes one or more style definition classes and instances and returns their CSS string
 * representation. This can be used for server-side rendering when the resultant string can be
 * set as the content of a `<style>` element.
 */
export declare function serializeToCSS(arg1: StyleDefinition | IStyleDefinitionClass, ...args: (StyleDefinition | IStyleDefinitionClass)[]): string;
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