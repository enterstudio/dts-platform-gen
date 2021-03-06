import React from "react"
declare enum TipSize {
    Sm = "sm",
    Lg = "lg",
}
export interface TooltipProps {
    content: string;
    size: TipSize;
    width: number;
}
/**
 * A tooltip
 */
export declare class Tooltip extends React.Component<TooltipProps> {
    static defaultProps: {
        size: TipSize;
        width: number;
    }
    state: {
        active: boolean;
        tipPosition: {
            left: number;
            center: boolean;
            right: any;
        };
    }
    computeTipPosition: () => {
        center: boolean;
        left: number;
        right: any;
    }
    handleClick: () => void
    handleMouseOver: () => void
    handleMouseOut: () => void
    private innerWrapper
    componentDidMount(): void
    render(): JSX.Element
}
export {}
