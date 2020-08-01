import { CombinedStyleset, IStyleRule, IClassRule, IIDRule, AnimationFrame, IAnimationRule, IVarRule, ICounterRule, IGridLineRule, IGridAreaRule, IImportRule, IFontFaceRule, INamespaceRule, IPageRule, StyleDefinition, IStyleDefinitionClass, ISupportsRule, IMediaRule } from "../rules/RuleTypes";
import { Extended } from "../styles/UtilTypes";
import { SupportsQuery, Styleset, VarTemplateName, VarValueType } from "../styles/StyleTypes";
import { CssSelector, PagePseudoClass } from "../styles/SelectorTypes";
import { MediaQuery } from "../styles/MediaTypes";
import { IFontFace } from "../styles/FontFaceTypes";
/**
 * Creates new abstract rule, which defines a styleset that can be extended by other style
 * rules. Abstract rules don't have selectors and are not inserted into DOM.
 */
export declare function $abstract(style: CombinedStyleset): IStyleRule;
/**
 * Creates new class rule. The class name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another class rule. The function can be called without parameters just to "declare"
 * the class. Such class can be later used either in conditional grouping rules or in derived
 * style definition classes.
 */
export declare function $class(style?: CombinedStyleset, nameOverride?: string | IClassRule): IClassRule;
/**
 * Creates new ID rule. The ID name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another ID rule. The function can be called without parameters just to "declare"
 * the ID. Such ID can be later used either in conditional grouping rules or in derived
 * style definition classes.
 */
export declare function $id(style?: CombinedStyleset, nameOverride?: string | IIDRule): IIDRule;
/**
 * Creates new selector rule. Selector can be specified as a string or via the selector function.
 */
export declare function $style(selector: CssSelector, style: CombinedStyleset): IStyleRule;
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
export declare function $var<K extends VarTemplateName>(template: K, propVal?: VarValueType<K>, nameOverride?: string | IVarRule<K>): IVarRule<K>;
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
export declare function $page(pseudoClass?: PagePseudoClass, style?: Styleset): IPageRule;
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
 * Concatenates the names of the given classes into a single string that can be assigned to a
 * `class` property of an HTML element.
 * @param classes
 */
export declare function classes(...classes: (IClassRule | Extended<string>)[]): string;
/**
 * The IStyleSerializationContext interface allows adding style definition classes and objects
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
//# sourceMappingURL=RuleAPI.d.ts.map