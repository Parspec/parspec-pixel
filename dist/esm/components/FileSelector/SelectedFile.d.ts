type SelectedFileProps = {
    file: {
        name: string;
        size?: number;
        filepath?: string;
    };
    onDelete: (arg: {
        name: string;
    }) => void;
    url: string;
    index: number;
    handleResults: (data: {}, index: number) => void;
    isLoading?: boolean;
};
declare const SelectedFile: (props: SelectedFileProps) => import("react/jsx-runtime").JSX.Element;
export default SelectedFile;
