/// <reference types="react" />
import { SpaceProps } from "styled-system";
import { Color } from "../../Theme";
export interface LinkProps extends SpaceProps {
    noUnderline?: boolean;
    color?: Color;
}
/**
 * Basic a tag
 * Spec: https://zpl.io/2Gm6D3d
 */
export declare const Link: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps, any, import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps>;
