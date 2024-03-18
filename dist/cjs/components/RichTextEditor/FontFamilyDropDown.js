"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const constants_1 = require("./constants");
const Select_1 = require("../Select");
const Box_1 = require("../Box");
function FontDropDown({ disabled = false, onChange, value }) {
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: "124px" }, { children: (0, jsx_runtime_1.jsx)(Select_1.Select, { disabled: disabled, label: "", onChange: onChange, optionLabelKeyname: "name", optionValueKeyname: "id", options: constants_1.FONT_FAMILY_OPTIONS, value: value }) })));
}
exports.default = FontDropDown;
//# sourceMappingURL=FontFamilyDropDown.js.map