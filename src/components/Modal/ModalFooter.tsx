import { Box } from '../Box';
import { Button } from '../Button';

export interface ModalFooterProps {
    onAccept?: () => void;
    onReject?: () => void;
    rejectButtonLabel?: string;
    acceptButtonLabel?: string;
    continueButtonColor?: 'primary' | 'secondary' | 'tertiary' | 'error';
    isLoading?: boolean;
    helperText?: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ onAccept, onReject, rejectButtonLabel, acceptButtonLabel, continueButtonColor, isLoading, helperText }) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems={'center'}>
            <Box>{helperText}</Box>
            <Box display={'flex'} gap={2}>
                <Button color="secondary" variant="outlined" onClick={onReject}>
                    {rejectButtonLabel}
                </Button>
                <Button color={continueButtonColor} variant="contained" onClick={onAccept} isLoading={isLoading}>
                    {acceptButtonLabel}
                </Button>
            </Box>
        </Box>
    );
};

ModalFooter.defaultProps = {
    rejectButtonLabel: 'Cancel',
    acceptButtonLabel: 'Submit',
    continueButtonColor: 'primary',
    onAccept: () => {},
    onReject: () => {},
    isLoading: false,
    helperText: <></>
};
