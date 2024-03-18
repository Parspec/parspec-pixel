export interface IRichTextEditorProps {
    onFileUpload?: (params: FileList | null) => void;
    initialHtml?: string;
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
    onChange?: (html: string) => void;
}
