import { SketchPicker, SketchPickerProps } from 'react-color';

export const ColorPicker: React.FC<SketchPickerProps> = ({ color, ...props }) => {
    return <SketchPicker color={color} {...props} />;
};
