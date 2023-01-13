import { Box } from '../Box';
import { Button } from '../Button';

export interface FooterProps {
    onAccept?: () => void;
    onReject?: () => void;
    cancelButtonLabel?: string;
    continueButtonLabel?: string;
}

export const Footer: React.FC<FooterProps> = ({ onAccept, onReject, cancelButtonLabel, continueButtonLabel }) => {
    return (
        <Box display="flex" justifyContent="end" gap={1}>
            <Button color="secondary" variant="outlined" onClick={onReject}>
                {cancelButtonLabel}
            </Button>
            <Button color="primary" variant="contained" onClick={onAccept}>
                {continueButtonLabel}
            </Button>
        </Box>
    );
};

Footer.defaultProps = {
    cancelButtonLabel: 'Cancel',
    continueButtonLabel: 'Submit',
    onAccept: () => {},
    onReject: () => {}
};
