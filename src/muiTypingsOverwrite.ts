import '@mui/material/styles';

declare module '@mui/material/styles' {
    // interface Theme {
    //     status: {
    //         danger: React.CSSProperties['color'];
    //         success: React.CSSProperties['color'];
    //     };
    // }
    // interface Palette {
    //     neutral: Palette['primary'];
    // }
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
        tertiary: PaletteOptions['primary'];
    }
    // interface PaletteColor {
    //     darker?: string;
    // }
    // interface SimplePaletteColorOptions {
    //     darker?: string;
    // }
    // interface ThemeOptions {
    //     status: {
    //         error: React.CSSProperties['color'];
    //         success: React.CSSProperties['color'];
    //     };
    // }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
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
