import { default as MUIBreadcrumb, BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import Link from './Link';
import { BodyXS } from '../Typography';

interface OptionTypes {
    displaytext: string;
    href: string;
}

export interface BreadcrumbsProps extends Omit<MUIBreadcrumbsProps, 'classes' | 'sx'> {
    options: OptionTypes[];
    component?: React.ElementType;
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
