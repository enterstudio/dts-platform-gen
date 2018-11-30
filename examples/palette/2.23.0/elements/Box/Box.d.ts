import React from "react"
import { BackgroundProps, BottomProps, ColorProps, DisplayProps, HeightProps, LeftProps, MaxWidthProps, PositionProps, RightProps, SpaceProps, TextAlignProps, TopProps, WidthProps, ZIndexProps } from "styled-system"
export interface BoxProps extends BackgroundProps, BottomProps, BottomProps, ColorProps, DisplayProps, HeightProps, LeftProps, LeftProps, MaxWidthProps, PositionProps, PositionProps, RightProps, SpaceProps, TextAlignProps, TopProps, WidthProps, ZIndexProps {
}
/**
 * Box is just a `View` or `div` (depending on the platform) with common styled-systems
 * hooks.
 */
export declare const Box: import ("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & BoxProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & BoxProps>
