"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const theme = (0, styles_1.createTheme)({
    spacing: 4,
    // shape: {
    //     borderRadius: 0
    // },
    typography: {
        fontFamily: 'Inter',
        fontSize: 12,
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
            light: '#ffc471',
            main: '#FFA72B',
            dark: '#e89827',
            contrastText: '#091535'
        },
        secondary: {
            light: '#B3B6C0',
            main: '#091535',
            dark: '#060f26',
            contrastText: '#ffffff'
        },
        tertiary: {
            light: '#B8B9F9',
            main: '#6467F2',
            dark: '#4749AC',
            contrastText: '#ffffff'
        },
        neutral: {
            light: '#E9EBF8',
            main: '#5E667D',
            dark: '#434859',
            contrastText: '#091535'
        },
        success: {
            main: '#2dd4de'
        },
        // info: {
        //     main: ''
        // },
        // warning: {
        //     main: ''
        // }
        error: {
            main: '#F43F5E'
        }
    }
});
const ThemeProvider = (props) => {
    return (0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, Object.assign({ theme: theme }, { children: props.children }));
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map