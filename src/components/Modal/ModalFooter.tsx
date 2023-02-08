import { Box } from '../Box';
import { Button } from '../Button';

export interface ModalFooterProps {
    onAccept?: () => void;
    onReject?: () => void;
    cancelButtonLabel?: string;
    continueButtonLabel?: string;
    continueButtonType?: 'button' | 'submit' | 'reset';
    cancelButtonType?: 'button' | 'submit' | 'reset';
    isLoading?: boolean;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ onAccept, onReject, cancelButtonLabel, continueButtonLabel, isLoading, continueButtonType, cancelButtonType }) => {
    return (
        <Box display="flex" justifyContent="end" gap={2}>
            <Button color="secondary" variant="outlined" onClick={onReject} type={cancelButtonType}>
                {cancelButtonLabel}
            </Button>
            <Button color="primary" variant="contained" onClick={onAccept} isLoading={isLoading} type={continueButtonType}>
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
    cancelButtonType: 'button',
    continueButtonType: 'button',
    isLoading: false
};
