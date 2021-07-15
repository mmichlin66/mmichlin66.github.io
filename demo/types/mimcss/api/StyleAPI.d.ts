import { IStringProxy } from "./CoreTypes";
import { IStyleDefinitionClass, IVarRule, StyleDefinition } from "./RuleTypes";
import { ExtendedMediaFeatureset, IMediaQueryProxy, MediaStatement, SupportsStatemnet } from "./MediaTypes";
import { Styleset, ExtendedBaseStyleset, StringStyleset, IBaseStyleset, VarTemplateName, ExtendedVarValue, ICssSerializer } from "./StyleTypes";
/**
 * Registers the given function to be used for converting values of the given style property to
 * string. The `registerStyleProperty` function must be used after adding the property to the
 * [[IBaseStyleset]] interface via the module augmentation technique if the conversion to string
 * requires non-standard operations. This function should not be called for propeties whose
 * values only include numbers, strings, functions returning a string, objects whose `toString`
 * method produces the necessary string or arrays of the above types.
 *
 * This function can be used for style properties that are not yet supported by Mimcss. This is
 * also the way to support properties with vendor prefixes.
 */
export declare function registerStyleProperty(name: string, toStringFunc: (v: any) => string): boolean;
/**
 * Converts the given value corresponding to the given style property to a CSS string.
 * @param stylePropName Style property name that determines how the value should be converted
 * to a CSS compliant string.
 * @param stylePropValue Value to convert.
 */
export declare function getStylePropValue<K extends keyof ExtendedBaseStyleset>(stylePropName: K, stylePropValue: ExtendedBaseStyleset[K]): string;
/**
 * Sets values of the style properties from the given Styleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML/SVG element whose styles will be set.
 * @param styleset Styleset object which provides values for style properties.
 */
export declare function setElementStyle(elm: ElementCSSInlineStyle, styleset: Styleset | null | undefined, schedulerType?: number): void;
/**
 * Sets values of the style properties from the given StringStyleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML/SVG element whose styles will be set.
 * @param styleset StringStyleset object which provides values for style properties.
 */
export declare function setElementStringStyle(elm: ElementCSSInlineStyle, styleset: StringStyleset | null | undefined, schedulerType?: number): void;
/**
 * Converts the given [[Styleset]] object into an object, where each Styleset's property is
 * converted to its string value.
 * @param styleset
 */
export declare function stylesetToStringStyleset(styleset: Styleset): StringStyleset;
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
export declare function diffStylesets(oldStyleset: Styleset, newStyleset: Styleset): StringStyleset | null;
/**
 * Returns a function representing the invocation of the `var()` CSS function for
 * the given custom CSS property with optional fallbacks.
 */
export declare function usevar<K extends VarTemplateName>(varObj: IVarRule<K>, fallback?: ExtendedVarValue<K>): IStringProxy;
declare global {
    interface ElementCSSInlineStyle {
        /**
         * Set the given value to the given style property of the element.
         * @param name Property name
         * @param value New property value to set.
         * @param schedulerType Scheduler identifier. If omitted, the current default scheduler
         * will be used.
         */
        setStyleProp<K extends keyof IBaseStyleset>(name: K, value: ExtendedBaseStyleset[K], schedulerType?: number): void;
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
 * Tag function that represents a media query. This function allows expressing media queries in a
 * natural string form while embedding media feature values in type safe manner. The string can
 * contain any media expressions while the embedded objects must be of type IMediaFeatureset.
 * Multiple features in the feature set will be expanded into clauses combined with the "and"
 * operator.
 *
 * **Example:**
 *
 * class MyStyles extends StyleDefinition
 * {
 *     // screen and (min-width: 400px) and (max-width: 600px) and (orientation: portrait)
 *     ifNarrowDevice = css.$media(
 *         css.media`screen and ${{width:[400,600], orientation: "portrait"}}`, ...)
 * }
 */
export declare function media(parts: TemplateStringsArray, ...params: ExtendedMediaFeatureset[]): IMediaQueryProxy;
/**
 * Converts the given media query value to the CSS media query string. This function can be used
 * by libraries that allow specifying [[MediaStatement]] for the `media` attribute of elements
 * such as `<link>`, `<style>` and `<source>`
 */
export declare function mediaToString(query: MediaStatement): string;
/**
 * Converts the given supports query value to the CSS supports query string.
 */
export declare function supportsToString(query: SupportsStatemnet): string;
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
export declare function serializeToCSS(...args: (StyleDefinition | IStyleDefinitionClass)[]): string;
//# sourceMappingURL=StyleAPI.d.ts.map