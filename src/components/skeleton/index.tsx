import { default as MUISkeleton, SkeletonProps } from '@mui/material/Skeleton';

export const Skeleton = (props: SkeletonProps) => {
    return <MUISkeleton {...props} />;
};

Skeleton.defaultProps = {
    color: 'rgba(0,0,0,0.04)'
};
