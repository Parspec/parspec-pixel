import React, { PropsWithChildren } from 'react';
declare module '@mui/material/styles' {
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
        tertiary: PaletteOptions['primary'];
    }
    interface ThemeOptions {
        status: {
            error: React.CSSProperties['color'];
            success: React.CSSProperties['color'];
        };
    }
}
export declare const ThemeProvider: React.FC<PropsWithChildren>;
