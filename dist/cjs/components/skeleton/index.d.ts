import { SkeletonProps as MUISkeletonProps } from '@mui/material/Skeleton';
export interface SkeletonProps extends Omit<MUISkeletonProps, 'classes'> {
    color?: 'light' | 'dark';
}
export declare const Skeleton: {
    (props: SkeletonProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        color: string;
    };
};
