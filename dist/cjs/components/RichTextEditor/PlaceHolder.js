"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../Box");
require("./RichText.css");
function Placeholder({ placeholderPositionTop, placeholderPositionBottomLeft }) {
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "editor-placeholder", sx: { top: placeholderPositionTop, left: placeholderPositionBottomLeft } }, { children: "Enter text..." })));
}
exports.default = Placeholder;
//# sourceMappingURL=PlaceHolder.js.map