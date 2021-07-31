import { IStringProxy, SelectorItem, ISelectorProxy } from "./CoreTypes";
/**
 * Returns a string representation of a selector. This function is a tag function and must be
 * invoked with the template string without parentheses. This function can be used wherever the
 * [[CssSelector]] or [[SelectorItem]] types are allowed. The parameters embedded into the string
 * must conform to the [[SelectorItem]] type.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // css: ul > li {...}
 *     s1 = css.$style( css.selector`ul > li`, {...})
 *
 *     // css: ul.c1:hover {...}
 *     c1 = css.$class()
 *     s2 = css.$style( css.selector`ul.${this.s1}:hover`, {...})
 * }
 * ```
 */
export declare function selector(parts: TemplateStringsArray, ...params: SelectorItem[]): ISelectorProxy;
/**
 * The `raw` function allows specifying arbitrary text for properties whose type normally doesn't
 * allow strings.This function is a tag function and must be invoked with the template string
 * without parentheses. The `raw` function can be used for any style property. Note, however, that
 * no validation checks are performed on the structure of the string. If the string isn't valid
 * for the style property, the property will not become part of the style rule inserted into the
 * DOM.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     poly = css.$class({
 *         clipPath: css.raw`polygon(50% 20%, 90% 80%, 10% 80%)`
 *     })
 * }
 * ```
 */
export declare function raw(parts: TemplateStringsArray, ...params: any[]): IStringProxy;
//# sourceMappingURL=CoreAPI.d.ts.map