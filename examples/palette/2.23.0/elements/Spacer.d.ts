import React from "react"
import { HeightProps, SpaceProps, WidthProps } from "styled-system"
export interface SpacerProps extends SpaceProps, WidthProps, HeightProps {
}
/**
 * A component used to inject space where it's needed
 */
export declare const Spacer: React.SFC<SpacerProps & {
    id?: string;
}>
