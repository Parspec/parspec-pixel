import { SvgIcon as MUISvgIcon, SvgIconProps as MUISvgIconProps, PaletteColor } from '@mui/material';
import { theme } from '../../theme';
import { ICON_SIZE_OPTIONS } from '../../Shared/utils';

export function useGetFillColor(color: string) {
    if (!color) return theme.palette.primary.main;
    const [c0, c1] = color.split('.');
    const finalColor = theme.palette[c0 as keyof typeof theme.palette] as PaletteColor;
    return c1 ? finalColor[c1 as keyof PaletteColor] : finalColor.main;
}

export interface SvgIconProps extends Omit<MUISvgIconProps, 'fontSize'> {
    fontSize?: 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'inherit';
}

export function SvgIcon({ children, fontSize, color, ...restProps }: SvgIconProps) {
    return (
        <MUISvgIcon {...restProps} sx={{ fontSize: ICON_SIZE_OPTIONS[fontSize as keyof typeof ICON_SIZE_OPTIONS] }}>
            {children}
        </MUISvgIcon>
    );
}

SvgIcon.defaultProps = {
    fontSize: 'medium',
    color: 'primary'
};
