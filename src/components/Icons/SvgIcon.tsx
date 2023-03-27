import { SvgIcon as MUISvgIcon, SvgIconProps as MUISvgIconProps } from '@mui/material';

function getCustomFontsize(fontSize?: string) {
    switch (fontSize) {
        case 'xl':
            return '40px';
        case 'xxl':
            return '44px';
    }
}

interface SvgIconProps extends MUISvgIconProps {}

export function SvgIcon({ children, ...restProps }: SvgIconProps) {
    const { fontSize } = restProps;
    const customFontSize = getCustomFontsize(fontSize);

    return (
        <MUISvgIcon {...restProps} sx={{ fontSize: customFontSize }}>
            {children}
        </MUISvgIcon>
    );
}
