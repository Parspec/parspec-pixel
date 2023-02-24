import { Box } from '../Box';
import { Button } from '../Button';

export interface ModalFooterProps {
    onAccept?: () => void;
    onReject?: () => void;
    cancelButtonLabel?: string;
    continueButtonLabel?: string;
    isLoading?: boolean;
    helperText?: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ onAccept, onReject, cancelButtonLabel, continueButtonLabel, isLoading, helperText }) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems={'center'}>
            <Box>{helperText}</Box>
            <Box display={'flex'} gap={2}>
                <Button color="secondary" variant="outlined" onClick={onReject}>
                    {cancelButtonLabel}
                </Button>
                <Button color="primary" variant="contained" onClick={onAccept} isLoading={isLoading}>
                    {continueButtonLabel}
                </Button>
            </Box>
        </Box>
    );
};

ModalFooter.defaultProps = {
    cancelButtonLabel: 'Cancel',
    continueButtonLabel: 'Submit',
    onAccept: () => {},
    onReject: () => {},
    isLoading: false,
    helperText: <></>
};
