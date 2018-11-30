import { ClassAttributes, HTMLAttributes } from "react"
import { AlignContentProps, AlignItemsProps, BottomProps, FlexBasisProps, FlexDirectionProps, FlexWrapProps, HeightProps, JustifyContentProps, MaxHeightProps, MaxWidthProps, PositionProps, SpaceProps, WidthProps, ZIndexProps } from "styled-system"
export interface FlexProps extends AlignItemsProps, AlignContentProps, FlexBasisProps, FlexDirectionProps, FlexWrapProps, JustifyContentProps, SpaceProps, HeightProps, WidthProps, MaxHeightProps, MaxWidthProps, PositionProps, BottomProps, ZIndexProps {
    flexGrow?: number | string;
}
/**
 * A utility component that encapsulates flexbox behavior
 */
export declare const Flex: import ("styled-components").StyledComponentClass<ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & FlexProps, any, ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & FlexProps>
