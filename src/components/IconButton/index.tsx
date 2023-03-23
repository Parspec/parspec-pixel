import { forwardRef } from 'react';
import { default as MUIIconButton, IconButtonProps } from '@mui/material/IconButton';

export const IconButton: React.FunctionComponent<IconButtonProps> = forwardRef((props, ref) => {
    return <MUIIconButton {...props} ref={ref} />;
});
