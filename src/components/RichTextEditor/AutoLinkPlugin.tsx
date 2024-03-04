import { AutoLinkPlugin as AutoLink } from '@lexical/react/LexicalAutoLinkPlugin';

import { URL_MATCHER, EMAIL_MATCHER } from './utils';

const MATCHERS = [
    (text: string) => {
        const match = URL_MATCHER.exec(text);
        return (
            match && {
                index: match.index,
                length: match[0].length,
                text: match[0],
                url: match[0]
            }
        );
    },
    (text: string) => {
        const match = EMAIL_MATCHER.exec(text);
        return (
            match && {
                index: match.index,
                length: match[0].length,
                text: match[0],
                url: `mailto:${match[0]}`
            }
        );
    }
];

export default function AutoLinkPlugin() {
    return <AutoLink matchers={MATCHERS} />;
}
