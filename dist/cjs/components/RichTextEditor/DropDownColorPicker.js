"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ColorPicker_1 = require("../ColorPicker");
const Box_1 = require("../Box");
function DropdownColorPicker({ color, onChange }) {
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: "30px" }, { children: (0, jsx_runtime_1.jsx)(ColorPicker_1.TransitionsColorPicker, { color: color, onChange: (color) => onChange(color) }) })));
}
exports.default = DropdownColorPicker;
//# sourceMappingURL=DropDownColorPicker.js.map