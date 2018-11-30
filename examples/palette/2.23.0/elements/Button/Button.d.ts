import { Component, ReactNode } from "react"
import { BorderProps, BorderRadiusProps, HeightProps, SpaceProps, TextAlignProps, WidthProps } from "styled-system"
import { SansProps } from "../Typography"
/**
 * Spec: zpl.io/2j8Knq6
 */
/** The size of the button */
export declare type ButtonSize = "small" | "medium" | "large"
/** Different theme variations */
export declare type ButtonVariant = "primaryBlack" | "primaryWhite" | "secondaryGray" | "secondaryOutline" | "noOutline"
export interface ButtonProps extends ButtonBaseProps {
    children: ReactNode;
    /** The size of the button */
    size?: ButtonSize;
    /** The theme of the button */
    variant?: ButtonVariant;
}
/** A button with various size and color settings */
export declare class Button extends Component<ButtonProps> {
    static defaultProps: {
        size: "medium" | "small" | "large";
        variant: ButtonVariant;
        theme: {
            borders: string[];
            breakpoints: number[];
            colors: {
                black100: string;
                black80: string;
                black60: string;
                black30: string;
                black10: string;
                black5: string;
                purple100: string;
                purple30: string;
                purple5: string;
                green100: string;
                red100: string;
                yellow100: string;
                yellow30: string;
                yellow10: string;
                white100: string;
            };
            fontFamily: import ("../../platform/fonts").FontFamily;
            mediaQueries: {
                xl: string;
                lg: string;
                md: string;
                sm: string;
                xs: string;
                hover: string;
            };
            grid: {
                breakpoints: {
                    xl: number;
                    lg: number;
                    md: number;
                    sm: number;
                    xs: number;
                };
                container: {
                    padding: number;
                };
                row: {
                    padding: number;
                };
                col: {
                    padding: number;
                };
            };
            space: {
                0.3: number;
                0.5: number;
                1: number;
                2: number;
                3: number;
                4: number;
                6: number;
                9: number;
                12: number;
                18: number;
            };
            typeSizes: {
                sans: {
                    "0": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "1": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "2": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "3": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "3t": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "4": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "4t": {
                        fontSize: number;
                        lineHeight: number;
                    }; /** Callback on click */
                    "5": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "5t": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "6": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "8": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "10": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "12": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "14": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "16": {
                        fontSize: number;
                        lineHeight: number;
                    };
                };
                serif: {
                    "1": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "2": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "3": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "3t": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "4": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "4t": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "5": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "5t": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "6": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "8": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "10": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "12": {
                        fontSize: number;
                        lineHeight: number;
                    };
                };
                display: {
                    "2": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "3t": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "4t": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "5t": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "6": {
                        fontSize: number;
                        lineHeight: number;
                    };
                    "8": {
                        fontSize: number;
                        lineHeight: number;
                    };
                };
            };
        };
    }
    getSize(): {
        height: string;
        size: "2" | "3t";
        px: number;
    }
    getVariant(): Array<import ("styled-components").FlattenInterpolation<import ("styled-components").ThemeProps<any>>>
    render(): JSX.Element
}
/** Base props that construct button */
export interface ButtonBaseProps extends BorderProps, BorderRadiusProps, SpaceProps, TextAlignProps, WidthProps, HeightProps {
    /** Size of the button */
    buttonSize?: ButtonSize;
    /** Displays a loader in the button */
    loading?: boolean;
    /** Disabled interactions */
    disabled?: boolean;
    /** Callback on click */
    onClick?: (e: any) => void;
    /** Additional styles to apply to the variant */
    variantStyles?: any;
}
/** A base from which various button implementations can compose from */
export declare class ButtonBase extends Component<ButtonBaseProps & SansProps> {
    static defaultProps: {
        border: number;
        borderRadius: number;
    }
    onClick: (event: any) => void
    render(): JSX.Element
}
