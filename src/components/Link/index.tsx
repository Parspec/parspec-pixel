import { Link as MUILink, LinkProps as MUILinkProps } from '@mui/material';

export function Link<C extends React.ElementType>({ children, component, ...restProps }: Omit<MUILinkProps<C, { component?: C }>, 'classes' | 'sx' | 'TypographyClasses'>) {
    return (
        <MUILink component={component} {...restProps}>
            {children}
        </MUILink>
    );
}
