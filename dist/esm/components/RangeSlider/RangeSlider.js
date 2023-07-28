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
export const RangeSlider = forwardRef((props, ref) => {
    const { value, size, step, marks, min, max, color, headerTitle, disabled, rightTextfieldWidth, leftTextfieldWidth, textfieldHeight, onChange: onRangeChange, onRangeBlur = () => { }, onSliderMouseUp = () => { }, onTextfieldBlur = () => { }, onTextfieldEnterKeyDown = () => { }, showPlus, disableSwap } = props;
    const [textFieldVal, setTextFieldVal] = useState({ lowerField: value[0], upperField: value[1] });
    const [activeThumbValue, setActiveThumbValue] = useState(textFieldVal.upperField);
    const [plusToggle, setPlusToggle] = useState(true);
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
        if (value1 === value2) {
            if (activeThumbValue === 0) {
                if (Math.min(value1, value2 - 1) < min) {
                    value1 = min;
                    value2 = value1 + 1;
                }
                else {
                    value1 = Math.min(value1, value2 - 1);
                }
            }
            else {
                if (Math.max(value2, value1 + 1) > max) {
                    value2 = max;
                    value1 = value2 - 1;
                }
                else {
                    value2 = Math.max(value2, value1 + 1);
                }
            }
        }
        return [value1, value2];
    }
    useEffect(() => {
        setTextFieldVal(() => (Object.assign(Object.assign({}, textFieldVal), { lowerField: value[0], upperField: value[1] })));
        setActiveThumbValue(textFieldVal.upperField);
    }, [value]);
    useEffect(() => {
        const adjustedValues = getAdjustedValues(value, min, max);
        if (value[0] !== adjustedValues[0] || value[1] !== adjustedValues[1]) {
            onRangeChange(adjustedValues);
        }
    }, [value[0], value[1]]);
    useEffect(() => {
        if (!plusToggle) {
            setPlusToggle(true);
        }
    }, [textFieldVal.upperField]);
    const sliderChangeHandler = (e, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        let newData;
        if (activeThumb === 0) {
            newData = [Math.min(newValue[0], textFieldVal.upperField - 1), textFieldVal.upperField];
            setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
        }
        else {
            newData = [textFieldVal.lowerField, Math.max(newValue[1], textFieldVal.lowerField + 1)];
            setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
        }
        setActiveThumbValue(() => activeThumb);
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
        let inputValue = event.target.value;
        if (inputValue.includes('+')) {
            inputValue = inputValue.replace(/\+/g, '');
        }
        const numericValue = Number(inputValue);
        if (numericValue === max) {
            return setPlusToggle(false);
        }
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
        onTextfieldBlur(event, newVal);
    };
    const textfieldKeyDownHandler = (event) => {
        if (event.key === 'Enter') {
            const rawData = [textFieldVal.lowerField, textFieldVal.upperField];
            const newVal = getAdjustedValues(rawData, min, max);
            setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newVal[0], upperField: newVal[1] }));
            onRangeChange(newVal);
            onTextfieldEnterKeyDown(event, newVal);
        }
    };
    return (_jsxs(Box, Object.assign({ ref: ref, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }, { children: [_jsx(BodyXS, Object.assign({ color: 'text.secondary' }, { children: headerTitle })), _jsxs(Box, Object.assign({ mt: headerTitle ? 2 : 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }, { children: [_jsx(Box, Object.assign({ width: leftTextfieldWidth ? leftTextfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: _jsx(NumberTextField, { label: "", 
                            //doing .toString() to eliminate the leading zero bug
                            value: textFieldVal.lowerField.toString(), onChange: minChangeHandler, onBlur: textfieldBlurHandler, onKeyDown: textfieldKeyDownHandler, disabled: disabled, inputProps: { style: { textAlign: 'center' } } }) })), _jsx(Box, Object.assign({ pl: 4, pr: 4, display: 'flex', flex: 1 }, { children: _jsx(Slider, { value: value, min: min, max: max, color: color ? color : 'primary', size: size, marks: marks, step: step, onChange: sliderChangeHandler, onBlur: (e) => onRangeBlur(e, value), onMouseUp: (e) => onSliderMouseUp(e, value), disabled: disabled, disableSwap: disableSwap }) })), _jsx(Box, Object.assign({ width: rightTextfieldWidth ? rightTextfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: _jsx(NumberTextField, { label: "", 
                            //doing .toString() to eliminate the leading zero bug
                            // value={textFieldVal.upperField.toString()}
                            value: textFieldVal.upperField === max && showPlus && plusToggle ? `${textFieldVal.upperField}+` : textFieldVal.upperField.toString(), onChange: maxChangeHandler, onBlur: textfieldBlurHandler, onKeyDown: textfieldKeyDownHandler, disabled: disabled, inputProps: { style: { textAlign: 'center' }, inputMode: 'numeric', pattern: '[0-9]*' } }) }))] }))] })));
});
RangeSlider.defaultProps = {
    value: [0, 100],
    size: 'small',
    color: 'primary',
    disabled: false,
    disableSwap: true,
    showPlus: false
};
//# sourceMappingURL=RangeSlider.js.map