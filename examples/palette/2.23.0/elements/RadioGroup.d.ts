import React from "react"
import { FlexProps } from "./Flex"
import { RadioProps } from "./Radio"
/**
 * Spec: zpl.io/bAvnwlB
 */
export interface RadioGroupProps extends FlexProps {
    /** Disable interactions */
    disabled?: boolean;
    /** Callback when selected */
    onSelect?: (selectedOption: string) => void;
    /** Default value of radio button */
    defaultValue?: string;
    /** Child <Radio /> elements */
    children: Array<React.ReactElement<RadioProps>>;
}
interface RadioGroupState {
    selectedOption: string | null;
}
/**
 * A stateful collection of Radio buttons
 *
 * Spec: zpl.io/bAvnwlB
 */
export declare class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
    state: {
        selectedOption: string;
    }
    onSelect: ({ value }: {
        value: any;
    }) => void
    renderRadioButtons(): Array<React.ReactElement<RadioProps>>
    render(): JSX.Element
}
export {}
