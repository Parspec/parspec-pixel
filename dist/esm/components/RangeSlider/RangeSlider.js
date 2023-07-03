import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState, useEffect } from 'react';
import { Box } from '../Box';
import { BodyXS } from '../Typography';
import { TextField } from '../TextField';
import { Slider } from '../Slider';
import { styled } from '@mui/material/styles';
const NumberTextField = styled(TextField)(({ theme }) => ({
    '& input[type=number]': {
        '-moz-appearance': 'textfield',
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(2)
    }
}));
function getAdjustedValues(valueArr, minVal, maxVal) {
    let [value1, value2] = valueArr;
    if (value1 > value2 || value1 > maxVal) {
        // console.log('1', [value1, value2]);
        value1 = value2 - 1;
    }
    if (value1 < minVal) {
        // console.log('2', [value1, value2]);
        value1 = minVal;
    }
    if (value2 < value1 || value2 < minVal) {
        // console.log('3', [value1, value2]);
        value2 = value1 + 1;
    }
    if (value2 > maxVal) {
        // console.log('4', [value1, value2]);
        value2 = maxVal;
    }
    return [value1, value2];
}
export const RangeSlider = forwardRef((props, ref) => {
    const { value, size, step, marks, min, max, color, headerTitle, disabled, textfieldWidth, textfieldHeight, onChange: onRangeChange, onRangeBlur, onSliderMouseUp, onTextfieldBlur, onTextfieldEnterKeyDown, showPlusSignInMaxField, disableSwap } = props;
    const [textFieldVal, setTextFieldVal] = useState({ lowerField: value[0], upperField: value[1] });
    useEffect(() => {
        setTextFieldVal(() => (Object.assign(Object.assign({}, textFieldVal), { lowerField: value[0], upperField: value[1] })));
    }, [value]);
    useEffect(() => {
        const adjustedValues = getAdjustedValues(value, min, max);
        if (value[0] !== adjustedValues[0] || value[1] !== adjustedValues[1]) {
            onRangeChange(adjustedValues);
        }
    }, [value[0], value[1]]);
    const sliderChangeHandler = (e) => {
        const data = e.target.value;
        const newData = [Number(data[0]), Number(data[1])];
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
        onRangeChange(newData);
    };
    const minChangeHandler = (event) => {
        const inputValue = event.target.value;
        const numericValue = Number(inputValue);
        if (!isNaN(numericValue)) {
            const newData = [numericValue, value[1]];
            setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
        }
    };
    const maxChangeHandler = (event) => {
        const inputValue = event.target.value;
        const numericValue = Number(inputValue);
        if (!isNaN(numericValue)) {
            const newData = [value[0], numericValue];
            setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
        }
    };
    const textfieldBlurHandler = (event) => {
        const rawData = [textFieldVal.lowerField, textFieldVal.upperField];
        const newVal = getAdjustedValues(rawData, min, max);
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newVal[0], upperField: newVal[1] }));
        onRangeChange(newVal);
        onTextfieldBlur === null || onTextfieldBlur === void 0 ? void 0 : onTextfieldBlur(event, value);
    };
    const textfieldKeyDownHandler = (event) => {
        if (event.key === 'Enter') {
            const rawData = [textFieldVal.lowerField, textFieldVal.upperField];
            const newVal = getAdjustedValues(rawData, min, max);
            setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newVal[0], upperField: newVal[1] }));
            onRangeChange(newVal);
            onTextfieldEnterKeyDown === null || onTextfieldEnterKeyDown === void 0 ? void 0 : onTextfieldEnterKeyDown(event, value);
        }
    };
    return (_jsxs(Box, Object.assign({ ref: ref, width: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }, { children: [_jsx(BodyXS, Object.assign({ color: 'text.secondary' }, { children: headerTitle })), _jsxs(Box, Object.assign({ mt: headerTitle ? 2 : 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 1 }, { children: [_jsx(Box, Object.assign({ width: textfieldWidth ? textfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: _jsx(NumberTextField, { label: "", 
                            //doing .toString() to eliminate the leading zero bug
                            value: textFieldVal.lowerField.toString(), 
                            // value={value[0].toString()}
                            inputProps: { style: { textAlign: 'center' } }, onChange: minChangeHandler, onBlur: textfieldBlurHandler, onKeyDown: textfieldKeyDownHandler, disabled: disabled }) })), _jsx(Box, Object.assign({ pl: 4, pr: 4, width: 1 }, { children: _jsx(Slider, { value: value, min: min, max: max, color: color ? color : 'primary', size: size, marks: marks, step: step, onChange: sliderChangeHandler, onBlur: (e) => onRangeBlur === null || onRangeBlur === void 0 ? void 0 : onRangeBlur(e, value), onMouseUp: (e) => onSliderMouseUp === null || onSliderMouseUp === void 0 ? void 0 : onSliderMouseUp(e, value), disabled: disabled, disableSwap: disableSwap }) })), _jsx(Box, Object.assign({ width: textfieldWidth ? textfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: _jsx(NumberTextField, { label: "", 
                            //doing .toString() to eliminate the leading zero bug
                            value: textFieldVal.upperField === max && showPlusSignInMaxField ? `${textFieldVal.upperField}+` : textFieldVal.upperField.toString(), 
                            // value={value[1].toString()}
                            inputProps: { style: { textAlign: 'center' } }, onChange: maxChangeHandler, onBlur: textfieldBlurHandler, onKeyDown: textfieldKeyDownHandler, disabled: disabled }) }))] }))] })));
});
RangeSlider.defaultProps = {
    value: [0, 100],
    size: 'small',
    color: 'primary',
    disabled: false,
    disableSwap: true,
    showPlusSignInMaxField: false
};
//# sourceMappingURL=RangeSlider.js.map