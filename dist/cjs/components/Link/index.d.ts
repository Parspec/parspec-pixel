/// <reference types="react" />
import { LinkProps as MUILinkProps } from '@mui/material';
export declare function Link<C extends React.ElementType>({ children, component, ...restProps }: Omit<MUILinkProps<C, {
    component?: C;
}>, 'classes' | 'sx' | 'TypographyClasses'>): JSX.Element;
