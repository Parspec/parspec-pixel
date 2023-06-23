import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState, useEffect } from 'react';
import { Box } from '../Box';
import { BodyXS } from '../Typography';
import { TextField } from '../TextField';
import { Slider } from '../Slider';
function adjustValues(valueArr, minVal, maxVal) {
    let [value1, value2] = valueArr;
    // Check if value1 exceeds maxVal and adjust if necessary
    if (value1 > maxVal) {
        value1 = maxVal;
    }
    // Check if value2 exceeds maxVal and adjust if necessary
    if (value2 > maxVal) {
        value2 = maxVal;
    }
    // Check if value1 is greater than value2 and adjust if necessary
    if (value1 > value2) {
        value1 = value2;
    }
    // Check if value1 is smaller than minVal and adjust if necessary
    if (value1 < minVal) {
        value1 = minVal;
    }
    // Check if value2 is smaller than minVal and adjust if necessary
    if (value2 < minVal) {
        value2 = minVal;
    }
    // Check if value2 is smaller than value1 and adjust if necessary
    if (value2 < value1) {
        value2 = value1;
    }
    return [value1, value2];
}
export const RangeSlider = forwardRef((props, ref) => {
    const { value, size, step, marks, min, max, color, headerTitle, disabled, textfieldWidth, textfieldHeight, onChange: onRangeChange, onBlur: onBlurChange, disableSwap } = props;
    const [textFieldVal, setTextFieldVal] = useState({ lowerField: value[0], upperField: value[1] });
    useEffect(() => {
        const adjustedValues = adjustValues(value, min, max);
        onRangeChange(adjustedValues);
    }, []);
    const sliderChangeHandler = (e) => {
        const data = e.target.value;
        const newData = [Number(data[0]), Number(data[1])];
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
        onRangeChange(newData);
    };
    const minChangeHandler = (event) => {
        const currValue = Number(event.target.value);
        const newData = [currValue, value[1]];
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
        // onRangeChange(newData);
    };
    const maxChangeHandler = (event) => {
        const currValue = Number(event.target.value);
        const newData = [value[0], currValue];
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
        // onRangeChange(newData);
    };
    const blurHandler = (event) => {
        const rawData = [textFieldVal.lowerField, textFieldVal.upperField];
        const newVal = adjustValues(rawData, min, max);
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newVal[0], upperField: newVal[1] }));
        onRangeChange(newVal);
        onBlurChange(event);
    };
    const keyDownHandler = (event) => {
        if (event.key === 'Enter') {
            const rawData = [textFieldVal.lowerField, textFieldVal.upperField];
            const newVal = adjustValues(rawData, min, max);
            setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newVal[0], upperField: newVal[1] }));
            onRangeChange(newVal);
        }
    };
    return (_jsxs(Box, Object.assign({ ref: ref, width: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }, { children: [_jsx(BodyXS, Object.assign({ color: 'text.secondary' }, { children: headerTitle })), _jsxs(Box, Object.assign({ mt: headerTitle ? 2 : 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 1 }, { children: [_jsx(Box, Object.assign({ width: textfieldWidth ? textfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: _jsx(TextField, { label: "", type: "number", 
                            //doing .toString() to eliminate the leading zero bug
                            value: textFieldVal.lowerField.toString(), 
                            // value={value[0].toString()}
                            inputProps: { style: { textAlign: 'center' } }, onChange: minChangeHandler, onBlur: blurHandler, onKeyDown: keyDownHandler, disabled: disabled }) })), _jsx(Box, Object.assign({ pl: 4, pr: 4, width: 1 }, { children: _jsx(Slider, { value: value, min: min, max: max, color: color, size: size, marks: marks, step: step, onChange: sliderChangeHandler, onBlur: onBlurChange, disabled: disabled, disableSwap: disableSwap }) })), _jsx(Box, Object.assign({ width: textfieldWidth ? textfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: _jsx(TextField, { label: "", type: "number", 
                            //doing .toString() to eliminate the leading zero bug
                            value: textFieldVal.upperField.toString(), 
                            // value={value[1].toString()}
                            inputProps: { style: { textAlign: 'center' } }, onChange: maxChangeHandler, onBlur: blurHandler, onKeyDown: keyDownHandler, disabled: disabled }) }))] }))] })));
});
RangeSlider.defaultProps = {
    value: [0, 100],
    size: 'small',
    color: 'primary',
    disabled: false,
    disableSwap: true
};
//# sourceMappingURL=RangeSlider.js.map