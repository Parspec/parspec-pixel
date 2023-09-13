import { useState } from 'react';

import { SketchPicker, SketchPickerProps } from 'react-color';
import { Box } from '../Box';
import { CustomPopper, Fade } from '../Popper';

export const ColorPicker: React.FC<SketchPickerProps> = (props) => {
    return <SketchPicker {...props} />;
};

export const TransitionsColorPicker: React.FC<SketchPickerProps> = (props) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    return (
        <>
            <Box sx={{ cursor: 'pointer' }} onClick={handleClick} width={24} height={24} borderRadius={100} bgcolor={String(props.color)}></Box>
            <CustomPopper placement="auto" open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{ m: 2 }}>
                            <ColorPicker {...props} />
                        </Box>
                    </Fade>
                )}
            </CustomPopper>
        </>
    );
};

TransitionsColorPicker.defaultProps = {
    color: '#37d67a'
};
