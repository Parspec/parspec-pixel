import './RichText.css';
interface IRichTextEditorProps {
    onFileUpload?: (params: FileList | null) => void;
    initialHtml?: string;
    onChange: (html: string) => void;
    editorBgColor?: string;
    contentEditableHeight?: string;
    contentEditablePaddingLeft?: string;
    placeholderPositionTop?: string;
    placeholderPositionBottomLeft?: string;
}
export default function RichTextEditor({ onFileUpload, onChange, initialHtml, editorBgColor, contentEditableHeight, contentEditablePaddingLeft, placeholderPositionBottomLeft, placeholderPositionTop }: IRichTextEditorProps): import("react/jsx-runtime").JSX.Element;
export {};
