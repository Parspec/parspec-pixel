import { Link as MUILink, LinkProps as MUILinkProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLink = styled(MUILink)(({ theme }) => ({
    '&:hover': {
        color: theme.palette.primary.main
    }
}));

export function Link<C extends React.ElementType>({ children, component, ...restProps }: MUILinkProps<C, { component?: C }>) {
    return (
        <StyledLink component={component} {...restProps}>
            {children}
        </StyledLink>
    );
}
