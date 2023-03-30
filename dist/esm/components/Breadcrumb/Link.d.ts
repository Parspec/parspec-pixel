/// <reference types="react" />
import { LinkProps as MUILinkProps } from '@mui/material/Link';
export default function Link<C extends React.ElementType>({ children, component, ...restProps }: MUILinkProps<C, {
    component?: C;
}>): JSX.Element;
