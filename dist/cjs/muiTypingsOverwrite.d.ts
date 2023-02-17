import '@mui/material/styles';
declare module '@mui/material/styles' {
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
        tertiary: PaletteOptions['primary'];
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
    }
}
declare module '@mui/material/Switch' {
    interface SwitchPropsColorOverrides {
        tertiary: true;
    }
}
