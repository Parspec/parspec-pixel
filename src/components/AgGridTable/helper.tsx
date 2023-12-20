import { Box } from '../Box';
import { CircularProgress } from '../CircularProgress';
import { BodySmall } from '../Typography';

export const loadingOverlayComponent = (props: any) => {
    return (
        <Box className="ag-loading-center">
            <Box sx={{ opacity: 1 }} aria-label="loading">
                <CircularProgress size="lg" color={'primary'} />
            </Box>
        </Box>
    );
};

export const noRowsOverlayComponent = (props: any) => {
    const { isTableHaveFooter } = props;
    return (
        <Box className={`ag-overlay-no-rows-wrapper ${isTableHaveFooter ? '' : ' overlay-rows-footer'}`}>
            <BodySmall>No records to display</BodySmall>
        </Box>
    );
};
