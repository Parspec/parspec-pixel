import '@mui/material/styles';
declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
        tertiary: Palette['primary'];
    }
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
        tertiary: PaletteOptions['primary'];
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
    }
    interface ButtonPropsSizeOverrides {
        xs: true;
    }
}
declare module '@mui/material/Radio' {
    interface RadioPropsColorOverrides {
        tertiary: true;
    }
}
declare module '@mui/material/Checkbox' {
    interface CheckboxPropsColorOverrides {
        tertiary: true;
    }
}
declare module '@mui/material/Switch' {
    interface SwitchPropsColorOverrides {
        tertiary: true;
    }
}
declare module '@mui/material/CircularProgress' {
    interface CircularProgressPropsColorOverrides {
        tertiary: true;
    }
}
declare module '@mui/material/LinearProgress' {
    interface LinearProgressPropsColorOverrides {
        tertiary: true;
    }
}
declare module '@mui/material/Tabs' {
    interface TabsPropsIndicatorColorOverrides {
        tertiary: true;
    }
}
declare module '@mui/material/Icon' {
    interface IconPropsColorOverrides {
        tertiary: true;
    }
}
declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        tertiary: true;
    }
}
declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
        tertiary: true;
        neutral: true;
    }
}
declare module '@mui/material/Pagination' {
    interface PaginationPropsColorOverrides {
        tertiary: true;
        neutral: true;
    }
}
declare module '@mui/material/PaginationItem' {
    interface PaginationItemPropsColorOverrides {
        tertiary: true;
        neutral: true;
    }
}
declare module '@mui/material/Slider' {
    interface SliderPropsColorOverrides {
        tertiary: true;
        neutral: true;
    }
}
