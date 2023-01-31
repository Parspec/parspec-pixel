import { ReactNode } from 'react';
import { default as MUIBreadcrumb, BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

interface OptionTypes {
    displaytext: string;
    href: string;
}

export interface BreadcrumbsProps extends Omit<MUIBreadcrumbsProps, 'classes' | 'sx'> {
    options: OptionTypes[];
    label: string;
    typography?: ReactNode;
    color?: string;
    seperator?: ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbsProps> = ({ options, typography, seperator, label, color, ...rest }) => {
    return (
        <MUIBreadcrumb separator={seperator} aria-label={label} {...rest}>
            {options.map((item, index) => {
                return (
                    <Link key={index} underline={'hover'} color={color} href={item.href}>
                        {item.displaytext}
                    </Link>
                );
            })}
            {typography && typography}
        </MUIBreadcrumb>
    );
};

Breadcrumb.defaultProps = {
    color: 'text.primary',
    separator: '>'
};
