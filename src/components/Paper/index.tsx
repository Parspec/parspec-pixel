import { forwardRef } from 'react';
import { default as MUIPaper, PaperProps as MUIPaperProps } from '@mui/material/Paper';

export interface PaperProps extends Omit<MUIPaperProps, 'classes'> {}

export const Paper = forwardRef<HTMLDivElement, PaperProps>(({ children, ...props }, ref) => (
    <MUIPaper ref={ref} {...props}>
        {children}
    </MUIPaper>
));

Paper.defaultProps = {
    variant: 'outlined'
};
