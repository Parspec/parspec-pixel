import { CircularProgress } from '../CircularProgress';
export interface ImgProps {
    src: string;
}
export const Img = (props: ImgProps) => {
    const { src, ...rest } = props;
    if (!props.src) {
        return <CircularProgress />;
    }
    return <img src={src} {...rest} />;
};
