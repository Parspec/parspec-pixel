/// <reference types="react" />
import { TypographyProps as MUITypographyProps } from '@mui/material/Typography';
interface TypographyProps extends Omit<MUITypographyProps, 'color'> {
    color?: 'primary' | 'secondary';
}
export interface HeadingTypographyProps extends Omit<TypographyProps, 'variant' | 'fontSize' | 'letterSpacing' | 'lineHeight' | 'fontWeight'> {
}
export interface BodyTypographyProps extends Omit<TypographyProps, 'variant' | 'fontSize' | 'letterSpacing' | 'lineHeight'> {
}
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
