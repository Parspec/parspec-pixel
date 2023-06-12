import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, forwardRef, useEffect } from 'react';
import { Box } from '../Box';
import { BodyXS } from '../Typography';
import { TextField } from '../TextField';
import { Slider } from '../Slider';
export const RangeSlider = forwardRef((props, ref) => {
    const { value, size, step, marks, min, max, color, headerTitle, disabled, textfieldWidth, textfieldHeight, onChange: onRangeChange, disableSwap } = props;
    const [currThumbValue, setCurrThumbValue] = useState({ smallerThumb: value[0], greaterThumb: value[1] });
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
    useEffect(() => {
        const adjustedValues = adjustValues(value, min, max);
        setCurrThumbValue(() => (Object.assign(Object.assign({}, currThumbValue), { smallerThumb: adjustedValues[0], greaterThumb: adjustedValues[1] })));
    }, []);
    const changeHandler = (event) => {
        const data = event.target.value;
        setCurrThumbValue(() => (Object.assign(Object.assign({}, currThumbValue), { smallerThumb: data[0], greaterThumb: data[1] })));
        onRangeChange(data);
    };
    const minChangeHandler = (event) => {
        const currValue = Number(event.target.value);
        setCurrThumbValue(() => (Object.assign(Object.assign({}, currThumbValue), { smallerThumb: currValue })));
    };
    const minBlurHandler = (event) => {
        const currValueArr = [currThumbValue.smallerThumb, currThumbValue.greaterThumb];
        const newVal = adjustValues(currValueArr, min, max)[0];
        onRangeChange([newVal, currThumbValue.greaterThumb]);
        setCurrThumbValue(() => (Object.assign(Object.assign({}, currThumbValue), { smallerThumb: newVal })));
    };
    const minKeyDownHandler = (event) => {
        if (event.key === 'Enter') {
            const currValueArr = [currThumbValue.smallerThumb, currThumbValue.greaterThumb];
            const newVal = adjustValues(currValueArr, min, max)[0];
            onRangeChange([newVal, currThumbValue.greaterThumb]);
            setCurrThumbValue(() => (Object.assign(Object.assign({}, currThumbValue), { smallerThumb: newVal })));
        }
    };
    const maxChangeHandler = (event) => {
        const currValue = Number(event.target.value);
        setCurrThumbValue(() => (Object.assign(Object.assign({}, currThumbValue), { greaterThumb: currValue })));
    };
    const maxBlurHandler = (event) => {
        const currValueArr = [currThumbValue.smallerThumb, currThumbValue.greaterThumb];
        const newVal = adjustValues(currValueArr, min, max)[1];
        onRangeChange([currThumbValue.smallerThumb, newVal]);
        setCurrThumbValue(() => (Object.assign(Object.assign({}, currThumbValue), { greaterThumb: newVal })));
    };
    const maxKeyDownHandler = (event) => {
        if (event.key === 'Enter') {
            const currValueArr = [currThumbValue.smallerThumb, currThumbValue.greaterThumb];
            const newVal = adjustValues(currValueArr, min, max)[1];
            onRangeChange([currThumbValue.smallerThumb, newVal]);
            setCurrThumbValue(() => (Object.assign(Object.assign({}, currThumbValue), { greaterThumb: newVal })));
        }
    };
    return (_jsxs(Box, Object.assign({ ref: ref, width: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }, { children: [_jsx(BodyXS, Object.assign({ color: 'text.secondary' }, { children: headerTitle })), _jsxs(Box, Object.assign({ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 1 }, { children: [_jsx(Box, Object.assign({ width: textfieldWidth ? textfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: _jsx(TextField, { label: "", type: "number", 
                            //doing .toString() to eliminate the leading zero bug
                            value: currThumbValue.smallerThumb.toString(), inputProps: { style: { textAlign: 'center' } }, onChange: minChangeHandler, onBlur: minBlurHandler, onKeyDown: minKeyDownHandler, disabled: disabled }) })), _jsx(Box, Object.assign({ pl: 4, pr: 4, width: 1 }, { children: _jsx(Slider, { value: [currThumbValue.smallerThumb, currThumbValue.greaterThumb], 
                            // value={value}
                            min: min, max: max, color: color, size: size, marks: marks, step: step, onChange: changeHandler, disabled: disabled, disableSwap: disableSwap }) })), _jsx(Box, Object.assign({ width: textfieldWidth ? textfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: _jsx(TextField, { label: "", type: "number", 
                            //doing .toString() to eliminate the leading zero bug
                            value: currThumbValue.greaterThumb.toString(), inputProps: { style: { textAlign: 'center' } }, onChange: maxChangeHandler, onBlur: maxBlurHandler, onKeyDown: maxKeyDownHandler, disabled: disabled }) }))] }))] })));
});
RangeSlider.defaultProps = {
    value: [0, 100],
    size: 'small',
    color: 'primary',
    disabled: false,
    disableSwap: true
};
//# sourceMappingURL=RangeSlider.js.map