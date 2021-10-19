import { Extended, IRawProxy, IStringProxy } from "./CoreTypes";
import { IStyleDefinitionClass, IVarRule, IStyleDefinition, ICounterRule } from "./RuleTypes";
import { ExtendedMediaFeatureset, IMediaQueryProxy, ISupportsQueryProxy, MediaStatement, SupportsStatement } from "./MediaTypes";
import { Styleset, ExtendedBaseStyleset, StringStyleset, IStyleset, ExtendedVarValue, ICssSerializer, AttrTypeKeyword, AttrUnitKeyword, ListStyleType_StyleType } from "./StyleTypes";
/**
 * Registers the given function to be used for converting values of the given style property to
 * string. The `registerStyleProperty` function must be used after adding the property to the
 * [[IStyleset]] interface via the module augmentation technique if the conversion to string
 * requires non-standard operations. This function should not be called for propeties whose
 * values only include numbers, strings, functions returning a string, objects whose `toString`
 * method produces the necessary string or arrays of the above types.
 *
 * This function can be used for style properties that are not yet supported by Mimcss. This is
 * also the way to support properties with vendor prefixes.
 */
export declare const registerStyleProperty: (name: string, toStringFunc: (v: any) => string) => boolean;
/**
 * Converts the given value corresponding to the given style property to a CSS string.
 * @param stylePropName Style property name that determines how the value should be converted
 * to a CSS compliant string.
 * @param stylePropValue Value to convert.
 */
export declare const getStylePropValue: <K extends keyof IStyleset>(stylePropName: K, stylePropValue: ExtendedBaseStyleset[K]) => string;
/**
 * Sets values of the style properties from the given Styleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML/SVG element whose styles will be set.
 * @param styleset Styleset object which provides values for style properties.
 */
export declare const setElementStyle: (elm: ElementCSSInlineStyle, styleset: Styleset | null | undefined, schedulerType?: number | undefined) => void;
/**
 * Sets values of the style properties from the given StringStyleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML/SVG element whose styles will be set.
 * @param styleset [[StringStyleset]] object which provides values for style properties.
 */
export declare const setElementStringStyle: (elm: ElementCSSInlineStyle, styleset: StringStyleset | null | undefined, schedulerType?: number | undefined) => void;
/**
 * Converts the given [[Styleset]] object into an object, where each Styleset's property is
 * converted to its string value.
 * @param styleset
 */
export declare const stylesetToStringStyleset: (styleset: Styleset) => StringStyleset;
/**
 * Compares two Styleset objects by converting style properties to strings and returns an object
 * that contains string values of properties that were new or have different values in the new
 * styleset and undefined values for properties that exist in the old styleset but don't exist
 * in the new one.
 * @param oldStyleset
 * @param newStyleset
 * @returns StringStyleset object with properties that have different values in the old and new
 * stylesets. Properties that existed in the old but don't exist in the new styleset, will have
 * their values set to `"unset"`. If there is no differences between the two stylesets null is
 * returned.
 */
export declare const diffStylesets: (oldStyleset: Styleset, newStyleset: Styleset) => StringStyleset | null;
/**
 * Returns a function representing the `attr()` CSS function. It returns IStringProxy and
 * theoretically can be used in any style property wherever the CSS `<string>` type is accepted;
 * however, its use by browsers is currently limited to the `content` property. Also not all
 * browsers currently support type, units or fallback values.
 *
 * @category Miscellaneous
 */
export declare const attr: (attrName: Extended<string>, typeOrUnit?: Extended<AttrTypeKeyword | AttrUnitKeyword>, fallback?: Extended<string>) => IStringProxy;
/**
 * Returns a representation of the CSS `counter()` function with an optional counter style.
 *
 * @param c Counter name or counter rule object
 * @returns ICounterFunc object representing the invocation of the `counter()` CSS function
 * @category Miscellaneous
 */
export declare const counter: (counterObj: Extended<ICounterRule | string>, style?: Extended<ListStyleType_StyleType>) => IStringProxy;
/**
 * Returns a representation of the CSS `counters()` function with the given separator and
 * an optional counter style.
 *
 * @param counterObj Counter name or counter rule object
 * @param sep Separator string between multiple counters
 * @param style Counter style
 * @returns ICounterFunc object representing the invocation of the `counter()` CSS function
 * @category Miscellaneous
 */
