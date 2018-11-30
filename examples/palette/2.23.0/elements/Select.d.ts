import { SFC } from "react"
import { PositionProps, SpaceProps } from "styled-system"
interface Option {
    value: string;
    text: string;
}
export interface SelectProps extends PositionProps, SpaceProps {
    options: Option[];
    selected?: string;
    onSelect?: (value: any) => void;
}
/**
 * A large drop-down select menu
 */
export declare const LargeSelect: SFC<SelectProps>
/**
 * A small drop-down select menu
 */
export declare const SmallSelect: SFC<SelectProps>
export {}
