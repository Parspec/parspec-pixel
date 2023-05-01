import { default as MUISkeleton, SkeletonProps } from '@mui/material/Skeleton';

export const Skeleton = (props: SkeletonProps) => {
    return <MUISkeleton {...props} sx={{ bgcolor: 'rgba(0,0,0,0.5)' }} />;
};

Skeleton.defaultProps = {
    color: 'rgba(0,0,0,0.05)'
};
