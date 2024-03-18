import { $isAtNodeEnd } from '@lexical/selection';
export function validateURL(url) {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // Protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // Query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // Fragment locator
    return urlPattern.test(url);
}
export function getSelectedNode(selection) {
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
    }
    else {
        return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
    }
}
export function positionEditorElement(editor, rect) {
    if (rect === null) {
        editor.style.opacity = '0';
        editor.style.top = '-1000px';
        editor.style.left = '-1000px';
    }
    else {
        editor.style.opacity = '1';
        editor.style.top = `${rect.top + rect.height + window.scrollY + 10}px`;
        editor.style.left = `${rect.left + window.scrollX - editor.offsetWidth / 2 + rect.width / 2}px`;
    }
}
export function dropDownActiveClass(active) {
    if (active)
        return 'active dropdown-item-active';
    else
        return '';
}
//# sourceMappingURL=utils.js.map