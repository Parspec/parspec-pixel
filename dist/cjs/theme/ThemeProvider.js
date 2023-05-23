'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ThemeProvider = exports.theme = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const styles_1 = require('@mui/material/styles');
exports.theme = (0, styles_1.createTheme)({
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: '14px',
                    color: '#ffffff',
                    backgroundColor: '#091535'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) =>
                    Object.assign(
                        {},
                        ownerState.size === 'xs' && {
                            padding: '2px 8px'
                        }
                    )
            }
        }
        // MuiSnackbarContent: {
        //     styleOverrides: {
        //         root: {
        //             padding :
        //         }
        //     }
        // }
    },
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
        text: {
            primary: '#091535',
            secondary: '#6B7280'
        },
        tertiary: {
            light: '#ffe4bd',
            main: '#FFA72B',
            dark: '#e89827',
            contrastText: '#091535'
        },
        secondary: {
            light: '#334155',
            main: '#091535',
            dark: '#060f26',
            contrastText: '#ffffff'
        },
        primary: {
            light: '#E3E3FF',
            main: '#6467F2',
            dark: '#4749AC',
            contrastText: '#ffffff'
        },
        neutral: {
            light: '#F8FAFC',
            main: '#F1F5F9',
            dark: '#64748B',
            contrastText: '#091535'
        },
        success: {
            light: '#D1FAE5',
            main: '#10B981',
            dark: '#047857',
            contrastText: '#ffffff'
        },
        info: {
            light: '#DBEAFE',
            main: '#3B82F6'
        },
        // warning: {
        //     main: ''
        // }
        error: {
            light: '#FFE4E6',
            main: '#F43F5E'
        }
    }
});
const ThemeProvider = (props) => {
    return (0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, Object.assign({ theme: exports.theme }, { children: props.children }));
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map
