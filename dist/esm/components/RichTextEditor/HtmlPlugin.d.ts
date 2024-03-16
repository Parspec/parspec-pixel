interface Props {
    initialHtml?: string;
    convertToHtml: (html: string) => void;
}
declare const HtmlPlugin: ({ initialHtml, convertToHtml }: Props) => import("react/jsx-runtime").JSX.Element;
export default HtmlPlugin;
