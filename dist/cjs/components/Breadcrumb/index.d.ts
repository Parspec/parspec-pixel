/// <reference types="react" />
import { BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/material/Breadcrumbs';
interface OptionTypes {
    displaytext: string;
    href: string;
}
export interface BreadcrumbsProps extends Omit<MUIBreadcrumbsProps, 'classes' | 'sx'> {
    options: OptionTypes[];
    component?: React.ElementType;
    isLoading?: boolean;
}
export declare const Breadcrumb: React.FC<BreadcrumbsProps>;
export {};
