interface Props {
    initialHtml?: string;
    onHtmlChanged: (html: string) => void;
}
declare const HtmlPlugin: ({ initialHtml, onHtmlChanged }: Props) => import("react/jsx-runtime").JSX.Element;
export default HtmlPlugin;
