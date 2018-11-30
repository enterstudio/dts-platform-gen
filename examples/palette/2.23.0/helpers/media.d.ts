import { css } from "styled-components"
import { breakpoints } from "../Theme"
declare type Media = {
    [S in keyof typeof breakpoints]: typeof css;
}
/**
 * A helper to construct media query strings for responsive style targeting.
 *
 * @example
 *
 * const Panel = styled.div`
 *   ${media.sm`
 *     width: 50%;
 *   `}
 *   ${media.lg`
 *     width: 100%;
 *   `}
 * `
 */
export declare const media: Media
export {}
