import { useEffect, useState } from 'react';
import { CircularProgress } from '../CircularProgress';
import { Box } from '../Box';

export interface ImgProps {
    src: string;
}
export const Img = (props: ImgProps) => {
    const { src, ...rest } = props;
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImgSrc(src);
        };
    }, [src]);
    if (!imgSrc) {
        return (
            <Box width="220px" height="219px" display="flex" justifyContent="center" alignItems="center">
                <CircularProgress />
            </Box>
        );
    }
    return <img src={imgSrc} {...rest} />;
};
