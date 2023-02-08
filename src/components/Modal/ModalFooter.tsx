import { Box } from '../Box';
import { Button } from '../Button';

export interface ModalFooterProps {
    onAccept?: () => void;
    onReject?: () => void;
    cancelButtonLabel?: string;
    continueButtonLabel?: string;
    isLoading?: boolean;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ onAccept, onReject, cancelButtonLabel, continueButtonLabel, isLoading }) => {
    return (
        <Box display="flex" justifyContent="end" gap={2}>
            <Button color="secondary" variant="outlined" onClick={onReject}>
                {cancelButtonLabel}
            </Button>
            <Button color="primary" variant="contained" onClick={onAccept} isLoading={isLoading}>
                {continueButtonLabel}
            </Button>
        </Box>
    );
};

ModalFooter.defaultProps = {
    cancelButtonLabel: 'Cancel',
    continueButtonLabel: 'Submit',
    onAccept: () => {},
    onReject: () => {},
    isLoading: false
};
