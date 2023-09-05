import { SketchPicker, SketchPickerProps } from 'react-color';

export interface CustomSketchPickerProps extends SketchPickerProps {}

export const ColorPicker: React.FC<CustomSketchPickerProps> = (props) => {
    return <SketchPicker {...props} />;
};
