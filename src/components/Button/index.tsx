import { forwardRef } from 'react';
import { default as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { CircularProgress } from '../CircularProgress';

export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary' | 'tertiary';
    isLoading?: boolean;
    loaderThickness?: number;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ disabled, isLoading, color, loaderThickness, ...rest }, ref) => {
    return (
        <MUIButton
            ref={ref}
            {...rest}
            color={color}
            sx={disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none' } : {}}
            startIcon={isLoading ? <CircularProgress thickness={loaderThickness} color={'inherit'} size="1rem" /> : null}
        />
    );
});

Button.defaultProps = {
    color: 'primary',
    variant: 'contained',
    isLoading: false,
    loaderThickness: 3.6
};
