/// <reference types="react" />
import { TypographyProps as MUITypographyProps } from '@mui/material/Typography';
interface TypographyProps extends MUITypographyProps {
}
export interface HeadingTypographyProps extends Omit<TypographyProps, 'variant' | 'fontSize' | 'letterSpacing' | 'lineHeight' | 'fontWeight'> {
}
export interface BodyTypographyProps extends Omit<TypographyProps, 'variant' | 'fontSize' | 'letterSpacing' | 'lineHeight'> {
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
export {};
