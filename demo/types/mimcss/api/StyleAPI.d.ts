import { IStringProxy } from "./CoreTypes";
import { IVarRule } from "./RuleTypes";
import { Styleset, ExtendedBaseStyleset, StringStyleset, IBaseStyleset, VarTemplateName, ExtendedVarValue } from "./StyleTypes";
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
/**
 * The WebNamespaces class contains identifiers for the known Web-related namespaces.
 */
export declare abstract class WebNamespaces {
    static readonly HTML = "http://www.w3.org/1999/xhtml";
    static readonly SVG = "http://www.w3.org/2000/svg";
    static readonly XLink = "http://www.w3.org/1999/xlink";
    static readonly XML = "http://www.w3.org/XML/1998/namespace";
    static readonly XMLNS = "http://www.w3.org/2000/xmlns/";
    static readonly MathML = "http://www.w3.org/1998/Math/MathML";
}
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
//# sourceMappingURL=StyleAPI.d.ts.map