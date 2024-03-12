import { useState, useRef, useEffect } from 'react';

import { ClickAwayListener, Fade } from '@mui/material';
import { SketchPicker, SketchPickerProps, ColorResult, Color } from 'react-color';

import { Box } from '../Box';
import Popper from '../Popper';

export const ColorPicker: React.FC<SketchPickerProps> = (props) => {
    useEffect(() => {
        const colorPickerContainerElement = document.querySelector('div[role="tooltip"]');
        if (colorPickerContainerElement) {
            (colorPickerContainerElement as HTMLElement).style.zIndex = '9999';
        }
    }, []);

    return <SketchPicker {...props} />;
};

interface ITransitionsColorPicker {
    color: string;
    onChange: (param: ColorResult) => void;
    onClickAway?: () => void;
    onClick?: (open: boolean) => void;
}

export { ColorResult, Color };

export const TransitionsColorPicker: React.FC<ITransitionsColorPicker> = ({ color, onChange, onClickAway = () => {}, onClick = () => {} }) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const colorPickerRef = useRef(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
        onClick(open);
    };

    function clickAwayHandler() {
        setOpen(false);
        onClickAway();
    }

    function handleOnColorChange(color: ColorResult) {
        onChange(color);
    }

    return (
        <>
            <Box sx={{ cursor: 'pointer' }} onClick={handleClick} width={24} height={24} borderRadius={100} bgcolor={color}></Box>
            {open && (
                <ClickAwayListener onClickAway={clickAwayHandler}>
                    <Box>
                        <Popper placement="auto" open={open} anchorEl={anchorEl} transition>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Box m={2}>
                                        <ColorPicker ref={colorPickerRef} color={color} onChange={(color: ColorResult) => handleOnColorChange(color)} />
                                    </Box>
                                </Fade>
                            )}
                        </Popper>
                    </Box>
                </ClickAwayListener>
            )}
        </>
    );
};

TransitionsColorPicker.defaultProps = {
    color: '#37d67a'
};
