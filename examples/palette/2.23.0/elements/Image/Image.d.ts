import React from "react";
import { HeightProps, MaxWidthProps, RatioProps, SpaceProps, WidthProps } from "styled-system";
export interface BaseImageProps {
    /** The url for the image */
    src: string;
    /** Alternate text for image */
    alt?: string;
    /** A11y text label */
    ariaLabel?: string;
    /** Apply additional styles to component */
    style?: object;
}
export interface ImageProps extends BaseImageProps, SpaceProps, WidthProps, HeightProps {
}
/**
 * Image component with space, width and height properties
 */
export declare const Image: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & ImageProps, any, React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & ImageProps>;
export interface ResponsiveImageProps extends BaseImageProps, SpaceProps, WidthProps, RatioProps, MaxWidthProps {
}
/**
 * An Image component that responsively resizes within its environment
 */
export declare const ResponsiveImage: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & ResponsiveImageProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & ResponsiveImageProps>;
