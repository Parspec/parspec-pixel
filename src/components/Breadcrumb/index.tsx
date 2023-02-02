import { default as MUIBreadcrumb, BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

interface OptionTypes {
    displaytext: string;
    href: string;
}

export interface BreadcrumbsProps extends Omit<MUIBreadcrumbsProps, 'classes' | 'sx'> {
    options: OptionTypes[];
}

export const Breadcrumb: React.FC<BreadcrumbsProps> = ({ options, ...rest }) => {
    return (
        <MUIBreadcrumb {...rest}>
            {options.map((item, index) => {
                return (
                    <Link key={index} underline={'hover'} href={item.href}>
                        {item.displaytext}
                    </Link>
                );
            })}
        </MUIBreadcrumb>
    );
};
