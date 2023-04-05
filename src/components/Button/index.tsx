import { forwardRef } from 'react';
import { default as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { CircularProgress } from '../CircularProgress';

export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary' | 'tertiary' | 'error';
    isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ disabled, isLoading, color, ...rest }, ref) => {
    return (
        <MUIButton
            ref={ref}
            {...rest}
            color={color}
            sx={disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none' } : {}}
            startIcon={isLoading ? <CircularProgress color={'inherit'} size="sm" /> : null}
        />
    );
});

Button.defaultProps = {
    color: 'tertiary',
    variant: 'contained',
    isLoading: false
};
