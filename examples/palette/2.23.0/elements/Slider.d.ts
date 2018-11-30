import { StyledComponentClass } from "styled-components"
import { BorderProps, SpaceProps } from "styled-system"
export interface SliderProps extends BorderProps, SpaceProps {
    /**
     * Additional CSS class for the root DOM node
     */
    className?: string;
    /**
     * allowCross could be set as true to allow those handles to cross.
     */
    allowCross: boolean;
    /**
     * If true, handles can't be moved.
     */
    disabled?: boolean;
    /**
     * The minimum value of the slider
     */
    min: number;
    /**
     * The maximum value of the slider
     */
    max: number;
    /**
     * Value to be added or subtracted on each step the slider makes. Must be greater than zero, and max - min should be evenly divisible by the step value.
     * When marks is not an empty object, step can be set to null, to make marks as steps.
     */
    step: number;
    /**
     * Set initial positions of handles.
     */
    defaultValue: number[];
    /**
     * onAfterChange will be triggered when ontouchend or onmouseup is triggered.
     */
    onAfterChange?: (minMax: [number, number]) => void;
    /**
     * onChange will be triggered while the value of Slider changing.
     */
    onChange?: (minMax: [number, number]) => void;
}
/**
 * A slider component that allows to define a range of values. nin and max
 */
export declare const Slider: StyledComponentClass<SliderProps, any>
