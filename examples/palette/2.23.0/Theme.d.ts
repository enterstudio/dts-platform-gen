/// <reference types="react" />
/**
 * Spec: https://www.notion.so/artsy/Design-92030f16ed7c4c72bb3eb832b4243d04
 * Styled System API: https://jxnblk.com/styled-system/api
 * Table: https://jxnblk.com/styled-system/table
 */
/**
 * A list of breakpoints accessible by key/value. See:
 * https://www.notion.so/artsy/Grid-e489a52e26bd4319b6ee7898044a8a53
 */
export declare const breakpoints: {
    /** Above 1192 */
    xl: number;
    /** Between 1024 and  1191 */
    lg: number;
    /** Between 900 and 1023 */
    md: number;
    /** Between 768 and  899 */
    sm: number;
    /** Below 767 */
    xs: number;
};
/**
 * All of the config for the Artsy theming system, based on the
 * design system from our design team:
 * https://www.notion.so/artsy/Master-Library-810612339f474d0997fe359af4285c56
 */
export declare const themeProps: {
    /** Border variations */
    borders: string[];
    /**
     *  This allows styled-system to hook into our breakpoints
     */
    breakpoints: number[];
    /**
     * Artsy's color schemes:
     * https://www.notion.so/artsy/Color-a0c24896daf8433d9409aee2146ac267
     */
    colors: {
        /** Full black, primary brand color  */
        black100: string;
        /** 80% black  */
        black80: string;
        /** 60% black, bold copy, lower in hierarchy  */
        black60: string;
        /** 30 black (dark grey), placeholder text only  */
        black30: string;
        /** 10 black (grey), borders, divider lines, and grey button only */
        black10: string;
        /** 5 black (light grey), backgrounds only */
        black5: string;
        /** Full purple, secondary brand color. Should only used in time/transitions (on hover, active state), for highlighting vital text, and links.   */
        purple100: string;
        /** 30 purple (light purple), avoid usage  */
        purple30: string;
        purple5: string;
        /** Full green, success */
        green100: string;
        /** Full red, error */
        red100: string;
        /** Full yellow, warn */
        yellow100: string;
        /** 30 yellow (light yellow), avoid future use */
        yellow30: string;
        /** 10 yellow (lightest yellow), avoid future use */
        yellow10: string;
        /** Full white */
        white100: string;
    };
    fontFamily: import("./platform/fonts").FontFamily;
    /** Media queries to work with in web  */
    mediaQueries: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
        /** Determines if the input device has the notion of hover, e.g. mouse. */
        hover: string;
    };
    grid: {
        /**
         * Breakpoints for the Artsy grid,
         * https://www.notion.so/artsy/Grid-e489a52e26bd4319b6ee7898044a8a53
         */
        breakpoints: {
            /** Above 1192 */
            xl: number;
            /** Between 1024 and  1191 */
            lg: number;
            /** Between 900 and 1023 */
            md: number;
            /** Between 768 and  899 */
            sm: number;
            /** Below 767 */
            xs: number;
        };
        container: {
            padding: number;
        };
        row: {
            padding: number;
        };
        col: {
            padding: number;
        };
    };
    /**
     * The spacing system is based on
     * https://www.notion.so/artsy/Spacing-93eeaed9fdf9480099fec7094fd1b9f3
     */
    space: {
        /** Equivalent to 3px  */
        0.3: number;
        /** Equivalent to 5px  */
        0.5: number;
        /** Equivalent to 10px  */
        1: number;
        /** Equivalent to 20px  */
        2: number;
        /** Equivalent to 30px  */
        3: number;
        /** Equivalent to 40px  */
        4: number;
        /** Equivalent to 60px  */
        6: number;
        /** Equivalent to 90px  */
        9: number;
        /** Equivalent to 120px  */
        12: number;
        /** Equivalent to 180px  */
        18: number;
    };
    /**
     * Our type system is based on:
     * https://www.notion.so/artsy/Typography-d1f9f6731f3d47c78003d6d016c30221
     */
    typeSizes: {
        /** Unica  */
        sans: {
            /** Equivalent to 8px size / 8px line-height  */
            "0": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 10px size / 14px line-height  */
            "1": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 12px size / 16px line-height  */
            "2": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 14px size / 24px line-height  */
            "3": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 14px size / 20px line-height  */
            "3t": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 16px size / 26px line-height  */
            "4": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 16px size / 22px line-height  */
            "4t": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 18px size / 30px line-height  */
            "5": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 18px size / 26px line-height  */
            "5t": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 22px size / 30px line-height  */
            "6": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 28px size / 36px line-height  */
            "8": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 42px size / 50px line-height  */
            "10": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 60px size / 66px line-height  */
            "12": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 80px size / 84px line-height  */
            "14": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 100px size / 104px line-height  */
            "16": {
                fontSize: number;
                lineHeight: number;
            };
        };
        /** Garamond  */
        serif: {
            /** Equivalent to 12px size / 16px line-height  */
            "1": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 14px size / 18px line-height  */
            "2": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 16px size / 24px line-height  */
            "3": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 16px size / 20px line-height  */
            "3t": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 18px size / 26px line-height  */
            "4": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 18px size / 22px line-height  */
            "4t": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 22px size / 32px line-height  */
            "5": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 22px size / 28px line-height  */
            "5t": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 26px size / 32px line-height  */
            "6": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 32px size / 38px line-height  */
            "8": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 44px size / 50px line-height  */
            "10": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 60px size / 70px line-height  */
            "12": {
                fontSize: number;
                lineHeight: number;
            };
        };
        /** Avant Garde  */
        display: {
            /** Equivalent to 10px size / 12px line-height  */
            "2": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 12px size / 16px line-height  */
            "3t": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 14px size / 18px line-height  */
            "4t": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 16px size / 20px line-height  */
            "5t": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 18px size / 22px line-height  */
            "6": {
                fontSize: number;
                lineHeight: number;
            };
            /** Equivalent to 22px size / 24px line-height  */
            "8": {
                fontSize: number;
                lineHeight: number;
            };
        };
    };
};
/**
 * A wrapper component for passing down the Artsy theme context
 */
export declare const Theme: (props: any) => JSX.Element;
/** All available px spacing maps */
export declare type SpacingUnit = keyof typeof themeProps["space"];
/** All available color keys */
export declare type Color = keyof typeof themeProps["colors"];
/** All available width breakpoint */
export declare type Breakpoint = keyof typeof breakpoints;
/** All available type sizes */
export declare type TypeSizes = typeof themeProps.typeSizes;
/** All available sizes for our sans font */
export declare type SansSize = keyof TypeSizes["sans"] | Array<keyof TypeSizes["sans"]>;
/** All available sizes for our serif font */
export declare type SerifSize = keyof TypeSizes["serif"] | Array<keyof TypeSizes["serif"]>;
/** All available sizes for our display font */
export declare type DisplaySize = keyof TypeSizes["display"] | Array<keyof TypeSizes["display"]>;
