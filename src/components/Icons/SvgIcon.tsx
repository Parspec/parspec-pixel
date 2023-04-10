import { SvgIcon as MUISvgIcon, SvgIconProps as MUISvgIconProps, Theme } from '@mui/material';

function getCustomFontsize(fontSize?: string) {
    switch (fontSize) {
        case 'xs':
            return '12px';
        case 'xl':
            return '40px';
        case 'xxl':
            return '44px';
    }
}

export function getFillColor(theme: Theme, color: string | undefined) {
    if (!color) return;
    switch (color) {
        case 'neutral.main': {
            return theme.palette.neutral.main;
        }
        case 'primary': {
            return theme.palette.primary.main;
        }
    }
}

export interface SvgIconProps extends Omit<MUISvgIconProps, 'fontSize'> {
    fontSize?: 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'inherit';
}

export function SvgIcon({ children, fontSize, color, ...restProps }: SvgIconProps) {
    const customFontSize = getCustomFontsize(fontSize);
    const fontSizePropVal = fontSize === 'xl' || fontSize === 'xxl' || fontSize === 'xs' ? undefined : fontSize;

    return (
        <MUISvgIcon {...restProps} fontSize={fontSizePropVal} sx={{ fontSize: customFontSize }}>
            {children}
        </MUISvgIcon>
    );
}
