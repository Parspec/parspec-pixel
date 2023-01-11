import { jsx as _jsx } from "react/jsx-runtime";
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
// declare module '@mui/material/styles' {
//     // interface Theme {
//     //     status: {
//     //         danger: React.CSSProperties['color'];
//     //         success: React.CSSProperties['color'];
//     //     };
//     // }
//     // interface Palette {
//     //     neutral: Palette['primary'];
//     // }
//     interface PaletteOptions {
//         neutral: PaletteOptions['primary'];
//         tertiary: PaletteOptions['primary'];
//     }
//     // interface PaletteColor {
//     //     darker?: string;
//     // }
//     // interface SimplePaletteColorOptions {
//     //     darker?: string;
//     // }
//     // interface ThemeOptions {
//     //     status: {
//     //         error: React.CSSProperties['color'];
//     //         success: React.CSSProperties['color'];
//     //     };
//     // }
// }
const theme = createTheme({
    spacing: 4,
    // shape: {
    //     borderRadius: 0
    // },
    typography: {
        fontFamily: 'Inter',
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        action: {},
        text: {
            primary: '#091535',
            secondary: '#ffffff',
            disabled: '#ffc471'
        },
        primary: {
            main: '#FFA72B',
            dark: '#e89827',
            light: '#ffc471',
            contrastText: '#091535'
        },
        secondary: {
            main: '#091535',
            dark: '#060f26',
            light: '#B3B6C0',
            contrastText: '#ffffff'
        },
        success: {
            main: '#2dd4de'
        },
        error: {
            main: '#F43F5E'
        },
        tertiary: {
            main: '#6467F2'
        },
        neutral: {
            main: '#5E667D'
        }
    }
});
export const ThemeProvider = (props) => {
    return _jsx(MUIThemeProvider, Object.assign({ theme: theme }, { children: props.children }), void 0);
};
//# sourceMappingURL=ThemeProvider.js.map