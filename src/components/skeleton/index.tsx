import { default as MUISkeleton, SkeletonProps as MUISkeletonProps } from '@mui/material/Skeleton';
export interface SkeletonProps extends Omit<MUISkeletonProps, 'classes'> {
    color?: 'light' | 'dark';
}
export const Skeleton = (props: SkeletonProps) => {
    return <MUISkeleton {...props} sx={{ bgcolor: props.color === 'light' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }} />;
};

Skeleton.defaultProps = {
    color: 'dark'
};
