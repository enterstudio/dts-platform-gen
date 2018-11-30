import React from "react"
export interface SpinnerProps {
    /** Width of the spinner */
    width?: number;
    /** Height of the spinner */
    height?: number;
    /** Size of the spinner */
    size?: "small" | "medium" | "large";
}
/** Generic Spinner component */
export declare const Spinner: import ("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & SpinnerProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & SpinnerProps>
