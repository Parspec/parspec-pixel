"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const theme = styles_1.createTheme({
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
const ThemeProvider = (props) => {
    return jsx_runtime_1.jsx(styles_1.ThemeProvider, Object.assign({ theme: theme }, { children: props.children }), void 0);
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map