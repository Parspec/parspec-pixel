import {default as MUITypography, TypographyProps as MUITypographyProps } from '@mui/material/Typography';

export interface TypographyProps extends Pick<MUITypographyProps,"color" | "fontWeight" | "textTransform" | "variant" | "fontSize" | "letterSpacing" | "lineHeight">{
  color: 'primary' | 'secondary';
};

export interface HeadingTypographyProps extends Omit<TypographyProps, "fontWeight" | "fontSize" | "letterSpacing" | "lineHeight">{}; 

export interface BodyTypographyProps extends Omit<TypographyProps, "variant">{}; 

const Heading: React.FC<HeadingTypographyProps> = (props) => (
    <MUITypography {...props}/>
) 
const BodyT: React.FC<BodyTypographyProps> = (props) => { 
    return (
        <MUITypography {...props} />
    );
}
 
export const H1: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h1" />; 
export const H2: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h2" />; 
export const H3: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h3" />; 
export const H4: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h4" />; 
export const H5: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h5" />; 
export const H6: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h6" />; 

export const BodyBig: React.FC<Omit<BodyTypographyProps, "fontSize" | "letterSpacing" | "lineHeight">> = (props) => <BodyT {...props} fontSize={"18px"} letterSpacing={"0.15px"} lineHeight={"28px"}/>; 
export const BodyMedium: React.FC<Omit<BodyTypographyProps, "fontSize" | "letterSpacing" | "lineHeight">> = (props) => <BodyT {...props} fontSize={"16px"} letterSpacing={"0.44px"} lineHeight={"24px"}/>; 
export const BodySmall: React.FC<Omit<BodyTypographyProps, "fontSize" | "letterSpacing" | "lineHeight">> = (props) => <BodyT {...props} fontSize={"14px"} letterSpacing={"0.25px"} lineHeight={"16px"}/>; 
export const BodyXS: React.FC<Omit<BodyTypographyProps, "fontSize" | "letterSpacing" | "lineHeight">> = (props) => <BodyT {...props} fontSize={"12px"} lineHeight={"15px"}/>; 

Heading.defaultProps = {
  color: 'secondary',
}
BodyT.defaultProps = {
  color: 'secondary',
  fontWeight: 400
}
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
}




