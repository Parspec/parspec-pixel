"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeaderMenuIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SvgIcon_1 = require("../SvgIcon");
const TableHeaderMenuIcon = ({ fontSize, color }) => {
    return ((0, jsx_runtime_1.jsxs)(SvgIcon_1.SvgIcon, Object.assign({ fontSize: fontSize, xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.83317 12.8336H12.1665C12.5347 12.8336 12.8332 12.5351 12.8332 12.1669V3.83341C12.8332 3.46522 12.5347 3.16675 12.1665 3.16675H3.83317C3.46498 3.16675 3.1665 3.46523 3.1665 3.83341V12.1669C3.1665 12.5351 3.46498 12.8336 3.83317 12.8336Z", stroke: (0, SvgIcon_1.getFillColor)(String(color)), "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round", color: "transparent" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.1665 3.33325V12.6666", stroke: (0, SvgIcon_1.getFillColor)(String(color)), "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.8335 3.33325V12.6666", stroke: (0, SvgIcon_1.getFillColor)(String(color)), "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })] })));
};
exports.TableHeaderMenuIcon = TableHeaderMenuIcon;
exports.TableHeaderMenuIcon.defaultProps = {
    fontSize: 'medium',
    color: 'primary'
};
//# sourceMappingURL=TableHeaderMenuIcon.js.map