export declare const counters: (counterObj: Extended<ICounterRule | string>, sep: Extended<string>, style?: Extended<ListStyleType_StyleType>) => IStringProxy;
/**
 * Returns a function representing the invocation of the `var()` CSS function for the given custom
 * CSS property with optional fallbacks. Usually, when you want to refer to a custom CSS property
 * in style rules, it is enough to just refer to the style definition property created using the
 * [[$var]] function; however, if you want to provide a fallback value, you must use this function.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends StyleDefinition
 * {
 *     // create custom CSS property but without an assigned value; it can be assigned
 *     // later programmatically
 *     bgColor = this.$var( "color")
 *
 *     div = this.$tag( "div", {
 *         // use the custom CSS property with the given fallback value
 *         backgroundColor: css.usevar( this.bgColor, "beige")
 *     })
 * }
 * ```
 *
 * @typeparam K Key of the [[IVarTemplateStyleset]] interface that determines the type of the
 * custom CSS property and of the fallback value.
 * @param varObj Custom CSS property object created using the [[$var]] function.
 * @param fallback Fallback value that will be used if the custom CSS property isnt set.
 * @returns The `IRawProxy` callable interface, whcih allows the `usevar` function to be called
 * in any context.
 * @category Miscellaneous
 */
export declare const usevar: <K extends keyof import("./StyleTypes").IVarTemplateStyleset>(varObj: IVarRule<K>, fallback?: ExtendedVarValue<K>) => IRawProxy;
declare global {
    interface ElementCSSInlineStyle {
        /**
         * Set the given value to the given style property of the element.
         * @param name Property name
         * @param value New property value to set.
         * @param schedulerType Scheduler identifier. If omitted, the current default scheduler
         * will be used.
         */
        setStyleProp<K extends keyof IStyleset>(name: K, value: ExtendedBaseStyleset[K], schedulerType?: number): void;
        /**
         * Merges or replaces the element's styles with the given styleset.
         * @param styleset Styleset to set or replace
         * @param replace Flag indicating whether the new styleset should completely replace the
         * existing element styles with the new styles (true) or merge the new styles with the
         * existing ones (false). The default value is false.
         * @param schedulerType Scheduler identifier. If omitted, the current default scheduler
         * will be used.
         */
        setStyleset(styleset: Styleset, schedulerType?: number): void;
    }
}
/**
 * Tag function that represents a media query. This function allows expressing media queries in
 * a natural string form while embedding media feature values in type safe manner. The string can
 * contain any media expressions while the embedded objects must be of type [[IMediaFeatureset]].
 * Multiple features in the feature set will be expanded into clauses combined with the "and"
 * operator.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends StyleDefinition
 * {
 *     // screen and (min-width: 400px) and (max-width: 600px) and (orientation: portrait)
 *     ifNarrowDevice = this.$media(
 *         css.media`screen and ${{width:[400,600], orientation: "portrait"}}`, ...)
 * }
 * ```
 */
export declare const media: (parts: TemplateStringsArray, ...params: ExtendedMediaFeatureset[]) => IMediaQueryProxy;
/**
 * Converts the given media query value to the CSS media query string. This function can be used
 * by libraries that allow specifying [[MediaStatement]] for the `media` attribute of elements
 * such as `<link>`, `<style>` and `<source>`
 */
export declare const mediaToString: (query: MediaStatement) => string;
/**
 * Tag function that represents a supports query. This function allows expressing supports
 * queries in a natural string form while embedding media feature values in type safe manner. The
 * string can contain any supports expressions while the embedded objects must be of type
 * Styleset. Multiple properties in the styleset will be expanded into clauses combined with the
 * "or" operator.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends StyleDefinition
 * {
 *     // not (transform-origin: 30px 30px 30px)
 *     ifNoTransformOrigin = this.$supports(
 *         css.supports`not (${{transform-origin: [30, 30, 30]}})`, ...)
 * }
 * ```
 */
export declare const supports: (parts: TemplateStringsArray, ...params: Styleset[]) => ISupportsQueryProxy;
/**
 * Converts the given supports query value to the CSS supports query string.
 */
export declare const supportsToString: (query: SupportsStatement) => string;
/**
 * Creates a new ICssSerializer object that allows adding style definition classes
 * and instances and serializing them to a string. This can be used for server-side rendering when
 * the resultant string can be set as the content of a `<style>` element.
 */
export declare const createCssSerializer: () => ICssSerializer;
/**
 * Serializes one or more style definition classes and instances and returns their CSS string
 * representation. This can be used for server-side rendering when the resultant string can be
 * set as the content of a `<style>` element.
 */
export declare const serializeToCSS: (...args: (IStyleDefinition | IStyleDefinitionClass)[]) => string;
//# sourceMappingURL=StyleAPI.d.ts.map