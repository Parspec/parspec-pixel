import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link';

export default function Link<C extends React.ElementType>({ children, component, ...restProps }: MUILinkProps<C, { component?: C }>) {
    return (
        <MUILink component={component} {...restProps}>
            {children}
        </MUILink>
    );
}
