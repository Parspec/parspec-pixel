import './RichText.css';
interface IRichTextEditorProps {
    onFileUpload?: (params: FileList | null) => void;
    initialHtml?: string;
    onChange: (html: string) => void;
    editorBgColor?: string;
    contentEditableHeight?: string;
}
export default function RichTextEditor({ onFileUpload, onChange, initialHtml, editorBgColor, contentEditableHeight }: IRichTextEditorProps): import("react/jsx-runtime").JSX.Element;
export {};
