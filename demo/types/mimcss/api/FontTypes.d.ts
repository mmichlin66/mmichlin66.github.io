import { IStringProxy } from "./CoreTypes";
import { CssAngle, CssLength, CssNumber, CssPercent } from "./NumericTypes";
/**
 * Type that extends the given type with the IStringProxy interface that allows specifying raw string value.
 */
export declare type FontFaceExtended<T> = T | IStringProxy;
/**
 * Type of the ascent-override and descent-override properties.
 */
export declare type FontFaceMetricOverride = "normal" | CssPercent;
/**
 * Type for specfying font stretch properties.
 */
export declare type FontStretch = "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | CssPercent;
/**
 * Type for specfying font style properties.
 */
export declare type FontStyle = "normal" | "italic" | "oblique" | CssAngle;
/**
 * Type for specfying font weight properties.
 */
export declare type FontWeight = "normal" | "bold" | CssNumber;
/** Keywords specifying system fonts */
export declare type SystemFont = "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar";
/** Type for font-kerning style property */
export declare type FontKerning = "auto" | "normal" | "none";
/** Type for font-optical-sizing style property */
export declare type FontOpticalSizing = "auto" | "none";
/** Type for font-size style property */
export declare type FontSize = "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large" | "xxx-large" | "larger" | "smaller" | CssLength;
/** Type for font-synthesis style property */
export declare type FontSynthesis = "none" | "weight" | "style" | "weight style";
/** Type for font-variant-caps style property */
export declare type FontVariantCaps = "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps";
/** Type for font-variant-position style property */
export declare type FontVariantPosition = "normal" | "sub" | "super";
/** Type of font-display property */
export declare type FontDisplay = "auto" | "block" | "swap" | "fallback" | "optional";
/** Type of font-stretch property */
export declare type FontStretch_FontFaceType = FontStretch | [
    FontFaceExtended<FontStretch>,
    FontFaceExtended<FontStretch>
];
/** Type of font-style property */
export declare type FontStyle_FontFaceType = FontStyle | [
    FontFaceExtended<CssAngle>,
    FontFaceExtended<CssAngle>
];
/** Type of font-weight property */
export declare type FontWeight_FontFaceType = FontWeight | [
    FontFaceExtended<FontWeight>,
    FontFaceExtended<FontWeight>
];
/** Possible named values for format part of the src property */
export declare type FontSrcFormat = "woff" | "woff2" | "truetype" | "opentype" | "embedded-opentype" | "svg";
/** Type of a single part of the src property */
export declare type FontSrc = string | {
    local: FontFaceExtended<string>;
} | {
    url: FontFaceExtended<string>;
    format?: FontFaceExtended<FontSrcFormat | FontSrcFormat[]>;
};
/** Type of src property */
export declare type FontSrc_FontFaceType = FontSrc | FontSrc[];
/**
 * Interface representing the properties of the @font-face CSS rule.
 */
export interface IBaseFontFace {
    ascentOverride?: FontFaceMetricOverride;
    descentOverride?: FontFaceMetricOverride;
    fontDisplay?: FontDisplay;
    fontFamily?: string;
    fontFeatureSettings?: string;
    fontStretch?: FontStretch_FontFaceType;
    fontStyle?: FontStyle_FontFaceType;
    fontVariant?: string;
    fontVariationSettings?: string;
    fontWeight?: FontWeight_FontFaceType;
    lineGapOverride?: FontFaceMetricOverride;
    src?: FontSrc_FontFaceType;
    sizeAdjust?: CssPercent;
    unicodeRange?: string;
}
/**
 * The ExtendedFontFace type maps all @font-face properties defined in the [[IBaseFontFace]]
 * interface to the "extended" versions of their types. These extended types are defined using the
 * [[FontFaceExtended]] generic type, which adds [[IStringProxy]] to the type
 * that is defined in the IBaseFontFace interface.
 */
export declare type ExtendedFontFace = {
    [K in keyof IBaseFontFace]: FontFaceExtended<IBaseFontFace[K]>;
};
//# sourceMappingURL=FontTypes.d.ts.map