import { default as MUITypography, TypographyProps as MUITypographyProps } from '@mui/material/Typography';

interface TypographyProps extends Omit<MUITypographyProps, 'color'> {
    color?: 'primary' | 'secondary';
}

export interface HeadingTypographyProps extends Omit<TypographyProps, 'variant' | 'fontSize' | 'letterSpacing' | 'lineHeight' | 'fontWeight'> {}
export interface BodyTypographyProps extends Omit<TypographyProps, 'variant' | 'fontSize' | 'letterSpacing' | 'lineHeight'> {}

const Heading: React.FC<TypographyProps> = (props) => <MUITypography {...props} />;

Heading.defaultProps = {
    color: 'secondary'
};

const BodyText: React.FC<TypographyProps> = (props) => {
    return <MUITypography {...props} />;
};

BodyText.defaultProps = {
    color: 'secondary'
};

const H1: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h1" />;
const H2: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h2" />;
const H3: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h3" />;
const H4: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h4" />;
const H5: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h5" />;
const H6: React.FC<HeadingTypographyProps> = (props) => <Heading {...props} variant="h6" />;

const BodyBig: React.FC<BodyTypographyProps> = (props) => <BodyText {...props} fontSize={'18px'} letterSpacing={'0.15px'} lineHeight={'28px'} />;
const BodyMedium: React.FC<BodyTypographyProps> = (props) => <BodyText {...props} fontSize={'16px'} letterSpacing={'0.44px'} lineHeight={'24px'} />;
const BodySmall: React.FC<BodyTypographyProps> = (props) => <BodyText {...props} fontSize={'14px'} letterSpacing={'0.25px'} lineHeight={'16px'} />;
const BodyXS: React.FC<BodyTypographyProps> = (props) => <BodyText {...props} fontSize={'12px'} lineHeight={'15px'} />;

export const Typography = {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    BodyBig,
    BodyMedium,
    BodySmall,
    BodyXS
};
