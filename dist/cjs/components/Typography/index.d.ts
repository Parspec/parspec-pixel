/// <reference types="react" />
import { TypographyProps as MUITypographyProps } from '@mui/material/Typography';
interface TypographyProps extends Pick<MUITypographyProps, "color" | "fontWeight" | "textTransform" | "variant" | "fontSize" | "letterSpacing" | "lineHeight"> {
    color: 'primary' | 'secondary';
}
export interface HeadingTypographyProps extends Omit<TypographyProps, "variant" | "fontSize" | "letterSpacing" | "lineHeight" | "fontWeight"> {
}
export interface BodyTypographyProps extends Omit<TypographyProps, "variant" | "fontSize" | "letterSpacing" | "lineHeight"> {
}
export declare const H1: React.FC<HeadingTypographyProps>;
export declare const H2: React.FC<HeadingTypographyProps>;
export declare const H3: React.FC<HeadingTypographyProps>;
export declare const H4: React.FC<HeadingTypographyProps>;
export declare const H5: React.FC<HeadingTypographyProps>;
export declare const H6: React.FC<HeadingTypographyProps>;
export declare const BodyBig: React.FC<BodyTypographyProps>;
export declare const BodyMedium: React.FC<BodyTypographyProps>;
export declare const BodySmall: React.FC<BodyTypographyProps>;
export declare const BodyXS: React.FC<BodyTypographyProps>;
export declare const Typography: {
    H1: import("react").FC<HeadingTypographyProps>;
    H2: import("react").FC<HeadingTypographyProps>;
    H3: import("react").FC<HeadingTypographyProps>;
    H4: import("react").FC<HeadingTypographyProps>;
    H5: import("react").FC<HeadingTypographyProps>;
    H6: import("react").FC<HeadingTypographyProps>;
    BodyBig: import("react").FC<BodyTypographyProps>;
    BodyMedium: import("react").FC<BodyTypographyProps>;
    BodySmall: import("react").FC<BodyTypographyProps>;
    BodyXS: import("react").FC<BodyTypographyProps>;
};
export {};
