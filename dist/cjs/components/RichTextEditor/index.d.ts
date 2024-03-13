import './RichText.css';
interface IRichTextEditorProps {
    onFileUpload?: (params: FileList | null) => void;
    initialHtml?: string;
    onChange: (html: string) => void;
    editorBgColor?: string;
    contentEditableHeight?: string;
    isDisableEditorState?: boolean;
    placeHolderText?: string;
}
export default function RichTextEditor({ onFileUpload, onChange, initialHtml, editorBgColor, contentEditableHeight, isDisableEditorState, placeHolderText }: IRichTextEditorProps): import("react/jsx-runtime").JSX.Element;
export {};
