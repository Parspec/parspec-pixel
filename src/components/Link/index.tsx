import { Link as MUILink, LinkProps as MUILinkProps } from '@mui/material';

export function Link<C extends React.ElementType>({ children, component, ...restProps }: MUILinkProps<C, { component?: C }>) {
    return (
        <MUILink component={component} {...restProps}>
            {children}
        </MUILink>
    );
}
