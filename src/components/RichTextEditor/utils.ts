import { RangeSelection } from 'lexical';
import { $isAtNodeEnd } from '@lexical/selection';

export function validateURL(url: string): boolean {
    var urlPattern = new RegExp(
        '^(https?:\\/\\/)?' + // Protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // Query string
            '(\\#[-a-z\\d_]*)?$',
        'i'
    ); // Fragment locator

    return urlPattern.test(url);
}

export const URL_MATCHER = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

export const EMAIL_MATCHER = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

export const LOW_PRIORITY = 1;

export function getSelectedNode(selection: RangeSelection) {
    const anchor = selection.anchor;
    const focus = selection.focus;
    const anchorNode = selection.anchor.getNode();
    const focusNode = selection.focus.getNode();
    if (anchorNode === focusNode) {
        return anchorNode;
    }
    const isBackward = selection.isBackward();
    if (isBackward) {
        return $isAtNodeEnd(focus) ? anchorNode : focusNode;
    } else {
        return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
    }
}

export function positionEditorElement(editor: any, rect: any) {
    if (rect === null) {
        editor.style.opacity = '0';
        editor.style.top = '-1000px';
        editor.style.left = '-1000px';
    } else {
        editor.style.opacity = '1';
        editor.style.top = `${rect.top + rect.height + window.scrollY + 10}px`;
        editor.style.left = `${rect.left + window.scrollX - editor.offsetWidth / 2 + rect.width / 2}px`;
    }
}
