import { jsx as _jsx } from "react/jsx-runtime";
import { AutoLinkPlugin as AutoLink } from '@lexical/react/LexicalAutoLinkPlugin';
import { URL_MATCHER, EMAIL_MATCHER } from './constants';
const MATCHERS = [
    (text) => {
        const match = URL_MATCHER.exec(text);
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
        const match = EMAIL_MATCHER.exec(text);
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
export function AutoLinkPlugin() {
    return _jsx(AutoLink, { matchers: MATCHERS });
}
//# sourceMappingURL=AutoLinkPlugin.js.map