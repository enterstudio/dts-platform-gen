import React from "react";
export interface BannerProps {
    dismissable: boolean;
    message: string;
}
/**
 * A banner
 */
export declare class Banner extends React.Component<BannerProps> {
    static defaultProps: {
        dismissable: boolean;
    };
    state: {
        dismissed: boolean;
    };
    handleCloseClick: () => void;
    render(): JSX.Element;
}
