import { useEffect, useRef, useState } from 'react';
import { Box } from '../Box';
import { Tooltip } from '../Tooltip';

interface TextLimiterProps {
    tooltip: React.ReactNode;
    text: React.ReactNode;
}

export const TextLimiter = (props: TextLimiterProps) => {
    const textElementRef = useRef<HTMLInputElement | null>(null);
    const [hoverStatus, setHover] = useState(false);

    const compareSize = () => {
        const compare = (textElementRef?.current as any).scrollWidth > (textElementRef?.current as any).clientWidth;
        setHover(compare);
    };
    useEffect(() => {
        compareSize();
    }, []);

    return (
        <Tooltip title={props.tooltip} disableHoverListener={!hoverStatus}>
            <Box ref={textElementRef} height="100%" width={'100%'} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {props.text}
            </Box>
        </Tooltip>
    );
};
