import { EditorState } from 'lexical';

export interface IRichTextEditorProps {
    onFileUpload?: (params: FileList | null) => void;
    initialHtml?: string;
    onChange: (editorState: EditorState) => void;
    editorBgColor?: string;
    contentEditableHeight?: string;
    isDisableEditorState?: boolean;
    placeHolderText?: string;
    showAttachements?: boolean;
    showShareableLinkButton?: boolean;
    shareableLinkUrl?: string;
    shareableLinkTitle?: string;
    onBlur?: (html: string) => void;
    onFocus?: () => void;
}
