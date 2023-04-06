import { forwardRef } from 'react';
import { default as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { CircularProgress } from '../CircularProgress';
import { ButtonSizeType } from '../../Shared/interfaces';

export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'warning';
    isLoading?: boolean;
    size?: ButtonSizeType;
}

const XS_STYLE = {
    px: 2,
    py: 0.5
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ disabled, isLoading, color, ...rest }, ref) => {
    return (
        <MUIButton
            ref={ref}
            color={color}
            // sx={disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none', ...(rest?.size === 'xs' && XS_STYLE) } : { ...(rest?.size === 'xs' && XS_STYLE) }}
            disabled={disabled}
            sx={{ ...(isLoading && { opacity: 0.5, pointerEvents: 'none' }), ...(rest?.size === 'xs' && XS_STYLE) }}
            {...rest}
            startIcon={isLoading ? <CircularProgress color={'inherit'} size={rest?.size === 'xs' ? 'xs' : 'sm'} /> : null}
        />
    );
});

Button.defaultProps = {
    color: 'tertiary',
    variant: 'contained',
    isLoading: false
};
