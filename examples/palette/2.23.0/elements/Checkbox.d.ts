import React from "react";
import { BorderProps, SizeProps, SpaceProps } from "styled-system";
export interface CheckboxProps {
    /** Disable checkbox interactions */
    disabled?: boolean;
    /** Select the checkbox on render */
    selected?: boolean;
    /** Show an error indicator */
    error?: boolean;
    /** Used to force the checkbox into the visual hover state */
    hover?: boolean;
    /** Callback when selected */
    onSelect?: (selected: boolean) => void;
}
export interface CheckboxToggleProps extends CheckboxProps, BorderProps, SizeProps, SpaceProps {
}
/**
 * A checkbox
 */
export declare class Checkbox extends React.Component<CheckboxProps> {
    labelColor: () => {
        color: string;
    };
    iconColor: () => string;
    render(): JSX.Element;
}
