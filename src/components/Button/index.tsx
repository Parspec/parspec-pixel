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
    height: '24px',
    padding: '4px 8px',
    fontSize: '10px'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ disabled, isLoading, color, ...rest }, ref) => {
    return (
        <MUIButton
            ref={ref}
            color={color}
            sx={disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none', ...(rest?.size === 'xs' && XS_STYLE) } : { ...(rest?.size === 'xs' && XS_STYLE) }}
            // sx={{ height: '24px' }}
            {...rest}
            startIcon={isLoading ? <CircularProgress color={'inherit'} size="sm" /> : null}
        />
    );
});

Button.defaultProps = {
    color: 'tertiary',
    variant: 'contained',
    isLoading: false
};
