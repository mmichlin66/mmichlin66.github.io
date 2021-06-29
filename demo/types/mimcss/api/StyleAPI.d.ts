import { Styleset, ExtendedStyleset, StringStyleset } from "./StyleTypes";
/**
 * Registers the given function to be used for converting values of the given style property to
 * string. The `registerStyleProperty` function must be used after adding the property to the
 * [[ICssStyleset]] interface via the module augmentation technique if the conversion to string
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
export declare function getStylePropValue<K extends keyof ExtendedStyleset>(stylePropName: K, stylePropValue: ExtendedStyleset[K]): string;
/**
 * Sets values of the style properties from the given Styleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML element whose styles will be set.
 * @param styleset Styleset object which provides values for style properties.
 */
export declare function setElementStyle(elm: HTMLElement, styleset: Styleset | null | undefined, schedulerType?: number): void;
/**
 * Sets values of the style properties from the given StringStyleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML element whose styles will be set.
 * @param styleset StringStyleset object which provides values for style properties.
 */
export declare function setElementStringStyle(elm: HTMLElement, styleset: StringStyleset | null | undefined, schedulerType?: number): void;
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
 * their values set to undefined. If there is no differences between the two stylesets null is
 * returned.
 */
export declare function diffStylesets(oldStyleset: Styleset, newStyleset: Styleset): StringStyleset | null;
//# sourceMappingURL=StyleAPI.d.ts.map