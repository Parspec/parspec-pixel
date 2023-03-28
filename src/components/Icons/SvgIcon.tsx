import { SvgIcon as MUISvgIcon, SvgIconProps as MUISvgIconProps } from '@mui/material';

function getCustomFontsize(fontSize?: string) {
    switch (fontSize) {
        case 'xl':
            return '40px';
        case 'xxl':
            return '44px';
    }
}

export interface SvgIconProps extends Omit<MUISvgIconProps, 'fontSize'> {
    fontSize?: 'small' | 'medium' | 'large' | 'xl' | 'xxl';
}

export function SvgIcon({ children, fontSize, ...restProps }: SvgIconProps) {
    const customFontSize = getCustomFontsize(fontSize);
    const fontSizePropVal = fontSize === 'xl' || fontSize === 'xxl' ? undefined : fontSize;
    return (
        <MUISvgIcon {...restProps} fontSize={fontSizePropVal} sx={{ fontSize: customFontSize }}>
            {children}
        </MUISvgIcon>
    );
}
