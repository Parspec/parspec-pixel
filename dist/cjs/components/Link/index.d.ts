/// <reference types="react" />
import { LinkProps as MUILinkProps } from '@mui/material';
export declare function Link<C extends React.ElementType>({ children, component, ...restProps }: MUILinkProps<C, {
    component?: C;
}>): JSX.Element;
