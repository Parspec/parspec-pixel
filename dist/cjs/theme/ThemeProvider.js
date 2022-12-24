"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("@mui/material/styles");
const theme = (0, styles_1.createTheme)({
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
    return react_1.default.createElement(styles_1.ThemeProvider, { theme: theme }, props.children);
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map