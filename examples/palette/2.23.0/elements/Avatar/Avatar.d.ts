import React, { ImgHTMLAttributes, SFC } from "react"
import { SpaceProps } from "styled-system"
export interface AvatarProps extends ImgHTMLAttributes<any>, SpaceProps {
    /** If an image is missing, show initials instead */
    initials?: string;
    /** The size of the Avatar */
    size?: "xs" | "sm" | "md";
}
/** An circular Avatar component containing an image or initials */
export declare const Avatar: SFC<AvatarProps>
/**
 * A circular avatar image component.
 */
export declare const AvatarImage: import ("styled-components").StyledComponentClass<React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & AvatarProps, any, React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & AvatarProps>
