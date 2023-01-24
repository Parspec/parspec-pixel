import { jsx as _jsx } from "react/jsx-runtime";
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
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
        // text: {
        //     primary: '#091535',
        //     secondary: '#ffffff',
        //     disabled: '#ffc471'
        // },
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
    return _jsx(MUIThemeProvider, Object.assign({ theme: theme }, { children: props.children }));
};
//# sourceMappingURL=ThemeProvider.js.map