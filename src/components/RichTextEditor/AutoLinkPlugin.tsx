import { AutoLinkPlugin as AutoLink } from '@lexical/react/LexicalAutoLinkPlugin';

import { URL_MATCHER, EMAIL_MATCHER } from './constants';

const MATCHERS = [
    (text: string) => {
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
    (text: string) => {
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
    return <AutoLink matchers={MATCHERS} />;
}
