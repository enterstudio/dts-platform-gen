import React, { CSSProperties } from "react"
import { StyledComponentClass } from "styled-components"
import { ColorProps, DisplayProps as StyledSystemDisplayProps, FontSizeProps, LineHeightProps, MaxWidthProps, SpaceProps, TextAlignProps } from "styled-system"
import { DisplaySize, SansSize, SerifSize, themeProps, TypeSizes } from "../../Theme"
/**
 * Spec: https://www.notion.so/artsy/Typography-d1f9f6731f3d47c78003d6d016c30221
 */
export interface VerticalAlignProps {
    verticalAlign?: "baseline" | "sub" | "super" | "text-top" | "text-bottom" | "middle" | "top" | "bottom" | "inherit" | "initial" | "unset";
}
export interface TextProps extends ColorProps, FontSizeProps, LineHeightProps, MaxWidthProps, SpaceProps, StyledSystemDisplayProps, TextAlignProps, VerticalAlignProps {
    fontFamily?: string;
    style?: CSSProperties;
    /**
     * React Native specific. Allows you to tell the native renderers whether
     * this field could be multi-line or not.
     */
    numberOfLines?: number;
    /**
     * React Native specific. When `numberOfLines` is set, this prop defines how
     * text will be truncated. `numberOfLines` must be set in conjunction with
     * this prop.
     */
    ellipsizeMode?: string;
}
/** Base Text component for typography */
export declare const Text: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & TextProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & TextProps>
/**
 * The supported typefaces
 */
export declare type FontTypes = keyof TypeSizes
export interface TypeSizeKeys {
    sans: SansSize;
    serif: SerifSize;
    display: DisplaySize;
}
/**
 * Any valid font family
 */
export declare type FontFamily = typeof themeProps["fontFamily"]
/**
 * Any valid font weight
 */
export declare type FontWeights = keyof FontFamily["sans"] | keyof FontFamily["serif"] | keyof FontFamily["display"]
/**
 * Sans
 */
export interface SansProps extends Partial<TextProps> {
    italic?: boolean;
    size: SansSize;
    /**
     * Explicitly specify `null` to inherit weight from parent, otherwise default
     * to `regular`.
     */
    weight?: null | "regular" | "medium";
}
/**
 * The Sans typeface is used for presenting objective dense information
 * (such as tables) and intervening communications (such as error feedback).
 *
 * @example
 *
 * <Sans color="black10" size="3t" weight="medium" italic>Hi</Sans>
 */
export declare const Sans: StyledComponentClass<SansProps, any, Pick<SansProps, "color" | "display" | "fontFamily" | "fontSize" | "lineHeight" | "maxWidth" | "textAlign" | "verticalAlign" | "p" | "style" | "size" | "italic" | "weight" | "numberOfLines" | "ellipsizeMode" | "bg" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py"> & {
    theme?: any;
}>
/**
 * Serif
 */
export interface SerifProps extends Partial<TextProps> {
    italic?: boolean;
    size: SerifSize;
    /**
     * Explicitly specify `null` to inherit weight from parent, otherwise default
     * to `regular`.
     */
    weight?: null | "regular" | "semibold";
}
/**
 * The Serif typeface is used as the primary Artsy voice, guiding users through
 * flows, instruction, and communications.
 *
 * @example
 *
 * <Serif color="black10" size="3t" weight="semibold">Hi</Serif>
 */
export declare const Serif: StyledComponentClass<SerifProps, any, Pick<SerifProps, "color" | "display" | "fontFamily" | "fontSize" | "lineHeight" | "maxWidth" | "textAlign" | "verticalAlign" | "p" | "style" | "size" | "italic" | "weight" | "numberOfLines" | "ellipsizeMode" | "bg" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py"> & {
    theme?: any;
}>
export interface DisplayProps extends Partial<TextProps> {
    size: DisplaySize;
    /**
     * Explicitly specify `null` to inherit weight from parent, otherwise default
     * to `regular`.
     */
    weight?: null | "regular";
}
/**
 * The Display typeface has limited utility and is in the process of being
 * phased out in most places. Ask your friendly neighborhood design team member
 * if you're unsure if it should be used.
 *
 * @example
 *
 * <Display color="black10" size="3t">Hi</Display>
 */
export declare const Display: StyledComponentClass<DisplayProps, any, Pick<DisplayProps, "color" | "display" | "fontFamily" | "fontSize" | "lineHeight" | "maxWidth" | "textAlign" | "verticalAlign" | "p" | "style" | "size" | "weight" | "numberOfLines" | "ellipsizeMode" | "bg" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py"> & {
    theme?: any;
}>
