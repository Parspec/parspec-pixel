import { default as MUIBreadcrumb, BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link';
import { BodyXS } from '../Typography';

interface OptionTypes {
    displaytext: string;
    href: string;
}

export interface BreadcrumbsProps extends Omit<MUIBreadcrumbsProps, 'classes' | 'sx'> {
    options: OptionTypes[];
    component?: React.ElementType;
}

function Link<C extends React.ElementType>({ children, component, ...restProps }: MUILinkProps<C, { component?: C }>) {
    return (
        <MUILink component={component} {...restProps}>
            {children}
        </MUILink>
    );
}

export const Breadcrumb: React.FC<BreadcrumbsProps> = ({ options, component, ...rest }) => {
    return (
        <MUIBreadcrumb separator=">" {...rest}>
            {options.map((item, index) => {
                if (index === options.length - 1) {
                    return (
                        <BodyXS color={'secondary'} key={index}>
                            {item.displaytext}
                        </BodyXS>
                    );
                }
                return (
                    <Link fontWeight="400" fontFamily="Inter" fontSize={'12px'} key={index} color="secondary" underline={'hover'} to={item.href} component={component}>
                        {item.displaytext}
                    </Link>
                );
            })}
        </MUIBreadcrumb>
    );
};
