import { Box } from '../Box';
import { Button } from '../Button';

export interface ModalFooterProps {
    onAccept?: () => void;
    onReject?: () => void;
    cancelButtonLabel?: string;
    continueButtonLabel?: string;
    continueButtonColor?: 'primary' | 'secondary' | 'tertiary' | 'error';
    isLoading?: boolean;
    helperText?: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ onAccept, onReject, cancelButtonLabel, continueButtonLabel, continueButtonColor, isLoading, helperText }) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems={'center'}>
            <Box>{helperText}</Box>
            <Box display={'flex'} gap={2}>
                <Button color="secondary" variant="outlined" onClick={onReject}>
                    {cancelButtonLabel}
                </Button>
                <Button color={continueButtonColor} variant="contained" onClick={onAccept} isLoading={isLoading}>
                    {continueButtonLabel}
                </Button>
            </Box>
        </Box>
    );
};

ModalFooter.defaultProps = {
    cancelButtonLabel: 'Cancel',
    continueButtonLabel: 'Submit',
    continueButtonColor: 'tertiary',
    onAccept: () => {},
    onReject: () => {},
    isLoading: false,
    helperText: <></>
};
