import { IStringProxy, IQuotedProxy, SelectorItem, ISelectorProxy } from "./CoreTypes";
/**
 * Returns a string representation of a selector. This function is a tag function and must be
 * invoked with the template string without parentheses.
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
 * clip-path: raw`polygon(50% 20%, 90% 80%, 10% 80%)`
 * ```
 */
export declare function raw(parts: TemplateStringsArray, ...params: any[]): IStringProxy;
/**
 * Returns a function representing a string in quotation marks.
 */
export declare function quoted(val: any): IQuotedProxy;
//# sourceMappingURL=CoreAPI.d.ts.map