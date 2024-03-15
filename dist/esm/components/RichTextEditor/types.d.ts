export interface IRichTextEditorProps {
    onFileUpload?: (params: FileList | null) => void;
    initialHtml?: string;
    onChange: (html: string) => void;
    editorBgColor?: string;
    contentEditableHeight?: string;
    isDisableEditorState?: boolean;
    placeHolderText?: string;
    showAttachements?: boolean;
    showShareableLinkButton?: boolean;
    shareableLinkUrl?: string;
    shareableLinkTitle?: string;
    onBlur?: () => void;
    onFocus?: () => void;
}
