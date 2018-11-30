import React from "react";
import { View } from "react-native";
export interface CollapseProps {
    /** Determines whether content is expanded or collapsed */
    open: boolean;
    /**
     * If we're rendering within a statically-sized component (e.g. FlatList), we need
     * to propagate a sentinel value in order to trigger re-render or re-measure.
     */
    onAnimationFrame: (animateValue: {
        height: number;
    }) => void;
}
interface State {
    isMounted: boolean;
    hasMeasured: boolean;
    isMeasuring: boolean;
    isAnimating: boolean;
    measuredHeight?: number;
}
/** Collapses content with animation when open is not true */
export declare class Collapse extends React.Component<CollapseProps, State> {
    measureRef: View;
    state: State;
    componentDidMount(): void;
    handleMeasureRef: (ref: any) => void;
    measureChildren: () => void;
    handleLayout: (ev: any) => void;
    handleFrame: (animatedValue: any) => void;
    componentWillReceiveProps(nextProps: any): void;
    measureView: () => JSX.Element;
    render(): JSX.Element;
}
export {};
