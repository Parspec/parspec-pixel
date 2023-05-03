import { default as MUITypography, TypographyProps as MUITypographyProps } from '@mui/material/Typography';
import { TextLimiter } from './TextLimiter';
interface TypographyProps extends MUITypographyProps {
    limit?: boolean;
    lines?: number;
}

export interface HeadingTypographyProps extends Omit<TypographyProps, 'variant' | 'fontSize' | 'letterSpacing' | 'lineHeight' | 'fontWeight'> {}
export interface BodyTypographyProps extends Omit<TypographyProps, 'variant' | 'fontSize' | 'letterSpacing' | 'lineHeight'> {}

const Heading: React.FC<TypographyProps> = ({ limit, lines, children, ...rest }) => {
    return <MUITypography {...rest}>{limit ? <TextLimiter text={children} tooltip={children} lines={lines!} /> : children}</MUITypography>;
};

Heading.defaultProps = {
    color: 'secondary',
    limit: true,
    lines: 1
};

const BodyText: React.FC<TypographyProps> = ({ limit, lines, children, ...rest }) => {
    return <MUITypography {...rest}>{limit ? <TextLimiter text={children} tooltip={children} lines={lines!} /> : children}</MUITypography>;
};

BodyText.defaultProps = {
    color: 'secondary',
    limit: true,
    lines: 1
};

export const H1: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h1" fontSize={'96px'} />;
export const H2: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h2" fontSize={'60px'} />;
export const H3: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h3" fontSize={'48px'} />;
export const H4: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h4" fontSize={'34px'} />;
export const H5: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h5" fontSize={'24px'} />;
export const H6: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h6" fontSize={'20px'} />;

export const BodyBig: React.FC<BodyTypographyProps> = (props) => <BodyText {...props} fontSize={'18px'} letterSpacing={'0.15px'} lineHeight={'28px'} />;
export const BodyMedium: React.FC<BodyTypographyProps> = (props) => <BodyText {...props} fontSize={'16px'} letterSpacing={'0.44px'} lineHeight={'24px'} />;
export const BodySmall: React.FC<BodyTypographyProps> = (props) => <BodyText {...props} fontSize={'14px'} letterSpacing={'0.25px'} lineHeight={'16px'} />;
export const BodyXS: React.FC<BodyTypographyProps> = (props) => <BodyText {...props} fontSize={'12px'} lineHeight={'15px'} />;
