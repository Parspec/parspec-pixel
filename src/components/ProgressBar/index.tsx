import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { Box } from '../Box';
import { Typography } from '../Typography';

const ProgressBar = (props: CircularProgressProps & { progress: number }) => {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} value={props.progress} />
            <Box display="flex" alignItems="center" justifyContent="center" position="absolute" top={0} bottom={0} left={0} right={0}>
                <Typography.BodySmall>{`${props.progress}%`}</Typography.BodySmall>
            </Box>
        </Box>
    );
};

export default ProgressBar;
