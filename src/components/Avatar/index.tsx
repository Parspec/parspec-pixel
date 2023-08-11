import { forwardRef } from 'react';
import { default as MUIAvatar, AvatarProps } from '@mui/material/Avatar';

export const Avatar: React.FC<AvatarProps> = forwardRef((props, ref) => {
    return <MUIAvatar {...props} ref={ref} />;
});
