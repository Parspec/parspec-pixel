"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const selection_1 = require("@lexical/selection");
const lexical_1 = require("lexical");
const IconButton_1 = require("../IconButton");
const Icons_1 = require("../Icons");
const TextField_1 = require("../TextField");
const Box_1 = require("../Box");
const MIN_ALLOWED_FONT_SIZE = 8;
const MAX_ALLOWED_FONT_SIZE = 72;
const DEFAULT_FONT_SIZE = 15;
// eslint-disable-next-line no-shadow
var UPDATE_FONT_SIZE_TYPE;
(function (UPDATE_FONT_SIZE_TYPE) {
    UPDATE_FONT_SIZE_TYPE[UPDATE_FONT_SIZE_TYPE["INCREMENT"] = 1] = "INCREMENT";
    UPDATE_FONT_SIZE_TYPE[UPDATE_FONT_SIZE_TYPE["DECREMENT"] = 2] = "DECREMENT";
})(UPDATE_FONT_SIZE_TYPE || (UPDATE_FONT_SIZE_TYPE = {}));
function FontSize({ selectionFontSize, disabled, editor }) {
    const [inputValue, setInputValue] = (0, react_1.useState)(selectionFontSize);
    /**
     * Calculates the new font size based on the update type.
     * @param currentFontSize - The current font size
     * @param updateType - The type of change, either increment or decrement
     * @returns the next font size
     */
    const calculateNextFontSize = (currentFontSize, updateType) => {
        if (!updateType) {
            return currentFontSize;
        }
        let updatedFontSize = currentFontSize;
        switch (updateType) {
            case UPDATE_FONT_SIZE_TYPE.DECREMENT:
                switch (true) {
                    case currentFontSize > MAX_ALLOWED_FONT_SIZE:
                        updatedFontSize = MAX_ALLOWED_FONT_SIZE;
                        break;
                    case currentFontSize >= 48:
                        updatedFontSize -= 12;
                        break;
                    case currentFontSize >= 24:
                        updatedFontSize -= 4;
                        break;
                    case currentFontSize >= 14:
                        updatedFontSize -= 2;
                        break;
                    case currentFontSize >= 9:
                        updatedFontSize -= 1;
                        break;
                    default:
                        updatedFontSize = MIN_ALLOWED_FONT_SIZE;
                        break;
                }
                break;
            case UPDATE_FONT_SIZE_TYPE.INCREMENT:
                switch (true) {
                    case currentFontSize < MIN_ALLOWED_FONT_SIZE:
                        updatedFontSize = MIN_ALLOWED_FONT_SIZE;
                        break;
                    case currentFontSize < 12:
                        updatedFontSize += 1;
                        break;
                    case currentFontSize < 20:
                        updatedFontSize += 2;
                        break;
                    case currentFontSize < 36:
                        updatedFontSize += 4;
                        break;
                    case currentFontSize <= 60:
                        updatedFontSize += 12;
                        break;
                    default:
                        updatedFontSize = MAX_ALLOWED_FONT_SIZE;
                        break;
                }
                break;
            default:
                break;
        }
        return updatedFontSize;
    };
    /**
     * Patches the selection with the updated font size.
     */
    const updateFontSizeInSelection = (0, react_1.useCallback)((newFontSize, updateType) => {
        const getNextFontSize = (prevFontSize) => {
            if (!prevFontSize) {
                prevFontSize = `${DEFAULT_FONT_SIZE}px`;
            }
            prevFontSize = prevFontSize.slice(0, -2);
            const nextFontSize = calculateNextFontSize(Number(prevFontSize), updateType);
            return `${nextFontSize}px`;
        };
        editor.update(() => {
            if (editor.isEditable()) {
                const selection = (0, lexical_1.$getSelection)();
                if (selection !== null) {
                    (0, selection_1.$patchStyleText)(selection, {
                        'font-size': newFontSize || getNextFontSize
                    });
                }
            }
        });
    }, [editor]);
    const handleKeyPress = (e) => {
        const inputValueNumber = Number(inputValue);
        if (['e', 'E', '+', '-'].includes(e.key) || isNaN(inputValueNumber)) {
            e.preventDefault();
            return;
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            let updatedFontSize = inputValueNumber;
            if (inputValueNumber > MAX_ALLOWED_FONT_SIZE) {
                updatedFontSize = MAX_ALLOWED_FONT_SIZE;
            }
            else if (inputValueNumber < MIN_ALLOWED_FONT_SIZE) {
                updatedFontSize = MIN_ALLOWED_FONT_SIZE;
            }
            setInputValue(String(updatedFontSize));
            updateFontSizeInSelection(String(updatedFontSize) + 'px', null);
        }
    };
    const handleButtonClick = (updateType) => {
        if (inputValue !== '') {
            const nextFontSize = calculateNextFontSize(Number(inputValue), updateType);
            updateFontSizeInSelection(String(nextFontSize) + 'px', null);
        }
        else {
            updateFontSizeInSelection(null, updateType);
        }
    };
    (0, react_1.useEffect)(() => {
        setInputValue(selectionFontSize);
    }, [selectionFontSize]);
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", justifyContent: "center", alignItems: "center", width: "120px" }, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ disabled: disabled || (selectionFontSize !== '' && Number(inputValue) <= MIN_ALLOWED_FONT_SIZE), onClick: () => handleButtonClick(UPDATE_FONT_SIZE_TYPE.DECREMENT) }, { children: (0, jsx_runtime_1.jsx)(Icons_1.RemoveIcon, { fontSize: "small", color: "secondary" }) })), (0, jsx_runtime_1.jsx)(TextField_1.TextField, { type: "number", value: inputValue, disabled: disabled, inputProps: {
                    min: MIN_ALLOWED_FONT_SIZE,
                    max: MAX_ALLOWED_FONT_SIZE
                }, onChange: (e) => setInputValue(e.target.value), onKeyDown: handleKeyPress, label: '', fullWidth: true }), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ disabled: disabled || (selectionFontSize !== '' && Number(inputValue) >= MAX_ALLOWED_FONT_SIZE), onClick: () => handleButtonClick(UPDATE_FONT_SIZE_TYPE.INCREMENT) }, { children: (0, jsx_runtime_1.jsx)(Icons_1.AddIcon, { fontSize: "small", color: "secondary" }) }))] })));
}
exports.default = FontSize;
//# sourceMappingURL=FontSize.js.map