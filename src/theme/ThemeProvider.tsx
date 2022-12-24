import React, { PropsWithChildren } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

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

    interface ThemeOptions {
        status: {
            error: React.CSSProperties['color'];
            success: React.CSSProperties['color'];
        };
    }
}

const theme = createTheme({
    spacing: 4,
    status: {
        error: '#F43F5E',
        success: '#2DD4DE'
    },
    palette: {
        primary: {
            main: '#FFA72B'
            // dark: '#FFA72B',
            // light: '#FFA72B',
            // contrastText: '#FFA72B'
        },
        secondary: {
            main: '#091535'
        },
        tertiary: {
            main: '#6467F2'
        },
        neutral: {
            main: '#5E667D'
        }
    }
});

export const ThemeProvider: React.FC<PropsWithChildren> = (props) => {
    return <MUIThemeProvider theme={theme}>{props.children}</MUIThemeProvider>;
};
