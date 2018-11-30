import React from "react";
import { FlexProps } from "../Flex";
import { BackgroundProps, HeightProps, MaxWidthProps, SpaceProps, WidthProps } from "styled-system";
export interface BorderBoxProps extends BackgroundProps, FlexProps, HeightProps, MaxWidthProps, SpaceProps, WidthProps {
    hover?: boolean;
}
/**
 * A `View` or `div` (depending on the platform) that has a common border
 * and padding set by default
 */
export declare const BorderBoxBase: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & FlexProps & BorderBoxProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & FlexProps & BorderBoxProps>;
