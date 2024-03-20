"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoLinkPlugin = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const LexicalAutoLinkPlugin_1 = require("@lexical/react/LexicalAutoLinkPlugin");
const constants_1 = require("./constants");
const MATCHERS = [
    (text) => {
        const match = constants_1.URL_MATCHER.exec(text);
        if (match === null) {
            return null;
        }
        const fullMatch = match[0];
        return {
            index: match.index,
            length: fullMatch.length,
            text: fullMatch,
            url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`
        };
    },
    (text) => {
        const match = constants_1.EMAIL_MATCHER.exec(text);
        if (match === null) {
            return null;
        }
        const fullMatch = match[0];
        return {
            index: match.index,
            length: fullMatch.length,
            text: fullMatch,
            url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`
        };
    }
];
function AutoLinkPlugin() {
    return (0, jsx_runtime_1.jsx)(LexicalAutoLinkPlugin_1.AutoLinkPlugin, { matchers: MATCHERS });
}
exports.AutoLinkPlugin = AutoLinkPlugin;
//# sourceMappingURL=AutoLinkPlugin.js.map