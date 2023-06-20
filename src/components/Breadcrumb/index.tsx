import { default as MUIBreadcrumb, BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import { TypographyProps } from '@mui/material';
import { Link } from '../Link';
import { Skeleton } from '../skeleton';
import { BodyXS } from '../Typography';
import { Box } from '../Box';

interface OptionTypes {
    displaytext: string;
    href: string;
}

export interface BreadcrumbsProps extends Omit<MUIBreadcrumbsProps, 'classes' | 'sx'> {
    options: OptionTypes[];
    component?: React.ElementType;
    isLoading?: boolean;
}

const MUIBreadCrumbText = (props: TypographyProps) => (
    <Box maxWidth="160px">
        <BodyXS {...props} limit lines={1} />
    </Box>
);

export const Breadcrumb: React.FC<BreadcrumbsProps> = ({ options, component, isLoading = false, ...rest }) => {
    return (
        <MUIBreadcrumb separator=">" {...rest}>
            {options.map((item, index) => {
                if (isLoading) {
                    return <Skeleton variant="rectangular" width="116px" height="16px" key={index} />;
                }
                if (index === options.length - 1) {
                    return (
                        <MUIBreadCrumbText color={'secondary'} key={index}>
                            {item.displaytext}
                        </MUIBreadCrumbText>
                    );
                }
                return (
                    <Link key={index} color="secondary" underline={'hover'} to={item.href} component={component}>
                        <MUIBreadCrumbText sx={{ '&:hover': { color: 'inherit' } }}>{item.displaytext}</MUIBreadCrumbText>
                    </Link>
                );
            })}
        </MUIBreadcrumb>
    );
};
