import { default as MUIBreadcrumb, BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import { Link } from '../Link';
import { Skeleton } from '../skeleton';
import { BodyXS } from '../Typography';

interface OptionTypes {
    displaytext: string;
    href: string;
}

export interface BreadcrumbsProps extends Omit<MUIBreadcrumbsProps, 'classes' | 'sx'> {
    options: OptionTypes[];
    component?: React.ElementType;
    isLoading?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbsProps> = ({ options, component, isLoading = false, ...rest }) => {
    return (
        <MUIBreadcrumb separator=">" {...rest}>
            {options.map((item, index) => {
                if (isLoading) {
                    return <Skeleton variant="rectangular" width="116px" height="16px" key={index} />;
                }
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
