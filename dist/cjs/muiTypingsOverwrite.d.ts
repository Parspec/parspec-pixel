import '@mui/material/styles';
declare module '@mui/material/styles' {
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
        tertiary: PaletteOptions['primary'];
    }
}
