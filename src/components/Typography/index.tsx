import {default as MUITypography, TypographyProps as MUITypographyProps } from '@mui/material/Typography';

export interface TypographyProps extends Pick<MUITypographyProps,"color" | "fontWeight" | "textTransform" | "lineHeight" | "letterSpacing" | "fontSize">{
  color: 'primary' | "primary.light" | 'secondary';
};

export interface HeadingTypographyProps extends Omit<TypographyProps, "fontWeight" | "fontSize">{
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color: 'primary' | 'primary.light' | 'secondary';
}; 

export interface BodyTypographyProps extends TypographyProps{
  variant: "BodyBig" | "BodyMedium" | "BodySmall" | "BodyXS"; 
  color: 'primary' | 'secondary';
};

const Heading: React.FC<HeadingTypographyProps> = (props) => (<MUITypography {...props}/>) 
const BodyT: React.FC<BodyTypographyProps> = (props) => { 
    let propsCopy = JSON.parse(JSON.stringify(props));
    delete propsCopy['variant'];
    return (<MUITypography 
      {...propsCopy}
    />);
}
 
export const H1: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h1" />; 
export const H2: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h2" />; 
export const H3: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h3" />; 
export const H4: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h4" />; 
export const H5: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h5" />; 
export const H6: React.FC<Omit<HeadingTypographyProps,"variant">> = (props) => <Heading {...props} variant="h6" />; 

export const BodyBig: React.FC<Omit<BodyTypographyProps, "variant" | "fontSize">> = (props) => <BodyT {...props} variant="BodyBig" fontSize={"18px"}/>; 
export const BodyMedium: React.FC<Omit<BodyTypographyProps, "variant" | "fontSize">> = (props) => <BodyT {...props} variant="BodyMedium" fontSize={"16px"} />; 
export const BodySmall: React.FC<Omit<BodyTypographyProps, "variant" | "fontSize">> = (props) => <BodyT {...props} variant="BodySmall" fontSize={"14px"} />; 
export const BodyXS: React.FC<Omit<BodyTypographyProps, "variant" | "fontSize">> = (props) => <BodyT {...props} variant="BodyXS" fontSize={"12px"} />; 

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




