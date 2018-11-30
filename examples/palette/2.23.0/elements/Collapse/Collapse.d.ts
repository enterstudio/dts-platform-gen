import React from "react";
export interface CollapseProps {
    /** Determines whether content is expanded or collapsed */
    open: boolean;
}
/** Collapses content with animation when open is not true */
export declare class Collapse extends React.Component<CollapseProps> {
    state: {
        mounted: boolean;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
