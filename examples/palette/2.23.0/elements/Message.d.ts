import React, { SFC } from "react";
import { SansSize } from "../Theme";
import { FlexProps } from "./Flex";
/**
 * Spec: zpl.io/2Zg4Rdq
 */
interface MessageProps extends FlexProps {
    children: React.ReactNode | null;
    /**
     * Size of text to display in message window
     */
    textSize?: SansSize;
}
/**
 * A generic message window for displaying ZerStates, notices, errors, etc.
 *
 * Spec: zpl.io/2Zg4Rdq
 */
export declare const Message: SFC<MessageProps>;
export {};
