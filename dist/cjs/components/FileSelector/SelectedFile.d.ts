type SelectedFileProps = {
    file: {
        name: string;
        size: number;
    };
    onDelete: (arg: {
        name: string;
    }) => void;
    url: string;
    index: number;
    handleResults: (data: {}, index: number) => void;
};
declare const SelectedFile: (props: SelectedFileProps) => import("react/jsx-runtime").JSX.Element;
export default SelectedFile;
