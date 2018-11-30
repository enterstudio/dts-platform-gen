import React from "react"
import { BorderProps, SizeProps, SpaceProps } from "styled-system"
import { FlexProps } from "../../elements/Flex"
/**
 * Spec: zpl.io/bAvnwlB
 */
export interface RadioProps extends FlexProps {
    /** Disable interactions */
    disabled?: boolean;
    /** Select the button on render */
    selected?: boolean;
    /** Show hover state on render */
    hover?: boolean;
    /** Callback when selected */
    onSelect?: (selected: {
        selected: boolean;
        value: string;
    }) => void;
    /** Value of radio button */
    value?: string;
    /** Name of the radio button */
    name?: string;
}
export interface RadioToggleProps extends RadioProps, BorderProps, SizeProps, SpaceProps {
}
/**
 * A Radio button
 *
 * Spec: zpl.io/bAvnwlB
 */
export declare const Radio: React.SFC<RadioProps>
/**
 * A radio button with a border
 */
export declare const BorderedRadio: import ("styled-components").StyledComponentClass<RadioProps, any, Pick<RadioProps, "alignContent" | "alignItems" | "bottom" | "flexBasis" | "flexDirection" | "flexGrow" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "position" | "width" | "zIndex" | "disabled" | "p" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "onSelect" | "name" | "value" | "selected" | "hover"> & {
    theme?: any;
} & RadioProps>
