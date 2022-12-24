import React from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
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
export const ThemeProvider = (props) => {
    return React.createElement(MUIThemeProvider, { theme: theme }, props.children);
};
//# sourceMappingURL=ThemeProvider.js.map