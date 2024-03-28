"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Placeholder = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../Box");
require("./RichText.css");
function Placeholder({ placeHolderText }) {
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "editor-placeholder", sx: { top: '66px', left: '15px' } }, { children: placeHolderText })));
}
exports.Placeholder = Placeholder;
//# sourceMappingURL=PlaceHolder.js.map