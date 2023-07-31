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
var TEXT_FIELD_SIDE;
(function (TEXT_FIELD_SIDE) {
    TEXT_FIELD_SIDE["LEFT"] = "LEFT";
    TEXT_FIELD_SIDE["RIGHT"] = "RIGHT";
})(TEXT_FIELD_SIDE || (TEXT_FIELD_SIDE = {}));
export const RangeSlider = forwardRef((props, ref) => {
    const { value, size, step, marks, min, max, color, headerTitle, disabled, rightTextfieldWidth, leftTextfieldWidth, textfieldHeight, onChange: onRangeChange, onRangeBlur = () => { }, onSliderMouseUp = () => { }, onTextfieldBlur = () => { }, onTextfieldEnterKeyDown = () => { }, showPlus, disableSwap } = props;
    const [textFieldVal, setTextFieldVal] = useState({ lowerField: value[0], upperField: value[1] });
    const [isMaxTextfieldFocused, setMaxTextfieldFocuse] = useState(true);
    function getAdjustedValues(valueArr, minVal, maxVal, side) {
        let [value1, value2] = valueArr;
        if (value1 > maxVal || (side === TEXT_FIELD_SIDE.LEFT && value1 > value2)) {
            // console.log('1', [value1, value2]);
            value1 = value2;
        }
        else if (value1 < minVal) {
            // console.log('2', [value1, value2]);
            value1 = minVal;
        }
        if (value2 < minVal || (side === TEXT_FIELD_SIDE.RIGHT && value1 > value2)) {
            // console.log('3', [value1, value2]);
            value2 = value1;
        }
        else if (value2 > maxVal) {
            // console.log('4', [value1, value2]);
            value2 = maxVal;
        }
        return [value1, value2];
    }
    useEffect(() => {
        if (value[0] != textFieldVal.lowerField || value[1] != textFieldVal.upperField) {
            setTextFieldVal(() => (Object.assign(Object.assign({}, textFieldVal), { lowerField: value[0], upperField: value[1] })));
        }
    }, [value[0], value[1]]);
    const sliderChangeHandler = (e, newValue) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newValue[0], upperField: newValue[1] }));
        onRangeChange([newValue[0], newValue[1]]);
    };
    const minChangeHandler = (event) => {
        const inputValue = event.target.value;
        const numericValue = Number(inputValue);
        if (!isNaN(numericValue) && Number.isSafeInteger(numericValue)) {
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
        if (!isNaN(numericValue) && Number.isSafeInteger(numericValue)) {
            const newData = [value[0], numericValue];
            setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
        }
    };
    const textfieldBlurHandler = (event, side) => {
        const rawData = [textFieldVal.lowerField, textFieldVal.upperField];
        const newVal = getAdjustedValues(rawData, min, max, side);
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newVal[0], upperField: newVal[1] }));
        onRangeChange(newVal);
        onTextfieldBlur(event, newVal);
    };
    const textfieldKeyDownHandler = (event, side) => {
        if (event.key === 'Enter') {
            const rawData = [textFieldVal.lowerField, textFieldVal.upperField];
            const newVal = getAdjustedValues(rawData, min, max, side);
            setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newVal[0], upperField: newVal[1] }));
            onRangeChange(newVal);
            onTextfieldEnterKeyDown(event, newVal);
        }
    };
    function handleMaxTextfieldBlur(event) {
        setMaxTextfieldFocuse(true);
        textfieldBlurHandler(event, TEXT_FIELD_SIDE.RIGHT);
    }
    return (_jsxs(Box, Object.assign({ ref: ref, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }, { children: [_jsx(BodyXS, Object.assign({ color: 'text.secondary' }, { children: headerTitle })), _jsxs(Box, Object.assign({ mt: headerTitle ? 2 : 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }, { children: [_jsx(Box, Object.assign({ width: leftTextfieldWidth ? leftTextfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: _jsx(NumberTextField, { label: "", 
                            //doing .toString() to eliminate the leading zero bug
                            value: textFieldVal.lowerField.toString(), onChange: minChangeHandler, onBlur: (event) => {
                                textfieldBlurHandler(event, TEXT_FIELD_SIDE.LEFT);
                            }, onKeyDown: (event) => textfieldKeyDownHandler(event, TEXT_FIELD_SIDE.LEFT), disabled: disabled, inputProps: { style: { textAlign: 'center' } } }) })), _jsx(Box, Object.assign({ pl: 4, pr: 4, display: 'flex', flex: 1 }, { children: _jsx(Slider, { value: value, min: min, max: max, color: color ? color : 'primary', size: size, marks: marks, step: step, onChange: sliderChangeHandler, onBlur: (e) => onRangeBlur(e, value), onMouseUp: (e) => onSliderMouseUp(e, value), disabled: disabled, disableSwap: disableSwap }) })), _jsx(Box, Object.assign({ width: rightTextfieldWidth ? rightTextfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: _jsx(NumberTextField, { label: "", 
                            //doing .toString() to eliminate the leading zero bug
                            // value={textFieldVal.upperField.toString()}
                            value: textFieldVal.upperField === max && showPlus && isMaxTextfieldFocused ? `${textFieldVal.upperField}+` : textFieldVal.upperField.toString(), onChange: maxChangeHandler, onFocus: () => {
                                setMaxTextfieldFocuse(false);
                            }, onBlur: handleMaxTextfieldBlur, onKeyDown: (event) => {
                                textfieldKeyDownHandler(event, TEXT_FIELD_SIDE.RIGHT);
                            }, disabled: disabled, inputProps: { style: { textAlign: 'center' } } }) }))] }))] })));
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